import { Home, ChefHat } from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Kitchen" icon={ChefHat} />
    </nav>
  )
}
