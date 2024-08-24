import { FC, useState } from "react";
import { CardBody } from "@nextui-org/react";
import { Post } from "@prisma/client";
import Image from "next/image";

interface PostContentProps {
  post: Post;
}

const PostContent: FC<PostContentProps> = ({ post }) => {
  const [showFullBody, setShowFullBody] = useState(false);

  const isPostBodyLarge = post.body.length >= 200;
  const slicedPostBody = post?.body.slice(0, 200);

  const seeLessOrMoreButton = () => {
    if (showFullBody) {
      return (
        <span
          className="font-semibold text-default-500 cursor-pointer ms-2"
          onClick={() => setShowFullBody(false)}
        >
          ...see less
        </span>
      );
    } else {
      return (
        <span
          className="font-semibold text-default-500 cursor-pointer ms-2"
          onClick={() => setShowFullBody(true)}
        >
          ...see more
        </span>
      );
    }
  };

  return (
    <CardBody>
      <div className="flex flex-col gap-4">
        <div className="whitespace-pre-wrap">
          {isPostBodyLarge ? (
            <>
              <span>{showFullBody ? post.body : slicedPostBody}</span>
              {seeLessOrMoreButton()}
            </>
          ) : (
            post.body
          )}
        </div>
        {post.image && (
          <div className="relative overflow-hidden rounded-2xl drop-shadow-xl w-fit mt-1.5 cursor-pointer">
            <Image
              loading="lazy"
              src={post.image}
              width={300}
              height={300}
              alt="Will add alt-text soon!"
              className="object-contain max-h-[320px] w-max  rounded-2xl"
            />
          </div>
        )}
      </div>
    </CardBody>
  );
};

export default PostContent;
