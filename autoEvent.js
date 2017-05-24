// ==UserScript==
// @name        SAOEW : Auto Event
// @namespace   saoew
// @description Exploring, Simulation, Crusade, Conquest, Collect, Fishing, Duel, Guild
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
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_index=true&guid=ON&isAc=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_index&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_index_do&guid=ON&btn=1&pt=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_game&tu=0&guid=ON*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_detail_game=1&tu=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_result=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_select=1&guid=ON&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_select&guid=ON&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_select=1&pt=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_delete_index=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_delete_ok=true&guid=ON&isDailyQuest=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action=event_*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_item_use=true&guid=ON&questFlg=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_info_item_use&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_getbox&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&step=1&guid=ON&gc=*&gacha_hs=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_user_index&step=2&guid=ON&gc=*&gacha_hs=*&p_div=*&skip=0_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_autorecoveryitem=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&div=4&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&div=5&opensocial_owner_id=*
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
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_ready=true&guid=ON&clkBnrCde=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_ready=true&guid=ON&step=1&sbp=*&c_key=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_result&guid=ON
// @include     /http:\/\/a57528\.app\.gree-pf\.net\/sp_web\.php\?action=event_\d+_ready&guid=ON(&hs=.+)?(&skip=0_sp)?/
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_lvup&guid=ON&hs=*&skip=0_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_result=true&guid=ON&step=1&skip=*_sp
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=event_*_index&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_ready=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_useitem=1&guid=ON&step=1&itemCd=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_useitem=true&guid=ON&step=2&itemCd=*&key=*&itemCat=&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_*_index=true&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_extra_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_event_extra_map=true&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_event_extra_map=1&map_code=*&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_event_extra_index=1&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_event_extra_index=true&opensocial_owner_id=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170506]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;

const sHealPoison = { p100: 1, p30: 2, p50: 3, p70: 4 };
var sHeal         = rand(1, 4);
var isSleepMode   = true;
var isLimitHeal   = true;
var nEnemyHPUnder = 50000000;
var nFavorSets    = [2, 5, 4,
                     1, 2, 3, 4, 5];

var isDuelEvent  = false;
var isErukaFruit = false;
var isHiddenArea = false;
/**
 * Choose one of rare bosses you want to beat.
 * 0: Guardian
 * 1: Rare Area Boss
 * others: disable (normal attack)
 * @type {Integer}
 */
var isRareConquest = false;
var isGoldenBoss   = true;
var isUsingItem    = false;

//*
var isMobWhitelist = true;
const mobFishing = [
    "ﾌﾗｯｼｭ･ｲｰﾀｰ",
    "ｳﾞｧﾝﾄｩｰｸﾗｰｹ",
    "ﾂｲﾝｼｰﾎｰｽ",
    "湖のﾇｼ",
    "湖のｵｵﾇｼ"
];

var mobWhitelist = [
];
//*/
var isNeverRetreating = true;

/**
 * Here is the attr of your right-hand weapon.
 * 1: speed
 * 2: slash
 * 3: hit
 * 4: power
 * 5: trick
 * @type {Integer}
 */
const Attr = {
    speed: 1,
    slash: 2,
    hit:   3,
    power: 4,
    trick: 5
};

