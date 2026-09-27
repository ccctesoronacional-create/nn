/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Send, MessageCircle, AlertCircle, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";
import { CriaderoLeadData, submitLead } from "../utils/leadCapture";
import { siteConfig } from "../config/siteConfig";

interface CriaderoModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: "Oro" | "Plata" | "Bronce";
}

export const CriaderoModalForm: React.FC<CriaderoModalFormProps> = ({
  isOpen,
  onClose,
  initialPackage = "Oro",
}) => {
  const [formData, setFormData] = useState<CriaderoLeadData>({
    nombre: "",
    criadero: "",
    ciudad: "",
    celular: "",
    correo: "",
    paquete: initialPackage,
    ejemplares: "",
    como_nos_conocio: "Instagram",
    autorizacion_datos: false,
    website: "", // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [validationError, setValidationError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!formData.nombre.trim() || !formData.celular.trim() || !formData.criadero.trim()) {
      setValidationError("Por favor complete nombre, criadero y número celular.");
      return;
    }

    if (!formData.autorizacion_datos) {
      setValidationError("Debe autorizar el tratamiento de datos de acuerdo con la Ley 1581 de 2012.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    const result = await submitLead("criadero", formData);
    setLoading(false);
    setWhatsAppUrl(result.whatsAppUrl);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#121212] border border-[#F2CD28]/40 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Cabecera del modal */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between sticky top-0 bg-[#121212] z-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#F2CD28]">
              Temporada de Criaderos Fundadores
            </span>
            <h3 className="font-anton text-2xl uppercase tracking-wide text-[#F6F3EC] mt-1">
              Registro de Criadero · Plan {formData.paquete}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Estado: Éxito */}
        {status === "success" && (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#25D366]/20 border border-[#25D366] rounded-full flex items-center justify-center mx-auto text-[#25D366]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-anton text-2xl text-[#F6F3EC]">
              ¡Solicitud Recibida con Éxito!
            </h4>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Nos comunicaremos a su número <strong className="text-white">{formData.celular}</strong> para confirmar el plan {formData.paquete} y coordinar la visita y calendario.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Continuar por WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="btn-touch h-12 px-6 rounded-full bg-neutral-800 hover:bg-neutral-700 text-[#F6F3EC] font-semibold text-sm transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Estado: Error en webhook o sin conexión */}
        {status === "error" && (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#E81C24]/20 border border-[#E81C24] rounded-full flex items-center justify-center mx-auto text-[#E81C24]">
              <AlertCircle className="w-10 h-10" />
            </div>
            <h4 className="font-anton text-2xl text-[#F6F3EC]">
              No pudimos guardar su solicitud
            </h4>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Para no demorar la reserva de su cupo, por favor envíe los datos de su criadero directamente a nuestra línea de WhatsApp comercial.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Enviar por WhatsApp</span>
              </a>
              <button
                onClick={() => setStatus("idle")}
                className="btn-touch h-12 px-6 rounded-full bg-neutral-800 hover:bg-neutral-700 text-[#F6F3EC] font-semibold text-sm transition-colors cursor-pointer"
              >
                Reintentar
              </button>
            </div>
          </div>
        )}

        {/* Formulario activo */}
        {status === "idle" && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {validationError && (
              <div className="p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Campo trampa Honeypot (invisible para humanos) */}
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
                  Nombre del criadero *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Criadero La Ilusión"
                  value={formData.criadero}
                  onChange={(e) => setFormData({ ...formData, criadero: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Ciudad o Municipio *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Rionegro, Antioquia"
                  value={formData.ciudad}
                  onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
                />
              </div>

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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="criadero@ejemplo.com"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Paquete de Criadero *
                </label>
                <select
                  value={formData.paquete}
                  onChange={(e) => setFormData({ ...formData, paquete: e.target.value as any })}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
                >
                  <option value="Oro">Oro ($6.000.000 COP) - Destacado</option>
                  <option value="Plata">Plata ($3.000.000 COP)</option>
                  <option value="Bronce">Bronce ($1.500.000 COP)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Número aproximado de ejemplares
                </label>
                <input
                  type="text"
                  placeholder="Ej: 12 caballos"
                  value={formData.ejemplares}
                  onChange={(e) => setFormData({ ...formData, ejemplares: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  ¿Cómo nos conoció?
                </label>
                <select
                  value={formData.como_nos_conocio}
                  onChange={(e) => setFormData({ ...formData, como_nos_conocio: e.target.value as any })}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F6F3EC] focus:border-[#F2CD28] focus:outline-none text-sm"
                >
                  <option value="Facebook">Facebook (907,8 mil seguidores)</option>
                  <option value="Instagram">Instagram (23,8 mil)</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Recomendación de otro criadero">Recomendación de otro criadero</option>
                  <option value="Feria o evento">Feria o evento caballista</option>
                  <option value="Otro">Otro medio</option>
                </select>
              </div>
            </div>

            {/* Checkbox obligatorio Ley 1581 de 2012 */}
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
                  <strong>Ley 1581 de 2012</strong> por parte de {siteConfig.privacyNotice.responsible} para contactarme comercialmente respecto al plan de mi criadero.
                </span>
              </label>
            </div>

            {/* Botón de envío */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-touch h-14 rounded-full bg-[#F2CD28] hover:bg-[#dfbd24] text-[#0B0B0B] font-anton text-lg uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#F2CD28]/20 transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando solicitud...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Confirmar Cupo de Criadero</span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-neutral-400 mt-2">
                Su cupo queda asegurado al confirmarse el pago por los canales oficiales.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
