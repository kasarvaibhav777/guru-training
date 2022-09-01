let axios = require("axios")

//_______________________get States____________________________________________________

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//___________________________get Districts________________________________________________

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//______________________________get data by pincode and date_______________________________

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//__________________________________get OTP___________________________________________

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//_____________________________Problem 1: get data by distrcit_id and date__________________________________

const getSessionByDistrict = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}




//__________________________Problem2 : Sort cities by their current temperature__________________

let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let cityObjArray = [];

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }            //.............{city: "Bengaluru"}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a7e6cdde7ad954b013be2203d42f31b2`)
            //console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp         //{city;"Bengaluru", temp: 301.2}
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })    //.........function to sort array of objects with cities temp
        //console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: "server error" })
    }
}



//______________________________________Problem3: Meme Creation_____________________________________________________________


let createMeme = async function (req, res) {

    try {
        let id = req.query.template_id
        let nameZero = req.query.text0
        let nameOne = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${nameZero}&text1=${nameOne}&username=${username}&password=${password}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getSessionByDistrict = getSessionByDistrict
module.exports.getSortedCities = getSortedCities
module.exports.createMeme = createMeme