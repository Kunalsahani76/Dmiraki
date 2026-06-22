import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WhatWeOfferTitle } from "./components/AboutSection";
import {
  DigitalMarketingSection,
  CustomSoftwareSection,
  IoTSection,
  WebDevSection,
} from "./components/ServiceSections";
import { StatsSection, AttentionSection, ApproachSection } from "./components/MiddleSections";
import { DreamingBigSection } from "./components/ContactFAQFooter";
import { SiteFooter } from "./components/SiteFooter";
import About from "../imports/DesktopAbout";
import DigitalMarketing from "../imports/DesktopDigitalMarketing";
import CustomSoftware from "../imports/DesktopCustomSoftware";
import IotBased from "../imports/IotBased";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import ContactPage from "./pages/ContactPage";
import SEOPage from "./pages/SEOPage";
import AboutMobilePage from "./pages/AboutMobilePage";
import { DigitalMarketingMobilePage, IotMobilePage } from "./pages/ServiceMobilePages";

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

      <div className="home-page-reference w-full bg-white overflow-x-hidden">
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

        {/* 10. Dreaming Big CTA + Contact Form */}
        <DreamingBigSection />

        {/* 11. Footer */}
        <SiteFooter />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <AboutMobilePage />
      <div className="hidden md:block">
        <About />
      </div>
      <SiteFooter />
    </div>
  );
}

function DigitalMarketingPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <DigitalMarketingMobilePage />
      <div className="hidden md:block">
        <DigitalMarketing />
      </div>
      <SiteFooter />
    </div>
  );
}

function CustomSoftwarePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <CustomSoftware />
      <SiteFooter />
    </div>
  );
}

function IotPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <IotMobilePage />
      <div className="hidden md:block">
        <IotBased />
      </div>
      <SiteFooter />
    </div>
  );
}

function WebDevelopmentRoutePage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <WebDevelopmentPage />
      <SiteFooter />
    </div>
  );
}

function ContactRoutePage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <ContactPage />
      <SiteFooter />
    </div>
  );
}

function SEORoutePage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <SEOPage />
      <SiteFooter />
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
      <Route path="/web-development" element={<WebDevelopmentRoutePage />} />
      <Route path="/contact" element={<ContactRoutePage />} />
      <Route path="/seo" element={<SEORoutePage />} />
    </Routes>
  );
}
