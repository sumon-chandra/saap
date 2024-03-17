"use client";

import { FullLikeTypes, FullPostTypes } from "../../../../../types";
import { Button } from "@nextui-org/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { FC, useEffect, useMemo, useState } from "react";
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

	const { data } = useSession();

	const { mutate, isSuccess: isLikeSuccess } = useMutation({
		mutationFn: (newLike: LikeMutateProps) => {
			return axios.post("/api/like", newLike);
		},
	});

	const { data: likes, refetch: refetchLike } = useQuery<
		FullLikeTypes[]
	>({
		queryKey: ["like"],
		queryFn: async () => {
			return await axios
				.get(`/api/like`)
				.then((response) => response.data);
		},
	});

	const handleLike = () => {
		setIsLiked(true);
		mutate({
			postId: post.id,
			userId: data?.user.id!,
		});
	};

	const postLikes = likes?.filter((like) => like.postId === post.id);

	useEffect(() => {
		postLikes?.forEach((postLike) => {
			if (data?.user?.id === postLike.user.id) {
				setIsLiked(true);
				console.log("Same user!");
			}
		});
	}, [postLikes?.length]);

	useMemo(() => {
		if (isLikeSuccess) {
			refetchLike();
			setIsLiked(true);
		}
	}, [isLikeSuccess, refetchLike]);

	return (
		<div className="flex items-center justify-start">
			<Button
				isIconOnly
				radius="full"
				className={clsx(
					"bg-saap-transparent rounded-full p-0 cursor-pointer text-2xl",
					isLiked &&
						"text-saap-secondary"
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
