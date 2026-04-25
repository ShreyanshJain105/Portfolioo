import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shreyanshjainwork12@gmail.com",
    href: "mailto:shreyanshjainwork12@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8875363677",
    href: "tel:+918875363677",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, Rajasthan, India",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-bg-black overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Contact" subtitle="Initiate Collaboration" />

        <div className="max-w-5xl mx-auto">
          {/* Info */}
          <ScrollReveal direction="up">
            <div className="space-y-16">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                  Let&apos;s build <br />
                  <span className="text-zinc-600">quality together.</span>
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  I&apos;m available for engineering roles and technical projects. Reach out to discuss how we can elevate your software quality.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex flex-col items-center text-center gap-4 group glass-card p-8 rounded-3xl border border-zinc-800 hover:border-primary-500/30 transition-all">
                    <div className="flex-shrink-0 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white group-hover:bg-primary-500 group-hover:text-black group-hover:border-primary-500 transition-all">
                      <info.icon size={26} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} className="text-base font-bold text-white hover:text-primary-500 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-bold text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
