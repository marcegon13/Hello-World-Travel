// FILTROS PARA DESTINOS
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinoItems = document.querySelectorAll('.destino-item');
    
    // Filtrado
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar items
            destinoItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Búsqueda simple
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        destinoItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});