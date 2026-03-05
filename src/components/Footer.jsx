export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="https://github.com/Parthdsi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/parthdsi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/parthdsi" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Parth Desai</p>
      </div>
    </footer>
  )
}
