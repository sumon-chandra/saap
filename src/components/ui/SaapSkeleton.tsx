import { FC, HTMLProps, ReactNode } from "react";

interface SaapSkeletonProps {
	children: ReactNode;
	className?: HTMLProps<HTMLElement>["className"];
}
const SaapSkeleton: FC<SaapSkeletonProps> = ({ children, className }) => {
	return <div className={`animate-pulse w-full ${className}`}>{children}</div>;
};

export default SaapSkeleton;
