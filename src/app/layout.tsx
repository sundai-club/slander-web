import "~/styles/globals.css";

import localFont from "next/font/local";

import { type Metadata } from "next";

const myFont = localFont({
  src: "../../public/fonts/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-woff",
});

export const metadata: Metadata = {
  title: "Chucklebox",
  description:
    "In the age of digital memories, SundAI Club has developed a unique solution to capture those fleeting moments of hilarity that often slip away after long conversations or game nights. Visit Chuckle Box, our latest AI hack that turns hours of audio into a curated list of the funniest moments.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${myFont.variable} bg-[#C3F0C0]`}>
      <body className="h-full bg-gradient-to-b from-[#D1EDE0] to-[#7ABF8C]">
        {children}
      </body>
    </html>
  );
}
