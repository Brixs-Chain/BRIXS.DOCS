"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export function AnimatedPieChart({ data = [], dataString }: { data?: any[], dataString?: string }) {
  const COLORS = ['#3b82f6', '#6366f1', '#10b981', '#f59e0b', '#ef4444'];

  let parsedData = data;
  if (dataString) {
    try {
      parsedData = JSON.parse(dataString);
    } catch (e) {
      console.error("Failed to parse AnimatedPieChart dataString", e);
    }
  }

  if (!parsedData || parsedData.length === 0) return null;

  return (
    <div className="w-full h-[400px] border border-gray-200 rounded-xl p-4 my-8 bg-gray-50">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={parsedData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {parsedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
