import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export const Dienstleistungen = () => {
  usePageMeta({
    title: "Dienstleistungen | Elektro Lang GmbH",
    description:
      "Elektro Lang GmbH bietet Elektro-Dienstleistungen für private und gewerbliche Kunden in Affoltern am Albis und dem Raum Zürich.",
    canonical: "https://www.langelektro.ch/dienstleistungen",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container hero-grid">
          <div className="reveal">
            <div className="eyebrow">Leistungen von Installation bis Unterhalt</div>
            <h1>Unsere Elektroarbeiten</h1>
            <p className="lead">
              Für Privatkunden und Gewerbe: Installation, Service und Unterhalt. Direkt aus der
              Region, sauber umgesetzt.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link className="btn btn-primary" to="/kontakt">
                Offerte anfragen
              </Link>
            </div>
          </div>
          <div className="hero-card reveal">
            <h3>Unser Versprechen</h3>
            <ul>
              <li>Klare Offerten und nachvollziehbare Kosten</li>
              <li>Saubere Montage und geprüfte Abnahme</li>
              <li>Ein Ansprechpartner von Anfang bis Ende</li>
              <li>Service und Unterhalt auch nach dem Abschluss</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="grid-3">
            <div className="card service-card has-image service-card--emob reveal">
              <h3>E-Mobilität &amp; Wallboxen</h3>
              <p>Individuelle Ladeinfrastruktur für Einfamilienhaus, Tiefgarage oder KMU.</p>
              <Link to="/dienstleistungen/e-mobilitaet-wallboxen">Zur Detailseite</Link>
            </div>
            <div className="card service-card has-image service-card--reparaturen reveal">
              <h3>Reparaturen &amp; Service</h3>
              <p>Störungen, Wartung und Sicherheitsprüfungen nach NIV.</p>
              <Link to="/dienstleistungen/reparaturen-service">Zur Detailseite</Link>
            </div>
            <div className="card service-card has-image service-card--netzwerk reveal">
              <h3>Netzwerk &amp; Internet</h3>
              <p>Zuverlässige Netzwerktechnik für Homeoffice, Gewerbe und Verwaltungen.</p>
              <Link to="/dienstleistungen/netzwerk-internet">Zur Detailseite</Link>
            </div>
            <div className="card service-card has-image service-card--planung reveal">
              <h3>Planung &amp; Projektierung</h3>
              <p>Ganzheitliche Elektroplanung für Neubau, Umbau und Sanierungen.</p>
              <Link to="/dienstleistungen/planung-projektierung">Zur Detailseite</Link>
            </div>
            <div className="card service-card has-image service-card--beleuchtung reveal">
              <h3>Beleuchtung &amp; Lichtkonzepte</h3>
              <p>Effizientes Lichtdesign mit hoher Aufenthaltsqualität.</p>
              <Link to="/dienstleistungen/beleuchtung-lichtkonzepte">Zur Detailseite</Link>
            </div>
            <div className="card service-card has-image service-card--zutritt reveal">
              <h3>Zutrittskontrolle &amp; Gegensprechanlagen</h3>
              <p>Mehr Sicherheit und Komfort für Privat- und Gewerbeobjekte.</p>
              <Link to="/dienstleistungen/zutrittskontrolle-gegensprechanlagen">Zur Detailseite</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Bereit für den nächsten Schritt?</h2>
              <p>Wir kommen vorbei, prüfen die Lage und erstellen eine klare Offerte.</p>
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
