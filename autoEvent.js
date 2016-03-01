// ==UserScript==
// @name        SAOEW : Auto Event
// @namespace   saoew
// @description Exploring, Simulation, Crusade, Conquest, Collect, Fishing, Duel
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
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_index&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_index_do&guid=ON&btn=1&pt=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_game&tu=0&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_detail_game=1&tu=*
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
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&step=1&guid=ON&gc=*&gacha_hs=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_169_user_index&step=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&skip=0_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_169_autorecoveryitem=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_autorecoveryitem=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_179_user_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_map=1&map_code=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_select=1&guid=ON&pt=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_index=true&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_select=1&pt=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_invite_help=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_invite_index=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_invite_index=1&sort=3&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_detail_index=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_game&guid=ON&step=2&battleSkillCheck=true&battleSkill=*&tu=0&skip=0_sp

// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [160301]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
var opensocial_owner_id = 708131429;

var sHeal         = 2;
var isSleepMode   = true;
var isLimitHeal   = true;
var isDuelEvent   = false;
var nEnemyHPUnder = 2000000;
var isErukaFruit  = false;
var nFavorSets   = [1, 2, 3];

/*
var isMobWhitelist = true;
var mobFishing = [
    "ﾌﾗｯｼｭ･ｲｰﾀｰ",
    "ｳﾞｧﾝﾄｩｰｸﾗｰｹ",
    "ﾂｲﾝｼｰﾎｰｽ",
    "湖のﾇｼ",
    "湖のｵｵﾇｼ"
];

var mobWhitelist = mobFishing;
//*/

/**
 * Here is the attr of your right-hand weapon.
 * 0: slash
 * 1: speed
 * 2: hit
 * @type {Integer}
 */
