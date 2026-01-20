import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/dienstleistungen", label: "Dienstleistungen" },
  { to: "/über-uns", label: "Über uns" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/kontakt", label: "Kontakt" },
];

const initReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) {
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
};

export const Layout = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    initReveal();
    setIsNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>Elektro Lang GmbH - Elektriker in Affoltern am Albis</div>
          <div>
            <a href="tel:+41447618282">+41 44 761 82 82</a> -
            <a href="mailto:info@langelektro.ch">info@langelektro.ch</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" to="/">
            <img src="/assets/logo.png" alt="Elektro Lang GmbH Logo" />
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Menü öffnen"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${isNavOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img src="/assets/logo.png" alt="Elektro Lang GmbH Logo" style={{ height: "46px" }} />
            <p>
              Elektro Lang GmbH<br />
              Zürichstrasse 88<br />
              8910 Affoltern am Albis
            </p>
          </div>
        <div>
          <strong>Kontakt</strong>
          <div className="footer-links footer-links--stack">
            <a href="tel:+41447618282">+41 44 761 82 82</a>
            <a href="mailto:info@langelektro.ch">info@langelektro.ch</a>
            <Link to="/kontakt">Kontaktformular</Link>
          </div>
          <div style={{ marginTop: "0.8rem", fontSize: "0.9rem", color: "#b7b7b7" }}>
            Mo - Do: 08:00 - 11:30 Uhr<br />
            und 13:30 - 16:30 Uhr<br />
            Freitag: 08:00 - 11:30 Uhr
          </div>
        </div>
        <div>
          <strong>Leistungen</strong>
          <div className="footer-links footer-links--stack">
            <Link to="/dienstleistungen/e-mobilitaet-wallboxen">E-Mobilität &amp; Wallboxen</Link>
            <Link to="/dienstleistungen/reparaturen-service">Reparaturen &amp; Service</Link>
            <Link to="/dienstleistungen/netzwerk-internet">Netzwerk &amp; Internet</Link>
            <Link to="/dienstleistungen/planung-projektierung">Planung &amp; Projektierung</Link>
            <Link to="/dienstleistungen/beleuchtung-lichtkonzepte">Beleuchtung &amp; Lichtkonzepte</Link>
            <Link to="/dienstleistungen/zutrittskontrolle-gegensprechanlagen">
              Zutrittskontrolle &amp; Gegensprechanlagen
            </Link>
          </div>
        </div>
        <div>
          <strong>Rechtliches</strong>
          <div className="footer-links footer-links--stack">
            <Link to="/agb">AGB</Link>
            <Link to="/datenschutz">Datenschutzerklärung</Link>
          </div>
        </div>
        </div>
        <div className="container legal">
          <div>(c) 2024 Elektro Lang GmbH. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </>
  );
};
