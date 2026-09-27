/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Users, Eye, Video, Award } from "lucide-react";

export const MetricsSection: React.FC = () => {
  return (
    <section id="cifras" className="py-16 bg-[#0E0E0E] border-y border-[#283B7B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
            Alcance Digital Verificable
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide text-[#F6F3EC] mt-1">
            Una Audiencia Propietaria Sin Rival
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            La comunidad más grande de criadores, jueces, chalanes y aficionados al caballo de paso en Colombia.
          </p>
        </div>

        {/* Rejilla de cifras destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Cifra 1: Comunidad Total */}
          <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
            <div className="w-10 h-10 rounded-full bg-[#F2CD28]/10 text-[#F2CD28] flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="font-anton text-4xl sm:text-5xl text-[#F2CD28] tracking-tight">
              {siteConfig.metrics.totalCommunity}
            </div>
            <div className="font-anton text-xs sm:text-sm uppercase tracking-wider text-[#F6F3EC] mt-2">
              Comunidad en Redes
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Seguidores orgánicos consolidados
            </p>
          </div>

          {/* Cifra 2: Facebook */}
          <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
            <div className="w-10 h-10 rounded-full bg-[#283B7B]/20 text-[#4267B2] flex items-center justify-center mx-auto mb-3">
              <span className="font-anton text-lg">FB</span>
            </div>
            <div className="font-anton text-4xl sm:text-5xl text-[#F6F3EC] tracking-tight">
              {siteConfig.metrics.facebookFollowers}
            </div>
            <div className="font-anton text-xs sm:text-sm uppercase tracking-wider text-[#F2CD28] mt-2">
              Seguidores Facebook
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Comunidad caballista interactiva
            </p>
          </div>

          {/* Cifra 3: Instagram */}
          <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
            <div className="w-10 h-10 rounded-full bg-[#E81C24]/10 text-[#E1306C] flex items-center justify-center mx-auto mb-3">
              <span className="font-anton text-lg">IG</span>
            </div>
            <div className="font-anton text-4xl sm:text-5xl text-[#F6F3EC] tracking-tight">
              {siteConfig.metrics.instagramFollowers}
            </div>
            <div className="font-anton text-xs sm:text-sm uppercase tracking-wider text-[#F2CD28] mt-2">
              Seguidores Instagram
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Criaderos y propietarios élite
            </p>
          </div>

          {/* Cifra 4: Vistas en un Reel */}
          <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <div className="font-anton text-4xl sm:text-5xl text-[#F2CD28] tracking-tight">
              {siteConfig.metrics.topReelViews}
            </div>
            <div className="font-anton text-xs sm:text-sm uppercase tracking-wider text-[#F6F3EC] mt-2">
              Vistas en un Reel
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Pico de viralidad audiovisual
            </p>
          </div>
        </div>

        {/* Fila secundaria: TikTok viral y trayectoria */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-[#141414] to-[#1B2858]/30 border border-[#283B7B]/40 rounded-xl p-4 sm:p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#F2CD28]/30 flex items-center justify-center shrink-0 text-[#F2CD28]">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-2xl sm:text-3xl text-white">71,2 Millones</span>
                <span className="text-xs uppercase text-[#F2CD28] font-bold">de reproducciones</span>
              </div>
              <p className="text-xs text-neutral-300">
                Logradas en un solo video viral de TikTok, con más de 3,9 M de "me gusta" en la cuenta oficial.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#141414] to-[#121212] border border-neutral-800 rounded-xl p-4 sm:p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#F2CD28]/30 flex items-center justify-center shrink-0 text-[#F2CD28]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-2xl sm:text-3xl text-[#F2CD28]">17 Años</span>
                <span className="text-xs uppercase text-neutral-300 font-bold">de Trayectoria Continua</span>
              </div>
              <p className="text-xs text-neutral-300">
                Presencia constante en ferias, pistas, pesebreras y remates de todo el territorio nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
