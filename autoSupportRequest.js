// ==UserScript==
// @name        SAOEW : Support Request
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_accept_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_detail=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151007]
// @grant       none
// ==/UserScript==

$(document).ready(function() {
    console.log("Supprot Request page.");

    if ( 0 !== $("div.ask_btn").length ) {
        console.log("Index with some requests.");

        $("div.ask_btn>a")[0].click();
    } else if ( 0 !== $("div.gra_dark_blue").length && 0 !== $("div.next").length ) {
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
    } else if ( 0 !== $("center.padding2.btn01>input").length ) {
        console.log("Attend!");

        $("center.padding2.btn01>input")[0].click();
    // さっそく戦う!
    // http://a57528.app.gree-pf.net/sp_web.php
    } else if ( 0 !== $("center.padding2.btn01>a").length ) {
        console.log("Go!");

        $("center.padding2.btn01>a")[0].click();
    // First Battle.
    // http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_index=true&guid=ON&opensocial_owner_id=*
    } else if ( 0 !== $("td.attack").length ) {
        console.log("Without waiting. Ignore HP of the enemy.");

        $("td.attack>a")[0].click();
    }
    // After Battle. (in SAOEW : Auto Event)
    // http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*

    setTimeout(hAfterWaiting, 10*1000);

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});
