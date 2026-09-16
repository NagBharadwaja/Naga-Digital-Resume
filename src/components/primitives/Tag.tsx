import type { HTMLAttributes, ReactNode } from 'react';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
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
            className={`tag tag-${tone} ${className}`.trim()}
            {...props}
        >
            {children}
        </span>
    )
}