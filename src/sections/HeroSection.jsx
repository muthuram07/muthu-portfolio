import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import MyImage from "../assets/myphoto1.png";
import { contact } from "../data/content.js";
import { vars } from "../styles/theme.css";

const roles = [
  "Java Developer",
  "Software Developer",
  "Creative Thinker",
];

const expertise = [
  "Spring Boot",
  "React",
  "Microservices",
  "Azure Fundamentals",
];

const floatingCards = [
  {
    title: "Backend-first",
    description: "Scalable APIs, clean architecture, reliable delivery",
    position: {
      top: "4%",
      right: "-2%",
    },
  },
  {
    title: "Frontend polish",
    description: "Responsive interfaces with motion and clarity",
    position: {
      bottom: "10%",
      left: "-4%",
    },
  },
];

const panelStyle = {
  background: "rgba(9, 14, 28, 0.72)",
  border: `1px solid ${vars.colors.slateGrayTransparent}`,
  boxShadow: `0 18px 80px rgba(5, 5, 5, 0.55), 0 0 0 1px ${vars.colors.indigoGlow}`,
  backdropFilter: "blur(18px)",
};

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const step = isDeleting ? 45 : 95;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentRole) {
          window.setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        const nextText = currentRole.slice(0, Math.max(displayText.length - 1, 0));
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((current) => current + 1);
        }
      }
    }, step);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "calc(100vh - 88px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "3rem",
        alignItems: "center",
        padding: "5rem clamp(1.5rem, 4vw, 4rem) 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          maxWidth: "680px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            width: "fit-content",
            padding: "0.7rem 1rem",
            borderRadius: "999px",
            color: vars.colors.pureWhite,
            background: "rgba(99, 102, 241, 0.12)",
            border: `1px solid ${vars.colors.indigoGlow}`,
            fontSize: "0.92rem",
          }}
        >
          <Sparkles size={16} color={vars.colors.cyberTurquoise} />
          Building resilient products with code, systems, and design discipline
        </div>

        <div style={{ display: "grid", gap: "1rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              margin: 0,
              fontSize: "clamp(3rem, 7vw, 5.9rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
              color: vars.colors.pureWhite,
            }}
          >
            Muthuraman builds
            <span
              style={{
                display: "block",
                marginTop: "0.45rem",
                color: vars.colors.cyberTurquoise,
                textShadow: `0 0 28px ${vars.colors.cyberTurquoiseTransparent}`,
              }}
            >
              {displayText || roles[0]}
              <span style={{ color: vars.colors.electricIndigo }}>|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            style={{
              margin: 0,
              maxWidth: "60ch",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.8,
              color: vars.colors.slateGray,
            }}
          >
            I am an early-career developer focused on building clean, reliable web
            applications with Java, Spring Boot, and React. I care about writing
            maintainable code, learning fast, and creating user experiences that
            feel clear, useful, and polished.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {expertise.map((item) => (
            <span
              key={item}
              style={{
                padding: "0.7rem 1rem",
                borderRadius: "999px",
                border: `1px solid ${vars.colors.slateGrayTransparent}`,
                background: "rgba(15, 23, 42, 0.55)",
                color: vars.colors.pureWhite,
                fontSize: "0.92rem",
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.95rem 1.35rem",
              borderRadius: "999px",
              color: vars.colors.obsidian,
              background: `linear-gradient(135deg, ${vars.colors.cyberTurquoise}, #8b5cf6)`,
              fontWeight: 700,
              boxShadow: "0 16px 36px rgba(34, 211, 238, 0.22)",
            }}
          >
            Photography
            <ArrowRight size={18} />
          </a>

          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.95rem 1.35rem",
              borderRadius: "999px",
              color: vars.colors.pureWhite,
              background: "rgba(255, 255, 255, 0.04)",
              border: `1px solid ${vars.colors.slateGrayTransparent}`,
            }}
          >
            Download Resume
            <Download size={18} />
          </a>

          <div style={{ display: "flex", gap: "0.7rem" }}>
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
                  width: "48px",
                  height: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  color: vars.colors.pureWhite,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${vars.colors.slateGrayTransparent}`,
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        style={{
          position: "relative",
          minHeight: "520px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {floatingCards.map((card) => (
          <motion.div
            key={card.title}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              ...panelStyle,
              position: "absolute",
              width: "min(240px, 44vw)",
              padding: "1rem 1.1rem",
              borderRadius: "20px",
              zIndex: 2,
              ...card.position,
            }}
          >
            <div
              style={{
                color: vars.colors.pureWhite,
                fontWeight: 700,
                marginBottom: "0.35rem",
              }}
            >
              {card.title}
            </div>
            <div style={{ color: vars.colors.slateGray, lineHeight: 1.6 }}>
              {card.description}
            </div>
          </motion.div>
        ))}

        <div
          style={{
            ...panelStyle,
            width: "min(420px, 100%)",
            padding: "1.4rem",
            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-35% auto auto 10%",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(34, 211, 238, 0.16)",
              filter: "blur(24px)",
            }}
          />

          <div
            style={{
              position: "relative",
              display: "grid",
              gap: "1.2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    color: vars.colors.pureWhite,
                    fontSize: "1.3rem",
                    fontWeight: 700,
                  }}
                >
                  Developer Profile
                </div>
                <div style={{ color: vars.colors.slateGray, marginTop: "0.25rem" }}>
                  Based in Tamil Nadu, building for the web
                </div>
              </div>
              <div
                style={{
                  padding: "0.45rem 0.8rem",
                  borderRadius: "999px",
                  background: "rgba(34, 211, 238, 0.12)",
                  color: vars.colors.cyberTurquoise,
                  fontWeight: 700,
                  fontSize: "0.82rem",
                }}
              >
                Open to roles
              </div>
            </div>

            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: `1px solid ${vars.colors.slateGrayTransparent}`,
                background:
                  "linear-gradient(180deg, rgba(99, 102, 241, 0.18), rgba(15, 23, 42, 0.35))",
              }}
            >
              <img
                src={MyImage}
                alt="Muthuraman portrait"
                style={{
                  width: "100%",
                  height: "360px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "0.85rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "18px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${vars.colors.slateGrayTransparent}`,
                }}
              >
                <div style={{ color: vars.colors.slateGray, marginBottom: "0.35rem" }}>
                  Current focus
                </div>
                <div style={{ color: vars.colors.pureWhite, fontWeight: 600 }}>
                  Cloud-ready Java systems
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "18px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${vars.colors.slateGrayTransparent}`,
                }}
              >
                <div style={{ color: vars.colors.slateGray, marginBottom: "0.35rem" }}>
                  Preferred stack
                </div>
                <div style={{ color: vars.colors.pureWhite, fontWeight: 600 }}>
                  Java, Spring Boot, React
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
