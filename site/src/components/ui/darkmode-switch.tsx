/* ------------------------------------------------------------------
   components/ui/DarkModeToggle.tsx
-------------------------------------------------------------------*/
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Props = {
    /** Optional extra classes for the button */
    className?: string;
    /** Size of the Lucide icon (defaults 20) */
    size?: number;
};

export default function DarkModeToggle({ className, size = 20 }: Props) {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    /* avoid hydration mismatch */
    useEffect(() => setMounted(true), []);

    /* true when currently in dark mode */
    const isDark = (mounted ? resolvedTheme : theme) === "dark";

    return (
        <button
            aria-label="Toggle colour scheme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={
                [
                    /* default styling copied from your header  */
                    "p-2 rounded-full bg-transparent border border-black dark:bg-second",
                    "text-black ",
                    "hover:bg-gray-200 dark:hover:bg-gray-600",
                    "transition-all duration-300 cursor-pointer",
                    className,
                ].join(" ")
            }
        >
            {isDark ? <Moon size={size} /> : <Sun size={size} />}
        </button>
    );
}
