function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Simular una solicitud AJAX local utilizando un archivo JSON
    fetch('solicitud.json')
        .then(response => response.json())
        .then(data => {
            // Verificar las credenciales (simulado)
            const usuarioEncontrado = data.usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

            if (usuarioEncontrado) {
                mostrarMensaje('Inicio de sesión exitoso.');
            } else {
                mostrarMensaje('Credenciales incorrectas. Intenta de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            mostrarMensaje('Error al iniciar sesión. Intenta de nuevo.');
        });
}

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerText = mensaje;
}
