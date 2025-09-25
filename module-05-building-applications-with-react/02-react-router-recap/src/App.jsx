import { Routes, Route } from "react-router";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
