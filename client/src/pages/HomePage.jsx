import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchPost = async () => {
      await axios
        .get(url)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPost();
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
