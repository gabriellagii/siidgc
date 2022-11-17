const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/Usuario')

passport.use(new LocalStrategy({
    usernameField : 'correo',
    passwordField : 'password'
}, function(correo,password,done){
    Usuario.findOne({ correo : correo })
    .then(usuario => {
        if (!usuario || !usuario.validarContrasena(password))
            return done(null, false, { errors : { 'email o contraseña': 'equivocado(a)' }})
        return done(null, usuario)
    })
    .catch(done)
}))