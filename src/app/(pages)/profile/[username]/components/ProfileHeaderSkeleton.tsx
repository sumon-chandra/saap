import SaapSkeleton from "@/src/components/ui/SaapSkeleton";
import { Divider } from "@nextui-org/react";

const ProfileHeaderSkeleton = () => {
	return (
		<SaapSkeleton>
			<div>
				<div className="flex items-start justify-between">
					<div className="w-[150px] h-[150px] rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
					<div className="flex flex-col items-end gap-3">
						<div className="w-24 h-6 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
						<div className="w-52 h-8 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
						<div className="flex items-center justify-end gap-3">
							<div className="w-24 h-4 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
							<div className="w-24 h-4 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
						</div>
						<div className="w-24 h-4 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
					</div>
				</div>
				<div className="mt-6 space-y-4">
					<Divider />
					<div className="w-full h-4 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
					<div className="w-3/4 h-4 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
				</div>
			</div>
		</SaapSkeleton>
	);
};

export default ProfileHeaderSkeleton;
