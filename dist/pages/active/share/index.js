"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;
// 拷贝文件到component的引入方式


var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _base64src = require("../../../utils/base64src.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imgList", "config", "qrCode", "data", "shareImage", "canvasStatus", "bannerConfig", "dispatchQueryQrCode", "dispatchAdvertQuery", "dispatchDownLoadUrl"], _this.config = {
      navigationBarTitleText: '广告预览'
    }, _this.canvasDrawFunc = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.bannerConfig;

      _this.setState({
        canvasStatus: true,
        config: config
      });
      _index2.default.showLoading({
        title: '绘制中...'
      });
    }, _this.onCreateSuccess = function (result) {
      var tempFilePath = result.tempFilePath,
          errMsg = result.errMsg;

      _index2.default.hideLoading();
      if (errMsg === 'canvasToTempFilePath:ok') {
        _this.setState({
          shareImage: tempFilePath,
          // 重置 TaroCanvasDrawer 状态，方便下一次调用
          canvasStatus: false,
          config: null
        });
      } else {
        // 重置 TaroCanvasDrawer 状态，方便下一次调用
        _this.setState({
          canvasStatus: false,
          config: null
        });
        _index2.default.showToast({ icon: 'none', title: errMsg || '出现错误' });
        console.log(errMsg);
      }
      // 预览
      // Taro.previewImage({
      //   current: tempFilePath,
      //   urls: [tempFilePath]
      // })
    }, _this.onCreateFail = function (error) {
      _index2.default.hideLoading();
      // 重置 TaroCanvasDrawer 状态，方便下一次调用
      _this.setState({
        canvasStatus: false,
        config: null
      });
      console.log(error);
    }, _this.saveToAlbum = function () {
      var res = _index2.default.saveImageToPhotosAlbum({
        filePath: _this.state.shareImage
      });
      if (res.errMsg === 'saveImageToPhotosAlbum:ok') {
        _index2.default.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.state = {
        config: null,
        qrCode: '',
        data: null,
        shareImage: null,
        canvasStatus: false,
        bannerConfig: {},
        imgList: []
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.initCanvas();
    }
  }, {
    key: "init",
    value: function init() {
      this.initImage();
    }
  }, {
    key: "getQrCode",
    value: function getQrCode(payload) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.props.dispatchQueryQrCode(payload).then(function (result) {
          resolve(result);
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }
  }, {
    key: "getBase64Src",
    value: function getBase64Src(base64) {
      return new Promise(function (resolve, reject) {
        (0, _base64src.base64src)('data:image/png;base64,' + base64, function (res) {
          console.log('getBase64Src', res);
          resolve(res);
        });
      });
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var _this3 = this;

      var payload = {
        auto_color: true,
        is_hyaline: true,
        line_color: { "r": 0, "g": 0, "b": 0 },
        page: "pages/user/index",
        scene: "productId=10",
        width: 100,
        height: 100
      };

      var that = this;
      this.getQrCode(payload).then(function (response) {
        _this3.getBase64Src(response).then(function (res) {
          _this3.getActivityData().then(function (data) {
            var response = data.content;
            _this3.setState({
              bannerConfig: {
                width: 750,
                height: 750,
                backgroundColor: '#fff',
                debug: true,
                images: [{
                  url: 'http://i1.fuimg.com/693434/ed131e39996b083e.png',
                  width: that.getScreenW(),
                  height: that.getScreenH(),
                  y: 0,
                  x: 0,
                  borderRadius: 12,
                  zIndex: 10
                }, {
                  y: that.factorHeight(1500),
                  x: that.factorWidth(560),
                  url: res,
                  width: 180,
                  height: 180,
                  borderRadius: 100,
                  borderWidth: 0,
                  zIndex: 99
                }, {
                  x: that.factorWidth(320),
                  y: that.factorHeight(730),
                  url: response.inviterProfileUrl,
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  zIndex: 999
                }],
                texts: [{
                  x: that.factorWidth(530),
                  y: that.factorHeight(780),
                  text: response.agentName,
                  fontSize: 28,
                  color: '#000',
                  opacity: 1,
                  baseLine: 'middle',
                  lineHeight: 48,
                  lineNum: 2,
                  textAlign: 'left',
                  width: 580,
                  zIndex: 999
                }, {
                  x: that.factorWidth(530),
                  y: that.factorHeight(850),
                  text: '邀您参与拼团,仅剩1个名额',
                  fontSize: 24,
                  color: '#666',
                  opacity: 1,
                  baseLine: 'middle',
                  textAlign: 'left',
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999
                }, {
                  x: that.factorWidth(330),
                  y: that.factorHeight(1050),
                  text: response.acitivityName,
                  fontSize: 42,
                  color: '#000',
                  opacity: 1,
                  baseLine: 'middle',
                  textAlign: 'left',
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999
                }, {
                  x: that.factorWidth(580),
                  y: that.factorHeight(1250),
                  text: 'vivi 医美咨询师',
                  fontSize: 28,
                  color: '#666',
                  opacity: 1,
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999
                }, {
                  x: that.factorWidth(450),
                  y: that.factorHeight(1400),
                  text: '长按识别小程序码加入拼团',
                  fontSize: 28,
                  color: '#000',
                  opacity: 1,
                  lineHeight: 36,
                  lineNum: 1,
                  zIndex: 999
                }]
              }
            });
          });
        });
      });
    }
  }, {
    key: "getActivityData",
    value: function getActivityData() {
      var _this4 = this;

      var payload = {
        batchId: 1
      };
      return new Promise(function (resolve, reject) {
        _this4.props.dispatchAdvertQuery(payload).then(function (result) {
          resolve(result);
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }
  }, {
    key: "getScreenW",
    value: function getScreenW() {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenWidth = sysInfo.screenWidth;
      return screenWidth * 2;
    }
  }, {
    key: "getScreenH",
    value: function getScreenH() {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenHeight = sysInfo.screenHeight;
      return screenHeight * 2;
    }
  }, {
    key: "factorWidth",
    value: function factorWidth(px) {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenWidth = sysInfo.screenWidth;
      return px * screenWidth / 750;
    }
  }, {
    key: "factorHeight",
    value: function factorHeight(px) {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenHeight = sysInfo.screenHeight;
      return px * screenHeight / 1334;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      this.init();
      setTimeout(function () {
        _this5.canvasDrawFunc(_this5.state.bannerConfig);
      }, 2000);
    }
  }, {
    key: "initImage",
    value: function initImage() {
      var _this6 = this;

      var listImg = ['http://i2.tiimg.com/693434/9303c878fd23d918.png', 'http://i2.tiimg.com/693434/7e8ed643f74d44b5.png', 'http://i2.tiimg.com/693434/6e5b1cb48e6fd139.png', 'http://i2.tiimg.com/693434/aea0dccce4c6ee48.png'],
          thumbNails = [];

      listImg.map(function (item, key) {
        thumbNails.push({
          'url': item,
          isShow: key === 0 ? true : false
        });
        _this6.setState({
          imgList: thumbNails
        });
      });
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  location: location
                };
                _context.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.content);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getImgUrl(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "showMask",
    value: function showMask(imgUrl) {
      this.state.imgList.map(function (item, index) {
        item.url === imgUrl ? item.isShow = true : item.isShow = false;
      });
    }

    // 保存图片至本地

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          imgList = _state.imgList,
          qrCode = _state.qrCode;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchQueryQrCode": {
    "type": null,
    "value": null
  },
  "dispatchAdvertQuery": {
    "type": null,
    "value": null
  },
  "dispatchDownLoadUrl": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["onCreateSuccess", "onCreateFail", "canvasDrawFunc"], _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));