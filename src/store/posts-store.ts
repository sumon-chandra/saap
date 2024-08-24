import { create } from "zustand";
import { PostsRefetchStoreType } from "../types";

export const useRefetchPosts = create<PostsRefetchStoreType>((set) => ({
	refetchPosts: false,
	setRefetchPosts: (isRefetch) => set({ refetchPosts: isRefetch }),
}));
