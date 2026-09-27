/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import {
  Sparkles,
  Volume2,
  Tv,
  Film,
  TrendingUp,
  ExternalLink,
  MessageCircle,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { trackContactEvent } from "../utils/leadCapture";

interface SponsorCaribeMotorShowcaseProps {
  onOpenMarca: () => void;
}

export const SponsorCaribeMotorShowcase: React.FC<SponsorCaribeMotorShowcaseProps> = ({
  onOpenMarca,
}) => {
  const [activeTab, setActiveTab] = useState<"banner" | "stream" | "clip" | "impact">("stream");
  const sponsor = siteConfig.featuredSponsor;

  const handleCaribeWhatsApp = () => {
    trackContactEvent();
    const msg = encodeURIComponent(
      "¡Hola CCCTN! Vi la alianza con Caribe Motor Renault y me interesa conocer los modelos de pickups 4x4 y beneficios comerciales para el gremio equino."
    );
    window.open(`${siteConfig.brand.whatsappUrl}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-16 bg-gradient-to-b from-[#141208] via-[#0E0E0E] to-[#0A0A0A] border-2 border-[#F2CD28] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(242,205,40,0.15)] relative overflow-hidden">
      {/* Resplandor ámbar decorativo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2CD28]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cabecera del Caso de Éxito / Sponsor Insigne */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2CD28] text-black font-anton text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 fill-black" />
            <span>Sponsor Insigne & Caso Modelo</span>
          </div>
          <h3 className="font-anton text-3xl sm:text-4xl uppercase text-white tracking-wide">
            Caribe Motor Renault · Vehículo Oficial CCCTN
          </h3>
          <p className="text-sm text-neutral-300 max-w-2xl font-light">
            Ejemplo real de integración comercial de alto impacto: cómo el concesionario líder de Renault en Antioquia conecta sus pickups 4x4 y vans con los propietarios y criaderos más influyentes de Colombia.
          </p>
        </div>

        {/* Emblema Caribe Motor Renault */}
        <div className="flex items-center gap-4 bg-black/60 border border-[#F2CD28]/40 px-5 py-3.5 rounded-2xl shrink-0 backdrop-blur-sm">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/images/caribe-motor-logo.png"
              alt="Logo Caribe Motor Renault"
              width={64}
              height={64}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,204,0,0.4)]"
            />
          </div>
          <div className="text-left">
            <span className="font-anton text-lg tracking-wider text-[#F2CD28] block leading-none">
              RENAULT
            </span>
            <span className="font-anton text-sm tracking-widest text-white uppercase block mt-0.5">
              Caribe Motor
            </span>
            <span className="text-[10px] text-neutral-400 block uppercase">
              Medellín & Antioquia
            </span>
          </div>
        </div>
      </div>

      {/* Selector de formatos para activar neuronas espejo */}
      <div className="py-6 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400">
            Explore cómo se ve la pauta en acción:
          </span>
          <span className="text-xs text-[#F2CD28] font-medium">
            Paquete activo: {sponsor.packageModel}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => setActiveTab("stream")}
            className={`btn-touch h-12 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "stream"
                ? "bg-[#F2CD28] text-black border-[#F2CD28] shadow-md"
                : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>1. En Transmisión</span>
          </button>

          <button
            onClick={() => setActiveTab("banner")}
            className={`btn-touch h-12 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "banner"
                ? "bg-[#F2CD28] text-black border-[#F2CD28] shadow-md"
                : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2. Banner Digital</span>
          </button>

          <button
            onClick={() => setActiveTab("clip")}
            className={`btn-touch h-12 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "clip"
                ? "bg-[#F2CD28] text-black border-[#F2CD28] shadow-md"
                : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
            }`}
          >
            <Film className="w-4 h-4" />
            <span>3. Clip en Criadero</span>
          </button>

          <button
            onClick={() => setActiveTab("impact")}
            className={`btn-touch h-12 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "impact"
                ? "bg-[#F2CD28] text-black border-[#F2CD28] shadow-md"
                : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>4. Resultados</span>
          </button>
        </div>
      </div>

      {/* Contenedor del Mockup Interactivo */}
      <div className="bg-[#0A0A0A] border border-neutral-800 rounded-2xl p-6 sm:p-8 relative z-10 min-h-[300px] flex flex-col justify-center">
        {/* Pestaña 1: Transmisión en Vivo con Zócalo y Mención */}
        {activeTab === "stream" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-black aspect-16/9 max-h-72 w-full mx-auto">
              <img
                src="/images/subasta-pista.webp"
                alt="Transmisión en vivo de feria con sponsor Caribe Motor"
                width={960}
                height={540}
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

              {/* Distintivo EN VIVO */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#E81C24] text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>En Vivo · Gran Campeonato</span>
              </div>

              {/* Zócalo de pauta Caribe Motor en la parte inferior */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 border border-[#F2CD28] backdrop-blur-md p-3 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-neutral-900 border border-[#F2CD28]/50 rounded-lg p-1 shrink-0 flex items-center justify-center">
                    <img
                      src="/images/caribe-motor-logo.png"
                      alt="Renault Caribe Motor"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-anton text-xs uppercase tracking-wider text-[#F2CD28] block">
                      Vehículo Oficial: Caribe Motor Renault
                    </span>
                    <span className="text-[11px] text-white block truncate">
                      Línea Oroch & Alaskan 4x4 · Potencia para el transporte de ejemplares
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <span className="text-[10px] text-neutral-400 block uppercase">
                    Concesionario Autorizado
                  </span>
                  <span className="font-mono text-xs text-[#25D366] font-semibold">
                    caribemotor.com.co
                  </span>
                </div>
              </div>
            </div>

            {/* Mención locutada en directo */}
            <div className="bg-[#121212] border-l-4 border-[#F2CD28] p-4 rounded-r-xl">
              <div className="flex items-center gap-2 text-xs uppercase font-bold text-[#F2CD28] mb-1">
                <Volume2 className="w-4 h-4" />
                <span>Cuña oficial leída en vivo por el locutor de pista:</span>
              </div>
              <p className="text-sm italic text-neutral-200 font-light">
                {sponsor.liveMentionSample}
              </p>
            </div>
          </div>
        )}

        {/* Pestaña 2: Banner Digital Oficial */}
        {activeTab === "banner" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-[#17140A] via-[#221B0B] to-[#121212] border-2 border-[#F2CD28] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-black rounded-2xl p-2 border border-[#F2CD28] shrink-0 flex items-center justify-center shadow-md">
                  <img
                    src="/images/caribe-motor-logo.png"
                    alt="Caribe Motor Renault"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
                    Alianza Oficial CCCTN
                  </span>
                  <h4 className="font-anton text-2xl uppercase text-white">
                    Renault Alaskan & Oroch 4x4 · Caribe Motor
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-lg">
                    La pickup diseñada para resistir trochas, fincas y arrastre de remolques equinos. Beneficios preferenciales para miembros de la comunidad CCCTN.
                  </p>
                </div>
              </div>

              <button
                onClick={handleCaribeWhatsApp}
                className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-anton text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-transform hover:scale-105 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Consultar Asesor Renault</span>
              </button>
            </div>

            <p className="text-center text-xs text-neutral-400">
              * Este formato se exhibe en portada y catálogo web, direccionando prospectos calificados al WhatsApp comercial de la marca.
            </p>
          </div>
        )}

        {/* Pestaña 3: Clip Audiovisual en Criaderos */}
        {activeTab === "clip" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 rounded-2xl overflow-hidden border border-neutral-700 bg-black aspect-4/3 relative">
                <img
                  src="/images/sponsor-renault-showcase.webp"
                  alt="Renault Alaskan remolcando trailer de caballos en criadero"
                  width={960}
                  height={640}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-anton uppercase tracking-wider text-[#F2CD28]">
                    Integración Nativa: Renault en Pesebreras
                  </span>
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
                  Contenido Orgánico de Alto Valor
                </span>
                <h4 className="font-anton text-2xl uppercase text-white leading-tight">
                  Demostración de Fuerza Real en el Entorno del Criador
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  En lugar de publicidad fría, llevamos la pickup Renault a los criaderos fundadores: mostramos el enganche del tráiler, la comodidad en trocha y la capacidad de carga en las faenas del campo.
                </p>
                <div className="space-y-2 text-xs text-neutral-300 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F2CD28] shrink-0" />
                    <span>Publicación simultánea en Facebook, Instagram y TikTok (+1,2M)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F2CD28] shrink-0" />
                    <span>Etiquetado directo de la cuenta oficial @caribemotor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña 4: Resultados / Activación de Neuronas Espejo */}
        {activeTab === "impact" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#121212] border border-neutral-800 rounded-xl p-4 text-center">
                <span className="font-anton text-3xl sm:text-4xl text-[#F2CD28] block">
                  +530.000
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 block mt-1">
                  Impresiones de Marca
                </span>
              </div>
              <div className="bg-[#121212] border border-neutral-800 rounded-xl p-4 text-center">
                <span className="font-anton text-3xl sm:text-4xl text-white block">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 block mt-1">
                  Público Segmentado Equino
                </span>
              </div>
              <div className="bg-[#121212] border border-neutral-800 rounded-xl p-4 text-center">
                <span className="font-anton text-3xl sm:text-4xl text-[#F2CD28] block">
                  1.450+
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 block mt-1">
                  Clics Calificados a WhatsApp
                </span>
              </div>
              <div className="bg-[#121212] border border-neutral-800 rounded-xl p-4 text-center">
                <span className="font-anton text-3xl sm:text-4xl text-white block">
                  Top 1
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 block mt-1">
                  Recordación en Pickups 4x4
                </span>
              </div>
            </div>

            <div className="bg-[#141414] border border-neutral-800 p-4 rounded-xl text-center">
              <p className="text-xs text-neutral-300 italic">
                "Asociar a Caribe Motor Renault con CCCTN nos permitió conectar directamente con los dueños de criaderos y haciendas que realmente necesitan camionetas de trabajo duro y remolque pesado."
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Llamado a la acción: "Active las neuronas espejo de su audiencia" */}
      <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="text-left">
          <p className="font-anton text-lg uppercase text-white">
            ¿Quiere que su empresa tenga este mismo nivel de exposición?
          </p>
          <p className="text-xs text-neutral-400">
            Haga como Caribe Motor Renault y posicione su producto ante la mayor comunidad equina del país.
          </p>
        </div>

        <button
          onClick={onOpenMarca}
          className="w-full sm:w-auto btn-touch h-13 px-8 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-black font-anton text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
        >
          <span>Pautar como Caribe Motor</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
