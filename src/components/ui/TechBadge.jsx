import {
  SiReact,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPostman,
  SiJira,
  SiPython,
  SiJavascript,
  SiSelenium,
  SiFlask,
  SiNginx,
  SiGit,
  SiJenkins,
  SiGithubactions,
  SiZapier,
  SiN8N,
} from "react-icons/si";
import { FaJava, FaAws, FaGithub, FaMicrosoft } from "react-icons/fa";
import { SiAsana } from "react-icons/si";
import { Code, Database, Globe, Wrench, Shield, ClipboardCheck, Bug, Search, Zap, Layers, RefreshCw, Terminal, Users } from "lucide-react";

const iconMap = {
  "React.js": SiReact,
  "React": SiReact,
  "Java": FaJava,
  "Spring Boot": SiSpringboot,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Docker": SiDocker,
  "Postman": SiPostman,
  "Jira": SiJira,
  "AWS": FaAws,
  "AWS S3": FaAws,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "Selenium": SiSelenium,
  "Flask": SiFlask,
  "Nginx": SiNginx,
  "Git": SiGit,
  "Jenkins": SiJenkins,
  "GitHub Actions": SiGithubactions,
  "Zapier": SiZapier,
  "n8n": SiN8N,
  "REST APIs": Globe,
  "SQLite": Database,
  "JWT": Shield,
  "Chrome DevTools": Wrench,
  "Manual Testing": Shield,
  "Functional Testing": ClipboardCheck,
  "Regression Testing": RefreshCw,
  "API Testing": Terminal,
  "Test Case Design": ClipboardCheck,
  "Test Plan Execution": Zap,
  "Bug Reporting": Bug,
  "Defect Tracking": Search,
  "Root Cause Analysis": Search,
  "Test Automation Fundamentals": Layers,
  "Asana": SiAsana,
  "GitHub": FaGithub,
  "Microsoft Office": FaMicrosoft,
  "SDLC": Layers,
  "STLC": Layers,
  "Agile/Scrum": Users,
  "Cross-functional Collaboration": Users,
};

export default function TechBadge({ name }) {
  const Icon = iconMap[name] || Code;

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-white hover:shadow-sm hover:border-slate-300 transition-all duration-300">
      <Icon className="w-3.5 h-3.5 text-slate-500" />
      {name}
    </span>
  );
}
