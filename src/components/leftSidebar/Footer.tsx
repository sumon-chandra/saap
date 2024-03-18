"use client";
import { ThemeSwitch } from "../../components/theme-switch";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { Button, Tooltip } from "@nextui-org/react";
import { MdLogout } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";

const Footer = () => {
	const { status } = useSession();
	const handleLogout = () => {
		signOut({ redirect: false });
	};
	return (
		<div className="absolute bottom-0 flex items-center justify-between w-full py-5 border-t">
			<Tooltip showArrow content="Switch theme">
				<Button
					size="sm"
					isIconOnly
					className="flex items-center justify-center p-0 transition-all bg-transparent rounded-full"
				>
					<ThemeSwitch />
				</Button>
			</Tooltip>
			<Tooltip showArrow content="Settings">
				<Button
					size="sm"
					isIconOnly
					className="flex items-center justify-center p-0 transition-all bg-transparent rounded-full"
				>
					<FiSettings className="text-xl" />
				</Button>
			</Tooltip>
			<Tooltip showArrow content="Help">
				<Button
					size="sm"
					isIconOnly
					className="flex items-center justify-center p-0 transition-all bg-transparent rounded-full"
				>
					<FiHelpCircle className="text-xl" />
				</Button>
			</Tooltip>
			<Tooltip showArrow content="Logout">
				<Button
					onClick={handleLogout}
					size="sm"
					disabled={
						status === "loading"
					}
					isIconOnly
					className="flex items-center justify-center p-0 transition-all bg-transparent rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<MdLogout className="text-xl" />
				</Button>
			</Tooltip>
		</div>
	);
};

export default Footer;
