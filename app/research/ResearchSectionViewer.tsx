"use client"

import {useState} from "react"
import SanityPortableText from "../components/SanityPortableText"

type Section={_key?:string,title?:string,content?:any}

export default function ResearchSectionViewer({sections=[]}:{sections?:Section[]}){
  const usable=sections.filter(section=>section?.title)
  const [active,setActive]=useState(0)

  if(!usable.length){
    return <div className="glass-surface rounded-2xl p-6 text-slate-400">No sections added yet.</div>
  }

  const current=usable[Math.min(active,usable.length-1)]

  return (
    <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">Contents</p>
        <nav className="space-y-1">
          {usable.map((section,index)=>(
            <button key={section._key||index} type="button" onClick={()=>setActive(index)} className={`block w-full border-l px-4 py-3 text-left text-sm transition ${active===index?"border-cyan-300 bg-cyan-300/5 text-cyan-200":"border-white/10 text-slate-500 hover:border-white/30 hover:text-slate-200"}`}>
              <span className="mr-3 text-[10px] opacity-50">{String(index+1).padStart(2,"0")}</span>
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      <article className="min-w-0">
        <div className="glass-surface rounded-3xl p-7 md:p-12">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-300">Section {String(active+1).padStart(2,"0")}</p>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-5xl">{current.title}</h2>
          <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-p:leading-8 prose-li:text-slate-300">
            <SanityPortableText value={current.content}/>
          </div>
        </div>
      </article>
    </div>
  )
}