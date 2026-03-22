import { Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "./theme-context";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (!theme) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className={cn(
          "size-14 rounded-none border-[3px] border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all",
          theme === "dark" ? "bg-neo-yellow text-black" : "bg-black text-white"
        )}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun weight="bold" className="size-8 animate-spin-slow" />
        ) : (
          <Moon weight="bold" className="size-8" />
        )}
      </Button>
    </div>
  );
}