var Attr = {
    slash: 0,
    speed: 1,
    hit:   2
};
var int2Attr = ["slash", "speed", "hit"];

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;
    if ("undefined" === typeof isMobWhitelist)
        isMobWhitelist = false;

    // http://a57528.app.gree-pf.net/sp_web.php
    if ("" === location.search) {
        // It will be invalid except that it is in invite page.
        if ( "勧誘中" === $("div#gad_wrapper > div > center.clear_black > div.padding > span").html() ) {
            var isInvitePage = true;
        } else if ( "undefined" !== typeof mahoujin_args && null !== mahoujin_args.callbackUrl.match(/home_quest_detail_game/) ) {
            var isBattleSkill = true;
        } else {
            return;
        }
    }

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
    // 探索至Endless Area時按鈕會換成兩個.
    if ( isExisted("div#gad_wrapper>div>div.padding_t2>div.event_btn01") || isExisted("div#gad_wrapper>div>div.padding_t2>table>tbody>tr>td>div.btn_sprite_event03") )
        action_home_quest_map();
    // Fighting.
    else if ( isExisted("div#gad_wrapper > div > table > tbody > tr > td.attack") )
        action_home_quest_map2();
    // Event Entrance - 討伐.
    // 待強化.
    else if ( isExisted(".btn_sprite_event06") )
        action_home_quest_map3();
    // Event Entrance - 攻略.
    else if ( isExisted("div#gad_wrapper>div>div.back_step1>center>table>tbody>tr>td>a>span.easy_btn") || isExisted("div#gad_wrapper>div>div.back_step2>center>table>tbody>tr>td>a>span.easy_btn") )
        action_home_quest_map4();
    // Event Entrance - 攻略.
    else if ( isExisted("div#gad_wrapper>div>div.back_step3>center>table.phase_select01") )
        action_home_quest_map5();
    // Event Entrance - 收集(未bouns time).
    // 待強化.
    else if ( isExisted("div.btn_sprite_event_map07.btn_img_event_bonus") )
        action_home_quest_map6();
    // Event Entrance - 決鬥(一般探索 -> 申請畫面).
    else if ( isExisted("div#gad_wrapper>div>div>div.bg_event_map01>div.btn06") && true === isDuelEvent )
        action_home_quest_map9();
    // Event Entrance - 收集(bouns time), 育成*, 決鬥(一般探索).
    else if ( isExisted("div#gad_wrapper>div>div>div.bg_event_map01>center>div>div.btn_sprite_event_map07.btn_img_event_map04") )
        action_home_quest_map7();
    // Event Entrance - 釣魚.
    // else if ( isExisted("div.map_back>table.area_select_btn>tbody>tr>td>div.event_btn_base") )
    // 原本只有ﾗﾗｸの実可選, 後來多了ﾃﾞｺｲｴﾋﾞ, ﾀﾞﾝｺﾞ, ﾍﾞｲﾄｶｹﾞ, 且不再分難度(透過其他方式切換).
    else if ( isExisted("div#gad_wrapper > div > div > div.map_back > table.area_select_btn01 > tbody > tr > td > div.btn_sprite_event04.padding_r02.padding_l02.font_s") )
        action_home_quest_map8();
    // Event Entrance - 決鬥(已進入申請畫面).
    // http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&opensocial_owner_id=*
    else if ( isExisted("div#gad_wrapper>div>div>div.padding_t05>table>tbody>tr>td>div.btn_sprite_event_duel01") )
        action_home_quest_map10();
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
    else if ( isExisted("div#gad_wrapper>div>div>div>center>div.next_bt") )
        action_home_quest_detail_result();
    // Retreat Interface.
    // 條件變複雜是因為HealPoison頁面有隱藏的按鈕(和撤退按鈕相同).
    else if ( isExisted("div#gad_wrapper>div>div>table>tbody>tr>td>span>form>input.icon_base.icon_06.submit_clear") )
        action_home_quest_delete_index();
    // 探索到寶箱 - 探索.
    // 待強化.
    else if ( isExisted("span.event_btn_next") )
        action_event_160_getbox();
    // 釣到普通魚或道具 - 釣魚.
    else if ( isExisted("div#gad_wrapper>div>div>div.btn01.padding2") )
        action_event_169_user_index();
    // Skip Dialogue.
    // else if ( chkURL(/action=event_/) || chkURL(/guid=ON&action_home_quest_map=1&map_code=/) || chkURL(/action_home_quest_do=true/) )
    else if ( "undefined" !== typeof releaseWait && "undefined" !== typeof Loading )
        action_event();
    // 攻略 -> 階層選擇(for all events).
    // 現與 action_home_quest_delete_ok() 整合, 保留原樣不須強化.
    // /sp_web.php?action_event_(1\d{2})_map=true&guid=ON&clkBnrCde=100/
    else if ( isExisted("a[href^='sp_web.php?action_event_1'][href*='_map=true&guid=ON&clkBnrCde=100']") )
        action_home_quest_index();
    // 攻略 -> 階層選擇(no any event).
    // 沒Event就攻略.
    else if ( isExisted("div#gad_wrapper>div>center>div>ul.bt_block>li.qu_list_tra") )
        action_home_quest_index2();
    // If there is not event after retreated, then will back to floor selection.
    else if ( isExisted("div#gad_wrapper>div>div.footer_padding>center>p.footer_btn") )
        action_home_quest_delete_ok();
    // 是否在HealPoison頁面. 依條件決定要掛網或是喝HealPoison.
    else if ( isExisted("div#gad_wrapper>div>div.clear>center>table>tbody>tr>td>span>div.item_title>span:even") ) {
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
    // Sought help from someone.
    } else if ( chkURL(/action_home_quest_invite_help/) ) {
        // さらに仲間を呼ぶ.
        $("p.footer_btn > a")[1].click();
    // Invition page. (for some powerful enemy in Whitelist)
    } else if ( chkURL(/action_home_quest_invite_index/) || "undefined" !== typeof isInvitePage ) {
        // If not in "ｵｽｽﾒ", then choose it.
        if ( null === $("div.inner").eq(1).attr("class").match("on") ) {
            $("div.inner > a")[1].click();
        } else {
            if ( isExisted("form > center.padding2.btn01") ) {
                $("form > center.padding2.btn01 > input")[0].click();
            } else {
                // Invition finished, 戦闘待機に戻る.
                $("p.block_bt_l > a")[0].click();
            }
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

    // Waiting in 0.5 ~ 6 min.
    if ( false === DEBUGGING ) {
        if ( chkURL(/action(_|=)home_quest_detail_game/) )
            setTimeout(hAfterWaiting, 6*60*1000);
        else
            setTimeout(hAfterWaiting, 0.2*60*1000);
    }

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});

// Event Entrance - 探索.
function action_home_quest_map() {
    // 1: Normal.
    // 2: Hard.
    var difficulty = 1;

    // 隠しｴﾘｱ.
    if ( isExisted("div.event_btn02") )
        $("div.event_btn02>a")[0].click();
    else if ( isExisted("div.btn_sprite_event03") )
        $("div.btn_sprite_event03>a")[difficulty - 1].click();
    else
        $("div.event_btn01>a")[0].click();
}

