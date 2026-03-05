export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="badge-pill">Engineering & AI @ uWaterloo</span>
        <h1 className="hero-headline">
          Building the <em>future</em> of product.
        </h1>
        <p className="hero-content">
          Hi, I'm Parth Desai. I blend engineering, artificial intelligence, and strategic product management to build things that matter.
        </p>
        <div className="hero-actions">
          <a href="mailto:parth.desai@uwaterloo.ca" className="btn btn-hero">
            Say Hello
          </a>
          <a href="https://www.linkedin.com/in/parthdsi/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
