//----------------------------------------------------------------------------------------------
//-------------------------------- Importar las dependencias necesarias-------------------------
//----------------------------------------------------------------------------------------------
const express = require('express');         // Framework para manejar solicitudes HTTP en Node.js
const mysql = require('mysql2');            // Librería para interactuar con bases de datos MySQL
const bodyParser = require('body-parser');  // Middleware para parsear los datos del cuerpo de la solicitud
const cors = require('cors');               // Middleware para permitir solicitudes entre dominios
const bcrypt = require('bcrypt');           // Librería para encriptar contraseñas
const path = require('path');               // Módulo de Node.js para trabajar con rutas de archivos

const app = express();     // Crear una instancia de la aplicación express
const port = 3000;         // Puerto donde el servidor escuchará las solicitudes



//----------------------------------------------------------------------------------------------
//-------------------------------- Middleware para manejar solicitudes CORS---------------------
//----------------------------------------------------------------------------------------------
app.use(cors());  // Permite que el servidor reciba solicitudes de otros dominios


//----------------------------------------------------------------------------------------------
//------- Middleware para parsear cuerpos de solicitudes x-www-form-urlencoded------------------
//----------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));  // Para manejar datos de formularios


//----------------------------------------------------------------------------------------------
//------- Middleware para parsear cuerpos de solicitudes en formato JSON------------------------
//----------------------------------------------------------------------------------------------
app.use(bodyParser.json());  // Para manejar datos JSON en las solicitudes


//----------------------------------------------------------------------------------------------
//------- Mostrar archivos estáticos desde la carpeta 'public'----------------------------------
//----------------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));  // Asegúrate de que la carpeta 'public' está en la raíz del proyecto



//----------------------------------------------------------------------------------------------
//------- Conexión a MySQL----------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
const connection = mysql.createConnection({
  host: 'localhost',             // Servidor local
  user: 'root',                  // Usuario servidor 
  password: 'Fundacion2024*',    // Contraseña servidor
  database: 'fundacion_social'   // Base de datos servidor
});

/*---------------------------Verificar conexión a la base de datos---------------------*/
connection.connect(function(error) {
  if (error) {
      console.error('Error de conexión: ' + error.stack);
      return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

//********************** */
export {conectar}   
//************************ */


//----------------------------------------------------------------------------------------------
//------- Ruta para mostrar el formulario HTML login--------------------------------------------
//----------------------------------------------------------------------------------------------
/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'personas.html'));  // Se asegura de servir 'index.html' desde la carpeta 'public'
});*/



//----------------------------------------------------------------------------------------------
//------- Ruta para autenticar usuarios---------------------------------------------------------
//----------------------------------------------------------------------------------------------

/*activar si no funciono en el archivo procedimientos*/
//---------------------------------------------------------------------------------
/* 
app.post('/auth', (req, res) => {         // traemos nombre del formulario
  const { usuario, clave } = req.body;    // capturamos valores del formulario*/


   /*-------Evitar inyección SQL usando parámetros de consulta---------*/ 
  /*connection.query(
    'SELECT * FROM usuarios WHERE usuario = ? AND clave = ?', // query para consultar usuario y clave en mysql
    [usuario, clave],*/

    /*-------Evitar inyección SQL usando parámetros de consulta-------*/
    /*function (error, results) {                              
      if (error) {
        console.error('Error en la consulta: ' + error.stack);
        return res.status(500).send('Error en la base de datos');
      }*/
      /*-------Validacion para encontrar usuario y contraseña correcta-------*/
      /*if (results.length > 0) {
        res.status(200).send('Autenticación exitosa');
      } else {
        res.status(401).send('Usuario o clave incorrectos');
      }
    }
  );
});*/


//----------------------------------------------------------------------------------------------
//------- Iniciar el servidor-------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
/*app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});*/

/*activar si no funciono en el archivo procedimientos*/
//---------------------------------------------------------------------------------































////////const express = require('express');
////////const mysql = require('mysql2');
////////const bodyParser = require('body-parser');
////////const cors = require('cors');
////////const bcrypt = require('bcrypt');
////////const path = require('path');

////////const app = express();
////////const port = 3000;

// Middleware
////////app.use(cors());  // Permite solicitudes CORS
////////app.use(bodyParser.urlencoded({ extended: true })); // Para solicitudes x-www-form-urlencoded
////////app.use(bodyParser.json());  // Para manejar los datos JSON en el cuerpo de la solicitud

