import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/aluminium-rolling-study.png",

  rollingMill: "/aluminium-rolling-mill.png",
  hotRolling: "/aluminium-hot-rolling.png",

  hardnessMachine: "/aluminium-hardness-machine.png",
  ballIndenter: "/aluminium-ball-indenter.png",
  diamondIndenter: "/aluminium-diamond-indenter.png",

  impact: "/aluminium-izod-impact.png",
};

export default function AluminiumAlloyPage() {
  return (
    <main className="min-h-screen bg-[#020b16] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                BACHELOR&apos;S THESIS · MANUFACTURING & MATERIALS
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                ALUMINIUM
                <br />
                ALLOY
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-blue-300">
                Hot & Cold Rolling Study
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Experimental investigation of the effect of hot and cold
                rolling on the mechanical and microstructural properties of
                aluminium alloy, including the development of a two-in-one
                rolling mill and mechanical testing of rolled specimens.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Metal Forming",
                  "Rolling Process",
                  "Materials Testing",
                  "Manufacturing",
                  "Aluminium Alloy",
                  "Mechanical Testing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-400/30 px-4 py-2 text-sm text-blue-200"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>


            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]">

              <Image
                src={images.hero}
                alt="Aluminium alloy hot and cold rolling study"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT OVERVIEW
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel
          number="01"
          title="PROJECT OVERVIEW"
        />

        <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
          Investigating how rolling conditions affect aluminium alloy
          properties.
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">

          <div className="space-y-5 text-lg leading-8 text-slate-300">

            <p>
              This Bachelor&apos;s thesis investigated the effect of hot and
              cold rolling on the mechanical and microstructural properties
              of aluminium alloy.
            </p>

            <p>
              The project combined machine development, metal-forming
              experimentation, specimen preparation and mechanical testing.
            </p>

            <p>
              A two-in-one rolling mill capable of manual and power-operated
              operation was developed and used as the experimental platform
              for the rolling study.
            </p>

            <p>
              The resulting material behaviour was then evaluated through
              hardness and impact testing and related to the deformation
              produced by the rolling process.
            </p>

          </div>


          <div className="grid gap-4">

            <StatCard
              value="2-in-1"
              label="Manual & power-operated rolling mill"
            />

            <StatCard
              value="HOT"
              label="Elevated-temperature rolling"
            />

            <StatCard
              value="COLD"
              label="Ambient-temperature rolling"
            />

            <StatCard
              value="2 Tests"
              label="Hardness & Izod impact testing"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ROLLING MILL
      ====================================================== */}

      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel
            number="02"
            title="ROLLING MILL DEVELOPMENT"
          />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <h2 className="text-3xl font-bold">
                Developing the experimental rolling system.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                A major part of the project involved the development of a
                two-in-one rolling mill capable of operating in both manual
                and power-operated modes.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                The machine provided the experimental platform required to
                process aluminium alloy specimens under different rolling
                conditions.
              </p>

              <div className="mt-8 space-y-5">

                <Feature
                  title="Manual operation"
                  text="Mechanical operation provided controlled rolling during the experimental work."
                />

                <Feature
                  title="Power operation"
                  text="Powered operation allowed the rolling process to be carried out with reduced manual effort."
                />

                <Feature
                  title="Experimental platform"
                  text="The developed machine was subsequently used for the hot and cold rolling investigation."
                />

              </div>

            </div>


            <ProjectImage
              src={images.rollingMill}
              alt="Two-in-one rolling mill developed for the project"
              caption="Two-in-one rolling mill developed as part of the Bachelor&apos;s thesis."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ROLLING PROCESS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel
          number="03"
          title="HOT & COLD ROLLING"
        />

        <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
          Comparing deformation at elevated and ambient temperature.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* HOT ROLLING */}

          <div className="rounded-2xl border border-white/10 bg-[#07111f] p-6">

            <p className="text-sm font-semibold tracking-[0.25em] text-orange-400">
              HOT ROLLING
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Elevated-temperature deformation
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Aluminium alloy specimens were heated before rolling to
              investigate deformation at elevated temperature.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">

              <Image
                src={images.hotRolling}
                alt="Hot rolling furnace"
                width={900}
                height={700}
                className="h-auto w-full"
              />

            </div>

            <div className="mt-6 space-y-3">

              <Bullet text="Lower forming force compared with cold rolling." />
              <Bullet text="Greater material ductility during deformation." />
              <Bullet text="Microstructural changes associated with elevated-temperature deformation." />

            </div>

          </div>


          {/* COLD ROLLING */}

          <div className="rounded-2xl border border-white/10 bg-[#07111f] p-6">

            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              COLD ROLLING
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Ambient-temperature deformation
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Cold rolling was performed at ambient temperature to investigate
              the influence of plastic deformation and work hardening on the
              aluminium alloy.
            </p>

            <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-400/[0.04] p-8">

              <div className="text-5xl font-bold text-blue-300">
                ↑
              </div>

              <p className="mt-5 text-xl font-semibold">
                Increased hardness
              </p>

              <p className="mt-3 leading-7 text-slate-400">
                Greater plastic deformation during cold rolling increased
                work hardening and resulted in higher hardness.
              </p>

            </div>

            <div className="mt-6 space-y-3">

              <Bullet text="Higher forming force than hot rolling." />
              <Bullet text="Greater work hardening." />
              <Bullet text="Higher resulting hardness." />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MECHANICAL TESTING
      ====================================================== */}

      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel
            number="04"
            title="MECHANICAL TESTING"
          />

          <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
            Measuring the effect of rolling on material behaviour.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The rolled specimens were evaluated using hardness and Izod impact
            testing. These tests provided a basis for comparing the mechanical
            response of the material after different processing conditions.
          </p>


          {/* HARDNESS */}

          <div className="mt-12">

            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              HARDNESS TESTING
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">

              <ProjectImage
                src={images.hardnessMachine}
                alt="Hardness testing machine"
                caption="Hardness testing equipment used during the experimental investigation."
              />

              <ProjectImage
                src={images.ballIndenter}
                alt="Ball indenter used for hardness testing"
                caption="Ball indenter used during hardness measurement."
              />

              <ProjectImage
                src={images.diamondIndenter}
                alt="Diamond indenter used for hardness testing"
                caption="Diamond indenter used for hardness measurement."
              />

            </div>

          </div>


          {/* IMPACT */}

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
                IZOD IMPACT TESTING
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Evaluating toughness after rolling.
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Izod impact testing was used to compare the toughness of
                aluminium alloy specimens produced through different rolling
                conditions.
              </p>

              <div className="mt-7 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6">

                <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400">
                  KEY OBSERVATION
                </p>

                <p className="mt-3 text-xl font-semibold">
                  Hot-rolled material showed higher toughness.
                </p>

              </div>

            </div>


            <ProjectImage
              src={images.impact}
              alt="Izod impact test specimen and test principle"
              caption="Izod impact-test specimen geometry and test principle."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel
          number="05"
          title="KEY FINDINGS"
        />

        <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-4xl">
          The rolling process produced distinct mechanical responses.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <ResultCard
            number="01"
            title="Hardness"
            text="Cold rolling increased hardness as a result of greater plastic deformation and work hardening."
          />

          <ResultCard
            number="02"
            title="Toughness"
            text="Hot-rolled material demonstrated higher toughness in the impact-testing results."
          />

          <ResultCard
            number="03"
            title="Forming Force"
            text="Hot rolling required less force than cold rolling because of the elevated processing temperature."
          />

        </div>


        <div className="mt-12 rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-8">

          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
            ENGINEERING INTERPRETATION
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            The results demonstrated the relationship between processing
            temperature, degree of deformation, microstructural change and
            resulting mechanical properties of the aluminium alloy.
          </p>

        </div>

      </section>


      {/* =====================================================
          WORKFLOW
      ====================================================== */}

      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <SectionLabel
            number="06"
            title="ENGINEERING WORKFLOW"
          />

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Machine development → processing → testing → material analysis.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-5">

            <WorkflowCard
              number="01"
              title="Mill Development"
              text="Develop the manual and power-operated rolling system."
            />

            <WorkflowCard
              number="02"
              title="Hot Rolling"
              text="Heat aluminium alloy specimens and perform rolling."
            />

            <WorkflowCard
              number="03"
              title="Cold Rolling"
              text="Process specimens through ambient-temperature rolling."
            />

            <WorkflowCard
              number="04"
              title="Testing"
              text="Perform hardness and Izod impact testing."
            />

            <WorkflowCard
              number="05"
              title="Analysis"
              text="Compare material behaviour and relate it to deformation."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          MY CONTRIBUTION
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <SectionLabel
          number="07"
          title="PROJECT CONTRIBUTION"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <ContributionCard
            title="Machine Development"
            text="Contributed to the development of the rolling system used for the experimental programme."
          />

          <ContributionCard
            title="Experimental Work"
            text="Performed rolling experiments, specimen preparation and mechanical testing."
          />

          <ContributionCard
            title="Material Evaluation"
            text="Compared the effect of hot and cold rolling on hardness, toughness and material behaviour."
          />

        </div>

      </section>


      {/* =====================================================
          CONCLUSION
      ====================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            CONCLUSION
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Understanding material behaviour through hands-on manufacturing
            experimentation.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            The thesis combined rolling-mill development, metal-forming
            experimentation, mechanical testing and material evaluation to
            investigate how hot and cold rolling influence aluminium alloy
            properties.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "Metal Forming",
              "Hot Rolling",
              "Cold Rolling",
              "Work Hardening",
              "Hardness Testing",
              "Impact Testing",
              "Manufacturing",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.12em] text-slate-400"
              >
                {item}
              </span>

            ))}

          </div>


          <Link
            href="/projects"
            className="mt-10 inline-flex rounded-full border border-blue-500/40 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/10"
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
    <div className="flex items-center gap-3">

      <span className="text-xs font-semibold tracking-[0.25em] text-blue-400">
        {number}
      </span>

      <span className="text-xs text-blue-400">
        ·
      </span>

      <span className="text-xs font-semibold tracking-[0.25em] text-blue-400">
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
    <div className="border border-white/10 bg-[#07111f] p-6">

      <p className="text-2xl font-bold text-blue-300">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {label}
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
    <div className="border-l-2 border-blue-500 pl-5">

      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-slate-400">
        {text}
      </p>

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

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">

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


function Bullet({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex gap-3 text-sm leading-6 text-slate-400">

      <span className="text-blue-400">
        ✓
      </span>

      <span>
        {text}
      </span>

    </div>
  );
}


function ResultCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 bg-[#07111f] p-7">

      <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
        {number}
      </p>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}


function WorkflowCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 bg-[#07111f] p-5">

      <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
        {number}
      </p>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  );
}


function ContributionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 bg-[#07111f] p-7">

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}