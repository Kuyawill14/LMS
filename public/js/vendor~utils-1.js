<<<<<<< HEAD
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/vendor~utils-1"],{

/***/ "./node_modules/vue-core-video-player/dist/vue-core-video-player.common.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-core-video-player/dist/vue-core-video-player.common.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
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
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __nested_webpack_require_3663__("e53d");
var has = __nested_webpack_require_3663__("07e3");
var DESCRIPTORS = __nested_webpack_require_3663__("8e60");
var $export = __nested_webpack_require_3663__("63b6");
var redefine = __nested_webpack_require_3663__("9138");
var META = __nested_webpack_require_3663__("ebfd").KEY;
var $fails = __nested_webpack_require_3663__("294c");
var shared = __nested_webpack_require_3663__("dbdb");
var setToStringTag = __nested_webpack_require_3663__("45f2");
var uid = __nested_webpack_require_3663__("62a0");
var wks = __nested_webpack_require_3663__("5168");
var wksExt = __nested_webpack_require_3663__("ccb9");
var wksDefine = __nested_webpack_require_3663__("6718");
var enumKeys = __nested_webpack_require_3663__("47ee");
var isArray = __nested_webpack_require_3663__("9003");
var anObject = __nested_webpack_require_3663__("e4ae");
var isObject = __nested_webpack_require_3663__("f772");
var toObject = __nested_webpack_require_3663__("241e");
var toIObject = __nested_webpack_require_3663__("36c3");
var toPrimitive = __nested_webpack_require_3663__("1bc3");
var createDesc = __nested_webpack_require_3663__("aebd");
var _create = __nested_webpack_require_3663__("a159");
var gOPNExt = __nested_webpack_require_3663__("0395");
var $GOPD = __nested_webpack_require_3663__("bf0b");
var $GOPS = __nested_webpack_require_3663__("9aa9");
var $DP = __nested_webpack_require_3663__("d9f6");
var $keys = __nested_webpack_require_3663__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __nested_webpack_require_3663__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __nested_webpack_require_3663__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__nested_webpack_require_3663__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __nested_webpack_require_3663__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_13165__) {

"use strict";

var LIBRARY = __nested_webpack_require_13165__("2d00");
var $export = __nested_webpack_require_13165__("5ca1");
var redefine = __nested_webpack_require_13165__("2aba");
var hide = __nested_webpack_require_13165__("32e9");
var Iterators = __nested_webpack_require_13165__("84f2");
var $iterCreate = __nested_webpack_require_13165__("41a0");
var setToStringTag = __nested_webpack_require_13165__("7f20");
var getPrototypeOf = __nested_webpack_require_13165__("38fd");
var ITERATOR = __nested_webpack_require_13165__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_16071__) {

var toInteger = __nested_webpack_require_16071__("4588");
var defined = __nested_webpack_require_16071__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_16784__) {

"use strict";

var at = __nested_webpack_require_16784__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __nested_webpack_require_17135__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __nested_webpack_require_17135__("36c3");
var gOPN = __nested_webpack_require_17135__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __nested_webpack_require_18011__) {

exports = module.exports = __nested_webpack_require_18011__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-layers{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:100%}", ""]);

// exports


/***/ }),

