/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface SponsorBarProps {
  onScrollToSponsor?: () => void;
}

export const SponsorBar: React.FC<SponsorBarProps> = ({ onScrollToSponsor }) => {
  const handleClick = () => {
    if (onScrollToSponsor) {
      onScrollToSponsor();
    } else {
      const el = document.querySelector("#marcas");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#080808] border-y border-[#F2CD28]/30 py-3.5 px-4 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black border border-[#F2CD28]/50 p-1 flex items-center justify-center shrink-0">
            <img
              src="/images/caribe-motor-logo.png"
              alt="Renault Caribe Motor"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-anton uppercase tracking-wider text-[#F2CD28] px-2 py-0.5 rounded bg-[#F2CD28]/15 border border-[#F2CD28]/40">
              Primer Sponsor Oficial
            </span>
            <span className="text-white font-semibold">
              Caribe Motor Renault
            </span>
            <span className="hidden md:inline text-neutral-400">·</span>
            <span className="hidden md:inline text-neutral-300">
              Vehículo Oficial del Gremio Caballista Colombiano
            </span>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="text-xs font-semibold uppercase tracking-wider text-[#F2CD28] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
        >
          <span>Ver caso de integración</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
