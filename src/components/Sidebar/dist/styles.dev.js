"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Anchor = exports.LinkDiv = exports.Span = exports.SponsorImage = exports.Image = exports.SponserImgDiv = exports.ImgDiv = exports.SideDiv = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin: 1vh auto;\n    color: white;\n    &:hover {\n        color: #53c497;\n        cursor: pointer;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: grid;\n    margin-top: 3vh;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-top:1vh;\n    color: #53c497;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    /* margin: auto; */\n    /* position: fixed; */\n    display: block;\n    max-width: 100%;\n    height: auto;\n    /* bottom: 0; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 2em;\n    margin: auto;\n    width: 7vh;\n    height: 7vh;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    /* position: fixed; */\n    height: 40vh;\n    display: flex;\n    align-items: flex-end;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    /* background-color: #1c1c24 !important; */\n    margin:1vh auto;\n    text-align:center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SideDiv = _styledComponents["default"].div(_templateObject());

exports.SideDiv = SideDiv;

var ImgDiv = _styledComponents["default"].div(_templateObject2());

exports.ImgDiv = ImgDiv;

var SponserImgDiv = _styledComponents["default"].div(_templateObject3());

exports.SponserImgDiv = SponserImgDiv;

var Image = _styledComponents["default"].img(_templateObject4());

exports.Image = Image;

var SponsorImage = _styledComponents["default"].img(_templateObject5());

exports.SponsorImage = SponsorImage;

var Span = _styledComponents["default"].h6(_templateObject6());

exports.Span = Span;

var LinkDiv = _styledComponents["default"].div(_templateObject7());

exports.LinkDiv = LinkDiv;

var Anchor = _styledComponents["default"].a(_templateObject8());

exports.Anchor = Anchor;