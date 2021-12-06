
const knex = require("knex")({
    client: 'pg',
    connection: {
        host: 'host.docker.internal',
        user: 'postgres',
        password: '123456',
        database: 'postgres',
        port: '5432'
    }
});


exports.lambdaHandler = async (event, context) => {
    function distance(lat1, lon1, lat2, lon2) {
        let R = 6371; // Radius of the earth in km
        let dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
        let dLon = (lon2 - lon1) * Math.PI / 180;
        let a = 
           0.5 - Math.cos(dLat)/2 + 
           Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
           (1 - Math.cos(dLon))/2;
      
        return R * 2 * Math.asin(Math.sqrt(a));
      }
    const point = [-11.34343434, 80.384384233];
    const all = await knex('addresses');
    const coords = []
    const dist = []
    const distCoords = [];
    const res = [];
    all.map(data => {
    coords.push(data.coordinates);
    })
    let d = 0;
    coords.forEach(function(entry) {
    entry.forEach(function(entryN){
        entry.push(Number(entryN));
    })
        entry.splice(0, 2);
    d = distance(point[0], point[1], entry[0], entry[1]);
    distCoords.push([d, entry[0], entry[1]]);
    });  
    
    distCoords.forEach(function(entry){
    dist.push(entry[0]);
  
    })
    dist.sort(function(a, b) {
        return a - b;
        }).splice(0, 5);
        dist.forEach(function(el){
            distCoords.forEach(function(eld){
              if (el == eld[0]){
                res.push(eld.splice(1, 2));
               
              }
            })
            });
return res;
};

