import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "expertise", label: "QA Expertise", path: "/expertise" },
  { id: "domains", label: "Domains", path: "/domains" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "case-studies", label: "Case Studies", path: "/case-studies" },
  { id: "services", label: "Services", path: "/services" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggle, isDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    navigate(link.path);
  };

  const isActive = (link) => {
    if (link.path === "/") return location.pathname === "/";
    return location.pathname.startsWith(link.path);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-all duration-500 rounded-2xl border ${
        scrolled
          ? isDark
            ? "bg-black/80 backdrop-blur-xl border-white/5 shadow-2xl shadow-black/50"
            : "bg-white/85 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-black/8"
          : isDark
            ? "bg-transparent border-transparent"
            : "bg-white/60 backdrop-blur-sm border-slate-200/50"
      }`}
    >
      <div className="px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-base font-black tracking-tighter cursor-pointer group flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs font-black">
              QA
            </div>
            <span style={{ color: "var(--text-primary)" }}>Shreyansh</span>
            <span className="text-purple-500 group-hover:text-purple-400 transition-colors">.dev</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`relative px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 rounded-lg cursor-pointer ${
                  isActive(link)
                    ? "text-purple-400"
                    : isDark
                      ? "text-zinc-500 hover:text-white"
                      : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
                {isActive(link) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-purple-600/10 border border-purple-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border ${
                isDark
                  ? "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-purple-500/40 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:border-purple-400/50 hover:text-slate-900"
              }`}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1"
                  >
                    <Moon size={13} className="text-purple-400" />
                    <span className="hidden sm:inline">Dark</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1"
                  >
                    <Sun size={13} className="text-amber-500" />
                    <span className="hidden sm:inline">Light</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg cursor-pointer transition-colors ${
                isDark ? "text-white hover:bg-zinc-900" : "text-slate-900 hover:bg-slate-100"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`border-t overflow-hidden lg:hidden ${
              isDark ? "border-zinc-800/60" : "border-slate-200/60"
            }`}
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`px-3 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer text-left ${
                    isActive(link)
                      ? "bg-purple-600/10 border border-purple-500/20 text-purple-400"
                      : isDark
                        ? "text-zinc-500 hover:text-white hover:bg-zinc-900/80 border border-transparent"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
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
