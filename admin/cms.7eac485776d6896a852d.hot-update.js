webpackHotUpdate("cms",{

/***/ "":
false,

/***/ "./src/assets/sass/styles.sass":
/*!*************************************!*\
  !*** ./src/assets/sass/styles.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1602568791385
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/forms/ContactForm/index.js":
/*!***************************************************!*\
  !*** ./src/components/forms/ContactForm/index.js ***!
  \***************************************************/
/*! exports provided: ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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

var ContactForm = function ContactForm() {
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
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: "post",
      url: "https://getform.io/f/2385bd8d-e1db-4320-a546-55b77024cc88",
      data: new FormData(form)
    }).then(function (r) {
      handleServerResponse(true, "Thanks!", form);
    }).catch(function (r) {
      handleServerResponse(false, r.response.data.error, form);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: handleOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
    type: "text",
    name: "name",
    placeholder: "Enter name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
    controlId: "formBasicEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 1
    }
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
    type: "email",
    name: "email",
    placeholder: "Enter email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }, "We'll never share your email with anyone else.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 1
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
    type: "text",
    as: "textarea",
    rows: "5",
    name: "message",
    placeholder: "Enter message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 1
    }
  }, "Submit"), serverState.status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: !serverState.status.ok ? "errorMsg" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, serverState.status.msg));
};

__signature__(ContactForm, "useState{[serverState, setServerState]({\r\n    submitting: false,\r\n    status: null\r\n  })}");


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "B:\\DearbornEndocrinology\\de\\src\\components\\forms\\ContactForm\\index.js");
  reactHotLoader.register(ContactForm, "ContactForm", "B:\\DearbornEndocrinology\\de\\src\\components\\forms\\ContactForm\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.7eac485776d6896a852d.hot-update.js.map