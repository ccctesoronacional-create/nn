/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../config/siteConfig";
import {
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Tv,
  CheckCircle2,
  Building2,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { trackContactEvent } from "../utils/leadCapture";

interface NuestrosAliadosSectionProps {
  onOpenMarca: () => void;
  onNavigate?: (path: string) => void;
}

export const NuestrosAliadosSection: React.FC<NuestrosAliadosSectionProps> = ({
  onOpenMarca,
  onNavigate,
}) => {
  const sponsor = siteConfig.featuredSponsor;

  const handleContactCaribeMotor = () => {
    trackContactEvent();
    const msg = encodeURIComponent(
      "¡Hola CCCTN! Vi a Caribe Motor Renault en la sección de Aliados Oficiales y deseo información de pickups 4x4 y vehículos de remolque para criadero."
    );
    window.open(`${siteConfig.brand.whatsappUrl}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const handleScrollToMarcas = () => {
    const el = document.querySelector("#marcas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="aliados" className="py-20 bg-[#0B0B0B] border-b border-[#283B7B]/30 relative overflow-hidden">
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F2CD28]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#283B7B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2CD28]/10 border border-[#F2CD28]/40 text-[#F2CD28] text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Alianzas Estratégicas del Gremio</span>
          </div>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-wide text-[#F6F3EC]">
            Nuestros Aliados
          </h2>
          <p className="text-base text-neutral-300 mt-3 font-light leading-relaxed">
            Las marcas líderes que impulsan el desarrollo, la potencia y la visibilidad del gremio caballista colombiano ante más de{" "}
            <strong className="text-[#F2CD28] font-semibold">{siteConfig.metrics.totalCommunity} de seguidores</strong>.
          </p>
        </div>

        {/* Tarjeta Destacada: Caribe Motor Renault (Primer Sponsor Oficial) */}
        <div className="bg-gradient-to-r from-[#17140A] via-[#121212] to-[#141414] border-2 border-[#F2CD28] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(242,205,40,0.12)] mb-12 relative overflow-hidden">
          {/* Badge superior de Sponsor Destacado */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2CD28] text-black font-anton text-xs uppercase tracking-wider mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Primer Sponsor Destacado · Vehículo Oficial CCCTN</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Columna Izquierda: Logo Optimizado y Mensaje */}
            <div className="lg:col-span-7 space-y-6">
              {/* Logo Optimizado Vectorial & Tipográfico de Caribe Motor Renault */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black/90 border-2 border-[#F2CD28] rounded-2xl p-3 shrink-0 flex items-center justify-center shadow-lg group">
                  {/* Rombo Renault Optimizado en SVG de alta fidelidad */}
                  <svg
                    viewBox="0 0 100 120"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(242,205,40,0.5)] transition-transform duration-300 group-hover:scale-105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Rombo exterior Renault en Amarillo Dorado */}
                    <path
                      d="M50 5 L92 60 L50 115 L8 60 Z"
                      stroke="#F2CD28"
                      strokeWidth="10"
                      strokeLinejoin="round"
                    />
                    {/* Rombo interior paralelo */}
                    <path
                      d="M50 28 L74 60 L50 92 L26 60 Z"
                      stroke="#F2CD28"
                      strokeWidth="7"
                      strokeLinejoin="round"
                    />
                    {/* Línea central distintiva Renault */}
                    <line
                      x1="50"
                      y1="28"
                      x2="50"
                      y2="92"
                      stroke="#F2CD28"
                      strokeWidth="4"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-anton text-3xl sm:text-4xl tracking-wider text-[#F2CD28] leading-none">
                      RENAULT
                    </span>
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                      Antioquia
                    </span>
                  </div>
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-white leading-tight">
                    Caribe Motor
                  </h3>
                  <p className="text-xs font-medium text-neutral-400">
                    Concesionario Líder · Medellín, Rionegro & Valle de Aburrá
                  </p>
                </div>
              </div>

              {/* Tagline y descripción */}
              <div className="border-l-4 border-[#F2CD28] pl-4 py-1">
                <p className="font-anton text-lg uppercase tracking-wide text-white">
                  "{sponsor.tagline}"
                </p>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed font-light">
                  {sponsor.description}
                </p>
              </div>

              {/* Beneficios de visibilidad que Caribe Motor obtiene como ejemplo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 pt-1">
                <div className="flex items-center gap-2.5 bg-black/40 p-2.5 rounded-xl border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F2CD28] shrink-0" />
                  <span>Banner principal con clic a WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 bg-black/40 p-2.5 rounded-xl border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F2CD28] shrink-0" />
                  <span>Mención locutada en transmisiones en vivo</span>
                </div>
                <div className="flex items-center gap-2.5 bg-black/40 p-2.5 rounded-xl border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F2CD28] shrink-0" />
                  <span>Integración de pickups Alaskan & Oroch en criaderos</span>
                </div>
                <div className="flex items-center gap-2.5 bg-black/40 p-2.5 rounded-xl border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F2CD28] shrink-0" />
                  <span>Exposición permanente ante +1,2M apasionados</span>
                </div>
              </div>

              {/* Botones de acción de la alianza */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleContactCaribeMotor}
                  className="w-full sm:w-auto btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-anton text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Consultar Asesor Caribe Motor</span>
                </button>

                <button
                  onClick={handleScrollToMarcas}
                  className="w-full sm:w-auto btn-touch h-12 px-6 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Ver Cómo Pauta en CCCTN</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F2CD28]" />
                </button>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta visual de impacto / Foto Pickup con van */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#F2CD28]/40 shadow-2xl bg-black">
                <img
                  src="/images/sponsor-renault-showcase.webp"
                  alt="Caribe Motor Renault Alaskan remolcando trailer equino"
                  width={960}
                  height={640}
                  loading="lazy"
                  className="w-full h-72 sm:h-80 object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F2CD28] text-black font-anton text-[10px] uppercase tracking-wider">
                    <TrendingUp className="w-3 h-3 fill-black" />
                    <span>Activación de Marca</span>
                  </div>
                  <h4 className="font-anton text-lg uppercase tracking-wide">
                    Renault Oroch & Alaskan 4x4
                  </h4>
                  <p className="text-xs text-neutral-300">
                    Tracción, durabilidad y capacidad de remolque para el transporte seguro de campeones en las trochas de Colombia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invitación a Nuevas Marcas Aliadas (Activa Neuronas Espejo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Laboratorios & Salud */}
          <div className="bg-[#121212] border border-neutral-800 hover:border-[#F2CD28]/50 rounded-2xl p-6 flex flex-col justify-between transition-all group">
            <div>
              <span className="text-[10px] font-anton uppercase tracking-widest text-[#F2CD28] block mb-2">
                Sector Veterinario
              </span>
              <h4 className="font-anton text-xl uppercase text-white group-hover:text-[#F2CD28] transition-colors">
                Laboratorios & Fármacos Equinos
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Posicione sus desparasitantes, vitaminas, sueros y medicamentos directamente ante veterinarios y administradores de pesebreras.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-medium">Cupo Disponible</span>
              <button
                onClick={onOpenMarca}
                className="text-xs font-anton uppercase tracking-wider text-[#F2CD28] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Vincular Marca</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tarjeta 2: Nutrición & Concentrados */}
          <div className="bg-[#121212] border border-neutral-800 hover:border-[#F2CD28]/50 rounded-2xl p-6 flex flex-col justify-between transition-all group">
            <div>
              <span className="text-[10px] font-anton uppercase tracking-widest text-[#F2CD28] block mb-2">
                Nutrición Animal
              </span>
              <h4 className="font-anton text-xl uppercase text-white group-hover:text-[#F2CD28] transition-colors">
                Alimentos Concentrados & Suplementos
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Asocie su alimento al rendimiento de los campeones nacionales en las cuatro modalidades del andar colombiano.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-medium">Cupo Disponible</span>
              <button
                onClick={onOpenMarca}
                className="text-xs font-anton uppercase tracking-wider text-[#F2CD28] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Vincular Marca</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tarjeta 3: Implementos, Banca & Remolques */}
          <div className="bg-gradient-to-br from-[#141414] to-[#1E1908] border-2 border-dashed border-[#F2CD28]/60 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F2CD28]/20 text-[#F2CD28] font-anton text-[10px] uppercase tracking-wider mb-2">
                <Building2 className="w-3 h-3" />
                <span>Próximo Aliado Oficial</span>
              </div>
              <h4 className="font-anton text-xl uppercase text-white">
                ¿Su Marca en Esta Vitrina?
              </h4>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed font-light">
                Sea parte de los aliados oficiales de CCCTN como Caribe Motor Renault. Diseñamos planes a la medida de sus metas comerciales.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={onOpenMarca}
                className="w-full btn-touch h-11 rounded-xl bg-[#F2CD28] hover:bg-[#dfbd24] text-black font-anton text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Postular Mi Marca</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
