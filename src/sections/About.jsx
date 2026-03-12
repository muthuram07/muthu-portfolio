import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Code2,
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { about } from '../data/content.js';
import { vars } from '../styles/theme.css';

const aboutCards = [
  { title: 'Education', icon: GraduationCap, text: about[0] },
  { title: 'Focus', icon: Code2, text: about[1] },
  { title: 'Technical Exposure', icon: Sparkles, text: about[2] },
  { title: 'Growth', icon: BookOpen, text: about[3] },
  { title: 'Roots', icon: MapPin, text: about[4] },
  { title: 'Life Beyond Code', icon: Compass, text: about[5] },
];

const cardAccent = [
  'linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(34, 211, 238, 0.02))',
  'linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(99, 102, 241, 0.02))',
  'linear-gradient(135deg, rgba(14, 165, 233, 0.16), rgba(14, 165, 233, 0.02))',
  'linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(56, 189, 248, 0.02))',
  'linear-gradient(135deg, rgba(59, 130, 246, 0.14), rgba(59, 130, 246, 0.02))',
  'linear-gradient(135deg, rgba(45, 212, 191, 0.14), rgba(45, 212, 191, 0.02))',
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '5rem clamp(1.5rem, 4vw, 4rem)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'grid',
          gap: '1.2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '0.4rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1.4rem',
              borderRadius: '999px',
              border: `1px solid ${vars.colors.indigoGlow}`,
              background: 'rgba(99, 102, 241, 0.1)',
              color: vars.colors.pureWhite,
              fontSize: '0.92rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            About
          </div>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.15rem',
          }}
        >
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
                  padding: '1.45rem',
                  minHeight: index === 0 || index === 3 ? '260px' : '220px',
                  background: 'rgba(8, 12, 22, 0.84)',
                  border: `1px solid ${vars.colors.slateGrayTransparent}`,
                  boxShadow: '0 18px 50px rgba(0, 0, 0, 0.24)',
                  backdropFilter: 'blur(18px)',
                  display: 'grid',
                  gap: '1rem',
                  alignContent: 'start',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: cardAccent[index],
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: vars.colors.cyberTurquoise,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${vars.colors.slateGrayTransparent}`,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div
                    style={{
                      width: '42px',
                      height: '1px',
                      background: `linear-gradient(90deg, ${vars.colors.cyberTurquoise}, transparent)`,
                    }}
                  />
                </div>

                <div
                  style={{
                    position: 'relative',
                    color: vars.colors.pureWhite,
                    fontSize: '1.05rem',
                    fontWeight: 700,
                  }}
                >
                  {card.title}
                </div>

                <p
                  style={{
                    position: 'relative',
                    margin: 0,
                    color: vars.colors.slateGray,
                    lineHeight: 1.82,
                    fontSize: '1rem',
                  }}
                >
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
