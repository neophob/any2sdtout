'use strict';

const fs = require('fs');
const convert = require('../convert');
const cons = require('../console');
const PNG = require('pngjs').PNG;

const data = fs.readFileSync('in.png');
const png = PNG.sync.read(data);

const input = { width: png.width, height: png.height, data: png.data };
const output = { width: cons.getScreenWidth(), height: cons.getScreenHeight()-1 };
process.stdout.write(convert.convert32bppImageToText(input, output));
//process.stdout.write(convert.convert32bppImageToText(input, output, {alphabet: ' .:0$_'}));
