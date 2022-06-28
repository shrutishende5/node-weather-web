const request = require('postman-request');
const foreCast = (lat,long,callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=2913bb91572a99e3a8d1e4f6d04c1ad5&query='+lat+','+long;
    //console.log(url);
    request({url:url,json:true},(error,response) =>{
    if(error){
        callback('unable to find location');
    }else if(response.body.success === false){
        callback(response.body.error.info);
    }else{
        callback(`it's currently ${response.body.current.temperature} degree out. it's feel like ${response.body.current.feelslike} degree`)
    }
  
})
}
module.exports = foreCast;