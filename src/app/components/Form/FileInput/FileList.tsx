'use client'

import { Cloud, Trash, Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/utils/format-bytes'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-md border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-green-100 bg-green-200 text-green-600">
              <UploadCloud className="h-4 w-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {formatBytes(file.size)}
                </span>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 w-4/5 rounded-full bg-green-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>

            <button className="ml-auto rounded-md p-2 hover:bg-red-50">
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
