import type { HTMLAttributes, ReactNode } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
    level?: HeadingLevel;
    size?: 'page' | 'section' | 'card' | '';
}

export function Heading ({
    children,
    level = 'h2',
    size = 'section',
    className = '',
    ...props
}: HeadingProps) {
    const Tag = level;

    return (
        <Tag
            className={`ndr-heading ndr-heading-${size} ${className}`.trim()}
            {...props}
        >
            {children}
        </Tag>
    );
}