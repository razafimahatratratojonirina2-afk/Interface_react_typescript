import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-block rounded-full border border-pink-500/40 bg-pink-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ff3d81]">
      {children}
    </span>
  );
}