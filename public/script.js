const map = L.map("mapid").setView([45.508, -73.671], 13);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=sGIAHKEqBJMHFfnGw0hz",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://maptiler.com">Maptiler</a>',
    maxZoom: 18,
    id: "maptiler/streets",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

fetch("/locations")
  .then((res) => res.json())
  .then((data) => data.forEach( microlib => L.marker([microlib.latitude, microlib.longitude]).addTo(map)));

