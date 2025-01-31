"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between px-6 md:px-10">
        {/* Left-aligned name with equal left padding */}
        <Link href="/" className="text-xl md:text-2xl font-bold">
          Sarthak Aggarwal
        </Link>

        {/* Right-aligned navigation with equal right padding */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
