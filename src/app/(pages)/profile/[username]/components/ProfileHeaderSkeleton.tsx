import SaapSkeleton from "@/src/components/ui/SaapSkeleton";
import { Divider } from "@nextui-org/react";

const ProfileHeaderSkeleton = () => {
	return (
		<SaapSkeleton>
			<div>
				<div className="md:flex items-start justify-between relative space-y-6 md:space-y-0">
					<div className="w-[150px] h-[150px] rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
					<div className="flex flex-col md:items-end items-start gap-3">
						<div className="absolute top-0 right-0 w-24 h-6 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-secondary" />
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
