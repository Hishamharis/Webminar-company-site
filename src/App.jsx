import { useEffect, useState } from "react";
import CountUp from "./components/CountUp";
import Reveal from "./components/Reveal";
import MagneticButton from "./components/MagneticButton";
import StatusBadge from "./components/StatusBadge";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import "./enhance.css";

const services = [
  { number: "01", title: "Website Management", description: "Design, build, and ongoing care for high-performance websites that stay fast and current.", icon: "◍" },
  { number: "02", title: "Server & Infra", description: "Provisioning, hardening, and 24/7 management of the servers your business runs on.", icon: "▦" },
  { number: "03", title: "Production Hosting", description: "Reliable, scalable hosting with backups, CDN, and zero-drama deployments.", icon: "⌁" },
  { number: "04", title: "Cybersecurity", description: "Threat modeling, hardening, audits, and monitoring to keep your attack surface small.", icon: "⛨" },
  { number: "05", title: "Cloud Native", description: "Resilient, cost-aware infrastructure designed to scale from first users to millions.", icon: "☁" },
  { number: "06", title: "DevOps Flow", description: "Clean CI/CD pipelines and automation that keep teams shipping confidently.", icon: "↗" },
  { number: "07", title: "AI Systems", description: "Agents, copilots, and intelligent workflows that turn ideas into useful products.", icon: "✦" },
  { number: "08", title: "Monitoring & Reliability", description: "Observability, alerting, and on-call response so incidents never become outages.", icon: "◎" },
];

const stats = [
  { value: 99.9, suffix: "%", decimals: 1, label: "Target uptime", animated: true },
  { display: "24/7", label: "Monitoring & response", animated: false },
  { value: 40, suffix: "+", decimals: 0, label: "Projects shipped", animated: true },
  { display: "5 min", label: "Response SLA", animated: false },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "We map your systems, risks, and goals before touching code." },
  { num: "02", title: "Build & Secure", desc: "We ship hardened, tested systems with security baked in from day one." },
  { num: "03", title: "Deploy", desc: "Zero-downtime rollouts to resilient, monitored infrastructure." },
  { num: "04", title: "Manage", desc: "We keep it running — patched, observed, and improving over time." },
];

const faqs = [
  { q: "What does 'managed IT' actually include?", a: "Everything from keeping your website updated and your servers patched, to hosting, security monitoring, backups, and on-call response when something breaks." },
  { q: "Do you handle cybersecurity?", a: "Yes. We harden infrastructure, run threat modeling and audits, monitor for anomalies, and keep your attack surface small — suitable for most small and mid-size teams." },
  { q: "Can you host our production systems?", a: "Absolutely. We provide production hosting with CI/CD, CDN, automated backups, and 24/7 monitoring so deploys are uneventful." },
  { q: "What if we already have a site or servers?", a: "Great — we onboard existing systems, document them, and take over management with a clear, low-risk transition plan." },
  { q: "How do you price?", a: "Typically a flat monthly management retainer plus project work. We scope it together so there are no surprises." },
  { q: "Which technologies do you work with?", a: "Modern web stacks, Linux servers, Docker, major clouds, and standard observability tooling — chosen to fit your team, not ours." },
];

