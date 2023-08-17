import { Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { WidgetMetric } from './WidgetMetric/index'
import { Divider } from './Divider'
import { Profile } from './Profile'
import { Input } from '../Input'
import { SecondaryNavigation } from './SecondaryNavigation'

export default function Sidebar() {
  return (
    <aside className="flex max-h-screen flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <MainNavigation />
      <SecondaryNavigation />
      <WidgetMetric />
      <Divider />
      <Profile />
    </aside>
  )
}
