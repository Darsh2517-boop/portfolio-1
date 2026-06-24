function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          Darsh.
        </h1>

        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;