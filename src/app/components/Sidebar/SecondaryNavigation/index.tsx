import { LifeBuoy, Settings } from 'lucide-react'
import { NavItem } from '../MainNavigation/NavItem'

export function SecondaryNavigation() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Settings} />
      </nav>
    </div>
  )
}
