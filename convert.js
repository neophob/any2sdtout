'use strict';

const cons = require('./console');

const getAveragePlanar = exports.getAveragePlanar32bpp = function(ofsx, ofsy, transform, data, bpp) {
	let value = 0;
	let entries = 0;
	const startX = parseInt(0.5 + ofsx * transform.width);
	const startY = parseInt(0.5 + ofsy * transform.height);

	for (let x = startX; x < startX + transform.width; x++) {
		for (let y = startY; y < startY + transform.height; y++) {
			const ofs = bpp*(y*transform.originalwidth+x)
			//convert rgb to greyscale
			value += (0.2989 * data[ofs  ] + 0.587 * data[ofs+1] + 0.114 * data[ofs+2]) & 0xff;
			entries++;
		}
	}
	return value / entries;
};

const calculateAreaPerPixel = exports.calculateAreaPerPixel = function(input, output) {
	const inputWidth = input.width / output.width;
	const inputHeight = input.height / output.height;
	return { originalwidth: input.width, originalheight: input.height, width: inputWidth, height: inputHeight };
}

const convertImageToText = function(input, output, options, bpp) {
	if (!input || !input.data || input.data.length !== input.height*input.width*bpp) {
		throw new Error('invalid input data, make sure data is '+ bpp +'bpp');
	}
	if (!output || !output.width || !output.height) {
		throw new Error('invalid output data');
	}
	const delim = options && options.delimiter || '\n';
	const alphabet = options && options.alphabet || cons.ALPHABET_DEFAULT;
	const alphabetMapper = 256 / (alphabet.length);
	const transform = calculateAreaPerPixel(input, output);
	let buffer = '';

	for (let y = 0; y < output.height; y++) {
		for (let x = 0; x < output.width; x++) {
			let pixel = getAveragePlanar(x, y, transform, input.data, bpp);
			pixel = parseInt((pixel+0.5) / alphabetMapper, 10) || 0;
			buffer += alphabet[pixel & 0xff];
		}
		buffer += delim;
	}
	return buffer.substring(0, buffer.length-1);
};

exports.convert32bppImageToText = function(input, output, options) {
  return convertImageToText(input, output, options, 4);
};

exports.convert24bppImageToText = function(input, output, options) {
  return convertImageToText(input, output, options, 3);
};
