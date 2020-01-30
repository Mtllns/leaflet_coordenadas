var map = L.map('map').setView([41.3866854, 2.1699935], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11'
}).addTo(map);

var marker = L.marker([41.3866569, 2.1659264]).addTo(map); // añade marcador en la Lat y  long
marker.bindPopup("Calle Calle Balmes, 16.<br>08007 Barcelona").openPopup(); // añade popup al hacer clic en el marcador