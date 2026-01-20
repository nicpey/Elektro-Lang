import { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export const Kontakt = () => {
  const [status, setStatus] = useState("idle");

  usePageMeta({
    title: "Kontakt | Elektro Lang GmbH",
    description:
      "Kontaktieren Sie die Elektro Lang GmbH in Affoltern am Albis. Telefon, E-Mail, Adresse und Kontaktformular für Ihre Anfrage.",
    keywords: "Elektriker Affoltern Kontakt, Elektro Lang Telefonnummer",
    canonical: "https://www.langelektro.ch/kontakt",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("pending");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Anfrage fehlgeschlagen");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (error) {
      console.error("Senden fehlgeschlagen", error);
      setStatus("error");
    }
  };

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="eyebrow">Schnelle Erreichbarkeit, kurze Wege</div>
          <h1>Kontakt</h1>
          <p className="lead">
            Kurzer Draht statt lange Wege. Rufen Sie an, schreiben Sie eine E-Mail oder senden
            Sie uns Ihre Anfrage über das Formular.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="contact-card contact-card--map reveal">
            <h2>Direktkontakt</h2>
            <p>
              <strong>Elektro Lang GmbH</strong>
              <br />
              Zürichstrasse 88, 8910 Affoltern am Albis
            </p>
            <p>
              Telefon: <a href="tel:+41447618282">+41 44 761 82 82</a>
              <br />
              E-Mail: <a href="mailto:info@langelektro.ch">info@langelektro.ch</a>
            </p>
            <h3>Öffnungszeiten</h3>
            <p>
              Mo - Do: 08:00 - 11:30 Uhr und 13:30 - 16:30 Uhr
              <br />
              Freitag: 08:00 - 11:30 Uhr
            </p>
            <div className="map-embed" style={{ marginTop: "1.5rem" }}>
              <iframe
                title="Google Maps - Elektro Lang GmbH"
                src="https://www.google.com/maps?q=Z%C3%BCrichstrasse%2088%2C%208910%20Affoltern%20am%20Albis&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="contact-card reveal">
            <h2>Kontaktformular</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Vorname Nachname"
                    required
                    onInvalid={(event) =>
                      event.target.setCustomValidity("Bitte geben Sie Ihren Namen ein.")
                    }
                    onInput={(event) => event.target.setCustomValidity("")}
                  />
                </div>
                <div>
                  <label htmlFor="firma">Firma (optional)</label>
                  <input id="firma" name="firma" type="text" placeholder="Unternehmen" />
                </div>
              </div>
              <div className="form-grid">
                <div>
                  <label htmlFor="telefon">Telefon</label>
                  <input id="telefon" name="telefon" type="tel" placeholder="+41 ..." />
                </div>
                <div>
                  <label htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@beispiel.ch"
                    required
                    onInvalid={(event) =>
                      event.currentTarget.setCustomValidity(
                        "Bitte geben Sie eine gültige E-Mail-Adresse ein (mit @)."
                      )
                    }
                    onInput={(event) => event.currentTarget.setCustomValidity("")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="leistung">Thema</label>
                <select id="leistung" name="leistung">
                  <option>Offerte Elektroinstallation</option>
                  <option>E-Mobilität / Wallbox</option>
                  <option>Reparaturen &amp; Service</option>
                  <option>Beleuchtung</option>
                  <option>Netzwerk &amp; Internet</option>
                  <option>Andere Anfrage</option>
                </select>
              </div>
              <div>
                <label htmlFor="nachricht">Nachricht</label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage."
                  required
                  onInvalid={(event) =>
                    event.target.setCustomValidity("Bitte geben Sie eine Nachricht ein.")
                  }
                  onInput={(event) => event.target.setCustomValidity("")}
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === "pending"}>
                {status === "pending" ? "Senden..." : "Jetzt Kontakt aufnehmen"}
              </button>
              {status === "success" ? (
                <p style={{ marginTop: "0.8rem", color: "var(--accent)" }}>
                  Vielen Dank! Wir melden uns schnellstmöglich.
                </p>
              ) : null}
              {status === "error" ? (
                <p style={{ marginTop: "0.8rem", color: "var(--accent)" }}>
                  Leider gab es ein Problem. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                </p>
              ) : null}
              <p style={{ fontSize: "0.9rem", color: "var(--steel)", marginTop: "0.8rem" }}>
                Mit dem Absenden akzeptieren Sie die Datenschutzerklärung.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <h2>Ihre Anfrage - schnell geklärt</h2>
              <p>
                Wir melden uns innerhalb eines Arbeitstages und klären die wichtigsten Punkte.
              </p>
            </div>
            <div className="reveal">
              <div className="card">
                <h3>Unsere Region</h3>
                <p>
                  Affoltern am Albis, Zürich, Knonau, Mettmenstetten, Bonstetten und Umgebung im
                  Kanton Zürich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
