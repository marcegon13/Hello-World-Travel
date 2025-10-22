// VALIDACIÓN Y ENVÍO DE FORMULARIO
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (!nombre || !email || !telefono || !mensaje) {
            alert('Por favor, completá todos los campos obligatorios.');
            return;
        }
        
        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresá un email válido.');
            return;
        }
        
        // Simular envío (aquí iría la conexión con Formspree o similar)
        alert('¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.');
        contactForm.reset();
    });
});