// Fighting.
function action_home_quest_map2() {
    // Since "HP" is loaded slowly.
    var nDelaySecond = 3;
    console.log("Just waiting for " + nDelaySecond + " seconds...");

    setTimeout(function() {
        // 因應釣魚而設立白名單功能.
        var isInMobWhitelist = (function() {
            if ( true === isMobWhitelist ) {
                console.log("MobWhitelist is active.");

                console.log("Mob Name: ");
                var strMobName = $("div.layer_base.quest_wait > div.boss_st > table > tbody > tr > td > span").html().match(/[^\s]+&nbsp;\[Lv/)[0].replace("&nbsp;[Lv", "");
                console.log("\t" + strMobName);

                if ( -1 === mobWhitelist.indexOf(strMobName) ) {
                    // retrete.
                    $("p.btn04 > a")[0].click();
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
        var strArrHP    = $("div#hp_text").html().match(/\d+/g);
        var nEnemyNowHP = parseInt(strArrHP[0]);
        var nEnemyMaxHP = parseInt(strArrHP[1]);
        console.log("\t" + nEnemyNowHP + " / " + nEnemyMaxHP);

        var nNowBC = (function() {
            var digit = 0;
            for (var i = 0; i < $("span.pos_abs.pos_now > img").length; i++)
                digit = digit * 10 + parseInt($("span.pos_abs.pos_now > img").eq(i).attr("src").match(/\d+(?=.png)/)[0]);
            return digit;
        })();
        if ( 4 <= nNowBC && nEnemyHPUnder/2 <= nEnemyNowHP ) {
            $("div#flgUseSkill")[0].click();
            $("select#battleSkill > option:eq(1)").prop("selected", true);
        }

        if ( false === isInMobWhitelist && nEnemyHPUnder < nEnemyNowHP ) {
            // retrete.
            $("p.btn04 > a")[0].click();
        // If a powerful enemy is in Whitelist, but you cannot output damage more than 15% of its MaxHP at first attack.
        // First, you may seek help from someone.
        } else if ( true === isInMobWhitelist && isExisted("td.help_me") && nEnemyNowHP / nEnemyMaxHP > 0.85 ) {
            $("td.help_me > a")[0].click();
        // After seeking help, you just need to wait to it been beated.
        } else if ( true === isInMobWhitelist && false === isExisted("td.help_me") && isExisted("td.friend") ) {
            // Do nothing.
            console.log("After seeking help, just waiting...");
        // Check if AP is enough.
        } else if ( isExisted("input[name=isConfirmedUseItem]") ) {
            console.log("AP is not enough.");

            var nLimitHeal = (null !== $("select[name=itemCdOffset] > option").eq(0).html().match("限定")) ? 1 : 0;

            if ( true === isLimitHeal && 1 === nLimitHeal ) {
                if ( chkWeaponAndPartner() )
                    useHealPoison(0);
            } else if ( false === isSleepMode ) {
                if ( chkWeaponAndPartner() )
                    useHealPoison(sHeal - 1 + nLimitHeal);
            } else {
                // retrete.
                $("p.btn04 > a")[0].click();
            }
        } else {
            if ( chkWeaponAndPartner() )
                $("td.attack > div > form > div.margin_t2 > input.quest_heal_btn")[0].click();
        }

        /**
         * functions
         */

        function useHealPoison(nHeal) {
            $("input[name=isConfirmedUseItem]").prop("checked", true);
            $("select[name=itemCdOffset] > option").eq(nHeal).prop("selected", true);
            $("td.attack > div > form > div.margin_t2 > input.quest_heal_btn")[0].click();
        }

        /**
         * Check the weak point of Enemy, and Change Equipment and Partners.
         * @return {bool} whether need to change.
         */
        function chkWeaponAndPartner() {
            var nFavorSet;
            for (var i = 0; i < nFavorSets.length; i++) {
                if ( isExisted("div.weak_point > span[class=" + strSetValue2Icon(nFavorSets[i]) + "]") ) {
                    nFavorSet = nFavorSets[i];
                    break;
                }
            }

            var nWeapon = parseInt($("select.autoSubmitSelect > option:checked").val());

            if ( nFavorSet !== nWeapon ) {
                $("select.autoSubmitSelect > option").eq(nFavorSet - 1).prop("selected", true);
                $("select.autoSubmitSelect + div.btn02 > input")[0].click();
                return false;
            } else if ( parseInt($("div.padding > form > select > option:checked").val()) !== nWeapon ) {
                $("div.padding > form > select > option").eq(nWeapon - 1).prop("selected", true);
                $("div.padding > form > select + div.btn02 > input")[0].click();
                return false;
            } else {
                return true;
            }

            function strSetValue2Icon(nSetValue) {
                var strIcon;
                switch (nSetValue) {
                    case "2":
                    case 2:
                    strIcon = "icon_slash";
                    break;

                    case "1":
                    case 1:
                    strIcon = "icon_speed";
                    break;

                    case "3":
                    case 3:
                    strIcon = "icon_hit";
                    break;

                    default:
                    strIcon = "";
                    break;
                }
                return strIcon;
            }
        }
    }, nDelaySecond*1000);
}

// Event Entrance - 討伐.
function action_home_quest_map3() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    // 5: Collect.
    var difficulty = 3;
    $("div.btn_img_event0" + difficulty + ">a")[0].click();
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
//     difficulty = rand(1, 3);
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
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    };

    var isBigNushi = (function () {
        var jStamp = $("div.next_reward_item > table.box_table_stampSheet01 > tbody > tr > td > div.box_stamp01");
        // 檢查湖のｵｵﾇｼ.
        for (var i = 0; i < jStamp.length; i++) {
            if ( null !== jStamp.eq(i).children("img").attr("src").match(/ic_06\.jpg/) ) {
                // 若有湖のｵｵﾇｼ, 而未收集到Sheet, 則需要用ｴﾙｰｶの実提高釣到它的機會.
                if ( 0 === jStamp.eq(i).children("div.deco_msk_clear").length )
                    return true;
            }
        }
        return false;
    })();

    // 檢查魚群是否到來(紫色湖のﾇｼ).
    // 若未到來, a之class為off, 否則無class.
    if ( false === isExisted("div.map_back > table.area_select_btn02 > tbody > tr > td > div > a.off") ) {
        $("div.map_back > table.area_select_btn02 > tbody > tr > td > div > a")[1].click();
    } else {
        // ｴﾙｰｶの実.
        var nErukaFruit = parseInt($("div.map_back > table.area_select_btn02 > tbody > tr > td > div.btn_sprite_event04.btn_img_event05").html().reverse().match(/\d+(?=;psbn&)/)[0].reverse());

        if ( (true === isErukaFruit || true === isBigNushi) && 0 < nErukaFruit )
            $("div.map_back > table.area_select_btn02 > tbody > tr > td > div.btn_sprite_event04.btn_img_event05 > a")[0].click();
        else
            // 0: ﾗﾗｸの実.
            // 1: ﾃﾞｺｲｴﾋﾞ.
            // 2: ﾀﾞﾝｺﾞ.
            // 3: ﾍﾞｲﾄｶｹﾞ.
            $("div.map_back > table.area_select_btn01 > tbody > tr > td > div.btn_sprite_event04 > a")[rand(0, 3)].click();
    }
}

// Event Entrance - 決鬥(一般探索 -> 申請畫面).
function action_home_quest_map9() {
    $("div#gad_wrapper>div>div>div.bg_event_map01>div.btn06>a")[0].click();
}

// Event Entrance - 決鬥(已進入申請畫面).
function action_home_quest_map10() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    var difficulty = 2;
    $("div#gad_wrapper>div>div>div.padding_t05>table>tbody>tr>td>div.btn_sprite_event_duel01.btn_img_event_duel0" + difficulty + ">a")[0].click();
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

    // connectInterrupt();
    action_event();
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

// 探索到寶箱 - 探索.
function action_event_160_getbox() {
    $("span.event_btn_next")[0].click();
}

// 釣到普通魚或道具 - 釣魚.
function action_event_169_user_index() {
    $("div#gad_wrapper>div>div>div.btn01.padding2>a")[0].click();
}

// Skip Dialogue or Battle Result.
function action_event() {
    // Form Offical Code.

    Loading.start( 12 ) ;
    location.href = mahoujin_args.callbackUrl + getSkipFlg() ;

    waitFlg = true ;
    timeForm = setTimeout ( "releaseWait()", 10000 ) ;
}

// 攻略 -> 階層選擇(for all events).
function action_home_quest_index() {
    $("a[href^='sp_web.php?action_event_1'][href*='_map=true&guid=ON&clkBnrCde=100']")[0].click();
}

// 攻略 -> 階層選擇(no any event).
function action_home_quest_index2() {
    $("div#gad_wrapper>div>center>div>ul.bt_block>li.qu_list_tra>a")[0].click();
}

function action_home_quest_delete_ok() {
    $("div#gad_wrapper>div>div.footer_padding>center>p.footer_btn>a")[0].click();
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
