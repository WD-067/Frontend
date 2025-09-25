import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default MainLayout;
