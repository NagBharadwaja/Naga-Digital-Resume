import { Card } from "../primitives/Card";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
import type { Education } from "../../data/types";

export function EducationCard({ study }: {study: Education }) {
    return (
        <Card
            aria-label={`${study.degree} at ${study.institution}`}
            key={`${study.institution}-${study.degree}`}
        >
            <Heading level="h4" size="card">{study.degree}</Heading>
            <p className="company">{study.institution}</p>
            {study.field && <p>{study.field}</p>}
            <Text size="meta">
                {study.startDate || 'N/A'} - {study.endDate || 'Present'}
            </Text>
        </Card>
    )
}