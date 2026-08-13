export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-20">
        <a href="/" className="text-sm text-cyan-400">← Back home</a>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <img
              src="/images/about.jpg"
              alt="Shivam Chandravanshi"
              className="w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              About
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
              Shivam Chandravanshi
            </h1>

            <p className="mt-6 text-xl text-cyan-300">
              Aspiring Aerospace Entrepreneur.
            </p>

            <div className="mt-10 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                I am an independent learner interested in science, engineering,
                space, technology and the systems that connect them.
              </p>

              <p>
                I like following questions beyond their first answer—breaking
                complex ideas apart, understanding the physics behind them,
                researching evidence and turning ideas into things I can
                investigate or build.
              </p>

              <p>
                This website is a record of that process. It is not meant to
                look like a finished list of achievements. It is a living
                archive of what I am learning, researching, designing,
                questioning and building.
              </p>
            </div>
          </div>
        </div>

        <section id="contact" className="mt-32 border-t border-white/10 pt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Get in touch
          </p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Let&apos;s explore an idea.
          </h2>
          <a
            href="mailto:hello@shivamchandravanshi.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950"
          >
            hello@shivamchandravanshi.com
          </a>
        </section>
      </div>
    </main>
  );
}
