const Asignacion = require('../models/asignacion')

// READ
function obtenerAsignaciones(req, res){
    Asignacion.find()
    .then(data => res.status(200).send(data))
}

// CREATE
function crearAsignacion(req, res){
    const info = req.body;
    const asig = new Asignacion(info)
    asig.save()
    .then(data => res.send(data))
}

// DELETE
function eliminarAsignacion(req,res){
    const aid = req.body.aid;
    Asignacion.findByIdAndDelete(aid)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// UPDATE
function modificarAsignacion(req, res){
    const aid = req.params.aid;
    const nuevaInfo = req.body;
    Asignacion.findByIdAndUpdate(aid, nuevaInfo)
    .then(data => {
        res.status(200).send(data);
     })
}

module.exports = {
    obtenerAsignaciones,
    crearAsignacion,
    modificarAsignacion,
    eliminarAsignacion
}