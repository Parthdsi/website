const experience = [
  {
    company: 'Tesla',
    role: 'Technical Product Management Intern',
    date: 'Aug 2025 – Dec 2025',
    location: 'Austin, TX',
    url: 'https://www.tesla.com/',
    description: "Led the expansion of Tesla's ML-powered Estimated Time of Completion (ETC) model, driving cross-functional execution with Engineering and Data Science to replace manual estimates. Improved prediction accuracy by 11% and automation coverage by 10%, while usability insights translated into automation that saved 5 hours per week per advisor.",
  },
  {
    company: 'Zynga',
    role: 'Product Management Intern',
    date: 'Jan 2025 – Apr 2025',
    location: 'San Mateo, CA',
    url: 'https://www.zynga.com/',
    description: "Led end-to-end development of a code redemption feature that drove 5% revenue lift and 3% increase in downloads. Redesigned the in-app purchase catalog used by 20+ game teams—cutting creation time by 50%—and mapped the Webstore funnel to identify changes that improved conversion by 8%.",
  },
  {
    company: 'Roblox',
    role: 'Product Management Intern',
    date: 'May 2024 – Aug 2024',
    location: 'San Mateo, CA',
    url: 'https://www.roblox.com/',
    description: "Led 0-to-1 launch of a native translation feature for tens of thousands of moderators, enabling real-time chat translation and cutting ticket handle time by 50%—saving $1.2M annually. Also drove E2E development of a Data Labeling platform for in-house LLM training that reduced manual moderation costs by $3M.",
  },
  {
    company: 'Cadillac Fairview',
    role: 'Solutions Analyst',
    date: 'Sep 2023 – Dec 2023',
    location: 'Toronto, ON',
    url: 'https://www.cadillacfairview.com/',
    description: "Drove the launch of the CF Corporate Retail Website to $5M in ARR, leading A/B testing and UX research that increased leasing conversion by 5% and inquiries by 30%.",
  },
  {
    company: 'Super.com',
    role: 'Strategy and Operations Intern',
    date: 'Jan 2023 – Apr 2023',
    location: 'Toronto, ON',
    url: 'https://super.fyi/',
    description: "Audited 300+ customer interactions to streamline support processes, reducing friction in identity validation and driving a 10% increase in customer retention.",
  },
  {
    company: 'Bombardier Aerospace',
    role: 'Operations Coordinator',
    date: 'May 2022 – Aug 2022',
    location: 'Toronto, ON',
    url: 'http://www.bombardier.com/',
    description: "Analyzed 200+ data points across the production sequence to identify and fix bottlenecks, increasing overall efficiency by 20%.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-tagline">A track record of impact.</p>
        </div>
        <div className="experience-grid">
          {experience.map(({ company, role, date, location, url, description }) => (
            <div key={company} className="experience-card">
              <div className="card-top">
                <div>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="card-company-link">
                    <h3>{company}</h3>
                    <span className="card-arrow">↗</span>
                  </a>
                  <p className="card-role">{role}</p>
                </div>
              </div>
              <div className="card-meta">
                {date && <span>{date}</span>}
                {location && <span>{location}</span>}
              </div>
              <p className="card-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
