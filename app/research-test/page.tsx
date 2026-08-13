import {client} from '@/lib/sanity'

export default async function ResearchTestPage() {
  const research = await client.fetch(`
    *[_type == "research"] {
      _id,
      title,
      topic,
      "slug": slug.current,
      summary,
      status,
      featured
    }
  `)

  return (
    <main className="min-h-screen bg-[#050816] p-8 text-white">
      <h1 className="text-3xl font-bold">
        All Sanity Research
      </h1>

      <pre className="mt-8 overflow-auto rounded-xl border border-white/10 p-6 text-sm">
        {JSON.stringify(research, null, 2)}
      </pre>
    </main>
  )
}
