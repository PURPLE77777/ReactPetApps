/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/MainWindow/dataset/mainBgs.js":
/*!*******************************************!*\
  !*** ./app/MainWindow/dataset/mainBgs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['main_backgd_1.jpg', 'main_backgd_2.jpg', 'main_backgd_3.jpg', 'main_backgd_4.jpg', 'main_backgd_5.jpg', 'main_backgd_6.jpg', 'main_backgd_7.jpg']);

/***/ }),

/***/ "./app/App.tsx":
/*!*********************!*\
  !*** ./app/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainWindow_components_MainWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainWindow/components/MainWindow */ "./app/MainWindow/components/MainWindow.tsx");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./app/main.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/dist/index.js");
/* harmony import */ var _HDRezka_components_HDRezkaMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HDRezka/components/HDRezkaMain */ "./app/HDRezka/components/HDRezkaMain.tsx");
/* harmony import */ var _common_components_ErrorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/components/ErrorPage */ "./app/common/components/ErrorPage.tsx");






var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.createBrowserRouter)([{
  path: '/',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainWindow_components_MainWindow__WEBPACK_IMPORTED_MODULE_1__["default"], null),
  errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_ErrorPage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}, {
  path: 'hdrezka',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HDRezka_components_HDRezkaMain__WEBPACK_IMPORTED_MODULE_3__["default"], null)
},
// all incorrect urls will direct to MainWindow
{
  path: '*',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainWindow_components_MainWindow__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}
//////////////////////
]);

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.RouterProvider, {
    router: router
  });
}

/***/ }),

/***/ "./app/HDRezka/components/Footer.tsx":
/*!*******************************************!*\
  !*** ./app/HDRezka/components/Footer.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, "Footer");
}

/***/ }),

/***/ "./app/HDRezka/components/HDRezkaMain.tsx":
/*!************************************************!*\
  !*** ./app/HDRezka/components/HDRezkaMain.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HDRezkaMain; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_HDRezka_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/HDRezka.scss */ "./app/HDRezka/scss/HDRezka.scss");
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainPage */ "./app/HDRezka/components/MainPage.tsx");



function HDRezkaMain() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "hdrezka-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./app/HDRezka/components/Header.tsx":
/*!*******************************************!*\
  !*** ./app/HDRezka/components/Header.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderBottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBottom */ "./app/HDRezka/components/HeaderBottom.tsx");
/* harmony import */ var _HeaderTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderTop */ "./app/HDRezka/components/HeaderTop.tsx");



function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderTop__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderBottom__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./app/HDRezka/components/HeaderBottom.tsx":
/*!*************************************************!*\
  !*** ./app/HDRezka/components/HeaderBottom.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderBottom; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_headerBottom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/headerBottom.scss */ "./app/HDRezka/scss/headerBottom.scss");
/* harmony import */ var _img_search_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/search-icon.svg */ "./app/HDRezka/img/search-icon.svg");
/* harmony import */ var _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/arrow_down.svg */ "./app/HDRezka/img/arrow_down.svg");




function HeaderBottom() {
  var search = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var searchIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onSearchFocus = function onSearchFocus() {
    var _search$current, _searchIcon$current;
    (_search$current = search.current) === null || _search$current === void 0 ? void 0 : _search$current.classList.add('search_input__onfocused');
    (_searchIcon$current = searchIcon.current) === null || _searchIcon$current === void 0 ? void 0 : _searchIcon$current.classList.add('search_img__onfocused');
  };
  var onSearchBlur = function onSearchBlur() {
    var _search$current2, _searchIcon$current2;
    (_search$current2 = search.current) === null || _search$current2 === void 0 ? void 0 : _search$current2.classList.remove('search_input__onfocused');
    (_searchIcon$current2 = searchIcon.current) === null || _searchIcon$current2 === void 0 ? void 0 : _searchIcon$current2.classList.remove('search_img__onfocused');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header_wrap-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-bottom_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text with-dropdown"
  }, "\u0424\u0438\u043B\u044C\u043C\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__,
    className: "dropdown-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text with-dropdown"
  }, "\u0421\u0435\u0440\u0438\u0430\u043B\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__,
    className: "dropdown-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text with-dropdown"
  }, "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__,
    className: "dropdown-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text with-dropdown"
  }, "\u0410\u043D\u0438\u043C\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__,
    className: "dropdown-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text"
  }, "\u041D\u043E\u0432\u0438\u043D\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text"
  }, "\u0410\u043D\u043E\u043D\u0441\u044B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item_text"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440\u043A\u0438"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    ref: searchIcon,
    className: "search_img",
    src: "".concat(_img_search_icon_svg__WEBPACK_IMPORTED_MODULE_2__)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: search,
    onFocus: onSearchFocus,
    onBlur: onSearchBlur,
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0444\u0438\u043B\u044C\u043C\u043E\u0432 \u0438 \u0441\u0435\u0440\u0438\u0430\u043B\u043E\u0432",
    className: "search_input"
  }))));
}

