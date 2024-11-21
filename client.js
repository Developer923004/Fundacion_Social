
/*---------------------------------------------------------------------------------------------------------------*/
/*INTERACCION DE AUTENTICACION DEL LOGIN */
/*--------------------------------------------------------------------------------------------------------------- */
async function autenticar() {
    // ---------------------------------------Obtenemos los valores de los campos
    var usuario = document.getElementById('usuario').value;
    var clave = document.getElementById('clave').value;

    //-----------------------------------------capturador de errores
    try {
        // Realizamos una solicitud POST al servidor de autenticación
        let response = await fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, clave })
        });

        //---------------------------------------validacion para la autenticacion login
        if (response.status === 200) {
            //----------Si la autenticación es exitosa, redirige a personas.html
            window.location.href = 'personasesion.html';
        } else {
            //--------------- Si la autenticación falla, muestra mensaje de error
            alert('Usuario o clave incorrectos');
        }
    } catch (error) {
        console.error('Error en la autenticación:', error);
        alert('Error en la conexión con el servidor');
    }
}
