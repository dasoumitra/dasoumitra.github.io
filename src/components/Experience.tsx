const experiences = [
  {
    period: "2023 — PRESENT",
    company: "Tata Technologies Limited",
    role: "Senior Engineer",
    location: "Airbus Offshore Development Centre · Bengaluru, India",

    focus: "Aerospace Manufacturing · Industrialisation · Engineering Consulting",

    areas: [
      {
        title: "A350 VTP Manufacturing",
        description:
          "Developed manufacturing solutions and tooling concepts using CATIA V5 to optimise vacuum bagging processes for Airbus A350 Vertical Tail Plane production.",
      },
      {
        title: "Production Ramp-Up",
        description:
          "Supported Airbus Stade production ramp-up through manufacturing process optimisation, MES implementation, process validation and collaboration with Manufacturing Engineering and Production teams.",
      },
      {
        title: "Airbus Toulouse",
        description:
          "Led Airbus Business Process improvements as Project Manager for the FU.IN.03.02 department, focusing on industrial system development and jigs & tools processes.",
      },
      {
        title: "Flight Testing Tools",
        description:
          "Served as SME for an extensive audit of tools used by Airbus 1V Flight Testing and 1YY Avionics teams, using Skywise to improve data accessibility and operational efficiency.",
      },
    ],

    achievement:
      "Led the 1V tools audit project and earned the “Mission Impossible” award for outstanding execution. Conducted on-site engagements at Airbus Toulouse and Stade to implement tailored process improvements.",
  },

  {
    period: "2022 — 2023",
    company: "Bharat Forge Limited",
    role: "Assistant Manager — Aerospace Division",
    location: "Turbomachinery & Aerospace Test Facility · Pune, India",

    focus: "Turbomachinery Testing · Test Facility Development · Automation",

    areas: [
      {
        title: "Turbomachinery Testing",
        description:
          "Conducted performance testing of turbomachinery components for aerospace, locomotive and defence applications at a large-scale turbomachinery test facility.",
      },
      {
        title: "Test Facility Development",
        description:
          "Designed adapters, mounting beds and piping systems for marine turbocharger testing using PTC Creo Parametric and SolidWorks, while overseeing manufacturing and integration.",
      },
      {
        title: "ACM Test Bed",
        description:
          "Spearheaded the development and automation of an Air Cycle Machine test bed for Limited Qualification Tests and successfully supported subsequent testing.",
      },
      {
        title: "Engineering Data & Monitoring",
        description:
          "Developed an IoT-based turbomachinery health monitoring system using real-time data acquisition to support predictive maintenance and reduce downtime.",
      },
    ],

    achievement:
      "Improved test-result delivery time by 10% through optimised resource allocation, successfully adapted marine turbochargers for testing, and executed ACM test-bed automation.",
  },

  {
    period: "2020 — 2021",
    company: "FHWN Aircraft Conceptual Design",
    role: "Performance Analyst",
    location: "Wiener Neustadt, Austria",

    focus: "Aircraft Design · Performance Analysis · Digital Aircraft Engineering",

    areas: [
      {
        title: "Trogon Autonomous Cargo UAV",
        description:
          "Designed and optimised an autonomous cargo aircraft, modifying aerodynamic and structural characteristics using CATIA V5.",
      },
      {
        title: "Aircraft Performance",
        description:
          "Performed drag estimation, aircraft sizing, performance analysis and flight-envelope calculations using MATLAB and Excel.",
      },
      {
        title: "Digital Aircraft Design",
        description:
          "Developed a Python-based converter tool to integrate CATIA aircraft models with CPACS Creator and improve the aircraft design workflow.",
      },
    ],

    achievement:
      "Supported the successful flight of the Trogon prototype, created its geometry in CPACS Creator and reduced the simulation period by approximately 60% compared with conventional ANSYS-based analysis.",
  },

  {
    period: "2019",
    company: "Stuttgart Wind Energy · Institute of Aircraft Design",
    role: "Master Thesis Researcher",
    location: "Stuttgart, Germany",

    focus: "FEA · Structural Analysis · Engineering Optimisation",

    areas: [
      {
        title: "Finite Element Analysis",
        description:
          "Conducted FEA of wind turbine generators using ANSYS Mechanical to simulate mechanical deformation under various load cases.",
      },
      {
        title: "Structural Optimisation",
        description:
          "Developed an optimised structural topology for a parameterised generator design.",
      },
    ],

    achievement:
      "Identified the minimum required load points for effective structural analysis, supporting more efficient evaluation of future generator designs.",
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

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering across
            <br />
            aerospace programmes.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            Experience spanning aerospace manufacturing, turbomachinery
            testing, aircraft performance engineering and engineering
            consulting across India and Europe.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="mt-20">

          {/* Vertical timeline */}
          <div className="relative">

            <div className="absolute left-[7px] top-3 hidden h-[calc(100%-24px)] w-px bg-blue-500/20 md:block" />

            <div className="space-y-16">

              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.period}`}
                  className="relative"
                >

                  {/* Timeline marker */}
                  <div className="absolute left-0 top-1 hidden md:block">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border border-blue-400 bg-[#07111f]">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-[180px_1fr]">

                    {/* Date */}
                    <div className="pl-8">
                      <p className="text-xs font-medium tracking-[0.18em] text-blue-400">
                        {experience.period}
                      </p>
                    </div>

                    {/* Main content */}
                    <div
                      className={`${
                        index !== experiences.length - 1
                          ? "border-b border-white/10 pb-16"
                          : ""
                      }`}
                    >

                      {/* Company heading */}
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {experience.company}
                        </h3>

                        <p className="mt-2 text-base text-slate-300">
                          {experience.role}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {experience.location}
                        </p>

                        {/* Focus */}
                        <div className="mt-5">
                          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                            Focus
                          </p>

                          <p className="mt-2 text-sm text-blue-300">
                            {experience.focus}
                          </p>
                        </div>
                      </div>

                      {/* Areas */}
                      <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">

                        {experience.areas.map((area) => (
                          <div
                            key={area.title}
                            className="border-l border-blue-500/30 pl-5"
                          >
                            <h4 className="text-sm font-medium text-white">
                              {area.title}
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              {area.description}
                            </p>
                          </div>
                        ))}

                      </div>

                      {/* Achievement */}
                      <div className="mt-10 overflow-hidden border border-blue-500/20 bg-blue-500/[0.04]">

                        <div className="flex items-center gap-3 border-b border-blue-500/10 px-5 py-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400">
                            Key Achievement
                          </p>
                        </div>

                        <p className="px-5 py-5 text-sm leading-7 text-slate-300">
                          {experience.achievement}
                        </p>

                      </div>

                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}