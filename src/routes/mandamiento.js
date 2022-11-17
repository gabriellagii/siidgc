const routerM = require('express').Router();

const {
    obtenerMandamientos,
    crearMandamiento,
    modificarMandamiento,
    eliminarMandamiento
} = require('../controllers/mandamientos');

routerM.get('/',obtenerMandamientos)
routerM.post('/', crearMandamiento)
routerM.put('/:oficio', modificarMandamiento)
routerM.delete('/', eliminarMandamiento)

module.exports = routerM;