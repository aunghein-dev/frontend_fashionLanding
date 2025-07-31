import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed top-4 right-4 px-4 py-2 rounded-full text-white shadow"
      style={{ backgroundColor: 'var(--primary-color)' }}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
