const toolGroups = [
  {
    title: "CAD & Design Tools",
    tools: [
      "CATIA V5",
      "SolidWorks",
      "Siemens NX 12",
      "PTC Creo",
      "AutoCAD",
    ],
  },
  {
    title: "Simulation & Engineering Tools",
    tools: [
      "ANSYS Mechanical",
      "MATLAB",
      "Systems Tool Kit (STK)",
      "CPACS",
    ],
  },
  {
    title: "Programming & Data Tools",
    tools: [
      "Python",
      "C++",
      "C",
    ],
  },
  {
    title: "Systems & Engineering Platforms",
    tools: [
      "Cameo Systems Modeler",
      "SAP",
      "Skywise",
    ],
  },
  {
    title: "Project & Productivity Tools",
    tools: [
      "MS Project",
      "MS Office Suite",
      "Google Workspace",
    ],
  },
];

export default function TechnicalToolkit() {
  return (
    <section
      id="toolkit"
      className="border-t border-white/10 bg-[#081522] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Technical Toolkit
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tools behind
            <br />
            the engineering.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            A combination of engineering software, computational tools and
            practical aerospace capabilities developed through academic and
            professional projects.
          </p>
        </div>

        {/* Software categories */}
        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-5 py-7 md:grid-cols-[280px_1fr] md:items-start"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm text-slate-300 transition hover:text-blue-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}