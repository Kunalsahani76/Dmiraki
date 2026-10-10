import { useEffect } from "react";
import { useLocation } from "react-router";

const siteUrl = "https://www.dmiraki.com";
const indexableRobots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Digital Marketing Agency in India | SEO, Web & Branding",
    description: "DMiraki helps businesses across India grow with SEO, performance marketing, social media, branding and web development. Book a free B2B strategy session today.",
  },
  "/about": {
    title: "About DMiraki | Women-Led Digital Marketing Agency India",
    description: "Meet DMiraki, a women-led digital agency built by marketers with 15+ years in global MNCs. Learn our mission, values and how we deliver measurable growth.",
  },
  "/contact": {
    title: "Contact DMiraki | Talk to Our Digital Marketing Experts",
    description: "Contact DMiraki for SEO, web development, branding and performance marketing. Call +91 92113 41245 or email info@dmiraki.com to start your project today.",
  },
  "/seo": {
    title: "SEO Services in India | Technical, Local & Ecommerce SEO",
    description: "Grow organic leads with SEO services in India: technical audits, keyword research, local and ecommerce SEO. Request a free SEO audit from DMiraki today.",
  },
  "/digital-marketing": {
    title: "Digital Marketing Agency in India | DMiraki",
    description: "Explore digital marketing services from DMiraki, including SEO, social media, performance marketing, branding and content strategy for businesses across India.",
  },
  "/custom-software": {
    title: "Custom Software Development Company in India | DMiraki",
    description: "DMiraki builds custom software and scalable digital systems for businesses. Explore tailored software development and enterprise solutions in India.",
  },
  "/iot": {
    title: "IoT Software Development Company in India | DMiraki",
    description: "Build connected products with DMiraki IoT software development, including device software, platform integration and dashboards for businesses in India.",
  },
  "/web-development": {
    title: "Web Design & Development Company in India | DMiraki",
    description: "Get a fast, conversion-focused website from DMiraki. We build custom, responsive websites for businesses in India. Request a project consultation.",
  },
  "/terms-and-conditions": { title: "Terms & Conditions | DMiraki", description: "Read the terms and conditions for using the DMiraki website and services." },
  "/privacy-policy": { title: "Privacy Policy | DMiraki", description: "Learn how DMiraki handles personal information when you use our website and services." },
  "/disclaimer": { title: "Disclaimer | DMiraki", description: "Read the DMiraki website disclaimer and information about our services." },
  "/blogs": { title: "Digital Marketing & Technology Insights | DMiraki Blog", description: "Explore DMiraki articles on digital marketing, SEO, business, software and technology." },
};

export function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const metadata = pageMetadata[path] ?? (path.startsWith("/blogs/")
      ? { title: "Article | DMiraki Blog", description: "Read the latest digital marketing and technology insights from DMiraki." }
      : { title: "DMiraki | Digital Marketing, Software & Web Development", description: "Explore DMiraki digital marketing, software development and web services for businesses in India." });

    document.title = metadata.title;

    const setMeta = (name: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta("description", metadata.description);
    setMeta("robots", indexableRobots);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${siteUrl}${path === "/" ? "/" : path + "/"}`;
  }, [pathname]);

  return null;
}
