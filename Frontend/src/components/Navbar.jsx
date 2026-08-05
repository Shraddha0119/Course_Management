import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          CMS
        </Link>

        {/* Navigation */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/courses" className="hover:text-yellow-300">
            Courses
          </Link>

          <Link to="/login" className="hover:text-yellow-300">
            Login
          </Link>

          <Link to="/register" className="hover:text-yellow-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;