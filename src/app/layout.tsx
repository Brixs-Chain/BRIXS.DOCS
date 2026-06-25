import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brixs Documentation",
  description: "Detailed API, CLI, and Architecture Docs for Brixs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <TopNav />
        <div className="flex pt-16 h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
