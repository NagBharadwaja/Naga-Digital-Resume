import { Flex } from "../primitives/Flex";
import { Gap } from "../primitives/Gap";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";

type ResumeHeaderProps = {
    name: string;
    title: string;
    onExpandAll: () => void;
    onCollapseAll: () => void;  
};

export function ResumeHeader (props: ResumeHeaderProps) {
    return (
        <Flex>
            <div>
                <Text className='eyebrow'>Profile</Text>
                <Heading level="h1" size="page">
                    {props.name}
                </Heading>
                <Gap size={'md'}/>
                <Heading level="h2" size="">
                    {props.title}
                </Heading>
            </div>
            <div className="resume-header-actions" role="group" aria-label="Resume sections">
                <button type="button" onClick={props.onExpandAll}>
                Expand all
                </button>
                <button type="button" onClick={props.onCollapseAll}>
                Collapse all
                </button>
            </div>
        </Flex>
    )
}