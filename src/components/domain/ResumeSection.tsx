import { Heading } from "../primitives/Heading";

function toSectionId(title: string): string {
    const sectionId = title.toLowerCase().replace(/\s+/g, '-');
    return sectionId;
}
export function ResumeSection({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="resume-section" aria-labelledby={toSectionId(title)}>
            <div className="section-heading-wrap">
                <Heading level="h3" size="section" id={toSectionId(title)}>
                    {title}
                </Heading>
            </div>
            {children}
        </section>
    )
}