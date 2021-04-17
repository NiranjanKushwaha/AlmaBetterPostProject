import React, { useEffect, useState } from "react";
import PostItem from "./Post";
import { getPosts } from "./request";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="homeClass">
      {posts &&
        posts.map((post) => {
          return (
            <PostItem uid={post.userId} pid={post.id} title={post.title} />
          );
        })}
    </div>
  );
};

export default Home;
