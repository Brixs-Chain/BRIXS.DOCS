"use client";
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CodeBlock({ children, className }: any) {
  const [copied, setCopied] = useState(false);
  const text = children?.props?.children || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(text.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-black text-gray-100 my-6">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Code</div>
        <button 
          onClick={handleCopy}
          className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono">
        {children}
      </div>
    </div>
  );
}
