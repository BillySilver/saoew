// ==UserScript==
// @name        SAOEW : Quest Helper
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_mission_index=true&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_mission_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_mission_index=true&guid=ON&allReportFlg=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=mission_ok&step=2&mcd=1030*&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_mission_ok=true&guid=ON&isSwfSkip=1&oneTimeKey=*&mcd=1030*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_mission_index=true&pageDiv=&guid=ON&opensocial_owner_id=*

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [160701]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ( true === DEBUGGING )
        console.log("*** Debugging Mode ***");

    if ( isExisted("div#gad_wrapper > div > div > center.btn01") ) {
        $("center.btn01 > a")[0].click();
    } else if ( isExisted("div#gad_wrapper > div > center > center > ul > li.quest_bar.quest_rera_clear") ) {
        $("li.quest_bar.quest_rera_clear > a")[0].click();
    } else if ( isExisted("div#gad_wrapper > div > center > center > ul > li.quest_bar.quest_clear") ) {
        $("li.quest_bar.quest_clear > a")[0].click();
    } else if ( chkURL(/action(_|=)mission_ok/) /*&& isExisted("div#gad_wrapper > div > center.footer_padding > div.footer_btn")*/ ) {
        $("div.footer_btn > a")[0].click();
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
        console.log("URL Found: " + regexURL);
        return ! DEBUGGING;
    }
    else return false;
}

function rand(inf, sup) {
    var interval = sup - inf + 1;
    return Math.floor((Math.random() * interval) + inf);
}
