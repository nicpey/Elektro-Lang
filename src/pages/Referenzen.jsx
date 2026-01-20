import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export const Referenzen = () => {
  const [activeImage, setActiveImage] = useState(null);

  const referenceImages = [
    { src: "/assets/referenzen/Referenz1.jpg", alt: "Referenzprojekt 1" },
    { src: "/assets/referenzen/Referenz2.jpg", alt: "Referenzprojekt 2" },
    { src: "/assets/referenzen/Referenz3.jpg", alt: "Referenzprojekt 3" },
    { src: "/assets/referenzen/Referenz4.jpg", alt: "Referenzprojekt 4" },
    { src: "/assets/referenzen/Referenz5.jpg", alt: "Referenzprojekt 5" },
    { src: "/assets/referenzen/Referenz6.png", alt: "Referenzprojekt 6" },
    { src: "/assets/referenzen/Referenz7.jpg", alt: "Referenzprojekt 7" },
  ];

  usePageMeta({
    title: "Referenzen | Elektro Lang GmbH",
    description:
      "Referenzen der Elektro Lang GmbH: Ausgewählte Projekte aus Affoltern am Albis und dem Raum Zürich.",
    canonical: "https://www.langelektro.ch/referenzen",
  });

  return (
    <>
      <section className="hero" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="eyebrow">Auszug aus Installationen &amp; Serviceeinsätzen</div>
          <h1>Referenzen</h1>
          <p className="lead">
            Einblick in unsere Arbeit: Installationen, Serviceeinsätze und saubere
            Inbetriebnahmen im Raum Affoltern am Albis und Zürich.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reference-gallery">
            {referenceImages.map((image) => (
              <button
                key={image.src}
                type="button"
                className="reference-card reveal"
                onClick={() => setActiveImage(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            <div className="card reveal">
              <strong>Wohnungsbau, Affoltern am Albis</strong>
              <p>Komplette Elektroinstallation mit LED-Lichtkonzept und Netzwerkanschlüssen.</p>
            </div>
            <div className="card reveal">
              <strong>KMU-Büro, Zürich</strong>
              <p>Strukturierte Verkabelung, Serverrack und WLAN-Abdeckung.</p>
            </div>
            <div className="card reveal">
              <strong>Mehrfamilienhaus, Knonau</strong>
              <p>Wallbox-Installation mit Lastmanagement für mehrere Parkplätze.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Ihr Projekt realisieren</h2>
              <p>Wir setzen auch Ihr Vorhaben sauber und termingerecht um.</p>
            </div>
            <Link className="btn btn-primary" to="/kontakt">
              Offerte anfragen
            </Link>
          </div>
        </div>
      </section>
      {activeImage ? (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Schliessen"
            >
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      ) : null}
    </>
  );
};
