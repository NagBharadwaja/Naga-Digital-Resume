import type { ReactNode } from 'react';

type GapProps = {
    children?: ReactNode;
    size?: 'md';
};

export function Gap ({
    children,
    size = 'md',
}: GapProps) {
    return (
        <div className={`gap-${size}`}>
            {children}
        </div>
    )
}