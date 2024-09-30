'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Isso é necessário para garantir que o componente está montado no client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Garante que o tema seja carregado apenas no client-side

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center rounded-md bg-gray-200 p-2 text-black dark:bg-violet-500/10 dark:text-white"
    >
      {theme === 'dark' ? (
        <>
          <Sun className="mr-2 h-5 w-5 text-yellow-500" />
          <span>Switch to Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="mr-2 h-5 w-5 text-indigo-500" />
          <span>Switch to Dark Mode</span>
        </>
      )}
    </button>
  )
}
