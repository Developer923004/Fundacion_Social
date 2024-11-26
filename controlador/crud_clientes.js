import { conectar } from "../modelo/db_conectar.js";  // Importar la conexión a la base de datos

let crud_cliente = {};  // Definir el objeto para CRUD

// Consultar registros de la tabla personas_donantes
crud_cliente.leer = (req, res) => {
    conectar.query('SELECT * FROM fundacion_social.personas_donantes;', (error, results) => {
        if (error) {
            console.log(error);  // Log para detectar posibles errores en la consulta
            res.status(500).send('Error al consultar los datos');
        } else {
            res.render('clientes/index', { resultado: results });  // Renderizar la vista con los resultados
        }
    });
};

// Insertar registros en la tabla personas_donantes y usuarios
crud_cliente.cud = (req, res) => {
    const { btn_crear, nombre, apellido, correo, telefono, direccion, usuario, contrasena } = req.body;  // Extraer datos del formulario

    if (btn_crear) {  // Verificar si el botón fue presionado
        // Insertar en la tabla personas_donantes
        conectar.query(
            'INSERT INTO fundacion_social.personas_donantes SET ?',
            { nombre, apellido, correo, telefono, direccion },
            (error, results) => {
                if (error) {
                    console.log('Error al insertar en personas_donantes: ', error);  // Log de error
                    res.status(500).send('Error al insertar en la base de datos');
                } else {
                    console.log('Donante insertado correctamente en personas_donantes');
                    
                    // Insertar en la tabla usuarios después de insertar el donante
                    conectar.query(
                        'INSERT INTO fundacion_social.usuarios SET ?',
                        {
                            usuario,        // Usar el valor del formulario para el usuario
                            clave: contrasena,  // Usar la contraseña proporcionada, aunque debes cifrarla (si es necesario)
                            persona_donante_id: results.insertId  // Vincular el ID del donante
                        },
                        (error, resultsUsuario) => {
                            if (error) {
                                console.log('Error al insertar en usuarios: ', error);  // Log de error
                                res.status(500).send('Error al insertar el usuario');
                            } else {
                                console.log('Usuario insertado correctamente');
                                res.redirect('/');  // Redirigir a la página principal
                            }
                        }
                    );
                }
            }
        );
    } else {
        // Si btn_crear no está definido
        res.status(400).send('No se ha presionado el botón de crear');
    }
};

export { crud_cliente };