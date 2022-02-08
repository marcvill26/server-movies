const mogoose = require('mogoose');
const Schema = mogoose.Schema;
const usuarioSchema = new Schema({
    correo: { type: string, required:true},
},
{ timestamps:true});