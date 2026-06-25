"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ items }: { items: any[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 h-full border-r border-gray-200 bg-white overflow-y-auto shrink-0">
        <nav className="p-4 space-y-1">
          {items.map((item, i) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href);
            return (
              <div key={i}>
                {item.items ? (
                  <div className="mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 px-2">{item.title}</h4>
                    <div className="space-y-1">
                      {item.items.map((sub: any, j: number) => (
                        <Link 
                          key={j} 
                          href={sub.href}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${pathname === sub.href ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-black'}`}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-black'}`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar Accordion */}
      <div className="md:hidden border-b border-gray-200 bg-gray-50 w-full shrink-0">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-full flex items-center justify-between p-4 font-semibold text-gray-800 focus:outline-none"
        >
          <span className="flex items-center gap-2">
            <Menu size={20} className="text-gray-500" />
            Documentation Menu
          </span>
          {isOpen ? <ChevronDown size={20} className="text-gray-500" /> : <ChevronRight size={20} className="text-gray-500" />}
        </button>
        {isOpen && (
          <nav className="p-4 space-y-1 bg-white border-t border-gray-200">
            {items.map((item, i) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href);
              return (
                <div key={i}>
                  {item.items ? (
                    <div className="mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 px-2">{item.title}</h4>
                      <div className="space-y-1">
                        {item.items.map((sub: any, j: number) => (
                          <Link 
                            key={j} 
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors ${pathname === sub.href ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-black'}`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors ${isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-black'}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </>
  );
}
