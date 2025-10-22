// SPA REAL - HELLO WORLD TRAVEL
class TravelSPA {
    constructor() {
        this.sections = {
            'inicio': this.getInicioContent(),
            'destinos': this.getDestinosContent(), 
            'servicios': this.getServiciosContent(),
            'contacto': this.getContactoContent()
        };
        this.currentSection = 'inicio';
        this.init();
    }

    init() {
        // Cargar sección basada en URL
        this.handleUrlChange();
        
        // Configurar navegación
        this.setupNavigation();
        
        // Escuchar cambios de URL
        window.addEventListener('hashchange', () => this.handleUrlChange());
        window.addEventListener('popstate', () => this.handleUrlChange());
    }

    setupNavigation() {
        // Prevenir comportamiento por defecto de TODOS los links internos
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && link.getAttribute('href') !== '#') {
                e.preventDefault();
                const section = link.getAttribute('href').substring(1);
                this.navigateTo(section);
            }
        });
    }

    navigateTo(section) {
        if (this.sections[section]) {
            // Actualizar URL
            window.location.hash = section;
            // Cargar sección
            this.loadSection(section);
        }
    }

    handleUrlChange() {
        const section = window.location.hash.substring(1) || 'inicio';
        if (this.sections[section] && section !== this.currentSection) {
            this.loadSection(section);
        }
    }

    loadSection(section) {
        // Actualizar estado
        this.currentSection = section;
        
        // Actualizar navegación
        this.updateActiveNav(section);
        
        // Cambiar contenido
        document.getElementById('content').innerHTML = this.sections[section];
        
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateActiveNav(section) {
        // Remover active de todos
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Agregar active al actual
        const activeLink = document.querySelector(`a[href="#${section}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    getInicioContent() {
        return `
            <section class="hero-section">
                <div class="container text-center text-white">
                    <h1 class="display-4 fw-bold mb-3">Hello World Travel</h1>
                    <div class="logo-container mb-4">
                        <img src="img/logo.png" alt="Hello World Travel Logo" class="img-fluid" style="max-height: 150px;">
                    </div>
                    <p class="lead mb-4">Descubre los destinos más increíbles del mundo con nosotros</p>
                    <a href="#destinos" class="btn btn-primary btn-lg">Explorar Destinos</a>
                </div>
            </section>
        `;
    }

    getDestinosContent() {
        return `
            <section class="py-5" style="padding-top: 100px;">
                <div class="container">
                    <h2 class="text-center mb-5">Descubre el Mundo por Regiones</h2>
                    
                    <!-- EUROPA -->
                    <div class="region mb-5">
                        <h3 class="mb-4 border-bottom pb-2">🌍 Europa</h3>
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/europa/paris1.jpg" class="card-img-top" alt="París" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">París, Francia</h5>
                                        <p class="card-text">La ciudad del amor y la luz.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/europa/barcelona1.jpg" class="card-img-top" alt="Barcelona" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Barcelona, España</h5>
                                        <p class="card-text">Arte, arquitectura y playas.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/europa/roma1.jpg" class="card-img-top" alt="Roma" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Roma, Italia</h5>
                                        <p class="card-text">Historia y cultura milenaria.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SUDAMÉRICA -->
                    <div class="region mb-5">
                        <h3 class="mb-4 border-bottom pb-2">🗻 Sudamérica</h3>
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/argentina/buenosaires1.jpg" class="card-img-top" alt="Buenos Aires" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Buenos Aires, Argentina</h5>
                                        <p class="card-text">Tango, cultura y pasión.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/sudamerica/machupicchu1.jpg" class="card-img-top" alt="Machu Picchu" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Machu Picchu, Perú</h5>
                                        <p class="card-text">Maravilla del mundo antiguo.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/sudamerica/riodejaneiro1.jpg" class="card-img-top" alt="Río de Janeiro" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Río de Janeiro, Brasil</h5>
                                        <p class="card-text">Playas, carnaval y alegría.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getServiciosContent() {
        return `
            <section class="py-5 bg-light" style="padding-top: 100px;">
                <div class="container">
                    <h2 class="text-center mb-5">Nuestros Servicios</h2>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="text-center p-4">
                                <div class="mb-3" style="font-size: 3rem;">✈️</div>
                                <h4>Vuelos Internacionales</h4>
                                <p>Las mejores tarifas en vuelos a todo el mundo.</p>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="text-center p-4">
                                <div class="mb-3" style="font-size: 3rem;">🏨</div>
                                <h4>Hoteles y Resorts</h4>
                                <p>Alojamientos seleccionados para tu comodidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getContactoContent() {
        return `
            <section class="py-5" style="padding-top: 100px;">
                <div class="container">
                    <h2 class="text-center mb-5">Contactanos</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Nombre</label>
                                    <input type="text" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mensaje</label>
                                    <textarea class="form-control" rows="5" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="p-4">
                                <h4>Información de Contacto</h4>
                                <p>📍 Dirección: Av. Siempre Viva 123</p>
                                <p>📞 Teléfono: +54 11 1234-5678</p>
                                <p>✉️ Email: info@helloworldtravel.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new TravelSPA();
});