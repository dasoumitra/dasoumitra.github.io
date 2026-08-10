"use client";

import { useState } from "react";

type Category =
  | "All"
  | "Professional"
  | "Aircraft & Space"
  | "Engineering"
  | "Research";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  description: string;
  tools: string[];
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
    featured: true,
  },
  {
    number: "02",
    title: "Flight Testing",
    subtitle: "Tools Audit",
    category: "Professional",
    description:
      "Large-scale audit of tools supporting Airbus Flight Testing and Avionics teams, improving tool visibility and operational efficiency.",
    tools: ["Skywise", "Tool Audit", "Process Improvement"],
    featured: true,
  },
  {
    number: "03",
    title: "Airbus Toulouse",
    subtitle: "Industrial Systems",
    category: "Professional",
    description:
      "Business process improvement project focused on industrial system development and jigs & tools processes.",
    tools: ["Project Management", "Process Improvement", "Jigs & Tools"],
    featured: true,
  },
  {
    number: "04",
    title: "Turbomachinery",
    subtitle: "Test Facility Development",
    category: "Professional",
    description:
      "Performance testing, test facility development and automation activities for aerospace turbomachinery.",
    tools: ["Creo", "SolidWorks", "Testing", "Automation"],
    featured: true,
  },
  {
    number: "05",
    title: "Trogon",
    subtitle: "Autonomous Cargo Aircraft",
    category: "Aircraft & Space",
    description:
      "Preliminary design and performance analysis of an autonomous cargo aircraft, including aerodynamics, sizing and flight-envelope analysis.",
    tools: ["CATIA V5", "MATLAB", "Python", "CPACS"],
    featured: true,
  },
  {
    number: "06",
    title: "Ancile",
    subtitle: "CubeSat Mission Concept",
    category: "Aircraft & Space",
    description:
      "Mission concept for a CubeSat fleet designed to provide advance solar-storm information for protection of a crewed Mars transfer mission.",
    tools: ["Mission Design", "Propulsion", "Delta-V Analysis"],
  },
  {
    number: "07",
    title: "Unmanned Space Vehicle",
    subtitle: "Mars Propulsion Concept",
    category: "Aircraft & Space",
    description:
      "Conceptual design of a monopropellant propulsion system for an unmanned Mars vehicle, including mission and performance analysis.",
    tools: ["Rocket Propulsion", "MATLAB", "Mission Analysis"],
  },
  {
    number: "08",
    title: "Aircraft Design",
    subtitle: "Wing & Stabiliser Structure",
    category: "Aircraft & Space",
    description:
      "Preliminary design of wing and stabiliser structures for a conceptual aircraft powered by two Kuznetsov NK-93 engines.",
    tools: ["CATIA V5", "Aircraft Structures"],
  },
  {
    number: "09",
    title: "Composite Manufacturing",
    subtitle: "CFRP Bracket",
    category: "Engineering",
    description:
      "Designed and manufactured a CFRP bracket using the vacuum bagging technique.",
    tools: ["Composite Manufacturing", "Vacuum Bagging"],
  },
  {
    number: "10",
    title: "Computational Fluid Dynamics",
    subtitle: "NACA 0012 Airfoil",
    category: "Engineering",
    description:
      "Evaluated turbulence models for the simulation of flow over a NACA 0012 airfoil.",
    tools: ["ANSYS Fluent", "CFD", "Aerodynamics"],
  },
  {
    number: "11",
    title: "Aircraft Wing",
    subtitle: "Stress & Weight Optimisation",
    category: "Engineering",
    description:
      "Performed finite element analysis to optimise model aircraft wing thickness and weight for a defined load case.",
    tools: ["ANSYS Mechanical", "FEA", "Structural Analysis"],
  },
  {
    number: "12",
    title: "Wind Turbine Generator",
    subtitle: "Master's Thesis",
    category: "Research",
    description:
      "FEA-based investigation of mechanical deformation and structural topology for a parameterised wind turbine generator design.",
    tools: ["ANSYS Mechanical", "FEA", "Structural Optimisation"],
    featured: true,
  },
  {
    number: "13",
    title: "Aluminium Alloy",
    subtitle: "Bachelor's Thesis",
    category: "Research",
    description:
      "Investigation of the effects of hot and cold rolling on the mechanical and microstructural properties of aluminium alloy.",
    tools: ["Materials", "Metal Forming", "Manufacturing"],
  },
];

const filters: Category[] = [
  "All",
  "Professional",
  "Aircraft & Space",
  "Engineering",
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
              <div className="relative mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition group-hover:text-blue-400">
                Explore Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

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