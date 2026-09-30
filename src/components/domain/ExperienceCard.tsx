import { Card } from "../primitives/Card";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
import type { Experience } from "../../data/types";
import { Tag } from "../primitives/Tag";

export function ExperienceCard({ job }: { job: Experience }) {
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