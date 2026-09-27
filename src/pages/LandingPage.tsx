/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { SponsorBar } from "../components/SponsorBar";
import { MetricsSection } from "../components/MetricsSection";
import { NuestrosAliadosSection } from "../components/NuestrosAliadosSection";
import { CriaderosSection } from "../components/CriaderosSection";
import { MarcasSection } from "../components/MarcasSection";
import { HenoSection } from "../components/HenoSection";
import { SubastaSection } from "../components/SubastaSection";
import { ConstruimosJuntosSection } from "../components/ConstruimosJuntosSection";
import { FaqSection } from "../components/FaqSection";
import { CriaderoModalForm } from "../components/CriaderoModalForm";
import { MarcaModalForm } from "../components/MarcaModalForm";

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [criaderoModalOpen, setCriaderoModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<"Oro" | "Plata" | "Bronce">("Oro");
  const [marcaModalOpen, setMarcaModalOpen] = useState(false);

  const handleOpenCriadero = (paquete: "Oro" | "Plata" | "Bronce" = "Oro") => {
    setSelectedPackage(paquete);
    setCriaderoModalOpen(true);
  };

  const handleOpenMarca = () => {
    setMarcaModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      {/* 2. Hero con foto hero.webp */}
      <HeroSection
        onOpenCriadero={handleOpenCriadero}
        onOpenMarca={handleOpenMarca}
      />

      {/* Sponsor Bar Insigne: Caribe Motor Renault */}
      <SponsorBar
        onScrollToSponsor={() => {
          const el = document.querySelector("#aliados");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 3. Cifras destacadas */}
      <MetricsSection />

      {/* Nuestros Aliados · Primer Sponsor Destacado (Ejemplo de Visibilidad de Marca) */}
      <NuestrosAliadosSection
        onOpenMarca={handleOpenMarca}
        onNavigate={onNavigate}
      />

      {/* 4. Temporada de Criaderos Fundadores */}
      <CriaderosSection onSelectPackage={handleOpenCriadero} />

      {/* 5. Plan Premium para marcas (fondo azul profundo) */}
      <MarcasSection
        onOpenMarca={handleOpenMarca}
        onNavigate={onNavigate}
      />

      {/* 6. Compra colectiva de heno y consumibles */}
      <HenoSection />

      {/* 7. Próximamente: Subasta en Vivo CCCTN */}
      <SubastaSection />

      {/* 8. Lo que construimos juntos */}
      <ConstruimosJuntosSection />

      {/* 9. Preguntas frecuentes (acordeón) */}
      <FaqSection />

      {/* Modales de lead capture */}
      <CriaderoModalForm
        isOpen={criaderoModalOpen}
        onClose={() => setCriaderoModalOpen(false)}
        initialPackage={selectedPackage}
      />

      <MarcaModalForm
        isOpen={marcaModalOpen}
        onClose={() => setMarcaModalOpen(false)}
      />
    </main>
  );
};
