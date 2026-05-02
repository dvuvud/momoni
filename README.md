# Momoni

Instruktioner för att hantera och generera övningsmaterial till Momoni-passet.

## Filstruktur
* **`ddos/`, `deepfake/`, `domain/`, `ransomware/`, `worm/`, `phishing/`**: HTML-källfiler för respektive övningsmodul.
* **`convert.js`**: Node.js-skript som konverterar HTML till PDF via Puppeteer.

## Installation
Kör följande kommando i terminalen för att installera nödvändiga paket:
```bash
npm install
```

## Generera PDF-filer
För att skapa en PDF av en specifik övning, kör:
```bash
node convert.js <sökväg/till/fil.html>
```

Exempel:
```bash
node convert.js ddos/serverlogg.html
```
En PDF skapas då i samma mapp som HTML-filen.

