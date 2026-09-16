import type { Experience, Project, Resume } from '../data/types'
import { Card } from './primitives/Card'
import { Container } from './primitives/Container'
import { Heading } from './primitives/Heading'
import { Link } from './primitives/Link'
import { Stack } from './primitives/Stack'
import { Tag } from './primitives/Tag'
import { Text } from './primitives/Text'

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
        <Heading level="h3" size="section" id={title.toLowerCase().replace(/\s+/g, '-')}>
          {title}
        </Heading>
      </div>
      {children}
    </section>
  )
}

function ExperienceCard({ job }: { job: Experience }) {
  return (
    <Card aria-label={`${job.role} at ${job.company}`}>
      <div className="card-header">
        <div>
          <Heading level="h4" size="card">{job.role}</Heading>
          <Text tone='accent' className="company">{job.company}</Text>
        </div>

        <div aria-label={`${job.location || 'Remote'} ${job.startDate} to ${job.endDate || 'Present'}`}>
          <Text size="meta" tone="muted">{job.location || 'Remote'}</Text>
          <Text size="meta">
            {job.startDate} - {job.endDate || 'Present'}
          </Text>
        </div>
      </div>

      {job.description && <Text className="description">{job.description}</Text>}

      <ul className="achievement-list">
        {job.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>

      {job.technologies && job.technologies.length > 0 && (
        <div className="tag-list" aria-label="Technologies used">
          {job.technologies.map((technology) => (
            <Tag key={`${job.company}-${technology}`} tone="technology">{technology}</Tag>
          ))}
        </div>
      )}
    </Card>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card aria-label={project.name}>
      <Heading level='h4' size='card'>{project.name}</Heading>
      <Text>{project.description}</Text>

      {project.technologies && project.technologies.length > 0 && (
        <div className="tag-list" aria-label="Project technologies">
          {project.technologies.map((technology) => (
            <Tag key={`${project.name}-${technology}`} tone="technology">
              {technology}
            </Tag>
          ))}
        </div>
      )}
    </Card>
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
      <Container>
        <p className="eyebrow">Profile</p>
        <Heading level="h1" size="page">
          {resume.name}
        </Heading>
        <Heading level="h2" size="">
          {resume.title}
        </Heading>
        <Text size="summary">{resume.summary}</Text>

        <ResumeSection title="Profile">
          <div className="profile-card">
            <p>{resume.summary}</p>
          </div>
        </ResumeSection>

        <ResumeSection title="Experience">
          <Stack>
            {resume.experience.map((job) => (
              <ExperienceCard key={`${job.company}-${job.role}`} job={job} />
            ))}
          </Stack>
        </ResumeSection>

        <ResumeSection title="Projects">
          <Stack>
            {resume.projects?.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </Stack>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="tag-list" aria-label="Skills and competency areas">
            {resume.skills.map((skill) => (
              <Tag key={skill.name} tone="skill">
                {skill.name}
                {skill.level ? ` · ${skill.level}` : ''}
              </Tag>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <Stack>
            {resume.education.map((entry) => (
              <article key={`${entry.institution}-${entry.degree}`} className="card">
                <Heading level="h4" size="card">{entry.degree}</Heading>
                <p className="company">{entry.institution}</p>
                {entry.field && <p>{entry.field}</p>}
                <Text size="meta">
                  {entry.startDate || 'N/A'} - {entry.endDate || 'Present'}
                </Text>
              </article>
            ))}
          </Stack>
        </ResumeSection>

        <ResumeSection title="Contact Links">
          <div className="contact-list" aria-label="Contact links">
            {profileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.value}
              </Link>
            ))}

            {resume.contact.location && <span>{resume.contact.location}</span>}
          </div>
        </ResumeSection>
      </Container>
    </main>
  )
}
