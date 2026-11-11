import type { HTMLAttributes, ReactNode } from 'react';

export interface GapProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    size?: 'md';
};

export function Gap ({
    children,
    size = 'md',
}: GapProps) {
    return (
        <div className={`ndr-gap-${size}`}>
            {children}
        </div>
    )
}