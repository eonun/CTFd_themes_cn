/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages/stats": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/themes/core/static/js";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./CTFd/themes/core/assets/js/pages/stats.js","helpers","plotly","vendor","default~pages/challenges~pages/main~pages/notifications~pages/scoreboard~pages/settings~pages/setup~~6822bf1f"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CTFd/themes/core/assets/js/graphs.js":
/*!**********************************************!*\
  !*** ./CTFd/themes/core/assets/js/graphs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createGraph = createGraph;\nexports.updateGraph = updateGraph;\n\nvar _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nvar _plotly = _interopRequireDefault(__webpack_require__(/*! plotly.js-basic-dist */ \"./node_modules/plotly.js-basic-dist/plotly-basic.js\"));\n\nvar _moment = _interopRequireDefault(__webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\"));\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./CTFd/themes/core/assets/js/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar graph_configs = {\n  score_graph: {\n    layout: {\n      title: \"随时间推移得分\",\n      paper_bgcolor: \"rgba(0,0,0,0)\",\n      plot_bgcolor: \"rgba(0,0,0,0)\",\n      hovermode: \"closest\",\n      xaxis: {\n        showgrid: false,\n        showspikes: true\n      },\n      yaxis: {\n        showgrid: false,\n        showspikes: true\n      },\n      legend: {\n        orientation: \"h\"\n      }\n    },\n    fn: function fn(type, id, name, account_id) {\n      return \"CTFd_score_\".concat(type, \"_\").concat(name, \"_\").concat(id, \"_\").concat(new Date().toISOString().slice(0, 19));\n    },\n    format: function format(type, id, name, account_id, responses) {\n      var times = [];\n      var scores = [];\n      var solves = responses[0].data;\n      var awards = responses[2].data;\n      var total = solves.concat(awards);\n      total.sort(function (a, b) {\n        return new Date(a.date) - new Date(b.date);\n      });\n\n      for (var i = 0; i < total.length; i++) {\n        var date = (0, _moment.default)(total[i].date);\n        times.push(date.toDate());\n\n        try {\n          scores.push(total[i].challenge.value);\n        } catch (e) {\n          scores.push(total[i].value);\n        }\n      }\n\n      return [{\n        x: times,\n        y: (0, _utils.cumulativeSum)(scores),\n        type: \"scatter\",\n        marker: {\n          color: (0, _utils.colorHash)(name + id)\n        },\n        line: {\n          color: (0, _utils.colorHash)(name + id)\n        },\n        fill: \"tozeroy\"\n      }];\n    }\n  },\n  category_breakdown: {\n    layout: {\n      title: \"类别明细\",\n      paper_bgcolor: \"rgba(0,0,0,0)\",\n      plot_bgcolor: \"rgba(0,0,0,0)\",\n      legend: {\n        orientation: \"v\"\n      },\n      height: \"400px\"\n    },\n    fn: function fn(type, id, name, account_id) {\n      return \"CTFd_submissions_\".concat(type, \"_\").concat(name, \"_\").concat(id, \"_\").concat(new Date().toISOString().slice(0, 19));\n    },\n    format: function format(type, id, name, account_id, responses) {\n      var solves = responses[0].data;\n      var categories = [];\n\n      for (var i = 0; i < solves.length; i++) {\n        categories.push(solves[i].challenge.category);\n      }\n\n      var keys = categories.filter(function (elem, pos) {\n        return categories.indexOf(elem) == pos;\n      });\n      var counts = [];\n\n      for (var _i = 0; _i < keys.length; _i++) {\n        var count = 0;\n\n        for (var x = 0; x < categories.length; x++) {\n          if (categories[x] == keys[_i]) {\n            count++;\n          }\n        }\n\n        counts.push(count);\n      }\n\n      return [{\n        values: counts,\n        labels: keys,\n        hole: 0.4,\n        type: \"pie\"\n      }];\n    }\n  },\n  solve_percentages: {\n    layout: {\n      title: \"挑战百分比\",\n      paper_bgcolor: \"rgba(0,0,0,0)\",\n      plot_bgcolor: \"rgba(0,0,0,0)\",\n      legend: {\n        orientation: \"h\"\n      },\n      height: \"400px\"\n    },\n    fn: function fn(type, id, name, account_id) {\n      return \"CTFd_submissions_\".concat(type, \"_\").concat(name, \"_\").concat(id, \"_\").concat(new Date().toISOString().slice(0, 19));\n    },\n    format: function format(type, id, name, account_id, responses) {\n      var solves_count = responses[0].data.length;\n      var fails_count = responses[1].meta.count;\n      return [{\n        values: [solves_count, fails_count],\n        labels: [\"Solves\", \"Fails\"],\n        marker: {\n          colors: [\"rgb(0, 209, 64)\", \"rgb(207, 38, 0)\"]\n        },\n        hole: 0.4,\n        type: \"pie\"\n      }];\n    }\n  }\n};\nvar config = {\n  displaylogo: false,\n  responsive: true\n};\n\nfunction createGraph(graph_type, target, data, type, id, name, account_id) {\n  var cfg = graph_configs[graph_type];\n  var $elem = (0, _jquery.default)(target);\n  $elem.empty();\n\n  if ($elem[0] === undefined) {\n    console.log(\"Couldn't find graph target: \" + target);\n    return;\n  }\n\n  $elem[0].fn = cfg.fn(type, id, name, account_id);\n  var graph_data = cfg.format(type, id, name, account_id, data);\n\n  _plotly.default.newPlot($elem[0], graph_data, cfg.layout, config);\n}\n\nfunction updateGraph(graph_type, target, data, type, id, name, account_id) {\n  var cfg = graph_configs[graph_type];\n  var $elem = (0, _jquery.default)(target);\n  var graph_data = cfg.format(type, id, name, account_id, data);\n\n  _plotly.default.update($elem[0], graph_data, cfg.layout, config);\n}\n\n//# sourceURL=webpack:///./CTFd/themes/core/assets/js/graphs.js?");

