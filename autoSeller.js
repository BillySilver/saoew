// ==UserScript==
// @name        SAOEW : Auto Seller
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_info_present_sell&guid=ON&c_key=*&step=2*
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_info_present_sell=true&presentTable=1&opensocial_owner_id=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [170101]
// @grant       none
// ==/UserScript==

$(document).ready(() => {
    $("input.checkbox.margin_t2").prop("checked", true);
    $("center.padding_t.padding_b2.btn01 > input")[0].click();
});
