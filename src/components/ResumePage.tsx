import type { Resume } from '../data/types';
import { Container } from './primitives/Container';
import { Heading } from './primitives/Heading';
import { Link } from './primitives/Link';
import { Stack } from './primitives/Stack';
import { Tag } from './primitives/Tag';
import { Text } from './primitives/Text';
import { ResumeSection } from './domain/ResumeSection';
import { ExperienceCard } from './domain/ExperienceCard';
import { ProjectCard } from './domain/ProjectCard';

interface ResumePageProps {
  resume: Resume
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
        <Text className='eyebrow'>Profile</Text>
        <Heading level="h1" size="page">
          {resume.name}
        </Heading>
        <Heading level="h2" size="">
          {resume.title}
        </Heading>
        
        <ResumeSection title="Profile">
          <div className="profile-card">
            <Text>{resume.summary}</Text>
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
