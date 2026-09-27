/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { TricolorBar } from "./TricolorBar";
import { trackContactEvent } from "../utils/leadCapture";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith("/")) {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      if (currentPath !== "/") {
        // First navigate to landing, then scroll to element
        onNavigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleWhatsAppClick = () => {
    trackContactEvent();
    window.open(siteConfig.brand.whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#283B7B]/30 transition-all">
      {/* Franja tricolor de la bandera de Colombia arriba del menú */}
      <TricolorBar height="h-1.5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo CCCTN con jinete y texto en Anton */}
          <a
            href="/"
            onClick={(e) => handleNavClick("/", e)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ir al inicio de CCCTN"
          >
            <div className="relative w-12 h-12 flex items-center justify-center bg-black/40 rounded-lg p-1 border border-[#F2CD28]/20 group-hover:border-[#F2CD28] transition-colors">
              <img
                src="/images/logo-icon.png"
                alt="Logo CCCTN Jinete con bandera"
                width={48}
                height={48}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(242,205,40,0.3)]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-anton text-2xl tracking-wider text-[#F2CD28] leading-none group-hover:text-white transition-colors">
                CCCTN
              </span>
              <span className="font-anton text-xs tracking-widest text-[#F6F3EC] uppercase leading-tight">
                Tesoro Nacional
              </span>
            </div>
          </a>

          {/* Menú de navegación desktop */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
            <button
              onClick={() => handleNavClick("#criaderos")}
              className="text-sm font-medium text-[#F6F3EC]/80 hover:text-[#F2CD28] transition-colors cursor-pointer py-2"
            >
              Criaderos
            </button>
            <button
              onClick={() => handleNavClick("#marcas")}
              className="text-sm font-medium text-[#F6F3EC]/80 hover:text-[#F2CD28] transition-colors cursor-pointer py-2"
            >
              Marcas
            </button>
            <button
              onClick={() => handleNavClick("/mediakit")}
              className={`text-sm font-medium transition-colors cursor-pointer py-2 flex items-center gap-1 ${
                currentPath === "/mediakit"
                  ? "text-[#F2CD28] font-semibold border-b-2 border-[#F2CD28]"
                  : "text-[#F6F3EC]/80 hover:text-[#F2CD28]"
              }`}
            >
              Media Kit 2026
              <span className="text-[10px] bg-[#E81C24] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                Tarifas
              </span>
            </button>
            <button
              onClick={() => handleNavClick("#heno")}
              className="text-sm font-medium text-[#F6F3EC]/80 hover:text-[#F2CD28] transition-colors cursor-pointer py-2"
            >
              Heno
            </button>
            <button
              onClick={() => handleNavClick("#subasta")}
              className="text-sm font-medium text-[#F6F3EC]/80 hover:text-[#F2CD28] transition-colors cursor-pointer py-2"
            >
              Subasta
            </button>
            <button
              onClick={() => handleNavClick("#faqs")}
              className="text-sm font-medium text-[#F6F3EC]/80 hover:text-[#F2CD28] transition-colors cursor-pointer py-2"
            >
              Preguntas
            </button>
            <button
              onClick={() => handleNavClick("#contacto")}
              className="text-sm font-medium text-[#F6F3EC]/80 hover:text-[#F2CD28] transition-colors cursor-pointer py-2"
            >
              Contacto
            </button>
          </nav>

          {/* Botón WhatsApp Desktop (Mínimo 48px alto) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleWhatsAppClick}
              className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all transform hover:scale-[1.02] cursor-pointer"
              aria-label="Contactar por WhatsApp a CCCTN"
            >
              <MessageCircle className="w-5 h-5 text-black fill-black" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Botón móvil hamburguesa */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="btn-touch h-11 px-3.5 rounded-full bg-[#25D366] text-black font-medium text-xs flex items-center gap-1.5 cursor-pointer"
              aria-label="Abrir WhatsApp comercial"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Chat</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-touch w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-[#F6F3EC] focus:outline-none"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <button
            onClick={() => handleNavClick("#criaderos")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-neutral-900 text-[#F6F3EC]"
          >
            Criaderos Fundadores
          </button>
          <button
            onClick={() => handleNavClick("#marcas")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-neutral-900 text-[#F6F3EC]"
          >
            Marcas & Patrocinio
          </button>
          <button
            onClick={() => handleNavClick("/mediakit")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-semibold rounded-lg bg-[#283B7B]/30 text-[#F2CD28] flex items-center justify-between"
          >
            <span>Media Kit 2026 & Cotizador</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleNavClick("#heno")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-neutral-900 text-[#F6F3EC]"
          >
            Compra Colectiva de Heno
          </button>
          <button
            onClick={() => handleNavClick("#subasta")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-neutral-900 text-[#F6F3EC]"
          >
            Subasta en Vivo
          </button>
          <button
            onClick={() => handleNavClick("#faqs")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-neutral-900 text-[#F6F3EC]"
          >
            Preguntas Frecuentes
          </button>
          <button
            onClick={() => handleNavClick("#contacto")}
            className="w-full btn-touch text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-neutral-900 text-[#F6F3EC]"
          >
            Contacto & Legal
          </button>

          <div className="pt-2">
            <button
              onClick={handleWhatsAppClick}
              className="w-full btn-touch h-12 rounded-xl bg-[#25D366] text-black font-bold text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Contactar al +57 302 224 0808</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
