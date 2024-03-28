"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "next/navigation";
import ProfilePostList from "./components/ProfilePostList";
import { FullUserTypes } from "@/src/types";
import PostList from "../../components/post/PostList";
import { useGetProfile } from "@/src/hooks/useGetProfile";

const ProfilePage = () => {
	const { username } = useParams<{ username: string }>();

	const { data: profile, isFetching, isError } = useGetProfile(username);
	// const {data: profile, isFetching, isError} = useGetProfile(username);

	// console.log(profile);

	return (
		<div>
			<ProfileHeader profile={profile!} isLoading={isFetching} isError={isError} />
			<div className="mt-10">
				{/* <ProfilePostList posts={profile?.posts} /> */}
				<PostList profilePosts userId={profile?.id!} />
			</div>
		</div>
	);
};

export default ProfilePage;
