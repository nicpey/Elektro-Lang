import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";

export const BeleuchtungLichtkonzepte = () => {
  usePageMeta({
    title: "Beleuchtung & Lichtkonzepte Affoltern am Albis | Elektro Lang GmbH",
    description:
      "Beleuchtung und Lichtkonzepte für Wohn- und Gewerbeflächen in Affoltern am Albis. Elektro Lang GmbH plant effiziente und stimmige Lichtlösungen.",
    canonical: "https://www.langelektro.ch/dienstleistungen/beleuchtung-lichtkonzepte",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/dienstleistungen">Dienstleistungen</Link> - Beleuchtung &amp; Lichtkonzepte
          </div>
          <h1>Beleuchtung &amp; Lichtkonzepte</h1>
          <p className="lead">
            Gute Beleuchtung ist praktisch: hell dort, wo gearbeitet wird, und sauber montiert.
            Wir setzen Lichtlösungen um, die passen und sparen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Was wir anbieten</h2>
            <ul>
              <li>Innen- und Aussenbeleuchtung für Wohn- und Gewerbeobjekte</li>
              <li>LED-Umrüstungen und energieeffiziente Lichtsysteme</li>
              <li>Lichtplanung für Arbeitsplätze, Verkaufsflächen und Treppenhäuser</li>
              <li>Bewegungsmelder, Steuerungen und Szenen</li>
              <li>Wartung und Optimierung bestehender Beleuchtungsanlagen</li>
            </ul>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Vorteile für Sie</h3>
              <ul>
                <li>Hochwertiges Licht mit optimaler Farbwiedergabe</li>
                <li>Reduzierte Betriebskosten dank effizienter Technik</li>
                <li>Mehr Sicherheit durch klare Ausleuchtung</li>
                <li>Individuelle Lichtstimmungen für jeden Raum</li>
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
              <p>Analyse der Nutzung, Lichtbedarf und Budget.</p>
            </div>
            <div className="card reveal">
              <strong>Planung</strong>
              <p>Lichtberechnung, Auswahl der Leuchten und Steuerung.</p>
            </div>
            <div className="card reveal">
              <strong>Umsetzung &amp; Service</strong>
              <p>Installation, Einregulierung und regelmässiger Unterhalt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Licht sauber installiert</h2>
              <p>Wir setzen Ihre Beleuchtung effizient und zuverlässig um.</p>
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
