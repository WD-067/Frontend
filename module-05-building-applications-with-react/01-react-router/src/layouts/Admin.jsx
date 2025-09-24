import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function AdminLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
