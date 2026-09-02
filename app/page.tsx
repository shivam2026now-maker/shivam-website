"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

const researchDomains = [
  {
    number: "01",
    title: "Physics & Engineering",
    text: "Investigating physical systems, engineering problems, calculations, models and ideas that can be tested or understood.",
  },
  {
    number: "02",
    title: "Space",
    text: "Exploring astronomy, space exploration, missions, celestial systems and the technologies that extend human reach beyond Earth.",
  },
  {
    number: "03",
    title: "Geopolitics",
    text: "Understanding how science, technology, resources, security and space shape relationships between nations.",
  },
  {
    number: "04",
    title: "Tech & Innovation",
    text: "Exploring emerging technologies, new ideas, systems and innovations that could reshape how we build and solve problems.",
  },
];

const projects = [
  {
    number: "01",
    title: "Non-Propeller Drone",
    text: "An aerospace concept exploring alternatives to conventional propeller-based propulsion.",
  },
  {
    number: "02",
    title: "Redesigning India's Transport System",
    text: "An early investigation into how transportation systems could be redesigned for greater efficiency, scale and future mobility.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);


  const heroProgress = Math.min(
    Math.max(scrollY / (typeof window !== "undefined" ? window.innerHeight * 0.95 : 900), 0),
    1
  );

  const heroImageStyle = {
    opacity: Math.max(0, 1 - heroProgress * 1.15),
    transform: `scale(${1.04 + heroProgress * 0.04})`,
  };

  const heroContentStyle = {
    transform: `translateY(-${scrollY * 0.58}px)`,
    opacity: Math.max(0.18, 1 - heroProgress * 0.55),
  };

  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-sm font-bold tracking-[0.3em] text-cyan-400"
          >
            SC
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a><Link
  href="/research"
  className="transition hover:text-cyan-400"
>
  Research
</Link>

<Link
  href="/projects"
  className="transition hover:text-cyan-400"
>
  Projects
</Link>

<Link
  href="/articles"
  className="transition hover:text-cyan-400"
>
  Articles
</Link>            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
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
              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <Link href="/research" className="text-left" onClick={closeMenu}>
                Research
              </Link>

              <Link href="/projects" className="text-left" onClick={closeMenu}>
                Projects
              </Link>

              <Link href="/articles" className="text-left" onClick={closeMenu}>
                Articles
              </Link>

              <Link href="/journal" className="text-left" onClick={closeMenu}>
                Journal
              </Link>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[112vh] overflow-hidden bg-[#050816]"
      >
        <div
          className="absolute inset-0 origin-center bg-cover bg-[center_35%]"
          style={{
            ...heroImageStyle,
            backgroundImage:
              "linear-gradient(to bottom, rgba(5,8,22,0.05), rgba(5,8,22,0.38) 54%, #050816 100%), url('/images/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/75 via-[#050816]/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#050816] via-[#050816]/65 to-transparent" />

        {/* FLOATING HERO CONTENT */}
        <div
          style={heroContentStyle}
          className="pointer-events-none absolute left-0 right-0 top-[54vh] z-10"
        >
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
            <div className="max-w-5xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-cyan-400 sm:text-xs">
                Shivam Chandravanshi
              </p>

              <h1 className="text-5xl font-semibold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
                Aspiring
                <br />
                <span className="text-cyan-300">
                  Aerospace Entrepreneur.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200/90 sm:text-lg">
                Exploring science, engineering, space and the ideas that could
                shape what comes next.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="pointer-events-auto rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Discover my work ↓
                </a>

<Link
  href="/research"
  className="pointer-events-auto rounded-full border border-white/30 bg-black/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400"
>
  Explore research
</Link>              </div>

              <div className="mt-12 flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-white/50 sm:text-xs">
                <span className="h-px w-10 bg-white/30" />
                Curiosity → Investigation → Building
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#070b1c]"
      >
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
                Hello, I&apos;m Shivam Chandravanshi—an independent learner and
                aspiring aerospace entrepreneur. I explore ideas through
                physics, space, data and interdisciplinary thinking, often
                following a question wherever it leads. I enjoy breaking
                complex problems down, learning across fields, and turning
                curiosity into things I can build, test, and understand.
              </p>

              <p>
                This website is a collection of that journey—my projects,
                experiments, articles, ideas, and the questions I&apos;m
                currently exploring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                02 / Articles
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Ideas written down.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Independent writing on science, space, physics, aerospace,
                geopolitics and the questions that keep me curious.
              </p>
            </div>

            <Link
              href="/articles"
              className="group block rounded-3xl border border-white/10 bg-[#080d20] p-8 text-left transition hover:border-cyan-400/40 hover:bg-[#0b1229]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Writing archive</span>
                <span className="text-cyan-400 transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-16 text-2xl font-semibold">
                See the Articles
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Essays, notes, and long-form thinking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="border-t border-white/10 bg-[#070b1c]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                03 / Research
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Questions become investigations.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Exploring ideas through evidence, physics, engineering,
                technology and questions that connect science with the world
                beyond it.
              </p>

              <Link
                href="/research"
                className="mt-8 inline-block rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                See the Research →
              </Link>
            </div>

            <Link
              href="/research"
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#080d20] text-left"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(5,8,22,0.82), rgba(5,8,22,0.05)), url('/images/research-space.jpg')",
                }}
              />

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Research Domains
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="rounded-full border border-white/10 px-3 py-1.5">
                    Physics & Engineering
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5">
                    Space
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5">
                    Geopolitics
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5">
                    Tech & Innovation
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                04 / Projects & Builds
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                From ideas to experiments.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Turning questions into things I can investigate, design and
                eventually build—through experiments, concepts, engineering
                and problem-solving.
              </p>
            </div>

            <Link
              href="/projects"
              className="group block rounded-3xl border border-white/10 bg-[#080d20] p-8 text-left transition hover:border-cyan-400/40 hover:bg-[#0b1229]"
            >
              <div className="flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
                <span className="text-xs uppercase tracking-[0.28em] text-cyan-400">
                  Under Investigation
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Explore Projects & Builds
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Open the current investigations →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-white/10 bg-[#070b1c]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <Link
            href="/journal"
            className="group block rounded-3xl border border-white/10 bg-[#080d20] p-8 transition hover:border-cyan-400/40 sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              05 / Journal
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Learning in public.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              A place for notes, experiments, observations and the progress
              behind the work.
            </p>

            <div className="mt-8 text-sm font-semibold text-cyan-400 transition group-hover:translate-x-1">
              Open Journal →
            </div>
          </Link>
        </div>
      </section>

      {/* YOUTUBE & MEDIA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                06 / YouTube & Media
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Research beyond the page.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Videos and visual explanations covering ideas, projects,
                science, space and the things I&apos;m learning.
              </p>
            </div>

            <Link
              href="/media"
              className="group block rounded-3xl border border-white/10 bg-[#080d20] p-8 text-left transition hover:border-cyan-400/40"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">
                Media Channel
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                YouTube & Media
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Visual explanations and project updates.
              </p>

              <div className="mt-8 text-cyan-400 transition group-hover:translate-x-1">
                Open media →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#070b1c]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="rounded-3xl border border-white/10 bg-[#080d20] p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              07 / Get in touch
            </p>

            <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                  Have an idea worth exploring?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                  I&apos;m always interested in thoughtful conversations
                  around science, technology, aerospa
                  around science, technology, aerospace, research and ideas.
                </p>
              </div>

              <a
                href="mailto:shivam2026now@gmail.com"
                className="w-fit rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050816]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Shivam Chandravanshi. All rights reserved.</p>
          <p className="tracking-[0.18em]">
            Curiosity → Investigation → Building
          </p>
        </div>
      </footer>
    </main>
  );
}
