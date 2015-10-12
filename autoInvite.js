// ==UserScript==
// @name        SAOEW : Auto Invite
// @namespace   saoew
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_friends_index=true&guid=ON&opensocial_owner_id=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_friends_index=1&guid=ON&clkBnrCde=*
// @include     http://a57528.app.gree-pf.net/sp_web.php?action_home_friends_ok=true&guid=ON&invite_member=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     [151008]
// @grant       none
// ==/UserScript==

$(document).ready(function() {
    // action_home_friends_index
    if ( 0 !== $("center>div.btn01.padding2>a").length ) {
        console.log("Invite Enterence.");

        setTimeout(function() {
            console.log("Go to Invite. Waiting for loading...");

            $("center>div.btn01.padding2>a")[0].click();
            setTimeout(function() {
                console.log("Send Invitation!");

                $("div.greepf-invite-btn-orange.greepf-invite-btn-top")[0].click();
            }, 6*1000);
        }, 2*1000);
    // action_home_friends_ok
    } else if ( 0 !== $("div.footer_btn").length ) {
        console.log("Complete Sending.");
        console.log("Return to Invite Enterence...");

        $("div.footer_btn>a")[0].click();
    }

    setTimeout(hAfterWaiting, 15*1000);

    function hAfterWaiting() {
        console.log("Time Out!");
        location.reload();
    }
});
