/*$(document).ready(function() {
    window.UTILS = new Utils('.scroller-body','appsList');

    loadHeader("localMyApps");
    loadProgressPopup();

    gmLocalMyappsLoaded();
});*/

function loadLocalApps() 
{
    window.UTILS = new Utils('.scroller-body','appsList');

    loadHeader("localMyApps");
    loadProgressPopup();

    gmLocalMyappsLoaded();
    unInstalledClicked = false;
}

$(window).on("load", function() {
    $(".head-apps.settings").hover(function(){
        $(this).find(".dropDown2").show();
    },function(){
        $(this).find(".dropDown2").hide();
    });
});

function gmLocalMyappsLoaded()
{
    initLocalization();
    gmLoadMyApps(false);
    enableInfiniteScrolling(window.INSTALLED_APPS_JSON);
}

function myAppsTutorialLoaded()
{
    UTILS.gmClearAppList();
    UTILS.gmAppendToAppList(JSON.parse(window.INSTALLED_APPS_DUMMY));
}

function gmLoadMyApps(isEditMode)
{
    if (isEditMode) 
	{
        GmApi.callCSharpHandler("GetInstalledAppsJsonforHTMLElement", "gmSetMyAppsEditMode", [""]);	
    }
    else 
    {
        GmApi.callCSharpHandler("GetInstalledAppsJsonforHTMLElement", "gmSetMyApps", [""]);
    }
}

function gmSetMyAppsEditMode(json_string)
{
	gmSetMyApps(json_string);
	$('.app-list .editBtnBox').toggleClass('active');
}


function gmSetMyApps(json_string)
{
    var json_obj = JSON.parse(json_string);
    var installed_apps = json_obj["recentApps"];
    window.INSTALLED_APPS_JSON = installed_apps;
    UTILS.sortAppsByLastUsed(window.INSTALLED_APPS_JSON);
    UTILS.gmClearAppList();
    UTILS.gmAppendToAppList(window.INSTALLED_APPS_JSON);

    $('.head-apps').hover(function() {
        $('.scrollDrp').jScrollPane();
    });
}

function gmInitiateLocalSearch()
{
    gmLocalSearch(window.INSTALLED_APPS_JSON , $.trim(document.getElementById("searchbox").value));
}

function gmLocalSearch(apps, searchstring)
{
    var result = UTILS.gmSearchApps(apps, searchstring);
    UTILS.gmClearAppList();
    UTILS.gmAppendToAppList(result);
}


var INSTALLED_APPS_DUMMY = (function () {/*
                                                [{"title": "Rope Escape", "pkgName": "com.hyperkani.rope", "activity": "com.hyperkani.rope.Rope", "iconUrl": "img_tutorial/com.hyperkani.rope.png", "apkUrl": "", "helpurl": "", "last_used": "10/31/2014 2:01:30 PM"},
                                                {"title": "hike", "pkgName": "com.bsb.hike", "activity": "com.bsb.hike.ui.HomeActivity", "iconUrl": "img_tutorial/com.bsb.hike.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
                                                {"title": "Angry Birds", "pkgName": "com.rovio.angrybirds", "activity": "com.rovio.fusion.App", "iconUrl": "img_tutorial/com.rovio.angrybirds.png", "apkUrl": "", "helpurl": "", "last_used": "12/29/2014 12:01:54 PM"},
                                                {"title": "Instagram", "pkgName": "com.instagram.android", "activity": "com.instagram.android.activity.MainTabActivity", "iconUrl": "img_tutorial/com.instagram.android.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
                                                {"title": "WhatsApp", "pkgName": "com.whatsapp", "activity": "com.whatsapp.Main", "iconUrl": "img_tutorial/com.whatsapp.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"}
                                                ]      
                                                */}).toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
