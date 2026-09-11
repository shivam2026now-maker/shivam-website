"use client"

import {PortableText} from "@portabletext/react"
import {urlFor} from "@/lib/sanityImage"

const components={
  types:{
    image:({value}:any)=>value?.asset?(
      <figure className="my-10">
        <img src={urlFor(value).width(1400).quality(90).url()} alt={value.alt||""} className="w-full rounded-2xl border border-white/10 object-cover" />
        {value.caption&&<figcaption className="mt-3 text-center text-sm text-slate-500">{value.caption}</figcaption>}
      </figure>
    ):null,
  },
  marks:{
    link:({children,value}:any)=><a href={value?.href||"#"} target={value?.href?.startsWith("http")?"_blank":undefined} rel={value?.href?.startsWith("http")?"noreferrer":undefined} className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">{children}</a>,
  },
  block:{
    h2:({children}:any)=><h2 className="mt-12 mb-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">{children}</h2>,
    h3:({children}:any)=><h3 className="mt-10 mb-4 text-2xl font-semibold text-white">{children}</h3>,
    h4:({children}:any)=><h4 className="mt-8 mb-3 text-xl font-semibold text-white">{children}</h4>,
    blockquote:({children}:any)=><blockquote className="my-8 border-l-2 border-cyan-300/50 pl-6 text-lg italic leading-8 text-slate-400">{children}</blockquote>,
  },
}

export default function SanityPortableText({value}:{value:any}){
  if(!value?.length)return null
  return <PortableText value={value} components={components}/>
}