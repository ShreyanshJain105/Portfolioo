import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const caseStudies = [
  {
    id: "ai-voice-agent",
    num: "01",
    emoji: "🎙️",
    title: "AI Voice Agent QA",
    domain: "AI & Voice",
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.3)",
    textColor: "#a78bfa",
    accent: "#7c3aed",
    businessContext: "A B2B SaaS company integrated an AI-powered voice agent for automated customer outreach, appointment scheduling, and lead qualification. The voice agent needed to handle real-world conversation scenarios across diverse customer intents.",
    testingScope: ["Conversation flow validation", "Intent recognition accuracy", "Speech understanding edge cases", "Context retention across multi-turn conversations", "Call transfer and escalation flows", "Appointment booking and date/time validation", "Dashboard and CRM synchronization", "Negative and abusive intent handling"],
    strategy: "Designed a comprehensive voice agent testing framework covering happy paths, negative scenarios, boundary conditions, and real-world edge cases. Created test scripts simulating various customer personas and intents.",
    scenarios: [
      "Customer asks to book appointment → Agent correctly identifies intent, confirms date/time → CRM record created",
      "Customer speaks with background noise → Agent requests clarification gracefully",
      "Customer provides invalid date ('February 30th') → Agent validates and prompts for correction",
      "Customer interrupts mid-response → Agent handles interruption without losing context",
      "Abusive language detected → Agent terminates call professionally",
      "Silent call (no speech detected) → Agent prompts after timeout and terminates appropriately",
    ],
    defects: [
      "Intent misclassification when customer uses informal date expressions",
      "Context lost after 3+ conversational turns",
      "Appointment not synced to CRM when timezone differs",
      "Repeated response triggered on specific trigger phrases",
      "Call transfer failing silently with no error state",
    ],
    outcome: "Comprehensive coverage of voice agent test scenarios led to identification of critical conversation flow issues before production deployment. All defects were documented with audio transcripts and resolved.",
    tools: ["Postman (API validation)", "Jira (defect tracking)", "Manual testing (call simulation)", "CRM dashboard validation"],
  },
  {
    id: "crm-platform",
    num: "02",
    emoji: "🏢",
    title: "CRM Platform End-to-End QA",
    domain: "CRM",
    color: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.3)",
    textColor: "#34d399",
    accent: "#10b981",
    businessContext: "An enterprise CRM platform serving sales teams with lead management, AI-powered insights, WhatsApp integration, email campaigns, and real-time analytics dashboard. QA required coverage of complex multi-module workflows.",
    testingScope: ["Lead creation and lifecycle management", "Customer profile management", "Filter and search functionality", "AI insights validation", "Email campaign workflows", "WhatsApp integration", "Dashboard data accuracy", "Role-based access control", "API integration testing", "Data synchronization validation"],
    strategy: "Executed full STLC cycle with module-wise test case design, followed by cross-module integration testing. API testing was performed alongside UI testing to validate data consistency. Role-based testing covered admin, manager, and agent personas.",
    scenarios: [
      "Lead created → Qualified → Assigned → Follow-up scheduled → Converted → Dashboard updated",
      "AI insight generated → Displayed in UI → Validated against underlying data source",
      "Email campaign triggered → WhatsApp notification sent → Status synced in CRM",
      "Admin creates role restrictions → Agent attempts restricted action → Access denied correctly",
      "API creates lead → UI displays without page refresh → Count accurate on dashboard",
    ],
    defects: [
      "Lead count on dashboard mismatched API response by 4 records",
      "Filter combination (status + date range) returned incorrect results",
      "WhatsApp notification not triggered when lead updated via API",
      "AI insight displayed stale data after manual record update",
      "Role restriction bypass possible through direct API call",
    ],
    outcome: "Critical security vulnerability (role bypass) and 12+ functional defects identified. All resolved before release. Dashboard accuracy improved significantly through API-UI cross-validation.",
    tools: ["Postman", "Jira", "SQL", "Chrome DevTools", "Manual Testing"],
  },
  {
    id: "ecommerce",
    num: "03",
    emoji: "🛒",
    title: "E-commerce Application QA",
    domain: "E-commerce",
    color: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.3)",
    textColor: "#fbbf24",
    accent: "#f59e0b",
    businessContext: "A consumer e-commerce platform with product catalog, cart management, checkout, payment gateway integration, and order tracking. The platform processed hundreds of daily transactions requiring zero-defect payment flows.",
    testingScope: ["Product search and listing", "Cart management", "Checkout flow", "Payment gateway integration", "Discount code validation", "Order creation and tracking", "Inventory deduction", "Notification triggers", "Responsive UI testing", "API validation"],
    strategy: "Focused on end-to-end checkout flow testing with particular emphasis on payment edge cases, discount calculation accuracy, and inventory management. Boundary value analysis applied to quantities, prices, and discount percentages.",
    scenarios: [
      "Add product → Update quantity → Apply discount → Checkout → Payment success → Order created → Inventory decremented",
      "Apply 20% discount on ₹5000 cart → Total correctly shows ₹4000",
      "Attempt checkout with out-of-stock item → Clear error message displayed",
      "Payment failure mid-checkout → Cart preserved, user returned to checkout",
      "Order tracking status updates correctly after each fulfillment stage",
    ],
    defects: [
      "Critical: Discount calculation applied 10% instead of 20% for specific SKU combinations",
      "Out-of-stock item could be added to cart and checked out",
      "Payment failure caused duplicate order creation in rare race condition",
      "Discount code accepted even after expiry date",
      "Inventory not decremented immediately — sync delay of 30+ seconds",
    ],
    outcome: "Critical checkout defect identified that would have caused financial impact. Race condition in payment processing discovered and fixed. Checkout success rate improved post-release.",
    tools: ["Postman", "Jira", "Chrome DevTools", "SQL", "Manual Testing"],
  },
  {
    id: "chatbot",
    num: "04",
    emoji: "💬",
    title: "AI Recruitment Chatbot QA",
    domain: "Chatbots & AI",
    color: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
    textColor: "#22d3ee",
    accent: "#06b6d4",
    businessContext: "An AI-powered recruitment chatbot handling candidate screening, job application flows, and automated qualification — integrated with ATS and CRM systems. The chatbot needed to maintain conversational context across multi-turn interactions.",
    testingScope: ["Conversation flow accuracy", "Context retention testing", "Context switching scenarios", "Intent recognition", "Duplicate response detection", "AI response quality", "Authentication flow", "Candidate filtering accuracy", "API integration", "Error and timeout handling"],
    strategy: "Scripted multi-turn conversation scenarios covering diverse candidate intents. Tested context boundaries, negative inputs, off-topic queries, and rapid context switching. Validated AI responses against expected qualification logic.",
    scenarios: [
      "Candidate asks about job → Chatbot collects details → Qualifies candidate → Passes to ATS",
      "Mid-conversation topic switch → Chatbot handles gracefully without losing prior context",
      "User submits 5 messages rapidly → No duplicate responses triggered",
      "Offensive input → Bot responds professionally and continues appropriately",
      "Authentication token expires during conversation → Session handled gracefully",
    ],
    defects: [
      "Context lost after 3 consecutive messages — bot resets to initial state",
      "Duplicate responses triggered when user typed quickly",
      "Candidate filter incorrectly qualified candidates without required experience",
      "Bot failed to ask follow-up question when user gave ambiguous answer",
      "API timeout not handled — bot showed blank response for 30+ seconds",
    ],
    outcome: "Context retention was the most critical finding — impacting core chatbot usability. All 5 major defects identified pre-launch. Chatbot accuracy significantly improved after retesting.",
    tools: ["Postman", "Jira", "Manual Testing", "API Testing", "Chrome DevTools"],
  },
  {
    id: "job-portal",
    num: "05",
    emoji: "💼",
    title: "Job Portal Platform QA",
    domain: "Recruitment Platforms",
    color: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,237,0.3)",
    textColor: "#c084fc",
    accent: "#a855f7",
    businessContext: "A full-featured job portal serving both candidates and recruiters, with AI-powered resume screening, job matching, and WhatsApp-based outreach. Two distinct portals required comprehensive parallel testing.",
    testingScope: ["Candidate registration, login, OTP flow", "Profile and resume management", "Job search, filtering, and application", "AI assessment flow", "Recruiter portal: job creation and management", "AI screening and candidate filtering", "WhatsApp integration", "Analytics dashboard", "Notification systems", "Role-based access"],
    strategy: "Parallel testing of candidate and recruiter portals with end-to-end workflow coverage. Specific focus on OTP reliability, resume upload integrity, AI screening accuracy, and cross-portal data synchronization.",
    scenarios: [
      "Candidate registers → OTP verified → Profile completed → Resume uploaded → Job searched → Applied → AI assessed → Recruiter notified",
      "Recruiter creates job → Candidates apply → AI screens → Filtered list displayed → Interview scheduled",
      "WhatsApp bot sends screening questions → Candidate responds → Transcript saved → Recruiter synced",
      "AI assessment scores candidate → Score appears in recruiter dashboard instantly",
    ],
    defects: [
      "OTP not invalidated after successful use — replay attack possible",
      "Resume upload failed silently for PDF files over 5MB",
      "Job search filter 'Remote' returned on-site listings",
      "AI screening score not displayed in recruiter dashboard until page refresh",
      "WhatsApp transcript not saved when candidate abandoned mid-conversation",
    ],
    outcome: "Security defect (OTP replay) was the most critical finding. 15+ functional defects identified across both portals. End-to-end workflow validated successfully post-fixes.",
    tools: ["Postman", "Jira", "Chrome DevTools", "Manual Testing", "SQL"],
  },
  {
    id: "mobile-app",
    num: "06",
    emoji: "📱",
    title: "Mobile Application QA",
    domain: "Mobile",
    color: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.3)",
    textColor: "#f87171",
    accent: "#ef4444",
    businessContext: "A job portal mobile application for Android supporting candidate job search, application tracking, and real-time notifications. Testing required coverage across multiple Android versions and screen sizes.",
    testingScope: ["Installation and onboarding", "Authentication (login/OTP)", "Job search and navigation", "Resume upload functionality", "Application tracking", "Push notifications", "Network condition testing", "Device orientation", "Permission handling", "API integration"],
    strategy: "Device matrix testing across Android versions 10-14 on multiple screen sizes. Network condition simulation (3G, 4G, offline). Deep linking and notification routing validation.",
    scenarios: [
      "Install app → Register → OTP → Complete profile → Search jobs → Apply → Track application",
      "App backgrounded → Notification received → Tapped → Correct job opened",
      "Resume PDF opened in-app viewer → Displayed correctly",
      "App used on 3G → Loading states appear → Content loads without crash",
      "Screen rotated mid-form → Data preserved, layout correct",
    ],
    defects: [
      "Critical: App crashes on Android 12 when opening PDF resume (NullPointerException)",
      "Push notification routing opened home screen instead of specific job",
      "Form data lost on orientation change in apply flow",
      "Slow 3G network caused app to show blank screen with no loading indicator",
      "Location permission request shown repeatedly after denial",
    ],
    outcome: "Critical Android 12 crash identified that would have broken PDF viewing for a significant portion of users. 8 defects total identified across device matrix. All resolved before release.",
    tools: ["Manual Testing", "ADB", "Jira", "Chrome DevTools", "Postman"],
  },
];

