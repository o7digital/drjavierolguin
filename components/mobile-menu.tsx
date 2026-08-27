"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#doctor", label: "El doctor" },
  { href: "#atencion", label: "Áreas de atención" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>

      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
        {links.map((link, index) => (
          <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
            <span>0{index + 1}</span>
            {link.label}
          </a>
        ))}
        <a
          className="mobile-contact-link"
          href="mailto:usabiowater@gmail.com?subject=Solicitud%20de%20consulta"
          onClick={() => setIsOpen(false)}
        >
          Solicitar consulta
        </a>
      </nav>
    </div>
  );
}
