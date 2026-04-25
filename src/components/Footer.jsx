import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Mail,
  Heart,
  Container,
  Rocket,
} from "lucide-react";

const quickLinks = [
  { label: "Work", id: "projects", isSection: true },
  { label: "About", id: "about", isSection: true },
  { label: "Services", id: "services", isSection: false },
  { label: "Experience", id: "experience", isSection: true },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/shreyanshjain1206", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/ShreyanshJain105", label: "GitHub" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:shreyanshjainwork12@gmail.com", label: "Email" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link) => {
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

  return (
    <footer className="bg-bg-black border-t border-zinc-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Logo & Intro */}
          <div className="max-w-xs">
            <Link to="/" className="text-2xl font-black text-white tracking-tighter mb-6 block">
              Shreyansh<span className="text-primary-600">.dev</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              Software Engineer specializing in Quality Assurance and Full-Stack development. Crafting robust digital experiences with technical precision.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link)}
                      className="text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8">Connect</h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-900">
          <div className="flex gap-4">
            <span className="badge-limitless">
              <Container size={12} className="inline mr-2" />
              Dockerized
            </span>
            <span className="badge-limitless">
              <Rocket size={12} className="inline mr-2" />
              CI/CD Enabled
            </span>
          </div>

          <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-1">
            © {new Date().getFullYear()} Shreyansh Jain. Made with <Heart size={10} className="text-primary-600 fill-primary-600" /> Jaipur, IN.
          </p>
        </div>
      </div>
    </footer>
  );
}
