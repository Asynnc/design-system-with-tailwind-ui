import { SettingsTabs } from './components/Tabs/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Home</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-300 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold  text-zinc-700 shadow-sm  hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="button"
              form="settings"
              className="rounded-lg border border-zinc-300 bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" action="" className="mt-6 flex w-full flex-col ">
          form
        </form>
      </div>
    </>
  )
}
