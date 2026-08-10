import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechnicalToolkit from "@/components/TechnicalToolkit";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(47,140,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(47,140,255,0.12) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="absolute right-[-10%] top-[15%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 pb-16 pt-28 lg:grid-cols-2 lg:px-8">

          <div className="relative z-20">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Aerospace Engineer
            </p>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
              SOUMITRA
              <br />
              DAS
            </h1>

            <div className="mt-8 h-[2px] w-16 bg-blue-500" />

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Aerospace manufacturing, testing and aircraft engineering
              across advanced aerospace programmes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
              >
                View Projects
                <span>→</span>
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-400 hover:text-white"
              >
                Download Resume
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="relative h-[420px] w-full lg:h-[550px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] sm:h-[400px] sm:w-[400px]" />

              <img
                src="/aerospace-hero.png"
                alt="Aerospace engineering technical illustration"
                className="relative z-10 w-full max-w-[650px] object-contain opacity-90"
              />
            </div>
          </div>

        </div>
      </section>

      <About />

      <Experience />

      <Projects />

      <TechnicalToolkit />

      <Education />

      <Contact />

      <footer className="border-t border-white/10 bg-[#07111f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Soumitra Das</p>

          <p className="uppercase tracking-[0.2em]">
            Aerospace Engineer
          </p>

          <a
            href="#home"
            className="transition hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}