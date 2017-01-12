// ==UserScript==
// @name        SAOEW : Partner (star 6) Exchanger
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=192&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=192&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=192&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=193&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=193&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=193&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_present_index=true&guid=ON&type=2&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_present_index=true&guid=ON&type=2&sortType=2&rareKey=60&isEllis=0&isAlgo=0&isPremium=0&isLimitStone=*&start=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_present_index=true&guid=ON&type=2&sortType=3&rareKey=60&isEllis=*&isAlgo=*&isPremium=*&isLimitStone=0&start=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170112-2]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
// var isItemGain  = true;
// var isEquipment = true;

var CSS = {
    mode: "color: crimson; font-weight: bold;",
    info: "color: blueviolet; font-weight: bold;",
    err:  "color: red; font-weight: bold;",
};

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    if ("undefined" === typeof isItemGain)
        isItemGain = false;

    if ("undefined" === typeof isEquipment)
        isEquipment = false;

    if ( true === DEBUGGING )
        console.log("%c*** Debugging Mode ***", CSS.mode);

    // 交換頁面: 選擇欲交換的Partner/Equipment.
    if ( isExisted("div#gad_wrapper > div > div.box_trade01 > center.padding_t2 > form > div#formsort > div.sort_area.clear_white > select") ) {
        // 先確保以「入手順」排序.
        if ( "入手順" !== $("div#formsort > div.sort_area.clear_white > select > option:checked").text() ) {
            $("div#formsort > div.sort_area.clear_white > select > option[value=getdate_des]").prop("selected", true);
            $("div#formsort > div.sort_area.clear_white > div.btn02 > input")[0].click();
        } else {
            var nSelected = 0;
            var nCount    = 0;

            if ( isExisted("div#gad_wrapper > div > center.padding2") ) {
                nCount = nSelected = $("center.padding2 > div").text().match(/\d+/g)[0].toInt();

                if ( 5 === nCount )
                    $("center.padding2 > div.btn01.margin_t2 > a")[0].click();
            }

            var jPartner12 = $("div.box_trade01 > center.padding_t2 > form[name=item_select] > ul.thumb_check_box01 > li.thumb_check_list01 > center");
            var jInput12   = jPartner12.find("div.thumb_check_div01 > div.thumb_check01");
            var jStatus12  = jPartner12.find("div > span > div.partnerStatus1");

            for (var i = 0; i < jPartner12.length; i++) {
                var nNowLv = jStatus12.eq(i).text().match(/\d{1,3}(?=\/\d{1,3})/).toInt();
                // 只選擇1等未練的Partner/Equipment.
                if ( 1 !== nNowLv )
                    continue;

                // 不對已選Partner/Equipment做任何操作.
                if ( 0 === jInput12.eq(i).children("input").length )
                    continue;

                jInput12.eq(i).children("input")[0].click();
                nCount++;
                if ( 5 === nCount )
                    break;
            }

            // 當這回合選擇了一個以上的Partner/Equipment, 就按決定鈕.
            if ( nSelected !== nCount )
                $("div.box_trade01 > center.padding_t2 > form[name=item_select] > div.btn01.margin > input")[0].click();
        }
    // 交換頁面: 確認交換Partner/Equipment.
    } else if ( isExisted("div#gad_wrapper > div > div.gra_dark_blue > div.padding2.padding_all > table.trade_table01") ) {
        $("div.gra_dark_blue > div.btn01 > a")[0].click();
    // 交換頁面: 交換完畢, 回到選擇Partner/Equipment頁面.
    } else if ( isExisted("div#gad_wrapper > div > div.btn01") ) {
        $("div.btn01 > a")[0].click();
    // 禮物盒: 大量領取★6 Partner/Equipment或是Item.
    } else if ( isExisted("div#gad_wrapper > div > form[name=default] > div#formsort > div.sort_area.clear_white > label.sort_box01") ) {
        // 先確保是在領取頁面, 而非一併販售頁面.
        if ( "受け取り" !== $("div.tab2.column2 > div.inner.on > a").text() ) {
            $("div.tab2.column2 > div.inner > a")[0].click();
        // 領取★6 Partner/Equipment模式.
        } else if ( false === isItemGain ) {
            var isChanged = false;
            if ( false === isEquipment) {
                // 先確保是Partner, 不含Ellis, Algo, Premium.
                if ( "ﾊﾟｰﾄﾅｰ" !== $("div.sort_area.clear_white > select:eq(0) > option:checked").text() ) {
                    $("div.sort_area.clear_white > select:eq(0) > option[label=ﾊﾟｰﾄﾅｰ]").prop("selected", true);
                    isChanged = true;
                }

                var jPartnerFilter = $("div.sort_area.clear_white > label.sort_box01");
                for (var i = 0; i < jPartnerFilter.length; i++) {
                    if ( 0 !== jPartnerFilter.eq(i).children("input:checked").length ) {
                        jPartnerFilter[i].click();
                        isChanged = true;
                    }
                }
            } else {
                // 先確保是Equipment, 不含LimitStone.
                if ( "装備品" !== $("div.sort_area.clear_white > select:eq(0) > option:checked").text() ) {
                    $("div.sort_area.clear_white > select:eq(0) > option[label=装備品]").prop("selected", true);
                    isChanged = true;
                }

                if ( 0 !== $("div.sort_area.clear_white > label > input#isLimitStone:checked").length ) {
                    $("div.sort_area.clear_white > label > input#isLimitStone:checked").parent()[0].click();
                    isChanged = true;
                }
            }
            // 先確保是★6.
            if ( "★6以上" !== $("div.sort_area.clear_white > select:eq(1) > option:checked").text() ) {
                $("div.sort_area.clear_white > select:eq(1) > option[label=★6以上]").prop("selected", true);
                isChanged = true;
            }

            if ( true === isChanged ) {
                $("div.sort_area.clear_white > div.btn02 > input")[0].click();
                return;
            }

            var jPartner5 = $("div > center > div.gra_dark_blue");
            var jStar5    = jPartner5.find("span > span > span");
            var jInput5   = jPartner5.find("input.checkbox");
            var nCount    = 0;
            for (var i = 0; i < jPartner5.length; i++) {
                if ( "★6" === jStar5.eq(i).text() ) {
                    jInput5.eq(i).prop("checked", true);
                    nCount++;
                } else {
                    jInput5.eq(i).prop("checked", false);
                }
            }

            // 當有一個以上符合的Partner/Equipment, 且可以選取(未達Partner/Equipment上限), 就領出來.
            if ( 0 !== jPartner5.find("input.checkbox:checked").length ) {
                $("div > center.padding2.btn01 > input")[0].click();
            // 沒有符合的Partner/Equipment(而非達到Partner/Equipment上限), 則到下一頁.
            } else if ( 0 === nCount ) {
                $("section.pager4 > div.next > a")[0].click();
            }
        // 領取Item模式.
        } else {
            // 先確保是全Rare度 Item.
            var isChanged = false;
            if ( "ｱｲﾃﾑ" !== $("div.sort_area.clear_white > select:eq(0) > option:checked").text() ) {
                $("div.sort_area.clear_white > select:eq(0) > option[label=ｱｲﾃﾑ]").prop("selected", true);
                isChanged = true;
            }

            if ( "全レア度" !== $("div.sort_area.clear_white > select:eq(1) > option:checked").text() ) {
                $("div.sort_area.clear_white > select:eq(1) > option[label=全レア度]").prop("selected", true);
                isChanged = true;
            }

            if ( true === isChanged ) {
                $("div.sort_area.clear_white > div.btn02 > input")[0].click();
                return;
            }

            // 沒有需要檢查的, 直接領出來.
            $("div > center.padding2.btn01 > input")[0].click();
        }
    }
});

/**
 * For general use.
 */

function isExisted(strSelector) {
    if (0 !== $(strSelector).length) {
        console.log("Selector Found: %c%s", CSS.info, strSelector);
        return true;
    }
    else return false;
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

HTMLElement.prototype.CLICK = HTMLElement.prototype.click;
HTMLElement.prototype.click = function() {
    console.log("Click:", this);
    (function(self) {
        if ( 0 !== $(self).children("img").length )
            return $(self).children("img:eq(0)");
        if ( "input" === self.tagName.toLowerCase() )
            return $(self).wrap("<div>").parent();

        return $(self);
    })(this).css({
        "border": "6px dashed yellow",
        "margin": "-6px",
        "z-index": "999"
    });
    if ( false === DEBUGGING )
        this.CLICK();
};
