const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bcd3deff88a3168707ac710dfad59383&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}