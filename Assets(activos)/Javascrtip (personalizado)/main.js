function validarFormulario(event) {
    // Prevenir que el formulario se envíe de forma tradicional (recargar la página)
    event.preventDefault();
  
    // Limpiar los mensajes de error previos
    document.getElementById("error-nombre").innerText = "";
    document.getElementById("error-correo").innerText = "";
    document.getElementById("error-mensaje").innerText = "";
    document.getElementById("success-message").style.display = "none"; // Ocultar mensaje de éxito en caso de validación fallida
  
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Validación de Nombre: solo letras y espacios
    var nombreRegex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
    if (nombre.trim() === "") {
      document.getElementById("error-nombre").innerText = "Por favor, ingrese su nombre.";
      document.getElementById("error-nombre").style.display = "inline";  // Mostrar el mensaje de error
      return false;
    } else if (!nombreRegex.test(nombre)) {
      document.getElementById("error-nombre").innerText = "El nombre solo puede contener letras y espacios.";
      document.getElementById("error-nombre").style.display = "inline";  // Mostrar el mensaje de error
      return false;
    }
  
    // Validación de Correo electrónico
    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correoRegex.test(correo)) {
      document.getElementById("error-correo").innerText = "Por favor, ingrese un correo electrónico válido.";
      document.getElementById("error-correo").style.display = "inline";  // Mostrar el mensaje de error
      return false;
    }
  
    // Validación de Mensaje: debe tener más de 10 caracteres
    if (mensaje.trim() === "") {
      document.getElementById("error-mensaje").innerText = "Por favor, ingrese su mensaje.";
      document.getElementById("error-mensaje").style.display = "inline";  // Mostrar el mensaje de error
      return false;
    } else if (mensaje.trim().length < 10) {
      document.getElementById("error-mensaje").innerText = "El mensaje debe contener al menos 10 caracteres.";
      document.getElementById("error-mensaje").style.display = "inline";  // Mostrar el mensaje de error
      return false;
    }
  
    // Si las validaciones son correctas, enviamos el formulario por AJAX
    enviarFormularioConAjax(nombre, correo, mensaje);
  
    return false;  // Prevent default form submission
  }
  
  function enviarFormularioConAjax(nombre, correo, mensaje) {
    // Crear un objeto FormData para enviar los datos del formulario
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('mensaje', mensaje);
  
    // Usamos Fetch API para enviar el formulario de manera asíncrona
    fetch('https://formsubmit.co/ajax/jhonkess@hotmail.com', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json()) // Procesar la respuesta JSON
    .then(data => {
      if (data.success) {
        // Si el envío es exitoso, mostrar el mensaje de éxito
        document.getElementById("success-message").style.display = "block";

      // Limpiar los campos del formulario
      document.getElementById("contact-form").reset();
      } else {
        // Si ocurre un error en el servidor, mostrar un mensaje de error
        alert('Hubo un error al enviar el formulario.');
      }
    })
    .catch(error => {
      // En caso de que haya un error con la petición, mostramos un mensaje de error
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario.');
    });
  }
  


  ///////////////////////////////////////VALIDACION  FORMULARIO DONACIONES

 