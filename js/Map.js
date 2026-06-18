document.addEventListener('DOMContentLoaded', function () {
    const mapElement = document.getElementById('map');
    if (!mapElement || typeof L === 'undefined') return;
    /* Coordinates for Polokwane, Limpopo, South Africa */
    const businessLocation = [-23.9045, 29.4689];
    const map = L.map('map', {
        scrollWheelZoom: false
    }).setView(businessLocation, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const marker = L.marker(businessLocation).addTo(map);
    marker.bindPopup(
        '<strong>Mo\'PLK Events Co.</strong><br>' +
        'Based in Polokwane, Limpopo<br>' +
        'Catering events across the region'
    ).openPopup();
    /* Re-enable scroll zoom only once the user clicks into the map,
       so the page itself still scrolls normally otherwise */
    map.on('click', function () {
        map.scrollWheelZoom.enable();
    });
});