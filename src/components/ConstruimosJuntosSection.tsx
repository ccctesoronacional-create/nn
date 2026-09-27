/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Handshake, Sparkles, Compass } from "lucide-react";

export const ConstruimosJuntosSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2CD28]/10 border border-[#F2CD28]/30 text-[#F2CD28] text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Brochure Oficial CCCTN</span>
          </div>
          <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-[#F6F3EC]">
            Lo Que Construimos Juntos
          </h2>
          <p className="text-base text-neutral-300 mt-4 leading-relaxed font-light">
            Nueve ejes estratégicos que convierten la pasión por el caballo criollo colombiano en un ecosistema productivo y sostenible para todo el gremio.
          </p>
        </div>

        {/* Las 9 líneas del brochure en rejilla */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {siteConfig.constructionLines.map((line) => (
            <div
              key={line.number}
              className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 relative group hover:border-[#F2CD28]/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#283B7B] text-[#F2CD28] font-anton text-sm flex items-center justify-center shrink-0 border border-[#F2CD28]/30">
                  {line.number}
                </span>
                <h3 className="font-anton text-lg uppercase tracking-wide text-white group-hover:text-[#F2CD28] transition-colors">
                  {line.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-11">
                {line.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tarjeta de Alianzas con foto tradicion-jinetes.webp y foto ejemplar-castano.webp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#121212] border border-[#283B7B]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2CD28]/20 border border-[#F2CD28] text-[#F2CD28] text-xs font-bold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" />
              <span>Alianzas Estratégicas</span>
            </div>
            <h3 className="font-anton text-2xl sm:text-4xl uppercase text-[#F6F3EC] leading-tight">
              ¿Quiere Ser Parte Del Negocio Detrás De Esa Pasión?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Si usted es empresario, inversionista, cercano al mundo equino, afín a medios digitales o cuenta con capital y red estratégica: converse con nosotros. Una reunión puede ser el inicio de una alianza histórica para el gremio caballista colombiano.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch h-12 px-6 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-[#0B0B0B] font-anton text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Conversar con la Dirección</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-700 bg-black aspect-4/3 relative">
              <img
                src="/images/tradicion-jinetes.webp"
                alt="Jinetes colombianos en desfile tradicional"
                width={960}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-anton uppercase tracking-wider text-[#F2CD28]">
                  Tradición y Cultura
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-700 bg-black aspect-4/3 relative">
              <img
                src="/images/ejemplar-castano.webp"
                alt="Ejemplar castaño del caballo criollo colombiano"
                width={960}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-anton uppercase tracking-wider text-[#F2CD28]">
                  Genética Insigne
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
