import { useState, useEffect } from "react";
import PostCard from "./PostCard";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 px-4 py-2">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
