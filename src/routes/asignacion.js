const routerA = require('express').Router();

const {
    obtenerAsignaciones,
    crearAsignacion,
    modificarAsignacion,
    eliminarAsignacion
} = require('../controllers/asignaciones');

routerA.get('/',obtenerAsignaciones)
routerA.post('/', crearAsignacion)
routerA.put('/:aid', modificarAsignacion)
routerA.delete('/', eliminarAsignacion)

module.exports = routerA;