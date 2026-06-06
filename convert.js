const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertLocalHtmlToPdf() {
    const inputFile = process.argv[2];

    if (!inputFile) {
        console.error('Usage: node script.js <input.html>');
        process.exit(1);
    }

    const htmlPath = path.resolve(process.cwd(), inputFile);

    if (!fs.existsSync(htmlPath)) {
        console.error(`File not found: ${htmlPath}`);
        process.exit(1);
    }

    const outputFile = path.join(
        path.dirname(htmlPath),
        path.basename(htmlPath, path.extname(htmlPath)) + '.pdf'
    );

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
        path: outputFile,
        format: 'A4',
        printBackground: true,
        margin: { top: '20px', bottom: '20px' }
    });

    await browser.close();
    console.log(`PDF created: ${outputFile}`);
}

convertLocalHtmlToPdf();
