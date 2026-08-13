import Link from "next/link";

export default function NonPropellerDronePage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/projects" className="text-sm text-cyan-400">
          ← Back to Projects
        </Link>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Project / 01
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
            Non-Propeller Drone
          </h1>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-12">
            <p className="text-slate-400">
              Project details and sketches will be added here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
