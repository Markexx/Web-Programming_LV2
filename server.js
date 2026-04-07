const express = require('express');
const app = express();

// posluživanje statičkih datoteka iz "public"
app.use(express.static('public'));

// fallback ruta
app.get('/', (req, res) => {
    res.send("Ili obican tekst ako nema HTML datoteke.");
});

app.listen(3000, () => {
    console.log("Server pokrenut na http://localhost:3000");
});