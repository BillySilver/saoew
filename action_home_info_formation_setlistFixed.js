// ==UserScript==
// @name        SAOEW - action_home_info_formation_setlist Fixed
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_info_formation_setlist2=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_formation_setlist2=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151004]
// @grant       none
// ==/UserScript==

$(document).ready(function() {
    $("div#gad_wrapper>div>center>table").before($("<table>"));
});
