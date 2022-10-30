const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    id_producto:{type: String, required: true, max:15},
    nombre:{type: String, required: true, max:60},
    precio:{type: Number, required: true, max:9999999},
    descripcion:{type: String, required: true, max:300},
    talla:{type: String, required: true, max:99},
    cantidad:{type: Number, required: true, max:999}, 
    url_imagen:{type: String, required: false, max:150}
});

module.exports = mongoose.model("productos", ProductosSchema);