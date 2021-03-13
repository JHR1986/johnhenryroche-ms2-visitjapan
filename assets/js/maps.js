/*jshint esversion: 6 */

/*Start of Javascript Map API code */
/* I utilised the basic code from a Stackoverflow post in order to create an API Map with markers, and then amended it to centre over Japan with the right zoom, focus on four cities in Japan and included additional text relating to facts about these places - see Readme */
let map;
let infoObject = [];
let centerCords = {

    lat: 38.2682,
    lng: 140.8694
};
let markersOnMap = [{
    placeName: "Tokyo",
    text: "The de facto capital and most populous prefecture of Japan, with a population of approximately 37m. Tokyo is the political and economic centre of the country, as well as the seat of the Emperor of Japan and the national government.",
    LatLng: [{
        lat: 35.6762,
        lng: 139.6503
    }]
},
{
    placeName: "Kyoto",
    text: "Kyoto is a city on the island of Honshu, famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses",
    LatLng: [{
        lat: 35.0116,
        lng: 135.7681
    }]
},
{
    placeName: "Osaka",
    text: "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.",
    LatLng: [{
        lat: 34.6937,
        lng: 135.5023
    }]
},
{
    placeName: "Sapporo",
    text: "Sapporo, capital of the mountainous northern Japanese island of Hokkaido, is famous for its beer, skiing and annual Sapporo Snow Festival featuring enormous ice sculptures.",
    LatLng: [{
        lat: 43.0618,
        lng: 141.3545
    }]
},
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (let i = 0; i < markersOnMap.length; i++) {
        let contentString = '<div id="content"><h2>' + markersOnMap[i].placeName +
            '</h2><p>' + markersOnMap[i].text + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            infoObject[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if (infoObject.length > 0) {
        infoObject[0].set("marker", null);
        infoObject[0].close();
        infoObject.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4.5,
        center: centerCords
    });
    addMarkerInfo();
}
/*End of Javascript Map API code */

/*Start of Javascript List Dropdowns - experiences.html */
/* See experiences.html page and Readme for comment on code below */
function showhide(tokyolist) {
    let e = document.getElementById(tokyolist);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}

function showhide(kyotolist) {
    let e = document.getElementById(kyotolist);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}

function showhide(osakalist) {
    let e = document.getElementById(osakalist);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}

function showhide(sapporolist) {
    let e = document.getElementById(sapporolist);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}

/*End of Javascript List Dropdowns - experiences.html */




