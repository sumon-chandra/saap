import { getPosts } from '../_actions/getPosts'
import HomepageHeader from './components/HomepageHeader'
import PostList from './components/PostList'

const Home = async () => {
     const posts = await getPosts()
     return (
          <div className="">
               <div>
                    <HomepageHeader />
               </div>
               <div className="overflow-hidden rounded-md">
                    <PostList posts={posts!} />
               </div>
          </div>
     )
}

export default Home