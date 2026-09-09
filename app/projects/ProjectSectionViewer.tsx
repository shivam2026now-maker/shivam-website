'use client'

import {useState} from 'react'
import {PortableText} from '@portabletext/react'

type Section = {
  _key?: string
  name?: string
  title?: string
  slug?: string
  content?: unknown[]
}

type Props = {
  sections?: Section[]
}

export default function ProjectSectionViewer({sections = []}: Props) {
  const usableSections = sections.filter(
    (section) => section && (section.title || section.name),
  )

  const [active, setActive] = useState(
    usableSections[0]?._key || usableSections[0]?.slug || '',
  )

  const current =
    usableSections.find(
      (section) => (section._key || section.slug) === active,
    ) || usableSections[0]

  if (!usableSections.length) {
    return (
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 text-sm text-black/60">
        This project does not have any sections yet.
      </div>
    )
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-black/40">
          Contents
        </p>

        <nav className="space-y-1" aria-label="Project sections">
          {usableSections.map((section, index) => {
            const id = section._key || section.slug || String(index)
            const selected = id === active

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                  selected
                    ? 'bg-black text-white'
                    : 'text-black/60 hover:bg-black/5 hover:text-black'
                }`}
              >
                {section.title || section.name || `Section ${index + 1}`}
              </button>
            )
          })}
        </nav>
      </aside>

      <article className="min-w-0">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Section
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            {current?.title || current?.name}
          </h2>
        </div>

        {current?.content?.length ? (
          <div className="prose prose-neutral max-w-none prose-headings:tracking-tight prose-img:rounded-2xl">
            <PortableText value={current.content as never} />
          </div>
        ) : (
          <p className="text-black/50">
            This section does not contain any content yet.
          </p>
        )}
      </article>
    </div>
  )
}
