import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brixs Docs | Developer API, CLI & Architecture Reference",
  description: "Complete developer documentation for Brixs Chain — the zero-gas Layer 2 blockchain. API references, smart contract guides, cross-chain interoperability, wallet infrastructure, and CLI tooling.",
  keywords: "Brixs docs, blockchain API, layer 2 documentation, zero gas blockchain, EVM developer docs, smart contract guide, cross chain bridge, account abstraction docs, Brixs CLI, web3 developer, #BrixsChain #Web3 #Blockchain #Layer2 #DeveloperDocs #SmartContracts #API #EVM #Crypto",
  authors: [{ name: "Brixs Chain", url: "https://www.brixs.space" }],
  creator: "Brixs Chain",
  publisher: "Brixs Chain",
  metadataBase: new URL("https://docs.brixs.space"),
  alternates: { canonical: "https://docs.brixs.space/" },
  openGraph: {
    title: "Brixs Developer Docs | Zero-Gas L2 Blockchain",
    description: "🛠️ Build on Brixs Chain — the zero-gas Layer 2. Full API refs, smart contract guides, CLI docs, cross-chain interop, and wallet infrastructure. Start building in minutes.",
    url: "https://docs.brixs.space",
    siteName: "Brixs Documentation",
    images: [{ url: "https://www.brixs.space/full_logo_black_on_white.png", width: 1200, height: 630, alt: "Brixs Chain Developer Documentation" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrixsChain",
    creator: "@BrixsChain",
    title: "Brixs Developer Docs | Zero-Gas L2 Blockchain",
    description: "🛠️ Build on Brixs Chain! Full API, CLI, smart contract & cross-chain docs. Zero gas. Instant finality. #BrixsChain #Web3 #Blockchain #DeveloperDocs #Layer2 #Crypto #EVM",
    images: [{ url: "https://www.brixs.space/full_logo_black_on_white.png", alt: "Brixs Chain Documentation" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
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
