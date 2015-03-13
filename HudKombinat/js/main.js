$(document).ready(function() {
    $('#slider').flexslider({
        animation: 'slide',
        controlNav: false,
        prevText: '',
        nextText: '',
        smoothHeight: true
    });

//    map
    var MY_MAPTYPE_ID = 'custom_style';
    var myLatlng = new google.maps.LatLng(53.9316134,27.5929838);
    var stylesArray = [
        {    "featureType": "poi",
            "stylers": [
                { "saturation": -100 },
                { "gamma": 0.43 },
                { "lightness": -24 },
                { "visibility": "off" }    ]  },
        {    "stylers": [
            { "saturation": -100 },
            { "gamma": 0.33 },
            { "lightness": -17 }
        ]
        }
    ];
    var mapOptions = {
        center: myLatlng,
        zoom: 17,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"ул. Некрасова 11",
        icon: 'img/marker.png'
    });
    var styledMapOptions = {
        name: 'Custom Style'
    };
    var customMapType = new google.maps.StyledMapType(stylesArray, styledMapOptions);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

//    END map


});