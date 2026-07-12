"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Send, Menu, X } from "lucide-react";
import { useState } from "react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tabs = [
    { name: "Platform", href: "https://docs.brixs.space/platform/overview" },
    { name: "Wallets", href: "https://docs.brixs.space/wallets/overview" },
    { name: "Smart Contracts", href: "https://docs.brixs.space/smart-contracts/overview" },
    { name: "Cross-chain", href: "https://docs.brixs.space/cross-chain/overview" },
    { name: "API Reference", href: "https://docs.brixs.space/api/overview" },
    { name: "Infrastructure", href: "https://docs.brixs.space/infrastructure/overview" },
    { name: "Main Website", href: "https://brixs.space" },
    { name: "Block Explorer", href: "https://testnet.brixs.space" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/full_logo_black_on_white.png" alt="Brixs" width={150} height={40} className="w-auto h-8" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative group hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search docs..." 
            className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64 transition-all"
          />
        </div>
        <div className="hidden sm:flex items-center gap-4 text-gray-400">
          <a href="https://x.com/Brixschain" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" title="X (Twitter)">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href="https://t.me/Brixschain" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors" title="Telegram">
            <Send className="w-5 h-5" />
          </a>
          <a href="https://github.com/Brixs-Chain" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" title="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
        <button 
          className="lg:hidden text-gray-500 hover:text-black transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg lg:hidden flex flex-col gap-4">
          <div className="relative group sm:hidden">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="pl-9 pr-4 py-2 w-full bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <nav className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <Link 
                key={tab.name} 
                href={tab.href} 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-black rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6 px-4 pt-4 border-t border-gray-100 text-gray-400 sm:hidden">
            <a href="https://x.com/Brixschain" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" title="X (Twitter)">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="https://t.me/Brixschain" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors" title="Telegram">
              <Send className="w-5 h-5" />
            </a>
            <a href="https://github.com/Brixs-Chain" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" title="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
