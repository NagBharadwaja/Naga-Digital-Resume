import type { HTMLAttributes, ReactNode } from 'react';

type TextTone = 'primary' | 'secondary' | 'muted' | 'accent';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
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
            className={`text text-${tone} text-${size} ${className}`.trim()}
            {...props}
        >
            {children}
        </p>
    )
}