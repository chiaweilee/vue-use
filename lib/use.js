'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (Vue, plugins, _ref) {
  var Store = _ref.Store,
      Router = _ref.Router;

  if (!plugins) return;
  if (typeof plugins === 'function') plugins = plugins({ store: Store, router: Router });
  (0, _forEach2.default)(plugins, function (plugin) {
    if ((typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)) === 'object' && !!plugin.install) {
      Vue.use(plugin);
    } else if (Array.isArray(plugin)) {
      Vue.use.apply(Vue, plugin);
    }
  });
};

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }