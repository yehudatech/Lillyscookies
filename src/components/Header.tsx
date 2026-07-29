import Link from "next/link";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#drops", label: "Drops" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-caramel text-sm font-semibold text-sugar shadow-sm transition group-hover:scale-105"
          >
            LC
          </span>
          <div className="leading-tight">
            <p className="font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-tight text-cocoa">
              Lilly&apos;s Cookies
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-cocoa-soft/80">
              Handcrafted bakery
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-cocoa-soft md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-caramel"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="rounded-full bg-cocoa px-4 py-2 text-sm font-medium text-sugar transition hover:bg-cocoa-soft"
        >
          Join the list
        </Link>
      </div>
    </header>
  );
}
