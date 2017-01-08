// ==UserScript==
// @name        SAOEW : Auto Duel
// @namespace   saoew
// @description
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_detail=1&guid=ON&listType=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_detail=1&guid=ON&step=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_duel_detail&guid=ON&step=2*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_duel_detail&guid=ON&step=3*

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170108]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;

/**
 * Here is the attr of your right-hand weapon.
 * 0: slash
 * 1: speed
 * 2: hit
 * @type {Integer}
 */
var Attr = {
    slash: 0,
    speed: 1,
    hit:   2
};
var int2Attr = ["slash", "speed", "hit"];

var nYourAttr = Attr.slash;
var nYourATK  = 20000;
var nKOsUnder = 700;

var CSS = {
    mode: "color: crimson; font-weight: bold;",
    info: "color: blueviolet; font-weight: bold;",
    err:  "color: red; font-weight: bold;",
};

var jEnemy = $("div#gad_wrapper > div > div.padding_b > div.gra_dark_blue > center > .gra_dark_blue");

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ( true === DEBUGGING )
        console.log("%c*** Debugging Mode ***", CSS.mode);

    var nLeftSecond = 60;
    var isWinningStreak = (0 !== $("div#gad_wrapper > div > div.padding_b > div.padding > span").length);

    // Check it is on action_home_duel_index.
    if ( 0 !== jEnemy.length ) {
        var currentBP = $("div#gad_wrapper > div > div.padding_b > div.gra_dark_blue > div.padding").text().match(/\d\//)[0].replace("/", "").toInt();

        // Check if you wins consecutively, or BP is full.
        if (
            (isWinningStreak && 0 < currentBP) ||
            (6 === currentBP)
        ) {
            action_home_duel_index();
        }

        if ( 0 === currentBP )
            nLeftSecond = $("div#gad_wrapper > div > div.padding_b > div.gra_dark_blue > div.padding").text().match(/\d{2}:\d{2}:\d{2}/)[0].split(":")[2].toInt();
    // For CG skip.
    } else if ( "undefined" !== typeof Loading ) {
        setTimeout(connectInterrupt, 500);
    // Otherwise, it is on action_home_duel_detail.
    } else {
        action_home_duel_detail();
    }

    // Waiting in 1 min.
    if ( false === DEBUGGING ) {
        setTimeout(hAfterWaiting, nLeftSecond*1000);
    }

    function hAfterWaiting() {
        console.log("Time Out!");
        // $("div.padding2.btn02 > a")[0].click();
        location.reload();
    }
});

function action_home_duel_index() {
    var jEnemyAttr = jEnemy.find("td > span > div.item_title > span > span");
    var jEnemyData = jEnemy.find("td > span:first-of-type");

    /**
     * 0: Lv (ignored)
     * 1: ATK
     * 2: KOs
     * 3: Partner (ignored)
     * 4: Attr
     * @type {Array}
     */
    var arrData = [];
    var bestIndex;
    for (var i = 0; i < jEnemyData.length; ++i) {
        arrData[i] = jEnemyData.eq(i).text().match(/\d{1,5}/g);
        for (var j = 0; j < arrData[i].length; ++j)
            arrData[i][j] = arrData[i][j].toInt();
        arrData[i].push( iconAttr2Int(jEnemyAttr.eq(i).attr("class")) );

        var nRevisedATK = revisedATK(arrData[i][1], arrData[i][5]);
        if ( undefined === bestIndex ) {
            if (
                (nRevisedATK <= nYourATK * 0.4) ||
                (nRevisedATK <= nYourATK * 0.5 && arrData[i][2] <= nKOsUnder)
            ) {
                bestIndex = i;
            }
        } else {
            if ( isRightEnemyBest(arrData[bestIndex], arrData[i]) )
                bestIndex = i;
        }
    }

    if ( undefined !== bestIndex ) {
        // No Link => BP is not enough => Go waiting.
        if ( 0 === jEnemy.eq(bestIndex).find("a").length ) {
            return;
        // Click the best enemy.
        } else {
            console.log( "No.", (bestIndex+1), "is the best." );
            console.log( "Attribute:", int2Attr[ arrData[bestIndex][5] ] );
            console.log( "ATK:", arrData[bestIndex][1] );
            console.log( "Your Attribute:", int2Attr[ nYourAttr ] );
            console.log( "Revised ATK:", revisedATK(arrData[bestIndex][1], arrData[bestIndex][5]) );
            console.log( "Expected ATK:", nYourATK*0.4 );
            console.log( "KOs:", arrData[bestIndex][2], "-- may under", nKOsUnder );

            jEnemy.eq(bestIndex).find("a")[0].click();
        }
    } else {
        // Find another enemies.
        setTimeout(function() {
            $("div.padding2.btn02 > a")[0].click();
            // location.reload();
        }, 1*1000);
    }

    /**
     * functions
     */

    function iconAttr2Int(iconAttr) {
        var nAttr;
        switch (iconAttr) {
            case "icon_slash":
            nAttr = Attr.slash;
            break;

            case "icon_speed":
            nAttr = Attr.speed;
            break;

            case "icon_hit":
            nAttr = Attr.hit;
            break;

            default:
            nAttr = nYourAttr;
            break;

        }
        return nAttr;
    }

    function revisedATK(nATK, nAttr) {
        /**
         * 0: Same Attrs or the enemy has no weapon
         * 1: You Win
         * 2: You Lose
         * @type {[Integer]}
         */
        var nRelation = (nYourAttr - nAttr + 3) % 3;
        if ( 0 === nRelation )
            return nATK;
        if ( 1 === nRelation )
            return nATK / 1.5;
        if ( 2 === nRelation )
            return nATK * 1.5;
    }

    function isRightEnemyBest(enemyDataA, enemyDataB) {
        var nRevisedATKA = revisedATK(enemyDataA[1], enemyDataA[5]);
        var nRevisedATKB = revisedATK(enemyDataB[1], enemyDataB[5]);

        if ( nRevisedATKA <= nYourATK * 0.4 || nRevisedATKB <= nYourATK * 0.4 )
            return nRevisedATKA > nRevisedATKB;

        return nRevisedATKA > nRevisedATKB && enemyDataB[2] <= nKOsUnder;
    }
}

function action_home_duel_detail() {
    // Choose one.
    if ( undefined !== $("div#gad_wrapper > div > div.duel_bg.padding2 > center.duel_bt1 > a")[0] )
        $("center.duel_bt1 > a")[0].click();
    else if ( undefined !== $("div#gad_wrapper > div > div.duel_bg.padding2 > center.padding2 > div.duel_bt2 > a")[0] )
        $("div.duel_bt2 > a")[0].click();
    else if ( undefined !== $("div#gad_wrapper > div > div.duel_bg.padding2 > div > div.padding > center > div.btn04")[0] )
        $("div.btn04 > a")[0].click();
}

/**
 * For general use.
 */

String.prototype.toInt = function() {
    return parseInt(this);
};

HTMLElement.prototype.CLICK = HTMLElement.prototype.click;
HTMLElement.prototype.click = function() {
    (function(self) {
        if ( 0 !== $(self).children("img").length )
            return $(self).children("img:eq(0)");

        return $(self);
    })(this).css({
        "border": "6px dashed yellow",
        "margin": "-6px"
    });
    console.log("Click:", this);
    if ( false === DEBUGGING )
        this.CLICK();
};
