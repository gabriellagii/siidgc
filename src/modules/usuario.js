const mongoose = require("mongoose");
const UniqueValidator = require("mongoose-unique-validator")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const SchemaUsuario = mongoose.Schema({
    nombre : {
        type: String,
        unique: [true, "nombre ya registrado"],
        required: true 
    },
    nom_usr: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, "username inválido"],
        index: true
    }, 
    expediente: {
        type: Number,
        unique: [true, "expediente ya existe"],
        required: true
    },
    correo: {
        type: String,
        unique: true,
        required: true,
        match: [/\S+@\S+\.\S+/, "correo inválido"],
        index: true
    },
    telefono: Number,
    hash: String,
    salt: String,
}, {timestamp: true})

SchemaUsuario.plugin(UniqueValidator, { message : "El usuario ya existe" })

SchemaUsuario.methods.crearContrasena = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex")
}

SchemaUsuario.methods.validarContrasena = function(password){
    const pass = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex")
    return pass === this.hash
}

SchemaUsuario.methods.generaJWT = function() {
    const today = new Date();
    const exp = new Date();

    exp.setDate(today.getDate() + 60)

    return jwt.sign({
        id: this._id,
        nom_usr: this.nom_usr,
        exp: parseInt(exp.getTime() / 1000)
    }, 'secret')
}

SchemaUsuario.methods.toAuthJSON = function(){
    return {
        nom_usr : this.nom_usr,
        correo : this.correo,
        token: this.generaJWT()
    }
}

SchemaUsuario.methods.publicData = function(){
    return {
        nom_usr : this.nom_usr,
        correo: this.correo,
        nombre : this.nombre,
    }
}

const Usuario = mongoose.model("Usuario", SchemaUsuario)

module.exports = Usuario;