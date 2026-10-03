import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";

type ResumeHeaderProps = {
    name: string;
    title: string;
};

export function ResumeHeader (props: ResumeHeaderProps) {
    return (
        <>
            <Text className='eyebrow'>Profile</Text>
            <Heading level="h1" size="page">
                {props.name}
            </Heading>
            <Heading level="h2" size="">
                {props.title}
            </Heading>
        </>
    )
}