webpackHotUpdate("cms",{

/***/ "":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/dom-helpers/esm/camelize.js":
false,

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/prop-types-extra/lib/all.js":
false,

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Button.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Col.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Feedback.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Form.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheck.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheckInput.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheckLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormControl.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormFile.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormFileInput.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormFileLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormText.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Switch.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./src/assets/sass/styles.sass":
/*!*************************************!*\
  !*** ./src/assets/sass/styles.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1603075878335
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/forms/ContactForm/index.js":
/*!***************************************************!*\
  !*** ./src/components/forms/ContactForm/index.js ***!
  \***************************************************/
/*! exports provided: Contactform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contactform", function() { return Contactform; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "B:\\DearbornEndocrinology\\de\\src\\components\\forms\\ContactForm\\index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var encode = function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
};

var Contactform = function Contactform() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    submitting: false,
    status: null
  }),
      serverState = _React$useState[0],
      setServerState = _React$useState[1];

  var handleServerResponse = function handleServerResponse(ok, msg, form) {
    setServerState({
      submitting: false,
      status: {
        ok: ok,
        msg: msg
      }
    });

    if (ok) {
      form.reset();
    }
  };

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    var form = e.target;
    setServerState({
      submitting: true
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "post",
      url: "https://getform.io/f/2385bd8d-e1db-4320-a546-55b77024cc88",
      data: new formData(form)
    }).then(function (r) {
      handleServerResponse(true, "Thanks!", form);
    }).catch(function (r) {
      handleServerResponse(false, r.response.data.error, form);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    type: "text",
    name: "name",
    placeholder: "Enter name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 1
    }
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "input",
    name: "email",
    placeholder: "Enter email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }, "We'll never share your email with anyone else.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "textarea",
    rows: "5",
    name: "message",
    placeholder: "Enter message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 3
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    class: "button is-primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 1
    }
  }, "Submit"), serverState.status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: !serverState.status.ok ? "errorMsg" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, serverState.status.msg));
};

__signature__(Contactform, "useState{[serverState, setServerState]({\r\n    submitting: false,\r\n    status: null\r\n  })}");


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "B:\\DearbornEndocrinology\\de\\src\\components\\forms\\ContactForm\\index.js");
  reactHotLoader.register(Contactform, "Contactform", "B:\\DearbornEndocrinology\\de\\src\\components\\forms\\ContactForm\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/forms/index.js":
/*!***************************************!*\
  !*** ./src/components/forms/index.js ***!
  \***************************************/
/*! exports provided: Contactform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm */ "./src/components/forms/ContactForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contactform", function() { return _ContactForm__WEBPACK_IMPORTED_MODULE_0__["Contactform"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ })

})
//# sourceMappingURL=cms.2df1750aaa2d5e6a67d4.hot-update.js.map