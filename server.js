const express = require('express');
const app = express();

// OBAVEZNO za Railway
const PORT = process.env.PORT || 3000;

// serviranje statičkih datoteka
app.use(express.static('public'));

// fallback (nije obavezno)
app.get('/', (req, res) => {
    res.send('Pozdrav sa Railway servera!');
});

app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`);
});