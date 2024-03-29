import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useEditPost = () => {
	const queryClient = useQueryClient();
	const editFn = async (id: string) => {
		const { data } = await axios.put(`/api/post/${id}`);
		queryClient.invalidateQueries({ queryKey: ["posts"] });
		return data;
	};

	return useMutation({ mutationFn: editFn });
};

export default useEditPost;
