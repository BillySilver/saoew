// ==UserScript==
// @name        SAOEW : Cowcow Finder (April Fool's Day 2017)
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170401]
// @grant       none
// ==/UserScript==

// [170401]
// カウカウの楼閣 @ 攻略ﾎﾟｰﾀﾙ
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_portal_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=202044&opensocial_owner_id=0
// ﾃﾞｭｴﾙ
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_duel_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=202129&opensocial_owner_id=0
// ｻﾎﾟｰﾄﾌﾚﾝﾄﾞﾄｯﾌﾟ
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_support_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=202206&opensocial_owner_id=0
// 「ぷーぴー」 @ アルゴの攻略本 エンドワールド瓦版
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_argo_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=202207&opensocial_owner_id=0
// カウカウ @ ﾊﾟｰﾄﾅｰｽﾄｰﾘｰ
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_story_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=202211&opensocial_owner_id=0

// [170402]
// 精錬所
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_refinery_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=101158&opensocial_owner_id=0
// 《SAO》トップ
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_top_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=101233&opensocial_owner_id=0
// カウカウ @ 強化,継承
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_str_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=201702&opensocial_owner_id=0
// 「ぷーぴーぷーぴー」 @ FAQ一覧
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_faq_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=201773&opensocial_owner_id=0
// ひとこと＆ﾘｸｴｽﾄ
// http://a57528.akamaized.net/sp_img/event/extracamp/bt_cowcow_hitokoto_01.jpg?_imgv_=15
// http://a57528.app.gree-pf.net/sp_web.php?action_event_extracamp_index=true&guid=ON&step=201991&opensocial_owner_id=0

$(document).ready(function() {
    var jImg = $("img");
    for (var i = 0; i < jImg.length; i++) {
        if ( null === jImg.eq(i).attr("src").match(/bt_cowcow_.+jpg/) )
            continue;

        alert("There is a Cowcow!");
        console.log(jImg[i]);
        break;
    }
});
