import { create } from "zustand";
import { PostsRefetchStoreType } from "../types";

export const useRefetchPosts = create<PostsRefetchStoreType>((set) => ({
	refetchPost: false,
	setRefetchPosts: (isRefetch) => set({ refetchPost: isRefetch }),
}));
