const map = L.map('map').setView([39.96, -75.15], 12);

const CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

CartoDB_Positron.addTo(map);

async function downloadGeographicData() {
    const resp = await fetch('../data/phl_blockgroups.geojson'); //makes HTTP request
    const json = await resp.json(); //reads data from response
    return json;
}

const geoData = await downloadGeographicData();

const dataLayer = L.geoJSON(geoData);
dataLayer.addTo(map);

window.map = map;
window.geoData = geoData;
window.dataLayer = dataLayer;