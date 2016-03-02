'use strict';

exports.CON_HIDE_CURSOR = '\x1b[?25l';
exports.CON_SHOW_CURSOR = '\x1b[?25h';
exports.CON_SET_POSITION_TOP_LEFT = '\x1b[1;1H';
exports.CON_CLEAR_SCREEN = '\x1b[2J';

exports.ALPHABET_DEFAULT = ' .,-:;oO0$#@NM';
exports.ALPHABET_DEFAULT2 = ' .:;io0NM';
exports.ALPHABET_MINIMAL = ' .o0';
exports.ALPHABET_ABC = 'ixndONM';
exports.ALPHABET_123 = '17235980';

exports.getScreenWidth = function() {
  return process.stdout.columns || 120;
}

exports.getScreenHeight = function() {
  return process.stdout.rows || 50;
}
