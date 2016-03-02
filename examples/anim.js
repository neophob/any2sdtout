'use strict';

const convert = require('../convert');
const cons = require('../console');
const WIDTH = 90*2;
const HEIGHT = 40*2;

const output = { width: cons.getScreenWidth(), height: cons.getScreenHeight() };
let data = [WIDTH*HEIGHT*4]
let tmp=0;

process.stdout.write(cons.CON_CLEAR_SCREEN);
process.stdout.write(cons.CON_HIDE_CURSOR);

setInterval(() => {
	let ofs=0;
	for (let y = 0; y < HEIGHT; y++) {
		for (let x = 0; x < WIDTH; x++) {
			data[ofs++] = (tmp)^x*y+x;
			data[ofs++] = (tmp)^x*y+x;
			data[ofs++] = (tmp)^x*y+y;
			data[ofs++] = 0;
		}
	}
	tmp++;
	process.stdout.write(cons.CON_SET_POSITION_TOP_LEFT);
	process.stdout.write(
		convert.convert32bppImageToText({ width: WIDTH, height: HEIGHT, data: data }, output, {alphabet: ' .:oO0'})
	);
}, 15);
