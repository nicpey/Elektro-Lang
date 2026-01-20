import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export const UeberUns = () => {
  usePageMeta({
    title: "Über uns | Elektro Lang GmbH",
    description:
      "Elektro Lang GmbH ist ein erfahrenes Elektrounternehmen in Affoltern am Albis. Seit 1984 steht der Betrieb für Qualität, Verlässlichkeit und Regionalität.",
    keywords: "Elektrounternehmen Affoltern, Elektriker mit Erfahrung Zürich",
    canonical: "https://www.langelektro.ch/über-uns",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="eyebrow">Familiengeführt, lokal verankert</div>
          <h1>Über uns</h1>
          <p className="lead">
            Elektro Lang GmbH steht seit 1984 für saubere Elektroarbeit, klare Absprachen und
            verlässliche Termine im Kanton Zürich.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>Unsere Geschichte</h2>
            <p>
              Unsere Geschichte begann 1984 mit der Gründung einer Filiale der Elektro Dudli
              Zürich. Dölf Lang führte die Filiale in Affoltern a/A, bis er sich 1996 von Dudli
              abspaltete und der Firma seinen eigenen Namen verlieh. 2004 übernahm der langjährige
              Mitarbeiter Christian Zollinger die GmbH.
            </p>
            <p>
              Christian Zollinger führt die GmbH mit viel Herzblut und Innovation und sorgt für
              einen prompten Service und qualitativ hochstehende Elektroinstallationen. Bekanntlich
              ist ja eine Firma immer so gut, wie ihre Mitarbeiter. Deshalb legen wir Wert auf gut
              ausgebildete und motivierte Mitarbeiter.
            </p>
          </div>
          <div className="reveal">
            <div className="card">
              <h3>Geschäftsinhaber</h3>
              <p>
                <strong>Christian Zollinger</strong>
              </p>
              <p>
                Als Inhaber und Ansprechpartner ist er nah am Auftrag und achtet auf saubere
                Ausführung.
              </p>
              <h3>Unser Team</h3>
              <p>Erfahren, eingespielt und verlässlich - vom Projektleiter bis zum Monteur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="grid-3">
            <div className="card reveal">
              <h3>Qualität</h3>
              <p>Saubere Ausführung, klare Dokumentation und Normtreue.</p>
            </div>
            <div className="card reveal">
              <h3>Verlässlichkeit</h3>
              <p>Termintreue, klare Kommunikation und ehrliche Einschätzung.</p>
            </div>
            <div className="card reveal">
              <h3>Regionalität</h3>
              <p>Kurze Wege und enge Zusammenarbeit mit lokalen Partnern.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "700px" }}>
            <h2>Unser Team</h2>
            <p className="lead">
              Eingespielt, praktisch, lösungsorientiert - so arbeiten wir auf der Baustelle.
            </p>
          </div>
          <div className="team-grid" style={{ marginTop: "2.5rem" }}>
            <div className="team-card reveal">
              <img src="/assets/team/MA1.jpg" alt="Teammitglied" />
            </div>
            <div className="team-card reveal">
              <img src="/assets/team/MA2.jpg" alt="Teammitglied" />
            </div>
            <div className="team-card reveal">
              <img src="/assets/team/MA3.jpg" alt="Teammitglied" />
            </div>
            <div className="team-card reveal">
              <img src="/assets/team/MA4.jpg" alt="Teammitglied" />
            </div>
            <div className="team-card reveal">
              <img src="/assets/team/MA5.jpg" alt="Teammitglied" />
            </div>
            <div className="team-card reveal">
              <img src="/assets/team/MA6.jpg" alt="Teammitglied" />
            </div>
            <div className="team-card reveal">
              <img src="/assets/team/MA7.jpg" alt="Teammitglied" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Elektroarbeit mit Erfahrung in Zürich</h2>
              <p>Wir setzen Ihr Projekt in Affoltern am Albis und Umgebung sauber um.</p>
            </div>
            <Link className="btn btn-primary" to="/kontakt">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
