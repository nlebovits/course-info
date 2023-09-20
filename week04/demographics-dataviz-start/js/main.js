import * as csv from 'https://unpkg.com/csv-parse@5.5.0/dist/esm/sync.js'

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

async function downloadDemographicData() {
    const resp = await fetch('../data/phl_blockgroup_dmg.csv');
    const text = await resp.text();
    const rows = csv.parse(text, {
        from_line: 2,
        columns: false
    });
    console.log(rows);

    const dmgByGeoid = {};

    for (const row of rows){
        const [state, county, tract, bgid] = row.slice(row.length - 4);
        const geoid = state + county + tract + bgid;
        row.push(geoid) 
        dmgByGeoid[geoid] = row;

    console.log(dmgByGeoid);
    }

    return dmgByGeoid;
}

const geoData = await downloadGeographicData();
const dmgData = await downloadDemographicData();

function calcFeatureStyle(blockgroup) {
    const geoid = blockgroup.properties['GEOID'];
    const row = dmgData[geoid];
    const totalPop = row[0];
    const maxPop = 4657;

    return { 
        fillOpacity: totalPop * 1.0 / maxPop,
        weight: 0
    };
}

const dataLayer = L.geoJSON(geoData, {
    style: calcFeatureStyle,
});
dataLayer.addTo(map);

window.map = map;
window.geoData = geoData;
window.dmgData = dmgData;
window.dataLayer = dataLayer;