import { useEffect } from "react";
import { useLocation } from "react-router";

const siteUrl = "https://www.dmiraki.com";
const indexableRobots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const pageMetadata: Record<string, { title: string; description: string; keywords?: string }> = {
  "/": {
    title: "Digital Marketing Agency in India for B2B Growth | DMiraki",
    description: "DMiraki is a Delhi NCR digital marketing agency helping businesses across India grow with SEO, performance marketing and web development. Book a free call.",
    keywords: "digital marketing agency in india, digital marketing company in india, digital marketing agency delhi ncr, performance marketing agency india, seo and web development agency, b2b digital marketing agency",
  },
  "/about": {
    title: "About DMiraki | Digital Marketing and Web Development Team",
    description: "Meet DMiraki, a Noida-based digital marketing and web development agency with 200+ projects delivered across industries. See how we work and why clients stay.",
    keywords: "dmiraki digital marketing agency, web development company noida, digital marketing company noida, website and mobile app development company, full-stack development company, seo and digital marketing company delhi ncr",
  },
  "/contact": {
    title: "Contact DMiraki | Free Digital Strategy Call, Noida India",
    description: "Talk to DMiraki about SEO, marketing or web development. Call +91 92113 41245, email info@dmiraki.com or visit our Noida office. Serving Delhi NCR and India.",
    keywords: "contact dmiraki, digital marketing agency noida contact, digital marketing agency delhi ncr, dmiraki noida, free digital strategy call, web development quote india",
  },
  "/seo-services": {
    title: "SEO Services in India: Technical, On-Page and Link Building",
    description: "Rank higher on Google India with SEO services for Delhi NCR and pan-India businesses: technical audits, on-page, content and link building. Get a free audit.",
    keywords: "seo services in india, seo company in india, seo services delhi ncr, technical seo services, on-page seo services, link building services",
  },
  "/digital-marketing": {
    title: "Digital Marketing Services in India: PPC, Social, Content",
    description: "Get digital marketing services built around leads, not vanity metrics: PPC, social media, content and branding for Indian businesses. Book a free strategy call.",
    keywords: "digital marketing services in india, digital marketing services delhi ncr, ppc management services, social media marketing services, content marketing services, performance marketing services",
  },
  "/custom-software": {
    title: "Custom Software Development Company in India | DMiraki",
    description: "Need software built around your workflow? DMiraki develops custom web and business applications for companies in Delhi NCR and across India. Get a free call.",
    keywords: "custom software development company in india, custom software development services, custom software development company delhi ncr, bespoke software development, custom web application development, enterprise software development india",
  },
  "/iot-solutions": {
    title: "IoT Solutions and Development Services in India | DMiraki",
    description: "Connect devices, dashboards and data with IoT solutions designed for Indian businesses, from sensor integration to cloud apps. Talk to our team today.",
    keywords: "iot solutions in india, iot development company india, iot solutions delhi ncr, iot app development, iot software development services, iot dashboard development",
  },
  "/web-development": {
    title: "Website Development Company in India for Business Growth",
    description: "Fast, mobile-first, SEO-ready websites built on Next.js. DMiraki builds custom business and e-commerce sites for Delhi NCR and pan-India clients. Get a quote.",
    keywords: "website development company in india, web development services india, website development company delhi ncr, custom website development, ecommerce website development, nextjs development company",
  },
  "/terms-and-conditions": { title: "Terms & Conditions | DMiraki", description: "Read the terms and conditions for using the DMiraki website and services." },
  "/privacy-policy": { title: "Privacy Policy | DMiraki", description: "Learn how DMiraki handles personal information when you use our website and services." },
  "/disclaimer": { title: "Disclaimer | DMiraki", description: "Read the DMiraki website disclaimer and information about our services." },
  "/blogs": {
    title: "DMiraki Blog: Web Development, SEO and Marketing Insights",
    description: "Practical guides on Next.js, AI in web apps, website speed, local SEO, e-commerce and web security from the DMiraki team. Read and apply them to your business.",
    keywords: "web development blog, nextjs 15 features, website performance optimization, local seo for business, ai in web applications, ecommerce website essentials",
  },
};

export function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const metadata = pageMetadata[path] ?? (path.startsWith("/blogs/")
      ? { title: "Article | DMiraki Blog", description: "Read the latest digital marketing and technology insights from DMiraki.", keywords: "" }
      : { title: "DMiraki | Digital Marketing, Software & Web Development", description: "Explore DMiraki digital marketing, software development and web services for businesses in India.", keywords: "" });

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
    if (metadata.keywords) setMeta("keywords", metadata.keywords);
    else document.head.querySelector('meta[name="keywords"]')?.remove();

    const setProperty = (property: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    const setTwitterMeta = (name: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setProperty("og:title", metadata.title);
    setProperty("og:description", metadata.description);
    setProperty("og:url", `${siteUrl}${path === "/" ? "/" : path}`);
    setTwitterMeta("twitter:title", metadata.title);
    setTwitterMeta("twitter:description", metadata.description);
    const isAdminRoute = path === "/admin" || path === "/blog";
    setMeta("robots", isAdminRoute ? "noindex, nofollow, noarchive" : indexableRobots);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    if (isAdminRoute) canonical.remove();
    else canonical.href = `${siteUrl}${path === "/" ? "/" : path}`;
  }, [pathname]);

  return null;
}
