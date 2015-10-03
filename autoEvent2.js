// ==UserScript==
// @name        SAOEW : Auto Duel (For CG skip)
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_duel_detail=1&guid=ON&step=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action=home_duel_detail&guid=ON&step=2*
// @version     [150625]
// @description For CG skip. No jQuery injection.
// @grant       none
// ==/UserScript==

var old_onload = window.onload || function() {};
window.onload = function() {
	old_onload();

	setTimeout(connectInterrupt, 500);
};
