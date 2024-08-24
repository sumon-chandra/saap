import SaapSkeleton from "@/src/components/ui/SaapSkeleton";

const PostSkeleton = () => {
  return (
    <SaapSkeleton className="w-full space-y-5 p-4 shadow-none bg-saap-bg-primary dark:bg-saap-bg-dark-primary">
      <div className="flex gap-6 items-center">
        <div className="rounded-full h-11 w-11 bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"></div>
        <div className="space-y-1">
          <div className="w-44 h-4 rounded-lg bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"></div>
          <div className="w-32 h-3 rounded-lg bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"></div>
        </div>
      </div>
      <div className="w-3/5 h-3 rounded-lg bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"></div>
      <div className="w-4/5 h-3 rounded-lg bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"></div>
      <div className="space-y-3">
        <div className="rounded-lg bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary h-40"></div>
        <div className="w-2/5 h-10 rounded-full bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary"></div>
      </div>
    </SaapSkeleton>
  );
};

export default PostSkeleton;
