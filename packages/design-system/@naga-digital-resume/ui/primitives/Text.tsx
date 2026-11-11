import type { HTMLAttributes, ReactNode } from 'react';

export type TextTone = 'primary' | 'secondary' | 'muted' | 'accent';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    tone?: TextTone;
    size?: 'body' | 'summary' | 'meta';
}

export function Text ({
    children,
    tone = 'secondary',
    size = 'body',
    className = '',
    ...props
}: TextProps) {
    return (
        <p
            className={`ndr-text ndr-text-${tone} text-${size} ${className}`.trim()}
            {...props}
        >
            {children}
        </p>
    )
}