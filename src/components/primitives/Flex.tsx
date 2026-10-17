import type { ReactNode } from 'react';

type FlexProps = {
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
        <div style={{display: "flex"}} className={`flex flex-${gap} ${className}`}>
            {children}
        </div>
    )
}