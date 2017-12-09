/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'FETCH_ADMINS';
var CREATE_USER = exports.CREATE_USER = 'CREATE_USER';
var LOGIN_USER = exports.LOGIN_USER = 'LOGIN_USER';

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axios) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/users');

            case 2:
              res = _context.sent;

              dispatch({ type: FETCH_USERS, payload: res });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axios) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get('/user/profile');

            case 2:
              res = _context2.sent;

              dispatch({ type: FETCH_CURRENT_USER, payload: res });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, axios) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios.get('');

            case 3:
              res = _context3.sent;

              dispatch({ type: FETCH_ADMINS, payload: res });
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var createUser = exports.createUser = function createUser(user) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, axios) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios.post('/user/create', user);

            case 3:
              res = _context4.sent;

              dispatch({ type: CREATE_USER, payload: res });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              console.log(_context4.t0);

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 7]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var loginUser = exports.loginUser = function loginUser(user) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, axios) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.post('/auth/login', user);

            case 3:
              res = _context5.sent;

              dispatch({ type: LOGIN_USER, payload: res });
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);

              console.log(_context5.t0);

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 7]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

var _NotFound = __webpack_require__(23);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Gallery = __webpack_require__(24);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _Home = __webpack_require__(27);

var _Home2 = _interopRequireDefault(_Home);

var _AdminsList = __webpack_require__(30);

var _AdminsList2 = _interopRequireDefault(_AdminsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _Home2.default, {
    path: '/',
    exact: true
  }), _extends({}, _Gallery2.default, {
    path: '/galeria'
  }), _extends({}, _AdminsList2.default, {
    path: '/admins'
  }), _extends({}, _NotFound2.default, {
    path: ''
  })]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(13);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _render = __webpack_require__(14);

var _render2 = _interopRequireDefault(_render);

