import Link from "next/link";

export default function IndustrialSystemsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">

      {/* Back to Projects */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500 transition hover:text-blue-400"
        >
          <span>←</span>
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">

        <div className="max-w-4xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Professional · Industrial Engineering
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Industrial Systems
          </h1>

          <p className="mt-4 text-xl uppercase tracking-[0.15em] text-slate-400">
            Jigs & Tools Process Improvement
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Industrial system improvement activities for Airbus Toulouse,
            focused on jigs & tools engineering, technical process
            standardisation, Airbus Business Process optimisation and
            cross-site industrial alignment.
          </p>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Industrial Systems",
              "Jigs & Tools",
              "Process Optimisation",
              "ABP",
              "Technical Standardisation",
              "Cross-Site Coordination",
            ].map((tool) => (
              <span
                key={tool}
                className="border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-400"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>

        {/* Project Visual */}
        <div className="mt-14 overflow-hidden border border-white/10 bg-[#0b1828]">
          <img
            src="/airbus-industrial-systems.png"
            alt="Industrial systems and jigs and tools process improvement"
            className="h-auto w-full"
          />
        </div>

      </section>

      {/* Overview */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                01 · Project Overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Improving the industrial system behind jigs & tools activities.
              </h2>

            </div>

            <div>

              <p className="text-base leading-8 text-slate-400">
                The project supported Airbus industrial system development
                within the FU.IN.03.02 organisation in Toulouse. The work
                focused on improving business processes and technical
                interfaces associated with jigs & tools and other industrial
                activities.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Rather than treating individual procedures in isolation, the
                work examined how processes, technical references, roles,
                templates and supporting systems were interconnected and how
                improvements could be harmonised across Airbus sites.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Industrial Systems Analysis */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              02 · Industrial System Analysis
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Mapping processes, interfaces and technical dependencies.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              A key part of the work was understanding how industrial
              processes interacted with one another and where inconsistencies
              or gaps could affect execution. Process interconnectivity was
              analysed across manuals, procedures, instructions, templates and
              supporting technical information.
            </p>

          </div>

          {/* Process Flow */}
          <div className="mt-14 border border-white/10 bg-[#07111f] p-7 sm:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Industrial system improvement flow
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

              {[
                ["01", "Analyse", "Understand existing processes"],
                ["02", "Map", "Identify interfaces & dependencies"],
                ["03", "Standardise", "Harmonise technical approaches"],
                ["04", "Improve", "Optimise ABP & processes"],
                ["05", "Align", "Deploy changes across sites"],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="border border-white/10 p-5"
                >

                  <span className="font-mono text-xs text-blue-400/70">
                    {number}
                  </span>

                  <p className="mt-4 text-sm font-medium text-white">
                    {title}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Analysis Areas */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Process Interconnectivity",
                text: "Analysed relationships between industrial manuals, procedures, instructions, templates and supporting technical references.",
              },
              {
                title: "Interface Alignment",
                text: "Reviewed interfaces between industrial activities to identify gaps, inconsistencies and areas requiring clearer technical ownership.",
              },
              {
                title: "Technical Standardisation",
                text: "Supported harmonisation of technical approaches and reusable process structures across related industrial activities.",
              },
              {
                title: "Process Dependencies",
                text: "Identified dependencies between processes and supporting information to understand how changes could affect connected activities.",
              },
              {
                title: "ABP Improvement",
                text: "Used findings from industrial teams and process analysis to support continuous improvement of Airbus Business Processes.",
              },
              {
                title: "Cross-Site Feedback",
                text: "Integrated feedback from Airbus sites to identify recurring issues and opportunities for process improvement.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <h3 className="text-lg font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Jigs & Tools */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            03 · Jigs & Tools Engineering
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Supporting the engineering lifecycle of industrial tooling.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The work included technical support around jigs & tools
              activities, including process harmonisation and support for
              tooling design and industrialisation activities.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "Jigs & Tools Processes",
                text: "Reviewed and supported processes covering tooling development, technical review, acceptance and qualification activities.",
              },
              {
                number: "02",
                title: "Tooling Design Support",
                text: "Supported jigs & tools design activities and the alignment of technical requirements with industrial processes.",
              },
              {
                number: "03",
                title: "Process Harmonisation",
                text: "Identified opportunities to harmonise approaches across related jigs & tools activities and reduce process variation.",
              },
              {
                number: "04",
                title: "Technical Interfaces",
                text: "Analysed interfaces between tooling activities and associated industrial processes to improve continuity and clarity.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="border border-white/10 bg-[#07111f] p-7"
              >

                <span className="font-mono text-xs text-blue-400/70">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ABP Improvement */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                04 · ABP Improvement
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Turning industrial feedback into process improvement.
              </h2>

            </div>

            <div>

              <p className="text-base leading-8 text-slate-400">
                The Airbus Business Process was continuously improved using
                feedback from industrial teams and analysis of how the process
                was being applied across different environments.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The work involved identifying process inconsistencies,
                clarifying interfaces and supporting the development of more
                standardised approaches for industrial activities.
              </p>

              <div className="mt-10 border-l-2 border-blue-500/40 pl-5">

                <p className="text-sm leading-7 text-slate-300">
                  The objective was not simply to update process information,
                  but to make the underlying industrial process clearer,
                  more consistent and easier to execute.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Technical Knowledge */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            05 · Technical Knowledge & Engineering Support
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Converting engineering knowledge into usable technical guidance.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Technical publications were developed to support Airbus
              employees in understanding engineering topics and applying
              consistent approaches within industrial activities.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Jigs & Tools",
                text: "Technical guidance covering tooling concepts, processes and associated engineering activities.",
              },
              {
                title: "Welding",
                text: "Structured technical material supporting understanding of welding-related industrial activities.",
              },
              {
                title: "FEA",
                text: "Technical guidance helping industrial teams understand finite element analysis concepts and applications.",
              },
              {
                title: "Engineering Standards",
                text: "Consolidated technical information supporting consistent interpretation and application of engineering practices.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <h3 className="text-lg font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Cross-Site Coordination */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            06 · Cross-Site Coordination
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Connecting Airbus sites through technical alignment.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Quarterly PMT meetings provided a platform for bringing together
              industrial stakeholders from different Airbus sites. The
              objective was to maintain alignment on process changes while
              understanding site-specific constraints and recurring
              industrial problems.
            </p>

          </div>

          <div className="mt-14 border border-white/10 bg-[#07111f] p-7 sm:p-10">

            <div className="grid gap-4 md:grid-cols-5">

              {[
                ["01", "Site Feedback"],
                ["02", "Issue Analysis"],
                ["03", "Technical Alignment"],
                ["04", "Process Changes"],
                ["05", "Continuous Improvement"],
              ].map(([number, title]) => (

                <div
                  key={number}
                  className="border border-white/10 p-5"
                >

                  <span className="font-mono text-xs text-blue-400/70">
                    {number}
                  </span>

                  <p className="mt-4 text-sm font-medium text-white">
                    {title}
                  </p>

                </div>

              ))}

            </div>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">
              Feedback from participating sites was used to improve the
              understanding of operational constraints and feed practical
              issues back into the industrial process and ABP improvement
              activities.
            </p>

          </div>

        </div>
      </section>

      {/* Results */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            07 · Engineering Outcome
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            From fragmented industrial processes to a more aligned system.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "Process",
                "Standardisation",
                "Improved consistency across industrial activities.",
              ],
              [
                "Tooling",
                "Engineering",
                "Supported jigs & tools design and lifecycle processes.",
              ],
              [
                "ABP",
                "Optimisation",
                "Fed technical and operational feedback into process improvement.",
              ],
              [
                "Sites",
                "Alignment",
                "Improved communication of changes, issues and technical approaches.",
              ],
            ].map(([value, title, text]) => (

              <div
                key={title}
                className="border border-white/10 bg-[#07111f] p-7"
              >

                <p className="text-xs uppercase tracking-[0.15em] text-blue-400">
                  {value}
                </p>

                <p className="mt-3 text-xl font-semibold text-white">
                  {title}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Final Outcome */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              08 · Project Takeaway
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering process improvement across the industrial system.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The project combined industrial engineering, jigs & tools
              activities, process analysis, technical standardisation and
              stakeholder coordination to improve the Airbus industrial
              system.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              By connecting technical process analysis with feedback from
              operational teams and other Airbus sites, the work supported
              more consistent industrial practices while continuously
              improving the associated Airbus Business Processes.
            </p>

          </div>

          <div className="mt-12">

            <Link
              href="/#projects"
              className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
            >
              <span>←</span>
              Back to Selected Projects
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}