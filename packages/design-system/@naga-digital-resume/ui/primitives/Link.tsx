import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;

}

export function Link({
    children,
    className = '',
    ...props
}: LinkProps) {
    return (
        <a className={`ndr-link ${className}`.trim()} {...props}>
            {children}
        </a>
    )
}