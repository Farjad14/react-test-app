/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_top_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/top-section */ \"./src/components/top-section/index.js\");\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ */ \"./src/components/index.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MainWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 10%;\n`;\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__[\"IntlProvider\"], {\n    locale: \"en\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_top_section__WEBPACK_IMPORTED_MODULE_2__[\"MainTitle\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_top_section__WEBPACK_IMPORTED_MODULE_2__[\"Description\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_3__[\"TableComponent\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/column-component/index.js":
/*!**************************************************!*\
  !*** ./src/components/column-component/index.js ***!
  \**************************************************/
/*! exports provided: ColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColumnComponent\", function() { return ColumnComponent; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages */ \"./src/components/messages.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/column-component/styles.js\");\n\n\n\n\nconst ColumnComponent = ({\n  items,\n  removeItem,\n  searchTerm\n}) => {\n  const searchList = Object.keys(items).reduce((acc, currCol) => {\n    const filtered = items[currCol].filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()));\n    return { ...acc,\n      [currCol]: filtered\n    };\n  }, {});\n  const results = searchTerm !== \"\" ? searchList : items;\n\n  const columnHeader = i => i === 0 ? _messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].columnOneText : _messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].columnTwoText;\n\n  const keys = Object.keys(results);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"TableWrapper\"], null, keys.map((column, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ColumnSection\"], {\n    key: index\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ColumnTitle\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"FormattedMessage\"], columnHeader(index))), results[column].map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledList\"], {\n    key: i\n  }, item.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    \"data-automation\": item.uid,\n    onClick: () => removeItem(item, column)\n  }, \"x\"))))));\n};\n\n//# sourceURL=webpack:///./src/components/column-component/index.js?");

/***/ }),

/***/ "./src/components/column-component/styles.js":
/*!***************************************************!*\
  !*** ./src/components/column-component/styles.js ***!
  \***************************************************/
/*! exports provided: TableWrapper, ColumnTitle, ColumnSection, StyledList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableWrapper\", function() { return TableWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColumnTitle\", function() { return ColumnTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColumnSection\", function() { return ColumnSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledList\", function() { return StyledList; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TableWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  flex-direction: coloumn;\n  width: 100%;\n  border: 5px solid white;\n  font-size: 16px;\n  flex-shrink: 1;\n`;\nconst ColumnTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  justify-content: center;\n  background-image: linear-gradient(white, #758296, #4c586c);\n  color: white;\n  padding: 10px;\n`;\nconst ColumnSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  :first-child {\n    border-right: 5px solid white;\n  }\n`;\nconst StyledList = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  background: #eeeeef;\n  :nth-child(2n-1) {\n    background: #bbc0c7;\n  }\n`;\n\n//# sourceURL=webpack:///./src/components/column-component/styles.js?");

/***/ }),

/***/ "./src/components/form-component/index.js":
/*!************************************************!*\
  !*** ./src/components/form-component/index.js ***!
  \************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormComponent\", function() { return FormComponent; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-component */ \"./src/components/search-component/index.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages */ \"./src/components/messages.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/form-component/styles.js\");\n\n\n\n\n\n\nconst FormComponent = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"injectIntl\"])(({\n  addItem,\n  intl,\n  searchTerm,\n  handleChange\n}) => {\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"\");\n  const [column, setColumn] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"\");\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    if (!value) return;\n    if (!column) return;\n    const uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_4__[\"v4\"])();\n    addItem(value, column, uuid);\n    setValue(\"\");\n    setColumn(\"\");\n  };\n\n  const handleSelectChange = e => {\n    setColumn(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"FormSection\"], {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"EnterItemInput\"], {\n    type: \"text\",\n    value: value,\n    onChange: e => setValue(e.target.value),\n    placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].enterItemInput)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"ChooseColumnInput\"], {\n    onChange: handleSelectChange,\n    value: column\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].chooseColumnButton, msgs => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n    value: \"\"\n  }, msgs)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].columnOneText, msgs => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n    value: \"col1\"\n  }, msgs)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].columnTwoText, msgs => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n    value: \"col2\"\n  }, msgs))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"AddItemBtn\"], {\n    type: \"submit\",\n    value: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addItemBtn)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_search_component__WEBPACK_IMPORTED_MODULE_2__[\"SearchComponent\"], {\n    searchTerm: searchTerm,\n    handleChange: handleChange\n  }));\n});\n\n//# sourceURL=webpack:///./src/components/form-component/index.js?");

