import {
  Activity,
  ArrowRight,
  Award,
  Brain,
  ChevronRight,
  Dna,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Radio,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";

const areas = [
  {
    icon: Scale,
    title: "Control de peso y bariatría",
    text: "Valoración individual del peso, hábitos, metabolismo y factores clínicos asociados.",
    number: "01",
  },
  {
    icon: Activity,
    title: "Salud metabólica",
    text: "Seguimiento integral de indicadores relacionados con glucosa, presión arterial y colesterol.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Medicina preventiva",
    text: "Evaluación orientada a identificar riesgos y construir un plan de cuidado personal.",
    number: "03",
  },
  {
    icon: Brain,
    title: "Estrés y bienestar",
    text: "Acompañamiento médico para mejorar descanso, manejo del estrés y calidad de vida.",
    number: "04",
  },
  {
    icon: Sparkles,
    title: "Vitalidad y envejecimiento saludable",
    text: "Estrategias de bienestar basadas en valoración clínica y objetivos realistas.",
    number: "05",
  },
  {
    icon: HeartPulse,
    title: "Salud integral",
    text: "Orientación en salud digestiva, sexual y hábitos durante las distintas etapas de la vida.",
    number: "06",
  },
];

const credentials = [
  "Médico Cirujano — UAM Xochimilco",
  "Práctica enfocada en bariatría y control de peso",
  "Conferencista en México, EE. UU., Colombia y Brasil",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dr. Javier Olguín, inicio">
          <span className="brand-mark" aria-hidden="true">JO</span>
          <span className="brand-copy">
            <strong>Dr. Javier Olguín</strong>
            <small>Medicina integral</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#doctor">El doctor</a>
          <a href="#atencion">Áreas de atención</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <MobileMenu />

        <a className="header-cta" href="mailto:usabiowater@gmail.com?subject=Solicitud%20de%20consulta">
          Solicitar consulta <ArrowRight size={16} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Medicina integral en Houston</p>
            <h1>Cuidar la salud es comprender a la <em>persona completa.</em></h1>
            <p className="hero-lead">
              Más de cuatro décadas de experiencia clínica con un enfoque humano,
              preventivo e individualizado para acompañar cada etapa de tu bienestar.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:usabiowater@gmail.com?subject=Solicitud%20de%20consulta">
                Solicitar información <ChevronRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#doctor">Conocer al doctor</a>
            </div>
            <div className="hero-trust">
              <span><Stethoscope size={17} /> Atención individual</span>
              <span><MapPin size={17} /> Houston, Texas</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Consultorio de medicina integral">
            <div className="hero-image" />
            <div className="hero-year-card">
              <p>Experiencia clínica</p>
              <strong>40<sup>+</sup></strong>
              <span>años dedicados a la salud integral</span>
            </div>
            <div className="hero-location-card">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <small>Consulta en</small>
                <strong>Southwest Freeway</strong>
                <span>Houston, TX 77027</span>
              </div>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <Award size={25} />
              <span>Medicina<br />con propósito</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Principios de atención">
        <div><span>01</span><strong>Escucha</strong><small>La historia completa importa.</small></div>
        <div><span>02</span><strong>Evaluación</strong><small>Cada persona requiere una mirada propia.</small></div>
        <div><span>03</span><strong>Prevención</strong><small>Cuidar hoy para vivir mejor mañana.</small></div>
      </section>

      <section className="doctor-section" id="doctor">
        <div className="section-heading narrow-heading">
          <p className="eyebrow dark"><span /> El doctor</p>
          <h2>Experiencia médica con una visión <em>integral.</em></h2>
        </div>

        <div className="doctor-grid">
          <div className="doctor-profile">
            <div className="doctor-initials" aria-hidden="true">
              <Dna size={32} strokeWidth={1.4} />
              <span>FJOC</span>
            </div>
            <p>Dr. Francisco Javier</p>
            <h3>Olguín Castro</h3>
            <span className="profile-role">Médico Cirujano</span>
            <div className="profile-divider" />
            <blockquote>“La prevención comienza cuando entendemos a la persona, no solamente sus síntomas.”</blockquote>
          </div>

          <div className="doctor-story">
            <p className="large-copy">
              Médico Cirujano por la Universidad Autónoma Metropolitana, Unidad Xochimilco,
              con servicio social realizado en Palenque, Chiapas.
            </p>
            <p>
              A lo largo de más de 40 años de práctica clínica, el Dr. Javier Olguín ha
              centrado su trabajo en el control de peso, la salud metabólica, la prevención
              y el acompañamiento integral del paciente. Su consulta parte de una valoración
              individual para definir objetivos responsables y adecuados a cada persona.
            </p>
            <ul className="credential-list">
              {credentials.map((credential) => (
                <li key={credential}><span><ShieldCheck size={16} /></span>{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="areas-section" id="atencion">
        <div className="areas-top">
          <div className="section-heading">
            <p className="eyebrow light"><span /> Áreas de atención</p>
            <h2>Un enfoque que conecta prevención, metabolismo y <em>bienestar.</em></h2>
          </div>
          <p className="areas-intro">
            La atención se define después de una valoración médica. Cada plan se adapta
            al estado de salud, antecedentes y objetivos del paciente.
          </p>
        </div>

        <div className="areas-grid">
          {areas.map(({ icon: Icon, title, text, number }) => (
            <article className="area-card" key={title}>
              <div className="area-card-top">
                <span className="area-icon"><Icon size={23} strokeWidth={1.5} /></span>
                <small>{number}</small>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="complementary-note">
          <Leaf size={24} aria-hidden="true" />
          <div>
            <strong>Acompañamiento complementario responsable</strong>
            <p>
              Para pacientes con cáncer o enfermedades crónicas: acompañamiento
              complementario coordinado con el equipo médico tratante.
            </p>
          </div>
        </div>
      </section>

      <section className="trajectory-section" id="trayectoria">
        <div className="trajectory-copy">
          <p className="eyebrow dark"><span /> Divulgación</p>
          <h2>La salud también se construye al <em>compartir conocimiento.</em></h2>
          <p>
            Además de la consulta clínica, el Dr. Javier Olguín ha participado como
            conferencista y comunicador en temas de prevención, bienestar y desarrollo personal.
          </p>
          <div className="country-list" aria-label="Países donde ha impartido conferencias">
            <span>México</span><span>Estados Unidos</span><span>Colombia</span><span>Brasil</span>
          </div>
        </div>

        <div className="media-card">
          <div className="media-icon"><Radio size={30} strokeWidth={1.4} /></div>
          <p>Radio, televisión y conferencias</p>
          <h3>Salud y Prosperidad</h3>
          <span>Educación y conversación sobre prevención y bienestar para la comunidad hispana.</span>
          <div className="sound-wave" aria-hidden="true">
            {[18, 31, 22, 42, 30, 50, 35, 24, 42, 19, 31, 15].map((height, index) => (
              <i key={index} style={{ height }} />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow light"><span /> Consulta en Houston</p>
          <h2>Da el primer paso hacia un cuidado más <em>personal.</em></h2>
          <p>Escríbenos para solicitar información sobre disponibilidad y modalidades de consulta.</p>
          <a className="button button-coral" href="mailto:usabiowater@gmail.com?subject=Solicitud%20de%20consulta">
            <Mail size={18} /> usabiowater@gmail.com
          </a>
        </div>
        <a
          className="address-card"
          href="https://www.google.com/maps/search/?api=1&query=4141+Southwest+Freeway+Houston+TX+77027"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir ubicación de la clínica en Google Maps"
        >
          <span className="map-pin-large"><MapPin size={27} /></span>
          <div>
            <small>Clínica de Medicina Integral</small>
            <strong>4141 Southwest Freeway</strong>
            <p>Houston, TX 77027</p>
          </div>
          <ArrowRight size={22} className="address-arrow" />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">JO</span>
          <span className="brand-copy"><strong>Dr. Javier Olguín</strong><small>Medicina integral</small></span>
        </a>
        <p>
          La información presentada es educativa y no sustituye una valoración médica.
          Los resultados varían según cada paciente. En caso de emergencia, llama al 911.
        </p>
        <span>© {new Date().getFullYear()} Dr. Javier Olguín</span>
      </footer>
    </main>
  );
}
