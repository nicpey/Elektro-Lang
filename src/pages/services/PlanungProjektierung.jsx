import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";

export const PlanungProjektierung = () => {
  usePageMeta({
    title: "Planung & Projektierung Affoltern am Albis | Elektro Lang GmbH",
    description:
      "Elektroplanung und Projektierung für Neubau und Umbau in Affoltern am Albis. Elektro Lang GmbH begleitet Sie von der Idee bis zur Ausführung.",
    canonical: "https://www.langelektro.ch/dienstleistungen/planung-projektierung",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/dienstleistungen">Dienstleistungen</Link> - Planung &amp; Projektierung
          </div>
          <h1>Planung &amp; Projektierung</h1>
          <p className="lead">
            Wir legen die Elektroarbeit so an, dass es auf der Baustelle passt: klare Wege,
            saubere Installationen, keine Überraschungen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Was wir anbieten</h2>
            <ul>
              <li>Elektroplanung für Neubau, Umbau und Sanierungen</li>
              <li>Erstellung von Konzepten und Leistungsverzeichnissen</li>
              <li>Koordination mit Architekten, Bauherren und Fachplanern</li>
              <li>Budget- und Terminplanung für Elektrogewerke</li>
              <li>Begleitung bis zur Abnahme und Inbetriebnahme</li>
            </ul>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Vorteile für Sie</h3>
              <ul>
                <li>Klare Kostenstruktur und saubere Ausschreibungen</li>
                <li>Weniger Schnittstellen, weniger Risiko</li>
                <li>Normgerechte Planung nach aktuellen Standards</li>
                <li>Effizienter Bauablauf durch präzise Koordination</li>
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
              <p>Kick-off, Bedarfsanalyse und Definition der Ziele.</p>
            </div>
            <div className="card reveal">
              <strong>Planung</strong>
              <p>Konzept, Detailplanung und Kostenrahmen.</p>
            </div>
            <div className="card reveal">
              <strong>Umsetzung &amp; Service</strong>
              <p>Baubegleitung, Abnahme und Dokumentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Elektroplanung aus der Praxis</h2>
              <p>Wir planen so, dass die Ausführung sauber und termingerecht klappt.</p>
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
