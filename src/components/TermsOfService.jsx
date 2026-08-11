import React from 'react';

export default function TermsOfService() {
  return (
    <section className="legal section-pad" id="terms">
      <div className="container">
        <h2 className="legal-title">Terms of Service</h2>
        <p className="legal-date">Last updated: August 12, 2026</p>

        <div className="legal-grid">
          <div className="legal-card">
            <h3>Demo Site — Provided As-Is</h3>
            <div className="legal-body">
              <p>
                This website is a demonstration project for a student webinar. It is
                provided "as is" and "as available" with no warranty of any kind,
                express or implied. NOVA makes no guarantee regarding uptime,
                availability, accuracy, or the outcomes of any information presented
                here.
              </p>
            </div>
          </div>

          <div className="legal-card">
            <h3>Illustrative Examples</h3>
            <div className="legal-body">
              <p>
                Any client testimonials, case studies, logos, or example results shown
                on this site are illustrative and for demonstration purposes only. They
                do not represent real engagements, real clients, or guaranteed results.
              </p>
            </div>
          </div>

          <div className="legal-card">
            <h3>Your Responsibility</h3>
            <div className="legal-body">
              <p>
                You are solely responsible for how you use any content, code, or ideas
                from this site. This site does not process payments, subscriptions, or
                any transactions, and offers no commercial service or guarantee of
                outcomes.
              </p>
            </div>
          </div>

          <div className="legal-card">
            <h3>Contact</h3>
            <div className="legal-body">
              <p>
                Questions about this demo? Reach out at{' '}
                <a href="mailto:demo@nova-webinar.example">demo@nova-webinar.example</a>.
              </p>
              <p className="legal-note">
                Note: This is a demonstration Terms of Service for a student webinar
                project. It is not a legally binding contract and should not be used
                for a production website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
