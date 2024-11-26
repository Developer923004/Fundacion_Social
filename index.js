/*import express from "express"

import {crud_cliente} from "./controlador/crud_clientes.js"

const app_e = express();
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());

app_e.listen('5000', function(){
    console.log("Aplicacion iniciada : http://localhost:5000");

});

app_e.use(express.static('./vistas'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))

app_e.set('views','./vistas')
app_e.set('view engine','ejs')
app_e.get('/', crud_cliente.leer);
app_e.post('/crud_c', crud_cliente.cud);*/



///////////////////////////////////////////////////////////////

import express from "express";
import { crud_cliente } from "./controlador/crud_clientes.js";

const app_e = express();
app_e.use(express.urlencoded({ extended: false }));
app_e.use(express.json());

app_e.listen(5000, function () {
    console.log("Aplicación iniciada : http://localhost:5000");
});




app_e.use(express.static('./vista'));
app_e.use(express.static('./controlador'));
app_e.use(express.static('./modelo'));

app_e.set('views', './vista');
app_e.set('view engine', 'ejs');

// Ruta principal
app_e.get('/', crud_cliente.leer);

// Ruta para crear un nuevo donante
app_e.post('/crud_c', crud_cliente.cud);
