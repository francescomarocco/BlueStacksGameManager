function gmGetScrollbarPosition()
{
    var scroller = $('.scroller').jScrollPane();
    var api = scroller.data('jsp');
    return api.getPercentScrolledY();
}

function gmUpdateScrollbar(scrollbar_position)
{
    var scroller = $('.scroller').jScrollPane();
    var api = scroller.data('jsp');
    api.reinitialise();
    api.scrollToPercentY(scrollbar_position);
}

function gmHideAlert(title, msg)
{
    $(".game-list, .bg-overlay").fadeOut();
}

var timeoutstarted = false;
var timeoutvar;

function gmShowAlert(msg, percent)
{
    $('.bg-overlay').fadeIn();
    $(".game-list").fadeIn(300,function(){
    });

	if(msg == "failed")
	{
		$(".installHead").text("Unable to install android plugin");
	}
	else
	{
		$(".installHead").text("android plugin downloading...");
	}
    $(".htmlplugin").text("html plugin complete ");

    $('.tym').html(msg);
    $('#percent').css('width',(percent)+"%");

    if(timeoutstarted==false)
    {
        timeoutstarted = true;
        timeoutvar = setInterval(function()
        {
			GmApi.callCSharpHandler("getInstallStatus", "gmInstallStatus", null);
        }, 1000);
    }
}

function gmInstallStatus(status_string) {
	var items = status_string.split('##');

	if(items[0]=="downloading" || items[0]=="installing")
	{
		var text = "android plugin " + items[0] + "...";
		$(".installHead").text(text);
		$('.tym').html(items[1]);
		$('#percent').css('width',(items[2])+"%");
	}
	else if(items[0]=="failed" || items[0]=="installed")
	{
		clearInterval(timeoutvar);
	}
}

