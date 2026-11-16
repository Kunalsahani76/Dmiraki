import { useEffect, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WhatWeOfferTitle } from "./components/AboutSection";
import {
  DigitalMarketingSection,
  CustomSoftwareSection,
  IoTSection,
  WebDevSection,
} from "./components/ServiceSections";
import { StatsSection, AttentionSection, ApproachSection, ClientLogosSection } from "./components/MiddleSections";
import { DreamingBigSection, HomeFAQSection } from "./components/ContactFAQFooter";
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
import BlogPage from "./pages/BlogPage";
import AdminPage from "./pages/AdminPage";
import LegalPage from "./pages/LegalPage";
import { SeoMetadata } from "./components/SeoMetadata";

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.getElementById("root")?.scrollTo({ top: 0, left: 0, behavior: "auto" });

      document.querySelectorAll<HTMLElement>("*").forEach((element) => {
        if (element.scrollTop > 0) element.scrollTop = 0;
      });
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    const timer = window.setTimeout(resetScroll, 100);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname, key]);

  return null;
}

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
    <div className="w-full min-h-screen bg-white overflow-x-clip">
      <Navbar />

      <div className="home-page-reference w-full bg-white">
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

        {/* 10. Client logos */}
        <ClientLogosSection />

        {/* 11. Dreaming Big CTA + Contact Form */}
        <DreamingBigSection />

        {/* 12. Frequently Asked Questions */}
        <HomeFAQSection />

        {/* 13. Footer */}
        <SiteFooter homePage />
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
      <SiteFooter nonHeadingLabels />
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
      <SiteFooter nonHeadingLabels />
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
      <SiteFooter nonHeadingLabels />
    </div>
  );
}

function WebDevelopmentRoutePage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <WebDevelopmentPage />
      <SiteFooter nonHeadingLabels />
    </div>
  );
}

function ContactRoutePage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <ContactPage />
      <SiteFooter nonHeadingLabels copyrightBrand="D'Miraki" />
    </div>
  );
}

function SEORoutePage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <SEOPage />
      <SiteFooter nonHeadingLabels />
    </div>
  );
}

function LegalRoutePage({ page }: { page: "terms" | "privacy" | "disclaimer" }) {
  return (
    <div className="w-full min-h-screen bg-[#101010] overflow-x-hidden">
      <Navbar />
      <div style={{ height: "62px" }} />
      <LegalPage page={page} />
        <SiteFooter nonHeadingLabels={page === "privacy" || page === "terms" || page === "disclaimer"} copyrightBrand={page === "privacy" || page === "terms" || page === "disclaimer" ? "D'Miraki" : undefined} />
    </div>
  );
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <SeoMetadata />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
      <Route path="/custom-software" element={<CustomSoftwarePage />} />
      <Route path="/iot-solutions" element={<IotPage />} />
      <Route path="/iot" element={<Navigate to="/iot-solutions" replace />} />
      <Route path="/web-development" element={<WebDevelopmentRoutePage />} />
      <Route path="/contact" element={<ContactRoutePage />} />
      <Route path="/seo-services" element={<SEORoutePage />} />
      <Route path="/seo" element={<Navigate to="/seo-services" replace />} />
      <Route path="/terms-and-conditions" element={<LegalRoutePage page="terms" />} />
      <Route path="/privacy-policy" element={<LegalRoutePage page="privacy" />} />
      <Route path="/disclaimer" element={<LegalRoutePage page="disclaimer" />} />
      <Route path="/blogs" element={<><Navbar /><div style={{ height: "62px" }} /><BlogPage /><SiteFooter /></>} />
      <Route path="/blogs/:slug" element={<><Navbar /><div style={{ height: "62px" }} /><BlogPage /><SiteFooter /></>} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/blog" element={<AdminPage />} />
    </Routes>
    </>
  );
}
