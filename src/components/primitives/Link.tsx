import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;

}

export function Link({
    children,
    className = '',
    ...props
}: LinkProps) {
    return (
        <a className={`link ${className}`.trim()} {...props}>
            {children}
        </a>
    )
}