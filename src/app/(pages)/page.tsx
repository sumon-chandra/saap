import HomepageHeader from "./components/HomepageHeader";
import PostList from "./components/post/PostList";

const Home = async () => {
	return (
		<div>
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
