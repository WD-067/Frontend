import { use } from "react";
import { Link } from "react-router";

import { AuthContext } from "../context/AuthContext";
import Button from "./Button";

const NavBar = () => {
  const { user, signOut } = use(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          React Context
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link to="/profile" className="p-0">
              <button className="btn btn-ghost w-full">Profile</button>
            </Link>
          </li>
          <li>
            {user ? (
              <Button onClick={signOut} className="btn btn-secondary w-full">
                Sign Out
              </Button>
            ) : (
              <Link to="/signin" className="p-0">
                <button className="btn btn-secondary w-full">Sign In</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
