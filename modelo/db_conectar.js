
import mysql from 'mysql2';

let conectar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fundacion2024*',
    database: 'fundacion_social'
});

conectar.connect(function (err) {
    if (err) {
        console.error('Error en la conexión: ' + err.stack);
    }
    console.log('Conexión exitosa');
});

export { conectar };



