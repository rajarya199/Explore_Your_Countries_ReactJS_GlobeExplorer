import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

// Define possible theme values
type Theme = 'light' | 'dark' | 'system'

// Define the shape of context state and updater functions
interface ThemeProviderContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// Create context with undefined default to enforce provider usage
const ThemeProviderContext = createContext<ThemeProviderContextProps | undefined>(
  undefined
)

// Props accepted by ThemeProvider
interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme // Optional default theme (default to 'system')
  storageKey?: string  // Optional localStorage key (default to 'vite-ui-theme')
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}) => {
  // State initialized from localStorage or default theme
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // Attempt to read saved theme from localStorage
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    // Remove any existing theme classes to prevent conflicts
    root.classList.remove('light', 'dark')

    // Determine the theme to apply, respecting system preference if 'system'
    const applyTheme = () => {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const appliedTheme = theme === 'system' ? (isSystemDark ? 'dark' : 'light') : theme
      root.classList.add(appliedTheme)
    }

    applyTheme()
    // Persist chosen theme to localStorage
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  // Function to toggle between light and dark themes, cycling through 'system' to 'light'
  const toggleTheme = () => {
    setTheme(prev =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'light' : 'light'
    )
  }

  // Provide theme state and updater functions via context
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Custom hook to access theme context, throws error if used outside provider
export const useTheme = (): ThemeProviderContextProps => {
  const context = useContext(ThemeProviderContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
