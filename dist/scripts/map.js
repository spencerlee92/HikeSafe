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
        $('#photo').attr('src', 'images/lake-waikaremoana.jpg');
        $('#hea').html('Lake Waikaremoana');
        $('#des').html('The Lake Waikaremoana Great Walk is a 44 kilometre tramping track which follows the southern and western coast of Lake Waikaremoana in the North Island of New Zealand. Passing through several types of forest, and grassland, track often provides excellent views over the lake. It is classified as one of New Zealand\'s Great Walks, and is located in the Te Urewera National Park.The Lake Waikaremoana Great Walk is located within Te Urewera National Park.[4] The nearest town to the trail is Wairoa, from where there are shuttles on demand to the lake.Waikaremoana can be approached from two directions. State Highway 38 links Wairoa and the East Coast with the central North Island and passes the lake and the Āniwaniwa Visitor Centre. The highway is unsealed for about 80 kilometres between Murupara and the village of Tuai. There are well-marked side roads to the main boat ramps and Lake Track entrances.Big Bush Holiday Park runs a variety of transport services around the lake, including a twice weekly service to/from Rotorua and an on demand service to/from Wairoa.Waikaremoana Guided Tours offers a water taxi and shuttle bus service to either end of the track. This runs on demand in winter and to a timetable in summer.');
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
        $('#photo').attr('src', 'images/To.jpg');
        $('#hea').html('Tongariro Northen Circuit');
        $('#des').html('The Tongariro Northern Circuit, one of the New Zealand Great Walks, is a three- to four-day tramp in Tongariro National Park, New Zealand. The hike includes the Tongariro Alpine Crossing, a day\'s march that incorporates the Northern Circuit\'s most stunning scenery. The complete trail forms a 50 kilometres long loop trail that circumnavigates Mount Ngauruhoe. Approximately 7,000 trampers complete the walk each year. This compares to the approximately 25,000 who walk only the Tongariro Crossing section.The best time to go is during the summer months (from December to March). It is important to get information about the weather beforehand. Heavy rain can cause small rivers and therefore complicate the progress of the march significantly, some alpine parts are also quite exposed. Moreover, the beautiful scenery will be missed. Mountaineering equipment is required during the winter.');
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
        $('#photo').attr('src', 'images/Wh.jpg');
        $('#hea').html('Whanganui Journey');
        $('#des').html('The Whanganui Journey is a river journey along the Whanganui River in the North Island of New Zealand travelling by canoe or kayak. The route, starting at Taumarunui and finishing at Pipiriki, is 145 km long and usually takes 5 days to complete. The route is managed by New Zealand\'s Department of Conservation under its Great Walks programme, and much of the route travels through land which is part of the Whanganui National Park.During normal weather conditions the rapids on the river will not exceed grade II. As a result, there are several tour operators that offer a variety of trip combinations covering all, or part of the route.Although the Great Walk route ends at Pipiriki, the river is navigable for a further 89 km and some canoeists continue to exit at the main bridge in Whanganui, which takes a further two days. Because the river is tidal closer to Whanganui, canoeists doing so need to ensure they leave Hipango Park on an outgoing tide.');
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
        $('#photo').attr('src', 'images/bA.jpg');
        $('#hea').html('Abel Tasman Coast Track');
        $('#des').html('The Abel Tasman Coast Track is a 60 kilometres (37 mi) long walking track within the Abel Tasman National Park in New Zealand. It extends from Marahau in the south to Wainui in the north, with many side tracks. It is one of two main tracks through the park, the other being the Abel Tasman Inland Track, which stretches for 38 km between Tinline Bay and Torrent Bay off the main coastal track. The coastal track is well sheltered, and with mild weather in all seasons, it is accessible and open throughout the year.As one of the New Zealand Department of Conservation (DOC) Great Walks, the coastal track is well formed and easy to follow. It is the most popular tramping track in New Zealand, with most of the approximately 200,000 visitors to Abel Tasman National Park walking at least part of the track.[2] It can be walked independently or with commercial operators with guiding, camping, lodge stay and boat stay options. Following a protected coastline, many people combine walking and sea kayaking in Abel Tasman National Park.');
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
        $('#photo').attr('src', 'images/Ht.jpg');
        $('#hea').html('Heaphy Track');
        $('#des').html('The Heaphy Track is a popular tramping track in the north west of the South Island of New Zealand. It is located within the Kahurangi National Park and classified as one of New Zealand\'s nine Great Walks by the Department of Conservation. Named after Charles Heaphy, the track is 78.4 kilometres (48.7 mi) long and is usually walked in four or five days. The track runs from Kohaihai, north of Karamea on the northern west coast of the South Island to the upper valley of the Aorere River, inland from Golden Bay.Before the area became a National Park mountain biking was permitted on the track. As a National Park use of the area comes under the National Parks Act 1980, which stipulates that vehicles are not allowed to be taken off formed roads. This prevents mountain bikers from using the track and debate has been on-going to allow at least some access. The New Zealand Conservation Authority decided to permit mountain bike access again from May 2011 for the winter months when tramping numbers are low. Mountain biking will be allowed each year from 1 May for groups not exceeding six riders.');
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
        $('#photo').attr('src', 'images/Mf.jpg');
        $('#hea').html('Milford Track');
        $('#des').html('The Milford Track is a widely known tramping (hiking) route in New Zealand – located amidst mountains and temperate rain forest in Fiordland National Park in the southwest of the South Island.The 53.5 km hike starts at Glade Wharf at the head of Lake Te Anau and finishes in Milford Sound at Sandfly Point, traversing rainforests, wetlands, and an alpine pass.The New Zealand Department of Conservation classifies this track as a Great Walk and maintains three huts along the track: Clinton Hut, Mintaro Hut and Dumpling Hut. There are also three private lodges and four day shelters available. Unlike most of the other Great Walks the Milford Track has no direct carpark access, and hence trampers require boat transport to the start of the track from Te Anau Downs to Glade House (the southern start of the track). There is also foot access to the start via the Dore Pass Route (10.5 km one way) although this is an advanced track and not recommended for most walkers.[4] At the northern end of the track at Sandfly Point another boat is required to take trampers back to Milford Sound. The north to south option still involves both boats but can only be done during the winter season.');
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
        $('#photo').attr('src', 'images/Kt.jpg');
        $('#hea').html('Kepler Track');
        $('#des').html('The Kepler Track is a 60 km (37 mi) circular tramping track which travels through some spectacular scenery of the South Island of New Zealand and is situated near the town of Te Anau. The track passes through many landscapes of the Fiordland National Park such as rocky mountain ridges, tall mossy forests, lake shores, deep gorges, rare wetlands and rivers. Like the mountains it traverses, the track is named after Johannes Kepler. The track is one of the New Zealand Great Walks and is administered by New Zealand Department of Conservation (DOC).Compared with other tracks in New Zealand, this walking track is constructed to a very high standard. Most streams are bridged, boardwalks cover boggy areas and the very steep sections have steps. It is a moderate walking track that takes three to four days to complete.The Kepler Track is also home to the Kepler Challenge, an annual running race that traverses the whole 60 kilometres, which the winners complete in less than five hours.');
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
        $('#photo').attr('src', 'images/Ro.jpg');
        $('#hea').html('Routeburn Track');
        $('#des').html('The Routeburn Track is a world-renowned tramping (hiking) 32 km track found in the South Island of New Zealand. The track is usually completed by starting on the Queenstown side of the Southern Alps, at the northern end of Lake Wakatipu, and finishing on the Te Anau side, at the Divide, several kilometres from the Homer Tunnel to Milford Sound.The New Zealand Department of Conservation classifies this track as a Great Walk and maintains four huts along the track: Routeburn Flats Hut, Routeburn Falls Hut, Mackenzie Hut, and Howden Hut; in addition there is an emergency shelter at Harris Saddle. The track overlaps two National Parks; the Mount Aspiring National Park and Fiordland National Parks with the border and highest point being the Harris Saddle.This area gets much less rain than the Milford Sound, and the forests are very different, especially on the eastern side of the saddle, which due to less rainfall is predominantly made up of New Zealand red beech and mountain beech, with relatively few ferns. The track spends a long time on the high ridges around Harris Saddle, with great long-distance views in many directions. The track has a long history of use dating back to the 1880s.');
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
        $('#photo').attr('src', 'images/Ra.jpg');
        $('#hea').html('Rakiura Track');
        $('#des').html('The Rakiura Track is a 32-kilometre (20 mi) circular tramping track in Rakiura National Park on Stewart Island in New Zealand. It is one of the New Zealand Great Walks. Hikers often take three days to walk it, but it can be done in one or two days.One end is at Lee Bay, 5 km north of Oban (Stewart Island\'s only settlement), and the other end is at Fern Gully, 2 km west of Oban. It can be walked either way, but is most often walked anticlockwise, starting at Lee Bay. Hikers can arrange transport from Oban over the roads to and from the ends of the track, or can walk along the roads.The track generally follows the coastline for a large part of its length, passing small inlets, large bays and mudflats, and crosses steep hills covered in bush (dense forest) in its middle section. Large sections of the track have been gravelled. Without this, much of the track would degrade into mud, due to the peaty soil, and the rain that falls frequently throughout the year. In general, the track is well-maintained, and of easy to medium difficulty. Walking the track offers the unusual opportunity to see kiwi in the wild. The species on Stewart Island is the southern brown kiwi (Apteryx australis).');
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
