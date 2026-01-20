import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Dienstleistungen } from "./pages/Dienstleistungen";
import { UeberUns } from "./pages/UeberUns";
import { Referenzen } from "./pages/Referenzen";
import { Kontakt } from "./pages/Kontakt";
import { Agb } from "./pages/Agb";
import { Datenschutz } from "./pages/Datenschutz";
import { EMobilitaetWallboxen } from "./pages/services/EMobilitaetWallboxen";
import { ReparaturenService } from "./pages/services/ReparaturenService";
import { NetzwerkInternet } from "./pages/services/NetzwerkInternet";
import { PlanungProjektierung } from "./pages/services/PlanungProjektierung";
import { BeleuchtungLichtkonzepte } from "./pages/services/BeleuchtungLichtkonzepte";
import { ZutrittskontrolleGegensprechanlagen } from "./pages/services/ZutrittskontrolleGegensprechanlagen";

const NotFound = () => (
  <section className="section">
    <div className="container">
      <h1>Seite nicht gefunden</h1>
      <p>Die gewünschte Seite existiert nicht. Bitte nutzen Sie die Navigation.</p>
    </div>
  </section>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dienstleistungen" element={<Dienstleistungen />} />
        <Route path="dienstleistungen/e-mobilitaet-wallboxen" element={<EMobilitaetWallboxen />} />
        <Route path="dienstleistungen/reparaturen-service" element={<ReparaturenService />} />
        <Route path="dienstleistungen/netzwerk-internet" element={<NetzwerkInternet />} />
        <Route path="dienstleistungen/planung-projektierung" element={<PlanungProjektierung />} />
        <Route path="dienstleistungen/beleuchtung-lichtkonzepte" element={<BeleuchtungLichtkonzepte />} />
        <Route
          path="dienstleistungen/zutrittskontrolle-gegensprechanlagen"
          element={<ZutrittskontrolleGegensprechanlagen />}
        />
        <Route path="über-uns" element={<UeberUns />} />
        <Route path="referenzen" element={<Referenzen />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="agb" element={<Agb />} />
        <Route path="datenschutz" element={<Datenschutz />} />

        <Route path="ueber-uns" element={<Navigate to="/über-uns" replace />} />
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="dienstleistungen.html" element={<Navigate to="/dienstleistungen" replace />} />
        <Route path="ueber-uns.html" element={<Navigate to="/über-uns" replace />} />
        <Route path="über-uns.html" element={<Navigate to="/über-uns" replace />} />
        <Route path="referenzen.html" element={<Navigate to="/referenzen" replace />} />
        <Route path="kontakt.html" element={<Navigate to="/kontakt" replace />} />
        <Route path="agb.html" element={<Navigate to="/agb" replace />} />
        <Route path="datenschutz.html" element={<Navigate to="/datenschutz" replace />} />
        <Route
          path="dienstleistungen/e-mobilitaet-wallboxen.html"
          element={<Navigate to="/dienstleistungen/e-mobilitaet-wallboxen" replace />}
        />
        <Route
          path="dienstleistungen/reparaturen-service.html"
          element={<Navigate to="/dienstleistungen/reparaturen-service" replace />}
        />
        <Route
          path="dienstleistungen/netzwerk-internet.html"
          element={<Navigate to="/dienstleistungen/netzwerk-internet" replace />}
        />
        <Route
          path="dienstleistungen/planung-projektierung.html"
          element={<Navigate to="/dienstleistungen/planung-projektierung" replace />}
        />
        <Route
          path="dienstleistungen/beleuchtung-lichtkonzepte.html"
          element={<Navigate to="/dienstleistungen/beleuchtung-lichtkonzepte" replace />}
        />
        <Route
          path="dienstleistungen/zutrittskontrolle-gegensprechanlagen.html"
          element={<Navigate to="/dienstleistungen/zutrittskontrolle-gegensprechanlagen" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
