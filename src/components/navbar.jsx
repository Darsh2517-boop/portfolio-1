import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-5">
        <h1 className="text-2xl font-bold text-cyan-400">Darsh.</h1>

        <ul className="flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;