function gmHandleAppDisplayed(app_installed, app_to_display)
{
    var app_data = JSON.parse(app_to_display.replace(/&#39;/g, "'"));
    if(app_installed == "True")
    {
         GmApi.gmShowApp(app_data.title, app_data.pkg, app_data.activity, app_data.apkurl, app_data.helpurl);
    }
    
    //app is not installed
    else if(app_data.apkurl!=null && $.trim(app_data.apkurl)!="")
    {
        //alert("bannerUrl = "+bannerUrl+" apkurl="+apkurl);
        var url = window.location.href;
        GmApi.gmShowWebPage(app_data.title, url.substring(0, url.lastIndexOf('/'))+"/app-details.html?pkg="+app_data.pkg+"&bannerUrl="+app_data.bannerUrl+"&apkUrl="+app_data.apkurl+"&title="+app_data.title);
    }
    else
    //bluestacks is installed, category is android ,app is not installed and app does not contain apkUrl
    {
        GmApi.gmShowApp(app_data.title, app_data.pkg, app_data.activity, app_data.apkurl, app_data.helpurl);
    }
}

function enableInfiniteScrolling(appJson)
{
    $(window).scroll(function()
    {
        if ($(window).scrollTop() == $(document).height() - $(window).height())
        {
            if (window.LOAD_NEXT == false)
            {
                return;
            }

            setTimeout(function()
            {
                window.LOAD_NEXT = true;
            }, 1000);

            window.LOAD_NEXT = false;
            UTILS.gmAppendToAppList(appJson);
        }
    });
}

function gmHandleAppClick(title, pkg, activity, apkurl, helpurl, bannerUrl, webUrl, category)
{
    if(category=="web")
    {
        GmApi.gmShowWebPage(title, webUrl);
    }
    else if(!GmApi.gmIsBlueStacksInstalled())
    {
        //showApp will call gmShowAlert(), since bluestacks is not installed yet
        GmApi.gmShowApp(title, pkg, activity, apkurl, helpurl);
    }
    //bluestacks installed and category is android
    else      
    {
        var json_obj = {
            title: title,
            pkg: pkg,
            activity: activity,
            apkurl: apkurl,
            bannerUrl: bannerUrl,
            webUrl: webUrl,
            category: category,
            helpurl: helpurl
        }
        GmApi.callCSharpHandler('gmHandleAppDisplayed', null, [JSON.stringify(json_obj)]);  	
    }
}

function showDeletePopup(appName, pkgName, iconUrl)
{
    if(appName == null || pkgName == null || iconUrl == null)
        return;

    popup = $('.deleteGameBlk');
    popup.html("    <h3>Are you sure you want to delete?</h3>"
               +"    <div class=\"deleteGame\">"
               +"        <img src=\""+iconUrl+"\">"
               +"        <p>"+appName+"</p>"
               +"    </div>"
               +"    <button class=\"btn yes\" onclick=\"this.disabled=true;uninstallApp('"+pkgName+"')\">yes</button>"
               +"    <button class=\"btn no\" onclick=\"HidePopUp()\">no</button>"
            );
    $('.bg-overlay').fadeIn();
    $('.game-list').fadeIn(300,function(){});
}

function showShortcutPopup(appName, iconUrl)
{
    if(appName == null || iconUrl == null)
        return;

    popup = $('.deleteGameBlk');
    popup.html("    <h3>Shortcut has been created!</h3>"
               +"    <div class=\"deleteGame\">"
               +"        <img src=\""+iconUrl+"\">"
               +"        <p>"+appName+"</p>"
               +"    </div>"
               +"    <button class=\"btn yes\" onclick=\"HidePopUp()\">ok</button>"
            );
    $('.bg-overlay').fadeIn();
    $('.game-list').fadeIn(300,function(){});
}

function isUninstalled(isUninstall)
{
    if( isUninstall != "True")
    {
        alert("unable to uninstall");
    }
    else
    {
        //refresh the applist
        gmLoadMyApps(true);
    }
    $(".game-list, .bg-overlay").fadeOut();
}

function uninstallApp(pkg)
{
    GmApi.gmUninstallApp(pkg, "isUninstalled");
}

function setSearchDropdown(apps)
{
    var apps_obj = [];
    try 
    {
        apps_obj = JSON.parse(apps.replace(/&#39;/g, "'"));
    }
    catch(e) {}

    UTILS.SetSearchDropdown(apps_obj);
    UTILS.AddScroller();
    $(window).resize(UTILS.AddScroller);
}

function displayPreviewHeader(json_string)
{
    var json_obj = JSON.parse(json_string.replace(/&#39;/g, "'"));
    var html_class = json_obj['html_class'];
    var apps_obj = [];
    try
    {
        apps_obj = JSON.parse(json_obj['apps']);
    }
    catch(e) {}
    UTILS.DisplayPreviewTopApps(html_class, apps_obj);
}

function gmDisplayRecentApps(json_string)
{
    UTILS.DisplayRecentApps(json_string);
    UTILS.AddScroller();
    $(window).resize(UTILS.AddScroller);
}

function loadHeader(pageType)
{
    $("#bst-header").load("header.html", function() {
				
        UTILS.LoadSettingsDropDown($('.dropDown.dropDown2'),
             $('.head-apps .dropDown.dropDown2'), $('.head-apps.settings .app-icon-settings'));

        UTILS.ShowPreviewRecentApps(".scrollDrp");

        UTILS.ShowPreviewTopApps("#preview_top_apps", "displayPreviewHeader");
    
	    $('#searchbox').keypress(function(e){
            if(e.which == 13){
                UTILS.submitSearch();
                e.preventDefault();
            }
        });

        $('.btn-search').click(function(e){
            UTILS.submitSearch();
        });

        $(window).resize(UTILS.SetSearchDropdownEvents);
        $(window).load(UTILS.SetSearchDropdownEvents);
        UTILS.SetSearchDropdownEvents();
        UTILS.LoadSearchDropdown("setSearchDropdown");

        UTILS.AddScroller();
        $(window).resize(UTILS.AddScroller);

        if (pageType == "localMyApps")
        {
            GmApi.callCSharpHandler("getUserName", "gmSetUserName", null);
            $('.scroller-body').jScrollPane()

            $("#searchbox").keyup(function(){
                gmInitiateLocalSearch()
            });
        }
        else if (pageType == "themes")
        {
            $('.searchbox').css("display", "none");
        }

        UTILS.gmLoadSpinner('spinner');

        initLocalization();
		
    });

}

function gmSetUserName(username) {
    if (username == null)
        username = "";
		
    $('#user_name').html = username + "'s Games";
}

function loadProgressPopup()
{
    $("#bst-progress-popup").load("progress-popup.html", function() {
        // slider popup close
        $(".remodal-close, .bg-overlay").click(function(){
            $(".game-list, .bg-overlay").fadeOut();
        });
        initLocalization();
    });
}

function HidePopUp()
{
    $(".game-list, .bg-overlay").fadeOut();
}

function setLocalName(localeName, callback)
{
    try
    {
        window.gAllStrings = {};
        fileName = "i18n/" + localeName + ".json";

       if ( $.isFunction(localizedAndCallback) ) 
       {
        $.ajax({
            type: "GET",
            url: fileName,
            dataType: "text",
            contentType: "application/json; charset=utf-8",
            success: function(result)
            {
                allStrings = JSON.parse(result);
                window.gAllStrings = allStrings;
                $(".i18n").each(function ()
                {
                    $(this).html(allStrings[$(this).attr("label")]);
                });
                return callback(localizedAndCallback());
            },
            error: function (xhr, textStatus, errorThrown)
            {
                fileName = "i18n/en-US.json";
                $.ajax({
                    type: "GET",
                    url: fileName,
                    contentType: "application/json; charset=utf-8",
                    success: function(result)
                    {
                        allStrings = JSON.parse(result);
                        window.gAllStrings = allStrings;
                        $(".i18n").each(function ()
                        {
                            $(this).html(allStrings[$(this).attr("label")]);
                        });
                    },
                    error: function (xhr, textStatus, errorThrown)
                    {
//                        alert("eng error: " + xhr.responseText);
                    }
                });                
                return callback(localizedAndCallback());
            }
        });
        }

        else
        {
            $.ajax({
            type: "GET",
            url: fileName,
            dataType: "text",
            contentType: "application/json; charset=utf-8",
            success: function(result)
            {
                allStrings = JSON.parse(result);
                window.gAllStrings = allStrings;
                $(".i18n").each(function ()
                {
                    $(this).html(allStrings[$(this).attr("label")]);
                });
            },
            error: function (xhr, textStatus, errorThrown)
            {
                fileName = "i18n/en-US.json";
                $.ajax({
                    type: "GET",
                    url: fileName,
                    contentType: "application/json; charset=utf-8",
                    success: function(result)
                    {
                        allStrings = JSON.parse(result);
                        window.gAllStrings = allStrings;
                        $(".i18n").each(function ()
                        {
                            $(this).html(allStrings[$(this).attr("label")]);
                        });
                    },
                    error: function (xhr, textStatus, errorThrown)
                    {
//                        alert("eng error: " + xhr.responseText);
                    }
                });                
            }
        }); 
        }
    

    }
    catch (err)
    {
//        alert("Localization failed. Will use default English strings. error: " + err.message);
    }
}

function initLocalization()
{
    /* XXX: Vikram: This should be commented in prod builds */
    $(".i18n").each(function ()
        {
            $(this).html($(this).attr("label"));
        });

	GmApi.callCSharpHandler("GetAvailableLocaleName", "setLocalName", null);
}

function getLocalizedString(label)
{
    return (window.gAllStrings[label] != null ? window.gAllStrings[label]: label);
}
