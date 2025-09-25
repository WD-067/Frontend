import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-4 bg-gray-800 text-white">
      <span>Logo</span>
      <ul className="flex gap-4 list-none">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isActive ? "underline" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={({ isActive, isPending }) =>
              isActive ? "underline" : ""
            }
          >
            Posts Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isActive ? "underline" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
