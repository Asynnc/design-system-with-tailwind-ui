'use client'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Input } from './components/Input'
import { SettingsTabs } from './components/Tabs/SettingsTabs'
import { Divider } from './components/Sidebar/Divider'
import * as FileInput from './components/Form/FileInput'
import { Select } from './components/Form/Select/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { Textarea } from './components/Form/Textarea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Home</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-300 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold  text-zinc-700 shadow-sm  hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="button"
              form="settings"
              className="rounded-lg border border-zinc-200 bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="first-name"
              className="text-zinc font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="first-name" placeholder="User" />
              </Input.Root>

              <Input.Root>
                <Input.Control placeholder="Example" />
              </Input.Root>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="email"
              className="text-zinc font-medium text-zinc-700"
            >
              Email Address
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix>
                  {' '}
                  <Mail className="h-5 w-5 text-zinc-500" />{' '}
                </Input.Prefix>
                <Input.Control
                  id="email"
                  type="email"
                  placeholder={'user@example.com.br'}
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </Input.Root>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="photo"
              className="text-zinc font-medium text-zinc-700"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {' '}
                This will be displayed on your profile.{' '}
              </span>
            </label>
            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="role"
              className="text-zinc font-medium text-zinc-700"
            >
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  placeholder={'Software Engineer'}
                  autoComplete="off"
                  autoCapitalize="on"
                />
              </Input.Root>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="country"
              className="text-zinc font-medium text-zinc-700"
            >
              Country
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Select placeholder="Select a country...">
                <SelectItem value="br" text="Brazil" />
                <SelectItem value="us" text="United States" />
              </Select>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="timezone"
              className="text-zinc font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Select placeholder="Select a timezone">
                <SelectItem
                  value="pst"
                  text="Pacific Standard Time (UTC-08:00)"
                />
                <SelectItem value="asp" text="America Sao Paulo (UTC-03:00)" />
              </Select>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="bio"
              className="text-zinc font-medium text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {' '}
                Write a short introduction.{' '}
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="projects"
              className="text-zinc font-medium text-zinc-700"
            >
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {' '}
                Share a few snippets of your work.{' '}
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6">
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold  text-zinc-700 shadow-sm  hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-lg border border-zinc-200 bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
