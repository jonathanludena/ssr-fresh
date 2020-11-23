"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _app = _interopRequireDefault(require("../client/components/app"));

var app = (0, _express["default"])();
app.use('/static', _express["default"]["static"](_path["default"].join(__dirname, '..', '..', 'dist', 'static')));
app.get('/ssr', function (req, res) {
  var root = /*#__PURE__*/_react["default"].createElement("html", null, /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "root"
  }, /*#__PURE__*/_react["default"].createElement(_app["default"], null)), /*#__PURE__*/_react["default"].createElement("script", {
    src: "/static/bundle.js"
  })));

  var html = _server["default"].renderToString(root);

  res.send(html);
});
app.listen(3000, function () {
  return console.log('server started http://localhost:3000');
});