"use client"
import { useEffect } from 'react';
import HoverIcon from './HoverIcon';

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginTop: '40px' }}>
      <HoverIcon
        src="https://cdn.lordicon.com/rjzlnunf.json"
        baseColors="primary:#e11d48,secondary:#fbbf24"
        hoverColors="primary:#0ea5e9,secondary:#38bdf8"
      />
      <HoverIcon
        src="https://cdn.lordicon.com/slkvcfos.json"
        baseColors="primary:#4ade80,secondary:#facc15"
        hoverColors="primary:#f97316,secondary:#f43f5e"
      />
      <HoverIcon
        src="https://cdn.lordicon.com/dklbhvrt.json"
        baseColors="primary:#6366f1,secondary:#c084fc"
        hoverColors="primary:#14b8a6,secondary:#06b6d4"
      />
    </div>
  );
}
