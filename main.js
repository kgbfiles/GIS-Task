require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {

  
  // Create Parks Layer
  const parksLayer = new FeatureLayer({
    url: "https://arcgis.sdi.abudhabi.ae/agspublish/rest/services/OpenData/ADSDI_OpenData/MapServer/338",
    visible: true,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: "green",
        outline: { color: [0, 0, 0, 0.5], width: 1 }
      }
    }
  });

  // Create Hospitals Layer
  const hospitalsLayer = new FeatureLayer({
    url: "https://arcgis.sdi.abudhabi.ae/agspublish/rest/services/OpenData/ADSDI_OpenData/MapServer/330",
    visible: true,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: "skyblue",
        size: "15px"
      }
    }
  });

  // Create Map
  const map = new Map({
    basemap: "streets-navigation-vector",
    layers: [parksLayer, hospitalsLayer]
  });

  // Create MapView
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [54.3773, 24.4539],
    zoom: 12
  });

  // --- Search and filter logic ---
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();

    // Basic keyword matching
    const showParks = query.includes("park", "parks");
    const showHospitals = query.includes("hospital","hospitals");

    // Optional location filter: hardcoded "Corniche"
    const filterCorniche = query.includes("corniche");

    // Set visibility
    parksLayer.visible = showParks;
    hospitalsLayer.visible = showHospitals;

    // zoom to corniche area Abu Dhabi
    if (filterCorniche) {
      const cornichePoint = {
        longitude: 54.3505,
        latitude: 24.4887
      };
      view.goTo({
        center: [cornichePoint.longitude, cornichePoint.latitude],
        zoom: 15
      });
    } 
  });

});
