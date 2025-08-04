// components/HoverIcon.js
import { useEffect, useRef } from 'react';

export default function HoverIcon({ src, baseColors, hoverColors, size = 120 }) {
  const iconRef = useRef(null);

  useEffect(() => {
    const icon = iconRef.current;

    if (!icon) return;

    icon.setAttribute('colors', baseColors);

    const handleMouseEnter = () => icon.setAttribute('colors', hoverColors);
    const handleMouseLeave = () => icon.setAttribute('colors', baseColors);

    icon.addEventListener('mouseenter', handleMouseEnter);
    icon.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      icon.removeEventListener('mouseenter', handleMouseEnter);
      icon.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [baseColors, hoverColors]);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger="hover"
      style={{ width: `${size}px`, height: `${size}px`, cursor: 'pointer' }}
    ></lord-icon>
  );
}
