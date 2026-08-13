import Image from "next/image";

export default function AncilePage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Mission Concept & Systems Design
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                ANCILE
              </h1>

              <h2 className="mt-3 text-xl font-medium text-blue-300 md:text-2xl">
                CubeSat Constellation for Crewed Mars Missions
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Team project focused on the mission concept and systems design
                of a CubeSat fleet supporting the protection of a manned
                transfer vehicle to Mars against solar storms. My primary
                contribution focused on the power and battery system of each
                CubeSat, with additional work on constellation analysis and
                propulsion selection.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Mission Design",
                  "STK",
                  "Orbital Analysis",
                  "Power & Battery",
                  "Propulsion",
                  "Systems Engineering",
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
                src="/ancile-cubesat-constellation.png"
                alt="ANCILE CubeSat constellation mission concept"
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
            Distributed early-warning capability for a crewed Mars mission.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            ANCILE was a team project focused on developing the mission concept
            and design capabilities of a fleet of CubeSats intended to support
            the protection of a manned transfer vehicle to Mars against solar
            storms by relaying information in advance.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            The project brought together orbital analysis, propulsion,
            spacecraft power and battery design, and mission-level system
            constraints. My primary engineering focus was the power and battery
            subsystem for each CubeSat.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="border border-white/10 bg-[#07111f] p-7">
            <p className="font-mono text-xs text-blue-400/70">
              MISSION
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Solar-Storm Awareness
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Provide advance information on solar storms to support the
              protection of a crewed Mars-transfer mission.
            </p>
          </div>

          <div className="border border-white/10 bg-[#07111f] p-7">
            <p className="font-mono text-xs text-blue-400/70">
              ARCHITECTURE
            </p>

            <h3 className="mt-5 text-xl font-medium">
              CubeSat Fleet
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Develop a distributed satellite concept capable of relaying
              information ahead of the manned transfer vehicle.
            </p>
          </div>

          <div className="border border-white/10 bg-[#07111f] p-7">
            <p className="font-mono text-xs text-emerald-400/70">
              MY FOCUS
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Power & Battery
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Designed the electrical energy budget and battery requirements
              for each individual CubeSat.
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
              Power & battery design within a wider spacecraft mission.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Within the wider ANCILE team, my primary responsibility was the
              electrical power and battery design for the individual CubeSats.
              I also contributed to the constellation analysis and propulsion
              system selection.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">

            {/* PRIMARY CONTRIBUTION */}
            <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-7 lg:col-span-2">

              <p className="font-mono text-xs text-emerald-400">
                PRIMARY CONTRIBUTION
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Power & Battery System
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Developed the electrical energy budget for each CubeSat,
                considering spacecraft power consumption, solar generation,
                battery storage and energy availability during eclipse
                conditions.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "Power consumption / load budget",
                  "Solar-panel sizing",
                  "Battery sizing",
                  "Eclipse energy requirements",
                  "Depth of discharge",
                  "Energy margin",
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


            {/* ADDITIONAL CONTRIBUTIONS */}
            <div className="space-y-5">

              <div className="border border-white/10 bg-[#07111f] p-6">
                <p className="font-mono text-xs text-blue-400/70">
                  CONTRIBUTION 02
                </p>

                <h3 className="mt-4 text-lg font-medium">
                  Constellation Analysis
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Contributed to the CubeSat constellation design and orbital
                  calculations using STK.
                </p>
              </div>

              <div className="border border-white/10 bg-[#07111f] p-6">
                <p className="font-mono text-xs text-blue-400/70">
                  CONTRIBUTION 03
                </p>

                <h3 className="mt-4 text-lg font-medium">
                  Propulsion Selection
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Contributed to propulsion-system selection by considering the
                  required ΔV together with the mass and power constraints.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CONSTELLATION & ORBITAL DESIGN */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              02 · Constellation & Orbital Design
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Supporting the CubeSat fleet architecture.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              As part of the wider team effort, I contributed to the
              constellation concept through orbital calculations and
              STK-based analysis. The work supported the definition of how
              the CubeSats could operate as a distributed fleet for the
              mission.
            </p>

            <div className="mt-8 space-y-4">

              {[
                [
                  "Constellation Concept",
                  "Contributed to the definition of the distributed CubeSat architecture.",
                ],
                [
                  "Orbital Calculations",
                  "Performed orbital calculations to evaluate spacecraft configurations.",
                ],
                [
                  "STK Analysis",
                  "Used Systems Tool Kit for orbital modelling and constellation analysis.",
                ],
                [
                  "Mission Configuration",
                  "Supported the evaluation of spacecraft positioning within the overall mission concept.",
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


          {/* SIMPLE SCHEMATIC */}
          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Mission Architecture
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center justify-center gap-4">

                <div className="h-16 w-16 rounded-full border border-orange-400/40 bg-orange-400/[0.04] flex items-center justify-center text-xs text-orange-300">
                  SUN
                </div>

                <div className="h-px flex-1 border-t border-dashed border-orange-400/30" />

                <div className="grid grid-cols-3 gap-3">
                  {["C1", "C2", "C3"].map((sat) => (
                    <div
                      key={sat}
                      className="flex h-14 w-14 items-center justify-center border border-blue-400/40 bg-blue-400/[0.04] text-xs text-blue-300"
                    >
                      {sat}
                    </div>
                  ))}
                </div>

              </div>

              <div className="flex justify-center text-slate-600">
                ↓
              </div>

              <div className="mx-auto max-w-xs border border-emerald-400/30 bg-emerald-400/[0.04] p-5 text-center">

                <p className="text-xs uppercase tracking-[0.15em] text-emerald-300">
                  Information Relay
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Advance solar-storm information
                </p>

              </div>

              <div className="flex justify-center text-slate-600">
                ↓
              </div>

              <div className="mx-auto max-w-xs border border-white/15 bg-white/[0.03] p-5 text-center">

                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  Destination
                </p>

                <p className="mt-2 text-sm text-white">
                  Manned Mars Transfer Vehicle
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* POWER & BATTERY */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              03 · Power & Battery System
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designing the electrical energy budget for each CubeSat.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              This was my primary engineering contribution to the ANCILE
              project. The power system was designed at the individual
              CubeSat level, considering electrical loads, solar power
              generation, battery storage and energy availability during
              eclipse operation.
            </p>
          </div>


          {/* POWER FLOW */}
          <div className="mt-14 border border-white/10 bg-[#07111f] p-8 sm:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Electrical Power Architecture
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-5">

              {[
                ["01", "Solar Array", "Power generation"],
                ["02", "Power Budget", "Spacecraft loads"],
                ["03", "Battery", "Energy storage"],
                ["04", "Eclipse", "Energy demand"],
                ["05", "Energy Margin", "System feasibility"],
              ].map(([number, title, text]) => (
                <div key={number} className="border border-white/10 bg-[#0b1828] p-5">

                  <span className="font-mono text-xs text-emerald-400/70">
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

            <div className="mt-8 hidden items-center justify-center gap-3 text-xs uppercase tracking-[0.15em] text-slate-600 md:flex">
              <span>Generation</span>
              <span>→</span>
              <span>Load</span>
              <span>→</span>
              <span>Storage</span>
              <span>→</span>
              <span>Eclipse</span>
              <span>→</span>
              <span>Margin</span>
            </div>

          </div>


          {/* POWER DETAILS */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-emerald-400/70">
                POWER BUDGET
              </p>

              <h3 className="mt-5 text-xl font-medium">
                Load & Operating-Mode Analysis
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Calculated the electrical demand of each CubeSat and evaluated
                the power requirements associated with its operating modes.
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-400">
                <p>• Electrical load estimation</p>
                <p>• Operating-mode requirements</p>
                <p>• Solar generation requirements</p>
              </div>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-emerald-400/70">
                BATTERY DESIGN
              </p>

              <h3 className="mt-5 text-xl font-medium">
                Energy Storage & Eclipse
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Sized the battery around the spacecraft energy requirement,
                including eclipse operation, depth of discharge and required
                energy margin.
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-400">
                <p>• Battery capacity</p>
                <p>• Eclipse energy requirement</p>
                <p>• Depth of discharge</p>
                <p>• Energy margin</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* PROPULSION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              04 · Propulsion & ΔV
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Selecting propulsion within mission constraints.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              I contributed to determining an appropriate propulsion system
              based on the required ΔV for the mission, while considering the
              mass and power constraints of the individual CubeSat.
            </p>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Propulsion Trade Space
            </p>

            <div className="mt-8 space-y-4">

              {[
                ["Mission ΔV", "Required orbital manoeuvring capability"],
                ["Mass Budget", "Compatibility with CubeSat mass constraints"],
                ["Power Budget", "Compatibility with available electrical power"],
                ["System Selection", "Propulsion solution satisfying the combined requirements"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="flex gap-5 border-b border-white/10 pb-4 last:border-0"
                >

                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                  <div>
                    <h3 className="font-medium text-white">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* SYSTEM-LEVEL CONSTRAINTS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              05 · System-Level Design
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Balancing the CubeSat subsystems.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The overall mission concept required the spacecraft subsystems
              to be considered together. My power and battery work therefore
              had to remain compatible with the propulsion requirements,
              spacecraft mass constraints and mission operating conditions.
            </p>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["ORBIT", "Constellation configuration and orbital behaviour"],
              ["POWER", "Electrical load and solar-generation requirements"],
              ["BATTERY", "Energy storage and eclipse operation"],
              ["PROPULSION", "ΔV capability within mass and power constraints"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <p className="font-mono text-xs text-blue-400/70">
                  {title}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ENGINEERING OUTCOME */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
            06 · Engineering Outcome
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            A feasible CubeSat mission concept with defined subsystem
            constraints.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            ANCILE combined constellation and orbital analysis with
            subsystem-level spacecraft design. My primary contribution was
            the power and battery design for each CubeSat, supported by
            additional work on constellation analysis and propulsion
            selection.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Mission Concept",
              "STK",
              "Orbital Analysis",
              "Power Budget",
              "Solar Sizing",
              "Battery Sizing",
              "ΔV Analysis",
              "Propulsion",
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