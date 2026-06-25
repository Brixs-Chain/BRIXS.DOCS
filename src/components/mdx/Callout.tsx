import React from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

export function Callout({ type = 'info', title, children }: { type?: 'info' | 'warning' | 'success' | 'error', title?: string, children: React.ReactNode }) {
  const styles = {
    info: 'bg-white border-l-4 border-l-blue-500 border-y border-r border-gray-200 text-black shadow-sm',
    warning: 'bg-white border-l-4 border-l-amber-500 border-y border-r border-gray-200 text-black shadow-[4px_4px_0px_0px_rgba(245,158,11,0.2)]',
    success: 'bg-white border-l-4 border-l-green-500 border-y border-r border-gray-200 text-black shadow-sm',
    error: 'bg-red-50 border-l-4 border-l-red-600 border-y border-r border-red-100 text-red-900',
  };

  const icons = {
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    success: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
  };

  return (
    <div className={`my-6 border rounded-xl p-4 flex gap-4 ${styles[type]}`}>
      <div className="shrink-0 mt-0.5">
        {icons[type]}
      </div>
      <div>
        {title && <h5 className="font-bold mb-1 !mt-0">{title}</h5>}
        <div className="text-sm opacity-90 prose-p:!mb-0 prose-p:!mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
