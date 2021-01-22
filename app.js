const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.getLugarLatLong(argv.direccion)
    .then(console.log); */

//argv.direccion

/* clima.getCliema(40.75, -74.0)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLong(direccion)
        const temp = await clima.getClima(coords.lat, coords.long)

        return console.log(`EL clima de ${coords.direccion} es de ${temp}°C`)

    } catch (e) {
        console.log(`No se pudo determinar el clima de ${direccion}`);
    }
};

getInfo(argv.direccion);