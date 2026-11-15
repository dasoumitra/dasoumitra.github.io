"use client";

import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/wind-turbine-generator.png",

  generator: "/wtg-generator-design.png",
  mesh: "/wtg-ansys-mesh.png",
  deformation: "/wtg-deformation.png",
  loadPoints: "/wtg-load-points.png",
  geometry: "/wtg-support-bars.png",
  finalResults: "/wtg-final-results.png",
};

export default function WindTurbineGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* ================= HERO ================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div>
              <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-[#4da3ff]">
                MASTER&apos;S THESIS · STRUCTURAL ANALYSIS
              </p>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                WIND
                <br />
                TURBINE
                <br />
                <span className="text-[#4da3ff]">GENERATOR</span>
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-[#6bb6ff]">
                FEA &amp; Load-Point Optimisation
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Investigation of the structural behaviour of a direct-drive
                permanent-magnet wind turbine generator using CATIA V5 and
                ANSYS Mechanical, with a focus on load-point distribution,
                deformation and structural-analysis efficiency.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "CATIA V5",
                  "ANSYS Mechanical",
                  "FEA",
                  "Structural Analysis",
                  "Load Case Study",
                  "Wind Energy",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1766a8] px-4 py-2 text-sm text-[#b9dcff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#061321]">
              <Image
                src={images.hero}
                alt="Wind turbine generator structural analysis project"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>


      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel number="01" title="PROJECT OVERVIEW" />

        <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
          Understanding how load-point distribution affects generator
          structural analysis.
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              The thesis investigated the structural behaviour of a
              direct-drive permanent-magnet wind turbine generator and
              specifically examined how the positioning and number of load
              application points influence deformation results.
            </p>

            <p>
              The objective was to identify the minimum number of load points
              required to obtain sufficiently accurate structural-analysis
              results while reducing the computational effort required for
              coupling finite-element and multi-body simulations.
            </p>

            <p>
              A generator rotor structure was modelled using CATIA V5 and
              subsequently analysed in ANSYS Mechanical using different load
              point configurations and load distribution functions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <StatCard value="2 MN" label="Applied thrust load" />
            <StatCard value="72 → 6" label="Load points investigated" />
            <StatCard value="60°" label="Final load-point spacing" />
            <StatCard value="<10%" label="Accepted deviation criterion" />
          </div>

        </div>
      </section>


      {/* ================= GENERATOR DESIGN ================= */}
      <section className="border-y border-white/10 bg-[#030e1a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel number="02" title="GENERATOR STRUCTURAL DESIGN" />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold">
                A parameterised rotor structure for structural analysis.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                The generator geometry was developed from dimensions obtained
                through the literature review. The selected configuration
                represented a direct-drive permanent-magnet generator with a
                large rotor structure and a small rotor-stator air gap.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <Metric
                  value="5 m"
                  label="Outer rotor radius"
                />

                <Metric
                  value="0.7 m"
                  label="Inner radius"
                />

                <Metric
                  value="10 mm"
                  label="Air gap"
                />

                <Metric
                  value="1.6 m"
                  label="Rotor width"
                />

              </div>
            </div>

            <ProjectImage
              src={images.generator}
              alt="Wind turbine generator structural design"
              caption="Generator rotor structure and dimensions developed for the analysis."
            />

          </div>
        </div>
      </section>


      {/* ================= WORKFLOW ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel number="03" title="ENGINEERING WORKFLOW" />

        <h2 className="mt-5 text-3xl font-bold md:text-4xl">
          From CAD geometry to validated FEA.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          <ProcessCard
            number="01"
            title="Literature Study"
            text="Reviewed direct-drive generator architectures, structural requirements and large-scale wind-turbine configurations."
          />

          <ProcessCard
            number="02"
            title="CATIA V5"
            text="Created the rotor structural geometry using the dimensions established from the research."
          />

          <ProcessCard
            number="03"
            title="ANSYS Setup"
            text="Imported the geometry into ANSYS Mechanical, assigned structural steel and generated the FE mesh."
          />

          <ProcessCard
            number="04"
            title="Load Study"
            text="Applied a 2 MN thrust load using different load-point configurations and distribution functions."
          />

        </div>
      </section>


      {/* ================= MESH VALIDATION ================= */}
      <section className="border-y border-white/10 bg-[#030e1a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel number="04" title="FEA & MESH VALIDATION" />

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              <h2 className="text-3xl font-bold">
                Validating the numerical model before comparing load cases.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                The generator structure was meshed using quadrilateral face
                elements. Mesh quality was assessed using aspect ratio,
                Jacobian ratio and maximum corner angle, followed by a grid
                independency check.
              </p>

              <div className="mt-8 space-y-4">

                <Feature
                  title="Aspect Ratio"
                  text="Maximum aspect ratio remained below the defined limit of 5."
                />

                <Feature
                  title="Jacobian Ratio"
                  text="Mesh distortion was checked to ensure suitable element quality."
                />

                <Feature
                  title="Grid Independency"
                  text="Further mesh refinement produced negligible change in total deformation."
                />

              </div>
            </div>

            <ProjectImage
              src={images.mesh}
              alt="ANSYS mesh of wind turbine generator"
              caption="ANSYS mesh used for the structural analysis."
            />

          </div>
        </div>
      </section>


      {/* ================= LOAD POINT STUDY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel number="05" title="LOAD-POINT STUDY" />

        <div className="mt-8 grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold">
              How few load points are enough?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              The study compared multiple load-point configurations distributed
              around the rotor circumference. The 72-point case was taken as
              the reference solution and lower point counts were evaluated
              against it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "72 points",
                "36 points",
                "24 points",
                "18 points",
                "12 points",
                "8 points",
                "6 points",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-[#071522] px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#145c8f] bg-[#061522] p-6">
              <p className="text-sm font-semibold tracking-widest text-[#4da3ff]">
                ACCEPTANCE CRITERION
              </p>

              <p className="mt-3 text-2xl font-bold">
                Less than 10% deviation
              </p>

              <p className="mt-3 leading-7 text-slate-400">
                Deformation results were compared against the 72-point
                reference case to determine the minimum acceptable number of
                load points.
              </p>
            </div>
          </div>

          <ProjectImage
            src={images.loadPoints}
            alt="Wind turbine generator load point distribution"
            caption="Multiple load-point configurations investigated around the rotor circumference."
          />

        </div>
      </section>


      {/* ================= DEFORMATION ================= */}
      <section className="border-y border-white/10 bg-[#030e1a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel number="06" title="STRUCTURAL RESPONSE" />

          <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
            Comparing deformation under different load distributions.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Several load distribution functions were investigated, including
            sinusoidal distributions representing different loading behaviour.
            The analysis showed that the required number of load points depends
            on the load distribution function.
          </p>

          <div className="mt-10">
            <ProjectImage
              src={images.deformation}
              alt="ANSYS deformation result of wind turbine generator"
              caption="Representative ANSYS total-deformation result."
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <ResultCard
              title="Sin θ"
              value="12 points"
              text="Minimum configuration identified for the selected load application method."
            />

            <ResultCard
              title="Sin(2θ)"
              value="6 points"
              text="Reduced load-point requirement under the corresponding distribution."
            />

            <ResultCard
              title="Combined 3-blade function"
              value="6 points"
              text="Final practical load distribution selected for further geometry studies."
            />

          </div>

        </div>
      </section>


      {/* ================= DESIGN INFLUENCE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel number="07" title="INFLUENCE OF STRUCTURAL DESIGN" />

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">

          <ProjectImage
            src={images.geometry}
            alt="Wind turbine generator support bar configurations"
            caption="Updated rotor geometries with 4, 6 and 8 support bars."
          />

          <div>
            <h2 className="text-3xl font-bold">
              Does the optimal load-point count change with geometry?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              To verify that the result was not dependent on a single rotor
              geometry, the support structure was modified while maintaining
              the main rotor dimensions.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">

              <GeometryCard
                value="4"
                label="Support bars"
              />

              <GeometryCard
                value="6"
                label="Support bars"
              />

              <GeometryCard
                value="8"
                label="Support bars"
              />

            </div>

            <p className="mt-8 leading-7 text-slate-300">
              The simulations showed that the deformation magnitude changed
              with structural stiffness, but the minimum load-point requirement
              remained unchanged.
            </p>

          </div>

        </div>
      </section>


      {/* ================= FINAL RESULT ================= */}
      <section className="border-y border-white/10 bg-[#030e1a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel number="08" title="FINAL RESULT" />

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.2fr]">

            <div>
              <h2 className="text-4xl font-bold">
                Six load points were sufficient.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                After comparing the original geometry, modified rotor
                structures and flat-plate configuration, the study consistently
                identified six equidistant load points as sufficient for the
                selected practical load distribution.
              </p>

              <div className="mt-8 rounded-2xl border border-[#1687c8] bg-[#061725] p-8">

                <p className="text-sm font-semibold tracking-[0.25em] text-[#4da3ff]">
                  FINAL CONFIGURATION
                </p>

                <div className="mt-6 grid grid-cols-2 gap-6">

                  <div>
                    <p className="text-4xl font-bold">6</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Load points
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-bold">60°</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Angular spacing
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-bold">&lt;10%</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Deviation criterion
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-bold">2 MN</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Applied thrust
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <ProjectImage
              src={images.finalResults}
              alt="Final wind turbine generator deformation comparison"
              caption="Final deformation comparison across modified structural configurations."
            />

          </div>
        </div>
      </section>


      {/* ================= ENGINEERING OUTCOME ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel number="09" title="ENGINEERING OUTCOME" />

        <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
          Reducing model complexity without compromising the required
          structural-analysis accuracy.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <OutcomeCard
            number="01"
            title="Structural Modelling"
            text="Developed a parameterised direct-drive generator rotor structure in CATIA V5."
          />

          <OutcomeCard
            number="02"
            title="FEA Validation"
            text="Established and validated an ANSYS Mechanical model through mesh-quality and grid-independency checks."
          />

          <OutcomeCard
            number="03"
            title="Load-Point Optimisation"
            text="Identified six equidistant load points as sufficient for the selected practical loading condition."
          />

        </div>
      </section>


      {/* ================= CONCLUSION ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#4da3ff]">
            CONCLUSION
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            A structural-analysis approach designed for future FEM–MBS
            coupling.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            The study demonstrated that a reduced number of strategically
            positioned load points can represent the structural response of
            the generator while reducing the computational complexity of
            future coupled FEM and multi-body simulations.
          </p>

          <Link
            href="/projects"
            className="mt-10 inline-flex rounded-full border border-[#1766a8] px-6 py-3 text-sm font-semibold text-[#9ed0ff] transition hover:bg-[#08243a]"
          >
            ← Back to Projects
          </Link>

        </div>
      </section>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-semibold tracking-[0.25em] text-[#4da3ff]">
        {number}
      </span>

      <span className="text-xs font-semibold tracking-[0.25em] text-[#4da3ff]">
        ·
      </span>

      <span className="text-xs font-semibold tracking-[0.25em] text-[#4da3ff]">
        {title}
      </span>
    </div>
  );
}


function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#061321] p-5">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}


function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#061321] p-5">
      <p className="text-2xl font-bold text-[#65b5ff]">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}


function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#061321] p-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-[#4da3ff]">
        {number}
      </p>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}


function Feature({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-l-2 border-[#238bd0] pl-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}


function ResultCard({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#061321] p-6">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-3 text-3xl font-bold text-[#65b5ff]">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}


function GeometryCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#061321] p-5 text-center">
      <p className="text-3xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-slate-400">{label}</p>
    </div>
  );
}


function OutcomeCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#061321] p-7">
      <p className="text-sm font-semibold tracking-[0.2em] text-[#4da3ff]">
        {number}
      </p>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-slate-400">{text}</p>
    </div>
  );
}


function ProjectImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#061321]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-contain"
        />
      </div>

      <figcaption className="mt-3 text-sm text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}