// Elementos del DOM
const form = document.getElementById('courseForm');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

// Array para almacenar registros en memoria
let registrations = [];

// Manejar el envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Recopilar datos del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        discord: document.getElementById('discord').value,
        experience: document.getElementById('experience').value,
        motivation: document.getElementById('motivation').value,
        timestamp: new Date().toISOString()
    };

    // Guardar en memoria
    registrations.push(formData);
    
    // Log para verificar (opcional)
    console.log('Nuevo registro:', formData);
    console.log('Total de registros:', registrations.length);

    // Mostrar mensaje de éxito
    registrationForm.style.display = 'none';
    successMessage.classList.add('active');

    // Opcional: Redirigir automáticamente después de 3 segundos
    // setTimeout(() => {
    //     window.location.href = 'https://discord.gg/tu-servidor';
    // }, 3000);
});

// Función para obtener todos los registros (útil para debugging)
function getRegistrations() {
    return registrations;
}

// Función para exportar registros como JSON
function downloadRegistrations() {
    const dataStr = JSON.stringify(registrations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'registros-unity-' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
}

// Hacer funciones disponibles globalmente para usar en consola
window.getRegistrations = getRegistrations;
window.downloadRegistrations = downloadRegistrations;