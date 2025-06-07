import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";

const somtypeMono = Sometype_Mono({
  variable: "--font-sometypemono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Divil Thakur | Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Divil Thakur, a passionate full-stack developer skilled in React, Next.js, MongoDB, and modern web technologies. Discover projects, skills, and professional experience.",
  icons: {
    icon: "/portfolio.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${somtypeMono.variable} antialiased overflow-x-hidden relative`}
      >
        <Gradient />
        {/* <RectangleTransition /> */}
        <StairTransition />
        <PageTransition>
          <div className="flex">
            {/* main nav  */}
            <div className="hidden xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full  max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div className="">{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
