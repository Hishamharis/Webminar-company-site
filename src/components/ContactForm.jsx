import { useState } from "react";
export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => { setValues((v) => ({ ...v, [k]: e.target.value })); setErrors((er) => ({ ...er, [k]: "" })); };
  const validate = () => { const er = {}; if (!values.name.trim()) er.name = "Please enter your name."; if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) er.email = "Enter a valid email."; if (values.message.trim().length < 10) er.message = "Tell us a little more (10+ chars)."; return er; };
  const submit = (e) => { e.preventDefault(); const er = validate(); setErrors(er); if (Object.keys(er).length) return; setStatus("sending"); setTimeout(() => setStatus("success"), 600); };
  if (status === "success") return <p className="form-success">Thanks — we'll be in touch within one business day. ✓</p>;
  return (<form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><div className="form-field"><input className={errors.name ? "has-error" : ""} value={values.name} onChange={set("name")} placeholder="Your name" aria-label="Your name" /><span className="form-error">{errors.name}</span></div><div className="form-field"><input className={errors.email ? "has-error" : ""} value={values.email} onChange={set("email")} placeholder="Email" aria-label="Email" /><span className="form-error">{errors.email}</span></div></div><div className="form-field"><textarea className={errors.message ? "has-error" : ""} value={values.message} onChange={set("message")} placeholder="What do you need?" rows={4} aria-label="Message" /><span className="form-error">{errors.message}</span></div><button type="submit" className="button button-light form-submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"} <span>↗</span></button></form>);
}
