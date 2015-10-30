// ==UserScript==
// @name        SAOEW : Auto Event
// @namespace   saoew
// @description Exploring, Simulation, Crusade, Conquest, Collect, Fishing
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_map&map_code=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_map=1&map_code=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_do=true&guid=ON&mc=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_do=true&mc=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_do&guid=ON&mc=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_encount&qc=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_encount&guid=ON&qc=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_encount=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_map&guid=ON*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_index&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_index_do&guid=ON&btn=1&pt=*
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
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_item_use=true&guid=ON&questFlg=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_info_item_use&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_160_getbox&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_168_getbox&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_169_user_index=true&step=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_169_user_index&step=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_169_autorecoveryitem=true&guid=ON&*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151023]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
var opensocial_owner_id = 708131429;

var sHeal       = 2;
var isSleepMode = true;
var isLimitHeal = true;
var enemyMaxHP  = 1000000;

//*
var isMobWhitelist = true;
var mobWhitelist = [
    "ｼｰﾌﾟﾘﾝｾｽ",
    "ﾌﾗｯｼｭ･ｲｰﾀｰ",
    "ﾏﾌｫｰｸ",
    "湖のﾇｼ",
//     "湖のｵｵﾇｼ",

    "ｸﾗｽﾄ･ﾊｰﾐｯﾄ"
];
//*/

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;
    if ("undefined" === typeof isMobWhitelist)
        isMobWhitelist = false;

    console.log("It is a SAOEW event page.");

    // ｴﾙｰｶの実を探してきますね！ - 釣魚.
    if ( isExisted("div#gad_wrapper>div>div>div.navi_area.clear>a") ) {
        $("div#gad_wrapper>div>div>div.navi_area.clear>a")[0].click();
        return;
    }

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

        // AP若太少則去HealPoison頁面掛網或喝HealPoison.
        if ( 10 > yourNowAP ) {
           // $("div.btn02.padding2>a")[0].click();
           location.href = "sp_web.php?action_home_info_item_use=true&guid=ON&questFlg=1&opensocial_owner_id=" + opensocial_owner_id;
           return;
        }
    }

    console.log("Finding some condition....");
    // Event Entrance - 探索.
    // 和釣魚相衝. 探索活動時修復.
    if ( false && isExisted("div.event_btn01") )
        action_home_quest_map();
    // Fighting.
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
    // Event Entrance - 釣魚.
    else if ( isExisted("div.map_back>table.area_select_btn>tbody>tr>td>div.event_btn_base") )
        action_home_quest_map8();
    // [CG] Explore: reload2TrueMob - 探索.
    else if ( chkURL(/action(_|=)home_quest_do/) )
        action_home_quest_do();
    // [CG] Encount a Monster.
    else if ( chkURL(/action(_|=)home_quest_encount/) )
        action_home_quest_encount();
    // Skip Battle Result.
    else if ( chkURL(/action=home_quest_detail_attack/) )
        action_home_quest_detail_attack();
    // Next Fight: Fight Finish or Timeout.
    else if ( isExisted("div.next_bt") )
        action_home_quest_detail_result();
    // Retreat Interface *2.
    // 條件變複雜是因為HealPoison頁面有隱藏的按鈕(和撤退按鈕相同).
    else if ( isExisted("div[style='text-align:center;font-size:14px']>div>table input.icon_06.submit_clear") )
        action_home_quest_delete_index();
    else if ( isExisted("div.padding_t2>a") )
        action_home_quest_delete_ok();
    // 探索到寶箱 - 探索.
    else if ( isExisted("span.event_btn_next") )
        action_event_160_getbox();
    // 釣到普通魚或道具 - 釣魚.
    else if (isExisted("div#gad_wrapper>div>div>div.btn01.padding2") )
        action_event_169_user_index();
    // Skip Dialogue.
    // else if ( chkURL(/action=event_/) || chkURL(/guid=ON&action_home_quest_map=1&map_code=/) || chkURL(/action_home_quest_do=true/) )
    else if ( "undefined" !== typeof releaseWait && "undefined" !== typeof Loading )
        action_event();
    // /sp_web.php?action_event_(1\d{2})_map=true&guid=ON&clkBnrCde=100/
    // 攻略 -> 階層選擇(for all event).
    else if ( isExisted("a[href^='sp_web.php?action_event_1'][href*='_map=true&guid=ON&clkBnrCde=100']") )
        action_home_quest_index();
    // 是否在HealPoison頁面. 依條件決定要掛網或是喝HealPoison.
    // else if ( isExisted("center.footer_padding>p.footer_btn>a") ) {
    else if ( isExisted("div.clear>center>table div.item_title>span:even") ) {
        console.log("It may be in HealPoison page.");

        strAP     = $("div.padding2").html().match(/\d+\/\d+/)[0];
        yourNowAP = parseInt(strAP.match(/\d+/)[0]);
        yourMaxAP = parseInt(strAP.match(/\/\d+/)[0].match(/\d+/)[0]);
        console.log("Your Current AP is: " + yourNowAP + " / " + yourMaxAP);

        // AP已滿則回到攻略頁面.
        if ( yourNowAP === yourMaxAP ) {
            $("center.footer_padding>p.footer_btn>a")[0].click();
        } else {
            setTimeout(function() {
                var nLimitHeal = (null !== $("div.clear>center>table div.item_title>span:even").eq(0).html().match("限定")) ? 1 : 0;

                if ( true === isLimitHeal && 1 === nLimitHeal ) {
                    $("div.clear>center>center.block_bt_r>a.heal")[0].click();
                    action_home_quest_delete_index();
                } else if ( false === isSleepMode ) {
                    var nHeal = sHeal - 1 + nLimitHeal;
                    console.log( "Using: " + $("div.clear>center>table div.item_title>span:even").eq(nHeal).html() );

                    $("div.clear>center>center.block_bt_r>a.heal")[nHeal].click();
                    action_home_quest_delete_index();
                }
            }, 1*1000);
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

    // Waiting in 4 min.
    if ( false === DEBUGGING ) {
        setTimeout(hAfterWaiting, 4*60*1000);
    }

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});

