document.addEventListener('DOMContentLoaded', function () {

    var mapElement = document.getElementById('map');
    if (!mapElement || typeof L === 'undefined') return;

    /* Polokwane, Limpopo — Leaflet uses [lat, lng] order */
    var businessLocation = [-23.9045, 29.4689];

    var map = L.map('map', {
        scrollWheelZoom: false
    }).setView(businessLocation, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker(businessLocation).addTo(map);

    marker.bindPopup(
        "<strong>Mo'PLK Events Co.</strong><br>" +
        "Polokwane, Limpopo<br>" +
        "Catering events across the region"
    ).openPopup();

    /* Only enable scroll zoom once the user clicks into the map,
       so the rest of the page still scrolls normally */
    map.on('click', function () {
        map.scrollWheelZoom.enable();
    });

});