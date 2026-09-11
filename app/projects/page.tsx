import Link from "next/link"
import {client} from "@/lib/sanity"
import {urlFor} from "@/lib/sanityImage"

const query=`*[_type=="project" && defined(slug.current)]|order(coalesce(publishedAt,_createdAt) desc){
  _id,title,"slug":slug.current,shortDescription,coverImage,publishedAt,status,featured
}`

export default async function ProjectsPage(){
  const projects=await client.fetch(query)

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-28">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300">03 / Projects</p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">Things I am building.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Experiments, engineering ideas and prototypes developed by turning questions into things that can be explored, tested and built.
          </p>
        </div>

        {projects.length===0 ? (
          <div className="glass-surface rounded-3xl p-10 text-slate-400">
            No projects published yet.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project:any,index:number)=>{
              const image=project.coverImage
                ? urlFor(project.coverImage).width(1400).height(900).quality(85).url()
                : null

              return (
                <Link
                  key={project._id}
                  href={`/projects/${project.slug}`}
                  className="premium-card image-depth shine group rounded-3xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    {image ? (
                      <img
                        src={image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="section-grid h-full w-full" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
                    <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.25em] text-slate-400">
                      Project {String(index+1).padStart(2,"0")}
                    </div>
                    {project.status && (
                      <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur">
                        {project.status}
                      </div>
                    )}
                  </div>

                  <div className="p-7 md:p-8">
                    <h2 className="text-2xl font-semibold tracking-tight transition group-hover:text-cyan-200 md:text-3xl">
                      {project.title}
                    </h2>
                    {project.shortDescription && (
                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
                        {project.shortDescription}
                      </p>
                    )}
                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-500 transition group-hover:tracking-[0.32em] group-hover:text-cyan-300">
                        Explore project
                      </span>
                      <span className="text-xl text-cyan-300 transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">↗</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <Link href="/#top" className="text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300">
            Back to top ↑
          </Link>
          <Link href="/" className="text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300">
            Home →
          </Link>
        </div>
      </section>
    </main>
  )
}