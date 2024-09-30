import { SettingsTabs } from '@/components/SettingsTabs'
import { Select } from '@/components/Form/Select/index'
import { InputControl, InputIcon, InputRoot } from '@/components/input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { SelectItem } from '@/components/Form/Select/selectItem'
import { TextArea } from '@/components/Form/textarea'
import { Button } from '@/components/button'
import { ThemeProvider } from 'next-themes'
import { ThemeButton } from '@/components/themeButton'

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
            Settings
          </h1>
          <ThemeButton />
        </div>

        <SettingsTabs />

        <div className="mt-6 flex flex-col">
          <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
            <div className="space-y-1">
              <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Personal info
              </h2>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                Update your photo and personal details here.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit" form="settings">
                Save
              </Button>
            </div>
          </div>
          <form
            id="settings"
            className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
          >
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Name
              </label>
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
                <InputRoot>
                  <InputControl id="firstName" placeholder="John" />
                </InputRoot>

                <div className="flex flex-col gap-3 lg:block">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-zinc-700 lg:hidden dark:text-zinc-300"
                  >
                    Last name
                  </label>

                  <InputRoot>
                    <InputControl id="lastName" placeholder="Doe" />
                  </InputRoot>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email Adress
              </label>
              <InputRoot>
                <InputIcon>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </InputIcon>
                <InputControl
                  id="email"
                  type="email"
                  placeholder="exemplo@elevatesystem.com.br"
                  defaultValue=""
                />
              </InputRoot>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Your photo
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  This will be dissplayed on yout profile.
                </span>
              </label>
              <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="role"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Role
              </label>
              <InputRoot>
                <InputControl
                  id="role"
                  placeholder="Ex: Full Stack Developer"
                />
              </InputRoot>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="country"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Country
              </label>
              <Select placeholder="Select a country">
                <SelectItem value="br" text="Brazil" />
                <SelectItem value="us" text="United States" />
                <SelectItem value="ch" text="China" />
              </Select>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="timezone"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Time zone
              </label>
              <Select placeholder="Select a timezone">
                <SelectItem value="br" text="BRT (Brasília Time) UTC/GMT -3" />
                <SelectItem
                  value="us"
                  text="EDT (Eastern Daylight Time) UTC/GMT -4"
                />
                <SelectItem
                  value="ch"
                  text="CST (China Standard Time) UTC/GMT +8"
                />
              </Select>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="Bio"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Bio
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  Write a short introduction.
                </span>
              </label>
              <div className="space-y-3">
                <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                  <Select placeholder="" defaultValue="normal">
                    <SelectItem
                      value="normal"
                      defaultChecked
                      text="Normal text"
                    />
                    <SelectItem value="md" text="Markdown" />
                  </Select>

                  <div className="flex items-center gap-1">
                    <Button type="button" variant="ghost">
                      <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <Italic
                        className="h-4 w-4 text-zinc-500"
                        strokeWidth={3}
                      />
                    </Button>
                    <Button type="button" variant="ghost">
                      <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                    </Button>
                    <Button type="button" variant="ghost">
                      <ListOrdered
                        className="h-4 w-4 text-zinc-500"
                        strokeWidth={3}
                      />
                    </Button>
                  </div>
                </div>

                <TextArea
                  id="bio"
                  defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              <label
                htmlFor="projects"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Portfolio projects
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  Share a few snippets of your work.
                </span>
              </label>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>

            <div className="flex items-center justify-end gap-2 pt-5">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit" form="settings">
                Save
              </Button>
            </div>
          </form>
        </div>
      </ThemeProvider>
    </>
  )
}
