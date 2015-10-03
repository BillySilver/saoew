// ==UserScript==
// @name        SAOEW : Auto Duel
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_detail=1&guid=ON&listType=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_duel_detail&guid=ON&step=3*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [150625]
// @description
// @grant       none
// ==/UserScript==

/**
 * Here is the attr of your right-hand weapon.
 * 0: slash
 * 1: speed
 * 2: hit
 * @type {Integer}
 */
var nYourAttr = 1;
var nYourATK  = 14000;
var nKOsUnder = 700;

var enemy = $("center>.gra_dark_blue");

$(document).ready(function() {
    var isWinningStreak = (0 !== $(".padding_b>.padding>span").length);

    // Check it is on action_home_duel_index.
    if ( 0 !== enemy.length ) {
        var currentBP = parseInt($("div.gra_dark_blue>div.padding").html().match(/\d\//)[0].replace("/", ""));

        // Check if you wins consecutively, or BP is full.
        if (isWinningStreak || 6 === currentBP) {
            action_home_duel_index();
        }
    // Otherwise, it is on action_home_duel_detail.
    } else {
        action_home_duel_detail();
    }

    // Waiting in 1 min.
    setTimeout(hAfterWaiting, 1*60*1000);

    function hAfterWaiting() {
        // alert("Time Out!");
        $(".padding2.btn02>a")[0].click();
    }
});

function action_home_duel_index() {
    var enemyAttr = enemy.find(".item_title>span");
    var enemyData = enemy.find("td>span:first-of-type");

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
    var bestIndex = undefined;
    for (var i = 0; i < enemyData.length; ++i) {
        arrData[i] = enemyData.eq(i).html().match(regexIntData);
        for (var j = 0; j < arrData[i].length; ++j)
            arrData[i][j] = arrData[i][j].replace("&nbsp;", "");

        arrData[i].push( iconAttr2Int(enemyAttr.eq(i).find("span").attr("class")) );

        var nRevisedATK = revisedATK(arrData[i][1], arrData[i][4]);
        if ( undefined === bestIndex ) {
            if (
                nRevisedATK <= nYourATK * 0.4 ||
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
        if ( 0 === enemy.eq(bestIndex).find("a").length )
            return;
        // Click the best enemy.
        else
            enemy.eq(bestIndex).find("a")[0].click();
    } else {
        // Find another enemies.
        $(".padding2.btn02>a")[0].click();
    }

    /**
     * functions
     */

    function iconAttr2Int(iconAttr) {
        var nAttr;
        switch (iconAttr) {
            case "icon_slash":
            nAttr = 0;
            break;

            case "icon_speed":
            nAttr = 1;
            break;

            case "icon_hit":
            nAttr = 2;
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
