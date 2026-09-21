import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    

      <footer className="bg-[#272727] text-white">
        

        <div className="mx-auto grid max-w-[1710px] grid-cols-1 gap-8 px-10 py-5 md:grid-cols-2 lg:grid-cols-5 lg:px-4">

          

          <div>
            <h2 className="mb-5 mt-3 pl-[2px] text-[36px] font-bold leading-none">
              CREST
            </h2>
            <p className="max-w-[250px] text-[14px] leading-[1.4]">
            CREST Technologies is an 
            <br/>
            upskilling platform in nepal
            <br/>
            that provides Live Online
            <br/>
            classes,Online & Physical 
            <br/>
            Training Classes
            </p>
          </div>

          {/*  COLUMN 2 - ACCREDITED BY  */}

          <div>
            <h3 className="mb-2 mt-3 text-[20px] font-bold">
              ACCREDITED BY
            </h3>

         <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white mx-9 my-4 ">
  <Image
    src="/iao-seal.png"
    alt="IAO Accreditation"
    width={40}
    height={60}
    className="h-[80px] w-[80px] object-contain"
  />
</div>
          </div>

          {/*  COLUMN 3 - COURSES*/}
 
           <div className="space-y-3">
             <Link
               href="/courses"
               className="block text-[17px] transition hover:text-gray-300 mt-7 mb-1"
             >
              Courses
            </Link>

            <Link
              href="/college-to-corporate"
              className="block text-[17px] transition hover:text-gray-300 my-1"
            >
              College to Corporate
            </Link>

            <Link
              href="/corporate-training"
              className="block text-[17px] transition hover:text-gray-300"
            > 
              Corporate Training
            </Link>
          </div> 

          {/*  COLUMN 4 - ABOUT */}

          <div className="space-y-3">
            <Link
              href="/about"
              className="block text-[17px] transition hover:text-gray-300 mt-7 mb-1"
            >
              About us
            </Link>

            <Link
              href="/about#accreditation"
              className="block text-[17px] transition hover:text-gray-300 mb-1"
            >
              Accreditation
            </Link>

            <Link
              href="/verify"
              className="block text-[17px] transition hover:text-gray-300 mt-1"
            >
              Verify Credentials
            </Link>
          </div> 

          {/*  COLUMN 5 - CONTACT  */}

           <div>
            <Link
              href="/contact"
              className="mb-1 mt-7 block text-[17px] transition hover:text-gray-300"
            >
              Contact
            </Link>

            <p className="mb-3 mt-3 text-[17px]">
              Connect with us
            </p>

            {/* SOCIAL ICONS  */}

            <div className="flex items-center gap-4 text-[#9ca3af]"> 

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

        {/* BOTTOM FOOTER  */}

        <div className="border-t border-gray-500">
          <div className="mx-auto flex  min-h-[75px] max-w-[1710px] flex-col items-center justify-center gap-4 px-10 py-2 text-[15px] md:flex-row md:gap-14">

            <p>
              © 2026 - Crest Technologies. All rights reserved
            </p>

            <Link
              href="/privacy-policy"
              className="transition hover:text-gray-300"
            >
              Privacy Policy
            </Link>

          </div>
        </div>
      </footer>

      {/* floating whatsapp button */}

      <a
        href="https://wa.me/9779857084388"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={65}
          height={65}
          className="h-[65px] w-[65px] object-contain"
        />
      </a>
    </>
  );
}