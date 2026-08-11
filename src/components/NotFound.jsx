export default function NotFound() {
  return (
    <section className="notfound section-pad" id="notfound">
      <div className="notfound-inner">
        <p className="section-kicker">/ Lost in space</p>
        <div className="notfound-code">404</div>
        <h2 className="notfound-title">This page took a different route.</h2>
        <p className="notfound-text">The link may be broken, or the page may have moved. Let's get you back to something useful.</p>
        <a className="button button-light notfound-cta" href="#top">Back to home <span>↗</span></a>
      </div>
    </section>
  );
}
