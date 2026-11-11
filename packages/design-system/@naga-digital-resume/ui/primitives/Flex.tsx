import type { HTMLAttributes, ReactNode } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    gap?: 'space-between';
    className?: string;
};

export function Flex ({
    children,
    gap = 'space-between',
    className = ''
}: FlexProps) {
    return (
        <div style={{display: "flex"}} className={`ndr-flex ndr-flex-${gap} ${className}`}>
            {children}
        </div>
    )
}