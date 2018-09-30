'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (nextTick) {
  if (typeof nextTick !== 'function') return;
  _vue2.default.nextTick(nextTick);
};

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }