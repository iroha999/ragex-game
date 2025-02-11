import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

export function Input({
    className,
    value,
    onChange,
    placeholder
}: {
    className?: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string
}) {
    return (
        <TextField
            className={className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            fullWidth
            variant="outlined"
            autoComplete="off"
            autoFocus
            inputProps={{
                autoCapitalize: "none",
                autoCorrect: "off",
                spellCheck: "false"
            }}
        />
    );
} 