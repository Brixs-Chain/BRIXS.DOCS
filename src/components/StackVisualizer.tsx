"use client";
import React from 'react';
import { Database, Zap, Shield, Blocks, CheckCircle2, ArrowRight } from 'lucide-react';

export function StackVisualizer() {
  const steps = [
    { icon: <Database className="w-5 h-5 text-black" />, title: "EIP-4337 RPC Payload" },
    { icon: <Zap className="w-5 h-5 text-black" />, title: "Native EVM Execution" },
    { icon: <Shield className="w-5 h-5 text-black" />, title: "DPoS Sequencer Ordering" },
    { icon: <Blocks className="w-5 h-5 text-black" />, title: "ZK-SNARK Prover Engine" },
    { icon: <CheckCircle2 className="w-5 h-5 text-black" />, title: "Rollup Finality (~12s)" }
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
            <ArrowRight className="w-3 h-3" /> Transaction Flow
          </div>
          <div className="text-xs text-gray-500 font-mono">TPS: ~2,500 (Testnet)</div>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-10 bottom-[-16px] w-[2px] bg-gray-200 z-0" />
              )}
              
              <div className="relative z-10 flex items-center bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:border-black transition-colors cursor-default group">
                <div className="w-10 h-10 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
                  {step.icon}
                </div>
                <div className="ml-4 font-bold text-sm text-gray-900">
                  {step.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
          <div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Status</div>
            <div className="text-sm font-mono font-bold text-black">Testnet Active</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Network</div>
            <div className="text-sm font-mono font-bold text-black">Brixs Testnet</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Latency</div>
            <div className="text-sm font-mono font-bold text-black">~2s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
