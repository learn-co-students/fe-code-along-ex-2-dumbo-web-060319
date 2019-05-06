console.log('connected');

require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Search',
  'esri/widgets/BasemapToggle'
], function(Map, MapView, Search, BasemapToggle) {
  var map = new Map({
    basemap: 'topo-vector'
  });

  var view = new MapView({
    container: 'map-view',
    map: map,
    center: [-73.994077, 40.695342],
    zoom: 15
  });
  var search = new Search({
    view
  });

  var basemapToggle = new BasemapToggle({
    view,
    nextBasemap: 'satellite'
  });

  view.ui.add(search, 'top-right');
  view.ui.add(basemapToggle, 'bottom-right');
});
