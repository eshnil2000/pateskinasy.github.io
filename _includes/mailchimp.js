type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false">

function showMailingPopUp() {
require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us12.list-manage.com","uuid":"6aec26e81999396b8c544b7f5","lid":"8cfaf7db79"}) })
document.cookie = "MCPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};
document.getElementById("open-popup").onclick = function() {showMailingPopUp()};
