$(document).ready(function(){
    window.UTILS = new Utils();

    loadHeader("themes");

    var themes = GmApi.gmGetThemesJson();
    populateThemes(themes);
});

$(window).on("load", function() {
    $(".head-apps.settings").hover(function(){
        $(this).find(".dropDown2").show();
    },function(){
        $(this).find(".dropDown2").hide();
    });
});

function populateThemes(themes)
{
    var list = $('.themesList ul');
    list.html('');
    var current_applied_theme = GmApi.gmGetCurrentTheme();
    for(var i=0; i<themes.length; i++)
    {
        var image_url = themes[i]["banner_url"];
        var theme_title = themes[i]["theme_title"];
        var name = themes[i]["theme_name"];
        var html = "";

        if(current_applied_theme == name )
        {
            html = '<li onclick="'+getThemeClickString(themes[i])+'">'
                +'<a href="#" class="gamPic"><img src="'+image_url+'">'
                +'<span class="useMeOver" style="display:block;"><em>In Use</em></span>'
                +'</a>'
                +'<a href="#" class="gmeNme">'+theme_title+'</a>'
                +'</li>';
        }
        else
        {
            html = '<li onclick="'+getThemeClickString(themes[i])+'">'
                +'<a href="#" class="gamPic"><img src="'+image_url+'"></a>'
                +'<a href="#" class="gmeNme">'+theme_title+'</a>'
                +'</li>';
        }
        list.append(html);
    }
}


function getThemeClickString(theme)
{
    var click_string= "GmApi.gmSetTheme('"+theme["theme_name"]+"','"+theme["theme_base_url"]+"','"+theme["download_url"]+"')";
    return click_string;
}
