import Image from "next/image";

export default function AircraftWingPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
                Structural Analysis & Optimisation
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                MODEL
                <br />
                AIRCRAFT WING
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                FEA, Sizing & Weight Optimisation
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Preliminary sizing and finite element analysis of a model
                aircraft wing using ANSYS, with thickness optimisation to
                reduce weight while satisfying deformation, strain and
                buckling requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "ANSYS Mechanical",
                  "FEA",
                  "Structural Analysis",
                  "Optimisation",
                  "Wing Design",
                  "Composite Structure",
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


            {/* CARD / HERO IMAGE */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]">

              <Image
                src="/aircraft-wing-fea.png"
                alt="Model aircraft wing FEA and optimisation"
                width={1600}
                height={1000}
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

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              01 · Project Overview
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Optimising wing structure through finite element analysis.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The project focused on the preliminary sizing of a model
              aircraft wing using ANSYS. A shell-element finite element model
              was developed for the wing skin, spars and wing box.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The analysis was used to determine suitable component
              thicknesses while reducing overall wing weight and maintaining
              the required deformation, strain and structural stability
              limits.
            </p>

          </div>


          {/* MY CONTRIBUTION */}

          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

            <p className="font-mono text-xs text-emerald-400">
              ENGINEERING WORK
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              FEA & Structural Optimisation
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">

              <p>• Developed shell-element FE model</p>
              <p>• Generated and validated the mesh</p>
              <p>• Defined structural boundary conditions</p>
              <p>• Applied transverse wing loads</p>
              <p>• Performed static structural analysis</p>
              <p>• Performed linear buckling analysis</p>
              <p>• Optimised component thicknesses</p>
              <p>• Evaluated final structural performance</p>

            </div>

          </div>

        </div>


        {/* KEY NUMBERS */}

        <div className="mt-12 grid gap-5 md:grid-cols-4">

          {[
            ["FINAL WEIGHT", "263.59 g", "Optimised wing"],
            ["DEFORMATION", "42.129 mm", "Maximum"],
            ["STRAIN", "1999.4 με", "Maximum principal"],
            ["BUCKLING", "1.8626", "Load multiplier"],
          ].map(([title, value, subtitle]) => (

            <div
              key={title}
              className="border border-white/10 bg-[#07111f] p-6"
            >

              <p className="font-mono text-xs text-blue-400">
                {title}
              </p>

              <p className="mt-5 text-2xl font-semibold text-slate-200">
                {value}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {subtitle}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          FE MODEL & MESH
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

              <Image
                src="/wing-fea-mesh.png"
                alt="ANSYS finite element mesh of model aircraft wing"
                width={1400}
                height={800}
                className="h-auto w-full"
              />

            </div>


            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                02 · FE Model & Mesh
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building and validating the finite element model.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The wing was represented using shell elements for the skin,
                spars and wing box. A quadrilateral face mesh was generated
                across the structural components, with edge sizing used to
                refine the mesh.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Mesh quality was checked using aspect ratio, Jacobian ratio
                and maximum corner angle criteria. Further refinement produced
                negligible changes in strain and deformation results.
              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Quadrilateral shell-element mesh",
                  "Edge sizing and local refinement",
                  "Aspect ratio validation",
                  "Jacobian ratio validation",
                  "Maximum corner angle validation",
                  "Mesh convergence assessment",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >

                    <span className="text-blue-400">
                      ✓
                    </span>

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          LOAD CASE
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              03 · Load Case
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Defining the wing loading and boundary conditions.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The wing-body interface was constrained using fixed supports
              around the interface edges. Transverse forces were then applied
              at multiple stations along the wing.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The applied loading included the specified ultimate factor,
              providing the basis for the subsequent static structural and
              buckling analyses.
            </p>


            <div className="mt-8 border border-white/10 bg-[#07111f] p-6">

              <p className="font-mono text-xs text-blue-400">
                ANALYSIS SETUP
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-400">

                <p>
                  <span className="text-slate-200">
                    Boundary:
                  </span>{" "}
                  Fixed wing-body interface
                </p>

                <p>
                  <span className="text-slate-200">
                    Loading:
                  </span>{" "}
                  Transverse forces along wing stations
                </p>

                <p>
                  <span className="text-slate-200">
                    Analyses:
                  </span>{" "}
                  Static structural + linear buckling
                </p>

              </div>

            </div>

          </div>


          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/wing-load-case.png"
              alt="ANSYS wing loading and boundary condition definition"
              width={1400}
              height={1000}
              className="h-auto w-full"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          ANALYSIS WORKFLOW
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            04 · Analysis Workflow
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            From structural response to optimised thickness.
          </h2>


          <div className="mt-12 grid gap-4 md:grid-cols-5">

            {[
              ["01", "FE Model", "Wing geometry and shell-element representation"],
              ["02", "Mesh", "Mesh generation and quality validation"],
              ["03", "Static FEA", "Deformation and principal strain"],
              ["04", "Buckling", "Linear stability assessment"],
              ["05", "Optimisation", "Thickness and weight reduction"],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="border border-white/10 bg-[#07111f] p-6"
              >

                <p className="font-mono text-xs text-blue-400">
                  {number}
                </p>

                <h3 className="mt-5 text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          OPTIMISATION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/wing-optimization.png"
              alt="ANSYS thickness optimisation of aircraft wing"
              width={1400}
              height={1000}
              className="h-auto w-full"
            />

          </div>


          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              05 · Thickness Optimisation
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Reducing weight without compromising structural requirements.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Direct optimisation was used to identify suitable thicknesses
              for the wing components. The optimisation objectives were to
              minimise thickness and overall weight while maintaining the
              required strain and buckling limits.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The resulting values were then reviewed against the structural
              response. Where the principal strain exceeded the allowable
              range, the affected region was reinforced and other areas were
              reduced where reinforcement was not required.
            </p>


            <div className="mt-8 border border-emerald-400/30 bg-emerald-400/[0.03] p-6">

              <p className="font-mono text-xs text-emerald-400">
                DESIGN TRADE-OFF
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Increase thickness only where required by the structural
                response, while reducing unnecessary material elsewhere to
                conserve overall wing weight.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STRAIN RESULT
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                06 · Static Structural Results
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Principal strain remained within the defined limits.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The final model was evaluated for maximum and minimum
                principal strain on both the top and bottom surfaces of the
                wing.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="border border-white/10 bg-[#07111f] p-5">

                  <p className="text-xs text-slate-500">
                    MAX TOP
                  </p>

                  <p className="mt-2 text-xl font-semibold text-blue-300">
                    1999.4 με
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Limit: &lt; 2000 με
                  </p>

                </div>


                <div className="border border-white/10 bg-[#07111f] p-5">

                  <p className="text-xs text-slate-500">
                    MIN TOP
                  </p>

                  <p className="mt-2 text-xl font-semibold text-blue-300">
                    -1999.3 με
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Limit: &gt; -2000 με
                  </p>

                </div>

              </div>

            </div>


            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

              <Image
                src="/wing-principal-strain-top.png"
                alt="Maximum principal strain result from ANSYS"
                width={1400}
                height={1000}
                className="h-auto w-full"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DEFORMATION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/wing-total-deformation.png"
              alt="Maximum total deformation result from ANSYS"
              width={1400}
              height={1000}
              className="h-auto w-full"
            />

          </div>


          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              07 · Deformation
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Maximum deformation remained below the defined limit.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The final static structural analysis produced a maximum total
              deformation of 42.129 mm.
            </p>

            <div className="mt-8 border border-blue-400/30 bg-blue-400/[0.03] p-7">

              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                REQUIREMENT
              </p>

              <p className="mt-3 text-3xl font-semibold text-blue-300">
                &lt; 100 mm
              </p>

              <div className="my-5 h-px bg-white/10" />

              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                ACHIEVED
              </p>

              <p className="mt-3 text-3xl font-semibold text-white">
                42.129 mm
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BUCKLING
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                08 · Linear Buckling
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Structural stability verified through buckling analysis.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                A linear buckling analysis was performed alongside the static
                structural analysis to verify the stability of the final wing
                configuration.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                The achieved load multiplier was 1.8626, exceeding the defined
                requirement of 1.2.
              </p>


              <div className="mt-8 border border-emerald-400/30 bg-emerald-400/[0.03] p-7">

                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  LOAD MULTIPLIER
                </p>

                <p className="mt-3 text-4xl font-semibold text-emerald-300">
                  1.8626
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Requirement &gt; 1.2
                </p>

              </div>

            </div>


            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

              <Image
                src="/wing-buckling.png"
                alt="Linear buckling analysis result from ANSYS"
                width={1400}
                height={1000}
                className="h-auto w-full"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL RESULTS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
          09 · Final Verification
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Final structural performance.
        </h2>


        <div className="mt-12 overflow-hidden border border-white/10 bg-[#07111f]">

          <div className="grid md:grid-cols-3">

            <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">

              <p className="font-mono text-xs text-blue-400">
                WING WEIGHT
              </p>

              <p className="mt-5 text-4xl font-semibold">
                263.59 g
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Resulting wing weight after the thickness optimisation.
              </p>

            </div>


            <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">

              <p className="font-mono text-xs text-blue-400">
                STRUCTURAL RESPONSE
              </p>

              <p className="mt-5 text-4xl font-semibold">
                42.129 mm
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Maximum total deformation against a 100 mm limit.
              </p>

            </div>


            <div className="p-8">

              <p className="font-mono text-xs text-emerald-400">
                STABILITY
              </p>

              <p className="mt-5 text-4xl font-semibold text-emerald-300">
                1.8626
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Buckling load multiplier against a required value above 1.2.
              </p>

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
            10 · Engineering Outcome
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            A lighter wing that satisfies the defined structural criteria.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            The final analysis combined finite element modelling, mesh
            validation, static structural analysis, linear buckling and
            thickness optimisation to arrive at a structurally acceptable
            wing configuration with a resulting weight of 263.59 g.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "ANSYS Mechanical",
              "Finite Element Analysis",
              "Shell Elements",
              "Mesh Validation",
              "Static Structural",
              "Linear Buckling",
              "Thickness Optimisation",
              "Weight Reduction",
              "Structural Verification",
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