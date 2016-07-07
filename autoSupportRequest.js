// ==UserScript==
// @name        SAOEW : Support Request
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_accept_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_index=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_detail=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_detail_game=1&tu=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_result=true&guid=ON&*
// @include     http://a57528.app.gree-pf.net/sp_web.php
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [160707]
// @grant       none
// ==/UserScript==

// var DEBUGGING = true;
var opensocial_owner_id = 708131429;

var nEnemyMinLv = 500;

//*
var isMobWhitelist = true;
var mobWhitelist = [
    "ｻﾞ･ﾄﾞﾚｯﾄﾞ･ｽｶｯﾀｰ"
];
//*/

$(document).ready(function() {
    if ("undefined" === typeof DEBUGGING)
        DEBUGGING = false;
    if ("undefined" === typeof isMobWhitelist)
        isMobWhitelist = false;

    console.log("Support Request page.");

    var isInIndexPage = isExisted("div#gad_wrapper>div>div>div#h_result_btn");
    var isFighting    = chkURL(/action_home_quest_detail_game/);

    if ( isExisted("div#gad_wrapper>div>div>div.ask_btn") ) {
        console.log("Index with some requests.");

        $("div.ask_btn>a")[0].click();
    } else if ( isInIndexPage ) {
        console.log("Index without request.");

        if ( confirm("Go to Invitation Page?") )
            location.href = "sp_web.php?guid=ON&action_home_quest_accept_index=1&opensocial_owner_id=" + opensocial_owner_id;
    } else if ( isExisted("div#gad_wrapper>div>div>center>div.gra_dark_blue") && isExisted("div#gad_wrapper>div>div>section.pager4>div.next") ) {
        console.log("Finding requests...");

        var nBestRequest = 0;
        var arrEnemyData = [[0, 0]];
        for (var i = 0; i < $("div.gra_dark_blue td>span>span:first-child").length; i++) {
            var nEnemyLv  = parseInt($("div.gra_dark_blue td>span>span:first-child").eq(i).html().match(/Lv\d{1,3}/)[0].replace("Lv", ""));
            var nLeftTime = (function() {
                if ( null !== $("div.gra_dark_blue td>span").eq(i).html().match(/\d:\d\d:\d\d/) ) {
                    var arrLeftTime = $("div.gra_dark_blue td>span").eq(i).html().match(/\d:\d\d:\d\d/)[0].split(":");
                    return parseInt(arrLeftTime[0])*3600 + parseInt(arrLeftTime[1])*60 + parseInt(arrLeftTime[2]);
                } else {
                    return 0;
                }
            })();
            // 因應釣魚而設立白名單功能.
            var isInMobWhitelist = (function() {
                if ( true === isMobWhitelist ) {
                    console.log("Mob Name: ");
                    var strMobName = $("div.gra_dark_blue td>span").eq(i).html().match(/[^>]+\[Lv/)[0].replace("[Lv", "");
                    console.log("\t" + strMobName);

                    if ( -1 === mobWhitelist.indexOf(strMobName) ) {
                        return false;
                    } else {
                        console.log("It is in MobWhitelist.");
                        return true;
                    }
                } else {
                    return false;
                }
            })();

            arrEnemyData[i+1] = [nEnemyLv, nLeftTime];
            if ( (true === isInMobWhitelist || nEnemyMinLv <= nEnemyLv) &&
                arrEnemyData[nBestRequest][0] <= nEnemyLv &&
                arrEnemyData[nBestRequest][1] < nLeftTime
            ) {
                nBestRequest = i+1;
            }
        }

        if ( 0 !== nBestRequest ) {
            $("div.gra_dark_blue>div.block_bt_r>a")[nBestRequest-1].click();
        }
    // ともに闘う!!
    // http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_detail=1&qid=*
    // 可能會和其他表單按鈕衝突!
    // } else if ( chkURL(/action_home_quest_accept_detail/) && isExisted("div#gad_wrapper>div:eq(3)>form:eq(0)>div:eq(3)>center.padding2.btn01>input") ) {
    } else if ( chkURL(/action_home_quest_accept_detail/) && isExisted("div#gad_wrapper>div:eq(4)>form:eq(0)>div:eq(3)>center.padding2.btn01>input") ) {
        console.log("Attend!");

        $("center.padding2.btn01>input")[0].click();
    // この協力ﾊﾞﾄﾙには参加できません
    // http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_detail=1&qid=*
    // 可能會和其他表單按鈕衝突!
    } else if ( chkURL(/action_home_quest_accept_detail/) && isExisted("div#gad_wrapper>div>center.footer_padding>p.footer_btn>a") ) {
        console.log("Back to Requests!");

        $("p.footer_btn>a")[0].click();
    // さっそく戦う!
    // http://a57528.app.gree-pf.net/sp_web.php
    } else if ( chkURL(/^$/) && isExisted("div#gad_wrapper>div>div.clear_black>center.padding2.btn01>a") ) {
        console.log("Go!");

        $("center.padding2.btn01>a")[0].click();
    // Fighting (First).
    // http://a57528.app.gree-pf.net/sp_web.php?action_home_quest_detail_index=true&guid=ON&opensocial_owner_id=*
    } else if ( chkURL(/action_home_quest_detail_index/) && isExisted("div#gad_wrapper>div>table>tbody>tr>td.attack") ) {
        console.log("Without waiting. Ignore HP of the enemy.");

        // if AP is not enough, "input[name=isConfirmedUseItem]" will display.
        // $("td.attack > div > form > div.margin_t2 > input.quest_heal_btn") is always existed since Burst Skill (Battle Skill) System.
        if ( false === isExisted("input[name=isConfirmedUseItem]") ) {
            $("td.attack > a")[0].click();
        } else {
            console.log("AP is not enough.");
        }
    // After Fighting. (in SAOEW : Auto Event)
    // http://a57528.app.gree-pf.net/sp_web.php?action=home_quest_detail_attack&tu=*
    } else if ( isExisted("div#gad_wrapper>div>table>tbody>tr>td.attack") ) {
        // do nothing.
    // Next Fight: Fight Finish or Timeout. (in SAOEW : Auto Event)
    // The Battle may end when Fighting. (action=home_quest_detail_attack)
    } else if ( isExisted("div#gad_wrapper>div>div>div>center>div.next_bt") ) {
        // $("div.next_bt>a")[0].click();

        // If the fight is Timeout, then div.next_bt will go to action_home_quest_index and do nothing.
        location.href = "sp_web.php?guid=ON&action_home_quest_accept_index=1&opensocial_owner_id=" + opensocial_owner_id;
    // Skip Battle Result.
    // 現在、結果集計処理中です。
    // http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_quest_accept_index=1&opensocial_owner_id=708131429
    } else if ( chkURL(/action(_|=)home_quest_detail_attack/) || chkURL(/action(_|=)home_quest_detail_index/) || chkURL(/action_home_quest_accept_index/) ) {
        // Form Offical Code.

        // connectInterrupt();
        action_event();
    // Skip Dialogue.
    // 既に誰かに倒されたようだ…
    } else if (
        "undefined" !== typeof Loading &&
        // 階層攻略成功的CG.
        ("undefined" !== typeof releaseWait || null !== mahoujin_args.callbackUrl.match(/action_home_quest_detail_result=true&guid=ON&th=\w{7}&step=5&qid=\d{9}/) )
    ) {
        action_event();
    } else {
        console.log("There is no condition.");
        if ( true === DEBUGGING )
            console.log("*** Debugging Mode ***");
    }

    if (
        (false === chkURL(/^$/) || isExisted("div#gad_wrapper>div>div.clear_black>center.padding2.btn01>a")) &&
        false === isInIndexPage &&
        false === isFighting
    ) {
       setTimeout(hAfterWaiting, 10*1000);
    }

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});

// Skip Dialogue or Battle Result.
function action_event() {
    // Form Offical Code.

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

// Skip Battle Result.
// $("icon_skip").addEventListener("mousedown", touchSkip, false);
$.fn.addEventListener = function(type, listener, useCapture) {
    // Form Offical Code.

    connectInterrupt();

    /*
    setTimeout(function() {
        document.getElementById( this.selector ).addEventListener(type, listener, useCapture);
    }, 100);
    */
};