var _createStore = __webpack_require__(32);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:7777/v1'));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var routesPromises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) return new Promise(function (resolve, reject) {
      return promise.then(resolve).catch(resolve);
    });
    return null;
  });

  Promise.all(routesPromises).then(function () {
    var context = {};
    var content = (0, _render2.default)(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _server = __webpack_require__(15);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(16);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(6);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n      ' + helmet.title.toString() + '\n      ' + helmet.meta.toString() + '\n       <meta name="viewport" content="width=device-width, initial-scale=1">\n       <link rel="stylesheet" href="bundle.css">\n       <link rel="stylesheet" href="vendor.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n      </body>\n      <script src="vendor.js"></script>\n      <script src="bundle.js"></script>\n    </html>\n';
};

// Routes

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Menu = __webpack_require__(18);

var _Menu2 = _interopRequireDefault(_Menu);

var _Footer = __webpack_require__(21);

var _Footer2 = _interopRequireDefault(_Footer);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Menu2.default, { currentRoute: this.props.location.pathname }),
        _react2.default.createElement(
          'div',
          null,
          (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = {
  component: App,
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(4);

var _index = __webpack_require__(2);

__webpack_require__(19);

var _ModalCont = __webpack_require__(20);

var _ModalCont2 = _interopRequireDefault(_ModalCont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Actions


var TopMenu = function (_Component) {
  _inherits(TopMenu, _Component);

  function TopMenu() {
    _classCallCheck(this, TopMenu);

    var _this = _possibleConstructorReturn(this, (TopMenu.__proto__ || Object.getPrototypeOf(TopMenu)).call(this));

    _this.hideFixedMenu = function () {
      return _this.setState({ visible: false });
    };

    _this.showFixedMenu = function () {
      return _this.setState({ visible: true });
    };

    _this.isActive = function (path) {
      return _this.props.currentRoute === path;
    };

    _this.handleChange = function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      return _this.setState(_defineProperty({}, name, value));
    };

    _this.handleSubmit = function () {
      _this.props.createUser(_this.state);
    };

    _this.handleSubmitLogin = function () {
      _this.props.loginUser(_this.state);
    };

    _this.renderFixedMenu = function (visible) {
      if (visible) return _react2.default.createElement(
        _semanticUiReact.Menu,
        { fixed: 'top', inverted: true, size: 'large' },
        _this.renderMenuItems()
      );
      return _react2.default.createElement(
        _semanticUiReact.Container,
        null,
        _react2.default.createElement(
          _semanticUiReact.Menu,
          { inverted: true, pointing: true, secondary: true, size: 'large' },
          _this.renderMenuItems()
        )
      );
    };

    _this.renderLogin = function () {
      return _react2.default.createElement(
        _ModalCont2.default,
        { buttonText: 'Iniciar Sesion', header: 'Inicio de Sesion' },
        _react2.default.createElement(
          _semanticUiReact.Form,
          { size: 'large', onSubmit: _this.handleSubmitLogin },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            { stacked: true },
            _react2.default.createElement(_semanticUiReact.Form.Input, {
              fluid: true,
              icon: 'user',
              iconPosition: 'left',
              placeholder: 'E-mail address',
              name: 'email',
              value: _this.state.email,
              onChange: _this.handleChange
            }),
            _react2.default.createElement(_semanticUiReact.Form.Input, {
              fluid: true,
              icon: 'lock',
              iconPosition: 'left',
              placeholder: 'Password',
              type: 'password',
              name: 'password',
              value: _this.state.password,
              onChange: _this.handleChange
            }),
            _react2.default.createElement(
              _semanticUiReact.Form.Button,
              { color: 'teal', fluid: true, size: 'large' },
              'Iniciar Sesion'
            )
          )
        )
      );
    };

    _this.renderSignUp = function () {
      return _react2.default.createElement(
        _ModalCont2.default,
        { buttonText: 'Crear Cuenta', header: 'Crear Cuenta' },
        _react2.default.createElement(
          _semanticUiReact.Form,
          { onSubmit: _this.handleSubmit, size: 'large' },
          _react2.default.createElement(_semanticUiReact.Form.Input, {
            fluid: true,
            icon: 'user',
            iconPosition: 'left',
            placeholder: 'Name',
            name: 'name',
            value: _this.state.name,
            onChange: _this.handleChange
          }),
          _react2.default.createElement(_semanticUiReact.Form.Input, {
            fluid: true,
            icon: 'user',
            iconPosition: 'left',
            placeholder: 'Email',
            name: 'email',
            value: _this.state.email,
            onChange: _this.handleChange
          }),
          _react2.default.createElement(_semanticUiReact.Form.Input, {
            fluid: true,
            icon: 'user',
            iconPosition: 'left',
            placeholder: 'Password',
            name: 'password',
            value: _this.state.password,
            onChange: _this.handleChange }),
          _react2.default.createElement(_semanticUiReact.Form.Input, {
            fluid: true,
            icon: 'user',
            iconPosition: 'left',
            placeholder: 'Phone',
            name: 'phone',
            value: _this.state.phone,
            onChange: _this.handleChange
          }),
          _react2.default.createElement(_semanticUiReact.Form.Checkbox, { label: 'I agree to the Terms and Conditions' }),
          _react2.default.createElement(
            _semanticUiReact.Form.Button,
            { color: 'teal', fluid: true, size: 'large' },
            'Crear'
          )
        )
      );
    };

    _this.renderAuthButton = function () {
      if (_this.props.auth) {
        return _react2.default.createElement(
          _semanticUiReact.Menu.Menu,
          { position: 'right' },
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            { className: 'item' },
            _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: _this.props.auth.picture }),
            _react2.default.createElement(
              _semanticUiReact.Button,
              { as: 'a', href: 'api/v1/auth/logout', inverted: true },
              'Cerrar Sesion'
            )
          )
        );
      }
      return _react2.default.createElement(
        _semanticUiReact.Menu.Menu,
        { position: 'right' },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { className: 'item' },
          _this.renderLogin()
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          null,
          _this.renderSignUp()
        )
      );
    };

    _this.renderMenuItems = function () {
      return _react2.default.createElement(
        _semanticUiReact.Container,
        null,
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { as: _reactRouterDom.Link, to: '/', active: _this.isActive('/') },
          'Inicio'
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { as: _reactRouterDom.Link, to: '/galeria', active: _this.isActive('/galeria') },
          'Galeria'
        ),
        _this.props.auth && _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { as: _reactRouterDom.Link, to: '/admins', active: _this.isActive('/admins') },
          'Admins'
        ),
        _this.renderAuthButton()
      );
    };

    _this.state = {
      name: '',
      email: '',
      phone: '',
      password: ''
    };
    return _this;
  }

  _createClass(TopMenu, [{
    key: 'render',
    value: function render() {
      var visible = this.state.visible;

      return _react2.default.createElement(
        'div',
        { id: 'MenuStyle' },
        visible && this.renderFixedMenu(visible),
        _react2.default.createElement(
          _semanticUiReact.Visibility,
          {
            onBottomPassed: this.showFixedMenu,
            onBottomVisible: this.hideFixedMenu,
            once: false },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            {
              inverted: true,
              textAlign: 'center',
              style: { padding: '1em 0em' },
              className: 'active-menu',
              vertical: true },
            this.renderFixedMenu(visible)
          )
        )
      );
    }
  }]);

  return TopMenu;
}(_react.Component);

