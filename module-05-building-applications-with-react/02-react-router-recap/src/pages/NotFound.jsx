import { Link, useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="spacing-y-4 p-4">
      <h1 className="text-2xl font-bold">404 Not Found</h1>
      <button
        className="px-4 py-2 rounded bg-gray-900 text-white"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
