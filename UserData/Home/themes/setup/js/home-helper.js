window.TOP_APPS = [];
window.APPS_DICT = {};

$(document).ready(function() {
    window.UTILS = new Utils('.scroller-body', 'appsList');

    loadHeader("home");
    loadProgressPopup();

    gmTopAppsPageLoaded();
});

$(window).on("load", function() {
    $(".head-apps.settings").hover(function(){
        $(this).find(".dropDown2").show();
    },function(){
        $(this).find(".dropDown2").hide();
    });
});

function gmTopAppsPageLoaded(isTutorialPage)
{
    initLocalization();
    //document.getElementById("user_name").innerHTML= "Top Games";
    UTILS.gmLoadWebApps();
    UTILS.gmLoadSpinner('spinner');
    window.TOP_APPS = GmApi.gmGetChannelApps("1", "");

    //will sort in ascending if a>b
    window.TOP_APPS.sort(function(a, b){
        if(parseInt(a["rank"])>parseInt(b["rank"])){
            return 1;
        }
        return -1;
    });

    if(isTutorialPage != undefined && isTutorialPage)
    {
        UTILS.gmAppendToTutorialAppList(window.TOP_APPS);    
    }
    else
    {
        UTILS.gmAppendToAppList(window.TOP_APPS);
    }
    window.APPS_DICT = UTILS.gmBuildAppsDict(window.TOP_APPS);

    $('.head-apps').hover(function() {
        $('.scrollDrp').jScrollPane();
    });
}

