/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * UTILIDAD DE CAPTURA DE LEADS Y COMUNICACIÓN WHATSAPP
 * CCCTN - Caballo Criollo Colombiano Tesoro Nacional
 */

import { siteConfig } from "../config/siteConfig";

// Tipado de formularios exactos
export interface CriaderoLeadData {
  nombre: string;
  criadero: string;
  ciudad: string;
  celular: string;
  correo: string;
  paquete: "Oro" | "Plata" | "Bronce";
  ejemplares: string;
  como_nos_conocio:
    | "Facebook"
    | "Instagram"
    | "WhatsApp"
    | "Recomendación de otro criadero"
    | "Feria o evento"
    | "Otro";
  autorizacion_datos: boolean;
  website: string; // Honeypot
}

export interface MarcaLeadData {
  nombre: string;
  empresa: string;
  cargo: string;
  celular: string;
  correo: string;
  promocionar: string;
  autorizacion_datos: boolean;
  website: string; // Honeypot
}

export interface HenoLeadData {
  nombre: string;
  ciudad: string;
  celular: string;
  caballos: string;
  productos: string[]; // se convierten en string separado por comas
  autorizacion_datos: boolean;
  website: string; // Honeypot
}

export interface SubastaLeadData {
  nombre: string;
  ciudad: string;
  celular: string;
  tipo_ejemplar:
    | "Paso fino colombiano"
    | "Trocha"
    | "Trocha y galope"
    | "Trote y galope"
    | "Aún no lo tengo definido";
  presupuesto:
    | "Menos de $10.000.000"
    | "Entre $10 y $30 M"
    | "Entre $30 y $60 M"
    | "Entre $60 y $100 M"
    | "Más de $100.000.000"
    | "Prefiero no decirlo";
  autorizacion_datos: boolean;
  website: string; // Honeypot
}

export type LeadType = "criadero" | "marca" | "heno" | "subasta";

// Eventos de analítica seguros
export function trackLeadEvent(): void {
  try {
    const win = window as any;
    if (typeof win.fbq === "function") {
      win.fbq("track", "Lead");
    }
    if (typeof win.gtag === "function") {
      win.gtag("event", "generate_lead", {
        event_category: "Engagement",
        event_label: "Lead Submitted",
      });
    }
  } catch {
    // Ignorar fallas silenciosamente
  }
}

export function trackContactEvent(): void {
  try {
    const win = window as any;
    if (typeof win.fbq === "function") {
      win.fbq("track", "Contact");
    }
    if (typeof win.gtag === "function") {
      win.gtag("event", "contact", {
        event_category: "Contact",
        event_label: "WhatsApp Click",
      });
    }
  } catch {
    // Ignorar fallas silenciosamente
  }
}

// Extrae parámetros UTM de la URL
function getUtmParams(): Record<string, string> {
  try {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    };
  } catch {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    };
  }
}

