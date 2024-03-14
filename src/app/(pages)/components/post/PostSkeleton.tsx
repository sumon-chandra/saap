import { Card, Divider, Skeleton } from "@nextui-org/react";

const PostSkeleton = () => {
	return (
		<Card
			className="w-full space-y-5 p-4 shadow-none bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"
			radius="sm"
		>
			<div className="flex gap-6 items-center">
				<Skeleton className="rounded-full h-11 w-11 bg-saap-bg-primary dark:bg-saap-bg-dark-primary"></Skeleton>
				<div className="space-y-1">
					<Skeleton className="w-44 h-4 rounded-lg bg-saap-bg-primary dark:bg-saap-bg-dark-primary"></Skeleton>
					<Skeleton className="w-32 h-3 rounded-lg bg-saap-bg-primary dark:bg-saap-bg-dark-primary"></Skeleton>
				</div>
			</div>
			<Skeleton className="w-3/5 h-3 rounded-lg bg-saap-bg-primary dark:bg-saap-bg-dark-primary"></Skeleton>
			<Skeleton className="w-4/5 h-3 rounded-lg bg-saap-bg-primary dark:bg-saap-bg-dark-primary"></Skeleton>
			<div className="space-y-3">
				<Skeleton className="rounded-lg bg-saap-bg-primary dark:bg-saap-bg-dark-primary h-40"></Skeleton>
				<Skeleton className="w-2/5 h-10 rounded-full bg-saap-bg-primary dark:bg-saap-bg-dark-primary"></Skeleton>
			</div>
		</Card>
	);
};

export default PostSkeleton;
