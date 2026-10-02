"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Corporate", href: "/corporate" },
  {
    label: "College to Corporate",
    href: "/college-to-corporate",
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  // Lock page scroll when registration popup is open
  useEffect(() => {
    document.body.style.overflow = showRegistration ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showRegistration]);

  // Close registration popup with Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowRegistration(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/*  HEADER  */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md font-myriad">

        {/* HEADER ROW */}
        {/* <div className="flex h-[85px] w-full translate-y-[1px] items-center px-6"> */}
          <div className="flex h-[85px] max-w-9xl translate-y-[1px] items-center pl-[20px] pr-6 flex items-center justify-between">

          {/*  LOGO  */}
          <Link
            href="/"
            prefetch={false}
            className="flex items-center leading-tight select-none transition-opacity duration-300 ease-out opacity-100"
          >
            <Image
              src="/logo.png"
              alt="CREST Technologies Logo"
              width={120}
              height={48}
              priority
             
            />
          </Link>

          {/*  DESKTOP NAV */}
          <nav className="font-myriad font-normal ml-[105px] mt-[12px] hidden shrink-0 items-center gap-[18px] lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className={`
                    font-myraid
                    whitespace-nowrap
                    text-[21px]
                    font-normal
                    leading-[24px]
                    tracking-normal
                    transition-colors
                    duration-200
                    mb:[10px]
                    ${
                      active
                        ? "font-medium text-[#00135C]"
                        : "text-[#464646] hover:text-blue-600"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Push registration button to right */}
          <div className="flex-1" />

          {/* DESKTOP REGISTRATION */}
<button
  type="button"
  onClick={() => setShowRegistration(true)}
  className="hidden lg:inline-block w-[250px] font:normal font-myraid px-7 py-[14px] bg-[#FFCC00] translate-x-[5px] hover:bg-[#ECA900] text-[22px] text-[#292929] font-normal rounded-md transition-colors duration-200 leading-[100%] tracking-normal text-center opacity-100"
>
  Registration Form
</button>

          {/* MOBILE MENU BUTTON  */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="ml-auto flex items-center justify-center lg:hidden"
          >
            {mobileOpen ? (
              /* X ICON */
              <svg
                className="h-8 w-8 text-[#1E2157]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* HAMBURGER ICON */
              <svg
                className="h-8 w-8 text-[#1E2157]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/*  MOBILE DROPDOWN  */}
        {mobileOpen && (
          <div className="w-full border-t border-gray-100 bg-white lg:hidden">
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      py-3
                      text-[20px]
                      font-normal
                      ${
                        active
                          ? "font-medium text-[#00135C]"
                          : "text-[#464646]"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* MOBILE REGISTRATION BUTTON */}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setShowRegistration(true);
                }}
                className="
                  mt-4
                  w-fit
                  rounded-md
                  bg-[#FFCC00]
                  px-8
                  py-3
                  text-[20px]
                  font-normal
                  leading-[20px]
                  text-[#292929]
                  shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                "
              >
                Registration Form
              </button>
            </nav>
          </div>
        )}
      </header>

      {/*REGISTRATION POPUP */}
      {showRegistration && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/50
            px-4
            py-5
            font-myriad
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowRegistration(false);
            }
          }}
        >
          {/* POPUP CONTAINER */}
          <div
            className="
              w-full
              max-w-[500px]
              rounded-[10px]
              bg-white
              px-[26px]
              pb-[16px]
              pt-[16px]
              shadow-2xl
            "
          >
            {/* POPUP HEADER */}
            <div className="flex items-start justify-between">
              <h2 className="text-[34px] font-bold leading-none text-[#00135C]">
                Registration Form
              </h2>

              <button
                type="button"
                onClick={() => setShowRegistration(false)}
                className="
                  mt-[3px]
                  text-[17px]
                  font-normal
                  text-[#667085]
                  underline
                  underline-offset-2
                  hover:text-[#00135C]
                "
              >
                Close
              </button>
            </div>

            {/*  FORM  */}
            <form onSubmit={handleSubmit} className="mt-[18px]">

              {/* FULL NAME */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="
                  h-[56px]
                  w-full
                  rounded-[8px]
                  border
                  border-[#D0D5DD]
                  px-[16px]
                  text-[18px]
                  font-normal
                  text-[#333]
                  outline-none
                  placeholder:text-[#98A2B3]
                  focus:border-[#2478E8]
                "
              />

              {/* PHONE NUMBER */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="
                  mt-[10px]
                  h-[56px]
                  w-full
                  rounded-[8px]
                  border
                  border-[#D0D5DD]
                  px-[16px]
                  text-[18px]
                  font-normal
                  text-[#333]
                  outline-none
                  placeholder:text-[#98A2B3]
                  focus:border-[#2478E8]
                "
              />

              {/* ADDRESS */}
              <div className="relative mt-[10px]">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="
                    h-[56px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#D0D5DD]
                    px-[16px]
                    pr-[110px]
                    text-[18px]
                    font-normal
                    text-[#333]
                    outline-none
                    placeholder:text-[#98A2B3]
                    focus:border-[#2478E8]
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-[16px]
                    top-1/2
                    -translate-y-1/2
                    text-[16px]
                    text-[#98A2B3]
                  "
                >
                  (Optional)
                </span>
              </div>

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="
                  mt-[10px]
                  h-[56px]
                  w-full
                  rounded-[8px]
                  border
                  border-[#D0D5DD]
                  px-[16px]
                  text-[18px]
                  font-normal
                  text-[#333]
                  outline-none
                  placeholder:text-[#98A2B3]
                  focus:border-[#2478E8]
                "
              />

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject of Interest"
                required
                className="
                  mt-[10px]
                  h-[56px]
                  w-full
                  rounded-[8px]
                  border
                  border-[#D0D5DD]
                  px-[16px]
                  text-[18px]
                  font-normal
                  text-[#333]
                  outline-none
                  placeholder:text-[#98A2B3]
                  focus:border-[#2478E8]
                "
              />

              {/* MESSAGE */}
              <div className="relative mt-[10px]">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="
                    h-[90px]
                    w-full
                    resize-none
                    rounded-[8px]
                    border
                    border-[#D0D5DD]
                    px-[16px]
                    py-[15px]
                    pr-[110px]
                    text-[18px]
                    font-normal
                    text-[#333]
                    outline-none
                    placeholder:text-[#98A2B3]
                    focus:border-[#2478E8]
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-[16px]
                    top-[15px]
                    text-[16px]
                    text-[#98A2B3]
                  "
                >
                  (Optional)
                </span>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  mt-[12px]
                  flex
                  h-[58px]
                  w-full
                  items-center
                  justify-center
                  rounded-[7px]
                  bg-[#FFC800]
                  text-[25px]
                  font-normal
                  text-[#111]
                  transition-colors
                  hover:bg-[#e5b500]
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}