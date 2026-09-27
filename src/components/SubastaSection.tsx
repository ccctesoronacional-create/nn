/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SubastaForm } from "./SubastaForm";
import { Gavel, BellRing, Shield, Award } from "lucide-react";

export const SubastaSection: React.FC = () => {
  return (
    <section id="subasta" className="py-20 bg-[#0E0E0E] border-t border-[#283B7B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información de la subasta y foto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E81C24]/10 border border-[#E81C24]/40 text-[#E81C24] text-xs font-bold uppercase tracking-widest">
              <Gavel className="w-3.5 h-3.5" />
              <span>Próximamente · Evento Oficial</span>
            </div>

            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-[#F6F3EC] leading-tight">
              Subasta en Vivo CCCTN
            </h2>

            {/* Mensaje obligatorio */}
            <div className="bg-[#141414] border-l-4 border-[#F2CD28] p-4 rounded-r-xl">
              <p className="font-anton text-lg uppercase tracking-wide text-[#F6F3EC]">
                Regístrese y le avisamos primero la fecha, el catálogo y los requisitos.
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                Garantizamos máxima transparencia: las condiciones, exámenes clínicos de referencia y pedigrí de cada lote estarán disponibles para su revisión antes del evento.
              </p>
            </div>

            {/* Foto subasta-pista.webp */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl bg-black">
              <img
                src="/images/subasta-pista.webp"
                alt="Pista de juzgamiento y tabla de resonancia equina"
                width={960}
                height={640}
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-neutral-300">
                Paso Fino Colombiano, Trocha Pura, Trocha y Galope y Trote y Galope en transmisión directa.
              </div>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5 bg-[#121212] p-3 rounded-xl border border-neutral-800">
                <BellRing className="w-4 h-4 text-[#F2CD28] shrink-0" />
                <span>Notificación prioritaria 48 horas antes de la apertura pública.</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#121212] p-3 rounded-xl border border-neutral-800">
                <Shield className="w-4 h-4 text-[#F2CD28] shrink-0" />
                <span>Reglas comerciales claras establecidas entre las partes.</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario inline de Subasta */}
          <div className="lg:col-span-6">
            <SubastaForm />
          </div>
        </div>
      </div>
    </section>
  );
};
