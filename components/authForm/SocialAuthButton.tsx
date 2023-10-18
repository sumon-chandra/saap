"use client";
import { FC } from "react";
import { IconType } from "react-icons";

interface SocialAuthButtonProps {
    icon: IconType;
    onClick: () => void;
}

const SocialAuthButton: FC<SocialAuthButtonProps> = ({ icon: Icon, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex justify-center w-full px-4 py-2 text-xl text-green-500 rounded-md shadow-sm bg-green-50 ring-1 ring-inset ring-green-600"
        >
            <Icon />
        </button>
    );
};

export default SocialAuthButton;