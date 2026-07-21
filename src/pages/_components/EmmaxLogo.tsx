import logo from "../../assets/logo.png";

export default function EmmaxLogo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large" | "small";
}) {
  const scale =
    size === "large" ? 1.4 : size === "small" ? 0.75 : 1;

  const logoHeight = Math.round(55 * scale);

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="EMMAX"
        style={{
          height: `${logoHeight}px`,
          width: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
