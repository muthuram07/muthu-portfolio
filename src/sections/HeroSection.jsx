import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import MyImage from "../assets/myphoto1.png";
import { contact } from "../data/content.js";
import { vars } from "../styles/theme.css";

const roles = [
  "Java Developer",
  "Software Developer",
  "Creative Thinker",
];

/* ── Typewriter cursor blink keyframes ── */
const cursorKeyframes = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

/* ── Gentle avatar ring rotation ── */
const ringKeyframes = `
@keyframes ring-rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
`;

/* ── Inject keyframes once ── */
if (typeof document !== "undefined") {
  const id = "__hero-keyframes";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.textContent = cursorKeyframes + ringKeyframes;
    document.head.appendChild(style);
  }
}

/* ── Stagger helper ── */
const stagger = (i) => ({ delay: 0.12 + i * 0.1, duration: 0.6, ease: "easeOut" });

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentRole) {
          window.setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        const next = currentRole.slice(0, Math.max(displayText.length - 1, 0));
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((c) => c + 1);
        }
      }
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "calc(100vh - 88px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem clamp(1.5rem, 4vw, 4rem) 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.8rem",
          maxWidth: "720px",
          textAlign: "center",
        }}
      >
        {/* ── Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={stagger(0)}
          style={{ position: "relative", width: "150px", height: "150px" }}
        >
          {/* Rotating gradient ring */}
          <div
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              padding: "3px",
              background: `conic-gradient(
                ${vars.colors.cyberTurquoise},
                ${vars.colors.electricIndigo},
                ${vars.colors.cyberTurquoise}
              )`,
              animation: "ring-rotate 6s linear infinite",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: vars.colors.obsidian,
              }}
            />
          </div>

          {/* Photo */}
          <img
            src={MyImage}
            alt="Muthuraman"
            style={{
              position: "absolute",
              inset: "0",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </motion.div>

        {/* ── Greeting line ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(1)}
          style={{
            margin: 0,
            fontSize: "1rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: vars.colors.cyberTurquoise,
            fontWeight: 600,
          }}
        >
          Hello, I'm
        </motion.p>

        {/* ── Name ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(2)}
          style={{
            margin: 0,
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: vars.colors.pureWhite,
            fontWeight: 800,
          }}
        >
          Muthuraman S
        </motion.h1>

        {/* ── Typewriter role ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(3)}
          style={{
            fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
            fontWeight: 500,
            color: vars.colors.slateGray,
            minHeight: "2em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
          }}
        >
          <span>{displayText}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              marginLeft: "2px",
              background: vars.colors.electricIndigo,
              animation: "blink 0.8s step-end infinite",
            }}
          />
        </motion.div>

        {/* ── Bio ── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(4)}
          style={{
            margin: 0,
            maxWidth: "54ch",
            fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)",
            lineHeight: 1.8,
            color: vars.colors.slateGray,
          }}
        >
          Focused on building clean, reliable web applications with Java,
          Spring Boot, and React. I care about maintainable code, fast
          learning, and creating user experiences that feel clear and polished.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(5)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.9rem",
            justifyContent: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 1.6rem",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: vars.colors.obsidian,
              background: `linear-gradient(135deg, ${vars.colors.cyberTurquoise}, ${vars.colors.electricIndigo})`,
              boxShadow: `0 8px 28px rgba(34, 211, 238, 0.22)`,
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(34, 211, 238, 0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(34, 211, 238, 0.22)";
            }}
          >
            View Projects
            <ArrowRight size={17} />
          </a>

          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 1.6rem",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: vars.colors.pureWhite,
              background: "rgba(255, 255, 255, 0.04)",
              border: `1px solid ${vars.colors.slateGrayTransparent}`,
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = vars.colors.electricIndigo;
              e.currentTarget.style.background = "rgba(99, 102, 241, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = vars.colors.slateGrayTransparent;
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
            }}
          >
            Resume
            <Download size={17} />
          </a>
        </motion.div>

        {/* ── Social Links ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(6)}
          style={{
            display: "flex",
            gap: "0.7rem",
            marginTop: "0.2rem",
          }}
        >
          {[
            { href: contact.github, label: "GitHub", icon: Github },
            { href: contact.linkedin, label: "LinkedIn", icon: Linkedin },
            { href: contact.email, label: "Email", icon: Mail },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={label}
              style={{
                width: "44px",
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                color: vars.colors.slateGray,
                background: "transparent",
                border: `1px solid ${vars.colors.slateGrayTransparent}`,
                textDecoration: "none",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = vars.colors.cyberTurquoise;
                e.currentTarget.style.borderColor = vars.colors.cyberTurquoise;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = vars.colors.slateGray;
                e.currentTarget.style.borderColor = vars.colors.slateGrayTransparent;
              }}
            >
              <Icon size={19} />
            </a>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "20px",
              height: "32px",
              borderRadius: "999px",
              border: `1.5px solid ${vars.colors.slateGray}`,
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "3px",
                height: "6px",
                borderRadius: "999px",
                background: vars.colors.slateGray,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