/***/ }),

/***/ "./app/HDRezka/components/HeaderTop.tsx":
/*!**********************************************!*\
  !*** ./app/HDRezka/components/HeaderTop.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderTop; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _scss_headerTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/headerTop */ "./app/HDRezka/scss/headerTop.scss");



function HeaderTop() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header_wrap-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "socials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "socials_button"
  }, "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "socials_theme-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toggle-button"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "main-logo",
    to: "#"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-buttons_button"
  }, "\u0414\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "count-films"
  }, "219"), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-buttons_button"
  }, "\u041C\u043E\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-buttons_button"
  }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))));
}

/***/ }),

/***/ "./app/HDRezka/components/Main.tsx":
/*!*****************************************!*\
  !*** ./app/HDRezka/components/Main.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main"
  }, "Main");
}

/***/ }),

/***/ "./app/HDRezka/components/MainPage.tsx":
/*!*********************************************!*\
  !*** ./app/HDRezka/components/MainPage.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./app/HDRezka/components/Footer.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./app/HDRezka/components/Header.tsx");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ "./app/HDRezka/components/Main.tsx");




function MainPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./app/MainWindow/components/AppsPreview.tsx":
/*!***************************************************!*\
  !*** ./app/MainWindow/components/AppsPreview.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AppsPreview; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _scss_appPreview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/appPreview.scss */ "./app/MainWindow/scss/appPreview.scss");



function AppsPreview(_ref) {
  var projects = _ref.projects;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-preview_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-preview_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, projects && projects.map(function (project) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: "app-".concat(project.id),
      className: "app"
    }, project.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: project.url,
      className: "app_inner",
      style: {
        backgroundImage: project.imgPreview ? "url(".concat(__webpack_require__("./app/MainWindow/img sync recursive ^\\.\\/.*$")("./" + project.imgPreview), ")") : "url(".concat(__webpack_require__(/*! ../img/cloud.png */ "./app/MainWindow/img/cloud.png"), ")"),
        backgroundSize: project.imgPreview ? 'cover' : 'contain'
      }
    }) :
    /*#__PURE__*/
    // remove later...
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "app_inner",
      style: {
        backgroundImage: project.imgPreview ? "url(".concat(__webpack_require__("./app/MainWindow/img sync recursive ^\\.\\/.*$")("./" + project.imgPreview), ")") : "url(".concat(__webpack_require__(/*! ../img/cloud.png */ "./app/MainWindow/img/cloud.png"), ")"),
        backgroundSize: project.imgPreview ? 'cover' : 'contain'
      }
    })
    //////////////////////////
    );
  }), !projects && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "no-apps_message"
  }, "\u0423 \u0432\u0430\u0441 \u0435\u0449\u0451 \u043D\u0435\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app_inner",
    style: {
      backgroundImage: "url(".concat(__webpack_require__(/*! ../img/plus-svg.svg */ "./app/MainWindow/img/plus-svg.svg"), ")"),
      backgroundSize: 'contain'
    }
  })))));
}

/***/ }),

/***/ "./app/MainWindow/components/MainWindow.tsx":
/*!**************************************************!*\
  !*** ./app/MainWindow/components/MainWindow.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainWindow; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_mainWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/mainWindow */ "./app/MainWindow/scss/mainWindow.scss");
/* harmony import */ var _dataset_mainBgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataset/mainBgs */ "./app/MainWindow/dataset/mainBgs.js");
/* harmony import */ var _AppsPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppsPreview */ "./app/MainWindow/components/AppsPreview.tsx");
/* harmony import */ var _dataset_users_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataset/users.json */ "./app/MainWindow/dataset/users.json");






