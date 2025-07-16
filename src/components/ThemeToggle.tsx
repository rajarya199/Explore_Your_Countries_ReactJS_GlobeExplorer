import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [appliedTheme, setAppliedTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setAppliedTheme(isDark ? 'dark' : 'light')
    } else {
      setAppliedTheme(theme)
    }
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${appliedTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {appliedTheme === 'light' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  )
}
