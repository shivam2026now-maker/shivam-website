import Link from "next/link";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

const query = `*[_type == "journal" && !(_id in path("drafts.**"))] | order(publishedAt desc){
  _id,title,slug,shortDescription,coverImage,publishedAt,tags,featured
}`;

function date(value?: string) {
  return value ? new Date(value).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}) : "";
}

export default async function JournalPage() {
  const entries = await client.fetch(query);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="text-sm text-cyan-400 transition hover:text-cyan-300">â† Back home</Link>

        <header className="max-w-3xl pb-20 pt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Field Journal</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">Notes from the journey.</h1>
          <p className="mt-7 text-lg leading-8 text-slate-400">Observations, small discoveries, experiments, progress and thoughts recorded along the way.</p>
        </header>

        <section className="relative border-l border-cyan-400/20 pl-6 sm:pl-10">
          {entries.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-slate-400">No journal entries published yet.</div>
          ) : entries.map((entry:any,index:number) => {
            const image = entry.coverImage ? urlFor(entry.coverImage).width(1200).height(750).quality(85).url() : null;
            return (
              <article key={entry._id} className="relative pb-14">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#050816] sm:-left-[47px]" />
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">{date(entry.publishedAt)}</p>
                <div className={`mt-4 grid gap-7 ${image ? "md:grid-cols-[0.85fr_1.15fr] md:items-center" : ""}`}>
                  {image && <div className="image-depth overflow-hidden rounded-3xl border border-white/10"><img src={image} alt={entry.coverImage?.alt || entry.title} className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-105" /></div>}
                  <div className="premium-card image-depth shine rounded-3xl p-7 sm:p-9">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Entry {String(index+1).padStart(2,"0")}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{entry.title}</h2>
                    {entry.shortDescription && <p className="mt-5 text-base leading-7 text-slate-400">{entry.shortDescription}</p>}
                    {entry.tags?.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{entry.tags.map((tag:string)=><span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">{tag}</span>)}</div>}
                    <Link href={`/journal/${entry.slug?.current}`} className="mt-7 inline-flex text-sm text-cyan-300">Open entry â†’</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <div className="mt-10 border-t border-white/10 pt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Index</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[["/about","About"],["/articles","Articles"],["/research","Research"],["/projects","Projects"],["/journal","Journal"],["/media","Media"]].map(([href,label])=><Link key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">â†’ {label}</Link>)}
          </div>
          <Link href="/" className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-300">Back to home â†‘</Link>
        </div>
      </div>
    </main>
  );
}