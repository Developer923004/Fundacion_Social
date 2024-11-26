
import mysql from 'mysql2'

let conectar = mysql.createConnection({
    host: 'localhost',             // Servidor local
    user: 'root',                  // Usuario servidor 
    password: 'Fundacion2024*',    // Contraseña servidor
    database: 'fundacion_social'   // Base de datos servidor
})


conectar.connect(function (err){
    if(err){
        console.error('Error en la conexion' + err.stack);
    }
    console.log('Conexion exitosa')
});

export {conectar}

