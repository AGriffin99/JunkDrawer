//$('#pikachu').stellar();
////
//$('#pikachu').stellar({verticalScrolling: false});

//$(document).parallax({imageSrc: 'https://vignette.wikia.nocookie.net/smosh/images/e/e1/025Pikachu_OS_anime_4.png/revision/latest?cb=20140725081329'});

var map = L.map('mapid').setView([
//    35.399
    35.595909, -82.550041
//    -83.26
], //8.69
10.5);
map.scrollWheelZoom.disable();
map.zoomControl.remove();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
L.tileLayer('https://api.mapbox.com/styles/v1/agriffin99/cjr0u1bao2d1l2rla119y3zr7/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWdyaWZmaW45OSIsImEiOiJjanIwc2tnN3cwYTBvNDRwNGh0eG1ucGdqIn0.UelgWzFRbt7gDEDdiRTVYg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox.streets'
    //accessToken: 'pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg'

}).addTo(map);


var map2 = L.map('mapid2').setView([
//    35.399
    35.595909, -82.550041
//    -83.26
], //8.69
10.5);
map2.scrollWheelZoom.disable();
map2.zoomControl.remove();
map2.touchZoom.disable();
map2.doubleClickZoom.disable();
map2.boxZoom.disable();
map2.keyboard.disable();
L.tileLayer('https://api.mapbox.com/styles/v1/agriffin99/cjsbb995w0dsq1fnp18tywxyi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWdyaWZmaW45OSIsImEiOiJjanIwc2tnN3cwYTBvNDRwNGh0eG1ucGdqIn0.UelgWzFRbt7gDEDdiRTVYg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
    id: 'mapbox.streets'
    //accessToken: 'pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg'

}).addTo(map2);


var bearIcon = L.icon({
    iconUrl: 'img/blackBear.png',

    iconSize:     [75, 75], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([35.33766,	-83.1587], {icon: bearIcon}).addTo(map2).bindPopup("<b>Black bear sightings.<br>District 9</b><br>1998: 107 <br>2017: 671");


var map3 = L.map('mapid3').setView([
//    35.399
    35.595909, -82.550041
//    -83.26
], //8.69
10.5);
map3.scrollWheelZoom.disable();
map3.zoomControl.remove();
map3.touchZoom.disable();
map3.doubleClickZoom.disable();
map3.boxZoom.disable();
map3.keyboard.disable();
L.tileLayer('https://api.mapbox.com/styles/v1/agriffin99/cjsbb995w0dsq1fnp18tywxyi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWdyaWZmaW45OSIsImEiOiJjanIwc2tnN3cwYTBvNDRwNGh0eG1ucGdqIn0.UelgWzFRbt7gDEDdiRTVYg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
    id: 'mapbox.streets'
    //accessToken: 'pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg'

}).addTo(map3);


var bearIcon2 = L.icon({
    iconUrl: 'img/blackBear.png',

    iconSize:     [75, 75], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([35.33766,	-83.1587], {icon: bearIcon2}).addTo(map3).bindPopup("Don't see us as a threat we just want to survive.");

var PersonIcon = L.icon({
    iconUrl: 'img/people.png',

    iconSize:     [75, 75], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([35.23000,	-83.4080], {icon: PersonIcon}).addTo(map3).bindPopup("We Can Co-exist.");







var menu = L.control({position: 'topleft'});
//menu.addOn = function (map) {
//    var div = L.DomUtil.create('div', 'info legend');
//
//};
menu.addTo(map);

//api.mapbox.com/styles/v1/agriffin99/cjr0u1bao2d1l2rla119y3zr7.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYWdyaWZmaW45OSIsImEiOiJjanIwc2tnN3cwYTBvNDRwNGh0eG1ucGdqIn0.UelgWzFRbt7gDEDdiRTVYg#13.0/42.097267/-75.911136/360



//http://markdalgleish.com/projects/stellar.js/docs/
//https://gist.github.com/theredstapler/eccc6d9e4f23a7fbd79bf8e0b53473c8


//https://github.com/wagerfield/parallax#11-installation