"use client";
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function Keyword({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children?.toString() || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span 
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm font-mono text-black cursor-pointer hover:bg-gray-200 transition-colors"
      title="Click to copy"
    >
      {children}
      {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3 text-gray-500" />}
    </span>
  );
}
