window.TOP_APPS = [];
window.APPS_DICT = {};

/*$(document).ready(function() {
    window.UTILS = new Utils('.scroller-body', 'appsList');

    loadHeader("home");
    loadProgressPopup();

    setTimeout(function()
    {
        gmTopAppsPageLoaded();
    }, 100);
});*/

function initLoadHomePage() {
    window.UTILS = new Utils('.scroller-body', 'appsList');

    loadHeader("home");
    loadProgressPopup();

    setTimeout(function()
    {
        gmTopAppsPageLoaded();
    }, 100);
}

$(window).on("load", function() {
    $(".head-apps.settings").hover(function(){
        $(this).find(".dropDown2").show();
    },function(){
        $(this).find(".dropDown2").hide();
    });
});

function gmDisplayWebTopAppsPage(apps)
{
    apps = apps.replace(/&#39;/g, "'");
    var apps_obj = [];
    try {
        apps_obj = JSON.parse(apps);
    }
    catch(e)
    {}

    UTILS.gmSetWebApps(apps_obj);
}

/* called by C# to display Top Apps */
function gmDisplayTopAppsPage(apps)
{
    apps = apps.replace(/&#39;/g, "'");

    window.TOP_APPS = [];
    try
    {
        window.TOP_APPS = JSON.parse(apps);
    }
    catch(e) {}

    //will sort in ascending if a>b
    window.TOP_APPS.sort(function(a, b){
        if(parseInt(a["rank"])>parseInt(b["rank"])){
            return 1;
        }
        return -1;
    });

    UTILS.gmAppendToAppList(window.TOP_APPS);

    window.APPS_DICT = UTILS.gmBuildAppsDict(window.TOP_APPS);

    $('.head-apps').hover(function() {
        $('.scrollDrp').jScrollPane();
    });

    enableInfiniteScrolling(window.TOP_APPS);

}

function gmTopAppsPageLoaded()
{
    initLocalization();
	
    //document.getElementById("user_name").innerHTML= "Top Games";
    UTILS.gmLoadWebApps("gmDisplayWebTopAppsPage");

    UTILS.gmLoadSpinner('spinner');
    GmApi.callCSharpHandler("GetChannelAppsJson", "gmDisplayTopAppsPage", ["1", ""]);

}

