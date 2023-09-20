'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <div>
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-md border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
          <SelectPrimitive.Value
            className="text-black"
            placeholder={placeholder}
          />
          <SelectPrimitive.Icon>
            <ChevronDown className="h-5 w-5 text-zinc-500" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            className="z-10 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-zinc-200 bg-white"
            sideOffset={4}
          >
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}
