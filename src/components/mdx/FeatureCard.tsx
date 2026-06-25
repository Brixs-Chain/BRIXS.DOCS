import React from 'react';
import * as Icons from 'lucide-react';

export function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  const IconComponent = (Icons as any)[icon] || Icons.HelpCircle;
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors border border-gray-200">
        <IconComponent className="w-6 h-6 text-black group-hover:text-blue-600 transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 !mt-0">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed !mb-0">{description}</p>
    </div>
  );
}
