/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Megaphone, ArrowRight, Tv, Radio, Image as ImageIcon, Sparkles } from "lucide-react";
import { SponsorCaribeMotorShowcase } from "./SponsorCaribeMotorShowcase";

interface MarcasSectionProps {
  onOpenMarca: () => void;
  onNavigate: (path: string) => void;
}

export const MarcasSection: React.FC<MarcasSectionProps> = ({
  onOpenMarca,
  onNavigate,
}) => {
  return (
    <section id="marcas" className="py-20 bg-[#1B2858] relative overflow-hidden text-[#F6F3EC]">
      {/* Resplandor y textura sutil de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#283B7B]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2CD28]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna izquierda: Información comercial del Plan Premium */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F2CD28] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visibilidad de Alto Impacto para Empresas</span>
            </div>

            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              Plan Premium Para Marcas del Sector y Fuera de Él
            </h2>

            <p className="text-base text-neutral-200 font-light leading-relaxed">
              Integre su producto, servicio o institución en las transmisiones y redes del ecosistema equino más influyente de Colombia. Alcance a propietarios con alto poder adquisitivo, criaderos, hacendados y profesionales del agro.
            </p>

            {/* Los 4 pilares obligatorios para marcas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F2CD28]/20 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-anton text-base uppercase text-white tracking-wide">
                    Logo en transmisiones
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5 leading-snug">
                    Presencia fija y rotativa en pantalla durante las transmisiones en vivo de eventos y remates.
                  </p>
                </div>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F2CD28]/20 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-anton text-base uppercase text-white tracking-wide">
                    Menciones en directo
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5 leading-snug">
                    Lectura de comerciales y cuñas por locutores especializados durante los momentos cúspide de pista.
                  </p>
                </div>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F2CD28]/20 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-anton text-base uppercase text-white tracking-wide">
                    Banner con enlace directo
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5 leading-snug">
                    Espacio digital en portada y catálogo web con clic directo al WhatsApp de ventas de su marca.
                  </p>
                </div>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F2CD28]/20 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-anton text-base uppercase text-white tracking-wide">
                    Clips con integración
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5 leading-snug">
                    Videos verticales nativos con su producto en acción dentro del entorno auténtico del criadero.
                  </p>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenMarca}
                className="btn-touch h-14 px-8 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-[#0B0B0B] font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-black/40 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Quiero Pautar</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => {
                  onNavigate("/mediakit");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="btn-touch h-14 px-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Ver Media Kit y Tarifas 2026</span>
                <ArrowRight className="w-4 h-4 text-[#F2CD28]" />
              </button>
            </div>
          </div>

          {/* Columna derecha: Foto marcas-ejemplar.webp con marco y cifras */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <img
                src="/images/marcas-ejemplar.webp"
                alt="Ejemplar de alta competencia en pista con marcas asociadas"
                width={960}
                height={640}
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F2CD28] text-black px-2.5 py-0.5 rounded-full inline-block">
                  Audiencia Cualificada
                </span>
                <p className="font-anton text-xl uppercase tracking-wide">
                  Conexión directa con el poder de compra del gremio equino
                </p>
                <p className="text-xs text-neutral-300">
                  Veterinarias, alimentos, talabarterías, remolques, banca y concesionarios líderes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SPONSOR INSIGNE & CASO EJEMPLO: CARIBE MOTOR RENAULT */}
        <SponsorCaribeMotorShowcase onOpenMarca={onOpenMarca} />
      </div>
    </section>
  );
};
