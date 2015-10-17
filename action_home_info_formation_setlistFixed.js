// ==UserScript==
// @name        SAOEW - action_home_info_formation_setlist Fixed
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?guid=ON&action_home_info_formation_setlist2=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_info_formation_setlist2=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_info_formation_setlist2&guid=ON
// @include     http://a57528.app.gree-pf.net/sp_web.php
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151015]
// @grant       none
// ==/UserScript==

$(document).ready(function() {
    if ( 0 !== $("div#gree-app-container>div#gad_wrapper>div>center>table.forward_bg").length )
        $("div#gree-app-container>div#gad_wrapper>div>center>table.forward_bg").before($("<table>"));
});
