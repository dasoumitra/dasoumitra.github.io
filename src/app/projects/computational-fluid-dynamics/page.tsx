import Image from "next/image";

export default function ComputationalFluidDynamicsPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Computational Fluid Dynamics
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                NACA 0012
                <br />
                AIRFOIL
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                Turbulence Model Evaluation
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                CFD investigation of flow over a NACA 0012 airfoil using
                ANSYS Fluent, comparing Realizable and Standard k-ε turbulence
                models through convergence, wall y+ and drag-coefficient
                evaluation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "ANSYS Fluent",
                  "CFD",
                  "NACA 0012",
                  "Realizable k-ε",
                  "Standard k-ε",
                  "Convergence Analysis",
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
                src="/computational-fluid-dynamics.png"
                alt="NACA 0012 CFD turbulence model evaluation"
                width={1600}
                height={1000}
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
            Evaluating turbulence models for NACA 0012 flow simulation.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            The project investigated the aerodynamic flow around a NACA 0012
            airfoil using ANSYS Fluent. Two k-ε turbulence models were
            evaluated and compared based on drag coefficient, convergence
            behaviour and wall y+ values.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            The simulation used a Reynolds number of 3 × 10⁶, an air density
            of 1.225 kg/m³, a dynamic viscosity of 1.789 × 10⁻⁵ kg/ms and an
            inlet velocity of approximately 43.822 m/s. The SIMPLE solution
            method was used with the standard solver settings.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-4">

          {[
            ["01", "Geometry", "NACA 0012 airfoil"],
            ["02", "Flow", "Re = 3 × 10⁶"],
            ["03", "Models", "Two k-ε formulations"],
            ["04", "Solver", "ANSYS Fluent"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="border border-white/10 bg-[#07111f] p-7"
            >
              <span className="font-mono text-xs text-blue-400/70">
                {number}
              </span>

              <h3 className="mt-5 text-xl font-medium">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {text}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* CFD SETUP */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                02 · CFD Model & Setup
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Establishing the computational model.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The NACA 0012 airfoil was placed within a computational domain
                and discretised for the CFD analysis. The mesh and solver
                setup were established before running the turbulence-model
                comparison.
              </p>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="font-mono text-xs text-blue-400">
                REFERENCE CONDITIONS
              </p>

              <div className="mt-7 space-y-4">

                {[
                  ["Density", "1.225 kg/m³"],
                  ["Characteristic length", "1 m"],
                  ["Viscosity", "1.789 × 10⁻⁵ kg/ms"],
                  ["Reynolds number", "3 × 10⁶"],
                  ["Inlet velocity", "43.822 m/s"],
                  ["Solution method", "SIMPLE"],
                ].map(([parameter, value]) => (
                  <div
                    key={parameter}
                    className="flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <span className="text-sm text-slate-400">
                      {parameter}
                    </span>

                    <span className="font-mono text-sm text-blue-300">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* MESH */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            03 · Mesh Development
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Structured discretisation around the airfoil.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            The computational domain was meshed around the NACA 0012 geometry.
            Edge sizing was defined for the rectangular and C-section regions
            to provide the required discretisation for the flow simulation.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="font-mono text-xs text-blue-400">
              DOMAIN
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              C-Type Domain
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Computational domain arranged around the NACA 0012 airfoil.
            </p>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="font-mono text-xs text-blue-400">
              EDGE SIZING
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              60 Divisions
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Applied to the first and second edges of the rectangular region.
            </p>

          </div>


          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

            <p className="font-mono text-xs text-emerald-400">
              C-SECTION
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              72 Divisions
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Third edge sizing used for the C-section around the airfoil.
            </p>

          </div>

        </div>

      </section>


      {/* MODEL 1 */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                04 · Model A
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Realizable k-ε
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The Realizable k-ε model produced a drag coefficient of
                approximately 0.0097 after convergence, with the solution
                converging after roughly 395 iterations.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">

                <div className="border border-blue-400/30 bg-blue-400/[0.03] p-5">
                  <p className="text-xs text-slate-500">
                    DRAG COEFFICIENT
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-blue-300">
                    0.009731
                  </p>
                </div>

                <div className="border border-blue-400/30 bg-blue-400/[0.03] p-5">
                  <p className="text-xs text-slate-500">
                    ITERATIONS
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-blue-300">
                    ~395
                  </p>
                </div>

              </div>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="font-mono text-xs text-blue-400">
                SOLUTION CHECKS
              </p>

              <div className="mt-7 space-y-5">

                <div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">
                      Wall y+
                    </span>

                    <span className="font-mono text-sm text-emerald-400">
                      0.10 – 0.23
                    </span>
                  </div>

                  <div className="mt-3 h-2 bg-white/5">
                    <div className="h-full w-[25%] bg-emerald-400/70" />
                  </div>
                </div>


                <div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">
                      Convergence
                    </span>

                    <span className="font-mono text-sm text-blue-300">
                      ~395 iterations
                    </span>
                  </div>

                  <div className="mt-3 h-2 bg-white/5">
                    <div className="h-full w-[85%] bg-blue-400/70" />
                  </div>
                </div>

              </div>

              <div className="mt-8 border border-emerald-400/30 bg-emerald-400/[0.03] p-5">
                <p className="text-sm text-emerald-300">
                  Drag coefficient close to the reference value of 0.0096
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* MODEL 2 */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-orange-400">
              05 · Model B
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Standard k-ε
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The Standard k-ε model produced a drag coefficient of
              approximately 0.0112 and reached convergence significantly
              earlier than the Realizable formulation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">

              <div className="border border-orange-400/30 bg-orange-400/[0.03] p-5">
                <p className="text-xs text-slate-500">
                  DRAG COEFFICIENT
                </p>

                <p className="mt-2 text-2xl font-semibold text-orange-300">
                  0.011230
                </p>
              </div>

              <div className="border border-orange-400/30 bg-orange-400/[0.03] p-5">
                <p className="text-xs text-slate-500">
                  ITERATIONS
                </p>

                <p className="mt-2 text-2xl font-semibold text-orange-300">
                  ~197
                </p>
              </div>

            </div>

          </div>


          <div className="border border-white/10 bg-[#07111f] p-8">

            <p className="font-mono text-xs text-orange-400">
              SOLUTION CHECKS
            </p>

            <div className="mt-7 space-y-5">

              <div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">
                    Wall y+
                  </span>

                  <span className="font-mono text-sm text-emerald-400">
                    35 – 65
                  </span>
                </div>

                <div className="mt-3 h-2 bg-white/5">
                  <div className="h-full w-[55%] bg-emerald-400/70" />
                </div>
              </div>


              <div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">
                    Convergence
                  </span>

                  <span className="font-mono text-sm text-orange-300">
                    ~197 iterations
                  </span>
                </div>

                <div className="mt-3 h-2 bg-white/5">
                  <div className="h-full w-[45%] bg-orange-400/70" />
                </div>
              </div>

            </div>

            <div className="mt-8 border border-orange-400/30 bg-orange-400/[0.03] p-5">
              <p className="text-sm text-orange-300">
                Faster convergence, but less accurate drag prediction
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* COMPARISON */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              06 · Model Comparison
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Accuracy versus computational convergence.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The comparison revealed a clear trade-off between the two
              turbulence models. The Realizable k-ε model produced the drag
              coefficient closer to the reference value, while the Standard
              k-ε model converged in approximately half the iterations.
            </p>

          </div>


          <div className="mt-12 overflow-hidden border border-white/10 bg-[#07111f]">

            <table className="w-full border-collapse text-left">

              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-xs uppercase tracking-[0.15em] text-slate-500">
                    Parameter
                  </th>

                  <th className="p-5 text-xs uppercase tracking-[0.15em] text-blue-400">
                    Realizable k-ε
                  </th>

                  <th className="p-5 text-xs uppercase tracking-[0.15em] text-orange-400">
                    Standard k-ε
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-white/10">
                  <td className="p-5 text-sm text-slate-400">
                    Drag coefficient
                  </td>

                  <td className="p-5 font-mono text-sm text-blue-300">
                    0.009731
                  </td>

                  <td className="p-5 font-mono text-sm text-orange-300">
                    0.011230
                  </td>
                </tr>


                <tr className="border-b border-white/10">
                  <td className="p-5 text-sm text-slate-400">
                    y+ value
                  </td>

                  <td className="p-5 font-mono text-sm text-blue-300">
                    0.10 – 0.23
                  </td>

                  <td className="p-5 font-mono text-sm text-orange-300">
                    35 – 65
                  </td>
                </tr>


                <tr>
                  <td className="p-5 text-sm text-slate-400">
                    Convergence
                  </td>

                  <td className="p-5 font-mono text-sm text-blue-300">
                    ~395 iterations
                  </td>

                  <td className="p-5 font-mono text-sm text-orange-300">
                    ~197 iterations
                  </td>
                </tr>

              </tbody>

            </table>

          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-7">

              <p className="font-mono text-xs text-emerald-400">
                HIGHER ACCURACY
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Realizable k-ε
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Produced a drag coefficient closer to the reference value
                reported for the NACA 0012 case.
              </p>

            </div>


            <div className="border border-orange-400/30 bg-orange-400/[0.03] p-7">

              <p className="font-mono text-xs text-orange-400">
                FASTER CONVERGENCE
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Standard k-ε
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Reached convergence considerably earlier, reducing the
                computational iteration count.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FLOW RESULTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            07 · Flow Field Evaluation
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Interpreting the aerodynamic flow field.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            In addition to the drag coefficient comparison, the simulations
            were evaluated through streamline and static-pressure
            visualisations around the airfoil.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {[
            [
              "STREAMLINES",
              "Realizable k-ε",
              "Flow field visualisation over the airfoil with streamlines shown in the reported range of 560–780 kg/s.",
            ],
            [
              "STREAMLINES",
              "Standard k-ε",
              "Flow field visualisation with the reported streamline range of 520–840 kg/s.",
            ],
            [
              "PRESSURE",
              "Static Pressure",
              "Pressure contours used to visualise the pressure distribution around the NACA 0012 geometry.",
            ],
          ].map(([category, title, text]) => (
            <div
              key={title}
              className="border border-white/10 bg-[#07111f] p-7"
            >

              <p className="font-mono text-xs text-blue-400">
                {category}
              </p>

              <h3 className="mt-5 text-xl font-medium">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* ENGINEERING OUTCOME */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
            08 · Engineering Outcome
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            Selecting the right turbulence model involves a trade-off.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            The CFD study demonstrated that the Realizable k-ε model provided
            a drag coefficient closer to the reference value, while the
            Standard k-ε model achieved convergence in significantly fewer
            iterations. The comparison highlighted the balance between
            solution accuracy and computational efficiency in turbulence-model
            selection.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "ANSYS Fluent",
              "NACA 0012",
              "CFD",
              "Realizable k-ε",
              "Standard k-ε",
              "Mesh Generation",
              "Convergence",
              "Wall y+",
              "Drag Coefficient",
              "Pressure Contours",
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