import Image from "next/image";

export default function AircraftDesignPage() {
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
                Aircraft Design
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                WING &<br />
                STABILIZER
              </h1>

              <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
                Structural Design
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Preliminary structural design of the wing and horizontal and
                vertical stabilizers for a conceptual commercial aircraft,
                developed through detailed CATIA V5 modelling and assembly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "CATIA V5",
                  "Structural Design",
                  "Wing Design",
                  "Stabilizer Design",
                  "Aerospace",
                  "CAD Assembly",
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


            {/* HERO IMAGE */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]">

              <Image
                src="/aircraft-design-structure.png"
                alt="Aircraft wing and stabilizer structural design"
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
              Designing the aircraft&apos;s lifting-surface structures.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The project involved the preliminary design of a conceptual
              aircraft powered by two Kuznetsov NK-93 engines. Multiple
              disciplines contributed to the overall aircraft concept.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              My work focused specifically on the structural design of the
              aircraft wing and stabilizers, including the internal structural
              arrangement, material selection and thickness definition using
              CATIA V5.
            </p>

          </div>


          {/* MY CONTRIBUTION */}

          <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

            <p className="font-mono text-xs text-emerald-400">
              MY CONTRIBUTION
            </p>

            <h3 className="mt-5 text-2xl font-medium">
              Wing & Stabilizer Structures
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">

              <p>• Wing structural layout</p>
              <p>• Rib, spar and stringer design</p>
              <p>• Skin concept</p>
              <p>• Horizontal stabilizer structure</p>
              <p>• Vertical stabilizer structure</p>
              <p>• Raked wingtip concept</p>
              <p>• Structural attachment details</p>
              <p>• CATIA V5 CAD modelling and assembly</p>

            </div>

          </div>

        </div>


        {/* DESIGN PARAMETERS */}

        <div className="mt-12 grid gap-5 md:grid-cols-4">

          {[
            ["WING", "38 ribs", "8 stringers"],
            ["HORIZONTAL TAIL", "12 ribs", "6 stringers / section"],
            ["VERTICAL TAIL", "14 ribs", "8 stringers"],
            ["STRUCTURE", "3 mm ribs", "15 mm spars"],
          ].map(([title, value1, value2]) => (

            <div
              key={title}
              className="border border-white/10 bg-[#07111f] p-6"
            >

              <p className="font-mono text-xs text-blue-400">
                {title}
              </p>

              <p className="mt-5 text-xl font-semibold text-slate-200">
                {value1}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {value2}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          WING STRUCTURE
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* ACTUAL REPORT IMAGE */}

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

              <Image
                src="/wing-structure-cad.jpeg"
                alt="Wing structural CAD model showing ribs and stringers"
                width={1400}
                height={900}
                className="h-auto w-full"
              />

            </div>


            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                02 · Wing Structural Design
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Internal wing structure developed in CATIA V5.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The wing was developed around a conventional structural
                arrangement of spars, ribs and stringers. The skin concept
                provides the external aerodynamic surface while the internal
                structure provides the supporting framework.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                The CAD model was developed to represent the internal
                structure and provide a coherent three-dimensional assembly.
              </p>


              <div className="mt-8 grid grid-cols-2 gap-3">

                <div className="border border-blue-400/30 bg-blue-400/[0.03] p-5">

                  <p className="text-xs text-slate-500">
                    RIBS
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-blue-300">
                    38
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    per wing
                  </p>

                </div>


                <div className="border border-blue-400/30 bg-blue-400/[0.03] p-5">

                  <p className="text-xs text-slate-500">
                    STRINGERS
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-blue-300">
                    8
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    per wing
                  </p>

                </div>


                <div className="border border-white/10 p-5">

                  <p className="text-xs text-slate-500">
                    RIB THICKNESS
                  </p>

                  <p className="mt-2 text-xl font-semibold text-slate-300">
                    3 mm
                  </p>

                </div>


                <div className="border border-white/10 p-5">

                  <p className="text-xs text-slate-500">
                    SPAR THICKNESS
                  </p>

                  <p className="mt-2 text-xl font-semibold text-slate-300">
                    15 mm
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STABILIZER STRUCTURES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            03 · Stabilizer Structures
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Horizontal and vertical tail structures.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            The stabilizer structures were developed using the same
            engineering approach as the main wing, with internal ribs and
            stringers providing the structural framework.
          </p>

        </div>


        <div className="mt-12 grid gap-6 lg:grid-cols-2">


          {/* HORIZONTAL STABILIZER */}

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/horizontal-vertical-tail-cad.jpeg"
              alt="Horizontal and vertical stabilizer CAD structures"
              width={1400}
              height={900}
              className="h-auto w-full"
            />

            <div className="border-t border-white/10 p-7">

              <p className="font-mono text-xs text-blue-400">
                HORIZONTAL STABILIZER
              </p>

              <h3 className="mt-3 text-xl font-medium">
                Internal rib and stringer structure
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                The horizontal stabilizer was developed with a structured
                internal arrangement of ribs and stringers.
              </p>

              <div className="mt-5 font-mono text-sm text-blue-300">
                12 ribs + 6 stringers / section
              </div>

            </div>

          </div>


          {/* VERTICAL STABILIZER */}

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/vertical-stabilizer-attachment.png"
              alt="Vertical stabilizer structural attachment"
              width={1400}
              height={900}
              className="h-auto w-full"
            />

            <div className="border-t border-white/10 p-7">

              <p className="font-mono text-xs text-blue-400">
                VERTICAL STABILIZER
              </p>

              <h3 className="mt-3 text-xl font-medium">
                Structural layout and attachment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                The vertical stabilizer included its own internal rib and
                stringer arrangement together with the structural attachment
                interface.
              </p>

              <div className="mt-5 font-mono text-sm text-blue-300">
                14 ribs + 8 stringers
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RAKED WINGTIP
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                04 · Wingtip Design
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Raked wingtip selected for the aircraft concept.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Different wingtip-device concepts were considered as part of
                the project. The raked wingtip was selected for the final
                conceptual configuration.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                The concept provided a blended geometry while offering an
                efficient and practical approach for the overall aircraft
                configuration.
              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Blended geometry",
                  "Aerodynamic efficiency",
                  "Lower conceptual weight",
                  "Practical manufacturing concept",
                  "Lower conceptual complexity",
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


            {/* ACTUAL REPORT IMAGE */}

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

              <Image
                src="/raked-wingtip.jpeg"
                alt="Raked wingtip design"
                width={1400}
                height={900}
                className="h-auto w-full"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STRUCTURAL ATTACHMENTS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            05 · Structural Interfaces
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Integrating the lifting surfaces with the aircraft structure.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            The project also included detailed CAD work around structural
            interfaces connecting the wing and stabilizers to the wider
            aircraft architecture.
          </p>

        </div>


        <div className="mt-12 grid gap-6 lg:grid-cols-2">


          {/* WING ATTACHMENT */}

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/wing-attachment-structure.png"
              alt="Wing attachment structural CAD detail"
              width={1400}
              height={900}
              className="h-auto w-full"
            />

            <div className="border-t border-white/10 p-7">

              <p className="font-mono text-xs text-blue-400">
                WING ATTACHMENT
              </p>

              <h3 className="mt-3 text-xl font-medium">
                Wing structural interface
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                CAD development of the wing attachment and structural
                interface within the aircraft architecture.
              </p>

            </div>

          </div>


          {/* VERTICAL STABILIZER ATTACHMENT */}

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/vertical-stabilizer-attachment.png"
              alt="Vertical stabilizer attachment fitting"
              width={1400}
              height={900}
              className="h-auto w-full"
            />

            <div className="border-t border-white/10 p-7">

              <p className="font-mono text-xs text-blue-400">
                VERTICAL STABILIZER
              </p>

              <h3 className="mt-3 text-xl font-medium">
                Structural attachment concept
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Structural attachment detail for the vertical stabilizer,
                developed as part of the overall stabilizer CAD assembly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MATERIAL & STRUCTURAL CONCEPT
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-6 lg:grid-cols-3">


            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400">
                SKIN
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Aluminium + Composite Concept
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                The project considered aluminium and composite material
                concepts for the structural skin and sandwich construction.
              </p>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400">
                PRIMARY STRUCTURE
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Spars + Ribs
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Spars provide the principal spanwise structural members while
                ribs form the chordwise structural framework.
              </p>

            </div>


            <div className="border border-white/10 bg-[#07111f] p-7">

              <p className="font-mono text-xs text-blue-400">
                SECONDARY STRUCTURE
              </p>

              <h3 className="mt-4 text-xl font-medium">
                Stringers
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Stringers were incorporated into the structural layout to
                provide additional spanwise support.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          AIRCRAFT ASSEMBLY
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">


          {/* ACTUAL REPORT IMAGE */}

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

            <Image
              src="/aircraft-assembly.jpeg"
              alt="Conceptual aircraft CAD assembly"
              width={1600}
              height={900}
              className="h-auto w-full"
            />

          </div>


          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              06 · CAD Assembly
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Integrating the structures into the aircraft.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The individual structural components were integrated into the
              overall conceptual aircraft CAD assembly, allowing the wing and
              stabilizer structures to be represented within the complete
              aircraft configuration.
            </p>


            <div className="mt-8 border border-white/10 bg-[#07111f] p-6">

              <p className="font-mono text-xs text-blue-400">
                CAD WORKFLOW
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">

                <span className="border border-white/10 px-4 py-2 text-slate-400">
                  Component Design
                </span>

                <span className="text-blue-400">
                  →
                </span>

                <span className="border border-white/10 px-4 py-2 text-slate-400">
                  Structural Assembly
                </span>

                <span className="text-blue-400">
                  →
                </span>

                <span className="border border-emerald-400/30 px-4 py-2 text-emerald-300">
                  Aircraft Integration
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MY CONTRIBUTION VS TEAM
      ========================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-6 lg:grid-cols-2">


            {/* MY WORK */}

            <div className="border border-emerald-400/30 bg-emerald-400/[0.03] p-8">

              <p className="font-mono text-xs text-emerald-400">
                MY CONTRIBUTION
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Wing & Stabilizer Design
              </h3>

              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-400">

                <p>• Wing structural design</p>
                <p>• Horizontal stabilizer design</p>
                <p>• Vertical stabilizer design</p>
                <p>• Ribs, spars and stringers</p>
                <p>• Skin concept</p>
                <p>• Raked wingtip</p>
                <p>• Structural attachment concepts</p>
                <p>• CATIA V5 modelling and assembly</p>

              </div>

            </div>


            {/* TEAM WORK */}

            <div className="border border-white/10 bg-[#07111f] p-8">

              <p className="font-mono text-xs text-slate-500">
                TEAM CONTRIBUTIONS
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Other aircraft design activities
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-500">
                The overall aircraft was developed as a team project.
                Fuselage design, landing system, engine-related work and other
                preliminary aircraft sizing calculations were developed by
                other team members.
              </p>

              <div className="mt-7 border border-white/10 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Individual focus
                </p>

                <p className="mt-3 text-sm text-slate-300">
                  Wing + Horizontal Stabilizer + Vertical Stabilizer
                </p>

              </div>

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
            07 · Engineering Outcome
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            From structural concept to detailed aircraft CAD.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            Developed detailed three-dimensional structural concepts for the
            wing and stabilizers, incorporating ribs, spars, stringers,
            material concepts, wingtip geometry and structural interfaces,
            and integrated the resulting designs into the overall aircraft
            CAD assembly.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "CATIA V5",
              "Wing Structures",
              "Horizontal Stabilizer",
              "Vertical Stabilizer",
              "Ribs",
              "Spars",
              "Stringers",
              "Raked Wingtip",
              "Structural Integration",
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