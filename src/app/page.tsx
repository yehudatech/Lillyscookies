import { ContactForm } from "@/components/ContactForm";
import { CookieCard } from "@/components/CookieCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cookies } from "@/lib/menu";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-caramel/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-berry/15 blur-3xl"
          />

          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-sugar px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-caramel">
                <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                Flavor experiments · limited drops
              </p>
              <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.1] tracking-tight text-cocoa sm:text-5xl lg:text-6xl">
                Cookies that feel like
                <span className="block text-caramel">R&amp;D for your taste buds.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cocoa-soft sm:text-lg">
                Lilly&apos;s Cookies is an experimental bakery lab — small batches,
                unexpected pairings, and honest notes from the test kitchen. Not a
                chain. Not a catalog. Just delicious experiments.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-sugar transition hover:bg-cocoa-soft"
                >
                  Browse the menu
                </a>
                <a
                  href="#lab"
                  className="rounded-full border border-cocoa/15 bg-sugar px-6 py-3 text-sm font-semibold text-cocoa transition hover:border-caramel/40 hover:text-caramel"
                >
                  How the lab works
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-cocoa/10 pt-8">
                {[
                  { label: "Active trials", value: "12+" },
                  { label: "Batch size", value: "tiny" },
                  { label: "Flavors", value: "weird→good" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[11px] uppercase tracking-wider text-cocoa-soft/80">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-cocoa">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-cocoa/10 bg-gradient-to-br from-sugar via-cream to-cream-deep p-6 shadow-[0_30px_80px_-40px_rgba(59,36,22,0.55)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">
                  Today&apos;s lab note
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-cocoa">
                  Brown butter + miso is still winning.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-soft">
                  Third pass on Batch 07: longer rest, bigger flakes of salt, less
                  white chocolate. The umami comes through without tasting “savory
                  dinner.” Shipping this as a limited drop next weekend.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-cocoa px-4 py-3 text-cream">
                  <span className="text-2xl" aria-hidden>
                    🧪
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Status: tasting panel open</p>
                    <p className="text-xs text-cream/70">
                      Sign up below if you want a seat at the next drop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="border-t border-cocoa/8 bg-sugar/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
                The board
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                What&apos;s baking in the lab
              </h2>
              <p className="mt-3 text-cocoa-soft">
                Some are house classics. Some are one-weekend drops. Some may never
                leave the notebook. That&apos;s the point.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cookies.map((cookie) => (
                <CookieCard key={cookie.id} cookie={cookie} />
              ))}
            </div>
          </div>
        </section>

        {/* Lab */}
        <section id="lab" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                  The lab
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                  An experimental cookie practice
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cocoa-soft">
                  Lilly&apos;s Cookies started as a kitchen notebook and a pile of
                  “what if?” ingredients. It&apos;s still that — just with better
                  scales and slightly fewer burnt edges.
                </p>
                <p className="mt-4 text-base leading-relaxed text-cocoa-soft">
                  This site is part of the experiment too: a place to share what
                  we&apos;re testing, what made the cut, and what we&apos;re still
                  iterating on.
                </p>
              </div>

              <ol className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Hypothesis",
                    body: "Pick a pairing that shouldn’t work on paper — then bake until it does.",
                  },
                  {
                    step: "02",
                    title: "Tiny batch",
                    body: "Enough for tasting notes, not enough to fill a warehouse. Quality over volume.",
                  },
                  {
                    step: "03",
                    title: "Drop or scrap",
                    body: "Winners go on the board. Losers go in the notebook with a better idea for next time.",
                  },
                ].map((item) => (
                  <li
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-cocoa/8 bg-sugar p-5"
                  >
                    <span className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-caramel">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-cocoa">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cocoa-soft">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Drops */}
        <section
          id="drops"
          className="border-y border-cocoa/8 bg-cocoa py-16 text-cream sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
                  Limited drops
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight sm:text-4xl">
                  When a batch is ready, it leaves the lab fast.
                </h2>
              </div>
              <p className="max-w-xl text-cream/75">
                No endless inventory. When we like a formula, we bake a small drop,
                tell the list, and move on to the next experiment. Join if you want
                first dibs on the weird good ones.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Weekend micro-drops", detail: "Announced mid-week" },
                { title: "Tasting notes included", detail: "What we changed & why" },
                { title: "No spam, just flour", detail: "Emails when it matters" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-cream/10 bg-cocoa-soft/40 p-5"
                >
                  <h3 className="font-semibold text-cream">{card.title}</h3>
                  <p className="mt-1 text-sm text-cream/65">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-cocoa/10 bg-gradient-to-br from-sugar via-cream to-cream-deep p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-berry">
                    Stay in the loop
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                    Get drop alerts &amp; lab notes
                  </h2>
                  <p className="mt-3 text-cocoa-soft">
                    This is a demo signup form for the experiment. Hook it to your
                    email tool or backend when you&apos;re ready.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
