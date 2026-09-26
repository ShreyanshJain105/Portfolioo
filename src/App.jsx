import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/ui/BackToTop";
import CustomCursor from "./components/ui/CustomCursor";
import Preloader from "./components/ui/Preloader";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExpertisePage from "./pages/ExpertisePage";
import DomainsPage from "./pages/DomainsPage";
import ExperiencePage from "./pages/ExperiencePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}



export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-main)", color: "var(--text-secondary)" }}>
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <CustomCursor />
            <ScrollToTop />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/expertise" element={<ExpertisePage />} />
                <Route path="/domains" element={<DomainsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-studies/:id" element={<CaseStudiesPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Legacy routes */}
                <Route path="/project/:id" element={<CaseStudiesPage />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </Router>
  );
}