function Orbit() {
  return <div className="hero-orbit" aria-hidden="true">
    <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
    <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
    <div className="orbit-core"><span>N</span></div>
    <div className="orbit-label label-top">Ideas<br /><b>→</b></div><div className="orbit-label label-bottom">Impact<br /><b>↗</b></div>
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "NOVA — Build what comes next";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Full-spectrum IT: websites, servers, hosting, cybersecurity, cloud, and AI — built and run by NOVA.");
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <main>
    <div className="noise" aria-hidden="true" />
    <nav className="nav-shell" aria-label="Main navigation">
      <a href="#top" className="brand" aria-label="NOVA home" onClick={closeMenu}>NOVA<span>®</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "Close" : "Menu"}</button>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Services <span>↗</span></a><a href="#stats" onClick={closeMenu}>Stats <span>↗</span></a><a href="#process" onClick={closeMenu}>Process <span>↗</span></a><a href="#testimonials" onClick={closeMenu}>Clients <span>↗</span></a><a href="#pricing" onClick={closeMenu}>Plans <span>↗</span></a><a href="#faq" onClick={closeMenu}>FAQ <span>↗</span></a><a href="#about" onClick={closeMenu}>About <span>↗</span></a>
      </div>
      <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a project <span>↗</span></a>
    </nav>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><i /> Independent technology studio · Est. 2024</p><h1>Build<br /><em>what&apos;s next.</em></h1><p className="hero-description">We design, build, host, secure, and operate the digital systems ambitious teams rely on.</p><div className="hero-actions"><MagneticButton href="#contact" className="button button-light">Let&apos;s talk <span>↗</span></MagneticButton><a href="#work" className="text-link">Explore our work <span>↓</span></a></div></div><Orbit /><div className="hero-index">01 <span>/</span> 08</div></section>
    <section className="marquee" aria-label="Capabilities"><div>WEB MANAGEMENT <span>✦</span> SERVER OPS <span>✦</span> CYBERSECURITY <span>✦</span> CLOUD <span>✦</span> DEVOPS <span>✦</span> AI SYSTEMS <span>✦</span> WEB MANAGEMENT <span>✦</span> SERVER OPS <span>✦</span> CYBERSECURITY <span>✦</span> CLOUD <span>✦</span> DEVOPS <span>✦</span> AI SYSTEMS <span>✦</span></div></section>
    <section className="intro section-pad" id="about"><p className="section-kicker">/ The way we work</p><div className="intro-grid"><h2>Good technology<br /><em>feels inevitable.</em></h2><div><p className="large-copy">We believe the best digital systems sit at the intersection of clarity, craft, and reliability.</p><p className="muted-copy">No bloated process. No unnecessary noise. Just thoughtful strategy, sharp engineering, and operations that make complex things feel simple.</p></div></div></section>
    <Reveal as="section" className="services section-pad" id="services"><div className="section-heading"><p className="section-kicker">/ What we do</p><span>Scroll to explore <b>→</b></span></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><strong>{service.icon}</strong></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a></article>)}</div></Reveal>
    <Reveal as="section" className="stats section-pad" id="stats"><div className="section-heading"><p className="section-kicker">/ By the numbers</p><span>Why teams stay <b>→</b></span></div><div className="stat-grid">{stats.map((s) => <div className="stat" key={s.label}>{s.animated ? <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} /> : <span className="stat-num">{s.display}</span>}<span className="stat-label">{s.label}</span></div>)}</div></Reveal>
    <Reveal as="section" className="process section-pad" id="process"><div className="section-heading"><p className="section-kicker">/ How we work</p><span>From idea to operation <b>→</b></span></div><div className="process-grid">{processSteps.map((step) => <div className="process-step" key={step.num}><span className="step-num">{step.num}</span><h3 className="step-title">{step.title}</h3><p className="step-desc">{step.desc}</p></div>)}</div></Reveal>
    <Reveal as="section" className="work-section section-pad" id="work"><div className="work-card"><div><p className="section-kicker">/ Selected thought</p><h2>Make it<br /><em>meaningful.</em></h2></div><div className="work-side"><p>We build digital products people remember — because they solve real problems beautifully, and stay online when it matters most.</p><MagneticButton href="#contact" className="button button-light">See how we think <span>↗</span></MagneticButton></div></div></Reveal>
    <Testimonials />
    <CaseStudies />
    <Pricing />
    <Reveal as="section" className="faq section-pad" id="faq"><div className="section-heading"><p className="section-kicker">/ Questions</p><span>Straight answers <b>→</b></span></div><div className="faq-list">{faqs.map((f) => <div className="faq-item" key={f.q}><h3 className="faq-q">{f.q}</h3><p className="faq-a">{f.a}</p></div>)}</div></Reveal>
    <section className="contact section-pad" id="contact"><p className="section-kicker">/ Have a good one?</p><h2>Let&apos;s make<br /><em>something great.</em></h2><div className="contact-inner"><a className="contact-email" href="mailto:hello@nova.studio">hello@nova.studio <span>↗</span></a><ContactForm /><div className="status-row"><StatusBadge /></div></div></section>
    <footer><a href="#top" className="brand">NOVA<span>®</span></a><p>© 2026 NOVA. All rights reserved.</p><div><a href="#top">Instagram ↗</a><a href="#top">LinkedIn ↗</a></div></footer>
  </main>;
}
