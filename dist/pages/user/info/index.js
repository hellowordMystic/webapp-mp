"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _jump = require("../../utils/jump.js");

var _jump2 = _interopRequireDefault(_jump);

var _user = require("../../../actions/user.js");

var actions = _interopRequireWildcard(_user);

var _index2 = require("../../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = (_dec = (0, _index2.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Info, _BaseComponent);

  function Info() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["user"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Info, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Info.prototype.__proto__ || Object.getPrototypeOf(Info.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      // todo: 验证用户是否登录了?.
      (0, _jump2.default)({ url: url });
    }
  }, {
    key: "WeChatLogin",
    value: function WeChatLogin() {

      var currentObj = this;

      wx.login({
        success: function success(res) {
          console.log('res.code', res.code);
          var payload = {
            code: res.code
          };
          currentObj.props.WeChatLogin(payload).then(function (res) {
            console.log('currentObj.props.WeChatLogin(payload)', res);
          });
        }
      });
    }

    // this.jumpUrl.bind(this,'/pages/user/user-login/index')

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Info;
}(_index.Component), _class2.properties = {
  "user": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["WeChatLogin"], _temp2)) || _class);
exports.default = Info;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Info));