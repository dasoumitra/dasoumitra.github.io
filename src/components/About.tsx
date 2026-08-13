export default function About() {
  const journey = [
    {
      title: "Mechanical Engineering",
      description: "Foundation in design, mechanics and manufacturing",
    },
    {
      title: "Aerospace Engineering",
      description: "Aircraft systems, aerodynamics and flight",
    },
    {
      title: "Aircraft Design & Performance",
      description: "Conceptual design, aerodynamics and performance analysis",
    },
    {
      title: "Testing & Analysis",
      description: "Turbomachinery testing, FEA, CFD and engineering analysis",
    },
    {
      title: "Manufacturing & Industrialisation",
      description: "Process development, optimisation, production ramp-up, Airbus engineering & consulting",
    },
    
  ];

  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#081522] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* About text */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            About
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            From designing aircraft
            <br />
            to improving how they are built.
          </h2>

          <div className="mt-6 h-[2px] w-12 bg-blue-500" />

          <div className="mt-8 max-w-xl space-y-6 text-base leading-7 text-slate-400">
            <p>
              My journey in aerospace engineering began with a foundation in
              mechanical engineering and developed through aircraft design,
              performance analysis and aerospace systems.
            </p>

            <p>
              Through academic projects and professional experience, I have
              worked across aircraft design, structural analysis, testing,
              manufacturing and industrial engineering.
            </p>

            <p>
              Today, my work focuses on aerospace manufacturing,
              industrialisation and engineering improvement, with experience
              supporting Airbus programmes across systems engineering,
              manufacturing and consulting environments.
            </p>
          </div>
        </div>

        {/* Career journey */}
        <div>
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Career Journey
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 h-[calc(100%-8px)] w-px bg-blue-500/30" />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={item.title} className="relative flex gap-6">
                  
                  {/* Timeline node */}
                  <div className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border border-blue-400 bg-[#081522]">
                    <div className="absolute inset-[3px] rounded-full bg-blue-400" />
                  </div>

                  <div>
                    <p className="text-base font-medium text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}