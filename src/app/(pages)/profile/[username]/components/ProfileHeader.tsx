import { FullUserTypes } from "@/src/types";
import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import ProfileHeaderSkeleton from "./ProfileHeaderSkeleton";
import Image from "next/image";
import { Divider } from "@nextui-org/react";

interface ProfileHeaderProps {
	profile: FullUserTypes;
	isLoading: boolean;
	isError: boolean;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ profile, isLoading, isError }) => {
	return (
		<header className="my-10 md:my-20">
			{isLoading || !profile ? (
				<ProfileHeaderSkeleton />
			) : (
				<div>
					<div className="relative space-y-6 md:space-y-0 md:flex items-center justify-between">
						<div className="w-28 h-28 md:w-[150px] md:h-[150px] relative">
							{!profile?.image ? (
								<FaUserCircle className="text-[128px] md:text-[150px]" />
							) : (
								<Image
									fill
									src={profile?.image}
									alt={`${profile?.name}'s profile image.`}
									className="rounded-full"
								/>
							)}
						</div>
						<div className="md:text-right space-y-1">
							<h4 className="text-3xl font-semibold">
								{profile?.name}
							</h4>
							<div className="flex items-center justify-start md:justify-end gap-3">
								<p>0 followers</p>
								<p>0 following</p>
							</div>
							<small className="opacity-40">
								{profile?.userName}
							</small>
						</div>
						<span className="absolute right-0 top-0 rounded-3xl py-1 px-3 bg-saap-bg-primary-light text-xs text-saap-primary font-semibold dark:text-saap-text-dark-primary dark:bg-saap-bg-dark-secondary cursor-pointer select-none">
							Edit profile
						</span>
					</div>
					<div className="mt-6">
						<div className="my-3">+ add bio</div>
						<Divider />
					</div>
				</div>
			)}
		</header>
	);
};

export default ProfileHeader;
