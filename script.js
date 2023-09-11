function subirArchivo() {
    const formulario = document.getElementById('formulario');
    const archivoInput = document.getElementById('archivo');
    const mensajeDiv = document.getElementById('mensaje');

    const archivo = archivoInput.files[0];
    if (!archivo) {
        mensajeDiv.textContent = 'Por favor, selecciona un archivo.';
        return;
    }

    const formData = new FormData();
    formData.append('archivo', archivo);
    mensajeDiv.textContent = 'El archivo se ha subido exitosamente.';
}

