import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Corporate", href: "/corporate" },
  { label: "College to Corporate", href: "/college-to-corporate" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Logo */}
                 <Link href="/">
  <Image
    src="/logo.png"
    alt="CREST Technologies"
    width={65}
    height={30}
    priority
    className="h-auto w-auto"
  />
</Link>
        <nav className="hidden items-center gap-8 md:flex">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="text-[15px] font-medium text-[#333333] hover:text-[#3B7DDE] transition-colors"
    >
      {link.label}
    </Link>
  ))}
</nav>

        {/* CTA button */}
        <Link
          href="/registration"
          className="rounded-md bg-[#F5C518] px-6 py-3 text-[15px] font-semibold text-[#0B1F5C] hover:brightness-95 transition"
        >
          Registration Form
        </Link>
      </div>
    </header>
  );
}