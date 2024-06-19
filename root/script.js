function getPos() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos);
      } else { 
        x.innerHTML = "Geolocation is not supported.";

      }
      
    }


// For now only devices with built-in browser support for geo-cordinates is supported. 
// Hope to add at some point, using an API to conver Address / Zipcode to geo-cordinates. 
// Altitude support takes priority using https://www.opentopodata.org/

var lat; 
var long;

function showPos(position) {
    lat = (position.coords.latitude);
    long = (position.coords.longitude);
    console.log("Lat: " + lat);
    console.log("Long: " + long);
   }



