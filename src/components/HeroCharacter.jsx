import { motion } from "framer-motion";
import MyImage from "../assets/myphoto1.png";

export default function HeroCharacter() {
  return (
    <motion.div
      style={{
        width: "280px",
        height: "280px",
        margin: "auto",
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        background: "transparent", // match page background
        boxShadow: "0 0 0 0 rgba(0,0,0,0)", // default no glow
        zIndex: 1,
      }}
      whileHover={{
        boxShadow: "0 0 40px 10px rgba(0, 150, 255, 0.6)", // glowing ring
        scale: 1.08, // breakout zoom
      }}
      whileTap={{ scale: 1.15 }}
    >
      {/* Outer ring effect */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "-10px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "6px solid rgba(0,150,255,0.3)",
          boxShadow: "0 0 30px rgba(0,150,255,0.4)",
          zIndex: 0,
        }}
      />

      {/* Your image */}
      <img
        src={MyImage}
        alt="Hero Character"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          zIndex: 2,
          position: "relative",
        }}
      />
    </motion.div>
  );
}