/***/ "0b49":
/***/ (function(module, exports, __nested_webpack_require_18325__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_18325__("3b4a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_18325__("499e").default
var update = add("b8b31476", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_18818__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_18818__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d22":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_19289__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19289__("3863");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_19289__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0d2d":
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":{\"btn\":{\"play\":\"再生\",\"pause\":\"一時停止\",\"fullscreen\":\"全画面\",\"exitFullscreen\":\"全画面をキャンセル\",\"mute\":\"ミュート\",\"unmute\":\"ミュートを解除\",\"back\":\"戻る\",\"pip\":\"ピクチャインピクチャ\"},\"settings\":{\"autoplay\":\"自動再生\",\"loop\":\"ループプレイ\",\"speed\":\"スピード\",\"resolution\":\"画質\"}},\"layers\":{\"error\":{\"2404\":\"ソースが見つかりません\",\"2502\":\"ネットワークエラー\",\"2503\":\"デコードエラー\",\"2504\":\"働いていない\",\"title\":\"(O_O)?  再生エラー!\"},\"loading\":{\"msg\":\"待っている ...\"}}}");

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_22235__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_22235__("ce10");
var enumBugKeys = __nested_webpack_require_22235__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0e5b":
/***/ (function(module, exports, __nested_webpack_require_22534__) {

exports = module.exports = __nested_webpack_require_22534__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-controls{z-index:10;position:absolute;left:0;bottom:5px;width:100%;height:50px;text-align:left}.playback-control,.setting-control{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;height:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.playback-control{left:0}.setting-control{right:0}", ""]);

// exports


/***/ }),

/***/ "0ee8":
/***/ (function(module, exports, __nested_webpack_require_23176__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_23176__("f31c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_23176__("499e").default
var update = add("20ebd1d3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __nested_webpack_require_23669__) {

var toInteger = __nested_webpack_require_23669__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1170":
/***/ (function(module, exports, __nested_webpack_require_23979__) {

exports = module.exports = __nested_webpack_require_23979__("2350")(false);
// imports


// module
exports.push([module.i, ".settings-control .btn-mute{display:none}.settings-control .btn-settings svg{width:24px;margin-top:-2px}.settings-control .btn-control-panel{display:block;right:0;left:auto;min-height:130px;-webkit-transform:translateX(0);transform:translateX(0)}.settings-control .btn-control-panel .current-panel{width:180px}.settings-control .btn-control-panel .resolution-list,.settings-control .btn-control-panel .speed-list{width:80px}.settings-control .btn-control-panel .resolution-list li,.settings-control .btn-control-panel .speed-list li{cursor:pointer}.settings-control .btn-control-panel .resolution-list li:first-child,.settings-control .btn-control-panel .speed-list li:first-child{margin-left:-20px;cursor:pointer}.vcp-m-dashboard .settings-control .btn-control-panel{z-index:20000;position:fixed;left:0;right:0;bottom:0}.vcp-m-dashboard .settings-control .btn-control-panel .current-panel{width:100%}.vcp-m-dashboard .settings-control .btn-control-panel .resolution-list,.vcp-m-dashboard .settings-control .btn-control-panel .speed-list{margin-left:20px}", ""]);

// exports


/***/ }),

/***/ "11de":
/***/ (function(module, exports, __nested_webpack_require_25250__) {

exports = module.exports = __nested_webpack_require_25250__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-controls{z-index:10;position:absolute;left:0;bottom:5px;width:100%;height:50px;text-align:left}.playback-control,.setting-control{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;height:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.playback-control{left:0}.setting-control{right:0}", ""]);

// exports


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __nested_webpack_require_25892__) {

var pIE = __nested_webpack_require_25892__("52a7");
var createDesc = __nested_webpack_require_25892__("4630");
var toIObject = __nested_webpack_require_25892__("6821");
var toPrimitive = __nested_webpack_require_25892__("6a99");
var has = __nested_webpack_require_25892__("69a8");
var IE8_DOM_DEFINE = __nested_webpack_require_25892__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __nested_webpack_require_25892__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "12ae":
/***/ (function(module, exports, __nested_webpack_require_26571__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_26571__("1170");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_26571__("499e").default
var update = add("280eb641", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_27064__) {

var dP = __nested_webpack_require_27064__("86cc");
var anObject = __nested_webpack_require_27064__("cb7c");
var getKeys = __nested_webpack_require_27064__("0d58");

module.exports = __nested_webpack_require_27064__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "14ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};


/***/ }),

/***/ "156e":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27919__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27919__("234e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_27919__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1654":
/***/ (function(module, exports, __nested_webpack_require_30312__) {

"use strict";

var $at = __nested_webpack_require_30312__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__nested_webpack_require_30312__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1689":
/***/ (function(module, exports, __nested_webpack_require_30934__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_30934__("cfb4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_30934__("499e").default
var update = add("169e5806", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1793":
/***/ (function(module, exports, __nested_webpack_require_31650__) {

"use strict";


var isFunction = __nested_webpack_require_31650__("6321");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};


/***/ }),

/***/ "18ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};


/***/ }),

/***/ "1a94":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "1b6f":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_32559__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32559__("ff1c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_32559__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __nested_webpack_require_34984__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_34984__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __nested_webpack_require_35727__) {

var isObject = __nested_webpack_require_35727__("f772");
var document = __nested_webpack_require_35727__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2031":
/***/ (function(module, exports, __nested_webpack_require_36111__) {

"use strict";


module.exports = __nested_webpack_require_36111__("14ab")() ? Object.assign : __nested_webpack_require_36111__("f60e");


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_36305__) {

"use strict";

__nested_webpack_require_36305__("b0c5");
var redefine = __nested_webpack_require_36305__("2aba");
var hide = __nested_webpack_require_36305__("32e9");
var fails = __nested_webpack_require_36305__("79e5");
var defined = __nested_webpack_require_36305__("be13");
var wks = __nested_webpack_require_36305__("2b4c");
var regexpExec = __nested_webpack_require_36305__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "22bf":
/***/ (function(module, exports, __nested_webpack_require_39762__) {

exports = module.exports = __nested_webpack_require_39762__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-m-dashboard{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:59px;background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.7),transparent)}.fullscreen .vcp-m-dashboard{bottom:12px}.small .vcp-m-dashboard{height:49px}.settings-open .vcp-m-dashboard{display:block!important}.small .vcp-m-dashboard .vcp-controls{height:40px}", ""]);

// exports


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_40400__) {

var isObject = __nested_webpack_require_40400__("d3f4");
var document = __nested_webpack_require_40400__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2316":
/***/ (function(module, exports, __nested_webpack_require_40784__) {

exports = module.exports = __nested_webpack_require_40784__("2350")(false);
// imports


// module
exports.push([module.i, ".title-layer{z-index:11;text-align:left}.title-layer .video-title{position:absolute;top:0;left:0;right:0;padding:16px 20px;line-height:32px;font-size:14px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.7)),to(transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.7),transparent)}.fullscreen .title-layer .video-title{font-size:16px;font-weight:700}", ""]);

// exports


/***/ }),

/***/ "234e":
/***/ (function(module, exports, __nested_webpack_require_41392__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_41392__("743b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_41392__("499e").default
var update = add("13d618fe", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_44208__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_44208__("2d95");
var TAG = __nested_webpack_require_44208__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __nested_webpack_require_45030__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_45030__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "263c":
/***/ (function(module, exports, __nested_webpack_require_45582__) {

exports = module.exports = __nested_webpack_require_45582__("2350")(false);
// imports


// module
exports.push([module.i, ".play-pause-layer{z-index:12;background:rgba(0,0,0,.25)}.play-pause-layer .btn-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;left:50%;width:60px;height:60px;margin-left:-30px;margin-top:-30px;background-color:#fff;border-radius:30px}.play-pause-layer .btn-control:before{content:\"\";display:block;position:absolute;top:50%;left:50%;width:72px;height:72px;margin-left:-36px;margin-top:-36px;border-radius:36px;background-color:hsla(0,0%,100%,.25)}.play-pause-layer .btn-play svg{margin-left:10px}", ""]);

// exports


/***/ }),

/***/ "2814":
/***/ (function(module, exports, __nested_webpack_require_46469__) {

exports = module.exports = __nested_webpack_require_46469__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control{display:inline-block;position:relative;width:30px;height:30px}.vue-core-video-player-control svg{width:20px}.volume-control:hover .btn-control-panel{display:block}.volume-control .btn-control-panel{display:none;width:40px;height:150px}.volume-control .btn-control-panel:before{content:\"\";display:block;position:absolute;bottom:-30px;left:0;width:100%;height:35px}.volume-control .btn-control-panel .progress{position:absolute;width:4px;height:100px;left:50%;top:50%;margin-left:-2px;margin-top:-50px;background-color:hsla(0,0%,100%,.7);cursor:pointer}.volume-control .btn-control-panel .progress .volume-current{position:absolute;bottom:0;left:0;height:0;width:100%;background-color:#ff6060}.volume-control .btn-control-panel .progress .volume-current .thumb-drag{opacity:0;position:absolute;left:50%;top:0;width:10px;height:10px;border-radius:5px;background-color:#fff;-webkit-transform:translateY(-50%) translateX(-50%);transform:translateY(-50%) translateX(-50%);-webkit-transition:height .05s ease .15s;transition:height .05s ease .15s}.volume-control .btn-control-panel .progress .volume-current .thumb-drag:before{content:\"\";display:inline-block;position:absolute;top:-2px;left:-2px;width:14px;height:14px;border-radius:7px;background-color:hsla(0,0%,100%,.3)}.volume-control .btn-control-panel .progress:hover .thumb-drag{opacity:1}.volume-control .btn-control-panel .volume-info{position:absolute;top:-30px;left:0;width:40px;height:20px;background-color:rgba(0,0,0,.7);border-radius:4px;font-size:12px;line-height:20px}.settings-open .volume-control:hover .btn-control-panel{display:none}", ""]);

// exports


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __nested_webpack_require_48316__) {

"use strict";


var isRegExp = __nested_webpack_require_48316__("aae3");
var anObject = __nested_webpack_require_48316__("cb7c");
var speciesConstructor = __nested_webpack_require_48316__("ebd6");
var advanceStringIndex = __nested_webpack_require_48316__("0390");
var toLength = __nested_webpack_require_48316__("9def");
var callRegExpExec = __nested_webpack_require_48316__("5f1b");
var regexpExec = __nested_webpack_require_48316__("520a");
var fails = __nested_webpack_require_48316__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__nested_webpack_require_48316__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_53800__) {

var global = __nested_webpack_require_53800__("7726");
var hide = __nested_webpack_require_53800__("32e9");
var has = __nested_webpack_require_53800__("69a8");
var SRC = __nested_webpack_require_53800__("ca5a")('src');
var $toString = __nested_webpack_require_53800__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_53800__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_54974__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_54974__("cb7c");
var dPs = __nested_webpack_require_54974__("1495");
var enumBugKeys = __nested_webpack_require_54974__("e11e");
var IE_PROTO = __nested_webpack_require_54974__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_54974__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_54974__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_56585__) {

var store = __nested_webpack_require_56585__("5537")('wks');
var uid = __nested_webpack_require_56585__("ca5a");
var Symbol = __nested_webpack_require_56585__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2be5":
/***/ (function(module, exports, __nested_webpack_require_57051__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_57051__("07fa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_57051__("499e").default
var update = add("6fa741d5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2c1a":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_57556__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57556__("2be5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_57556__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d60":
/***/ (function(module, exports, __nested_webpack_require_59784__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_59784__("6f66");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_59784__("499e").default
var update = add("61ad65d7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __nested_webpack_require_60446__) {

"use strict";

var LIBRARY = __nested_webpack_require_60446__("b8e3");
var $export = __nested_webpack_require_60446__("63b6");
var redefine = __nested_webpack_require_60446__("9138");
var hide = __nested_webpack_require_60446__("35e8");
var Iterators = __nested_webpack_require_60446__("481b");
var $iterCreate = __nested_webpack_require_60446__("8f60");
var setToStringTag = __nested_webpack_require_60446__("45f2");
var getPrototypeOf = __nested_webpack_require_60446__("53e2");
var ITERATOR = __nested_webpack_require_60446__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_63352__) {

var dP = __nested_webpack_require_63352__("86cc");
var createDesc = __nested_webpack_require_63352__("4630");
module.exports = __nested_webpack_require_63352__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __nested_webpack_require_63728__) {

var document = __nested_webpack_require_63728__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __nested_webpack_require_63920__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_63920__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __nested_webpack_require_64403__) {

var dP = __nested_webpack_require_64403__("d9f6");
var createDesc = __nested_webpack_require_64403__("aebd");
module.exports = __nested_webpack_require_64403__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __nested_webpack_require_64779__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_64779__("335c");
var defined = __nested_webpack_require_64779__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __nested_webpack_require_65092__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__nested_webpack_require_65092__("9e1e") && /./g.flags != 'g') __nested_webpack_require_65092__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __nested_webpack_require_65092__("0bfb")
});


/***/ }),

/***/ "3863":
/***/ (function(module, exports, __nested_webpack_require_65391__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_65391__("f232");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_65391__("499e").default
var update = add("3b10f201", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_65884__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_65884__("69a8");
var toObject = __nested_webpack_require_65884__("4bf8");
var IE_PROTO = __nested_webpack_require_65884__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __nested_webpack_require_66702__) {

exports = module.exports = __nested_webpack_require_66702__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control.timespan{line-height:30px;width:140px;font-family:Arial!important}", ""]);

// exports


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_67015__) {

"use strict";

var create = __nested_webpack_require_67015__("2aeb");
var descriptor = __nested_webpack_require_67015__("4630");
var setToStringTag = __nested_webpack_require_67015__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_67015__("32e9")(IteratorPrototype, __nested_webpack_require_67015__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "42e9":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_67653__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67653__("e9c8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_67653__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4447":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_70042__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70042__("6412");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_70042__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "454f":
/***/ (function(module, exports, __nested_webpack_require_72223__) {

__nested_webpack_require_72223__("46a7");
var $Object = __nested_webpack_require_72223__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_72495__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_72495__("4bf8");
var $keys = __nested_webpack_require_72495__("0d58");

__nested_webpack_require_72495__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __nested_webpack_require_73037__) {

var def = __nested_webpack_require_73037__("d9f6").f;
var has = __nested_webpack_require_73037__("07e3");
var TAG = __nested_webpack_require_73037__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __nested_webpack_require_73643__) {

var $export = __nested_webpack_require_73643__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__nested_webpack_require_73643__("8e60"), 'Object', { defineProperty: __nested_webpack_require_73643__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __nested_webpack_require_73957__) {

// all enumerable object keys, includes symbols
var getKeys = __nested_webpack_require_73957__("c3a1");
var gOPS = __nested_webpack_require_73957__("9aa9");
var pIE = __nested_webpack_require_73957__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_74613__) {

"use strict";
__nested_webpack_require_74613__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __nested_webpack_require_74613__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_81836__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_81836__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4cc6":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_82070__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82070__("7c86");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_82070__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5005":
/***/ (function(module, exports, __nested_webpack_require_84287__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_84287__("22bf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_84287__("499e").default
var update = add("c17df316", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "504c":
/***/ (function(module, exports, __nested_webpack_require_84780__) {

var DESCRIPTORS = __nested_webpack_require_84780__("9e1e");
var getKeys = __nested_webpack_require_84780__("0d58");
var toIObject = __nested_webpack_require_84780__("6821");
var isEnum = __nested_webpack_require_84780__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __nested_webpack_require_85585__) {

var store = __nested_webpack_require_85585__("dbdb")('wks');
var uid = __nested_webpack_require_85585__("62a0");
var Symbol = __nested_webpack_require_85585__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_86051__) {

"use strict";


var regexpFlags = __nested_webpack_require_86051__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "5276":
/***/ (function(module, exports, __nested_webpack_require_87884__) {

exports = module.exports = __nested_webpack_require_87884__("2350")(false);
// imports


// module
exports.push([module.i, ".logo-layer{z-index:11;text-align:left}.logo-layer .logo-wrap{position:absolute;top:15px;right:15px;opacity:.7;text-align:right}.logo-layer .logo-wrap img{max-width:160px;height:48px}", ""]);

// exports


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5311":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_88395__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88395__("0b49");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_88395__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __nested_webpack_require_90784__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_90784__("07e3");
var toObject = __nested_webpack_require_90784__("241e");
var IE_PROTO = __nested_webpack_require_90784__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_91378__) {

var core = __nested_webpack_require_91378__("8378");
var global = __nested_webpack_require_91378__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_91378__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __nested_webpack_require_91911__) {

var shared = __nested_webpack_require_91911__("dbdb")('keys');
var uid = __nested_webpack_require_91911__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5695":
/***/ (function(module, exports, __nested_webpack_require_92171__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_92171__("e9d0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_92171__("499e").default
var update = add("1c7c0837", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "56fb":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_92676__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_92676__("f922");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_92676__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __nested_webpack_require_95254__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_95254__("36c3");
var toLength = __nested_webpack_require_95254__("b447");
var toAbsoluteIndex = __nested_webpack_require_95254__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_96265__) {

var global = __nested_webpack_require_96265__("7726");
var core = __nested_webpack_require_96265__("8378");
var hide = __nested_webpack_require_96265__("32e9");
var redefine = __nested_webpack_require_96265__("2aba");
var ctx = __nested_webpack_require_96265__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __nested_webpack_require_97990__) {

module.exports = __nested_webpack_require_97990__("d8d6");

/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_98119__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_98119__("5ca1");
var core = __nested_webpack_require_98119__("8378");
var fails = __nested_webpack_require_98119__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5edd":
/***/ (function(module, exports, __nested_webpack_require_98597__) {

"use strict";


var isValue = __nested_webpack_require_98597__("936a");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_98990__) {

"use strict";


var classof = __nested_webpack_require_98990__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_99696__) {

var shared = __nested_webpack_require_99696__("5537")('keys');
var uid = __nested_webpack_require_99696__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_99956__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_99956__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "62c4":
/***/ (function(module, exports, __nested_webpack_require_100564__) {

"use strict";


var _undefined = __nested_webpack_require_100564__("e76c")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };


/***/ }),

/***/ "6321":
/***/ (function(module, exports, __nested_webpack_require_100816__) {

"use strict";


var isPrototype = __nested_webpack_require_100816__("9013");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __nested_webpack_require_101349__) {

var global = __nested_webpack_require_101349__("e53d");
var core = __nested_webpack_require_101349__("584a");
var ctx = __nested_webpack_require_101349__("d864");
var hide = __nested_webpack_require_101349__("35e8");
var has = __nested_webpack_require_101349__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6412":
/***/ (function(module, exports, __nested_webpack_require_103827__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_103827__("263c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_103827__("499e").default
var update = add("2625ca16", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6718":
/***/ (function(module, exports, __nested_webpack_require_104320__) {

var global = __nested_webpack_require_104320__("e53d");
var core = __nested_webpack_require_104320__("584a");
var LIBRARY = __nested_webpack_require_104320__("b8e3");
var wksExt = __nested_webpack_require_104320__("ccb9");
var defineProperty = __nested_webpack_require_104320__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __nested_webpack_require_104853__) {

module.exports = __nested_webpack_require_104853__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_104982__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_104982__("626a");
var defined = __nested_webpack_require_104982__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __nested_webpack_require_105478__) {

__nested_webpack_require_105478__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_105608__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_105608__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __nested_webpack_require_106351__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __nested_webpack_require_106351__("e6f3");
var hiddenKeys = __nested_webpack_require_106351__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __nested_webpack_require_106885__) {

"use strict";

__nested_webpack_require_106885__("3846");
var anObject = __nested_webpack_require_106885__("cb7c");
var $flags = __nested_webpack_require_106885__("0bfb");
var DESCRIPTORS = __nested_webpack_require_106885__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __nested_webpack_require_106885__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__nested_webpack_require_106885__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __nested_webpack_require_107821__) {

__nested_webpack_require_107821__("c367");
var global = __nested_webpack_require_107821__("e53d");
var hide = __nested_webpack_require_107821__("35e8");
var Iterators = __nested_webpack_require_107821__("481b");
var TO_STRING_TAG = __nested_webpack_require_107821__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6d0c":
/***/ (function(module, exports, __nested_webpack_require_108900__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_108900__("6ddc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_108900__("499e").default
var update = add("f6023f92", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6ddc":
/***/ (function(module, exports, __nested_webpack_require_109393__) {

exports = module.exports = __nested_webpack_require_109393__("2350")(false);
// imports


// module
exports.push([module.i, ".loading-layer{z-index:16;background-color:#333}.loading-layer .loading-wrap{position:absolute;left:50%;top:50%;width:120px;height:80px;margin-top:-40px;margin-left:-60px;text-align:center}.loading-layer .h5-layer-loading{position:relative;width:40px;height:40px;margin:0 auto}.loading-layer .h5-layer-loading .spinner{backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite}.loading-layer .h5-layer-loading p{padding-top:20px}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.loading-layer .h5-layer-loading .path{stroke-dasharray:188.8;stroke-dashoffset:188.8;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite}.loading-layer .h5-layer-loading .dot1{-webkit-animation:dot1a 1.4s ease-in-out infinite;animation:dot1a 1.4s ease-in-out infinite}.loading-layer .h5-layer-loading .dot1,.loading-layer .h5-layer-loading .dot2{stroke-dasharray:188.8;stroke-dashoffset:187.8;-webkit-transform-origin:center;transform-origin:center}.loading-layer .h5-layer-loading .dot2{-webkit-animation:dot2a 1.4s ease-in-out infinite forwards;animation:dot2a 1.4s ease-in-out infinite forwards}@-webkit-keyframes dash{0%{stroke-dashoffset:188.8}50%{stroke-dashoffset:47.2;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:188.8}50%{stroke-dashoffset:47.2;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes dot1a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dot1a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes dot2a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(415deg);transform:rotate(415deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dot2a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(415deg);transform:rotate(415deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}", ""]);

// exports


/***/ }),

/***/ "6f66":
/***/ (function(module, exports, __nested_webpack_require_112625__) {

exports = module.exports = __nested_webpack_require_112625__("2350")(false);
// imports


// module
exports.push([module.i, ".cover-layer{z-index:11;background-color:#333}.cover-layer img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", ""]);

// exports


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __nested_webpack_require_112964__) {

var toInteger = __nested_webpack_require_112964__("3a38");
var defined = __nested_webpack_require_112964__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __nested_webpack_require_113677__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __nested_webpack_require_113677__("9e1e");
var getKeys = __nested_webpack_require_113677__("0d58");
var gOPS = __nested_webpack_require_113677__("2621");
var pIE = __nested_webpack_require_113677__("52a7");
var toObject = __nested_webpack_require_113677__("4bf8");
var IObject = __nested_webpack_require_113677__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __nested_webpack_require_113677__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "7335":
/***/ (function(module, exports, __nested_webpack_require_115070__) {

exports = module.exports = __nested_webpack_require_115070__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control .btn-pip svg{width:22px}", ""]);

// exports


/***/ }),

/***/ "7373":
/***/ (function(module, exports, __nested_webpack_require_115341__) {

"use strict";


var isValue = __nested_webpack_require_115341__("62c4");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "743b":
/***/ (function(module, exports, __nested_webpack_require_115606__) {

exports = module.exports = __nested_webpack_require_115606__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control .btn-fullscreen svg{width:20px}", ""]);

// exports


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __nested_webpack_require_115884__) {

__nested_webpack_require_115884__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_116443__) {

var toInteger = __nested_webpack_require_116443__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __nested_webpack_require_116753__) {

module.exports = !__nested_webpack_require_116753__("8e60") && !__nested_webpack_require_116753__("294c")(function () {
  return Object.defineProperty(__nested_webpack_require_116753__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7bdf":
/***/ (function(module, exports, __nested_webpack_require_117404__) {

"use strict";


module.exports = __nested_webpack_require_117404__("ecf9")() ? Object.keys : __nested_webpack_require_117404__("7373");


/***/ }),

/***/ "7c86":
/***/ (function(module, exports, __nested_webpack_require_117596__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_117596__("11de");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_117596__("499e").default
var update = add("8bc865d0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __nested_webpack_require_118089__) {

var dP = __nested_webpack_require_118089__("d9f6");
var anObject = __nested_webpack_require_118089__("e4ae");
var getKeys = __nested_webpack_require_118089__("c3a1");

module.exports = __nested_webpack_require_118089__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_118589__) {

var def = __nested_webpack_require_118589__("86cc").f;
var has = __nested_webpack_require_118589__("69a8");
var TAG = __nested_webpack_require_118589__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7fc5":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_118971__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_118971__("ab5c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_118971__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "850d":
/***/ (function(module, exports, __nested_webpack_require_121538__) {

exports = module.exports = __nested_webpack_require_121538__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control .btn-pause{margin-left:20px}.vue-core-video-player-control .btn-pause svg{width:15px}.vue-core-video-player-control .btn-play{margin-left:20px}.vue-core-video-player-control .btn-play svg{width:16px}", ""]);

// exports


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __nested_webpack_require_121984__) {

module.exports = __nested_webpack_require_121984__("454f");

/***/ }),

/***/ "8615":
/***/ (function(module, exports, __nested_webpack_require_122113__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __nested_webpack_require_122113__("5ca1");
var $values = __nested_webpack_require_122113__("504c")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_122444__) {

var anObject = __nested_webpack_require_122444__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_122444__("c69a");
var toPrimitive = __nested_webpack_require_122444__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_122444__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "./node_modules/vue-core-video-player/node_modules/vue/dist/vue.esm.js");

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __nested_webpack_require_123229__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_123229__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __nested_webpack_require_123505__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __nested_webpack_require_123505__("5ca1");
var ownKeys = __nested_webpack_require_123505__("990b");
var toIObject = __nested_webpack_require_123505__("6821");
var gOPD = __nested_webpack_require_123505__("11e9");
var createProperty = __nested_webpack_require_123505__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __nested_webpack_require_124294__) {

"use strict";

var create = __nested_webpack_require_124294__("a159");
var descriptor = __nested_webpack_require_124294__("aebd");
var setToStringTag = __nested_webpack_require_124294__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_124294__("35e8")(IteratorPrototype, __nested_webpack_require_124294__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __nested_webpack_require_124920__) {

// 7.2.2 IsArray(argument)
var cof = __nested_webpack_require_124920__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9013":
/***/ (function(module, exports, __nested_webpack_require_125161__) {

"use strict";


var isObject = __nested_webpack_require_125161__("5edd");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __nested_webpack_require_125515__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __nested_webpack_require_125515__("ce10");
var hiddenKeys = __nested_webpack_require_125515__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "90e0":
/***/ (function(module, exports, __nested_webpack_require_125880__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_125880__("2316");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_125880__("499e").default
var update = add("41493392", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9138":
/***/ (function(module, exports, __nested_webpack_require_126373__) {

module.exports = __nested_webpack_require_126373__("35e8");


/***/ }),

/***/ "936a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };


/***/ }),

/***/ "9643":
/***/ (function(module, exports, __nested_webpack_require_126727__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_126727__("850d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_126727__("499e").default
var update = add("39384dc1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "96ae":
/***/ (function(module, exports, __nested_webpack_require_127220__) {

"use strict";


var isValue = __nested_webpack_require_127220__("62c4");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __nested_webpack_require_127493__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __nested_webpack_require_127493__("9093");
var gOPS = __nested_webpack_require_127493__("2621");
var anObject = __nested_webpack_require_127493__("cb7c");
var Reflect = __nested_webpack_require_127493__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9983":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_128013__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_128013__("2d60");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_128013__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_130515__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_130515__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_131122__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_131122__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_131122__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_131522__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_131522__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_131824__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_131824__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __nested_webpack_require_132100__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_132100__("e4ae");
var dPs = __nested_webpack_require_132100__("7e90");
var enumBugKeys = __nested_webpack_require_132100__("1691");
var IE_PROTO = __nested_webpack_require_132100__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_132100__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_132100__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a3e9":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_133723__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_133723__("5005");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_133723__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_135904__) {

"use strict";


var anObject = __nested_webpack_require_135904__("cb7c");
var toObject = __nested_webpack_require_135904__("4bf8");
var toLength = __nested_webpack_require_135904__("9def");
var toInteger = __nested_webpack_require_135904__("4588");
var advanceStringIndex = __nested_webpack_require_135904__("0390");
var regExpExec = __nested_webpack_require_135904__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_135904__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa54":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_140662__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_140662__("12ae");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_140662__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_143047__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_143047__("d3f4");
var cof = __nested_webpack_require_143047__("2d95");
var MATCH = __nested_webpack_require_143047__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ab5c":
/***/ (function(module, exports, __nested_webpack_require_143444__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_143444__("0e5b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_143444__("499e").default
var update = add("76a6120a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_143937__) {

var $iterators = __nested_webpack_require_143937__("cadf");
var getKeys = __nested_webpack_require_143937__("0d58");
var redefine = __nested_webpack_require_143937__("2aba");
var global = __nested_webpack_require_143937__("7726");
var hide = __nested_webpack_require_143937__("32e9");
var Iterators = __nested_webpack_require_143937__("84f2");
var wks = __nested_webpack_require_143937__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "add7":
/***/ (function(module, exports, __nested_webpack_require_145864__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_145864__("dc03");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_145864__("499e").default
var update = add("26edf8bf", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_146593__) {

"use strict";

var regexpExec = __nested_webpack_require_146593__("520a");
__nested_webpack_require_146593__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b1ba":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_146877__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_146877__("6d0c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_146877__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __nested_webpack_require_149282__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_149282__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b5de":
/***/ (function(module, exports, __nested_webpack_require_149584__) {

exports = module.exports = __nested_webpack_require_149584__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-container{position:relative;margin:0 auto}.vcp-container,.vcp-container video{width:100%;height:100%;background-color:#000}", ""]);

// exports


/***/ }),

/***/ "b72f":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_149940__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_149940__("90e0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_149940__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bead":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_152660__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_152660__("f0b7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_152660__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __nested_webpack_require_154901__) {

var pIE = __nested_webpack_require_154901__("355d");
var createDesc = __nested_webpack_require_154901__("aebd");
var toIObject = __nested_webpack_require_154901__("36c3");
var toPrimitive = __nested_webpack_require_154901__("1bc3");
var has = __nested_webpack_require_154901__("07e3");
var IE8_DOM_DEFINE = __nested_webpack_require_154901__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __nested_webpack_require_154901__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_155643__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_155643__("6821");
var toLength = __nested_webpack_require_155643__("9def");
var toAbsoluteIndex = __nested_webpack_require_155643__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __nested_webpack_require_156654__) {

"use strict";

var addToUnscopables = __nested_webpack_require_156654__("8436");
var step = __nested_webpack_require_156654__("50ed");
var Iterators = __nested_webpack_require_156654__("481b");
var toIObject = __nested_webpack_require_156654__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_156654__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __nested_webpack_require_157863__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_157863__("e6f3");
var enumBugKeys = __nested_webpack_require_157863__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c428":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_158174__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_158174__("1689");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_158174__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_160583__) {

module.exports = !__nested_webpack_require_160583__("9e1e") && !__nested_webpack_require_160583__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_160583__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c9fc":
/***/ (function(module, exports, __nested_webpack_require_160879__) {

"use strict";


var d        = __nested_webpack_require_160879__("f508")
  , callable = __nested_webpack_require_160879__("1a94")

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_164191__) {

"use strict";

var addToUnscopables = __nested_webpack_require_164191__("9c6c");
var step = __nested_webpack_require_164191__("d53b");
var Iterators = __nested_webpack_require_164191__("84f2");
var toIObject = __nested_webpack_require_164191__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_164191__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_165400__) {

var isObject = __nested_webpack_require_165400__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cc1d":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_165654__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_165654__("0ee8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_165654__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __nested_webpack_require_167807__) {

exports.f = __nested_webpack_require_167807__("5168");


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_167932__) {

var has = __nested_webpack_require_167932__("69a8");
var toIObject = __nested_webpack_require_167932__("6821");
var arrayIndexOf = __nested_webpack_require_167932__("c366")(false);
var IE_PROTO = __nested_webpack_require_167932__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cfb4":
/***/ (function(module, exports, __nested_webpack_require_168568__) {

exports = module.exports = __nested_webpack_require_168568__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-switch{display:inline-block;position:relative;width:40px;height:16px;border-radius:8px;background-color:#fff;cursor:pointer}.vcp-switch:after{content:\"\";display:inline-block;position:absolute;top:1px;left:2px;width:14px;height:14px;border-radius:7px;background-color:#ff6060;-webkit-transition:left .2s ease-in .05s;transition:left .2s ease-in .05s}.vcp-switch.open:after{left:23px}", ""]);

// exports


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d658":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_169507__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_169507__("9643");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_169507__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __nested_webpack_require_171932__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_171932__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __nested_webpack_require_172539__) {

__nested_webpack_require_172539__("1654");
__nested_webpack_require_172539__("6c1c");
module.exports = __nested_webpack_require_172539__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __nested_webpack_require_172929__) {

var anObject = __nested_webpack_require_172929__("e4ae");
var IE8_DOM_DEFINE = __nested_webpack_require_172929__("794b");
var toPrimitive = __nested_webpack_require_172929__("1bc3");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_172929__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __nested_webpack_require_173619__) {

var core = __nested_webpack_require_173619__("584a");
var global = __nested_webpack_require_173619__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_173619__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc03":
/***/ (function(module, exports, __nested_webpack_require_174152__) {

exports = module.exports = __nested_webpack_require_174152__("2350")(false);
// imports


// module
exports.push([module.i, ".animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.vcp-layer{position:absolute;top:0;bottom:0;right:0;left:0;color:#fff;font-weight:400}.vcp-layer div,.vcp-layer svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vcp-icon{display:inline-block}.vue-core-video-player-control{display:inline-block;position:relative;width:30px;height:30px;margin-right:20px;font-size:13px;color:#fff}.vcp-m-dashboard .vue-core-video-player-control{margin-right:10px}.btn-control-panel{position:absolute;left:50%;bottom:54px;padding:20px;min-height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translateX(-50%);transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:4px;font-weight:500}.btn-control-panel li,.btn-control-panel ul{margin:0;padding:0;text-align:center}.btn-control-panel ul li{list-style:none;height:30px;line-height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.btn-control-panel ul li .item-name{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start}.btn-control-panel ul li .item-control{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;line-height:30px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.btn-control,.btn-control-panel ul li .item-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.btn-control{position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px}.btn-control:focus{background:none;outline-style:none}.btn-control .tips{display:none;position:absolute;min-width:30px;padding:4px;border-radius:2px;bottom:54px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;color:hsla(0,0%,100%,.7);background-color:rgba(0,0,0,.7);text-align:center;line-height:1.2;word-break:keep-all;word-wrap:no-wrap;white-space:nowrap;opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.btn-control svg{opacity:.85;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.btn-control:hover svg{opacity:1}.btn-control:hover .tips{display:block;opacity:1}", ""]);

// exports


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e312":
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":{\"btn\":{\"play\":\"Play\",\"pause\":\"Pause\",\"fullscreen\":\"Full Screen\",\"exitFullscreen\":\"Exit Full Screen\",\"mute\":\"Mute\",\"unmute\":\"Unmute\",\"back\":\"Back\",\"pip\":\"Picture-in-Picture\"},\"settings\":{\"autoplay\":\"Autoplay\",\"loop\":\"Loop\",\"speed\":\"Speed\",\"resolution\":\"Resolution\"}},\"layers\":{\"error\":{\"2404\":\"Video Source Not Found\",\"2502\":\"Media Network Error\",\"2503\":\"Video Cannot DECODE\",\"2504\":\"Video Cannot Play!\",\"title\":\"(O_O)?  Error!\"},\"loading\":{\"msg\":\"Loading ...\"}}}");

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __nested_webpack_require_178911__) {

var isObject = __nested_webpack_require_178911__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __nested_webpack_require_179585__) {

var has = __nested_webpack_require_179585__("07e3");
var toIObject = __nested_webpack_require_179585__("36c3");
var arrayIndexOf = __nested_webpack_require_179585__("5b4e")(false);
var IE_PROTO = __nested_webpack_require_179585__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e76c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "e9c8":
/***/ (function(module, exports, __nested_webpack_require_180400__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_180400__("2814");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_180400__("499e").default
var update = add("d37f223e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e9d0":
/***/ (function(module, exports, __nested_webpack_require_180893__) {

exports = module.exports = __nested_webpack_require_180893__("2350")(false);
// imports


// module
exports.push([module.i, ".error-layer{z-index:12;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);background-color:#333;background-repeat:repeat;text-align:center}.error-layer .error-icon{width:194px;margin:-40px auto 0}.error-layer .error-msg{color:hsla(0,0%,100%,.7)}", ""]);

// exports


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __nested_webpack_require_183717__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __nested_webpack_require_183717__("cb7c");
var aFunction = __nested_webpack_require_183717__("d8e8");
var SPECIES = __nested_webpack_require_183717__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __nested_webpack_require_184166__) {

var META = __nested_webpack_require_184166__("62a0")('meta');
var isObject = __nested_webpack_require_184166__("f772");
var has = __nested_webpack_require_184166__("07e3");
var setDesc = __nested_webpack_require_184166__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__nested_webpack_require_184166__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ecf9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "f0b7":
/***/ (function(module, exports, __nested_webpack_require_186062__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_186062__("b5de");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_186062__("499e").default
var update = add("9172fcae", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __nested_webpack_require_186555__) {

"use strict";

var $defineProperty = __nested_webpack_require_186555__("86cc");
var createDesc = __nested_webpack_require_186555__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f201":
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":{\"btn\":{\"play\":\"播放\",\"pause\":\"暂停\",\"fullscreen\":\"全屏\",\"exitFullscreen\":\"退出全屏\",\"mute\":\"静音\",\"unmute\":\"取消静音\",\"back\":\"返回\",\"pip\":\"画中画模式\"},\"settings\":{\"autoplay\":\"自动播放\",\"loop\":\"循环播放\",\"speed\":\"播放速度\",\"resolution\":\"清晰度\"}},\"layers\":{\"error\":{\"2404\":\"找不到播放视频\",\"2502\":\"播放网络异常\",\"2503\":\"视频无法解码\",\"2504\":\"视频无法正常播放\",\"title\":\"(O_O)?  播放错误!\"},\"loading\":{\"msg\":\"加载中 ...\"}}}");

/***/ }),

/***/ "f232":
/***/ (function(module, exports, __nested_webpack_require_187448__) {

exports = module.exports = __nested_webpack_require_187448__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-progress-hover{position:absolute;bottom:100%;left:0;height:12px;width:100%;cursor:pointer}.vcp-progress-hover .vcp-progress{position:absolute;bottom:0;left:0;height:4px;width:100%;background-color:hsla(0,0%,100%,.3);-webkit-transition:height .2s ease .05s;transition:height .2s ease .05s}.vcp-progress-hover:hover .vcp-progress{height:6px}.vcp-progress-hover:hover .vcp-progress .thumb-drag{opacity:1}.vcp-progress-loaded,.vcp-progress-played{position:absolute;top:0;left:0;width:0;height:100%;background-color:hsla(0,0%,100%,.7)}.vcp-progress-loaded{-webkit-transition:width .1s cubic-bezier(.4,0,1,1);transition:width .1s cubic-bezier(.4,0,1,1)}.vcp-progress-played{width:0;background-color:#ff6060}.vcp-progress-played .thumb-drag{opacity:0;position:absolute;right:0;top:50%;width:12px;height:12px;border-radius:6px;background-color:#fff;-webkit-transform:translateY(-50%) translateX(50%);transform:translateY(-50%) translateX(50%);-webkit-transition:height .05s ease .15s;transition:height .05s ease .15s}.vcp-progress-played .thumb-drag:before{content:\"\";display:inline-block;position:absolute;top:-2px;left:-2px;width:16px;height:16px;border-radius:7px;background-color:hsla(0,0%,100%,.3)}.vcp-m-dashboard .vcp-progress-hover{bottom:0}.vcp-m-dashboard .vcp-progress-hover .vcp-progress{height:3px}.vcp-m-dashboard .vcp-progress-hover .vcp-progress-played .thumb-drag{background-color:#ff6060}.vcp-m-dashboard .vcp-progress-hover .vcp-progress-played .thumb-drag:before{background-color:#ff6060;opacity:.25}", ""]);

// exports


/***/ }),

/***/ "f31c":
/***/ (function(module, exports, __nested_webpack_require_189183__) {

exports = module.exports = __nested_webpack_require_189183__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-dashboard{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:59px;background:rgba(0,0,0,.5)}.fullscreen .vcp-dashboard{bottom:60px;width:1182px;left:50%;margin-left:-591px}.small .vcp-dashboard{height:49px}.settings-open .vcp-dashboard{display:block!important}.small .vcp-dashboard .vcp-controls{height:40px}", ""]);

// exports


/***/ }),

/***/ "f3a6":
/***/ (function(module, exports, __nested_webpack_require_189724__) {

"use strict";


var isValue = __nested_webpack_require_189724__("62c4");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "f508":
/***/ (function(module, exports, __nested_webpack_require_190281__) {

"use strict";


var isValue         = __nested_webpack_require_190281__("936a")
  , isPlainFunction = __nested_webpack_require_190281__("1793")
  , assign          = __nested_webpack_require_190281__("2031")
  , normalizeOpts   = __nested_webpack_require_190281__("f3a6")
  , contains        = __nested_webpack_require_190281__("f973");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "f60e":
/***/ (function(module, exports, __nested_webpack_require_191878__) {

"use strict";


var keys  = __nested_webpack_require_191878__("7bdf")
  , value = __nested_webpack_require_191878__("96ae")
  , max   = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "f64c":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_192483__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_192483__("5695");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_192483__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __nested_webpack_require_196142__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __nested_webpack_require_196142__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_196142__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __nested_webpack_require_196568__) {

__nested_webpack_require_196568__("014b");
__nested_webpack_require_196568__("c207");
__nested_webpack_require_196568__("69d3");
__nested_webpack_require_196568__("765d");
module.exports = __nested_webpack_require_196568__("584a").Symbol;


/***/ }),

/***/ "f922":
/***/ (function(module, exports, __nested_webpack_require_196821__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_196821__("5276");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_196821__("499e").default
var update = add("22717135", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f967":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "f973":
/***/ (function(module, exports, __nested_webpack_require_197576__) {

"use strict";


module.exports = __nested_webpack_require_197576__("18ec")() ? String.prototype.contains : __nested_webpack_require_197576__("f967");


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_197782__) {

module.exports = __nested_webpack_require_197782__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_197960__) {

var document = __nested_webpack_require_197960__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_198164__) {

"use strict";
__nested_webpack_require_198164__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_198164__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_198164__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __nested_webpack_require_198164__("5d58");
var iterator_default = /*#__PURE__*/__nested_webpack_require_198164__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __nested_webpack_require_198164__("67bb");
var symbol_default = /*#__PURE__*/__nested_webpack_require_198164__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __nested_webpack_require_198164__("28a5");

// EXTERNAL MODULE: ./src/lang/zh-cn.json
var zh_cn = __nested_webpack_require_198164__("f201");

// EXTERNAL MODULE: ./src/lang/en.json
var en = __nested_webpack_require_198164__("e312");

// EXTERNAL MODULE: ./src/lang/jp.json
var jp = __nested_webpack_require_198164__("0d2d");

// CONCATENATED MODULE: ./src/helper/i18n.js





var globalLocale = {
  'zh-CN': zh_cn,
  'jp': jp,
  'en': en
};
var i18n = {
  t: function t(keyStr, defaultVal) {
    var keys = keyStr.split('.');
    var length = keys.length;
    var last = i18n.locale;

    for (var i = 0; i < length; i++) {
      if (last.hasOwnProperty(keys[i])) {
        last = last[keys[i]];
      }
    }

    return last || defaultVal;
  },
  setLocale: function setLocale(lang) {
    if (typeof_typeof(lang) === 'object') {
      i18n.locale = lang;
    } else {
      i18n.locale = globalLocale[lang || 'en'];
    }

    return i18n.locale;
  }
};
/* harmony default export */ var helper_i18n = (i18n);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-core-video-player.vue?vue&type=template&id=58e681de&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vcp-el",staticClass:"vcp-container"},[_c('video',{ref:"vcp-video",attrs:{"title":_vm.title,"cover":_vm.cover,"loop":_vm.loop,"playsinline":_vm.playsinline,"src":_vm.source}}),_c('Layers'),(!_vm.isMobile)?_c('Dashboard',{attrs:{"controls":_vm.controls,"muted":_vm.muted}}):_vm._e(),(_vm.isMobile)?_c('MobileDashboard',{attrs:{"controls":_vm.controls,"muted":_vm.muted}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-core-video-player.vue?vue&type=template&id=58e681de&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __nested_webpack_require_198164__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_198164__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_198164__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __nested_webpack_require_198164__("8615");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __nested_webpack_require_198164__("85f2");
var define_property_default = /*#__PURE__*/__nested_webpack_require_198164__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_198164__("ac6a");

// EXTERNAL MODULE: ./src/style/common.less
var common = __nested_webpack_require_198164__("add7");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_198164__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__nested_webpack_require_198164__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/helper/index.js


// CONCATENATED MODULE: ./src/directives/i18n.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('t', {
  bind: function bind(el, binding) {
    el.innerText = helper_i18n.t(binding.expression);
  }
});
// CONCATENATED MODULE: ./src/directives/index.js

// CONCATENATED MODULE: ./src/constants/DEFAULT_CONFIG.js
var DEFAULT_CONFIG = {
  loop: false,
  volume: 1,
  muted: false,
  autoplay: false,
  preload: 'metadata',
  playList: [],
  safeBufferTime: 2,
  minPlayBufferTime: 1,
  resolution: '720p',
  dashboardHideDelay: 2500
};
/* harmony default export */ var constants_DEFAULT_CONFIG = (DEFAULT_CONFIG);
// CONCATENATED MODULE: ./src/constants/EVENTS.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { HLS_EVENTS} from './module/hls';
var ERROR = {
  ERROR_NO_MEDIA: 'ERROR_NO_MEDIA',
  ERROR_AUTO_PLAY: 'ERROR_AUTO_PLAY'
};
var LIFE_CYCLE = {
  LIFECYCLE_INITING: 'lifecycle_initing',
  LIFECYCLE_INITED: 'lifecycle_inited',
  LIFECYCLE_PARSED: 'lifecycle_parse',
  LIFECYCLE_STOP: 'lifecycle_stop'
};
var SOURCE = {
  SOURCE_UPDATED: 'SOURCE_UPDATED'
};
var UI = {
  // UI
  UI_DASHBOARD_SHOW: 'ui_dashboard_show',
  UI_DASHBOARD_HIDE: 'ui_dashboard_hide',
  UI_PLAY: 'ui_play',
  UI_PAUSE: 'ui_pause'
};

var EVENTS = _objectSpread({}, ERROR, {}, LIFE_CYCLE, {}, SOURCE, {}, UI, {
  SERVICE_LOADING: 'service_loading',
  SERVICE_ENDED: 'service_ended',
  LOADING_START: 'loading_start',
  LOADING_END: 'loading_end',
  // PLUGIN AND CORE
  CORE_TO_MP4: 'core_to_mp4',
  // media events
  PLAY: 'play',
  PAUSE: 'pause',
  LOADEDDATA: 'loadeddata',
  CANPLAY: 'canplay',
  CANPLAYTHROUGH: 'canplaythrough',
  ERROR: 'error',
  DURATIONCHANGE: 'durationchange',
  ENDED: 'ended',
  TIMEUPDATE: 'timeupdate',
  LOADEDMETADATA: 'loadedmetadata',
  WAITING: 'waiting',
  PLAYING: 'playing',
  RETRY: 'retry',
  SEEKED: 'seeked',
  SEEKING: 'seeking',
  VOLUMECHANGE: 'volumechange',
  EXIT: 'exit',
  PROGRESS: 'progress',
  STALLED: 'stalled',
  LOADSTART: 'loadstart',
  RESOLUTION_UPDATE: 'resolution_update' // hls events docs: https://github.com/video-dev/hls.js/blob/master/src/events.js
  // ...HLS_EVENTS

});

/* harmony default export */ var constants_EVENTS = (EVENTS);
// CONCATENATED MODULE: ./src/constants/ERROR_CODE.js
var ERROR_CODE = {
  NO_SOURCE: {
    code: '2404',
    msg: 'Prop `src` not found'
  },
  // Media Element
  2502: 'Media Network Error',
  2503: 'Video Cannot DECODE',
  2504: 'Video Cannot Play!',
  // JS runtime error
  2701: 'Parse Error',
  // not found reason
  2801: 'Not found reason'
};
/* harmony default export */ var constants_ERROR_CODE = (ERROR_CODE);
// CONCATENATED MODULE: ./src/constants/index.js



var CORE = {
  DASH: 'DASH',
  HLS: 'HLS',
  MP4: 'MP4'
};
var VIDEO_FORMAT = ['video/webm', 'video/mp4'];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __nested_webpack_require_198164__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __nested_webpack_require_198164__("a481");

// CONCATENATED MODULE: ./node_modules/ismobilejs/esm/isMobile.js
const appleIphone = /iPhone/i;
const appleIpod = /iPod/i;
const appleTablet = /iPad/i;
const androidPhone = /\bAndroid(?:.+)Mobile\b/i;
const androidTablet = /Android/i;
const amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
const amazonTablet = /Silk/i;
const windowsPhone = /Windows Phone/i;
const windowsTablet = /\bWindows(?:.+)ARM\b/i;
const otherBlackBerry = /BlackBerry/i;
const otherBlackBerry10 = /BB10/i;
const otherOpera = /Opera Mini/i;
const otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
const otherFirefox = /Mobile(?:.+)Firefox\b/i;
function match(regex, userAgent) {
    return regex.test(userAgent);
}
function isMobile(userAgent) {
    userAgent =
        userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '');
    let tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    const result = {
        apple: {
            phone: match(appleIphone, userAgent) && !match(windowsPhone, userAgent),
            ipod: match(appleIpod, userAgent),
            tablet: !match(appleIphone, userAgent) &&
                match(appleTablet, userAgent) &&
                !match(windowsPhone, userAgent),
            device: (match(appleIphone, userAgent) ||
                match(appleIpod, userAgent) ||
                match(appleTablet, userAgent)) &&
                !match(windowsPhone, userAgent),
        },
        amazon: {
            phone: match(amazonPhone, userAgent),
            tablet: !match(amazonPhone, userAgent) && match(amazonTablet, userAgent),
            device: match(amazonPhone, userAgent) || match(amazonTablet, userAgent),
        },
        android: {
            phone: (!match(windowsPhone, userAgent) && match(amazonPhone, userAgent)) ||
                (!match(windowsPhone, userAgent) && match(androidPhone, userAgent)),
            tablet: !match(windowsPhone, userAgent) &&
                !match(amazonPhone, userAgent) &&
                !match(androidPhone, userAgent) &&
                (match(amazonTablet, userAgent) || match(androidTablet, userAgent)),
            device: (!match(windowsPhone, userAgent) &&
                (match(amazonPhone, userAgent) ||
                    match(amazonTablet, userAgent) ||
                    match(androidPhone, userAgent) ||
                    match(androidTablet, userAgent))) ||
                match(/\bokhttp\b/i, userAgent),
        },
        windows: {
            phone: match(windowsPhone, userAgent),
            tablet: match(windowsTablet, userAgent),
            device: match(windowsPhone, userAgent) || match(windowsTablet, userAgent),
        },
        other: {
            blackberry: match(otherBlackBerry, userAgent),
            blackberry10: match(otherBlackBerry10, userAgent),
            opera: match(otherOpera, userAgent),
            firefox: match(otherFirefox, userAgent),
            chrome: match(otherChrome, userAgent),
            device: match(otherBlackBerry, userAgent) ||
                match(otherBlackBerry10, userAgent) ||
                match(otherOpera, userAgent) ||
                match(otherFirefox, userAgent) ||
                match(otherChrome, userAgent),
        },
        any: false,
        phone: false,
        tablet: false,
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map
// CONCATENATED MODULE: ./node_modules/ismobilejs/esm/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./src/helper/type.js

function isNumber(num) {
  return typeof num === 'number';
}
;
function isString(str) {
  return typeof str === 'string';
}
;
function isObject(obj) {
  return obj && typeof_typeof(obj) === 'object';
}
;
function isFile(obj) {
  return obj instanceof File;
}
function type_isNaN(num) {
  // eslint-disable-next-line no-self-compare
  return typeof num === 'number' && num !== num;
}
// CONCATENATED MODULE: ./src/helper/util.js





var ua = navigator.userAgent.toLowerCase();
function isMobileInLandscapeOrientation() {
  // functionality required for mobile only
  if (!isMobile.any) {
    return true;
  } // use draft screen.orientation type to determine if mobile is landscape orientation


  var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;

  if (orientation) {
    if (orientation.type === 'landscape-primary' || orientation.type === 'landscape-secondary') {
      return true;
    } else if (orientation.type === 'portrait-secondary' || orientation.type === 'portrait-primary') {
      return false;
    }
  } // fall back to window.orientation


  if (!window.orientation) {
    return false;
  }

  var quadrant = Math.round(window.orientation / 90);

  while (quadrant < 0) {
    quadrant += 4;
  }

  while (quadrant >= 4) {
    quadrant -= 4;
  }

  return quadrant === 1 || quadrant === 3;
}
;
function generateID() {
  return 'xxxxxxxx-4xxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
;
function timeToSeconds(str) {
  var arr = str.split(':');
  return arr[0] * 3600 + arr[1] * 60 + arr[2] * 1;
}
;
function paddingLeadZero(num) {
  if (num < 10) {
    return "0".concat(num);
  }

  return num;
}
function secondsToTime(time, type) {
  time = parseInt(time);
  var s = time % 60;
  var h = parseInt(time / 3600);
  var m = parseInt(time % 3600 / 60);

  if (type === 'array') {
    return [h, m, s];
  }

  if (type === 'm:s') {
    m = parseInt(time / 60);
    return [m, s].map(function (item) {
      return paddingLeadZero(item);
    }).join(':');
  } // default h:m:s


  return [h, m, s].map(function (item) {
    return paddingLeadZero(item);
  }).join(':');
}
;
function getFormatBandwidth(speed) {
  if (!speed) {
    return '0 KB/s';
  }

  if (speed / 1024 / 1024 < 1) {
    return (speed / 1024).toFixed(2) + ' KB/s';
  } else {
    return (speed / 1024 / 1024).toFixed(2) + ' MB/s';
  }
}
function getElementOffsets(obj) {
  var left = 0;
  var top = 0;

  do {
    left += obj.offsetLeft;
    top += obj.offsetTop;
  } while (obj = obj.offsetParent);

  return {
    left: left,
    top: top
  };
}
;
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
function fallbackCopyTextToClipboard(text, callback) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    callback(msg);
  } catch (err) {
    console.warn('Cannot execCommand `copy`!');
  }

  document.body.removeChild(textArea);
}
;
function copyText(text) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, callback);
    return;
  }

  navigator.clipboard.writeText(text).then(function () {
    callback();
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}
;
function loadImage(src, done, errorCallback) {
  var image = new Image();
  image.src = src + '?_t=' + Math.floor(10000 * Math.random());

  image.onload = function () {
    done && done();
  };

  image.onerror = function (e) {
    errorCallback && errorCallback(e);
  };
}
;

var _isSafari = function _isSafari() {
  return navigator.userAgent.indexOf('Safari') > -1;
};

function debounce(fun, delay) {
  return function () {
    var that = this;
    var args = arguments;
    clearTimeout(fun.id);
    fun.id = setTimeout(function () {
      fun.call(that, args);
    }, delay);
  };
}
; // find the correct part of video buffered

function getMatchRangeTime(time, ranges) {
  if (ranges.length === 0) {
    return 0;
  }

  for (var i = 0; i < ranges.length; i++) {
    var start = ranges.start(i);
    var end = ranges.end(i);

    if (time >= start && time <= end) {
      return ranges.end(i);
    }
  }

  return time;
}
;

function getMediaSource() {
  return window.MediaSource || window.WebKitMediaSource;
}

var WEB_SUPPORT_H264_CODEC = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
var isMSESupported = function isMSESupported() {
  var mediaSource = getMediaSource();
  var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
  var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported(WEB_SUPPORT_H264_CODEC); // if SourceBuffer is exposed ensure its API is valid
  // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible

  var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
  return !!isTypeSupported && !!sourceBufferValidAPI;
};
function isDebug() {
  return localStorage._vcpDebug;
}
function setDebug(value) {
  if (value) {
    localStorage._vcpDebug = true;
  } else {
    localStorage._vcpDebug = '';
  }
}
var util_isNodeEnv = function isNodeEnv() {
  return (typeof localStorage === "undefined" ? "undefined" : typeof_typeof(localStorage)) !== 'object' && (typeof navigator === "undefined" ? "undefined" : typeof_typeof(navigator)) !== 'object';
};
var util_isMobile = isMobile(ua).any;
var isAndroid = isMobile(ua).android;
var isApple = isMobile(ua).apple && isMobile(ua).apple.device;
var isSafari = isApple && _isSafari();
var isTencentGroup = /MQQBrowser/i.test(ua);
var isUC = /ucbrowser/i.test(ua);
var isChrome = /chrome/i.test(ua);
var isWechat = /MicroMessenger/i.test(ua);
var isFirefox = /firefox/i.test(ua);

// CONCATENATED MODULE: ./src/helper/media.js



var media_isMediaList = function _isMediaList(medias) {
  if (Array.isArray(medias) && typeof_typeof(medias[0]) === 'object' && medias[0].resolution && medias[0].src) {
    return true;
  }

  return false;
};

function parseMediaList(medias) {
  if (media_isMediaList(medias)) {
    return medias.filter(function (media) {
      return media.src && media.resolution;
    });
  }

  if (typeof medias === 'string') {
    return [medias];
  }

  return medias;
}
function checkVideoPlayType(type, videoEl) {
  if (util_isNodeEnv()) {
    if ((isFirefox || isChrome) && type === 'video/webm') {
      return true;
    }

    return type === 'video/mp4';
  }

  if (!videoEl) {
    videoEl = document.createElement('videos');
  }

  return videoEl.canPlayType(type);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __nested_webpack_require_198164__("f751");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/helper/dom.js


function removeAllChildrenNodes(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
;
function toggle(el, className) {
  if (this.hasClass(el, className)) {
    this.removeClass(el, className);
  } else {
    this.addClass(el, className);
  }
}
;
function switchChildClass(el, childSelector, className, tellFunc) {
  var children = el.querySelectorAll(childSelector);

  for (var i = 0; i < children.length; i++) {
    var item = children[i];

    if (tellFunc(item)) {
      this.addClass(item, className);
    } else {
      this.removeClass(item, className);
    }
  }
}
;
function hasClass(el, className) {
  return el.className.indexOf(className) > -1;
}
;
function addClass(dom, className) {
  if (!className || !dom) {
    return;
  }

  var classGroup = className.split(' ');

  if (dom.classList && classGroup.length === 1) {
    dom.classList.add(className);
  } else {
    var _classNameList = dom.className.split(' ');

    _classNameList.push(className);

    dom.className = _classNameList.join(' ');
  }
}
;
function removeClass(dom, className) {
  if (dom.classList) {
    dom.classList.remove(className);
  } else {
    var _classNameList = dom.className.split(' ');

    var _index = -1;

    for (var i = 0, _len = _classNameList.length; i < _len; i++) {
      if (_classNameList[i] === className) {
        _index = i;
      }
    }

    if (_index > -1) {
      _classNameList.splice(_index, 1);
    }

    dom.className = _classNameList.join(' ');
  }
}
;
function getAttr(el, key) {
  return el.getAttribute(key);
}
;
function isDescendant(parent, child) {
  var node = child.parentNode;

  while (node != null) {
    if (node === parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}
;
function drag(e, el, coor) {
  if (!el) {
    return;
  }

  var currentX = util_isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  var currentY = util_isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
  var left = currentX - coor.x;
  var top = currentY - coor.y;

  if (left <= coor.minLeft) {
    left = coor.minLeft;
  }

  if (left >= coor.maxLeft) {
    left = coor.maxLeft;
  }

  if (top <= coor.minTop) {
    top = coor.minTop;
  }

  if (top >= coor.maxTop) {
    top = coor.maxTop;
  }

  return {
    left: left,
    top: top
  };
}
;
function registerFullScreenChangeListener(listener) {
  document.addEventListener('fullscreenchange', function () {
    listener(document.webkitIsFullScreen);
  }, false);
  document.addEventListener('mozfullscreenchange', function () {
    listener(document.mozFullScreen);
  }, false);
  document.addEventListener('msFullscreenElement', function () {
    listener(document.mozFullScreen);
  }, false);
  document.addEventListener('webkitfullscreenchange', function () {
    listener(document.webkitIsFullScreen);
  }, false);
}
// CONCATENATED MODULE: ./src/core/base.js






 // import { throwError } from '../helper/error'



var VIDEO_EVENTS = ['play', 'playing', 'timeupdate', 'pause', 'seeking', 'waiting', 'loadedmetadata', 'loadeddata', 'loadstart', 'seeked', 'ended', 'durationchange', 'progress', 'canplaythrough', 'volumechange'];
var VIDEO_ATTRS = ['muted', 'volume', 'loop', 'preload'];

var base_BaseVideoCore =
/*#__PURE__*/
function () {
  function BaseVideoCore(config) {
    _classCallCheck(this, BaseVideoCore);

    this.config = Object.assign(constants_DEFAULT_CONFIG, config);
    this.$video = this.config.videoEl;
    this.$el = this.config.el;
    this._eventEmitter = config.eventEmitter;
    this.state = {};
    var src = this.config.src;

    if (this.checkSource(src)) {
      this.parse(src);
      this.init();
    }
  }

  _createClass(BaseVideoCore, [{
    key: "parse",
    value: function parse(source) {
      this.initResolution(source);
      this.initVideoType();
    }
  }, {
    key: "checkSource",
    value: function checkSource(source) {
      if (!source) {
        var code = constants_ERROR_CODE.NO_SOURCE.code;
        this.emit(constants_EVENTS.ERROR, {
          code: code
        });
        return false;
      } else if (Array.isArray(source)) {
        if (!source[0] || !source[0].src) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "setSource",
    value: function setSource(source) {
      var _this = this;

      if (this.checkSource(source)) {
        this.parse(source);
        var isPlaying = this.isPlaying();

        if (isPlaying) {
          this.pause();

          var playFn = function playFn() {
            _this.play();

            _this.$video.removeEventListener(constants_EVENTS.DURATIONCHANGE, playFn);
          };

          this.$video.addEventListener(constants_EVENTS.DURATIONCHANGE, playFn);
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.checkSource(this.config.src);

      this._autoRegisterEvents();

      this._setVideoAttr();

      this.setContainer();
      this.setSize();
      this.emit(constants_EVENTS.LIFECYCLE_INITED);

      this._autoplay();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      if (util_isMobile) {
        addClass(this.$el, 'mobile');
      }
    }
  }, {
    key: "setSize",
    value: function setSize() {
      var width = this.$el.offsetWidth;
      var size = '';

      if (width <= 763) {
        size = 'small';
      }

      addClass(this.$el, size);
    }
  }, {
    key: "_autoplay",
    value: function _autoplay() {
      var _this2 = this;

      if (this.config.autoplay && !util_isMobile) {
        var _autoPlayFn = function _autoPlayFn() {
          var promise = _this2.play();

          _this2.autoPlayPolicy(promise);
        };

        _autoPlayFn();
      }
    }
  }, {
    key: "setConfig",
    value: function setConfig(prop, value) {
      if (VIDEO_ATTRS.indexOf(prop) >= 0) {
        this.config[prop] = value;
        this.$video[prop] = value;
      }
    }
  }, {
    key: "initResolution",
    value: function initResolution(source) {
      var _this3 = this;

      var medias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var resolution = this.config.resolution;
      this.medias = parseMediaList(source);
      this.medias.forEach(function (media) {
        if (media.resolution === resolution) {
          _this3.config.src = media.src;
        }
      });
      this.resolution = resolution;
      setTimeout(function () {
        _this3.emit(constants_EVENTS.SOURCE_UPDATED);
      }, 200);
    }
  }, {
    key: "initVideoType",
    value: function initVideoType() {
      var _this4 = this;

      var findType = function findType(type) {
        for (var j = 0; j < _this4.medias.length; j++) {
          if (_this4.medias[j].type === type) {
            return _this4.medias[j];
          }
        }
      };

      for (var i = 0; i < VIDEO_FORMAT.length; i++) {
        var item = findType(VIDEO_FORMAT[i]);

        if (checkVideoPlayType(VIDEO_FORMAT[i], this.$video) && item) {
          this.config.src = item.src;
          this.$video.src = this.config.src;
          this.resolution = '';
          this.medias = [item];
          return;
        }
      }
    }
  }, {
    key: "setResolution",
    value: function setResolution(resolution) {
      var _this5 = this;

      var medias = this.medias;

      if (medias && medias.length > 1) {
        for (var i = 0; i < medias.length; i++) {
          if (medias[i].resolution === resolution) {
            (function () {
              _this5.resolution = resolution;

              var playStatus = _this5.isPlaying();

              var currentTime = _this5.getCurrentTime();

              _this5.$video.src = medias[i].src;

              _this5.emit(constants_EVENTS.SOURCE_UPDATED);

              _this5.$video.load();

              if (playStatus && currentTime < 1) {
                _this5.$video.play();
              } // safety start


              var event = constants_EVENTS.CANPLAYTHROUGH;
              var seekCount = 0;

              var fn = function fn() {
                // some QQ X5 browsers cannot trigger seeked event after "play" event
                if (isAndroid && isTencentGroup) {
                  _this5.play();

                  if (seekCount === 1) {
                    _this5.seek(currentTime);
                  }

                  seekCount += 1;
                } else {
                  _this5.seek(currentTime);
                }

                if (isAndroid && isTencentGroup && !playStatus) {
                  _this5.pause();
                }

                _this5.$video.removeEventListener(constants_EVENTS.CANPLAYTHROUGH, fn);

                if (seekCount === 2) {
                  _this5.$video.removeEventListener(constants_EVENTS.DURATIONCHANGE, fn);

                  seekCount = 0;
                }
              };

              var seekedFn = function seekedFn() {
                if (playStatus) {
                  _this5.play();
                }

                _this5.$video.removeEventListener(constants_EVENTS.SEEKED, seekedFn);
              };

              var playFn = function playFn() {
                _this5.start();

                _this5.$video.removeEventListener(constants_EVENTS.PLAYING, playFn);
              }; // [HACK] there is bug when wechat play video trigger durationchange twice


              if (isAndroid && isTencentGroup) {
                event = constants_EVENTS.DURATIONCHANGE;

                _this5.play();
              }

              _this5.$video.addEventListener(event, fn);

              _this5.$video.addEventListener(constants_EVENTS.SEEKED, seekedFn);

              _this5.$video.addEventListener(constants_EVENTS.PLAY, playFn);
            })();
          }
        }
      }
    }
  }, {
    key: "setAudio",
    value: function setAudio(audio) {// TODO
    }
  }, {
    key: "_autoRegisterEvents",
    value: function _autoRegisterEvents() {
      var _this6 = this;

      VIDEO_EVENTS.forEach(function (item) {
        _this6.$video.addEventListener(item, function (e) {
          // if (item !== 'timeupdate' && item !== 'progress') {
          //   console.log(item);
          // }
          var method = "on".concat(item);

          if (typeof _this6[method] === 'function') {
            _this6[method](e);
          }

          _this6.emit(item, {
            name: item,
            target: _this6.$video
          });
        });
      });
      this.$video.addEventListener('error', function (e) {
        // video set empty src is not error [chrome/firefox]
        if (!e.target.getAttribute('src')) {
          return;
        } // logger.error(e);


        if (e.target.error && e.target.error.code) {
          var error = Object.assign({}, e.target.error, {
            code: '250' + e.target.error.code
          });

          _this6.emit('error', error);

          return;
        }

        if (typeof_typeof(e) !== 'object') {
          e = {
            code: 5001,
            e: e
          };
        }

        _this6.emit('error', e);
      });
      this.on(constants_EVENTS.CORE_TO_MP4, function () {
        _this6.downgradeCore();
      });

      this._bindProgressEvent();
    }
  }, {
    key: "_bindProgressEvent",
    value: function _bindProgressEvent() {
      var _this7 = this;

      var _this$config = this.config,
          minPlayBUfferTime = _this$config.minPlayBUfferTime,
          safeBufferTime = _this$config.safeBufferTime;

      var progressHandle = function progressHandle() {
        if (!_this7.state.waiting_trigger) {
          return;
        }

        var bufferTime = _this7.getBufferTime();

        var currentTime = _this7.getCurrentTime();

        var duration = _this7.getDuration(); // nearly start


        if (currentTime < 2) {
          return;
        } // nearly end


        if (duration - currentTime < minPlayBUfferTime) {
          return;
        }

        var timeLose = bufferTime - currentTime;

        if (bufferTime - currentTime < minPlayBUfferTime) {
          _this7.player.pause();

          _this7.state.waiting_pause = true;

          _this7.emit(constants_EVENTS.LOADING_START, true);
        } else if (_this7.state.waiting_pause && timeLose > safeBufferTime) {
          _this7.play();

          _this7.state.waiting_pause = false;
        }
      };

      this.on(constants_EVENTS.UI_PLAY, function () {
        _this7.state.waiting_pause = true;
      });
      var firstPlay = false;
      this.on(constants_EVENTS.PLAY, function () {
        if (firstPlay) {
          return;
        }

        firstPlay = true;

        _this7.on(constants_EVENTS.PROGRESS, progressHandle);
      });
      this.on(constants_EVENTS.UI_PAUSE, function () {
        _this7.state.waiting_trigger = false;
      });
      this.on(constants_EVENTS.UI_PLAY, function () {
        _this7.state.waiting_trigger = true;
      }); // this.on('waiting', () => {
      //   const bufferTime = this.getBufferTime();
      //   const currentTime = this.getCurrentTime();
      // })
    }
  }, {
    key: "play",
    value: function play() {
      return this.$video.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.$video.pause();
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return !this.$video.paused && !this.$video.ended;
    }
  }, {
    key: "replay",
    value: function replay() {
      this.$video.play();
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this.$video.currentTime = time;
    }
  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      var video = this.$video;

      try {
        if (video !== document.pictureInPictureElement) {
          video.requestPictureInPicture();
        } else {
          document.exitPictureInPicture();
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, {
    key: "onended",
    value: function onended() {
      var loop = this.config.loop;

      if (!loop) {
        return;
      }

      this.player.play();
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.$video) {
        return 0;
      }

      return this.$video.duration || 0;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var time = this.$video.currentTime || 0;
      return time;
    }
  }, {
    key: "getBufferTime",
    value: function getBufferTime() {
      var video = this.$video;
      var currentTime = this.getCurrentTime();
      return getMatchRangeTime(currentTime, video.buffered);
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      if (!this.getCurrentTime()) {
        return 0;
      }

      return (this.getCurrentTime() / this.getDuration() * 100).toFixed(2) || 0;
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      if (!this.$video) {
        return 1;
      }

      return this.$video.volume;
    }
  }, {
    key: "getVideoAttr",
    value: function getVideoAttr(attr) {
      return this.$video[attr];
    }
  }, {
    key: "setVideoAttr",
    value: function setVideoAttr(attr, val) {
      this.$video[attr] = val;
    }
  }, {
    key: "_setVideoAttr",
    value: function _setVideoAttr() {
      var _this8 = this;

      if (util_isMobile) {
        this.$video.setAttribute('x5-video-player-type', 'h5');
        this.$video.setAttribute('x5-video-player-fullscreen', false);
      }

      this.$video.loop = false;
      VIDEO_ATTRS.forEach(function (item) {
        if (_this8.config[item]) {
          // this.$video.setAttribute(item, this.options[item]);
          _this8.$video[item] = _this8.config[item];
        }
      });
    }
  }, {
    key: "autoPlayPolicy",
    value: function autoPlayPolicy(promise) {
      var _this9 = this;

      if (promise !== undefined) {
        promise.catch(function (error) {
          _this9.emit(constants_EVENTS.ERROR_AUTO_PLAY, error);

          _this9.config.autoplay = false;
        }).then(function () {// Auto-play started
        });
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(value) {
      this.$video.volume = value;
    }
  }, {
    key: "setMuted",
    value: function setMuted(value) {
      this.$video.muted = value;

      if (value) {
        this.emit(constants_EVENTS.VOLUMECHANGE, true);
      }
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(value) {
      this.$video.playbackRate = value;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.pause();
    }
  }, {
    key: "getVideoElement",
    value: function getVideoElement() {
      return this.$video;
    }
  }, {
    key: "on",
    value: function on(key, callback) {
      this._eventEmitter.on(key, callback);
    }
  }, {
    key: "off",
    value: function off(key, callback) {
      this._eventEmitter.off(key, callback);
    }
  }, {
    key: "emit",
    value: function emit(key, data) {
      this._eventEmitter.emit(key, data);
    }
  }, {
    key: "once",
    value: function once(key, callback) {
      this._eventEmitter.once(key, callback);
    }
  }], [{
    key: "debug",
    set: function set(value) {
      if (value) {
        localStorage._vueCorePlayerDebug = true;
      } else {
        localStorage._vueCorePlayerDebug = '';
      }
    }
  }]);

  return BaseVideoCore;
}();

window.VCPVideoCore = base_BaseVideoCore;
/* harmony default export */ var base = (base_BaseVideoCore);
// CONCATENATED MODULE: ./src/core/index.js
// import { CORE } from '../constants'


var VPC_CORE_INS = {};
function initVideoCore(config) {
  var id = guid();
  config._id = id;
  var Core = config.core || base;
  var core = new Core(config);
  core.id = id;
  VPC_CORE_INS[id] = core;
  return core;
}
function getVideoCore(id) {
  return VPC_CORE_INS[id];
}
// EXTERNAL MODULE: ./node_modules/event-emitter/index.js
var event_emitter = __nested_webpack_require_198164__("c9fc");
var event_emitter_default = /*#__PURE__*/__nested_webpack_require_198164__.n(event_emitter);

// CONCATENATED MODULE: ./src/mixins.js




 // import eventBus from './helper/eve'
// import { getVideoCore } from './core'

var _ee = event_emitter_default()();

var mixins = {
  data: function data() {
    return {
      show: false,
      fullscreen: false,
      isPlaying: false,
      _coreID: ''
    };
  },
  created: function created() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function ($player) {
      _this.$player = $player;
      _this.$container = _this.$player.$el;
    });
    this.on(constants_EVENTS.PLAY, function () {
      _this.isPlaying = true;
    });
    this.on(constants_EVENTS.PAUSE, function () {
      _this.isPlaying = false;
    });
    registerFullScreenChangeListener(function (isFullScreen) {
      if (isFullScreen) {
        addClass(_this.$container, 'fullscreen');

        _this.emit('fullscreen', true);
      } else {
        removeClass(_this.$container, 'fullscreen');

        _this.emit('fullscreen', false);
      }
    });
  },
  _events: {},
  methods: {
    play: function play() {
      this.$player.play();
    },
    pause: function pause() {
      this.$player.pause();
    },
    enterFullscreen: function enterFullscreen() {
      var el = this.$container;

      if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.requestFullScreen) {
        el.requestFullscreen();
      }

      this.fullscreen = true;
    },
    cancelFullscreen: function cancelFullscreen(isManual) {
      // if (isManual) {
      //   this.emit('fullscreen', false)
      //   removeClass(el, 'fullscreen')
      //   this.fullscreen = false
      //   return
      // }
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
      }

      this.fullscreen = false;
    },
    getFullscreen: function getFullscreen() {
      return !document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement;
    },
    on: function on(event, callback) {
      var _this2 = this;

      if (isString(event)) {
        this._events[event] = callback;

        _ee.on(event, callback);
      } else if (Array.isArray(event)) {
        event.forEach(function (item) {
          _this2._events[item] = callback;

          _ee.on(item, callback);
        });
      }
    },
    emit: function emit(event, res) {
      _ee.emit(event, res);
    },
    off: function off(event, callback) {
      _ee.off(event, callback);
    },
    removeAllEvents: function removeAllEvents() {
      for (var item in this._events) {
        _ee.off(item, this._events[item]);
      }
    },
    addClass: function addClass(cls) {
      this.$container.classList.remove(cls);
    },
    removeClass: function removeClass(cls) {
      this.$container.classList.remove(cls);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeAllEvents();
  }
};
/* harmony default export */ var src_mixins = (mixins);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/dashboard.vue?vue&type=template&id=059479ad&
var dashboardvue_type_template_id_059479ad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"dashboard",staticClass:"vcp-dashboard",attrs:{"autoplay":""}},[_c('Progress'),_c('Controls',{attrs:{"muted":_vm.muted}})],1)}
var dashboardvue_type_template_id_059479ad_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/dashboard.vue?vue&type=template&id=059479ad&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/progress.vue?vue&type=template&id=53923c00&
var progressvue_type_template_id_53923c00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"input",staticClass:"vcp-progress-hover",on:{"click":_vm.seek}},[_c('div',{ref:"container",staticClass:"vcp-progress"},[_c('div',{staticClass:"vcp-progress-loaded",style:({width: _vm.bufferProgress + '%'})}),_c('div',{staticClass:"vcp-progress-played",style:({width: _vm.progress + '%'})},[_c('div',{ref:"thumb",staticClass:"thumb-drag",on:{"touchstart":_vm.startDrag,"mousedown":_vm.startDrag}})])])])}
var progressvue_type_template_id_53923c00_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/progress.vue?vue&type=template&id=53923c00&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: 'Progress',
  props: {
    visible: Boolean
  },
  mixins: [src_mixins],
  data: function data() {
    return {
      progress: 0.00,
      bufferProgress: 0.00
    };
  },
  created: function created() {
    var _this = this;

    this.on(constants_EVENTS.TIMEUPDATE, function () {
      if (_this._dragEl) {
        return;
      }

      var time = _this.$player.getCurrentTime();

      var duration = _this.$player.getDuration(); // this.setProgressPlayedPercent();


      _this.progress = (time / duration * 100).toFixed(2); // this.setRangeValue((time / duration * 100).toFixed(1));
    });
    this.on(constants_EVENTS.PROGRESS, function () {
      var bufferTime = _this.$player.getBufferTime();

      var duration = _this.$player.getDuration();

      if (bufferTime > 0 && duration > 0) {
        _this.bufferProgress = (bufferTime / duration * 100).toFixed(2);
      }
    });
    this.on(constants_EVENTS.LOADSTART, function () {
      var bufferTime = _this.$player.getBufferTime();

      var duration = _this.$player.getDuration();

      _this.bufferProgress = (bufferTime / duration * 100).toFixed(2);
    });
  },
  methods: {
    seek: function seek(e) {
      var offsets = getElementOffsets(e.currentTarget);

      if (this.getFullscreen()) {
        offsets.left = 0;
      }

      var _clientRect = e.currentTarget.getBoundingClientRect();

      var left = e.pageX - _clientRect.left;
      var maxVal = e.currentTarget.offsetWidth;
      var val = (left / maxVal * 100).toFixed(2);
      this.progress = val;
      var duration = this.$player.getDuration();
      this.$player.seek(left / maxVal * duration);
    },
    startDrag: function startDrag(e) {
      this.initDrag(e);
      this.startSeek = true;
    },
    initDrag: function initDrag(e) {
      e.preventDefault();
      var self = this;
      this._dragEl = this.$refs['thumb'];
      var maxVal = this.$refs['input'].offsetWidth;
      var marginLeft = getComputedStyle(this._dragEl, null).marginLeft;

      if (marginLeft) {
        marginLeft = parseFloat(marginLeft);
      }

      var coor = {
        x: (util_isMobile ? e.touches[0].clientX : e.pageX) - this._dragEl.offsetLeft + marginLeft,
        y: (util_isMobile ? e.touches[0].clientX : e.clientY) - this._dragEl.offsetTop,
        maxLeft: maxVal
      };

      if (this.getFullscreen()) {
        coor.x = e.pageX - this._dragEl.offsetLeft;
      }

      var move = function move(ev) {
        if (!self._dragEl) {
          return;
        }

        var newCoor = drag(ev, self._dragEl, coor);

        if (newCoor) {
          var left = newCoor.left;
          var val = (left / maxVal * 100).toFixed(2);
          self.progress = val;
          var duration = self.$player.getDuration();
          self.$player.seek(left / maxVal * duration);
        }
      };

      var stopMove = function stopMove() {
        self._dragEl = null;

        if (util_isMobile) {
          self.$refs['container'].removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }

        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };

      if (util_isMobile) {
        self.$refs['container'].addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }

      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/progress.vue?vue&type=style&index=0&lang=less&
var progressvue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("0d22");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/dashboard/progress.vue






/* normalize component */

var component = normalizeComponent(
  dashboard_progressvue_type_script_lang_js_,
  progressvue_type_template_id_53923c00_render,
  progressvue_type_template_id_53923c00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var progress = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/controls.vue?vue&type=template&id=f1e8b6a4&
var controlsvue_type_template_id_f1e8b6a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcp-controls"},[_c('div',{staticClass:"playback-control"},[_c('play-pause-cntrol'),_c('time-span')],1),_c('div',{staticClass:"setting-control"},[_c('volume-control',{attrs:{"muted":_vm.muted}}),_c('picture-in-picture'),_c('settings-control'),_c('fullscreen-control')],1)])}
var controlsvue_type_template_id_f1e8b6a4_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/controls.vue?vue&type=template&id=f1e8b6a4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/play-pause-control.vue?vue&type=template&id=4dab5453&
var play_pause_controlvue_type_template_id_4dab5453_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control"},[(_vm.isPlaying)?_c('div',{staticClass:"btn-control btn-pause",on:{"click":_vm.pause}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"48","viewBox":"0 0 36 48"}},[_c('g',{attrs:{"transform":"translate(-950 -398)"}},[_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(950 398)","fill":"#fff"}}),_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(974 398)","fill":"#fff"}})])]),_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.pause')))])]):_c('div',{staticClass:"btn-control btn-play",on:{"click":_vm.play}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"41","height":"47","viewBox":"0 0 41 47"}},[_c('path',{attrs:{"d":"M23.5,0,47,41H0Z","transform":"translate(41) rotate(90)","fill":"#fff"}})]),_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.play')))])])])}
var play_pause_controlvue_type_template_id_4dab5453_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/play-pause-control.vue?vue&type=template&id=4dab5453&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/play-pause-control.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var play_pause_controlvue_type_script_lang_js_ = ({
  name: 'PlayPauseControl',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  }
});
// CONCATENATED MODULE: ./src/dashboard/play-pause-control.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_play_pause_controlvue_type_script_lang_js_ = (play_pause_controlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/play-pause-control.vue?vue&type=style&index=0&lang=less&
var play_pause_controlvue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("d658");

// CONCATENATED MODULE: ./src/dashboard/play-pause-control.vue






/* normalize component */

var play_pause_control_component = normalizeComponent(
  dashboard_play_pause_controlvue_type_script_lang_js_,
  play_pause_controlvue_type_template_id_4dab5453_render,
  play_pause_controlvue_type_template_id_4dab5453_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var play_pause_control = (play_pause_control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/time-span.vue?vue&type=template&id=4ecb4f40&
var time_spanvue_type_template_id_4ecb4f40_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control timespan"},[_c('span',{staticClass:"time-current"},[_vm._v(_vm._s(_vm.currentTime))]),_c('span',{staticClass:"time-split"},[_vm._v(" / ")]),_c('span',{staticClass:"time-duration"},[_vm._v(_vm._s(_vm.duration))])])}
var time_spanvue_type_template_id_4ecb4f40_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/time-span.vue?vue&type=template&id=4ecb4f40&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/time-span.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var time_spanvue_type_script_lang_js_ = ({
  name: 'TimeSpan',
  props: {
    visible: Boolean
  },
  mixins: [src_mixins],
  data: function data() {
    return {
      currentTime: '00:00:00',
      duration: '--:--:--'
    };
  },
  created: function created() {
    var _this = this;

    this.on(constants_EVENTS.TIMEUPDATE, function () {
      var currentTime = _this.$player.getCurrentTime();

      if (!currentTime) {
        return;
      }

      _this.currentTime = secondsToTime(currentTime);

      var newDuration = _this.$player.getDuration();

      if (newDuration !== _this.duration) {
        _this.duration = secondsToTime(newDuration);
      }
    });
    this.on(constants_EVENTS.DURATIONCHANGE, function () {
      var newDuration = _this.$player.getDuration();

      _this.duration = secondsToTime(newDuration);
    });
  }
});
// CONCATENATED MODULE: ./src/dashboard/time-span.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_time_spanvue_type_script_lang_js_ = (time_spanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/time-span.vue?vue&type=style&index=0&lang=less&
var time_spanvue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("5311");

// CONCATENATED MODULE: ./src/dashboard/time-span.vue






/* normalize component */

var time_span_component = normalizeComponent(
  dashboard_time_spanvue_type_script_lang_js_,
  time_spanvue_type_template_id_4ecb4f40_render,
  time_spanvue_type_template_id_4ecb4f40_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var time_span = (time_span_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/volume.vue?vue&type=template&id=7dad5642&
var volumevue_type_template_id_7dad5642_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control volume-control"},[(!_vm.isMuted)?_c('div',{staticClass:"btn-control btn-volume",on:{"click":_vm.toggle}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"23.542","height":"23","viewBox":"0 0 23.542 23"}},[_c('path',{attrs:{"data-name":"15","fill":"#fff","d":"M0 5.5h7v12H0z"}}),_c('path',{attrs:{"data-name":"3","d":"M.5 11.5L12.5 0v23z","fill":"#fff"}}),_c('g',{attrs:{"data-name":"12 1","fill":"none","stroke":"#fff","stroke-width":"1.5"}},[_c('path',{attrs:{"data-name":"2","d":"M15.787 8.349a2.89 2.89 0 0 1 3.04 3.126 2.763 2.763 0 0 1-3.142 2.833","stroke-width":"1.50021"}}),_c('path',{attrs:{"data-name":"3","d":"M16.052 4.807s6.917-.147 6.61 6.796-6.83 6.16-6.83 6.16","stroke-width":"1.50021"}})])])]):_vm._e(),(_vm.isMuted)?_c('div',{staticClass:"btn-control btn-mute",on:{"click":_vm.toggle}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24.485","height":"23","viewBox":"0 0 24.485 23"}},[_c('g',{attrs:{"fill":"#fff"}},[_c('path',{attrs:{"data-name":"矩形 15","d":"M0 5.5h7v12H0z"}}),_c('path',{attrs:{"data-name":"多边形 3","d":"M.5 11.5L12.5 0v23z"}}),_c('g',{attrs:{"data-name":"组 3"}},[_c('path',{attrs:{"data-name":"矩形 39","d":"M23.071 7.257l1.414 1.414-7.07 7.071L16 14.328z"}}),_c('path',{attrs:{"data-name":"矩形 40","d":"M16 8.672l1.414-1.414 7.071 7.07-1.414 1.415z"}})])])])]):_vm._e(),_c('div',{staticClass:"btn-control-panel"},[_c('div',{staticClass:"progress",on:{"click":_vm.seek}},[_c('div',{staticClass:"volume-current",style:({height: _vm.volume + '%'})},[_c('div',{staticClass:"thumb-drag"})])]),_c('div',{staticClass:"volume-info"},[_vm._v(_vm._s(_vm.volume)+"%")])])])}
var volumevue_type_template_id_7dad5642_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/volume.vue?vue&type=template&id=7dad5642&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/volume.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { hasClass } from '../helper/dom'

/* harmony default export */ var volumevue_type_script_lang_js_ = ({
  name: 'Volume',
  props: {
    visible: Boolean,
    muted: Boolean
  },
  mixins: [src_mixins],
  data: function data() {
    return {
      panelShow: false,
      volume: 50,
      isMuted: this.muted
    };
  },
  methods: {
    seek: function seek(e) {
      var top = e.offsetY;

      if (e.target.className === 'volume-current') {
        top += e.target.offsetTop;
      }

      var maxVal = e.currentTarget.offsetHeight;
      var volume = 1 - top / maxVal;

      if (this.isMuted) {
        this.$player.setMuted(false);
      }

      this.$player.setVolume(volume, true);
      this.setRangeValue(volume);
    },
    setRangeValue: function setRangeValue(value) {
      this.volume = parseInt(value * 100);
    },
    toggle: function toggle() {
      this.isMuted = !this.isMuted;

      if (this.isMuted) {
        this.$player.setMuted(true);
        this.volume = 0;
      } else {
        this.$player.setMuted(false);
        this.volume = parseInt(this.$player.getVolume() * 100);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/volume.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_volumevue_type_script_lang_js_ = (volumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/volume.vue?vue&type=style&index=0&lang=less&
var volumevue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("42e9");

// CONCATENATED MODULE: ./src/dashboard/volume.vue






/* normalize component */

var volume_component = normalizeComponent(
  dashboard_volumevue_type_script_lang_js_,
  volumevue_type_template_id_7dad5642_render,
  volumevue_type_template_id_7dad5642_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var volume = (volume_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/fullscreen.vue?vue&type=template&id=7050b26e&
var fullscreenvue_type_template_id_7050b26e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.disable)?_c('div',{staticClass:"vue-core-video-player-control"},[(!_vm.fullscreen)?_c('div',{staticClass:"btn-control btn-fullscreen",on:{"click":_vm.enterFullscreen}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"28","height":"20","viewBox":"0 0 28 20"}},[_c('g',{attrs:{"fill":"#fff"}},[_c('g',{attrs:{"data-name":"6 7"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M16 0h10v2H16z"}}),_c('path',{attrs:{"data-name":"8","d":"M26 0h2v6h-2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M18 18h10v2H18z"}}),_c('path',{attrs:{"data-name":"10","d":"M26 14h2v6h-2z"}})])]),_c('g',{attrs:{"data-name":"6 8"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M12 20H2v-2h10z"}}),_c('path',{attrs:{"data-name":"8","d":"M2 20H0v-6h2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M10 2H0V0h10z"}}),_c('path',{attrs:{"data-name":"10","d":"M2 6H0V0h2z"}})])])])]),_c('div',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.fullscreen')))])]):_vm._e(),(_vm.fullscreen)?_c('div',{staticClass:"btn-control btn-off-fullscreen",on:{"click":_vm.cancelFullscreen}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"25","height":"18","viewBox":"0 0 25 18"}},[_c('g',{attrs:{"fill":"#fff"}},[_c('g',{attrs:{"data-name":"6 9"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M15 5h10v2H15z"}}),_c('path',{attrs:{"data-name":"8","d":"M15 0h2v6h-2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M15 12h10v2H15z"}}),_c('path',{attrs:{"data-name":"10","d":"M15 12h2v6h-2z"}})])]),_c('g',{attrs:{"data-name":"6 10"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M10 14H0v-2h10z"}}),_c('path',{attrs:{"data-name":"8","d":"M10 18H8v-6h2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M10 6H0V4h10z"}}),_c('path',{attrs:{"data-name":"10","d":"M10 6H8V0h2z"}})])])])]),_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.exitFullscreen')))])]):_vm._e()]):_vm._e()}
var fullscreenvue_type_template_id_7050b26e_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/fullscreen.vue?vue&type=template&id=7050b26e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/fullscreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
// import EVENTS from '../constants/EVENTS'


/* harmony default export */ var fullscreenvue_type_script_lang_js_ = ({
  name: 'Fullscreen',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      disable: util_isMobile && isApple
    };
  }
});
// CONCATENATED MODULE: ./src/dashboard/fullscreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_fullscreenvue_type_script_lang_js_ = (fullscreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/fullscreen.vue?vue&type=style&index=0&lang=less&
var fullscreenvue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("156e");

// CONCATENATED MODULE: ./src/dashboard/fullscreen.vue






/* normalize component */

var fullscreen_component = normalizeComponent(
  dashboard_fullscreenvue_type_script_lang_js_,
  fullscreenvue_type_template_id_7050b26e_render,
  fullscreenvue_type_template_id_7050b26e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fullscreen = (fullscreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/settings.vue?vue&type=template&id=a519e9e2&
var settingsvue_type_template_id_a519e9e2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control settings-control"},[_c('div',{staticClass:"btn-control btn-settings",on:{"click":_vm.toggle}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"31.971","height":"31.971","viewBox":"0 0 31.971 31.971"}},[_c('g',{attrs:{"data-name":"7","transform":"translate(6.985 6.985)","fill":"none","stroke":"#fff","stroke-width":"5"}},[_c('circle',{attrs:{"cx":"9","cy":"9","r":"9","stroke":"none"}}),_c('circle',{attrs:{"cx":"9","cy":"9","r":"6.5"}})]),_c('g',{attrs:{"data-name":"15 10","fill":"#fff"}},[_c('g',{attrs:{"data-name":"14 1"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M13.985 3.985h4v3h-4z"}}),_c('path',{attrs:{"data-name":"4","d":"M15.985 3.985l3 4h-6z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M17.985 27.985h-4v-3h4z"}}),_c('path',{attrs:{"data-name":"4","d":"M15.985 27.985l-3-4h6z"}})])]),_c('g',{attrs:{"data-name":"14 2"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M23.056 6.085l2.829 2.829-2.122 2.12-2.828-2.828z"}}),_c('path',{attrs:{"data-name":"4","d":"M24.47 7.5l-.707 4.95-4.242-4.244z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M8.914 25.884l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),_c('path',{attrs:{"data-name":"4","d":"M7.5 24.47l.707-4.95 4.243 4.243z"}})])])]),_c('g',{attrs:{"data-name":"15 11","fill":"#fff"}},[_c('g',{attrs:{"data-name":"14 1"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M23.056 6.086l2.828 2.828-2.12 2.122-2.83-2.829z"}}),_c('path',{attrs:{"data-name":"4","d":"M24.47 7.5l-.707 4.95-4.242-4.243z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M8.914 25.885l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),_c('path',{attrs:{"data-name":"4","d":"M7.5 24.47l.707-4.949 4.242 4.243z"}})])]),_c('g',{attrs:{"data-name":"14 2"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M27.985 13.985v4h-3v-4z"}}),_c('path',{attrs:{"data-name":"4","d":"M27.985 15.985l-4 3v-6z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M3.985 17.985v-4h3v4z"}}),_c('path',{attrs:{"data-name":"4","d":"M3.985 15.985l4-3v6z"}})])])]),_c('g',{attrs:{"data-name":"15 12","fill":"#fff"}},[_c('g',{attrs:{"data-name":"14 1"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M27.985 13.985v4h-3v-4z"}}),_c('path',{attrs:{"data-name":"4","d":"M27.985 15.985l-4 3v-6z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M3.985 17.985v-4h3v4z"}}),_c('path',{attrs:{"data-name":"4","d":"M3.985 15.985l4-3v6z"}})])]),_c('g',{attrs:{"data-name":"14 2"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M25.885 23.056l-2.829 2.829-2.12-2.122 2.828-2.828z"}}),_c('path',{attrs:{"data-name":"4","d":"M24.47 24.47l-4.95-.707 4.244-4.242z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M6.086 8.914l2.828-2.828 2.122 2.12-2.829 2.83z"}}),_c('path',{attrs:{"data-name":"4","d":"M7.5 7.5l4.95.707-4.243 4.243z"}})])])])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panelShow),expression:"panelShow"}],staticClass:"btn-control-panel",on:{"click":_vm.preventHide}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentPanel),expression:"currentPanel"}],staticClass:"current-panel"},[_c('li',[_c('span',{staticClass:"item-name"},[_vm._v("\n          "+_vm._s(_vm.$t('dashboard.settings.autoplay'))+"\n        ")]),_c('div',{staticClass:"item-control"},[_c('widgets-switch',{ref:"autoplaySwitch",on:{"change":_vm.changeAutoplaySettings}})],1)]),_c('li',[_c('span',{staticClass:"item-name"},[_vm._v(_vm._s(_vm.$t('dashboard.settings.loop')))]),_c('div',{staticClass:"item-control"},[_c('widgets-switch',{ref:"loopSwitch",on:{"change":_vm.changeLoopSettings}})],1)]),_c('li',[_c('span',{staticClass:"item-name"},[_vm._v(_vm._s(_vm.$t('dashboard.settings.speed')))]),_c('div',{staticClass:"item-control",on:{"click":_vm.showSpeedPanel}},[_c('span',[_vm._v(_vm._s(_vm.speed)+"x")]),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"4","d":"M.809.616l3.9 5-3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})])])]),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.medias.length > 1),expression:"medias.length > 1"}]},[_c('span',{staticClass:"item-name"},[_vm._v(_vm._s(_vm.$t('dashboard.settings.resolution')))]),(_vm.resolution)?_c('div',{staticClass:"item-control",on:{"click":_vm.showResolutionPanel}},[_c('span',[_vm._v(_vm._s(_vm.resolution))]),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"4","d":"M.809.616l3.9 5-3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})])]):_vm._e()])]),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.resolutionListPanel),expression:"resolutionListPanel"}],staticClass:"resolution-list animated fadeInRight"},[_c('li',{on:{"click":_vm.backCurrentPanel}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"5","d":"M5.154.616l-3.9 5 3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})]),_vm._v("\n        "+_vm._s(_vm.$t('dashboard.btn.back'))+"\n      ")]),_vm._l((_vm.medias),function(item,index){return _c('li',{key:index,on:{"click":function($event){return _vm.setResolution(item)}}},[_vm._v(_vm._s(item.resolution))])})],2),(_vm.speedListPanel)?_c('ul',{staticClass:"speed-list animated fadeInRight"},[_c('li',{on:{"click":_vm.backCurrentPanel}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"5","d":"M5.154.616l-3.9 5 3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})]),_vm._v("\n        "+_vm._s(_vm.$t('dashboard.btn.back'))+"\n      ")]),_c('li',{attrs:{"data-val":"0.5"},on:{"click":_vm.setSpeed}},[_vm._v("0.5x")]),_c('li',{attrs:{"data-val":"1"},on:{"click":_vm.setSpeed}},[_vm._v("1x")]),_c('li',{attrs:{"data-val":"1.25"},on:{"click":_vm.setSpeed}},[_vm._v("1.25x")]),_c('li',{attrs:{"data-val":"1.5"},on:{"click":_vm.setSpeed}},[_vm._v("1.5x")]),_c('li',{attrs:{"data-val":"2"},on:{"click":_vm.setSpeed}},[_vm._v("2x")])]):_vm._e()])])}
var settingsvue_type_template_id_a519e9e2_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/settings.vue?vue&type=template&id=a519e9e2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/setting-switch.vue?vue&type=template&id=33d9ef22&
var setting_switchvue_type_template_id_33d9ef22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcp-switch",class:{ open: _vm.isOpen},on:{"click":_vm.toggle}})}
var setting_switchvue_type_template_id_33d9ef22_staticRenderFns = []


// CONCATENATED MODULE: ./src/widgets/setting-switch.vue?vue&type=template&id=33d9ef22&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/setting-switch.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var setting_switchvue_type_script_lang_js_ = ({
  name: 'setting-switch',
  props: {
    openStatus: Boolean
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function toggle() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    open: function open() {
      this.isOpen = true;
    }
  }
});
// CONCATENATED MODULE: ./src/widgets/setting-switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_setting_switchvue_type_script_lang_js_ = (setting_switchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/widgets/setting-switch.vue?vue&type=style&index=0&lang=less&
var setting_switchvue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("c428");

// CONCATENATED MODULE: ./src/widgets/setting-switch.vue






/* normalize component */

var setting_switch_component = normalizeComponent(
  widgets_setting_switchvue_type_script_lang_js_,
  setting_switchvue_type_template_id_33d9ef22_render,
  setting_switchvue_type_template_id_33d9ef22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var setting_switch = (setting_switch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/settings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'Settings',
  props: {
    visible: Boolean
  },
  mixins: [src_mixins],
  components: {
    'widgets-switch': setting_switch
  },
  data: function data() {
    return {
      autoplay: false,
      loop: false,
      resolution: '',
      panelShow: false,
      currentPanel: true,
      resolutionListPanel: false,
      speedListPanel: false,
      speed: 1,
      medias: []
    };
  },
  methods: {
    toggle: function toggle(e) {
      e && e.stopPropagation();
      this.panelShow = !this.panelShow;

      if (this.panelShow) {
        this.$container.classList.add('settings-open');
      } else {
        this.$container.classList.remove('settings-open');
      }
    },
    preventHide: function preventHide(e) {
      e.stopPropagation();
    },
    showResolutionPanel: function showResolutionPanel(e) {
      if (this.medias.length <= 1) {
        return;
      }

      this.currentPanel = false;
      this.resolutionListPanel = true;
    },
    showSpeedPanel: function showSpeedPanel(e) {
      this.currentPanel = false;
      this.speedListPanel = true;
    },
    backCurrentPanel: function backCurrentPanel() {
      this.currentPanel = true;
      this.speedListPanel = false;
      this.resolutionListPanel = false;
    },
    setResolution: function setResolution(media) {
      if (this.resolution === media.resolution) {
        this.backCurrentPanel();
        return;
      }

      this.$player.setResolution(media.resolution);
      this.backCurrentPanel();
      this.toggle();
    },
    setSpeed: function setSpeed(e) {
      var val = +e.target.dataset['val'];
      this.speed = val;
      this.$player.setSpeed(val);
      this.backCurrentPanel();
    },
    changeAutoplaySettings: function changeAutoplaySettings(status) {
      this.$player.setConfig('autoplay', status);
    },
    changeLoopSettings: function changeLoopSettings(status) {
      this.$player.setConfig('loop', status);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.SOURCE_UPDATED, function () {
      _this.medias = _this.$player.medias;
      _this.resolution = _this.$player.resolution;
    });
    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var _this$$player$config = _this.$player.config,
          autoplay = _this$$player$config.autoplay,
          loop = _this$$player$config.loop;

      if (autoplay) {
        _this.$refs['autoplaySwitch'].open();
      }

      if (loop) {
        _this.$refs['loopSwitch'].open();
      }
    });
    document.addEventListener('click', function () {
      if (_this.panelShow) {
        _this.panelShow = false;
        _this.speedListPanel = false;
        _this.resolutionListPanel = false;

        _this.$container.classList.remove('settings-open');
      }
    });
  }
});
// CONCATENATED MODULE: ./src/dashboard/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/settings.vue?vue&type=style&index=0&lang=less&
var settingsvue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("aa54");

// CONCATENATED MODULE: ./src/dashboard/settings.vue






/* normalize component */

var settings_component = normalizeComponent(
  dashboard_settingsvue_type_script_lang_js_,
  settingsvue_type_template_id_a519e9e2_render,
  settingsvue_type_template_id_a519e9e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var settings = (settings_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/picture-in-picture.vue?vue&type=template&id=5862d48b&
var picture_in_picturevue_type_template_id_5862d48b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"vue-core-video-player-control",on:{"click":_vm.requestPictureInPicture}},[_c('div',{staticClass:"btn-control btn-pip"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"28","height":"16","viewBox":"0 0 28 16"}},[_c('g',{attrs:{"data-name":"6 13"}},[_c('g',{attrs:{"data-name":"5 1","fill":"#fff"}},[_c('path',{attrs:{"data-name":"9","d":"M18 14h10v2H18z"}}),_c('path',{attrs:{"data-name":"10","d":"M26 9h2v6h-2z"}})])]),_c('g',{attrs:{"data-name":"6 14","fill":"#fff"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M12 16H2v-2h10z"}}),_c('path',{attrs:{"data-name":"8","d":"M2 16H0V6h2z"}})]),_c('path',{attrs:{"data-name":"41","d":"M28 2H0V0h28z"}})])]),_c('div',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.pip')))])])]):_vm._e()}
var picture_in_picturevue_type_template_id_5862d48b_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/picture-in-picture.vue?vue&type=template&id=5862d48b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/picture-in-picture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
// import EVENTS from '../constants/EVENTS'


var _isSupportPIP = function _isSupportPIP() {
  if ('pictureInPictureEnabled' in document) {
    return true;
  }

  var el = document.createElement('video');

  if (el.requestPictureInPicture && typeof el.requestPictureInPicture === 'function') {
    return true;
  }

  return false;
};

/* harmony default export */ var picture_in_picturevue_type_script_lang_js_ = ({
  name: 'PictureInPicture',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      show: false
    };
  },
  created: function created() {
    if (_isSupportPIP) {
      this.show = true;
    }
  },
  methods: {
    requestPictureInPicture: function requestPictureInPicture() {
      this.$player.requestPictureInPicture();
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/picture-in-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_picture_in_picturevue_type_script_lang_js_ = (picture_in_picturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/picture-in-picture.vue?vue&type=style&index=0&lang=less&
var picture_in_picturevue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("1b6f");

// CONCATENATED MODULE: ./src/dashboard/picture-in-picture.vue






/* normalize component */

var picture_in_picture_component = normalizeComponent(
  dashboard_picture_in_picturevue_type_script_lang_js_,
  picture_in_picturevue_type_template_id_5862d48b_render,
  picture_in_picturevue_type_template_id_5862d48b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var picture_in_picture = (picture_in_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/controls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var controlsvue_type_script_lang_js_ = ({
  name: 'Controls',
  components: {
    'play-pause-cntrol': play_pause_control,
    'time-span': time_span,
    'volume-control': volume,
    'fullscreen-control': fullscreen,
    'settings-control': settings,
    'picture-in-picture': picture_in_picture
  },
  props: {
    visible: Boolean,
    muted: Boolean
  }
});
// CONCATENATED MODULE: ./src/dashboard/controls.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_controlsvue_type_script_lang_js_ = (controlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/controls.vue?vue&type=style&index=0&land=less&lang=css&
var controlsvue_type_style_index_0_land_less_lang_css_ = __nested_webpack_require_198164__("7fc5");

// CONCATENATED MODULE: ./src/dashboard/controls.vue






/* normalize component */

var controls_component = normalizeComponent(
  dashboard_controlsvue_type_script_lang_js_,
  controlsvue_type_template_id_f1e8b6a4_render,
  controlsvue_type_template_id_f1e8b6a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var controls = (controls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//






var pageCoor = {
  x: null,
  y: null
};
/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  name: 'Dashboard',
  components: {
    Progress: progress,
    Controls: controls
  },
  props: {
    controls: [Boolean, String],
    muted: Boolean
  },
  data: function data() {
    return {
      show: true
    };
  },
  mixins: [src_mixins],
  methods: {
    showDashboard: function showDashboard(delay) {
      var _this = this;

      window.clearTimeout(this._hideTimeout);
      this.show = true;
      this.emit(constants_EVENTS.UI_DASHBOARD_SHOW);

      if (delay === 0) {// TODO handle force show
      } else {
        this._hideTimeout = setTimeout(function () {
          _this.hideDashboard();
        }, delay || constants_DEFAULT_CONFIG.dashboardHideDelay);
      }
    },
    hideDashboard: function hideDashboard() {
      this.show = false;
      this.emit(constants_EVENTS.UI_DASHBOARD_HIDE);
    },
    _initAutoMode: function _initAutoMode() {
      var $parent = this.$refs['dashboard'].parentNode;

      if (util_isMobile) {
        $parent.addEventListener('touchend', this._onTouchend.bind(this), true);
      } else {
        $parent.addEventListener('mousemove', this._onMousemove.bind(this));
        $parent.addEventListener('mouseleave', this._onMouseleave.bind(this));
        $parent.addEventListener('mouseover', this._onMouseover.bind(this), true);
      } // first render delay


      this.showDashboard(4000);
    },
    _onMousemove: function _onMousemove(e) {
      if (e.pageX === pageCoor.x && e.pageY === pageCoor.y) {
        pageCoor.x = e.pageX;
        pageCoor.y = e.pageY;
        return;
      }

      pageCoor.x = e.pageX;
      pageCoor.y = e.pageY;

      if (isDescendant(this._el, e.target)) {
        return this.showDashboard(0);
      }

      this.showDashboard();
    },
    _onMouseleave: function _onMouseleave() {
      this.showDashboard();
    },
    _onMouseover: function _onMouseover() {
      this.showDashboard(0);
    },
    _onTouchend: function _onTouchend() {
      this.showDashboard();
    }
  },
  mounted: function mounted() {
    var controls = this.controls;

    if (!controls) {
      this.show = false;
    } else if (controls === 'fixed') {
      this.show = true;
    } else {
      this._initAutoMode();
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&
var dashboardvue_type_style_index_0_lang_css_ = __nested_webpack_require_198164__("cc1d");

// CONCATENATED MODULE: ./src/dashboard/dashboard.vue






/* normalize component */

var dashboard_component = normalizeComponent(
  dashboard_dashboardvue_type_script_lang_js_,
  dashboardvue_type_template_id_059479ad_render,
  dashboardvue_type_template_id_059479ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dashboard = (dashboard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-dashboard.vue?vue&type=template&id=2f9ea4c8&
var mobile_dashboardvue_type_template_id_2f9ea4c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"dashboard",staticClass:"vcp-m-dashboard",attrs:{"autoplay":""}},[_c('MobileControls',{attrs:{"muted":_vm.muted}}),_c('Progress')],1)}
var mobile_dashboardvue_type_template_id_2f9ea4c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/mobile-dashboard.vue?vue&type=template&id=2f9ea4c8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-controls.vue?vue&type=template&id=d6318732&
var mobile_controlsvue_type_template_id_d6318732_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcp-controls"},[_c('div',{staticClass:"playback-control"},[_c('time-span')],1),_c('div',{staticClass:"setting-control"},[_c('picture-in-picture'),_c('settings-control'),_c('fullscreen-control')],1)])}
var mobile_controlsvue_type_template_id_d6318732_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/mobile-controls.vue?vue&type=template&id=d6318732&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-controls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var mobile_controlsvue_type_script_lang_js_ = ({
  name: 'Controls',
  components: {
    'time-span': time_span,
    'fullscreen-control': fullscreen,
    'settings-control': settings,
    'picture-in-picture': picture_in_picture
  },
  props: {
    visible: Boolean,
    muted: Boolean
  }
});
// CONCATENATED MODULE: ./src/dashboard/mobile-controls.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_mobile_controlsvue_type_script_lang_js_ = (mobile_controlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/mobile-controls.vue?vue&type=style&index=0&land=less&lang=css&
var mobile_controlsvue_type_style_index_0_land_less_lang_css_ = __nested_webpack_require_198164__("4cc6");

// CONCATENATED MODULE: ./src/dashboard/mobile-controls.vue






/* normalize component */

var mobile_controls_component = normalizeComponent(
  dashboard_mobile_controlsvue_type_script_lang_js_,
  mobile_controlsvue_type_template_id_d6318732_render,
  mobile_controlsvue_type_template_id_d6318732_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mobile_controls = (mobile_controls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//






var mobile_dashboardvue_type_script_lang_js_pageCoor = {
  x: null,
  y: null
};
/* harmony default export */ var mobile_dashboardvue_type_script_lang_js_ = ({
  name: 'MobileDashboard',
  components: {
    Progress: progress,
    MobileControls: mobile_controls
  },
  props: {
    controls: [Boolean, String],
    muted: Boolean
  },
  data: function data() {
    return {
      show: true
    };
  },
  mixins: [src_mixins],
  methods: {
    showDashboard: function showDashboard(delay) {
      var _this = this;

      window.clearTimeout(this._hideTimeout);
      this.show = true;
      this.emit(constants_EVENTS.UI_DASHBOARD_SHOW);

      if (delay === 0) {// TODO handle force show
      } else {
        this._hideTimeout = setTimeout(function () {
          _this.hideDashboard();
        }, delay || constants_DEFAULT_CONFIG.dashboardHideDelay);
      }
    },
    hideDashboard: function hideDashboard() {
      this.show = false;
      this.emit(constants_EVENTS.UI_DASHBOARD_HIDE);
    },
    _initAutoMode: function _initAutoMode() {
      var $parent = this.$refs['dashboard'].parentNode;

      if (util_isMobile) {
        $parent.addEventListener('touchend', this._onTouchend.bind(this), true);
      } else {
        $parent.addEventListener('mousemove', this._onMousemove.bind(this));
        $parent.addEventListener('mouseleave', this._onMouseleave.bind(this));
        $parent.addEventListener('mouseover', this._onMouseover.bind(this), true);
      } // first render delay


      this.showDashboard(4000);
    },
    _onMousemove: function _onMousemove(e) {
      if (e.pageX === mobile_dashboardvue_type_script_lang_js_pageCoor.x && e.pageY === mobile_dashboardvue_type_script_lang_js_pageCoor.y) {
        mobile_dashboardvue_type_script_lang_js_pageCoor.x = e.pageX;
        mobile_dashboardvue_type_script_lang_js_pageCoor.y = e.pageY;
        return;
      }

      mobile_dashboardvue_type_script_lang_js_pageCoor.x = e.pageX;
      mobile_dashboardvue_type_script_lang_js_pageCoor.y = e.pageY;

      if (isDescendant(this._el, e.target)) {
        return this.showDashboard(0);
      }

      this.showDashboard();
    },
    _onMouseleave: function _onMouseleave() {
      this.showDashboard();
    },
    _onMouseover: function _onMouseover() {
      this.showDashboard(0);
    },
    _onTouchend: function _onTouchend() {
      this.showDashboard();
    }
  },
  mounted: function mounted() {
    var controls = this.controls;

    if (!controls) {
      this.show = false;
    } else if (controls === 'fixed') {
      this.show = true;
    } else {
      this._initAutoMode();
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/mobile-dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_mobile_dashboardvue_type_script_lang_js_ = (mobile_dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/mobile-dashboard.vue?vue&type=style&index=0&lang=css&
var mobile_dashboardvue_type_style_index_0_lang_css_ = __nested_webpack_require_198164__("a3e9");

// CONCATENATED MODULE: ./src/dashboard/mobile-dashboard.vue






/* normalize component */

var mobile_dashboard_component = normalizeComponent(
  dashboard_mobile_dashboardvue_type_script_lang_js_,
  mobile_dashboardvue_type_template_id_2f9ea4c8_render,
  mobile_dashboardvue_type_template_id_2f9ea4c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mobile_dashboard = (mobile_dashboard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/layers.vue?vue&type=template&id=e00e164c&
var layersvue_type_template_id_e00e164c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-layers"},[_c('cover-layer'),_c('logo-layer'),_c('title-layer'),_c('play-pause-layer'),_c('loading-layer'),_c('error-layer')],1)}
var layersvue_type_template_id_e00e164c_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/layers.vue?vue&type=template&id=e00e164c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/title-layer.vue?vue&type=template&id=10f72cc2&
var title_layervue_type_template_id_10f72cc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show && _vm.title.length),expression:"show && title.length"}],staticClass:"vcp-layer title-layer"},[_c('div',{staticClass:"video-title"},[_vm._v(_vm._s(_vm.title))])])}
var title_layervue_type_template_id_10f72cc2_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/title-layer.vue?vue&type=template&id=10f72cc2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/title-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var title_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  data: function data() {
    return {
      title: '',
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var title = _this.$player.config.title;

      if (title) {
        _this.title = title;
      }
    });
    this.on(constants_EVENTS.UI_DASHBOARD_SHOW, function () {
      _this.show = true;
    });
    this.on(constants_EVENTS.UI_DASHBOARD_HIDE, function () {
      _this.show = false;
    });
  }
});
// CONCATENATED MODULE: ./src/layers/title-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_title_layervue_type_script_lang_js_ = (title_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/title-layer.vue?vue&type=style&index=0&lang=less&
var title_layervue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("b72f");

// CONCATENATED MODULE: ./src/layers/title-layer.vue






/* normalize component */

var title_layer_component = normalizeComponent(
  layers_title_layervue_type_script_lang_js_,
  title_layervue_type_template_id_10f72cc2_render,
  title_layervue_type_template_id_10f72cc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var title_layer = (title_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/logo-layer.vue?vue&type=template&id=9d5c272e&
var logo_layervue_type_template_id_9d5c272e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.logo)?_c('div',{staticClass:"vcp-layer logo-layer"},[_c('div',{staticClass:"logo-wrap"},[_c('img',{attrs:{"alt":"logo","src":_vm.logo}})])]):_vm._e()}
var logo_layervue_type_template_id_9d5c272e_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/logo-layer.vue?vue&type=template&id=9d5c272e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/logo-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var logo_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      logo: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var logo = _this.$player.config.logo;

      if (logo) {
        _this.logo = logo;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/layers/logo-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_logo_layervue_type_script_lang_js_ = (logo_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/logo-layer.vue?vue&type=style&index=0&lang=less&
var logo_layervue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("56fb");

// CONCATENATED MODULE: ./src/layers/logo-layer.vue






/* normalize component */

var logo_layer_component = normalizeComponent(
  layers_logo_layervue_type_script_lang_js_,
  logo_layervue_type_template_id_9d5c272e_render,
  logo_layervue_type_template_id_9d5c272e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logo_layer = (logo_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/play-pause-layer.vue?vue&type=template&id=533551b6&
var play_pause_layervue_type_template_id_533551b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer play-pause-layer"},[(!_vm.isPlaying)?_c('a',{staticClass:"btn-control btn-play",attrs:{"href":"javascript:;"},on:{"click":_vm.play}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"31","height":"35","viewBox":"0 0 41 47"}},[_c('path',{attrs:{"d":"M23.5,0,47,41H0Z","transform":"translate(41) rotate(90)","fill":"#ff6060"}})])]):_vm._e(),(_vm.isPlaying)?_c('a',{staticClass:"btn-control btn-pause",attrs:{"href":"javascript:;"},on:{"click":_vm.pause}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"27","height":"36","viewBox":"0 0 36 48"}},[_c('g',{attrs:{"transform":"translate(-950 -398)"}},[_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(950 398)","fill":"#ff6060"}}),_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(974 398)","fill":"#ff6060"}})])])]):_vm._e()])}
var play_pause_layervue_type_template_id_533551b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/play-pause-layer.vue?vue&type=template&id=533551b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/play-pause-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var play_pause_layervue_type_script_lang_js_ = ({
  name: 'PlayPauseLayer',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      show: util_isMobile
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.UI_DASHBOARD_SHOW, function () {
      _this.show = true;
    });
    this.on(constants_EVENTS.UI_DASHBOARD_HIDE, function () {
      _this.show = false;
    });
  }
});
// CONCATENATED MODULE: ./src/layers/play-pause-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_play_pause_layervue_type_script_lang_js_ = (play_pause_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/play-pause-layer.vue?vue&type=style&index=0&lang=css&
var play_pause_layervue_type_style_index_0_lang_css_ = __nested_webpack_require_198164__("4447");

// CONCATENATED MODULE: ./src/layers/play-pause-layer.vue






/* normalize component */

var play_pause_layer_component = normalizeComponent(
  layers_play_pause_layervue_type_script_lang_js_,
  play_pause_layervue_type_template_id_533551b6_render,
  play_pause_layervue_type_template_id_533551b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var play_pause_layer = (play_pause_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/cover-layer.vue?vue&type=template&id=27415aae&
var cover_layervue_type_template_id_27415aae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer cover-layer"},[_c('img',{attrs:{"alt":"video cover","src":_vm.cover}})])}
var cover_layervue_type_template_id_27415aae_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/cover-layer.vue?vue&type=template&id=27415aae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/cover-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var cover_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      cover: 'data:image/gif;base64,R0lGODlhAgACAIAAADMzMwAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMEQ4MDk3RDgzRTUxMUVBOEFBNkNFRTA4ODA0RDY3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMEQ4MDk3RTgzRTUxMUVBOEFBNkNFRTA4ODA0RDY3OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwRDgwOTdCODNFNTExRUE4QUE2Q0VFMDg4MDRENjc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwRDgwOTdDODNFNTExRUE4QUE2Q0VFMDg4MDRENjc4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAAIAAgAAAgKEUQA7',
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var cover = _this.$player.config.cover;

      if (cover) {
        _this.cover = cover;
      }
    });
    this.on(constants_EVENTS.ERROR_AUTO_PLAY, function () {
      _this.show = true;
    });
    this.on(constants_EVENTS.PLAY, function () {
      _this.show = false;
    });
  }
});
// CONCATENATED MODULE: ./src/layers/cover-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_cover_layervue_type_script_lang_js_ = (cover_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/cover-layer.vue?vue&type=style&index=0&lang=less&
var cover_layervue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("9983");

// CONCATENATED MODULE: ./src/layers/cover-layer.vue






/* normalize component */

var cover_layer_component = normalizeComponent(
  layers_cover_layervue_type_script_lang_js_,
  cover_layervue_type_template_id_27415aae_render,
  cover_layervue_type_template_id_27415aae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cover_layer = (cover_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/loading-layer.vue?vue&type=template&id=0d8cd02a&
var loading_layervue_type_template_id_0d8cd02a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer loading-layer"},[_c('div',{staticClass:"loading-wrap"},[_c('div',{staticClass:"h5-layer-loading"},[_c('svg',{staticClass:"spinner",attrs:{"width":"100%","height":"100%","viewBox":"0 0 80 80","xmlns":"http://www.w3.org/2000/svg"}},[_c('defs',[_c('linearGradient',{attrs:{"id":"grad","gradientUnits":"objectBoundingBox","gradientTransform":"rotate(135 0.5 0.5)"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#ff6060"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fa3b3b"}})],1)],1),_c('circle',{staticClass:"path",attrs:{"stroke":"url(#grad)","stroke-width":"10","fill":"none","stroke-linecap":"round","cx":"40","cy":"40","r":"30"}})])]),_c('p',[_vm._v(_vm._s(_vm.$t('layers.loading.msg')))])])])}
var loading_layervue_type_template_id_0d8cd02a_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/loading-layer.vue?vue&type=template&id=0d8cd02a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/loading-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var showTimeout = 600;
/* harmony default export */ var loading_layervue_type_script_lang_js_ = ({
  name: 'LoadingLayer',
  mixins: [src_mixins],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    showLoading: function showLoading(isForce) {
      var _this = this;

      if (isForce) {
        this.show = true;
        return;
      }

      window.clearTimeout(this._timeout);
      this._timeout = setTimeout(function () {
        _this.show = true;
      }, showTimeout);
    },
    hideLoading: function hideLoading() {
      window.clearTimeout(this._timeout);
      this.show = false;
    }
  },
  created: function created() {
    var _this2 = this;

    // safari trigger canplaythrough
    this.on([constants_EVENTS.CANPLAY, constants_EVENTS.CANPLAYTHROUGH, constants_EVENTS.PLAY, constants_EVENTS.LOADEDMETADATA, constants_EVENTS.SEEKED, constants_EVENTS.ERROR], function () {
      _this2.hideLoading();
    });
    this.on([constants_EVENTS.SEEKING, constants_EVENTS.STALLED, constants_EVENTS.LOADSTART], function (item) {
      _this2.showLoading();
    });
    this.on(['playing'], function () {
      _this2.hideLoading();
    });
  }
});
// CONCATENATED MODULE: ./src/layers/loading-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_loading_layervue_type_script_lang_js_ = (loading_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/loading-layer.vue?vue&type=style&index=0&lang=less&
var loading_layervue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("b1ba");

// CONCATENATED MODULE: ./src/layers/loading-layer.vue






/* normalize component */

var loading_layer_component = normalizeComponent(
  layers_loading_layervue_type_script_lang_js_,
  loading_layervue_type_template_id_0d8cd02a_render,
  loading_layervue_type_template_id_0d8cd02a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading_layer = (loading_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"edffa736-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/error-layer.vue?vue&type=template&id=6cb3ca76&
var error_layervue_type_template_id_6cb3ca76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer error-layer"},[_c('div',{staticClass:"error-icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"120","height":"120","viewBox":"0 0 200 200"}},[_c('g',{attrs:{"transform":"translate(-963 -1663)"}},[_c('circle',{attrs:{"data-name":"11","cx":"100","cy":"100","r":"100","transform":"translate(963 1663)","fill":"#ff5e5c"}}),_c('g',{attrs:{"data-name":"46","transform":"translate(1006 1727)","fill":"#fff","stroke":"#fff","stroke-width":"3"}},[_c('rect',{attrs:{"width":"120","height":"73","rx":"2","stroke":"none"}}),_c('rect',{attrs:{"x":"1.5","y":"1.5","width":"117","height":"70","rx":".5","fill":"none"}})]),_c('g',{attrs:{"data-name":"12","transform":"translate(1108 1743)","fill":"#fff","stroke":"#ff5a52","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"6","cy":"6","r":"6","stroke":"none"}}),_c('circle',{attrs:{"cx":"6","cy":"6","r":"5","fill":"none"}})]),_c('path',{attrs:{"data-name":"1","fill":"none","stroke":"#fff","stroke-width":"3","d":"M1057.5 1728.5l30-22"}}),_c('path',{attrs:{"data-name":"2","fill":"none","stroke":"#fff","stroke-width":"3","d":"M1036.5 1697.5l22 30"}}),_c('path',{attrs:{"data-name":"48","d":"M1018 1737h80a4 4 0 0 1 4 4v45a5 5 0 0 1-5 5h-78a5 5 0 0 1-5-5v-45a4 4 0 0 1 4-4z","fill":"#2785f2"}}),_c('g',{attrs:{"data-name":"4","fill":"#ff584c"}},[_c('path',{attrs:{"data-name":"49","d":"M1108 1757h3v2h-3z"}}),_c('path',{attrs:{"data-name":"50","d":"M1113 1757h3v2h-3z"}}),_c('path',{attrs:{"data-name":"51","d":"M1118 1757h3v2h-3z"}})]),_c('g',{attrs:{"data-name":"5","fill":"#ff584c"}},[_c('path',{attrs:{"data-name":"49","d":"M1108 1760h3v2h-3z"}}),_c('path',{attrs:{"data-name":"50","d":"M1113 1760h3v2h-3z"}}),_c('path',{attrs:{"data-name":"51","d":"M1118 1760h3v2h-3z"}})])])])]),_c('div',{staticClass:"error-msg-wrap"},[_c('h2',[_vm._v(_vm._s(_vm.$t('layers.error.title')))]),_c('p',{staticClass:"error-msg"},[_vm._v(_vm._s(_vm.errMsg))])])])}
var error_layervue_type_template_id_6cb3ca76_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/error-layer.vue?vue&type=template&id=6cb3ca76&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/error-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var error_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  props: {
    dsiable: Boolean
  },
  data: function data() {
    return {
      errMsg: '',
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.ERROR, function (e) {
      console.log(e);
      _this.show = true;
      var errorKey = 'layers.error.' + e.code;
      _this.errMsg = helper_i18n.t(errorKey, '');
    });
  }
});
// CONCATENATED MODULE: ./src/layers/error-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_error_layervue_type_script_lang_js_ = (error_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/error-layer.vue?vue&type=style&index=0&lang=less&
var error_layervue_type_style_index_0_lang_less_ = __nested_webpack_require_198164__("f64c");

// CONCATENATED MODULE: ./src/layers/error-layer.vue






/* normalize component */

var error_layer_component = normalizeComponent(
  layers_error_layervue_type_script_lang_js_,
  error_layervue_type_template_id_6cb3ca76_render,
  error_layervue_type_template_id_6cb3ca76_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var error_layer = (error_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/layers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var layersvue_type_script_lang_js_ = ({
  name: 'Layers',
  components: {
    PlayPauseLayer: play_pause_layer,
    CoverLayer: cover_layer,
    LogoLayer: logo_layer,
    TitleLayer: title_layer,
    LoadingLayer: loading_layer,
    ErrorLayer: error_layer
  },
  props: {
    visible: Boolean
  }
});
// CONCATENATED MODULE: ./src/layers/layers.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_layersvue_type_script_lang_js_ = (layersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/layers.vue?vue&type=style&index=0&lang=css&
var layersvue_type_style_index_0_lang_css_ = __nested_webpack_require_198164__("2c1a");

// CONCATENATED MODULE: ./src/layers/layers.vue






/* normalize component */

var layers_component = normalizeComponent(
  layers_layersvue_type_script_lang_js_,
  layersvue_type_template_id_e00e164c_render,
  layersvue_type_template_id_e00e164c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layers_layers = (layers_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-core-video-player.vue?vue&type=script&lang=js&








function vue_core_video_playervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vue_core_video_playervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_core_video_playervue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_core_video_playervue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var vue_core_video_playervue_type_script_lang_js_ = ({
  name: 'VueCoreVideoPlayer',
  mixins: [src_mixins],
  components: {
    Dashboard: dashboard,
    MobileDashboard: mobile_dashboard,
    Layers: layers_layers
  },
  props: {
    src: [String, Array],
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    title: String,
    cover: String,
    logo: String,
    muted: {
      type: Boolean,
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: true
    },
    lang: {
      type: [String, Object],
      default: 'en'
    },
    core: {
      type: Function
    },
    viewCore: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      isMobile: util_isMobile
    };
  },
  computed: {
    source: function source() {
      var src = this.src;

      if (!src) {
        return '';
      }

      var resolution = this.resolution || constants_DEFAULT_CONFIG.resolution;
      var medias = parseMediaList(src);
      var url;
      medias.forEach(function (media) {
        if (media.resolution === resolution) {
          url = media.src;
        }
      });

      if (!url) {
        if (typeof_typeof(medias[0]) === 'object' && medias[0].src) {
          url = medias[0].src;
        } else if (typeof medias[0] === 'string') {
          url = medias[0];
        }
      }

      if (this.$player) {
        this.$player.setSource(src);
      }

      return url;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // const self = this
    this.$player = this.videoCore = initVideoCore(vue_core_video_playervue_type_script_lang_js_objectSpread({}, this.$props, {
      videoEl: this.$refs['vcp-video'],
      el: this.$refs['vcp-el'],
      eventEmitter: {
        on: this.on,
        emit: this.emit,
        off: this.off
      }
    }));
    Object.values(constants_EVENTS).forEach(function (item) {
      _this.$player.on(item, function (e) {
        if (typeof _this.$listeners[item] === 'function') {
          _this.$listeners[item](e);
        }
      });
    });
    this._coreID = this.videoCore.id;
    this.emit(constants_EVENTS.LIFECYCLE_INITING, this.$player);

    try {
      this.viewCore.map(function (item) {
        if (typeof item === 'function') {
          item(_this.$player, _this.$player.config);
        }
      });
    } catch (err) {
      console.error(err);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$player.destroy();
  }
});
// CONCATENATED MODULE: ./src/vue-core-video-player.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_core_video_playervue_type_script_lang_js_ = (vue_core_video_playervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-core-video-player.vue?vue&type=style&index=0&land=less&lang=css&
var vue_core_video_playervue_type_style_index_0_land_less_lang_css_ = __nested_webpack_require_198164__("bead");

// CONCATENATED MODULE: ./src/vue-core-video-player.vue






/* normalize component */

var vue_core_video_player_component = normalizeComponent(
  src_vue_core_video_playervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_core_video_player = (vue_core_video_player_component.exports);
// CONCATENATED MODULE: ./src/index.js




var VueCoreVideoPlayerPlugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    helper_i18n.setLocale(options.lang);

    Vue.prototype.$t = function (expression) {
      return helper_i18n.t(expression);
    };

    Vue.component('vue-core-video-player', vue_core_video_player);
  }
};
/* harmony default export */ var src_0 = (VueCoreVideoPlayerPlugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport BaseVideoCore */__nested_webpack_require_198164__.d(__webpack_exports__, "BaseVideoCore", function() { return base; });
/* concated harmony reexport EVENTS */__nested_webpack_require_198164__.d(__webpack_exports__, "EVENTS", function() { return constants_EVENTS; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "ff1c":
/***/ (function(module, exports, __nested_webpack_require_324933__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_324933__("7335");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_324933__("499e").default
var update = add("4cfaecc1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
//# sourceMappingURL=vue-core-video-player.common.js.map

/***/ })

}]);
=======
(self.webpackChunk=self.webpackChunk||[]).push([[306],{58569:(t,e,n)=>{t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),i=n("8e60"),a=n("63b6"),s=n("9138"),c=n("ebfd").KEY,l=n("294c"),u=n("dbdb"),f=n("45f2"),p=n("62a0"),d=n("5168"),h=n("ccb9"),v=n("6718"),g=n("47ee"),m=n("9003"),b=n("e4ae"),y=n("f772"),w=n("241e"),x=n("36c3"),k=n("1bc3"),E=n("aebd"),_=n("a159"),S=n("0395"),O=n("bf0b"),A=n("9aa9"),M=n("d9f6"),C=n("c3a1"),P=O.f,L=M.f,T=S.f,D=r.Symbol,I=r.JSON,R=I&&I.stringify,j=d("_hidden"),N=d("toPrimitive"),$={}.propertyIsEnumerable,z=u("symbol-registry"),F=u("symbols"),B=u("op-symbols"),U=Object.prototype,H="function"==typeof D&&!!A.f,Y=r.QObject,G=!Y||!Y.prototype||!Y.prototype.findChild,W=i&&l((function(){return 7!=_(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=P(U,e);r&&delete U[e],L(t,e,n),r&&t!==U&&L(U,e,r)}:L,V=function(t){var e=F[t]=_(D.prototype);return e._k=t,e},X=H&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},Z=function(t,e,n){return t===U&&Z(B,e,n),b(t),e=k(e,!0),b(n),o(F,e)?(n.enumerable?(o(t,j)&&t[j][e]&&(t[j][e]=!1),n=_(n,{enumerable:E(0,!1)})):(o(t,j)||L(t,j,E(1,{})),t[j][e]=!0),W(t,e,n)):L(t,e,n)},J=function(t,e){b(t);for(var n,r=g(e=x(e)),o=0,i=r.length;i>o;)Z(t,n=r[o++],e[n]);return t},q=function(t){var e=$.call(this,t=k(t,!0));return!(this===U&&o(F,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,j)&&this[j][t])||e)},Q=function(t,e){if(t=x(t),e=k(e,!0),t!==U||!o(F,e)||o(B,e)){var n=P(t,e);return!n||!o(F,e)||o(t,j)&&t[j][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=T(x(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==j||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===U,r=T(n?B:x(t)),i=[],a=0;r.length>a;)!o(F,e=r[a++])||n&&!o(U,e)||i.push(F[e]);return i};H||(s((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===U&&e.call(B,n),o(this,j)&&o(this[j],t)&&(this[j][t]=!1),W(this,t,E(1,n))};return i&&G&&W(U,t,{configurable:!0,set:e}),V(t)}).prototype,"toString",(function(){return this._k})),O.f=Q,M.f=Z,n("6abf").f=S.f=K,n("355d").f=q,A.f=tt,i&&!n("b8e3")&&s(U,"propertyIsEnumerable",q,!0),h.f=function(t){return V(d(t))}),a(a.G+a.W+a.F*!H,{Symbol:D});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var rt=C(d.store),ot=0;rt.length>ot;)v(rt[ot++]);a(a.S+a.F*!H,"Symbol",{for:function(t){return o(z,t+="")?z[t]:z[t]=D(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in z)if(z[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!H,"Object",{create:function(t,e){return void 0===e?_(t):J(_(t),e)},defineProperty:Z,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:K,getOwnPropertySymbols:tt});var it=l((function(){A.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return A.f(w(t))}}),I&&a(a.S+a.F*(!H||l((function(){var t=D();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(y(e)||void 0!==t)&&!X(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,R.apply(I,r)}}),D.prototype[N]||n("35e8")(D.prototype,N,D.prototype.valueOf),f(D,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),a=n("32e9"),s=n("84f2"),c=n("41a0"),l=n("7f20"),u=n("38fd"),f=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),d="keys",h="values",v=function(){return this};t.exports=function(t,e,n,g,m,b,y){c(n,e,g);var w,x,k,E=function(t){if(!p&&t in A)return A[t];switch(t){case d:case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",S=m==h,O=!1,A=t.prototype,M=A[f]||A["@@iterator"]||m&&A[m],C=M||E(m),P=m?S?E("entries"):C:void 0,L="Array"==e&&A.entries||M;if(L&&(k=u(L.call(new t)))!==Object.prototype&&k.next&&(l(k,_,!0),r||"function"==typeof k[f]||a(k,f,v)),S&&M&&M.name!==h&&(O=!0,C=function(){return M.call(this)}),r&&!y||!p&&!O&&A[f]||a(A,f,C),s[e]=C,s[_]=v,m)if(w={values:S?C:E(h),keys:b?C:E(d),entries:P},y)for(x in w)x in A||i(A,x,w[x]);else o(o.P+o.F*(p||O),e,w);return w}},"02f4":function(t,e,n){var r=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"07fa":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vue-core-video-player-layers{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:100%}",""])},"0b49":function(t,e,n){var r=n("3b4a");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("b8b31476",r,!0,{sourceMap:!1,shadowMode:!1})},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0d22":function(t,e,n){"use strict";var r=n("3863");n.n(r).a},"0d2d":function(t){t.exports=JSON.parse('{"dashboard":{"btn":{"play":"再生","pause":"一時停止","fullscreen":"全画面","exitFullscreen":"全画面をキャンセル","mute":"ミュート","unmute":"ミュートを解除","back":"戻る","pip":"ピクチャインピクチャ"},"settings":{"autoplay":"自動再生","loop":"ループプレイ","speed":"スピード","resolution":"画質"}},"layers":{"error":{"2404":"ソースが見つかりません","2502":"ネットワークエラー","2503":"デコードエラー","2504":"働いていない","title":"(O_O)?  再生エラー!"},"loading":{"msg":"待っている ..."}}}')},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},"0e5b":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vcp-controls{z-index:10;position:absolute;left:0;bottom:5px;width:100%;height:50px;text-align:left}.playback-control,.setting-control{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;height:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.playback-control{left:0}.setting-control{right:0}",""])},"0ee8":function(t,e,n){var r=n("f31c");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("20ebd1d3",r,!0,{sourceMap:!1,shadowMode:!1})},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},1170:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".settings-control .btn-mute{display:none}.settings-control .btn-settings svg{width:24px;margin-top:-2px}.settings-control .btn-control-panel{display:block;right:0;left:auto;min-height:130px;-webkit-transform:translateX(0);transform:translateX(0)}.settings-control .btn-control-panel .current-panel{width:180px}.settings-control .btn-control-panel .resolution-list,.settings-control .btn-control-panel .speed-list{width:80px}.settings-control .btn-control-panel .resolution-list li,.settings-control .btn-control-panel .speed-list li{cursor:pointer}.settings-control .btn-control-panel .resolution-list li:first-child,.settings-control .btn-control-panel .speed-list li:first-child{margin-left:-20px;cursor:pointer}.vcp-m-dashboard .settings-control .btn-control-panel{z-index:20000;position:fixed;left:0;right:0;bottom:0}.vcp-m-dashboard .settings-control .btn-control-panel .current-panel{width:100%}.vcp-m-dashboard .settings-control .btn-control-panel .resolution-list,.vcp-m-dashboard .settings-control .btn-control-panel .speed-list{margin-left:20px}",""])},"11de":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vcp-controls{z-index:10;position:absolute;left:0;bottom:5px;width:100%;height:50px;text-align:left}.playback-control,.setting-control{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;height:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.playback-control{left:0}.setting-control{right:0}",""])},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},"12ae":function(t,e,n){var r=n("1170");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("280eb641",r,!0,{sourceMap:!1,shadowMode:!1})},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,c=0;s>c;)r.f(t,n=a[c++],e[n]);return t}},"14ab":function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},"156e":function(t,e,n){"use strict";var r=n("234e");n.n(r).a},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},1689:function(t,e,n){var r=n("cfb4");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("169e5806",r,!0,{sourceMap:!1,shadowMode:!1})},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},1793:function(t,e,n){"use strict";var r=n("6321"),o=/^\s*class[\s{/}]/,i=Function.prototype.toString;t.exports=function(t){return!!r(t)&&!o.test(i.call(t))}},"18ec":function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&(!0===r.contains("dwa")&&!1===r.contains("foo"))}},"1a94":function(t,e,n){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},"1b6f":function(t,e,n){"use strict";var r=n("ff1c");n.n(r).a},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},2031:function(t,e,n){"use strict";t.exports=n("14ab")()?Object.assign:n("f60e")},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),o=n("32e9"),i=n("79e5"),a=n("be13"),s=n("2b4c"),c=n("520a"),l=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=s(t),d=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=d?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e})):void 0;if(!d||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[p],g=n(a,p,""[t],(function(t,e,n,r,o){return e.exec===c?d&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=g[0],b=g[1];r(String.prototype,t,m),o(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"22bf":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vcp-m-dashboard{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:59px;background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.7),transparent)}.fullscreen .vcp-m-dashboard{bottom:12px}.small .vcp-m-dashboard{height:49px}.settings-open .vcp-m-dashboard{display:block!important}.small .vcp-m-dashboard .vcp-controls{height:40px}",""])},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},2316:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".title-layer{z-index:11;text-align:left}.title-layer .video-title{position:absolute;top:0;left:0;right:0;padding:16px 20px;line-height:32px;font-size:14px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.7)),to(transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.7),transparent)}.fullscreen .title-layer .video-title{font-size:16px;font-weight:700}",""])},"234e":function(t,e,n){var r=n("743b");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("13d618fe",r,!0,{sourceMap:!1,shadowMode:!1})},2350:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"23c6":function(t,e,n){var r=n("2d95"),o=n("2b4c")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"263c":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,'.play-pause-layer{z-index:12;background:rgba(0,0,0,.25)}.play-pause-layer .btn-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;left:50%;width:60px;height:60px;margin-left:-30px;margin-top:-30px;background-color:#fff;border-radius:30px}.play-pause-layer .btn-control:before{content:"";display:block;position:absolute;top:50%;left:50%;width:72px;height:72px;margin-left:-36px;margin-top:-36px;border-radius:36px;background-color:hsla(0,0%,100%,.25)}.play-pause-layer .btn-play svg{margin-left:10px}',""])},2814:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,'.vue-core-video-player-control{display:inline-block;position:relative;width:30px;height:30px}.vue-core-video-player-control svg{width:20px}.volume-control:hover .btn-control-panel{display:block}.volume-control .btn-control-panel{display:none;width:40px;height:150px}.volume-control .btn-control-panel:before{content:"";display:block;position:absolute;bottom:-30px;left:0;width:100%;height:35px}.volume-control .btn-control-panel .progress{position:absolute;width:4px;height:100px;left:50%;top:50%;margin-left:-2px;margin-top:-50px;background-color:hsla(0,0%,100%,.7);cursor:pointer}.volume-control .btn-control-panel .progress .volume-current{position:absolute;bottom:0;left:0;height:0;width:100%;background-color:#ff6060}.volume-control .btn-control-panel .progress .volume-current .thumb-drag{opacity:0;position:absolute;left:50%;top:0;width:10px;height:10px;border-radius:5px;background-color:#fff;-webkit-transform:translateY(-50%) translateX(-50%);transform:translateY(-50%) translateX(-50%);-webkit-transition:height .05s ease .15s;transition:height .05s ease .15s}.volume-control .btn-control-panel .progress .volume-current .thumb-drag:before{content:"";display:inline-block;position:absolute;top:-2px;left:-2px;width:14px;height:14px;border-radius:7px;background-color:hsla(0,0%,100%,.3)}.volume-control .btn-control-panel .progress:hover .thumb-drag{opacity:1}.volume-control .btn-control-panel .volume-info{position:absolute;top:-30px;left:0;width:40px;height:20px;background-color:rgba(0,0,0,.7);border-radius:4px;font-size:12px;line-height:20px}.settings-open .volume-control:hover .btn-control-panel{display:none}',""])},"28a5":function(t,e,n){"use strict";var r=n("aae3"),o=n("cb7c"),i=n("ebd6"),a=n("0390"),s=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),f=Math.min,p=[].push,d=4294967295,h=!u((function(){RegExp(d,"y")}));n("214f")("split",2,(function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(o,t,e);for(var i,a,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?d:e>>>0,v=new RegExp(t.source,u+"g");(i=l.call(v,o))&&!((a=v.lastIndex)>f&&(c.push(o.slice(f,i.index)),i.length>1&&i.index<o.length&&p.apply(c,i.slice(1)),s=i[0].length,f=a,c.length>=h));)v.lastIndex===i.index&&v.lastIndex++;return f===o.length?!s&&v.test("")||c.push(""):c.push(o.slice(f)),c.length>h?c.slice(0,h):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var o=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,r):v.call(String(o),n,r)},function(t,e){var r=u(v,t,this,e,v!==n);if(r.done)return r.value;var l=o(t),p=String(this),g=i(l,RegExp),m=l.unicode,b=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),y=new g(h?l:"^(?:"+l.source+")",b),w=void 0===e?d:e>>>0;if(0===w)return[];if(0===p.length)return null===c(y,p)?[p]:[];for(var x=0,k=0,E=[];k<p.length;){y.lastIndex=h?k:0;var _,S=c(y,h?p:p.slice(k));if(null===S||(_=f(s(y.lastIndex+(h?0:k)),p.length))===x)k=a(p,k,m);else{if(E.push(p.slice(x,k)),E.length===w)return E;for(var O=1;O<=S.length-1;O++)if(E.push(S[O]),E.length===w)return E;k=x=_}}return E.push(p.slice(x)),E}]}))},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),a=n("ca5a")("src"),s=n("fa5b"),c="toString",l=(""+s).split(c);n("8378").inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,a)||o(n,a,t[e]?""+t[e]:l.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[a]||s.call(this)}))},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),a=n("613b")("IE_PROTO"),s=function(){},c=function(){var t,e=n("230e")("iframe"),r=i.length;for(e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),o=n("ca5a"),i=n("7726").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},"2be5":function(t,e,n){var r=n("07fa");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("6fa741d5",r,!0,{sourceMap:!1,shadowMode:!1})},"2c1a":function(t,e,n){"use strict";var r=n("2be5");n.n(r).a},"2d00":function(t,e){t.exports=!1},"2d60":function(t,e,n){var r=n("6f66");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("61ad65d7",r,!0,{sourceMap:!1,shadowMode:!1})},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),o=n("63b6"),i=n("9138"),a=n("35e8"),s=n("481b"),c=n("8f60"),l=n("45f2"),u=n("53e2"),f=n("5168")("iterator"),p=!([].keys&&"next"in[].keys()),d="keys",h="values",v=function(){return this};t.exports=function(t,e,n,g,m,b,y){c(n,e,g);var w,x,k,E=function(t){if(!p&&t in A)return A[t];switch(t){case d:case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",S=m==h,O=!1,A=t.prototype,M=A[f]||A["@@iterator"]||m&&A[m],C=M||E(m),P=m?S?E("entries"):C:void 0,L="Array"==e&&A.entries||M;if(L&&(k=u(L.call(new t)))!==Object.prototype&&k.next&&(l(k,_,!0),r||"function"==typeof k[f]||a(k,f,v)),S&&M&&M.name!==h&&(O=!0,C=function(){return M.call(this)}),r&&!y||!p&&!O&&A[f]||a(A,f,C),s[e]=C,s[_]=v,m)if(w={values:S?C:E(h),keys:b?C:E(d),entries:P},y)for(x in w)x in A||i(A,x,w[x]);else o(o.P+o.F*(p||O),e,w);return w}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},3863:function(t,e,n){var r=n("f232");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("3b10f201",r,!0,{sourceMap:!1,shadowMode:!1})},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"3b4a":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vue-core-video-player-control.timespan{line-height:30px;width:140px;font-family:Arial!important}",""])},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),a={};n("32e9")(a,n("2b4c")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},"42e9":function(t,e,n){"use strict";var r=n("e9c8");n.n(r).a},4447:function(t,e,n){"use strict";var r=n("6412");n.n(r).a},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),o=n("0d58");n("5eda")("keys",(function(){return function(t){return o(r(t))}}))},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,s=n(t),c=i.f,l=0;s.length>l;)c.call(t,a=s[l++])&&e.push(a);return e}},"481b":function(t,e){t.exports={}},"499e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},f=null,p="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){l=n,f=o||{};var a=r(t,e);return v(a),function(e){for(var n=[],o=0;o<a.length;o++){var s=a[o];(c=i[s.id]).refs--,n.push(c)}e?v(a=r(t,e)):a=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(d){var o=c++;r=s||(s=g()),e=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=g(),e=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var b,y=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function x(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute(p,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"4cc6":function(t,e,n){"use strict";var r=n("7c86");n.n(r).a},5005:function(t,e,n){var r=n("22bf");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("c17df316",r,!0,{sourceMap:!1,shadowMode:!1})},"504c":function(t,e,n){var r=n("9e1e"),o=n("0d58"),i=n("6821"),a=n("52a7").f;t.exports=function(t){return function(e){for(var n,s=i(e),c=o(s),l=c.length,u=0,f=[];l>u;)n=c[u++],r&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},"520a":function(t,e,n){"use strict";var r,o,i=n("0bfb"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,r,o,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),l&&(e=c.lastIndex),r=a.call(c,t),l&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=c},5276:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".logo-layer{z-index:11;text-align:left}.logo-layer .logo-wrap{position:absolute;top:15px;right:15px;opacity:.7;text-align:right}.logo-layer .logo-wrap img{max-width:160px;height:48px}",""])},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5311:function(t,e,n){"use strict";var r=n("0b49");n.n(r).a},"53e2":function(t,e,n){var r=n("07e3"),o=n("241e"),i=n("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},5695:function(t,e,n){var r=n("e9d0");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("1c7c0837",r,!0,{sourceMap:!1,shadowMode:!1})},"56fb":function(t,e,n){"use strict";var r=n("f922");n.n(r).a},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,a){var s,c=r(e),l=o(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),a=n("2aba"),s=n("9b43"),c=function(t,e,n){var l,u,f,p,d=t&c.F,h=t&c.G,v=t&c.S,g=t&c.P,m=t&c.B,b=h?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,y=h?o:o[e]||(o[e]={}),w=y.prototype||(y.prototype={});for(l in h&&(n=e),n)f=((u=!d&&b&&void 0!==b[l])?b:n)[l],p=m&&u?s(f,r):g&&"function"==typeof f?s(Function.call,f):f,b&&a(b,l,f,t&c.U),y[l]!=f&&i(y,l,p),g&&w[l]!=f&&(w[l]=f)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"5d58":function(t,e,n){t.exports=n("d8d6")},"5eda":function(t,e,n){var r=n("5ca1"),o=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",a)}},"5edd":function(t,e,n){"use strict";var r=n("936a"),o={object:!0,function:!0,undefined:!0};t.exports=function(t){return!!r(t)&&hasOwnProperty.call(o,typeof t)}},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"62c4":function(t,e,n){"use strict";var r=n("e76c")();t.exports=function(t){return t!==r&&null!==t}},6321:function(t,e,n){"use strict";var r=n("9013");t.exports=function(t){if("function"!=typeof t)return!1;if(!hasOwnProperty.call(t,"length"))return!1;try{if("number"!=typeof t.length)return!1;if("function"!=typeof t.call)return!1;if("function"!=typeof t.apply)return!1}catch(t){return!1}return!r(t)}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),a=n("35e8"),s=n("07e3"),c=function(t,e,n){var l,u,f,p=t&c.F,d=t&c.G,h=t&c.S,v=t&c.P,g=t&c.B,m=t&c.W,b=d?o:o[e]||(o[e]={}),y=b.prototype,w=d?r:h?r[e]:(r[e]||{}).prototype;for(l in d&&(n=e),n)(u=!p&&w&&void 0!==w[l])&&s(b,l)||(f=u?w[l]:n[l],b[l]=d&&"function"!=typeof w[l]?n[l]:g&&u?i(f,r):m&&w[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[l]=f,t&c.R&&y&&!y[l]&&a(y,l,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},6412:function(t,e,n){var r=n("263c");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("2625ca16",r,!0,{sourceMap:!1,shadowMode:!1})},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),a=n("ccb9"),s=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"67bb":function(t,e,n){t.exports=n("f921")},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"69d3":function(t,e,n){n("6718")("asyncIterator")},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),o=n("0bfb"),i=n("9e1e"),a="toString",s=/./.toString,c=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):s.name!=a&&c((function(){return s.call(this)}))},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),o=n("35e8"),i=n("481b"),a=n("5168")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],u=r[l],f=u&&u.prototype;f&&!f[a]&&o(f,a,l),i[l]=i.Array}},"6d0c":function(t,e,n){var r=n("6ddc");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("f6023f92",r,!0,{sourceMap:!1,shadowMode:!1})},"6ddc":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".loading-layer{z-index:16;background-color:#333}.loading-layer .loading-wrap{position:absolute;left:50%;top:50%;width:120px;height:80px;margin-top:-40px;margin-left:-60px;text-align:center}.loading-layer .h5-layer-loading{position:relative;width:40px;height:40px;margin:0 auto}.loading-layer .h5-layer-loading .spinner{backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite}.loading-layer .h5-layer-loading p{padding-top:20px}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.loading-layer .h5-layer-loading .path{stroke-dasharray:188.8;stroke-dashoffset:188.8;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite}.loading-layer .h5-layer-loading .dot1{-webkit-animation:dot1a 1.4s ease-in-out infinite;animation:dot1a 1.4s ease-in-out infinite}.loading-layer .h5-layer-loading .dot1,.loading-layer .h5-layer-loading .dot2{stroke-dasharray:188.8;stroke-dashoffset:187.8;-webkit-transform-origin:center;transform-origin:center}.loading-layer .h5-layer-loading .dot2{-webkit-animation:dot2a 1.4s ease-in-out infinite forwards;animation:dot2a 1.4s ease-in-out infinite forwards}@-webkit-keyframes dash{0%{stroke-dashoffset:188.8}50%{stroke-dashoffset:47.2;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:188.8}50%{stroke-dashoffset:47.2;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes dot1a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dot1a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes dot2a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(415deg);transform:rotate(415deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dot2a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(415deg);transform:rotate(415deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}",""])},"6f66":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".cover-layer{z-index:11;background-color:#333}.cover-layer img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""])},"71c1":function(t,e,n){var r=n("3a38"),o=n("25eb");t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},7333:function(t,e,n){"use strict";var r=n("9e1e"),o=n("0d58"),i=n("2621"),a=n("52a7"),s=n("4bf8"),c=n("626a"),l=Object.assign;t.exports=!l||n("79e5")((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=r}))?function(t,e){for(var n=s(t),l=arguments.length,u=1,f=i.f,p=a.f;l>u;)for(var d,h=c(arguments[u++]),v=f?o(h).concat(f(h)):o(h),g=v.length,m=0;g>m;)d=v[m++],r&&!p.call(h,d)||(n[d]=h[d]);return n}:l},7335:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vue-core-video-player-control .btn-pip svg{width:22px}",""])},7373:function(t,e,n){"use strict";var r=n("62c4"),o=Object.keys;t.exports=function(t){return o(r(t)?Object(t):t)}},"743b":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vue-core-video-player-control .btn-fullscreen svg{width:20px}",""])},"765d":function(t,e,n){n("6718")("observable")},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"7bdf":function(t,e,n){"use strict";t.exports=n("ecf9")()?Object.keys:n("7373")},"7c86":function(t,e,n){var r=n("11de");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("8bc865d0",r,!0,{sourceMap:!1,shadowMode:!1})},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,c=0;s>c;)r.f(t,n=a[c++],e[n]);return t}},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"7fc5":function(t,e,n){"use strict";var r=n("ab5c");n.n(r).a},8378:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},8436:function(t,e){t.exports=function(){}},"84f2":function(t,e){t.exports={}},"850d":function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vue-core-video-player-control .btn-pause{margin-left:20px}.vue-core-video-player-control .btn-pause svg{width:15px}.vue-core-video-player-control .btn-play{margin-left:20px}.vue-core-video-player-control .btn-play svg{width:16px}",""])},"85f2":function(t,e,n){t.exports=n("454f")},8615:function(t,e,n){var r=n("5ca1"),o=n("504c")(!1);r(r.S,"Object",{values:function(t){return o(t)}})},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),a=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"8bbf":function(t,e){t.exports=n(70538)},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var r=n("5ca1"),o=n("990b"),i=n("6821"),a=n("11e9"),s=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=i(t),c=a.f,l=o(r),u={},f=0;l.length>f;)void 0!==(n=c(r,e=l[f++]))&&s(u,e,n);return u}})},"8f60":function(t,e,n){"use strict";var r=n("a159"),o=n("aebd"),i=n("45f2"),a={};n("35e8")(a,n("5168")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9013:function(t,e,n){"use strict";var r=n("5edd");t.exports=function(t){if(!r(t))return!1;try{return!!t.constructor&&t.constructor.prototype===t}catch(t){return!1}}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"90e0":function(t,e,n){var r=n("2316");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("41493392",r,!0,{sourceMap:!1,shadowMode:!1})},9138:function(t,e,n){t.exports=n("35e8")},"936a":function(t,e,n){"use strict";t.exports=function(t){return null!=t}},9643:function(t,e,n){var r=n("850d");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("39384dc1",r,!0,{sourceMap:!1,shadowMode:!1})},"96ae":function(t,e,n){"use strict";var r=n("62c4");t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},"990b":function(t,e,n){var r=n("9093"),o=n("2621"),i=n("cb7c"),a=n("7726").Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},9983:function(t,e,n){"use strict";var r=n("2d60");n.n(r).a},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;null==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),a=n("5559")("IE_PROTO"),s=function(){},c=function(){var t,e=n("1ec9")("iframe"),r=i.length;for(e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},a3e9:function(t,e,n){"use strict";var r=n("5005");n.n(r).a},a481:function(t,e,n){"use strict";var r=n("cb7c"),o=n("4bf8"),i=n("9def"),a=n("4588"),s=n("0390"),c=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n("214f")("replace",2,(function(t,e,n,h){return[function(r,o){var i=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=h(n,t,this,e);if(o.done)return o.value;var f=r(t),p=String(this),d="function"==typeof e;d||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var y=c(f,p);if(null===y)break;if(b.push(y),!g)break;""===String(y[0])&&(f.lastIndex=s(p,i(f.lastIndex),m))}for(var w,x="",k=0,E=0;E<b.length;E++){y=b[E];for(var _=String(y[0]),S=l(u(a(y.index),p.length),0),O=[],A=1;A<y.length;A++)O.push(void 0===(w=y[A])?w:String(w));var M=y.groups;if(d){var C=[_].concat(O,S,p);void 0!==M&&C.push(M);var P=String(e.apply(void 0,C))}else P=v(_,p,S,O,M,e);S>=k&&(x+=p.slice(k,S)+P,k=S+_.length)}return x+p.slice(k)}];function v(t,e,r,i,a,s){var c=r+t.length,l=i.length,u=d;return void 0!==a&&(a=o(a),u=p),n.call(s,u,(function(n,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>l){var p=f(u/10);return 0===p?n:p<=l?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):n}s=i[u-1]}return void 0===s?"":s}))}}))},aa54:function(t,e,n){"use strict";var r=n("12ae");n.n(r).a},aae3:function(t,e,n){var r=n("d3f4"),o=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},ab5c:function(t,e,n){var r=n("0e5b");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("76a6120a",r,!0,{sourceMap:!1,shadowMode:!1})},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(d),v=0;v<h.length;v++){var g,m=h[v],b=d[m],y=a[m],w=y&&y.prototype;if(w&&(w[u]||s(w,u,p),w[f]||s(w,f,m),c[m]=p,b))for(g in r)w[g]||i(w,g,r[g],!0)}},add7:function(t,e,n){var r=n("dc03");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("26edf8bf",r,!0,{sourceMap:!1,shadowMode:!1})},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b1ba:function(t,e,n){"use strict";var r=n("6d0c");n.n(r).a},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b5de:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vcp-container{position:relative;margin:0 auto}.vcp-container,.vcp-container video{width:100%;height:100%;background-color:#000}",""])},b72f:function(t,e,n){"use strict";var r=n("90e0");n.n(r).a},b8e3:function(t,e){t.exports=!0},be13:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},bead:function(t,e,n){"use strict";var r=n("f0b7");n.n(r).a},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),a=n("1bc3"),s=n("07e3"),c=n("794b"),l=Object.getOwnPropertyDescriptor;e.f=n("8e60")?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},c207:function(t,e){},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,a){var s,c=r(e),l=o(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},c367:function(t,e,n){"use strict";var r=n("8436"),o=n("50ed"),i=n("481b"),a=n("36c3");t.exports=n("30f1")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},c428:function(t,e,n){"use strict";var r=n("1689");n.n(r).a},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")((function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a}))},c9fc:function(t,e,n){"use strict";var r,o,i,a,s,c,l,u=n("f508"),f=n("1a94"),p=Function.prototype.apply,d=Function.prototype.call,h=Object.create,v=Object.defineProperty,g=Object.defineProperties,m=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0};o=function(t,e){var n,o;return f(e),o=this,r.call(this,t,n=function(){i.call(o,t,n),p.call(e,this,arguments)}),n.__eeOnceListener__=e,this},s={on:r=function(t,e){var n;return f(e),m.call(this,"__ee__")?n=this.__ee__:(n=b.value=h(null),v(this,"__ee__",b),b.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},once:o,off:i=function(t,e){var n,r,o,i;if(f(e),!m.call(this,"__ee__"))return this;if(!(n=this.__ee__)[t])return this;if("object"==typeof(r=n[t]))for(i=0;o=r[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===r.length?n[t]=r[i?0:1]:r.splice(i,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},emit:a=function(t){var e,n,r,o,i;if(m.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;r=o[e];++e)p.call(r,this,i)}else switch(arguments.length){case 1:d.call(o,this);break;case 2:d.call(o,this,arguments[1]);break;case 3:d.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];p.call(o,this,i)}}},c={on:u(r),once:u(o),off:u(i),emit:u(a)},l=g({},c),t.exports=e=function(t){return null==t?h(l):g(Object(t),c)},e.methods=s},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),a=n("6821");t.exports=n("01f9")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},cc1d:function(t,e,n){"use strict";var r=n("0ee8");n.n(r).a},ccb9:function(t,e,n){e.f=n("5168")},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),a=n("613b")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},cfb4:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,'.vcp-switch{display:inline-block;position:relative;width:40px;height:16px;border-radius:8px;background-color:#fff;cursor:pointer}.vcp-switch:after{content:"";display:inline-block;position:absolute;top:1px;left:2px;width:14px;height:14px;border-radius:7px;background-color:#ff6060;-webkit-transition:left .2s ease-in .05s;transition:left .2s ease-in .05s}.vcp-switch.open:after{left:23px}',""])},d3f4:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d658:function(t,e,n){"use strict";var r=n("9643");n.n(r).a},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},dc03:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.vcp-layer{position:absolute;top:0;bottom:0;right:0;left:0;color:#fff;font-weight:400}.vcp-layer div,.vcp-layer svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vcp-icon{display:inline-block}.vue-core-video-player-control{display:inline-block;position:relative;width:30px;height:30px;margin-right:20px;font-size:13px;color:#fff}.vcp-m-dashboard .vue-core-video-player-control{margin-right:10px}.btn-control-panel{position:absolute;left:50%;bottom:54px;padding:20px;min-height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translateX(-50%);transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:4px;font-weight:500}.btn-control-panel li,.btn-control-panel ul{margin:0;padding:0;text-align:center}.btn-control-panel ul li{list-style:none;height:30px;line-height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.btn-control-panel ul li .item-name{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start}.btn-control-panel ul li .item-control{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;line-height:30px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.btn-control,.btn-control-panel ul li .item-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.btn-control{position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px}.btn-control:focus{background:none;outline-style:none}.btn-control .tips{display:none;position:absolute;min-width:30px;padding:4px;border-radius:2px;bottom:54px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;color:hsla(0,0%,100%,.7);background-color:rgba(0,0,0,.7);text-align:center;line-height:1.2;word-break:keep-all;word-wrap:no-wrap;white-space:nowrap;opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.btn-control svg{opacity:.85;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.btn-control:hover svg{opacity:1}.btn-control:hover .tips{display:block;opacity:1}",""])},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e312:function(t){t.exports=JSON.parse('{"dashboard":{"btn":{"play":"Play","pause":"Pause","fullscreen":"Full Screen","exitFullscreen":"Exit Full Screen","mute":"Mute","unmute":"Unmute","back":"Back","pip":"Picture-in-Picture"},"settings":{"autoplay":"Autoplay","loop":"Loop","speed":"Speed","resolution":"Resolution"}},"layers":{"error":{"2404":"Video Source Not Found","2502":"Media Network Error","2503":"Video Cannot DECODE","2504":"Video Cannot Play!","title":"(O_O)?  Error!"},"loading":{"msg":"Loading ..."}}}')},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},e76c:function(t,e,n){"use strict";t.exports=function(){}},e9c8:function(t,e,n){var r=n("2814");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("d37f223e",r,!0,{sourceMap:!1,shadowMode:!1})},e9d0:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".error-layer{z-index:12;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);background-color:#333;background-repeat:repeat;text-align:center}.error-layer .error-icon{width:194px;margin:-40px auto 0}.error-layer .error-msg{color:hsla(0,0%,100%,.7)}",""])},ebd6:function(t,e,n){var r=n("cb7c"),o=n("d8e8"),i=n("2b4c")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[i])?e:o(n)}},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),a=n("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("294c")((function(){return c(Object.preventExtensions({}))})),u=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!i(t,r)&&u(t),t}}},ecf9:function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},f0b7:function(t,e,n){var r=n("b5de");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("9172fcae",r,!0,{sourceMap:!1,shadowMode:!1})},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},f201:function(t){t.exports=JSON.parse('{"dashboard":{"btn":{"play":"播放","pause":"暂停","fullscreen":"全屏","exitFullscreen":"退出全屏","mute":"静音","unmute":"取消静音","back":"返回","pip":"画中画模式"},"settings":{"autoplay":"自动播放","loop":"循环播放","speed":"播放速度","resolution":"清晰度"}},"layers":{"error":{"2404":"找不到播放视频","2502":"播放网络异常","2503":"视频无法解码","2504":"视频无法正常播放","title":"(O_O)?  播放错误!"},"loading":{"msg":"加载中 ..."}}}')},f232:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,'.vcp-progress-hover{position:absolute;bottom:100%;left:0;height:12px;width:100%;cursor:pointer}.vcp-progress-hover .vcp-progress{position:absolute;bottom:0;left:0;height:4px;width:100%;background-color:hsla(0,0%,100%,.3);-webkit-transition:height .2s ease .05s;transition:height .2s ease .05s}.vcp-progress-hover:hover .vcp-progress{height:6px}.vcp-progress-hover:hover .vcp-progress .thumb-drag{opacity:1}.vcp-progress-loaded,.vcp-progress-played{position:absolute;top:0;left:0;width:0;height:100%;background-color:hsla(0,0%,100%,.7)}.vcp-progress-loaded{-webkit-transition:width .1s cubic-bezier(.4,0,1,1);transition:width .1s cubic-bezier(.4,0,1,1)}.vcp-progress-played{width:0;background-color:#ff6060}.vcp-progress-played .thumb-drag{opacity:0;position:absolute;right:0;top:50%;width:12px;height:12px;border-radius:6px;background-color:#fff;-webkit-transform:translateY(-50%) translateX(50%);transform:translateY(-50%) translateX(50%);-webkit-transition:height .05s ease .15s;transition:height .05s ease .15s}.vcp-progress-played .thumb-drag:before{content:"";display:inline-block;position:absolute;top:-2px;left:-2px;width:16px;height:16px;border-radius:7px;background-color:hsla(0,0%,100%,.3)}.vcp-m-dashboard .vcp-progress-hover{bottom:0}.vcp-m-dashboard .vcp-progress-hover .vcp-progress{height:3px}.vcp-m-dashboard .vcp-progress-hover .vcp-progress-played .thumb-drag{background-color:#ff6060}.vcp-m-dashboard .vcp-progress-hover .vcp-progress-played .thumb-drag:before{background-color:#ff6060;opacity:.25}',""])},f31c:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".vcp-dashboard{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:59px;background:rgba(0,0,0,.5)}.fullscreen .vcp-dashboard{bottom:60px;width:1182px;left:50%;margin-left:-591px}.small .vcp-dashboard{height:49px}.settings-open .vcp-dashboard{display:block!important}.small .vcp-dashboard .vcp-controls{height:40px}",""])},f3a6:function(t,e,n){"use strict";var r=n("62c4"),o=Array.prototype.forEach,i=Object.create,a=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=i(null);return o.call(arguments,(function(t){r(t)&&a(Object(t),e)})),e}},f508:function(t,e,n){"use strict";var r=n("936a"),o=n("1793"),i=n("2031"),a=n("f3a6"),s=n("f973");(t.exports=function(t,e){var n,o,c,l,u;return arguments.length<2||"string"!=typeof t?(l=e,e=t,t=null):l=arguments[2],r(t)?(n=s.call(t,"c"),o=s.call(t,"e"),c=s.call(t,"w")):(n=c=!0,o=!1),u={value:e,configurable:n,enumerable:o,writable:c},l?i(a(l),u):u}).gs=function(t,e,n){var c,l,u,f;return"string"!=typeof t?(u=n,n=e,e=t,t=null):u=arguments[3],r(e)?o(e)?r(n)?o(n)||(u=n,n=void 0):n=void 0:(u=e,e=n=void 0):e=void 0,r(t)?(c=s.call(t,"c"),l=s.call(t,"e")):(c=!0,l=!1),f={get:e,set:n,configurable:c,enumerable:l},u?i(a(u),f):f}},f60e:function(t,e,n){"use strict";var r=n("7bdf"),o=n("96ae"),i=Math.max;t.exports=function(t,e){var n,a,s,c=i(arguments.length,2);for(t=Object(o(t)),s=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},a=1;a<c;++a)r(e=arguments[a]).forEach(s);if(void 0!==n)throw n;return t}},f64c:function(t,e,n){"use strict";var r=n("5695");n.n(r).a},f6fd:function(t,e){!function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})}(document)},f751:function(t,e,n){var r=n("5ca1");r(r.S+r.F,"Object",{assign:n("7333")})},f772:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol},f922:function(t,e,n){var r=n("5276");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("22717135",r,!0,{sourceMap:!1,shadowMode:!1})},f967:function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},f973:function(t,e,n){"use strict";t.exports=n("18ec")()?String.prototype.contains:n("f967")},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=n("5d58"),i=n.n(o),a=n("67bb"),s=n.n(a);function c(t){return(c="function"==typeof s.a&&"symbol"==typeof i.a?function(t){return typeof t}:function(t){return t&&"function"==typeof s.a&&t.constructor===s.a&&t!==s.a.prototype?"symbol":typeof t})(t)}function l(t){return(l="function"==typeof s.a&&"symbol"===c(i.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof s.a&&t.constructor===s.a&&t!==s.a.prototype?"symbol":c(t)})(t)}n("28a5");var u=n("f201"),f=n("e312"),p={"zh-CN":u,jp:n("0d2d"),en:f},d={t:function(t,e){for(var n=t.split("."),r=n.length,o=d.locale,i=0;i<r;i++)o.hasOwnProperty(n[i])&&(o=o[n[i]]);return o||e},setLocale:function(t){return"object"===l(t)?d.locale=t:d.locale=p[t||"en"],d.locale}},h=d,v=(n("8e6e"),n("456d"),n("cadf"),n("8615"),n("85f2")),g=n.n(v);function m(t,e,n){return e in t?g()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("ac6a"),n("add7");var b=n("8bbf");n.n(b).a.directive("t",{bind:function(t,e){t.innerText=h.t(e.expression)}});var y={loop:!1,volume:1,muted:!1,autoplay:!1,preload:"metadata",playList:[],safeBufferTime:2,minPlayBufferTime:1,resolution:"720p",dashboardHideDelay:2500};function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var x=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},{ERROR_NO_MEDIA:"ERROR_NO_MEDIA",ERROR_AUTO_PLAY:"ERROR_AUTO_PLAY"},{},{LIFECYCLE_INITING:"lifecycle_initing",LIFECYCLE_INITED:"lifecycle_inited",LIFECYCLE_PARSED:"lifecycle_parse",LIFECYCLE_STOP:"lifecycle_stop"},{},{SOURCE_UPDATED:"SOURCE_UPDATED"},{},{UI_DASHBOARD_SHOW:"ui_dashboard_show",UI_DASHBOARD_HIDE:"ui_dashboard_hide",UI_PLAY:"ui_play",UI_PAUSE:"ui_pause"},{SERVICE_LOADING:"service_loading",SERVICE_ENDED:"service_ended",LOADING_START:"loading_start",LOADING_END:"loading_end",CORE_TO_MP4:"core_to_mp4",PLAY:"play",PAUSE:"pause",LOADEDDATA:"loadeddata",CANPLAY:"canplay",CANPLAYTHROUGH:"canplaythrough",ERROR:"error",DURATIONCHANGE:"durationchange",ENDED:"ended",TIMEUPDATE:"timeupdate",LOADEDMETADATA:"loadedmetadata",WAITING:"waiting",PLAYING:"playing",RETRY:"retry",SEEKED:"seeked",SEEKING:"seeking",VOLUMECHANGE:"volumechange",EXIT:"exit",PROGRESS:"progress",STALLED:"stalled",LOADSTART:"loadstart",RESOLUTION_UPDATE:"resolution_update"}),k={NO_SOURCE:{code:"2404",msg:"Prop `src` not found"},2502:"Media Network Error",2503:"Video Cannot DECODE",2504:"Video Cannot Play!",2701:"Parse Error",2801:"Not found reason"},E=["video/webm","video/mp4"];n("6b54"),n("a481");const _=/iPhone/i,S=/iPod/i,O=/iPad/i,A=/\bAndroid(?:.+)Mobile\b/i,M=/Android/i,C=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,P=/Silk/i,L=/Windows Phone/i,T=/\bWindows(?:.+)ARM\b/i,D=/BlackBerry/i,I=/BB10/i,R=/Opera Mini/i,j=/\b(CriOS|Chrome)(?:.+)Mobile/i,N=/Mobile(?:.+)Firefox\b/i;function $(t,e){return t.test(e)}function z(t){let e=(t=t||("undefined"!=typeof navigator?navigator.userAgent:"")).split("[FBAN");void 0!==e[1]&&(t=e[0]),e=t.split("Twitter"),void 0!==e[1]&&(t=e[0]);const n={apple:{phone:$(_,t)&&!$(L,t),ipod:$(S,t),tablet:!$(_,t)&&$(O,t)&&!$(L,t),device:($(_,t)||$(S,t)||$(O,t))&&!$(L,t)},amazon:{phone:$(C,t),tablet:!$(C,t)&&$(P,t),device:$(C,t)||$(P,t)},android:{phone:!$(L,t)&&$(C,t)||!$(L,t)&&$(A,t),tablet:!$(L,t)&&!$(C,t)&&!$(A,t)&&($(P,t)||$(M,t)),device:!$(L,t)&&($(C,t)||$(P,t)||$(A,t)||$(M,t))||$(/\bokhttp\b/i,t)},windows:{phone:$(L,t),tablet:$(T,t),device:$(L,t)||$(T,t)},other:{blackberry:$(D,t),blackberry10:$(I,t),opera:$(R,t),firefox:$(N,t),chrome:$(j,t),device:$(D,t)||$(I,t)||$(R,t)||$(N,t)||$(j,t)},any:!1,phone:!1,tablet:!1};return n.any=n.apple.device||n.android.device||n.windows.device||n.other.device,n.phone=n.apple.phone||n.android.phone||n.windows.phone,n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet,n}var F=navigator.userAgent.toLowerCase();function B(t){return t<10?"0".concat(t):t}function U(t,e){var n=(t=parseInt(t))%60,r=parseInt(t/3600),o=parseInt(t%3600/60);return"array"===e?[r,o,n]:"m:s"===e?[o=parseInt(t/60),n].map((function(t){return B(t)})).join(":"):[r,o,n].map((function(t){return B(t)})).join(":")}var H=z(F).any,Y=z(F).android,G=z(F).apple&&z(F).apple.device,W=(G&&navigator.userAgent.indexOf("Safari"),/MQQBrowser/i.test(F)),V=(/ucbrowser/i.test(F),/chrome/i.test(F)),X=(/MicroMessenger/i.test(F),/firefox/i.test(F));function Z(t){return function(t){return!!(Array.isArray(t)&&"object"===l(t[0])&&t[0].resolution&&t[0].src)}(t)?t.filter((function(t){return t.src&&t.resolution})):"string"==typeof t?[t]:t}function J(t,e){return"object"!==("undefined"==typeof localStorage?"undefined":l(localStorage))&&"object"!==("undefined"==typeof navigator?"undefined":l(navigator))?!(!X&&!V||"video/webm"!==t)||"video/mp4"===t:(e||(e=document.createElement("videos")),e.canPlayType(t))}n("f751");function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),g()(t,r.key,r)}}function Q(t,e){if(e&&t){var n=e.split(" ");if(t.classList&&1===n.length)t.classList.add(e);else{var r=t.className.split(" ");r.push(e),t.className=r.join(" ")}}}function K(t,e){for(var n=e.parentNode;null!=n;){if(n===t)return!0;n=n.parentNode}return!1}var tt=["play","playing","timeupdate","pause","seeking","waiting","loadedmetadata","loadeddata","loadstart","seeked","ended","durationchange","progress","canplaythrough","volumechange"],et=["muted","volume","loop","preload"],nt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=Object.assign(y,e),this.$video=this.config.videoEl,this.$el=this.config.el,this._eventEmitter=e.eventEmitter,this.state={};var n=this.config.src;this.checkSource(n)&&(this.parse(n),this.init())}var e,n,r;return e=t,r=[{key:"debug",set:function(t){localStorage._vueCorePlayerDebug=!!t||""}}],(n=[{key:"parse",value:function(t){this.initResolution(t),this.initVideoType()}},{key:"checkSource",value:function(t){if(!t){var e=k.NO_SOURCE.code;return this.emit(x.ERROR,{code:e}),!1}return!!(!Array.isArray(t)||t[0]&&t[0].src)}},{key:"setSource",value:function(t){var e=this;this.checkSource(t)&&(this.parse(t),this.isPlaying())&&(this.pause(),this.$video.addEventListener(x.DURATIONCHANGE,(function t(){e.play(),e.$video.removeEventListener(x.DURATIONCHANGE,t)})))}},{key:"init",value:function(){this.checkSource(this.config.src),this._autoRegisterEvents(),this._setVideoAttr(),this.setContainer(),this.setSize(),this.emit(x.LIFECYCLE_INITED),this._autoplay()}},{key:"setContainer",value:function(){H&&Q(this.$el,"mobile")}},{key:"setSize",value:function(){var t="";this.$el.offsetWidth<=763&&(t="small"),Q(this.$el,t)}},{key:"_autoplay",value:function(){var t,e=this;this.config.autoplay&&!H&&(t=e.play(),e.autoPlayPolicy(t))}},{key:"setConfig",value:function(t,e){et.indexOf(t)>=0&&(this.config[t]=e,this.$video[t]=e)}},{key:"initResolution",value:function(t){var e=this,n=this.config.resolution;this.medias=Z(t),this.medias.forEach((function(t){t.resolution===n&&(e.config.src=t.src)})),this.resolution=n,setTimeout((function(){e.emit(x.SOURCE_UPDATED)}),200)}},{key:"initVideoType",value:function(){for(var t=this,e=function(e){for(var n=0;n<t.medias.length;n++)if(t.medias[n].type===e)return t.medias[n]},n=0;n<E.length;n++){var r=e(E[n]);if(J(E[n],this.$video)&&r)return this.config.src=r.src,this.$video.src=this.config.src,this.resolution="",void(this.medias=[r])}}},{key:"setResolution",value:function(t){var e=this,n=this.medias;if(n&&n.length>1)for(var r=0;r<n.length;r++)n[r].resolution===t&&function(){e.resolution=t;var o=e.isPlaying(),i=e.getCurrentTime();e.$video.src=n[r].src,e.emit(x.SOURCE_UPDATED),e.$video.load(),o&&i<1&&e.$video.play();var a=x.CANPLAYTHROUGH,s=0;Y&&W&&(a=x.DURATIONCHANGE,e.play()),e.$video.addEventListener(a,(function t(){Y&&W?(e.play(),1===s&&e.seek(i),s+=1):e.seek(i),Y&&W&&!o&&e.pause(),e.$video.removeEventListener(x.CANPLAYTHROUGH,t),2===s&&(e.$video.removeEventListener(x.DURATIONCHANGE,t),s=0)})),e.$video.addEventListener(x.SEEKED,(function t(){o&&e.play(),e.$video.removeEventListener(x.SEEKED,t)})),e.$video.addEventListener(x.PLAY,(function t(){e.start(),e.$video.removeEventListener(x.PLAYING,t)}))}()}},{key:"setAudio",value:function(t){}},{key:"_autoRegisterEvents",value:function(){var t=this;tt.forEach((function(e){t.$video.addEventListener(e,(function(n){var r="on".concat(e);"function"==typeof t[r]&&t[r](n),t.emit(e,{name:e,target:t.$video})}))})),this.$video.addEventListener("error",(function(e){if(e.target.getAttribute("src"))if(e.target.error&&e.target.error.code){var n=Object.assign({},e.target.error,{code:"250"+e.target.error.code});t.emit("error",n)}else"object"!==l(e)&&(e={code:5001,e}),t.emit("error",e)})),this.on(x.CORE_TO_MP4,(function(){t.downgradeCore()})),this._bindProgressEvent()}},{key:"_bindProgressEvent",value:function(){var t=this,e=this.config,n=e.minPlayBUfferTime,r=e.safeBufferTime,o=function(){if(t.state.waiting_trigger){var e=t.getBufferTime(),o=t.getCurrentTime(),i=t.getDuration();if(!(o<2||i-o<n)){var a=e-o;e-o<n?(t.player.pause(),t.state.waiting_pause=!0,t.emit(x.LOADING_START,!0)):t.state.waiting_pause&&a>r&&(t.play(),t.state.waiting_pause=!1)}}};this.on(x.UI_PLAY,(function(){t.state.waiting_pause=!0}));var i=!1;this.on(x.PLAY,(function(){i||(i=!0,t.on(x.PROGRESS,o))})),this.on(x.UI_PAUSE,(function(){t.state.waiting_trigger=!1})),this.on(x.UI_PLAY,(function(){t.state.waiting_trigger=!0}))}},{key:"play",value:function(){return this.$video.play()}},{key:"pause",value:function(){this.$video.pause()}},{key:"isPlaying",value:function(){return!this.$video.paused&&!this.$video.ended}},{key:"replay",value:function(){this.$video.play()}},{key:"seek",value:function(t){this.$video.currentTime=t}},{key:"requestPictureInPicture",value:function(){var t=this.$video;try{t!==document.pictureInPictureElement?t.requestPictureInPicture():document.exitPictureInPicture()}catch(t){console.error(t)}}},{key:"onended",value:function(){this.config.loop&&this.player.play()}},{key:"getDuration",value:function(){return this.$video&&this.$video.duration||0}},{key:"getCurrentTime",value:function(){return this.$video.currentTime||0}},{key:"getBufferTime",value:function(){var t=this.$video;return function(t,e){if(0===e.length)return 0;for(var n=0;n<e.length;n++){var r=e.start(n),o=e.end(n);if(t>=r&&t<=o)return e.end(n)}return t}(this.getCurrentTime(),t.buffered)}},{key:"getProgress",value:function(){return this.getCurrentTime()&&(this.getCurrentTime()/this.getDuration()*100).toFixed(2)||0}},{key:"getVolume",value:function(){return this.$video?this.$video.volume:1}},{key:"getVideoAttr",value:function(t){return this.$video[t]}},{key:"setVideoAttr",value:function(t,e){this.$video[t]=e}},{key:"_setVideoAttr",value:function(){var t=this;H&&(this.$video.setAttribute("x5-video-player-type","h5"),this.$video.setAttribute("x5-video-player-fullscreen",!1)),this.$video.loop=!1,et.forEach((function(e){t.config[e]&&(t.$video[e]=t.config[e])}))}},{key:"autoPlayPolicy",value:function(t){var e=this;void 0!==t&&t.catch((function(t){e.emit(x.ERROR_AUTO_PLAY,t),e.config.autoplay=!1})).then((function(){}))}},{key:"setVolume",value:function(t){this.$video.volume=t}},{key:"setMuted",value:function(t){this.$video.muted=t,t&&this.emit(x.VOLUMECHANGE,!0)}},{key:"setSpeed",value:function(t){this.$video.playbackRate=t}},{key:"destroy",value:function(){this.pause()}},{key:"getVideoElement",value:function(){return this.$video}},{key:"on",value:function(t,e){this._eventEmitter.on(t,e)}},{key:"off",value:function(t,e){this._eventEmitter.off(t,e)}},{key:"emit",value:function(t,e){this._eventEmitter.emit(t,e)}},{key:"once",value:function(t,e){this._eventEmitter.once(t,e)}}])&&q(e.prototype,n),r&&q(e,r),t}();window.VCPVideoCore=nt;var rt=nt,ot={};function it(t){var e=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}();t._id=e;var n=new(t.core||rt)(t);return n.id=e,ot[e]=n,n}var at=n("c9fc"),st=n.n(at)()(),ct={data:function(){return{show:!1,fullscreen:!1,isPlaying:!1,_coreID:""}},created:function(){var t,e=this;this.on(x.LIFECYCLE_INITING,(function(t){e.$player=t,e.$container=e.$player.$el})),this.on(x.PLAY,(function(){e.isPlaying=!0})),this.on(x.PAUSE,(function(){e.isPlaying=!1})),t=function(t){t?(Q(e.$container,"fullscreen"),e.emit("fullscreen",!0)):(function(t,e){if(t.classList)t.classList.remove(e);else{for(var n=t.className.split(" "),r=-1,o=0,i=n.length;o<i;o++)n[o]===e&&(r=o);r>-1&&n.splice(r,1),t.className=n.join(" ")}}(e.$container,"fullscreen"),e.emit("fullscreen",!1))},document.addEventListener("fullscreenchange",(function(){t(document.webkitIsFullScreen)}),!1),document.addEventListener("mozfullscreenchange",(function(){t(document.mozFullScreen)}),!1),document.addEventListener("msFullscreenElement",(function(){t(document.mozFullScreen)}),!1),document.addEventListener("webkitfullscreenchange",(function(){t(document.webkitIsFullScreen)}),!1)},_events:{},methods:{play:function(){this.$player.play()},pause:function(){this.$player.pause()},enterFullscreen:function(){var t=this.$container;t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.requestFullScreen&&t.requestFullscreen(),this.fullscreen=!0},cancelFullscreen:function(t){document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.cancelFullScreen&&document.cancelFullScreen(),this.fullscreen=!1},getFullscreen:function(){return!(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)},on:function(t,e){var n=this;"string"==typeof t?(this._events[t]=e,st.on(t,e)):Array.isArray(t)&&t.forEach((function(t){n._events[t]=e,st.on(t,e)}))},emit:function(t,e){st.emit(t,e)},off:function(t,e){st.off(t,e)},removeAllEvents:function(){for(var t in this._events)st.off(t,this._events[t])},addClass:function(t){this.$container.classList.remove(t)},removeClass:function(t){this.$container.classList.remove(t)}},beforeDestroy:function(){this.removeAllEvents()}},lt={name:"Progress",props:{visible:Boolean},mixins:[ct],data:function(){return{progress:0,bufferProgress:0}},created:function(){var t=this;this.on(x.TIMEUPDATE,(function(){if(!t._dragEl){var e=t.$player.getCurrentTime(),n=t.$player.getDuration();t.progress=(e/n*100).toFixed(2)}})),this.on(x.PROGRESS,(function(){var e=t.$player.getBufferTime(),n=t.$player.getDuration();e>0&&n>0&&(t.bufferProgress=(e/n*100).toFixed(2))})),this.on(x.LOADSTART,(function(){var e=t.$player.getBufferTime(),n=t.$player.getDuration();t.bufferProgress=(e/n*100).toFixed(2)}))},methods:{seek:function(t){var e=function(t){var e=0,n=0;do{e+=t.offsetLeft,n+=t.offsetTop}while(t=t.offsetParent);return{left:e,top:n}}(t.currentTarget);this.getFullscreen()&&(e.left=0);var n=t.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,o=t.currentTarget.offsetWidth,i=(r/o*100).toFixed(2);this.progress=i;var a=this.$player.getDuration();this.$player.seek(r/o*a)},startDrag:function(t){this.initDrag(t),this.startSeek=!0},initDrag:function(t){t.preventDefault();var e=this;this._dragEl=this.$refs.thumb;var n=this.$refs.input.offsetWidth,r=getComputedStyle(this._dragEl,null).marginLeft;r&&(r=parseFloat(r));var o={x:(H?t.touches[0].clientX:t.pageX)-this._dragEl.offsetLeft+r,y:(H?t.touches[0].clientX:t.clientY)-this._dragEl.offsetTop,maxLeft:n};this.getFullscreen()&&(o.x=t.pageX-this._dragEl.offsetLeft);var i=function(t){if(e._dragEl){var r=function(t,e,n){if(e){var r=H?t.changedTouches[0].clientX:t.clientX,o=H?t.changedTouches[0].clientY:t.clientY,i=r-n.x,a=o-n.y;return i<=n.minLeft&&(i=n.minLeft),i>=n.maxLeft&&(i=n.maxLeft),a<=n.minTop&&(a=n.minTop),a>=n.maxTop&&(a=n.maxTop),{left:i,top:a}}}(t,e._dragEl,o);if(r){var i=r.left,a=(i/n*100).toFixed(2);e.progress=a;var s=e.$player.getDuration();e.$player.seek(i/n*s)}}},a=function t(){if(e._dragEl=null,H)return e.$refs.container.removeEventListener("touchmove",i,!1),void document.removeEventListener("touchend",t,!1);document.removeEventListener("mousemove",i,!1),document.removeEventListener("mouseup",t,!1)};if(H)return e.$refs.container.addEventListener("touchmove",i,!1),void document.addEventListener("touchend",a,!1);document.addEventListener("mousemove",i,!1),document.addEventListener("mouseup",a,!1)}}};n("0d22");function ut(t,e,n,r,o,i,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}var ft=ut(lt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"input",staticClass:"vcp-progress-hover",on:{click:t.seek}},[n("div",{ref:"container",staticClass:"vcp-progress"},[n("div",{staticClass:"vcp-progress-loaded",style:{width:t.bufferProgress+"%"}}),n("div",{staticClass:"vcp-progress-played",style:{width:t.progress+"%"}},[n("div",{ref:"thumb",staticClass:"thumb-drag",on:{touchstart:t.startDrag,mousedown:t.startDrag}})])])])}),[],!1,null,null,null).exports,pt={name:"PlayPauseControl",mixins:[ct],props:{visible:Boolean}},dt=(n("d658"),ut(pt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-core-video-player-control"},[t.isPlaying?n("div",{staticClass:"btn-control btn-pause",on:{click:t.pause}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"48",viewBox:"0 0 36 48"}},[n("g",{attrs:{transform:"translate(-950 -398)"}},[n("rect",{attrs:{width:"12",height:"48",transform:"translate(950 398)",fill:"#fff"}}),n("rect",{attrs:{width:"12",height:"48",transform:"translate(974 398)",fill:"#fff"}})])]),n("span",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.pause")))])]):n("div",{staticClass:"btn-control btn-play",on:{click:t.play}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"41",height:"47",viewBox:"0 0 41 47"}},[n("path",{attrs:{d:"M23.5,0,47,41H0Z",transform:"translate(41) rotate(90)",fill:"#fff"}})]),n("span",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.play")))])])])}),[],!1,null,null,null).exports),ht={name:"TimeSpan",props:{visible:Boolean},mixins:[ct],data:function(){return{currentTime:"00:00:00",duration:"--:--:--"}},created:function(){var t=this;this.on(x.TIMEUPDATE,(function(){var e=t.$player.getCurrentTime();if(e){t.currentTime=U(e);var n=t.$player.getDuration();n!==t.duration&&(t.duration=U(n))}})),this.on(x.DURATIONCHANGE,(function(){var e=t.$player.getDuration();t.duration=U(e)}))}},vt=(n("5311"),ut(ht,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-core-video-player-control timespan"},[n("span",{staticClass:"time-current"},[t._v(t._s(t.currentTime))]),n("span",{staticClass:"time-split"},[t._v(" / ")]),n("span",{staticClass:"time-duration"},[t._v(t._s(t.duration))])])}),[],!1,null,null,null).exports),gt={name:"Volume",props:{visible:Boolean,muted:Boolean},mixins:[ct],data:function(){return{panelShow:!1,volume:50,isMuted:this.muted}},methods:{seek:function(t){var e=t.offsetY;"volume-current"===t.target.className&&(e+=t.target.offsetTop);var n=1-e/t.currentTarget.offsetHeight;this.isMuted&&this.$player.setMuted(!1),this.$player.setVolume(n,!0),this.setRangeValue(n)},setRangeValue:function(t){this.volume=parseInt(100*t)},toggle:function(){this.isMuted=!this.isMuted,this.isMuted?(this.$player.setMuted(!0),this.volume=0):(this.$player.setMuted(!1),this.volume=parseInt(100*this.$player.getVolume()))}}},mt=(n("42e9"),ut(gt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-core-video-player-control volume-control"},[t.isMuted?t._e():n("div",{staticClass:"btn-control btn-volume",on:{click:t.toggle}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23.542",height:"23",viewBox:"0 0 23.542 23"}},[n("path",{attrs:{"data-name":"15",fill:"#fff",d:"M0 5.5h7v12H0z"}}),n("path",{attrs:{"data-name":"3",d:"M.5 11.5L12.5 0v23z",fill:"#fff"}}),n("g",{attrs:{"data-name":"12 1",fill:"none",stroke:"#fff","stroke-width":"1.5"}},[n("path",{attrs:{"data-name":"2",d:"M15.787 8.349a2.89 2.89 0 0 1 3.04 3.126 2.763 2.763 0 0 1-3.142 2.833","stroke-width":"1.50021"}}),n("path",{attrs:{"data-name":"3",d:"M16.052 4.807s6.917-.147 6.61 6.796-6.83 6.16-6.83 6.16","stroke-width":"1.50021"}})])])]),t.isMuted?n("div",{staticClass:"btn-control btn-mute",on:{click:t.toggle}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24.485",height:"23",viewBox:"0 0 24.485 23"}},[n("g",{attrs:{fill:"#fff"}},[n("path",{attrs:{"data-name":"矩形 15",d:"M0 5.5h7v12H0z"}}),n("path",{attrs:{"data-name":"多边形 3",d:"M.5 11.5L12.5 0v23z"}}),n("g",{attrs:{"data-name":"组 3"}},[n("path",{attrs:{"data-name":"矩形 39",d:"M23.071 7.257l1.414 1.414-7.07 7.071L16 14.328z"}}),n("path",{attrs:{"data-name":"矩形 40",d:"M16 8.672l1.414-1.414 7.071 7.07-1.414 1.415z"}})])])])]):t._e(),n("div",{staticClass:"btn-control-panel"},[n("div",{staticClass:"progress",on:{click:t.seek}},[n("div",{staticClass:"volume-current",style:{height:t.volume+"%"}},[n("div",{staticClass:"thumb-drag"})])]),n("div",{staticClass:"volume-info"},[t._v(t._s(t.volume)+"%")])])])}),[],!1,null,null,null).exports),bt={name:"Fullscreen",mixins:[ct],props:{visible:Boolean},data:function(){return{disable:H&&G}}},yt=(n("156e"),ut(bt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disable?t._e():n("div",{staticClass:"vue-core-video-player-control"},[t.fullscreen?t._e():n("div",{staticClass:"btn-control btn-fullscreen",on:{click:t.enterFullscreen}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"20",viewBox:"0 0 28 20"}},[n("g",{attrs:{fill:"#fff"}},[n("g",{attrs:{"data-name":"6 7"}},[n("g",{attrs:{"data-name":"4 1"}},[n("path",{attrs:{"data-name":"7",d:"M16 0h10v2H16z"}}),n("path",{attrs:{"data-name":"8",d:"M26 0h2v6h-2z"}})]),n("g",{attrs:{"data-name":"5 1"}},[n("path",{attrs:{"data-name":"9",d:"M18 18h10v2H18z"}}),n("path",{attrs:{"data-name":"10",d:"M26 14h2v6h-2z"}})])]),n("g",{attrs:{"data-name":"6 8"}},[n("g",{attrs:{"data-name":"4 1"}},[n("path",{attrs:{"data-name":"7",d:"M12 20H2v-2h10z"}}),n("path",{attrs:{"data-name":"8",d:"M2 20H0v-6h2z"}})]),n("g",{attrs:{"data-name":"5 1"}},[n("path",{attrs:{"data-name":"9",d:"M10 2H0V0h10z"}}),n("path",{attrs:{"data-name":"10",d:"M2 6H0V0h2z"}})])])])]),n("div",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.fullscreen")))])]),t.fullscreen?n("div",{staticClass:"btn-control btn-off-fullscreen",on:{click:t.cancelFullscreen}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"18",viewBox:"0 0 25 18"}},[n("g",{attrs:{fill:"#fff"}},[n("g",{attrs:{"data-name":"6 9"}},[n("g",{attrs:{"data-name":"4 1"}},[n("path",{attrs:{"data-name":"7",d:"M15 5h10v2H15z"}}),n("path",{attrs:{"data-name":"8",d:"M15 0h2v6h-2z"}})]),n("g",{attrs:{"data-name":"5 1"}},[n("path",{attrs:{"data-name":"9",d:"M15 12h10v2H15z"}}),n("path",{attrs:{"data-name":"10",d:"M15 12h2v6h-2z"}})])]),n("g",{attrs:{"data-name":"6 10"}},[n("g",{attrs:{"data-name":"4 1"}},[n("path",{attrs:{"data-name":"7",d:"M10 14H0v-2h10z"}}),n("path",{attrs:{"data-name":"8",d:"M10 18H8v-6h2z"}})]),n("g",{attrs:{"data-name":"5 1"}},[n("path",{attrs:{"data-name":"9",d:"M10 6H0V4h10z"}}),n("path",{attrs:{"data-name":"10",d:"M10 6H8V0h2z"}})])])])]),n("span",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.exitFullscreen")))])]):t._e()])}),[],!1,null,null,null).exports),wt={name:"setting-switch",props:{openStatus:Boolean},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)},open:function(){this.isOpen=!0}}},xt=(n("c428"),ut(wt,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vcp-switch",class:{open:t.isOpen},on:{click:t.toggle}})}),[],!1,null,null,null).exports),kt={name:"Settings",props:{visible:Boolean},mixins:[ct],components:{"widgets-switch":xt},data:function(){return{autoplay:!1,loop:!1,resolution:"",panelShow:!1,currentPanel:!0,resolutionListPanel:!1,speedListPanel:!1,speed:1,medias:[]}},methods:{toggle:function(t){t&&t.stopPropagation(),this.panelShow=!this.panelShow,this.panelShow?this.$container.classList.add("settings-open"):this.$container.classList.remove("settings-open")},preventHide:function(t){t.stopPropagation()},showResolutionPanel:function(t){this.medias.length<=1||(this.currentPanel=!1,this.resolutionListPanel=!0)},showSpeedPanel:function(t){this.currentPanel=!1,this.speedListPanel=!0},backCurrentPanel:function(){this.currentPanel=!0,this.speedListPanel=!1,this.resolutionListPanel=!1},setResolution:function(t){this.resolution!==t.resolution?(this.$player.setResolution(t.resolution),this.backCurrentPanel(),this.toggle()):this.backCurrentPanel()},setSpeed:function(t){var e=+t.target.dataset.val;this.speed=e,this.$player.setSpeed(e),this.backCurrentPanel()},changeAutoplaySettings:function(t){this.$player.setConfig("autoplay",t)},changeLoopSettings:function(t){this.$player.setConfig("loop",t)}},mounted:function(){var t=this;this.on(x.SOURCE_UPDATED,(function(){t.medias=t.$player.medias,t.resolution=t.$player.resolution})),this.on(x.LIFECYCLE_INITING,(function(){var e=t.$player.config,n=e.autoplay,r=e.loop;n&&t.$refs.autoplaySwitch.open(),r&&t.$refs.loopSwitch.open()})),document.addEventListener("click",(function(){t.panelShow&&(t.panelShow=!1,t.speedListPanel=!1,t.resolutionListPanel=!1,t.$container.classList.remove("settings-open"))}))}},Et=(n("aa54"),ut(kt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-core-video-player-control settings-control"},[n("div",{staticClass:"btn-control btn-settings",on:{click:t.toggle}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"31.971",height:"31.971",viewBox:"0 0 31.971 31.971"}},[n("g",{attrs:{"data-name":"7",transform:"translate(6.985 6.985)",fill:"none",stroke:"#fff","stroke-width":"5"}},[n("circle",{attrs:{cx:"9",cy:"9",r:"9",stroke:"none"}}),n("circle",{attrs:{cx:"9",cy:"9",r:"6.5"}})]),n("g",{attrs:{"data-name":"15 10",fill:"#fff"}},[n("g",{attrs:{"data-name":"14 1"}},[n("g",{attrs:{"data-name":"13 1"}},[n("path",{attrs:{"data-name":"17",d:"M13.985 3.985h4v3h-4z"}}),n("path",{attrs:{"data-name":"4",d:"M15.985 3.985l3 4h-6z"}})]),n("g",{attrs:{"data-name":"13 2"}},[n("path",{attrs:{"data-name":"17",d:"M17.985 27.985h-4v-3h4z"}}),n("path",{attrs:{"data-name":"4",d:"M15.985 27.985l-3-4h6z"}})])]),n("g",{attrs:{"data-name":"14 2"}},[n("g",{attrs:{"data-name":"13 1"}},[n("path",{attrs:{"data-name":"17",d:"M23.056 6.085l2.829 2.829-2.122 2.12-2.828-2.828z"}}),n("path",{attrs:{"data-name":"4",d:"M24.47 7.5l-.707 4.95-4.242-4.244z"}})]),n("g",{attrs:{"data-name":"13 2"}},[n("path",{attrs:{"data-name":"17",d:"M8.914 25.884l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),n("path",{attrs:{"data-name":"4",d:"M7.5 24.47l.707-4.95 4.243 4.243z"}})])])]),n("g",{attrs:{"data-name":"15 11",fill:"#fff"}},[n("g",{attrs:{"data-name":"14 1"}},[n("g",{attrs:{"data-name":"13 1"}},[n("path",{attrs:{"data-name":"17",d:"M23.056 6.086l2.828 2.828-2.12 2.122-2.83-2.829z"}}),n("path",{attrs:{"data-name":"4",d:"M24.47 7.5l-.707 4.95-4.242-4.243z"}})]),n("g",{attrs:{"data-name":"13 2"}},[n("path",{attrs:{"data-name":"17",d:"M8.914 25.885l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),n("path",{attrs:{"data-name":"4",d:"M7.5 24.47l.707-4.949 4.242 4.243z"}})])]),n("g",{attrs:{"data-name":"14 2"}},[n("g",{attrs:{"data-name":"13 1"}},[n("path",{attrs:{"data-name":"17",d:"M27.985 13.985v4h-3v-4z"}}),n("path",{attrs:{"data-name":"4",d:"M27.985 15.985l-4 3v-6z"}})]),n("g",{attrs:{"data-name":"13 2"}},[n("path",{attrs:{"data-name":"17",d:"M3.985 17.985v-4h3v4z"}}),n("path",{attrs:{"data-name":"4",d:"M3.985 15.985l4-3v6z"}})])])]),n("g",{attrs:{"data-name":"15 12",fill:"#fff"}},[n("g",{attrs:{"data-name":"14 1"}},[n("g",{attrs:{"data-name":"13 1"}},[n("path",{attrs:{"data-name":"17",d:"M27.985 13.985v4h-3v-4z"}}),n("path",{attrs:{"data-name":"4",d:"M27.985 15.985l-4 3v-6z"}})]),n("g",{attrs:{"data-name":"13 2"}},[n("path",{attrs:{"data-name":"17",d:"M3.985 17.985v-4h3v4z"}}),n("path",{attrs:{"data-name":"4",d:"M3.985 15.985l4-3v6z"}})])]),n("g",{attrs:{"data-name":"14 2"}},[n("g",{attrs:{"data-name":"13 1"}},[n("path",{attrs:{"data-name":"17",d:"M25.885 23.056l-2.829 2.829-2.12-2.122 2.828-2.828z"}}),n("path",{attrs:{"data-name":"4",d:"M24.47 24.47l-4.95-.707 4.244-4.242z"}})]),n("g",{attrs:{"data-name":"13 2"}},[n("path",{attrs:{"data-name":"17",d:"M6.086 8.914l2.828-2.828 2.122 2.12-2.829 2.83z"}}),n("path",{attrs:{"data-name":"4",d:"M7.5 7.5l4.95.707-4.243 4.243z"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.panelShow,expression:"panelShow"}],staticClass:"btn-control-panel",on:{click:t.preventHide}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.currentPanel,expression:"currentPanel"}],staticClass:"current-panel"},[n("li",[n("span",{staticClass:"item-name"},[t._v("\n          "+t._s(t.$t("dashboard.settings.autoplay"))+"\n        ")]),n("div",{staticClass:"item-control"},[n("widgets-switch",{ref:"autoplaySwitch",on:{change:t.changeAutoplaySettings}})],1)]),n("li",[n("span",{staticClass:"item-name"},[t._v(t._s(t.$t("dashboard.settings.loop")))]),n("div",{staticClass:"item-control"},[n("widgets-switch",{ref:"loopSwitch",on:{change:t.changeLoopSettings}})],1)]),n("li",[n("span",{staticClass:"item-name"},[t._v(t._s(t.$t("dashboard.settings.speed")))]),n("div",{staticClass:"item-control",on:{click:t.showSpeedPanel}},[n("span",[t._v(t._s(t.speed)+"x")]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.963",height:"11.568",viewBox:"0 0 5.963 11.568"}},[n("path",{attrs:{"data-name":"4",d:"M.809.616l3.9 5-3.9 5.368",fill:"none",stroke:"#fff","stroke-width":"2"}})])])]),n("li",{directives:[{name:"show",rawName:"v-show",value:t.medias.length>1,expression:"medias.length > 1"}]},[n("span",{staticClass:"item-name"},[t._v(t._s(t.$t("dashboard.settings.resolution")))]),t.resolution?n("div",{staticClass:"item-control",on:{click:t.showResolutionPanel}},[n("span",[t._v(t._s(t.resolution))]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.963",height:"11.568",viewBox:"0 0 5.963 11.568"}},[n("path",{attrs:{"data-name":"4",d:"M.809.616l3.9 5-3.9 5.368",fill:"none",stroke:"#fff","stroke-width":"2"}})])]):t._e()])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.resolutionListPanel,expression:"resolutionListPanel"}],staticClass:"resolution-list animated fadeInRight"},[n("li",{on:{click:t.backCurrentPanel}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.963",height:"11.568",viewBox:"0 0 5.963 11.568"}},[n("path",{attrs:{"data-name":"5",d:"M5.154.616l-3.9 5 3.9 5.368",fill:"none",stroke:"#fff","stroke-width":"2"}})]),t._v("\n        "+t._s(t.$t("dashboard.btn.back"))+"\n      ")]),t._l(t.medias,(function(e,r){return n("li",{key:r,on:{click:function(n){return t.setResolution(e)}}},[t._v(t._s(e.resolution))])}))],2),t.speedListPanel?n("ul",{staticClass:"speed-list animated fadeInRight"},[n("li",{on:{click:t.backCurrentPanel}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.963",height:"11.568",viewBox:"0 0 5.963 11.568"}},[n("path",{attrs:{"data-name":"5",d:"M5.154.616l-3.9 5 3.9 5.368",fill:"none",stroke:"#fff","stroke-width":"2"}})]),t._v("\n        "+t._s(t.$t("dashboard.btn.back"))+"\n      ")]),n("li",{attrs:{"data-val":"0.5"},on:{click:t.setSpeed}},[t._v("0.5x")]),n("li",{attrs:{"data-val":"1"},on:{click:t.setSpeed}},[t._v("1x")]),n("li",{attrs:{"data-val":"1.25"},on:{click:t.setSpeed}},[t._v("1.25x")]),n("li",{attrs:{"data-val":"1.5"},on:{click:t.setSpeed}},[t._v("1.5x")]),n("li",{attrs:{"data-val":"2"},on:{click:t.setSpeed}},[t._v("2x")])]):t._e()])])}),[],!1,null,null,null).exports),_t=function(){if("pictureInPictureEnabled"in document)return!0;var t=document.createElement("video");return!(!t.requestPictureInPicture||"function"!=typeof t.requestPictureInPicture)},St={name:"PictureInPicture",mixins:[ct],props:{visible:Boolean},data:function(){return{show:!1}},created:function(){_t&&(this.show=!0)},methods:{requestPictureInPicture:function(){this.$player.requestPictureInPicture()}}},Ot=(n("1b6f"),ut(St,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"vue-core-video-player-control",on:{click:t.requestPictureInPicture}},[n("div",{staticClass:"btn-control btn-pip"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"16",viewBox:"0 0 28 16"}},[n("g",{attrs:{"data-name":"6 13"}},[n("g",{attrs:{"data-name":"5 1",fill:"#fff"}},[n("path",{attrs:{"data-name":"9",d:"M18 14h10v2H18z"}}),n("path",{attrs:{"data-name":"10",d:"M26 9h2v6h-2z"}})])]),n("g",{attrs:{"data-name":"6 14",fill:"#fff"}},[n("g",{attrs:{"data-name":"4 1"}},[n("path",{attrs:{"data-name":"7",d:"M12 16H2v-2h10z"}}),n("path",{attrs:{"data-name":"8",d:"M2 16H0V6h2z"}})]),n("path",{attrs:{"data-name":"41",d:"M28 2H0V0h28z"}})])]),n("div",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.pip")))])])]):t._e()}),[],!1,null,null,null).exports),At={name:"Controls",components:{"play-pause-cntrol":dt,"time-span":vt,"volume-control":mt,"fullscreen-control":yt,"settings-control":Et,"picture-in-picture":Ot},props:{visible:Boolean,muted:Boolean}},Mt=(n("7fc5"),ut(At,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vcp-controls"},[n("div",{staticClass:"playback-control"},[n("play-pause-cntrol"),n("time-span")],1),n("div",{staticClass:"setting-control"},[n("volume-control",{attrs:{muted:t.muted}}),n("picture-in-picture"),n("settings-control"),n("fullscreen-control")],1)])}),[],!1,null,null,null).exports),Ct={x:null,y:null},Pt={name:"Dashboard",components:{Progress:ft,Controls:Mt},props:{controls:[Boolean,String],muted:Boolean},data:function(){return{show:!0}},mixins:[ct],methods:{showDashboard:function(t){var e=this;window.clearTimeout(this._hideTimeout),this.show=!0,this.emit(x.UI_DASHBOARD_SHOW),0===t||(this._hideTimeout=setTimeout((function(){e.hideDashboard()}),t||y.dashboardHideDelay))},hideDashboard:function(){this.show=!1,this.emit(x.UI_DASHBOARD_HIDE)},_initAutoMode:function(){var t=this.$refs.dashboard.parentNode;H?t.addEventListener("touchend",this._onTouchend.bind(this),!0):(t.addEventListener("mousemove",this._onMousemove.bind(this)),t.addEventListener("mouseleave",this._onMouseleave.bind(this)),t.addEventListener("mouseover",this._onMouseover.bind(this),!0)),this.showDashboard(4e3)},_onMousemove:function(t){return t.pageX===Ct.x&&t.pageY===Ct.y?(Ct.x=t.pageX,void(Ct.y=t.pageY)):(Ct.x=t.pageX,Ct.y=t.pageY,K(this._el,t.target)?this.showDashboard(0):void this.showDashboard())},_onMouseleave:function(){this.showDashboard()},_onMouseover:function(){this.showDashboard(0)},_onTouchend:function(){this.showDashboard()}},mounted:function(){var t=this.controls;t?"fixed"===t?this.show=!0:this._initAutoMode():this.show=!1}},Lt=(n("cc1d"),ut(Pt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"dashboard",staticClass:"vcp-dashboard",attrs:{autoplay:""}},[n("Progress"),n("Controls",{attrs:{muted:t.muted}})],1)}),[],!1,null,null,null).exports),Tt={name:"Controls",components:{"time-span":vt,"fullscreen-control":yt,"settings-control":Et,"picture-in-picture":Ot},props:{visible:Boolean,muted:Boolean}},Dt=(n("4cc6"),ut(Tt,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vcp-controls"},[e("div",{staticClass:"playback-control"},[e("time-span")],1),e("div",{staticClass:"setting-control"},[e("picture-in-picture"),e("settings-control"),e("fullscreen-control")],1)])}),[],!1,null,null,null).exports),It={x:null,y:null},Rt={name:"MobileDashboard",components:{Progress:ft,MobileControls:Dt},props:{controls:[Boolean,String],muted:Boolean},data:function(){return{show:!0}},mixins:[ct],methods:{showDashboard:function(t){var e=this;window.clearTimeout(this._hideTimeout),this.show=!0,this.emit(x.UI_DASHBOARD_SHOW),0===t||(this._hideTimeout=setTimeout((function(){e.hideDashboard()}),t||y.dashboardHideDelay))},hideDashboard:function(){this.show=!1,this.emit(x.UI_DASHBOARD_HIDE)},_initAutoMode:function(){var t=this.$refs.dashboard.parentNode;H?t.addEventListener("touchend",this._onTouchend.bind(this),!0):(t.addEventListener("mousemove",this._onMousemove.bind(this)),t.addEventListener("mouseleave",this._onMouseleave.bind(this)),t.addEventListener("mouseover",this._onMouseover.bind(this),!0)),this.showDashboard(4e3)},_onMousemove:function(t){return t.pageX===It.x&&t.pageY===It.y?(It.x=t.pageX,void(It.y=t.pageY)):(It.x=t.pageX,It.y=t.pageY,K(this._el,t.target)?this.showDashboard(0):void this.showDashboard())},_onMouseleave:function(){this.showDashboard()},_onMouseover:function(){this.showDashboard(0)},_onTouchend:function(){this.showDashboard()}},mounted:function(){var t=this.controls;t?"fixed"===t?this.show=!0:this._initAutoMode():this.show=!1}},jt=(n("a3e9"),ut(Rt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"dashboard",staticClass:"vcp-m-dashboard",attrs:{autoplay:""}},[n("MobileControls",{attrs:{muted:t.muted}}),n("Progress")],1)}),[],!1,null,null,null).exports),Nt={name:"CoverLayer",mixins:[ct],data:function(){return{title:"",show:!1}},mounted:function(){var t=this;this.on(x.LIFECYCLE_INITING,(function(){var e=t.$player.config.title;e&&(t.title=e)})),this.on(x.UI_DASHBOARD_SHOW,(function(){t.show=!0})),this.on(x.UI_DASHBOARD_HIDE,(function(){t.show=!1}))}},$t=(n("b72f"),ut(Nt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&t.title.length,expression:"show && title.length"}],staticClass:"vcp-layer title-layer"},[n("div",{staticClass:"video-title"},[t._v(t._s(t.title))])])}),[],!1,null,null,null).exports),zt={name:"CoverLayer",mixins:[ct],props:{visible:Boolean},data:function(){return{logo:""}},mounted:function(){var t=this;this.on(x.LIFECYCLE_INITING,(function(){var e=t.$player.config.logo;e&&(t.logo=e)}))}},Ft=(n("56fb"),ut(zt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.logo?n("div",{staticClass:"vcp-layer logo-layer"},[n("div",{staticClass:"logo-wrap"},[n("img",{attrs:{alt:"logo",src:t.logo}})])]):t._e()}),[],!1,null,null,null).exports),Bt={name:"PlayPauseLayer",mixins:[ct],props:{visible:Boolean},data:function(){return{show:H}},mounted:function(){var t=this;this.on(x.UI_DASHBOARD_SHOW,(function(){t.show=!0})),this.on(x.UI_DASHBOARD_HIDE,(function(){t.show=!1}))}},Ut=(n("4447"),ut(Bt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vcp-layer play-pause-layer"},[t.isPlaying?t._e():n("a",{staticClass:"btn-control btn-play",attrs:{href:"javascript:;"},on:{click:t.play}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"31",height:"35",viewBox:"0 0 41 47"}},[n("path",{attrs:{d:"M23.5,0,47,41H0Z",transform:"translate(41) rotate(90)",fill:"#ff6060"}})])]),t.isPlaying?n("a",{staticClass:"btn-control btn-pause",attrs:{href:"javascript:;"},on:{click:t.pause}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"36",viewBox:"0 0 36 48"}},[n("g",{attrs:{transform:"translate(-950 -398)"}},[n("rect",{attrs:{width:"12",height:"48",transform:"translate(950 398)",fill:"#ff6060"}}),n("rect",{attrs:{width:"12",height:"48",transform:"translate(974 398)",fill:"#ff6060"}})])])]):t._e()])}),[],!1,null,null,null).exports),Ht={name:"CoverLayer",mixins:[ct],props:{visible:Boolean},data:function(){return{cover:"data:image/gif;base64,R0lGODlhAgACAIAAADMzMwAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMEQ4MDk3RDgzRTUxMUVBOEFBNkNFRTA4ODA0RDY3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMEQ4MDk3RTgzRTUxMUVBOEFBNkNFRTA4ODA0RDY3OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwRDgwOTdCODNFNTExRUE4QUE2Q0VFMDg4MDRENjc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwRDgwOTdDODNFNTExRUE4QUE2Q0VFMDg4MDRENjc4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAAIAAgAAAgKEUQA7",show:!1}},mounted:function(){var t=this;this.on(x.LIFECYCLE_INITING,(function(){var e=t.$player.config.cover;e&&(t.cover=e)})),this.on(x.ERROR_AUTO_PLAY,(function(){t.show=!0})),this.on(x.PLAY,(function(){t.show=!1}))}},Yt=(n("9983"),ut(Ht,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vcp-layer cover-layer"},[n("img",{attrs:{alt:"video cover",src:t.cover}})])}),[],!1,null,null,null).exports),Gt={name:"LoadingLayer",mixins:[ct],data:function(){return{show:!1}},methods:{showLoading:function(t){var e=this;t?this.show=!0:(window.clearTimeout(this._timeout),this._timeout=setTimeout((function(){e.show=!0}),600))},hideLoading:function(){window.clearTimeout(this._timeout),this.show=!1}},created:function(){var t=this;this.on([x.CANPLAY,x.CANPLAYTHROUGH,x.PLAY,x.LOADEDMETADATA,x.SEEKED,x.ERROR],(function(){t.hideLoading()})),this.on([x.SEEKING,x.STALLED,x.LOADSTART],(function(e){t.showLoading()})),this.on(["playing"],(function(){t.hideLoading()}))}},Wt=(n("b1ba"),ut(Gt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vcp-layer loading-layer"},[n("div",{staticClass:"loading-wrap"},[n("div",{staticClass:"h5-layer-loading"},[n("svg",{staticClass:"spinner",attrs:{width:"100%",height:"100%",viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("linearGradient",{attrs:{id:"grad",gradientUnits:"objectBoundingBox",gradientTransform:"rotate(135 0.5 0.5)"}},[n("stop",{attrs:{offset:"0%","stop-color":"#ff6060"}}),n("stop",{attrs:{offset:"100%","stop-color":"#fa3b3b"}})],1)],1),n("circle",{staticClass:"path",attrs:{stroke:"url(#grad)","stroke-width":"10",fill:"none","stroke-linecap":"round",cx:"40",cy:"40",r:"30"}})])]),n("p",[t._v(t._s(t.$t("layers.loading.msg")))])])])}),[],!1,null,null,null).exports),Vt={name:"CoverLayer",mixins:[ct],props:{dsiable:Boolean},data:function(){return{errMsg:"",show:!1}},mounted:function(){var t=this;this.on(x.ERROR,(function(e){console.log(e),t.show=!0;var n="layers.error."+e.code;t.errMsg=h.t(n,"")}))}},Xt=(n("f64c"),{name:"Layers",components:{PlayPauseLayer:Ut,CoverLayer:Yt,LogoLayer:Ft,TitleLayer:$t,LoadingLayer:Wt,ErrorLayer:ut(Vt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vcp-layer error-layer"},[n("div",{staticClass:"error-icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 200 200"}},[n("g",{attrs:{transform:"translate(-963 -1663)"}},[n("circle",{attrs:{"data-name":"11",cx:"100",cy:"100",r:"100",transform:"translate(963 1663)",fill:"#ff5e5c"}}),n("g",{attrs:{"data-name":"46",transform:"translate(1006 1727)",fill:"#fff",stroke:"#fff","stroke-width":"3"}},[n("rect",{attrs:{width:"120",height:"73",rx:"2",stroke:"none"}}),n("rect",{attrs:{x:"1.5",y:"1.5",width:"117",height:"70",rx:".5",fill:"none"}})]),n("g",{attrs:{"data-name":"12",transform:"translate(1108 1743)",fill:"#fff",stroke:"#ff5a52","stroke-width":"2"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",stroke:"none"}}),n("circle",{attrs:{cx:"6",cy:"6",r:"5",fill:"none"}})]),n("path",{attrs:{"data-name":"1",fill:"none",stroke:"#fff","stroke-width":"3",d:"M1057.5 1728.5l30-22"}}),n("path",{attrs:{"data-name":"2",fill:"none",stroke:"#fff","stroke-width":"3",d:"M1036.5 1697.5l22 30"}}),n("path",{attrs:{"data-name":"48",d:"M1018 1737h80a4 4 0 0 1 4 4v45a5 5 0 0 1-5 5h-78a5 5 0 0 1-5-5v-45a4 4 0 0 1 4-4z",fill:"#2785f2"}}),n("g",{attrs:{"data-name":"4",fill:"#ff584c"}},[n("path",{attrs:{"data-name":"49",d:"M1108 1757h3v2h-3z"}}),n("path",{attrs:{"data-name":"50",d:"M1113 1757h3v2h-3z"}}),n("path",{attrs:{"data-name":"51",d:"M1118 1757h3v2h-3z"}})]),n("g",{attrs:{"data-name":"5",fill:"#ff584c"}},[n("path",{attrs:{"data-name":"49",d:"M1108 1760h3v2h-3z"}}),n("path",{attrs:{"data-name":"50",d:"M1113 1760h3v2h-3z"}}),n("path",{attrs:{"data-name":"51",d:"M1118 1760h3v2h-3z"}})])])])]),n("div",{staticClass:"error-msg-wrap"},[n("h2",[t._v(t._s(t.$t("layers.error.title")))]),n("p",{staticClass:"error-msg"},[t._v(t._s(t.errMsg))])])])}),[],!1,null,null,null).exports},props:{visible:Boolean}});n("2c1a");function Zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var Jt={name:"VueCoreVideoPlayer",mixins:[ct],components:{Dashboard:Lt,MobileDashboard:jt,Layers:ut(Xt,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-core-video-player-layers"},[e("cover-layer"),e("logo-layer"),e("title-layer"),e("play-pause-layer"),e("loading-layer"),e("error-layer")],1)}),[],!1,null,null,null).exports},props:{src:[String,Array],autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},playsinline:{type:Boolean,default:!0},title:String,cover:String,logo:String,muted:{type:Boolean,default:!1},controls:{type:[String,Boolean],default:!0},lang:{type:[String,Object],default:"en"},core:{type:Function},viewCore:{type:Array,default:function(){return[]}}},data:function(){return{isMobile:H}},computed:{source:function(){var t=this.src;if(!t)return"";var e,n=this.resolution||y.resolution,r=Z(t);return r.forEach((function(t){t.resolution===n&&(e=t.src)})),e||("object"===l(r[0])&&r[0].src?e=r[0].src:"string"==typeof r[0]&&(e=r[0])),this.$player&&this.$player.setSource(t),e}},mounted:function(){var t=this;this.$player=this.videoCore=it(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Zt(n,!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.$props,{videoEl:this.$refs["vcp-video"],el:this.$refs["vcp-el"],eventEmitter:{on:this.on,emit:this.emit,off:this.off}})),Object.values(x).forEach((function(e){t.$player.on(e,(function(n){"function"==typeof t.$listeners[e]&&t.$listeners[e](n)}))})),this._coreID=this.videoCore.id,this.emit(x.LIFECYCLE_INITING,this.$player);try{this.viewCore.map((function(e){"function"==typeof e&&e(t.$player,t.$player.config)}))}catch(t){console.error(t)}},beforeDestroy:function(){this.$player.destroy()}},qt=(n("bead"),ut(Jt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"vcp-el",staticClass:"vcp-container"},[n("video",{ref:"vcp-video",attrs:{title:t.title,cover:t.cover,loop:t.loop,playsinline:t.playsinline,src:t.source}}),n("Layers"),t.isMobile?t._e():n("Dashboard",{attrs:{controls:t.controls,muted:t.muted}}),t.isMobile?n("MobileDashboard",{attrs:{controls:t.controls,muted:t.muted}}):t._e()],1)}),[],!1,null,null,null).exports),Qt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.setLocale(e.lang),t.prototype.$t=function(t){return h.t(t)},t.component("vue-core-video-player",qt)}};n.d(e,"BaseVideoCore",(function(){return rt})),n.d(e,"EVENTS",(function(){return x}));e.default=Qt},ff1c:function(t,e,n){var r=n("7335");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("499e").default)("4cfaecc1",r,!0,{sourceMap:!1,shadowMode:!1})}})}}]);
>>>>>>> ef74a6ddc8d932c1b0621c59d514efc2fee7f955
