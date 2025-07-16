import express from "express";
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Ora che il server è in ascolto sulla porta 3000, puoi:
// - Creare delle route per gestire richieste HTTP (GET, POST, ecc.)
// - Collegare un database per gestire dati persistenti
// - Implementare middleware per autenticazione, logging, parsing JSON, ecc.
// - Esporre API RESTful per il frontend Angular
// Esempio di route di base:
app.get("/", (_req, res) => {
    res.send("Benvenuto! Il server Express è attivo sulla porta 3000.");
});
