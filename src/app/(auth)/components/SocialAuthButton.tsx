"use client";

import { Button } from "@nextui-org/react";
import { FC } from "react";
import { PiSpinnerLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

interface SocialAuthButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const SocialAuthButton: FC<SocialAuthButtonProps> = ({
  disabled,
  isLoading,
  onClick,
}) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant="ghost"
      disableAnimation
      disabled={disabled}
      className="flex items-center justify-center w-full gap-3 rounded text-sm bg-saap-bg-dark-primary hover:!bg-saap-bg-dark-primary font-semibold disabled:opacity-50 disabled:cursor-not-allowed border-none hover:shadow dark:shadow-saap-primary"
    >
      <span>Continue with </span>
      {isLoading ? (
        <PiSpinnerLight size={14} className="animate-spin" />
      ) : (
        <FaGoogle size={14} />
      )}
    </Button>
  );
};

export default SocialAuthButton;
