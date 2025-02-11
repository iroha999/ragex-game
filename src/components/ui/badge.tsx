import { Chip } from "@mui/material";
import { ReactNode } from "react";

export function Badge({
    variant = "default",
    className,
    children
}: {
    variant?: "default" | "secondary",
    className?: string,
    children: ReactNode
}) {
    return (
        <Chip
            className={className}
            variant={variant === "secondary" ? "outlined" : "filled"}
            label={children}
        />
    );
} 