// components/ui/animate-underline.tsx
"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AnimatedUnderlineLink({
    href,
    children,
    duration = 500,
    active = false,
    hover = true,
    thickness = 0.5,
}: {
    href: string;
    children: React.ReactNode;
    duration?: number;
    active?: boolean;
    hover?: boolean;
    thickness?: 0.5 | 1 | 2;
}) {
    const speed =
        { 300: "duration-300", 500: "duration-500", 700: "duration-700" }[
        duration
        ] || "duration-500";

    /* map thickness → Tailwind class */
    const heightClass =
        thickness === 2 ? "h-0.5" : thickness === 1 ? "h-px" : "h-0.5";

    return (
        <Link href={href} className={cn(hover && "group", "inline-block", speed)}>
            {children}
            <span
                className={cn(
                    heightClass,
                    "block bg-current rounded-full transition-all origin-left",
                    speed,
                    active
                        ? "max-w-full"
                        : hover
                            ? "max-w-0 group-hover:max-w-full"
                            : "max-w-0"
                )}
            />
        </Link>
    );
}
