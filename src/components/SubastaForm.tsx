/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, MessageCircle, AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { SubastaLeadData, submitLead } from "../utils/leadCapture";
import { siteConfig } from "../config/siteConfig";

export const SubastaForm: React.FC = () => {
  const [formData, setFormData] = useState<SubastaLeadData>({
    nombre: "",
    ciudad: "",
    celular: "",
    tipo_ejemplar: "Paso fino colombiano",
    presupuesto: "Entre $10 y $30 M",
    autorizacion_datos: false,
    website: "", // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!formData.nombre.trim() || !formData.ciudad.trim() || !formData.celular.trim()) {
      setValidationError("Por favor complete nombre, ciudad y número celular.");
      return;
    }

    if (!formData.autorizacion_datos) {
      setValidationError("Debe autorizar el tratamiento de datos de acuerdo con la Ley 1581 de 2012.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    const result = await submitLead("subasta", formData);
    setLoading(false);
    setWhatsAppUrl(result.whatsAppUrl);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#111111] border border-[#F2CD28]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Resplandor decorativo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2CD28]/10 blur-3xl pointer-events-none" />

      <div className="mb-6 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2CD28]/20 border border-[#F2CD28]/50 text-[#F2CD28] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Acceso Prioritario al Catálogo</span>
        </div>
        <h3 className="font-anton text-2xl uppercase tracking-wide text-[#F6F3EC]">
          Registro de Interés · Subasta en Vivo CCCTN
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Regístrese y le avisamos primero la fecha, el catálogo y los requisitos antes de la apertura pública.
        </p>
      </div>

      {status === "success" && (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 bg-[#25D366]/20 border border-[#25D366] rounded-full flex items-center justify-center mx-auto text-[#25D366]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-anton text-xl text-[#F6F3EC]">
            ¡Registro para Subasta Confirmado!
          </h4>
          <p className="text-xs text-neutral-300 max-w-sm mx-auto">
            Le notificaremos de primero tan pronto publiquemos los lotes de ejemplares y la fecha oficial de la subasta.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Continuar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 bg-[#E81C24]/20 border border-[#E81C24] rounded-full flex items-center justify-center mx-auto text-[#E81C24]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h4 className="font-anton text-xl text-[#F6F3EC]">
            No pudimos guardar su solicitud
          </h4>
          <p className="text-xs text-neutral-300 max-w-sm mx-auto">
            Para asegurar su notificación prioritaria del catálogo de subasta, regístrese directamente a través de nuestro WhatsApp oficial.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Enviar por WhatsApp</span>
            </a>
            <button
              onClick={() => setStatus("idle")}
              className="btn-touch h-12 px-5 rounded-full bg-neutral-800 text-xs text-neutral-200 cursor-pointer"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}

      {status === "idle" && (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {validationError && (
            <div className="p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ej: Álvaro Acosta"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Ciudad o Departamento *
              </label>
              <input
                type="text"
                required
                placeholder="Ej: Medellín / Antioquia"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
              Celular WhatsApp para notificación *
            </label>
            <input
              type="tel"
              required
              placeholder="Ej: 302 224 0808"
              value={formData.celular}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
              className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Andar o tipo de ejemplar de interés *
              </label>
              <select
                value={formData.tipo_ejemplar}
                onChange={(e) => setFormData({ ...formData, tipo_ejemplar: e.target.value as any })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              >
                <option value="Paso fino colombiano">Paso Fino Colombiano</option>
                <option value="Trocha">Trocha Pura</option>
                <option value="Trocha y galope">Trocha y Galope</option>
                <option value="Trote y galope">Trote y Galope</option>
                <option value="Aún no lo tengo definido">Aún no lo tengo definido</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Rango de presupuesto estimado *
              </label>
              <select
                value={formData.presupuesto}
                onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value as any })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              >
                <option value="Menos de $10.000.000">Menos de $10.000.000 COP</option>
                <option value="Entre $10 y $30 M">Entre $10 y $30 Millones</option>
                <option value="Entre $30 y $60 M">Entre $30 y $60 Millones</option>
                <option value="Entre $60 y $100 M">Entre $60 y $100 Millones</option>
                <option value="Más de $100.000.000">Más de $100.000.000 COP</option>
                <option value="Prefiero no decirlo">Prefiero no decirlo</option>
              </select>
            </div>
          </div>

          {/* Autorización datos */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={formData.autorizacion_datos}
                onChange={(e) => setFormData({ ...formData, autorizacion_datos: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-neutral-600 bg-neutral-800 text-[#F2CD28] focus:ring-[#F2CD28]"
              />
              <span className="text-xs text-neutral-300 group-hover:text-white leading-relaxed">
                Autorizo el tratamiento de mis datos personales de acuerdo con la{" "}
                <strong>Ley 1581 de 2012</strong> por parte de {siteConfig.privacyNotice.responsible} para recibir la primicia de fechas, catálogo y condiciones de la subasta.
              </span>
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-touch h-14 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-[#0B0B0B] font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#F2CD28]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Guardando registro...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Avisarme Primero de la Subasta</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-neutral-400 mt-2">
              Las condiciones y garantías de la subasta se publicarán previamente de forma transparente.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
