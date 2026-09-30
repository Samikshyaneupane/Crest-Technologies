// "use client";

// import Link from "next/link";

// const navLinks = [
//   { label: "Courses", href: "/courses" },
//   {label: "Corporate", href: "/corporate" },
//   {label:"College to Corporate",href:"/college-to-corporate"},
//   {label:"About Us",href:"/about"},
//   {label:"Contact",href:"/contact"},
 
// ]


// export const Navbar = () => {
//   return (
//     <header className="w-full bg-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link href="/" className="flex flex-col leading-none">
//           <span className="text-2xl font-extrabold tracking-tight text-[#0B1F5C]">
//             CREST
//           </span>
//           <span className="text-sm font-medium text-[#3B7DDE]">
//             Technologies
//           </span>
//         </Link>

       
//         <nav className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => {
//             const isActive = link.label === "College to Corporate";
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={
//                   isActive
//                     ? "text-[15px] font-medium text-[#3B7DDE]"
//                     : "text-[15px] font-medium text-[#333333] hover:text-[#3B7DDE] transition-colors"
//                 }
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* CTA button */}
//         <Link
//           href="/registration"
//           className="rounded-md bg-[#F5C518] px-6 py-3 text-[15px] font-semibold text-[#0B1F5C] hover:brightness-95 transition"
//         >
//           Registration Form
//         </Link>
//       </div>
//     </header>
//   );
// };