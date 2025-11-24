export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Next.js Template
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Feature-based architecture with Prisma multi-schema support
        </p>
        <p>{new Date()}</p>
      </main>
    </div>
  )
}
