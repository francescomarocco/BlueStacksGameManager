$(document).ready(function() {
    gmSearchAppsPageLoaded()
});

function gmDisplayRecentApps(json_string) {

    UTILS.DisplayRecentApps(json_string);
}

function gmSearchAppsPageLoaded()
{
    window.UTILS = new Utils('.scroller-body', 'appsList');

    $("#bst-header").load("header.html", function() {
        UTILS.LoadSettingsDropDown($('.dropDown.dropDown2'),
            $('.head-apps .dropDown.dropDown2'), $('.head-apps.settings .app-icon-settings'));
        UTILS.ShowPreviewRecentApps(".scrollDrp");
        UTILS.ShowPreviewTopApps("#preview_top_apps");
        $('#searchbox').keypress(function(e){
            if(e.which == 13){
                gmSearchBtnClicked();
                e.preventDefault();
            }
        });

        $('.btn-search').click(function(e){
                gmSearchBtnClicked();
        });

        UTILS.gmLoadSpinner('spinner');

        UTILS.gmLoadWebApps();

        var searchstring = UTILS.urlParam("searchstring");
        if(searchstring != null) {
            searchstring = searchstring.replace(/\+/g, " ");
            gmSearch(searchstring);
            document.getElementById("searchbox").value= searchstring;       
        }

        $(window).resize(UTILS.SetSearchDropdownEvents);
        UTILS.SetSearchDropdownEvents();
        UTILS.LoadSearchDropdown();

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
        GmApi.gmShowWebPage(searchstring.replace('http://', ''), searchstring);
        return;
    }
    if(searchstring.indexOf('https://') == 0)
    {
        GmApi.gmShowWebPage(searchstring.replace('https://', ''), searchstring);
        return;
    }
    if(searchstring.indexOf('www.') == 0)
    {
        GmApi.gmShowWebPage(searchstring, "http://"+searchstring);
        return;
    }

    UTILS.gmClearAppList();
    window.APPS_DICT = {};
    
    if(searchstring != "")
    {
        document.getElementById("user_name").innerHTML= "Search results for <span>"+searchstring+"</span>" 
        //TODO -> disable search button
		window.external.SendSearchStats(searchstring);
        //show the spinner
        document.getElementById('spinner').style.visibility="visible";
        var installed_apps_json = GmApi.gmGetInstalledAppsJson();
        var channel_apps_json = GmApi.gmGetChannelApps("null", "");

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
        GmApi.gmMakeWebCall(searchUrl, "gmResultFromPlay");
    }
}

    
function gmResultFromPlay(response)
{
    var resulttemp = gmParseSearchHtml(response);
    //filter the apps from result3 which are present in the APPS_DICT
    var result3 = UTILS.gmFilterCommonApps(window.APPS_DICT ,resulttemp);
    UTILS.gmAppendToAppList(result3);
    document.getElementById('spinner').style.visibility="hidden";
}
