import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";

export const EMobilitaetWallboxen = () => {
  usePageMeta({
    title: "Wallbox Installation Affoltern am Albis | Elektro Lang GmbH",
    description:
      "Wallbox Installation in Affoltern am Albis und Umgebung. Elektro Lang GmbH plant und installiert sichere Ladeinfrastruktur für E-Mobilität.",
    canonical: "https://www.langelektro.ch/dienstleistungen/e-mobilitaet-wallboxen",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/dienstleistungen">Dienstleistungen</Link> - E-Mobilität &amp; Wallboxen
          </div>
          <h1>Wallbox Installation</h1>
          <p className="lead">
            Wir installieren Ladepunkte sauber und sicher - von der einzelnen Wallbox bis zur
            Lösung für Mehrfamilienhäuser und KMU.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Was wir anbieten</h2>
            <ul>
              <li>Abklärung von Ladeleistung, Lastmanagement und Förderungen</li>
              <li>Installation von Wallboxen und Ladepunkten nach aktuellen Normen</li>
              <li>Integration in bestehende Elektroinstallationen</li>
              <li>Netzanschluss-Abklärungen und Messkonzepte</li>
              <li>Wartung und Service für langfristige Betriebssicherheit</li>
            </ul>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Vorteile für Sie</h3>
              <ul>
                <li>Sichere und normgerechte Ladeinfrastruktur</li>
                <li>Optimierte Ladezeiten und Energieverteilung</li>
                <li>Skalierbare Lösungen für wachsende Anforderungen</li>
                <li>Persönlicher Ansprechpartner von A bis Z</li>
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
              <strong>Abklärung</strong>
              <p>Bedarfsanalyse, Begehung vor Ort und Auswahl der passenden Wallbox.</p>
            </div>
            <div className="card reveal">
              <strong>Planung</strong>
              <p>Elektroplanung, Netzabklärung und Terminierung der Installation.</p>
            </div>
            <div className="card reveal">
              <strong>Umsetzung &amp; Service</strong>
              <p>Fachgerechte Montage, Inbetriebnahme, Einweisung und Wartung.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Offerte für Ihre Wallbox</h2>
              <p>Wir prüfen vor Ort und setzen die Installation sauber um.</p>
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
