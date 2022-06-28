const request = require('postman-request');
const geoCode = (location,callback) =>{
    let geoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoiaW5kaWExMjM0IiwiYSI6ImNsNGF0b25rcTBpczEzbG83YjJicTRxd3QifQ.nseCOcFM39JLpw8O7kzTZA&limit=1';
   // console.log(geoCode);
    request({url:geoCode,json:true},(error,response) =>{
        //response.body.features[0].center[1]  --> latitute
        //response.body.features[0].center[0]  --> longitute
        if(error){
            callback('uanble to find lat and long');
        }else if(response.body.features.length === 0){
            callback('something went wrong')
        }else{
         const data = {
                    'placeName': response.body.features[0].place_name,  
                    'latitude':response.body.features[0].center[1],
                    'longitute':response.body.features[0].center[0]
                  }
           callback(data);
        }
    })
}
module.exports = geoCode;