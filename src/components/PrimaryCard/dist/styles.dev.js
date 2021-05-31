"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hr = exports.Btn = exports.Description = exports.RightSection = exports.LeftSection = exports.SubHeading = exports.Heading = exports.ContentDiv = exports.Image = exports.ImgDiv = exports.Body = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  @media(max-width: 765px) {\n    display:none;\n  }\n  margin: 0;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  \n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  @media(min-width: 850px) {\n    margin: 2vh auto;\n  }\n  @media(max-width: 850px) {\n    margin-top: 0vh;\n  }\n  font-size: 1em;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  float:right;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #53c497;\n  float:left;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  @media(max-width: 850px) {\n    margin-top: 1vh;\n    margin-bottom: 1vh;\n  }\n  @media(min-width: 850px) {\n    margin-bottom:5vh;\n    margin-top: 1vh;\n  }\n  display:block;\n  font-size:1em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    @media(max-width: 850px) {\n        font-size: 1.5em;\n        margin-bottom: 0vh;\n    }\n    @media(min-width: 850px) {\n        font-size: 1.2em;\n        margin-bottom: 1vh;\n    }\n    margin-top: 1vh;\n    color: #039be5;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([" \n    padding: 2vh 2vh 3vh 2vh;\n    flex: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([" \n    @media(min-width: 850px) {\n        max-width: 100%;\n    }\n    @media(max-width: 850px) {\n        max-width: 100%;    \n    }\n    width: inherit;\n    max-height: inherit;\n    border-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" \n  /* padding: 2vh; */\n  flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    /* padding: 2vh; */\n    display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents["default"].div(_templateObject());

exports.Body = Body;

var ImgDiv = _styledComponents["default"].div(_templateObject2());

exports.ImgDiv = ImgDiv;

var Image = _styledComponents["default"].img(_templateObject3());

exports.Image = Image;

var ContentDiv = _styledComponents["default"].div(_templateObject4());

exports.ContentDiv = ContentDiv;

var Heading = _styledComponents["default"].h2(_templateObject5());

exports.Heading = Heading;

var SubHeading = _styledComponents["default"].div(_templateObject6());

exports.SubHeading = SubHeading;

var LeftSection = _styledComponents["default"].div(_templateObject7());

exports.LeftSection = LeftSection;

var RightSection = _styledComponents["default"].div(_templateObject8());

exports.RightSection = RightSection;

var Description = _styledComponents["default"].p(_templateObject9());

exports.Description = Description;
var Btn = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject10());
exports.Btn = Btn;

var Hr = _styledComponents["default"].hr(_templateObject11());

exports.Hr = Hr;