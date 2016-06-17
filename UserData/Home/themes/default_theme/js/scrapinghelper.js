var playUrl_search = "https://play.google.com/store/search?c=apps&q=";
var playUrl_appdetails = "https://play.google.com/store/apps/details?id=";

function gmGetSearchUrl(searchString)
{
	return playUrl_search+searchString;
}

function gmGetAppDetailsUrl(packageName)
{
    return playUrl_appdetails+packageName;
}

function gmParseSearchHtml(data)
{
	//alert(src);
	//console.log(data);
    var apps=[];

    var i=0;
	$(data).find('.card').each(function() {
        i++;
        var app = {};
        app["title"] = $.trim($(this).find('.title').text());
        app["pkgName"] = ($(this).attr('data-docid'));
        app["developer"] = $.trim($(this).find('.subtitle').text());
        app["iconUrl"]=($(this).find('.cover-image').attr('src'));
        app["priceString"]=$.trim($(this).find('.buy').text());
        apps.push(app);
        if(i>40)
        return apps;
	});
	return apps;
}

function gmParseImages(data)
{
    var images=[];
    $(data).find(".screenshot").each(function() {
        imgsrc = this.src;
        images.push(imgsrc);
    });
    return images;
}

function gmParseDetailsHtml(data)
{
    var details=[];
    details["reviews_num"]=$(data).find('.reviews-num').text();
    details["name"] = $(data).find('.document-title').text();
    details["score"] = $(data).find('.score').text();
    details["description"]= $(data).find('.id-app-orig-desc').html();
    return details;
//alert(data);
}
