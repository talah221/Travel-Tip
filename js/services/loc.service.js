export const locService = {
    getLocs: getLocs,
    getPosition: getPosition,
    createLocation:createLocation
}
var locs = [{id:1, name:'lala', lat: 11.22, lng: 22.11, wheater:'wheater', createdAt:Date.now(), updatedAt:1 }]



function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


function getPosition() {
    console.log('Getting Pos');

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function createLocation(){
    console.log('a');
    
}
