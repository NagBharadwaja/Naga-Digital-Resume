import type { Project } from "../../data/types";
import { Card } from "../primitives/Card";
import { Heading } from "../primitives/Heading";
import { Tag } from "../primitives/Tag";
import { Text } from "../primitives/Text";

export function ProjectCard({ project }: { project: Project }) {
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