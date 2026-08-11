export default function PrivacyPolicy() {
  return (
    <section className="legal section-pad" id="privacy">
      <h2 className="legal-title">Privacy Policy</h2>
      <p className="legal-date">Last updated: 2026</p>
      <div className="legal-grid">
        <article className="legal-card">
          <h3>What we collect</h3>
          <div className="legal-body">
            <p>Only what you type into the contact form: your name, email address, and message. The form is the sole place any information is gathered.</p>
          </div>
        </article>
        <article className="legal-card">
          <h3>How it's processed</h3>
          <div className="legal-body">
            <p>Everything is handled in your browser for validation and display. This is a demo — there is no backend, so nothing you enter is sent to or stored on a server.</p>
          </div>
        </article>
        <article className="legal-card">
          <h3>Cookies &amp; analytics</h3>
          <div className="legal-body">
            <p>We use no cookies, no analytics, and no tracking of any kind. Nothing about your visit is recorded or measured.</p>
          </div>
        </article>
        <article className="legal-card">
          <h3>Third parties</h3>
          <div className="legal-body">
            <p>We do not share, sell, or transmit your information to any third party. There are no integrations or external services involved.</p>
          </div>
        </article>
        <article className="legal-card">
          <h3>Your rights</h3>
          <div className="legal-body">
            <p>Because nothing is stored, there is no personal data for us to access, correct, export, or delete. You can stop sharing at any time by simply not submitting the form.</p>
          </div>
        </article>
      </div>
      <p className="legal-contact">
        Questions about this policy? Reach us at <a href="mailto:hello@nova.studio">hello@nova.studio</a>.
      </p>
      <p className="legal-note">
        Note: This is a demo privacy policy for an educational webinar project. It describes a static, client-only demo and is not legal advice.
      </p>
    </section>
  );
}
