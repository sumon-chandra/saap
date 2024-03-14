"use client";

import { FullLikeTypes, FullPostTypes } from "@/types";
import { Button } from "@nextui-org/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { FC, useMemo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeButtonProps {
	post: FullPostTypes;
}

interface LikeMutateProps {
	postId: string;
	userId: string;
}

const LikeButton: FC<LikeButtonProps> = ({ post }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [likeCount, setLikeCount] = useState<number>(
		post?.Likes?.length || 0
	);

	const { data } = useSession();

	const { mutate } = useMutation({
		mutationFn: (newLike: LikeMutateProps) => {
			return axios.post("/api/like", newLike);
		},
	});

	const handleLike = () => {
		setIsLiked(true);
		mutate({
			postId: post.id,
			userId: data?.user.id!,
		});
	};

	const { data: likes, refetch } = useQuery<FullLikeTypes[]>({
		queryKey: ["like"],
		queryFn: async () => {
			return await axios
				.get(`/api/like`)
				.then((response) => response.data);
		},
	});
	// console.log({ likes });

	useMemo(() => {
		setLikeCount((likeCount) => likeCount + 1);
		refetch();
		// console.log({ post });
	}, [refetch]);

	const postLikes = likes?.filter((like) => like.postId === post.id);

	return (
		<div className="flex items-center justify-start">
			<Button
				isIconOnly
				radius="full"
				className={clsx(
					"bg-saap-transparent rounded-full p-0 cursor-pointer",
					isLiked &&
						"bg-saap-bg-primary-light text-saap-secondary dark:bg-saap-bg-dark-primary"
				)}
			>
				{isLiked ? (
					<FaHeart />
				) : (
					<FaRegHeart
						onClick={handleLike}
					/>
				)}
			</Button>
			<div>{postLikes?.length}</div>
		</div>
	);
};

export default LikeButton;
