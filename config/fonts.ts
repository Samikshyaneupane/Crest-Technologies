import { Poppins } from "next/font/google";

export const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
});