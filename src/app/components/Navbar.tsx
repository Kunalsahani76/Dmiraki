import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

    if (id === "custom-software") {
      navigate("/custom-software");
      return;
    }

    if (id === "iot") {
      navigate("/iot");
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#fbfbfb", borderBottom: "1px solid #000" }}
    >
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <span
            className="text-black"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "22px",
              letterSpacing: "2px",
              fontWeight: 700,
            }}
          >
            D'MIRAKI
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("hero")}
            className="text-[#a5a5a5] hover:text-black transition-colors"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px" }}
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-[#a5a5a5] hover:text-black transition-colors"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px" }}
          >
            About
          </button>
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-[#a5a5a5] hover:text-black transition-colors"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px" }}
            >
              Services
              <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white border border-black shadow-lg z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {[
                  ["Digital Marketing", "digital-marketing"],
                  ["Custom Software", "custom-software"],
                  ["IoT Solutions", "iot"],
                  ["Web Development", "web-dev"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="w-full text-left px-4 py-3 text-sm text-black hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-[#3b3b3b] px-5 py-2 text-[#3b3b3b] hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "12px" }}
          >
            Get in touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black px-6 py-4 flex flex-col gap-4">
          {[
            ["Home", "hero"],
            ["About", "about"],
            ["Digital Marketing", "digital-marketing"],
            ["Custom Software", "custom-software"],
            ["IoT Solutions", "iot"],
            ["Web Development", "web-dev"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-black hover:text-gray-600 transition-colors py-1"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
