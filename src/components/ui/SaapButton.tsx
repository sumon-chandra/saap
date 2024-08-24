import { SaapButtonProps } from "@/src/types";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { FC } from "react";
import { PiSpinnerLight } from "react-icons/pi";

const SaapButton: FC<SaapButtonProps> = ({
  value,
  variant,
  isLoading,
  type = "button",
}) => {
  return (
    <Button
      disableAnimation
      radius="none"
      size="sm"
      type={type}
      disabled={isLoading}
      isLoading={isLoading}
      className={clsx(
        "bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary rounded font-semibold disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        variant === "action" &&
          "bg-saap-primary dark:bg-saap-primary text-saap-black"
      )}
    >
      {isLoading ? <PiSpinnerLight size={18} className="animate-spin" /> : null}
      <span>{value}</span>
    </Button>
  );
};

export default SaapButton;
