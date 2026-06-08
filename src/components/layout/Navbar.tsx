const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-sky-400">Gauri Gujar</h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#about" className="hover:text-sky-400">
            About
          </a>

          <a href="#journey" className="hover:text-sky-400">
            Journey
          </a>

          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
          <a href="#experience" className="hover:text-sky-400">
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
