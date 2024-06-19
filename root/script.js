

function getPos() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos, errorDiag); 
      } else { 
        alert("Geolocation is not supported, most likely by your device.");
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

function errorDiag(error) {
  switch(error.code) {
    case error.TIMEOUT:
      console.log("The request timed out. Error Code 1");
      alert("The request timed out. Error Code 1");
      break;

    case error.UNKNOWN_ERROR:
      console.log("Unknown error. Error Code 2");
      alert("Unknown error. Error Code 2");
      break;

    case error.PERMISSION_DENIED:
      console.log("You or your device denied access Geo-location. Try Again. Error Code 3");
      alert("You or your device denied access Geo-location. Try Again. Error Code 3");
      break;
      
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable. Error Code 4");
      alert("Location information is unavailable. Error Code 4");
      break;
    
    }
  } 


