import { statusLabel, type CookieItem } from "@/lib/menu";

const statusStyles: Record<CookieItem["status"], string> = {
  seasonal: "bg-berry/10 text-berry",
  limited: "bg-caramel/15 text-caramel",
  classic: "bg-mint/15 text-mint",
};

export function CookieCard({ cookie }: { cookie: CookieItem }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-cocoa/8 bg-sugar p-6 shadow-[0_12px_40px_-24px_rgba(59,36,22,0.45)] transition hover:-translate-y-1 hover:border-caramel/30 hover:shadow-[0_18px_50px_-22px_rgba(196,123,58,0.45)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="rounded-full bg-cream-deep px-3 py-1 text-xs font-medium uppercase tracking-wider text-cocoa-soft">
          {cookie.tag}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[cookie.status]}`}
        >
          {statusLabel[cookie.status]}
        </span>
      </div>

      <div
        aria-hidden
        className="mb-5 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-cream-deep via-cream to-caramel/20"
      >
        <span className="text-5xl transition duration-300 group-hover:scale-110">
          🍪
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight text-cocoa">
        {cookie.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-soft">
        {cookie.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {cookie.notes.map((note) => (
          <li
            key={note}
            className="rounded-full border border-cocoa/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-cocoa-soft"
          >
            {note}
          </li>
        ))}
      </ul>
    </article>
  );
}
