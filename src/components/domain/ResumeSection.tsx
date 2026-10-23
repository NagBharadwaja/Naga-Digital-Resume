import { Heading } from "../primitives/Heading";

function toSectionId(title: string): string {
    const sectionId = title.toLowerCase().replace(/\s+/g, '-');
    return sectionId;
}

type ResumeSectionProps = {
    title: string;
    children: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
};

export function ResumeSection(props: ResumeSectionProps) {
    const sectionId = toSectionId(props.title);
    const contentId = `${sectionId}-content`;

    return (
        <section className="resume-section" aria-labelledby={sectionId}>
            <div className="section-heading-wrap" onClick={props.onToggle}>
                <Heading level="h3" size="section" id={sectionId}>
                    {props.title}
                </Heading>
                <ExpandCollapseToggle
                    contentId={contentId}
                    isExpanded={props.isExpanded}
                    title={props.title}
                />
            </div>
            <div id={contentId} hidden={!props.isExpanded}>
                {props.children}
            </div>
        </section>
    )
}

export function ExpandCollapseToggle (
    { contentId, isExpanded, title }: { contentId: string, isExpanded: boolean; title: string; }) {
    return (
        <button
            className="section-toggle"
            type="button"
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title} section}`}
            aria-expanded={isExpanded}
            aria-controls={contentId}
        >
            <svg
                className="section-toggle-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>
    )
}