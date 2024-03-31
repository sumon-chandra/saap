import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PostProps } from "../app/(pages)/components/post-form-modal/PostFormModal";

const useEditPost = (id: string) => {
	const queryClient = useQueryClient();
	const editFn = async (post: PostProps) => {
		const { data } = await axios.put(`/api/post/${id}`, post);
		queryClient.invalidateQueries({ queryKey: ["posts"] });

		return data;
	};

	return useMutation({ mutationFn: editFn });
};

export default useEditPost;
