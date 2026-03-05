export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">Parth.</a>
        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://www.linkedin.com/in/parthdsi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:parth.desai@uwaterloo.ca" className="btn btn-header">
            Say Hello
          </a>
        </nav>
      </div>
    </header>
  )
}
