function gmGetParameterByName(name) 
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function gmAppdetailsPageLoaded()
{ 
    pkg = gmGetParameterByName("pkg");
    apkUrl = gmGetParameterByName("apkUrl");
    
    var bannerUrl = gmGetParameterByName("bannerUrl");
    document.getElementById("app_name").innerHTML = gmGetModifiedName(gmGetParameterByName("title"));
    
    gmLoadSpinner();
    //set the appropriate image
    $(".main-img img").attr("src", bannerUrl);
    var detailsUrl = gmGetAppDetailsUrl(pkg);
    
    GmApi.gmMakeWebCall(detailsUrl, "gmResultFromPlay");
    
    initLocalization();
}

function gmLoadSpinner()
{
     var opts = {
        lines: 13, // The number of lines to draw
        length: 3, // The length of each line
        width: 3, // The line thickness
        radius: 9, // The radius of the inner circle
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

    var target = document.getElementById('app_details_spinner');
    var spinner = new Spinner(opts).spin(target);
}


function gmGetModifiedName(name)
{
    if(name.length > 20)
    {
        return name.substring(0, 20)+"...";
    }
    else
        return name;
}

/* called by C# when download gets completed */
function callbackAppInstalled(isInstalled)
{
    if(isInstalled=="True") 
    {
        //remove the progress-cover and add new button for running the app
        clearInterval(timeoutvar);
        progressBar.css("display", "none");
        playbtn.css("display", "inherit");
        //yeah.. download is complete
    }
    else 
    {
        $('#percent').css('width',  (parseInt("99")*parseFloat(($('.outer').width())/100)));
    }
}

/* called by c# after given internal to update download progress */
function DownloadProgress(percent)
{
    if(percent=="100" || percent=="") 
    {
        //show text installing
        $('#status_line').html("Installing");
        GmApi.gmIsAppInstalled(pkg, "callbackAppInstalled");
    }
    else 
    {
        //app is being downloaded
        //look for any UI updates
        console.log("percent="+percent);
        $('#percent').css('width',  (parseInt(percent)*parseFloat(($('.outer').width())/100)));
    }
}

function gmStartDownloading(){
    //start downloading
    GmApi.gmStartAppDownload(pkg, apkUrl);

    //TODO-> look for any network exception
    //hide the getitstartAppDownload button 
    $("#getitbtn").css("display", "none");
    playbtn = $("#playbtn");

    progressBar = $(".progress-cover");
    progressBar.css("display", "inherit");

    timeoutvar = setInterval(function() {
    	GmApi.gmGetAppDownloadProgress(pkg, "DownloadProgress");
    }, 1000);
}

function gmGetitButtonClicked(){       
    gmStartDownloading();
}

function gmPlayButtonClicked(){
    pkg = gmGetParameterByName("pkg");
    title = gmGetParameterByName("title");
    GmApi.gmRelaunchApp(title, pkg, "", "", "");
}

/* called by C# to parse html to show search result */
function gmResultFromPlay(response) {
    var details=gmParseDetailsHtml(response);

    //hide the spinner ,and show the respective content
    $("#app_details_spinner").css("display", "none");
    $(".main-img").css("display", "inherit");
    $(".content-bottom").css("visibility", "visible");

    document.getElementById("app_desc").innerHTML= details["description"];
    document.getElementById("app_rate_count").innerHTML = details["reviews_num"];
    var images=gmParseImages(response);
    for(i=0;i<images.length;i++){
        var img = document.createElement("img");
        img.src = images[i];
        $('#image-list').append('<li>' + img.innerHTML + '</li>');
        document.getElementById("image-list").appendChild(img);
    }


    //setting the score for this app
    var score = details["score"];
    for(var i=1; i<=score && i<=5; i++)
    {
        $("#star"+i).addClass("active");
    }
}

