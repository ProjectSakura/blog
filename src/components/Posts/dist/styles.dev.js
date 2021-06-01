"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Child = exports.Parent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media(max-width:850px){\n    flex-direction: column;\n  }\n  display: flex;\n  flex-wrap: wrap;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Parent = _styledComponents["default"].div(_templateObject());

exports.Parent = Parent;

var Child = _styledComponents["default"].div(_templateObject2());

exports.Child = Child;