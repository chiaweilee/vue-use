'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _useConfig = require('./useConfig');

var _useConfig2 = _interopRequireDefault(_useConfig);

var _useFilters = require('./useFilters');

var _useFilters2 = _interopRequireDefault(_useFilters);

var _useComponents = require('./useComponents');

var _useComponents2 = _interopRequireDefault(_useComponents);

var _useDirectives = require('./useDirectives');

var _useDirectives2 = _interopRequireDefault(_useDirectives);

var _useNextTick = require('./useNextTick');

var _useNextTick2 = _interopRequireDefault(_useNextTick);

var _useVuex = require('./useVuex');

var _useVuex2 = _interopRequireDefault(_useVuex);

var _useRouter = require('./useRouter');

var _useRouter2 = _interopRequireDefault(_useRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      filters = _ref.filters,
      components = _ref.components,
      directives = _ref.directives,
      nextTick = _ref.nextTick,
      store = _ref.store,
      router = _ref.router,
      use = _ref.use;

  (0, _useConfig2.default)(config);
  (0, _useFilters2.default)(filters);
  (0, _useComponents2.default)(components);
  (0, _useDirectives2.default)(directives);
  (0, _useNextTick2.default)(nextTick);
  if (typeof use === 'function') use.call(_vue2.default, _vue2.default.use);
  var Store = (0, _useVuex2.default)(store);
  var Router = (0, _useRouter2.default)(router, Store);
  return {
    store: Store,
    router: Router
  };
};