// Event Entrance - 探索.
function action_home_quest_map() {
    // 隠しｴﾘｱ.
    if ( isExisted("div.event_btn02") )
        $("div.event_btn02>a")[0].click();
    else
        $("div.event_btn01>a")[0].click();
}

// Fighting.
function action_home_quest_map2() {
    // Since "HP" is loaded slowly.
    console.log("Just waiting for 2 seconds...");

    setTimeout(function() {
        // 因應釣魚而設立白名單功能.
        var isInMobWhitelist = (function() {
            if ( true === isMobWhitelist ) {
                console.log("MobWhitelist is active.");

                console.log("Mob Name: ");
                var strMobName = $("div.layer_base.quest_wait>div.boss_st>table>tbody>tr>td>span").html().match(/[^\s]+&nbsp;\[Lv/)[0].replace("&nbsp;[Lv", "");
                console.log("\t" + strMobName);

                if ( -1 === mobWhitelist.indexOf(strMobName) ) {
                    // retrete.
                    $("p.btn04>a")[0].click();
                    return false;
                } else {
                    console.log("It is in MobWhitelist.");
                    return true;
                }
            } else {
                return false;
            }
        })();

        console.log("HP of the enemy is: ");
        var enemyNowHP = parseInt($("div#hp_text").html().match(/\d*/)[0]);
        console.log("\t" + enemyNowHP);

        if ( false === isInMobWhitelist && enemyMaxHP < enemyNowHP ) {
            // retrete.
            $("p.btn04>a")[0].click();
        // Check if AP is enough.
        } else if ( isExisted("input[name=isConfirmedUseItem]") ) {
            console.log("AP is not enough.");

            var nLimitHeal = (null !== $("select[name=itemCdOffset]>option").eq(0).html().match("限定")) ? 1 : 0;

            if ( true === isLimitHeal && 1 === nLimitHeal ) {
                $("input[name=isConfirmedUseItem]").prop("checked", true);
                $("select[name=itemCdOffset]>option").eq(0).prop("selected", true);
                $("td.attack>a")[0].click();
            } else if ( false === isSleepMode ) {
                var nHeal = sHeal - 1 + nLimitHeal;

                $("input[name=isConfirmedUseItem]").prop("checked", true);
                $("select[name=itemCdOffset]>option").eq(nHeal).prop("selected", true);
                $("td.attack>a")[0].click();
            } else {
                // retrete.
                $("p.btn04>a")[0].click();
            }
        } else {
            $("td.attack>a")[0].click();
        }
    }, 2*1000);
}

// Event Entrance - 討伐.
function action_home_quest_map3() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    // 5: Collect.
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
    // 攻略時, 劇情之MISSION2要打10場Easy與Normal.
    // difficulty = rand(1, 3);
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
    var difficulty = 3;
    $("div.btn_sprite_event_map07.btn_img_event_map0" + difficulty + ">a")[0].click();
}

// Event Entrance - 釣魚.
function action_home_quest_map8() {
    // 1: Easy.
    // 2: Hard.
    var difficulty = 2;

    // 檢查魚群是否到來.
    // 若未到來, href="javascript:void(0);".
    if ( null === $("div.map_back>table.area_select_btn>tbody>tr>td>div>a").eq(4).attr("href").match(/javascript/) ) {
        $("div.map_back>table.area_select_btn>tbody>tr>td>div>a")[4].click();
    } else {
        // ｴﾙｰｶの実.
        var nErukaFruit = parseInt($("div.map_back>table.area_select_btn>tbody>tr>td>div>span:odd").html().match(/\d*/)[0]);

        // 存果實.
//         if ( 0 < nErukaFruit )
        if ( false )
            $("div.map_back>table.area_select_btn>tbody>tr>td>div>a")[ 2*(difficulty-1) + 1 ].click();
        else
            $("div.map_back>table.area_select_btn>tbody>tr>td>div>a")[ 2*(difficulty-1) ].click();
    }
}

// [CG] Explore: reload2TrueMob - 探索.
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
    $("div.next_bt>a")[0].click();
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

// retreat. (and confirm in HealPoison page)
function action_home_quest_delete_index() {
    $("input.icon_06.submit_clear")[0].click();
}

// retreat.
function action_home_quest_delete_ok() {
    $("div.padding_t2>a")[0].click();
}

// 探索到寶箱 - 探索.
function action_event_160_getbox() {
    $("span.event_btn_next")[0].click();
}

// 釣到普通魚或道具 - 釣魚.
function action_event_169_user_index() {
    $("div#gad_wrapper>div>div>div.btn01.padding2>a")[0].click();
}

// Skip Dialogue.
function action_event() {
    // Form Offical Code.

    Loading.start( 12 ) ;
    location.href = mahoujin_args.callbackUrl + getSkipFlg() ;

    waitFlg = true ;
    timeForm = setTimeout ( "releaseWait()", 10000 ) ;
}

// 攻略 -> 階層選擇(for all event).
function action_home_quest_index() {
    $("a[href^='sp_web.php?action_event_1'][href*='_map=true&guid=ON&clkBnrCde=100']")[0].click();
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

function rand(inf, sup) {
    var interval = sup - inf + 1;
    return Math.floor((Math.random() * interval) + inf);
}
