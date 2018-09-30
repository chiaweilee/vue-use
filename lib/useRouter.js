'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (router, Store) {
  if ((typeof router === 'undefined' ? 'undefined' : _typeof(router)) !== 'object') return;
  var routes = router.routes,
      base = router.base,
      mode = router.mode,
      beforeEach = router.beforeEach,
      afterEach = router.afterEach;

  _vue2.default.use(_vueRouter2.default);
  var Router = new _vueRouter2.default({
    base: base,
    mode: mode,
    routes: routes
  });
  if (typeof afterEach === 'function') {
    Router.beforeEach(function (to, from, next) {
      beforeEach(to, from, next, Store);
    });
  }
  if (typeof beforeEach === 'function') {
    Router.afterEach(function (to, from) {
      return afterEach(to, from, Store);
    });
  }
  return Router;
};

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }