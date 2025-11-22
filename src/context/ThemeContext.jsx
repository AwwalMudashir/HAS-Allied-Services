import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or default to light mode
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : false
    }
    return false
  })

  useEffect(() => {
    // Update document class and localStorage
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const value = {
    isDark,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

