import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CookieCard } from "@/components/CookieCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstagramLink } from "@/components/InstagramLink";
import { popularCookies } from "@/lib/menu";
import { INSTAGRAM_LABEL } from "@/lib/social";

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
                Small batches · fresh flavors
              </p>
              <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.1] tracking-tight text-cocoa sm:text-5xl lg:text-6xl">
                Cookies made with
                <span className="block text-caramel">care, flavor &amp; a little magic.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cocoa-soft sm:text-lg">
                Lilly&apos;s Cookies is a handcrafted bakery focused on small
                batches and standout flavors — from house classics to seasonal
                specialties. Baked fresh, made to share.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-sugar transition hover:bg-cocoa-soft"
                >
                  Browse the menu
                </Link>
                <a
                  href="#about"
                  className="rounded-full border border-cocoa/15 bg-sugar px-6 py-3 text-sm font-semibold text-cocoa transition hover:border-caramel/40 hover:text-caramel"
                >
                  Our story
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-cocoa/10 pt-8">
                {[
                  { label: "Cookie flavors", value: "12+" },
                  { label: "Batch size", value: "small" },
                  { label: "Made", value: "by hand" },
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
                  From the kitchen
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-cocoa">
                  Brown butter miso is a crowd favorite.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-soft">
                  Toasty brown butter, white chocolate, and a touch of miso —
                  sweet, salty, and perfectly chewy. Available this weekend as a
                  limited drop, while supplies last.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-cocoa px-4 py-3 text-cream">
                  <span className="text-2xl" aria-hidden>
                    🍪
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Limited drop this weekend</p>
                    <p className="text-xs text-cream/70">
                      Join the list below for first access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular picks */}
        <section
          id="popular"
          className="border-t border-cocoa/8 bg-sugar/60 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
                  Customer favorites
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                  Popular picks
                </h2>
                <p className="mt-3 text-cocoa-soft">
                  A few of our most-loved cookies. See the full menu for every
                  classic, limited, and seasonal flavor.
                </p>
              </div>
              <Link
                href="/menu"
                className="shrink-0 rounded-full border border-cocoa/15 bg-sugar px-5 py-2.5 text-sm font-semibold text-cocoa transition hover:border-caramel/40 hover:text-caramel"
              >
                View full menu
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {popularCookies.map((cookie) => (
                <CookieCard key={cookie.id} cookie={cookie} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                  About us
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                  Baked with heart, one batch at a time
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cocoa-soft">
                  Lilly&apos;s Cookies began in a home kitchen with a love of great
                  ingredients and better flavor. Today we still bake in small
                  batches so every cookie tastes the way it should.
                </p>
                <p className="mt-4 text-base leading-relaxed text-cocoa-soft">
                  From classic chocolate chip to unexpected seasonal favorites,
                  everything is made fresh and with care — for sharing, gifting,
                  or keeping all to yourself.
                </p>
              </div>

              <ol className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Quality ingredients",
                    body: "Real butter, good chocolate, and flavors we stand behind — no shortcuts.",
                  },
                  {
                    step: "02",
                    title: "Small batches",
                    body: "We bake in limited quantities so every cookie is fresh and consistent.",
                  },
                  {
                    step: "03",
                    title: "Made to share",
                    body: "Whether it’s a weekend drop or a house classic, these cookies are built for joy.",
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
                  Fresh batches, available while they last.
                </h2>
              </div>
              <p className="max-w-xl text-cream/75">
                We bake in small runs so everything stays fresh. When a special
                flavor is ready, we announce it to the list first — then it&apos;s
                first come, first served.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Weekend drops", detail: "Announced mid-week" },
                { title: "Seasonal flavors", detail: "Rotate throughout the year" },
                { title: "No spam", detail: "Only when something new is baking" },
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

        {/* Connect */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-cocoa/10 bg-gradient-to-br from-sugar via-cream to-cream-deep p-8 sm:p-12">
              <div className="mb-10 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-berry">
                  Connect
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                  Stay close to the kitchen
                </h2>
                <p className="mt-3 text-cocoa-soft">
                  Follow us on Instagram for fresh bakes and behind-the-scenes,
                  or join the list for drop alerts.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-cocoa/10 bg-sugar p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
                    Instagram
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-cocoa">
                    See what&apos;s baking
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">
                    Photos, limited drops, and new flavors first — follow{" "}
                    {INSTAGRAM_LABEL}.
                  </p>
                  <div className="mt-6">
                    <InstagramLink />
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-cocoa/10 bg-sugar p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                    Email list
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-cocoa">
                    Get drop alerts
                  </h3>
                  <p className="mt-2 mb-5 text-sm leading-relaxed text-cocoa-soft">
                    Be first to know when limited flavors go live. We only email
                    when it matters.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
