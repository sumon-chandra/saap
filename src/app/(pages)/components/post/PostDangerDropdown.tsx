"use client";
import { FC } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { MdReportGmailerrorred, MdNotInterested } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import useDeletePost from "@/src/hooks/useDeletepost";
import { Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import clsx from "clsx";

interface Props {
	post: Post;
}

const PostDangerDropdown: FC<Props> = ({ post }) => {
	const { mutate } = useDeletePost();
	const { data } = useSession();

	const isOwnPost = post.userId === data?.user?.id;

	const handleDeletePost = () => {
		mutate(post?.id);
	};

	return (
		<Dropdown className="bg-saap-bg-primary md:w-72 dark:bg-saap-bg-dark-primary">
			<DropdownTrigger>
				<div className="cursor-pointer hover:bg-saap-bg-secondary hover:dark:bg-saap-bg-dark-primary p-2 rounded-full">
					<BsThreeDots />
				</div>
			</DropdownTrigger>
			<DropdownMenu className="rounded">
				<DropdownItem
					className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
					key="not-interested"
				>
					<div className="flex items-center gap-2 justify-start">
						<MdNotInterested />
						<span>Not interested</span>
					</div>
				</DropdownItem>
				<DropdownItem
					className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
					key="report"
				>
					<div className="flex items-center gap-2 justify-start">
						<MdReportGmailerrorred />
						<span>Report</span>
					</div>
				</DropdownItem>
				<DropdownItem
					className={clsx(
						`data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary`,
						!isOwnPost ? "hidden" : "block"
					)}
					key="delete-post"
				>
					<div
						className="flex items-center gap-2 justify-start text-saap-danger"
						onClick={handleDeletePost}
					>
						<MdReportGmailerrorred />
						<span>Delete post</span>
					</div>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default PostDangerDropdown;
