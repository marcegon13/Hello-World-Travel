// SPA REAL - HELLO WORLD TRAVEL CON BASE DE DATOS
class TravelSPA {
  constructor() {
    this.sections = {
      inicio: this.getInicioContent(),
      destinos: this.getDestinosContent(),
      servicios: this.getServiciosContent(),
      contacto: this.getContactoContent(),
    };
    this.currentSection = "inicio";
    this.init();
  }

  init() {
    // Cargar sección basada en URL
    this.handleUrlChange();

    // Configurar navegación
    this.setupNavigation();

    // Configurar formularios dinámicos
    this.setupDynamicForms();

    // Escuchar cambios de URL
    window.addEventListener("hashchange", () => this.handleUrlChange());
    window.addEventListener("popstate", () => this.handleUrlChange());
  }

  setupNavigation() {
    // Prevenir comportamiento por defecto de TODOS los links internos
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link && link.getAttribute("href") !== "#") {
        e.preventDefault();
        const section = link.getAttribute("href").substring(1);
        this.navigateTo(section);
      }
    });
  }

  setupDynamicForms() {
    // Escuchar submits en formularios que se cargan dinámicamente
    document.addEventListener("submit", (e) => {
      if (e.target.id === "contactForm") {
        e.preventDefault();
        this.handleContactForm(e.target);
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
    const section = window.location.hash.substring(1) || "inicio";
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
    document.getElementById("content").innerHTML = this.sections[section];

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateActiveNav(section) {
    // Remover active de todos
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Agregar active al actual
    const activeLink = document.querySelector(`a[href="#${section}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // MANEJO DE FORMULARIO DE CONTACTO SIMULADO (para GitHub Pages)
  handleContactForm(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Mostrar loader
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Obtener datos del formulario
    const formData = new FormData(form);

    // Validación básica
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const mensaje = formData.get("mensaje");

    if (!nombre || !email || !telefono || !mensaje) {
      alert("Por favor, completá todos los campos obligatorios.");
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresá un email válido.");
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }

    // SIMULAR envío exitoso (para GitHub Pages)
    setTimeout(() => {
      alert(
        "✅ ¡Consulta enviada con éxito! En un entorno real, esto se guardaría en la base de datos y te contactaríamos a la brevedad."
      );
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }

  getInicioContent() {
    return `
            <section class="hero-section">
                <div class="container text-center text-white">
                    <h1 class="display-4 fw-bold mb-3">Hello World Travel</h1>
                    <div class="logo-container mb-4">
                        <img src="img/logo1.png" alt="Hello World Travel Logo" class="img-fluid" style="max-height: 150px;">
                    </div>
                    <p class="lead mb-4">Descubre los destinos más increíbles del mundo con nosotros</p>
                    <a href="#destinos" class="btn btn-primary btn-lg">Explorar Destinos</a>
                </div>
            </section>

            <!-- SECCIÓN DESTINOS POPULARES -->
            <section class="popular-destinations py-5">
                <div class="container">
                    <h2 class="text-center mb-5 section-title">Destinos Más Buscados</h2>
                    <div class="row g-4">
                        <!-- BUENOS AIRES -->
                        <div class="col-md-4">
                            <div class="destination-card">
                                <img src="img/Buenos Aires/Buenos_Aires.jpeg" alt="Buenos Aires" class="img-fluid">
                                <div class="destination-info">
                                    <h4>Buenos Aires</h4>
                                    <p>Tango, cultura y pasión argentina</p>
                                    <span class="badge bg-warning mb-2">Destino Nacional</span>
                                    <a href="#destinos" class="btn btn-outline-light">Ver Más</a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- MIAMI -->
                        <div class="col-md-4">
                            <div class="destination-card">
                                <img src="img/eeuu/miami.jpg" alt="Miami" class="img-fluid">
                                <div class="destination-info">
                                    <h4>Miami, USA</h4>
                                    <p>Playas, compras y diversión</p>
                                    <span class="badge bg-info mb-2">Internacional</span>
                                    <a href="#destinos" class="btn btn-outline-light">Ver Más</a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- RÍO DE JANEIRO -->
                        <div class="col-md-4">
                            <div class="destination-card">
                                <img src="img/sudamerica/rio.jpg" alt="Río de Janeiro" class="img-fluid">
                                <div class="destination-info">
                                    <h4>Río de Janeiro</h4>
                                    <p>Carnaval, playas y alegría brasileña</p>
                                    <span class="badge bg-success mb-2">Regional</span>
                                    <a href="#destinos" class="btn btn-outline-light">Ver Más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- BOTÓN PARA VER MÁS DESTINOS -->
                    <div class="text-center mt-5">
                        <a href="#destinos" class="btn btn-primary btn-lg">
                            <i class="fas fa-globe-americas me-2"></i>
                            Descubrir Todos los Destinos
                        </a>
                    </div>
                </div>
            </section>

            <!-- SECCIÓN HOTELES DESTACADOS -->
            <section class="featured-hotels py-5 bg-light">
                <div class="container">
                    <h2 class="text-center mb-5 section-title">Hoteles Destacados</h2>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="hotel-card">
                                <img src="img/galeria-hoteles/Bellevue Syrene, Italia.jpg" class="card-img-top" alt="Bellevue Syrene">
                                <div class="card-body">
                                    <h5 class="card-title">Bellevue Syrene, Italia</h5>
                                    <p class="card-text">Lujo y vistas espectaculares en la costa amalfitana</p>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="hotel-card">
                                <img src="img/galeria-hoteles/Hotel Adlon Kempinski Berlin.jpg" class="card-img-top" alt="Hotel Adlon Berlin">
                                <div class="card-body">
                                    <h5 class="card-title">Hotel Adlon Kempinski</h5>
                                    <p class="card-text">Elegancia histórica en el corazón de Berlín</p>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="hotel-card">
                                <img src="img/galeria-hoteles/Le Palais Art Hotel Prague, República Checa.jpg" class="card-img-top" alt="Le Palais Prague">
                                <div class="card-body">
                                    <h5 class="card-title">Le Palais Art Hotel</h5>
                                    <p class="card-text">Arte y sofisticación en Praga</p>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <img src="img/europa/Paris.jpg" class="card-img-top" alt="París" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">París, Francia</h5>
                                        <p class="card-text">La ciudad del amor y la Torre Eiffel.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/europa/Barcelona.jpg" class="card-img-top" alt="Barcelona" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Barcelona, España</h5>
                                        <p class="card-text">Arquitectura Gaudí y playas mediterráneas.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/europa/berlin 1.jpg" class="card-img-top" alt="Berlín" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Berlín, Alemania</h5>
                                        <p class="card-text">Historia, cultura y vida nocturna.</p>
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
                                    <img src="img/argentina/cataratas.jpg" class="card-img-top" alt="Cataratas" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Cataratas del Iguazú</h5>
                                        <p class="card-text">Una de las 7 maravillas naturales del mundo.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/sudamerica/rio.jpg" class="card-img-top" alt="Río de Janeiro" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Río de Janeiro, Brasil</h5>
                                        <p class="card-text">Carnaval, playas y el Cristo Redentor.</p>
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
                        </div>
                    </div>

                    <!-- ESTADOS UNIDOS -->
                    <div class="region mb-5">
                        <h3 class="mb-4 border-bottom pb-2">🗽 Estados Unidos</h3>
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/eeuu/New york.jpg" class="card-img-top" alt="Nueva York" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Nueva York, USA</h5>
                                        <p class="card-text">La ciudad que nunca duerme.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/eeuu/Miami.jpg" class="card-img-top" alt="Miami" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Miami, USA</h5>
                                        <p class="card-text">Playas, compras y diversión.</p>
                                        <a href="#contacto" class="btn btn-outline-primary">Consultar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="img/eeuu/Disney-Parque-orlando.jpg" class="card-img-top" alt="Orlando" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">Orlando, USA</h5>
                                        <p class="card-text">Parques temáticos y diversión familiar.</p>
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
                        <div class="col-md-6 mb-4">
                            <div class="text-center p-4">
                                <div class="mb-3" style="font-size: 3rem;">🚗</div>
                                <h4>Tours Guiados</h4>
                                <p>Experiencias únicas con guías locales.</p>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="text-center p-4">
                                <div class="mb-3" style="font-size: 3rem;">📝</div>
                                <h4>Asesoramiento Personalizado</h4>
                                <p>Planificamos tu viaje ideal según tus preferencias.</p>
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
                            <form id="contactForm">
                                <div class="mb-3">
                                    <label for="nombre" class="form-label">Nombre y Apellido *</label>
                                    <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Tu nombre completo" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="tu@email.com" required>
                                </div>
                                <div class="mb-3">
                                    <label for="telefono" class="form-label">Teléfono *</label>
                                    <input type="tel" class="form-control" id="telefono" name="telefono" placeholder="+54 11 1234-5678" required>
                                </div>
                                <div class="mb-3">
                                    <label for="asunto" class="form-label">Asunto</label>
                                    <select class="form-select" id="asunto" name="asunto">
                                        <option value="consulta">Consulta General</option>
                                        <option value="presupuesto">Presupuesto de Viaje</option>
                                        <option value="reserva">Reserva</option>
                                        <option value="reclamo">Reclamo</option>
                                        <option value="otros">Otros</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="mensaje" class="form-label">Mensaje *</label>
                                    <textarea class="form-control" id="mensaje" name="mensaje" rows="5" placeholder="Contanos en qué podemos ayudarte..." required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg">
                                    <i class="fas fa-paper-plane me-2"></i>Enviar Mensaje
                                </button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="p-4">
                                <h4>Información de Contacto</h4>
                                <p><i class="fas fa-map-marker-alt me-2"></i> Avenida Maipú 1700, Vicente López</p>
                                <p><i class="fas fa-phone me-2"></i> +54 11 1234-5678</p>
                                <p><i class="fas fa-envelope me-2"></i> info@helloworldtravel.com</p>
                                <p><i class="fas fa-clock me-2"></i> Lun-Vie: 9:00-18:00</p>
                                
                                <div class="mt-4">
                                    <h5>Seguinos en:</h5>
                                    <div class="social-icons mt-3">
                                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }
}

// Inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  new TravelSPA();
});
