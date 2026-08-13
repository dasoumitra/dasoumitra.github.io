import Link from "next/link";

export default function A350VacuumBaggingPage() {
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
            Professional · Manufacturing & Industrialisation
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            A350 VTP
          </h1>

          <p className="mt-4 text-xl uppercase tracking-[0.15em] text-slate-400">
            Vacuum-Bagging Improvement
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Manufacturing process optimisation focused on improving the
            vacuum-bagging workflow, reducing manual handling, improving
            ergonomics and developing practical solutions to support A350 VTP
            production.
          </p>

          {/* Tools */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Process Optimisation",
              "Industrialisation",
              "CATIA V5",
              "Tooling",
              "Ergonomics",
              "Automation",
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
            src="/a350-vacuum-bagging.png"
            alt="A350 VTP vacuum-bagging process improvement overview"
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
                Improving a manual composite manufacturing process.
              </h2>
            </div>

            <div>

              <p className="text-base leading-8 text-slate-400">
                The project analysed the existing vacuum-bagging process used
                during A350 VTP manufacturing. The objective was to identify
                opportunities to reduce lead time and manual effort while
                improving material flow, ergonomics, consistency and
                operational efficiency.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">

                {[
                  ["24", "Solutions Identified"],
                  ["16", "Validated"],
                  ["10", "Recommended"],
                  ["€127.6k", "Implementation Package"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="bg-[#07111f] px-5 py-6"
                  >
                    <p className="text-xl font-semibold text-white">
                      {value}
                    </p>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}

              </div>

              <p className="mt-4 text-xs leading-5 text-slate-600">
                Implementation package value excludes longer-term robotics.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Process Analysis */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              02 · Process Analysis
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Understanding the process from material preparation to
              vacuum-bag completion.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              I mapped the as-is process and assessed the workstations,
              material flow, operator activities and supporting logistics.
              Discussions with operators and stakeholders helped identify
              practical constraints that were not visible from process
              documentation alone.
            </p>

          </div>

          {/* Process flow */}
          <div className="mt-14 border border-white/10 bg-[#07111f] p-7 sm:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              As-is process
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

              {[
                "Shell Preparation",
                "Material Preparation",
                "Airweave Placement",
                "Vacuum Foil",
                "Pressure Testing",
              ].map((step, index) => (

                <div
                  key={step}
                  className="border border-white/10 p-5"
                >

                  <span className="font-mono text-xs text-blue-400/70">
                    0{index + 1}
                  </span>

                  <p className="mt-4 text-sm font-medium text-white">
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Challenges */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Manual Material Handling",
                text: "Material movement and preparation introduced additional handling effort and workflow interruptions.",
              },
              {
                title: "Gantry Dependency",
                text: "Several operations relied on gantry access, creating ergonomic and operational constraints.",
              },
              {
                title: "Airweave Placement",
                text: "Manual placement required experienced operators and introduced opportunities for inconsistency.",
              },
              {
                title: "Vacuum Foil",
                text: "Foil preparation, folding and availability could interrupt the process and increase manual effort.",
              },
              {
                title: "Waste Handling",
                text: "Waste collection and segregation created additional movement and handling requirements.",
              },
              {
                title: "Process Interruptions",
                text: "Material shortages, pressure-testing issues and upstream rework could affect workflow continuity.",
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

      {/* Solution Development */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            03 · Solution Development
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Turning operator pain points into engineering solutions.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The identified pain points were translated into a portfolio of
              potential solutions. Concepts were assessed for feasibility,
              impact and implementation complexity before being narrowed down
              to the recommended set.
            </p>

          </div>

          {/* Funnel */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="border border-white/10 bg-[#07111f] p-7 text-center">
              <p className="text-4xl font-semibold text-white">
                24
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-blue-400">
                Concepts Identified
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Ideas generated from process observation, operator feedback
                and workflow analysis.
              </p>
            </div>

            <div className="border border-white/10 bg-[#07111f] p-7 text-center">
              <p className="text-4xl font-semibold text-white">
                16
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-blue-400">
                Validated
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Concepts reviewed against practical implementation constraints.
              </p>
            </div>

            <div className="border border-white/10 bg-[#07111f] p-7 text-center">
              <p className="text-4xl font-semibold text-white">
                10
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-blue-400">
                Recommended
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Prioritised solutions forming the implementation roadmap.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Future State */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            04 · Future-State Concepts
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Improving handling, ergonomics and process consistency.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The recommended concepts targeted the main sources of manual
              effort and process inefficiency while keeping implementation
              practical. Automation was considered as a longer-term
              development rather than the only solution.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "Material Delivery",
                text: "Forklift-based material delivery and improved storage concepts to reduce unnecessary manual movement between work areas.",
              },
              {
                number: "02",
                title: "Airweave Applicator Jig",
                text: "A dedicated applicator concept with adjustable hooks to improve placement consistency and reduce manual effort.",
              },
              {
                number: "03",
                title: "Gantry Ergonomics",
                text: "Improved access and ergonomic concepts to reduce operator discomfort during vacuum-bagging activities.",
              },
              {
                number: "04",
                title: "Pre-Cut Materials",
                text: "Pre-cut and pre-folded Airweave and optimised vacuum-foil lengths to reduce preparation effort and process variation.",
              },
              {
                number: "05",
                title: "Waste Management",
                text: "Dedicated waste handling concepts to improve segregation, reduce unnecessary movement and support cleaner workflows.",
              },
              {
                number: "06",
                title: "Automation",
                text: "Longer-term robotics concepts for Airweave placement, providing a path towards greater repeatability and reduced manual intervention.",
              },
            ].map((item) => (

              <div
                key={item.title}
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

      {/* Results */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            05 · Results
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            A practical roadmap for process improvement.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["24", "Concepts", "Identified"],
              ["16", "Solutions", "Validated"],
              ["10", "Solutions", "Recommended"],
              ["€127.6k", "Implementation", "Package"],
            ].map(([value, title, note]) => (

              <div
                key={title + note}
                className="border border-white/10 bg-[#07111f] p-7"
              >

                <p className="text-3xl font-semibold text-white">
                  {value}
                </p>

                <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
                  {title}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {note}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-10 border-l-2 border-blue-500/40 pl-5">

            <p className="text-sm leading-7 text-slate-300">
              The recommended concepts targeted manual handling, logistics,
              ergonomics, material preparation and process consistency. Most
              of the recommended solutions were accepted, while the waste
              chute concept was not pursued because of its interaction with
              the forklift route.
            </p>

          </div>

        </div>
      </section>

      {/* Engineering Outcome */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              06 · Engineering Outcome
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              From operator pain points to a prioritised implementation plan.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The project translated detailed shop-floor observations into
              practical manufacturing improvements. Rather than relying on a
              single automation solution, the final roadmap combined
              immediate low-complexity improvements with longer-term
              automation opportunities.
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