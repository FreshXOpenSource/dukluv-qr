var fs = require('./../lib/fs.js');
var qr = require('./../lib/qr.js');
var text = 'I \u2764\uFE0F QR code!';
var text = 'https://yadi.sk/d/FuzPeEg-QyaZN?qr';
var ec_level = 'Q';

fs.writeFileSync('./qr.svg',qr.image(text, { type: 'svg', ec_level: ec_level}).join());
fs.writeFileSync('./qr.eps',qr.image(text, { type: 'eps', ec_level: ec_level}).join());
fs.writeFileSync('./qr.pdf',qr.image(text, { type: 'pdf', ec_level: ec_level}).join());
