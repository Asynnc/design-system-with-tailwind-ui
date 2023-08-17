'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-md border border-dashed border-zinc-200 px-6 py-4 text-center text-zinc-500 shadow-sm hover:bg-green-100"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-green-50 group-hover:bg-white">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-green-700" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          {' '}
          <span className="font-semibold text-green-700">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-sm">PNG or JPG (max. 800x400px)</span>
      </div>
    </label>
  )
}
