import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Heart, Container, Rocket } from "lucide-react";

const quickLinks = [
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Domains", id: "domains" },
  { label: "Experience", id: "experience" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Services", id: "services" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/shreyanshjain1206", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/ShreyanshJain105", label: "GitHub" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:shreyanshjainwork12@gmail.com", label: "Email" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t pt-24 pb-12" style={{ backgroundColor: "var(--bg-main)", borderColor: "var(--border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Logo & Intro */}
          <div className="max-w-xs">
            <Link to="/" className="text-2xl font-black tracking-tighter mb-6 block" style={{ color: "var(--text-primary)" }}>
              Shreyansh<span className="text-purple-500">.dev</span>
            </Link>
            <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--text-secondary)" }}>
              Software QA Engineer & SDET specializing in scalable quality architecture, test automation, and comprehensive AI system testing.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8" style={{ color: "var(--text-muted)" }}>
                Navigation
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => navigate(`/${link.id}`)}
                      className="text-sm font-bold transition-colors cursor-pointer hover:text-purple-400"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8" style={{ color: "var(--text-muted)" }}>
                Connect
              </h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold transition-colors flex items-center gap-2 hover:text-purple-400"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <social.icon size={16} />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex gap-4">
            <span className="badge-qa">
              <Container size={12} className="inline mr-2" />
              Agile Ready
            </span>
            <span className="badge-qa">
              <Rocket size={12} className="inline mr-2" />
              SDLC / STLC
            </span>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Shreyansh Jain. Built with <Heart size={10} className="text-purple-500 fill-purple-500 mx-1" /> in Jaipur, IN.
          </p>
        </div>
      </div>
    </footer>
  );
}
