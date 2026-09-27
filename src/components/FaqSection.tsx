/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { trackContactEvent } from "../utils/leadCapture";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskWhatsApp = () => {
    trackContactEvent();
    const msg = encodeURIComponent(
      "¡Hola CCCTN! Tengo una inquietud sobre sus servicios y paquetes para criaderos y marcas."
    );
    window.open(`${siteConfig.brand.whatsappUrl}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="faqs" className="py-20 bg-[#0E0E0E] border-t border-[#283B7B]/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#283B7B]/30 border border-[#283B7B] text-[#F2CD28] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Claridad Comercial</span>
          </div>
          <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-[#F6F3EC]">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-neutral-400 mt-3 font-light">
            Transparencia total sobre condiciones, pagos, publicaciones y el rol de CCCTN en el gremio.
          </p>
        </div>

        {/* Acordeón accesible */}
        <div className="space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full btn-touch p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-anton text-lg uppercase tracking-wide text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#F2CD28] text-black" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contacto adicional si tienen dudas */}
        <div className="mt-12 text-center bg-[#141414] p-6 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-anton text-base uppercase text-white">
              ¿Tiene otra pregunta específica sobre su ejemplar o producto?
            </p>
            <p className="text-xs text-neutral-400">
              Nuestro equipo le responde de inmediato en WhatsApp comercial.
            </p>
          </div>
          <button
            onClick={handleAskWhatsApp}
            className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
