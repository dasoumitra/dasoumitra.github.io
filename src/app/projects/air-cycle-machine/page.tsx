import Image from "next/image";

export default function AirCycleMachinePage() {
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
                Air Cycle Machine
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                Test-Bed Development & Qualification
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Engineering development and qualification of an Air Cycle
                Machine test capability for evaluating cooling performance,
                combining test-bed modifications, instrumentation, control
                logic and performance analysis.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Test Engineering",
                  "Qualification",
                  "Instrumentation",
                  "Mechanical Design",
                  "Performance Analysis",
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
                  src="/air-cycle-machine-acm.png"
                  alt="Air Cycle Machine test-bed development and qualification"
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
            Developing an Existing Test Capability
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The Air Cycle Machine test-bed development was already underway
            when I became involved. My contribution focused on engineering
            modifications and improvements to the existing setup, followed by
            test implementation, qualification and performance evaluation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Existing Test-Bed</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Improved an existing ACM test arrangement through modifications
              to the piping, instrumentation and mounting configuration.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Engineering Integration</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Combined mechanical modifications, sensor requirements and
              control-system inputs to prepare the test facility for
              qualification testing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Qualification</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Supported the first successful qualification tests and analysed
              the resulting performance data before delivery to the end user.
            </p>
          </div>

        </div>
      </section>


      {/* ACM ARCHITECTURE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              System Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Air Cycle Machine Operating Principle
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              The test article uses warm ram air as the input to the air-cycle
              system. Compression and subsequent expansion through the turbine
              produce the cooled-air output required for the application.
            </p>
          </div>

          {/* SIMPLE SCHEMATIC */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-8 md:p-12">

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">

              <div className="w-full max-w-xs rounded-xl border border-orange-400/30 bg-orange-400/[0.04] p-6 text-center md:w-52">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
                  Input
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Warm / Ram Air
                </h3>
              </div>

              <div className="hidden text-2xl text-slate-600 md:block">
                →
              </div>

              <div className="w-full max-w-xs rounded-xl border border-blue-400/30 bg-blue-400/[0.04] p-6 text-center md:w-52">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                  Compression
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Compressor
                </h3>
              </div>

              <div className="text-2xl text-slate-600 md:block">
                →
              </div>

              <div className="w-full max-w-xs rounded-xl border border-cyan-400/30 bg-cyan-400/[0.04] p-6 text-center md:w-52">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Expansion
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Turbine
                </h3>
              </div>

              <div className="hidden text-2xl text-slate-600 md:block">
                →
              </div>

              <div className="w-full max-w-xs rounded-xl border border-emerald-400/30 bg-emerald-400/[0.04] p-6 text-center md:w-52">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                  Output
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Cool Air
                </h3>
              </div>

            </div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Measurement & Control
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {[
                  "Pressure",
                  "Temperature",
                  "Flow",
                  "RPM",
                  "DAQ",
                  "Test Control",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.12em] text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* TEST BED MODIFICATION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Engineering Track 01
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Test-Bed Modification
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The existing ACM test setup required engineering improvements
              before qualification testing could be completed. I worked on
              the mechanical and instrumentation changes required to bring
              the test-bed to the required operating condition.
            </p>
          </div>

          <div className="space-y-4">

            {[
              [
                "Piping Modifications",
                "Modified the existing piping arrangement to improve the test-bed configuration and accommodate the required operating conditions.",
              ],
              [
                "Mounting Arrangement",
                "Modified and improved the mounting bed to provide the required mechanical support for the ACM during testing.",
              ],
              [
                "Instrumentation",
                "Worked on sensor selection and measurement requirements for capturing the parameters needed during qualification.",
              ],
              [
                "System Integration",
                "Integrated the modified mechanical and instrumentation configuration into the existing test facility.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold text-emerald-300">
                  {title}
                </h3>

                <p className="mt-2 leading-6 text-slate-300">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CONTROL & QUALIFICATION */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Engineering Track 02
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Control Logic & Qualification
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Qualification required the ACM to operate through defined
                sequences and conditions. I developed the required test
                logic and coding used to control the qualification cycles,
                working with the DAQ/control-system provider to translate the
                engineering requirements into the test system.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Defined qualification-test sequences",
                  "Developed test-cycle logic and operating behaviour",
                  "Supported control-system implementation",
                  "Integrated required sensors and measurements",
                  "Validated system response during testing",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4">

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/30 text-xs text-blue-300">
                      {index + 1}
                    </div>

                    <p className="leading-7 text-slate-300">
                      {item}
                    </p>

                  </div>
                ))}

              </div>
            </div>


            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Qualification Campaign
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Test Conditions
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  [
                    "Normal Operation",
                    "Verification of ACM behaviour under defined normal operating conditions.",
                  ],
                  [
                    "Cyclic Testing",
                    "Execution of repeated operating cycles to assess system behaviour over the qualification sequence.",
                  ],
                  [
                    "Failure Conditions",
                    "Testing of defined abnormal or failure scenarios as part of the qualification campaign.",
                  ],
                  [
                    "Performance Analysis",
                    "Analysis of measured test data and performance parameters following test execution.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-6"
                  >
                    <h3 className="font-semibold text-cyan-300">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PERFORMANCE ANALYSIS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Data & Analysis
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Performance Evaluation
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-300">
            Test execution was supported by analysis of the measured
            parameters to evaluate ACM performance and verify the behaviour
            observed during qualification.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Pressure",
            "Temperature",
            "Flow Rate",
            "RPM",
            "Performance",
            "Test Data",
            "Cycle Behaviour",
            "Qualification Results",
          ].map((parameter) => (
            <div
              key={parameter}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 h-2 w-10 rounded-full bg-blue-400" />

              <h3 className="font-semibold">
                {parameter}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Measurement / analysis parameter
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* TOOLS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

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
                  "Qualification Testing",
                  "Test Automation",
                  "Performance Analysis",
                  "Data Analysis",
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
                From Modified Test-Bed to Qualification
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                The modified ACM test-bed was successfully brought to
                qualification, including execution of the first successful
                qualification tests. The resulting validated test capability
                supported the ACM's progression toward delivery to the end
                user.
              </p>
            </div>

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
            Modify. Automate. Qualify. Validate.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Engineering modifications, instrumentation, qualification-test
            logic and performance analysis transformed an existing ACM
            development setup into a validated test capability.
          </p>

        </div>
      </section>

    </main>
  );
}