"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserInfo = exports.dispatchWeixinDecrypt = exports.dispatchOwnerActiveHistory = exports.dispatchOwnerServiceHistory = exports.dispatchDownLoadUrl = exports.dispatchActiveHistory = exports.dispatchCustomerList = exports.dispatchLoanInfo = exports.dispatchReservationCount = exports.dispatchOrderList = exports.dispatchReservationPlan = exports.dispatchUploadConfig = exports.ChangeToCustomer = exports.ChangeToAgent = exports.WeChatLogin = undefined;

var _constants = require("./constants.js");

var _redux = require("../../../utils/redux.js");

var _api = require("../../../constants/api.js");

var WeChatLogin = exports.WeChatLogin = function WeChatLogin(payload) {
  return (0, _redux.createAction)({
    type: _constants.WX_USER_LOGIN,
    url: _api.API_USER_LOGIN,
    fetchOptions: {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded'
    },
    payload: payload
  });
};

var ChangeToAgent = exports.ChangeToAgent = function ChangeToAgent(payload) {
  return (0, _redux.createAction)({
    type: _constants.USER_AGENT_TRUE,
    url: _api.API_USER_AGENT,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var ChangeToCustomer = exports.ChangeToCustomer = function ChangeToCustomer(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_TO_CUSTOMER,
    url: _api.API_USER_CUSTOMER,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchUploadConfig = exports.dispatchUploadConfig = function dispatchUploadConfig(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_UPLOAD_CONFIG,
    url: _api.API_UPLOAD_CONFIG,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchReservationPlan = exports.dispatchReservationPlan = function dispatchReservationPlan() {
  return (0, _redux.createAction)({
    type: _constants.ACTION_USER_AMOUNT,
    url: _api.API_INIT_AMOUNT,
    fetchOptions: {
      method: 'POST'
    }
  });
};

var dispatchOrderList = exports.dispatchOrderList = function dispatchOrderList(payload) {
  return (0, _redux.createAction)({
    type: ORDER_LIST,
    url: _api.API_ORDER_LIST,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchReservationCount = exports.dispatchReservationCount = function dispatchReservationCount(payload) {
  return (0, _redux.createAction)({
    type: _constants.ORDER_COUNT,
    url: _api.API_ORDER_COUNT,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchLoanInfo = exports.dispatchLoanInfo = function dispatchLoanInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.LOAN_INFO,
    url: _api.API_LOAN_INFO,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchCustomerList = exports.dispatchCustomerList = function dispatchCustomerList(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_CUSTOMER_INFO,
    url: _api.API_CUSTOMER_INFO,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchActiveHistory = exports.dispatchActiveHistory = function dispatchActiveHistory(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_HISTORY_INFO,
    url: _api.API_ACTIVE_HISTORY,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchDownLoadUrl = exports.dispatchDownLoadUrl = function dispatchDownLoadUrl(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_UPLOAD_DOWN,
    url: _api.API_UPLOAD_FILE,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchOwnerServiceHistory = exports.dispatchOwnerServiceHistory = function dispatchOwnerServiceHistory(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_WATER_HISTORY,
    url: _api.API_WATER_HISTORY,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchOwnerActiveHistory = exports.dispatchOwnerActiveHistory = function dispatchOwnerActiveHistory(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_OWNER_INFO,
    url: _api.API_ACTIVE_OWNER,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchWeixinDecrypt = exports.dispatchWeixinDecrypt = function dispatchWeixinDecrypt(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_WEIXIN_DECRYPT,
    url: _api.API_WEIXIN_DECRYPT,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var UpdateUserInfo = exports.UpdateUserInfo = function UpdateUserInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.UPDATE_USER_INFO,
    url: _api.API_USER_INFO,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};