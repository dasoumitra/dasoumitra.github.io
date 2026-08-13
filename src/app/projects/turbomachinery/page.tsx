import Image from "next/image";

export default function TurbomachineryPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Professional Project
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Turbomachinery
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                Test Infrastructure & Performance Analysis
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Adaptation and integration of existing turbomachinery test
                infrastructure for marine, locomotive and defence applications,
                combining test-bed modifications, instrumentation, testing and
                performance analysis.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Test Engineering",
                  "Performance Analysis",
                  "Instrumentation",
                  "Mechanical Design",
                  "Facility Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-400/30 bg-blue-400/5 px-4 py-2 text-sm text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
                <Image
                  src="/turbomachinery-test-infrastructure.png"
                  alt="Turbomachinery test infrastructure and performance analysis"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Project Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Extending an Existing Test Capability
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Existing Infrastructure</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Worked within an existing turbomachinery test facility,
              modifying and adapting the setup for different test articles
              and application requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Multi-Application Testing</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Supported testing and performance evaluation of turbomachinery
              associated with marine, locomotive and defence applications.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Engineering Role</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Combined mechanical modifications, instrumentation, test
              execution and performance calculations to validate turbomachinery
              behaviour.
            </p>
          </div>

        </div>
      </section>


      {/* TESTING */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Engineering Track 01
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Testing & Performance Analysis
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Conducted turbomachinery testing across multiple applications,
                with emphasis on generating and analysing performance data from
                both compressor and turbine sides of the test article.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                [
                  "Test Execution",
                  "Preparation and execution of turbomachinery test campaigns across different operating conditions.",
                ],
                [
                  "Compressor & Turbine Analysis",
                  "Evaluation of compressor-side and turbine-side operating behaviour using measured test data.",
                ],
                [
                  "Instrumentation",
                  "Worked with measurements including pressure, temperature, flow, RPM and torque/power.",
                ],
                [
                  "Performance Calculations",
                  "Performed test-data analysis and performance calculations to evaluate turbomachinery behaviour.",
                ],
                [
                  "Efficiency Evaluation",
                  "Used measured parameters to assess performance and operating characteristics.",
                ],
                [
                  "Application Testing",
                  "Supported testing associated with marine, locomotive and defence/tank applications.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-6"
                >
                  <h3 className="font-semibold text-blue-300">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* MARINE TURBO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Engineering Track 02
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Marine Turbocharger Integration
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Adapted an existing turbomachinery test facility to accommodate
              a marine turbocharger used in a submarine application. The work
              involved modifying the existing setup rather than developing a
              new facility from scratch.
            </p>

            <div className="mt-8 space-y-5">

              {[
                [
                  "Facility Adaptation",
                  "Assessed and modified the existing test setup to accommodate the new marine test article.",
                ],
                [
                  "Piping & Interfaces",
                  "Developed dedicated piping arrangements and mechanical interfaces required for integration.",
                ],
                [
                  "Instrumentation",
                  "Selected and incorporated sensors required to capture the relevant test parameters.",
                ],
                [
                  "Mounting Modifications",
                  "Modified the existing mounting arrangement to support integration of the marine turbocharger.",
                ],
                [
                  "Implementation",
                  "Supported manufacturing and implementation of the modified test-bed configuration.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.03] p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Integration Approach
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Existing test facility",
                "Facility assessment",
                "Dedicated piping & interfaces",
                "Sensor selection",
                "Mounting modifications",
                "Manufacturing & implementation",
                "Test execution",
                "Performance validation",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 text-sm text-emerald-300">
                    {index + 1}
                  </div>

                  <div className="h-px w-4 bg-emerald-400/20" />

                  <span className="text-sm text-slate-200">
                    {step}
                  </span>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* ENGINEERING SYSTEM */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Test System
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Engineering Parameters
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              The test system combined mechanical infrastructure,
              instrumentation and data acquisition to characterise
              turbomachinery performance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Pressure",
              "Temperature",
              "Flow Rate",
              "RPM",
              "Torque / Power",
              "Efficiency",
              "Test Data",
              "Performance Calculations",
            ].map((parameter) => (
              <div
                key={parameter}
                className="rounded-xl border border-white/10 bg-slate-950/60 p-6"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-blue-400" />

                <h3 className="font-semibold">{parameter}</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Measurement / analysis parameter
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Tools & Methods
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Engineering Toolkit
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "PTC Creo",
                "SolidWorks",
                "Instrumentation",
                "Test Engineering",
                "Performance Calculations",
                "Data Analysis",
                "Test-Bed Design",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>


          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Engineering Outcome
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              From Existing Infrastructure to Validated Capability
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The work extended the capability of an existing turbomachinery
              test facility by combining engineering modifications,
              instrumentation, testing and performance analysis. The adapted
              facility enabled testing of additional turbomachinery
              applications while generating the performance data required for
              technical evaluation and validation.
            </p>
          </div>

        </div>
      </section>


      {/* FINAL OUTCOME */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Project Outcome
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Test. Integrate. Analyse. Validate.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A combination of turbomachinery testing, mechanical design,
            facility adaptation, instrumentation and performance analysis
            enabled an existing test capability to support new and diverse
            applications.
          </p>

        </div>
      </section>

    </main>
  );
}