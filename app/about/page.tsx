interface ArchiveItem {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  span: string;
}

const HERO_IMAGE = "/images/shivam picture.jpg";

const archiveImages: ArchiveItem[] = [
  {
    src: "/images/shiwam forest image.jpg",
    alt: "Shiwam Chandravanshi (Shivam Chandravanshi) personal portrait photo, aspiring aerospace entrepreneur",
    title: "Shiwam Chandravanshi — Personal Portrait",
    caption: "",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/shiwam chandravanshi.jpg",
    alt: "Shivam Sawasiya (Shiwam Sawasiya) candid personal photograph, also known as Shivam Chandravanshi",
    title: "Shivam Chandravanshi / Shiwam Sawasiya",
    caption: "",
    span: "md:col-span-1",
  },
  {
    src: "/images/image.png",
    alt: "Shiwam (Shivam Savasiya / Shiwam Chandrvanshi) personal gallery photo",
    title: "Shiwam — Personal Photo",
    caption: "",
    span: "md:col-span-1", 
  },
  {
    src: "/images/shiwam shivam image.jpg",
    alt: "Shiwam Sawasiya (Shivam Savasiya / Shiwam Chandravanshi) personal lifestyle portrait",
    title: "Shiwam Sawasiya — Personal Gallery",
    caption: "",
    span: "md:col-span-1",
  },
];

function buildSeoAlt(customAlt: string, index: number): string {
  const base = customAlt.trim();
  if (
    base.toLowerCase().includes("shiwam") ||
    base.toLowerCase().includes("shivam")
  ) {
    return base;
  }
  return `${base || `Personal photo ${index + 1}`} of Shiwam Chandravanshi (Shivam Chandravanshi, Shiwam Sawasiya, Shivam Savasiya)`;
}

export default function AboutPage() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shiwam Chandravanshi",
    alternateName: [
      "Shivam Chandravanshi",
      "Shiwam Chandrvanshi",
      "Shivam Chandrvanshi",
      "Shiwam Sawasiya",
      "Shivam Savasiya",
      "Shiwam Savasiya",
      "Shivam choudhary",
      "Shiwam",
      "Shivam",
    ],
    jobTitle: "Aspiring Aerospace Entrepreneur",
    image: [HERO_IMAGE, ...archiveImages.map((item) => item.src)],
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Structured Data for Google Images */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 transition-transform duration-300 hover:-translate-x-1"
        >
          ← Back
        </a>

        {/* Main Bio Section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="group relative mx-auto w-full max-w-md lg:sticky lg:top-12">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/20 to-cyan-400/30 opacity-60 blur-xl transition-all duration-700 group-hover:opacity-100 group-hover:blur-2xl" />

            <figure className="relative m-0 overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl transition-all duration-500 group-hover:border-cyan-400/50">
              <img
                src={HERO_IMAGE}
                alt="Shiwam Chandravanshi (also known as Shivam Chandravanshi, Shiwam Chandrvanshi, Shiwam Sawasiya, and Shivam Savasiya) — Aspiring Aerospace Entrepreneur"
                title="Shiwam Chandravanshi (Shivam Savasiya)"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

              <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-cyan-400 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-cyan-400 opacity-0 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </figure>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              About
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
              Shiwam Chandravanshi
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
                I like following questions beyond their first answer&mdash;
                taking complex ideas apart, understanding the physics behind
                them, researching evidence and turning ideas into things I can
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

        {/* Personal Photo Gallery Section */}
        <section className="mt-32 border-t border-white/10 pt-20">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Frames &amp; Moments.
            </h2>
          </div>

          <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-3">
            {archiveImages.map((item, index) => (
              <figure
                key={index}
                className={`group relative m-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_15px_40px_-15px_rgba(34,211,238,0.3)] ${item.span}`}
              >
                <img
                  src={encodeURI(item.src)}
                  alt={buildSeoAlt(item.alt, index)}
                  title={item.title || "Shiwam Chandravanshi"}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-25" />

                {/* Floating Caption Pill (Only shows if you write text in caption) */}
                {item.caption && item.caption.trim() !== "" && (
                  <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-3 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-400/40 group-hover:bg-slate-950/85">
                    <span className="text-sm font-medium tracking-wide text-slate-100">
                      {item.caption}
                    </span>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* Get in Touch Section */}
        <section id="contact" className="mt-32 border-t border-white/10 pt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Get in touch
          </p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Let&apos;s explore an idea.
          </h2>
          <a
            href="mailto:shiwamchadnrvanshii@gmail.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            shiwamchadnrvanshii@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}
