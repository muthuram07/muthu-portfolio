import HeroImage from "../components/HeroCharacter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const words = [
    "Muthuraman",
    "a Java Developer",
    "a Problem-Solver",
    "an Innovator",
    "a Visionary",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 120;
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, words]);

  return (
    <section
      style={{
        minHeight: "500px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #f9fafb, #eef2ff)", // matches page
        fontFamily: "'Fira Code', monospace", // hacker font
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        {/* Hacker typing effect */}
        <motion.h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#1f2937",
            textShadow: "0 0 12px rgba(0,0,0,0.2)",
          }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Hi, I’m <span style={{ color: "#0ea5e9" }}>{displayText}</span>
          <span style={{ color: "#0ea5e9" }}>|</span>
        </motion.h1>

        {/* Clean professional tagline */}
        <motion.p
          style={{
            fontSize: "1.25rem",
            color: "#4b5563",
            marginTop: "1rem",
            lineHeight: "1.8",
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          Crafting <span style={{ color: "#0ea5e9" }}>innovative solutions</span> with{" "}
          <span style={{ color: "#0ea5e9" }}>clean code</span> and{" "}
          <span style={{ color: "#0ea5e9" }}>creative vision</span>.
        </motion.p>
      </div>

      <div
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
        aria-label="Scroll to About section"
      >
        <HeroImage />
      </div>
    </section>
  );
}
