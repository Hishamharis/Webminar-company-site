export default function Testimonials() {
  const items = [
    { quote: "NOVA took over our infrastructure and our on-call pages basically stopped. That's the whole review.", name: "Priya Nair", role: "CTO, Lumen Retail" },
    { quote: "They shipped a hardened rebuild in three weeks and explained every decision. Rare combination of skill and clarity.", name: "Arjun Mehta", role: "Founder, Northpeak" },
    { quote: "Our site went from sluggish to instant, and it has stayed up through every launch since. Peace of mind, basically.", name: "Sara Thomas", role: "Head of Product, Vela" },
  ];
  return (<section className="testimonials section-pad" id="testimonials"><div className="section-heading"><p className="section-kicker">/ What clients say</p><span>Straight from the field <b>→</b></span></div><div className="testi-grid">{items.map((t, i) => (<article className="testi-card" key={i}><p className="testi-quote">{t.quote}</p><div className="testi-author"><span className="testi-name">{t.name}</span><span className="testi-role">{t.role}</span></div></article>))}</div></section>);
}