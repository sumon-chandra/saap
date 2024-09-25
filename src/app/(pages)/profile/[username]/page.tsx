"use client";

import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "next/navigation";
import PostList from "../../components/post/PostList";
import { useGetProfile } from "@/src/hooks/useGetProfile";

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();

  const { data: profile, isFetching, isError } = useGetProfile(username);

  return (
    <div>
      <ProfileHeader
        profile={profile!}
        isLoading={isFetching}
        isError={isError}
        username={username}
      />
      <div className="mt-10">
        <div className="mb-4">
          <h3 className="text-center text-lg md:text-2xl font-bol">
            Your posts
          </h3>
        </div>
        <PostList profilePosts userId={profile?.id!} />
      </div>
    </div>
  );
};

export default ProfilePage;