// Genera el texto redactado para WhatsApp según el formulario
export function buildWhatsAppMessage(
  tipo: LeadType,
  data: CriaderoLeadData | MarcaLeadData | HenoLeadData | SubastaLeadData
): string {
  if (tipo === "criadero") {
    const d = data as CriaderoLeadData;
    return `¡Hola CCCTN! Vengo de ccctesoronacional.co y quiero registrar mi criadero para la Temporada de Criaderos Fundadores:
• Nombre: ${d.nombre}
• Criadero: ${d.criadero}
• Ciudad: ${d.ciudad}
• Celular: ${d.celular}
• Correo: ${d.correo}
• Paquete seleccionado: Plan ${d.paquete}
• Número de ejemplares: ${d.ejemplares}
• ¿Cómo nos conoció?: ${d.como_nos_conocio}
Quedo atento a la confirmación de medios de pago y calendario.`;
  }

  if (tipo === "marca") {
    const d = data as MarcaLeadData;
    return `¡Hola CCCTN! Me interesa pautar con mi marca en su comunidad y transmisiones:
• Nombre: ${d.nombre}
• Empresa: ${d.empresa}
• Cargo: ${d.cargo}
• Celular: ${d.celular}
• Correo: ${d.correo}
• ¿Qué desea promocionar?: ${d.promocionar}
Solicito disponibilidad de espacios y contacto comercial.`;
  }

  if (tipo === "heno") {
    const d = data as HenoLeadData;
    const prodStr = Array.isArray(d.productos) ? d.productos.join(", ") : d.productos;
    return `¡Hola CCCTN! Quiero unirme a la compra colectiva de heno y consumibles:
• Nombre: ${d.nombre}
• Ciudad / Municipio: ${d.ciudad}
• Celular: ${d.celular}
• Número de caballos: ${d.caballos}
• Productos de interés: ${prodStr}
Entiendo que el registro no me obliga a comprar y espero la propuesta para mi zona.`;
  }

  if (tipo === "subasta") {
    const d = data as SubastaLeadData;
    return `¡Hola CCCTN! Deseo registrarme de primero para la Subasta en Vivo:
• Nombre: ${d.nombre}
• Ciudad: ${d.ciudad}
• Celular: ${d.celular}
• Andar de interés: ${d.tipo_ejemplar}
• Rango de presupuesto estimado: ${d.presupuesto}
Por favor notifíquenme la fecha, catálogo y requisitos con prioridad.`;
  }

  return `¡Hola CCCTN! Me comunico desde su sitio web ccctesoronacional.co.`;
}

// Envío a Google Sheets Webhook con respaldo transparente
export interface SubmitResult {
  success: boolean;
  whatsAppUrl: string;
  errorMessage?: string;
}

export async function submitLead(
  tipo_lead: LeadType,
  formData: Record<string, any>
): Promise<SubmitResult> {
  const message = buildWhatsAppMessage(tipo_lead, formData as any);
  const whatsAppUrl = `https://wa.me/${siteConfig.brand.whatsappRaw}?text=${encodeURIComponent(message)}`;

  // Honeypot check: si el campo website contiene algo, es un bot
  if (formData.website && formData.website.trim() !== "") {
    // Responder fingiendo éxito para no alertar al bot
    return { success: true, whatsAppUrl };
  }

  const utms = getUtmParams();
  const now = new Date().toISOString();

  // Construir cuerpo de datos exacto
  const payload: Record<string, any> = {
    tipo_lead,
    fecha_hora: now,
    autorizacion_datos: "Sí",
    ...utms,
    pagina: typeof window !== "undefined" ? window.location.href : "https://ccctesoronacional.co",
    website: "", // honeypot limpio
    ...formData,
  };

  // Si productos es array, formatear como string separado por comas
  if (Array.isArray(payload.productos)) {
    payload.productos = payload.productos.join(", ");
  }
  // Convertir booleano de autorizacion en "Sí"
  payload.autorizacion_datos = "Sí";

  // Verificar si hay webhook configurado
  if (!siteConfig.SHEETS_WEBHOOK_URL || siteConfig.SHEETS_WEBHOOK_URL.trim() === "") {
    // Sin webhook, no se considera éxito de guardado en base de datos
    return {
      success: false,
      whatsAppUrl,
      errorMessage: "No pudimos guardar su solicitud",
    };
  }

  try {
    const response = await fetch(siteConfig.SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        success: false,
        whatsAppUrl,
        errorMessage: "No pudimos guardar su solicitud",
      };
    }

    const data = await response.json();
    if (data && data.ok === true) {
      trackLeadEvent();
      return {
        success: true,
        whatsAppUrl,
      };
    } else {
      return {
        success: false,
        whatsAppUrl,
        errorMessage: "No pudimos guardar su solicitud",
      };
    }
  } catch {
    return {
      success: false,
      whatsAppUrl,
      errorMessage: "No pudimos guardar su solicitud",
    };
  }
}
