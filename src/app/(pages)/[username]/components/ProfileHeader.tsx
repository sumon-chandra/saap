import { FullUserTypes } from "@/src/types";
import { FC } from "react";

interface ProfileHeaderProps {
	profile: FullUserTypes;
	isLoading: boolean;
	isError: boolean;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ profile, isLoading, isError }) => {
	// console.log(profile);

	return (
		<div>
			<h3 className="text-xl font-bold">User Profile</h3>
			<h4 className="text-lg font-semibold">{profile?.name}</h4>
			<h4 className="text-lg font-semibold">Posts: {profile?.posts?.length}</h4>
		</div>
	);
};

export default ProfileHeader;
