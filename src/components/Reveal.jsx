import React, { useEffect, useRef } from "react";
export default function Reveal({ as = "div", className = "", id, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('is-visible'); return; }
    const obs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); } }); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return React.createElement(as, { ref, className: `reveal ${className}`.trim(), id }, children);
}
