import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WhatWeOfferTitle, AboutSection } from "./components/AboutSection";
import {
  DigitalMarketingSection,
  CustomSoftwareSection,
  IoTSection,
  WebDevSection,
} from "./components/ServiceSections";
import { StatsSection, AttentionSection, ApproachSection } from "./components/MiddleSections";
import {
  DreamingBigSection,
  FAQSection,
  Footer,
} from "./components/ContactFAQFooter";
import About from "../imports/DesktopAbout";
import DigitalMarketing from "../imports/DesktopDigitalMarketing";
import CustomSoftware from "../imports/DesktopCustomSoftware";
import IotBased from "../imports/IotBased";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [location.hash]);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Spacer for sticky navbar */}
      <div style={{ height: "62px" }} />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. What We Offer */}
      <WhatWeOfferTitle />

      {/* 3. Digital Marketing */}
      <DigitalMarketingSection />

      {/* 4. Custom Software Development */}
      <CustomSoftwareSection />

      {/* 5. IoT-Based Solutions */}
      <IoTSection />

      {/* 6. Web Development Services */}
      <WebDevSection />

      {/* 7. Stats Section */}
      <StatsSection />

      {/* 8. What We Pay Attention To */}
      <AttentionSection />

      {/* 9. The Approach */}
      <ApproachSection />

      {/* 10. About Section (full page scroll content) */}
      <AboutSection />

      {/* 11. Dreaming Big CTA + Contact Form */}
      <DreamingBigSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-auto">
      <Navbar />
      <div style={{ height: "62px" }} />
      <About />
    </div>
  );
}

function DigitalMarketingPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-auto">
      <Navbar />
      <div style={{ height: "62px" }} />
      <DigitalMarketing />
    </div>
  );
}

function CustomSoftwarePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-auto">
      <Navbar />
      <div style={{ height: "62px" }} />
      <CustomSoftware />
    </div>
  );
}

function IotPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-auto">
      <Navbar />
      <div style={{ height: "62px" }} />
      <IotBased />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
      <Route path="/custom-software" element={<CustomSoftwarePage />} />
      <Route path="/iot" element={<IotPage />} />
    </Routes>
  );
}
