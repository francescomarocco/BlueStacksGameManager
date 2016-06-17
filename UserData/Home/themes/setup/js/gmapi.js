var GmApi = {
	
	callCSharpHandler: function(calledFunction, callbackFunction, dataObj) {
		var dataObj = {calledFunction: calledFunction, callbackFunction: callbackFunction, data: dataObj};
		var event = new MessageEvent('MessageEvent', { 'view': window, 'bubbles': false, 'cancelable': false, 'data': JSON.stringify(dataObj)});
		document.dispatchEvent(event);
	},
	
	gmShowApp : function(displayName, packageName, activityName, apkUrl, helpUrl)
	{
		//alert(displayName+","+packageName+","+activityName+","+apkUrl+","+helpUrl);
		if(activityName=="")
		{
			activityName = ".Main";
		}
		this.callCSharpHandler("ShowApp", null, [displayName, packageName, activityName, apkUrl, helpUrl]);
	},
	
	gmRelaunchApp : function(displayName, packageName, activityName, apkUrl, helpUrl)
	{
		//alert(displayName+","+packageName+","+activityName+","+apkUrl+","+helpUrl);
		if(activityName=="")
		{
			activityName = ".Main";
		}
		this.callCSharpHandler("relaunchApp", null, [displayName, packageName, activityName, apkUrl, helpUrl]);
	},
	
	gmShowWebPage : function(title, webUrl)
	{
		this.callCSharpHandler("showWebPage", null, [title, webUrl]);
	},
	
	gmGetThemesJson : function()
	{
		alert("to be implemented with Gecko: gmGetThemesJson");
		try
 		{
			return JSON.parse(window.external.GetThemesJson());
		}
		catch(e)
		{
			//console.log(e);
			return JSON.parse("[]");
		}
	},

	gmStageCompleted : function(stage)
	{
		this.gmStageCompleted("StageCompleted", null, null);
	},

	gmInTabBar : function(callBackFunction)
	{
		this.callCSharpHandler("inTabBar", callBackFunction, null);
	},

    gmCloseCurrentTab : function()
    {
        this.callCSharpHandler("CloseCurrentTab", null, null);
    },

	gmReloadFailedUrl : function()
	{
		this.callCSharpHandler("reloadFailedUrl", null, null);
	},

	gmShowMyAppsLocal : function()
	{
		this.callCSharpHandler("showMyAppsLocal", null, null);
	},

	gmIsAppInstalled : function(pkg, callBackFunction)
	{
		this.callCSharpHandler("isAppInstalled", callBackFunction, [pkg]);
	},

	gmGetAppDownloadProgress : function(pkg, callBackFunction)
	{
		this.callCSharpHandler("getAppDownloadProgress", callBackFunction, [pkg]);
	},

	gmStartAppDownload : function(pkg, apkUrl)
	{
		this.callCSharpHandler("startCDNAppDownload", null, [pkg, apkUrl]);
	},

	gmIsBlueStacksInstalled : function()
	{
		return true;//window.external.IsBlueStacksInstalled();
	},

	gmUninstallApp : function(pkg, callBackFunction)
	{
		this.callCSharpHandler("uninstallApp", callBackFunction, [pkg]);
	},

	gmCreateAppShortcut : function(pkg)
	{
		this.callCSharpHandler("createAppShortcut", null, [pkg]);
	},

	gmReportProblem : function()
	{
		this.callCSharpHandler("ReportProblem" , null, null);
	},

	gmRestartAndroidPlugin : function()
	{
		this.callCSharpHandler("RestartAndroidPlugin", null, null);
	},

	gmCheckForUpdates : function()
	{
		this.callCSharpHandler("CheckForUpdates", null, null);
	},

	gmMyAccount : function()
	{
		this.callCSharpHandler("showMyAccount", null, null);
	},

	gmLaunchHelp : function()
	{
		this.callCSharpHandler("launchHelpApp", null, null);
	},

	gmLaunchLanguageInput : function()
	{
		this.callCSharpHandler("launchLanguageInputApp", null, null);
	},

	gmShowFoneLink : function()
	{
		this.callCSharpHandler("ShowFoneLink", null, null);
	},

	getUserGUID : function()
	{
		alert("to be implemented by Gecko: getUserGUID");
		return window.external.GetUserGUID();
	},

    //theme specific
    gmLaunchHome : function()
    {
		this.callCSharpHandler('LaunchHome', null, null);
    },

    //theme specific
    gmLaunchSearch : function(search_string)
    {
	    this.callCSharpHandler("LaunchSearch", null, [search_string]);
    },

    //theme specific
    gmLaunchThemesPage : function()
    {
		this.callCSharpHandler("LaunchThemesPage",null,null); 
    },

    gmMakeWebCall : function(url, script_tobe_invoked)
    {
        //script_tobe_invoked(htmlResult); will be called when done
        try
        {
			this.callCSharpHandler("makeWebCall", null, [url, script_tobe_invoked]);
        }
        catch(e)
        {
            //alert("exception in C# communication with PlayStore");
        }
    },

    gmInstallOnDevice : function(pkgName)
    {
		alert("to be implemented by Gecko: gmInstallOnDevice");
        return window.external.InstallOnDevice(pkgName);
    },

    gmGetAvailableLocaleName : function()
    {
		alert("to be implemented by Gecko: gmGetAvailableLocaleName");
        return window.external.GetAvailableLocaleName();
    },

    gmSetTheme : function(name, theme_base_url, download_url)
    {
		this.callCSharpHandler("SetTheme", null, [name, theme_base_url, download_url]);
    },

    gmGetCurrentTheme : function()
    {
	    alert("to be implemented by Gecko: gmGetCurrentTheme");
        return window.external.GetCurrentTheme();
    }


    //TODO
    //this method should be used if you want to open any html page from local-my-apps, or any page which is served offline
    /*
    gmOpenHtmlFromThemeBaseUrl : function(file_name)
    {

    }
    */
}
