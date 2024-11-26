/*import { conectar } from "../modelo/db_conectar.js";  // Importar la conexión a la base de datos

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
*/
/*
import { conectar } from "../modelo/db_conectar.js"

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

export { crud_cliente };*/




import { conectar } from "../modelo/db_conectar.js";

let crud_cliente = {};

/*crud_cliente.leer = (req, res) => {
    conectar.query('SELECT  PD.nombre, PD.apellido, PD.correo, PD.telefono, PD.direccion, U.usuario, U.clave FROM fundacion_social.personas_donantes  AS PD INNER JOIN fundacion_social.usuarios AS U;', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al consultar los datos');
        } else {
            res.render('clientes/index', { resultado: results });
        }

    });
};*/


crud_cliente.leer = (req, res) => {
    conectar.query('SELECT PD.nombre, PD.apellido, PD.correo, PD.telefono, PD.direccion, U.usuario, U.clave FROM fundacion_social.personas_donantes AS PD INNER JOIN fundacion_social.usuarios AS U;', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al consultar los datos');
        } else {
            res.render('clientes/index', { resultado: results });
        }
    });
};


/*
crud_cliente.cud = (req, res) => {
    const { btn_crear, nombre, apellido, correo, telefono, direccion, usuario, clave } = req.body;

    if (btn_crear) {
        conectar.query('INSERT INTO fundacion_social.personas_donantes SET ?', { nombre, apellido, correo, telefono, direccion }, (error, results) => {
            if (error) {
                console.log('Error al insertar en personas_donantes: ', error);
                res.status(500).send('Error al insertar en la base de datos');
            } else {
                     console.log('Donante insertado correctamente en personas_donantes');

                     conectar.query('INSERT INTO fundacion_social.usuarios SET ?', { usuario, clave }, (error, results) => {
                          if (error) {
                             console.log('Error al insertar en usuarios: ', error);
                             res.status(500).send('Error al insertar el usuario');
                          } else {
                                 console.log('Usuario insertado correctamente');
                                 res.redirect('http://127.0.0.1:5500/public/Personasesion.html');
                                                }
                });
            }
        });
    } else {
        res.status(400).send('No se ha presionado el botón de crear');
    }
};*/


// insertar formulario personas informacion y usuario y contraseña
crud_cliente.cud = (req, res) => {
    // Extraemos las variables del cuerpo de la solicitud (req.body)
    const { btn_crear, nombre, apellido, correo, telefono, direccion, usuario, clave } = req.body;

    // Comprobamos si se ha presionado el botón 'btn_crear' (se espera que este sea el nombre del botón en el formulario)
    if (btn_crear) {
        // Realizamos la consulta a la base de datos para insertar un nuevo registro en la tabla 'personas_donantes'
        // 'SET ?' es una forma de pasar un objeto de datos a la consulta SQL
        conectar.query('INSERT INTO fundacion_social.personas_donantes SET ?', { nombre, apellido, correo, telefono, direccion }, (error, results) => {
            // Si ocurre un error durante la inserción en la base de datos, se captura en 'error'
            if (error) {
                // Imprimimos el error en la consola para depuración
                console.log('Error al insertar en personas_donantes: ', error);
                // Enviamos una respuesta con código de estado 500 (Error interno del servidor)
                // y un mensaje indicando que hubo un error al insertar en la base de datos
                res.status(500).send('Error al insertar en la base de datos');
            } else {
                // Si la inserción fue exitosa, se imprime un mensaje en la consola indicando éxito
                console.log('Donante insertado correctamente en personas_donantes');
                // Se redirige al usuario a una página externa (en este caso una página HTML)
                res.redirect('http://127.0.0.1:5500/public/Personas.html');


                
                conectar.query('INSERT INTO fundacion_social.usuarios SET ?', { usuario, clave }, (error, results) => {
                    if (error) {
                       console.log('Error al insertar en usuarios: ', error);
                       res.status(500).send('Error al insertar el usuario');
                    } else {
                           console.log('Usuario insertado correctamente');
                           /*res.redirect('http://127.0.0.1:5500/public/Personasesion.html');*/
                           res.redirect('http://127.0.0.1:5500/public/Personas.html');

                                          }
          });

            }
        });
    } else {
        // Si no se ha presionado el botón 'btn_crear', respondemos con un error 400 (solicitud incorrecta)
        // indicando que el botón no fue presionado
        res.status(400).send('No se ha presionado el botón de crear');
    }
};



//  consultar login
crud_cliente.cud = (req, res) => {
    // Extraemos las variables del cuerpo de la solicitud (req.body)
    const { btn_crear, usuario, clave } = req.body;

    // Comprobamos si se ha presionado el botón 'btn_crear' (se espera que este sea el nombre del botón en el formulario)
    if (btn_crear) {
        // Realizamos la consulta a la base de datos para validar el login'
        // 'SET ?' es una forma de pasar un objeto de datos a la consulta SQL
        conectar.query('SELECT usuario, clave FROM fundacion_social.usuarios WHERE usuario = ? AND clave = ?;', (error, results) => {
        /*conectar.query('SELECT usuario, clave FROM fundacion_social.usuarios SET ?', { nombre, apellido, correo, telefono, direccion }, (error, results) => {*/
            // Si ocurre un error durante la inserción en la base de datos, se captura en 'error'
            if (error) {
                // Imprimimos el error en la consola para depuración
                console.log('Error al insertar en personas_donantes: ', error);
                // Enviamos una respuesta con código de estado 500 (Error interno del servidor)
                // y un mensaje indicando que hubo un error al insertar en la base de datos
                res.status(500).send('Error al insertar en la base de datos');
            } else {
                // Si la inserción fue exitosa, se imprime un mensaje en la consola indicando éxito
                console.log('Donante insertado correctamente en personas_donantes');
                // Se redirige al usuario a una página externa (en este caso una página HTML)
                res.redirect('http://127.0.0.1:5500/public/Personas.html');


                
            }
        });
    } else {
        // Si no se ha presionado el botón 'btn_crear', respondemos con un error 400 (solicitud incorrecta)
        // indicando que el botón no fue presionado
        res.status(400).send('No se ha presionado el botón de crear');
    }
};





// Autenticar usuario
/*const autenticarUsuario = async (usuario, clave, callback) => {
    const query = 'SELECT * FROM fundacion_social.usuarios WHERE usuario = ? AND clave = ?';
    conectar.query(query, [usuario], async (error, results) => {
      if (error) {
        console.error('Error en la consulta: ', error);
        return callback(error, null);
      }
  
      if (results.length === 0) {
        return callback(null, { message: 'Usuario no encontrado' });
      }
  
      const usuarioDb = results[0];
  
      try {
        const match = await bcrypt.compare(clave, usuarioDb.clave);
        if (match) {
          return callback(null, { message: 'Autenticación exitosa', userId: usuarioDb.id_usuario });
          res.redirect('http://127.0.0.1:5500/public/Personasesion.html');
        } else {
          return callback(null, { message: 'Clave incorrecta' });
        }
      } catch (error) {
        console.error('Error al comparar las contraseñas: ', error);
        return callback(error, null);
      }
    });
  };*/




export { crud_cliente };

