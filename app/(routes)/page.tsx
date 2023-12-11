import MainHeader from "@/components/mainHeader/MainHeader";
import PostList from "./components/PostList";

export default function Home() {
     return (
          <main
               className="relative"
          >
               <div className="flex flex-col flex-grow h-auto gap-2 bg-transparent rounded-lg md:w-3/4 lg:w-1/2 w-full mx-auto">
                    <MainHeader />
                    <div className="overflow-hidden rounded-md">
                         <PostList />
                    </div>
               </div>
          </main>
     );
}
