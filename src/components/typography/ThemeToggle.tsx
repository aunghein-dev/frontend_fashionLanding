import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils" 

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className={cn(
        "fixed top-4 right-4 z-50 flex items-center justify-center",
        "h-10 w-10 rounded-full border border-blue-500 bg-background",
        "text-foreground shadow transition-all duration-300",
        "hover:scale-105 hover:bg-muted"
      )}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-transform duration-300",
          theme === "dark" && "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-transform duration-300",
          theme === "light" && "rotate-90 scale-0"
        )}
      />
    </button>
  )
}
