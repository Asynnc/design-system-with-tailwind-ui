import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/tonybsilva-dev.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Antonio Silva
        </span>
        <span className="truncate text-sm text-zinc-500">
          {' '}
          tonybsilvadev@gmail.com{' '}
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-red-50">
        <LogOut className="h-5 w-5" />
      </button>
    </div>
  )
}
