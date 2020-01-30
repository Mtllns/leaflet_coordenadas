let map = L.map('map').setView([41.3866854, 2.1699935], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11'
}).addTo(map);

createMarker();

function createMarker() {
    var marker = {};

    map.on('click', function(e) {
        latitude = e.latlng.lat;
        longitude = e.latlng.lng;

        if (marker != undefined) {
            map.removeLayer(marker);
        };

        marker = L.marker([latitude, longitude]).addTo(map);
        var group = new L.featureGroup([marker]);
        map.fitBounds(group.getBounds());
        marker.bindPopup("Mis coordenadas son: <br>" + "<b>Lat: " + latitude + " Lng: " + longitude+"</b>").openPopup();
	});
}