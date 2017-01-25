// ==UserScript==
// @name        SAOEW : Auto Change Party Set
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_info_formation_setlist2=true&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_formation_setlist2=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_info_formation_setlist2&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170123]
// @grant       none
// ==/UserScript==

var nTrainingSet = 6;

const CSS = {
    mode: "color: crimson; font-weight: bold;",
    info: "color: blueviolet; font-weight: bold;",
    err:  "color: red; font-weight: bold;",
};

$(document).ready(function() {
    if ( false === isExisted("div#gad_wrapper > div > div.margin_t2 > div > form > select[name=deckCode]") )
        return;

    if ( chkURL(/^$/) ) {
        // Go back to Formation Page without form data sending.
        hAfterWaiting();
    }

    var nSelectedSet = $("select[name=deckCode] > option:selected").text().match(/\d+/)[0].toInt();
    console.log(nSelectedSet);
    if ( nTrainingSet !== nSelectedSet ) {
        setTimeout(function() {
            $("select[name=deckCode] > option").eq(nTrainingSet - 1).prop("selected", true);
            $("select[name=deckCode]").next("div.btn02").children("input")[0].click();
        }, 5*1000);
    }

    setTimeout(hAfterWaiting, 60*1000);

    function hAfterWaiting() {
        console.log("Time Out!");
        $("li.others.pattern2.btn > a")[0].click();
        $("div.gl_btn.formation > a")[0].click();
    }
});

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

String.prototype.toInt = function() {
    return parseInt(this);
};
