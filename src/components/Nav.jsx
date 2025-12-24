export default function Nav() {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9fafb, #eef2ff)", // match page bg
      }}
    >
      {/* Logo / Brand */}
      <a
        href="https://muthuraman.framer.website" // redirect to portfolio site
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          color: "#1f2937",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        M.R.
      </a>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "1rem" }}>
        {["About", "Projects", "Skills", "Certifications", "Resume"].map(
          (item) => (
            <a
              key={item}
              href={
                item === "Resume"
                  ? "https://drive.google.com/file/d/1EEO8RF_6gII9gyvI1Zct6_s_MA-VbRQC/view?usp=sharing"
                  : `#${item.toLowerCase()}`
              }
              target={item === "Resume" ? "_blank" : undefined}
              rel={item === "Resume" ? "noopener noreferrer" : undefined}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontWeight: "500",
                fontSize: "1rem",
                textDecoration: "none",
                color: "#1f2937",
                background: "linear-gradient(135deg, #f9fafb, #eef2ff)", // tile matches page bg
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0ea5e9"; // light blue accent
                e.currentTarget.style.color = "#1e3a8a"; // dark blue text
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(14,165,233,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #f9fafb, #eef2ff)";
                e.currentTarget.style.color = "#1f2937";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
