"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = require("../../utils/style.js");

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _actionCreators = require("./store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var commentArray = [],
    totalCommentCount = 0,
    pageNumberCount = 0;

var Detail = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "data", "$compid__1882", "$compid__1883", "$compid__1884", "bannerList", "comments", "commentList", "bContact", "bSpec", "commentText", "isOpened", "categoryDialog", "visible", "showOrderDialog", "activeId", "referId", "source", "dispatchActiveInfo", "dispatchCommentInfo", "dispatchDownLoadUrl"], _this.config = {
      navigationBarTitleText: '活动详情'
    }, _this.toggleVisible = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    }, _this.customComponents = ["Popup", "Contact", "Spec"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isOpened: false,
        categoryDialog: false,
        visible: false,
        bSpec: true,
        bContact: false,
        showOrderDialog: false,
        data: {},
        commentList: [],
        bannerList: [],
        comments: [],
        activeId: '',
        referId: '',
        source: '',
        commentText: '查看全部评论'
      };
      this.$$refs = [];
    }
  }, {
    key: "init",
    value: function init() {
      this.initLogin();
    }
  }, {
    key: "initLogin",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAuthInfo();

              case 2:
                user = _context.sent;

                if (!(user && user.id > 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.autoLogin();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initLogin() {
        return _ref2.apply(this, arguments);
      }

      return initLogin;
    }()
  }, {
    key: "getAuthInfo",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });
                return _context2.abrupt("return", result);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAuthInfo() {
        return _ref3.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "autoLogin",
    value: function autoLogin() {
      var that = this;
      var _state = this.state,
          referId = _state.referId,
          source = _state.source;

      wx.login({
        success: function success(res) {
          var payload = {
            code: res.code,
            referId: referId,
            source: source
          };
          that.props.WeChatLogin(payload).then(function (res) {
            _index2.default.setStorage({ key: 'userinfo', data: res.content });
          });
        }
      });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      console.log('loadData');
      var payload = {
        activityId: this.state.activeId
      };
      this.props.dispatchActiveInfo(payload).then(function (res) {
        console.log('res.content', res.content);
        _this2.setState({
          data: res.content
        });

        var commentItemList = [];

        //  获取评论图片.
        if (res.content && res.content.commentVo && res.content.commentVo.location.length > 0) {
          res.content.commentVo.location.map(function (item) {
            _this2.getImgUrl(item).then(function (responseItem) {
              console.log('responseItem getImgUrl', responseItem);
              commentItemList.push(responseItem);
            }).then(function () {
              _this2.setState({
                commentList: commentItemList
              });
            });
          });
        }

        var bannerItemList = [];

        // 获取banner 图片.
        if (res.content && res.content.docInfo && res.content.docInfo.length > 0) {
          res.content.docInfo.map(function (item) {
            _this2.getImgUrl(item.location).then(function (response) {
              console.log('response getImgUrl', response);
              bannerItemList.push(response);
            }).then(function () {
              _this2.setState({
                bannerList: bannerItemList
              });
            });
          });
        }
        // bannerList
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
      this.initLogin();
      this.loadData();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('this.$router.params', this.$router.params);
      //  let activeId = this.$router.params.activeId,
      var activeId = this.$router.params.activeId === undefined ? 48 : this.$router.params.activeId,
          referId = this.$router.params.refId === undefined ? 2 : this.$router.params.refId,
          source = this.$router.params.sc === undefined ? "" : this.$router.params.sc; // advert
      if (activeId && referId) {
        wx.showToast({
          title: activeId + referId,
          icon: 'success',
          duration: 2000
        });
        activeId = decodeURIComponent(activeId);
        referId = decodeURIComponent(referId);
        source = decodeURIComponent(source);
      };

      // console.log('scene',source);
      this.setState({
        activeId: activeId,
        referId: referId,
        source: source
      });
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      this.setState({
        visible: true,
        bContact: true,
        bSpec: false,
        showOrderDialog: false
      });
    }
  }, {
    key: "openCategoryDialog",
    value: function openCategoryDialog() {
      this.setState({
        visible: true,
        bSpec: true,
        bContact: false,
        showOrderDialog: false
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "showMpDialog",
    value: function showMpDialog() {
      this.setState({
        showOrderDialog: true
      });
    }
  }, {
    key: "handleShare",
    value: function handleShare() {
      wx.showShareMenu({
        withShareTicket: true
      });
    }
  }, {
    key: "handleAllComment",
    value: function handleAllComment(data) {
      var _this3 = this;

      var products = [];
      data.activityProducts.map(function (item) {
        products.push(item.productId);
      });
      var payload = {
        pageNo: pageNumberCount,
        pageSize: 10,
        activityProductIds: products
      };
      var that = this;
      totalCommentCount = commentArray.length;
      pageNumberCount++;

      this.props.dispatchCommentInfo(payload).then(function (response) {
        if (response.content.length > 0) {
          response.content.map(function (item, index) {
            commentArray.push(item);
            if (item.docLocations.length > 0) {
              item.docLocations.map(function (img) {
                _this3.getImgUrl(img).then(function (response) {
                  commentArray[index].docLocations = [];
                  commentArray[index].docLocations.push(response);
                });
              });
            }
          });
        };
        if (commentArray.length > 0) {
          setTimeout(function () {
            that.setState({
              comments: commentArray
            });
          }, 1000);
        }
      });

      if (totalCommentCount > 0) {
        setTimeout(function () {
          if (totalCommentCount === commentArray.length) {
            that.setState({
              commentText: '加载完毕'
            });
          }
        }, 1000);
      }
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = {
                  location: location
                };
                _context3.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context3.sent;
                return _context3.abrupt("return", result.content);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getImgUrl(_x) {
        return _ref4.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__1882 = (0, _index.genCompid)(__prefix + "$compid__1882");
      var $compid__1883 = (0, _index.genCompid)(__prefix + "$compid__1883");
      var $compid__1884 = (0, _index.genCompid)(__prefix + "$compid__1884");

      var _state2 = this.__state,
          data = _state2.data,
          commentList = _state2.commentList,
          bannerList = _state2.bannerList,
          activeId = _state2.activeId,
          comments = _state2.comments,
          commentText = _state2.commentText;

      var height = (0, _style.getWindowHeight)(false);
      var _state3 = this.__state,
          isOpened = _state3.isOpened,
          bSpec = _state3.bSpec,
          bContact = _state3.bContact,
          showOrderDialog = _state3.showOrderDialog;


      var anonymousState__temp = (0, _index.internal_inline_style)({ height: height });
      var $props__1882 = {
        "visible": this.__state.visible,
        "onClose": this.toggleVisible
      };
      var $props__1883 = {
        "cellphone": data.cellphone,
        "weChatId": data.weChatId,
        "weChatQrCode": data.weChatQrCode
      };
      var $props__1884 = {
        "activityName": data.activityName,
        "products": data.activityProducts
      };
      _index.propsManager.set($props__1882, $compid__1882);
      bContact && _index.propsManager.set($props__1883, $compid__1883);
      bSpec && _index.propsManager.set($props__1884, $compid__1884);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__1882: $compid__1882,
        $compid__1883: $compid__1883,
        $compid__1884: $compid__1884
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class2.$$events = ["showMpDialog", "openCategoryDialog", "handleAllComment", "openDialog", "handleShare"], _class2.$$componentPath = "pages/product/detail", _temp2)) || _class);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));