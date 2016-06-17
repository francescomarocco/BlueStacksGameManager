gUserName = "John Smith";
gInterests = "social##games";
gBsInstalled = true;


var GmApi = {
    gmGetInstallStatus : function()
    {
        // will return in one of these 3 formats:
        return "installing##25##copying files";
        //    return "installed##done";
        //    return "downloading##Downloading Data: 25%";
    },

    gmGetUserName : function()
    {
        return gUserName;
    },

    gmSetUserName : function(name)
    {
        gUserName = name;
    },

    gmSetInterests : function(interests)
    {
        gInterests = interests;
    },

    gmGetInterests : function()
    {
        return gInterests;
    },

    gmShowApp : function(displayName, packageName, activityName, apkUrl, helpUrl)
    {
        alert("App will be shown: 1="+displayName+"\n2="+packageName+"\n3="+activityName+"\n4="+apkUrl+"5="+helpUrl);
    },

    gmLaunchHome : function()
    {
        alert("In gmLaunchHome()");
    },

    gmLaunchSearch : function(search_string)
    {
        alert("In gmLaunchSearch: " + search_string);
    },

    gmRelaunchApp : function(displayName, packageName, activityName, apkUrl, helpUrl)
    {
        //alert(displayName+","+packageName+","+activityName+","+apkUrl+","+helpUrl);
        if(activityName=="")
        {
            activityName = ".Main";
        }
        alert("App will be relaunched: 1="+displayName+"\n2="+packageName+"\n3="+activityName+"\n4="+apkUrl+"5="+helpUrl);
    },


    gmShowWebPage : function(title, webUrl)
    {
        //window.external.ShowWebpage(title, webUrl);
        alert("A new webPage will be shown with title="+title+" and Url="+webUrl);
        window.location.href=webUrl;
    },


    gmGetInstalledAppsJson : function()
    {
        return JSON.parse(installedapps);
    },

    gmGetChannelNamesJson : function()
    {
        return JSON.parse(channelNames);
    },

    gmGetChannelApps : function(channel_id, sub_category)
    {
        return JSON.parse(channelapps_id_1);
    },


    gmStageCompleted : function(stage)
    {
        //window.external.StageCompleted(stage);
        alert("gmStageCompleted()");
    },

    gmInTabBar : function()
    {
        //return window.external.InTabBar();
        alert("gmInTabBar()");

    },

    gmReloadFailedUrl : function()
    {
        //window.external.ReloadFailedUrl();
        alert("gmReloadFailedUrl()");
    },

    gmShowMyAppsLocal : function()
    {
        //window.external.ShowMyAppsLocal();
        window.location.href = "local-my-apps.html";

    },

    gmIsAppInstalled : function(pkg)
    {
        for(var i=0; i<installedapps.length; i++)
            if(installedapps[i]["pkgName"] == pkg)
                return true;
        return false;
        //return window.external.IsAppInstalled(pkg);
    },


    gmGetAppDownloadProgress : function(pkg)
    {
        return Math.random()*100;
        //return window.external.GetAppDownloadProgress(pkg);
    },

    gmStartAppDownload : function(pkg, apkUrl)
    {
        ////window.external.getAp
        alert("app download started pkg="+pkg+"   apkUrl="+apkUrl);
        //window.external.StartAppDownload(pkg, apkUrl);
    },

    gmIsBlueStacksInstalled : function()
    {
        //return window.external.IsBlueStacksInstalled();
        return gBsInstalled;
    },

    gmUninstallApp : function(pkg)
    {
            return true;
//        return window.external.uninstallApp(pkg);
    },

    gmCheckForUpdates : function()
    {
            alert("gmCheckForUpdates");
//		window.external.CheckForUpdates();
    },

    gmCreateAppShortcut : function(pkg)
    {
            alert("createAppShortcut for pkg="+pkg);
            return true;
//        return window.external.createAppShortcut(pkg);
    },

    gmGetAvailableLocaleName : function()
    {
        return "en-US";
    },

    gmGetThemesJson : function()
    {
        try
        {
            return JSON.parse(themes);
        }
        catch(e)
        {
            return JSON.parse("[]");
        }
    },

   gmSetTheme : function(name, theme_base_url, download_url)
    {
        alert("theme will be set with name="+name+"  theme_baseUrl"+theme_base_url+"  downloadUrl="+download_url);
        //window.external.SetTheme(name, theme_base_url, download_url);
    },

    gmGetCurrentTheme : function()
    {
        return "default_theme";
    }
}


    var themes = (function () {/*
      [
{

	"theme_title" : "Original",
	"theme_name" : "default_theme",
	"banner_url" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mergeinteractive.jackpot.jpg",
	"download_url" : "http://10.0.5.243/test1.zip",
	"theme_base_url" : "http://10.0.5.243/test1/"
},

{
	"theme_title" : "test",
	"theme_name" : "test2",
	"banner_url" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mergeinteractive.jackpot.jpg",
	"download_url" : "",
	"theme_base_url" : ""
},

{
	"theme_title" : "Duplicate",
	"theme_name" : "test3",
	"banner_url" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mergeinteractive.jackpot.jpg",
	"download_url" : "",
	"theme_base_url" : ""
}
]
    */}).toString().replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');



    var installedapps = (function () {/*
      [{"title": "Rope Escape", "pkgName": "com.hyperkani.rope", "activity": "com.hyperkani.rope.Rope", "iconUrl": "com.hyperkani.rope.png", "apkUrl": "", "helpurl": "", "last_used": "10/31/2014 2:01:30 PM"},
      {"title": "MappingManager", "pkgName": "com.bluestacks.mappingmanager", "activity": "com.bluestacks.mappingmanager.MainActivity", "iconUrl": "com.bluestacks.mappingmanager.png", "apkUrl": "", "helpurl": "", "last_used": "11/3/2014 11:23:26 AM"},
      {"title": "Cleopatra", "pkgName": "com.gamelion.cleopatra", "activity": "com.Claw.Android.ClawRootActivity", "iconUrl": "com.gamelion.cleopatra.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "Divine Might", "pkgName": "com.kabam.divine.android", "activity": "com.kabam.divine.android.MWActivity", "iconUrl": "com.kabam.divine.android.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "Battle Tactics", "pkgName": "com.mobage.ww.a1933.Super_Battle_Tactics_Android", "activity": "com.test.android.MBUnityPlayerProxyActivity", "iconUrl": "com.mobage.ww.a1933.Super_Battle_Tactics_Android.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "Bingo Bash", "pkgName": "air.com.bitrhymes.bingo", "activity": "air.com.bitrhymes.bingo.AppEntry", "iconUrl": "air.com.bitrhymes.bingo.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "HellFire", "pkgName": "com.mobage.ww.a953.Fuzion_Android", "activity": "com.test.android.MBUnityPlayerProxyActivity", "iconUrl": "com.mobage.ww.a953.Fuzion_Android.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "Gamepop-Home", "pkgName": "tv.gamepop.home", "activity": "tv.gamepop.home.GamePopMain_", "iconUrl": "tv.gamepop.home.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "Star Girl", "pkgName": "com.animoca.google.starGirlHalloween14", "activity": "com.dreamcortex.DCPortableGameClient.DCPortableGameClient", "iconUrl": "com.animoca.google.starGirlHalloween14.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"},
      {"title": "WhatsApp", "pkgName": "com.whatsapp", "activity": "com.whatsapp.Main", "iconUrl": "com.whatsapp.png", "apkUrl": "", "helpurl": "", "last_used": "1/1/0001 12:00:00 AM"}
      ]      
    */}).toString().replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');


    var channelNames = (function() {/*
    [
        {
            "name": "Top Apps",
            "type": "apps",
            "id": "1",
            "key": "topapps"
        },
        {
            "name": "Spotlight",
            "type": "apps",
            "id": "2",
            "key": "spotlight"
        },
        {
            "name": "Media and Messenger",
            "type": "apps",
            "id": "3",
            "key": "mediaandmessenger"
        },
        {
            "name": "Action and Adventure",
            "type": "apps",
            "id": "4",
            "key": "actionandadventure"
        },
        {
            "name": "Kids",
            "type": "apps",
            "id": "5",
            "key": "kids"
        },
        {
            "name": "Arcade",
            "type": "apps",
            "id": "6",
            "key": "arcade"
        },
        {
            "name": "Brain and Puzzle",
            "type": "apps",
            "id": "7",
            "key": "brainandpuzzle"
        },
        {
            "name": "Racing and Sports",
            "type": "apps",
            "id": "8",
            "key": "racingandsports"
        },
        {
            "name": "Cards and Casino",
            "type": "apps",
            "id": "9",
            "key": "cardsandcasino"
        },
        {
            "name": "Casual Games",
            "type": "apps",
            "id": "10",
            "key": "casualgames"
        }
    ]
    */}).toString().replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');

    var channelapps_id_1 = (function() {/*
[

{

   "pkgName" : "com.mergeinteractive.jackpot",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mergeinteractive.jackpot.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mergeinteractive.jackpot.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mergeinteractive.jackpot",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Super Happy Fun Fun, Inc.",

   "apkUrl" : "",

   "title" : "Lucky Duck Slots",

   "screenshots" : [

      ""

   ],

   "rank" : "231",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.farseergames.krashlander",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.farseergames.krashlander.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.farseergames.krashlander.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.farseergames.krashlander",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Farseer Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Krashlander- Ski, Jump, Crash!",

   "channelIds" : [

      "1"

   ],

   "rank" : "232"

}

,

{

   "pkgName" : "jp.co.ponos.mrninjafeveren",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/jp.co.ponos.mrninjafeveren.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.co.ponos.mrninjafeveren.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.co.ponos.mrninjafeveren",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "PONOS",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Mr.Ninja!! Fever",

   "channelIds" : [

      "1"

   ],

   "rank" : "233"

}

,

{

   "pkgName" : "com.pgpublish.android.airportscanner",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pgpublish.android.airportscanner.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pgpublish.android.airportscanner.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pgpublish.android.airportscanner",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Pocket Gems Publishing",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Airport Scanner",

   "channelIds" : [

      "1"

   ],

   "rank" : "234"

}

,

{

   "pkgName" : "com.proficientcity.ageoftitan",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.proficientcity.ageoftitan.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.proficientcity.ageoftitan.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.proficientcity.ageoftitan",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Proficientcity",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Eternal Fury",

   "channelIds" : [

      "1"

   ],

   "rank" : "235"

}

,

{

   "pkgName" : "com.FruitBump",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.FruitBump.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.FruitBump.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.FruitBump",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Twimler",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Fruit Bump",

   "channelIds" : [

      "1"

   ],

   "rank" : "236"

}

,

{

   "pkgName" : "com.falconmobile.archersclash",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.falconmobile.archersclash.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.falconmobile.archersclash.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.falconmobile.archersclash",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Falcon Mobile",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Archers Clash",

   "channelIds" : [

      "1"

   ],

   "rank" : "237"

}

,

{

   "pkgName" : "net.peakgames.amy",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/net.peakgames.amy.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.peakgames.amy.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.peakgames.amy",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Peak Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Toy Blast",

   "channelIds" : [

      "1"

   ],

   "rank" : "238"

}

,

{

   "pkgName" : "com.g5e.nightmares3.android",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.g5e.nightmares3.android.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.g5e.nightmares3.android.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.g5e.nightmares3.android",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "G5 Entertainment",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Nightmares: Davy Jones",

   "channelIds" : [

      "1"

   ],

   "rank" : "239"

}

,
{
   "pkgName" : "kr.co.angames.galaxyconflict.google.android",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/kr.co.angames.galaxyconflict.google.android.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/kr.co.angames.galaxyconflict.google.android.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/kr.co.angames.galaxyconflict.google.android",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "AN Games Co., Ltd",
   "apkUrl" : "",
   "title" : "ASTRONEST - The Beginning",
   "screenshots" : [
      ""
   ],
   "rank" : "206",
   "channelIds" : [
      "1"
   ]
}
,
{
   "pkgName" : "com.loftygame.venusgp",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.loftygame.venusgp.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.loftygame.venusgp.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.loftygame.venusgp",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Tgame Entertainment",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Goddess Arena",
   "channelIds" : [
      "1"
   ],
   "rank" : "207"
}
,
{
   "pkgName" : "air.com.plarium.magecraft.and",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.plarium.magecraft.and.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.plarium.magecraft.and.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.plarium.magecraft.and",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Plarium Global Ltd",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Magecraft: The War",
   "channelIds" : [
      "1"
   ],
   "rank" : "208"
}
,
{
   "pkgName" : "com.cattrap.dew.mousebounce",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.cattrap.dew.mousebounce.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.cattrap.dew.mousebounce.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.cattrap.dew.mousebounce",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Cat Trap Studios",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Mouse Bounce - 2.5D Platformer",
   "channelIds" : [
      "1"
   ],
   "rank" : "209"
}
,
{
   "pkgName" : "com.royallasvegas.casino",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.royallasvegas.casino.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.royallasvegas.casino.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.royallasvegas.casino",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Zumadica",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Royal Las Vegas Casino",
   "channelIds" : [
      "1"
   ],
   "rank" : "210"
}
,
{
   "pkgName" : "com.sixwaves.vegasroyale",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sixwaves.vegasroyale.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sixwaves.vegasroyale.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sixwaves.vegasroyale",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Pharaohs Interactive Inc.",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Slots - Vegas Royale™",
   "channelIds" : [
      "1"
   ],
   "rank" : "211"
}
,
{
   "pkgName" : "com.vegaspalms.casino",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vegaspalms.casino.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vegaspalms.casino.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vegaspalms.casino",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Fortune Games",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Vegas Palms Casino",
   "channelIds" : [
      "1"
   ],
   "rank" : "212"
}
,
{
   "pkgName" : "com.saddlellc.diceworld",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.saddlellc.diceworld.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.saddlellc.diceworld.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.saddlellc.diceworld",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Pangia Games, Inc.",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Dice World - 6 Free Dice Games",
   "channelIds" : [
      "1"
   ],
   "rank" : "213"
}
,
{
   "pkgName" : "com.infiapps.slotbonanza",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.infiapps.slotbonanza.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.infiapps.slotbonanza.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.infiapps.slotbonanza",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Infiapps Ltd",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Slot Bonanza-FREE Casino Slots",
   "channelIds" : [
      "1"
   ],
   "rank" : "214"
}
,
{
   "pkgName" : "com.zqgame.SG.en.androidgp",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.zqgame.SG.en.androidgp.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zqgame.SG.en.androidgp.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zqgame.SG.en.androidgp",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "ZQGame Inc",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Soul Guardians: Age of Midgard",
   "channelIds" : [
      "1"
   ],
   "rank" : "215"
}
,
{
   "pkgName" : "com.wildgamesstudio.tankdefensefree",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.wildgamesstudio.tankdefensefree.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wildgamesstudio.tankdefensefree.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wildgamesstudio.tankdefensefree",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Wild Games Studio",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Tank Defenders",
   "channelIds" : [
      "1"
   ],
   "rank" : "216"
}
,
{
   "pkgName" : "com.foxugame.us",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.foxugame.us.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.foxugame.us.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.foxugame.us",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "gNetop Inc.",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Empire - Warships",
   "channelIds" : [
      "1"
   ],
   "rank" : "217"
}
,
{
   "pkgName" : "com.igg.android.godsrush_en",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.igg.android.godsrush_en.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.android.godsrush_en.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.android.godsrush_en",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "IGG.COM",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Gods Rush",
   "channelIds" : [
      "1"
   ],
   "rank" : "218"
}
,
{
   "pkgName" : "com.kiloo.smashchamps",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kiloo.smashchamps.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiloo.smashchamps.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiloo.smashchamps",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Kiloo",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Smash Champs",
   "channelIds" : [
      "1"
   ],
   "rank" : "219"
}
,
{
   "pkgName" : "com.ludia.jurassicpark",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ludia.jurassicpark.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ludia.jurassicpark.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ludia.jurassicpark",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Ludia Inc.",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Jurassic Park™ Builder",
   "channelIds" : [
      "1"
   ],
   "rank" : "220"
}
,
{
   "pkgName" : "com.fincon.globalHH",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fincon.globalHH.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fincon.globalHH.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fincon.globalHH",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Fincon",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "HELLO HERO™",
   "channelIds" : [
      "1"
   ],
   "rank" : "221"
}
,
{
   "pkgName" : "air.HeadSoccerChampionsLeague",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.HeadSoccerChampionsLeague.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.HeadSoccerChampionsLeague.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.HeadSoccerChampionsLeague",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "CloudHKGames",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Head Soccer Champions League",
   "channelIds" : [
      "1"
   ],
   "rank" : "222"
}
,
{
   "pkgName" : "com.hibernum.brucelee.enterthegame",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hibernum.brucelee.enterthegame.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hibernum.brucelee.enterthegame.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hibernum.brucelee.enterthegame",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Hibernum Creations",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Bruce Lee: Enter The Game",
   "channelIds" : [
      "1"
   ],
   "rank" : "223"
}
,
{
   "pkgName" : "air.com.noxgames.PuppetSoccerChampions",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.noxgames.PuppetSoccerChampions.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.noxgames.PuppetSoccerChampions.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.noxgames.PuppetSoccerChampions",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "NOXGAMES",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Puppet Soccer Champions-League",
   "channelIds" : [
      "1"
   ],
   "rank" : "224"
}
,
{
   "pkgName" : "com.digitalchocolate.igalaxy",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.digitalchocolate.igalaxy.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.digitalchocolate.igalaxy.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.digitalchocolate.igalaxy",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Ubisoft Entertainment",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Galaxy Life™:Pocket Adventures",
   "channelIds" : [
      "1"
   ],
   "rank" : "225"
}
,
{
   "pkgName" : "com.pavelosminin.mafiarushtm",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pavelosminin.mafiarushtm.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pavelosminin.mafiarushtm.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pavelosminin.mafiarushtm",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Gamexy",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Mafia Rush™",
   "channelIds" : [
      "1"
   ],
   "rank" : "226"
}
,
{
   "pkgName" : "com.backflipstudios.njdash",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.backflipstudios.njdash.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.backflipstudios.njdash.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.backflipstudios.njdash",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "Backflip Studios, Inc.",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "NinJump Dash",
   "channelIds" : [
      "1"
   ],
   "rank" : "227"
}
,
{
   "pkgName" : "th.in.siamgame.ggplay.wxqzasia",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/th.in.siamgame.ggplay.wxqzasia.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/th.in.siamgame.ggplay.wxqzasia.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/th.in.siamgame.ggplay.wxqzasia",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "wangchao",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Kung Fu House",
   "channelIds" : [
      "1"
   ],
   "rank" : "228"
}
,
{
   "pkgName" : "com.mobage.ww.a1947.Littledom_Android",
   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobage.ww.a1947.Littledom_Android.jpg",
   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a1947.Littledom_Android.png",
   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a1947.Littledom_Android",
   "description" : "TBA",
   "rating" : "5",
   "pkgver" : "10",
   "developer" : "DeNA Corp.",
   "apkUrl" : "",
   "screenshots" : [
      ""
   ],
   "title" : "Battle of Littledom",
   "channelIds" : [
      "1"
   ],
   "rank" : "229"
}
,
{

   "pkgName" : "com.ubisoft.battleofheroes",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ubisoft.battleofheroes.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ubisoft.battleofheroes.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ubisoft.battleofheroes",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Ubisoft Entertainment",

   "apkUrl" : "",

   "title" : "Battle of Heroes",

   "screenshots" : [

      ""

   ],

   "rank" : "197",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.tapstargames.boulderdash30",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tapstargames.boulderdash30.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tapstargames.boulderdash30.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tapstargames.boulderdash30",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "TheApps Games, LLC",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Boulder Dash®-30th Anniversary",

   "channelIds" : [

      "1"

   ],

   "rank" : "198"

}

,

{

   "pkgName" : "com.nurigames.farkle",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.nurigames.farkle.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nurigames.farkle.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nurigames.farkle",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "NuriGames Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Farkle Mania Online",

   "channelIds" : [

      "1"

   ],

   "rank" : "199"

}

,

{

   "pkgName" : "com.sixwaves.wonderland",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sixwaves.wonderland.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sixwaves.wonderland.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sixwaves.wonderland",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "6waves",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Slots - Magic Wonderland™",

   "channelIds" : [

      "1"

   ],

   "rank" : "200"

}

,

{

   "pkgName" : "com.clapfootgames.tennis",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.clapfootgames.tennis.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.tennis.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.tennis",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Clapfoot Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Play Tennis",

   "channelIds" : [

      "1"

   ],

   "rank" : "201"

}

,

{

   "pkgName" : "com.fun.android.saga2",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fun.android.saga2.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fun.android.saga2.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fun.android.saga2",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "aeper",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Saiyan Saga",

   "channelIds" : [

      "1"

   ],

   "rank" : "202"

}

,

{

   "pkgName" : "air.com.sticksports.sticktennis",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.sticksports.sticktennis.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.sticksports.sticktennis.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.sticksports.sticktennis",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Stick Sports Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Stick Tennis",

   "channelIds" : [

      "1"

   ],

   "rank" : "203"

}

,

{

   "pkgName" : "com.naomicsoft.avengerszombie",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.naomicsoft.avengerszombie.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.naomicsoft.avengerszombie.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.naomicsoft.avengerszombie",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Naomic Soft Co., Ltd.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Avengers X™ Zombie Village",

   "channelIds" : [

      "1"

   ],

   "rank" : "204"

}

,

{

   "pkgName" : "com.kongregate.mobile.globalassault.google",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kongregate.mobile.globalassault.google.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kongregate.mobile.globalassault.google.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kongregate.mobile.globalassault.google",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Kongregate",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Global Assault",

   "channelIds" : [

      "1"

   ],

   "rank" : "205"

}

,

{

   "pkgName" : "com.andromedagames.spinwarrior",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.andromedagames.spinwarrior.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.andromedagames.spinwarrior.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.andromedagames.spinwarrior",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "AndromedaGames",

   "apkUrl" : "",

   "title" : "Spin Warrior",

   "screenshots" : [

      ""

   ],

   "rank" : "175",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.kuuasema.supersonic",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kuuasema.supersonic.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kuuasema.supersonic.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kuuasema.supersonic",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Kuuasema",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Supersonic ™",

   "channelIds" : [

      "1"

   ],

   "rank" : "176"

}

,

{

   "pkgName" : "com.sega.sonicdash",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sega.sonicdash.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sega.sonicdash.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sega.sonicdash",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "SEGA of America",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Sonic Dash",

   "channelIds" : [

      "1"

   ],

   "rank" : "177"

}

,

{

   "pkgName" : "com.ezjoy.feelingtouch.zombiediary2",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ezjoy.feelingtouch.zombiediary2.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ezjoy.feelingtouch.zombiediary2.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ezjoy.feelingtouch.zombiediary2",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Mountain Lion",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Zombie Diary 2: Evolution",

   "channelIds" : [

      "1"

   ],

   "rank" : "178"

}

,

{

   "pkgName" : "com.a1.game.vszombies",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.a1.game.vszombies.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.a1.game.vszombies.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.a1.game.vszombies",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Italy Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Zombie Dash",

   "channelIds" : [

      "1"

   ],

   "rank" : "179"

}

,

{

   "pkgName" : "com.ezjoy.feelingtouch.zombiediary",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ezjoy.feelingtouch.zombiediary.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ezjoy.feelingtouch.zombiediary.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ezjoy.feelingtouch.zombiediary",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Mountain Lion",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Zombie Diary",

   "channelIds" : [

      "1"

   ],

   "rank" : "180"

}

,

{

   "pkgName" : "com.feelingtouch.racingcarcross",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.feelingtouch.racingcarcross.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.racingcarcross.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.racingcarcross",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "FT Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Death Racing 2: Desert",

   "channelIds" : [

      "1"

   ],

   "rank" : "181"

}

,

{

   "pkgName" : "com.playrisedigital.ttr",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.playrisedigital.ttr.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.playrisedigital.ttr.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.playrisedigital.ttr",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Playrise Digital Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Table Top Racing Free",

   "channelIds" : [

      "1"

   ],

   "rank" : "182"

}

,

{

   "pkgName" : "com.eightbitgamestudio.retrowings",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.eightbitgamestudio.retrowings.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.eightbitgamestudio.retrowings.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.eightbitgamestudio.retrowings",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "8bit Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "RETRO WINGS",

   "channelIds" : [

      "1"

   ],

   "rank" : "183"

}

,

{

   "pkgName" : "com.rovio.retry",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.retry.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.retry.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.retry",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Rovio Mobile Ltd.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "RETRY",

   "channelIds" : [

      "1"

   ],

   "rank" : "184"

}

,

{

   "pkgName" : "com.rovio.angrybirdstransformers",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirdstransformers.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdstransformers.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdstransformers",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Rovio Mobile Ltd.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Angry Birds Transformers",

   "channelIds" : [

      "1"

   ],

   "rank" : "185"

}

,

{

   "pkgName" : "air.com.beecavegames.blackjackcasino",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.beecavegames.blackjackcasino.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.beecavegames.blackjackcasino.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.beecavegames.blackjackcasino",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Bee Cave Games, Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Bee Cave Blackjack & Slots",

   "channelIds" : [

      "1"

   ],

   "rank" : "186"

}

,

{

   "pkgName" : "com.vg.clashdiamonds",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vg.clashdiamonds.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vg.clashdiamonds.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vg.clashdiamonds",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Puzzle Games - VascoGames",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Clash of Diamonds - Match 3",

   "channelIds" : [

      "1"

   ],

   "rank" : "187"

}

,

{

   "pkgName" : "com.gameinsight.cloudraiders",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameinsight.cloudraiders.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameinsight.cloudraiders.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameinsight.cloudraiders",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "GIGL",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Cloud Raiders",

   "channelIds" : [

      "1"

   ],

   "rank" : "188"

}

,

{

   "pkgName" : "air.com.A5thplanetgames.pets",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.A5thplanetgames.pets.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.A5thplanetgames.pets.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.A5thplanetgames.pets",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "5th Planet Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Curio Quest",

   "channelIds" : [

      "1"

   ],

   "rank" : "189"

}

,

{

   "pkgName" : "com.ember.stainz",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ember.stainz.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ember.stainz.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ember.stainz",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Ember Entertainment",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Empire Z",

   "channelIds" : [

      "1"

   ],

   "rank" : "190"

}

,

{

   "pkgName" : "com.zynga.hititrich",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.zynga.hititrich.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zynga.hititrich.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zynga.hititrich",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Zynga",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Hit it Rich! Free Casino Slots",

   "channelIds" : [

      "1"

   ],

   "rank" : "191"

}

,

{

   "pkgName" : "com.kabam.kingsoftherealm.android",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kabam.kingsoftherealm.android.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kabam.kingsoftherealm.android.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kabam.kingsoftherealm.android",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Kabam",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Kings of the Realm",

   "channelIds" : [

      "1"

   ],

   "rank" : "192"

}

,

{

   "pkgName" : "com.kabam.cnthg",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kabam.cnthg.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kabam.cnthg.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kabam.cnthg",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Kabam",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "The Hunger Games: Panem Rising",

   "channelIds" : [

      "1"

   ],

   "rank" : "193"

}

,

{

   "pkgName" : "com.kixeye.vegaconflict",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kixeye.vegaconflict.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kixeye.vegaconflict.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kixeye.vegaconflict",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "KIXEYE",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "VEGA Conflict",

   "channelIds" : [

      "1"

   ],

   "rank" : "194"

}

,

{

   "pkgName" : "org.ngames2014.xenoquest",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/org.ngames2014.xenoquest.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/org.ngames2014.xenoquest.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/org.ngames2014.xenoquest",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "NGames Interactive Limited",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Xeno Quest",

   "channelIds" : [

      "1"

   ],

   "rank" : "195"

}

,

{

   "pkgName" : "com.weemegame.DemonAvengersE",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.weemegame.DemonAvengersE.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.weemegame.DemonAvengersE.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.weemegame.DemonAvengersE",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "WeeMe Studio",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Demon Avengers TD",

   "channelIds" : [

      "1"

   ],

   "rank" : "196"

}

,

{

   "pkgName" : "us.plavu.zombie",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/us.plavu.zombie.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/us.plavu.zombie.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/us.plavu.zombie",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "PLAVU Ltd.",

   "apkUrl" : "",

   "title" : "Zombie Infection – Driver 3d",

   "screenshots" : [

      ""

   ],

   "rank" : "164",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.zynga.castlevillelegends",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.zynga.castlevillelegends.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zynga.castlevillelegends.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zynga.castlevillelegends",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Zynga",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "CastleVille Legends",

   "channelIds" : [

      "1"

   ],

   "rank" : "165"

}

,

{

   "pkgName" : "air.com.feerik.eredanbattle",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.feerik.eredanbattle.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.feerik.eredanbattle.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.feerik.eredanbattle",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Feerik",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Eredan Arena - PVP battles",

   "channelIds" : [

      "1"

   ],

   "rank" : "166"

}

,

{

   "pkgName" : "com.bartel.infinitytower",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bartel.infinitytower.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bartel.infinitytower.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bartel.infinitytower",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Aurea Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "The Infinity Tower",

   "channelIds" : [

      "1"

   ],

   "rank" : "168"

}

,

{

   "pkgName" : "com.hotheadgames.google.free.rawsniper",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.rawsniper.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.rawsniper.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.rawsniper",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Hothead Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Kill Shot",

   "channelIds" : [

      "1"

   ],

   "rank" : "169"

}

,

{

   "pkgName" : "lobby.com.PlatinumPlay",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/lobby.com.PlatinumPlay.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/lobby.com.PlatinumPlay.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/lobby.com.PlatinumPlay",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Fortune Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Platinum Play Casino",

   "channelIds" : [

      "1"

   ],

   "rank" : "171"

}

,

{

   "pkgName" : "com.Qublix.SolitaireTales",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.Qublix.SolitaireTales.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Qublix.SolitaireTales.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Qublix.SolitaireTales",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Qublix Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Solitaire Tales",

   "channelIds" : [

      "1"

   ],

   "rank" : "172"

}

,

{

   "pkgName" : "com.nexonm.basebusters",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.nexonm.basebusters.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nexonm.basebusters.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nexonm.basebusters",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "NEXON M Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Base Busters",

   "channelIds" : [

      "1"

   ],

   "rank" : "173"

}

,

{

   "pkgName" : "com.haptic.chesstime",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.haptic.chesstime.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.haptic.chesstime.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.haptic.chesstime",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Haptic Apps LLC",

   "apkUrl" : "",

   "title" : "Chess Time™ -Multiplayer Chess",

   "screenshots" : [

      ""

   ],

   "rank" : "150",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.gamecomb.lordoflegion",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gamecomb.lordoflegion.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamecomb.lordoflegion.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamecomb.lordoflegion",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "BW Gamecomb Group",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Lord Of Legion",

   "channelIds" : [

      "1"

   ],

   "rank" : "151"

}

,

{

   "pkgName" : "com.henrich.robot",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.henrich.robot.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.henrich.robot.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.henrich.robot",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "CanadaDroid",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Tiny Robot",

   "channelIds" : [

      "1"

   ],

   "rank" : "152"

}

,

{

   "pkgName" : "com.feelingtouch.swat2",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.feelingtouch.swat2.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.swat2.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.swat2",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "FT Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "SWAT 2",

   "channelIds" : [

      "1"

   ],

   "rank" : "153"

}

,

{

   "pkgName" : "com.ff0000games.pbr",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ff0000games.pbr.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ff0000games.pbr.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ff0000games.pbr",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "RED Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "PBR: Raging Bulls",

   "channelIds" : [

      "1"

   ],

   "rank" : "154"

}

,

{

   "pkgName" : "com.xyrality.crazytribes.googleplay",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.xyrality.crazytribes.googleplay.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.xyrality.crazytribes.googleplay.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.xyrality.crazytribes.googleplay",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "XYRALITY GmbH",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Crazy Tribes - War MMOG",

   "channelIds" : [

      "1"

   ],

   "rank" : "155"

}

,

{

   "pkgName" : "com.Thinice.TwinRobots",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.Thinice.TwinRobots.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Thinice.TwinRobots.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Thinice.TwinRobots",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Thinice",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Twin Robots (Free)",

   "channelIds" : [

      "1"

   ],

   "rank" : "156"

}

,

{

   "pkgName" : "com.halfbrick.colossatron",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.halfbrick.colossatron.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.colossatron.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.colossatron",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Halfbrick Studios",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Colossatron",

   "channelIds" : [

      "1"

   ],

   "rank" : "157"

}

,

{

   "pkgName" : "com.ifreyr.sw2",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ifreyr.sw2.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ifreyr.sw2.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ifreyr.sw2",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Freyr Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Star Warfare2:Payback",

   "channelIds" : [

      "1"

   ],

   "rank" : "158"

}

,

{

   "pkgName" : "com.noodlecake.hordeofheroes",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.noodlecake.hordeofheroes.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.noodlecake.hordeofheroes.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.noodlecake.hordeofheroes",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Noodlecake Studios Inc",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Horde of Heroes",

   "channelIds" : [

      "1"

   ],

   "rank" : "159"

}

,

{

   "pkgName" : "com.catdaddy.nba2k15m",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.catdaddy.nba2k15m.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.catdaddy.nba2k15m.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.catdaddy.nba2k15m",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "2K Games, Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "MyNBA2K15",

   "channelIds" : [

      "1"

   ],

   "rank" : "160"

}

,

{

   "pkgName" : "com.hotheadgames.google.free.bigwinbasketball",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.bigwinbasketball.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.bigwinbasketball.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.bigwinbasketball",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Hothead Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "BIG WIN Basketball",

   "channelIds" : [

      "1"

   ],

   "rank" : "161"

}

,

{

   "pkgName" : "com.djinnworks.StickmanBasketball",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.djinnworks.StickmanBasketball.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.StickmanBasketball.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.StickmanBasketball",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Djinnworks GmbH",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Stickman Basketball",

   "channelIds" : [

      "1"

   ],

   "rank" : "162"

}

,

{

   "pkgName" : "com.byril.doodlebasket2",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.byril.doodlebasket2.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.byril.doodlebasket2.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.byril.doodlebasket2",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "BYRIL",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Doodle Basketball 2",

   "channelIds" : [

      "1"

   ],

   "rank" : "163"

}

,

{

   "pkgName" : "com.paramount.interstellar",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.paramount.interstellar.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.paramount.interstellar.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.paramount.interstellar",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Paramount+Digital+Entertainment",

   "apkUrl" : "",

   "title" : "Interstellar",

   "screenshots" : [

      ""

   ],

   "rank" : "135",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.pikpok.mr.play",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pikpok.mr.play.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pikpok.mr.play.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pikpok.mr.play",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "PIKPOK",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "maze runner",

   "channelIds" : [

      "1"

   ],

   "rank" : "136"

}

,

{

   "pkgName" : "com.wulven.shadowera",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.wulven.shadowera.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wulven.shadowera.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wulven.shadowera",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Wulven+Game+Studios",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Shadow Era - Trading Card Game",

   "channelIds" : [

      "1"

   ],

   "rank" : "137"

}

,

{

   "pkgName" : "com.BigMothStudios.SuperBoxMan",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.BigMothStudios.SuperBoxMan.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.BigMothStudios.SuperBoxMan.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.BigMothStudios.SuperBoxMan",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "BigMoth+Studios",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Super BoxMan",

   "channelIds" : [

      "1"

   ],

   "rank" : "138"

}

,

{

   "pkgName" : "com.lucasarts.starts_goo",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.lucasarts.starts_goo.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lucasarts.starts_goo.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lucasarts.starts_goo",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Disney",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Star Wars: Commander",

   "channelIds" : [

      "1"

   ],

   "rank" : "139"

}

,

{

   "pkgName" : "com.gameday.Room3Global",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameday.Room3Global.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameday.Room3Global.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameday.Room3Global",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Gameday+Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Escape the Room: Limited Time",

   "channelIds" : [

      "1"

   ],

   "rank" : "140"

}

,

{

   "pkgName" : "com.uppercut_games.snowjinksfree",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.uppercut_games.snowjinksfree.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.uppercut_games.snowjinksfree.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.uppercut_games.snowjinksfree",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Uppercut+Games+Pty+Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "SnowJinks Free",

   "channelIds" : [

      "1"

   ],

   "rank" : "141"

}

,

{

   "pkgName" : "com.clapfootgames.tabletennis",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.clapfootgames.tabletennis.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.tabletennis.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.tabletennis",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Clapfoot+Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Ping Pong Masters",

   "channelIds" : [

      "1"

   ],

   "rank" : "142"

}

,

{

   "pkgName" : "com.the10tons.sparkle.unleashed",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.the10tons.sparkle.unleashed.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.the10tons.sparkle.unleashed.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.the10tons.sparkle.unleashed",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "10tons+Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Sparkle Unleashed",

   "channelIds" : [

      "1"

   ],

   "rank" : "143"

}

,

{

   "pkgName" : "com.kumobius.android.duet",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kumobius.android.duet.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kumobius.android.duet.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kumobius.android.duet",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Kumobius",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Duet",

   "channelIds" : [

      "1"

   ],

   "rank" : "144"

}

,

{

   "pkgName" : "com.gameloft.android.ANMP.GloftAEHM",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameloft.android.ANMP.GloftAEHM.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftAEHM.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftAEHM",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Gameloft",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Asphalt Overdrive",

   "channelIds" : [

      "1"

   ],

   "rank" : "145"

}

,

{

   "pkgName" : "net.froemling.bombsquad",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/net.froemling.bombsquad.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.froemling.bombsquad.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.froemling.bombsquad",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Eric+Froemling",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "BombSquad",

   "channelIds" : [

      "1"

   ],

   "rank" : "146"

}

,

{

   "pkgName" : "com.Zonmob.TowerDefense",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.Zonmob.TowerDefense.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Zonmob.TowerDefense.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Zonmob.TowerDefense",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Zonmob+Tech.,+JSC",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Galaxy Defense ( Tower Game )",

   "channelIds" : [

      "1"

   ],

   "rank" : "147"

}

,

{

   "pkgName" : "com.dm.ssc.dumbrun",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dm.ssc.dumbrun.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dm.ssc.dumbrun.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dm.ssc.dumbrun",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Doodle+Mobile+Ltd.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Dumb Run",

   "channelIds" : [

      "1"

   ],

   "rank" : "148"

}

,

{

   "pkgName" : "com.upopa.hopelessfootball",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.upopa.hopelessfootball.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.upopa.hopelessfootball.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.upopa.hopelessfootball",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Hopeless: Flick Soccer Cup",

   "channelIds" : [

      "1"

   ],

   "rank" : "149"

}

,

{

   "pkgName" : "com.hotheadgames.google.free.bigwinhockey",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.bigwinhockey.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.bigwinhockey.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.bigwinhockey",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Hothead Games",

   "apkUrl" : "",

   "title" : "BIG WIN Hockey",

   "screenshots" : [

      ""

   ],

   "rank" : "121",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.galaticdroids.iceHockey",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.galaticdroids.iceHockey.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.galaticdroids.iceHockey.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.galaticdroids.iceHockey",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "galaticdroids",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Table Ice Hockey 3d",

   "channelIds" : [

      "1"

   ],

   "rank" : "122"

}

,

{

   "pkgName" : "com.naquatic.hockeyshowdown",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.naquatic.hockeyshowdown.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.naquatic.hockeyshowdown.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.naquatic.hockeyshowdown",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Naquatic LLC",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Hockey Showdown",

   "channelIds" : [

      "1"

   ],

   "rank" : "123"

}

,

{

   "pkgName" : "com.bakumens.GooglePlay.ALittleWar",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bakumens.GooglePlay.ALittleWar.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bakumens.GooglePlay.ALittleWar.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bakumens.GooglePlay.ALittleWar",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Bakumens Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "A Little War",

   "channelIds" : [

      "1"

   ],

   "rank" : "124"

}

,

{

   "pkgName" : "com.alawar.straysouls2.free",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.alawar.straysouls2.free.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.alawar.straysouls2.free.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.alawar.straysouls2.free",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Alawar Entertainment, Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Stray Souls 2 Free",

   "channelIds" : [

      "1"

   ],

   "rank" : "125"

}

,

{

   "pkgName" : "com.teamil.needforsuperspeed",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.teamil.needforsuperspeed.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.teamil.needforsuperspeed.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.teamil.needforsuperspeed",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Apps Factory 972",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Need 4 Super Speed - Car X NFS",

   "channelIds" : [

      "1"

   ],

   "rank" : "126"

}

,

{

   "pkgName" : "com.fornity.zombie",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fornity.zombie.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fornity.zombie.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fornity.zombie",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "LetsGoGames",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Zombie Safari Free",

   "channelIds" : [

      "1"

   ],

   "rank" : "127"

}

,

{

   "pkgName" : "com.outplayentertainment.aliencreeps",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.outplayentertainment.aliencreeps.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.outplayentertainment.aliencreeps.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.outplayentertainment.aliencreeps",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Outplay Entertainment Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Alien Creeps TD",

   "channelIds" : [

      "1"

   ],

   "rank" : "128"

}

,

{

   "pkgName" : "com.gp.chaosfightersUS",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gp.chaosfightersUS.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gp.chaosfightersUS.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gp.chaosfightersUS",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Coco Entertainment International",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Chaos Fighters",

   "channelIds" : [

      "1"

   ],

   "rank" : "130"

}

,

{

   "pkgName" : "com.nerdcorps.slugitout",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.nerdcorps.slugitout.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nerdcorps.slugitout.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nerdcorps.slugitout",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Nerd Corps Entertainment",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Slugterra: Slug it Out!",

   "channelIds" : [

      "1"

   ],

   "rank" : "131"

}

,

{

   "pkgName" : "com.pocketscientists.rmrio2",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pocketscientists.rmrio2.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pocketscientists.rmrio2.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pocketscientists.rmrio2",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Pocket Scientists",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Escape From Rio: The Adventure",

   "channelIds" : [

      "1"

   ],

   "rank" : "132"

}

,

{

   "pkgName" : "com.hcg.cok.gp",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hcg.cok.gp.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hcg.cok.gp.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hcg.cok.gp",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Empire Game Studio",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Clash of Kings",

   "channelIds" : [

      "1"

   ],

   "rank" : "133"

}

,

{

   "pkgName" : "com.clipwiregames.redshift",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.clipwiregames.redshift.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clipwiregames.redshift.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clipwiregames.redshift",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Clipwire Pte Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Redshift",

   "channelIds" : [

      "1"

   ],

   "rank" : "134"

}

,

{

   "pkgName" : "es.socialpoint.MonsterLegends",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/es.socialpoint.MonsterLegends.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/es.socialpoint.MonsterLegends.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/es.socialpoint.MonsterLegends",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "socialpoint",

   "apkUrl" : "",

   "title" : "Monster Legends",

   "screenshots" : [

      ""

   ],

   "rank" : "114",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.nubee.miramolla",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.nubee.miramolla.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nubee.miramolla.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nubee.miramolla",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Nubee Tokyo",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "The Knights of Mira Molla",

   "channelIds" : [

      "1"

   ],

   "rank" : "115"

}

,

{

   "pkgName" : "com.my.irondesert",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.my.irondesert.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.my.irondesert.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.my.irondesert",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "MY.COM",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Iron Desert",

   "channelIds" : [

      "1"

   ],

   "rank" : "116"

}

,

{

   "pkgName" : "com.timuzsolutions.skyskates",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.timuzsolutions.skyskates.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.timuzsolutions.skyskates.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.timuzsolutions.skyskates",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Timuz",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "SKY SKATES 3D",

   "channelIds" : [

      "1"

   ],

   "rank" : "117"

}

,

{

   "pkgName" : "com.bsb.games.cricketmatch",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bsb.games.cricketmatch.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bsb.games.cricketmatch.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bsb.games.cricketmatch",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Tiny Mogul Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Cricket Match",

   "channelIds" : [

      "1"

   ],

   "rank" : "118"

}

,

{

   "pkgName" : "com.gamelion.rog.free",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gamelion.rog.free.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamelion.rog.free.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamelion.rog.free",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "HUUUGE GAMES",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Rage of the Gladiator",

   "channelIds" : [

      "1"

   ],

   "rank" : "119"

}

,

{

   "pkgName" : "com.btl.iglite",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.btl.iglite.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.btl.iglite.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.btl.iglite",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Burlington Trading Ltd.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "I, Gladiator Free",

   "channelIds" : [

      "1"

   ],

   "rank" : "120"

}

,

    {

        "pkgName": "com.flaregames.rrtournament",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.flaregames.rrtournament.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.flaregames.rrtournament.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.flaregames.rrtournament",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "flaregames",

        "apkUrl": "",

        "title": "Royal Revolt 2",

        "screenshots": [

            ""

        ],

        "rank": "100",

        "channelIds": [

            "1"

        ]

    },

    {

        "pkgName": "com.playstudios.myvegas",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.playstudios.myvegas.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.playstudios.myvegas.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.playstudios.myvegas",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "PlayStudios",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Slots - myVEGAS Slot Machines",

        "channelIds": [

            "1"

        ],

        "rank": "101"

    },

    {

        "pkgName": "com.perblue.tepre",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.perblue.tepre.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.perblue.tepre.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.perblue.tepre",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "PerBlue",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Titan Empires",

        "channelIds": [

            "1"

        ],

        "rank": "102"

    },

    {

        "pkgName": "com.uberent.toybotsstore",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.uberent.toybotsstore.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.uberent.toybotsstore.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.uberent.toybotsstore",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Uber Entertainment Toy Rush LLC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Toy Rush",

        "channelIds": [

            "1"

        ],

        "rank": "103"

    },

    {

        "pkgName": "com.gameloft.android.ANMP.GloftNJHM",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameloft.android.ANMP.GloftNJHM.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftNJHM.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftNJHM",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Gameloft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Ninja UP!",

        "channelIds": [

            "1"

        ],

        "rank": "104"

    },

    {

        "pkgName": "com.toccata.technologies.general.TowerDefence01",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.toccata.technologies.general.TowerDefence01.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.toccata.technologies.general.TowerDefence01.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.toccata.technologies.general.TowerDefence01",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Toccata Technologies Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Monster Mania - Tower Strikes",

        "channelIds": [

            "1"

        ],

        "rank": "105"

    },

    {

        "pkgName": "net.mountainsheep.minigore2zombies",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/net.mountainsheep.minigore2zombies.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.mountainsheep.minigore2zombies.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.mountainsheep.minigore2zombies",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mountain Sheep",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Minigore 2: Zombies",

        "channelIds": [

            "1"

        ],

        "rank": "106"

    },

    {

        "pkgName": "com.june.think",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.june.think.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.june.think.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.june.think",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "June Software Inc",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Think",

        "channelIds": [

            "1"

        ],

        "rank": "107"

    },

    {

        "pkgName": "com.g5e.secretsociety",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.g5e.secretsociety.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.g5e.secretsociety.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.g5e.secretsociety",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "G5 Entertainment",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "The Secret Society",

        "channelIds": [

            "1"

        ],

        "rank": "108"

    },

    {

        "pkgName": "com.artifexmundi.timemysteries2.gp.free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.artifexmundi.timemysteries2.gp.free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.artifexmundi.timemysteries2.gp.free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.artifexmundi.timemysteries2.gp.free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Artifex Mundi sp. z o.o.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Time Mysteries 2",

        "channelIds": [

            "1"

        ],

        "rank": "109"

    },

    {

        "pkgName": "com.artifexmundi.grimlegends.gp.free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.artifexmundi.grimlegends.gp.free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.artifexmundi.grimlegends.gp.free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.artifexmundi.grimlegends.gp.free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Artifex Mundi sp. z o.o.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Grim Legends",

        "channelIds": [

            "1"

        ],

        "rank": "110"

    },

    {

        "pkgName": "com.g5e.cursedship.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.g5e.cursedship.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.g5e.cursedship.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.g5e.cursedship.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "G5 Entertainment",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "The Cursed Ship",

        "channelIds": [

            "1"

        ],

        "rank": "111"

    },

    {

        "pkgName": "com.bulkypix.jewelgalaxy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bulkypix.jewelgalaxy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bulkypix.jewelgalaxy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bulkypix.jewelgalaxy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Bulkypix",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Jewel Galaxy",

        "channelIds": [

            "1"

        ],

        "rank": "112"

    },

    {

        "pkgName": "com.supercell.boombeach",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.supercell.boombeach.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.supercell.boombeach.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.supercell.boombeach",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Supercell",

        "apkUrl": "",

        "title": "Boom Beach",

        "screenshots": [

            ""

        ],

        "rank": "7",

        "channelIds": [

            "1"

        ]

    },

    {

        "pkgName": "com.midasplayer.apps.bubblewitchsaga2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.midasplayer.apps.bubblewitchsaga2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.midasplayer.apps.bubblewitchsaga2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.midasplayer.apps.bubblewitchsaga2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "King",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bubble Witch Saga 2",

        "channelIds": [

            "1"

        ],

        "rank": "599"

    },

    {

        "pkgName": "com.king.candycrushsaga",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.king.candycrushsaga.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.candycrushsaga.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.candycrushsaga",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "King",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Candy Crush Saga",

        "channelIds": [

            "1"

        ],

        "rank": "4"

    },

    {

        "pkgName": "com.igg.castleclash",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.igg.castleclash.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.castleclash.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.castleclash",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "IGG.COM",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Castle Clash",

        "channelIds": [

            "1"

        ],

        "rank": "8"

    },

    {

        "pkgName": "com.igg.clashoflords2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.igg.clashoflords2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.clashoflords2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.clashoflords2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "IGG.COM",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Clash Of Lords 2",

        "channelIds": [

            "1"

        ],

        "rank": "227"

    },

    {

        "pkgName": "com.estrongs.android.pop",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.estrongs.android.pop.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.estrongs.android.pop.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.estrongs.android.pop",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "ES APP Group",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "ES file explorer",

        "channelIds": [

            "1"

        ],

        "rank": "454"

    },

    {

        "pkgName": "com.king.farmheroessaga",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.king.farmheroessaga.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.farmheroessaga.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.farmheroessaga",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "King",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Farm Heroes Saga",

        "channelIds": [

            "1"

        ],

        "rank": "321"

    },

	{

   "pkgName" : "com.hw.MoleGarden",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hw.MoleGarden.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hw.MoleGarden.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hw.MoleGarden",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "DmWork",

   "apkUrl" : "",

   "title" : "Mole Garden - Flower Plumber",

   "screenshots" : [

      ""

   ],

   "rank" : "88",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.ilg.core.robert",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ilg.core.robert.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ilg.core.robert.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ilg.core.robert",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Panda Zone",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Run Robert Run",

   "channelIds" : [

      "1"

   ],

   "rank" : "87"

}

,

{

   "pkgName" : "com.crescentmoongames.gearjackblackhole",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.crescentmoongames.gearjackblackhole.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.crescentmoongames.gearjackblackhole.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.crescentmoongames.gearjackblackhole",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Crescent Moon Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Gear Jack Black Hole",

   "channelIds" : [

      "1"

   ],

   "rank" : "86"

}

,

{

   "pkgName" : "com.namcobandaigames.jewelfight",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.namcobandaigames.jewelfight.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.namcobandaigames.jewelfight.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.namcobandaigames.jewelfight",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "BANDAI NAMCO Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Jewel Fight: Heroes of Legend",

   "channelIds" : [

      "1"

   ],

   "rank" : "85"

}

,

{

   "pkgName" : "pl.idreams.skyforcehd",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/pl.idreams.skyforcehd.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/pl.idreams.skyforcehd.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/pl.idreams.skyforcehd",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Infinite Dreams",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Sky Force 2014",

   "channelIds" : [

      "1"

   ],

   "rank" : "84"

}

,

{

   "pkgName" : "com.generamobile.runforrestrun",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.generamobile.runforrestrun.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.generamobile.runforrestrun.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.generamobile.runforrestrun",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "GeneraMobile",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Run Forrest Run",

   "channelIds" : [

      "1"

   ],

   "rank" : "83"

}

,

{

   "pkgName" : "com.mobage.ww.a1861.BlockDefense_Android",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobage.ww.a1861.BlockDefense_Android.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a1861.BlockDefense_Android.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a1861.BlockDefense_Android",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Mobage",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Qube Kingdom",

   "channelIds" : [

      "1"

   ],

   "rank" : "82"

}

,

{

   "pkgName" : "com.upopa.hopeless",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.upopa.hopeless.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.upopa.hopeless.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.upopa.hopeless",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Upopa Games Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Hopeless: The Dark Cave",

   "channelIds" : [

      "1"

   ],

   "rank" : "81"

}

,

{

   "pkgName" : "com.lonelyfew.blendoku",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.lonelyfew.blendoku.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lonelyfew.blendoku.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lonelyfew.blendoku",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Lonely Few",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Blendoku",

   "channelIds" : [

      "1"

   ],

   "rank" : "79"

}

,

{

   "pkgName" : "com.turner.amateursurgeon3",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.turner.amateursurgeon3.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.turner.amateursurgeon3.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.turner.amateursurgeon3",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "%5Badult swim%5D games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Amateur Surgeon 3",

   "channelIds" : [

      "1"

   ],

   "rank" : "78"

}

,

{

   "pkgName" : "com.appon.legendvszombies",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.appon.legendvszombies.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.appon.legendvszombies.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.appon.legendvszombies",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "AppOn Innovate",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Legend vs Zombies",

   "channelIds" : [

      "1"

   ],

   "rank" : "76"

}

,

{

   "pkgName" : "air.com.WnW.alieninvasion",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.WnW.alieninvasion.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.WnW.alieninvasion.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.WnW.alieninvasion",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "2wstudio",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Alien invasion(shoot)",

   "channelIds" : [

      "1"

   ],

   "rank" : "74"

}

,

{

   "pkgName" : "com.sticksports.sticksoccer",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sticksports.sticksoccer.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sticksports.sticksoccer.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sticksports.sticksoccer",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Stick Sports Ltd",

   "apkUrl" : "",

   "title" : "Stick Soccer",

   "screenshots" : [

      ""

   ],

   "rank" : "65",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.psyop.againstmalaria",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.psyop.againstmalaria.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.psyop.againstmalaria.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.psyop.againstmalaria",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Psyop Google Play Developer",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Nightmare: Malaria",

   "channelIds" : [

      "1"

   ],

   "rank" : "63"

}

,

{

   "pkgName" : "abf.gammalot.antiballrun",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/abf.gammalot.antiballrun.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/abf.gammalot.antiballrun.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/abf.gammalot.antiballrun",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Gammalot Ltd",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "AntiBall™ Football Run",

   "channelIds" : [

      "1"

   ],

   "rank" : "62"

}

,

{

   "pkgName" : "air.com.goodgamestudios.shadowkings",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.goodgamestudios.shadowkings.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.goodgamestudios.shadowkings.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.goodgamestudios.shadowkings",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Goodgame Studios",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Shadow Kings",

   "channelIds" : [

      "1"

   ],

   "rank" : "60"

}

,

{

   "pkgName" : "com.glu.android.brawler",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.glu.android.brawler.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.android.brawler.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.android.brawler",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Glu",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "BIG TIME GANGSTA",

   "channelIds" : [

      "1"

   ],

   "rank" : "59"

}

,

{

   "pkgName" : "com.bigbluebubble.finderskeep",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bigbluebubble.finderskeep.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigbluebubble.finderskeep.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigbluebubble.finderskeep",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Big Blue Bubble",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Finder's Keep",

   "channelIds" : [

      "1"

   ],

   "rank" : "58"

}

,

{

   "pkgName" : "com.gameloft.android.ANMP.GloftSXHM",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameloft.android.ANMP.GloftSXHM.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftSXHM.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftSXHM",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Gameloft",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Six-Guns",

   "channelIds" : [

      "1"

   ],

   "rank" : "57"

}

,

    {

        "pkgName": "com.supercell.hayday",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.supercell.hayday.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.supercell.hayday.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.supercell.hayday",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Supercell",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Hay Day",

        "channelIds": [

            "1"

        ],

        "rank": "3"

    },

    {

        "pkgName": "jp.naver.line.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/jp.naver.line.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.naver.line.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.naver.line.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "LINE Corporation",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Line",

        "channelIds": [

            "1"

        ],

        "rank": "6"

    },

    {

        "pkgName": "com.linecorp.LGRGS",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.linecorp.LGRGS.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.linecorp.LGRGS.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.linecorp.LGRGS",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "LINE Corporation",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "LINE Rangers",

        "channelIds": [

            "1"

        ],

        "rank": "834"

    },

    {

        "pkgName": "com.tencent.mobileqq",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tencent.mobileqq.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tencent.mobileqq.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tencent.mobileqq",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Tencent Technology (Shenzhen) Company Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "QQ",

        "channelIds": [

            "1"

        ],

        "rank": "410"

    },

    {

        "pkgName": "com.kiloo.subwaysurf",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kiloo.subwaysurf.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiloo.subwaysurf.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiloo.subwaysurf",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Kiloo",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Subway surfer",

        "channelIds": [

            "1"

        ],

        "rank": "9"

    },

    {

        "pkgName": "com.madhead.tos.en",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.madhead.tos.en.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.madhead.tos.en.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.madhead.tos.en",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mad Head Limited",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Tower of Saviors",

        "channelIds": [

            "1"

        ],

        "rank": "5"

    },

    {

        "pkgName": "com.asgardventure.mecha",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.asgardventure.mecha.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.asgardventure.mecha.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.asgardventure.mecha",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Asgard Venture",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Battle Mechs",

        "channelIds": [

            "1"

        ],

        "rank": "359"

    },

    {

        "pkgName": "com.glu.deadroute",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.glu.deadroute.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.deadroute.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.deadroute",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Glu",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dead Route",

        "channelIds": [

            "1"

        ],

        "rank": "856"

    },

    {

        "pkgName": "com.x3m.aow3",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.x3m.aow3.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.x3m.aow3.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.x3m.aow3",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Deemedya m.s. ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Age of Wind 3",

        "channelIds": [

            "1"

        ],

        "rank": "519"

    },

    {

        "pkgName": "com.Eutechnyx.SoV1",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.Eutechnyx.SoV1.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Eutechnyx.SoV1.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Eutechnyx.SoV1",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Eutechnyx Limited",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "WH40K: Storm of Vengeance",

        "channelIds": [

            "1"

        ],

        "rank": "812"

    },

    {

        "pkgName": "com.twistedoak.zw2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.twistedoak.zw2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.twistedoak.zw2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.twistedoak.zw2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Xoobis",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Zombie Wonderland 2",

        "channelIds": [

            "1"

        ],

        "rank": "829"

    },

    {

        "pkgName": "com.e2wandboat.fortdefense",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.e2wandboat.fortdefense.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.e2wandboat.fortdefense.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.e2wandboat.fortdefense",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Gamer-Gamer Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fort Defense Saga: Pirates",

        "channelIds": [

            "1"

        ],

        "rank": "313"

    },

    {

        "pkgName": "com.madsword.steamdefense",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.madsword.steamdefense.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.madsword.steamdefense.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.madsword.steamdefense",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MadSword",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Steam Defense",

        "channelIds": [

            "1"

        ],

        "rank": "258"

    },

    {

        "pkgName": "com.billionapps.dantezomventure",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.billionapps.dantezomventure.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.billionapps.dantezomventure.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.billionapps.dantezomventure",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Billionapps Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dante Zomventure",

        "channelIds": [

            "1"

        ],

        "rank": "693"

    },

    {

        "pkgName": "com.uplayonline.strikersoccerbrasil",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.uplayonline.strikersoccerbrasil.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.uplayonline.strikersoccerbrasil.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.uplayonline.strikersoccerbrasil",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "U-Play online",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Striker Soccer Brazil",

        "channelIds": [

            "1"

        ],

        "rank": "937"

    },

    {

        "pkgName": "com.chillingo.strikersoccer2.android.ajagplay",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.chillingo.strikersoccer2.android.ajagplay.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.chillingo.strikersoccer2.android.ajagplay.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.chillingo.strikersoccer2.android.ajagplay",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Chillingo",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Striker Soccer 2",

        "channelIds": [

            "1"

        ],

        "rank": "428"

    },

    {

        "pkgName": "com.impactgames.ATVQuadBikeRacingFree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.impactgames.ATVQuadBikeRacingFree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.impactgames.ATVQuadBikeRacingFree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.impactgames.ATVQuadBikeRacingFree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Impact Mobile Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "ATV Quad Bike Racing Mania",

        "channelIds": [

            "8"

        ],

        "rank": "326"

    },

    {

        "pkgName": "com.teamil.dirtbikeoffroad",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.teamil.dirtbikeoffroad.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.teamil.dirtbikeoffroad.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.teamil.dirtbikeoffroad",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Apps Factory 972",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dirt Bike 3D Offroad Drag Race",

        "channelIds": [

            "1"

        ],

        "rank": "814"

    },

    {

        "pkgName": "com.possiblegames.jamaica",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.possiblegames.jamaica.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.possiblegames.jamaica.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.possiblegames.jamaica",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "POSSIBLE Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Small & Furious",

        "channelIds": [

            "1"

        ],

        "rank": "721"

    },

    {

        "pkgName": "com.Crazy.Cowboy.Sniper.war40151",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.Crazy.Cowboy.Sniper.war40151.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Crazy.Cowboy.Sniper.war40151.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.Crazy.Cowboy.Sniper.war40151",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "TOP Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Crazy Cowboy Sniper War",

        "channelIds": [

            "1"

        ],

        "rank": "877"

    },

    {

        "pkgName": "com.stfalcon.galaxyrecon",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.stfalcon.galaxyrecon.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.stfalcon.galaxyrecon.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.stfalcon.galaxyrecon",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "studio stfalcon.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Galaxy Recon",

        "channelIds": [

            "1"

        ],

        "rank": "290"

    },

    {

        "pkgName": "com.turbochilli.ihatezombies",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.turbochilli.ihatezombies.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.turbochilli.ihatezombies.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.turbochilli.ihatezombies",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Turbo Chilli",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "I Hate Zombies",

        "channelIds": [

            "1"

        ],

        "rank": "817"

    },

    {

        "pkgName": "com.anotherplaceproductions.game1",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.anotherplaceproductions.game1.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.anotherplaceproductions.game1.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.anotherplaceproductions.game1",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Another Place Productions LTD",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dragon Finga",

        "channelIds": [

            "1"

        ],

        "rank": "475"

    },

    {

        "pkgName": "com.whatsapp",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.whatsapp.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.whatsapp.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.whatsapp",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "WhatsApp Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "WhatsApp",

        "channelIds": [

            "1"

        ],

        "rank": "1"

    },

    {

        "pkgName": "com.supercell.clashofclans",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.supercell.clashofclans.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.supercell.clashofclans.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.supercell.clashofclans",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Supercell",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Clash of Clans",

        "channelIds": [

            "1"

        ],

        "rank": "2"

    },

    {

        "pkgName": "com.dropbox.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dropbox.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dropbox.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dropbox.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Dropbox, Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dropbox",

        "channelIds": [

            "1"

        ],

        "rank": "664"

    },

    {

        "pkgName": "com.vng.g6.a.zombie",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vng.g6.a.zombie.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vng.g6.a.zombie.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vng.g6.a.zombie",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "VNG GAME STUDIOS",

        "apkUrl": "",

        "title": "DEAD TARGET: Zombie",

        "screenshots": [

            ""

        ],

        "rank": "89",

        "channelIds": [

            "1"

        ]

    },

	{

   "pkgName" : "com.animoca.google.armiesofDragons",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.animoca.google.armiesofDragons.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.animoca.google.armiesofDragons.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.animoca.google.armiesofDragons",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Animoca",

   "apkUrl" : "",

   "title" : "Armies Of Dragon",

   "screenshots" : [

      ""

   ],

   "rank" : "73",

   "channelIds" : [

      "1"

   ]

}

,

{

   "pkgName" : "com.ubisoft.assassin.pirates",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ubisoft.assassin.pirates.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ubisoft.assassin.pirates.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ubisoft.assassin.pirates",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Ubisoft Entertainment",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Assassin's Creed Pirates",

   "channelIds" : [

      "1"

   ],

   "rank" : "72"

}

,

{

   "pkgName" : "net.mobilecraft.balloon",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/net.mobilecraft.balloon.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.mobilecraft.balloon.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/net.mobilecraft.balloon",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "MobileCraft",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Balloon In Trouble",

   "channelIds" : [

      "1"

   ],

   "rank" : "70"

}

,

{

   "pkgName" : "com.wordsmobile.nfl",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.wordsmobile.nfl.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wordsmobile.nfl.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wordsmobile.nfl",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Mouse Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Fanatical Football",

   "channelIds" : [

      "1"

   ],

   "rank" : "69"

}

,

{

   "pkgName" : "com.hotheadgames.google.free.bigwinfootball",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.bigwinfootball.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.bigwinfootball.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.bigwinfootball",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Hothead Games",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Big Win Football",

   "channelIds" : [

      "1"

   ],

   "rank" : "68"

}

,

{

   "pkgName" : "com.KnowledgeAdventure.NFLHuddle",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.KnowledgeAdventure.NFLHuddle.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.KnowledgeAdventure.NFLHuddle.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.KnowledgeAdventure.NFLHuddle",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "Knowledge Adventure, Inc.",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "Nfl Rush Gameday Heroes",

   "channelIds" : [

      "1"

   ],

   "rank" : "67"

}

,

{

   "pkgName" : "com.gameinsight.thetribezcastlez",

   "bannerUrl" : "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameinsight.thetribezcastlez.jpg",

   "iconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameinsight.thetribezcastlez.png",

   "featureIconUrl" : "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameinsight.thetribezcastlez",

   "description" : "TBA",

   "rating" : "5",

   "pkgver" : "10",

   "developer" : "GIGL",

   "apkUrl" : "",

   "screenshots" : [

      ""

   ],

   "title" : "The Tribez & Castlez",

   "channelIds" : [

      "1"

   ],

   "rank" : "66"

}

,

    {

        "pkgName": "com.emflag.brickspop",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.emflag.brickspop.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.emflag.brickspop.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.emflag.brickspop",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GB Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bricks Pop",

        "channelIds": [

            "1"

        ],

        "rank": "90"

    },

    {

        "pkgName": "com.glu.gladiator",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.glu.gladiator.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.gladiator.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.gladiator",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Glu",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "BLOOD & GLORY",

        "channelIds": [

            "1"

        ],

        "rank": "91"

    },

    {

        "pkgName": "air.com.bigroundeyes.Nexionode",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.bigroundeyes.Nexionode.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.bigroundeyes.Nexionode.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.bigroundeyes.Nexionode",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Big Round Eyes",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Nexionode",

        "channelIds": [

            "1"

        ],

        "rank": "93"

    },

    {

        "pkgName": "com.chillingo.contrejour.android.rowgplay",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.chillingo.contrejour.android.rowgplay.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.chillingo.contrejour.android.rowgplay.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.chillingo.contrejour.android.rowgplay",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Chillingo International",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Contre Jour",

        "channelIds": [

            "1"

        ],

        "rank": "95"

    },

    {

        "pkgName": "com.halfbrick.FishOutOfWater",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.halfbrick.FishOutOfWater.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.FishOutOfWater.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.FishOutOfWater",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Halfbrick Studios",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fish Out Of Water!",

        "channelIds": [

            "1"

        ],

        "rank": "96"

    },

    {

        "pkgName": "com.evgstudios.the_secret_fleet",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.evgstudios.the_secret_fleet.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.evgstudios.the_secret_fleet.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.evgstudios.the_secret_fleet",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Evergreen Studios, LLC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Tales of Honor",

        "channelIds": [

            "1"

        ],

        "rank": "98"

    },

    {

        "pkgName": "laubak.android.game.bad.roads.two",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/laubak.android.game.bad.roads.two.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/laubak.android.game.bad.roads.two.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/laubak.android.game.bad.roads.two",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Laurent Bakowski",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bad Roads 2",

        "channelIds": [

            "1"

        ],

        "rank": "99"

    },

    {

        "pkgName": "kik.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/kik.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/kik.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/kik.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Kik Interactive",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kik",

        "channelIds": [

            "3"

        ],

        "rank": "1"

    },

    {

        "pkgName": "bbc.mobile.news.ww",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/bbc.mobile.news.ww.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/bbc.mobile.news.ww.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/bbc.mobile.news.ww",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "BBC Worldwide (Ltd)",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "BBC News",

        "channelIds": [

            "3"

        ],

        "rank": "657"

    },

    {

        "pkgName": "com.facebook.orca",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.facebook.orca.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.facebook.orca.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.facebook.orca",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Facebook",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Facebook Messenger",

        "channelIds": [

            "3"

        ],

        "rank": "367"

    },

    {

        "pkgName": "flipboard.app",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/flipboard.app.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/flipboard.app.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/flipboard.app",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Flipboard",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Flipboard",

        "channelIds": [

            "3"

        ],

        "rank": "465"

    },

    {

        "pkgName": "com.google.android.gm",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.google.android.gm.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.gm.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.gm",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Google Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gmail",

        "channelIds": [

            "3"

        ],

        "rank": "618"

    },

    {

        "pkgName": "com.huffingtonpost.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.huffingtonpost.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.huffingtonpost.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.huffingtonpost.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HuffingtonPost.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Huffington Post",

        "channelIds": [

            "3"

        ],

        "rank": "323"

    },

    {

        "pkgName": "com.instagram.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.instagram.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.instagram.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.instagram.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Instagram",

        "apkUrl": "http://cdn.bluestacks.com/public/com.instagram.android_1233215.apk",

        "screenshots": [

            ""

        ],

        "title": "Instagram",

        "channelIds": [

            "3"

        ],

        "rank": "896"

    },

    {

        "pkgName": "com.kakao.talk",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kakao.talk.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kakao.talk.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kakao.talk",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Kakao Corp.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kakao Talk",

        "channelIds": [

            "3"

        ],

        "rank": "927"

    },

    {

        "pkgName": "com.pinterest",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pinterest.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pinterest.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pinterest",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Pinterest, Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Pintrest",

        "channelIds": [

            "3"

        ],

        "rank": "229"

    },

    {

        "pkgName": "com.alphonso.pulse",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.alphonso.pulse.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.alphonso.pulse.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.alphonso.pulse",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "LinkedIn",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Pulse",

        "channelIds": [

            "3"

        ],

        "rank": "469"

    },

    {

        "pkgName": "com.quora.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.quora.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.quora.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.quora.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Quora, Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Quora",

        "channelIds": [

            "3"

        ],

        "rank": "983"

    },

    {

        "pkgName": "com.twitter.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.twitter.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.twitter.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.twitter.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Twitter, Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Twitter",

        "channelIds": [

            "3"

        ],

        "rank": "787"

    },

    {

        "pkgName": "com.facebook.katana",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.facebook.katana.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.facebook.katana.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.facebook.katana",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Facebook",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Facebook",

        "channelIds": [

            "1"

        ],

        "rank": "18"

    },

    {

        "pkgName": "com.viber.voip",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.viber.voip.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.viber.voip.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.viber.voip",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Viber Media S.%C3%A0 r.l.",

        "apkUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/apps/com.viber.voip.apk",

        "screenshots": [

            ""

        ],

        "title": "Viber",

        "channelIds": [

            "3"

        ],

        "rank": "816"

    },

    {

        "pkgName": "com.tencent.mm",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tencent.mm.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tencent.mm.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tencent.mm",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Tencent Technology (Shenzhen) Company Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "WeChat",

        "channelIds": [

            "3"

        ],

        "rank": "401"

    },

    {

        "pkgName": "com.yahoo.mobile.client.android.im",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.yahoo.mobile.client.android.im.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.yahoo.mobile.client.android.im.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.yahoo.mobile.client.android.im",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Yahoo",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Yahoo Messenger",

        "channelIds": [

            "3"

        ],

        "rank": "834"

    },

    {

        "pkgName": "bbc.mobile.sport.ww",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/bbc.mobile.sport.ww.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/bbc.mobile.sport.ww.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/bbc.mobile.sport.ww",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "BBC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "BBC Sport",

        "channelIds": [

            "3"

        ],

        "rank": "15"

    },

    {

        "pkgName": "com.google.android.apps.plus",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.google.android.apps.plus.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.apps.plus.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.apps.plus",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Google",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Google+",

        "channelIds": [

            "3"

        ],

        "rank": "17"

    },

    {

        "pkgName": "com.imdb.mobile",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.imdb.mobile.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.imdb.mobile.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.imdb.mobile",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "IMDB",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "IMDb Movies & TV",

        "channelIds": [

            "3"

        ],

        "rank": "19"

    },

    {

        "pkgName": "com.google.android.youtube",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.google.android.youtube.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.youtube.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.youtube",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Google Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Youtube",

        "channelIds": [

            "3"

        ],

        "rank": "262"

    },

    {

        "pkgName": "com.google.android.videos",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.google.android.videos.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.videos.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.google.android.videos",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Google Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Google Play Movies & TV",

        "channelIds": [

            "3"

        ],

        "rank": "380"

    },

    {

        "pkgName": "com.byril.planes",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.byril.planes.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.byril.planes.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.byril.planes",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "BYRIL",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Doodle Planes",

        "channelIds": [

            "4"

        ],

        "rank": "381"

    },

    {

        "pkgName": "sts.al",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/sts.al.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/sts.al.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/sts.al",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Spacetime Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Arcane Legends",

        "channelIds": [

            "4"

        ],

        "rank": "643"

    },

    {

        "pkgName": "com.interactionstudios.CI4.ggl",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.interactionstudios.CI4.ggl.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.interactionstudios.CI4.ggl.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.interactionstudios.CI4.ggl",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Betacom (UK) S.A.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Chicken Invaders 4",

        "channelIds": [

            "4"

        ],

        "rank": "993"

    },

    {

        "pkgName": "com.atom.clashofmonsters",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.atom.clashofmonsters.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.atom.clashofmonsters.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.atom.clashofmonsters",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Games for Papaya Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Clash of Monsters",

        "channelIds": [

            "4"

        ],

        "rank": "682"

    },

    {

        "pkgName": "com.ironhide.games.clashoftheolympians",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ironhide.games.clashoftheolympians.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ironhide.games.clashoftheolympians.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ironhide.games.clashoftheolympians",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Ironhide Game Studio",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Clash of the Olympians",

        "channelIds": [

            "4"

        ],

        "rank": "940"

    },

    {

        "pkgName": "com.droidhen.defender",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.defender.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.defender.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.defender",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Defender",

        "channelIds": [

            "4"

        ],

        "rank": "466"

    },

    {

        "pkgName": "com.hg.farminvasionfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hg.farminvasionfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.farminvasionfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.farminvasionfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HandyGames",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Farm Invasion USA",

        "channelIds": [

            "4"

        ],

        "rank": "486"

    },

    {

        "pkgName": "com.droidhen.fortconquer",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.fortconquer.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.fortconquer.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.fortconquer",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fort Conquer",

        "channelIds": [

            "4"

        ],

        "rank": "540"

    },

    {

        "pkgName": "com.droidhen.fruit",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.fruit.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.fruit.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.fruit",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Top Casual Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fruit Slice",

        "channelIds": [

            "4"

        ],

        "rank": "690"

    },

    {

        "pkgName": "com.wargames.gd",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.wargames.gd.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wargames.gd.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.wargames.gd",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "War Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Galaxy Defense",

        "channelIds": [

            "4"

        ],

        "rank": "235"

    },

    {

        "pkgName": "jp.gree.modernwar",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/jp.gree.modernwar.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.gree.modernwar.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.gree.modernwar",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GREE, INC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Modern War by Gree",

        "channelIds": [

            "4"

        ],

        "rank": "342"

    },

    {

        "pkgName": "com.hyperkani.rope",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hyperkani.rope.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hyperkani.rope.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hyperkani.rope",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Deemedya m.s. ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Rope Escape",

        "channelIds": [

            "4"

        ],

        "rank": "225"

    },

    {

        "pkgName": "com.feelingtouch.zombiex",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.feelingtouch.zombiex.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.zombiex.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.zombiex",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "FT Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Zombie Frontier 2:Survive",

        "channelIds": [

            "4"

        ],

        "rank": "768"

    },

    {

        "pkgName": "com.rovio.angrybirdsfriends",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirdsfriends.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsfriends.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsfriends",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Birds Friends",

        "channelIds": [

            "4"

        ],

        "rank": "996"

    },

    {

        "pkgName": "at.nerbrothers.SuperJump",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/at.nerbrothers.SuperJump.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/at.nerbrothers.SuperJump.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/at.nerbrothers.SuperJump",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "nerByte GmbH",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Lep's World",

        "channelIds": [

            "4"

        ],

        "rank": "921"

    },

    {

        "pkgName": "at.ner.lepsWorld2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/at.ner.lepsWorld2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/at.ner.lepsWorld2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/at.ner.lepsWorld2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "nerByte GmbH",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Lep's World 2",

        "channelIds": [

            "4"

        ],

        "rank": "472"

    },

    {

        "pkgName": "com.aceviral.agrr",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.aceviral.agrr.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.aceviral.agrr.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.aceviral.agrr",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Ace Viral",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Gran RadioActive Run",

        "channelIds": [

            "4"

        ],

        "rank": "545"

    },

    {

        "pkgName": "com.lima.doodlejump",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.lima.doodlejump.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lima.doodlejump.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lima.doodlejump",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Lima Sky LLC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Doodle Jump",

        "channelIds": [

            "4"

        ],

        "rank": "285"

    },

    {

        "pkgName": "com.pnixgames.gunzombieHalloweenGoogle",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pnixgames.gunzombieHalloweenGoogle.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pnixgames.gunzombieHalloweenGoogle.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pnixgames.gunzombieHalloweenGoogle",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "PNIX Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gun Zombie : Halloween",

        "channelIds": [

            "4"

        ],

        "rank": "787"

    },

    {

        "pkgName": "com.miniclip.hambo",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.miniclip.hambo.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.miniclip.hambo.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.miniclip.hambo",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Miniclip.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Hambo",

        "channelIds": [

            "4"

        ],

        "rank": "782"

    },

    {

        "pkgName": "com.revolutionaryconcepts.gesfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.revolutionaryconcepts.gesfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.revolutionaryconcepts.gesfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.revolutionaryconcepts.gesfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Revolutionary Concepts",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gesundheit!",

        "channelIds": [

            "7"

        ],

        "rank": "502"

    },

    {

        "pkgName": "com.lx.HeroesOfAtlan",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.lx.HeroesOfAtlan.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lx.HeroesOfAtlan.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lx.HeroesOfAtlan",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "WeMade Entertainment CO., LTD",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Heroes Of Atlan",

        "channelIds": [

            "4"

        ],

        "rank": "503"

    },

    {

        "pkgName": "com.redantz.game.zombie",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.redantz.game.zombie.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.redantz.game.zombie.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.redantz.game.zombie",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "divmob games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Zombie Age 2",

        "channelIds": [

            "4"

        ],

        "rank": "505"

    },

    {

        "pkgName": "com.tap4fun.kings_empire",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tap4fun.kings_empire.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tap4fun.kings_empire.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tap4fun.kings_empire",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "tap4fun",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "King's Empire Undying Loyalty",

        "channelIds": [

            "4"

        ],

        "rank": "506"

    },

    {

        "pkgName": "com.melesta.toydefense3free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.melesta.toydefense3free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.melesta.toydefense3free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.melesta.toydefense3free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Melesta Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Toy Defense 3",

        "channelIds": [

            "10"

        ],

        "rank": "507"

    },

    {

        "pkgName": "com.pocketscientists.rmrio",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pocketscientists.rmrio.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pocketscientists.rmrio.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pocketscientists.rmrio",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Pocket Scientists",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Escape From Rio",

        "channelIds": [

            "4"

        ],

        "rank": "508"

    },

    {

        "pkgName": "com.tinyco.familyguy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tinyco.familyguy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tinyco.familyguy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tinyco.familyguy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "TinyCo",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Family Guy The Quest For Stuff",

        "channelIds": [

            "4"

        ],

        "rank": "509"

    },

    {

        "pkgName": "com.feelingtouch.dipan.slggameglobal",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.feelingtouch.dipan.slggameglobal.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.dipan.slggameglobal.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.dipan.slggameglobal",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mountain Lion",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Empire: Rome Rising",

        "channelIds": [

            "4"

        ],

        "rank": "510"

    },

    {

        "pkgName": "air.com.sgn.cookiejam.gp",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.sgn.cookiejam.gp.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.sgn.cookiejam.gp.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.sgn.cookiejam.gp",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "SGN",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cookie Jam",

        "channelIds": [

            "7"

        ],

        "rank": "511"

    },

    {

        "pkgName": "com.livezen.aw.facebook",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.livezen.aw.facebook.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.livezen.aw.facebook.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.livezen.aw.facebook",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Livezen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Astrowings: Icraus",

        "channelIds": [

            "6"

        ],

        "rank": "512"

    },

    {

        "pkgName": "com.hotheadgames.google.free.valorcmd",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.valorcmd.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.valorcmd.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.valorcmd",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Hothead Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Rivals At War: Firefight",

        "channelIds": [

            "4"

        ],

        "rank": "514"

    },

    {

        "pkgName": "com.hotheadgames.google.free.spywars",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.spywars.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.spywars.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.spywars",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Hothead Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Spy Wars",

        "channelIds": [

            "4"

        ],

        "rank": "515"

    },

    {

        "pkgName": "ru.mail.games.android.JungleHeat",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/ru.mail.games.android.JungleHeat.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/ru.mail.games.android.JungleHeat.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/ru.mail.games.android.JungleHeat",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MY.COM",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Jungle Heat",

        "channelIds": [

            "4"

        ],

        "rank": "311"

    },

    {

        "pkgName": "com.gameloft.android.ANMP.GloftMBHM",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameloft.android.ANMP.GloftMBHM.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftMBHM.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftMBHM",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Gameloft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Men In Black 3",

        "channelIds": [

            "4"

        ],

        "rank": "290"

    },

    {

        "pkgName": "com.ea.game.pvz2_row",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ea.game.pvz2_row.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ea.game.pvz2_row.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ea.game.pvz2_row",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "EA Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Plant vs Zombies 2",

        "channelIds": [

            "4"

        ],

        "rank": "651"

    },

    {

        "pkgName": "com.tap4fun.spartanwar",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tap4fun.spartanwar.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tap4fun.spartanwar.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tap4fun.spartanwar",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "tap4fun",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Spartan Wars: Empire of Honor",

        "channelIds": [

            "4"

        ],

        "rank": "379"

    },

    {

        "pkgName": "com.clapfootgames.tankhero",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.clapfootgames.tankhero.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.tankhero.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.tankhero",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Clapfoot Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Tank Hero",

        "channelIds": [

            "4"

        ],

        "rank": "605"

    },

    {

        "pkgName": "com.feelingtouch.gnz",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.feelingtouch.gnz.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.gnz.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.feelingtouch.gnz",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "FT Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Zombie Evil",

        "channelIds": [

            "4"

        ],

        "rank": "882"

    },

    {

        "pkgName": "com.gameloft.android.ANMP.GloftJDHM",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameloft.android.ANMP.GloftJDHM.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftJDHM.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftJDHM",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Gameloft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Danger Dash",

        "channelIds": [

            "4"

        ],

        "rank": "248"

    },

    {

        "pkgName": "com.silvertree.cordy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.silvertree.cordy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.silvertree.cordy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.silvertree.cordy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "SilverTree Media",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cordy",

        "channelIds": [

            "5"

        ],

        "rank": "723"

    },

    {

        "pkgName": "com.animoca.ChristmasStory",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.animoca.ChristmasStory.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.animoca.ChristmasStory.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.animoca.ChristmasStory",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Animoca Collective",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Christmas Story",

        "channelIds": [

            "5"

        ],

        "rank": "516"

    },

    {

        "pkgName": "com.hg.cloudsandsheepfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hg.cloudsandsheepfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.cloudsandsheepfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.cloudsandsheepfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HandyGames",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cloud and Sheep",

        "channelIds": [

            "5"

        ],

        "rank": "439"

    },

    {

        "pkgName": "com.droidhen.game.cloudy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.game.cloudy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.game.cloudy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.game.cloudy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Top Casual Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cloudy",

        "channelIds": [

            "5"

        ],

        "rank": "905"

    },

    {

        "pkgName": "com.tribeplay.pandahospitallite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tribeplay.pandahospitallite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tribeplay.pandahospitallite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tribeplay.pandahospitallite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "TribePlay",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dr. Panda's Hospital - Free",

        "channelIds": [

            "5"

        ],

        "rank": "706"

    },

    {

        "pkgName": "zok.android.letters",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/zok.android.letters.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.letters.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.letters",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids ABC Letters Lite",

        "channelIds": [

            "5"

        ],

        "rank": "359"

    },

    {

        "pkgName": "zok.android.phonics",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/zok.android.phonics.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.phonics.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.phonics",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids ABC Phonics Lite",

        "channelIds": [

            "5"

        ],

        "rank": "722"

    },

    {

        "pkgName": "com.intellijoy.abc.trains.lite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.intellijoy.abc.trains.lite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.intellijoy.abc.trains.lite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.intellijoy.abc.trains.lite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids ABC Trains Lite",

        "channelIds": [

            "5"

        ],

        "rank": "933"

    },

    {

        "pkgName": "com.nightboost.kids.animals.lite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.nightboost.kids.animals.lite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nightboost.kids.animals.lite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.nightboost.kids.animals.lite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids Animals Lite",

        "channelIds": [

            "5"

        ],

        "rank": "618"

    },

    {

        "pkgName": "zok.android.dots",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/zok.android.dots.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.dots.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.dots",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids Connect The Dots Lite",

        "channelIds": [

            "5"

        ],

        "rank": "803"

    },

    {

        "pkgName": "info.ghteam.kidsgames",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/info.ghteam.kidsgames.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/info.ghteam.kidsgames.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/info.ghteam.kidsgames",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GhTeam",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids Games (4 in 1)",

        "channelIds": [

            "5"

        ],

        "rank": "719"

    },

    {

        "pkgName": "zok.android.numbers",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/zok.android.numbers.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.numbers.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/zok.android.numbers",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids Numbers And Math Lite",

        "channelIds": [

            "5"

        ],

        "rank": "881"

    },

    {

        "pkgName": "com.anahoret.android.shapes.halloween",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.anahoret.android.shapes.halloween.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.anahoret.android.shapes.halloween.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.anahoret.android.shapes.halloween",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Intellijoy",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Kids Shape Puzzle Halloween",

        "channelIds": [

            "5"

        ],

        "rank": "313"

    },

    {

        "pkgName": "com.lego.duplo.icecream",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.lego.duplo.icecream.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lego.duplo.icecream.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.lego.duplo.icecream",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "The LEGO Group",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "LEGO® DUPLO® Ice Cream",

        "channelIds": [

            "5"

        ],

        "rank": "723"

    },

    {

        "pkgName": "com.libiitech.oceandoctor",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.libiitech.oceandoctor.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.libiitech.oceandoctor.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.libiitech.oceandoctor",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Libii",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Ocean Doctor",

        "channelIds": [

            "5"

        ],

        "rank": "474"

    },

    {

        "pkgName": "com.outfit7.talkingsantafree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.outfit7.talkingsantafree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.outfit7.talkingsantafree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.outfit7.talkingsantafree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Outfit7",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Talking Santa",

        "channelIds": [

            "5"

        ],

        "rank": "755"

    },

    {

        "pkgName": "com.outfit7.talkingtom2free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.outfit7.talkingtom2free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.outfit7.talkingtom2free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.outfit7.talkingtom2free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Outfit7",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Talking Tom Cat 2 Free",

        "channelIds": [

            "5"

        ],

        "rank": "801"

    },

    {

        "pkgName": "com.fungames.ninjarunfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fungames.ninjarunfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fungames.ninjarunfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fungames.ninjarunfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Fun Games For Free",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Ninja Kid Run Free - Fun Game",

        "channelIds": [

            "5"

        ],

        "rank": "733"

    },

    {

        "pkgName": "com.tgb.bg.tmt",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tgb.bg.tmt.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tgb.bg.tmt.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tgb.bg.tmt",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "The Game Boss",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Track My Pocket Train",

        "channelIds": [

            "5"

        ],

        "rank": "352"

    },

    {

        "pkgName": "com.droidhen.turbo",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.turbo.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.turbo.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.turbo",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Turbo Kids",

        "channelIds": [

            "5"

        ],

        "rank": "689"

    },

    {

        "pkgName": "com.ArtInGames.AirAttackHDLite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ArtInGames.AirAttackHDLite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ArtInGames.AirAttackHDLite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ArtInGames.AirAttackHDLite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Art In Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Air Attack HD",

        "channelIds": [

            "6"

        ],

        "rank": "478"

    },

    {

        "pkgName": "com.fingersoft.benjibananas",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fingersoft.benjibananas.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fingersoft.benjibananas.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fingersoft.benjibananas",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Fingersoft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Benji Bananas",

        "channelIds": [

            "6"

        ],

        "rank": "862"

    },

    {

        "pkgName": "com.digitalchocolate.rollnyfullpa",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.digitalchocolate.rollnyfullpa.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.digitalchocolate.rollnyfullpa.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.digitalchocolate.rollnyfullpa",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rockyou Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "3D Rollercoaster Rush NewYork",

        "channelIds": [

            "6"

        ],

        "rank": "875"

    },

    {

        "pkgName": "com.rovio.amazingalex.trial",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.amazingalex.trial.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.amazingalex.trial.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.amazingalex.trial",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Amazing Alex",

        "channelIds": [

            "6"

        ],

        "rank": "216"

    },

    {

        "pkgName": "com.rovio.angrybirds",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirds.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirds.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirds",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Birds",

        "channelIds": [

            "6"

        ],

        "rank": "386"

    },

    {

        "pkgName": "com.daf.archanoide",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.daf.archanoide.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.daf.archanoide.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.daf.archanoide",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DAF",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Archanoid DEMOLITION free",

        "channelIds": [

            "6"

        ],

        "rank": "301"

    },

    {

        "pkgName": "mominis.Generic_Android.Bouncy_Bill_Halloween",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/mominis.Generic_Android.Bouncy_Bill_Halloween.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/mominis.Generic_Android.Bouncy_Bill_Halloween.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/mominis.Generic_Android.Bouncy_Bill_Halloween",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "PlayScape",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bouncy Bill Halloween",

        "channelIds": [

            "6"

        ],

        "rank": "220"

    },

    {

        "pkgName": "com.dreamgame.bubblestar",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dreamgame.bubblestar.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dreamgame.bubblestar.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dreamgame.bubblestar",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Dream Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bubble Star",

        "channelIds": [

            "6"

        ],

        "rank": "761"

    },

    {

        "pkgName": "com.doodlegrub.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.doodlegrub.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.doodlegrub.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.doodlegrub.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "PIXOWL INC.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Doodle Grub - Twisted Snake",

        "channelIds": [

            "6"

        ],

        "rank": "338"

    },

    {

        "pkgName": "com.infraredpixel.drop",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.infraredpixel.drop.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.infraredpixel.drop.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.infraredpixel.drop",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Out of Pixels",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Drop",

        "channelIds": [

            "6"

        ],

        "rank": "641"

    },

    {

        "pkgName": "com.halfbrick.fruitninjafree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.halfbrick.fruitninjafree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.fruitninjafree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.fruitninjafree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Halfbrick Studios",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fruit Ninja",

        "channelIds": [

            "6"

        ],

        "rank": "1"

    },

    {

        "pkgName": "com.miniclip.ggorigins",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.miniclip.ggorigins.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.miniclip.ggorigins.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.miniclip.ggorigins",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Miniclip.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gravity Guy 2",

        "channelIds": [

            "6"

        ],

        "rank": "234"

    },

    {

        "pkgName": "com.arjun.highwayracing",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.arjun.highwayracing.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.arjun.highwayracing.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.arjun.highwayracing",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Cherukuri Arjun",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Highway Racing",

        "channelIds": [

            "8"

        ],

        "rank": "232"

    },

    {

        "pkgName": "com.halfbrick.jetpackjoyride",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.halfbrick.jetpackjoyride.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.jetpackjoyride.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.halfbrick.jetpackjoyride",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Halfbrick Studios",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Jetpack Joyride",

        "channelIds": [

            "6"

        ],

        "rank": "967"

    },

    {

        "pkgName": "com.maxgamescloud.junglemonkey2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.maxgamescloud.junglemonkey2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.maxgamescloud.junglemonkey2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.maxgamescloud.junglemonkey2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MaxGamesCloud",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Jungle Monkey 2",

        "channelIds": [

            "6"

        ],

        "rank": "625"

    },

    {

        "pkgName": "com.djinnworks.LineRunner2.free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.djinnworks.LineRunner2.free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.LineRunner2.free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.LineRunner2.free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Djinnworks e.U.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Line Runner 2",

        "channelIds": [

            "6"

        ],

        "rank": "937"

    },

    {

        "pkgName": "com.hotheadgames.google.free.zombie_ace",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hotheadgames.google.free.zombie_ace.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.zombie_ace.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hotheadgames.google.free.zombie_ace",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Hothead Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Zombie Ace",

        "channelIds": [

            "6"

        ],

        "rank": "907"

    },

    {

        "pkgName": "com.rovio.angrybirdsrio",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirdsrio.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsrio.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsrio",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Birds Rio",

        "channelIds": [

            "6"

        ],

        "rank": "305"

    },

    {

        "pkgName": "com.rovio.angrybirdsseasons",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirdsseasons.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsseasons.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsseasons",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Birds Seasons",

        "channelIds": [

            "6"

        ],

        "rank": "815"

    },

    {

        "pkgName": "com.rovio.angrybirdsspace.ads",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirdsspace.ads.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsspace.ads.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsspace.ads",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Birds Space",

        "channelIds": [

            "6"

        ],

        "rank": "517"

    },

    {

        "pkgName": "com.rovio.angrybirdsstarwarsii.ads",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.rovio.angrybirdsstarwarsii.ads.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsstarwarsii.ads.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.rovio.angrybirdsstarwarsii.ads",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Rovio Mobile Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Angry Birds Star Wars II Free",

        "channelIds": [

            "6"

        ],

        "rank": "461"

    },

    {

        "pkgName": "bubbleshooter.xmas",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/bubbleshooter.xmas.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/bubbleshooter.xmas.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/bubbleshooter.xmas",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Ilyon Dynamics",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bubble Shooter: Christmas Day",

        "channelIds": [

            "6"

        ],

        "rank": "826"

    },

    {

        "pkgName": "com.bestcoolfungamesfreegameappcreation.bunnyshooter",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bestcoolfungamesfreegameappcreation.bunnyshooter.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bestcoolfungamesfreegameappcreation.bunnyshooter.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bestcoolfungamesfreegameappcreation.bunnyshooter",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Best Cool %26 Fun Free Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bunny Shooter",

        "channelIds": [

            "6"

        ],

        "rank": "906"

    },

    {

        "pkgName": "com.chillingo.catapultkingfree.android.row",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.chillingo.catapultkingfree.android.row.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.chillingo.catapultkingfree.android.row.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.chillingo.catapultkingfree.android.row",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Chillingo International",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Catapult King",

        "channelIds": [

            "6"

        ],

        "rank": "899"

    },

    {

        "pkgName": "com.droidhen.shootapple",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.shootapple.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.shootapple.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.shootapple",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Shoot The Apple",

        "channelIds": [

            "6"

        ],

        "rank": "411"

    },

    {

        "pkgName": "com.droidhen.shootapple2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.shootapple2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.shootapple2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.shootapple2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Shoot the Apple 2",

        "channelIds": [

            "6"

        ],

        "rank": "900"

    },

    {

        "pkgName": "mominis.Generic_Android.Ninja_Chicken_Ooga_Booga",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/mominis.Generic_Android.Ninja_Chicken_Ooga_Booga.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/mominis.Generic_Android.Ninja_Chicken_Ooga_Booga.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/mominis.Generic_Android.Ninja_Chicken_Ooga_Booga",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "PlayScape",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Ninja Chicken Ooga Booga",

        "channelIds": [

            "6"

        ],

        "rank": "731"

    },

    {

        "pkgName": "com.masscreation.rlh",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.masscreation.rlh.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.masscreation.rlh.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.masscreation.rlh",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mass Creation",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Run like hell",

        "channelIds": [

            "6"

        ],

        "rank": "304"

    },

    {

        "pkgName": "pl.idreams.ShootTheZombirds",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/pl.idreams.ShootTheZombirds.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/pl.idreams.ShootTheZombirds.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/pl.idreams.ShootTheZombirds",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Infinite Dreams",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Shoot The Zombirds",

        "channelIds": [

            "6"

        ],

        "rank": "603"

    },

    {

        "pkgName": "com.com2us.superactionhero5.normal.freefull.google.global.android.common",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.com2us.superactionhero5.normal.freefull.google.global.android.common.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.com2us.superactionhero5.normal.freefull.google.global.android.common.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.com2us.superactionhero5.normal.freefull.google.global.android.common",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Com2uS USA",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Super Action Hero",

        "channelIds": [

            "6"

        ],

        "rank": "238"

    },

    {

        "pkgName": "com.game.BMX_Boy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.game.BMX_Boy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.BMX_Boy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.BMX_Boy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Runner Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "BMX Boy",

        "channelIds": [

            "6"

        ],

        "rank": "875"

    },

    {

        "pkgName": "com.namcobandaigames.cornquest",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.namcobandaigames.cornquest.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.namcobandaigames.cornquest.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.namcobandaigames.cornquest",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "BANDAI NAMCO Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Corn Quest",

        "channelIds": [

            "6"

        ],

        "rank": "326"

    },

    {

        "pkgName": "com.droidhen.defender2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.defender2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.defender2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.defender2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Defender II",

        "channelIds": [

            "6"

        ],

        "rank": "404"

    },

    {

        "pkgName": "com.herocraft.game.free.gibbets2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.herocraft.game.free.gibbets2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.herocraft.game.free.gibbets2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.herocraft.game.free.gibbets2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HeroCraft Ltd",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gibbets 2",

        "channelIds": [

            "6"

        ],

        "rank": "591"

    },

    {

        "pkgName": "com.natenai.glowhockey",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.natenai.glowhockey.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.natenai.glowhockey.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.natenai.glowhockey",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Natenai Ariyatrakool",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Glow Hockey",

        "channelIds": [

            "6"

        ],

        "rank": "592"

    },

    {

        "pkgName": "com.littlewoody.appleshoot",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.littlewoody.appleshoot.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.littlewoody.appleshoot.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.littlewoody.appleshoot",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Words Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fruit Shoot",

        "channelIds": [

            "7"

        ],

        "rank": "590"

    },

    {

        "pkgName": "com.mpisoft.doors",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mpisoft.doors.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mpisoft.doors.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mpisoft.doors",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MPI Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "100 doors",

        "channelIds": [

            "7"

        ],

        "rank": "692"

    },

    {

        "pkgName": "com.zeptolab.ctr2.f2p.google",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.zeptolab.ctr2.f2p.google.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zeptolab.ctr2.f2p.google.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zeptolab.ctr2.f2p.google",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "ZeptoLab",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cut the Rope 2",

        "channelIds": [

            "7"

        ],

        "rank": "236"

    },

    {

        "pkgName": "com.codeturkey.gearsoftime",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.codeturkey.gearsoftime.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.codeturkey.gearsoftime.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.codeturkey.gearsoftime",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Structureless Studios",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gears of Time",

        "channelIds": [

            "7"

        ],

        "rank": "946"

    },

    {

        "pkgName": "uk.co.aifactory.moveitfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/uk.co.aifactory.moveitfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/uk.co.aifactory.moveitfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/uk.co.aifactory.moveitfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "AI Factory Limited",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Move it! Free - Block puzzle",

        "channelIds": [

            "7"

        ],

        "rank": "478"

    },

    {

        "pkgName": "ua.co.cts.sideup",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/ua.co.cts.sideup.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/ua.co.cts.sideup.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/ua.co.cts.sideup",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Exponenta",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Move the Box",

        "channelIds": [

            "7"

        ],

        "rank": "992"

    },

    {

        "pkgName": "com.magmamobile.game.Plumber",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.magmamobile.game.Plumber.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.magmamobile.game.Plumber.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.magmamobile.game.Plumber",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Magma Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Plumber",

        "channelIds": [

            "7"

        ],

        "rank": "306"

    },

    {

        "pkgName": "com.icenta.sudoku.ui",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.icenta.sudoku.ui.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.icenta.sudoku.ui.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.icenta.sudoku.ui",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "genina.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Sudoku Free",

        "channelIds": [

            "7"

        ],

        "rank": "621"

    },

    {

        "pkgName": "com.kiragames.unblockmefree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kiragames.unblockmefree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiragames.unblockmefree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiragames.unblockmefree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Kiragames Co., Ltd.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Unblock Me FREE*",

        "channelIds": [

            "7"

        ],

        "rank": "342"

    },

    {

        "pkgName": "com.turbochilli.unrollme",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.turbochilli.unrollme.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.turbochilli.unrollme.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.turbochilli.unrollme",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Turbo Chilli",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Unroll Me",

        "channelIds": [

            "7"

        ],

        "rank": "788"

    },

    {

        "pkgName": "com.disney.WMPLite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.disney.WMPLite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.disney.WMPLite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.disney.WMPLite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Disney",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Where’s My Perry? Free",

        "channelIds": [

            "7"

        ],

        "rank": "384"

    },

    {

        "pkgName": "com.scopely.wordwars",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.scopely.wordwars.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.scopely.wordwars.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.scopely.wordwars",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Scopely",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Wordly - The Word Game",

        "channelIds": [

            "7"

        ],

        "rank": "958"

    },

    {

        "pkgName": "de.hms.xconstruction",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/de.hms.xconstruction.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/de.hms.xconstruction.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/de.hms.xconstruction",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "CrossConstruct",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "X Construction Lite",

        "channelIds": [

            "7"

        ],

        "rank": "1225"

    },

    {

        "pkgName": "uk.co.aifactory.chessfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/uk.co.aifactory.chessfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/uk.co.aifactory.chessfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/uk.co.aifactory.chessfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "AI Factory Limited",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Chess Free",

        "channelIds": [

            "7"

        ],

        "rank": "712"

    },

    {

        "pkgName": "com.freshgames.cubis",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.freshgames.cubis.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.freshgames.cubis.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.freshgames.cubis",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "FreshGames",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cubis® - Addictive Puzzler!",

        "channelIds": [

            "7"

        ],

        "rank": "743"

    },

    {

        "pkgName": "com.bigduckgames.flow",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bigduckgames.flow.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigduckgames.flow.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigduckgames.flow",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Big Duck Games LLC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Flow Free",

        "channelIds": [

            "7"

        ],

        "rank": "228"

    },

    {

        "pkgName": "com.herocraft.game.f2p.puzzle_defence",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.herocraft.game.f2p.puzzle_defence.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.herocraft.game.f2p.puzzle_defence.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.herocraft.game.f2p.puzzle_defence",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HeroCraft Ltd",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Puzzle Defense: Dragon",

        "channelIds": [

            "7"

        ],

        "rank": "450"

    },

    {

        "pkgName": "com.com2us.witchwars.normal.freefull.google.global.android.common",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.com2us.witchwars.normal.freefull.google.global.android.common.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.com2us.witchwars.normal.freefull.google.global.android.common.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.com2us.witchwars.normal.freefull.google.global.android.common",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Com2uS USA",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Witch Wars Puzzle",

        "channelIds": [

            "7"

        ],

        "rank": "754"

    },

    {

        "pkgName": "com.tongwei.blockbreaker",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tongwei.blockbreaker.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tongwei.blockbreaker.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tongwei.blockbreaker",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "CanadaDroid",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Break Bricks",

        "channelIds": [

            "7"

        ],

        "rank": "822"

    },

    {

        "pkgName": "com.zeptolab.ctr.ads",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.zeptolab.ctr.ads.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zeptolab.ctr.ads.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zeptolab.ctr.ads",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "ZeptoLab",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Cut the Rope Full Free",

        "channelIds": [

            "7"

        ],

        "rank": "992"

    },

    {

        "pkgName": "com.spice.hangman",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.spice.hangman.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.spice.hangman.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.spice.hangman",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "SpiceLabs",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Hangman",

        "channelIds": [

            "7"

        ],

        "rank": "637"

    },

    {

        "pkgName": "com.mediocre.sprinklefree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mediocre.sprinklefree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mediocre.sprinklefree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mediocre.sprinklefree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mediocre",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Sprinkle Free",

        "channelIds": [

            "7"

        ],

        "rank": "1"

    },

    {

        "pkgName": "com.cg.tennis",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.cg.tennis.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.cg.tennis.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.cg.tennis",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mouse Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Tennis 3D",

        "channelIds": [

            "8"

        ],

        "rank": "865"

    },

    {

        "pkgName": "cn.badminton.tw",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/cn.badminton.tw.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/cn.badminton.tw.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/cn.badminton.tw",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "SuperCreative",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Badminton 3D",

        "channelIds": [

            "8"

        ],

        "rank": "931"

    },

    {

        "pkgName": "com.miniclip.eightballpool",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.miniclip.eightballpool.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.miniclip.eightballpool.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.miniclip.eightballpool",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Miniclip.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "8 Ball Pool",

        "channelIds": [

            "8"

        ],

        "rank": "402"

    },

    {

        "pkgName": "air.com.gametop.ATVExtremeWinter",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.gametop.ATVExtremeWinter.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.gametop.ATVExtremeWinter.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.gametop.ATVExtremeWinter",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GameTop.com",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "ATV Extreme Winter Free",

        "channelIds": [

            "8"

        ],

        "rank": "825"

    },

    {

        "pkgName": "com.game.basketballshoot",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.game.basketballshoot.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.basketballshoot.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.basketballshoot",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Sunfoer Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Basketball Shoot",

        "channelIds": [

            "8"

        ],

        "rank": "459"

    },

    {

        "pkgName": "com.vectorunit.yellow",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vectorunit.yellow.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vectorunit.yellow.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vectorunit.yellow",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Vector Unit",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Beach Buggy Blitz",

        "channelIds": [

            "8"

        ],

        "rank": "881"

    },

    {

        "pkgName": "com.topfreegames.bikeracefreeworld",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.topfreegames.bikeracefreeworld.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.topfreegames.bikeracefreeworld.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.topfreegames.bikeracefreeworld",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Top Free Games.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bike Race Free",

        "channelIds": [

            "8"

        ],

        "rank": "963"

    },

    {

        "pkgName": "com.leagem.chesslive",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.leagem.chesslive.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.leagem.chesslive.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.leagem.chesslive",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Italy Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Chess Live",

        "channelIds": [

            "7"

        ],

        "rank": "905"

    },

    {

        "pkgName": "com.droidstudio.game.devilninja",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidstudio.game.devilninja.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidstudio.game.devilninja.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidstudio.game.devilninja",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Droid Studio",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Devil Ninja",

        "channelIds": [

            "8"

        ],

        "rank": "457"

    },

    {

        "pkgName": "com.droidstudio.game.devil2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidstudio.game.devil2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidstudio.game.devil2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidstudio.game.devil2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Droid Studio",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Devil Ninja 2",

        "channelIds": [

            "8"

        ],

        "rank": "451"

    },

    {

        "pkgName": "com.creativemobile.DragRacing",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.creativemobile.DragRacing.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.creativemobile.DragRacing.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.creativemobile.DragRacing",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Creative Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Drag Racing",

        "channelIds": [

            "8"

        ],

        "rank": "891"

    },

    {

        "pkgName": "com.creativemobile.dragracingbe",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.creativemobile.dragracingbe.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.creativemobile.dragracingbe.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.creativemobile.dragracingbe",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Creative Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Drag Racing Bike Edition",

        "channelIds": [

            "8"

        ],

        "rank": "750"

    },

    {

        "pkgName": "de.wendytech.grm",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/de.wendytech.grm.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/de.wendytech.grm.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/de.wendytech.grm",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "wendytech.de",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gravity Racing Madness",

        "channelIds": [

            "8"

        ],

        "rank": "808"

    },

    {

        "pkgName": "com.fingersoft.hillclimb",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fingersoft.hillclimb.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fingersoft.hillclimb.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fingersoft.hillclimb",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Fingersoft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Hill Climb Racing",

        "channelIds": [

            "8"

        ],

        "rank": "664"

    },

    {

        "pkgName": "iplay.junglecricket",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/iplay.junglecricket.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/iplay.junglecricket.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/iplay.junglecricket",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "iPlay Games Store",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Jungle Cricket",

        "channelIds": [

            "8"

        ],

        "rank": "938"

    },

    {

        "pkgName": "com.ubisoft.redlynx.motoheroz",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.ubisoft.redlynx.motoheroz.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ubisoft.redlynx.motoheroz.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.ubisoft.redlynx.motoheroz",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Ubisoft Entertainment",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Motoheroz",

        "channelIds": [

            "8"

        ],

        "rank": "329"

    },

    {

        "pkgName": "com.dogbytegames.offroadlegendsfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dogbytegames.offroadlegendsfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dogbytegames.offroadlegendsfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dogbytegames.offroadlegendsfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DogByte Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Offroad Legends",

        "channelIds": [

            "8"

        ],

        "rank": "214"

    },

    {

        "pkgName": "com.itbenefit.android.paperracing",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.itbenefit.android.paperracing.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.itbenefit.android.paperracing.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.itbenefit.android.paperracing",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "IT Benefit",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Paper Racing",

        "channelIds": [

            "8"

        ],

        "rank": "454"

    },

    {

        "pkgName": "org.cocos2dx.NautilusCricket2014",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/org.cocos2dx.NautilusCricket2014.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/org.cocos2dx.NautilusCricket2014.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/org.cocos2dx.NautilusCricket2014",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Nautilus Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Real Cricket ™ 14",

        "channelIds": [

            "8"

        ],

        "rank": "812"

    },

    {

        "pkgName": "com.vectorunit.green",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vectorunit.green.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vectorunit.green.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vectorunit.green",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Vector Unit",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Shine runner",

        "channelIds": [

            "8"

        ],

        "rank": "473"

    },

    {

        "pkgName": "com.crescentmoongames.slingshotracing",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.crescentmoongames.slingshotracing.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.crescentmoongames.slingshotracing.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.crescentmoongames.slingshotracing",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Crescent Moon Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Slingshot Racing",

        "channelIds": [

            "8"

        ],

        "rank": "683"

    },

    {

        "pkgName": "com.sticksports.stickcricket",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sticksports.stickcricket.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sticksports.stickcricket.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sticksports.stickcricket",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Stick Sports Ltd",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Stick Cricket",

        "channelIds": [

            "8"

        ],

        "rank": "868"

    },

    {

        "pkgName": "com.sticksports.spl",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sticksports.spl.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sticksports.spl.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sticksports.spl",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Stick Sports Ltd",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Stick Cricket Premier League",

        "channelIds": [

            "8"

        ],

        "rank": "210"

    },

    {

        "pkgName": "com.djinnworks.stickstuntbikerlite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.djinnworks.stickstuntbikerlite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.stickstuntbikerlite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.stickstuntbikerlite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Djinnworks e.U.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Stick Stunt Biker",

        "channelIds": [

            "8"

        ],

        "rank": "358"

    },

    {

        "pkgName": "com.djinnworks.StickStuntBiker2.free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.djinnworks.StickStuntBiker2.free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.StickStuntBiker2.free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.StickStuntBiker2.free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Djinnworks e.U.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Stick Stunt Biker 2",

        "channelIds": [

            "8"

        ],

        "rank": "540"

    },

    {

        "pkgName": "com.djinnworks.StickmanDownhill",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.djinnworks.StickmanDownhill.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.StickmanDownhill.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.StickmanDownhill",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Djinnworks e.U.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Stickman Downhill",

        "channelIds": [

            "8"

        ],

        "rank": "789"

    },

    {

        "pkgName": "com.vividgames.skijumping2012free",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vividgames.skijumping2012free.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vividgames.skijumping2012free.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vividgames.skijumping2012free",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Vivid Games S.A.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Super Ski Jump Free",

        "channelIds": [

            "8"

        ],

        "rank": "767"

    },

    {

        "pkgName": "com.noodlecake.ssg",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.noodlecake.ssg.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.noodlecake.ssg.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.noodlecake.ssg",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Noodlecake Studios Inc",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Super Stickman Golf",

        "channelIds": [

            "8"

        ],

        "rank": "772"

    },

    {

        "pkgName": "com.noodlecake.ssg2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.noodlecake.ssg2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.noodlecake.ssg2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.noodlecake.ssg2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Noodlecake Studios Inc",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Super Stickman Golf 2",

        "channelIds": [

            "8"

        ],

        "rank": "660"

    },

    {

        "pkgName": "com.clapfootgames.vtt3dfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.clapfootgames.vtt3dfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.vtt3dfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.clapfootgames.vtt3dfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Clapfoot Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Virtual Table Tennis 3D",

        "channelIds": [

            "8"

        ],

        "rank": "902"

    },

    {

        "pkgName": "com.djinnworks.WingsuitStickman.lite",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.djinnworks.WingsuitStickman.lite.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.WingsuitStickman.lite.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.djinnworks.WingsuitStickman.lite",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Djinnworks e.U.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Wingsuit Stickman",

        "channelIds": [

            "8"

        ],

        "rank": "461"

    },

    {

        "pkgName": "com.vectorunit.blue",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.vectorunit.blue.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vectorunit.blue.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.vectorunit.blue",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Vector Unit",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Riptide",

        "channelIds": [

            "8"

        ],

        "rank": "1"

    },

    {

        "pkgName": "com.sleepwalkers.blackjack",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sleepwalkers.blackjack.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sleepwalkers.blackjack.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sleepwalkers.blackjack",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidVeda LLP",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "BlackJack",

        "channelIds": [

            "9"

        ],

        "rank": "845"

    },

    {

        "pkgName": "com.hk.epoint.android.games.contractrummyfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hk.epoint.android.games.contractrummyfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hk.epoint.android.games.contractrummyfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hk.epoint.android.games.contractrummyfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "ePoint Mobile",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Contract/Shanghai Rummy free",

        "channelIds": [

            "9"

        ],

        "rank": "1257"

    },

    {

        "pkgName": "com.zynga.livepoker",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.zynga.livepoker.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zynga.livepoker.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.zynga.livepoker",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Zynga",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Zynga Poker – Texas Holdem",

        "channelIds": [

            "9"

        ],

        "rank": "10"

    },

    {

        "pkgName": "com.doubleugames.DoubleUCasino",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.doubleugames.DoubleUCasino.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.doubleugames.DoubleUCasino.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.doubleugames.DoubleUCasino",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DoubleUCasino",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "DoubleU Casino - FREE Slots",

        "channelIds": [

            "9"

        ],

        "rank": "606"

    },

    {

        "pkgName": "com.dragonplay.dragonplaypoker",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dragonplay.dragonplaypoker.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dragonplay.dragonplaypoker.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dragonplay.dragonplaypoker",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Dragonplay",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dragonplay Poker",

        "channelIds": [

            "9"

        ],

        "rank": "675"

    },

    {

        "pkgName": "com.mobilityware.freecell",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobilityware.freecell.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobilityware.freecell.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobilityware.freecell",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MobilityWare",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Free Cell Solitaire",

        "channelIds": [

            "9"

        ],

        "rank": "888"

    },

    {

        "pkgName": "com.game.good.ginrummy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.game.good.ginrummy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.good.ginrummy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.good.ginrummy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GoodSoft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Gin Rummy",

        "channelIds": [

            "9"

        ],

        "rank": "475"

    },

    {

        "pkgName": "jp.gree.jackpot",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/jp.gree.jackpot.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.gree.jackpot.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/jp.gree.jackpot",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GREE, INC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Jackpot Slots - Slot Machines",

        "channelIds": [

            "9"

        ],

        "rank": "924"

    },

    {

        "pkgName": "com.dragonplay.liveholdempro",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dragonplay.liveholdempro.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dragonplay.liveholdempro.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dragonplay.liveholdempro",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Dragonplay",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Live Hold'em Poker Pro",

        "channelIds": [

            "9"

        ],

        "rank": "604"

    },

    {

        "pkgName": "com.cattama.pyramid",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.cattama.pyramid.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.cattama.pyramid.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.cattama.pyramid",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "CatTama",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Pyramid [Card game]",

        "channelIds": [

            "9"

        ],

        "rank": "778"

    },

    {

        "pkgName": "com.mobage.ww.a692.Bahamut_Android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobage.ww.a692.Bahamut_Android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a692.Bahamut_Android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a692.Bahamut_Android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mobage",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Rage of Bahamut",

        "channelIds": [

            "9"

        ],

        "rank": "947"

    },

    {

        "pkgName": "com.sharkparty.slots7",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.sharkparty.slots7.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sharkparty.slots7.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.sharkparty.slots7",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Shark Party Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Slots Haunted Halloween",

        "channelIds": [

            "9"

        ],

        "rank": "989"

    },

    {

        "pkgName": "air.com.yazino.android.slots",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.yazino.android.slots.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.yazino.android.slots.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.yazino.android.slots",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Yazino",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Slots Wheel Deal–Free Slots",

        "channelIds": [

            "9"

        ],

        "rank": "781"

    },

    {

        "pkgName": "com.mobilityware.solitaire",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobilityware.solitaire.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobilityware.solitaire.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobilityware.solitaire",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MobilityWare",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Solitaire",

        "channelIds": [

            "9"

        ],

        "rank": "281"

    },

    {

        "pkgName": "com.mobilityware.spider",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobilityware.spider.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobilityware.spider.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobilityware.spider",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "MobilityWare",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Spider Solitaire",

        "channelIds": [

            "9"

        ],

        "rank": "904"

    },

    {

        "pkgName": "com.igg.pokerdeluxe",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.igg.pokerdeluxe.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.pokerdeluxe.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.igg.pokerdeluxe",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "IGG.COM",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Texas HoldEm Poker Deluxe",

        "channelIds": [

            "9"

        ],

        "rank": "222"

    },

    {

        "pkgName": "com.kamagames.pokerist",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kamagames.pokerist.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kamagames.pokerist.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kamagames.pokerist",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "KamaGames",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Texas Poker",

        "channelIds": [

            "9"

        ],

        "rank": "426"

    },

    {

        "pkgName": "uk.co.aifactory.backgammonfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/uk.co.aifactory.backgammonfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/uk.co.aifactory.backgammonfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/uk.co.aifactory.backgammonfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "AI Factory Limited",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Backgammon Free",

        "channelIds": [

            "9"

        ],

        "rank": "884"

    },

    {

        "pkgName": "com.gameloft.android.ANMP.GloftUOHM",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gameloft.android.ANMP.GloftUOHM.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftUOHM.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gameloft.android.ANMP.GloftUOHM",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Gameloft",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "UNO™ & Friends",

        "channelIds": [

            "9"

        ],

        "rank": "915"

    },

    {

        "pkgName": "eu.mvns.games",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/eu.mvns.games.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/eu.mvns.games.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/eu.mvns.games",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "AbZorba Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "BlackJack 21 Live - Casino",

        "channelIds": [

            "9"

        ],

        "rank": "881"

    },

    {

        "pkgName": "air.com.slotgalaxy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/air.com.slotgalaxy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.slotgalaxy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/air.com.slotgalaxy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Tap Slots",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Slot Galaxy HD Slot Machines",

        "channelIds": [

            "9"

        ],

        "rank": "352"

    },

    {

        "pkgName": "com.mobage.ww.a1439.Bingo_PartyLand_Android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mobage.ww.a1439.Bingo_PartyLand_Android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a1439.Bingo_PartyLand_Android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mobage.ww.a1439.Bingo_PartyLand_Android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Mobage",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Bingo PartyLand",

        "channelIds": [

            "9"

        ],

        "rank": "391"

    },

    {

        "pkgName": "com.king.pyramidsolitairesaga",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.king.pyramidsolitairesaga.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.pyramidsolitairesaga.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.pyramidsolitairesaga",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "King",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Pyramid Solitaire Saga",

        "channelIds": [

            "9"

        ],

        "rank": "80"

    },

    {

        "pkgName": "com.dreamappstudios.dreamfish",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dreamappstudios.dreamfish.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dreamappstudios.dreamfish.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dreamappstudios.dreamfish",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DreamWeaver Labs, LLC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Dream Fish",

        "channelIds": [

            "10"

        ],

        "rank": "546"

    },

    {

        "pkgName": "com.herocraft.game.farmfrenzy.freemium",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.herocraft.game.farmfrenzy.freemium.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.herocraft.game.farmfrenzy.freemium.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.herocraft.game.farmfrenzy.freemium",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HeroCraft Ltd",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Farm Frenzy",

        "channelIds": [

            "10"

        ],

        "rank": "528"

    },

    {

        "pkgName": "com.droidhen.fish",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.fish.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.fish.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.fish",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Fishing Diary",

        "channelIds": [

            "10"

        ],

        "rank": "385"

    },

    {

        "pkgName": "com.pocketfun.happyworldpark",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.pocketfun.happyworldpark.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pocketfun.happyworldpark.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.pocketfun.happyworldpark",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "POCKET FUN",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Happy World Park",

        "channelIds": [

            "10"

        ],

        "rank": "759"

    },

    {

        "pkgName": "com.iugome.lilknights",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.iugome.lilknights.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.iugome.lilknights.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.iugome.lilknights",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "GREE, INC",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Knights & Dragons",

        "channelIds": [

            "10"

        ],

        "rank": "921"

    },

    {

        "pkgName": "com.droidhen.game.mcity",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.droidhen.game.mcity.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.game.mcity.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.droidhen.game.mcity",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "DroidHen",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Miracle City",

        "channelIds": [

            "10"

        ],

        "rank": "492"

    },

    {

        "pkgName": "com.bigbluebubble.singingmonsters.full",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bigbluebubble.singingmonsters.full.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigbluebubble.singingmonsters.full.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigbluebubble.singingmonsters.full",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Big Blue Bubble",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "My Singing Monsters",

        "channelIds": [

            "10"

        ],

        "rank": "710"

    },

    {

        "pkgName": "com.king.petrescuesaga",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.king.petrescuesaga.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.petrescuesaga.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.king.petrescuesaga",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "King",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Pet Rescue Saga",

        "channelIds": [

            "10"

        ],

        "rank": "398"

    },

    {

        "pkgName": "com.extensivestudios.snappydragons2",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.extensivestudios.snappydragons2.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.extensivestudios.snappydragons2.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.extensivestudios.snappydragons2",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Extensive Studios",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Snappy Dragon 2",

        "channelIds": [

            "10"

        ],

        "rank": "830"

    },

    {

        "pkgName": "com.glu.stardom",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.glu.stardom.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.stardom.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.glu.stardom",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Glu",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Stardom: The A List",

        "channelIds": [

            "10"

        ],

        "rank": "361"

    },

    {

        "pkgName": "com.kiwi.westbound",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.kiwi.westbound.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiwi.westbound.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.kiwi.westbound",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Kiwi, Inc.",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Westbound",

        "channelIds": [

            "10"

        ],

        "rank": "631"

    },

    {

        "pkgName": "com.hg.frozenfrontfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hg.frozenfrontfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.frozenfrontfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.frozenfrontfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HandyGames",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "1941 Frozen Front",

        "channelIds": [

            "10"

        ],

        "rank": "1361"

    },

    {

        "pkgName": "com.stac.empire.main",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.stac.empire.main.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.stac.empire.main.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.stac.empire.main",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Silent Ocean",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Age of Warring Empire",

        "channelIds": [

            "10"

        ],

        "rank": "401"

    },

    {

        "pkgName": "com.gamehivecorp.kicktheboss.android",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gamehivecorp.kicktheboss.android.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamehivecorp.kicktheboss.android.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamehivecorp.kicktheboss.android",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Game Hive Corporation",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Beat the Boss",

        "channelIds": [

            "10"

        ],

        "rank": "453"

    },

    {

        "pkgName": "com.fluik.OfficeJerkFree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.fluik.OfficeJerkFree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fluik.OfficeJerkFree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.fluik.OfficeJerkFree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Fluik",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Office Jerk Free",

        "channelIds": [

            "10"

        ],

        "rank": "617"

    },

    {

        "pkgName": "com.hg.savethepuppiesfree",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hg.savethepuppiesfree.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.savethepuppiesfree.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hg.savethepuppiesfree",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "HandyGames",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Save the Puppies",

        "channelIds": [

            "10"

        ],

        "rank": "27"

    },

    {

        "pkgName": "com.game.SkaterBoy",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.game.SkaterBoy.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.SkaterBoy.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.game.SkaterBoy",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Runner Games",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Skater boy",

        "channelIds": [

            "10"

        ],

        "rank": "388"

    },

    {

        "pkgName": "com.animoca.google.starGirlChristmas",

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.animoca.google.starGirlChristmas.jpg",

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.animoca.google.starGirlChristmas.png",

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.animoca.google.starGirlChristmas",

        "description": "TBA",

        "rating": "5",

        "pkgver": "10",

        "developer": "Outblaze Ventures",

        "apkUrl": "",

        "screenshots": [

            ""

        ],

        "title": "Star Girl Christmas",

        "channelIds": [

            "10"

        ],

        "rank": "540"

    },

	

                {

        "rating": "5", 

        "pkgName": "com.jumpgames.rswrb", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.jumpgames.rswrb.jpg", 

        "rank": 1, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.jumpgames.rswrb.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.jumpgames.rswrb", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Real Steel World Robot Boxing", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.playstudios.myvegas", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.playstudios.myvegas.jpg", 

        "rank": 2, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.playstudios.myvegas.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.playstudios.myvegas", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Slots - myVEGAS Free Casino", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.appgame7.candyfrenzy2", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.appgame7.candyfrenzy2.jpg", 

        "rank": 3, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.appgame7.candyfrenzy2.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.appgame7.candyfrenzy2", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Candy Frenzy 2", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.dragonplay.slotcity", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.dragonplay.slotcity.jpg", 

        "rank": 4, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dragonplay.slotcity.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.dragonplay.slotcity", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Dragonplay Slots", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.netherfire.PirateCasino", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.netherfire.PirateCasino.jpg", 

        "rank": 5, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.netherfire.PirateCasino.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.netherfire.PirateCasino", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Pirate Casino", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.gamebasics.osm", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.gamebasics.osm.jpg", 

        "rank": 6, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamebasics.osm.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.gamebasics.osm", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Online Soccer Manager", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.mavenhut.solitaire3", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.mavenhut.solitaire3.jpg", 

        "rank": 7, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mavenhut.solitaire3.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.mavenhut.solitaire3", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Solitaire 3 Arena", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.bigbluebubble.finderskeep", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.bigbluebubble.finderskeep.jpg", 

        "rank": 8, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigbluebubble.finderskeep.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.bigbluebubble.finderskeep", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Finder's Keep", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.slotsfavorites.slots.android", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.slotsfavorites.slots.android.jpg", 

        "rank": 9, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.slotsfavorites.slots.android.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.slotsfavorites.slots.android", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Slots Favorites", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.teamlava.candy", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.teamlava.candy.jpg", 

        "rank": 10, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.teamlava.candy.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.teamlava.candy", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Candy Blast Mania", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.empirefleet.jp", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.empirefleet.jp.jpg", 

        "rank": 11, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.empirefleet.jp.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.empirefleet.jp", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "壮絶大海戦【艦隊ゲームなら、これだ！！】", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.tamalaki.hogmysterysociety", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.tamalaki.hogmysterysociety.jpg", 

        "rank": 12, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tamalaki.hogmysterysociety.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.tamalaki.hogmysterysociety", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Hidden Object Mystery Society", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.xyrality.lkclient", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.xyrality.lkclient.jpg", 

        "rank": 13, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.xyrality.lkclient.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.xyrality.lkclient", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Lords & Knights - Strategy MMO", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "cc.landed.zjdhh", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/cc.landed.zjdhh.jpg", 

        "rank": 14, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/cc.landed.zjdhh.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/cc.landed.zjdhh", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "壮絶大航海", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.hcg.cok.gp", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.hcg.cok.gp.jpg", 

        "rank": 15, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hcg.cok.gp.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.hcg.cok.gp", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Clash of Kings", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.d3p.mpq", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.d3p.mpq.jpg", 

        "rank": 16, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.d3p.mpq.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.d3p.mpq", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "Marvel Puzzle Quest", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }, 

    {

        "rating": "5", 

        "pkgName": "com.linyworks.LegendOfAtlan", 

        "description": "TBA", 

        "pkgver": "10", 

        "bannerUrl": "http://cdn.bluestacks.com/public/appsettings/GamePop/icons/com.linyworks.LegendOfAtlan.jpg", 

        "rank": 17, 

        "iconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.linyworks.LegendOfAtlan.png", 

        "featureIconUrl": "http://cdn.bluestacks.com/public/appsettings/game-mgr/icons/com.linyworks.LegendOfAtlan", 

        "screenshots": [

            ""

        ], 

        "developer": "", 

        "title": "レジェンドオブアトラン: 第2章～天界の門～", 

        "apkUrl": "", 

        "channelIds": [

            "2"

        ]

    }

]
    */}).toString().replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
