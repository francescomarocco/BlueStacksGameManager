function Utils(scrollerClass, appListId)
{
    window.APP_INDEX = 0;
    this.SCROLLER_CLASS = scrollerClass;
    this.APPLIST_ID = appListId;

    this.gmLoadSpinner = function(id){
        var opts = {
                    lines: 13, // The number of lines to draw
                    length: 3, // The length of each line
                    width: 3, // The line thickness
                    radius: 6, // The radius of the inner circle
                    corners: 1, // Corner roundness (0..1)
                    rotate: 0, // The rotation offset
                    direction: 1, // 1: clockwise, -1: counterclockwise
                    color: '#000', // #rgb or #rrggbb or array of colors
                    speed: 1, // Rounds per second
                    trail: 60, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false, // Whether to use hardware acceleration
                    className: 'spinner', // The CSS class to assign to the spinner
                    zIndex: 2e9, // The z-index (defaults to 2000000000)
                    top: '0%', // Top position relative to parent
                    left: '0%' // Left position relative to parent
        };

        var target = document.getElementById(id);
        var spinner = new Spinner(opts).spin(target);
    };

    this.gmSetWebApps = function(web_apps)
    {
        var web_games_html = "";

        //var owl = $('#owl-demo');

        for(var i=0; i<web_apps.length; i++){
            if(web_apps[i]["category"] == "web"){

		if (web_apps[i]["iconUrl"].startsWith("file:"))
		    web_apps[i]["iconUrl"] = "/static/"+web_apps[i]["pkgName"]+".png";
                web_games_html += "<li onclick=\"gmHandleAppClick('"
                    +web_apps[i]["title"].replace("\'", "\\\'")+"','"
                    +((web_apps[i]["pkgName"]==null)?"":web_apps[i]["pkgName"])+"','"
                    +((web_apps[i]["activity"]==null)?"":web_apps[i]["activity"])+"','"
                    +((web_apps[i]["apkUrl"]==null)?"":web_apps[i]["apkUrl"])+"','"
                    +((web_apps[i]["bannerUrl"]==null)?"":web_apps[i]["bannerUrl"])+"','"
                    +((web_apps[i]["webUrl"]==null)?"":web_apps[i]["webUrl"])+"','"
                    +((web_apps[i]["category"]==null)?"":web_apps[i]["category"])
                    +"')\" style=\"cursor:pointer;\">"
                    //+"<!--h4>" + web_apps[i]["title"] + "</h4!-->"
                    +"<a><img src='" + web_apps[i]["iconUrl"] + "'/></a></li>";
            }

        }
        ($('#carousel')).html(web_games_html);

        //owl.data('owlCarousel').destroy();
        //owl.html(web_games_html);
        //this.gmRegisterOwlDiv();

        // slider popup function
        /*$(".app-list li").click(function(){
          $('.bg-overlay').fadeIn();
          $(".game-list").fadeIn(300,function(){
          });
          });*/

    }

    this.gmLoadWebApps = function(callbackFunction)
    {
        GmApi.callCSharpHandler("GetChannelAppsJson", callbackFunction, ["null", "web"]);
    };


    this.gmUpdateScroller = function()
    {
        //var scroller = $(this.SCROLLER_CLASS).jScrollPane();
        //var api = scroller.data('jsp');
        //api.reinitialise();
    };

    this.gmAppendToAppList = function(apps)
    {
        $("#no-apps-msg").hide();
        appDiv = $("#"+this.APPLIST_ID);
        if (apps.length == 0)
        {
            $("#no-apps-msg").show();
            return 0;
        }

        var appText = "";

        appsLoaded = 0;
        var pagePathName= window.location.pathname;
        var pageName = pagePathName.substring(pagePathName.lastIndexOf("/") + 1);           // checking if the path,i.e, file is local-my-apps or not.
        var i = 0;
        if(!(pageName == "local-my-apps.html")){                                            // if it's not local-my-apps, then set i as window.APP_INDEX which was by default the value of i,else i is 0
            i=window.APP_INDEX;
        }
        for(; i < apps.length; i++)
        {
            if (apps[i]["iconUrl"] == null)
                continue;

            if (appsLoaded > 30)        // If on a resolution, 21 apps are not shown, scrolling won't work. --> Increase this number.
                break;

            appsLoaded++;
            if (apps[i]["iconUrl"].startsWith("file:"))
                apps[i]["iconUrl"] = "/static/"+apps[i]["pkgName"]+".png";

            appText += "<li class=\"wide\">"
                +"<a href=\"#\" "
                +"onclick=\""+this.GetClickString(apps[i])+"\">"
                +"<span class=\"img-app\"><img src=\""+apps[i]["iconUrl"]+"\"></span>"
                +"<span class=\"name-app\"><div class=\"name\">"+apps[i]["title"].replace("\'", "\\\'")+"</div>"
                +((apps[i]["category"] == "web")?("<img src=\"img/"+"globe-ico.png"+"\">"):(""))
                +"<div class=\"nameCmpny\">"+((apps[i]["developer"]==null)?"":apps[i]["developer"])+"</div>"
                +"</span>"
                +"</a>"
                //only applicable for localmyapps, on other pages this wont be even visible
                +"<div class=\"editBtnBox\">"
                +"    <a class=\"i18n editLink\" label=\"trash\" onclick=\"showDeletePopup('"
                +apps[i]["title"].replace("\'", "\\\'")+"','"
                +((apps[i]["pkgName"]==null)?"":apps[i]["pkgName"])+"','"
                +((apps[i]["iconUrl"]==null)?"":apps[i]["iconUrl"])
                +"')\">trash</a>"

                +"    <a class=\"i18n shortLink\" label=\"shortcut\" onclick=\"GmApi.gmCreateAppShortcut('"
                +((apps[i]["pkgName"]==null)?"":apps[i]["pkgName"])
                +"');showShortcutPopup('"
                +apps[i]["title"].replace("\'", "\\\'")+"','"
                +((apps[i]["iconUrl"]==null)?"":apps[i]["iconUrl"])
                +"')\">shortcut</a>"
                +"</div>"
                +"</li>";
        }
        appDiv.append(appText);
        window.APP_INDEX += appsLoaded;
		
        if (appsLoaded ==0)
        { 
            $("#no-apps-msg").show();
            return 0;
        }

        this.gmUpdateScroller();
    };

    this.GetClickString = function(app)
    {
        return "gmHandleAppClick('"
                +app["title"].replace("\'", "\\\'")+"','"
                +((app["pkgName"]==null)?"":app["pkgName"])+"','"
                +((app["activity"]==null)?"":app["activity"])+"','"
                +((app["apkUrl"]==null)?"":app["apkUrl"])+"','"
                +((app["bannerUrl"]==null)?"":app["bannerUrl"])+"','"
                +((app["webUrl"]==null)?"":app["webUrl"])+"','"
                +((app["category"]==null)?"":app["category"])
                +"')";
    };

    this.gmAppendToTutorialAppList = function(apps)
    {
        for(var i=0; i<apps.length; i++)
        {
            if (apps[i]["iconUrl"] == null)
                continue;

            if(i>50)
                break;

            var prefix;
            var postfix;

            if($.trim(apps[i]["title"]) == "2048")
            {
                prefix = "<li class=\"wide active\" onclick=\""+this.GetClickString(apps[i])+";";
                postfix = " window.location.href='tutorial-4.html';\">"
                    +"<a href=\"#\">"
                    +"<span class=\"img-app\"><img src=\""+apps[i]["iconUrl"]+"\"></span>"
                    +"<span class=\"name-app\"><div class=\"name\">"+apps[i]["title"].replace("\'", "\\\'")+"</div>"
                    +((apps[i]["category"] == "web")?("<img src=\"img/"+"globe-ico.png"+"\">"):(""))

                    +"<div class=\"nameCmpny\">"+((apps[i]["developer"]==null)?"":apps[i]["developer"])+"</div>"
                    +"</span>"
                    +"</a>"
                    +"<span class=\"comment-clickme pickme\">"
                    +"<p>Pick me</p>"
                    +"</span>"
                    +"</li>";

                $("#"+this.APPLIST_ID).append(prefix + parameters + postfix); 
            }
            else
            {
                if (apps[i]["iconUrl"].startsWith("file:"))
                    apps[i]["iconUrl"] = "/static/"+apps[i]["pkgName"]+".png";
 
                prefix = "<li class=\"wide\""
                postfix = +">"
                    +"<a href=\"#\">"
                    +"<span class=\"img-app\"><img src=\""+apps[i]["iconUrl"]+"\"></span>"
                    +"<span class=\"name-app\"><div class=\"name\">"+apps[i]["title"].replace("\'", "\\\'")+"</div>"
                    +((apps[i]["category"] == "web")?("<img src=\"img/"+"globe-ico.png"+"\">"):(""))

                    +"<div class=\"nameCmpny\">"+((apps[i]["developer"]==null)?"":apps[i]["developer"])+"</div>"
                    +"</span>"
                    +"</a>"
                    +"</li>";

                $("#"+this.APPLIST_ID).append(prefix + postfix); 
            }
        }
        this.gmUpdateScroller();
    };



    this.gmClearAppList = function()
    {
        document.getElementById(this.APPLIST_ID).innerHTML="";
        this.gmUpdateScroller();
    };

    this.gmSearchApps = function(apps_json, searchstring)
    {
        var filtered_apps = [];
        var matched=0;
        for(var i=0; i<apps_json.length; i++){
            //alert(apps_json[i]["title"]+"  "+(apps_json[i]["title"].indexOf(searchstring)>-1));
            if(apps_json[i]["title"]!=null && (apps_json[i]["title"].toLowerCase().indexOf(searchstring.toLowerCase())>-1)){
                matched++;
                //alert(apps_json[i]["title"]+" matches");
                filtered_apps.push(apps_json[i]);
            }
        }
        return filtered_apps;
    };

    this.gmBuildAppsDict = function(apps)
    {
        apps_dict = {};
        for(var i=0; i<apps.length; i++){
            apps_dict[apps[i]["pkgName"]]=apps[i]["title"];
        }
        return apps_dict;
    };

    this.gmFilterCommonApps = function(apps_dict, apps)
    {
        var uncommon_apps=[];
        for(var i=0; i<apps.length; i++)
        {
            if(!apps_dict.hasOwnProperty(apps[i]["pkgName"]))
            {
                uncommon_apps.push(apps[i]);
                apps_dict[apps[i]["pkgName"]] = apps[i]["title"];
            }
        }
        return uncommon_apps;
    };


    this.urlParam = function(name, url){
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    
    this.submitSearch = function()
    {
         var search_string = $('#searchbox').val();
         if(search_string.indexOf('http://') == 0)
         {
              GmApi.gmShowWebPage(search_string.replace('http://', ''), search_string);
         }
         else if(search_string.indexOf('www.') == 0)
         {
              GmApi.gmShowWebPage(search_string, "http://"+search_string);
         }
         else
         {
              GmApi.gmLaunchSearch(search_string);
              //window.location.href="search-results.html?searchstring="+search_string;
         }
    };

    this.RefreshDropDown = function(drop_down_div, drop_down)
    {
        drop_down_div.html("");
        var text = '';

        if (GmApi.gmIsBlueStacksInstalled())
        {
            text ='<a href="#" id="reportproblem">' + getLocalisedString("report_problem") + '</a>'
                //+'<a href="#" id="themes">' + getLocalisedString("themes") + '</a>'
                +'<a href="#" id="restartandroidplugin">' + getLocalisedString("restart_android") + '</a>'
                +'<a href="#" id="checkforupdates">' + getLocalisedString("check_updates") + '</a>'
                +'<a href="#" id="languageinput">' + getLocalisedString("lang_input") + '</a>'
                //+'<a href="#" id="myaccount">' + getLocalisedString("my_account") + '</a>'
                +'<a href="#" id="help">' + getLocalisedString("help") + '</a>';
        }
        else
        {
            text ='<a class="inactive" href="#" id="reportproblem">' + getLocalisedString("report_problem") + '</a>'
                //+'<a href="#" id="themes">' + getLocalisedString("themes") + '</a>'
                +'<a class="inactive" href="#" id="restartandroidplugin">' + getLocalisedString("restart_android") + '</a>'
                +'<a class="inactive" href="#" id="checkforupdates">' + getLocalisedString("check_updates") + '</a>'
                +'<a class="inactive" href="#" id="languageinput">' + getLocalisedString("lang_input") + '</a>'
                //+'<a class="inactive" href="#" id="myaccount">' + getLocalisedString("my_account") + '</a>'
                +'<a class="inactive" href="#" id="help">' + getLocalisedString("help") + '</a>';
        }
        drop_down_div.html(text);


        //drop_down Settings
        $("#reportproblem").click(function(e){
            if(GmApi.gmIsBlueStacksInstalled())
            {
                //drop_down.toggle();
                GmApi.gmReportProblem();
            }
        });
        $("#restartandroidplugin").click(function(e){
            if(GmApi.gmIsBlueStacksInstalled())
            {
                //drop_down.toggle();
                GmApi.gmRestartAndroidPlugin();
            }
        });
        $("#themes").click(function(e){
            GmApi.gmLaunchThemesPage();
        });
        $("#checkforupdates").click(function(e){
            if(GmApi.gmIsBlueStacksInstalled())
            {
                //drop_down.toggle();
                GmApi.gmCheckForUpdates();
            }
        });
        $("#myaccount").click(function(e){
            if(GmApi.gmIsBlueStacksInstalled())
            {
                //drop_down.toggle();
                GmApi.gmMyAccount();
            }
        });
        $("#languageinput").click(function(e){
            if(GmApi.gmIsBlueStacksInstalled())
            {
                //drop_down.toggle();
                GmApi.gmLaunchLanguageInput();
            }
        });
        $("#help").click(function(e){
            if(GmApi.gmIsBlueStacksInstalled())
            {
                //drop_down.toggle();
                GmApi.gmLaunchHelp();
            }
        });
        $(document).mouseup(function(e) {
            if (drop_down.is(":visible") && $(e.target).parents('.head-apps.settings').length == 0) {
                drop_down.hide();
            }
        });
    };


    this.LoadSettingsDropDown = function(drop_down_div, drop_down, drop_link)
    {
        drop_link.hover(function(e) {
            UTILS.RefreshDropDown(drop_down_div, drop_down);
        });
    };


    this.sortAppsByLastUsed = function(apps)
    {
        apps.sort(function(a,b) {
            if(a['last_used'] != undefined && b['last_used'] != undefined)
            {
                var date1 = new Date(a["last_used"]);
                var date2 = new Date(b["last_used"]);
                if(date1 > date2)
                    return -1;
                else
                    return 1;
            }
            else if (a['last_used'] != undefined)
            {
                return -1;
            }
            else if (b['last_used'] != undefined)
            {
                return 1;
            }
            else
            {
                if(a["title"] > b["title"])
                    return 1;
                else
                    return -1;
            }
        });
    };

    this.DisplayPreviewTopApps = function(html_class, apps)
    {
        var element = $(html_class);
        var content = "";
        element.html("");

        //will sort in ascending if a>b
        apps.sort(function(a, b){
            if(parseInt(a["rank"])>parseInt(b["rank"])){
                return 1;
            }
            return -1;
        });


        for(var i=0 ; (i<apps.length && i<5) ; i++)
        {
            if (apps[i]["iconUrl"] == null)
                continue;

            if (apps[i]["iconUrl"].startsWith("file:"))
                apps[i]["iconUrl"] = "/static/"+apps[i]["pkgName"]+".png";

            //console.log("h"+i);
            content += '<span class="dropApp" onclick="'+this.GetClickString(apps[i])+';return false;"><img src="'+apps[i]["iconUrl"]+'"></span>';
        }
        element.html(content);

	}

    this.ShowPreviewTopApps = function(html_class, callbackFunction)
    {
        var element = $(html_class);
        var content = "";
        element.html("");

        GmApi.callCSharpHandler("GetChannelAppsJsonWithHTMLClass", callbackFunction, [html_class, "1", ""]);
    };

    this.ShowPreviewRecentApps = function(html_class)
    {
        var element = $(html_class);
        var content = "";
        element.html("");

        GmApi.callCSharpHandler("GetInstalledAppsJsonforHTMLElement", "gmDisplayRecentApps", [html_class]);
    };

    this.DisplayRecentApps = function(json_string) {
        
        var content = "";
        var json_data = JSON.parse(json_string);
        
        var recentapps = json_data["recentApps"];

        var element = $(json_data["htmlClass"]); 
        
        this.sortAppsByLastUsed(recentapps);

        for(var i=0 ; (i < recentapps.length && i < 10) ; i++)
        {
            if (apps[i]["iconUrl"] == null)
                continue;

            if (recentapps[i]["iconUrl"].startsWith("file:"))
                recentapps[i]["iconUrl"] = "/static/"+recentapps[i]["pkgName"]+".png";

            content +=
                '<div class="appBlk" onclick="'+this.GetClickString(recentapps[i])+';return false;">' +
                '<a href="#" class="iconApp"><img src="'+recentapps[i]["iconUrl"]+'"></a>' +
                '<a href="#" class="appName">'+recentapps[i]["title"]+'</a></div>'
        }
        element.html(content);
    };

    this.SetSearchDropdown = function(apps)
    {
        var element = $(".scllBarDrpdwn");
        var content = "";
        element.html("");

        //will sort in ascending if a>b
        apps.sort(function(a, b){
            if(parseInt(a["rank"])>parseInt(b["rank"])){
                return 1;
            }
            return -1;
        });


        for(var i=0 ; (i < apps.length && i < 10) ; i++)
        {
            if (apps[i]["iconUrl"] == null)
                continue;

            if (apps[i]["iconUrl"].startsWith("file:"))
                apps[i]["iconUrl"] = "/static/"+apps[i]["pkgName"]+".png";

            content +=
                '<div class="appBlk" onclick="'+this.GetClickString(apps[i])+';return false;">' +
                '<a href="#" class="iconApp"><img src="'+apps[i]["iconUrl"]+'"></a>' +
                '<a href="#" class="appName">'+apps[i]["title"]+'</a></div>'
        }
        element.html(content);

    }

    this.LoadSearchDropdown = function(callbackFunction)
    {
        var element = $(".scllBarDrpdwn");
        var content = "";
        element.html("");

        GmApi.callCSharpHandler("GetChannelAppsJson", callbackFunction, ["1", ""]);
    }
	
    this.SetSearchDropdownEvents = function()
    {
        $('.searchbox #searchbox').focus(function() {
            $('.recentApps').show();
            var pagePathName= window.location.pathname;
            var pageName = pagePathName.substring(pagePathName.lastIndexOf("/") + 1);           // checking if the path,i.e, file is local-my-apps or not.
            if(!(pageName == "local-my-apps.html")){                                            // if it's not local-my-apps, then show jscroller else show old one.
                $('.scllBarDrpdwn').jScrollPane();
            }
            else{                                                                               // used custom scroll identical to jscrollpane
                $('.scllBarDrpdwn').niceScroll({cursorcolor:"#828ea0"});
            }
        });
        $('.searchbox #searchbox').focusout(function() {
            $('.recentApps').fadeOut(400);
        });
        $(".searchbox #searchbox").on("change keyup paste", function(){
            $('.recentApps').hide();
        });
    }

    this.AddScroller = function()
    {
        $('#scroll-test').height($(window).height() - $('.main-header').height());
        setTimeout(function(){
            $(".nano").nanoScroller();
            //$('.scroller-body').jScrollPane();
        }, 100);
    }
}
