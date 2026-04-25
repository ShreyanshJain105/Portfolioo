import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navLinks = [
  { id: "about", label: "About", isSection: true },
  { id: "skills", label: "Skills", isSection: true },
  { id: "experience", label: "Experience", isSection: true },
  { id: "projects", label: "Projects", isSection: true },
  { id: "services", label: "Services", isSection: false },
  { id: "certifications", label: "Certifications", isSection: true },
  { id: "education", label: "Education", isSection: true },
  { id: "contact", label: "Contact", isSection: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(120);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    
    if (link.isSection) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${link.id}`);
    }
  };

  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 rounded-full border ${
        scrolled || !isHome
          ? "bg-bg-black/80 backdrop-blur-xl border-white/5 shadow-2xl shadow-black/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-bold tracking-tighter cursor-pointer group"
          >
            <span className="text-white">Shreyansh</span>
            <span className="text-primary-500 group-hover:text-primary-400 transition-colors">.dev</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  (link.isSection && active === link.id && isHome) || (location.pathname === `/${link.id}`)
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.label}
                {((link.isSection && active === link.id && isHome) || (location.pathname === `/${link.id}`)) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-2 md:hidden bg-bg-card border border-border-subtle rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`block w-full text-center px-4 py-4 text-sm font-bold uppercase tracking-widest rounded-2xl transition-all cursor-pointer ${
                    (link.isSection && active === link.id && isHome) || (location.pathname === `/${link.id}`)
                      ? "text-white bg-primary-600/10"
                      : "text-zinc-500 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
