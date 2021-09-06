const mongoose = require("mongoose");

const url = "mongodb://localhost/probando";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectadx a Mongo"))
  .catch((e) => console.log("El error es " + e));

const ejemploSchema = mongoose.Schema(
  {
    nombre: String,
    edad: Number,
    pais: String,
  },
  { versionKey: false }
);

const ejemploModel = mongoose.model("ejemplo", ejemploSchema);

// CREATE
const crear = async () => {
  const ejemplo = new ejemploModel({
    nombre: "Atahualpa",
    edad: 40,
    pais: "Argentina",
  });
  const resultado = await ejemplo.save();
  console.log(resultado);
};
// crear()

// READ
const mostrar = async () => {
  const ejemplos = await ejemploModel.find();
  console.log(ejemplos);
};
//mostrar();

// UPDATE
const actualizar = async (id) => {
  const ejemplo = await ejemploModel.updateOne(
    { _id: id },
    {
      $set: {
        nombre: "Jazmín",
        pais: "México",
      },
    }
  );
};
//actualizar('6132533a2733b6740dd166d4')

// DELETE
const eliminar = async (id) => {
  const ejemplo = await ejemploModel.deleteOne({ _id: id });
  console.log(ejemplo);
};
//eliminar('6132533a2733b6740dd166d4')
