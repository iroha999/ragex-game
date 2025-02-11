import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

export function Button({
    className,
    variant = "contained",
    size = "medium",
    children,
    onClick
}: {
    className?: string,
    variant?: "text" | "outlined" | "contained",
    size?: "small" | "medium" | "large",
    children: ReactNode,
    onClick?: () => void
}) {
    return (
        <MuiButton
            className={className}
            variant={variant}
            size={size}
            onClick={onClick}
        >
            {children}
        </MuiButton>
    );
} 