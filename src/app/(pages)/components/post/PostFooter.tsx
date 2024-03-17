import { CardFooter } from "@nextui-org/react";
import clsx from "clsx";
import { FaRegComment, FaShareSquare, FaRegBookmark } from "react-icons/fa";
import { FullPostTypes } from "../../../../types";
import LikeButton from "./buttons/LikeButton";

interface PostFooterProps {
	post: FullPostTypes;
}

const PostFooter = ({ post }: PostFooterProps) => {
	return (
		<CardFooter className="flex items-center justify-start gap-6">
			<div className="flex items-center justify-start">
				<LikeButton post={post} />
			</div>
			<div
				className={clsx(
					"flex items-center gap-2 text-2xl"
				)}
			>
				<FaRegComment />
				{/* {comment > 0 && <div>{comment}</div>} */}
			</div>
			<div className="cursor-pointer p-1 rounded-full text-2xl">
				<FaRegBookmark />
			</div>
			<div className="flex items-center gap-2 text-2xl">
				<FaShareSquare />
			</div>
		</CardFooter>
	);
};

export default PostFooter;
