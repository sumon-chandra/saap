import { useQuery } from "@tanstack/react-query";
import { FullPostTypes } from "../types";
import axios from "axios";
import { useSession } from "next-auth/react";

interface Props {
	profilePosts?: boolean;
	userId?: string;
}

export const useGetPosts = ({ profilePosts, userId }: Props) => {
	const { data, status } = useSession();

	const PATH_URL = profilePosts ? `/api/profile-posts/${data?.user?.id}` : "/api/post";

	const posts = useQuery<FullPostTypes[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			return await axios(PATH_URL).then((response) => response.data);
		},
	});

	return posts;
};
