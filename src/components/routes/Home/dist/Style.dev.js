"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarDiv = exports.FooterDiv = exports.OtherBlogComponent = exports.SidebarComponent = exports.RecentBlogComponent = exports.SponsorImg = exports.TwitterComponent = exports.Right = exports.Mid = exports.Left = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: 850px) {\n        display: none;\n    }\n    margin-right: 0vh;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: 850px) {\n        display: none;\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin: 2vh auto;\n    height: 60%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 850px) {\n        display: none;\n    }\n    margin: auto;\n    font-size: 1.2em;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    height: 30%;\n    border-radius:10px;\n    background-color: #0E0E0F;\n    margin-bottom: 2vh;\n    filter: drop-shadow(0 0 0.25rem #3AC0FF);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 850px) {\n        display: none;\n    }\n    @media (min-width: 850px) {\n        margin: 3vh 5vh;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 850px) {\n        display: none;\n    }\n    @media (min-width: 850px) {\n        float: right;\n        width: 30%;\n    }\n    height: 100vh;\n    background-color:#121217;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 850px) {\n        height: 100%;\n        width: 100%;\n    }\n    @media (min-width: 850px) {\n        float: left;\n        width: 60%;\n        height: 100vh;\n    }\n    margin: auto;\n    \n    padding: 2vh;\n    background-color: #090C10;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 850px) {\n        display: none;\n    }\n    @media (min-width: 850px) {\n        float: left;\n        width: 10%;\n    }\n    height: 100vh;\n    padding: 2vh;\n    background-color: #121217;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    background-color: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Left = _styledComponents["default"].div(_templateObject2());

exports.Left = Left;

var Mid = _styledComponents["default"].div(_templateObject3());

exports.Mid = Mid;

var Right = _styledComponents["default"].div(_templateObject4());

exports.Right = Right;

var TwitterComponent = _styledComponents["default"].div(_templateObject5());

exports.TwitterComponent = TwitterComponent;

var SponsorImg = _styledComponents["default"].img(_templateObject6());

exports.SponsorImg = SponsorImg;

var RecentBlogComponent = _styledComponents["default"].div(_templateObject7());

exports.RecentBlogComponent = RecentBlogComponent;

var SidebarComponent = _styledComponents["default"].div(_templateObject8());

exports.SidebarComponent = SidebarComponent;

var OtherBlogComponent = _styledComponents["default"].div(_templateObject9());

exports.OtherBlogComponent = OtherBlogComponent;

var FooterDiv = _styledComponents["default"].div(_templateObject10());

exports.FooterDiv = FooterDiv;

var NavBarDiv = _styledComponents["default"].div(_templateObject11());

exports.NavBarDiv = NavBarDiv;