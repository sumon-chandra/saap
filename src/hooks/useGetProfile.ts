import { useQuery } from "@tanstack/react-query";
import { FullUserTypes } from "../types";
import axios from "axios";

export const useGetProfile = (username: string) => {
	const profile = useQuery<FullUserTypes>({
		queryKey: ["profile"],
		queryFn: async () => {
			return await axios.get(`/api/profile/${username}`).then((response) => response.data);
		},
	});
	return profile;
};
