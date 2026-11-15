import Image from "next/image";

export default function CompositeManufacturingPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Composite Manufacturing & Process Development
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                CFRP
                <br />
                BRACKET
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                Design & Manufacturing
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Designed and manufactured a four-ply CFRP bracket using CATIA
                Composite Design, producibility simulation, manual ply layup,
                vacuum compaction and controlled oven curing.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "CATIA V5",
                  "Composite Design",
                  "Producibility",
                  "CFRP Prepreg",
                  "Vacuum Bagging",
                  "Oven Curing",
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
                src="/composite-cfrp-bracket.png"
                alt="CFRP bracket composite manufacturing project"
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            01 · Project Overview
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            From digital composite design to a physical CFRP component.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            The assignment focused on the design and manufacturing of a CFRP
            bracket as part of a composite manufacturing coursework project.
            The objective was to understand the manufacturing process and
            compare the predicted fibre deformation from CATIA with the
            deformation observed during the manufacturing trial.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            The bracket consisted of four composite plies arranged in the
            stacking sequence <span className="text-slate-200">[0/45/45/0]</span>.
            CATIA was used to define the composite layup and simulate
            producibility before the physical manufacturing process.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-4">

          <div className="border border-white/10 bg-[#07111f] p-7">
            <p className="font-mono text-xs text-blue-400/70">
              COMPONENT
            </p>

            <h3 className="mt-5 text-xl font-medium">
              CFRP Bracket
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              70 × 70 × 30 mm bracket geometry.
            </p>
          </div>


          <div className="border border-white/10 bg-[#07111f] p-7">
            <p className="font-mono text-xs text-blue-400/70">
              LAYUP
            </p>

            <h3 className="mt-5 text-xl font-medium">
              [0/45/45/0]
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Four plies of 2/2 twill prepreg.
            </p>
          </div>


          <div className="border border-white/10 bg-[#07111f] p-7">
            <p className="font-mono text-xs text-orange-400/70">
              SIMULATION
            </p>

            <h3 className="mt-5 text-xl font-medium">
              Producibility
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              CATIA-based prediction of manufacturing deformation.
            </p>
          </div>


          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-7">
            <p className="font-mono text-xs text-emerald-400">
              MY ROLE
            </p>

            <h3 className="mt-5 text-xl font-medium">
              End-to-End
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Design, preparation, layup, bagging, curing and inspection.
            </p>
          </div>

        </div>

      </section>


      {/* =========================================================
          DESIGN
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                02 · CATIA Composite Design
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Defining the component and composite layup digitally.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Before manufacturing, the bracket and its composite plies
                were defined in CATIA using the Composite Design workbench.
                The digital model established the required ply shapes and
                provided a basis for studying how the material would deform
                during manufacturing.
              </p>

              <div className="mt-8 space-y-5">

                <div className="border-l border-blue-400/40 pl-5">
                  <h3 className="font-medium">
                    Bracket Definition
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Created the bracket geometry according to the specified
                    dimensions.
                  </p>
                </div>


                <div className="border-l border-blue-400/40 pl-5">
                  <h3 className="font-medium">
                    Composite Ply Definition
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Defined the four individual ply shapes and their
                    orientations.
                  </p>
                </div>


                <div className="border-l border-blue-400/40 pl-5">
                  <h3 className="font-medium">
                    Manufacturing Prediction
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Used CATIA producibility functionality to simulate the
                    expected deformation during forming.
                  </p>
                </div>

              </div>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Composite Definition
              </p>

              <div className="mt-8 space-y-3">

                <div className="border border-blue-400/30 bg-blue-400/[0.03] p-5 text-center">
                  <p className="text-sm text-blue-200">
                    Bracket Geometry
                  </p>
                </div>

                <div className="text-center text-blue-400">
                  ↓
                </div>

                <div className="border border-white/10 bg-white/[0.03] p-5 text-center">
                  <p className="text-sm text-slate-300">
                    Composite Design Workbench
                  </p>
                </div>

                <div className="text-center text-blue-400">
                  ↓
                </div>

                <div className="grid grid-cols-2 gap-2">

                  {[
                    "PLY 1 · 0°",
                    "PLY 2 · 45°",
                    "PLY 3 · 45°",
                    "PLY 4 · 0°",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-white/10 bg-white/[0.02] p-4 text-center"
                    >
                      <p className="text-xs text-slate-400">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="text-center text-blue-400">
                  ↓
                </div>

                <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-5 text-center">
                  <p className="text-sm text-emerald-300">
                    Producibility Simulation
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PLY DEFINITION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            03 · Ply Definition & Producibility
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Predicting fibre deformation before manufacturing.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            CATIA producibility functionality was used to simulate how the
            composite plies would deform while being formed around the
            tooling. The resulting prediction provided a reference for the
            physical manufacturing trial.
          </p>

        </div>


        <div className="mt-12 grid gap-5 lg:grid-cols-2">

          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="font-mono text-xs text-blue-400">
              PLY DEFINITION
            </p>

            <div className="mt-7 space-y-4">

              {[
                ["PLY 1", "0°"],
                ["PLY 2", "45°"],
                ["PLY 3", "45°"],
                ["PLY 4", "0°"],
              ].map(([ply, orientation]) => (
                <div
                  key={ply}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span className="text-sm text-slate-400">
                    {ply}
                  </span>

                  <span className="font-mono text-sm text-blue-300">
                    {orientation}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-7 border border-blue-400/30 bg-blue-400/[0.03] p-5">

              <p className="text-xs uppercase tracking-[0.15em] text-blue-400">
                Material
              </p>

              <p className="mt-2 text-sm text-slate-300">
                2/2 twill prepreg
              </p>

            </div>

          </div>


          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

            <p className="font-mono text-xs text-emerald-400">
              PRODUCIBILITY
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              Digital manufacturing prediction
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              CATIA was used to predict the deformation expected when the
              individual plies were formed around the tooling geometry.
            </p>

            <div className="mt-8 space-y-3">

              {[
                "Defined reference direction",
                "Generated ply shapes",
                "Simulated ply forming",
                "Observed predicted deformation",
                "Used simulation as manufacturing reference",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="text-emerald-400">
                    ✓
                  </span>

                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PHYSICAL MANUFACTURING
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              04 · Physical Manufacturing
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Translating the digital ply definition into a physical part.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The physical manufacturing process was performed manually using
              the ply shapes generated from CATIA. Each ply was prepared,
              oriented and formed onto the tooling before the vacuum-bagging
              and curing stages.
            </p>

          </div>


          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Tool Preparation",
                "Selected a suitable smooth tooling surface and applied release agent.",
              ],
              [
                "02",
                "Ply Preparation",
                "Cut the plies according to the CATIA-generated shapes and marked orientation.",
              ],
              [
                "03",
                "Manual Layup",
                "Placed and formed each ply onto the tooling according to the reference direction.",
              ],
              [
                "04",
                "Ply Consolidation",
                "Wrapped and compacted the layup before repeating the process for the remaining plies.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <span className="font-mono text-xs text-blue-400/70">
                  {number}
                </span>

                <h3 className="mt-5 font-medium">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>


          <div className="mt-10 border border-white/10 bg-[#07111f] p-8">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Manufacturing Sequence
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-7">

              {[
                "Tool",
                "Release Agent",
                "Cut Plies",
                "Orient",
                "Layup",
                "Compact",
                "Repeat",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <div className="flex-1 border border-blue-400/30 bg-blue-400/[0.03] p-4 text-center">

                    <p className="text-xs font-medium text-blue-200">
                      {index + 1}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      {item}
                    </p>

                  </div>

                  {index < 6 && (
                    <span className="hidden text-blue-400 md:block">
                      →
                    </span>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          VACUUM COMPACTION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              05 · Vacuum Compaction
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Establishing a controlled vacuum environment.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              After the plies were placed, the tooling and layup were wrapped
              with the required vacuum-bag materials. The assembly was then
              connected to a vacuum pump and checked for leakage before
              proceeding.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Perforated foil",
                "Breather sheet",
                "Vacuum bag",
                "Sealant tape",
                "Vacuum valve and tubing",
                "Vacuum pump",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="text-blue-400">
                    •
                  </span>

                  {item}
                </div>
              ))}

            </div>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="font-mono text-xs text-orange-400">
              LEAK CHECK
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              Vacuum integrity verification
            </h3>

            <div className="mt-8">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-blue-400/[0.04] font-mono text-sm text-blue-300">
                  VAC
                </div>

                <div className="h-px flex-1 bg-blue-400/30" />

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-blue-400/[0.04] font-mono text-sm text-blue-300">
                  BAG
                </div>

                <div className="h-px flex-1 bg-blue-400/30" />

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/[0.04] font-mono text-sm text-emerald-300">
                  TEST
                </div>

              </div>

            </div>

            <p className="mt-8 text-sm leading-7 text-slate-500">
              After evacuation, the pressure gauge was monitored for several
              minutes. A pressure drop indicated leakage and required the bag
              to be resealed before continuing.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CURING
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-orange-400">
              06 · Oven Curing
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Controlled thermal curing of the composite layup.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Following vacuum compaction, the complete package was placed in
              the oven while maintaining the vacuum connection. The programmed
              curing cycle was then executed before allowing the part to cool
              slowly.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="font-mono text-xs text-orange-400">
                STAGE 01
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                70°C
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Temperature ramp followed by a four-hour hold.
              </p>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="font-mono text-xs text-orange-400">
                STAGE 02
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                120°C
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Second temperature ramp followed by a one-hour hold.
              </p>

            </div>


            <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

              <p className="font-mono text-xs text-emerald-400">
                FINAL
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Controlled Cooling
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                The cured part was allowed to cool slowly before extraction.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PREDICTED VS PHYSICAL
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            07 · Digital vs Physical Manufacturing
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Using simulation as a reference for the manufacturing trial.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            A key objective of the project was to compare the fibre deformation
            predicted during the CATIA producibility simulation with the
            deformation observed during the physical manufacturing process.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-2">

          <div className="border border-blue-400/30 bg-blue-400/[0.03] p-8">

            <p className="font-mono text-xs text-blue-400">
              DIGITAL PREDICTION
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              CATIA Producibility
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
              <p>• Defined the composite ply geometry.</p>
              <p>• Simulated ply forming around the tooling.</p>
              <p>• Observed predicted fibre deformation.</p>
              <p>• Established a reference for the physical trial.</p>
            </div>

          </div>


          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

            <p className="font-mono text-xs text-emerald-400">
              MANUFACTURING TRIAL
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              Physical Ply Forming
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
              <p>• Cut the physical plies.</p>
              <p>• Maintained the defined reference direction.</p>
              <p>• Formed the plies around the tooling.</p>
              <p>• Observed the resulting fibre deformation.</p>
            </div>

          </div>

        </div>


        <div className="mt-8 border border-white/10 bg-[#07111f] p-8 text-center">

          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Engineering Approach
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">

            <span className="border border-blue-400/30 bg-blue-400/[0.03] px-5 py-3 text-sm text-blue-200">
              CATIA Prediction
            </span>

            <span className="text-blue-400">
              ↔
            </span>

            <span className="border border-emerald-400/30 bg-emerald-400/[0.03] px-5 py-3 text-sm text-emerald-300">
              Physical Manufacturing
            </span>

            <span className="text-blue-400">
              ↔
            </span>

            <span className="border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300">
              Fibre Deformation
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          INSPECTION
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                08 · Final Inspection
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Extracting and inspecting the cured bracket.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                After curing and cooling, the vacuum-bag assembly was opened
                and the component was extracted from the tooling. The final
                part was inspected for surface finish and excess material was
                removed according to the required end-of-part dimensions.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="border border-white/10 bg-[#07111f] p-7">

                <p className="font-mono text-xs text-blue-400">
                  SURFACE
                </p>

                <h3 className="mt-4 text-xl font-medium">
                  Surface Inspection
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Checked the cured component for a smooth surface finish.
                </p>

              </div>


              <div className="border border-white/10 bg-[#07111f] p-7">

                <p className="font-mono text-xs text-blue-400">
                  TRIM
                </p>

                <h3 className="mt-4 text-xl font-medium">
                  Final Trimming
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Removed excess material according to the required end-of-part
                  dimensions.
                </p>

              </div>


              <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-7 sm:col-span-2">

                <p className="font-mono text-xs text-emerald-400">
                  FINAL COMPONENT
                </p>

                <h3 className="mt-4 text-xl font-medium">
                  Manufactured CFRP Bracket
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Completed the full manufacturing sequence from digital
                  composite definition through physical fabrication and final
                  inspection.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MY CONTRIBUTION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

            <p className="font-mono text-xs text-emerald-400">
              MY CONTRIBUTION
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              End-to-End Composite Manufacturing
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">

              <p>• CATIA composite bracket design</p>
              <p>• Composite ply definition</p>
              <p>• Ply orientation definition</p>
              <p>• CATIA producibility simulation</p>
              <p>• Physical ply cutting and preparation</p>
              <p>• Manual composite layup</p>
              <p>• Vacuum-bag preparation</p>
              <p>• Vacuum leak checking</p>
              <p>• Oven curing</p>
              <p>• Part extraction and inspection</p>
              <p>• Final trimming</p>

            </div>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="font-mono text-xs text-blue-400/70">
              TOOLS & PROCESS
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              Composite Manufacturing
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {[
                "CATIA V5",
                "Composite Design Workbench",
                "Producibility",
                "2/2 Twill Prepreg",
                "0° / 45° Ply Orientation",
                "Manual Layup",
                "Release Agent",
                "Perforated Foil",
                "Breather",
                "Peel Ply",
                "Vacuum Bag",
                "Vacuum Pump",
                "Oven Curing",
                "Surface Inspection",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 px-4 py-3 text-sm text-slate-400"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ENGINEERING OUTCOME
      ========================================================== */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
            09 · Engineering Outcome
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            Bridging composite simulation and physical manufacturing.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            Completed the design and physical manufacture of a four-ply CFRP
            bracket, using CATIA to define the composite layup and predict
            producibility before carrying out the manufacturing trial,
            vacuum compaction, controlled oven curing and final inspection.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "CATIA V5",
              "Composite Design",
              "Producibility",
              "[0/45/45/0] Layup",
              "Manual Ply Forming",
              "Vacuum Compaction",
              "Oven Curing",
              "Inspection",
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