import { InstagramIcon } from "@/components/InstagramIcon";
import { INSTAGRAM_LABEL, INSTAGRAM_URL } from "@/lib/social";

type InstagramLinkProps = {
  variant?: "button" | "icon" | "text";
  className?: string;
};

export function InstagramLink({
  variant = "button",
  className = "",
}: InstagramLinkProps) {
  if (variant === "icon") {
    return (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Follow Lilly's Cookies on Instagram ${INSTAGRAM_LABEL}`}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-caramel hover:text-caramel ${className}`}
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
    );
  }

  if (variant === "text") {
    return (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 transition hover:text-caramel ${className}`}
      >
        <InstagramIcon className="h-4 w-4" />
        <span>{INSTAGRAM_LABEL}</span>
      </a>
    );
  }

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 ${className}`}
    >
      <InstagramIcon className="h-5 w-5" />
      Follow on Instagram
    </a>
  );
}
