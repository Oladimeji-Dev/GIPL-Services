import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#home"
      className={`group inline-flex items-baseline gap-1.5 ${className}`}
      aria-label="GIPL Services — home"
    >
      <span className="font-display text-2xl font-semibold tracking-tight text-espresso-900">
        GIPL
      </span>
      <span className="font-display text-2xl italic font-medium text-bronze-500 transition-colors group-hover:text-bronze-600">
        Services
      </span>
    </Link>
  );
}
