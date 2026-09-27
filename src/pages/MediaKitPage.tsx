/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { TricolorBar } from "../components/TricolorBar";
import {
  Sparkles,
  TrendingUp,
  Share2,
  Calendar,
  Globe,
  Calculator,
  MessageCircle,
  Mail,
  ArrowLeft,
  Check,
  Plus,
  Minus,
  FileText,
  ExternalLink,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { trackContactEvent } from "../utils/leadCapture";

interface MediaKitPageProps {
  onNavigate: (path: string) => void;
}

interface SelectedItemsState {
  [itemId: string]: number;
}

interface RateItem {
  id: string;
  name: string;
  priceCop: number;
  format: string;
  category: string;
  tag?: string | null;
  frequency?: string;
}

export const MediaKitPage: React.FC<MediaKitPageProps> = ({ onNavigate }) => {
  // Estado del cotizador interactivo: item_id -> cantidad seleccionada
  const [selectedQuantities, setSelectedQuantities] = useState<SelectedItemsState>({
    reel_fbig: 1,
    pack_4plat: 1,
  });

  const updateQuantity = (id: string, delta: number) => {
    setSelectedQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  // Calcular total estimado en COP
  const allRateItems: RateItem[] = [
    ...siteConfig.mediakitRates.social.map((item) => ({ ...item, category: "Redes Sociales" })),
    ...siteConfig.mediakitRates.events.map((item) => ({ ...item, category: "Eventos & Transmisiones" })),
    ...siteConfig.mediakitRates.web.map((item) => ({ ...item, category: "Plataforma Web" })),
  ];

  const totalEstimatedCop = allRateItems.reduce((acc, item) => {
    const qty = selectedQuantities[item.id] || 0;
    return acc + qty * item.priceCop;
  }, 0);

  const selectedCount = Object.values(selectedQuantities).reduce((a, b) => a + b, 0);

  // Redactar mensaje para WhatsApp con el resumen de la cotización
  const handleSendQuoteWhatsApp = () => {
    trackContactEvent();
    const itemsList = allRateItems
      .filter((item) => (selectedQuantities[item.id] || 0) > 0)
      .map(
        (item) =>
          `• ${selectedQuantities[item.id]}x ${item.name} (${(
            item.priceCop * selectedQuantities[item.id]
          ).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })})`
      )
      .join("\n");

    const message = `¡Hola CCCTN! He preparado la siguiente cotización estimada desde su Media Kit Oficial 2026:

${itemsList || "• Sin ítems seleccionados"}

Total Estimado: ${totalEstimatedCop.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    })} COP (antes de IVA)

Por favor confírmenme disponibilidad en su calendario editorial y requerimientos técnicos para iniciar.`;

    window.open(
      `${siteConfig.brand.whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F6F3EC] min-h-screen pt-24 pb-20">
      {/* Botón superior Volver a la Landing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <button
          onClick={() => {
            onNavigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="btn-touch inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-[#F2CD28] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Página Principal</span>
        </button>
      </div>

      {/* 1. HERO MEDIA KIT */}
      <section className="py-12 border-b border-[#283B7B]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#F2CD28]/50 text-[#F2CD28] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Media Kit Comercial 2026 · Tarifas Oficiales</span>
          </div>

          <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#F6F3EC] max-w-4xl mx-auto leading-tight">
            La vitrina digital más grande del Caballo Criollo Colombiano
          </h1>

          <div className="max-w-xs mx-auto my-6">
            <TricolorBar height="h-2" />
          </div>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Criaderos, propietarios, jueces, médicos veterinarios y aficionados de todo el país siguen a CCCTN. Una comunidad de más de{" "}
            <strong className="text-[#F2CD28]">{siteConfig.metrics.totalCommunity} seguidores</strong> en 4 plataformas, apasionados por los 4 andares de nuestra raza patria:
          </p>

          {/* Los 4 Andares de la raza */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {siteConfig.brand.andares.map((andar) => (
              <div
                key={andar}
                className="bg-[#141414] border border-neutral-800 rounded-xl p-3 text-center"
              >
                <span className="font-anton text-sm uppercase tracking-wide text-[#F2CD28]">
                  {andar}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. AUDIENCIA & MÉTRICAS PÚBLICAS */}
      <section className="py-16 bg-[#0E0E0E] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
              Tráfico & Alcance Orgánico
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide text-white mt-1">
              Métricas Consolidadas de Audiencia
            </h2>
            <p className="text-xs text-neutral-400 mt-2 italic">
              "Cifras públicas revisadas el 25 de septiembre de 2026; alcance y demografía bajo solicitud."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
                TikTok Viral
              </span>
              <div className="font-anton text-5xl text-white tracking-tight my-2">
                71,2 M
              </div>
              <p className="text-xs text-neutral-300">
                Reproducciones alcanzadas en un solo video insignia de TikTok.
              </p>
            </div>

            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
                Interacciones TikTok
              </span>
              <div className="font-anton text-5xl text-[#F2CD28] tracking-tight my-2">
                3,9 M
              </div>
              <p className="text-xs text-neutral-300">
                "Me gusta" acumulados en la cuenta oficial @ccctesoronacional.
              </p>
            </div>

            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 text-center card-hover-gold">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
                Biblioteca YouTube
              </span>
              <div className="font-anton text-5xl text-white tracking-tight my-2">
                2.600+
              </div>
              <p className="text-xs text-neutral-300">
                Videos publicados de ferias, ejemplares campeones y coberturas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ AHORA: DATOS MACRO DE LA INDUSTRIA EQUINA */}
      <section className="py-16 bg-[#0B0B0B] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
              Contexto Económico
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-white mt-1">
              ¿Por Qué Ahora? El Momento del Negocio Equino
            </h2>
            <p className="text-sm text-neutral-300 mt-3 font-light leading-relaxed">
              El sector del Caballo Criollo Colombiano atraviesa uno de sus momentos más dinámicos de formalización y comercio digital en la historia reciente de la nación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#141414] border-l-2 border-[#F2CD28] p-5 rounded-r-xl">
              <div className="font-anton text-3xl text-[#F2CD28]">
                {siteConfig.industryData.gdpImpact}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                {siteConfig.industryData.gdpDescription}
              </p>
            </div>

            <div className="bg-[#141414] border-l-2 border-[#F2CD28] p-5 rounded-r-xl">
              <div className="font-anton text-3xl text-white">
                {siteConfig.industryData.activeOwners}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                {siteConfig.industryData.ownersDescription}
              </p>
            </div>

            <div className="bg-[#141414] border-l-2 border-[#F2CD28] p-5 rounded-r-xl">
              <div className="font-anton text-3xl text-white">
                {siteConfig.industryData.registeredHorses}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                {siteConfig.industryData.registeredHorsesDescription}
              </p>
            </div>

            <div className="bg-[#141414] border-l-2 border-[#283B7B] p-5 rounded-r-xl">
              <div className="font-anton text-3xl text-white">
                {siteConfig.industryData.yearlyFairs}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                {siteConfig.industryData.fairsDescription}
              </p>
            </div>

            <div className="bg-[#141414] border-l-2 border-[#283B7B] p-5 rounded-r-xl">
              <div className="font-anton text-3xl text-[#F2CD28]">
                {siteConfig.industryData.recordTransfers}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                {siteConfig.industryData.transfersDescription}
              </p>
            </div>

            <div className="bg-[#141414] border-l-2 border-[#E81C24] p-5 rounded-r-xl">
              <div className="font-anton text-3xl text-white">
                {siteConfig.industryData.jobsCreated}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                {siteConfig.industryData.jobsDescription}
              </p>
            </div>
          </div>

          {/* Fuentes Enlazadas */}
          <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <span className="font-semibold text-neutral-300">Fuentes enlazadas:</span>
            {siteConfig.industryData.sources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2CD28] hover:underline flex items-center gap-1"
              >
                <span>{s.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARA QUIÉN */}
      <section className="py-16 bg-[#0E0E0E] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
              Segmentación Comercial
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide text-white mt-1">
              ¿A Quién Dirigimos Su Mensaje?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-anton text-xl uppercase tracking-wide text-[#F2CD28] mb-3">
                1. Criaderos y Propietarios
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Difusión de saltos, reproductores consolidados, vientres destacados, potros promesa y posicionamiento institucional del criadero en Colombia y el exterior.
              </p>
            </div>

            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-anton text-xl uppercase tracking-wide text-white mb-3">
                2. Marcas del Sector
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Alimentos concentrados, laboratorios veterinarios, talabarterías, herrerías, transporte especializado de caballos, viruta, forrajes y maquinaria agrícola.
              </p>
            </div>

            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-anton text-xl uppercase tracking-wide text-white mb-3">
                3. Marcas Fuera del Sector
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Banca privada, compañías de seguros, camionetas y concesionarios, licores premium, turismo de hacienda y proyectos de finca raíz rural y campestre.
              </p>
            </div>
          </div>

          {/* Caso Modelo de Integración: Caribe Motor Renault */}
          <div className="mt-10 bg-gradient-to-r from-[#171408] via-[#101010] to-[#121212] border-2 border-[#F2CD28] rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-black rounded-2xl p-2 border border-[#F2CD28] shrink-0 flex items-center justify-center shadow-lg">
                <img
                  src="/images/caribe-motor-logo.png"
                  alt="Caribe Motor Renault Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F2CD28] text-black font-anton text-[10px] uppercase tracking-wider">
                  <Award className="w-3 h-3 fill-black" />
                  <span>Sponsor Insigne & Caso Modelo</span>
                </div>
                <h4 className="font-anton text-2xl uppercase text-white">
                  Caribe Motor Renault · Concesionario Líder Antioquia
                </h4>
                <p className="text-xs text-neutral-300 max-w-xl">
                  <strong>Paquete activado:</strong> Patrocinador Oficial + Banner Portada + Mención en Pista + Cápsulas de Video en Criaderos. Demostración real de cómo una marca automotriz domina el segmento de remolques y transporte equino a través de CCCTN.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#cotizador");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-touch h-12 px-6 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-black font-anton text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all cursor-pointer shadow-md"
            >
              <span>Cotizar Paquete Similar</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5, 6, 7. TARIFAS REDES, EVENTOS, PLATAFORMA WEB */}
      <section className="py-16 bg-[#0B0B0B] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
              Tarifario Oficial Vigente 2026
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-white mt-1">
              Tarifas por Formato y Canal
            </h2>
            <p className="text-xs text-neutral-400 mt-2">
              Precios en pesos colombianos (COP), valores antes de IVA. Puede cotizarlos abajo.
            </p>
          </div>

          <div className="space-y-12">
            {/* 5. Tarifas Redes */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-neutral-800 pb-3">
                <Share2 className="w-5 h-5 text-[#F2CD28]" />
                <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                  Tarifas Redes Sociales (Facebook, Instagram, TikTok, YouTube)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {siteConfig.mediakitRates.social.map((rate) => (
                  <div
                    key={rate.id}
                    className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between relative group hover:border-[#F2CD28]/50 transition-all"
                  >
                    {rate.tag && (
                      <span className="absolute top-4 right-4 bg-[#E81C24] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                        {rate.tag}
                      </span>
                    )}
                    <div>
                      <h4 className="font-anton text-lg uppercase text-white tracking-wide">
                        {rate.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 mb-4">
                        {rate.format}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                      <div>
                        <span className="font-anton text-2xl text-[#F2CD28]">
                          ${rate.priceCop.toLocaleString("es-CO")}
                        </span>
                        <span className="text-[10px] text-neutral-400 block uppercase">
                          COP / unidad
                        </span>
                      </div>
                      <button
                        onClick={() => updateQuantity(rate.id, 1)}
                        className="btn-touch h-10 px-3.5 rounded-xl bg-neutral-800 hover:bg-[#F2CD28] hover:text-black text-xs font-semibold text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Cotizar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Tarifas Eventos */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-neutral-800 pb-3">
                <Calendar className="w-5 h-5 text-[#F2CD28]" />
                <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                  Tarifas Eventos & Transmisiones en Directo
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteConfig.mediakitRates.events.map((rate) => (
                  <div
                    key={rate.id}
                    className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-[#F2CD28]/50 transition-all"
                  >
                    <div>
                      <h4 className="font-anton text-lg uppercase text-white tracking-wide">
                        {rate.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 mb-4">
                        {rate.format}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                      <div>
                        <span className="font-anton text-2xl text-[#F2CD28]">
                          ${rate.priceCop.toLocaleString("es-CO")}
                        </span>
                        <span className="text-[10px] text-neutral-400 block uppercase">
                          COP
                        </span>
                      </div>
                      <button
                        onClick={() => updateQuantity(rate.id, 1)}
                        className="btn-touch h-10 px-3.5 rounded-xl bg-neutral-800 hover:bg-[#F2CD28] hover:text-black text-xs font-semibold text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Cotizar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Tarifas Plataforma Web */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-neutral-800 pb-3">
                <Globe className="w-5 h-5 text-[#F2CD28]" />
                <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                  Tarifas Plataforma Web (Preventa · Tarifa Fija 12 Meses)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {siteConfig.mediakitRates.web.map((rate) => (
                  <div
                    key={rate.id}
                    className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-[#F2CD28]/50 transition-all"
                  >
                    <div>
                      <h4 className="font-anton text-lg uppercase text-white tracking-wide">
                        {rate.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 mb-4">
                        {rate.format}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                      <div>
                        <span className="font-anton text-2xl text-[#F2CD28]">
                          ${rate.priceCop.toLocaleString("es-CO")}
                        </span>
                        <span className="text-[10px] text-neutral-400 block uppercase">
                          COP / {rate.frequency}
                        </span>
                      </div>
                      <button
                        onClick={() => updateQuantity(rate.id, 1)}
                        className="btn-touch h-10 px-3.5 rounded-xl bg-neutral-800 hover:bg-[#F2CD28] hover:text-black text-xs font-semibold text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Cotizar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COTIZADOR INTERACTIVO */}
      <section id="cotizador" className="py-20 bg-[#0E0E0E] border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141414] border-2 border-[#F2CD28] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#F2CD28]/20 border border-[#F2CD28] flex items-center justify-center text-[#F2CD28]">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
                  Herramienta en Vivo
                </span>
                <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-wide text-white">
                  Cotizador Interactivo de Pauta y Medios
                </h3>
              </div>
            </div>

            <p className="text-xs text-neutral-300 mb-8">
              Ajuste las cantidades de los formatos que necesita para su campaña. El total se actualiza al instante y puede enviar el desglose exacto a nuestro equipo vía WhatsApp.
            </p>

            {/* Lista interactiva de ítems del cotizador */}
            <div className="space-y-3 mb-8">
              {allRateItems.map((item) => {
                const qty = selectedQuantities[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                      qty > 0
                        ? "bg-[#1E1B10] border-[#F2CD28]/50"
                        : "bg-neutral-900/50 border-neutral-800 opacity-70"
                    }`}
                  >
                    <div className="flex-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#F2CD28] block mb-0.5">
                        {item.category}
                      </span>
                      <h4 className="font-anton text-base uppercase text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        ${item.priceCop.toLocaleString("es-CO")} COP {item.frequency ? `/ ${item.frequency}` : ""}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 justify-end">
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2 bg-black border border-neutral-700 rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={qty === 0}
                          className="w-8 h-8 rounded bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 disabled:opacity-30 cursor-pointer"
                          aria-label={`Reducir cantidad de ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-anton text-base text-white">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 cursor-pointer"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="min-w-28 text-right">
                        <span className="font-anton text-lg text-white">
                          ${(qty * item.priceCop).toLocaleString("es-CO")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Totalizador y Botón de WhatsApp */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 block">
                  Total Estimado ({selectedCount} ítems seleccionados)
                </span>
                <div className="font-anton text-4xl sm:text-5xl text-[#F2CD28]">
                  ${totalEstimatedCop.toLocaleString("es-CO")} COP
                </div>
                <span className="text-[11px] text-neutral-400">
                  Valores antes de IVA · Vigencia 2026
                </span>
              </div>

              <button
                onClick={handleSendQuoteWhatsApp}
                className="w-full sm:w-auto btn-touch h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#25D366]/20 transition-all cursor-pointer transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Enviar Cotización a WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONDICIONES COMERCIALES */}
      <section className="py-16 bg-[#0B0B0B] border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-[#F2CD28]" />
            <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
              Condiciones Comerciales Oficiales
            </h3>
          </div>

          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
            {siteConfig.mediakitConditions.map((cond, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#283B7B]/40 text-[#F2CD28] font-anton text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#F2CD28]/20">
                  {idx + 1}
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {cond}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CIERRE: RESERVE SU ESPACIO */}
      <section className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#070707] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2CD28]/10 border border-[#F2CD28]/40 text-[#F2CD28] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Calendario 2026 Abierto</span>
          </div>

          <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white">
            Reserve Su Espacio en la Vitrina CCCTN
          </h2>

          <p className="text-base text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
            Asegure la visibilidad de su criadero o marca en las principales transmisiones y semanas temáticas del año.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                trackContactEvent();
                window.open(siteConfig.brand.whatsappUrl, "_blank", "noopener,noreferrer");
              }}
              className="w-full sm:w-auto btn-touch h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Chatear al +57 302 224 0808</span>
            </button>

            <a
              href={`mailto:${siteConfig.brand.email}`}
              className="w-full sm:w-auto btn-touch h-14 px-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-[#F6F3EC] font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F2CD28]" />
              <span>{siteConfig.brand.email}</span>
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                onNavigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs uppercase font-semibold tracking-wider text-neutral-400 hover:text-[#F2CD28] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la Landing Comercial</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
