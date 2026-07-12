export default function EmmaxLogo({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' | 'small' }) {
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;
  const iconSize = Math.round(44 * scale);
  const textSize = Math.round(20 * scale);
  const subSize = Math.round(9 * scale);
  const gap = Math.round(10 * scale);

  return (
    <div className={`flex items-center ${className}`} style={{ gap }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="emmaxGrad" x1="0" y1="44" x2="44" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>
          <linearGradient id="emmaxGrad2" x1="0" y1="0" x2="44" y2="44">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M22 2 L38 11.5 L38 32.5 L22 42 L6 32.5 L6 11.5 Z" stroke="url(#emmaxGrad)" strokeWidth="1.5" fill="none" opacity="0.6" filter="url(#glow)" />
        <path d="M22 8 L34 22 L22 36 L10 22 Z" stroke="url(#emmaxGrad2)" strokeWidth="1" fill="url(#emmaxGrad)" fillOpacity="0.12" />
        <line x1="13" y1="31" x2="28" y2="14" stroke="url(#emmaxGrad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
        <polyline points="21,13 29,13 29,21" stroke="url(#emmaxGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />
        <line x1="9" y1="24" x2="15" y2="24" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="9" y1="27.5" x2="13" y2="27.5" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>
      <div className="flex flex-col leading-none" style={{ gap: 3 }}>
        <span style={{ fontSize: textSize, fontWeight: 900, letterSpacing: '0.16em', background: 'linear-gradient(90deg, #ffffff 0%, #c4b5fd 50%, #67e8f9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>EMMAX</span>
        <span style={{ fontSize: subSize, fontWeight: 600, letterSpacing: '0.28em', background: 'linear-gradient(90deg, #06B6D4, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>ECOM-COACH</span>
      </div>
    </div>
  );
}