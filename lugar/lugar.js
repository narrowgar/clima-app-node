const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': '18b5c446a4msh1efca0a18b53400p18c505jsn7a3be08735bf' }
    });

    const resp = await instance.get();
    if (resp.data.data.length === 0) {
        throw new error(`no hay resuktados para ${dir}`)
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const long = data.longitude;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}