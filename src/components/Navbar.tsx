export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#07111f]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.2em] text-white"
        >
          SOUMITRA DAS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-slate-400 transition hover:text-white">
            About
          </a>

          <a href="#experience" className="text-sm text-slate-400 transition hover:text-white">
            Experience
          </a>

          <a href="#projects" className="text-sm text-slate-400 transition hover:text-white">
            Projects
          </a>

          <a href="#education" className="text-sm text-slate-400 transition hover:text-white">
            Education
          </a>

          <a href="#contact" className="text-sm text-slate-400 transition hover:text-white">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}