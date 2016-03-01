'use strict';

const textMapping = ' .,-:;oO0$#@NM';

const getAveragePlanar32bpp = exports.getAveragePlanar32bpp = function(ofsx, ofsy, transform, data, bpp) {
	let value = 0;
	let entries = 0;
	const startX = parseInt(ofsx * transform.width);
	const startY = parseInt(ofsy * transform.height);

	for (let x = startX; x < startX + transform.width; x++) {
		for (let y = startY; y < startY + transform.height; y++) {
			const ofs = bpp*(y*transform.originalwidth+x)
			//convert rgb to greyscale
			value += (0.2989 * data[ofs  ] + 0.587 * data[ofs+1] + 0.114 * data[ofs+2]) & 0xff;
			entries++;
		}
	}
	return (value+0.5) / entries;
}

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
	const alphabet = options && options.alphabet || textMapping;
	const alphabetMapper = parseInt(255 / (alphabet.length-1), 10);
	const transform = calculateAreaPerPixel(input, output);
	let buffer = '';

	for (let y = 0; y < output.height; y++) {
		for (let x = 0; x < output.width; x++) {
			let pixel = getAveragePlanar32bpp(x, y, transform, input.data, bpp);
			pixel = parseInt(pixel / alphabetMapper, 10) || 0;
			buffer += alphabet[pixel & 0xff];
		}
		buffer += delim;
	}
	return buffer;
};

exports.convert32bppImageToText = function(input, output, options) {
  return convertImageToText(input, output, options, 4);
};

exports.convert24bppImageToText = function(input, output, options) {
  return convertImageToText(input, output, options, 3);
};
