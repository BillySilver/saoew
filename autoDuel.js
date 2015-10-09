// ==UserScript==
// @name        SAOEW : Auto Duel
// @namespace   saoew
// @description
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_detail=1&guid=ON&listType=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_duel_detail&guid=ON&step=3*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151006]
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
var nYourATK  = 15000;
var nKOsUnder = 700;

var jEnemy = $("center>.gra_dark_blue");

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ( true === DEBUGGING )
        console.log("*** Debugging Mode ***");

    var nLeftSecond = 60;
    var isWinningStreak = (0 !== $("div.padding_b>div.padding>span").length);

    // Check it is on action_home_duel_index.
    if ( 0 !== jEnemy.length ) {
        var currentBP = parseInt($("div.gra_dark_blue>div.padding").html().match(/\d\//)[0].replace("/", ""));

        // Check if you wins consecutively, or BP is full.
        if (
            (isWinningStreak && 0 < currentBP) ||
            (6 === currentBP) ||
            DEBUGGING
        ) {
            action_home_duel_index();
        }

        if ( 0 === currentBP )
            nLeftSecond = parseInt($("div.gra_dark_blue>div.padding").html().match(/\d{2}:\d{2}:\d{2}/)[0].split(":")[2]);
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
        // $(".padding2.btn02>a")[0].click();
        location.reload();
    }
});

function action_home_duel_index() {
    var jEnemyAttr = jEnemy.find(".item_title>span");
    var jEnemyData = jEnemy.find("td>span:first-of-type");

    var regexIntData = new RegExp(/&nbsp;\d{1,5}/g);

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
        arrData[i] = jEnemyData.eq(i).html().match(regexIntData);
        for (var j = 0; j < arrData[i].length; ++j)
            arrData[i][j] = parseInt(arrData[i][j].replace("&nbsp;", ""));

        arrData[i].push( iconAttr2Int(jEnemyAttr.eq(i).find("span").attr("class")) );

        var nRevisedATK = revisedATK(arrData[i][1], arrData[i][4]);
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
            console.log( (bestIndex+1) + "-th is the best." );
            console.log( "Attribute: " + int2Attr[ arrData[bestIndex][4] ] );
            console.log( "ATK: " + arrData[bestIndex][1] );
            console.log( "Your Attribute: " + int2Attr[ nYourAttr ] );
            console.log( "Revised ATK: " + revisedATK(arrData[bestIndex][1], arrData[bestIndex][4]) );
            console.log( "Expected ATK: " + nYourATK*0.4 );
            console.log( "KOs: " + arrData[bestIndex][2] + " (may under " + nKOsUnder + ")" );

            if ( false === DEBUGGING ) {
                jEnemy.eq(bestIndex).find("a")[0].click();
            }
        }
    } else {
        // Find another enemies.
        setTimeout(function() {
            $(".padding2.btn02>a")[0].click();
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
        var nRevisedATKA = revisedATK(enemyDataA[1], enemyDataA[4]);
        var nRevisedATKB = revisedATK(enemyDataB[1], enemyDataB[4]);

        if ( nRevisedATKA <= nYourATK * 0.4 || nRevisedATKB <= nYourATK * 0.4 )
            return nRevisedATKA > nRevisedATKB;

        return nRevisedATKA > nRevisedATKB && enemyDataB[2] <= nKOsUnder;
    }
}

function action_home_duel_detail() {
    // Choose one.
    if ( undefined !== $(".duel_bt1>a")[0] )
       $(".duel_bt1>a")[0].click();
    else if ( undefined !== $(".duel_bt2>a")[0] )
       $(".duel_bt2>a")[0].click();
}
