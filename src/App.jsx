import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const services = [
    {
      title: "Coaching Holístico",
      description: "Alcanza mayores niveles de bienestar y abundancia. Crea cambios profundos y duraderos en poco tiempo.",
      prices: [{ label: "1 Sesión", price: "$40" }, { label: "Pack 2 Sesiones", price: "$70" }, { label: "Pack 3 Sesiones", price: "$100" }],
      note: true
    },
    {
      title: "Sesiones Privadas",
      description: "Sesiones personalizadas para tu transformación interior con técnicas de visualización y sanación.",
      prices: [{ label: "Sesión", price: "$40" }]
    },
    {
      title: "Sesión de Angelología con el Arcángel Miguel",
      description: "Conexión con tus ángeles guardianes y aprendizaje de señales angelicales.",
      prices: [{ label: "Sesión", price: "$20" }]
    },
    {
      title: "Sanación Cuántica del Clan Ancestral",
      description: "Libera patrones familiares y ancestrales que limitan tu vida.",
      prices: [{ label: "Sesión", price: "$40" }]
    }
  ]

  const testimonials = [
    {
      name: "María Elena",
      text: "Gracias a Lorena he encontrado la paz que tanto buscaba. Su guía ha sido luz en mi camino."
    },
    {
      name: "Carolina",
      text: "Mi vida cambió completamente después de las sesiones. Por fin me siento en armonía conmigo misma."
    },
    {
      name: "Patricia",
      text: "La mejor inversión que he hecho en mí misma. Siento que renací."
    },
    {
      name: "Laura",
      text: "Las sesiones de coaching me ayudaron a superar mis miedos y a tener una visión más clara de mi futuro."
    },
    {
      name: "Ana",
      text: "Gracias a la sanación cuántica pude liberarme de patrones que me limitaban desde hace años."
    }
  ]

  const socialLinks = {
    facebook: "https://www.facebook.com/lorena.lolli.1",
    instagram: "https://www.instagram.com/lorenalollicoach?igshid=YmMyMTA2M2Y",
    youtube: "https://www.youtube.com/channel/UCpIaGUeBiKDUdq7Zvac_4FQ",
    whatsapp: "https://wa.me/584247204367"
  }

  return (
    <div className="app">
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <img src="./11405828.png" alt="Logo" className="logo-img" />
        </motion.div>
        <ul className="nav-links">
          {['home', 'about', 'services', 'testimonials', 'book', 'contact'].map((item) => (
            <li key={item}>
              <motion.button
                onClick={() => scrollTo(item)}
                className={activeSection === item ? 'active' : ''}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre Mí' : item === 'services' ? 'Servicios' : item === 'testimonials' ? 'Testimonios' : item === 'book' ? 'Libro' : 'Contacto'}
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.nav>

      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <motion.span 
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Coaching Espiritual
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Alcanza Tu Mejor Versión
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Transforma tu vida con guía espiritual y coaching holístico. 
            Encuentra la paz, abundancia y bienestar que mereces.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(218, 165, 32, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              Comenzar Mi Viaje
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('services')}
            >
              Ver Servicios
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Sobre Mí</span>
            <h2>Mi Llamado</h2>
          </motion.div>
          <div className="about-content">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="image-frame">
                <div className="image-placeholder">
                  <img src="./lorena.jpg" alt="Lorena Lolli" className="lorena-photo" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Coaching Holístico</h3>
              <p>
                Mi misión es acompañarte en tu viaje de autodescubrimiento y crecimiento espiritual. 
                A través de técnicas de visualización, sanación energética y ciencia moderna, 
                te ayudo a liberar el estrés y las emociones que bloquean tu bienestar.
              </p>
              <p>
                Juntos crearemos un plan personalizado para que logres los cambios internos 
                que necesitas y vivir una vida con más paz y abundancia.
              </p>
              <ul className="about-features">
                <li>Visualización Guiada</li>
                <li>Sanación Energética</li>
                <li>Acompañamiento Personalizado</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Servicios</span>
            <h2>Elige Tu Transformación</h2>
          </motion.div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(147, 112, 219, 0.3)" }}
              >
                <div className="card-glow"></div>
                <h3>{service.title}</h3>
                <div className="prices-container">
                  {service.prices.map((p, i) => (
                    <div key={i} className="price-item">
                      <span className="price-label">{p.label}</span>
                      <span className="price-value">{p.price}</span>
                    </div>
                  ))}
                </div>
                <p>{service.description}</p>
                {service.note && <p className="venezuela-note">Si vives en Venezuela y estás interesada en tomar una sesión o un pack de sesiones, escríbenos un whatsapp para conocer las tarifas especiales.</p>}
                <div className="btn-container">
                  <motion.button
                    className="btn-card"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                  >
                    Reservar
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Testimonios</span>
            <h2>Historias de Transformación</h2>
          </motion.div>
          <div className="testimonials-carousel">
            <button className="testimonial-arrow prev" onClick={prevTestimonial}>
              &#8249;
            </button>
            <div className="testimonial-track">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  className="testimonial-card active"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="quote-icon">"</div>
                  <p>{testimonials[currentTestimonial].text}</p>
                  <span className="author">{testimonials[currentTestimonial].name}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            <button className="testimonial-arrow next" onClick={nextTestimonial}>
              &#8250;
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="book-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Libro</span>
            <h2>Tu Vida Entre Ángeles</h2>
          </motion.div>
          <div className="book-content">
            <motion.div 
              className="book-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="book-img-container">
                <img src="./libro lorena.png" alt="Tu Vida Entre Ángeles" className="book-img" />
              </div>
            </motion.div>
            <motion.div 
              className="book-info"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Adquiere Hoy</h3>
              <p>
                "Tu Vida Entre Ángeles" es un libro que escribí para facilitarte los conocimientos introductorios al mundo de la angelología con la finalidad de que los ángeles sean tus grandes aliados.
              </p>
              <p>
                En este libro encontrarás herramientas para conectar con tus ángeles guardians y recibir su guía en tu vida cotidiana.
              </p>
              <motion.button
                className="btn-book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(socialLinks.whatsapp, '_blank')}
              >
                Obtener
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="contact-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-content">
              <span className="section-tag">Contacto</span>
              <h2>Comienza Tu Viaje</h2>
              <p>
                ¿Lista para transformar tu vida? Escíbeme y juntos comenzaremos 
                este hermoso camino hacia tu mejor versión.
              </p>
              <div className="contact-info">
                <a href={socialLinks.whatsapp} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="./11405828.png" alt="Logo" className="footer-logo-img" />
            </div>
            <div className="social-icons">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
            <div className="footer-links">
              <a href="https://www.lorenalolli.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
              <a href="https://www.lorenalolli.com/terminos-de-uso" target="_blank" rel="noopener noreferrer">Términos de Uso</a>
            </div>
            <p>&copy; 2026 Todos los derechos reservados</p>
            <p className="designer">Página diseñada por Luis Salazar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
