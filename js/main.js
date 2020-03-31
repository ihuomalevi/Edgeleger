// Initialize and add the map
function initmap(){
// Your Location
const loc = { lat: 42.1145, lng: -71.057083};
// Centered map on location
 const map = new google.maps.Map(document.querySelector('.map')
  , {
     
     zoom: 14,
     center: loc
 });
 // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
    
}