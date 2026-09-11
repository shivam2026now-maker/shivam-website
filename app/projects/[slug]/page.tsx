import Link from "next/link"
import {notFound} from "next/navigation"
import {client} from "@/lib/sanity"
import {urlFor} from "@/lib/sanityImage"
import ProjectSectionViewer from "../ProjectSectionViewer"

const query=`*[_type=="project" && slug.current==$slug][0]{
  _id,title,slug,shortDescription,coverImage,publishedAt,status,
  sections[]{_key,title,content}
}`

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const project=await client.fetch(query,{slug})

  if(!project) notFound()

  const image=project.coverImage
    ? urlFor(project.coverImage).width(1800).height(1000).quality(90).url()
    : null

  const sections=(project.sections||[]).map((section:any)=>({
    _key:section._key,
    title:section.title,
    content:section.content
  }))

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-28">
        <Link href="/projects" className="text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300">
          ? Projects
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Project</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
          {project.shortDescription && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{project.shortDescription}</p>
          )}
        </div>

        {image && (
          <div className="image-depth mt-12 overflow-hidden rounded-3xl border border-white/10">
            <img src={image} alt={project.title} className="h-auto w-full object-cover" />
          </div>
        )}

        <div className="mt-16">
          <ProjectSectionViewer sections={sections} />
        </div>
      </section>
    </main>
  )
}