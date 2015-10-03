// ==UserScript==
// @name        SAOEW : Auto Event
// @namespace   saoew
// @description Explore 討伐
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_map&map_code=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_map=1&map_code=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_do=true&guid=ON&mc=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_do=true&mc=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_encount&qc=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_encount&guid=ON&qc=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_encount=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_map&guid=ON*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_index&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_index_do&guid=ON&btn=1&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_game&tu=0&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_detail_game=1&tu=0&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_result=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_select=1&guid=ON&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_select&guid=ON&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_select=1&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_delete_index=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_delete_ok=true&guid=ON&isDailyQuest=
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action=event_*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_160_getbox&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_item_use=true&guid=ON&questFlg=1&opensocial_owner_id=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151003]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
var opensocial_owner_id = 708131429;

var sHeal      = 2;
var sleepMode  = true;
var enemyMaxHP = 1000000;

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;

    /*
    var isSleeping = GM_getValue("Sleeping", false);
    alert(isSleeping);
    //*/

    console.log("It is a SAOEW event page.");
    // 若有顯示AP則確認.
    var strAP = (function() {
        var jSpan = $("table.padding td>span");

        for (var i = 0; i < jSpan.length; i++) {
            if (null !== jSpan.eq(i).html().match(/AP\d+\/\d+/))
                return jSpan.eq(i).html().match(/AP\d+\/\d+/)[0];
        }
        return null;
    })();
    var yourNowAP;
    var yourMaxAP;
    if (null !== strAP) {
        console.log("It may be the Action_Home_Quest_Index page.");

        yourNowAP = parseInt(strAP.match(/\d+/)[0]);
        yourMaxAP = parseInt(strAP.match(/\/\d+/)[0].match(/\d+/)[0]);
        console.log("Your Current AP is: " + yourNowAP + " / " + yourMaxAP);

        // AP若太少則去AP頁面掛網.
        if ( 10 > yourNowAP ) {
           // $("div.btn02.padding2>a")[0].click();
           location.href = "sp_web.php?action_home_info_item_use=true&guid=ON&questFlg=1&opensocial_owner_id=" + opensocial_owner_id;
           return;
        }
    }

    console.log("Finding some condition....");
    if ( isExisted(".event_btn01") )
        action_home_quest_map();
    else if ( isExisted("td.attack") )
        action_home_quest_map2();
    // Event Entrance - 討伐.
    else if ( isExisted(".btn_sprite_event06") )
        action_home_quest_map3();
    // Event Entrance - 攻略.
    else if ( isExisted("span.easy_btn") )
        action_home_quest_map4();
    // Event Entrance - 攻略.
    else if ( isExisted("table.phase_select01") )
        action_home_quest_map5();
    // Event Entrance - 收集(未bouns time).
    else if ( isExisted("div.btn_sprite_event_map07.btn_img_event_bonus") )
        action_home_quest_map6();
    // Event Entrance - 收集(bouns time), 育成.
    else if ( isExisted("div.btn_sprite_event_map07.btn_img_event_map04") )
        action_home_quest_map7();
    // [CG] Explore: reload2TrueMob.
    else if ( chkURL(/action_home_quest_do/) )
        action_home_quest_do();
    // [CG] Encount a Monster.
    else if ( chkURL(/action(_|=)home_quest_encount/) )
        action_home_quest_encount();
    // Skip Battle Result.
    else if ( chkURL(/action=home_quest_detail_attack/) )
        action_home_quest_detail_attack();
    // Next Fight: Fight Finish or Timeout.
    else if ( isExisted(".next_bt") )
        action_home_quest_detail_result();
    // Retreat Interface *2.
    // 條件變複雜是因為回復AP頁面有隱藏的按鈕.
    else if ( isExisted("div[style='text-align:center;font-size:14px']>div>table input.icon_06.submit_clear") )
        action_home_quest_delete_index();
    else if ( isExisted("div.padding_t2>a") )
        action_home_quest_delete_ok();
    // 探索到寶箱.
    else if ( isExisted("span.event_btn_next") )
        action_event_160_getbox();
    // Skip Dialogue.
//     else if ( chkURL(/action=event_/) || chkURL(/guid=ON&action_home_quest_map=1&map_code=/) || chkURL(/action_home_quest_do=true/) )
    else if ( "undefined" !== typeof releaseWait && "undefined" !== typeof Loading )
        action_event();
    // 攻略 - 階層選取(探索).
    else if ( isExisted("a[href^='sp_web.php?action_event_160_map=true&guid=ON&clkBnrCde=100']") )
        action_home_quest_index();
    // 攻略 - 階層選取(育成).
    else if ( isExisted("a[href^='sp_web.php?action_event_161_map=true&guid=ON&clkBnrCde=100']") )
        action_home_quest_index2();
    // 攻略 - 階層選取(討伐).
    else if ( isExisted("a[href^='sp_web.php?action_event_162_map=true&guid=ON&clkBnrCde=100']") )
        action_home_quest_index3();
    // 攻略 - 階層選取(攻略).
    else if ( isExisted("a[href^='sp_web.php?action_event_163_map=true&guid=ON&clkBnrCde=100']") )
        action_home_quest_index4();
    // 是否在AP頁面. 目前只會掛網不會喝AP.
    else if ( isExisted("center.footer_padding>p.footer_btn>a") ) {
        console.log("It may be the AP page.");

        strAP     = $("div.padding2").html().match(/\d+\/\d+/)[0];
        yourNowAP = parseInt(strAP.match(/\d+/)[0]);
        yourMaxAP = parseInt(strAP.match(/\/\d+/)[0].match(/\d+/)[0]);
        console.log("Your Current AP is: " + yourNowAP + " / " + yourMaxAP);

        // AP已滿則回到攻略頁面.
        if ( yourNowAP === yourMaxAP ) {
            $("center.footer_padding>p.footer_btn>a")[0].click();
        }
    } else {
        console.log("There is no condition.");
        if ( true === DEBUGGING )
            console.log("*** Debugging Mode ***");

        // May be in Battle Interface.
        // checkTrueMob.
        // The Battle Button will appear after Page loaded. Hence we set a timeout function to create a little delay.
        setTimeout(function() {
            if ( isExisted("img#btn_battle") )
                action_home_quest_select();
        }, 0*1000);
    }

    // Waiting in 3 min.
    setTimeout(hAfterWaiting, 3*60*1000);

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});

