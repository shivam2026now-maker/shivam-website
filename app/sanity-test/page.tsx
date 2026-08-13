import {getArticles} from '@/lib/test-sanity'

export default async function SanityTestPage() {
  const articles = await getArticles()

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <h1 className="text-3xl font-bold">Sanity Connection Test</h1>

      <pre className="mt-8 overflow-auto rounded-xl border border-white/10 p-6 text-sm">
        {JSON.stringify(articles, null, 2)}
      </pre>
    </main>
  )
}
