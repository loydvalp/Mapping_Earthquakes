// Add console.log to check to see if our code is working.
console.log("working");

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData =
  "https://raw.githubusercontent.com/loydvalp/Mapping_Earthquakes/master/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
