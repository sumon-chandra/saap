import { FullUserTypes } from "@/src/types";
import Image from "next/image";
import { FC } from "react";

interface ProfileHeaderProps {
	profile: FullUserTypes;
	isLoading: boolean;
	isError: boolean;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ profile, isLoading, isError }) => {
	if (isLoading || !profile) {
		return <p>Loading...</p>;
	}

	return (
		<header className="relative flex items-center justify-between my-20">
			<div>
				<Image
					height={150}
					width={150}
					src={profile?.image || "/user.png"}
					alt={`${profile?.name}'s profile image.`}
					className="rounded-full"
				/>
			</div>
			<div className="text-right space-y-3">
				<h4 className="text-2xl font-semibold">{profile?.name}</h4>
				<small>{profile?.userName}</small>
				<span className="absolute top-0 right-0 rounded-3xl py-1 px-3 bg-saap-bg-primary-light text-xs text-saap-primary font-semibold dark:text-saap-text-dark-primary dark:bg-saap-bg-dark-secondary">
					Edit profile
				</span>
			</div>
		</header>
	);
};

export default ProfileHeader;
