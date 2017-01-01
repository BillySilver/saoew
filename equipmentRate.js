// ==UserScript==
// @name        SAOEW : Equipment Rate
// @namespace   saoew
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?(guid=ON&)?action_home_info_item_equipment_setlist=true(&step=updateSetEquip)?(&guid=ON)?(&tab=[12])?(&deckCode=[1-8])?(&itemDivCode=10\d&subDiv=[1-3]&itemCode=\d+&eid=\d+)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?action_home_info_item_list=true&guid=ON(&rareKey=\d+)?(&sortType=[a-z]+(_des)?)?(&equipDiv=(0|10\d))?(&isLimitStone=[01])?(&skillType=[01])?(&itemCat=1)?(&start=\d+)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?action_home_info_item_house_storage_list=true&guid=ON(&rareKey=\d+)?(&sortType=[a-z]+(_des)?)?(&equipDiv=(0|10\d))?(&isLimitStone=[01])?(&skillType=(0|\d{6}))?&itemCat=1(&p_div=[1-3])?(&div=0)?(&start=\d+)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?action_home_info_item_equipment_setchange=true&guid=ON(&eid=)?&deckCode=[1-8](&itemDivCode=10\d)?&subDiv=[1-3](&sortKey=[a-z]+(_des)?)?(&rareRank=)?(&rareKey=0)?(&sortKey=[a-z]+(_des)?)?(&skillType=[01])?(&inKey=1)?(&start=\d+)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?action_home_info_item_equipment_partner_setchange=true&guid=ON&charaID=\d+(&itemDivCode=10\d)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?guid=ON&action_home_info_item_equipment_partner_setchange=1&charaID=\d+&div=(10\d)?&itemDivCode=(10\d)?&sort_attr=(&start=\d+)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?(guid=ON&)?action_home_enhance_index=(1|true)(&p_div=2)?(&beid=\d+)?(&guid=ON)?(&step=chg)?(&div=)?(&beid=)?(&p_div=3)?(&rareKey=\d+)?(&sortType=[a-z]+(_des)?)?(&equipDiv=(0|10\d))?(&skillType=\d+)?(&start=\d+)?&opensocial_owner_id=\d+/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?action=home_enhance_index&p_div=&guid=ON&beid=\d+&exp=1&uplevel=1&skip=070100001%20_sp/
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?(guid=ON&)?action_home_enhance_equiplimit_index=(1|true)(&guid=ON)?&step=chg(&isLimitStone=)?(&sortType=[a-z]+(_des)?)?(&beid=)?(&isLimitItem=)?(&start=\d+)?&opensocial_owner_id=\d+/

// @include     http://a57528.app.gree-pf.net/sp_web.php

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170101]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;

