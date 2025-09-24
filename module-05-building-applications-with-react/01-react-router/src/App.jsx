import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import MainLayout from "./layouts/Main";
import AdminLayout from "./layouts/Admin";
import ProductDetails from "./components/ProductDetails";

const NotFound = () => (
  <div className="p-4 text-center">
    <img
      src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
      alt="404 Not Found"
      className="mx-auto mb-4 max-w-sm"
    />
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<h1>Contact </h1>} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<p>admin dashboard</p>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