function MainWindow() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var randomBgImg = _dataset_mainBgs__WEBPACK_IMPORTED_MODULE_3__["default"][Math.round(Math.random() * (_dataset_mainBgs__WEBPACK_IMPORTED_MODULE_3__["default"].length - 1))];
  var styleMainConfig = {
    backgroundImage: "url(".concat(__webpack_require__("./app/MainWindow/img sync recursive ^\\.\\/.*$")("./" + randomBgImg), ")")
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setUser(_dataset_users_json__WEBPACK_IMPORTED_MODULE_5__);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "mainwindow-container",
    style: styleMainConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AppsPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projects: user !== null && user !== void 0 && user.projects.length ? user.projects : null
  }));
}

/***/ }),

/***/ "./app/common/components/ErrorPage.tsx":
/*!*********************************************!*\
  !*** ./app/common/components/ErrorPage.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/dist/index.js");
/* harmony import */ var _scss_errorPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/errorPage.scss */ "./app/common/scss/errorPage.scss");



function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var error = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useRouteError)();
  console.error(error);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "error-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oops!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sorry, an unexpected error has occurred. \uD83D\uDE22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, error.data || error.statusText)));
}

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/App */ "./app/App.tsx");



var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./app/HDRezka/scss/HDRezka.scss":
/*!***************************************!*\
  !*** ./app/HDRezka/scss/HDRezka.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/HDRezka/scss/headerBottom.scss":
/*!********************************************!*\
  !*** ./app/HDRezka/scss/headerBottom.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/HDRezka/scss/headerTop.scss":
/*!*****************************************!*\
  !*** ./app/HDRezka/scss/headerTop.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/MainWindow/scss/appPreview.scss":
/*!*********************************************!*\
  !*** ./app/MainWindow/scss/appPreview.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/MainWindow/scss/mainWindow.scss":
/*!*********************************************!*\
  !*** ./app/MainWindow/scss/mainWindow.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/common/scss/errorPage.scss":
/*!****************************************!*\
  !*** ./app/common/scss/errorPage.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/main.scss":
/*!***********************!*\
  !*** ./app/main.scss ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/MainWindow/img sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./app/MainWindow/img/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./cloud": "./app/MainWindow/img/cloud.png",
	"./cloud.png": "./app/MainWindow/img/cloud.png",
	"./hdrezka": "./app/MainWindow/img/hdrezka.jpg",
	"./hdrezka.jpg": "./app/MainWindow/img/hdrezka.jpg",
	"./main_backgd_1": "./app/MainWindow/img/main_backgd_1.jpg",
	"./main_backgd_1.jpg": "./app/MainWindow/img/main_backgd_1.jpg",
	"./main_backgd_2": "./app/MainWindow/img/main_backgd_2.jpg",
	"./main_backgd_2.jpg": "./app/MainWindow/img/main_backgd_2.jpg",
	"./main_backgd_3": "./app/MainWindow/img/main_backgd_3.jpg",
	"./main_backgd_3.jpg": "./app/MainWindow/img/main_backgd_3.jpg",
	"./main_backgd_4": "./app/MainWindow/img/main_backgd_4.jpg",
	"./main_backgd_4.jpg": "./app/MainWindow/img/main_backgd_4.jpg",
	"./main_backgd_5": "./app/MainWindow/img/main_backgd_5.jpg",
	"./main_backgd_5.jpg": "./app/MainWindow/img/main_backgd_5.jpg",
	"./main_backgd_6": "./app/MainWindow/img/main_backgd_6.jpg",
	"./main_backgd_6.jpg": "./app/MainWindow/img/main_backgd_6.jpg",
	"./main_backgd_7": "./app/MainWindow/img/main_backgd_7.jpg",
	"./main_backgd_7.jpg": "./app/MainWindow/img/main_backgd_7.jpg",
	"./plus-svg": "./app/MainWindow/img/plus-svg.svg",
	"./plus-svg.svg": "./app/MainWindow/img/plus-svg.svg",
	"./twitch": "./app/MainWindow/img/twitch.jpg",
	"./twitch.jpg": "./app/MainWindow/img/twitch.jpg",
	"./vk": "./app/MainWindow/img/vk.png",
	"./vk.png": "./app/MainWindow/img/vk.png",
	"./youtube": "./app/MainWindow/img/youtube.jpg",
	"./youtube.jpg": "./app/MainWindow/img/youtube.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/MainWindow/img sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/HDRezka/img/arrow_down.svg":
/*!****************************************!*\
  !*** ./app/HDRezka/img/arrow_down.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/e42c238ddbbc6a9c2af2.svg";

/***/ }),

