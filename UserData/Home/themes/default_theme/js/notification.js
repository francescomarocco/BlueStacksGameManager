/**
 * Created by Gautam P on 07-Apr-15.
 */
$(document).ready(function(){
    //Sample JSON used for notification example.
    var notificationAppData = '{ "NotificationApps":[' +
        '{"AppName":"BoomBeach", "AppImage":"./img/boom-beach-logo.jpg", "timestamp":"12:57 PM", "AppMessage":"Dr. Terror has landed."},' +
        '{"AppName":"Clash of Clan", "AppImage":"./img/clash-clans-logo.png", "timestamp":"01:04 PM", "AppMessage":"Chief, our shield is about to run out."},'+
        '{"AppName":"Line", "AppImage":"./img/line-logo.png", "timestamp":"01:47 PM", "AppMessage":"You have 1 new message."} ]}';

    var notificationAppData = JSON.parse(notificationAppData);
    var length = Object.keys(notificationAppData.NotificationApps).length;
    if(length){
        for(var i=0;i<length;i++){
            var obj= notificationAppData.NotificationApps[i];
            cardDiv = $('.sample-app').clone();
            cardDiv.removeClass('sample-app').addClass('app');
            cardDiv.attr('id', 'app_' + i);
            cardDiv.find('.app-heading').find('.app-name').text(obj.AppName);
            cardDiv.find('.app-body').find('.app-image').append('<img class="appImage" id=image_' + i + ' src=' + obj.AppImage + '>');
            cardDiv.find('.app-detail-txt').find('.app-detail-subheading').text(obj.AppMessage);
            cardDiv.find('.timestamp').find('.timestamp-text').text(obj.timestamp);
            $('.app-details').append(cardDiv);
        }
        $('.app-details').find('.app').first().remove();
    }
    $(".cross").click(function() {
        $(this).css('background-image','url(./img/x-click.png)');
        var divToRemove = $($(this).closest('.app'));
        setTimeout(function(){
            divToRemove.fadeOut("slow",function(){
                $(this).remove();
                if(!$("div.app-details").html().trim()) {
                    $("div.no-notifications").show();
                }
            });
        },100);
    });
    $(".clear-txt").click(function() {
        $("div.app-details").empty();
        $("div.no-notifications").show();
    });
    $(".app-body").click(function() {
        $(document).find('.active').removeClass('active');
        $(this).addClass('active');
    });
});