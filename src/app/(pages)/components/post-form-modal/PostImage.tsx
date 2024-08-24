import Image from "next/image";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";

interface PostImageProps {
  isVisible: boolean;
  isImageLoading: boolean;
  imageUrl: string;
  onImageDelete: () => void;
}

// Image skeleton
const skeleton = (
  <div className="w-full md:w-96 space-y-5 p-2 bg-saap-transparent rounded-xl">
    <div className="animate-pulse flex space-x-4">
      <div className="bg-default-300 dark:bg-saap-bg-dark-secondary w-full h-52 rounded-lg"></div>
    </div>
  </div>
);

const PostImage: FC<PostImageProps> = ({
  isImageLoading,
  imageUrl,
  isVisible,
  onImageDelete,
}) => {
  return (
    <div className="py-2">
      {isVisible && (
        <div className="relative w-full md:w-96 drop-shadow-xl shadow-saap-bg-dark-primary dark:shadow-saap-bg-dark-secondary group">
          {isImageLoading
            ? skeleton
            : imageUrl && (
                <>
                  <button
                    className="transition-all duration-300 text-saap-text-dark-secondary bg-saap-bg-dark-primary drop-shadow-lg absolute top-2 right-2 p-1 rounded-full"
                    onClick={onImageDelete}
                  >
                    <IoMdClose size={18} />
                  </button>
                  <Image
                    src={imageUrl}
                    width={528}
                    height={300}
                    alt="Post image"
                    className="rounded-lg bg-saap-secondary"
                    loading="lazy"
                  />
                </>
              )}
        </div>
      )}
    </div>
  );
};

export default PostImage;
