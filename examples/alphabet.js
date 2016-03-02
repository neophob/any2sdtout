'use strict';

const fs = require('fs');
const convert = require('../convert');
const PNG = require('pngjs').PNG;
const cons = require('../console');

const data = fs.readFileSync('in.png');
const png = PNG.sync.read(data);

const input = { width: png.width, height: png.height, data: png.data };
const output = { width: 80, height: 30 };
process.stdout.write('\n___ALPHABET_DEFAULT:\n');
process.stdout.write(convert.convert32bppImageToText(input, output, {alphabet: cons.ALPHABET_DEFAULT}));

process.stdout.write('\n___ALPHABET_DEFAULT2:\n');
process.stdout.write(convert.convert32bppImageToText(input, output, {alphabet: cons.ALPHABET_DEFAULT2}));

process.stdout.write('\n___ALPHABET_MINIMAL:\n');
process.stdout.write(convert.convert32bppImageToText(input, output, {alphabet: cons.ALPHABET_MINIMAL}));

process.stdout.write('\n___ALPHABET_ABC:\n');
process.stdout.write(convert.convert32bppImageToText(input, output, {alphabet: cons.ALPHABET_ABC}));

process.stdout.write('\n___ALPHABET_123:\n');
process.stdout.write(convert.convert32bppImageToText(input, output, {alphabet: cons.ALPHABET_123}));
process.stdout.write('\n');
