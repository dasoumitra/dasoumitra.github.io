import Link from "next/link";

export default function TrogonPage() {
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
            Academic · Aircraft Performance
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Trogon
          </h1>

          <p className="mt-4 text-xl uppercase tracking-[0.15em] text-slate-400">
            Autonomous Cargo UAV
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Preliminary aircraft design and performance analysis of an
            autonomous cargo UAV, with a focus on aircraft-level performance,
            propulsion requirements and operational constraints.
          </p>

          {/* Tools */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["CATIA V5", "MATLAB", "Python", "CPACS"].map((tool) => (
              <span
                key={tool}
                className="border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-14 overflow-hidden border border-white/10 bg-[#0b1828]">
          <img
            src="/trogon-hero.png"
            alt="Trogon autonomous cargo UAV"
            className="h-auto w-full object-cover"
          />
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
                Designing around performance requirements.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-400">
                Trogon was developed as a multidisciplinary aircraft design
                project at FH Wiener Neustadt. The concept targeted a
                maximum take-off mass of 2,000 kg and a payload of 500 kg,
                with performance requirements influencing the aircraft,
                propulsion and configuration decisions.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
                {[
                  ["2,000 kg", "MTOM"],
                  ["500 kg", "Payload"],
                  ["90 m/s", "Cruise Speed"],
                  ["7,000 m", "Cruise Altitude"],
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
              Aircraft Performance Analysis
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              I performed the aircraft performance analysis using aerodynamic
              data generated through the wider project CFD work. The analysis
              evaluated the aircraft against take-off, landing, climb and
              cruise requirements and was used to support propulsion and
              aircraft sizing decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Aerodynamic Inputs",
                text: "Processed project CFD results to obtain the aerodynamic data required for performance calculations.",
              },
              {
                number: "02",
                title: "Performance",
                text: "Evaluated take-off, landing, climb and cruise performance under defined operating conditions.",
              },
              {
                number: "03",
                title: "Propulsion",
                text: "Modelled thrust and power requirements to evaluate the propulsion configuration.",
              },
              {
                number: "04",
                title: "Sizing",
                text: "Combined performance constraints into a sizing analysis to support engine evaluation.",
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

      {/* Performance & Sizing */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
        03 · Performance & Sizing
      </p>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
        From aerodynamic data to aircraft sizing.
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-400">
        I performed the aircraft performance analysis using aerodynamic data
        generated through the wider project CFD work. The analysis evaluated
        the aircraft across take-off, landing, climb and cruise conditions and
        brought these requirements together to assess the required
        power-to-weight ratio and propulsion configuration.
      </p>
    </div>

    {/* Aerodynamic Performance */}
    <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

      <div className="overflow-hidden border border-white/10 bg-white">
        <img
          src="/trogon-ld-vs-aoa.png"
          alt="Trogon lift-to-drag ratio versus angle of attack"
          className="h-auto w-full"
        />
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Aerodynamic Performance
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          Lift-to-drag characteristics
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          The aerodynamic data used in the performance analysis showed a
          maximum calculated lift-to-drag ratio of approximately 15 at around
          3° angle of attack.
        </p>

        <div className="mt-6 border-l-2 border-blue-500/40 pl-5">
          <p className="text-2xl font-semibold text-white">
            L/D ≈ 15
          </p>

          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">
            Maximum calculated efficiency
          </p>
        </div>
      </div>

    </div>

    {/* Sizing Analysis */}
    <div className="mt-24">

      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Aircraft Sizing
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          Bringing the performance constraints together.
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          The final sizing analysis combined the aircraft performance
          requirements with the available propulsion options. Take-off,
          landing, initial climb, cruise and climb performance were evaluated
          against body loading and power-to-weight ratio.
        </p>
      </div>

      {/* Final sizing diagram */}
      <div className="mt-10 overflow-hidden border border-white/10 bg-white">
        <img
          src="/trogon-sizing-diagram.png"
          alt="Trogon final aircraft sizing diagram"
          className="h-auto w-full"
        />
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-600">
        Final aircraft sizing analysis from the Trogon project.
      </p>

    </div>

    {/* Engineering interpretation */}
    <div className="mt-16 grid gap-5 md:grid-cols-3">

      <div className="border border-white/10 bg-[#07111f] p-6">
        <p className="font-mono text-xs text-blue-400/70">
          01
        </p>

        <h4 className="mt-5 text-lg font-medium text-white">
          Performance constraints
        </h4>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Take-off, landing, climb and cruise requirements defined the
          aircraft performance envelope.
        </p>
      </div>

      <div className="border border-white/10 bg-[#07111f] p-6">
        <p className="font-mono text-xs text-blue-400/70">
          02
        </p>

        <h4 className="mt-5 text-lg font-medium text-white">
          Propulsion evaluation
        </h4>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          The sizing analysis provided a basis for comparing the available
          engine configurations against the aircraft requirements.
        </p>
      </div>

      <div className="border border-white/10 bg-[#07111f] p-6">
        <p className="font-mono text-xs text-blue-400/70">
          03
        </p>

        <h4 className="mt-5 text-lg font-medium text-white">
          Aircraft-level assessment
        </h4>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          The analysis connected aerodynamic performance with propulsion and
          overall aircraft sizing decisions.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Digital Aircraft Workflow */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
        04 · Digital Aircraft Workflow
      </p>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
        From CATIA geometry to CPACS.
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-400">
        To connect the Trogon aircraft geometry with the CPACS ecosystem, I
        developed a Python-based converter to translate the CATIA V5 aircraft
        model into a CPACS-compatible representation. This enabled the
        geometry to be transferred into CPACSCreator for further aircraft
        modelling and analysis without manually recreating the aircraft
        geometry.
      </p>
    </div>

    {/* Workflow */}
    <div className="mt-14 border border-white/10 bg-[#07111f] p-6 sm:p-10">

      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
        Geometry Conversion Workflow
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-4">

        {[
          {
            number: "01",
            title: "CATIA V5",
            text: "Trogon aircraft geometry and configuration.",
          },
          {
            number: "02",
            title: "Python Converter",
            text: "Automated conversion of the aircraft model.",
          },
          {
            number: "03",
            title: "CPACS",
            text: "Structured aircraft representation.",
          },
          {
            number: "04",
            title: "CPACSCreator",
            text: "Imported geometry for further aircraft analysis.",
          },
        ].map((item) => (
          <div key={item.number} className="relative">

            <div className="border border-white/10 bg-[#0b1828] p-6">
              <span className="font-mono text-xs text-blue-400/70">
                {item.number}
              </span>

              <h3 className="mt-5 text-lg font-medium text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Workflow arrow */}
      <div className="mt-6 hidden items-center justify-center gap-3 text-xs uppercase tracking-[0.15em] text-slate-600 md:flex">
        <span>CATIA V5</span>
        <span>→</span>
        <span>Python</span>
        <span>→</span>
        <span>CPACS</span>
        <span>→</span>
        <span>CPACSCreator</span>
      </div>

    </div>

    {/* Contribution + Result */}
    <div className="mt-12 grid gap-5 md:grid-cols-2">

      <div className="border border-white/10 bg-[#07111f] p-7">
        <p className="font-mono text-xs text-blue-400/70">
          ENGINEERING CONTRIBUTION
        </p>

        <h3 className="mt-5 text-xl font-medium text-white">
          Automating aircraft model conversion.
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          The converter addressed the gap between the CATIA-based aircraft
          design workflow and the CPACS ecosystem, allowing the Trogon
          geometry to be reused in a structured aircraft data environment.
        </p>
      </div>

      <div className="border border-white/10 bg-[#07111f] p-7">
        <p className="font-mono text-xs text-blue-400/70">
          WORKFLOW IMPROVEMENT
        </p>

        <p className="mt-5 text-4xl font-semibold text-white">
          ~60%
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-blue-400">
          Reduction in simulation period
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          The automated conversion workflow reduced the simulation period by
          approximately 60% compared with the previous workflow.
        </p>
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

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Performance against the design constraints.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["598 m", "Rejected Take-off", "600 m requirement"],
              ["277.7 m", "Normal Take-off", "Calculated distance"],
              ["276–322 m", "Landing Field Length", "Two landing masses"],
              ["500 kg", "Payload", "Design target"],
            ].map(([value, title, note]) => (
              <div
                key={title}
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
              The calculated rejected take-off field length was 598.02 m,
              satisfying the defined 600 m constraint at the analysed
              maximum take-off mass condition.
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
              Connecting aerodynamic analysis with aircraft-level decisions.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The performance analysis provided a link between aerodynamic
              results and the aircraft's operational requirements. By
              evaluating take-off, landing, climb, cruise and propulsion
              constraints, the analysis supported the assessment of the
              overall aircraft configuration and engine requirements.
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