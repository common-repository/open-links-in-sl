jQuery.noConflict();
jQuery(document).ready(function($){

    // swap location links with action link to open info window in SL
    var mapslink = "maps.secondlife.com/secondlife/";
    $('a[href*="'+mapslink+'"]').each(function() {
        var oldMapUrl = $(this).attr('href');
        var newMapUrl = encodeURI(oldMapUrl);
        newMapUrl = newMapUrl.replace(mapslink, 'secondlife://');
        newMapUrl = newMapUrl.replace("http://", '');
        newMapUrl = newMapUrl.replace("https://", '');
        $(this).attr('title', "Second Life: "+newMapUrl);
        $(this).click(function(event){
            event.preventDefault();
            window.location=newMapUrl;
        });
    });
    var placelink = "world.secondlife.com/place/";
    $('a[href*="'+placelink+'"]').each(function() {
        var oldPlaceUrl = $(this).attr('href');
        var newPlaceUrl = encodeURI(oldPlaceUrl);
        newPlaceUrl = newPlaceUrl.replace(placelink, 'secondlife://');
        newPlaceUrl = newPlaceUrl.replace("http://", '');
        newPlaceUrl = newPlaceUrl.replace("https://", '');
        $(this).attr('title', "Second Life: "+newPlaceUrl);
        $(this).click(function(event){
            event.preventDefault();
            window.location=newPlaceUrl;
        });
    });

    // swap group links to open group info window in SL  
    var grouplink = "world.secondlife.com/group/";
    $('a[href*="'+grouplink+'"]').each(function() {
        var oldGroupUrl = $(this).attr('href');
        var newGroupUrl = encodeURI(oldGroupUrl);
        newGroupUrl = newGroupUrl.replace(grouplink, 'secondlife:///app/group/');
        newGroupUrl = newGroupUrl.replace("http://", '');
        newGroupUrl = newGroupUrl.replace("https://", '');
        $(this).attr('title', "Second Life: "+newGroupUrl);
        $(this).click(function(event){
            event.preventDefault();
            window.location=newGroupUrl;
        });
    });


    // swap people links to open profile window in SL
    var personlink = "world.secondlife.com/resident/";
    $('a[href*="'+personlink+'"]').each(function() {
        var oldPersonUrl = $(this).attr('href');
        var newPersonUrl = encodeURI(oldPersonUrl);
        newPersonUrl = newPersonUrl.replace(personlink, 'secondlife:///app/agent/');
        newPersonUrl = newPersonUrl.replace("http://", '');
        newPersonUrl = newPersonUrl.replace("https://", '');
        $(this).attr('title', "Second Life: "+newPersonUrl);
        $(this).click(function(event){
            event.preventDefault();
            window.location=newPersonUrl;
        });
    });

});