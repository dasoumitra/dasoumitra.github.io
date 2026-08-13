import Link from "next/link";

export default function A350VTPPage() {
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
            Production Ramp-Up
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Production analysis and process optimisation supporting the ramp-up
            of Airbus A350 Vertical Tail Plane manufacturing at Airbus Stade,
            with a focus on throughput, tooling, critical-path operations and
            targeted automation.
          </p>

          {/* Tools */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Industrialisation",
              "Process Optimisation",
              "Production Analysis",
              "CATIA V5",
              "MES / VDA",
              "Data Analysis",
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
    src="/a350-vtp-ramp-up.png"
    alt="A350 VTP production ramp-up engineering overview"
    className="h-auto w-full"
  />
</div>
        <div className="mt-14 overflow-hidden border border-white/10 bg-[#0b1828]">
          <div className="relative min-h-[360px] p-8 sm:p-12">

            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-[10%] top-[20%] h-px w-[80%] bg-blue-500/30" />
              <div className="absolute left-[10%] top-[50%] h-px w-[80%] bg-blue-500/20" />
              <div className="absolute left-[10%] top-[80%] h-px w-[80%] bg-blue-500/20" />
            </div>

            <div className="relative flex h-full min-h-[280px] items-center justify-center">
              <div className="w-full max-w-5xl">

                <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-slate-600">
                  Production System Analysis
                </p>

                <div className="grid grid-cols-3 gap-3 sm:gap-6">

                  {[
                    ["06", "Units / Month", "Initial production"],
                    ["→", "Ramp-Up", "Process optimisation"],
                    ["12", "Units / Month", "Target production"],
                  ].map(([value, title, text], index) => (
                    <div
                      key={index}
                      className="border border-white/10 bg-[#07111f]/90 p-5 text-center sm:p-8"
                    >
                      <p className="font-mono text-2xl font-semibold text-blue-400 sm:text-4xl">
                        {value}
                      </p>

                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-white">
                        {title}
                      </p>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-slate-600">
                        {text}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-8 flex justify-center">
                  <div className="border border-blue-500/20 bg-blue-500/5 px-6 py-3 text-xs uppercase tracking-[0.2em] text-blue-400">
                    Data → Analysis → Improvement → Ramp-Up
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                01 · Project Overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Increasing throughput through industrialisation.
              </h2>
            </div>

            <div>

              <p className="text-base leading-8 text-slate-400">
                The project supported the production ramp-up of the A350
                Vertical Tail Plane at Airbus Stade, with the objective of
                increasing production from 6 to 12 aircraft units per month.
                The work focused on understanding the existing production
                system, identifying sources of lost time and developing
                practical improvement initiatives.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">

                {[
                  ["6 → 12", "Units / Month"],
                  ["120+", "Operations"],
                  ["170+", "Sub-operations"],
                  ["120+", "SOIs Reviewed"],
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

            </div>

          </div>

        </div>
      </section>

      {/* My Contribution */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            02 · My Contribution
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Mapping the production system.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              I analysed manufacturing activities across Stations 10/15,
              20/25 and 30/35, reviewing work operations, sub-operations and
              micro-processes to understand station flow, resources, tooling
              and critical-path activities.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Process Mapping",
                text: "Mapped station flow, resources, tooling and critical-path activities across the production system.",
              },
              {
                number: "02",
                title: "Data Reconciliation",
                text: "Compared MES execution data with ME-VDA process information to identify timing and documentation gaps.",
              },
              {
                number: "03",
                title: "Disruption Analysis",
                text: "Created station-specific disruption databases and analysed root causes and lost production time.",
              },
              {
                number: "04",
                title: "Improvement Planning",
                text: "Developed, assessed and prioritised improvement initiatives based on feasibility and production impact.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <span className="font-mono text-xs text-blue-400/70">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-medium text-white">
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

      {/* Production Analysis */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              03 · Production Analysis
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Finding the gaps between planned and actual production.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              A key part of the analysis was comparing planned process
              information with actual execution data. This highlighted
              timing mismatches and helped identify where production capacity
              was being constrained.
            </p>

          </div>

          {/* MES / VDA comparison */}
          <div className="mt-14 grid gap-5 lg:grid-cols-2">

            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Station 10 / 15
              </p>

              <div className="mt-6 flex items-end gap-6">

                <div>
                  <p className="text-3xl font-semibold text-white">
                    91.9 h
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                    MES timing
                  </p>
                </div>

                <span className="pb-5 text-slate-700">
                  vs
                </span>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    86.76 h
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                    VDA timing
                  </p>
                </div>

              </div>

              <div className="mt-6 border-l-2 border-blue-500/40 pl-4">
                <p className="text-sm text-slate-400">
                  33 timing mismatches identified.
                </p>
              </div>

            </div>

            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Station 20 / 25
              </p>

              <div className="mt-6 flex items-end gap-6">

                <div>
                  <p className="text-3xl font-semibold text-white">
                    148 h
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                    MES timing
                  </p>
                </div>

                <span className="pb-5 text-slate-700">
                  vs
                </span>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    124 h
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                    VDA timing
                  </p>
                </div>

              </div>

              <div className="mt-6 border-l-2 border-blue-500/40 pl-4">
                <p className="text-sm text-slate-400">
                  59 timing mismatches identified.
                </p>
              </div>

            </div>

          </div>

          {/* Generic process flow */}
          <div className="mt-16 border border-white/10 bg-[#07111f] p-7 sm:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Production analysis workflow
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-5">

              {[
                "Observe",
                "Map",
                "Compare",
                "Quantify",
                "Prioritise",
              ].map((step, index) => (
                <div
                  key={step}
                  className="relative border border-white/10 p-5 text-center"
                >

                  <span className="font-mono text-xs text-blue-400/70">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white">
                    {step}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Improvement Roadmap */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            04 · Improvement Roadmap
          </p>

          <div className="mt-5 max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From production gaps to a prioritised roadmap.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The analysis resulted in a portfolio of improvement
              opportunities covering process sequencing, workforce,
              tooling, automation and production data.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* Short term */}
            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400/70">
                01
              </p>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Short Term
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-blue-400">
                Quick operational improvements
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-500">
                <li>• Task grouping</li>
                <li>• Parallel operations</li>
                <li>• Workforce optimisation</li>
                <li>• Tool improvements</li>
              </ul>

            </div>

            {/* Medium term */}
            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400/70">
                02
              </p>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Medium Term
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-blue-400">
                Process capability
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-500">
                <li>• Additional ADUs</li>
                <li>• Improved cutting tools</li>
                <li>• Predrilling</li>
                <li>• Ergonomic aids</li>
              </ul>

            </div>

            {/* Long term */}
            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400/70">
                03
              </p>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Long Term
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-blue-400">
                Automation & analytics
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-500">
                <li>• Automation</li>
                <li>• One-way assembly</li>
                <li>• Tool-life analysis</li>
                <li>• Advanced production analytics</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* Results */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            05 · Key Results
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Quantifying the opportunity for ramp-up.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["26", "Opportunities", "Stations 10 / 15"],
              ["22", "Opportunities", "Stations 20 / 25"],
              ["27 h", "Critical Path", "Station 10 / 15"],
              ["26 h", "Critical Path", "Station 20 / 25"],
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
              The analysis identified opportunities to increase throughput
              through task parallelisation, tooling improvements, workforce
              adjustments and targeted automation rather than relying on a
              new production line or third shift.
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
              Turning production data into an industrialisation roadmap.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The project combined production observation, process-data
              reconciliation, disruption analysis and technical improvement
              concepts to establish a data-backed ramp-up plan. The resulting
              roadmap connected immediate operational improvements with
              medium- and long-term automation opportunities.
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