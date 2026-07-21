import logo from "../../assets/logo.png";
export default function logo({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' | 'small' }) {
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
      style={{
        height: `${iconSize}px`,
        width: "auto"
      }}
    />
  );
}
