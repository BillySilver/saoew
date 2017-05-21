// ==UserScript==
// @name        SAOEW : Partner Exchanger
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=192&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=192&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=192&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=193&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=193&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=193&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=512&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=512&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=512&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=254&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=254&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=254&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_list=true&guid=ON&process=1&tic=256&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_check=true&guid=ON&process=2&tic=256&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_tradeshop_end=true&guid=ON&tic=256&key=*-trade-*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_present_index=true&guid=ON&type=2&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_present_index=true&guid=ON&type=2&sortType=2&rareKey=60&isEllis=0&isAlgo=0&isPremium=0&isLimitStone=*&start=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_present_index=true&guid=ON&type=2&sortType=3&rareKey=60&isEllis=*&isAlgo=*&isPremium=*&isLimitStone=0&start=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_info_present_trade=true&presentTable=3&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_info_present_trade&guid=ON&c_key=*&step=2&presentTable=3

// @include     http://a57528.app.gree-pf.net/sp_web.php

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170521]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
var isStubTrade = true;
var isItemGain  = true;
// var isEquipment = true;

const CSS = {
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

    if ("undefined" === typeof isStubTrade)
        isStubTrade = false;

    if ( true === DEBUGGING )
        console.log("%c*** Debugging Mode ***", CSS.mode);
    init_mutex();

    // 交換頁面: 選擇欲交換的Partner/Equipment.
    if ( isExisted("div#gad_wrapper > div > div.box_trade01 > center.padding_t2 > form > div#formsort > div.sort_area.clear_white > select") ) {
        // 先確保以「入手順」排序.
        if ( "入手順" !== $("div#formsort > div.sort_area.clear_white > select > option:checked").text() ) {
            $("div#formsort > div.sort_area.clear_white > select > option[value=getdate_des]").prop("selected", true);
            $("div#formsort > div.sort_area.clear_white > div.btn02 > input")[0].click();
        } else {
            var nNeeded   = $("div.detale_frame").text().match(/x\d+/)[0].replace("x", "").toInt();
            var nSelected = 0;
            var nCount    = 0;

            if ( isExisted("div#gad_wrapper > div > center.padding2") ) {
                nCount = nSelected = $("center.padding2 > div").text().match(/\d+/g)[0].toInt();

                if ( nNeeded === nCount ) {
                    $("center.padding2 > div.btn01.margin_t2 > a")[0].click();
                    return;
                }
            }

            var jPartner12 = $("div.box_trade01 > center.padding_t2 > form[name=item_select] > ul.thumb_check_box01 > li.thumb_check_list01 > center");
            var jInput12   = jPartner12.find("div.thumb_check_div01 > div.thumb_check01");
            var jStatus12  = jPartner12.find("div > span > div.partnerStatus1");

            for (var i = 0; i < jPartner12.length; i++) {
                var nNowLv = jStatus12.eq(i).text().match(/\d{1,3}(?=\/\d{1,3})/)[0].toInt();
                // 只選擇1等未練的Partner/Equipment.
                if ( 1 !== nNowLv )
                    continue;

                // 不對已選Partner/Equipment做任何操作.
                if ( 0 === jInput12.eq(i).children("input").length )
                    continue;

                jInput12.eq(i).children("input")[0].click();
                nCount++;
                if ( nNeeded === nCount )
                    break;
            }

            // 當這回合選擇了一個以上的Partner/Equipment, 就按決定鈕.
            if ( nSelected < nCount )
                $("div.box_trade01 > center.padding_t2 > form[name=item_select] > div.btn01.margin > input")[0].click();
            else
                audioAlert();
        }
    // 交換頁面: 確認交換Partner/Equipment.
    } else if ( isExisted("div#gad_wrapper > div > div.gra_dark_blue > div.padding2.padding_all > table.trade_table01") ) {
        $("div.gra_dark_blue > div.btn01 > a")[0].click();
    // 交換頁面: 交換完畢, 回到選擇Partner/Equipment頁面.
    } else if ( isExisted("div#gad_wrapper > div > div.btn01") ) {
        $("div.btn01 > a")[0].click();
    // 禮物盒: 大量領取/交換 ★7 Partner/Equipment 或是領取 Item.
    } else if ( isExisted("div#gad_wrapper > div > form[name=default] > div#formsort > div.sort_area.clear_white > label.sort_box01") ) {
        // 先確保是在交換頁面, 而非領取、一併販售頁面.
        if ( true === isStubTrade && "半券交換" !== $("div.tab2.column2 > div.inner.on > a").text() ) {
            $("div.tab2.column2 > div.inner > a")[1].click();
        // 先確保是在領取頁面, 而非交換、一併販售頁面.
        } else if ( false === isStubTrade && "受け取り" !== $("div.tab2.column2 > div.inner.on > a").text() ) {
            $("div.tab2.column2 > div.inner > a")[0].click();
        // 領取/交換 ★7 Partner/Equipment模式.
        } else if ( false === isItemGain || true === isStubTrade ) {
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
            // 先確保是 ★7.
            if ( null === $("div.sort_area.clear_white > select:eq(1) > option:checked").text().match("★7") ) {
                $("div.sort_area.clear_white > select:eq(1) > option[label^=★7]").prop("selected", true);
                isChanged = true;
            }

            // 選擇篩選器完畢, 進行檢索.
            if ( true === isChanged ) {
                $("div.sort_area.clear_white > div.btn02 > input")[0].click();
                return;
            }

            // 領取.
            if ( false === isStubTrade ) {
                var jPartner5 = $("div > center > div.gra_dark_blue");
                var jStar5    = jPartner5.find("span > span > span");
                var jInput5   = jPartner5.find("input.checkbox");
                var nCount    = 0;
                for (var i = 0; i < jPartner5.length; i++) {
                    if ( "★7" === jStar5.eq(i).text() ) {
                        jInput5.eq(i).prop("checked", true);
                        nCount++;
                    } else {
                        jInput5.eq(i).prop("checked", false);
                    }
                }

                // 當有一個以上符合的Partner/Equipment, 且可以選取(未達Partner/Equipment上限), 就領出來.
                if ( 0 !== jPartner5.find("input.checkbox:checked").length ) {
                    $("center.clear_black > div.btn01 > input")[0].click();
                    // 沒有符合的Partner/Equipment(而非達到Partner/Equipment上限), 則到下一頁.
                } else if ( 0 === nCount && isExisted("section.pager4 > div.next > a") ) {
                    $("section.pager4 > div.next > a")[0].click();
                } else {
                    audioAlert();
                }
            // 交換.
            } else {
                // 沒有需要檢查的, 直接交換.
                $("input.checkbox.margin_t2").prop("checked", true);
                $("center.padding_t.padding_b2.btn01 > input")[0].click();
            }
        // 領取Item模式.
        } else if ( true === isItemGain ) {
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
            $("center.clear_black > div.btn01 > input")[0].click();
        }
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

function audioAlert() {
    var audio = new Audio("http://www.sunnyneo.com/attictimer/ghostly.ogg");
    audio.play();
    console.log("%cAlert! Something is wrong...", CSS.err);
}

String.prototype.toInt = function() {
    return parseInt(this);
};

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
