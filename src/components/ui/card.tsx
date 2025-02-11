import { Paper, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <Paper className={className} elevation={1} sx={{ borderRadius: 2 }}>
            {children}
        </Paper>
    );
}

interface CardHeaderProps {
    className?: string;
    children: ReactNode;
}

export function CardHeader({
    className,
    children,
    ...props
}: CardHeaderProps) {
    return (
        <div
            className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardTitle({ className, children }: { className?: string, children: ReactNode }) {
    return (
        <Typography variant="h5" className={className}>
            {children}
        </Typography>
    );
}

export function CardContent({ className, children }: { className?: string, children: ReactNode }) {
    return (
        <Box sx={{ p: 3 }} className={className}>
            {children}
        </Box>
    );
} 