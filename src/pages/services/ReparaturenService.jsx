import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";

export const ReparaturenService = () => {
  usePageMeta({
    title: "Reparaturen & Service Affoltern am Albis | Elektro Lang GmbH",
    description:
      "Reparaturen, Störungsbehebung und Service für Elektroinstallationen in Affoltern am Albis und Umgebung. Schnell, sauber, zuverlässig.",
    canonical: "https://www.langelektro.ch/dienstleistungen/reparaturen-service",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/dienstleistungen">Dienstleistungen</Link> - Reparaturen &amp; Service
          </div>
          <h1>Reparaturen &amp; Service</h1>
          <p className="lead">
            Sicherung fällt, Anlage steht, Umbau braucht eine schnelle Lösung? Wir kommen vorbei
            und bringen die Installation wieder in Ordnung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Was wir anbieten</h2>
            <ul>
              <li>Störungsbehebung und Reparaturen aller Art</li>
              <li>Wartung und Unterhalt von Anlagen</li>
              <li>Sicherheitsprüfungen nach NIV</li>
              <li>Erweiterungen und Anpassungen bei Umbauten</li>
              <li>Serviceverträge für Privatkunden und KMU</li>
            </ul>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Vorteile für Sie</h3>
              <ul>
                <li>Schnelle Reaktionszeiten in der Region Affoltern am Albis</li>
                <li>Saubere Fehleranalyse und nachvollziehbare Dokumentation</li>
                <li>Fachgerechte Ausführung mit klaren Kosten</li>
                <li>Verlässliche Betreuung auch nach Abschluss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Typischer Ablauf</h2>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            <div className="card reveal">
              <strong>Aufnahme</strong>
              <p>Störungsaufnahme, Priorisierung und Terminvereinbarung.</p>
            </div>
            <div className="card reveal">
              <strong>Planung</strong>
              <p>Diagnose, Materialabklärung und klare Kostenfreigabe.</p>
            </div>
            <div className="card reveal">
              <strong>Umsetzung &amp; Service</strong>
              <p>Reparatur, Funktionskontrolle und Übergabe mit Protokoll.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Schnelle Hilfe bei Störungen</h2>
              <p>Wir sind in der Region rasch vor Ort und beheben das Problem.</p>
            </div>
            <Link className="btn btn-primary" to="/kontakt">
              Offerte anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
