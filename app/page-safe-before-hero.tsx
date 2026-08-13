"use client";

import { useState } from "react";

const researchAreas = [
  {
    number: "01",
    title: "Astronomy",
    text: "Exploring the universe, celestial systems, and the questions that make us look beyond Earth.",
  },
  {
    number: "02",
    title: "Space Research",
    text: "Learning about missions, technologies, exploration, and the future of human activity beyond Earth.",
  },
  {
    number: "03",
    title: "Physics & Engineering",
    text: "Turning curiosity into calculations, experiments, models, and engineering investigations.",
  },
  {
    number: "04",
    title: "Geopolitics",
    text: "Understanding how science, technology, resources, and space shape relationships between nations.",
  },
];

const projects = [
  {
    number: "01",
    title: "Drone Investigation",
    text: "An aerospace engineering investigation using physics, calculations, modelling and experimentation.",
    tag: "Aerospace",
  },
  {
    number: "02",
    title: "Time Dilation",
    text: "A deep exploration of special relativity, gravitational time and the strange consequences of relative time.",
    tag: "Physics",
  },
  {
    number: "03",
    title: "Future Concepts",
    text: "Early ideas around aerospace technology, exploration systems and technologies that could shape the future.",
    tag: "Concepts",
  },
];

const articles = [
  {
    number: "01",
    title: "Research & Writing",
    text: "Independent articles on astronomy, space, physics, engineering and geopolitics.",
  },
  {
    number: "02",
    title: "Questions Worth Investigating",
    text: "The questions, assumptions, evidence and reasoning behind each investigation.",
  },
  {
    number: "03",
    title: "Building in Public",
    text: "Documenting what I learn, what I test, what fails and what changes along the way.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-sm font-bold tracking-[0.3em] text-cyan-400"
          >
            SC
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">Home</a>
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#research" className="transition hover:text-cyan-400">Research</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#articles" className="transition hover:text-cyan-400">Articles</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 px-5 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 md:block"
          >
            Connect
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
            className="rounded-lg border border-white/10 px-3 py-2 text-xl text-slate-200 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050816]/95 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-slate-300">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Research", "#research"],
                ["Projects", "#projects"],
                ["Articles", "#articles"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="transition hover:text-cyan-400"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-end overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(5,8,22,0.08), rgba(5,8,22,0.5) 55%, #050816 100%), url('/images/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-6 sm:pb-28">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-cyan-400 sm:text-sm">
              Shivam Chandravanshi
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Aspiring
              <br />
              <span className="text-cyan-300">Aerospace Entrepreneur.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Exploring science, engineering, space and the ideas that could
              shape what comes next.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Discover my work ↓
              </a>

              <a
                href="#research"
                className="rounded-full border border-white/30 bg-black/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400"
              >
                Explore research
              </a>
            </div>

            <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/50 sm:text-xs">
              <span className="h-px w-12 bg-white/30" />
              Curiosity → Investigation → Building
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 bg-[#070b1c]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                01 / About
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Curiosity drives the journey.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-8 text-slate-300">
              <p>
                Fascinated by the sky, drawn to the unseen, and rarely
                satisfied with simply accepting things as they are—I have
                always been curious about the why and how behind what we
                experience.
              </p>

              <p>
                Hello, I’m Shivam Chandravanshi—an independent learner and
                aspiring aerospace entrepreneur. I explore ideas through
                physics, space, data and interdisciplinary thinking, often
                following a question wherever it leads.
              </p>

              <div className="border-l-2 border-cyan-400 pl-6 text-slate-400">
                <p>
                  This website is a record of that process—not a finished
                  portfolio, but a place to explore what I am learning,
                  questioning, researching and building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              02 / Research
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Questions become investigations.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Exploring questions through physics, evidence, calculations,
              modelling and reasoning.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <article
                key={area.number}
                className="bg-[#080d20] p-8 transition duration-300 hover:bg-[#0c142c] sm:p-10"
              >
                <p className="text-sm text-cyan-400">{area.number}</p>

                <h3 className="mt-8 text-2xl font-semibold">{area.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{area.text}</p>

                <div className="mt-8 h-px w-10 bg-cyan-400/50" />
              </article>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Featured Investigation · Space Physics
              </p>

              <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Time Dilation
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                What actually happens to time when an object approaches the
                speed of light or experiences an extreme gravitational field?
                Exploring special and general relativity and the consequences
                of time becoming relative.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Special Relativity"],
                  ["02", "Gravitational Time"],
                  ["03", "Real-world Consequences"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-sm text-white/40">{number}</p>
                    <p className="mt-2 font-medium">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/10 bg-[#070b1c]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              03 / Projects & Builds
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              From ideas to experiments.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Projects are where questions become things that can be tested,
              modelled, improved and shared.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-3xl border border-white/10 bg-[#080d20] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400">{project.number}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-400">
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">{project.text}</p>

                <div className="mt-10 text-sm font-medium text-cyan-400">
                  Investigation in progress →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-36">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                04 / Articles
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Ideas, questions & analysis.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-400">
              A growing archive of independent writing with sources,
              reasoning and supporting material.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {articles.map((article) => (
              <article
                key={article.number}
                className="grid gap-5 py-8 sm:grid-cols-[80px_1fr_1fr] sm:items-start"
              >
                <span className="text-sm text-cyan-400">{article.number}</span>
                <h3 className="text-2xl font-medium">{article.title}</h3>
                <p className="leading-7 text-slate-400">{article.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/research"
              className="inline-flex rounded-full border border-cyan-400/30 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Open research archive →
            </a>
          </div>
        </div>
      </section>

      {/* YOUTUBE / MEDIA */}
      <section className="border-t border-white/10 bg-[#070b1c]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                05 / YouTube & Media
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Research beyond the page.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Video essays, experiments, explainers and progress updates can
                turn complex ideas into something easier to explore.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Channel coming soon
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <img
                src="/images/research-space.png"
                alt="Space research"
                className="h-72 w-full object-cover opacity-80 sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  Explore · Explain · Build
                </p>
                <p className="mt-2 text-xl font-semibold">Science in motion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-36">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.035] p-8 sm:p-12 lg:p-16">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              06 / Contact
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                  Have an idea worth exploring?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                  For research conversations, collaborations, project ideas or
                  simply discussing interesting questions about science and
                  space.
                </p>
              </div>

              <a
                href="mailto:hello@shivamchandravanshi.com"
                className="inline-flex w-fit rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Shivam Chandravanshi</p>
          <p>Independent research · exploration · building</p>
        </div>
      </footer>
    </main>
  );
}
