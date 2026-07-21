export default function EmmaxLogo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large" | "small";
}) {
  const scale =
    size === "large" ? 1.35 : size === "small" ? 0.75 : 1;

  const height = Math.round(58 * scale);

  return (
    <img
      src="/logo.png"
      alt="EMMAX"
      className={className}
      style={{
        height: `${height}px`,
        width: "auto",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
}