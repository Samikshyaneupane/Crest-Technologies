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
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showRegistration ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showRegistration]);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky left-0 top-0 z-50 w-full bg-white shadow-md font-myriad ">
        <div className="flex items-center leading-tight select-none transition-opacity duration-300 ease-out opacity-100">

          {/* LOGO */}
          <Link
            href="/"
            prefetch={false}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo.png"
              alt="CREST Technologies"
              width={150}
              height={72}
              priority
              className="mx-[20px] my-[5px] h-[77px] w-[105px] object-contain"
            />
          </Link>

          {/* NAVIGATION */}
      
<nav className="ml-[130px] hidden items-center gap-[28px] lg:flex">
  {navLinks.map((link) => {
    const active = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        prefetch={false}
        className={`
          whitespace-nowrap
          text-[20px]
          font-normal
          leading-[100%]
          tracking-normal
          transition-colors
          duration-200
          ${
            active
              ? "text-[#00135C]"
              : "text-[#464646] hover:text-[#00135C]"
          }
        `}
      >
        {link.label}
      </Link>
    );
  })}
</nav>

          {/* REGISTRATION BUTTON */}
          <button
  type="button"
  onClick={() => setShowRegistration(true)}
  className="
    absolute right-6 top-1/2 -translate-y-1/2
    hidden lg:inline-block
    bg-[#FFCC00]
    px-4 py-3
    text-[20px] font-normal
    leading-[100%]
    text-[#292929]
    rounded-md
    hover:bg-[#F2A900]
    transition-colors duration-200
    whitespace-nowrap
  "
>
  Registration Form
</button>
        </div>
      </header>

      {/* REGISTRATION POPUP */}
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
            {/* MODAL HEADER */}
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

            {/* FORM */}
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

              {/* PHONE */}
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

                <span className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2 text-[16px] text-[#98A2B3]">
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

                <span className="pointer-events-none absolute right-[16px] top-[15px] text-[16px] text-[#98A2B3]">
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