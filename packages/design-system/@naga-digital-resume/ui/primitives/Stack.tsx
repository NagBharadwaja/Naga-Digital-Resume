import type { HTMLAttributes, ReactNode } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
};

export function Stack ({
    children,
    gap = 'md',
    className = ''
}: StackProps) {
    return (
        <div className={`ndr-stack ndr-stack-${gap} ${className}`}>
            {children}
        </div>
    )
}