import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-4 shadow-xl">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
      </ul>
    </nav>

  );
}
export default Navbar;