// Servir archivos estáticos desde la carpeta 'public'
////////app.use(express.static(path.join(__dirname, 'public')));  // Asegúrate de que la carpeta 'public' está en la raíz del proyecto

// Conexión a MySQL
////////const connection = mysql.createConnection({
  ////////host: 'localhost',
  ////////user: 'root',
  ////////password: 'Fundacion2024*',  
  ////////database: 'fundacion_social'
////////});

// Verificar conexión a la base de datos
////////connection.connect(function(error) {
  ////////if (error) {
      ////////console.error('Error de conexión: ' + error.stack);
      ////////return;
  ////////}
  ////////console.log('Conectado a la base de datos como id ' + connection.threadId);
////////});

// Ruta para servir el formulario HTML login
////////app.get('/', (req, res) => {
  ////////res.sendFile(path.join(__dirname, 'public', 'personas.html'));  // Se asegura de servir 'index.html' desde la carpeta 'public'
////////});


// Ruta para autenticar usuarios
////////app.post('/auth', (req, res) => {
  ////////const { usuario, clave } = req.body;

  // Evitar inyección SQL usando parámetros de consulta
  ////////connection.query(
    ////////'SELECT * FROM usuarios WHERE usuario = ? AND clave = ?',
    ////////[usuario, clave],
    ////////function (error, results) {
      ////////if (error) {
        ////////console.error('Error en la consulta: ' + error.stack);
        ////////return res.status(500).send('Error en la base de datos');
      ////////}

      // Si encontramos el usuario
      ////////if (results.length > 0) {
        ////////res.status(200).send('Autenticación exitosa');
      ////////} else {
        ////////res.status(401).send('Usuario o clave incorrectos');
      ////////}
    ////////}
  ////////);
////////});



////////app.listen(3000, () => {
  ////////console.log('Servidor corriendo en http://localhost:3000');
////////});





/*const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');*/

//---------------------------------
/*const bcrypt = require('bcrypt');*/
//---------------------------------

/*const app = express();
const port = 3000;*/





//---------------------------------
//app.use(bodyParser.urlencoded({ extended: true }));
//---------------------------------



// Middleware
/*app.use(cors());  */// Permite solicitudes CORS
/*app.use(bodyParser.json()); */ // Para manejar los datos JSON en el cuerpo de la solicitud



// Servir archivos estáticos desde la carpeta 'public'
/*app.use(express.static(path.join(__dirname, 'public')));*/



// Conexión a MySQL
/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fundacion2024*',  // Tu contraseña de MySQL
  database: 'fundacion_social'
});*/




// Verificar conexión
/*connection.connect(function(error) {
  if (error) {
    console.error('Error de conexión: ' + error.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});*/



// Ruta para servir el archivo HTML cuando se hace una solicitud GET a "/"
/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/







// Ruta para insertar los datos
// Ruta para insertar los datos
/*app.post('/insertar', (req, res) => {
    const { nombre, apellido, correo, telefono, direccion, contrasena, usuario } = req.body;

    // Encriptar la contraseña
    bcrypt.hash(contrasena, 10, (err, hashedPassword) => {
        if (err) {
            console.error("Error al encriptar la contraseña:", err);
            return res.status(500).send("Hubo un error al procesar la contraseña.");
        }

        // Inserción en la tabla personas_donantes
        const query = 'INSERT INTO personas_donantes (nombre, apellido, correo, telefono, direccion) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [nombre, apellido, correo, telefono, direccion], (error, results) => {
            if (error) {
                console.error("Error al insertar en personas_donantes:", error);
                return res.status(500).send("Error al guardar los datos en personas_donantes.");
            }

            // Inserción en la tabla usuarios con la contraseña encriptada
            const query2 = 'INSERT INTO usuarios (usuario, clave) VALUES (?, ?)';
            connection.query(query2, [usuario, hashedPassword], (error2, results2) => {
                if (error2) {
                    console.error("Error al insertar en usuarios:", error2);
                    return res.status(500).send("Error al guardar los datos en usuarios.");
                }

                res.send("Datos registrados con éxito.");
            });
        });
    });
});

*/  


// Iniciar el servidor
//app.listen(port, () => {
  //  console.log(`Servidor corriendo en http://localhost:${port}`);
//});





















