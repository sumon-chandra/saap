"use client";
import { Button } from "@nextui-org/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";
import { PiSpinnerLight } from "react-icons/pi";

interface SocialAuthButtonProps {
    icon: IconType;
    onClick: () => void;
    children: ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
}

const SocialAuthButton: FC<SocialAuthButtonProps> = ({ children, disabled, isLoading, icon: Icon, onClick }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            variant="ghost"
            disableAnimation
            disabled={disabled}
            className="flex items-center justify-center w-full gap-3 rounded py-2 md:text-xl bg-saap-transparent hover:!bg-saap-transparent font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span>{children}</span>
            {isLoading ? (
                <PiSpinnerLight size={18} className="animate-spin" />
            ) : <Icon size={20} />}
        </Button>
    );
};

export default SocialAuthButton;