/***/ "./app/HDRezka/img/search-icon.svg":
/*!*****************************************!*\
  !*** ./app/HDRezka/img/search-icon.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/d73854e9b547ebe3c4c1.svg";

/***/ }),

/***/ "./app/MainWindow/img/cloud.png":
/*!**************************************!*\
  !*** ./app/MainWindow/img/cloud.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/ef3f3dea465b776f1425.png";

/***/ }),

/***/ "./app/MainWindow/img/hdrezka.jpg":
/*!****************************************!*\
  !*** ./app/MainWindow/img/hdrezka.jpg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/91b86b1c47e6cb41c312.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_1.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_1.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/d17a1d898ac1e26825cf.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_2.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_2.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/77cc2de7e9b0c36ed0c4.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_3.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_3.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/7e4d155aabe46e4af0b1.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_4.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_4.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/cf31039a4cffb5dbfc46.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_5.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_5.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/7686d184015dbe4ef08d.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_6.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_6.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/4ad11b5de1300e9f9a21.jpg";

/***/ }),

/***/ "./app/MainWindow/img/main_backgd_7.jpg":
/*!**********************************************!*\
  !*** ./app/MainWindow/img/main_backgd_7.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/75d7366fb1683b8c0990.jpg";

/***/ }),

/***/ "./app/MainWindow/img/plus-svg.svg":
/*!*****************************************!*\
  !*** ./app/MainWindow/img/plus-svg.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/0ad38654f784a045f6e7.svg";

/***/ }),

/***/ "./app/MainWindow/img/twitch.jpg":
/*!***************************************!*\
  !*** ./app/MainWindow/img/twitch.jpg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/cb6b9086b855df78fee6.jpg";

/***/ }),

/***/ "./app/MainWindow/img/vk.png":
/*!***********************************!*\
  !*** ./app/MainWindow/img/vk.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/7b1d68497ecb558f65ca.png";

/***/ }),

/***/ "./app/MainWindow/img/youtube.jpg":
/*!****************************************!*\
  !*** ./app/MainWindow/img/youtube.jpg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/b3629baa22a903c10cb0.jpg";

/***/ }),

