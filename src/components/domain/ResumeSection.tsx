import { Heading } from "../primitives/Heading";

function toSectionId(title: string): string {
    const sectionId = title.toLowerCase().replace(/\s+/g, '-');
    return sectionId;
}

type ResumeSectionProps = {
    title: string;
    children: React.ReactNode;
};

export function ResumeSection(props: ResumeSectionProps) {
    const sectionId = toSectionId(props.title);
    return (
        <section className="resume-section" aria-labelledby={sectionId}>
            <div className="section-heading-wrap">
                <Heading level="h3" size="section" id={sectionId}>
                    {props.title}
                </Heading>
            </div>
            {props.children}
        </section>
    )
}