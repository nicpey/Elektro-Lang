import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";

export const NetzwerkInternet = () => {
  usePageMeta({
    title: "Netzwerk & Internet Affoltern am Albis | Elektro Lang GmbH",
    description:
      "Netzwerk- und Internetlösungen für Privatkunden und KMU in Affoltern am Albis. Elektro Lang GmbH plant sichere und stabile Netzwerke.",
    canonical: "https://www.langelektro.ch/dienstleistungen/netzwerk-internet",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/dienstleistungen">Dienstleistungen</Link> - Netzwerk &amp; Internet
          </div>
          <h1>Netzwerk &amp; Internet</h1>
          <p className="lead">
            Saubere Verkabelung, stabile Verbindungen, ordentlich dokumentiert. Für Privatkunden,
            KMU und Verwaltungen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Was wir anbieten</h2>
            <ul>
              <li>Strukturierte Netzwerkverkabelung (Kupfer und Glasfaser)</li>
              <li>WLAN-Ausleuchtung und Access-Point-Planung</li>
              <li>Netzwerk-Schränke, Patchfelder und Messprotokolle</li>
              <li>IP-Telefonie und Netzwerkanschlüsse für Arbeitsplätze</li>
              <li>Fehlersuche, Optimierung und Erweiterung bestehender Anlagen</li>
            </ul>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Vorteile für Sie</h3>
              <ul>
                <li>Zuverlässige Datenverbindungen im gesamten Gebäude</li>
                <li>Sichere Infrastruktur für sensible Unternehmensdaten</li>
                <li>Skalierbare Lösungen für wachsende Anforderungen</li>
                <li>Professionelle Messprotokolle und Dokumentation</li>
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
              <p>Bedarfsermittlung, Begehung und Netzwerkanalyse.</p>
            </div>
            <div className="card reveal">
              <strong>Planung</strong>
              <p>Verkabelungskonzept, Materialplanung und Terminierung.</p>
            </div>
            <div className="card reveal">
              <strong>Umsetzung &amp; Service</strong>
              <p>Installation, Messung, Inbetriebnahme und laufender Support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Netzwerk sauber umgesetzt</h2>
              <p>Wir installieren und prüfen Ihr Netzwerk in Affoltern am Albis.</p>
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
