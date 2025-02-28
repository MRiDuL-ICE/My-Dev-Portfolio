import { useEffect, useState } from "react";

export default function CursorGlowEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
      style={{ mixBlendMode: "overlay" }} // Makes the glow blend naturally
    >
      {/* Cursor Glow */}
      <div
        className="fixed w-52 h-52 rounded-full bg-gradient-to-r from-[#E36DE0] to-[#0B89C1] opacity-90 blur-[80px] transition-transform duration-30"
        style={{
          left: position.x - 96 + "px",
          top: position.y - 96 + "px",
          boxShadow: "0 0 120px #E36DE0, 0 0 150px #0B89C1", // Extra glow
        }}
      ></div>
    </div>
  );
}
