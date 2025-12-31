export default function Nav() {
  return (
    <nav className="nav">
      {/* Logo / Brand */}
      <a
        href="https://muthuraman.framer.website"
        className="brand"
      >
        M.R.
      </a>

      {/* Navigation Buttons */}
      <div className="nav-links">
        {["About", "Projects", "Skills", "Certifications", "Resume"].map(
          (item) => (
            <a
              key={item}
              href={
                item === "Resume"
                  ? "https://drive.google.com/file/d/10o0OAMmTLDV5Nuj27DjlviyJvRFMJeue/view?usp=sharing"
                  : `#${item.toLowerCase()}`
              }
              target={item === "Resume" ? "_blank" : undefined}
              rel={item === "Resume" ? "noopener noreferrer" : undefined}
              className="nav-link"
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
}

