import "./style.css";

import Post from "../../containers/post";
import AllPosts from "../../containers/allPosts";
function Home() {
  return (
    <div className="home homePage">
      <Post />
      <AllPosts />
    </div>
  );
}

export default Home;
