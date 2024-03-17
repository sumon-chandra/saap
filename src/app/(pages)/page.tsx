import HomepageHeader from "./components/HomepageHeader";
import PostList from "./components/post/PostList";

const Home = async () => {
	return (
		<div className="">
			<div>
				<HomepageHeader />
			</div>
			<div className="overflow-hidden rounded-md">
				<PostList />
			</div>
		</div>
	);
};

export default Home;
