import type { Route } from "./+types/home";

const services = [
  {
    number: "01",
    title: "AI Systems",
    description: "Agents, copilots, and intelligent workflows that turn ambitious ideas into useful products.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Cloud Native",
    description: "Fast, resilient infrastructure designed to scale from first users to millions.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "DevOps Flow",
    description: "Clean delivery pipelines that keep teams shipping confidently, every single day.",
    icon: "↗",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NOVA — Build what comes next" },
    { name: "description", content: "AI-native product engineering for the next generation of the web." },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="NOVA home">NOVA<span>®</span></a>
        <div className="nav-links">
          <a href="#work">Work <span>↗</span></a>
          <a href="#services">Services <span>↗</span></a>
          <a href="#about">About <span>↗</span></a>
        </div>
        <a href="#contact" className="nav-cta">Start a project <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><i /> Independent digital studio · Est. 2024</p>
          <h1>Build<br /><em>what's next.</em></h1>
          <p className="hero-description">We partner with bold teams to shape ambitious ideas into intelligent, high-performance digital products.</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-light">Let&apos;s talk <span>↗</span></a>
            <a href="#work" className="text-link">Explore our work <span>↓</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
          <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
          <div className="orbit-core"><span>N</span></div>
          <div className="orbit-label label-top">Ideas<br /><b>→</b></div>
          <div className="orbit-label label-bottom">Impact<br /><b>↗</b></div>
        </div>
        <div className="hero-index">01 <span>/</span> 03</div>
      </section>

      <section className="marquee" aria-label="Capabilities">
        <div>AI-FIRST <span>✦</span> HUMAN-LED <span>✦</span> FUTURE-READY <span>✦</span> AI-FIRST <span>✦</span> HUMAN-LED <span>✦</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <p className="section-kicker">/ The way we work</p>
        <div className="intro-grid"><h2>Good technology<br /><em>feels inevitable.</em></h2><div><p className="large-copy">We believe the best digital experiences sit at the intersection of clarity, craft, and curiosity.</p><p className="muted-copy">No bloated process. No unnecessary noise. Just thoughtful strategy, sharp design, and engineering that makes complex things feel simple.</p></div></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><p className="section-kicker">/ What we do</p><span>Scroll to explore <b>→</b></span></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><strong>{service.icon}</strong></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a></article>)}</div>
      </section>

      <section className="work-section section-pad" id="work"><div className="work-card"><div><p className="section-kicker">/ Selected thought</p><h2>Make it<br /><em>meaningful.</em></h2></div><div className="work-side"><p>We build digital products people remember — because they solve real problems beautifully.</p><a className="button button-light" href="#contact">See how we think <span>↗</span></a></div></div></section>

      <section className="contact section-pad" id="contact"><p className="section-kicker">/ Have a good one?</p><h2>Let&apos;s make<br /><em>something great.</em></h2><a className="contact-email" href="mailto:hello@nova.studio">hello@nova.studio <span>↗</span></a></section>

      <footer><a href="#top" className="brand">NOVA<span>®</span></a><p>© 2024 NOVA Studio. All rights reserved.</p><div><a href="#top">Instagram ↗</a><a href="#top">LinkedIn ↗</a></div></footer>
    </main>
  );
}
