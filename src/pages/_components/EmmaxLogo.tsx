export default function EmmaxLogo({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' | 'small' }) {
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;
  const iconSize = Math.round(44 * scale);
  const textSize = Math.round(20 * scale);
  const subSize = Math.round(9 * scale);
  const gap = Math.round(10 * scale);

  return (
    <div className={`flex items-center ${className}`} style={{ gap }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="10" fill="url(#logoGrad)" />
        <path d="M10 14h24M10 22h24M10 30h14" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="30" r="5" fill="url(#accentGrad)" />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="27" y1="25" x2="37" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontSize: textSize, fontWeight: 800, background: 'linear-gradient(90deg, #a78bfa, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '0.05em' }}>EMMAX</span>
        <span style={{ fontSize: subSize, color: '#94a3b8', letterSpacing: '0.15em', fontWeight: 600 }}>ECOM-COACH</span>
      </div>
    </div>
  );
}
