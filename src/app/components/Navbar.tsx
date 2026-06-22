import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import logoImage from "../../imports/Home/bf4cf617b34b1b26e10ed7fbbabad160e79fb2e8.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const serviceLinks = [
    ["DIGITAL MARKETING", "digital-marketing"],
    ["SEO", "seo"],
    ["CUSTOM SOFTWARE", "custom-software"],
    ["IOT-BASED SOLUTIONS", "iot"],
    ["WEB DEVELOPMENT SERVICES", "web-dev"],
  ];
  const servicePaths = ["/digital-marketing", "/seo", "/custom-software", "/iot", "/web-development"];
  const pathById: Record<string, string> = {
    hero: "/",
    about: "/about",
    "digital-marketing": "/digital-marketing",
    seo: "/seo",
    "custom-software": "/custom-software",
    iot: "/iot",
    "web-dev": "/web-development",
    contact: "/contact",
  };
  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname === "/about";
  const isServicesActive = servicePaths.includes(location.pathname);
  const isContactActive = location.pathname === "/contact";
  const isItemActive = (id: string) => location.pathname === pathById[id];
  const navTextClass = (active: boolean) =>
    `${active ? "text-black" : "text-[#a5a5a5]"} hover:text-black transition-colors uppercase`;
  const navItemStyle = {
    fontFamily: "'Pirulen', 'Orbitron', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "0",
    lineHeight: "24px",
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setServicesOpen(false);

    if (id === "about") {
      navigate("/about");
      return;
    }

    if (id === "digital-marketing") {
      navigate("/digital-marketing");
      return;
    }

    if (id === "seo") {
      navigate("/seo");
      return;
    }

    if (id === "custom-software") {
      navigate("/custom-software");
      return;
    }

    if (id === "iot") {
      navigate("/iot");
      return;
    }

    if (id === "web-dev") {
      navigate("/web-development");
      return;
    }

    if (id === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`site-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#fbfbfb", borderBottom: "1px solid #000" }}
    >
      <div className="w-full px-[10px] py-[12px] flex items-center justify-between">
        <div
          className="h-[38.408px] w-[118px] shrink-0 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <img alt="D'Miraki" className="h-full w-full object-cover" src={logoImage} />
        </div>

        <div className="hidden md:flex items-center justify-center gap-[16px] px-[10px]">
          <button
            onClick={() => scrollTo("hero")}
            className={navTextClass(isHomeActive)}
            style={navItemStyle}
          >
            HOME
          </button>
          <button
            onClick={() => scrollTo("about")}
            className={navTextClass(isAboutActive)}
            style={navItemStyle}
          >
            ABOUT
          </button>
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 ${navTextClass(isServicesActive)}`}
              aria-expanded={servicesOpen}
              style={navItemStyle}
            >
              SERVICES
              <ChevronDown
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                size={15}
                strokeWidth={3}
              />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-62px)] overflow-y-auto border-t border-black px-4 py-8 lg:py-[62px]"
                onMouseLeave={() => setServicesOpen(false)}
                style={{
                  background:
                    "linear-gradient(110deg, #000 0%, #050505 43%, #1a1a1a 62%, #6f6f6f 100%)",
                }}
              >
                <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center gap-x-[18px] gap-y-[22px]">
                  {serviceLinks.map(([label, id]) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`min-h-[46px] w-full max-w-[445px] border border-white/75 px-5 py-3 transition-colors hover:bg-white hover:text-black uppercase sm:w-auto sm:px-7 ${
                        isItemActive(id) ? "bg-white text-black" : "text-white"
                      }`}
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        lineHeight: "1",
                        minWidth:
                          id === "digital-marketing"
                            ? "335px"
                            : id === "custom-software"
                            ? "348px"
                            : id === "web-dev"
                            ? "445px"
                            : id === "iot"
                            ? "334px"
                            : "260px",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className={navTextClass(isContactActive)}
            style={navItemStyle}
          >
            CONTACT
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-[#5b5b5b] px-[22px] py-[9px] text-[#2b2b2b] hover:bg-black hover:text-white transition-colors uppercase"
            style={{
              fontFamily: "'Pirulen', 'Orbitron', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "0",
              lineHeight: "24px",
            }}
          >
            GET IN TOUCH
          </button>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden max-h-[calc(100vh-62px)] overflow-y-auto bg-[#fbfbfb] border-t border-black px-5 py-4 flex flex-col gap-3">
          {[
            ["HOME", "hero"],
            ["ABOUT", "about"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left hover:text-black transition-colors py-2 uppercase ${
                isItemActive(id)
                  ? "text-black"
                  : "text-[#a5a5a5]"
              }`}
              style={navItemStyle}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => setServicesOpen((value) => !value)}
            className={`flex items-center justify-between py-2 text-left uppercase ${
              isServicesActive ? "text-black" : "text-[#a5a5a5]"
            }`}
            style={navItemStyle}
          >
            SERVICES
            <ChevronDown size={18} strokeWidth={3} />
          </button>
          {servicesOpen && (
            <div className="flex flex-col gap-2 border-l border-black/30 pl-4">
              {serviceLinks.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`py-2 text-left uppercase ${isItemActive(id) ? "text-black" : "text-[#a5a5a5]"}`}
                  style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "20px" }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => scrollTo("contact")}
            className={`text-left hover:text-black transition-colors py-2 uppercase ${
              isContactActive ? "text-black" : "text-[#a5a5a5]"
            }`}
            style={navItemStyle}
          >
            CONTACT
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="mt-1 border border-[#3b3b3b] px-[20px] py-[8px] text-[#3b3b3b] uppercase"
            style={navItemStyle}
          >
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  );
}
