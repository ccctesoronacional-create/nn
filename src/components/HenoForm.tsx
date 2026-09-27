/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, MessageCircle, AlertCircle, CheckCircle2, Loader2, Check } from "lucide-react";
import { HenoLeadData, submitLead } from "../utils/leadCapture";
import { siteConfig } from "../config/siteConfig";

export const HenoForm: React.FC = () => {
  const [formData, setFormData] = useState<HenoLeadData>({
    nombre: "",
    ciudad: "",
    celular: "",
    caballos: "",
    productos: ["Heno"],
    autorizacion_datos: false,
    website: "", // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleProductToggle = (prod: string) => {
    if (formData.productos.includes(prod)) {
      setFormData({
        ...formData,
        productos: formData.productos.filter((p) => p !== prod),
      });
    } else {
      setFormData({
        ...formData,
        productos: [...formData.productos, prod],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!formData.nombre.trim() || !formData.ciudad.trim() || !formData.celular.trim()) {
      setValidationError("Por favor complete su nombre, ciudad o municipio y celular.");
      return;
    }

    if (formData.productos.length === 0) {
      setValidationError("Por favor seleccione al menos un producto de su interés.");
      return;
    }

    if (!formData.autorizacion_datos) {
      setValidationError("Debe autorizar el tratamiento de datos de acuerdo con la Ley 1581 de 2012.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    const result = await submitLead("heno", formData);
    setLoading(false);
    setWhatsAppUrl(result.whatsAppUrl);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#111111] border border-[#283B7B]/50 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
          Registro Sin Compromiso
        </span>
        <h3 className="font-anton text-2xl uppercase tracking-wide text-[#F6F3EC] mt-1">
          Unirse a la Compra Colectiva de Insumos
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Reunimos pedidos por zona para negociar volumen y tarifas con productores. Registrarse no le obliga a comprar.
        </p>
      </div>

      {status === "success" && (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 bg-[#25D366]/20 border border-[#25D366] rounded-full flex items-center justify-center mx-auto text-[#25D366]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-anton text-xl text-[#F6F3EC]">
            ¡Registro de Compra Colectiva Recibido!
          </h4>
          <p className="text-xs text-neutral-300 max-w-sm mx-auto">
            Le enviaremos la propuesta y precios consolidados para su zona ({formData.ciudad}) directamente a su WhatsApp.
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
            Para coordinar los despachos de insumos de su pesebrera de inmediato, envíenos sus datos por WhatsApp comercial.
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
        <form onSubmit={handleSubmit} className="space-y-4">
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
                Nombre del criador / encargado *
              </label>
              <input
                type="text"
                required
                placeholder="Ej: Carlos Mejía"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Municipio o Vereda *
              </label>
              <input
                type="text"
                required
                placeholder="Ej: Rionegro / Llanogrande"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Celular WhatsApp *
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

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Número de caballos en pesebrera
              </label>
              <input
                type="text"
                placeholder="Ej: 8 caballos"
                value={formData.caballos}
                onChange={(e) => setFormData({ ...formData, caballos: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Selección de productos requeridos */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2CD28] mb-2">
              Productos que requiere (marque todos los que apliquen):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {siteConfig.bulkProducts.map((prod) => {
                const isSelected = formData.productos.includes(prod);
                return (
                  <button
                    type="button"
                    key={prod}
                    onClick={() => handleProductToggle(prod)}
                    className={`btn-touch h-12 px-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#283B7B]/40 border-[#F2CD28] text-[#F2CD28] font-semibold"
                        : "bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <span>{prod}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center ${
                        isSelected ? "bg-[#F2CD28] text-black" : "border border-neutral-600"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
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
                <strong>Ley 1581 de 2012</strong> por parte de {siteConfig.privacyNotice.responsible} para coordinar la compra colectiva.
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
                  <span>Registrando interés...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Unirme a la Compra Colectiva</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