const CSS = {
    mode: "color: crimson; font-weight: bold;",
    info: "color: blueviolet; font-weight: bold;",
    err:  "color: red; font-weight: bold;",
};

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;
    if ("undefined" === typeof isMobWhitelist)
        isMobWhitelist = false;
    if (0 !== isRareConquest && 1 !== isRareConquest)
        isRareConquest = false;

    // http://a57528.app.gree-pf.net/sp_web.php
    if ("" === location.search) {
        // It will be invalid except that it is in invite page.
        if ( isExisted("div#gad_wrapper > div > center.clear_black > div.padding > span") && "勧誘中" === $("div#gad_wrapper > div > center.clear_black > div.padding > span:eq(0)").text() ) {
            var isInvitePage = true;
        } else if ( "undefined" !== typeof mahoujin_args && null !== mahoujin_args.callbackUrl.match(/home_quest_detail_game/) ) {
            var isBattleSkill = true;
        // 今、受けている 協力ﾊﾞﾄﾙがありません。
        } else if ( isExisted("div#gad_wrapper > div > div.footer_padding > center > p.footer_btn > a") && "階層一覧 へ" === $("p.footer_btn > a:eq(0)").text() ) {
            audioAlert();
            $("div#gad_wrapper > div > div.footer_padding > center > p.footer_btn > a")[0].click();
            return;
        // Battle Result after inviting.
        } else if ("undefined" !== typeof mahoujin_args && null !== mahoujin_args.callbackUrl.match(/home_quest_detail_result/) ) {
            action_event();
            return;
        } else {
            return;
        }
    }

    console.log("It is a SAOEW event page.");
    if ( true === DEBUGGING )
        console.log("%c*** Debugging Mode ***", CSS.mode);
    if ( true === isNeverRetreating )
        console.log("%cYou will NEVER RETREAT.", CSS.mode);
    init_mutex();

    var opensocial_owner_id = (function() {
        var foo = document.body.innerHTML.match(/opensocial_owner_id=\d+/);
        if ( null !== foo )
            return foo[0].replace("opensocial_owner_id=", "").toInt();

        if ( "undefined" !== typeof mahoujin_args && undefined !== mahoujin_args.uid )
            return mahoujin_args.uid.toInt();

        return 0;
    })();
    console.log("opensocial_owner_id:", opensocial_owner_id);

    // ｴﾙｰｶの実を探してきますね！ - 釣魚.
    if ( isExisted("div#gad_wrapper>div>div>div.navi_area.clear>a") ) {
        $("div#gad_wrapper>div>div>div.navi_area.clear>a")[0].click();
        return;
    }

    // 若有顯示AP則確認.
    var strAP = (function() {
        var jSpan = $("table.padding td > span");

        for (var i = 0; i < jSpan.length; i++) {
            if (null !== jSpan.eq(i).text().match(/AP\d+\/\d+/))
                return jSpan.eq(i).text().match(/AP\d+\/\d+/)[0];
        }
        return null;
    })();
    var yourNowAP;
    var yourMaxAP;
    if (null !== strAP) {
        console.log("It may be in Action_Home_Quest_Index page.");

        yourNowAP = strAP.match(/\d+/g)[0].toInt();
        yourMaxAP = strAP.match(/\d+/g)[1].toInt();
        console.log("Your Current AP is:", yourNowAP, "/", yourMaxAP);


        // AP若太少則去HealPoison頁面掛網或喝HealPoison.
        if ( 10 > yourNowAP ) {
           // $("div.btn02.padding2 > a")[0].click();
           location.href = "sp_web.php?action_home_info_item_use=true&guid=ON&questFlg=1&opensocial_owner_id=" + opensocial_owner_id;
           return;
        }
    }

    console.log("Finding some condition...");
    // Event Entrance - 探索.
    // 探索至Endless Area時按鈕會換成兩個.
    // 聖誕節探索(角色陪同): event_btn01 -> chara_btn01~04.
    if ( isExisted("div#gad_wrapper > div > div > div.padding_t2", "div.event_btn01, div[class*=chara_btn0]") || isExisted("div#gad_wrapper > div > div > div.padding_t2 > table > tbody > tr > td > div.btn_sprite_event03") )
        action_home_quest_map();
    // Fighting.
    else if ( isExisted("div#gad_wrapper > div > table > tbody > tr > td.attack") )
        action_home_quest_map2();
    // Event Entrance - 攻略.
    else if ( isExisted("div#gad_wrapper > div > div[class*='back_step'] > center > table > tbody > tr > td > a > img[src*='bt_event'][src*='_monster_0']") )
        action_home_quest_map4();
    // Event Entrance - 攻略(Area Boss出現中).
    else if ( isExisted("div#gad_wrapper > div > div[class*='back_step'] > center > table.phase_select01") )
        action_home_quest_map4();
    // Event Entrance - 攻略(已進入稀有Boss畫面).
    // Rare Boss - http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&div=4&opensocial_owner_id=*
    // Guardian  - http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&div=5&opensocial_owner_id=*
    else if ( isExisted("div#gad_wrapper > div > div > div[class*='back_step'] > table > tbody > tr > td > a > img[src*='_event_boss_0']") )
        action_home_quest_map5();
    // Event Entrance - 決鬥(一般探索 -> 申請畫面).
    else if ( isExisted("div#gad_wrapper > div > div > div.bg_event_map01 > div.btn06") && true === isDuelEvent )
        action_home_quest_map9();
    // Event Entrance - 收集, 決鬥(一般探索), 育成, 討伐.
    else if ( isExisted("div#gad_wrapper > div > div > div.bg_event_map01 > center > div > div.btn_sprite_event_map08") )
        action_home_quest_map6();
    // Event Entrance - 釣魚, 討伐(170310 ~ 170316, White Day).
    // 原本只有ﾗﾗｸの実可選, 後來多了ﾃﾞｺｲｴﾋﾞ, ﾀﾞﾝｺﾞ, ﾍﾞｲﾄｶｹﾞ, 且不再分難度(透過其他方式切換).
    else if ( isExisted("div#gad_wrapper > div > div > div.map_back > table.area_select_btn01 > tbody > tr > td > div.btn_sprite_event04.padding_r02.padding_l02.font_s") )
        action_home_quest_map8();
    // Event Entrance - 決鬥(已進入申請畫面).
    // http://a57528.app.gree-pf.net/sp_web.php?action_event_*_user_index=true&guid=ON&opensocial_owner_id=*
    else if ( isExisted("div#gad_wrapper > div > div > div.padding_t05 > table > tbody > tr > td > div.btn_sprite_event_duel01") )
        action_home_quest_map10();
    // Event Entrance - 公會.
    else if ( chkURL(/action(_|=)event_\d+_ready/) && isExisted("div#gad_wrapper > div > div > table > tbody > tr > td > a > div[class^='attack_btn0']") )
        action_event_ready();
    // Event Entrance - 活動首頁(公會活動在日本時間P.M. 6:00會回到這裡，需要重返).
    else if ( isExisted("div#gad_wrapper > div > div > div.boss_btn > a") )
        action_event_index();
    // 其他活動(join2)/攻略Event(tomap2) 初次參加入口.
    else if ( isExisted("div#gad_wrapper > div > div > div > div > div[class^=event_btn_]") )
        action_event_index2();
    // [CG] Explore: reload2TrueMob - 探索.
    else if ( chkURL(/action(_|=)home_quest_do/) )
        action_home_quest_do();
    // [CG] Encount a Monster.
    else if ( chkURL(/action(_|=)home_quest_encount/) )
        action_home_quest_encount();
    // Next Fight: Fight Finish or Timeout.
    else if ( isExisted("div#gad_wrapper > div > div > div > center > div.next_bt") )
        action_home_quest_detail_result();
    // Skip Battle Result.
    else if ( chkURL(/action=home_quest_detail_attack/) )
        action_home_quest_detail_attack();
    // Retreat Interface.
    // 條件變複雜是因為HealPoison頁面有隱藏的按鈕(和撤退按鈕相同).
    else if ( isExisted("div#gad_wrapper > div > div > table > tbody > tr > td > span > form > input.icon_base.icon_06.submit_clear") )
        action_home_quest_delete_index();
    // 探索到寶箱 - 探索.
    // 似乎若在CG中遇到寶箱會直接返回主畫面, 因此已不再觸發這個條件.
    else if ( isExisted("div#gad_wrapper > div > div > center > div.footer_padding > center > a > span.event_btn_next") )
        action_event_160_getbox();
    // 釣到普通魚或道具 - 釣魚.
    else if ( isExisted("div#gad_wrapper>div>div>div.btn01.padding2") )
        action_event_169_user_index();
    // 使用道具 - 攻略.
    else if ( isExisted("div#gad_wrapper > div > div > div.padding > center.padding.btn01") )
        action_event_useitem();
    // 攻略 -> 攻略MAP選擇(for events).
    // 現與 action_home_quest_delete_ok() 整合, 保留原樣不須強化.
    // /sp_web.php?action_event_(\d{3})_map=true&guid=ON&clkBnrCde=10/
    // /sp_web.php?action_event_(\d{3})_ready=true&guid=ON&clkBnrCde=10\d+&opensocial_owner_id=\d+/ for Guild Event.
    // "img[src^='bn_eve_233_t_']" represents a Conquest Event will begin soon. However, we are not interested in it.
    else if ( isExisted("a[href^='sp_web.php?action_event_'][href*='=true&guid=ON&clkBnrCde=10'] > img:not([src*='_t_'])") )
        action_home_quest_index();
    // 攻略 -> 攻略MAP選擇(no any events).
    // 沒Event就攻略"練武の楼閣".
    // 原本是一般階層攻略, 已不再需要.
    else if ( isExisted("div#gad_wrapper > div > div.bg_img_quest_portal01 > div > a.margin_t12.sys_display02") )
        action_home_quest_index2();
    // The entrance of Dungeon "練武の楼閣".
    else if ( isExisted("div#gad_wrapper > div > div.bg_img_quest_portal01 > center > div.box_daily_dungeon_info01") )
        action_event_extra_index(yourNowAP);
    // Dungeon Area.
    else if ( isExisted("div#gad_wrapper > div > center > a.margin_b03") )
        action_event_extra_map();
    // Timeout in Dungeon Area.
    else if ( isExisted("div#gad_wrapper > div > div > div.error_padding") )
        action_home_quest_detail_result2();
    // If there are no events after retreated, then will back to floor selection.
    else if ( isExisted("div#gad_wrapper > div > div.footer_padding > center > p.footer_btn") )
        action_home_quest_delete_ok();
    // 是否在HealPoison頁面. 依條件決定要掛網或是喝HealPoison.
    else if ( isExisted("div#gad_wrapper > div > div.clear > center > table > tbody > tr > td > span > div.item_title > span:even") ) {
        console.log("It may be in HealPoison page.");

        strAP     = $("div.padding2").text().match(/\d+\/\d+/)[0];
        yourNowAP = strAP.match(/\d+/g)[0].toInt();
        yourMaxAP = strAP.match(/\d+/g)[1].toInt();
        console.log("Your Current AP is:", yourNowAP, "/", yourMaxAP);

        // AP已滿則回到攻略頁面.
        if ( yourNowAP === yourMaxAP ) {
            $("center.footer_padding > p.footer_btn > a")[0].click();
        } else {
            setTimeout(function() {
                var [nHealOffset, nLimitHeal, nHeal] = chkHealPoison("div.clear > center > table div.item_title > span:even");

                if ( true === isLimitHeal && 1 === nLimitHeal ) {
                    $("div.clear > center > center.block_bt_r > a.heal")[nHealOffset].click();
                    action_home_quest_delete_index();
                } else if ( false === isSleepMode ) {
                    console.log( "Using: %c%s", CSS.info, $("div.clear > center > table div.item_title > span:even").eq(nHeal).text() );

                    $("div.clear > center > center.block_bt_r > a.heal")[nHeal].click();
                    action_home_quest_delete_index();
                }
            }, 1*1000);
        }
    // Invition page. (for some powerful enemy in Whitelist)
    } else if ( chkURL(/action_home_quest_invite_index/) || true === isInvitePage ) {
        // Boss may be beaten when inviting.
        if ( "undefined" !== typeof mahoujin_args && "undefined" !== typeof mahoujin_args.callbackUrl ) {
            action_event();
        // If not in "ｵｽｽﾒ", then choose it.
        } else if ( null === $("div.inner").eq(1).attr("class").match("on") ) {
            $("div.inner > a")[1].click();
        } else {
            if ( isExisted("form > center.padding2.btn01") ) {
                // Selecting Invitions...
                for (var i = 0; i < $("div.gra_dark_blue").length; i++) {
                    var nLv = $("div.gra_dark_blue td > span").eq(i).contents().filter(function() {
                        return this.nodeType === 3 && null !== this.nodeValue.match(/\d+/);
                    })[0].nodeValue.toInt();

                    if ( 130 > nLv ) {
                        $("div.gra_dark_blue > div > input").eq(i).prop("checked", null);
                    } else {
                        $("div.gra_dark_blue > div > input").eq(i).prop("checked", true);
                    }
                }

                $("form > center.padding2.btn01 > input")[0].click();
            } else {
                // Invitng finished, 戦闘待機に戻る.
                $("p.block_bt_l > a")[0].click();
            }
        }
    // Skip Dialogue.
    } else if ( "undefined" !== typeof mahoujin_args && (
        /* 161201 test for the last condition.
        (
            "undefined" !== typeof Loading &&
            // 後者為階層攻略成功的CG.
            ("undefined" !== typeof releaseWait || null !== mahoujin_args.callbackUrl.match(/action_home_quest_detail_result=true&guid=ON&th=\w{7}&step=5&qid=\d{9}/) )
        ) || (
            // Guild Event, Partners LV UP!!
            "undefined" !== typeof mahoujin_args.partnerLevelBefore1 && "undefined" !== typeof mahoujin_args.partnerLevelAfter1 &&
            parseInt(mahoujin_args.partnerLevelBefore1) !== parseInt(mahoujin_args.partnerLevelAfter1) && undefined === console.log("Partners LV UP!!")
        ) ||
        */

        (
            // Conquest Event: Story Dialogue.
            // URL: action=event_242_preview&step=4
            // talkCode, talkTitle, talkConfirm, talkData.
            "undefined" !== typeof mahoujin_args.talkCode
        ) || (
            // Conquest Event: Useitem.
            // URL: action_event_242_useitem=true&guid=ON&step=2
            "undefined" !== typeof Loading && "undefined" !== mahoujin_args.callbackUrl &&
            // Except checkTrueMob. (releaseWait is undefined.)
            // URL: action_home_quest_select=1
            "undefined" !== typeof releaseWait
        )
    ) ) {
        action_event();
    } else {
        console.log("%cThere are no conditions.", CSS.info);

        // May be in Battle Interface.
        // checkTrueMob.
        // The Battle Button will appear after Page loaded. Hence we set a timeout function to create a little delay.
        setTimeout(function() {
            if ( isExisted("img#btn_battle") )
                action_home_quest_select();
        }, 0*1000);
    }

    // Waiting in 0.2 ~ 6 min.
    if ( false === DEBUGGING ) {
        var nLeftSecond = 12;
        // Fighting.
        if ( chkURL(/action(_|=)home_quest_detail_game/) ) {
            nLeftSecond = 6*60;
        // in HealPoison Page or the entrance of Dungeon "練武の楼閣".
        } else if (
            isExisted("div#gad_wrapper > div > div.clear > center > table > tbody > tr > td > span > div.item_title > span:even") ||
            isExisted("div#gad_wrapper > div > div.bg_img_quest_portal01 > center > div.box_daily_dungeon_info01")
        ) {
            nLeftSecond = 60;
        }

        console.log("%cIt will be time out in %d seconds...", CSS.info, nLeftSecond);
        setTimeout(hAfterWaiting, nLeftSecond*1000);
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
    var difficulty = 2;

    // 0: Dress up.
    // 1: Weapon evolution.
    var nExArea = 0;

    // 隠しｴﾘｱを探索する.
    if ( isHiddenArea && isExisted("div.event_btn03") )
        $("div.event_btn03 > a")[0].click();
    // ドレスアップ/武器進化アイテムを集める(in Endless Area).
    else if ( isExisted("div.btn_sprite_event04:not([class~='off'])") )
        $("div.btn_sprite_event04 > a")[nExArea].click();
    // 探索する(in Endless Area).
    else if ( isExisted("div.btn_sprite_event03") )
        $("div.btn_sprite_event03 > a")[difficulty - 1].click();
    else if ( isExisted("div.event_btn01") )
        $("div.event_btn01 > a")[0].click();
    // 聖誕節探索(角色陪同).
    else if ( isExisted("div[class*=chara_btn0]") )
        $("div[class*=chara_btn0] > a")[0].click();
}

