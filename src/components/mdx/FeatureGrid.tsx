import React from 'react';

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {children}
    </div>
  );
}
