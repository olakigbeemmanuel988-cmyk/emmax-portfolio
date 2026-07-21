import logo from "../../assets/logo.png";
export default function EmmaxLogo({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' | 'small' }) {
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;
  const iconSize = Math.round(44 * scale);
  const textSize = Math.round(20 * scale);
  const subSize = Math.round(9 * scale);
  const gap = Math.round(10 * scale);

  return (
    <div className={`flex items-center ${className}`} style={{ gap }}>
  
    <img
      <img
  src={logo}
  alt="EMMAX Logo"
      style={{
        height: `${iconSize}px`,
        width: "auto"
      }}
    />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontSize: textSize, fontWeight: 800, background: 'linear-gradient(90deg, #a78bfa, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '0.05em' }}>EMMAX</span>
        <span style={{ fontSize: subSize, color: '#94a3b8', letterSpacing: '0.15em', fontWeight: 600 }}>ECOM-COACH</span>
      </div>
    </div>
  );
}
