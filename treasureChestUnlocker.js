// ==UserScript==
// @name        SAOEW : Treasure Chest Unlocker
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&step=1&guid=ON&gc=*&gacha_hs=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0&skip=070406601_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0&skip=0_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0&skip=070406602_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&step=1&guid=ON&div=2&gc=*&gacha_hs=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=2&skip=0_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&div=0
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&div=2&guid=ON&gc=*&gacha_hs=*&p_div=248
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&div=2&step=1&guid=ON&gc=*&gacha_hs=*&opensocial_owner_id=*

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170123]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;

const CSS = {
    mode: "color: crimson; font-weight: bold;",
    info: "color: blueviolet; font-weight: bold;",
    err:  "color: red; font-weight: bold;",
};

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ( true === DEBUGGING )
        console.log("%c*** Debugging Mode ***", CSS.mode);
    init_mutex();

    if ( isExisted("div#gad_wrapper > div > center > div.ga_list > div.list2 > center.padding.btn01") ) {
        var jBtnUnlock = $("div.ga_list > div.list2 > center.padding.btn01");

        if (4 === jBtnUnlock.length)
            // 宝箱.
            var nArrOrder = [3, 1, 2, 0];
        else
            // 金の宝箱.
            var nArrOrder = [1, 0];

        setTimeout(function() {
            for (var i = 0; i < nArrOrder.length; i++) {
                // if "center.padding.btn01" has the className "on", then the center is unavailable.
                if ( null !== jBtnUnlock.eq( nArrOrder[i] ).attr("class").match(/on/) )
                    continue;

                jBtnUnlock.children("a")[ nArrOrder[i] ].click();
                break;
            }
        }, 1.5*1000);
    // Skip Dialogue.
    } else if ( "undefined" !== typeof Loading ) {
        action_event();
    }
});

// Skip Dialogue or Battle Result.
function action_event() {
    console.log(action_event, "is excuting...");

    if ( undefined === getSkipFlg )
        var getSkipFlg = function() { return ""; };

    // Form Official Code.

    Loading.start( 12 ) ;
    location.href = mahoujin_args.callbackUrl + getSkipFlg() ;

    waitFlg = true ;
    timeForm = setTimeout ( "releaseWait()", 10000 ) ;
}

/**
 * For general use.
 */

function isExisted(strSelector, strSelectorChildren) {
    if (undefined !== strSelectorChildren) {
        if (0 !== $(strSelector).children(strSelectorChildren).length) {
            console.log("Selector Found: %c%s%c -> %c%s", CSS.info, strSelector, null, CSS.info, strSelectorChildren);
            return true;
        }
    } else if (0 !== $(strSelector).length) {
        console.log("Selector Found: %c%s", CSS.info, strSelector);
        return true;
    }

    return false;
}

function chkURL(regexURL) {
    if (null !== location.search.match(regexURL)) {
        console.log("URL Found:", regexURL);
        return true;
    }
    else return false;
}

function rand(inf, sup) {
    var interval = sup - inf + 1;
    return Math.floor((Math.random() * interval) + inf);
}

function init_mutex() {
HTMLElement.prototype.CLICK = HTMLElement.prototype.click;
HTMLElement.prototype.click = function() {
    console.log("Click:", this);
    $(this).css({
        "outline": "6px dashed yellow",
        "z-index": "999"
    });
    if ( false === DEBUGGING )
        this.CLICK();
};
}
