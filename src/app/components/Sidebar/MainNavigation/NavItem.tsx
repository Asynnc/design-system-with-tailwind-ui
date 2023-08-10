import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-green-50"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-green-600" />
      <span className="font-medium text-zinc-600 group-hover:text-green-600">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-green-600" />
    </a>
  )
}
