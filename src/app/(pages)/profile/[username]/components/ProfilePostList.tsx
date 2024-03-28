import { FullPostTypes } from "@/src/types";
import { FC } from "react";
import SinglePost from "../../../components/post/Post";

interface ProfilePostListProps {
	posts: FullPostTypes[];
}
const ProfilePostList: FC<ProfilePostListProps> = ({ posts }) => {
	return (
		<div className="flex flex-col gap-4">
			{posts?.map((post) => (
				<SinglePost key={post.id} post={post} />
			))}
		</div>
	);
};

export default ProfilePostList;
