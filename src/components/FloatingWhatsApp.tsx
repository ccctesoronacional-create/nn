/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { trackContactEvent } from "../utils/leadCapture";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    trackContactEvent();
    const defaultMsg = encodeURIComponent(
      "¡Hola CCCTN! Deseo información comercial sobre los paquetes de difusión y vitrina para el Caballo Criollo Colombiano."
    );
    window.open(`${siteConfig.brand.whatsappUrl}?text=${defaultMsg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      aria-label="Atención por WhatsApp"
    >
      {/* Tooltip flotante en desktop */}
      <div
        className={`hidden md:flex items-center gap-2 bg-[#0B0B0B] border border-[#25D366]/40 text-[#F6F3EC] text-xs font-medium py-2 px-3.5 rounded-full shadow-2xl transition-opacity duration-300 pointer-events-none ${
          showTooltip ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chatee con un asesor comercial CCCTN</span>
      </div>

      {/* Botón flotante WhatsApp */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Abrir WhatsApp oficial de CCCTN (+57 302 224 0808)"
      >
        <MessageCircle className="w-7 h-7 text-black fill-black" />
      </button>
    </aside>
  );
};
