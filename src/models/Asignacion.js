const mongoose = require("mongoose");

const AsignacionSchema = mongoose.Schema({
    area: {
      type: String, 
      required: true,
      enum:['Criminalistica', 'Delitos_Ciberneticos','Innovacion_Tecnologica','Juridico']
    },
    instruccion : {
        type: String,
        required: true
    },
    mandamientos: Array
  },{
    collection: "Asignaciones",
    timestamps: true
})

const Asignacion = mongoose.model("Asignacion", AsignacionSchema);

module.exports = Asignacion;