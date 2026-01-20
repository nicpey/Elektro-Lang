import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Elektro Lang GmbH",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zürichstrasse 88",
    addressLocality: "Affoltern am Albis",
    postalCode: "8910",
    addressCountry: "CH",
  },
  telephone: "+41 44 761 82 82",
  email: "info@langelektro.ch",
  areaServed: "Kanton Zürich",
  url: "https://www.langelektro.ch",
  foundingDate: "1984",
};

export const Home = () => {
  usePageMeta({
    title: "Elektro Lang GmbH | Elektriker in Affoltern am Albis",
    description:
      "Elektro Lang GmbH: Ihr Elektriker in Affoltern am Albis. Zuverlässige Elektroinstallationen, Service und E-Mobilität im Raum Zürich seit 1984.",
    keywords:
      "Elektriker Affoltern am Albis, Elektroinstallationen Zürich, Elektro Lang GmbH, Elektriker Zürich",
    canonical: "https://www.langelektro.ch/",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <div className="eyebrow">Seit 1984 in Affoltern am Albis</div>
            <h1>Elektro Lang GmbH - Ihr Elektriker in Affoltern am Albis</h1>
            <p className="lead">
              Einfach elektrisch. Saubere Elektroarbeit seit 1984. Wir installieren, erweitern
              und reparieren für Privatkunden, KMU und Verwaltungen im Raum Zürich.
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link className="btn btn-primary" to="/kontakt">
                Offerte anfragen
              </Link>
              <Link className="btn btn-outline" to="/dienstleistungen">
                Dienstleistungen entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Elektro Lang GmbH - regional, verlässlich, handwerklich</h2>
            <p>
              Als Elektrikerbetrieb in Affoltern am Albis kennen wir die Region und die
              Anforderungen unserer Kundschaft. Seit über 40 Jahren setzen wir
              Elektroinstallationen in Wohnhäusern, Gewerbeimmobilien und öffentlichen Bauten um
              - sauber montiert, sicher geprüft und termingerecht abgeschlossen.
            </p>
            <p>Unser Anspruch: saubere Arbeit, klare Absprachen, zuverlässige Termine.</p>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Warum Kunden uns wählen</h3>
              <div className="usp-list">
                <div className="usp-item">
                  <span>01</span>
                  <div className="usp-text">
                    <strong>Über 40 Jahre Erfahrung</strong>
                    <p>Erprobte Lösungen und fundiertes Fachwissen.</p>
                  </div>
                </div>
                <div className="usp-item">
                  <span>02</span>
                  <div className="usp-text">
                    <strong>Persönlicher Kontakt</strong>
                    <p>Direkter Kontakt, klare Antworten, pragmatische Lösungen.</p>
                  </div>
                </div>
                <div className="usp-item">
                  <span>03</span>
                  <div className="usp-text">
                    <strong>Saubere Ausführung</strong>
                    <p>Präzise Montage, termingerecht und dokumentiert.</p>
                  </div>
                </div>
                <div className="usp-item">
                  <span>04</span>
                  <div className="usp-text">
                    <strong>Regional verwurzelt</strong>
                    <p>Kurze Wege, schnelle Reaktionszeiten, persönliche Betreuung.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "700px" }}>
            <h2>Unsere Dienstleistungen</h2>
            <p className="lead">
              Von Steckdose bis Zählerplatz - wir übernehmen Elektroinstallationen im Grossraum
              Zürich.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            <div className="card service-card has-image service-card--emob reveal">
              <h3>E-Mobilität &amp; Wallboxen</h3>
              <p>Installation und Abnahme von Wallboxen in Wohn- und Gewerbeimmobilien.</p>
              <Link to="/dienstleistungen/e-mobilitaet-wallboxen">Mehr erfahren</Link>
            </div>
            <div className="card service-card has-image service-card--reparaturen reveal">
              <h3>Reparaturen &amp; Service</h3>
              <p>Störungen beheben, Anlagen prüfen, Unterhalt sichern - schnell und unkompliziert.</p>
              <Link to="/dienstleistungen/reparaturen-service">Mehr erfahren</Link>
            </div>
            <div className="card service-card has-image service-card--netzwerk reveal">
              <h3>Netzwerk &amp; Internet</h3>
              <p>Strukturierte Netzwerke, WLAN-Konzepte und sichere Anschlüsse für KMU.</p>
              <Link to="/dienstleistungen/netzwerk-internet">Mehr erfahren</Link>
            </div>
            <div className="card service-card has-image service-card--planung reveal">
              <h3>Planung &amp; Projektierung</h3>
              <p>Elektroplanung mit Blick auf Budget, Zeitplan und nachhaltige Betriebskosten.</p>
              <Link to="/dienstleistungen/planung-projektierung">Mehr erfahren</Link>
            </div>
            <div className="card service-card has-image service-card--beleuchtung reveal">
              <h3>Beleuchtung &amp; Lichtkonzepte</h3>
              <p>Effiziente Lichtlösungen für Wohnräume, Büro und Aussenbereiche.</p>
              <Link to="/dienstleistungen/beleuchtung-lichtkonzepte">Mehr erfahren</Link>
            </div>
            <div className="card service-card has-image service-card--zutritt reveal">
              <h3>Zutrittskontrolle &amp; Gegensprechanlagen</h3>
              <p>Sichere Zutrittssysteme und moderne Sprechanlagen für Wohn- und Gewerbebauten.</p>
              <Link to="/dienstleistungen/zutrittskontrolle-gegensprechanlagen">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Haben Sie ein Projekt? Wir packen es an.</h2>
              <p>
                Wir kommen vorbei, prüfen die Situation und setzen sauber um - mit klarer
                Offerte und verlässlichen Terminen.
              </p>
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
