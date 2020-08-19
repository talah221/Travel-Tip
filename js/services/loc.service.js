export const locService = {
    getLocs: getLocs,
    getPosition: getPosition,
    createLocation: createLocation,
    createLoc: createLoc,
    getPlaceName
}
var gNextId = 101
var locs = []


function createLoc(lat, lng, name) {

    const newLocation = {
        id: gNextId++, name, lat, lng, wheater: 'wheater',
        createdAt: Date.now(), updatedAt: Date.now()
    }
    locs.push(newLocation)
}
function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000);
    });
}


function getPosition() {
    console.log('Getting Pos');

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function createLocation() {
    console.log('a');

}

function getPlaceName(lat, lng) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDV3aMtXNZ4Q87UKlasdj0gHhEP2xEEqFY`)
        .then(res => {
            console.log('lala:',res.data.results[0].formatted_address);
            return (res.data.results[0].formatted_address)
        });
}


