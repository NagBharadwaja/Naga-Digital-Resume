import type { Experience, Project, Resume } from '../data/types'

interface ResumePageProps {
  resume: Resume
}

function ResumeSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="resume-section" aria-labelledby={title.toLowerCase().replace(/\s+/g, '-')}> 
      <div className="section-heading-wrap">
        <h3 id={title.toLowerCase().replace(/\s+/g, '-')}>
          {title}
        </h3>
      </div>
      {children}
    </section>
  )
}

function ExperienceCard({ job }: { job: Experience }) {
  return (
    <article className="card" aria-label={`${job.role} at ${job.company}`}>
      <div className="card-header">
        <div>
          <h4>{job.role}</h4>
          <p className="company">{job.company}</p>
        </div>

        <div className="meta" aria-label={`${job.location || 'Remote'} ${job.startDate} to ${job.endDate || 'Present'}`}>
          <span>{job.location || 'Remote'}</span>
          <span>
            {job.startDate} - {job.endDate || 'Present'}
          </span>
        </div>
      </div>

      {job.description && <p className="description">{job.description}</p>}

      <ul className="achievement-list">
        {job.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>

      {job.technologies && job.technologies.length > 0 && (
        <div className="tag-list" aria-label="Technologies used">
          {job.technologies.map((technology) => (
            <span key={`${job.company}-${technology}`} className="tag">{technology}</span>
          ))}
        </div>
      )}
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" aria-label={project.name}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>

      {project.technologies && project.technologies.length > 0 && (
        <div className="tag-list" aria-label="Project technologies">
          {project.technologies.map((technology) => (
            <span key={`${project.name}-${technology}`} className="tag">
              {technology}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export function ResumePage({ resume }: ResumePageProps) {
  const profileLinks = [
    { label: 'Email', href: `mailto:${resume.contact.email}`, value: resume.contact.email },
    { label: 'Website', href: resume.contact.website, value: 'Website' },
    { label: 'LinkedIn', href: resume.contact.linkedin, value: 'LinkedIn' },
    { label: 'GitHub', href: resume.contact.github, value: 'GitHub' },
  ].filter((link): link is { label: string; href: string; value: string } => Boolean(link.href))

  return (
    <main className="resume-page">
      <header className="resume-header">
        <p className="eyebrow">Profile</p>
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
        <p className="summary">{resume.summary}</p>
      </header>

      <ResumeSection title="Profile">
        <div className="profile-card">
          <p>{resume.summary}</p>
        </div>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="stack">
          {resume.experience.map((job) => (
            <ExperienceCard key={`${job.company}-${job.role}`} job={job} />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Projects">
        <div className="stack">
          {resume.projects?.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="tag-list" aria-label="Skills and competency areas">
          {resume.skills.map((skill) => (
            <span key={skill.name} className="tag skill-tag">
              {skill.name}
              {skill.level ? ` · ${skill.level}` : ''}
            </span>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="stack">
          {resume.education.map((entry) => (
            <article key={`${entry.institution}-${entry.degree}`} className="card">
              <h4>{entry.degree}</h4>
              <p className="company">{entry.institution}</p>
              {entry.field && <p>{entry.field}</p>}
              <p className="meta">
                {entry.startDate || 'N/A'} - {entry.endDate || 'Present'}
              </p>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Contact Links">
        <div className="contact-list" aria-label="Contact links">
          {profileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.value}
            </a>
          ))}

          {resume.contact.location && <span>{resume.contact.location}</span>}
        </div>
      </ResumeSection>
    </main>
  )
}
