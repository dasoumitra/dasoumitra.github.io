import Link from "next/link";

const tags = [
  "Application Portfolio",
  "Risk Assessment",
  "Technology Modernization",
  "Flight Testing",
  "Digital Engineering",
];

const assessmentStreams = [
  {
    number: "01",
    title: "M&1Y Application Portfolio",
    scope: "231 applications",
    detail: "12 operators",
    description:
      "Assessment of the wider application landscape to identify technology risk, business criticality, dependencies and modernization opportunities.",
  },
  {
    number: "02",
    title: "M&1V Flight Testing",
    scope: "151 applications / tools",
    detail: "Flight Testing",
    description:
      "Assessment of the Flight Testing portfolio, focusing on technical debt, operational risk, application usage and modernization priorities.",
  },
];

const methodology = [
  ["01", "Portfolio Mapping", "Applications, users, platforms, technologies and dependencies"],
  ["02", "Technology Assessment", "Obsolescence, supportability, scalability and technical risk"],
  ["03", "Business Criticality", "Strategic importance, usage, functionality and operational impact"],
  ["04", "Solution Assessment", "Upgrade, migration or application redefinition"],
  ["05", "Roadmap", "Prioritized actions across short-, medium- and long-term horizons"],
];

const modernization = [
  {
    number: "01",
    title: "Component Upgrade",
    text: "Modernize obsolete components where the application remains viable.",
  },
  {
    number: "02",
    title: "Platform Migration",
    text: "Move applications and dependencies onto newer, supported technology platforms.",
  },
  {
    number: "03",
    title: "Application Redefinition",
    text: "Redesign or consolidate applications where existing architectures are outdated or overlapping.",
  },
];

const outcomes = [
  {
    value: "68.84%",
    label: "Technology / application risk",
    text: "of applications in the broader assessment were associated with some level of technology or application risk.",
  },
  {
    value: "39",
    label: "High-criticality applications",
    text: "identified as having high business criticality in the broader portfolio.",
  },
  {
    value: "151+",
    label: "Flight Testing portfolio",
    text: "applications and tools assessed within the defined Flight Testing scope.",
  },
];

export default function FlightTestingPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">

      {/* Back */}
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
            Professional · Digital Engineering
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Flight Testing
            <br />
            & Engineering Applications
          </h1>

          <p className="mt-5 text-xl uppercase tracking-[0.15em] text-slate-400">
            Application Portfolio Assessment & Modernization
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Assessment of engineering application portfolios to identify
            technical debt, operational risk and business-critical
            capabilities, followed by prioritized modernization strategies.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Main Visual */}
        <div className="mt-14 overflow-hidden border border-white/10 bg-[#0b1828]">
          <img
            src="/flight-testing-tools-audit.png"
            alt="Application portfolio assessment and modernization roadmap"
            className="h-auto w-full"
          />
        </div>

      </section>

      {/* Challenge */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                01 · The Challenge
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Understanding a fragmented engineering application landscape.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-400">
                The engagement focused on assessing engineering applications
                and tools used across Airbus operational environments. The
                objective was to identify obsolete or unsupported technology,
                understand business criticality and dependencies, and create
                a practical modernization roadmap.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The Flight Testing assessment extended this approach into a
                highly operational environment where legacy platforms could
                create cybersecurity, compatibility, performance, support and
                continuity risks for critical capabilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Assessment Streams */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            02 · Assessment Scope
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Two assessment streams within one modernization engagement.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {assessmentStreams.map((stream) => (
              <div
                key={stream.number}
                className="border border-white/10 bg-[#07111f] p-7"
              >

                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-blue-400/70">
                    {stream.number}
                  </span>

                  <span className="text-xs uppercase tracking-[0.15em] text-slate-600">
                    Assessment
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-semibold text-white">
                  {stream.title}
                </h3>

                <div className="mt-5 flex items-end gap-3">
                  <span className="text-3xl font-semibold text-blue-400">
                    {stream.scope}
                  </span>

                  <span className="pb-1 text-xs uppercase tracking-[0.15em] text-slate-600">
                    {stream.detail}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {stream.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Methodology */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              03 · Assessment Methodology
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              From portfolio inventory to a prioritized roadmap.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The assessment combined technical analysis with business
              criticality to distinguish immediate technology risks from
              longer-term transformation opportunities.
            </p>

          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-5">

            {methodology.map(([number, title, text]) => (
              <div
                key={number}
                className="border border-white/10 bg-[#07111f] p-6"
              >
                <span className="font-mono text-xs text-blue-400/70">
                  {number}
                </span>

                <h3 className="mt-5 text-lg font-medium text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Risk Landscape */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                04 · Risk Landscape
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Legacy technology became an operational risk.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-400">

              <p>
                The assessments identified applications dependent on
                obsolete operating systems, databases, infrastructure and
                programming technologies.
              </p>

              <p>
                Within the Flight Testing portfolio, legacy dependencies
                included unsupported operating systems and databases as well
                as older Java, VBA, Perl, PHP and Fortran environments.
              </p>

              <p>
                These dependencies introduced cybersecurity, compatibility,
                performance, support and continuity risks, particularly for
                applications supporting critical flight-test activities.
              </p>

              <p>
                The assessment also identified overlapping functionality,
                incomplete ownership information and insufficient technical
                documentation in parts of the portfolio.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Findings */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            05 · Key Findings
          </p>

          <div className="mt-10 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">

            {outcomes.map((item) => (
              <div
                key={item.label}
                className="bg-[#07111f] p-7"
              >
                <p className="text-4xl font-semibold text-white">
                  {item.value}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-blue-400">
                  {item.label}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Modernization Strategy */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            06 · Modernization Strategy
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Three pathways from legacy systems to a sustainable portfolio.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {modernization.map((item) => (
              <div
                key={item.number}
                className="border border-white/10 bg-[#07111f] p-7 transition hover:-translate-y-1 hover:border-blue-500/30"
              >

                <span className="font-mono text-xs text-blue-400/70">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Recommendations */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              07 · Recommendations
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Prioritizing modernization instead of replacing everything.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Application-level recommendations were developed around
              component modernization, platform migration and application
              redefinition. The resulting portfolio provided a basis for
              quick wins, short-term upgrades and longer-term transformation.
            </p>

          </div>

          <div className="mt-12 grid gap-4">

            {[
              "Upgrade viable applications by replacing obsolete components.",
              "Migrate applications to newer and supported technology platforms.",
              "Consolidate applications with overlapping functionality.",
              "Prioritize high-business-criticality applications even where modernization is substantial.",
              "Move toward standardized and supportable technology stacks.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border border-white/10 bg-[#07111f] p-6"
              >
                <span className="font-mono text-xs text-blue-400/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-slate-400">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Outcome */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            08 · Outcome
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Turning a fragmented application inventory into a
            risk-based modernization strategy.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
            The engagement connected technical obsolescence with business
            impact and operational criticality, producing a practical basis
            for modernization decisions across the engineering application
            landscape.
          </p>

          <div className="mt-12 border border-white/10 bg-[#07111f] p-8 sm:p-10">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              Project Recognition
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Mission Impossible 2024
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              The Flight Testing tools audit was recognised with the
              Mission Impossible 2024 award.
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