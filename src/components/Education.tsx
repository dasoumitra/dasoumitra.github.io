const experiences = [
  {
    period: "09/2023 — Present",
    role: "Senior Engineer",
    company: "Tata Technologies · Airbus Offshore Development Centre",
    location: "Bengaluru, India",
    title: "Airbus Engineering & Industrialisation",
    description:
      "Manufacturing, consulting & engineering process improvement",
    details: [
      "Developed manufacturing solutions and tooling concepts using CATIA V5 to optimise vacuum bagging processes for Airbus A350 Vertical Tail Plane (VTP) production.",
      "Supported Airbus Stade production ramp-up through manufacturing process optimisation, MES implementation, process validation, and collaboration with Manufacturing Engineering and Production teams.",
      "Led Airbus Business Process (ABP) improvements as Project Manager for the FU.IN.03.02 department in Toulouse, focusing on industrial system development and jigs & tools processes.",
      "Served as Subject Matter Expert for an extensive audit of tools used by Airbus 1V Flight Testing and 1YY Avionics Hardware/Software & Simulations teams, utilising Skywise.",
    ],
    achievement:
      "Led the 1V tools audit covering 151 tools, earning the “Mission Impossible” award for outstanding execution. Conducted on-site engagements at Airbus Toulouse and Stade.",
  },
  {
    period: "01/2022 — 09/2023",
    role: "Assistant Manager · Aerospace Division",
    company: "Bharat Forge Limited",
    location: "Pune, India",
    title: "Turbomachinery Testing & Test Facility Development",
    description:
      "Performance testing, test facility development & engineering",
    details: [
      "Conducted performance testing of turbomachinery components for aerospace, locomotive, and defence applications.",
      "Designed adapters, mounting beds, and piping systems for Marine Turbocharger testing using PTC Creo Parametric and SolidWorks.",
      "Spearheaded the development and automation of an Air Cycle Machine test bed for Limited Qualification Tests.",
      "Developed an IoT-based turbomachinery health monitoring system using real-time data acquisition.",
    ],
    achievement:
      "Improved test result delivery time by 10% through optimised resource allocation and successfully adapted Marine turbochargers for testing within the facility.",
  },
  {
    period: "07/2020 — 10/2021",
    role: "Performance Analyst",
    company: "FHWN Aircraft Conceptual Design",
    location: "Wiener Neustadt, Austria",
    title: "Aircraft Performance & Conceptual Design",
    description:
      "Aircraft design, performance analysis & digital engineering",
    details: [
      "Designed and optimised the autonomous cargo UAV Trogon, modifying aerodynamic and structural concepts using CATIA V5.",
      "Conducted drag estimation, aircraft performance analysis, and flight envelope calculations using MATLAB and Excel.",
      "Developed a Python-based converter tool integrating CATIA aircraft models with CPACSCreator.",
    ],
    achievement:
      "Supported the successful flight of the Trogon prototype and reduced the simulation period by approximately 60% compared with conventional ANSYS-based analysis.",
  },
  {
    period: "03/2019 — 08/2019",
    role: "Master Thesis Researcher",
    company: "Stuttgart Wind Energy · Institute of Aircraft Design",
    location: "Stuttgart, Germany",
    title: "Structural Analysis & FEA",
    description:
      "Finite element analysis and structural optimisation",
    details: [
      "Conducted finite element analysis of wind turbine generators using ANSYS Mechanical.",
      "Simulated mechanical deformation under various load cases.",
      "Developed an optimised structural topology for a parameterised generator design.",
    ],
    achievement:
      "Identified the minimum required load points for effective structural analysis, supporting future wind turbine design improvements.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 bg-[#07111f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering across
            <br />
            aerospace programmes.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            Experience spanning aerospace manufacturing, industrialisation,
            turbomachinery testing, aircraft performance and engineering
            consulting.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 ml-1 border-l border-blue-500/30">

          {experiences.map((experience, index) => (
            <div
              key={experience.period}
              className="relative pb-16 pl-10 last:pb-0"
            >

              {/* Timeline node */}
              <div className="absolute -left-[8px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-blue-400 bg-[#07111f]">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Period */}
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                {experience.period}
              </p>

              {/* Role */}
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {experience.role}
              </h3>

              {/* Company */}
              <p className="mt-1 text-sm text-slate-400">
                {experience.company}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {experience.location}
              </p>

              {/* Experience title */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-slate-200">
                  {experience.title}
                </h4>

                <p className="mt-2 text-sm text-blue-300/70">
                  {experience.description}
                </p>
              </div>

              {/* Details */}
              <ul className="mt-6 max-w-4xl space-y-3">
                {experience.details.map((detail) => (
                  <li
                    key={detail}
                    className="relative pl-5 text-sm leading-7 text-slate-400"
                  >
                    <span className="absolute left-0 top-[0.7rem] h-1 w-1 rounded-full bg-slate-600" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Achievement */}
              <div className="mt-7 border-l-2 border-blue-500/40 pl-4">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                  Key Achievement
                </p>

                <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-300">
                  {experience.achievement}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}