/***/ }),

/***/ "./src/components/form-component/styles.js":
/*!*************************************************!*\
  !*** ./src/components/form-component/styles.js ***!
  \*************************************************/
/*! exports provided: FormSection, ChooseColumnInput, EnterItemInput, AddItemBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormSection\", function() { return FormSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChooseColumnInput\", function() { return ChooseColumnInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EnterItemInput\", function() { return EnterItemInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddItemBtn\", function() { return AddItemBtn; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FormSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.form`\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  margin-right: 10px;\n  width: 100%;\n  flex-shrink: 2;\n  @media (max-width: 800px) {\n    margin-right: 0px;\n  }\n`;\nconst ChooseColumnInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.select`\n  display: flex;\n  justify-content: center;\n  background: #9ba1ab;\n  color: rgb(255, 255, 255, 0.7);\n  padding: 10px;\n  margin: 10px 0 140px 0;\n  border: white 2px solid;\n  @media (max-width: 800px) {\n    margin: 10px 0 20px 0;\n  }\n`;\nconst EnterItemInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.input`\n  display: flex;\n  justify-content: center;\n  background: #9ba1ab;\n  color: white;\n  padding: 10px;\n  margin: 0 0 10px 0;\n  border: white 2px solid;\n  ::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: white;\n    opacity: 0.7; /* Firefox */\n  }\n`;\nconst AddItemBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.input`\n  display: flex;\n  justify-content: center;\n  background: #79818f;\n  color: white;\n  padding: 10px;\n  width: 100%;\n  margin: 10px 0 10px 0;\n  border: white 2px solid;\n`;\n\n//# sourceURL=webpack:///./src/components/form-component/styles.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: TableTitleWrapper, TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableTitleWrapper\", function() { return TableTitleWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableComponent\", function() { return TableComponent; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ \"./src/components/messages.js\");\n/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-component */ \"./src/components/form-component/index.js\");\n/* harmony import */ var _column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./column-component */ \"./src/components/column-component/index.js\");\n\n\n\n\n\n\nconst TableTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  justify-content: center;\n  background-image: linear-gradient(white, #95a2b3, #818fa2);\n  color: white;\n  padding: 10px;\n  margin: 10px 0 10px 0;\n`;\nconst SecondaryWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  flex-direction: row;\n  @media (max-width: 800px) {\n    flex-wrap: wrap;\n  }\n`;\nconst Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  font-size: 14px;\n`;\nconst TableTitleWrapper = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TableTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formTitle));\nconst TableComponent = () => {\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({\n    col1: [{\n      uid: \"uuidv4\",\n      text: \"Farjad\"\n    }, {\n      uid: \"uuidv224\",\n      text: \"Anna\"\n    }],\n    col2: [{\n      uid: \"uuidv4\",\n      text: \"H8tch\"\n    }]\n  });\n\n  const addItem = (text, col, uid) => {\n    const newItems = { ...items,\n      [col]: [...items[col], {\n        text,\n        uid,\n        col\n      }]\n    };\n    setItems(newItems);\n  };\n\n  const removeItem = (item, col) => {\n    const values = items[col];\n    const index = values.findIndex(i => i.uid === item.uid);\n    values.splice(index, 1);\n    const itemIndex = { ...items,\n      [col]: values\n    };\n    setItems(itemIndex);\n  };\n\n  const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(\"\");\n\n  const handleSearchChange = event => {\n    setSearchTerm(event.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TableTitleWrapper, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SecondaryWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_form_component__WEBPACK_IMPORTED_MODULE_4__[\"FormComponent\"], {\n    addItem: addItem,\n    searchTerm: searchTerm,\n    handleChange: handleSearchChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_column_component__WEBPACK_IMPORTED_MODULE_5__[\"ColumnComponent\"], {\n    items: items,\n    searchTerm: searchTerm,\n    removeItem: removeItem\n  })));\n};\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/components/messages.js":
/*!************************************!*\
  !*** ./src/components/messages.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mainTitle: {\n    id: \"main.title.text\",\n    description: \"main app title\",\n    defaultMessage: \"Marvelous!\"\n  },\n  description: {\n    id: \"main.description.text\",\n    description: \"main app description\",\n    defaultMessage: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since.\"\n  },\n  formTitle: {\n    id: \"form.title.text\",\n    description: \"form app title\",\n    defaultMessage: \"ADD AN ITEM\"\n  },\n  enterItemInput: {\n    id: \"form.enterItemInput.btn\",\n    description: \"enterItemInput\",\n    defaultMessage: \"ENTER ITEM\"\n  },\n  chooseColumnButton: {\n    id: \"form.chooseColumnButton.btn\",\n    description: \"chooseColumnButton\",\n    defaultMessage: \"CHOOSE COLUMN\"\n  },\n  addItemBtn: {\n    id: \"form.addItemBtn.btn\",\n    description: \"addItemBtn\",\n    defaultMessage: \"ADD ITEM\"\n  },\n  searchItemTitle: {\n    id: \"form.searchItemTitle.text\",\n    description: \"searchItemTitle\",\n    defaultMessage: \"SEARCH AN ITEM\"\n  },\n  searchPlaceHolder: {\n    id: \"form.search.placeholder\",\n    description: \"searchItemTitle\",\n    defaultMessage: \"SEARCH\"\n  },\n  columnOneText: {\n    id: \"form.columnOneText.text\",\n    description: \"columnOneText\",\n    defaultMessage: \"COLUMN 1\"\n  },\n  columnTwoText: {\n    id: \"form.columnTwoText.text\",\n    description: \"columnTwoText\",\n    defaultMessage: \"COLUMN 2\"\n  }\n});\n\n//# sourceURL=webpack:///./src/components/messages.js?");

/***/ }),

