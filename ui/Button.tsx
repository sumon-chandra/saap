"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}


const Button: FC<ButtonProps> = ({ type, children, danger, disabled, fullWidth, onClick, secondary }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="w-full bg-red-300"
        >
            {children}
        </button>
    );
};

export default Button;