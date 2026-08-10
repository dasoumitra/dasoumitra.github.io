export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#081522] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          {/* Main contact message */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let's build
              <br />
              something meaningful.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-slate-400">
              I&apos;m interested in opportunities across aerospace
              engineering, manufacturing, industrialisation, testing and
              aircraft development.
            </p>
          </div>

          {/* Contact links */}
          <div className="border-t border-white/10 lg:border-t-0">
            <div className="divide-y divide-white/10">

              <a
                href="mailto:dasoumitra@gmail.com"
                className="group flex items-center justify-between py-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition group-hover:text-blue-400">
                    dasoumitra@gmail.com
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dasoumitra-aero/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition group-hover:text-blue-400">
                    Connect with me
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  ↗
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    Resume
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition group-hover:text-blue-400">
                    View my CV
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  ↓
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}