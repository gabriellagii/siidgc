const router = require("express").Router();

router.get('/', (req,res) => {
    res.send("Bienvenido a GN")
})

router.use('/mandamientos', require('./mandamiento'));
router.use('/asignaciones', require('./asignacion'));
router.use('/usuarios', require('./usuario'));

module.exports = router;