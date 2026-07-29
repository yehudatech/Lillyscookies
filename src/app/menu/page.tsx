import type { Metadata } from "next";
import Link from "next/link";
import { CookieCard } from "@/components/CookieCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cookies } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu — Lilly's Cookies",
  description:
    "Browse the full menu of handcrafted cookies from Lilly's Cookies — classics, limited drops, and seasonal flavors.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-cocoa/8 bg-sugar/60 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
              Full menu
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-4xl font-semibold tracking-tight text-cocoa sm:text-5xl">
              What&apos;s baking
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cocoa-soft sm:text-lg">
              House classics you can always count on, plus limited and seasonal
              flavors that rotate with the calendar.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cookies.map((cookie) => (
                <CookieCard key={cookie.id} cookie={cookie} />
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-cocoa/10 bg-cream-deep/50 px-6 py-5">
              <p className="text-sm text-cocoa-soft">
                Want first access to limited drops and new flavors?
              </p>
              <Link
                href="/#contact"
                className="rounded-full bg-cocoa px-5 py-2.5 text-sm font-semibold text-sugar transition hover:bg-cocoa-soft"
              >
                Join the list
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