var Buff = [];
Buff[7] = {
    LvPerLimit: 7,
    "104": {
        part: "Right",
        Lv: 13,
        Limit: 120,
        Opt: 3988
    },
    "105": {
        part: "Left",
        Lv: 8,
        Limit: 130,
        Opt: 3398
    },
    "101": {
        part: "Hat",
        Lv: 8,
        Limit: 130,
        Opt: 2640
    },
    "102": {
        part: "Upper",
        Lv: 9,
        Limit: 120,
        Opt: 3019
    },
    "103": {
        part: "Lower",
        Lv: 8,
        Limit: 130,
        Opt: 2691
    },
    "106": {
        part: "Foot",
        Lv: 8,
        Limit: 130,
        Opt: 2755
    },
    "107": {
        part: "Accessory",
        Lv: 7,
        Limit: 100,
        Opt: 2108
    }
};
Buff[8] = {
    LvPerLimit: 8,
    "104": {
        part: "Right",
        Lv: 14,
        Limit: 160,
        Opt: 6614
    },
    "105": {
        part: "Left",
        Lv: 9,
        Limit: 180,
        Opt: 5624
    },
    "101": {
        part: "Hat",
        Lv: 9,
        Limit: 180,
        Opt: 5099
    },
    "102": {
        part: "Upper",
        Lv: 10,
        Limit: 160,
        Opt: 5696
    },
    "103": {
        part: "Lower",
        Lv: 9,
        Limit: "180",
        Opt: 5228
    },
    "106": {
        part: "Foot",
        Lv: 9,
        Limit: 180,
        Opt: 5313
    },
    "107": {
        part: "Accessory",
        Lv: 8,
        Limit: "140"
    }
};

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ( true === DEBUGGING )
        console.log("*** Debugging Mode ***");

    // http://a57528.app.gree-pf.net/sp_web.php
    var isEquipmentPage = false;
    if ("" === location.search) {
        if ( isExisted("div#gad_wrapper > div > div.clear > center > table.padding") ) {
            isEquipmentPage = true;
        } else if ( isExisted("div#gad_wrapper > div > div > div.clear > form#allCheck > center > table.padding > tbody") ) {
            isEquipmentPage = true;
        // Equipment Changing list.
        } else if ( $("div#gad_wrapper > div > div > div.gra_dark_blue > table.padding") ) {
            isEquipmentPage = true;
        } else {
            return;
        }
    }

    console.log("There may be equipment.");

    var jEquipment = $("table.padding > tbody");
    /*
    if ( isExisted("div > center > table.padding > tbody") ) {
        jEquipment = $("div > center > table.padding > tbody");
    } else if ( isExisted("div.clear > form#allCheck > center > table.padding > tbody") ) {
        // action_home_info_item_house_storage.
        jEquipment = $("div.clear > form#allCheck > center > table.padding > tbody");
    } else if ( isExisted("div.gra_dark_blue > table.padding > tbody") ) {
        jEquipment = $("div.gra_dark_blue > table.padding > tbody");
    }
    /*/

    if ( undefined !== jEquipment ) {
        for (var i = 0; i < jEquipment.length; i++) {
            if ( 4 > jEquipment.eq(i).find("tr").length )
                continue;
            if ( 0 === jEquipment.eq(i).find("tr:eq(0) > td:eq(1) > div.item_title").length )
                continue;

            var nEquipDiv = jEquipment.eq(i).find("tr:eq(0) > td:eq(0) > span > img").attr("src").match(/\/item\/i10\d/)[0].match(/\d+/)[0].toInt();
            var nStar     = jEquipment.eq(i).find("tr:eq(0) > td:eq(1) > div.item_title > span:last").text().match(/\d/)[0].toInt();
            if ( 7 > nStar )
                continue;
            var nATK      = jEquipment.eq(i).find("tr:eq(1) > td:eq(0) > span").text().match(/\d+/)[0].toInt();
            var nDEF      = jEquipment.eq(i).find("tr:eq(2) > td:eq(0) > span").text().match(/\d+/)[0].toInt();
            var nSPD      = jEquipment.eq(i).find("tr:eq(3) > td:eq(0) > span").text().match(/\d+/)[0].toInt();
            var nNowLv    = jEquipment.eq(i).find("tr:eq(1) > td:eq(1) > span").text().match(/\d+/g)[0].toInt();
            var nMaxLv    = jEquipment.eq(i).find("tr:eq(1) > td:eq(1) > span").text().match(/\d+/g)[1].toInt();
            var nLimit    = (function() {
                if ( 0 === jEquipment.eq(i).find("tr:eq(0) > td:eq(0) > div").length )
                    return 0;
                return jEquipment.eq(i).find("tr:eq(0) > td:eq(0) > div > img").attr("src").match(/\d{2}(?=\.gif)/)[0].toInt();
            })();

            var nPara = nATK + nDEF + nSPD;
            var nRate = (function(nPara) {
                var nFinalLv = nMaxLv + (5 - nLimit)*Buff[nStar].LvPerLimit;
                nLimit += (5 === nLimit);

                return nPara + ((6 - nLimit) * Buff[nStar][nEquipDiv].Limit) + ((nFinalLv - nNowLv) * Buff[nStar][nEquipDiv].Lv);
            })(nPara);
            var fOpt  = (function() {
                if (undefined !== Buff[nStar][nEquipDiv].Opt)
                    return parseInt((nRate / Buff[nStar][nEquipDiv].Opt) * 1000) / 1000;
                else
                    return "";
            })();

            jEquipment.eq(i).find("tr:eq(0) > td:eq(1) > div.item_title").append(
                $("<font>").css(
                    "font-weight",
                    ("string" !== typeof Buff[nStar][nEquipDiv].Limit && fOpt <= 1) ? 900 : 500
                ).css(
                    "color",
                    jEquipment.eq(i).find("tr:eq(0) > td:eq(1) > div.item_title > span:last").css("color")
                ).text("Rate: " + nRate + " [" + fOpt + "] (" + nPara + ")")
            );
        }
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

String.prototype.toInt = function() {
    return parseInt(this);
};
