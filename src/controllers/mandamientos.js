const Mandamiento = require('../models/Mandamiento')

// READ
function obtenerMandamientos(req, res){
    Mandamiento.find()
    .then(data => res.status(200).send(data))
}

// CREATE
function crearMandamiento(req, res){
    const info = req.body;
    const mand = new Mandamiento(info)
    mand.save()
    .then(data => res.send(data))
}

// DELETE
function eliminarMandamiento(req,res){
    const oficio = req.body.oficio;
    Mandamiento.findOneAndDelete({oficio : oficio})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// UPDATE
function modificarMandamiento(req, res){
    const oficio = req.params.oficio;
    const nuevaInfo = req.body;
    Mandamiento.findOneAndUpdate({oficio : oficio}, nuevaInfo)
    .then(data => {
        res.status(200).send(data);
     })
}

module.exports = {
    obtenerMandamientos,
    crearMandamiento,
    modificarMandamiento,
    eliminarMandamiento
}