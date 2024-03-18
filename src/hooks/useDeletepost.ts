import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeletePost = () => {
	const queryClient = useQueryClient();
	const deleteFn = async (id: string) => {
		const { data } = await axios.delete(`/api/post/${id}`);
		queryClient.invalidateQueries({ queryKey: ["posts"] });
		return data;
	};

	return useMutation({ mutationFn: deleteFn });
};

export default useDeletePost;
