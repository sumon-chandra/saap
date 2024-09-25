import { Button } from "@nextui-org/react";
import { FC } from "react";
import { PiSpinnerLight } from "react-icons/pi";

interface Props {
  isLoading: boolean;
  variant: "Signup" | "Login";
}

const AuthButton: FC<Props> = ({ isLoading, variant }) => {
  return (
    <Button
      type="submit"
      variant="ghost"
      className="w-full flex items-center justify-center gap-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded border-none bg-saap-bg-dark-primary hover:!bg-saap-bg-dark-primary hover:shadow dark:shadow-saap-primary"
      disabled={isLoading}
      disableAnimation
    >
      {isLoading && <PiSpinnerLight size={18} className="animate-spin" />}
      <span>{variant}</span>
    </Button>
  );
};

export default AuthButton;
