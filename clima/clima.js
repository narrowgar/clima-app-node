const axios = require('axios');


const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=122f17b07862da3faf1427425f99046e&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}