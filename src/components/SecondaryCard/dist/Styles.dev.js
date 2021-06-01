"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hr = exports.Btn = exports.Description = exports.RightSection = exports.LeftSection = exports.SubHeading = exports.Heading = exports.Body = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  @media(max-width: 765px) {\n    display:none;\n  }\n  margin: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  @media(min-width: 850px) {\n    margin: 2vh auto;\n  }\n  @media(max-width: 850px) {\n    display: none;\n    margin-top: 0vh;\n  }\n  font-size: 1em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  float:right;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #53c497;\n  float:left;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  @media(max-width: 850px) {\n    margin-top: 1vh;\n    margin-bottom: 1vh;\n    font-size:0.7em;\n  }\n  @media(min-width: 850px) {\n    margin-bottom:5vh;\n    margin-top: 1vh;\n    font-size:1em;\n  }\n  display:block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media(max-width: 850px) {\n        font-size: 1.5em;\n        margin-bottom: 0vh;\n    }\n    @media(min-width: 850px) {\n        font-size: 1.2em;\n        margin-bottom: 1vh;\n        white-space: nowrap; \n        width: 20vw; \n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    margin-top: 1vh;\n    color: #039be5;\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media(min-width: 850px) {\n      margin: 1vh 2vh;\n      display: block;\n    } \n    @media(max-width: 850px) {\n      margin: 0.5vh;\n      /* max-width: max-content; */\n      display:flex;\n      flex-direction:column;\n    }\n    padding: 2vh;\n    border-radius:5px;\n    background-color: #1c1c24;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents["default"].div(_templateObject());

exports.Body = Body;

var Heading = _styledComponents["default"].h2(_templateObject2());

exports.Heading = Heading;

var SubHeading = _styledComponents["default"].div(_templateObject3());

exports.SubHeading = SubHeading;

var LeftSection = _styledComponents["default"].div(_templateObject4());

exports.LeftSection = LeftSection;

var RightSection = _styledComponents["default"].div(_templateObject5());

exports.RightSection = RightSection;

var Description = _styledComponents["default"].p(_templateObject6());

exports.Description = Description;
var Btn = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject7());
exports.Btn = Btn;

var Hr = _styledComponents["default"].hr(_templateObject8());

exports.Hr = Hr;