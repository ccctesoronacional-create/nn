/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CONFIGURACIÓN CENTRAL DE CCCTN
 * (Caballo Criollo Colombiano Tesoro Nacional)
 * Edite aquí precios, textos, canales de contacto y la URL del webhook de Google Sheets.
 */

export const siteConfig = {
  // Webhook de Google Sheets para recepción de leads.
  // Cuando cree su Google Apps Script, pegue la URL aquí (ej: "https://script.google.com/macros/s/.../exec")
  SHEETS_WEBHOOK_URL: "",

  // Datos de marca y contacto
  brand: {
    name: "CCCTN",
    fullName: "Caballo Criollo Colombiano Tesoro Nacional",
    founder: "Álvaro Acosta",
    city: "Rionegro, Antioquia",
    trajectory: "17 años de trayectoria",
    domain: "https://ccctesoronacional.co",
    email: "ccctesoronacional@gmail.com",
    whatsappPhone: "+57 302 224 0808",
    whatsappRaw: "573022240808",
    whatsappUrl: "https://wa.me/573022240808",
    slogan: "No somos una página de redes sociales, somos el punto de encuentro del gremio caballista colombiano.",
    andares: [
      "Paso Fino Colombiano",
      "Trocha Pura Colombiana",
      "Trocha y Galope",
      "Trote y Galope",
    ],
  },

  // Redes sociales oficiales con métricas verificadas
  social: {
    facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/ccctesoronacional",
      followers: "907,8 mil seguidores",
      rawCount: "907.8K",
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/ccctesoronacional",
      followers: "23,8 mil seguidores",
      rawCount: "23.8K",
    },
    tiktok: {
      name: "TikTok",
      url: "https://vm.tiktok.com/ZSVyWr85/",
      followers: "3,9 M me gusta",
      viralVideoViews: "71,2 M reproducciones",
    },
    youtube: {
      name: "YouTube",
      url: "https://www.youtube.com/@caballocriollocolombianote7622",
      videos: "2.600+ videos publicados",
    },
    linktree: {
      name: "Linktree",
      url: "https://linktr.ee/ccctesoronacional",
    },
  },

  // Sponsor Insigne & Caso de Éxito Modelo: Caribe Motor Renault
  featuredSponsor: {
    name: "Caribe Motor Renault",
    company: "Caribe Motor S.A.S.",
    brandName: "Renault Caribe Motor",
    dealerRegion: "Medellín & Antioquia",
    tagline: "La potencia y tracción que remolca a los campeones de Colombia",
    role: "Vehículo Oficial y Primer Sponsor de CCCTN",
    category: "Automotriz & Pickups 4x4",
    packageModel: "Patrocinador Oficial + Banner Portada + Integración en Criaderos",
    description: "Concesionario líder de Renault en Antioquia. Vehículos 4x4, pickups Oroch, Alaskan y SUVs diseñadas para las exigencias de fincas, potreros y transporte de remolques equinos.",
    liveMentionSample: '"Caribe Motor Renault: la fuerza y tracción confiable para llevar sus ejemplares a pista. Conozca la línea de pickups 4x4 con beneficios especiales para el gremio en caribemotor.com.co o a través del botón oficial en CCCTN."',
    deliverables: [
      {
        title: "Banner Principal en Portada y Catálogo",
        desc: "Presencia continua con enlace directo al WhatsApp de asesores comerciales de Caribe Motor.",
      },
      {
        title: "Mención en Transmisiones en Directo",
        desc: "Cuña leída por los locutores oficiales de pista en los momentos de mayor sintonía de ferias equinas.",
      },
      {
        title: "Cápsula de Video en Criaderos Fundadores",
        desc: "Contenido orgánico mostrando la potencia de la pickup remolcando vans de pesebreras reconocidas.",
      },
      {
        title: "Logo en Pantalla y Zócalo de Transmisión",
        desc: "Exposición visual repetida ante más de 1,2 M de aficionados y compradores calificados.",
      },
    ],
  },

  // Cifras destacadas
  metrics: {
    totalCommunity: "+1,2 M",
    totalCommunityLabel: "Comunidad activa en redes",
    facebookFollowers: "907,8 mil",
    facebookLabel: "Seguidores en Facebook",
    instagramFollowers: "23,8 mil",
    instagramLabel: "Seguidores en Instagram",
    topReelViews: "+533 mil",
    topReelLabel: "Vistas en un solo reel",
    tiktokViralViews: "71,2 M",
    tiktokViralLabel: "Reproducciones video TikTok",
    tiktokLikes: "3,9 M",
    tiktokLikesLabel: "Me gusta en TikTok",
    youtubeVideos: "2.600+",
    youtubeVideosLabel: "Videos en YouTube",
    yearsTrajectory: "17 Años",
    yearsTrajectoryLabel: "Construcción continua de comunidad",
  },

  // Datos macro de la industria equina (Fuentes: Fedequinas 2024, El Colombiano, Semana)
  industryData: {
    gdpImpact: "$6 billones COP",
    gdpDescription: "Movimiento económico anual estimado del sector equino colombiano.",
    activeOwners: "90.000+",
    ownersDescription: "Propietarios y criadores activos en todo el país.",
    registeredHorses: "300.000+",
    registeredHorsesDescription: "Ejemplares registrados con genealogía comprobada.",
    yearlyFairs: "129 ferias",
    fairsDescription: "En 19 departamentos de Colombia anualmente.",
    recordTransfers: "5.729",
    transfersDescription: "Traspasos de ejemplares en 2024 (récord histórico, +15,8%).",
    jobsCreated: "480.000",
    jobsDescription: "Empleos directos e indirectos generados por el sector.",
    sources: [
      { name: "Informe Fedequinas 2024", url: "https://www.fedequinas.org" },
      { name: "El Colombiano", url: "https://www.elcolombiano.com" },
      { name: "Revista Semana", url: "https://www.semana.com" },
    ],
  },

  // Paquetes para Criaderos Fundadores (Temporada)
  criaderosPackages: [
    {
      id: "bronce",
      name: "Bronce",
      priceCop: 1500000,
      priceFormatted: "$1.500.000 COP",
      featured: false,
      tag: "Arranque de vitrina",
      features: [
        "1 reel profesional de su criadero",
        "Perfil en el catálogo web oficial",
        "Difusión a comunidad caballista",
      ],
      ctaText: "Elegir Plan Bronce",
    },
    {
      id: "oro",
      name: "Oro",
      priceCop: 6000000,
      priceFormatted: "$6.000.000 COP",
      featured: true,
      tag: "Más Recomendado · Mayor Impacto",
      features: [
        "4 reels con la historia completa del criadero",
        "Vitrina en transmisión en vivo CCCTN",
        "Perfil destacado en el catálogo web",
        "Prioridad en la primera subasta en vivo",
      ],
      ctaText: "Elegir Plan Oro",
    },
    {
      id: "plata",
      name: "Plata",
      priceCop: 3000000,
      priceFormatted: "$3.000.000 COP",
      featured: false,
      tag: "Consolidación de marca",
      features: [
        "2 reels de su criadero y ejemplares",
        "Mención en transmisión en vivo",
        "Perfil en el catálogo web oficial",
      ],
      ctaText: "Elegir Plan Plata",
    },
  ],

  // Productos para compra colectiva de insumos
  bulkProducts: [
    "Heno",
    "Concentrado",
    "Sal mineralizada",
    "Electrolitos",
    "Repelente",
    "Viruta",
  ],

  // 9 Líneas de trabajo del brochure ("Lo que construimos juntos")
  constructionLines: [
    { number: 1, title: "Publicidad y difusión", desc: "La mayor vitrina digital especializada en el Caballo Criollo Colombiano." },
    { number: 2, title: "Asesoría genética", desc: "Conexión y orientación con las mejores líneas de sangre de los 4 andares." },
    { number: 3, title: "Asesoría en compra y venta", desc: "Acompañamiento imparcial para conectar oferta y demanda calificada." },
    { number: 4, title: "Mejoramiento de potreros y pastos", desc: "Buenas prácticas de manejo agronómico y forrajes para pesebreras." },
    { number: 5, title: "Productos veterinarios y agrícolas", desc: "Convenios para acceder a insumos de nutrición y salud equina de alta calidad." },
    { number: 6, title: "Transmisión de eventos y ferias", desc: "Cobertura profesional en vivo para ferias de grado A, B y festivales." },
    { number: 7, title: "La biblioteca más grande del caballo", desc: "Archivo histórico, genealogías y videos de campeones de los 4 andares." },
    { number: 8, title: "Noticias del gremio", desc: "Actualidad ferial, normatividad, remates y resultados al instante." },
    { number: 9, title: "Productos con nuestra marca", desc: "Prendas e implementos de identidad que representan el orgullo patrio." },
  ],

  // Tarifas del Media Kit 2026
  mediakitRates: {
    social: [
      { id: "post_fb", name: "Post patrocinado en Facebook", priceCop: 450000, format: "Post imagen / carrusel en Facebook con enlace", tag: null },
      { id: "reel_fbig", name: "Reel en Facebook + Instagram", priceCop: 750000, format: "Video vertical optimizado para alto alcance", tag: null },
      { id: "video_tiktok", name: "Video dedicado en TikTok", priceCop: 600000, format: "Contenido vertical dinámico orientado a viralidad", tag: null },
      { id: "stories_fbig", name: "Ráfaga de historias x3 (FB + IG)", priceCop: 250000, format: "3 historias secuenciales con sticker de enlace directo", tag: null },
      { id: "ficha_youtube", name: "Ficha o video en canal de YouTube", priceCop: 350000, format: "Publicación permanente en comunidad de 2.600+ videos", tag: null },
      { id: "pack_4plat", name: "Difusión de ejemplar en 4 plataformas", priceCop: 1400000, format: "FB + IG + TikTok + YouTube con ficha técnica", tag: "Más pedido" },
      { id: "prod_video", name: "Producción de video en su criadero", priceCop: 1500000, format: "Jornada de grabación profesional con dron y edición (desde)", tag: null },
    ],
    events: [
      { id: "patrocinador_oficial", name: "Patrocinador oficial por evento", priceCop: 3000000, format: "Presencia prioritaria en transmisiones, banners y menciones continuas" },
      { id: "copatrocinador", name: "Copatrocinador de transmisión", priceCop: 1000000, format: "Logo en rotación de pantalla y menciones en bloques" },
      { id: "transmision_feria", name: "Transmisión de su feria o remate", priceCop: 3500000, format: "Producción audiovisual multicámara en directo ($2.000.000 – $5.000.000 según duración)" },
      { id: "concurso_patrocinado", name: "Concurso o activación patrocinada", priceCop: 1500000, format: "Dinámica en redes con su producto como premio y captación de interesados" },
    ],
    web: [
      { id: "ejemplar_destacado", name: "Ejemplar destacado en catálogo", priceCop: 200000, frequency: "mes", format: "Ficha fotográfica con pedigrí y botón directo a su WhatsApp" },
      { id: "banner_catalogo", name: "Banner publicitario en catálogo web", priceCop: 600000, frequency: "mes", format: "Posición fija en página de ejemplares y criaderos" },
      { id: "banner_portada", name: "Banner en portada principal (máx. 3 marcas)", priceCop: 1000000, frequency: "mes", format: "Ubicación privilegiada en la página principal con enlace comercial" },
      { id: "plan_criadero_premium", name: "Plan Criadero Premium", priceCop: 150000, frequency: "mes", format: "Perfil oficial verificado con hasta 5 ejemplares activos" },
      { id: "plan_criadero_elite", name: "Plan Criadero Elite", priceCop: 350000, frequency: "mes", format: "Perfil ilimitado de ejemplares con rotación en carrusel principal" },
    ],
  },

  // Condiciones comerciales del Media Kit
  mediakitConditions: [
    "Precios en pesos colombianos (COP), valores antes de IVA. Vigentes para el año 2026.",
    "Forma de pago: 50% anticipo al reservar fecha en calendario y 50% antes de la publicación o transmisión.",
    "Entrega de materiales: Los artes, videos y especificaciones técnicas deben suministrarse mínimo 3 días hábiles antes.",
    "Criterio editorial: CCCTN se reserva el derecho de revisión para garantizar el alineamiento con la calidad y respeto hacia la cultura caballista.",
    "Reporte de resultados: Entrega de reporte al cierre de campaña con alcance, reproducciones, interacciones y clics generados.",
  ],

  // Preguntas frecuentes exactas
  faqs: [
    {
      q: "¿Qué incluye cada paquete?",
      a: "Cada paquete para criaderos (Oro, Plata, Bronce) incluye reels con la historia de su criadero, vitrina o menciones en transmisiones en vivo y perfil en el catálogo web oficial de CCCTN. Revise el detalle de cada plan en la sección de Criaderos Fundadores.",
    },
    {
      q: "¿Cómo se paga?",
      a: "Al enviar el formulario le escribimos por WhatsApp, confirmamos el paquete y le compartimos los medios de pago. Su cupo queda asegurado al confirmarse el pago.",
    },
    {
      q: "¿Cuándo se publica mi contenido?",
      a: "Acordamos visita o envío de material y el calendario por escrito antes de empezar.",
    },
    {
      q: "¿CCCTN vende caballos?",
      a: "No. Somos una vitrina; la compraventa se acuerda entre las partes. La subasta tendrá condiciones propias publicadas antes del evento.",
    },
    {
      q: "¿Cómo funciona la compra colectiva?",
      a: "Reunimos pedidos por zona, negociamos directamente con proveedores de heno y consumibles y le escribimos con la propuesta antes de cualquier compra.",
    },
    {
      q: "¿Cómo participo en la subasta?",
      a: "Regístrese en la sección Subasta y le avisamos primero la fecha, el catálogo y los requisitos.",
    },
  ],

  // Ley 1581 de 2012 - Tratamiento de datos personales
  privacyNotice: {
    law: "Ley 1581 de 2012 y Decreto 1377 de 2013",
    responsible: "[Razón social] · [NIT]",
    purpose: "Gestionar su solicitud comercial, contacto directo vía WhatsApp o correo electrónico, envío de cotizaciones, catálogos e información relacionada con el sector equino y actividades de CCCTN.",
    rights: "Conocer, actualizar, rectificar y suprimir sus datos personales, así como revocar la autorización otorgada.",
    exerciseRights: "Para ejercer sus derechos, puede escribirnos al correo electrónico ccctesoronacional@gmail.com o a nuestra línea de WhatsApp comercial +57 302 224 0808.",
  },
};
