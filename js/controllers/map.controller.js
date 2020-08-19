
export const mapController = {
    initMap,
    addMarker,
    panTo
}

var map;

export function initMap(lat = 32.0749831, lng = 34.9120554) {
    return _connectGoogleApi()
        .then(() => {
            map = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 12
            })
            const myLatlng = { lat, lng }
            var infoWindow = new google.maps.InfoWindow(
                { content: 'Click the map to get Lat/Lng!', position: myLatlng });
            infoWindow.open(map);


            // Configure the click listener.
            map.addListener('click', function (mapsMouseEvent) {
                addMarker(mapsMouseEvent.latLng)
                // onCreateLoc(mapsMouseEvent.latLng)
                // Close the current InfoWindow.
                infoWindow.close();
                
 
            })
        })

}
function onCreateLoc(latlng){
    console.log(latlng);
}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Hello World!'
    });
    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    map.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyDV3aMtXNZ4Q87UKlasdj0gHhEP2xEEqFY';
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}



