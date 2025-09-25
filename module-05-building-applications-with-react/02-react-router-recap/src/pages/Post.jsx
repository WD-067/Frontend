import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch(console.error);
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
        <p>userId: {post.userId}</p>
      </div>
    </>
  );
}

export default Post;