// Event Entrance.
function action_home_quest_map() {
    $(".event_btn01>a")[0].click();
}

// Fighting.
function action_home_quest_map2() {
    // Since "HP" is loaded slowly.
    console.log("Just waiting for 2 seconds...");

    setTimeout(function() {
        console.log("HP of the enemy is: ");
        var enemyHP = parseInt($("div#hp_text").html().match(/\d*/)[0]);
        console.log(enemyHP);

        // Check if AP is enough.
        if ( isExisted("input[name=isConfirmedUseItem]") ) {
            console.log("AP is not enough.");
            if ( false === sleepMode ) {
                $("input[name=isConfirmedUseItem]").prop("checked", true);
                $("select[name=itemCdOffset]>option").eq(sHeal - 1).prop("selected", true);
                $(".attack>a")[0].click();
            } else {
                // GM_setValue("Sleeping", true);
                // retrete.
                $("p.btn04>a")[0].click();
            }
        } else if ( enemyMaxHP < enemyHP ) {
            // retrete.
            $("p.btn04>a")[0].click();
        } else {
            $(".attack>a")[0].click();

        }
    }, 2*1000);
}

// Event Entrance - 討伐.
function action_home_quest_map3() {
    // 01: Easy.
    // 02: Normal.
    // 03: Hard.
    // 04: Very Hard.
    // 05: Collect.
    var difficulty = 3;
    $(".btn_img_event0" + difficulty + ">a")[0].click();
}

// Event Entrance - 攻略.
function action_home_quest_map4() {
    $("span.easy_btn")[0].click();
}

// Event Entrance - 攻略.
function action_home_quest_map5() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    var difficulty = 3;
    $("table.phase_select01 td>a")[difficulty - 1].click();
}

// Event Entrance - 收集(未bouns time).
function action_home_quest_map6() {
    $("div.btn_img_event_bonus>a")[0].click();
}

// Event Entrance - 收集(bouns time), 育成.
function action_home_quest_map7() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    // 5: Collect.
    var difficulty = 2;
    $("div.btn_sprite_event_map07.btn_img_event_map0" + difficulty + ">a")[0].click();
}

// [CG] Explore: reload2TrueMob.
function action_home_quest_do() {
    location.reload();
}

// [CG] Encount a Monster.
function action_home_quest_encount() {
    // Form Offical Code.

    // connectInterrupt();

    // Sometimes, BOSS appears with strange CG.
    action_event();
}

// Skip Battle Result.
function action_home_quest_detail_attack() {
    // Form Offical Code.

    connectInterrupt();
}

// Next Fight: Fight Finish or Timeout.
function action_home_quest_detail_result() {
    $(".next_bt>a")[0].click();
}

// checkTrueMob.
function action_home_quest_select() {
    // Form Offical Code.

    var contactType;
    var PAGE_AREA       = 1;
    var PAGE_BATTLE     = 2;
    var PAGE_AGAIN      = 3;

    contactType = PAGE_BATTLE;
    switch (contactType) {
        case    PAGE_AREA:
            mahoujinUtil.locationInterval(mahoujin_args.callbackUrl, 2500 * 4);
            break;
        case    PAGE_BATTLE:
            mahoujinUtil.locationInterval(mahoujin_args.callbackUrl2, 2500 * 4);
            break;
        case    PAGE_AGAIN:
            mahoujinUtil.locationInterval(mahoujin_args.callbackUrl3, 2500 * 4);
            break;
    }
}

// retreat.
function action_home_quest_delete_index() {
    $("input.icon_06.submit_clear")[0].click();
}

// retreat.
function action_home_quest_delete_ok() {
    $("div.padding_t2>a")[0].click();
}

// 探索到寶箱.
function action_event_160_getbox() {
    $("span.event_btn_next")[0].click();
}

// Skip Dialogue.
function action_event() {
    // Form Offical Code.

    Loading.start( 12 ) ;
    location.href = mahoujin_args.callbackUrl + getSkipFlg() ;

    waitFlg = true ;
    timeForm = setTimeout ( "releaseWait()", 10000 ) ;
}

// 攻略 - 階層選取(探索).
function action_home_quest_index() {
    $("a[href^='sp_web.php?action_event_160_map=true&guid=ON&clkBnrCde=100']")[0].click();
}

// 攻略 - 階層選取(育成).
function action_home_quest_index2() {
    $("a[href^='sp_web.php?action_event_161_map=true&guid=ON&clkBnrCde=100']")[0].click();
}

// 攻略 - 階層選取(討伐).
function action_home_quest_index3() {
    $("a[href^='sp_web.php?action_event_162_map=true&guid=ON&clkBnrCde=100']")[0].click();
}

// 攻略 - 階層選取(攻略).
function action_home_quest_index4() {
    $("a[href^='sp_web.php?action_event_163_map=true&guid=ON&clkBnrCde=100']")[0].click();
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
        console.log("Selector Found: " + regexURL);
        return ! DEBUGGING;
    }
    else return false;
}
