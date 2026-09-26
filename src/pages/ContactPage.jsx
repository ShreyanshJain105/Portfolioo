import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Briefcase, Layers, Building2, CheckCircle2, Copy, Check } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ScrollReveal from "../components/ui/ScrollReveal";

const inquiryTypes = [
  {
    id: "fulltime",
    label: "Full-Time Role",
    subtitle: "QA Engineer / SDET",
    icon: Briefcase,
    subject: "Hiring Inquiry: Full-Time QA / SDET Role",
    placeholder: "Hi Shreyansh, We are looking for a QA Engineer / SDET to join our engineering team...",
  },
  {
    id: "freelance",
    label: "Freelance / Contract",
    subtitle: "Web / Mobile / API QA",
    icon: Layers,
    subject: "Contract QA Project Inquiry",
    placeholder: "Hi Shreyansh, We have a project that needs comprehensive QA testing...",
  },
  {
    id: "agency",
    label: "Agency Partnership",
    subtitle: "Sprint QA Support",
    icon: Building2,
    subject: "Agency QA Partnership Inquiry",
    placeholder: "Hi Shreyansh, We are a development agency looking for a reliable QA partner...",
  },
  {
    id: "audit",
    label: "Testing Audit",
    subtitle: "Pre-Launch Quality Check",
    icon: CheckCircle2,
    subject: "Pre-Launch Testing Audit Request",
    placeholder: "Hi Shreyansh, We are preparing to launch and need a complete quality audit...",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shreyanshjainwork12@gmail.com",
    href: "mailto:shreyanshjainwork12@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 88753 63677",
    href: "https://wa.me/918875363677",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, Rajasthan, India",
    subvalue: "Available Remote & On-Site",
    href: null,
  },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState(inquiryTypes[0]);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreyanshjainwork12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:shreyanshjainwork12@gmail.com?subject=${encodeURIComponent(
      `[${selectedType.label}] ${name ? name + " - " : ""}${selectedType.subject}`
    )}&body=${encodeURIComponent(
      `Inquiry Type: ${selectedType.label}\nFrom: ${name || "Client"} (${email || "Not specified"})\n\nMessage:\n${message || selectedType.placeholder}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-tag inline-flex mb-4">Contact</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-black tracking-[-0.05em] leading-[1.02] mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            Let's Build{" "}
            <span className="gradient-text">Quality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you're hiring a QA Engineer, need a contract testing partner, or want a pre-launch quality audit — let's connect.
          </motion.p>
        </div>

        {/* Inquiry Type Selector */}
        <ScrollReveal>
          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-center mb-4" style={{ color: "var(--text-muted)" }}>
              Select Your Inquiry Type
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {inquiryTypes.map((type) => {
                const isSelected = selectedType.id === type.id;
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className="p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col gap-3"
                    style={{
                      backgroundColor: isSelected ? "rgba(124,58,237,0.08)" : "var(--bg-card)",
                      borderColor: isSelected ? "rgba(124,58,237,0.4)" : "var(--border-subtle)",
                      boxShadow: isSelected ? "0 0 20px rgba(124,58,237,0.1)" : "none",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="p-2 rounded-xl"
                        style={{
                          backgroundColor: isSelected ? "rgba(124,58,237,0.2)" : "var(--bg-elevated)",
                        }}
                      >
                        <Icon size={16} style={{ color: isSelected ? "#a78bfa" : "var(--text-muted)" }} />
                      </div>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{type.label}</p>
                      <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>{type.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Form + Contact Info */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div
                className="p-7 rounded-3xl border h-full"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-purple-400">Direct Inquiry</p>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>{selectedType.label}</h3>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
                  >
                    {selectedType.subtitle}
                  </span>
                </div>

                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (TechCorp)"
                      className="input-qa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="input-qa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                      Project or Role Details
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={selectedType.placeholder}
                      className="input-qa resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-2">
                    <Send size={15} />
                    <span>Send {selectedType.label} Inquiry</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactInfo.map((info) => (
              <ScrollReveal key={info.label}>
                <div
                  className="p-5 rounded-2xl border flex items-center gap-4 transition-all hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <info.icon size={18} className="text-purple-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-bold hover:text-purple-400 transition-colors block"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{info.value}</p>
                    )}
                    {info.subvalue && (
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{info.subvalue}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Copy Email */}
            <ScrollReveal>
              <div
                className="p-5 rounded-2xl border flex items-center justify-between"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Quick Copy</p>
                  <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>shreyanshjainwork12@gmail.com</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal>
              <div
                className="p-5 rounded-2xl border"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
              >
                <p className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>Connect</p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/shreyanshjain1206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex-1 justify-center"
                    style={{
                      backgroundColor: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      color: "#60a5fa",
                    }}
                  >
                    <FaLinkedin size={14} /> LinkedIn
                  </a>
                  <a
                    href="https://wa.me/918875363677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex-1 justify-center"
                    style={{
                      backgroundColor: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.25)",
                      color: "#4ade80",
                    }}
                  >
                    <FaWhatsapp size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
