// ==UserScript==
// @name        SAOEW : Support Request
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_accept_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_detail=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_result=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151013]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
var opensocial_owner_id = 708131429;

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    console.log("Support Request page.");

    if ( isExisted("div.ask_btn") ) {
        console.log("Index with some requests.");

        $("div.ask_btn>a")[0].click();
    } else if ( isExisted("div.gra_dark_blue") && isExisted("div.next") ) {
        console.log("Finding requests...");

        var nBestRequest = -1;
        var arrEnemyData = [];
        for (var i = 0; i < $("div.gra_dark_blue td>span>span:first-child").length; i++) {
            var nEnemyLv = parseInt($("div.gra_dark_blue td>span>span:first-child").eq(i).html().match(/Lv\d{1,3}/)[0].replace("Lv", ""));
            var nLeftTime;
            if ( null !== $("div.gra_dark_blue td>span").eq(i).html().match(/\d:\d\d:\d\d/) ) {
                nLeftTime = $("div.gra_dark_blue td>span").eq(i).html().match(/\d:\d\d:\d\d/)[0].split(":");
                nLeftTime = parseInt(nLeftTime[0])*3600 + parseInt(nLeftTime[1])*60 + parseInt(nLeftTime[2]);
            } else {
                nLeftTime = 0;
            }

            arrEnemyData[i] = [nEnemyLv, nLeftTime];
            if ( -1 === nBestRequest ) {
                if ( 500 <= nEnemyLv && 0 < nLeftTime )
                    nBestRequest = i;
            } else {
                if ( arrEnemyData[i][0] < nBestRequest || (arrEnemyData[i][0] === nBestRequest && arrEnemyData[i][1] < nLeftTime) )
                    nBestRequest = i;
            }
        }

        if ( -1 !== nBestRequest ) {
            $("div.gra_dark_blue>div.block_bt_r>a")[nBestRequest].click();
        }
    // ともに闘う!!
    // http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_detail=1&qid=548026506&opensocial_owner_id=*
    } else if ( isExisted("center.padding2.btn01>input") ) {
        console.log("Attend!");

        $("center.padding2.btn01>input")[0].click();
    // さっそく戦う!
    // http://a57528.app.gree-pf.net/sp_web.php
    } else if ( chkURL(/^$/) && isExisted("div#gree-app-container>div#gad_wrapper>div>div.clear_black>center.padding2.btn01>a") ) {
        console.log("Go!");

        $("center.padding2.btn01>a")[0].click();
    // Fighting.
    // http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_index=true&guid=ON&opensocial_owner_id=*
    } else if ( chkURL(/action_home_quest_detail_index/) && isExisted("td.attack") ) {
        console.log("Without waiting. Ignore HP of the enemy.");

        $("td.attack>a")[0].click();
    // After Fighting. (in SAOEW : Auto Event)
    // http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*
    } else if ( isExisted("td.attack") ) {
        // do nothing.
    // Next Fight: Fight Finish or Timeout.
    // The Battle may end when Fighting. (action=home_quest_detail_attack)
    } else if ( isExisted("div.next_bt") ) {
        // $("div.next_bt>a")[0].click();

        // If the fight is Timeout, then it will go to action_home_quest_index and do nothing.
        location.href = "sp_web.php?guid=ON&action_home_quest_accept_index=1&opensocial_owner_id=" + opensocial_owner_id;
    // Skip Battle Result.
    // http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_index=1&opensocial_owner_id=708131429
    } else if ( chkURL(/action(_|=)home_quest_detail_attack/) ) {
        // Form Offical Code.

        connectInterrupt();
    }

    if ( !chkURL(/^$/) || isExisted("div#gree-app-container>div#gad_wrapper>div>div.clear_black>center.padding2.btn01>a") )
       setTimeout(hAfterWaiting, 10*1000);

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});

/**
 * For general use.
 */

function isExisted(strSelector) {
    if (0 !== $(strSelector).length) {
        console.log("Selector Found: " + strSelector);
        return ! DEBUGGING;
    }
    else return false;
}

function chkURL(regexURL) {
    if (null !== location.search.match(regexURL)) {
        console.log("Selector Found: " + regexURL);
        return ! DEBUGGING;
    }
    else return false;
}
