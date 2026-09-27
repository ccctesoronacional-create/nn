/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDown, Sparkles, Building2, Megaphone } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { TricolorBar } from "./TricolorBar";

interface HeroSectionProps {
  onOpenCriadero: (paquete?: "Oro" | "Plata" | "Bronce") => void;
  onOpenMarca: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCriadero,
  onOpenMarca,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Imagen de fondo hero.webp con superposición cinematográfica oscura */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.webp"
          alt="Ejemplar del Caballo Criollo Colombiano con chalán"
          width={1600}
          height={900}
          className="w-full h-full object-cover object-center filter brightness-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,205,40,0.08)_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Kicker oficial */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212]/90 border border-[#F2CD28]/50 text-[#F2CD28] text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteConfig.brand.city} · {siteConfig.brand.trajectory}</span>
        </div>

        {/* H1 principal en Anton */}
        <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#F6F3EC] leading-[1.08] max-w-4xl mx-auto drop-shadow-md">
          La vitrina más grande del caballo criollo colombiano
        </h1>

        {/* Sello visual: Franja tricolor bajo el titular */}
        <div className="max-w-md mx-auto my-6">
          <TricolorBar height="h-2" />
        </div>

        {/* Subtítulo con cifras exactas */}
        <p className="text-base sm:text-xl text-neutral-200 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          Conectamos a más de{" "}
          <strong className="text-[#F2CD28] font-semibold">{siteConfig.metrics.totalCommunity}</strong> de apasionados
          con los mejores criaderos y marcas de la nación. Una comunidad consolidada con{" "}
          <strong className="text-white font-semibold">{siteConfig.social.facebook.followers}</strong> en Facebook y{" "}
          <strong className="text-white font-semibold">{siteConfig.social.instagram.followers}</strong> en Instagram.
        </p>

        {/* Botones de acción principales (min 48px de alto) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => onOpenCriadero("Oro")}
            className="w-full sm:w-auto flex-1 btn-touch h-14 px-8 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-[#0B0B0B] font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(242,205,40,0.25)] transition-all transform hover:scale-[1.02] cursor-pointer"
            aria-label="Registrar mi criadero en CCCTN"
          >
            <Building2 className="w-5 h-5 stroke-[2.5]" />
            <span>Soy Criadero</span>
          </button>

          <button
            onClick={onOpenMarca}
            className="w-full sm:w-auto flex-1 btn-touch h-14 px-8 rounded-full bg-[#283B7B] hover:bg-[#344b9b] text-white font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2.5 border border-[#F2CD28]/30 shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
            aria-label="Pautar con mi marca en CCCTN"
          >
            <Megaphone className="w-5 h-5 text-[#F2CD28]" />
            <span>Soy una Marca</span>
          </button>
        </div>

        {/* Indicador de desplazamiento */}
        <div className="mt-12 flex justify-center">
          <a
            href="#cifras"
            className="text-neutral-400 hover:text-[#F2CD28] flex flex-col items-center gap-1 text-xs uppercase tracking-widest transition-colors"
            aria-label="Ver cifras de CCCTN"
          >
            <span>Conozca el Impacto</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
