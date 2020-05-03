const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(-5.710000, -79.279999)
//    .then(console.log)
//    .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const cordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cordenadas.lat, cordenadas.lng);
        return `El clima de ${ cordenadas.direccion } es de ${ temp }`
    } catch (error) {
        return `No se pudo determinar el clima de ${cordenadas.direccion}`
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);