// Fighting.
function action_home_quest_map2() {
    // Since "HP" is loaded slowly.
    var nDelaySecond = 0;
    console.log("Just waiting for", nDelaySecond, "seconds...");

    setTimeout(function() {
        // 因應釣魚而設立白名單功能.
        var isInMobWhitelist = (function() {
            if ( true === isMobWhitelist ) {
                console.log("%cMobWhitelist is active.", CSS.mode);

                var strMobName = decodeURI(mahoujin_args.enemyLv);
                console.log("Mob Name:", "\n\t", strMobName);

                if ( -1 === mobWhitelist.indexOf(strMobName) ) {
                    return false;
                } else {
                    console.log("%cIt is in MobWhitelist.", CSS.info);
                    return true;
                }
            } else {
                return false;
            }
        })();

        var nEnemyNowHP = mahoujin_args.nowEnemyHP.toInt();
        var nEnemyMaxHP = mahoujin_args.maxEnemyHP.toInt();
        console.log("HP of the enemy is:", nEnemyNowHP, "/", nEnemyMaxHP, "->", round(nEnemyNowHP / nEnemyMaxHP * 100, 1), "%.");

        var nQuestTime  = mahoujin_args.questTime.toInt();
        var nMaxTime    = (function() {
            if (nQuestTime > 20*60+5)
                return 30*60;
            else if (nQuestTime > 6*60+5)
                return 20*60;
            else
                return 6*60;
        })();
        var isWinningPrediction = ((nEnemyNowHP / nEnemyMaxHP) < ((nQuestTime+30) / nMaxTime));

        var nNowBC = (function() {
            var digit = 0;
            for (var i = 0; i < $("span.pos_abs.pos_now > img").length; i++)
                digit = digit * 10 + $("span.pos_abs.pos_now > img").eq(i).attr("src").match(/\d+(?=.png)/)[0].toInt();
            return digit;
        })();
        var nBurstSkillBC = (function() {
            if ( false === isExisted("select#battleSkill") )
                return 1e10;
            return $("select#battleSkill > option:eq(1)").text().match(/\d+/)[0].toInt();
        })();
        if ( nBurstSkillBC <= nNowBC && nEnemyHPUnder/2 <= nEnemyNowHP ) {
            $("div#flgUseSkill")[0].click();
            $("select#battleSkill > option:eq(1)").prop("selected", true);
        }

       // isMobWhitelist      xxxxoooooooo
       // isInMobWhitelist    xxxxxxxxoooo
       // isWinningPrediction xxooxxooxxoo
       // isNeverRetreating   xoxoxoxoxoxo
       //                     AB--ABA-BB--
        if ( false === isInMobWhitelist &&
            (true === isMobWhitelist || false === isWinningPrediction) &&
            false === isNeverRetreating
        ) {
            /**
             * Retreat: isNeverRetreating = false, but
             * 1. isMobWhitelist = false => isInMobWhitelist = false,
             *   and the Enemy is so powerful that you may not win.
             * 2. isMobWhitelist = true, isInMobWhitelist = false.
             */
            $("p.btn04 > a")[0].click();
        // It is a "powerful" enemy is whom you insist on fighting (in Whitelist/never retreating),
        // but you cannot output enough damage before time's up.
        } else if ( (true === isInMobWhitelist || true === isNeverRetreating) &&
                   isExisted("td.help_me") &&
                   false === isWinningPrediction ) {
            // Joined members are more than 1.
            // After seeking help, you just need to wait to it been beated.
            if ( 1 < $("div#gad_wrapper > div > div.gra_dark_blue.padding_t3 > div.padding").text().match(/\d+/)[0].toInt() ) {
                // Do nothing.
                console.log("After seeking help, just waiting...");
            // Seek help from someone.
            } else {
                $("td.friend > a")[0].click();
            }
        // Check if AP is enough.
        } else if ( isExisted("input[name=isConfirmedUseItem]") ) {
            console.log("AP is not enough.");

            var [nHealOffset, nLimitHeal, nHeal] = chkHealPoison("select[name=itemCdOffset] > option");

            if ( true === isLimitHeal && 1 === nLimitHeal ) {
                if ( chkWeaponAndPartner() )
                    useHealPoison(nHealOffset);
            } else if ( false === isSleepMode ) {
                if ( chkWeaponAndPartner() )
                    useHealPoison(nHeal);
            } else if ( false === isNeverRetreating ) {
                // Retreat.
                $("p.btn04 > a")[0].click();
            }
        } else {
            if ( chkWeaponAndPartner() )
                $("td.attack form > div.margin_t2 > input.quest_heal_btn")[0].click();
        }

        /**
         * functions
         */

        function useHealPoison(nHeal) {
            $("input[name=isConfirmedUseItem]").prop("checked", true);
            $("select[name=itemCdOffset] > option").eq(nHeal).prop("selected", true);
            $("td.attack form > div.margin_t2 > input.quest_heal_btn")[0].click();
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

            if ( $("div.padding > form > select > option:checked").val().toInt() !== nFavorSet ) {
                $("div.padding > form > select > option").eq(nFavorSet - 1).prop("selected", true);
                $("div.padding > form > select + div.btn02 > input")[0].click();
                return false;
            } else {
                return true;
            }

            function strSetValue2Icon(nSetValue) {
                var strIcon;
                switch (nSetValue) {
                    case "1":
                    case 1:
                    strIcon = "icon_speed";
                    break;

                    case "2":
                    case 2:
                    strIcon = "icon_slash";
                    break;

                    case "3":
                    case 3:
                    strIcon = "icon_hit";
                    break;

                    case "4":
                    case 4:
                    strIcon = "icon_power";
                    break;

                    case "5":
                    case 5:
                    strIcon = "icon_trick";
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

// Event Entrance - 攻略.
function action_home_quest_map4() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    // 5: Expert.
    var difficulty = 4;

    // "ﾚｱｴﾘｱﾎﾞｽと戦う". You can decide whether to do it.
    if ( false !== isRareConquest )
        // the first is "ﾋｰｽｸﾘﾌ" at the 100th floor.
        // the first is "ｶﾞｰﾃﾞｨｱﾝと戦う" at 守護者討伐戦.
        // the second is "ﾚｱｴﾘｱﾎﾞｽと戦う".
        $("div[class*='back_step'] > center > div > div.footer_btn02 > a")[isRareConquest].click();
    // Area Boss is Appearing now.
    else if ( isExisted("table.phase_select01") ) {
        // Beat easier bosses to Unlock the next level.
        if ( $("table.phase_select01 td > a").length < difficulty )
            $("table.phase_select01 td > a:last")[0].click();
        else
            $("table.phase_select01 td > a")[difficulty - 1].click();
    // 確認是否有 Sproβ Eid (ｼｭﾌﾟﾛｽｱｲﾄ) 可使用.
    // If there are some ones, then use one of them.
    } else if ( isExisted("div[class*='back_step'] > center > div > a > img") )
        $("div[class*='back_step'] > center > div > a > img").parent()[0].click();
    // Kill some monsters for Area Boss appearance.
    else
        $("img[src*='bt_event'][src*='_monster_0']").parent()[0].click();
}

// Event Entrance - 攻略(已進入稀有Boss畫面).
function action_home_quest_map5() {
    var difficulty = null;

    // in Rare Boss / Guardian Area.
    if ( false !== isRareConquest && isExisted("div[class*='back_step']") ) {
        // The amount of "瘴気の小瓶" in Rare Boss Area.
        // The amount of "ﾃﾞｨｳﾞﾝｼｭの女神" in Guardian Area.
//         var nMiasmaVial = $("div.font_s.padding_t03.padding_b03").text().match(/\s\d+/g)[0].toInt();
        var nMiasmaVial = $("div#gad_wrapper > div > div > div > div.font_s.padding_t03.padding_b03").text().match(/\s\d+/g)[0].toInt();

        // in Rare Boss Area.
        // 1: Extreme.
        // 2: Chaos.
        // 3: Deep Chaos.
        // 4: Unlimited.
        // 5: Inferno.
        if ( 1 === isRareConquest ) {
            difficulty = 2;
            // Here is for Golden Week Boss.
            var nGoldenMiasmaVial = $("div#gad_wrapper > div > div > div.padding_t05.back_step0 > div > div.font_s.padding_t03.padding_b03").text().match(/\s\d+/g)[0].toInt();
            if ( isGoldenBoss && 0 < nGoldenMiasmaVial ) {
                $("div.padding_t05.back_step0 > center > a")[0].click();
                return;
            }
        }

        // in Guardian Area.
        // 1: EX.Hard.
        // 2: EX.VeryHard.
        if ( 0 === isRareConquest )
            difficulty = 1;

        var nMiasmaVialNeeded = $("table td > div.padding_b02 > span").eq(difficulty - 1).text().match(/\d+/)[0].toInt();
        if ( nMiasmaVial >= nMiasmaVialNeeded )
            $("table td > a")[difficulty - 1].click();
        else
            audioAlert();
    }
}

// Event Entrance - 收集, 決鬥(一般探索), 育成, 討伐.
function action_home_quest_map6() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    // 5: Expert.
    // 6: Collect.
    var difficulty = 5;

    if ( false !== isUsingItem ) {
        if ( isExisted("div.event_bonus_btn:not([class~=off])") ) {
            $("div.event_bonus_btn:not([class~=off]) > a")[0].click();
        } else {
            console.log("isUsingItem:", isUsingItem, "but there are no items.");
            audioAlert();
        }
    } else {
        if ( isExisted("div.btn_sprite_event_map08:eq(" + (difficulty - 1) + ")") )
            $("div.btn_sprite_event_map08 > a")[difficulty - 1].click();
        else
            // ボーナスエリアへ進む.
            $("div.btn_sprite_event_map08.btn_img_event_bonus > a")[0].click();
    }
}

// Event Entrance - 釣魚, 討伐(170310 ~ 170316, White Day).
function action_home_quest_map8() {
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

    // Change to HARD difficulty if it is EASY now.
    if ( "EASY" === $("div.map_back > div.pos_abs > span").text() ) {
        $("div.map_back > div.pos_abs > div.btn_sprite_difficultychange01 > a")[0].click();
    // White Day Crusade (170310 ~ 170316).
    } else if ( isExisted("div.map_back > table.area_select_btn01") ) {
        // 0: ﾋﾞﾋﾞｯﾄﾞﾊﾆｰ.
        // 1: ﾉｰﾌﾞﾙﾐﾙｸ.
        // 2: ｸﾞﾘｭｯｸの実.
        // 3: ｸﾞﾗｰﾃｽﾊﾟｳﾀﾞｰ.

        // Choose the area which has material that you have least.
        var jArea = $("div.map_back > table.area_select_btn01 > tbody > tr > td > div.btn_sprite_event04");
        var nSelection = null;
        var nMinMaterial  = 1e10;
        for (var i = 0; i < jArea.length; i++) {
            var nMaterial = jArea.eq(i).text().match(/\d+/)[0].toInt();
            if ( nMinMaterial < nMaterial )
                continue;

            nSelection   = i;
            nMinMaterial = nMaterial;
        }
        $("div.map_back > table.area_select_btn01 > tbody > tr > td > div.btn_sprite_event04 > a")[nSelection].click();
    // 檢查魚群是否到來(紫色湖のﾇｼ).
    // 若未到來, a之class為off, 否則無class.
    } else if ( false === isExisted("div.map_back > table.area_select_btn02 > tbody > tr > td > div > a.off") ) {
        $("div.map_back > table.area_select_btn02 > tbody > tr > td > div > a")[1].click();
    } else {
        // ｴﾙｰｶの実.
        // .reverse().match(/\d+(?=;psbn&)/)[0].reverse() = .match(/(?<=&nbsp;)\d+/)[0]
        String.prototype.reverse = function () {
            return this.split('').reverse().join('');
        };
        var nErukaFruit = $("div.map_back > table.area_select_btn02 > tbody > tr > td > div.btn_sprite_event04.btn_img_event05").text().reverse().match(/\d+(?=;psbn&)/)[0].reverse().toInt();
        // Todo:
        nErukaFruit -= $("div.map_back > table.area_select_btn02 > tbody > tr > td > div.btn_sprite_event04.btn_img_event05 > span:eq(2)").length;

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
    $("div#gad_wrapper > div > div > div.bg_event_map01 > div.btn06 > a")[0].click();
}

// Event Entrance - 決鬥(已進入申請畫面).
function action_home_quest_map10() {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    var difficulty = 3;
    if ( false === isExisted("div.btn_img_event_duel0" + difficulty + " > a.off") )
        $("div.btn_img_event_duel0" + difficulty + " > a")[0].click();
    else
        audioAlert();
}

// Event Entrance - 公會.
function action_event_ready() {
    // Since "img#icon_atk" is loaded slowly.
    var nDelaySecond = 1;
    console.log("Just waiting for", nDelaySecond, "seconds...");

    setTimeout(function() {
        var strArrHP    = $("div#hp_text").text().match(/\d+/g);
        var nEnemyNowHP = strArrHP[0].toInt();
        var nEnemyMaxHP = strArrHP[1].toInt();
        console.log("HP of the enemy is:", nEnemyNowHP, "/", nEnemyMaxHP, "->", round(nEnemyNowHP / nEnemyMaxHP * 100, 1), "%.");

        var nCombo   = $("span#comboCount").text().toInt();
        var nSecTime = $("span#min").text().toInt()*60 + $("span#sec").text().toInt();

        // Switch Chance!! 180 combo is about 8 times damage.
        if ( null !== $("img#icon_atk").attr("src").match("inline_icon_attack2.png") && 180 <= nCombo ) {
            // If the enemy has a few HP, then attacks without waiting.
            if ( nEnemyNowHP / nEnemyMaxHP < 0.3)
                $("a > div[class^='attack_btn0']:last")[0].click();
            // Otherwise, waits for AP is more than 20. (7 times damage with AP50, or 2.5 times with AP20)
            else if ( isExisted("a > div.attack_btn02") )
                $("a > div[class^='attack_btn0']:last")[0].click();
        } else {
            var strAP     = $("div#ap_text").text();
            var yourNowAP = strAP.match(/\d+/g)[0].toInt();
            var yourMaxAP = strAP.match(/\d+/g)[1].toInt();
            console.log("Your Current AP is:", yourNowAP, "/", yourMaxAP);

            // 1. AP is Full but there are no any guild manbers which attacked before or combo is too few.
            // 2. Time is up soon.
            if ( yourNowAP === yourMaxAP || 60 >= nSecTime )
                $("a > div.attack_btn01")[0].click();
        }
    }, nDelaySecond*1000);
}

// Event Entrance - 活動首頁(公會活動在日本時間P.M. 6:00會回到這裡，需要重返).
function action_event_index() {
    if ( isExisted("a[href^='sp_web.php?action_home_team_index=true']") )
        $("div.boss_btn > a")[0].click();
}

// 其他活動(join2)/攻略Event(tomap2) 初次參加入口.
function action_event_index2() {
    $("div[class^=event_btn_] > a")[0].click();
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
    $("div.top_area").hide();
    if ( "練武の楼閣一覧へ" === $("div.next_bt > a").text() )
        // Click the "攻略" button to check if there exists an open event.
        $("div#gad_wrapper > div#header nav.navi.header_bar li.search.btn > a")[0].click();
    else
        $("div.next_bt > a")[0].click();
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

// Retreat (and confirm in HealPoison page).
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

// 使用道具 - 攻略.
function action_event_useitem() {
    $("center.padding.btn01 > a")[0].click();
}

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

// 攻略 -> 攻略MAP選擇(for events).
function action_home_quest_index() {
    $("a[href^='sp_web.php?action_event_'][href*='=true&guid=ON&clkBnrCde=10']")[0].click();
}

// 攻略 -> 攻略MAP選擇(no any events).
function action_home_quest_index2() {
    $("div#gad_wrapper > div > div.bg_img_quest_portal01 > div > a.margin_t12.sys_display02")[0].click();
}

// The entrance of Dungeon "練武の楼閣".
function action_event_extra_index(yourNowAP) {
    // 1: Easy.
    // 2: Normal.
    // 3: Hard.
    // 4: Very Hard.
    var difficulty = 3;
    // Not necessary to reduce difficulty.
    if ( null !== $("div.box_daily_dungeon_info01 > img").attr("src").match(/bn_daily_[245].png/) )
        difficulty = 4;

    var necessaryAP = 100;
    if ( necessaryAP > yourNowAP ) {
        console.log("Your current AP is not enough (", necessaryAP, ") to clear entire Dungeon!");
        return;
    }

    var strHref = $("div.btn_sprite_difficulty01").eq(difficulty - 1).attr("data-href");
    $("div.btn_sprite_difficulty01").eq(difficulty - 1)[0].click();
    $("a#dungeonUrl").attr("href", strHref)[0].click();
}

// Dungeon Area.
function action_event_extra_map() {
    $("a.margin_b03")[0].click();
}

// Timeout in Dungeon Area.
function action_home_quest_detail_result2() {
    // この練武の楼閣は時間切れの為 終了しました
    // 練武の楼閣一覧へ
    // $("div#gad_wrapper > div > center.footer_padding > p.footer_btn > a")[0].click();

    // Click the "攻略" button to check if there exists an open event.
    $("div#gad_wrapper > div#header nav.navi.header_bar li.search.btn > a")[0].click();
}

function action_home_quest_delete_ok() {
    $("div#gad_wrapper > div > div.footer_padding > center > p.footer_btn > a")[0].click();
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

function round(num, place) {
    var shift = Math.pow(10, place);
    var error = Math.pow(10, -place - 3);
    return Math.round((num + error) * shift) / shift;
}

function audioAlert() {
    var audio = new Audio("http://www.sunnyneo.com/attictimer/ghostly.ogg");
    audio.play();
    console.log("%cAlert! Something is wrong...", CSS.err);
}

function chkHealPoison(strSelector) {
    for (var nHealOffset = 0; ; nHealOffset++) {
        if ( null === $(strSelector).eq(nHealOffset).text().match(/\[ｱﾆﾒ再放送記念\]期間限定/) )
            break;
    }
    console.log("There are", nHealOffset, "Special HealPoisons.");

    var nLimitHeal = (null === $(strSelector).eq(nHealOffset).text().match(/^ﾋｰﾙﾎﾟｰｼｮﾝ(\d0%)?( \(残：\d+\))?$/)) ? 1 : 0;
    var nHeal      = nHealOffset + nLimitHeal + (sHeal - 1);

    return [nHealOffset, nLimitHeal, nHeal];
}

function trueUntil(strDate) {
    return (new Date()).getTime() < Date.parse(strDate);
}

function falseUntil(strDate) {
    return ! trueUntil(strDate);
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
