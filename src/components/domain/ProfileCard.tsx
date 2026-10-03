import { Card } from "../primitives/Card";
import { Text } from "../primitives/Text";

export function ProfileCard({ summary }: { summary: string; }) {
    return (
        <Card>
            <Text>{summary}</Text>
        </Card>
    )
}