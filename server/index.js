import express from "express";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", (req, res) => {
  const { name, email, nachricht } = req.body;

  if (!name || !email || !nachricht) {
    return res.status(400).json({ ok: false, error: "missing_fields" });
  }

  console.log("Kontaktanfrage", {
    name: req.body.name,
    firma: req.body.firma || "",
    telefon: req.body.telefon || "",
    email: req.body.email,
    leistung: req.body.leistung || "",
    nachricht: req.body.nachricht,
  });

  return res.json({ ok: true });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
