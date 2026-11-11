// import { Card } from "../primitives/Card";
// import { Text } from "../primitives/Text";
import { Card, Text } from "@naga-digital-resume/ui";

export function ProfileCard({ summary }: { summary: string; }) {
    return (
        <Card>
            <Text>{summary}</Text>
        </Card>
    )
}