import Image from "next/image";

export default function UnmannedMarsPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Propulsion Concept & Performance Analysis
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                UNMANNED MARS
                <br />
                SPACE VEHICLE
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                Monopropellant Propulsion Concept
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Team project involving the conceptual design of an unmanned
                space vehicle intended to operate on Mars. My contribution
                focused on the propulsion system, operational requirements and
                MATLAB-based performance modelling.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Propulsion Design",
                  "Hydrogen Peroxide",
                  "MATLAB",
                  "Performance Analysis",
                  "Mission Requirements",
                  "Maneuverability",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-400/30 bg-blue-400/[0.04] px-4 py-2 text-sm text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]">
              <Image
                src="/unmanned-mars-propulsion.png"
                alt="Unmanned Mars Space Vehicle propulsion concept"
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>

          </div>
        </div>
      </section>


      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            01 · Project Overview
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Propulsion design for an unmanned vehicle operating on Mars.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            The project focused on the conceptual design of an Unmanned Space
            Vehicle intended to operate on Mars. The wider vehicle design
            involved several engineering disciplines, including orbital
            design, structural analysis, mass estimation and power-system
            design.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My work focused specifically on defining the propulsion-system
            requirements, designing a hydrogen-peroxide monopropellant
            propulsion concept and developing mathematical models in MATLAB
            to evaluate its performance and maneuverability.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="border border-white/10 bg-[#07111f] p-7">

            <p className="font-mono text-xs text-blue-400/70">
              VEHICLE
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Unmanned Mars Vehicle
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Conceptual spacecraft designed for operations in the Martian
              environment.
            </p>

          </div>

          <div className="border border-white/10 bg-[#07111f] p-7">

            <p className="font-mono text-xs text-orange-400/70">
              PROPULSION
            </p>

            <h3 className="mt-5 text-xl font-medium">
              H₂O₂ Monopropellant
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Conceptual monopropellant propulsion system using hydrogen
              peroxide.
            </p>

          </div>

          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-7">

            <p className="font-mono text-xs text-emerald-400">
              MY FOCUS
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Propulsion & Modelling
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Propulsion design, mission requirements and MATLAB performance
              analysis.
            </p>

          </div>

        </div>

      </section>


      {/* MY CONTRIBUTION */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              My Contribution
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Propulsion system design and performance modelling.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              My contribution covered the propulsion work package of the wider
              vehicle design, from determining operational requirements through
              propulsion-system design and mathematical performance analysis.
            </p>

          </div>


          <div className="mt-12 grid gap-5 lg:grid-cols-3">

            {/* PRIMARY */}
            <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-7 lg:col-span-2">

              <p className="font-mono text-xs text-emerald-400">
                PRIMARY CONTRIBUTION
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Monopropellant Propulsion System
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Designed a conceptual hydrogen-peroxide monopropellant
                propulsion system for the Mars vehicle and established the
                requirements needed for the propulsion system to support the
                mission.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "Operational requirements",
                  "Hydrogen peroxide selection",
                  "Monopropellant system concept",
                  "Propulsion requirements",
                  "Thrust assessment",
                  "Maneuverability requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* TEAM SCOPE */}
            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400/70">
                WIDER TEAM SCOPE
              </p>

              <h3 className="mt-5 text-xl font-medium">
                Other Vehicle Design Areas
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Other members of the project worked on the remaining vehicle
                design disciplines.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p>• Orbital design</p>
                <p>• Structural / stress analysis</p>
                <p>• Mass estimation</p>
                <p>• Power-system design</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* PROPULSION ARCHITECTURE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              02 · Propulsion System
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Hydrogen-peroxide monopropellant architecture.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The propulsion concept used hydrogen peroxide as the
              monopropellant. The system was developed conceptually around the
              operational requirements of the Mars vehicle and the thrust
              needed for its manoeuvring requirements.
            </p>

            <div className="mt-8 space-y-4">

              {[
                [
                  "Propellant",
                  "Hydrogen peroxide (H₂O₂) selected as the monopropellant.",
                ],
                [
                  "System Concept",
                  "Developed a conceptual monopropellant propulsion architecture.",
                ],
                [
                  "Mission Requirements",
                  "Translated vehicle operating requirements into propulsion requirements.",
                ],
                [
                  "Performance",
                  "Evaluated propulsion behaviour through mathematical modelling.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-l border-blue-400/40 pl-5"
                >

                  <h3 className="font-medium text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>


          {/* SCHEMATIC */}
          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Propulsion Architecture
            </p>

            <div className="mt-10 flex flex-col items-center">

              <div className="border border-orange-400/40 bg-orange-400/[0.04] px-10 py-6 text-center">

                <p className="font-mono text-xs text-orange-300">
                  PROPELLANT
                </p>

                <p className="mt-2 text-xl font-medium">
                  H₂O₂
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Hydrogen Peroxide
                </p>

              </div>

              <div className="h-10 w-px border-l border-dashed border-blue-400/50" />

              <div className="border border-blue-400/40 bg-blue-400/[0.04] px-10 py-5 text-center">

                <p className="font-mono text-xs text-blue-300">
                  PROPULSION SYSTEM
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Feed · Control · Thruster
                </p>

              </div>

              <div className="h-10 w-px border-l border-dashed border-blue-400/50" />

              <div className="flex items-center gap-4">

                <div className="border border-white/10 bg-white/[0.03] px-6 py-4 text-center">
                  <p className="text-xs text-slate-500">
                    THRUST
                  </p>
                  <p className="mt-1 text-sm text-white">
                    ΔV
                  </p>
                </div>

                <span className="text-slate-600">
                  →
                </span>

                <div className="border border-emerald-400/30 bg-emerald-400/[0.03] px-6 py-4 text-center">
                  <p className="text-xs text-emerald-300">
                    VEHICLE
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Manoeuvrability
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* MATLAB */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              03 · MATLAB Modelling & Analysis
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Mathematical models for propulsion performance.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              MATLAB was used to establish mathematical models for analysing
              the behaviour of the propulsion system and understanding how key
              parameters affected vehicle performance.
            </p>

          </div>


          <div className="mt-12 grid gap-4 md:grid-cols-5">

            {[
              ["01", "Flight Time", "Flight-time analysis"],
              ["02", "Pressure", "Pressure–mass flow rate"],
              ["03", "Thrust / Weight", "Thrust-to-weight analysis"],
              ["04", "Mass Flow", "Effect of changing mass flow"],
              ["05", "Maneuverability", "Vehicle manoeuvrability"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <span className="font-mono text-xs text-blue-400/70">
                  {number}
                </span>

                <h3 className="mt-5 font-medium text-white">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>


          {/* MODEL FLOW */}
          <div className="mt-10 border border-white/10 bg-[#07111f] p-8">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Analysis Workflow
            </p>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">

              {[
                "Mission\nRequirements",
                "Propulsion\nModel",
                "MATLAB\nAnalysis",
                "Performance\nEvaluation",
                "Vehicle\nManoeuvrability",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex w-full items-center md:w-auto"
                >

                  <div className="w-full border border-blue-400/30 bg-blue-400/[0.03] px-5 py-5 text-center whitespace-pre-line">
                    <p className="text-sm text-slate-300">
                      {item}
                    </p>
                  </div>

                  {index < 4 && (
                    <span className="hidden px-3 text-blue-400 md:block">
                      →
                    </span>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ANALYSIS AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <div className="border border-white/10 bg-[#07111f] p-7">

            <p className="font-mono text-xs text-blue-400/70">
              FLIGHT TIME
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Flight-Time Analysis
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Developed a mathematical model to investigate flight-time
              behaviour as part of the propulsion-performance assessment.
            </p>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-7">

            <p className="font-mono text-xs text-blue-400/70">
              PRESSURE / FLOW
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Pressure–Mass Flow Analysis
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Modelled the relationship between pressure and mass-flow rate to
              study propulsion-system behaviour.
            </p>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-7">

            <p className="font-mono text-xs text-blue-400/70">
              THRUST
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Thrust-to-Weight
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Evaluated thrust-to-weight behaviour as part of the propulsion
              performance assessment.
            </p>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-7">

            <p className="font-mono text-xs text-blue-400/70">
              MASS FLOW
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Flow-Rate Sensitivity
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Investigated the effect of changing mass-flow rate on propulsion
              performance.
            </p>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-7 md:col-span-2">

            <p className="font-mono text-xs text-emerald-400/70">
              MANEUVERABILITY
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Vehicle Maneuverability Analysis
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Used the mathematical models to investigate the propulsion
              system's ability to support manoeuvrability requirements of the
              Mars vehicle.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT SCOPE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

              <p className="font-mono text-xs text-emerald-400">
                MY CONTRIBUTION
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Propulsion & Performance
              </h3>

              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
                <p>• Determined operational requirements</p>
                <p>• Designed H₂O₂ monopropellant propulsion concept</p>
                <p>• Developed MATLAB mathematical models</p>
                <p>• Analysed flight time and pressure / mass flow behaviour</p>
                <p>• Evaluated thrust-to-weight performance</p>
                <p>• Analysed mass-flow effects and maneuverability</p>
              </div>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="font-mono text-xs text-blue-400/70">
                OTHER TEAM CONTRIBUTIONS
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Wider Vehicle Design
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                The wider project also included vehicle disciplines outside my
                primary work package, including orbital design, structural and
                stress calculations, mass determination and power-system
                design.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ENGINEERING OUTCOME */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
            04 · Engineering Outcome
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            A model-based propulsion concept for Mars vehicle operations.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            The propulsion work established a conceptual hydrogen-peroxide
            monopropellant system and a set of MATLAB-based mathematical
            models for evaluating its performance, flight-time behaviour,
            thrust characteristics, mass-flow sensitivity and maneuverability.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "H₂O₂ Monopropellant",
              "Propulsion Design",
              "MATLAB",
              "Flight Time",
              "Pressure / Mass Flow",
              "Thrust / Weight",
              "Maneuverability",
            ].map((item) => (
              <span
                key={item}
                className="border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.12em] text-slate-400"
              >
                {item}
              </span>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}