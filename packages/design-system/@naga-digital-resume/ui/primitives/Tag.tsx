import type { HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    tone?: 'technology' | 'skill';
}

export function Tag ({
    children,
    tone='technology',
    className,
    ...props
}: TagProps) {
    return (
        <span
            className={`ndr-tag ndr-tag-${tone} ${className}`.trim()}
            {...props}
        >
            {children}
        </span>
    )
}