const projects = [
  {
    title: 'Split',
    description: "A smart expense-splitting app that makes splitting bills with friends and roommates effortless. Built with a focus on seamless UX—receipt scanning, automatic item assignment, and one-tap settlement. Designed to eliminate the friction of \"who owes what\" in group settings.",
    badges: ['Product', 'Mobile'],
    url: null,
    video: 'https://drive.google.com/file/d/1kQKfsFwJOwltJqIlpgBlQDtOMztu4uAT/preview',
  },
  {
    title: 'Automated Scheduling',
    description: 'Operated in a team of 5 to build a time tracking tool using Excel, VBA, and Macros to automate schedule creation. Utilized engineering design process for research and testing, resulting in an increase of time efficiency by 35%.',
    badges: ['Desktop'],
    url: null,
  },
  {
    title: 'Finance Manager',
    description: 'Created a financial tracker utilizing Excel, VBA, and Pivot Tables to track personal finances and reduce monthly costs. Reduced manual input time by 50% by automating cash inflow/outflow.',
    badges: ['Desktop'],
    url: null,
  },
  {
    title: 'Investment Risk Analyzer',
    description: 'Programmed a risk analysis tool which calculates moving averages for 6000+ public stocks and compares them to average gains to judge investment risk. Built in Python using NumPy and Pandas.',
    badges: ['Desktop'],
    url: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-tagline">Things I've built.</p>
        </div>
        <div className="projects-grid">
          {projects.map(({ title, description, badges, url, video }) => (
            <div key={title} className="project-card">
              {video && (
                <div className="project-video">
                  {video.includes('drive.google.com') ? (
                    <iframe src={video} title={`${title} demo`} allow="autoplay" allowFullScreen />
                  ) : (
                    <video src={video} controls playsInline muted loop />
                  )}
                </div>
              )}
              {badges.length > 0 && (
                <div className="project-badges">
                  {badges.map(b => <span key={b} className="badge-pill">{b}</span>)}
                </div>
              )}
              <h3>{title}</h3>
              <p>{description}</p>
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
