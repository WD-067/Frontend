import { Link, useNavigate } from "react-router";

function PostCard({ post }) {
  // const navigate = useNavigate();

  return (
    <div className="px-4 py-2 bg-gray-100 rounded shadow flex flex-col justify-between gap-4 min-h-56">
      <div className="space-y-4">
        <span className="text-xl font-semibold">{post.title}</span>
        <p className="line-clamp-4">{post.body}</p>
      </div>
      {/* <button
        className="bg-gray-900 text-white px-4 py-2 text-sm rounded"
        onClick={() => {
          navigate(`/posts/${post.id}`);
        }}
      >
        View More
      </button> */}
      <Link
        className="bg-gray-900 text-white px-4 py-2 text-sm rounded"
        to={`/posts/${post.id}`}
      >
        View More
      </Link>
    </div>
  );
}

export default PostCard;
