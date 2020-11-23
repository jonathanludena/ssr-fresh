"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var App = function App(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hide = _useState2[0],
      setHide = _useState2[1];

  var handleClick = function handleClick() {
    setHide(!hide);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hola SSR"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Toggle"), /*#__PURE__*/_react["default"].createElement("ul", null, !hide && props.items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id
    }, item.label);
  })));
};

App.defaultProps = {
  items: []
};
var _default = App;
exports["default"] = _default;