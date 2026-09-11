export const revalidate = 60

import Link from "next/link"
import {client} from "@/lib/sanity"
import {urlFor} from "@/lib/sanityImage"

const latestContentQuery=`{
  "articles": *[_type=="article" && defined(slug.current)]|order(coalesce(publishedAt,_createdAt) desc)[0]{title,coverImage},
  "research": *[_type=="research" && defined(slug.current)]|order(coalesce(publishedAt,_createdAt) desc)[0]{title,coverImage},
  "projects": *[_type=="project" && defined(slug.current)]|order(coalesce(publishedAt,_createdAt) desc)[0]{title,coverImage},
  "journal": *[_type=="journal" && defined(slug.current)]|order(coalesce(publishedAt,_createdAt) desc)[0]{title,coverImage},
  "media": *[_type=="media"]|order(coalesce(publishedAt,_createdAt) desc)[0]{title,thumbnail}
}`

const sections=[
  {key:"articles",number:"01",title:"Articles",description:"Ideas, essays and explainers exploring science, technology, engineering and the questions behind them.",href:"/articles"},
  {key:"research",number:"02",title:"Research",description:"Independent investigations into physics, aerospace, space technology and emerging systems.",href:"/research"},
  {key:"projects",number:"03",title:"Projects",description:"From concepts to prototypes, documenting the process of turning questions into things that can be built.",href:"/projects"},
  {key:"journal",number:"04",title:"Journal",description:"A personal record of observations, ideas, experiments, progress and moments along the journey.",href:"/journal"},
  {key:"media",number:"05",title:"Media",description:"Visual work, videos, photographs and other media connected to science, technology and exploration.",href:"/media"},
]

export default async function HomePage(){
  const content=await client.fetch(latestContentQuery)

  return (
    <main id="top" className="min-h-screen bg-[#050816] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Shivam<span className="text-cyan-400">.</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#explore" className="transition hover:text-cyan-300">Explore</a>
            <Link href="/articles" className="transition hover:text-cyan-300">Articles</Link>
            <Link href="/research" className="transition hover:text-cyan-300">Research</Link>
            <Link href="/projects" className="transition hover:text-cyan-300">Projects</Link>
          </nav>

          <Link href="/about#contact" className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10">
            Get in touch
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:"linear-gradient(to bottom, rgba(5,8,22,0.05), rgba(5,8,22,0.28) 42%, #050816 94%), url('/images/saction.jpg')"
          }}
        />
        <div className="ambient-stars absolute inset-0" />
        <div className="pointer-events-none absolute right-[15%] top-[24%] h-px w-32 rotate-[-25deg] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-60" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 sm:pb-28">
          <div className="max-w-5xl">
            <p className="mb-7 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400 sm:text-base">
              Aspiring Aerospace Entrepreneur
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Curiosity
              <br />
              <span className="text-cyan-300">â†’ Investigation â†’ Building</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Exploring science, engineering, aerospace, space technology and the ideas that could become future systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#explore" className="rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Explore my work
              </a>
              <Link href="/about" className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-cyan-300/55 hover:bg-white/10">
                About me
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-12 bg-cyan-400/50" />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="image-depth overflow-hidden rounded-3xl border border-white/10">
            <img src="/images/hero.jpg" alt="Shivam Chandravanshi" className="aspect-[4/5] w-full object-cover" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">About Me</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Learning across disciplines.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Fascinated by the sky, drawn to the unseen, and rarely satisfied with simply accepting things as they are&mdash;I have always been curious about the why and how behind what we experience.
              </p>
              <p>
                Hello, I&apos;m Shivam Chandravanshi&mdash;an independent learner and aspiring aerospace entrepreneur. I explore ideas through physics, space, data and interdisciplinary thinking, often following a question wherever it leads. I enjoy breaking complex problems down, learning across fields, and turning curiosity into things I can build, test, and understand.
              </p>
              <p>
                This website is a collection of that journey&mdash;my projects, experiments, articles, ideas, and the questions I&apos;m currently exploring.
              </p>
            </div>

            <Link href="/about" className="mt-9 inline-flex rounded-full border border-cyan-400/30 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10">
              More about me â†’
            </Link>
          </div>
        </div>
      </section>

      <section id="explore" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Explore</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Curiosity, documented.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Five spaces that capture what I write, investigate, build, observe and create.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {sections.map((section,index)=>{
              const item=content[section.key]
              const image=section.key==="media" ? item?.thumbnail : item?.coverImage
              const imageUrl=image ? urlFor(image).width(1400).height(900).quality(85).url() : null

              return (
                <Link
                  key={section.key}
                  href={section.href}
                  className={`home-section-card premium-card image-depth group rounded-3xl ${index<3 ? "lg:col-span-2" : "lg:col-span-3"}`}
                >
                  {imageUrl && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-40"
                      style={{backgroundImage:`linear-gradient(to bottom, rgba(5,8,22,0.35), rgba(5,8,22,0.96)), url('${imageUrl}')`}}
                    />
                  )}

                  <div className="relative flex min-h-[330px] flex-col justify-between p-7 md:p-8">
                    <div>
                      <span className="section-number text-xs uppercase tracking-[0.25em] text-cyan-300/80">
                        {section.number}
                      </span>
                      <h3 className="mt-5 text-3xl font-semibold tracking-tight">{section.title}</h3>
                      <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                        {section.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {item?.title ? `Latest: ${item.title}` : "Explore"}
                      </span>
                      <span className="section-arrow text-xl text-cyan-300">&#8599;</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-12">
            <Link href="/#top" className="text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300">
              Back to top â†‘
            </Link>
          </div>
        </div>
      </section>

              <section id="contact" className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <a href="mailto:shivam2026now@gmail.com" className="transition hover:text-cyan-300">Email</a>
              <a href="https://www.linkedin.com/in/shivam-chandravanshi-98147a255" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300"><span className="font-bold">in</span> LinkedIn</a>
              <a href="https://whatsapp.com/channel/0029VbDNiUCJpe8eixQQqm3q" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">WhatsApp</a>
            </div>
          </div>
        </section>
<footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>Shivam.</span>
          <span>Â© {new Date().getFullYear()} Shivam Chandravanshi</span>
        </div>
      </footer>
    </main>
  )
}
