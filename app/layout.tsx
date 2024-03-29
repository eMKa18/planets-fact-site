import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import { planets } from "./data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planets Fact Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <section>
            <Nav planets={planets}/>
      
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
