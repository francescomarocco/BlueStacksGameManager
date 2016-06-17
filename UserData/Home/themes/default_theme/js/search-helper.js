/*$(document).ready(function() {
    gmSearchAppsPageLoaded()
});*/

function initLoadSearchPage() {
    gmSearchAppsPageLoaded()
}


function gmDisplayWebTopAppsPage(apps)
{
    var apps_obj = [];
    try 
	{
        apps_obj = JSON.parse(apps);
    }
    catch(e) {}

    UTILS.gmSetWebApps(apps);
}

function gmSearchAppsPageLoaded()
{
    window.UTILS = new Utils('.scroller-body', 'appsList');

    window.searchClicked = false;
    $("#bst-header").load("header.html", function() {
        UTILS.LoadSettingsDropDown($('.dropDown.dropDown2'),
            $('.head-apps .dropDown.dropDown2'), $('.head-apps.settings .app-icon-settings'));
        UTILS.ShowPreviewRecentApps(".scrollDrp");
        UTILS.ShowPreviewTopApps("#preview_top_apps", "displayPreviewHeader");
        $('#searchbox').keypress(function(e){
            if(e.which == 13){
                gmSearchBtnClicked();
                e.preventDefault();
            }
        });

        $('.btn-search').click(function(e){
            setTimeout(function(){
                if(!window.searchClicked) 
                {
                    window.searchClicked = true;
                    gmSearchBtnClicked();
                }
            }, 100);
        });

        UTILS.gmLoadSpinner('spinner');

        UTILS.gmLoadWebApps("gmDisplayWebTopAppsPage");

        var searchstring = UTILS.urlParam("searchstring");
        if(searchstring != null) {
            searchstring = searchstring.replace(/\+/g, " ");
            gmSearch(searchstring);
            document.getElementById("searchbox").value= searchstring;       
        }
        $(window).resize(UTILS.SetSearchDropdownEvents);
        UTILS.SetSearchDropdownEvents();
        UTILS.LoadSearchDropdown("setSearchDropdown");
        UTILS.AddScroller();
        $(window).resize(UTILS.AddScroller);

        initLocalization();
    });


    loadProgressPopup();
    $("#bst-progress-popup").load("progress-popup.html", function() {
        // slider popup close
        $(".remodal-close, .bg-overlay").click(function(){
            $(".game-list, .bg-overlay").fadeOut();
             });
    });

    $('.head-apps').hover(function() {
        $('.scrollDrp').jScrollPane();
    });
}

$(window).on("load", function() {
    $(".head-apps.settings").hover(function(){
        $(this).find(".dropDown2").show();
    },function(){
        $(this).find(".dropDown2").hide();
    });
});

function gmSearchBtnClicked()
{
    gmSearch($.trim( document.getElementById("searchbox").value)); 
}

function gmSearch(searchstring)
{
    if(searchstring.indexOf('http://') == 0)
    {
        GmApi.callCSharpHandler("SendSearchStats", null, [searchstring]);
        GmApi.gmShowWebPage(searchstring.replace('http://', ''), searchstring);
        return;
    }
    if(searchstring.indexOf('https://') == 0)
    {
        GmApi.callCSharpHandler("SendSearchStats", null, [searchstring]);
        GmApi.gmShowWebPage(searchstring.replace('https://', ''), searchstring);
        return;
    }
    if(searchstring.indexOf('www.') == 0)
    {
        GmApi.callCSharpHandler("SendSearchStats", null, [searchstring]);
        GmApi.gmShowWebPage(searchstring, "http://"+searchstring);
        return;
    }

    UTILS.gmClearAppList();
    window.APPS_DICT = {};
    
    if(searchstring.trim() != "")
    {
        document.getElementById("user_name").innerHTML= "Search results for <span>"+searchstring+"</span>" 
        //TODO -> disable search button
        //show the spinner
        document.getElementById('spinner').style.visibility="visible";
        GmApi.callCSharpHandler('searchAppHandler', 'gmDisplaySearch', [searchstring]);
    } 
    else
    {
        document.getElementById("user_name").innerHTML= "Search results for <span>"+searchstring+"</span>" 
        document.getElementById('spinner').style.visibility="visible";

        GmApi.callCSharpHandler("GetChannelAppsJson", "gmDisplayTopAppsPage", ["1", ""]);
        UTILS.gmLoadWebApps("gmDisplayWebTopAppsPage");
    }


}

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
    document.getElementById('spinner').style.visibility="hidden";
}

function gmDisplaySearch(json_string)
{
    var json_obj = JSON.parse(json_string);    
   	
    var installed_apps_json = json_obj['installed_apps'];//GmApi.gmGetInstalledAppsJson();
    var channel_apps_json = json_obj['channel_apps'];//GmApi.gmGetChannelApps("null", "");
    var searchstring = json_obj['search_string'];

    //search for the searchstring in installed_apps_json
    var result1 = UTILS.gmSearchApps(installed_apps_json, searchstring);
    //build the apps-dictionary according to result 1
    APPS_DICT = UTILS.gmBuildAppsDict(result1);

    //show this result on the screen
    UTILS.gmAppendToAppList(result1);

    //search for the searchstring in channel_apps_json
    var resulttemp = UTILS.gmSearchApps(channel_apps_json, searchstring);
    //gmFilterCommonApps() will automatically update the APPS_DICT for uncommon apps
    var result2 = UTILS.gmFilterCommonApps(APPS_DICT, resulttemp);
    //result2 contains the uncommon apps (not common with result1)

    //append the result on screen
    UTILS.gmAppendToAppList(result2);

    //get the SearchUrl for playstore-search-results scraping
    var searchUrl = gmGetSearchUrl(searchstring);
    //make the network call in C#
    GmApi.callCSharpHandler('makeWebCall', null, [searchUrl, "gmResultFromPlay"]);
}

    
function gmResultFromPlay(response)
{
    var resulttemp = gmParseSearchHtml(response);
    //filter the apps from result3 which are present in the APPS_DICT
    var result3 = UTILS.gmFilterCommonApps(window.APPS_DICT ,resulttemp);
    UTILS.gmAppendToAppList(result3);
    document.getElementById('spinner').style.visibility="hidden";
}
