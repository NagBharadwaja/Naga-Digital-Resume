import type { Resume } from '../data/types';
import { Container } from './primitives/Container';
import { Link } from './primitives/Link';
import { Stack } from './primitives/Stack';
import { Tag } from './primitives/Tag';
import { ResumeSection } from './domain/ResumeSection';
import { ExperienceCard } from './domain/ExperienceCard';
import { ProjectCard } from './domain/ProjectCard';
import { EducationCard } from './domain/EducationCard';
import { ProfileCard } from './domain/ProfileCard';
import { ResumeHeader } from './domain/ResumeHeader';
import { useState } from 'react';

interface ResumePageProps {
  resume: Resume
}

export function ResumePage({ resume }: ResumePageProps) {
  const [expandedSections, setExpandedSections] = useState({
    profile: true,
    experience: true,
    projects: true,
    skills: true,
    education: true,
    contactLinks: true
  });
  type SectionKey = keyof typeof expandedSections;

  const isAllExpanded = (
    expandedSections.contactLinks &&
    expandedSections.education &&
    expandedSections.experience &&
    expandedSections.profile &&
    expandedSections.projects &&
    expandedSections.skills
  );

  function toggleSection(section: SectionKey) {
    setExpandedSections((current) => ({
      ...current,
      [section]: !current[section]
    }))
  }

  function setAllSectionsExpanded(isExpanded: boolean) {
    setExpandedSections({
      profile: isExpanded,
      experience: isExpanded,
      projects: isExpanded,
      skills: isExpanded,
      education: isExpanded,
      contactLinks: isExpanded
    })
  }
  
  const profileLinks = [
    { label: 'Email', href: `mailto:${resume.contact.email}`, value: resume.contact.email },
    { label: 'Website', href: resume.contact.website, value: 'Website' },
    { label: 'LinkedIn', href: resume.contact.linkedin, value: 'LinkedIn' },
    { label: 'GitHub', href: resume.contact.github, value: 'GitHub' },
  ].filter((link): link is { label: string; href: string; value: string } => Boolean(link.href))

  return (
    <main className="resume-page">
      <Container>
        <ResumeHeader
          name={resume.name}
          title={resume.title}
          isAllExpanded={isAllExpanded}
          onExpandAll={() => setAllSectionsExpanded(true)}
          onCollapseAll={() => setAllSectionsExpanded(false)}
        />
        
        <ResumeSection
          title="Profile"
          isExpanded={expandedSections.profile}
          onToggle={() => toggleSection('profile')}
          >
          <ProfileCard summary={resume.summary} />
        </ResumeSection>

        <ResumeSection
          title="Experience"
          isExpanded={expandedSections.experience}
          onToggle={() => toggleSection('experience')}
        >
          <Stack>
            {resume.experience.map((job) => (
              <ExperienceCard key={`${job.company}-${job.role}`} job={job} />
            ))}
          </Stack>
        </ResumeSection>

        <ResumeSection
          title="Projects"
          isExpanded={expandedSections.projects}
          onToggle={() => toggleSection('projects')}
        >
          <Stack>
            {resume.projects?.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </Stack>
        </ResumeSection>

        <ResumeSection
          title="Skills"
          isExpanded={expandedSections.skills}
          onToggle={() => toggleSection('skills')}
        >
          <ul className="tag-list" aria-label="Skills and competency areas">
            {resume.skills.map((skill) => (
              <li key={skill.name}>
                <Tag tone="skill">
                  {skill.name}
                  {skill.level ? ` · ${skill.level}` : ''}
                </Tag>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection
          title="Education"
          isExpanded={expandedSections.education}
          onToggle={() => toggleSection('education')}
        >
          <Stack>
            {resume.education.map((entry) => (
              <EducationCard study={entry} key={`${entry.startDate}-${entry.endDate}`} />
            ))}
          </Stack>
        </ResumeSection>

        <ResumeSection
          title="Contact Links"
          isExpanded={expandedSections.contactLinks}
          onToggle={() => toggleSection('contactLinks')}
        >
          <ul className="contact-list" aria-label="Contact links">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.value}
                </Link>
              </li>
            ))}
          </ul>
          <p className="contact-location">{resume.contact.location}</p>
        </ResumeSection>
      </Container>
    </main>
  )
}
