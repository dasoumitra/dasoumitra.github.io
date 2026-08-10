const education = [
  {
    period: "2017 — 2020",
    degree: "Master of Science",
    field: "Aerospace Engineering",
    institution: "University of Applied Sciences Wiener Neustadt",
    location: "Wiener Neustadt, Austria",
    focusAreas: [
      "Aircraft Design",
      "Aerodynamics",
      "Flight Dynamics",
      "CFD",
      "FEA",
      "Rocket Propulsion",
      "Satellite Design",
    ],
    thesis: "Analysis of Mechanical Behaviour of Generators in Wind Turbines",
  },
  {
    period: "2012 — 2016",
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    institution: "West Bengal University of Technology",
    location: "India",
    focusAreas: [
      "Mechanical Design",
      "Manufacturing",
      "Materials",
      "Structural Analysis",
      "CAD",
    ],
    thesis:
      "Effect of Hot and Cold Rolling on the Mechanical and Microstructural Properties of Aluminium Alloy",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 bg-[#07111f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The foundation
            <br />
            behind the engineering.
          </h2>
        </div>

        {/* Education timeline */}
        <div className="mt-20 space-y-16">

          {education.map((item, index) => (
            <article
              key={item.institution}
              className={`grid gap-8 md:grid-cols-[180px_1fr] ${
                index !== education.length - 1
                  ? "border-b border-white/10 pb-16"
                  : ""
              }`}
            >

              {/* Period */}
              <div>
                <p className="text-xs font-medium tracking-[0.18em] text-blue-400">
                  {item.period}
                </p>
              </div>

              {/* Education details */}
              <div>

                {/* Degree */}
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-blue-400">
                    {item.degree}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {item.field}
                  </h3>

                  <p className="mt-3 text-base text-slate-300">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.location}
                  </p>
                </div>

                {/* Focus areas */}
                <div className="mt-10">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Focus Areas
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.focusAreas.map((focus) => (
                      <span
                        key={focus}
                        className="border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-slate-400"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thesis */}
                <div className="mt-8 border-l border-blue-500/30 pl-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Thesis
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                    {item.thesis}
                  </p>
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}