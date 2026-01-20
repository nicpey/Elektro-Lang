import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";

export const ZutrittskontrolleGegensprechanlagen = () => {
  usePageMeta({
    title: "Zutrittskontrolle & Gegensprechanlagen Affoltern | Elektro Lang GmbH",
    description:
      "Zutrittskontrolle und Gegensprechanlagen in Affoltern am Albis. Elektro Lang GmbH installiert sichere Zutrittssysteme für Wohn- und Gewerbeobjekte.",
    canonical: "https://www.langelektro.ch/dienstleistungen/zutrittskontrolle-gegensprechanlagen",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/dienstleistungen">Dienstleistungen</Link> - Zutrittskontrolle &amp;
            Gegensprechanlagen
          </div>
          <h1>Zutrittskontrolle &amp; Gegensprechanlagen</h1>
          <p className="lead">
            Wir installieren Sprechanlagen und Zutrittssysteme sauber und zuverlässig - für
            Wohn- und Gewerbeobjekte.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Was wir anbieten</h2>
            <ul>
              <li>Video- und Audio-Gegensprechanlagen</li>
              <li>Digitale Zutrittskontrolle mit Chip, Code oder App</li>
              <li>Integration in bestehende Tür- und Schliesssysteme</li>
              <li>Anbindung an Smart-Home oder Gebäudetechnik</li>
              <li>Wartung, Updates und Erweiterungen</li>
            </ul>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Vorteile für Sie</h3>
              <ul>
                <li>Mehr Sicherheit durch kontrollierten Zugang</li>
                <li>Komfortable Bedienung für Bewohner und Mitarbeitende</li>
                <li>Skalierbar für wachsende Anforderungen</li>
                <li>Saubere Installation und klare Einweisung</li>
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
              <p>Aufnahme der Anforderungen und Objektsituation.</p>
            </div>
            <div className="card reveal">
              <strong>Planung</strong>
              <p>Systemauswahl, Planung der Komponenten und Terminierung.</p>
            </div>
            <div className="card reveal">
              <strong>Umsetzung &amp; Service</strong>
              <p>Installation, Inbetriebnahme und laufender Unterhalt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Sauber montiert, klar erklärt</h2>
              <p>Wir richten Ihr Zutrittssystem ein und weisen Sie verständlich ein.</p>
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
