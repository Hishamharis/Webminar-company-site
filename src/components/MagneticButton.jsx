import { useRef } from "react";
export default function MagneticButton({ href, className = "", children, ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => { const el = ref.current; if (!el) return; if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const r = el.getBoundingClientRect(); const x = e.clientX - r.left - r.width / 2; const y = e.clientY - r.top - r.height / 2; el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`; };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };
  const Tag = href ? 'a' : 'button';
  return <Tag ref={ref} href={href} className={`magnetic ${className}`.trim()} onMouseMove={onMove} onMouseLeave={reset} {...rest}>{children}</Tag>;
}
