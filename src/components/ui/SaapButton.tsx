import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { FC } from "react";
import { PiSpinnerLight } from "react-icons/pi";

interface SaapButtonProps {
	value: string;
	onClick?: () => void;
	variant: "default" | "action";
	isLoading?: boolean;
}

const SaapButton: FC<SaapButtonProps> = ({ value, onClick, variant, isLoading }) => {
	return (
		<Button
			disableAnimation
			radius="none"
			size="sm"
			onClick={onClick}
			disabled={isLoading}
			className={clsx(
				"bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary rounded font-semibold disabled:cursor-not-allowed disabled:opacity-50 text-sm",
				variant === "action" && "bg-saap-primary dark:bg-saap-primary text-saap-black"
			)}
		>
			{isLoading ? <PiSpinnerLight size={18} className="animate-spin" /> : null}
			<span>{value}</span>
		</Button>
	);
};

export default SaapButton;
