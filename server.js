const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Postavljanje EJS-a
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Posluživanje statičkih datoteka iz "public"
app.use(express.static('public'));

// Početna ruta
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // po potrebi
});

// Ruta za galeriju
app.get('/slike', (req, res) => {
    const folderPath = path.join(__dirname, 'public', 'images');
    const files = fs.readdirSync(folderPath);

    const images = files
        .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
        .map((file, index) => ({
            url: `/images/${file}`,
            id: `slika${index + 1}`,
            title: `Slika ${index + 1}`
        }));

    res.render('slike', { images });
});

// Pokretanje servera
app.listen(3000, () => {
    console.log("Server pokrenut na http://localhost:3000");
});