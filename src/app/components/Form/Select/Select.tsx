'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function Select() {
  return (
    <div>
      <SelectPrimitive.Root>
        <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-md border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
          <SelectPrimitive.Value
            className="text-black"
            placeholder={'Select a country...'}
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
            <SelectPrimitive.Viewport>
              <SelectPrimitive.Item
                value="br"
                className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-green-50"
              >
                <SelectPrimitive.ItemText className="text-black">
                  {' '}
                  Brasil{' '}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <Check className="h-4 w-4 text-green-500" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}
