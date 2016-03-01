const test = require('tape');
const convert = require('../convert');

test('calculateAreaPerPixel - output is smaller', function(t) {
	 //GIVEN
	 t.plan(4);
	 const input = { width: 200, height: 100 };
	 const output = { width: 100, height: 50 };

	 //WHEN
	 const result = convert.calculateAreaPerPixel(input, output);

	 //THEN
	 t.equal(result.originalwidth, 200);
	 t.equal(result.originalheight, 100);
	 t.equal(result.width, 2);
	 t.equal(result.height, 2);
});

test('calculateAreaPerPixel - output is larger', function(t) {
	 //GIVEN
	 t.plan(4);
	 const input = { width: 100, height: 50 };
	 const output = { width: 200, height: 100 };

	 //WHEN
	 const result = convert.calculateAreaPerPixel(input, output);

	 //THEN
	 t.equal(result.originalwidth, 100);
	 t.equal(result.originalheight, 50);
	 t.equal(result.width, 0.5);
	 t.equal(result.height, 0.5);
});

test('convert32bppImageToText - convert full black', function(t) {
	 //GIVEN
	 t.plan(1);
	 const input = { width: 2, height: 2, data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] };
	 const output = { width: 2, height: 2 };

	 //WHEN
	 const result = convert.convert32bppImageToText(input, output);

	 //THEN
	 t.equal(result, '  \n  \n');
});

test('convert32bppImageToText - convert full white', function(t) {
	 //GIVEN
	 t.plan(1);
	 const input = { width: 2, height: 2, data: [255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255] };
	 const output = { width: 2, height: 2 };

	 //WHEN
	 const result = convert.convert32bppImageToText(input, output);

	 //THEN
	 t.equal(result, 'MM\nMM\n');
});

test('convert32bppImageToText - convert too large value (wrap around)', function(t) {
	 //GIVEN
	 t.plan(1);
	 const input = { width: 2, height: 2, data: [2550,2550,2550,2550,2550,2550,2550,2550,2550,2550,2550,2550,2550,2550,2550,2550] };
	 const output = { width: 2, height: 2 };

	 //WHEN
	 const result = convert.convert32bppImageToText(input, output);

	 //THEN
	 t.equal(result, 'NN\nNN\n');
});

test('convert32bppImageToText - option delimiter', function(t) {
	 //GIVEN
	 t.plan(1);
	 const input = { width: 2, height: 2, data: [255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255] };
	 const output = { width: 2, height: 2 };

	 //WHEN
	 const result = convert.convert32bppImageToText(input, output, {delimiter: 'x'});

	 //THEN
	 t.equal(result, 'MMxMMx');
});

test('convert32bppImageToText - option alphabet', function(t) {
	 //GIVEN
	 t.plan(1);
	 const input = { width: 2, height: 2, data: [255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255] };
	 const output = { width: 2, height: 2 };

	 //WHEN
	 const result = convert.convert32bppImageToText(input, output, {alphabet: 'abc', delimiter: 'x'});

	 //THEN
	 t.equal(result, 'ccxccx');
});

test('convert32bppImageToText - no input parameters, should throw exception', function(t) {
	 //GIVEN
	 t.plan(1);

	 try {
		 //WHEN
	   convert.convert32bppImageToText();
	   t.fail('should throw error');
	 } catch (e) {
		 //THEN
	   t.equal(e.message, 'invalid input data, make sure data is 4bpp (alpha channel ignored)');
	 }	 
});

test('convert32bppImageToText - no output parameters, should throw exception', function(t) {
	 //GIVEN
	 t.plan(1);
	 const input = { width: 2, height: 2, data: [255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255] };

	 try {
		 //WHEN
	   convert.convert32bppImageToText(input);
	   t.fail('should throw error');
	 } catch (e) {
		 //THEN
	   t.equal(e.message, 'invalid output data');
	 }	 
});