/***/ "./src/components/search-component/index.js":
/*!**************************************************!*\
  !*** ./src/components/search-component/index.js ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchComponent\", function() { return SearchComponent; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages */ \"./src/components/messages.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/search-component/styles.js\");\n\n\n\n\nconst SearchComponent = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"injectIntl\"])(({\n  searchTerm,\n  handleChange,\n  intl\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledSearchComponent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledSearchText\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchItemTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"SearchStyledInput\"], {\n  type: \"text\",\n  placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchPlaceHolder),\n  value: searchTerm,\n  onChange: handleChange\n})));\n\n//# sourceURL=webpack:///./src/components/search-component/index.js?");

/***/ }),

/***/ "./src/components/search-component/styles.js":
/*!***************************************************!*\
  !*** ./src/components/search-component/styles.js ***!
  \***************************************************/
/*! exports provided: StyledSearchComponent, StyledSearchText, SearchStyledInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledSearchComponent\", function() { return StyledSearchComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledSearchText\", function() { return StyledSearchText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchStyledInput\", function() { return SearchStyledInput; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledSearchComponent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  flex-direction: column;\n  color: white;\n  margin-top: 40px;\n`;\nconst StyledSearchText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n  font-size: 14px;\n  font-weight: bold;\n`;\nconst SearchStyledInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.input`\n  background: #9ba1ab;\n  color: white;\n  padding: 10px;\n  margin-top: 5px;\n  border: white 2px solid;\n  ::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: white;\n    opacity: 0.7; /* Firefox */\n  }\n  @media (max-width: 800px) {\n    margin: 10px 0 30px 0;\n  }\n`;\n\n//# sourceURL=webpack:///./src/components/search-component/styles.js?");

/***/ }),

/***/ "./src/components/top-section/index.js":
/*!*********************************************!*\
  !*** ./src/components/top-section/index.js ***!
  \*********************************************/
/*! exports provided: MainTitle, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainTitle\", function() { return MainTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages */ \"./src/components/messages.js\");\n\n\n\n\nconst StyledMainTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n  display: flex;\n  color: white;\n  font-size: 50px;\n  font-style: italic;\n  font-family: Merriweather, serif;\n  @media (max-width: 800px) {\n    font-size: 36px;\n  }\n`;\nconst StyledDescription = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`\n  display: flex;\n  color: #8adfd6;\n  font-size: 20px;\n  margin: 10px 0 60px 0;\n  width: 55%;\n  @media (max-width: 800px) {\n    width: 100%;\n    font-size: 16px;\n  }\n`;\nconst MainTitle = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMainTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mainTitle));\nconst Description = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledDescription, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].description));\n\n//# sourceURL=webpack:///./src/components/top-section/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3010;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");\n\n//# sourceURL=webpack:///external_%22@emotion/styled%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");\n\n//# sourceURL=webpack:///external_%22react-intl%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });