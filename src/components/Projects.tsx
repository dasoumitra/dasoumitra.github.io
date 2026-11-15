"use client";

import { useState } from "react";

type Category =
  | "All"
  | "Professional"
  | "Academic"
  | "Research";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  description: string;
  tools: string[];
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
  number: "01",
  title: "A350 VTP",
  subtitle: "Manufacturing Ramp-Up",
  category: "Professional",
  description:
    "Manufacturing process optimisation and tooling concepts supporting Airbus A350 Vertical Tail Plane production and ramp-up.",
  tools: ["CATIA V5", "Manufacturing", "Industrialisation"],
  image: "/a350-vtp-ramp-up.png",
  featured: true,
},
   {
  number: "02",
  title: "A350 VTP",
  subtitle: "Vacuum-Bagging Improvement",
  category: "Professional",
  description:
    "Manufacturing process optimisation focused on reducing manual handling, improving ergonomics and developing practical solutions for A350 VTP vacuum-bagging operations.",
  tools: ["Process Optimisation", "Tooling", "CATIA V5", "Automation"],
  image: "/a350-vacuum-bagging.png",
  featured: true,
},
  {
  number: "03",
  title: "Flight Testing",
  subtitle: "Application Portfolio Assessment",
  category: "Professional",
  description:
    "Assessment of engineering application portfolios to identify technical debt, operational risks and modernization opportunities across Flight Testing and engineering environments.",
  tools: [
    "Portfolio Assessment",
    "Risk Analysis",
    "Modernization",
    "Digital Engineering",
  ],
  image: "/flight-testing-tools-audit.png",
  featured: true,
},

  {
    number: "04",
    title: "Industrial Systems",
    subtitle: "Jigs & Tools Process Improvement",
    category: "Professional",
    description:
      "Industrial system improvement across jigs & tools, technical process standardisation and ABP optimisation, supporting tooling design activities and cross-site alignment across Airbus industrial teams.",
    tools: ["Project Management", "Process Improvement", "Jigs & Tools"],
    image: "/airbus-industrial-systems.png",
    featured: true,
  },
  {
  number: "05",
  title: "Turbomachinery",
  subtitle: "Test Infrastructure & Performance Analysis",
  category: "Professional",
  description:
    "Adaptation and integration of existing turbomachinery test infrastructure for marine, locomotive and defence applications, including test-bed modifications, instrumentation, testing and performance analysis.",
  tools: [
    "Test Engineering",
    "Creo",
    "Instrumentation",
    "Performance Analysis",
  ],
  image: "/turbomachinery-test-infrastructure.png",
  featured: true,
},
{
  number: "06",
  title: "Air Cycle Machine",
  subtitle: "Test-Bed Development & Qualification",
  category: "Professional",
  description:
    "Modification and improvement of an existing Air Cycle Machine test facility, including mounting, piping, instrumentation, qualification-test logic and execution of the first successful qualification campaign.",
  tools: [
    "Test Engineering",
    "Qualification",
    "Instrumentation",
    "Automation",
  ],
  image: "/air-cycle-machine-acm.png",
  featured: true,
},
  {
  number: "07",
  title: "Trogon",
  subtitle: "Autonomous Cargo Aircraft",
  category: "Academic",
  description:
    "Aircraft performance analysis for an autonomous cargo aircraft, using project CFD results to evaluate take-off, landing, climb, cruise and propulsion requirements.",
  tools: ["CATIA V5", "MATLAB", "Python", "CPACS"],
  image: "/trogon-hero.png",
  featured: true,
},
  {
    number: "08",
    title: "Ancile",
    subtitle: "CubeSat Mission Concept",
    category: "Academic",
    description:
      "Mission concept for a CubeSat fleet designed to provide advance solar-storm information for protection of a crewed Mars transfer mission.",
    tools: ["Mission Design", "Propulsion", "Delta-V Analysis"],
    image: "/ancile-cubesat-constellation.png",
    
  },
  {
    number: "09",
    title: "Unmanned Space Vehicle",
    subtitle: "Mars Propulsion Concept",
    category: "Academic",
    description:
      "Conceptual design of a monopropellant propulsion system for an unmanned Mars vehicle, including mission and performance analysis.",
    tools: ["Rocket Propulsion", "MATLAB", "Mission Analysis"],
     image: "/unmanned-mars-propulsion.png",
  },
  {
    number: "10",
    title: "Aircraft Design",
    subtitle: "Wing & Stabiliser Structure",
    category: "Academic",
    description:
      "Preliminary design of wing and stabiliser structures for a conceptual aircraft powered by two Kuznetsov NK-93 engines.",
    tools: ["CATIA V5", "Aircraft Structures"],
     image: "/aircraft-design-structure.png",
  },
  {
    number: "11",
    title: "Composite Manufacturing",
    subtitle: "CFRP Bracket",
    category: "Academic",
    description:
      "Designed and manufactured a CFRP bracket using the vacuum bagging technique.",
    tools: ["Composite Manufacturing", "Vacuum Bagging"],
    image: "/composite-cfrp-bracket.png",
  },
  {
    number: "12",
    title: "Computational Fluid Dynamics",
    subtitle: "NACA 0012 Airfoil",
    category: "Academic",
    description:
      "Evaluated turbulence models for the simulation of flow over a NACA 0012 airfoil.",
    tools: ["ANSYS Fluent", "CFD", "Aerodynamics"],
    image: "/computational-fluid-dynamics.png",
  },
  {
  number: "13",
  title: "Aircraft Wing",
  subtitle: "FEA & Weight Optimisation",
  category: "Academic",
  description:
    "Finite element analysis and structural optimisation of a model aircraft wing using ANSYS, with thickness sizing to satisfy deformation, strain and buckling requirements while reducing weight.",
  tools: [
    "ANSYS Mechanical",
    "FEA",
    "Structural Analysis",
    "Optimisation",
  ],
  image: "/aircraft-wing-fea.png",
  featured: true,
  },
  {
  number: "14",
  title: "Wind Turbine Generator",
  subtitle: "FEA & Load-Point Optimisation",
  category: "Research",
  description:
    "Master's thesis investigating the structural behaviour of a direct-drive permanent-magnet wind turbine generator using CATIA V5 and ANSYS Mechanical, with a focus on load-point distribution, deformation and structural-analysis efficiency.",
  tools: [
    "ANSYS Mechanical",
    "CATIA V5",
    "FEA",
    "Structural Analysis",
  ],
  image: "/wind-turbine-generator.png",
  featured: true,
  },
  {
  number: "15",
  title: "Aluminium Alloy",
  subtitle: "Hot & Cold Rolling Study",
  category: "Research",
  description:
    "Bachelor's thesis investigating the effect of hot and cold rolling on the mechanical and microstructural properties of aluminium alloy, including development of a two-in-one rolling mill and experimental hardness and impact testing.",
  tools: [
    "Metal Forming",
    "Rolling Process",
    "Materials Testing",
    "Manufacturing",
  ],
  image: "/aluminium-rolling-study.png",
  featured: true,
  },
];

const filters: Category[] = [
  "All",
  "Professional",
  "Academic",
  "Research",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#081522] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Selected engineering
            <br />
            work.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            From aerospace manufacturing and turbomachinery testing to
            aircraft design, space systems and engineering research.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "text-slate-500 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {filteredProjects.map((project) => (
            <article
              key={project.number}
              className={`group relative overflow-hidden border border-white/10 bg-[#07111f] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 ${
                project.featured ? "min-h-[360px]" : "min-h-[300px]"
              }`}
            >


             {/* Project image */}
{project.image && (
  <div className="relative -mx-7 -mt-7 mb-7 overflow-hidden">
    <img
      src={project.image}
      alt={`${project.title} — ${project.subtitle}`}
      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
  </div>
)}
 {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition duration-500 group-hover:bg-blue-500/10" />

              {/* Number */}
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-blue-400/70">
                  {project.number}
                </span>

                <span className="text-xs uppercase tracking-[0.15em] text-slate-600">
                  {project.category}
                </span>
              </div>

              {/* Project title */}
              <div className="relative mt-16">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-blue-400">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="relative mt-6 max-w-xl text-sm leading-6 text-slate-500">
                {project.description}
              </p>

              {/* Tools */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Explore */}
{project.title === "Trogon" ? (
  <a
    href="/projects/trogon"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>

) : project.title === "A350 VTP" &&
  project.subtitle === "Manufacturing Ramp-Up" ? (
  <a
    href="/projects/a350-vtp"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>

) : project.title === "A350 VTP" &&
  project.subtitle === "Vacuum-Bagging Improvement" ? (
  <a
    href="/projects/a350-vacuum-bagging"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>

  ) : project.title === "Flight Testing" ? (
  <a
    href="/projects/flight-testing"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Industrial Systems" ? (
  <a
    href="/projects/industrial-systems"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
   
   ) : project.title === "Turbomachinery" ? (
  <a
    href="/projects/turbomachinery"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
   
   ) : project.title === "Air Cycle Machine" ? (
  <a
    href="/projects/air-cycle-machine"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
   ) : project.title === "Ancile" ? (
  <a
    href="/projects/ancile"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Unmanned Space Vehicle" ? (
  <a
    href="/projects/unmanned-mars"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>

    ) : project.title === "Aircraft Design" ? (
  <a
    href="/projects/aircraft-design"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Composite Manufacturing" ? (
  <a
    href="/projects/composite-manufacturing"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Aircraft Wing" ? (
  <a
    href="/projects/aircraft-wing"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Computational Fluid Dynamics" ? (
  <a
    href="/projects/computational-fluid-dynamics"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Wind Turbine Generator" ? (
  <a
    href="/projects/wind-turbine-generator"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
  
  ) : project.title === "Aluminium Alloy" ? (
  <a
    href="/projects/aluminium-alloy"
    className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400"
  >
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>

) : (
  <div className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400">
    Explore Project
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </div>
)}

            </article>
          ))}

        </div>

        {/* Project count */}
        <div className="mt-8 text-xs tracking-[0.15em] text-slate-600">
          {filteredProjects.length.toString().padStart(2, "0")} PROJECTS
          DISPLAYED
        </div>

      </div>
    </section>
  );
}