/***/ "./app/MainWindow/dataset/users.json":
/*!*******************************************!*\
  !*** ./app/MainWindow/dataset/users.json ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"id":1,"user":"PURPLE","role":"superadmin","projects":[{"id":1,"name":"HDRezka","imgPreview":"hdrezka.jpg","url":"hdrezka"},{"id":2,"name":"VK","imgPreview":"vk.png","url":""},{"id":3,"name":"Twitch","imgPreview":"twitch.jpg","url":""},{"id":4,"name":"YouTube","imgPreview":"youtube.jpg","url":""},{"id":5,"name":"Some","imgPreview":"","url":""},{"id":6,"name":"Some","imgPreview":"","url":""}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js-node_mod-e3b3e2"], function() { return __webpack_require__("./index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3JLO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0Esa0xBQWtMLDRDQUE0QztVQUM5TiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9NYWluV2luZG93L2RhdGFzZXQvbWFpbkJncy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvSERSZXprYS9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwL0hEUmV6a2EvY29tcG9uZW50cy9IRFJlemthTWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwL0hEUmV6a2EvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2FwcC9IRFJlemthL2NvbXBvbmVudHMvSGVhZGVyQm90dG9tLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvSERSZXprYS9jb21wb25lbnRzL0hlYWRlclRvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwL0hEUmV6a2EvY29tcG9uZW50cy9NYWluLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvSERSZXprYS9jb21wb25lbnRzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvTWFpbldpbmRvdy9jb21wb25lbnRzL0FwcHNQcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvTWFpbldpbmRvdy9jb21wb25lbnRzL01haW5XaW5kb3cudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21tb24vY29tcG9uZW50cy9FcnJvclBhZ2UudHN4Iiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvSERSZXprYS9zY3NzL0hEUmV6a2Euc2Nzcz8wZjdmIiwid2VicGFjazovLy8uL2FwcC9IRFJlemthL3Njc3MvaGVhZGVyQm90dG9tLnNjc3M/NzVkZSIsIndlYnBhY2s6Ly8vLi9hcHAvSERSZXprYS9zY3NzL2hlYWRlclRvcC5zY3NzPzYzOWMiLCJ3ZWJwYWNrOi8vLy4vYXBwL01haW5XaW5kb3cvc2Nzcy9hcHBQcmV2aWV3LnNjc3M/OTI5ZCIsIndlYnBhY2s6Ly8vLi9hcHAvTWFpbldpbmRvdy9zY3NzL21haW5XaW5kb3cuc2Nzcz9hNTg5Iiwid2VicGFjazovLy8uL2FwcC9jb21tb24vc2Nzcy9lcnJvclBhZ2Uuc2Nzcz8wYmYxIiwid2VicGFjazovLy8uL2FwcC9tYWluLnNjc3M/ZGI3ZiIsIndlYnBhY2s6Ly8vLi9hcHAvTWFpbldpbmRvdy9pbWcvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xyXG5cdCdtYWluX2JhY2tnZF8xLmpwZycsXHJcblx0J21haW5fYmFja2dkXzIuanBnJyxcclxuXHQnbWFpbl9iYWNrZ2RfMy5qcGcnLFxyXG5cdCdtYWluX2JhY2tnZF80LmpwZycsXHJcblx0J21haW5fYmFja2dkXzUuanBnJyxcclxuXHQnbWFpbl9iYWNrZ2RfNi5qcGcnLFxyXG5cdCdtYWluX2JhY2tnZF83LmpwZydcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSAnLi9NYWluV2luZG93L2NvbXBvbmVudHMvTWFpbldpbmRvdyc7XHJcbmltcG9ydCAnLi9tYWluJztcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEhEUmV6a2FNYWluIGZyb20gJy4vSERSZXprYS9jb21wb25lbnRzL0hEUmV6a2FNYWluJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2NvbW1vbi9jb21wb25lbnRzL0Vycm9yUGFnZSc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcclxuXHR7XHJcblx0XHRwYXRoOiAnLycsXHJcblx0XHRlbGVtZW50OiA8TWFpbldpbmRvdyAvPixcclxuXHRcdGVycm9yRWxlbWVudDogPEVycm9yUGFnZSAvPlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJ2hkcmV6a2EnLFxyXG5cdFx0ZWxlbWVudDogPEhEUmV6a2FNYWluIC8+XHJcblx0fSxcclxuXHQvLyBhbGwgaW5jb3JyZWN0IHVybHMgd2lsbCBkaXJlY3QgdG8gTWFpbldpbmRvd1xyXG5cdHtcclxuXHRcdHBhdGg6ICcqJyxcclxuXHRcdGVsZW1lbnQ6IDxNYWluV2luZG93IC8+XHJcblx0fVxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcblx0cmV0dXJuIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+Rm9vdGVyPC9kaXY+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc2Nzcy9IRFJlemthLnNjc3MnO1xyXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9NYWluUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIRFJlemthTWFpbigpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBpZD0naGRyZXprYS1jb250YWluZXInPlxyXG5cdFx0XHQ8TWFpblBhZ2UgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlckJvdHRvbSBmcm9tICcuL0hlYWRlckJvdHRvbSc7XHJcbmltcG9ydCBIZWFkZXJUb3AgZnJvbSAnLi9IZWFkZXJUb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XHJcblx0XHRcdDxIZWFkZXJUb3AgLz5cclxuXHRcdFx0PEhlYWRlckJvdHRvbSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3Njc3MvaGVhZGVyQm90dG9tLnNjc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi9pbWcvc2VhcmNoLWljb24uc3ZnJztcclxuaW1wb3J0IERyb3BEb3duSWNvbiBmcm9tICcuLi9pbWcvYXJyb3dfZG93bi5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyQm90dG9tKCkge1xyXG5cdGNvbnN0IHNlYXJjaDogUmVhY3QuUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IHNlYXJjaEljb246IFJlYWN0LlJlZk9iamVjdDxIVE1MSW1hZ2VFbGVtZW50PiA9IHVzZVJlZihudWxsKTtcclxuXHRjb25zdCBvblNlYXJjaEZvY3VzID0gKCkgPT4ge1xyXG5cdFx0c2VhcmNoLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9pbnB1dF9fb25mb2N1c2VkJyk7XHJcblx0XHRzZWFyY2hJY29uLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9pbWdfX29uZm9jdXNlZCcpO1xyXG5cdH07XHJcblx0Y29uc3Qgb25TZWFyY2hCbHVyID0gKCkgPT4ge1xyXG5cdFx0c2VhcmNoLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaF9pbnB1dF9fb25mb2N1c2VkJyk7XHJcblx0XHRzZWFyY2hJY29uLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaF9pbWdfX29uZm9jdXNlZCcpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX3dyYXAtYm90dG9tJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2hlYWRlci1ib3R0b20nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItYm90dG9tX21lbnUnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnVfaXRlbSc+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWVudS1pdGVtX3RleHQgd2l0aC1kcm9wZG93bic+0KTQuNC70YzQvNGLPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtEcm9wRG93bkljb259XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcm9wZG93bi1pY29uJ1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVudV9pdGVtJz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtZW51LWl0ZW1fdGV4dCB3aXRoLWRyb3Bkb3duJz7QodC10YDQuNCw0LvRizwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17RHJvcERvd25JY29ufVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24taWNvbidcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnVfaXRlbSc+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWVudS1pdGVtX3RleHQgd2l0aC1kcm9wZG93bic+0JzRg9C70YzRgtGE0LjQu9GM0LzRizwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17RHJvcERvd25JY29ufVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24taWNvbidcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnVfaXRlbSc+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWVudS1pdGVtX3RleHQgd2l0aC1kcm9wZG93bic+0JDQvdC40LzQtTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17RHJvcERvd25JY29ufVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24taWNvbidcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnVfaXRlbSc+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWVudS1pdGVtX3RleHQnPtCd0L7QstC40L3QutC4PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVudV9pdGVtJz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtZW51LWl0ZW1fdGV4dCc+0JDQvdC+0L3RgdGLPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVudV9pdGVtJz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtZW51LWl0ZW1fdGV4dCc+0J/QvtC00LHQvtGA0LrQuDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRyZWY9e3NlYXJjaEljb259XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nc2VhcmNoX2ltZydcclxuXHRcdFx0XHRcdFx0c3JjPXtgJHtTZWFyY2hJY29ufWB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHJlZj17c2VhcmNofVxyXG5cdFx0XHRcdFx0XHRvbkZvY3VzPXtvblNlYXJjaEZvY3VzfVxyXG5cdFx0XHRcdFx0XHRvbkJsdXI9e29uU2VhcmNoQmx1cn1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J9Cf0L7QuNGB0Log0YTQuNC70YzQvNC+0LIg0Lgg0YHQtdGA0LjQsNC70L7QsidcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdzZWFyY2hfaW5wdXQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4uL3Njc3MvaGVhZGVyVG9wJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlclRvcCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2hlYWRlcl93cmFwLXRvcCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItdG9wJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc29jaWFscyc+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nc29jaWFsc19idXR0b24nPtCf0L7QtNC/0LjRiNC40YHRjDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NvY2lhbHNfdGhlbWUtYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RvZ2dsZS1idXR0b24nPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbWFpbi1sb2dvJ1xyXG5cdFx0XHRcdFx0dG89JyMnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVudS1idXR0b25zJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtZW51LWJ1dHRvbnNfYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx00JTQvtGB0LzQvtGC0YDQtdGC0YwgKDxzcGFuIGNsYXNzTmFtZT0nY291bnQtZmlsbXMnPjIxOTwvc3Bhbj4pXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtZW51LWJ1dHRvbnNfYnV0dG9uJz7QnNC+0Lgg0LfQsNC60LvQsNC00LrQuDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnUtYnV0dG9uc19idXR0b24nPtCf0YDQvtGE0LjQu9GMPC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4nPk1haW48L2Rpdj47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0PE1haW4gLz5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi4vc2Nzcy9hcHBQcmV2aWV3LnNjc3MnO1xyXG5pbXBvcnQgeyBBcHBzUHJldmlld1Byb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcHNQcmV2aWV3KHsgcHJvamVjdHMgfTogQXBwc1ByZXZpZXdQcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYXBwLXByZXZpZXdfY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2FwcC1wcmV2aWV3X3dyYXAnPlxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHR7cHJvamVjdHMgJiZcclxuXHRcdFx0XHRcdFx0cHJvamVjdHMubWFwKHByb2plY3QgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YGFwcC0ke3Byb2plY3QuaWR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdhcHAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cHJvamVjdC51cmwgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvPXtwcm9qZWN0LnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYXBwX2lubmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBwcm9qZWN0LmltZ1ByZXZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGB1cmwoJHtyZXF1aXJlKCcuLi9pbWcvJyArIHByb2plY3QuaW1nUHJldmlldyl9KWBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGB1cmwoJHtyZXF1aXJlKCcuLi9pbWcvY2xvdWQucG5nJyl9KWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiBwcm9qZWN0LmltZ1ByZXZpZXcgPyAnY292ZXInIDogJ2NvbnRhaW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmVtb3ZlIGxhdGVyLi4uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdhcHBfaW5uZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHByb2plY3QuaW1nUHJldmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYHVybCgke3JlcXVpcmUoJy4uL2ltZy8nICsgcHJvamVjdC5pbWdQcmV2aWV3KX0pYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogYHVybCgke3JlcXVpcmUoJy4uL2ltZy9jbG91ZC5wbmcnKX0pYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IHByb2plY3QuaW1nUHJldmlldyA/ICdjb3ZlcicgOiAnY29udGFpbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHR7IXByb2plY3RzICYmIDxoNCBjbGFzc05hbWU9J25vLWFwcHNfbWVzc2FnZSc+0KMg0LLQsNGBINC10YnRkSDQvdC10YIg0L/RgNC+0LXQutGC0L7QsjwvaDQ+fVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FwcCc+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2FwcF9pbm5lcidcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmVxdWlyZSgnLi4vaW1nL3BsdXMtc3ZnLnN2ZycpfSlgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb250YWluJ1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3Njc3MvbWFpbldpbmRvdyc7XHJcbmltcG9ydCBtYWluQmdzIGZyb20gJy4uL2RhdGFzZXQvbWFpbkJncyc7XHJcbmltcG9ydCBBcHBzUHJldmlldyBmcm9tICcuL0FwcHNQcmV2aWV3JztcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4uL2RhdGFzZXQvdXNlcnMuanNvbic7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbldpbmRvdygpIHtcclxuXHRjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IHJhbmRvbUJnSW1nID0gbWFpbkJnc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWFpbkJncy5sZW5ndGggLSAxKSldO1xyXG5cdGNvbnN0IHN0eWxlTWFpbkNvbmZpZyA9IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmVxdWlyZSgnLi4vaW1nLycgKyByYW5kb21CZ0ltZyl9KWAgfTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFVzZXIodXNlckRhdGEpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0aWQ9J21haW53aW5kb3ctY29udGFpbmVyJ1xyXG5cdFx0XHRzdHlsZT17c3R5bGVNYWluQ29uZmlnfT5cclxuXHRcdFx0PEFwcHNQcmV2aWV3IHByb2plY3RzPXt1c2VyPy5wcm9qZWN0cy5sZW5ndGggPyB1c2VyLnByb2plY3RzIDogbnVsbH0gLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVFcnJvciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4uL3Njc3MvZXJyb3JQYWdlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JQYWdlKCkge1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcblx0Y29uc3QgZXJyb3I6IGFueSA9IHVzZVJvdXRlRXJyb3IoKTtcclxuXHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgaWQ9J2Vycm9yLXBhZ2UnPlxyXG5cdFx0XHQ8aDE+T29wcyE8L2gxPlxyXG5cdFx0XHQ8cD5Tb3JyeSwgYW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQuICYjMTI4NTQ2OzwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0PGk+e2Vycm9yLmRhdGEgfHwgZXJyb3Iuc3RhdHVzVGV4dH08L2k+XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwL0FwcCc7XHJcblxyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpIGFzIEhUTUxFbGVtZW50KTtcclxuXHJcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2xvdWRcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy9jbG91ZC5wbmdcIixcblx0XCIuL2Nsb3VkLnBuZ1wiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL2Nsb3VkLnBuZ1wiLFxuXHRcIi4vaGRyZXprYVwiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL2hkcmV6a2EuanBnXCIsXG5cdFwiLi9oZHJlemthLmpwZ1wiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL2hkcmV6a2EuanBnXCIsXG5cdFwiLi9tYWluX2JhY2tnZF8xXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvbWFpbl9iYWNrZ2RfMS5qcGdcIixcblx0XCIuL21haW5fYmFja2dkXzEuanBnXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvbWFpbl9iYWNrZ2RfMS5qcGdcIixcblx0XCIuL21haW5fYmFja2dkXzJcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy9tYWluX2JhY2tnZF8yLmpwZ1wiLFxuXHRcIi4vbWFpbl9iYWNrZ2RfMi5qcGdcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy9tYWluX2JhY2tnZF8yLmpwZ1wiLFxuXHRcIi4vbWFpbl9iYWNrZ2RfM1wiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL21haW5fYmFja2dkXzMuanBnXCIsXG5cdFwiLi9tYWluX2JhY2tnZF8zLmpwZ1wiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL21haW5fYmFja2dkXzMuanBnXCIsXG5cdFwiLi9tYWluX2JhY2tnZF80XCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvbWFpbl9iYWNrZ2RfNC5qcGdcIixcblx0XCIuL21haW5fYmFja2dkXzQuanBnXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvbWFpbl9iYWNrZ2RfNC5qcGdcIixcblx0XCIuL21haW5fYmFja2dkXzVcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy9tYWluX2JhY2tnZF81LmpwZ1wiLFxuXHRcIi4vbWFpbl9iYWNrZ2RfNS5qcGdcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy9tYWluX2JhY2tnZF81LmpwZ1wiLFxuXHRcIi4vbWFpbl9iYWNrZ2RfNlwiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL21haW5fYmFja2dkXzYuanBnXCIsXG5cdFwiLi9tYWluX2JhY2tnZF82LmpwZ1wiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL21haW5fYmFja2dkXzYuanBnXCIsXG5cdFwiLi9tYWluX2JhY2tnZF83XCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvbWFpbl9iYWNrZ2RfNy5qcGdcIixcblx0XCIuL21haW5fYmFja2dkXzcuanBnXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvbWFpbl9iYWNrZ2RfNy5qcGdcIixcblx0XCIuL3BsdXMtc3ZnXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvcGx1cy1zdmcuc3ZnXCIsXG5cdFwiLi9wbHVzLXN2Zy5zdmdcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy9wbHVzLXN2Zy5zdmdcIixcblx0XCIuL3R3aXRjaFwiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL3R3aXRjaC5qcGdcIixcblx0XCIuL3R3aXRjaC5qcGdcIjogXCIuL2FwcC9NYWluV2luZG93L2ltZy90d2l0Y2guanBnXCIsXG5cdFwiLi92a1wiOiBcIi4vYXBwL01haW5XaW5kb3cvaW1nL3ZrLnBuZ1wiLFxuXHRcIi4vdmsucG5nXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcvdmsucG5nXCIsXG5cdFwiLi95b3V0dWJlXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcveW91dHViZS5qcGdcIixcblx0XCIuL3lvdXR1YmUuanBnXCI6IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcveW91dHViZS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hcHAvTWFpbldpbmRvdy9pbWcgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtZG9tX2NsaWVudF9qcy1ub2RlX21vZHVsZXNfcmVhY3Qtcm91dGVyLWRvbV9kaXN0X2luZGV4X2pzLW5vZGVfbW9kLWUzYjNlMlwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c3hcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbldpbmRvdyIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIkhEUmV6a2FNYWluIiwiRXJyb3JQYWdlIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJBcHAiLCJGb290ZXIiLCJNYWluUGFnZSIsIkhlYWRlckJvdHRvbSIsIkhlYWRlclRvcCIsIkhlYWRlciIsInVzZVJlZiIsIlNlYXJjaEljb24iLCJEcm9wRG93bkljb24iLCJzZWFyY2giLCJzZWFyY2hJY29uIiwib25TZWFyY2hGb2N1cyIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvblNlYXJjaEJsdXIiLCJyZW1vdmUiLCJMaW5rIiwiTWFpbiIsIkFwcHNQcmV2aWV3IiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaWQiLCJ1cmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWdQcmV2aWV3IiwicmVxdWlyZSIsImJhY2tncm91bmRTaXplIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtYWluQmdzIiwidXNlckRhdGEiLCJ1c2VyIiwic2V0VXNlciIsInJhbmRvbUJnSW1nIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibGVuZ3RoIiwic3R5bGVNYWluQ29uZmlnIiwidXNlUm91dGVFcnJvciIsImVycm9yIiwiY29uc29sZSIsImRhdGEiLCJzdGF0dXNUZXh0IiwiUmVhY3RET00iLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9