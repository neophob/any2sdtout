'use strict';

const fs = require('fs');
const GIFDecoder = require('gif-stream/decoder');
const concat = require('concat-frames');
const convert = require('../convert');
const cons = require('../console');

fs.createReadStream('rick.gif')
  .pipe(new GIFDecoder)
  .pipe(concat(function(frames) {
  	let frame = 0;
  	process.stdout.write(cons.CON_HIDE_CURSOR);
    process.stdout.write(cons.CON_CLEAR_SCREEN);
    const output = { width: cons.getScreenWidth(), height: cons.getScreenHeight() };

  	setInterval(() => {
			const input = { width: frames[frame].width, height: frames[frame].height, data: frames[frame].pixels };
			process.stdout.write(cons.CON_SET_POSITION_TOP_LEFT);
			process.stdout.write(convert.convert24bppImageToText(input, output));
			if (frame++ >= frames.length-1) {
				frame = 0;
			}
  	}, 25);

  }));
