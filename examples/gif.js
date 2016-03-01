'use strict';

const fs = require('fs');
const GIFDecoder = require('gif-stream/decoder');
const concat = require('concat-frames');
const convert = require('../convert');
const console = require('../console');

fs.createReadStream('rick.gif')
  .pipe(new GIFDecoder)
  .pipe(concat(function(frames) {
  	let frame = 0;
  	process.stdout.write(console.CON_CLEAR_SCREEN);
  	setInterval(() => {
			const input = { width: frames[frame].width, height: frames[frame].height, data: frames[frame].pixels };
			const output = { width: 120, height: 40 };
			process.stdout.write(console.CON_SET_POSITION_TOP_LEFT);
			process.stdout.write(convert.convert24bppImageToText(input, output));
			if (frame++ >= frames.length-1) {
				frame = 0;
			}
  	}, 25);

  }));
