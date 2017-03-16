var map = L.map('map', {
  center: [39.904058, 116.398401],
  zoom: 12
});
var Stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var housingprice = $.ajax("https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/geojson/housingprice_Beijing.geojson")



 housingprice.done(function(data) {
  //  console.log(housingprice.features)
  // question 1: the length is not defined, may be because the "features" in object is a string, how to fix it?
  // question 2: featureLayer is not defined.

  //plot markers
   for(var i=0; i< housingprice.features.length; i++){
     ousingprice.features[i].properties['marker-color'] = '#DC143C';
     housingprice.features[i].properties['marker-symbol'] = 'marker-icon';
   }

   var housingLayer = L.mapbox.featureLayer(housingprice).addTo(map);

   var translations = [
    [0, 20000, "low"],
    [20000, 50000, "medium"],
    [50000, 100000, "high"]
  ];

  var reclassed = turf.reclass(
    housingprice, 'totalprice', 'price', translations);
    });
