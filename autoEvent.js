// ==UserScript==
// @name        SAOEW : Auto Event
// @namespace   saoew
// @description Explore 討伐
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_map&map_code=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_map=1&map_code=100*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_do=true&guid=ON&mc=100*
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
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [150825]
// @grant       none
// ==/UserScript==

var sHeal = 2;

var sleepMode = true;
var MaxAP     = 132;

var enemyMaxHP = 1000000;

$(document).ready(function() {
    /*
    var isSleeping = GM_getValue("Sleeping", false);
    alert(isSleeping);
    //*/

    console.log("It is a SAOEW event page.");
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
    else if ( null !== location.search.match(/action_home_quest_do/) )
        action_home_quest_do();
    else if ( null !== location.search.match(/action(_|=)home_quest_encount/) )
        action_home_quest_encount();
    else if ( null !== location.search.match(/action=home_quest_detail_attack/) )
        action_home_quest_detail_attack();
    else if ( isExisted(".next_bt") )
        action_home_quest_detail_result();
    // Retreat Interface.
    else if ( isExisted("input.icon_06.submit_clear") )
        action_home_quest_delete_index();
    else if ( isExisted("div.padding_t2>a") )
        action_home_quest_delete_ok();
    // Skip Dialogue.
    else if ( null !== location.search.match(/action=event_/) )
        action_event();
    // Battle Interface.
    else {
        setTimeout(function() {
            if ( isExisted("img#btn_battle") )
                action_home_quest_select();
        }, 0*1000);
    }

    // Waiting in 1.5 min.
    setTimeout(hAfterWaiting, 1.5*60*1000);

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

// [CG] Explore: reload2TrueMob.
function action_home_quest_do() {
    location.reload();
}

// [CG] Encount a Monster.
function action_home_quest_encount() {
    connectInterrupt();

    // Sometimes, BOSS appears with strange CG.
    action_event();
}

function action_home_quest_detail_attack() {
    connectInterrupt();
}

function action_home_quest_detail_result() {
    // Next Fight: Fight Over or Fight Timeout.
    $(".next_bt>a")[0].click();
}

// checkTrueMob.
function action_home_quest_select() {
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

// Skip Dialogue.
function action_event() {
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
        return true;
    }
    else return false;
}
