import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#272727] text-white">
        {/* MAIN FOOTER */}
        <div
          className="
            mx-auto grid max-w-[1710px]
            grid-cols-1
            gap-10
            px-6 py-10
            sm:grid-cols-2 sm:px-8
            md:grid-cols-3
            lg:grid-cols-5 lg:gap-8 lg:px-10 lg:py-8
            xl:px-12
          "
        >
          {/* COLUMN 1 - CREST */}
          <div className="text-center sm:text-left">
            <h2 className="mb-5 text-[32px] font-bold leading-none sm:text-[34px] lg:text-[36px]">
              CREST
            </h2>

            <p className="mx-auto max-w-[280px] text-[14px] leading-[1.6] text-gray-200 sm:mx-0">
              CREST Technologies is an upskilling platform in Nepal that
              provides Live Online classes, Online & Physical Training Classes.
            </p>
          </div>

          {/* COLUMN 2 - ACCREDITED BY */}
          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-[18px] font-bold lg:text-[20px]">
              ACCREDITED BY
            </h3>

            <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white sm:mx-0">
              <Image
                src="/iao-seal.png"
                alt="IAO Accreditation"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-contain"
              />
            </div>
          </div>

          {/* COLUMN 3 - COURSES */}
          <div className="space-y-3 text-center sm:text-left">
            <Link
              href="/courses"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              Courses
            </Link>

            <Link
              href="/college-to-corporate"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              College to Corporate
            </Link>

            <Link
              href="/corporate-training"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              Corporate Training
            </Link>
          </div>

          {/* COLUMN 4 - ABOUT */}
          <div className="space-y-3 text-center sm:text-left">
            <Link
              href="/about"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              About us
            </Link>

            <Link
              href="/about#accreditation"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              Accreditation
            </Link>

            <Link
              href="/verify"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              Verify Credentials
            </Link>
          </div>

          {/* COLUMN 5 - CONTACT */}
          <div className="text-center sm:text-left">
            <Link
              href="/contact"
              prefetch={false}
              className="block text-[16px] transition hover:text-gray-300 lg:text-[17px]"
            >
              Contact
            </Link>

            <p className="mb-4 mt-4 text-[16px] lg:text-[17px]">
              Connect with us
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center gap-4 text-[#9ca3af] sm:justify-start">
              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-gray-500">
          <div
            className="
              mx-auto flex max-w-[1710px]
              flex-col items-center justify-center
              gap-3
              px-6 py-5
              text-center text-[13px]
              sm:text-[14px]
              md:min-h-[75px] md:flex-row md:gap-10 md:py-2
              lg:text-[15px]
            "
          >
            <p>© 2026 - Crest Technologies. All rights reserved</p>

            <Link
              href="/privacy-policy"
              prefetch={false}
              className="transition hover:text-gray-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/9779857084388"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-4 right-4 z-50
          transition-transform duration-200
          hover:scale-105
          sm:bottom-5 sm:right-5
        "
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={65}
          height={65}
          className="
            h-[52px] w-[52px] object-contain
            sm:h-[58px] sm:w-[58px]
            lg:h-[65px] lg:w-[65px]
          "
        />
      </a>
    </>
  );
}