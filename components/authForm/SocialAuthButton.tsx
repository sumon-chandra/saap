"use client";
import { Button } from "@nextui-org/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface SocialAuthButtonProps {
    icon: IconType;
    onClick: () => void;
    children: ReactNode
}

const SocialAuthButton: FC<SocialAuthButtonProps> = ({ children, icon: Icon, onClick }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            variant="ghost"
            className="flex items-center justify-center w-full gap-3 px-4 py-8 text-sm rounded-md shadow-sm md:text-xl"
        >
            <span>{children}</span>
            <Icon size={20} />
        </Button>
    );
};

export default SocialAuthButton;