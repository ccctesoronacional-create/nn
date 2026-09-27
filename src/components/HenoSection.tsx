/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HenoForm } from "./HenoForm";
import { CheckCircle2, PackageCheck, Truck, Users } from "lucide-react";

export const HenoSection: React.FC = () => {
  return (
    <section id="heno" className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información de la compra colectiva y foto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#283B7B]/30 border border-[#283B7B] text-[#F2CD28] text-xs font-bold uppercase tracking-widest">
              <PackageCheck className="w-3.5 h-3.5" />
              <span>Poder de Compra Colectivo</span>
            </div>

            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-[#F6F3EC] leading-tight">
              Compra Colectiva de Heno y Consumibles
            </h2>

            {/* Mensaje central obligatorio */}
            <div className="bg-[#141414] border-l-4 border-[#F2CD28] p-4 rounded-r-xl">
              <p className="font-anton text-xl uppercase tracking-wide text-[#F2CD28]">
                Compramos juntos, pagamos menos.
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                Registrarse no le obliga a comprar. Reunimos pedidos por zona, negociamos directamente con productores y le compartimos la propuesta antes de cualquier compromiso.
              </p>
            </div>

            {/* Foto criadero-yegua-potro.webp */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl bg-black">
              <img
                src="/images/criadero-yegua-potro.webp"
                alt="Yegua y potro en potrero criollo colombiano"
                width={960}
                height={640}
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-neutral-300">
                Nutrición y bienestar para sus ejemplares con ahorro real en flete y volumen.
              </div>
            </div>

            {/* Beneficios operativos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#F2CD28] shrink-0 mt-0.5" />
                <span>Rutas logísticas agrupadas por municipios de Antioquia y zonas de pesebreras.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[#F2CD28] shrink-0 mt-0.5" />
                <span>Trato directo y transparente: sin sobrecostos ocultos de intermediación.</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario inline de Heno */}
          <div className="lg:col-span-6">
            <HenoForm />
          </div>
        </div>
      </div>
    </section>
  );
};
