/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, Crown, Sparkles, Building, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface CriaderosSectionProps {
  onSelectPackage: (paquete: "Oro" | "Plata" | "Bronce") => void;
}

export const CriaderosSection: React.FC<CriaderosSectionProps> = ({
  onSelectPackage,
}) => {
  return (
    <section id="criaderos" className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2CD28]/10 border border-[#F2CD28]/30 text-[#F2CD28] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cupos limitados por temporada</span>
          </div>
          <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-[#F6F3EC]">
            Temporada de Criaderos Fundadores
          </h2>
          <p className="text-base text-neutral-300 mt-4 leading-relaxed font-light">
            Posicione su criadero, reproductores y vientres ante la mayor afición del país. 
            Contenido audiovisual de nivel premium, cobertura en transmisiones y presencia web permanente.
          </p>
        </div>

        {/* 3 Tarjetas de paquetes (Oro destacada en el centro) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan Bronce */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between card-hover-gold">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-anton text-xl uppercase tracking-wider text-neutral-400">
                  Plan Bronce
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 font-medium">
                  Arranque
                </span>
              </div>

              <div className="mb-6">
                <div className="font-anton text-4xl text-[#F6F3EC] tracking-tight">
                  $1.500.000
                </div>
                <div className="text-xs uppercase tracking-widest text-[#F2CD28] font-bold mt-1">
                  COP · Pago único temporada
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1 reel profesional de su criadero y ejemplares</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Perfil en el catálogo web oficial de CCCTN</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Difusión a la comunidad de más de 1,2 M de seguidores</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage("Bronce")}
              className="w-full btn-touch h-12 rounded-full border border-neutral-700 hover:border-[#F2CD28] text-white hover:text-[#F2CD28] font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Elegir Plan Bronce</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Plan Oro (Destacado) */}
          <div className="bg-gradient-to-b from-[#1C170A] via-[#14120D] to-[#121212] border-2 border-[#F2CD28] rounded-3xl p-8 lg:-translate-y-3 flex flex-col justify-between shadow-[0_15px_40px_rgba(242,205,40,0.2)] relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F2CD28] text-[#0B0B0B] px-4 py-1 rounded-full font-anton text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Crown className="w-3.5 h-3.5 fill-black" />
              <span>Más Recomendado · Mayor Impacto</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-anton text-2xl uppercase tracking-wider text-[#F2CD28]">
                  Plan Oro
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#F2CD28]/20 text-[#F2CD28] font-bold">
                  Máxima Vitrina
                </span>
              </div>

              <div className="mb-6">
                <div className="font-anton text-5xl text-white tracking-tight">
                  $6.000.000
                </div>
                <div className="text-xs uppercase tracking-widest text-[#F2CD28] font-bold mt-1">
                  COP · Pago único temporada
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-sm text-neutral-200">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-white">4 reels completos</strong> con la historia de su criadero, reproductores y genética
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-[#F2CD28]">Vitrina en transmisión en vivo</strong> oficial de CCCTN durante eventos y ferias
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-white">Perfil destacado</strong> con video y botón directo de contacto en el catálogo web
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-[#F2CD28]">Prioridad y reserva</strong> de cupo en la primera subasta en vivo CCCTN
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage("Oro")}
              className="w-full btn-touch h-14 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-[#0B0B0B] font-anton text-lg uppercase tracking-wider shadow-lg shadow-[#F2CD28]/25 transition-all cursor-pointer flex items-center justify-center gap-2 transform hover:scale-[1.02]"
            >
              <span>Elegir Plan Oro</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Plan Plata */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between card-hover-gold">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-anton text-xl uppercase tracking-wider text-neutral-300">
                  Plan Plata
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 font-medium">
                  Consolidación
                </span>
              </div>

              <div className="mb-6">
                <div className="font-anton text-4xl text-[#F6F3EC] tracking-tight">
                  $3.000.000
                </div>
                <div className="text-xs uppercase tracking-widest text-[#F2CD28] font-bold mt-1">
                  COP · Pago único temporada
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-white">2 reels</strong> de su criadero y ejemplares insignia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-[#F2CD28]">Mención en directo</strong> durante transmisión en vivo oficial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Perfil oficial en el catálogo web con galería fotográfica</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage("Plata")}
              className="w-full btn-touch h-12 rounded-full border border-neutral-700 hover:border-[#F2CD28] text-white hover:text-[#F2CD28] font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Elegir Plan Plata</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Nota de garantía y honestidad */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          <p>
            * Al enviar el formulario le contactamos por WhatsApp para acordar calendario por escrito. Su cupo queda asegurado al confirmarse el pago.
          </p>
        </div>
      </div>
    </section>
  );
};
