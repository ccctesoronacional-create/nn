/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LandingPage } from "./pages/LandingPage";
import { MediaKitPage } from "./pages/MediaKitPage";

export default function App() {
  // Inicializar ruta desde window.location.pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const p = window.location.pathname;
      return p === "/mediakit" ? "/mediakit" : "/";
    }
    return "/";
  });

  // Manejar navegación interna limpia sin recarga
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
      // Actualizar título de la pestaña según la ruta
      if (path === "/mediakit") {
        document.title = "Media Kit 2026 & Tarifas · CCCTN Tesoro Nacional";
      } else {
        document.title = "CCCTN · La vitrina más grande del caballo criollo colombiano";
      }
    }
  };

  // Escuchar botón atrás / adelante del navegador
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname === "/mediakit" ? "/mediakit" : "/";
      setCurrentPath(path);
      if (path === "/mediakit") {
        document.title = "Media Kit 2026 & Tarifas · CCCTN Tesoro Nacional";
      } else {
        document.title = "CCCTN · La vitrina más grande del caballo criollo colombiano";
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="bg-[#0B0B0B] text-[#F6F3EC] min-h-screen flex flex-col font-poppins selection:bg-[#F2CD28] selection:text-black">
      {/* 1. Menú fijo de navegación */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Vistas: Landing Comercial ("/") o Media Kit ("/mediakit") */}
      <div className="flex-1">
        {currentPath === "/mediakit" ? (
          <MediaKitPage onNavigate={handleNavigate} />
        ) : (
          <LandingPage onNavigate={handleNavigate} />
        )}
      </div>

      {/* 10. Pie de página institucional */}
      <Footer onNavigate={handleNavigate} />

      {/* 11. Botón flotante de WhatsApp permanente */}
      <FloatingWhatsApp />
    </div>
  );
}
