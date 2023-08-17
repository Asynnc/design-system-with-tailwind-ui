import { Mail, UploadCloud, User } from 'lucide-react'
import { Input } from './components/Input'
import { SettingsTabs } from './components/Tabs/SettingsTabs'
import { Divider } from './components/Sidebar/Divider'

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
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                <User className="h-8 w-8 text-green-500" />
              </div>
              <label
                htmlFor="photo"
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
              <input type="file" className="sr-only" id="photo" />
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
            <div className="grid grid-cols-2 gap-6"></div>
          </div>
          <Divider />
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="timezone"
              className="text-zinc font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div className="grid grid-cols-2 gap-6"></div>
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
            <div className="grid grid-cols-2 gap-6"></div>
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
            <div className="grid grid-cols-2 gap-6"></div>
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
