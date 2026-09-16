import type { ReactNode } from 'react';

type StackProps = {
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
        <div className={`stack stack-${gap} ${className}`}>
            {children}
        </div>
    )
}