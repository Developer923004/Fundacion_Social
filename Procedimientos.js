

//----------------------------------------------------------------------------------------------
//------- Ruta para autenticar usuarios---------------------------------------------------------
//----------------------------------------------------------------------------------------------

/*activar si no funciono en el archivo procedimientos*/
//---------------------------------------------------------------------------------

app.post('/auth', (req, res) => {         // traemos nombre del formulario
  const { usuario, clave } = req.body;    // capturamos valores del formulario*/


   /*-------Evitar inyección SQL usando parámetros de consulta---------*/ 
  connection.query(
    'SELECT * FROM usuarios WHERE usuario = ? AND clave = ?', // query para consultar usuario y clave en mysql
    [usuario, clave],

    /*-------Evitar inyección SQL usando parámetros de consulta-------*/
    function (error, results) {                              
      if (error) {
        console.error('Error en la consulta: ' + error.stack);
        return res.status(500).send('Error en la base de datos');
      }
      /*-------Validacion para encontrar usuario y contraseña correcta-------*/
      if (results.length > 0) {
        res.status(200).send('Autenticación exitosa');
      } else {
        res.status(401).send('Usuario o clave incorrectos');
      }
    }
  );
});


//----------------------------------------------------------------------------------------------
//------- Iniciar el servidor-------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


















/*let conexion =mysql.createConnection({
    host: localhost,
    database:'funsocial',
    user: 'root',
    password:''

});*/

/*conexion.connect(function(error) {
    if(error){
        throw error;
    }
    else{
        console.log('Conexión Exitosa');
    }  
});*/
/*
//Consultar
conexion.query('SELECT * FROM voluntarios where id=3;', function(error,results,fields){
    if(error)
      throw error;
    results.forEach(result => {
        console.log(result);
        
    });
});
*/
/*
//Insertar 
conexion.query('INSERT INTO voluntarios (id, nombre, apellido, genero, ciudad, nivel_academico, profesion, contrasena) VALUES (6, "pedro", "perez", "masculino", "bogota", "profesional", "docente", 1234567891);', function(error,results,fields){
    if(error)
      throw error;
    results.forEach(result => {
        console.log(result);
        
    });
});
*/
/*
//Actualizar
conexion.query('UPDATE voluntarios SET nombre="deryi" where id=5', function(error,results) {
    if(error)
        throw error;
    console.log("registro actualizado" ,results);
}); 
conexion.end();
*/

//Eliminar
/*conexion.query('DELETE FROM voluntarios where apellido ="sastoque" and id=3;', function(error,results,fields){
    if(error)
      throw error;
    results.forEach(result => {
        console.log(result);
        
    });
});*/