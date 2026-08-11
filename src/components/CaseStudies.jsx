export default function CaseStudies() {
  const cases = [
    { metric: "-82%", label: "Incident rate", title: "Hardening a fintech stack", desc: "Threat-modeled, patched, and monitored a payments platform — cutting production incidents to near zero." },
    { metric: "3.1x", label: "Faster deploys", title: "CI/CD for a SaaS team", desc: "Rebuilt delivery pipelines so the team ships multiple times a day with confidence, not fear." },
    { metric: "99.99%", label: "Uptime", title: "Always-on hosting", desc: "Migrated a media site to resilient, auto-scaling infrastructure with 24/7 monitoring." },
  ];
  return (<section className="cases section-pad" id="cases"><div className="section-heading"><p className="section-kicker">/ Proof</p><span>Outcomes that held <b>→</b></span></div><div className="case-grid">{cases.map((c, i) => (<article className="case-card" key={i}><span className="case-metric">{c.metric}</span><span className="case-label">{c.label}</span><h3 className="case-title">{c.title}</h3><p className="case-desc">{c.desc}</p></article>))}</div></section>);
}
