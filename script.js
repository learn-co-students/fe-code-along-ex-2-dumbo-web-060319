console.log('connected');

require(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search'], function(
  Map,
  MapView,
  Search
) {
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

  view.ui.add(search, 'top-right');
});
