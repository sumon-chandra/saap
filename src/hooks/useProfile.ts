import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProfile = () => {
	const profile = useQuery({
		queryKey: ["profile"],
		queryFn: async () => {
			return await axios.get("/api/profile").then((res) => res.data);
		},
	});

	return profile;
};

export default useProfile;
