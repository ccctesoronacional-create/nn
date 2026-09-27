/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Copy,
  Check,
  Mail,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { TricolorBar } from "./TricolorBar";
import { trackContactEvent } from "../utils/leadCapture";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.brand.whatsappPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppClick = () => {
    trackContactEvent();
    window.open(siteConfig.brand.whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contacto" className="bg-[#070707] text-[#F6F3EC] border-t border-[#283B7B]/30 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del footer con Logo y Frase del Brochure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-black/60 rounded-xl p-1.5 border border-[#F2CD28]/30 flex items-center justify-center">
                <img
                  src="/images/logo-icon.png"
                  alt="CCCTN Tesoro Nacional Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(242,205,40,0.3)]"
                />
              </div>
              <div>
                <h3 className="font-anton text-3xl tracking-wider text-[#F2CD28] leading-none">
                  CCCTN
                </h3>
                <p className="font-anton text-sm tracking-widest text-[#F6F3EC] uppercase">
                  Tesoro Nacional
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {siteConfig.brand.city} · {siteConfig.brand.trajectory}
                </p>
              </div>
            </div>

            {/* Frase oficial del brochure */}
            <blockquote className="border-l-2 border-[#F2CD28] pl-4 text-base italic text-neutral-300 font-light leading-relaxed bg-[#111111]/60 py-2 pr-3 rounded-r-lg">
              "{siteConfig.brand.slogan}"
            </blockquote>

            <p className="text-xs text-neutral-400">
              Fundador: <strong className="text-neutral-200">{siteConfig.brand.founder}</strong>. Ecosistema digital especializado en los cuatro andares del Caballo Criollo Colombiano.
            </p>
          </div>

          {/* Contacto comercial directo */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-anton text-lg uppercase tracking-wider text-[#F2CD28]">
              Contacto Comercial Directo
            </h4>
            <p className="text-sm text-neutral-300">
              Atención prioritaria a criaderos, hacendados y directores de marca:
            </p>

            {/* WhatsApp con botón copiar */}
            <div className="bg-[#121212] border border-neutral-800 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-mono font-medium text-[#F6F3EC]">
                    {siteConfig.brand.whatsappPhone}
                  </span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="btn-touch px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copiar número de WhatsApp"
                  aria-label="Copiar número de WhatsApp"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#25D366]" />
                      <span className="text-[#25D366]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full btn-touch h-12 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Abrir chat de WhatsApp</span>
              </button>
            </div>

            {/* Correo */}
            <div className="flex items-center gap-3 text-sm text-neutral-300 pt-1">
              <Mail className="w-4 h-4 text-[#F2CD28] shrink-0" />
              <a
                href={`mailto:${siteConfig.brand.email}`}
                className="hover:text-[#F2CD28] transition-colors underline decoration-neutral-700 hover:decoration-[#F2CD28]"
              >
                {siteConfig.brand.email}
              </a>
            </div>
          </div>

          {/* Redes Oficiales y Media Kit */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-anton text-lg uppercase tracking-wider text-[#F2CD28]">
              Comunidad & Medios
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#F2CD28] flex items-center justify-between group"
                >
                  <span>Facebook ({siteConfig.social.facebook.followers})</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#F2CD28] flex items-center justify-between group"
                >
                  <span>Instagram ({siteConfig.social.instagram.followers})</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#F2CD28] flex items-center justify-between group"
                >
                  <span>TikTok (Viral 71,2 M)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#F2CD28] flex items-center justify-between group"
                >
                  <span>YouTube (2.600+ videos)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linktree.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#F2CD28] flex items-center justify-between group"
                >
                  <span>Linktree oficial</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate("/mediakit");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full btn-touch h-12 rounded-lg border border-[#F2CD28] text-[#F2CD28] hover:bg-[#F2CD28] hover:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Ver Media Kit Oficial 2026</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Aviso Legal de Protección de Datos (Ley 1581 de 2012) */}
        <div className="py-8 text-xs text-neutral-400 space-y-2.5">
          <div className="flex items-center gap-2 text-neutral-300 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#F2CD28]" />
            <span>Tratamiento de Datos Personales · {siteConfig.privacyNotice.law}</span>
          </div>
          <p className="leading-relaxed">
            <strong>Responsable:</strong> {siteConfig.privacyNotice.responsible}.
          </p>
          <p className="leading-relaxed">
            <strong>Finalidad:</strong> {siteConfig.privacyNotice.purpose}
          </p>
          <p className="leading-relaxed">
            <strong>Derechos del titular:</strong> {siteConfig.privacyNotice.rights}
          </p>
          <p className="leading-relaxed">
            <strong>Canales para ejercerlos:</strong> {siteConfig.privacyNotice.exerciseRights}
          </p>
        </div>

        {/* Derechos reservados y aviso de transparencia */}
        <div className="pt-4 pb-2 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} CCCTN · Caballo Criollo Colombiano Tesoro Nacional. Todos los derechos reservados.
          </p>
          <p className="text-neutral-400">
            Vitrina comercial independiente · Rionegro, Antioquia, Colombia.
          </p>
        </div>
      </div>

      {/* Sello visual: Franja tricolor al pie absoluto */}
      <div className="mt-8">
        <TricolorBar height="h-2" />
      </div>
    </footer>
  );
};
