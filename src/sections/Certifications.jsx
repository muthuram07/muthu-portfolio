export default function Certifications() {
  const directions = ['up', 'down', 'left', 'right'];
  return (
    <section style={{ padding: '4rem 2rem' }} id="certifications">
      <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Certifications</h2>
      <div
        style={{
          marginTop: '2rem',
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          alignItems: 'start',
        }}
      >
        {certifications.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <AnimatedCard direction={directions[i % directions.length]}>
              <div
                style={{
                  height: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // 👈 Changed to push button to bottom
                }}
              >
                <div>
                  <h3 style={{ fontWeight: '600', fontSize: '1.1rem', color: '#111827' }}>{c.name}</h3>
                  <p className={styles.subtext}>{c.provider}</p>
                  <p
                    style={{
                      marginTop: '0.5rem',
                      fontSize: '0.9rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                    className={styles.subtext}
                  >
                    {c.description}
                  </p>
                </div>

                {/* 👈 Added View Certificate Button */}
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.6rem 1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
                >
                  View Certificate →
                </div>
              </div>
            </AnimatedCard>
          </a>
        ))}
      </div>
    </section>
  );
}