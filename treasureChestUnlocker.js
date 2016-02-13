// ==UserScript==
// @name        SAOEW : Treasure Chest Unlocker
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&step=1&guid=ON&gc=*&gacha_hs=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0&skip=070406601_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0&skip=0_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0&skip=070406602_sp

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [160213]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ( true === DEBUGGING )
        console.log("*** Debugging Mode ***");

    if ( isExisted("div#gad_wrapper > div > center > div.ga_list > div.list2 > center.padding.btn01")) {
        var nArrOrder = [3, 1, 2, 0];
        var jBtnUnlock = $("div.ga_list > div.list2 > center.padding.btn01");
        for (var i = 0; i < nArrOrder.length; i++) {
            // if "center.padding.btn01" has the className "on", then the center is unavailable.
            if ( null !== jBtnUnlock.eq( nArrOrder[i] ).attr("class").match(/on/) )
                continue;

            jBtnUnlock.children("a")[ nArrOrder[i] ].click();
            break;
        }
    // Skip Dialogue.
    } else if ( /*"undefined" !== typeof releaseWait && */"undefined" !== typeof Loading ) {
        action_event();
    }
});

// Skip Dialogue or Battle Result.
function action_event() {
    // Form Offical Code.

    Loading.start( 12 ) ;
    location.href = mahoujin_args.callbackUrl + getSkipFlg() ;

    waitFlg = true ;
    timeForm = setTimeout ( "releaseWait()", 10000 ) ;
}

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
