///<reference path="typings/globals/jquery/index.d.ts"/>
function initialize() {
    var LakeWaikaremoana = {
        center: new google.maps.LatLng(-38.80001185914108, 177.1208242562802),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var TongariroNorthernCircuit = {
        center: new google.maps.LatLng(-39.145363, 175.625221),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var WhanganuiJourney = {
        center: new google.maps.LatLng(-39.226220, 174.924714),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var AbelTasmanCoastTrack = {
        center: new google.maps.LatLng(-40.914423, 173.044860),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var HeaphyTrack = {
        center: new google.maps.LatLng(-40.886141, 172.302828),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var MilfordTrack = {
        center: new google.maps.LatLng(-44.827498, 167.792513),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var KeplerTrack = {
        center: new google.maps.LatLng(-45.450636, 167.574948),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var RouteburnTrack = {
        center: new google.maps.LatLng(-44.767406, 168.173007),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var RakiuraTrack = {
        center: new google.maps.LatLng(-46.860646, 168.057203),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), LakeWaikaremoana);
    var map2 = new google.maps.Map(document.getElementById('googleMap2'), TongariroNorthernCircuit);
    var map3 = new google.maps.Map(document.getElementById('googleMap3'), WhanganuiJourney);
    var map4 = new google.maps.Map(document.getElementById('googleMap4'), AbelTasmanCoastTrack);
    var map5 = new google.maps.Map(document.getElementById('googleMap5'), HeaphyTrack);
    var map6 = new google.maps.Map(document.getElementById('googleMap6'), MilfordTrack);
    var map7 = new google.maps.Map(document.getElementById('googleMap7'), KeplerTrack);
    var map8 = new google.maps.Map(document.getElementById('googleMap8'), RouteburnTrack);
    var map9 = new google.maps.Map(document.getElementById('googleMap9'), RakiuraTrack);
}
$(function () {
    $('#L').click(function () {
        $('#googleMap').css('display', 'block');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#T').click(function () {
        $('#googleMap2').css('display', 'block');
        $('#googleMap2').css('left', '0');
        $('#googleMap2').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#W').click(function () {
        $('#googleMap3').css('display', 'block');
        $('#googleMap3').css('left', '0');
        $('#googleMap3').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#A').click(function () {
        $('#googleMap4').css('display', 'block');
        $('#googleMap4').css('left', '0');
        $('#googleMap4').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#H').click(function () {
        $('#googleMap5').css('display', 'block');
        $('#googleMap5').css('left', '0');
        $('#googleMap5').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#M').click(function () {
        $('#googleMap6').css('display', 'block');
        $('#googleMap6').css('left', '0');
        $('#googleMap6').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#K').click(function () {
        $('#googleMap7').css('display', 'block');
        $('#googleMap7').css('left', '0');
        $('#googleMap7').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap8').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#Ro').click(function () {
        $('#googleMap8').css('display', 'block');
        $('#googleMap8').css('left', '0');
        $('#googleMap8').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap9').css('display', 'none');
    });
});
$(function () {
    $('#Ra').click(function () {
        $('#googleMap9').css('display', 'block');
        $('#googleMap9').css('left', '0');
        $('#googleMap9').css('position', 'relative');
        $('#googleMap').css('display', 'none');
        $('#googleMap2').css('display', 'none');
        $('#googleMap3').css('display', 'none');
        $('#googleMap4').css('display', 'none');
        $('#googleMap5').css('display', 'none');
        $('#googleMap6').css('display', 'none');
        $('#googleMap7').css('display', 'none');
        $('#googleMap8').css('display', 'none');
    });
});
google.maps.event.addDomListener(window, 'load', initialize);
