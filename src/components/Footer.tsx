import { InstagramLink } from "@/components/InstagramLink";
import { INSTAGRAM_LABEL } from "@/lib/social";

export function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-cocoa text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-[family-name:var(--font-fraunces)] text-lg font-semibold">
            Lilly&apos;s Cookies
          </p>
          <p className="mt-1 text-sm text-cream/70">
            Handcrafted cookies · small batches · made with care
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <InstagramLink
            variant="text"
            className="text-sm font-medium text-cream/85 hover:text-caramel"
          />
          <p className="text-sm text-cream/55">
            Follow {INSTAGRAM_LABEL} · © {new Date().getFullYear()} Lilly&apos;s
            Cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
