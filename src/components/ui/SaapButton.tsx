import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { FC } from "react";

interface SaapButtonProps {
	value: string;
	onClick?: () => void;
	variant: "default" | "action";
}

const SaapButton: FC<SaapButtonProps> = ({ value, onClick, variant }) => {
	return (
		<Button
			disableAnimation
			radius="none"
			size="sm"
			onClick={onClick}
			className={clsx(
				"bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary rounded font-semibold",
				variant === "action" && "bg-saap-primary dark:bg-saap-primary"
			)}
		>
			{value}
		</Button>
	);
};

export default SaapButton;
