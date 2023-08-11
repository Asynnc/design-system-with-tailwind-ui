'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  return (
    <Tabs.Root>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem title="My details" value="my-details" isSelected />
        <TabItem title="Profile" value="profile" />
        <TabItem title="Password" value="password" />
        <TabItem title="Notifications" value="notifications" />
        <TabItem title="API" value="api" />
      </Tabs.List>
    </Tabs.Root>
  )
}
