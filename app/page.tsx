"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const delay = (value: string) => ({ "--delay": value }) as CSSProperties;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px" },
      );
      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer?.disconnect();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Dr. Javier Olguín, inicio" onClick={closeMenu}>
          <span className="brand-seal" aria-hidden="true"><span>JO</span></span>
          <span className="brand-name">
            <strong>Dr. Javier Olguín</strong>
            <small>Medicina integral · Houston</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#doctor">El doctor</a>
          <a href="#atencion">Atención</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Solicitar consulta
          <ArrowIcon />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <i /><i />
        </button>

        <nav
          className={`mobile-nav${isMenuOpen ? " is-open" : ""}`}
          id="mobile-nav"
          aria-label="Navegación móvil"
        >
          <a href="#doctor" onClick={closeMenu}><span>01</span> El doctor</a>
          <a href="#atencion" onClick={closeMenu}><span>02</span> Áreas de atención</a>
          <a href="#trayectoria" onClick={closeMenu}><span>03</span> Trayectoria</a>
          <a href="#contacto" onClick={closeMenu}><span>04</span> Contacto</a>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Consultorio de medicina integral en Houston" />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-copy reveal">
              <p className="kicker"><span /> Medicina integral en Houston</p>
              <h1 id="hero-title">La medicina empieza por <em>escuchar.</em></h1>
              <p className="hero-lead">
                Una mirada clínica completa, humana y preventiva para comprender tu salud y acompañarte con criterio en cada etapa.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#contacto">
                  Solicitar información
                  <ArrowIcon />
                </a>
                <a className="text-link" href="#doctor">Conocer al doctor <span aria-hidden="true">↘</span></a>
              </div>
            </div>

            <div className="hero-proof reveal" style={delay(".12s")}>
              <strong>40<sup>+</sup></strong>
              <p>Años de experiencia clínica dedicados a la persona completa.</p>
            </div>
          </div>

          <div className="hero-footer">
            <div><span className="pulse" aria-hidden="true" /> Atención individual</div>
            <a href="https://www.google.com/maps/search/?api=1&query=4141+Southwest+Freeway+Houston+TX+77027" target="_blank" rel="noreferrer">
              4141 Southwest Freeway · Houston, TX 77027
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="manifesto" aria-label="Filosofía médica">
          <div className="manifesto-index">01 / Filosofía</div>
          <p className="manifesto-copy reveal">
            La salud no es una cifra aislada. Es la suma de tu historia, tu metabolismo, tus hábitos y la forma en que quieres vivir.
          </p>
          <div className="manifesto-note reveal" style={delay(".1s")}>
            <span />
            <p>Evaluar con profundidad.<br />Acompañar con humanidad.</p>
          </div>
        </section>

        <section className="doctor" id="doctor" aria-labelledby="doctor-title">
          <div className="section-shell doctor-grid">
            <div className="doctor-intro">
              <p className="kicker kicker-dark"><span /> El doctor</p>
              <h2 id="doctor-title" className="reveal">Cuarenta años de experiencia. Una atención profundamente <em>personal.</em></h2>
            </div>

            <div className="doctor-monogram reveal" aria-hidden="true">
              <span>FJ</span>
              <strong>OC</strong>
              <small>Médico Cirujano</small>
            </div>

            <div className="doctor-story reveal" style={delay(".08s")}>
              <p className="lead-copy">
                El Dr. Francisco Javier Olguín Castro es Médico Cirujano por la Universidad Autónoma Metropolitana, Unidad Xochimilco, con servicio social realizado en Palenque, Chiapas.
              </p>
              <p>
                Su práctica clínica se centra en el control de peso, la salud metabólica, la prevención y el acompañamiento integral. Cada consulta parte de una valoración individual para definir objetivos responsables, realistas y adecuados a cada paciente.
              </p>
              <blockquote>“La prevención comienza cuando entendemos a la persona, no solamente sus síntomas.”</blockquote>
            </div>

            <ul className="credentials reveal" aria-label="Credenciales destacadas">
              <li><span>01</span><strong>Médico Cirujano</strong><small>UAM Xochimilco</small></li>
              <li><span>02</span><strong>Enfoque clínico</strong><small>Bariatría y control de peso</small></li>
              <li><span>03</span><strong>Divulgación internacional</strong><small>México, EE. UU., Colombia y Brasil</small></li>
            </ul>
          </div>
        </section>

        <section className="care" id="atencion" aria-labelledby="care-title">
          <div className="section-shell">
            <div className="care-heading">
              <div>
                <p className="kicker kicker-light"><span /> Áreas de atención</p>
                <h2 id="care-title" className="reveal">Una visión completa para cuidar lo que realmente importa.</h2>
              </div>
              <p className="reveal" style={delay(".08s")}>
                La atención se define después de una valoración médica. Cada plan se adapta al estado de salud, antecedentes y objetivos del paciente.
              </p>
            </div>

            <div className="care-list">
              <article className="care-item reveal">
                <span className="care-number">01</span>
                <div className="care-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14M6 7l-3 8h6L6 7Zm12 0-3 8h6l-3-8ZM8 21h8" /></svg>
                </div>
                <h3>Control de peso y bariatría</h3>
                <p>Valoración del peso, hábitos, metabolismo y factores clínicos asociados.</p>
              </article>
              <article className="care-item reveal" style={delay(".04s")}>
                <span className="care-number">02</span>
                <div className="care-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M3 12h4l2-7 4 14 3-7h5" /></svg>
                </div>
                <h3>Salud metabólica</h3>
                <p>Seguimiento de indicadores relacionados con glucosa, presión arterial y colesterol.</p>
              </article>
              <article className="care-item reveal" style={delay(".08s")}>
                <span className="care-number">03</span>
                <div className="care-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></svg>
                </div>
                <h3>Medicina preventiva</h3>
                <p>Evaluación para identificar riesgos y construir un plan de cuidado personal.</p>
              </article>
              <article className="care-item reveal">
                <span className="care-number">04</span>
                <div className="care-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 18V6M8 8c0-3 4-4 4-1 0-3 4-2 4 1 3 0 4 4 1 5 2 2-1 6-5 4-4 2-7-2-5-4-3-1-2-5 1-5Z" /></svg>
                </div>
                <h3>Estrés y bienestar</h3>
                <p>Acompañamiento médico para mejorar descanso, manejo del estrés y calidad de vida.</p>
              </article>
              <article className="care-item reveal" style={delay(".04s")}>
                <span className="care-number">05</span>
                <div className="care-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 2l1.4 5.6L19 9l-5.6 1.4L12 16l-1.4-5.6L5 9l5.6-1.4L12 2ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></svg>
                </div>
                <h3>Vitalidad y envejecimiento saludable</h3>
                <p>Estrategias de bienestar basadas en valoración clínica y objetivos realistas.</p>
              </article>
              <article className="care-item reveal" style={delay(".08s")}>
                <span className="care-number">06</span>
                <div className="care-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M20 9c0 5-8 11-8 11S4 14 4 9a4 4 0 0 1 7-2.6A4 4 0 0 1 20 9Z" /><path d="M5 12h4l1-2 2 4 2-3 1 1h4" /></svg>
                </div>
                <h3>Salud integral</h3>
                <p>Orientación en salud digestiva, sexual y hábitos durante las etapas de la vida.</p>
              </article>
            </div>

            <aside className="care-note reveal">
              <span className="care-note-mark">+</span>
              <div>
                <strong>Acompañamiento complementario responsable</strong>
                <p>Para pacientes con cáncer o enfermedades crónicas, en coordinación con el equipo médico tratante.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="method" aria-labelledby="method-title">
          <div className="section-shell method-grid">
            <div className="method-heading">
              <p className="kicker kicker-dark"><span /> La consulta</p>
              <h2 id="method-title" className="reveal">Un proceso claro, sin soluciones genéricas.</h2>
            </div>
            <ol className="method-steps">
              <li className="reveal">
                <span>01</span>
                <div><strong>Escuchar</strong><p>Tu historia, tus síntomas y tus objetivos forman el punto de partida.</p></div>
              </li>
              <li className="reveal" style={delay(".05s")}>
                <span>02</span>
                <div><strong>Comprender</strong><p>Una valoración individual permite mirar el cuadro completo.</p></div>
              </li>
              <li className="reveal" style={delay(".1s")}>
                <span>03</span>
                <div><strong>Acompañar</strong><p>El plan se ajusta de forma responsable a tu evolución y necesidades.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="trajectory" id="trayectoria" aria-labelledby="trajectory-title">
          <div className="trajectory-card reveal">
            <div className="signal" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <span>Radio · Televisión · Conferencias</span>
            <strong>Salud y<br />Prosperidad</strong>
            <small>Educación para la comunidad hispana</small>
          </div>
          <div className="trajectory-copy">
            <p className="kicker kicker-dark"><span /> Divulgación</p>
            <h2 id="trajectory-title" className="reveal">Compartir conocimiento también es una forma de cuidar.</h2>
            <p className="reveal" style={delay(".06s")}>
              Además de la consulta clínica, el Dr. Javier Olguín ha participado como conferencista y comunicador en temas de prevención, bienestar y desarrollo personal.
            </p>
            <div className="countries reveal" style={delay(".1s")}>
              <span>México</span><span>Estados Unidos</span><span>Colombia</span><span>Brasil</span>
            </div>
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact-label">Houston · Texas</div>
          <div className="contact-main">
            <p className="kicker kicker-light"><span /> Solicita información</p>
            <h2 id="contact-title" className="reveal">Tu salud merece tiempo, escucha y una mirada completa.</h2>
            <p className="contact-direct-email">También puedes escribir a usabiowater@gmail.com</p>
            <form className="contact-form reveal" action="https://formspree.io/f/mdeodkqq" method="POST">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={4} placeholder="¿En qué podemos ayudarte?" required />
              <input type="hidden" name="_subject" value="Nueva solicitud de consulta" />
              <button type="submit">Enviar solicitud <ArrowIcon /></button>
            </form>
          </div>
          <a className="location-card reveal" href="https://www.google.com/maps/search/?api=1&query=4141+Southwest+Freeway+Houston+TX+77027" target="_blank" rel="noreferrer">
            <div className="location-pin" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            </div>
            <div>
              <small>Clínica de Medicina Integral</small>
              <strong>4141 Southwest Freeway</strong>
              <span>Houston, TX 77027</span>
            </div>
            <i aria-hidden="true">↗</i>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-seal" aria-hidden="true"><span>JO</span></span>
          <span className="brand-name"><strong>Dr. Javier Olguín</strong><small>Medicina integral</small></span>
        </a>
        <p>La información presentada es educativa y no sustituye una valoración médica. Los resultados varían según cada paciente. En caso de emergencia, llama al 911.</p>
        <span>© 2026 Dr. Javier Olguín</span>
      </footer>
    </>
  );
}
