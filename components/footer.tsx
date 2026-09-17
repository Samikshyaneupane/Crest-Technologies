// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <>
  
//       {/* FOOTER */}
   

//       <footer className="bg-[#272727] text-white">

//         {/* TOP FOOTER */}

//         <div className="mx-auto grid max-w-[1710px] grid-cols-1 gap-8 px-10 py-5 md:grid-cols-2 lg:grid-cols-5 lg:px-20">

          
//           {/* COLUMN 1 - CREST */}
         

//           <div>
//             <h2 className="mb-3 text-[36px] font-bold leading-none">
//               CREST
//             </h2>

//             <p className="max-w-[270px] text-[16px] leading-[1.4]">
//               CREST Technologies is an
//               <br />
//               upskilling platform in Nepal
//               <br />
//               that provides Live Online
//               <br />
//               classes, Online &amp; Physical
//               <br />
//               Training Classes.
//             </p>
//           </div>


         
//           {/* COLUMN 2 - ACCREDITED BY */}
          

//           <div>
//             <h3 className="mb-3 text-[20px] font-bold">
//               ACCREDITED BY
//             </h3>

//             <Image
//               src="/iao.png"
//               alt="IAO Accreditation"
//               width={120}
//               height={80}
//               className="h-[80px] w-[120px] object-contain"
//             />
//           </div>


         
//           {/* COLUMN 3 - COURSES */}
         

//           <div className="space-y-3">

//             <Link
//               href="/courses"
//               className="block text-[17px] transition hover:text-gray-300"
//             >
//               Courses
//             </Link>

//             <Link
//               href="/college-to-corporate"
//               className="block text-[17px] transition hover:text-gray-300"
//             >
//               College to Corporate
//             </Link>

//             <Link
//               href="/corporate-training"
//               className="block text-[17px] transition hover:text-gray-300"
//             >
//               Corporate Training
//             </Link>

//           </div>


    
//           {/* COLUMN 4 - ABOUT */}
          
//           {/* <div className="space-y-3">

//             <Link
//               href="/about"
//               className="block text-[17px] transition hover:text-gray-300"
//             >
//               About us
//             </Link>

//             <Link
//               href="/about#accreditation"
//               className="block text-[17px] transition hover:text-gray-300"
//             >
//               Accreditation
//             </Link>

//             <Link
//               href="/verify"
//               className="block text-[17px] transition hover:text-gray-300"
//             >
//               Verify Credentials
//             </Link>

//           </div> */}


         
//           {/* COLUMN 5 - CONTACT */}
          

//           <div>

//             {/* <Link
//               href="/contact"
//               className="mb-3 block text-[17px] transition hover:text-gray-300"
//             >
//               Contact
//             </Link>

//             <p className="mb-3 text-[17px]">
//               Connect with us
//             </p> */}


//             {/* ================= SOCIAL ICONS ================= */}

//             <div className="flex items-center gap-4 text-[#9ca3af]">

//               {/* FACEBOOK */}
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="transition hover:text-white"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-[24px] w-[24px] fill-current"
//                   aria-hidden="true"
//                 >
//                   <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
//                 </svg>
//               </a>


//               {/* INSTAGRAM */}
//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="transition hover:text-white"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-[24px] w-[24px] fill-current"
//                   aria-hidden="true"
//                 >
//                   <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
//                 </svg>
//               </a>


//               {/* LINKEDIN */}
//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="transition hover:text-white"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-[24px] w-[24px] fill-current"
//                   aria-hidden="true"
//                 >
//                   <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
//                 </svg>
//               </a>

//             </div>
//           </div>
//         </div>


   
//         {/* BOTTOM FOOTER */}
        

//         <div className="border-t border-gray-500">

//           <div className="mx-auto flex max-w-[1710px] flex-col items-center justify-center gap-4 px-10 py-2 text-[15px] md:flex-row md:gap-14">

//             <p>
//               © 2026 - Crest Technologies. All rights reserved
//             </p>

//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-gray-300"
//             >
//               Privacy Policy
//             </Link>

//           </div>
//         </div>
//       </footer>


    
//       {/* FLOATING WHATSAPP BUTTON */}


//       <a
//         href="https://wa.me/977XXXXXXXXXX"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="fixed bottom-4 right-4 z-50 transition-transform duration-200 hover:scale-105"
//       >

//         <svg
//           viewBox="0 0 32 32"
//           className="h-[80px] w-[80px]"
//           aria-hidden="true"
//         >

//           {/* WHITE OUTER BUBBLE */}
//           <path
//             fill="white"
//             d="M16 2.5C8.55 2.5 2.5 8.43 2.5 15.74c0 2.57.75 5.07 2.17 7.21L2 30l7.3-2.39a13.7 13.7 0 0 0 6.7 1.74c7.45 0 13.5-5.93 13.5-13.61C29.5 8.43 23.45 2.5 16 2.5Z"
//           />


//           {/* GREEN INNER BUBBLE */}
//           <path
//             fill="#25D366"
//             d="M16 5.1c5.98 0 10.84 4.77 10.84 10.64 0 5.87-4.86 10.65-10.84 10.65-2.11 0-4.15-.6-5.91-1.73l-.65-.42-4.08 1.34 1.48-3.86-.47-.68a10.4 10.4 0 0 1-1.87-5.3C4.5 9.87 9.36 5.1 16 5.1Z"
//           />


//           {/* WHITE PHONE */}
//           <path
//             fill="white"
//             d="M12.02 9.8c-.27-.62-.55-.63-.81-.64h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.54 3.88 6.15 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.12-.87 2.42-1.7.3-.83.3-1.54.21-1.69-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.04-2.45-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.55-2.89-1.77-1.07-.94-1.79-2.1-2-2.46-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.79-1.95-1.11-2.75Z"
//           />

//         </svg>
//       </a>
//     </>
//   );
// }