/***/ }),

/***/ "./CTFd/themes/core/assets/js/pages/stats.js":
/*!***************************************************!*\
  !*** ./CTFd/themes/core/assets/js/pages/stats.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\n__webpack_require__(/*! ./main */ \"./CTFd/themes/core/assets/js/pages/main.js\");\n\nvar _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nvar _CTFd = _interopRequireDefault(__webpack_require__(/*! ../CTFd */ \"./CTFd/themes/core/assets/js/CTFd.js\"));\n\nvar _graphs = __webpack_require__(/*! ../graphs */ \"./CTFd/themes/core/assets/js/graphs.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar api_funcs = {\n  team: [function (x) {\n    return _CTFd.default.api.get_team_solves({\n      teamId: x\n    });\n  }, function (x) {\n    return _CTFd.default.api.get_team_fails({\n      teamId: x\n    });\n  }, function (x) {\n    return _CTFd.default.api.get_team_awards({\n      teamId: x\n    });\n  }],\n  user: [function (x) {\n    return _CTFd.default.api.get_user_solves({\n      userId: x\n    });\n  }, function (x) {\n    return _CTFd.default.api.get_user_fails({\n      userId: x\n    });\n  }, function (x) {\n    return _CTFd.default.api.get_user_awards({\n      userId: x\n    });\n  }]\n};\n\nvar createGraphs = function createGraphs(type, id, name, account_id) {\n  var _api_funcs$type = _slicedToArray(api_funcs[type], 3),\n      solves_func = _api_funcs$type[0],\n      fails_func = _api_funcs$type[1],\n      awards_func = _api_funcs$type[2];\n\n  Promise.all([solves_func(account_id), fails_func(account_id), awards_func(account_id)]).then(function (responses) {\n    (0, _graphs.createGraph)(\"score_graph\", \"#score-graph\", responses, type, id, name, account_id);\n    (0, _graphs.createGraph)(\"category_breakdown\", \"#categories-pie-graph\", responses, type, id, name, account_id);\n    (0, _graphs.createGraph)(\"solve_percentages\", \"#keys-pie-graph\", responses, type, id, name, account_id);\n  });\n};\n\nvar updateGraphs = function updateGraphs(type, id, name, account_id) {\n  var _api_funcs$type2 = _slicedToArray(api_funcs[type], 3),\n      solves_func = _api_funcs$type2[0],\n      fails_func = _api_funcs$type2[1],\n      awards_func = _api_funcs$type2[2];\n\n  Promise.all([solves_func(account_id), fails_func(account_id), awards_func(account_id)]).then(function (responses) {\n    (0, _graphs.updateGraph)(\"score_graph\", \"#score-graph\", responses, type, id, name, account_id);\n    (0, _graphs.updateGraph)(\"category_breakdown\", \"#categories-pie-graph\", responses, type, id, name, account_id);\n    (0, _graphs.updateGraph)(\"solve_percentages\", \"#keys-pie-graph\", responses, type, id, name, account_id);\n  });\n};\n\n(0, _jquery.default)(function () {\n  var type, id, name, account_id;\n  var _window$stats_data = window.stats_data;\n  type = _window$stats_data.type;\n  id = _window$stats_data.id;\n  name = _window$stats_data.name;\n  account_id = _window$stats_data.account_id;\n  createGraphs(type, id, name, account_id);\n  setInterval(function () {\n    updateGraphs(type, id, name, account_id);\n  }, 300000);\n});\n\n//# sourceURL=webpack:///./CTFd/themes/core/assets/js/pages/stats.js?");

/***/ })

/******/ });