export function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-cocoa text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-[family-name:var(--font-fraunces)] text-lg font-semibold">
            Lilly&apos;s Cookies
          </p>
          <p className="mt-1 text-sm text-cream/70">
            Experimental bakery lab · small batches · big flavor R&amp;D
          </p>
        </div>
        <p className="text-sm text-cream/55">
          © {new Date().getFullYear()} Lilly&apos;s Cookies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
