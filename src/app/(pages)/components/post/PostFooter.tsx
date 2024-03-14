import { FC } from "react";
import { FullPostTypes } from "@/types";
import { CardFooter } from "@nextui-org/react";
import clsx from "clsx";
import {
	FaHeart,
	FaRegHeart,
	FaComment,
	FaRegComment,
	FaShareSquare,
	FaBookmark,
	FaRegBookmark,
} from "react-icons/fa";
import LikeButton from "./buttons/LikeButton";

interface PostFooterProps {
	post: FullPostTypes;
}

const PostFooter = ({ post }: PostFooterProps) => {
	// const likes = await getLikes(post.id)
	// console.log({ "post-footer-like": likes });

	return (
		<CardFooter className="flex items-center justify-start gap-6">
			<div className="flex items-center justify-start">
				<LikeButton post={post} />
				{/* <div>{likes.length}</div> */}
			</div>
			<div className={clsx("flex items-center gap-2")}>
				<FaRegComment />
				{/* {comment > 0 && <div>{comment}</div>} */}
			</div>
			<div
				className={clsx(
					"cursor-pointer p-1 rounded-full"
				)}
			>
				<FaRegBookmark />
			</div>
			<div className="flex items-center gap-2">
				<FaShareSquare />
				{/* {share > 0 && <div>{share}</div>} */}
			</div>
		</CardFooter>
	);
};

export default PostFooter;
