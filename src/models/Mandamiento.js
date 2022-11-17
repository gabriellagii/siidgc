const mongoose = require("mongoose");

const MandamientoSchema = mongoose.Schema({
    tipo: {
      type: String, 
      required: true,
      enum:['Judicial', 'Ministerial']
    },
    oficio: {
      type: String, 
      required: true,
      unique: [true, "el oficio ya existe"]
    },
    asunto : String,
    clasificacion : {
      type : String, 
      enum:['Tarjeta', 'Volante', 'Oficio'],
      required: true
    }, 
  },{
    collection: "Mandamientos",
    timestamps: true
})

const Mandamiento = mongoose.model("Mandamiento", MandamientoSchema);

module.exports = Mandamiento;