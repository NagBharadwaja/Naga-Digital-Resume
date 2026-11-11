import type { HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={`ndr-container ${className}`}>
            {children}
        </div>
    )
}