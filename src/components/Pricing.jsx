export default function Pricing() {
  const plans = [
    { name: "Starter", amount: "$490", period: "/mo", featured: false, features: ["Website management", "Monthly updates & backups", "Email support", "Uptime monitoring"] },
    { name: "Growth", amount: "$1,290", period: "/mo", featured: true, features: ["Everything in Starter", "Server & infra management", "CI/CD pipelines", "24/7 monitoring & response", "Quarterly security review"] },
    { name: "Scale", amount: "Custom", period: "", featured: false, features: ["Everything in Growth", "Dedicated on-call", "Penetration testing", "Compliance readiness", "Cloud cost optimization"] },
  ];
  return (<section className="pricing section-pad" id="pricing"><div className="section-heading"><p className="section-kicker">/ Plans</p><span>Flat, predictable <b>→</b></span></div><div className="price-grid">{plans.map((p) => (<article className={`price-card ${p.featured ? 'featured' : ''}`.trim()} key={p.name}><h3 className="price-name">{p.name}</h3><div className="price-amount">{p.amount}<span className="price-period">{p.period}</span></div><ul className="price-features">{p.features.map((f, i) => <li key={i}>{f}</li>)}</ul><a className="price-cta" href="#contact">{p.name === 'Scale' ? 'Talk to us' : 'Start'} <span>↗</span></a></article>))}</div></section>);
}
