import { useEffect, useRef, useState } from "react";
export default function CountUp({ value, prefix = "", suffix = "", decimals = 0, duration = 1500 }) {
  const ref = useRef(null); const [display, setDisplay] = useState(0); const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDisplay(value); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting && !started.current) { started.current = true; animate(); } });
    }, { threshold: 0.4 });
    obs.observe(el);
    function animate() {
      const start = performance.now();
      const tick = (now) => { const p = Math.min((now - start) / duration, 1); const eased = 1 - Math.pow(1 - p, 3); setDisplay(value * eased); if (p < 1) requestAnimationFrame(tick); else setDisplay(value); };
      requestAnimationFrame(tick);
    }
    return () => obs.disconnect();
  }, [value, duration]);
  return <span ref={ref} className="stat-num">{prefix}{display.toFixed(decimals)}{suffix}</span>;
}
