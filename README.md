# GIS Task - Abu Dhabi Parks Map

An interactive web map displaying Abu Dhabi parks & Hospital using ArcGIS Maps SDK for JavaScript.

## Features

- **Interactive Map**: Street basemap centered on Abu Dhabi
- **Parks & Hospital Layer**: Abu Dhabi parks from ArcGIS REST service

## Technologies Used

- **ArcGIS Maps SDK for JavaScript**: Mapping platform
- **HTML5**: Structure and layout

## Data Source

- **Abu Dhabi Parks & Hospital Data**: used query layer data from Abu Dhabi. source: https://data.abudhabi/open-data

## Code Highlights

### Map Initialization

```javascript
const map = new Map({
  basemap: "streets",
  layers: [featureLayer],
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [54.3773, 24.4539], // Abu Dhabi coordinates
  zoom: 11,
});
```

### Feature Layer

```javascript
const featureLayer = new FeatureLayer({
  url: featureLayerURL,
});
```

## How to Use

1. Open `index.html` in a web browser
2. The map loads automatically showing Abu Dhabi
3. Parks & Hsopital appears as markers on the map
4. Enter "Park" or "Hospital" to search which shows the respective features on the map