function CaseStudyCard({ cs, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        className="rounded-3xl border overflow-hidden"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: expanded ? cs.border : "var(--border-subtle)",
          boxShadow: expanded ? `0 0 40px ${cs.color}` : "0 4px 16px rgba(0,0,0,0.06)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-7 flex items-center gap-5 cursor-pointer"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ backgroundColor: cs.color, border: `1px solid ${cs.border}` }}
          >
            {cs.emoji}
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: cs.textColor }}>
                Case Study {cs.num}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{ backgroundColor: cs.color, color: cs.textColor, border: `1px solid ${cs.border}` }}>
                {cs.domain}
              </span>
            </div>
            <h3 className="text-xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              {cs.title}
            </h3>
          </div>

          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={20} style={{ color: "var(--text-muted)" }} />
          </motion.div>
        </button>

        {/* Body */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-7 pb-7 space-y-7" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div className="pt-6">
                  <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: cs.textColor }}>
                    Business Context
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {cs.businessContext}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                      Testing Scope
                    </p>
                    <ul className="space-y-2">
                      {cs.testingScope.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle2 size={12} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                      Key Defects Found
                    </p>
                    <ul className="space-y-2">
                      {cs.defects.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                          <span className="text-red-400 flex-shrink-0 mt-0.5">🐛</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    Test Scenarios
                  </p>
                  <div className="space-y-2">
                    {cs.scenarios.map((s, i) => (
                      <div key={i} className="flex gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                        <span className="font-black text-purple-400 flex-shrink-0">{i + 1}.</span>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="p-5 rounded-2xl"
                  style={{ backgroundColor: cs.color, border: `1px solid ${cs.border}` }}
                >
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: cs.textColor }}>
                    Outcome
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {cs.outcome}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tools.map((t) => (
                      <span key={t} className="badge-qa">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-tag inline-flex mb-4">Case Studies</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-black tracking-[-0.05em] leading-[1.02]"
            style={{ color: "var(--text-primary)" }}
          >
            QA Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Detailed testing case studies across AI, CRM, e-commerce, chatbots, and mobile — with real defects found and outcomes delivered. All examples are sanitized and anonymized.
          </motion.p>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.id} cs={cs} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
