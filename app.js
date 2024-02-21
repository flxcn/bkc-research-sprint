mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;


const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', () => {
map.addLayer({
    id: 'terrain-data',
    type: 'line',
    source: {
    type: 'vector',
    url: 'mapbox://mapbox.mapbox-terrain-v2'
    },
    'source-layer': 'contour'
});
});

