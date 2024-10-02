import { Button } from "@nextui-org/react";
import { FC, ReactNode } from "react";
import { PiSpinnerLight } from "react-icons/pi";

interface Props {
  isLoading: boolean;
  variant?: "Signup" | "Login";
  socialBtn?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const AuthButton: FC<Props> = ({ isLoading, children, onClick, socialBtn }) => {
  return (
    <Button
      type={socialBtn ? "button" : "submit"}
      variant="ghost"
      className="w-full flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded border-none bg-saap-bg-secondary dark:bg-saap-bg-dark-primary hover:bg-saap-bg-secondary/10 hover:dark:!bg-saap-bg-dark-primary hover:shadow-xl"
      disabled={isLoading}
      disableAnimation
      {...(onClick && onClick)}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
