import PostList from './components/PostList'

const Home = () => {
     return (
          <div className="flex flex-col flex-grow h-auto gap-2 bg-transparent rounded-lg md:w-3/4 lg:w-1/2 w-full mx-auto">
               <div className="overflow-hidden rounded-md">
                    <PostList />
               </div>
          </div>
     )
}

export default Home