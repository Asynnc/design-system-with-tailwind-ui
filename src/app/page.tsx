export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-slate-100 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="flex items-center gap-3 text-3xl font-bold sm:text-5xl lg:text-6xl">
          Hello World
        </h1>

        <button className="my-4 rounded-full  bg-emerald-700 px-4 py-2 font-medium text-white enabled:hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60">
          Sign In
        </button>
      </div>
    </div>
  )
}
