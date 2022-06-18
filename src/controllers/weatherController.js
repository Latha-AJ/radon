let axios = require("axios")

const getLondonWeather= async function(req,res){
    try {
        let city = req.query.q
        let APPID = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APPID}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getLondonTemperature= async function(req,res){
    try {
        let city = req.query.q
        let APPID = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APPID}`
        }
        let result = await axios(options)
        res.status(200).send({ temperature: result.data.main["temp"] })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getSortedCities= async function(req,res){
    try{
    const cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let finalArray = []
   
  for (i=0; i<cities.length; i++){
        let cityWithTemp ={city: cities[i]}
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=25a4a9fd791d3b9d5e439285a369c5c7`)

        cityWithTemp.temp = result.data.main.temp
        finalArray.push(cityWithTemp)
    }
     let sortedByTemp = finalArray.sort(function(a,b){return a.temp - b.temp})
     res.status(200).send({status:true, data: sortedByTemp})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}

}


module.exports.getLondonWeather=getLondonWeather

module.exports.getLondonTemperature=getLondonTemperature

module.exports.getSortedCities=getSortedCities