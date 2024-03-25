"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "next/navigation";

const ProfilePage = () => {
	const { username } = useParams();

	const {
		data: profile = [],
		isFetching,
		isError,
	} = useQuery({
		queryKey: ["profile"],
		queryFn: async () => {
			return await axios.get(`/api/${username}`).then((response) => response.data);
		},
		staleTime: 60000 * 10,
	});

	console.log(profile);

	return (
		<div>
			<ProfileHeader profile={profile[0]} isLoading={isFetching} isError={isError} />
			<h3>Profile page</h3>
		</div>
	);
};

export default ProfilePage;