function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createUser: _index.createUser, loginUser: _index.loginUser })(TopMenu);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalCont;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalCont(_ref) {
  var buttonText = _ref.buttonText,
      header = _ref.header,
      children = _ref.children;

  return _react2.default.createElement(
    _semanticUiReact.Modal,
    { trigger: _react2.default.createElement(
        _semanticUiReact.Button,
        { as: 'a', inverted: true },
        buttonText
      ) },
    _react2.default.createElement(
      _semanticUiReact.Modal.Content,
      null,
      _react2.default.createElement(
        _semanticUiReact.Grid,
        {
          textAlign: 'center',
          style: { height: '100%' },
          verticalAlign: 'middle' },
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { style: { maxWidth: 450 } },
          _react2.default.createElement(
            _semanticUiReact.Header,
            { as: 'h2', color: 'teal', textAlign: 'center' },
            ' ',
            header
          ),
          children,
          _react2.default.createElement(
            _semanticUiReact.Message,
            null,
            'New to us? ',
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Sign Up'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Button,
            { as: 'a', href: 'api/v1/auth/google' },
            'Con Google'
          )
        )
      )
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-router-dom';

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'MenuStyle' },
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { inverted: true, vertical: true, style: { padding: '5em 0em' } },
          _react2.default.createElement(
            _semanticUiReact.Container,
            null,
            _react2.default.createElement(
              _semanticUiReact.Grid,
              { divided: true, inverted: true, stackable: true },
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 3 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'About' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Sitemap'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Contact Us'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Religious Ceremonies'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Gazebo Plans'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 3 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'Services' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Banana Pre-Order'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'DNA FAQ'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'How To Access'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Favorite X-Men'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 7 },
                  _react2.default.createElement(
                    _semanticUiReact.Header,
                    { as: 'h4', inverted: true },
                    'Footer Header'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Extra space for a call to action inside the footer that could help re-engage users.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    _semanticUiReact.Segment,
    {
      inverted: true,
      textAlign: 'center',
      style: { minHeight: '100vh', padding: '1em 0em' },
      vertical: true },
    _react2.default.createElement(
      _semanticUiReact.Container,
      { text: true },
      _react2.default.createElement(_semanticUiReact.Header, {
        as: 'h1',
        content: 'Page not found',
        inverted: true,
        style: { fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }
      }),
      _react2.default.createElement(_semanticUiReact.Header, {
        as: 'h2',
        content: 'Return to home',
        inverted: true,
        style: { fontSize: '1.7em', fontWeight: 'normal' }
      }),
      _react2.default.createElement(
        _semanticUiReact.Button,
        { primary: true, size: 'huge', as: _reactRouterDom.Link, to: '/' },
        'Home',
        _react2.default.createElement(_semanticUiReact.Icon, { name: 'right arrow' })
      )
    )
  );
};

exports.default = {
  component: NotFound
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(25);

var _reactSlick = __webpack_require__(26);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = 'http://dz0tywc7nnb41.cloudfront.net/slider';

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Gallery, [{
    key: 'render',
    value: function render() {
      var settings = {
        // customPaging: (i) => {
        //   return <a><img src={`${baseUrl}/slider${i+1}.jpeg`}/></a>
        // },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return _react2.default.createElement(
        'div',
        { id: 'Home' },
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: 0, borderRadius: 0, border: 'none' } },
          _react2.default.createElement(
            _reactSlick2.default,
            settings,
            _lodash2.default.map(_lodash2.default.range(1, 15), function (i) {
              return _react2.default.createElement(
                'div',
                { key: _lodash2.default.uniqueId(i), style: { minHeight: '100%', borderRadius: 0, border: 'none' } },
                _react2.default.createElement('img', { src: baseUrl + '/slider' + i + '.jpeg', alt: '' })
              );
            })
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { celled: 'internally', columns: 'equal', stackable: true },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { textAlign: 'center' },
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { paddingBottom: '5em', paddingTop: '5em' } },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  '"What a Company"'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'That is what they all say about us'
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { paddingBottom: '5em', paddingTop: '5em' } },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  '"I shouldn\'t have gone with their competitor."'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/large/nan.jpg' }),
                  _react2.default.createElement(
                    'b',
                    null,
                    'Nan'
                  ),
                  ' Chief Fun Officer Acme Toys'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '8em 0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Container,
            { text: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3', style: { fontSize: '2em' } },
              'Breaking The Grid, Grabs Your Attention'
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: '1.33em' } },
              'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.'
            ),
            _react2.default.createElement(
              _semanticUiReact.Button,
              { as: 'a', size: 'large' },
              'Read More'
            ),
            _react2.default.createElement(
              _semanticUiReact.Divider,
              {
                as: 'h4',
                className: 'header',
                horizontal: true,
                style: { margin: '3em 0em', textTransform: 'uppercase' }
              },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Case Studies'
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3', style: { fontSize: '2em' } },
              'Did We Tell You About Our Bananas?'
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: '1.33em' } },
              'Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it\'s really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.'
            ),
            _react2.default.createElement(
              _semanticUiReact.Button,
              { as: 'a', size: 'large' },
              'I\'m Still Quite Interested'
            )
          )
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = {
  component: Gallery
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

__webpack_require__(28);

var _cabinBath = __webpack_require__(29);

var _cabinBath2 = _interopRequireDefault(_cabinBath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'Home' },
        _react2.default.createElement(
          _semanticUiReact.Segment,
          {
            inverted: true,
            textAlign: 'center',
            style: { minHeight: 700, padding: '1em 0em' },
            className: 'title',
            vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Container,
            { text: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              {
                as: 'h1',
                inverted: true,
                style: { fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' } },
              'Cabinas y Cabanas'
            ),
            _react2.default.createElement(
              _semanticUiReact.Header,
              {
                as: 'h1',
                inverted: true,
                style: { fontSize: '6em', marginBottom: 0, marginTop: 0 } },
              'Canaveral'
            ),
            _react2.default.createElement(_semanticUiReact.Header, {
              as: 'h2',
              content: '',
              inverted: true,
              style: { fontSize: '1.7em', fontWeight: 'normal' }
            })
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '8em 0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { container: true, stackable: true, verticalAlign: 'middle' },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { columns: 3 },
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Card,
                  null,
                  _react2.default.createElement(_semanticUiReact.Image, { src: _cabinBath2.default }),
                  _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Card.Header,
                      null,
                      'Cabina'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Card.Meta,
                      null,
                      'Joined in 2016'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Card.Description,
                      null,
                      'Daniel is a comedian living in Nashville.'
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    { extra: true },
                    _react2.default.createElement(
                      'a',
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }),
                      '10 Friends'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Card,
                  null,
                  _react2.default.createElement(_semanticUiReact.Image, { src: _cabinBath2.default }),
                  _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Card.Header,
                      null,
                      'Cabana'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Card.Meta,
                      null,
                      'Joined in 2016'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Card.Description,
                      null,
                      'Daniel is a comedian living in Nashville.'
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    { extra: true },
                    _react2.default.createElement(
                      'a',
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }),
                      '10 Friends'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Card,
                  null,
                  _react2.default.createElement(_semanticUiReact.Image, { src: _cabinBath2.default }),
                  _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Card.Header,
                      null,
                      'Cabana'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Card.Meta,
                      null,
                      'Joined in 2016'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Card.Description,
                      null,
                      'Daniel is a comedian living in Nashville.'
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    { extra: true },
                    _react2.default.createElement(
                      'a',
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }),
                      '10 Friends'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              null,
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 6 },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  'Aire Acondicionado'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'Aire fresco siempre.'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  'WiFi'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'Contamos con internet de alta velocidad para que puedas disfrutar de tu contenido favorito.'
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { floated: 'right', width: 6 },
                _react2.default.createElement(_semanticUiReact.Image, {
                  bordered: true,
                  rounded: true,
                  size: 'large',
                  src: _cabinBath2.default
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { celled: 'internally', columns: 'equal', stackable: true },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { textAlign: 'center' },
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { paddingBottom: '5em', paddingTop: '5em' } },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  'Canaveral'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'Mejores cabinas de la zona sur'
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { paddingBottom: '5em', paddingTop: '5em' } },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  'Nuestros clientes nos respaldan'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/large/nan.jpg' }),
                  _react2.default.createElement(
                    'b',
                    null,
                    'Nancy'
                  ),
                  ' Un lugar muy tranquilo y seguro'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = {
  component: Home
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e9d914959a4fce246ea8ed1b158bacf.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(6);

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(2);

var _requiereAuth = __webpack_require__(31);

var _requiereAuth2 = _interopRequireDefault(_requiereAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Actions


// Components


var AdminsList = function (_Component) {
  _inherits(AdminsList, _Component);

  function AdminsList(props) {
    _classCallCheck(this, AdminsList);

    var _this = _possibleConstructorReturn(this, (AdminsList.__proto__ || Object.getPrototypeOf(AdminsList)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(AdminsList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_lodash2.default.isEmpty(this.props.users)) {
        this.props.fetchAdmins();
      }
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return _lodash2.default.map(this.props.admins, function (admin) {
        return _react2.default.createElement(
          'li',
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Admins App'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'Admins App' })
        ),
        'Here\'s big list',
        _react2.default.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return AdminsList;
}(_react.Component);

function mapStateToProps(state) {
  return { admins: state.admins };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchAdmins)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requiereAuth2.default)(AdminsList))
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading...'
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(33);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(34);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(35);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var userAgent = req.headers['user-agent'];
  console.log(userAgent);

  var axiosServer = _axios2.default.create({
    baseURL: 'http://localhost:7777/v1',
    headers: { cookie: req.get('cookie') || '' }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {
    users: {
      userAgent: userAgent
    }
  }, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosServer)));
  return store;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _users = __webpack_require__(36);

var _users2 = _interopRequireDefault(_users);

var _auth = __webpack_require__(37);

var _auth2 = _interopRequireDefault(_auth);

var _admins = __webpack_require__(38);

var _admins2 = _interopRequireDefault(_admins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _users2.default,
  auth: _auth2.default,
  admins: _admins2.default
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    case _actions.LOGIN_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map