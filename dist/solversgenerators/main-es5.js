(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DhY":
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function DhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 71,
        vars: 0,
        consts: [[1, "description"], ["href", "https://weblog.jamisbuck.org/"], ["href", "/mazes#maze-stats"], ["target", "_blank", "href", "https://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking.html"], ["target", "_blank", "href", "http://weblog.jamisbuck.org/2010/12/29/maze-generation-eller-s-algorithm"], ["target", "_blank", "href", "https://weblog.jamisbuck.org/2011/1/3/maze-generation-kruskal-s-algorithm.html"], ["target", "_blank", "href", "https://weblog.jamisbuck.org/2011/1/10/maze-generation-prim-s-algorithm.html"], ["target", "_blank", "href", "https://weblog.jamisbuck.org/2011/1/12/maze-generation-recursive-division-algorithm.html"], ["target", "_blank", "href", "https://weblog.jamisbuck.org/2011/1/17/maze-generation-aldous-broder-algorithm.html"], ["href", "https://weblog.jamisbuck.org/2011/1/20/maze-generation-wilson-s-algorithm.html", "target", "_blank"], ["href", "https://weblog.jamisbuck.org/2011/1/24/maze-generation-hunt-and-kill-algorithm.html", "target", "_blank"], ["href", "https://weblog.jamisbuck.org/2011/1/27/maze-generation-growing-tree-algorithm.html", "target", "_blank"], ["href", "https://weblog.jamisbuck.org/2011/2/1/maze-generation-binary-tree-algorithm.html", "target", "_blank"], ["href", "https://weblog.jamisbuck.org/2011/2/3/maze-generation-sidewinder-algorithm.html", "target", "_blank"], ["href", "https://gitlab.com/rileythomp14/mazes", "target", "_blank"], ["href", "/sudoku#sudoku-stats"], ["href", "https://gitlab.com/rileythomp14/sudoku", "target", "_blank"], ["href", "/truchet"], ["href", "https://gitlab.com/rileythomp14/solvers-generators/-/blob/master/src/app/components/truchet/truchet.component.ts", "target", "_blank"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This site is a collection of solvers and generators I've written in Go and JavaScript. So far it has 3 sections, mazes, Sudoku, and Truchet tiles. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mazes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jamis Buck");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " has a blog series from 2011 that I came across which contains descriptions and animations of 11 maze algorithms. Here is the list of all 11 maze generation algorithms that I've implemented in Go. You can see more details about each algorithm under the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mazes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " section.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Recursive Backtracking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Eller's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Kruskal's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Prim's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recursive Division");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Aldous-Broder Alogirthm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Wilson's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hunt and Kill Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Growing Tree Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Binary Tree Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sidewinder Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "The source code for all the maze generation algorithms can be found ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "here.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sudoku");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "I created 5 different sudoku solvers in Go, each using a different combination of solving techniques. Each solver was tested on 3000 sudoku boards, the results can be found ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ", and the source code can be found ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "here.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Truchet Tiles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "A Truchet tile generator written in JavaScript. More info is available in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Truchet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " section and the source code can be found ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "here.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  padding: 0 10em 10em 10em;\n  margin: 0em 1em 0 1em;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  line-height: 1.75em;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.description[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURIQTtFQUtRLGVBQUE7QUNDUjtBRE5BOzs7O0VBU1EsaUJBQUE7RUFDQSxtQkFBQTtBQ0dSO0FEYkE7Ozs7RUFZWSxjQUFBO0FDT1o7QURuQkE7OztFQWlCUSxrQkFBQTtBQ09SO0FEeEJBO0VBcUJRLGdCQUFBO0FDTVI7QUQzQkE7RUF5QlEsb0JBQUE7QUNLUjtBRERBO0VBQ1EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgcGFkZGluZzogMCAxMGVtIDEwZW0gMTBlbTtcbiAgICBtYXJnaW46IDBlbSAxZW0gMCAxZW07XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cblxuICAgIHAsIHVsLCBhLCBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgICBoMSwgcCwgdWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICB9XG4gICAgXG4gICAgICB1bCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICB9XG4gICAgXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn0iLCJkaXYge1xuICBwYWRkaW5nOiAwIDEwZW0gMTBlbSAxMGVtO1xuICBtYXJnaW46IDBlbSAxZW0gMCAxZW07XG59XG5kaXYgcCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbmRpdiBwLFxuZGl2IHVsLFxuZGl2IGEsXG5kaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBsaW5lLWhlaWdodDogMS43NWVtO1xufVxuZGl2IHAgYSxcbmRpdiB1bCBhLFxuZGl2IGEgYSxcbmRpdiBzcGFuIGEge1xuICBmb250LXNpemU6IDFlbTtcbn1cbmRpdiBoMSxcbmRpdiBwLFxuZGl2IHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuZGl2IHVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbmRpdiBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/rileythompson/gitlab/solvers-generators/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 15,
        vars: 0,
        consts: [[1, "header"], ["routerLink", "/mazes"], ["routerLink", "/sudoku"], ["routerLink", "/truchet"], ["routerLink", "/about"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solvers and Generators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mazes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0\xA0|\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sudoku");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0\xA0|\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Truchet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \xA0\xA0|\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".header[_ngcontent-%COMP%] {\n  background: #9370DB;\n  color: #fff;\n  padding: 0.75em;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 0.5em;\n  margin-right: 2em;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtBQ0RKO0FESkE7RUFRUSxlQUFBO0FDRFI7QURQQTtFQVlRLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRlI7QURaQTtFQWdCWSxXQUFBO0VBQ0EscUJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIC8vIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgYmFja2dyb3VuZDogIzkzNzBEQjtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIHBhZGRpbmc6IDAuNzVlbTtcblxuICAgIGgxIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM5MzcwREI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjc1ZW07XG59XG4uaGVhZGVyIGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmhlYWRlciBuYXYge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cbi5oZWFkZXIgbmF2IGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "KJCd":
    /*!*****************************************************!*\
      !*** ./src/app/components/mazes/mazes.component.ts ***!
      \*****************************************************/

    /*! exports provided: MazesComponent */

    /***/
    function KJCd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MazesComponent", function () {
        return MazesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_mazes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/mazes.service */
      "xVYf");

      var MazesComponent = /*#__PURE__*/function () {
        function MazesComponent(mazesGoService) {
          var _this = this;

          _classCallCheck(this, MazesComponent);

          this.mazesGoService = mazesGoService;
          this.directions = [{
            prime: 7,
            dr: 1,
            dc: 0
          }, {
            prime: 3,
            dr: 0,
            dc: 1
          }, {
            prime: 2,
            dr: -1,
            dc: 0
          }, {
            prime: 5,
            dr: 0,
            dc: -1
          } // left
          ];
          this.boardLen = 15;
          this.visits = 0;
          this.maxVisits = 0;
          this.startRow = 0;
          this.startCol = 0;
          this.maxRow = 0;
          this.maxCol = 0;
          this.row = 0;
          this.col = 0; // Moves the player around the maze

          this.movePlayer = function (ev) {
            ev.preventDefault();
            _this.maze.children[_this.row].children[_this.col].style.backgroundColor = '#E6E6FA';

            if (ev.key == 'ArrowDown' && _this.row < _this.playMaze.length - 1 && _this.playMaze[_this.row][_this.col].val % 7 != 0) {
              _this.row += 1;
            } else if (ev.key == 'ArrowUp' && _this.row > 0 && _this.playMaze[_this.row][_this.col].val % 2 != 0) {
              _this.row -= 1;
            } else if (ev.key == 'ArrowLeft' && _this.col > 0 && _this.playMaze[_this.row][_this.col].val % 5 != 0) {
              _this.col -= 1;
            } else if (ev.key == 'ArrowRight' && _this.col < _this.playMaze[0].length - 1 && _this.playMaze[_this.row][_this.col].val % 3 != 0) {
              _this.col += 1;
            }

            _this.maze.children[_this.row].children[_this.col].style.backgroundColor = 'lightgreen';

            if (_this.row == _this.maxRow && _this.col == _this.maxCol && _this.row + _this.col > 0) {
              alert('You Won');
              document.removeEventListener('keydown', _this.movePlayer);
              return;
            }
          };
        }

        _createClass(MazesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateMaze("rb", 12);
          } // Creates and displays a maze 

        }, {
          key: "displayMaze",
          value: function displayMaze(res) {
            this.maze = document.createElement('table');
            this.maze.style.margin = '0 auto';

            for (var i = 0; i < res.length; i++) {
              var r = Math.floor(i / this.boardLen);
              var c = i % this.boardLen;

              if (c == 0) {
                var row = document.createElement('tr');
                this.maze.appendChild(row);
              }

              var cell = document.createElement('td');
              cell.style.height = '2em';
              cell.style.width = '2em';
              cell.style.textAlign = 'center';
              cell.style.border = '1px dotted grey';

              if (res[i] % 2 == 0) {
                cell.style.borderTop = '2px solid black';
              }

              if (res[i] % 3 == 0) {
                cell.style.borderRight = '2px solid black';
              }

              if (res[i] % 5 == 0) {
                cell.style.borderLeft = '2px solid black';
              }

              if (res[i] % 7 == 0) {
                cell.style.borderBottom = '2px solid black';
              }

              this.maze.children[r].appendChild(cell);
            }

            this.maze.style.borderCollapse = 'collapse';
            document.getElementById('maze').innerHTML = '';
            document.getElementById('maze').appendChild(this.maze);
            this.maze.children[this.row].children[this.col].style.backgroundColor = 'lightgreen';
          } // Creates maze structure from raw maze data

        }, {
          key: "getMaze",
          value: function getMaze(res) {
            var mz = [];

            for (var i = 0; i < this.boardLen; i++) {
              var row = [];

              for (var j = 0; j < this.boardLen; j++) {
                row.push({
                  row: i,
                  col: j,
                  val: res[this.boardLen * i + j],
                  visited: false
                });
              }

              mz.push(row);
            }

            return mz;
          } // Initializes maze structure for determining longest path and playing on

        }, {
          key: "initMazes",
          value: function initMazes(res) {
            this.visits = 0;
            this.maxVisits = 0;
            this.startRow = 0;
            this.startCol = 0;
            this.maxRow = 0;
            this.maxCol = 0;
            this.row = 0;
            this.col = 0;
            this.solveMaze = this.getMaze(res);
            this.playMaze = JSON.parse(JSON.stringify(this.solveMaze));
          } // Displays and initializes a maze of a given type

        }, {
          key: "generateMaze",
          value: function generateMaze(type, boardLen) {
            var _this2 = this;

            this.boardLen = boardLen;
            this.mazesGoService.getMaze(this.boardLen, type).subscribe(function (res) {
              if (res.toString() == 'err') {
                alert('Failed to generate maze');
                return;
              }

              _this2.mazeData = res;

              _this2.initMazes(res);

              _this2.displayMaze(res);

              document.addEventListener('keydown', _this2.movePlayer);
            }, function (err) {
              alert('Maze could not be generated');
              console.log(err);
            });
          } // Tests mazes API

        }, {
          key: "testMazes",
          value: function testMazes() {
            this.mazesGoService.testMazes().subscribe(function (res) {
              console.log(res);
            });
          } // Stops solving the maze

        }, {
          key: "stopSolve",
          value: function stopSolve() {
            clearInterval(this.solveInterval);
          } // Updates the maze after moving

        }, {
          key: "updateMaze",
          value: function updateMaze(dir, dv, r, c) {
            this.solveMaze[this.row][this.col].visited = true;
            this.solveMaze[this.row][this.col].val *= dir.prime;
            this.row += dir.dr;
            this.col += dir.dc;
            this.visits += dv;

            if (this.visits > this.maxVisits) {
              this.maxVisits = this.visits;
              this.maxRow = this.row;
              this.maxCol = this.col;
              this.startRow = r;
              this.startCol = c;
            }

            if (this.visits < 0) {
              console.log('Visits counter error: ', this.visits);
            }

            return true;
          } // Makes the maze playable

        }, {
          key: "makeMazePlayable",
          value: function makeMazePlayable(color) {
            this.row = this.startRow;
            this.col = this.startCol;
            this.maze.children[this.row].children[this.col].style.backgroundColor = 'lightgreen';
            this.maze.children[this.maxRow].children[this.maxCol].style.backgroundColor = color;
            document.addEventListener('keydown', this.movePlayer);
          } // Determines the longest path in the maze

        }, {
          key: "getLongestPath",
          value: function getLongestPath(interval) {
            var _this3 = this;

            this.maze.children[this.row].children[this.col].style.backgroundColor = '#E6E6FA';
            this.maxVisits = 0;
            this.maxRow = 0;
            this.maxCol = 0; // find longest path in maze

            for (var r = 0; r < this.boardLen; r++) {
              for (var c = 0; c < this.boardLen; c++) {
                var moved = true;
                this.visits = 0;
                this.row = r;
                this.col = c;

                while (moved) {
                  moved = false;

                  var _iterator = _createForOfIteratorHelper(this.directions),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var _dir = _step.value;

                      // if you can move to a cell
                      if (this.solveMaze[this.row][this.col].val % _dir.prime != 0 && !this.solveMaze[this.row + _dir.dr][this.col + _dir.dc].visited) {
                        moved = this.updateMaze(_dir, 1, r, c);
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  if (!moved) {
                    var _iterator2 = _createForOfIteratorHelper(this.directions),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var dir = _step2.value;

                        if (this.solveMaze[this.row][this.col].val % dir.prime != 0) {
                          moved = this.updateMaze(dir, -1, r, c);
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                }

                this.solveMaze = this.getMaze(this.mazeData);
              }
            }

            this.visits = 0;
            this.row = this.startRow;
            this.col = this.startCol; // do the animation between the two points

            this.solveInterval = setInterval(function () {
              var moved = false;

              var _iterator3 = _createForOfIteratorHelper(_this3.directions),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _dir3 = _step3.value;

                  if (_this3.solveMaze[_this3.row][_this3.col].val % _dir3.prime != 0 && !_this3.solveMaze[_this3.row + _dir3.dr][_this3.col + _dir3.dc].visited) {
                    _this3.maze.children[_this3.row].children[_this3.col].style.backgroundColor = 'lightgreen';
                    moved = _this3.updateMaze(_dir3, 1, _this3.startRow, _this3.startCol);
                    break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (!moved) {
                var _iterator4 = _createForOfIteratorHelper(_this3.directions),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _dir2 = _step4.value;

                    if (_this3.solveMaze[_this3.row][_this3.col].val % _dir2.prime != 0) {
                      _this3.maze.children[_this3.row].children[_this3.col].style.backgroundColor = '#E6E6FA';
                      moved = _this3.updateMaze(_dir2, -1, _this3.startRow, _this3.startCol);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              if (!moved) {
                clearInterval(_this3.solveInterval);

                _this3.makeMazePlayable('lightpink');

                return;
              }

              _this3.maze.children[_this3.row].children[_this3.col].style.backgroundColor = 'lightgreen';
            }, interval);
          }
        }]);

        return MazesComponent;
      }();

      MazesComponent.ɵfac = function MazesComponent_Factory(t) {
        return new (t || MazesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mazes_service__WEBPACK_IMPORTED_MODULE_1__["MazesService"]));
      };

      MazesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MazesComponent,
        selectors: [["app-mazes"]],
        decls: 135,
        vars: 0,
        consts: [["id", "maze"], ["name", "generator", "id", "generator", 3, "change"], ["generator", ""], ["value", "rb"], ["value", "hak"], ["value", "abv0"], ["value", "ea"], ["value", "eav"], ["value", "eah"], ["value", "ka"], ["value", "pa"], ["value", "rds"], ["value", "rdc"], ["value", "wa"], ["value", "gt"], ["value", "bt"], ["value", "sw"], ["name", "boardLen", "id", "boardLen", 3, "change"], ["boardLen", ""], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["selected", "", "value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], [3, "click"], ["id", "maze-stats", 1, "stats-desc"], ["target", "blank", "href", "https://weblog.jamisbuck.org/"], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/gentimes.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/decisions.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/longest.png", "alt", ""], [1, "bold", 2, "margin-top", "0.5em"], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/recursive.png", "alt", ""], [1, "bold"], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/hak.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/abv0.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/abv1.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/ellers.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/eav.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/eah.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/kruskals.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/prims.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/division.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/wilsons.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/growing.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/binary.png", "alt", ""], ["src", "https://gitlab.com/rileythomp14/solvers-generators/-/raw/master/mazes/sidewinder.png", "alt", ""]],
        template: function MazesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MazesComponent_Template_select_change_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

              return ctx.generateMaze(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recursive Backtracking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hunt and Kill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Aldous-Broder Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Eller's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Eller's Algorithm (Vertical)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Eller's Algorithm (Horizontal)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kruskal's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prim's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Recursive Division (Squares)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recursive Division (Corridors)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Wilson's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Growing Tree Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Binary Tree Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sidewinder Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MazesComponent_Template_select_change_32_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

              return ctx.generateMaze(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "11");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "13");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MazesComponent_Template_button_click_62_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

              return ctx.generateMaze(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Generate Maze");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MazesComponent_Template_button_click_64_listener() {
              return ctx.getLongestPath(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Play Maze");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Maze Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "I implemented and tested 11 different maze generations algorithms from Jamis Buck's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "blog.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Below is a description and analysis of each algorithm.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Recursive Backtracking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Simple recursive backtracking. Start at a random cell, move to an unvisited neighbour. If all the neighbours are visited, backtrack until you can move to an unvisited cell. Do this until all of the cells have been visited.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Hunt and Kill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " This was a pretty easy one to implement as it was similar to recursive backtracking. Start at a random cell and move to an unvisited neighbour until you reach a cell with no unvisited neighbours. Then scan the board from left to right, top to bottom until you're at a cell with a visited neighbour. Remove the wall between these two cells, and then continue with moving to unvisited neighbours. Repeat this process until all of the cells have been visited. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Aldous-Broder Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "This was the first one I implemented because it was so simple and straightforward. Start at a random cell and mark it as visited. Move to a random neighbour cell. If that cell has already been visited, then just move to the cell. If that cell has not been visited, then move to the cell and remove the wall between them. This process is repeated until every cell in the maze has been visited. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Eller's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "This one was sort of tricky to implement. Start at the top and go row by row. Split each row into connected pieces randomly. Then make at least one path down to the next row from each connected piece.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Kruskal's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Kruskal's algorithm is a well known CS algorithm that finds a minimum spanning tree in a connected graph, which is exactly what a maze is. It starts by assigning each cell its own value. Then it randomly picks two adjacent cells that do not have the same value. It removes the wall between these two cells, and gives all the connected cells one of the values. This is repeated until every cell in the maze has the same value. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Prim's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Prim's algorithm is another well known CS algorithm that finds a minimum spanning tree in an undirected graph, which again is what a maze is. It works by choosing a cell at random and adding its neighbours to a list of potential moves. Then it picks one of these potential moves, moves to that cell, and adds its neighbours to the potential moves list. This is repeated until all cells have been visited. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Recursive Division");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "This one was interesting because it generates mazes differently than the rest. Instead of breaking down walls to create paths, the algorithm starts by splitting the board into two regions separated by a wall, and creates one opening in the wall. Then it chooses another region, divides it into two and creats an opening between them. This process is repeated until there are no more regions to divide. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Wilson's Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " This one was fun to implement. First, it marks a random cell as visited. Then it picks another random cell to start at. From here it moves to a neighbour, marking the direction that it moved away from this cell. If it moves to a cell that has already been marked with a direction, then the most recent direction is used. This process is repeated until it reaches a visited cell. Then it will go back to the cell it picked to start at, and create a path from this cell to the visited cell using the directions it left marked in the first stage of the algorithm. After this, it will pick another cell randomly to start marking directions from. This is done until all the cells in the maze have been visited. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Growing Tree Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " This one is interesting because it can be tweaked to behave like different algorithms such as recursive backtracking or Prim's algorithm. It works by first picking an empty cell, marking it as visited and adding it to a list of active cells. Then it picks a cell from the active cells list, moves to an unvisited neighbour by removing the wall between the two cells and adding the neighbour to the list of active cells. If a cell chosen from the active cells list has no unvisited neighbours, then it is removed from the active cells list. This process is repeated until the active cells list is empty. The way this algorithm can be tweaked to behave like other algorithms is based on how the cell from the active list is chosen. If the newest added cell is chosen, then it behaves as the recursive backtracker would. If it chooses an active cell at random, then it behaves like Prim's algorithm. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Binary Tree Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " This algorithm is by far the simplest and most straightforward one there is. For each cell, randomly remove a wall with either the cell below or to the right. The only problem with algorithm is that it produces mazes that have corridors in the last row and column. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sidewinder Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Create a corridor in the first row. Then start at the second row and go down to the last row. FOr each row, randomly split the it into connected pieces. For each connected piece in the row, create 1 path to the row above by removing a wall between two cells. This algorith is similar to Eller's algorithm but was a bit easier to implement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  margin: 1em;\n}\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding: 0.1em;\n  width: 15em;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  height: 60%;\n  width: 60%;\n  margin: 1em auto;\n}\n.stats-desc[_ngcontent-%COMP%] {\n  padding: 0 10em 10em 10em;\n  margin: 0em 1em 0 1em;\n}\n.stats-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .stats-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  font-size: 1em;\n  line-height: 1.75em;\n}\n.stats-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .stats-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .stats-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.stats-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.stats-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvbWF6ZXMvbWF6ZXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWF6ZXMvbWF6ZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURFQTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7QURFQTtFQUNJLHlCQUFBO0FDQUo7QURHQTtFQUNFLGlCQUFBO0FDREY7QURJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNISjtBRENBOztFQUtJLGNBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FESkE7OztFQVVJLGtCQUFBO0FDREo7QURUQTtFQWNJLGdCQUFBO0FDRko7QURaQTtFQWtCSSxvQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXplcy9tYXplcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbmJ1dHRvbiwgc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMC4xZW07XG4gICAgd2lkdGg6IDE1ZW07XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5cbi5zdGF0cy1kZXNjIHtcbiAgICBwYWRkaW5nOiAwIDEwZW0gMTBlbSAxMGVtO1xuICAgIG1hcmdpbjogMGVtIDFlbSAwIDFlbTtcblxuICBwLCBvbCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVlbTtcbiAgfVxuXG4gIGgxLCBwLCBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgb2wge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbn0iLCJkaXYge1xuICBtYXJnaW46IDFlbTtcbn1cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAuMWVtO1xuICB3aWR0aDogMTVlbTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG4uc3RhdHMtZGVzYyB7XG4gIHBhZGRpbmc6IDAgMTBlbSAxMGVtIDEwZW07XG4gIG1hcmdpbjogMGVtIDFlbSAwIDFlbTtcbn1cbi5zdGF0cy1kZXNjIHAsXG4uc3RhdHMtZGVzYyBvbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS43NWVtO1xufVxuLnN0YXRzLWRlc2MgaDEsXG4uc3RhdHMtZGVzYyBwLFxuLnN0YXRzLWRlc2Mgb2wge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uc3RhdHMtZGVzYyBvbCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4uc3RhdHMtZGVzYyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MazesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mazes',
            templateUrl: './mazes.component.html',
            styleUrls: ['./mazes.component.less']
          }]
        }], function () {
          return [{
            type: src_app_services_mazes_service__WEBPACK_IMPORTED_MODULE_1__["MazesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 11,
        vars: 0,
        consts: [["id", "footer-container"], [1, "footer"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css", "integrity", "sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==", "crossorigin", "anonymous", "referrerpolicy", "no-referrer"], ["href", "https://gitlab.com/rileythomp14", "target", "blank"], [1, "fab", "fa-gitlab"], ["href", "/about"], [1, "fas", "fa-question"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#footer-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n#footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background: #9370DB;\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 4em;\n  padding: 0.75em;\n}\n#footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  font-size: 2.25em;\n  text-align: center;\n  margin-top: -0.1em;\n  color: #fff;\n}\n#footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREZBO0VBR1EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURYQTtFQVlZLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQU1BLFdBQUE7QUNIWjtBRGpCQTtFQWlCZ0IscUJBQUE7RUFDQSxXQUFBO0FDR2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3Rlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzkzNzBEQjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNzVlbTtcblxuICAgICAgICBuYXYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4xZW07XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIjZm9vdGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNmb290ZXItY29udGFpbmVyIC5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjOTM3MERCO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRlbTtcbiAgcGFkZGluZzogMC43NWVtO1xufVxuI2Zvb3Rlci1jb250YWluZXIgLmZvb3RlciBuYXYge1xuICBmb250LXNpemU6IDIuMjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMC4xZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuI2Zvb3Rlci1jb250YWluZXIgLmZvb3RlciBuYXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PPAb":
    /*!**************************************************!*\
      !*** ./src/app/services/sudokusolver.service.ts ***!
      \**************************************************/

    /*! exports provided: SudokusolverService */

    /***/
    function PPAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SudokusolverService", function () {
        return SudokusolverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-type': 'application-json'
        }),
        params: {}
      };

      var SudokusolverService = /*#__PURE__*/function () {
        function SudokusolverService(http) {
          _classCallCheck(this, SudokusolverService);

          this.http = http;
          this.host = 'https://solvegen-server.herokuapp.com';
        }

        _createClass(SudokusolverService, [{
          key: "getBoard",
          value: function getBoard(board) {
            var path = '/board';
            var query = '?board=' + board;
            return this.http.get(this.host + path + query);
          }
        }, {
          key: "getRandomBoard",
          value: function getRandomBoard(diff) {
            return this.http.get('https://sugoku2.herokuapp.com/board?difficulty=' + diff);
          }
        }, {
          key: "validateBoard",
          value: function validateBoard(board) {
            var path = '/validate';
            var query = '?board=' + board;
            return this.http.get(this.host + path + query);
          }
        }, {
          key: "solveBoard",
          value: function solveBoard(board) {
            var path = '/solve';
            var query = '?board=' + board;
            return this.http.get(this.host + path + query);
          }
        }, {
          key: "testSolvers",
          value: function testSolvers() {
            var path = '/test';
            return this.http.get(this.host + path);
          }
        }, {
          key: "partialSolve",
          value: function partialSolve(board) {
            var path = '/partial';
            var query = '?board=' + board;
            return this.http.get(this.host + path + query);
          }
        }]);

        return SudokusolverService;
      }();

      SudokusolverService.ɵfac = function SudokusolverService_Factory(t) {
        return new (t || SudokusolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SudokusolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SudokusolverService,
        factory: SudokusolverService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokusolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PcWV":
    /*!*******************************************************************!*\
      !*** ./src/app/components/sudoku-table/sudoku-table.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SudokuTableComponent */

    /***/
    function PcWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SudokuTableComponent", function () {
        return SudokuTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_sudokusolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/sudokusolver.service */
      "PPAb");

      var SudokuTableComponent = /*#__PURE__*/function () {
        function SudokuTableComponent(sudokuGoService) {
          _classCallCheck(this, SudokuTableComponent);

          this.sudokuGoService = sudokuGoService;
        }

        _createClass(SudokuTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getBoard",
          value: function getBoard() {
            var board = '';
            var table = document.getElementById('input-board').children[0];

            for (var i = 1; i < table.children.length; ++i) {
              for (var j = 0; j < table.children[i].children.length; ++j) {
                var val = table.children[i].children[j].children[0].value;
                board += val === '' ? 0 : val;
              }
            }

            return board;
          }
        }, {
          key: "keyUp",
          value: function keyUp(ev) {
            this.sudokuGoService.validateBoard(this.getBoard()).subscribe(function (res) {
              if (res && ev.key >= '1' && ev.key <= '9') {
                ev.target.value = ev.key;
              } else {
                ev.target.value = '';
              }
            });
          }
        }, {
          key: "highlightCells",
          value: function highlightCells(ev) {
            var index = Number(ev.target.parentElement.id.replace('cell', ''));
            var r = Math.floor(index / 9);
            var c = index % 9;
            var q = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            var input = document.getElementById('input-board').children[0].children;

            for (var i = 0; i < 9; i++) {
              for (var j = 0; j < 9; j++) {
                var color = 'white';

                if (c == j || r == i || q == Math.floor(i / 3) * 3 + Math.floor(j / 3)) {
                  color = '#E6E6FA';
                }

                input[i + 1].children[j].style.backgroundColor = color;
                input[i + 1].children[j].children[0].style.backgroundColor = color;
              }
            }

            input[r + 1].children[c].style.backgroundColor = '#9370DB';
            input[r + 1].children[c].children[0].style.backgroundColor = '#9370DB';
          }
        }]);

        return SudokuTableComponent;
      }();

      SudokuTableComponent.ɵfac = function SudokuTableComponent_Factory(t) {
        return new (t || SudokuTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sudokusolver_service__WEBPACK_IMPORTED_MODULE_1__["SudokusolverService"]));
      };

      SudokuTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SudokuTableComponent,
        selectors: [["app-sudoku-table"]],
        inputs: {
          boardTitle: "boardTitle"
        },
        decls: 174,
        vars: 1,
        consts: [[1, "board"], [1, "board-title"], [1, "border-top", "border-left"], ["type", "text", "maxlength", "1", 3, "keyup", "focus"], [1, "border-top"], [1, "border-top", "border-right"], [1, "border-left"], [1, "border-right"], [1, "border-bottom", "border-left"], [1, "border-bottom"], [1, "border-bottom", "border-right"]],
        template: function SudokuTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_5_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_5_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_7_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_7_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_9_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_9_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_11_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_11_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_13_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_13_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_15_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_15_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_17_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_17_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_19_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_19_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_21_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_21_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_24_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_24_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_26_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_26_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_28_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_28_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_30_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_30_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_32_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_32_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_34_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_34_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_36_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_36_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_38_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_38_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_40_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_40_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_43_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_43_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_45_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_45_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_47_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_47_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_49_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_49_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_51_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_51_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_53_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_53_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_55_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_55_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_57_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_57_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_59_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_59_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_62_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_62_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_64_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_64_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_66_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_66_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_68_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_68_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_70_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_70_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_72_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_72_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_74_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_74_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_76_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_76_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_78_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_78_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_81_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_81_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_83_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_83_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_85_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_85_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_87_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_87_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_89_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_89_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_91_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_91_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_93_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_93_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_95_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_95_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_97_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_97_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_100_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_100_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_102_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_102_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_104_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_104_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_106_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_106_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_108_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_108_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_110_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_110_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_112_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_112_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_114_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_114_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_116_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_116_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_119_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_119_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_121_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_121_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_123_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_123_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_125_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_125_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_127_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_127_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_129_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_129_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_131_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_131_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_133_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_133_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_135_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_135_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_138_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_138_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_140_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_140_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_142_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_142_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_144_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_144_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_146_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_146_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_148_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_148_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_150_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_150_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_152_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_152_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_154_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_154_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_157_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_157_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_159_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_159_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_161_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_161_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_163_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_163_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_165_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_165_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_167_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_167_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_169_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_169_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_171_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_171_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SudokuTableComponent_Template_input_keyup_173_listener($event) {
              return ctx.keyUp($event);
            })("focus", function SudokuTableComponent_Template_input_focus_173_listener($event) {
              return ctx.highlightCells($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTitle);
          }
        },
        styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 1em;\n  display: inline-block;\n}\ntable[_ngcontent-%COMP%]   .board-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 2.5em;\n  width: 2.5em;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1.5em;\n  font-size: 1.33em;\n  border: none;\n  outline: none;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:focus-within, table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: #E6E6FA;\n}\ntable[_ngcontent-%COMP%]   .border-left[_ngcontent-%COMP%] {\n  border-left: 2px solid black;\n}\ntable[_ngcontent-%COMP%]   .border-right[_ngcontent-%COMP%] {\n  border-right: 2px solid black;\n}\ntable[_ngcontent-%COMP%]   .border-top[_ngcontent-%COMP%] {\n  border-top: 2px solid black;\n}\ntable[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 2px solid black;\n}\ninput[_ngcontent-%COMP%]:disabled {\n  color: black;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvc3Vkb2t1LXRhYmxlL3N1ZG9rdS10YWJsZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdWRva3UtdGFibGUvc3Vkb2t1LXRhYmxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjtBREpBO0VBTVEsb0JBQUE7QUNDUjtBRFBBO0VBVVEsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQVI7QURiQTtFQWdCWSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQVo7QURwQkE7O0VBeUJRLHlCQUFBO0FDRFI7QUR4QkE7RUE2QlEsNEJBQUE7QUNGUjtBRDNCQTtFQWlDUSw2QkFBQTtBQ0hSO0FEOUJBO0VBcUNRLDJCQUFBO0FDSlI7QURqQ0E7RUF5Q1EsOEJBQUE7QUNMUjtBRFNBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1ZG9rdS10YWJsZS9zdWRva3UtdGFibGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAuYm9hcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMzNlbTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZDpmb2N1cy13aXRoaW4sIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZGQTtcbiAgICB9XG5cbiAgICAuYm9yZGVyLWxlZnQge1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuICAgIH1cblxuICAgIC5ib3JkZXItcmlnaHQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbiAgICB9XG5cbiAgICAuYm9yZGVyLXRvcCB7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgICB9XG5cbiAgICAuYm9yZGVyLWJvdHRvbSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICB9XG59XG5cbmlucHV0OmRpc2FibGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59IiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxudGFibGUgLmJvYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG50YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDIuNWVtO1xuICB3aWR0aDogMi41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRkIGlucHV0IHtcbiAgd2lkdGg6IDEuNWVtO1xuICBmb250LXNpemU6IDEuMzNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50YWJsZSB0ZDpmb2N1cy13aXRoaW4sXG50YWJsZSBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RkE7XG59XG50YWJsZSAuYm9yZGVyLWxlZnQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xufVxudGFibGUgLmJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xufVxudGFibGUgLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG59XG50YWJsZSAuYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cbmlucHV0OmRpc2FibGVkIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sudoku-table',
            templateUrl: './sudoku-table.component.html',
            styleUrls: ['./sudoku-table.component.less']
          }]
        }], function () {
          return [{
            type: src_app_services_sudokusolver_service__WEBPACK_IMPORTED_MODULE_1__["SudokusolverService"]
          }];
        }, {
          boardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.less']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_sudoku_table_sudoku_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/sudoku-table/sudoku-table.component */
      "PcWV");
      /* harmony import */


      var _components_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sudoku/sudoku.component */
      "pHsO");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _components_mazes_mazes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/mazes/mazes.component */
      "KJCd");
      /* harmony import */


      var _components_sudoku_stats_sudoku_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/sudoku-stats/sudoku-stats.component */
      "kfJP");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_truchet_truchet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/truchet/truchet.component */
      "tyK3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_sudoku_table_sudoku_table_component__WEBPACK_IMPORTED_MODULE_6__["SudokuTableComponent"], _components_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_7__["SudokuComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _components_mazes_mazes_component__WEBPACK_IMPORTED_MODULE_9__["MazesComponent"], _components_sudoku_stats_sudoku_stats_component__WEBPACK_IMPORTED_MODULE_10__["SudokuStatsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_truchet_truchet_component__WEBPACK_IMPORTED_MODULE_12__["TruchetComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_sudoku_table_sudoku_table_component__WEBPACK_IMPORTED_MODULE_6__["SudokuTableComponent"], _components_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_7__["SudokuComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _components_mazes_mazes_component__WEBPACK_IMPORTED_MODULE_9__["MazesComponent"], _components_sudoku_stats_sudoku_stats_component__WEBPACK_IMPORTED_MODULE_10__["SudokuStatsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_truchet_truchet_component__WEBPACK_IMPORTED_MODULE_12__["TruchetComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kfJP":
    /*!*******************************************************************!*\
      !*** ./src/app/components/sudoku-stats/sudoku-stats.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SudokuStatsComponent */

    /***/
    function kfJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SudokuStatsComponent", function () {
        return SudokuStatsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SudokuStatsComponent = /*#__PURE__*/function () {
        function SudokuStatsComponent() {
          _classCallCheck(this, SudokuStatsComponent);
        }

        _createClass(SudokuStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SudokuStatsComponent;
      }();

      SudokuStatsComponent.ɵfac = function SudokuStatsComponent_Factory(t) {
        return new (t || SudokuStatsComponent)();
      };

      SudokuStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SudokuStatsComponent,
        selectors: [["app-sudoku-stats"]],
        decls: 103,
        vars: 0,
        consts: [[2, "margin", "1em"], ["target", "blank", "href", "https://docs.google.com/spreadsheets/d/1tHCD08ERWCU1J68tiZQDC-PQI2rvgpKuQFDB39EXgCw/edit?usp=sharing"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=1472206235&format=image"], [1, "solver-caption"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=1530479283&format=image"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=80570197&format=image"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=2051768902&format=image"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=907390625&format=image"]],
        template: function SudokuStatsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I've created 5 different sudoku solvers, each using a different combination of solving techniques. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " These are brief descriptions and results of each solver run on 3000 sudoku boards of varying difficulty. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " More detailed results of the solver tests can be found on this Google Sheet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NB: The average solve times are much higher than the median solve times due to outliers, and the times are heavily skewed towards the median.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Median: 0.51 \xA0\xA0\xA0\xA0\xA0 Average: 37.34 \xA0\xA0\xA0\xA0\xA0 Max: 11:07:12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The first solver. It's just a naive implemenation of a recursive backtrack to solve the board. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This solver has a very slow median solve time of 0.51 seconds, and an extremely long maximum solve time of over 11 hours!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Median: 0.10 \xA0\xA0\xA0\xA0\xA0 Average: 25.04 \xA0\xA0\xA0\xA0\xA0 Max: 11:11:40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "The second solver. This one has 2 steps:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Determines each cell's possibilities by making logical deductions by checking it's row, column and box, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Recursively backtrack to solve the rest of the board.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "This is much faster than the first solver, with a median solve time of 0.1 seconds, a 5x improvement thanks to the logical deductions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " However it still has a very long max solve time of over 11 hours, in the case when there are no deductions possible and it must just backtrack.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Median: 0.06 \xA0\xA0\xA0\xA0\xA0 Average: 1.16 \xA0\xA0\xA0\xA0\xA0 Max: 7:34");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "The third solver. This one has 3 steps:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Determines each cell's possibilities by making logical deductions, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "If necessary, flip the board so that whichever of the top or bottom half has more cells filled in is at the top, for more efficient backtracking.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Recursively backtrack to solve the rest of the board.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Again, this solver is much faster than the previous, with a median solve time of 0.06 seconds, a 40% improvement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Backtracking from the side with more cells filled in really helps at the outliers, shown by the max solve time falling from over 11 hours to less than 8 minutes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Median: 0.03 \xA0\xA0\xA0\xA0\xA0 Average: 7.03 \xA0\xA0\xA0\xA0\xA0 Max: 3:13:45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "The fourth solver. This one only has 2 steps: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Determines each cell's possibilities by making logical deductions, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Recursively backtrack to solve the rest of the board, using only the possibilities from the logical deduction to reduce the search space.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "This solver has the fastest median solve time so far of 0.03 seconds, a 2x improvement over the prevoius solver. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " This is thanks to this solver only backtracking with logically possible values instead of trying every number. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " However, it still has a very large max solve time since it doesn't recursively backtrack from the side with more cells filled in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Median: 0.01 \xA0\xA0\xA0\xA0\xA0 Average: 0.29 \xA0\xA0\xA0\xA0\xA0 Max: 1:47");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "The fifth and fastest solver. This one combines all 3 techniques: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Determines each cell's possibilities by making logical deductions, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "If necessary, flip the board so that whichever of the top or bottom half has more cells filled in is at the top, for more efficient backtracking.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Recursively backtrack to solve the rest of the board, using only the possibilities from the logical deduction to reduce the search space.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "This solver has a very fast median solve time of 0.01 seconds, a 3x improvement over the next fastest solver. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " It also has by far the lowest max solve time of 1:47, since it will both flip the board and only backtrack with logically possible moves.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "As the results show, the median solve time is reduced by performing logical deductions on the board and only backtracking with logically possible values.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "This makes sense since it will help to only backtrack with possible values in every board, so the median time goes down. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "To lower the max and average solve times the recursive backtracking needs to be done from the side that had more cells filled in. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " By starting on the side with more cells filled in, the solver is more likely reach contradictions early on and need to backtrack. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " This will greatly reduce the search space compard to not reaching a contradiciton and needing to backtrack until later in the board.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");
          }
        },
        styles: ["hr[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 1em auto 1em auto;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  margin: 1em 1em 0 1em;\n  display: block;\n}\n.solver-caption[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\ndiv[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1em;\n}\ndiv[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvc3Vkb2t1LXN0YXRzL3N1ZG9rdS1zdGF0cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdWRva3Utc3RhdHMvc3Vkb2t1LXN0YXRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0FDREo7QURJQTtFQUNJLHFCQUFBO0FDRko7QURDQTtFQUlRLHFCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1ZG9rdS1zdGF0cy9zdWRva3Utc3RhdHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDFlbSBhdXRvIDFlbSBhdXRvO1xufVxuXG5pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogMWVtIDFlbSAwIDFlbTtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4uc29sdmVyLWNhcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbmRpdiB7XG4gICAgbWFyZ2luOiAxZW0gMCAxZW0gMWVtO1xuXG4gICAgb2wge1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAyZW07XG4gICAgfVxufSIsImhyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxZW0gYXV0byAxZW0gYXV0bztcbn1cbmltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDFlbSAxZW0gMCAxZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNvbHZlci1jYXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbmRpdiB7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDFlbTtcbn1cbmRpdiBvbCB7XG4gIG1hcmdpbjogMCAwIDAuNWVtIDJlbTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuStatsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sudoku-stats',
            templateUrl: './sudoku-stats.component.html',
            styleUrls: ['./sudoku-stats.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pHsO":
    /*!*******************************************************!*\
      !*** ./src/app/components/sudoku/sudoku.component.ts ***!
      \*******************************************************/

    /*! exports provided: SudokuComponent */

    /***/
    function pHsO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SudokuComponent", function () {
        return SudokuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_sudokusolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/sudokusolver.service */
      "PPAb");
      /* harmony import */


      var _sudoku_table_sudoku_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sudoku-table/sudoku-table.component */
      "PcWV");

      var SudokuComponent = /*#__PURE__*/function () {
        function SudokuComponent(sudokuGoService) {
          _classCallCheck(this, SudokuComponent);

          this.sudokuGoService = sudokuGoService;
        }

        _createClass(SudokuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var input = document.getElementById('input-board').children[0].children;

            for (var i = 1; i < input.length; ++i) {
              for (var j = 0; j < input[i].children.length; ++j) {
                input[i].children[j].id = 'cell' + (9 * (i - 1) + j);
              }
            }

            this.randomBoard('random');
          }
        }, {
          key: "getBoard",
          value: function getBoard() {
            var board = '';
            var table = document.getElementById('input-board').children[0];

            for (var i = 1; i < table.children.length; ++i) {
              for (var j = 0; j < table.children[i].children.length; ++j) {
                var val = table.children[i].children[j].children[0].value;
                board += val === '' ? 0 : val;
              }
            }

            return board;
          }
        }, {
          key: "setBoardBackground",
          value: function setBoardBackground(bgColor) {
            var inputBoard = document.getElementById('input-board').children[0].children;

            for (var i = 1; i < inputBoard.length; i++) {
              var row = inputBoard[i].children;

              for (var j = 0; j < row.length; j++) {
                var cell = row[j];
                cell.style.backgroundColor = bgColor;
                cell.children[0].style.backgroundColor = bgColor;
              }
            }
          }
        }, {
          key: "validateBoard",
          value: function validateBoard() {
            var _this4 = this;

            var board = this.getBoard();
            this.sudokuGoService.validateBoard(board).subscribe(function (res) {
              var bgColor = res ? '#90ee90' : '#ffcccb';

              _this4.setBoardBackground(bgColor);

              setTimeout(function () {
                _this4.setBoardBackground('white');

                _this4.highlightRandom(board);
              }, 1000);
            });
          }
        }, {
          key: "solveBoard",
          value: function solveBoard() {
            var table = document.getElementById('input-board').children[0];
            document.getElementById('loader').style.visibility = 'visible';
            var board = this.getBoard();
            this.sudokuGoService.solveBoard(board).subscribe(function (res) {
              for (var i = 1; i < table.children.length; ++i) {
                for (var j = 0; j < table.children[i].children.length; ++j) {
                  var index = 9 * (i - 1) + j;

                  if (board[index] != '0') {
                    table.children[i].children[j].children[0].value = res[index];
                  }
                }
              }

              var row = 0;
              var col = 0;
              var interval = setInterval(function () {
                var index = 9 * Math.floor(row / 9) + col % 9;

                if (index > 80) {
                  clearInterval(interval);
                }

                if (board[index] == '0') {
                  table.children[Math.floor(row / 9) + 1].children[col % 9].children[0].value = res[index];
                }

                col++;
                row++;
              }, 25);
              document.getElementById('loader').style.visibility = 'hidden';
            });
          }
        }, {
          key: "clearBoard",
          value: function clearBoard() {
            var input = document.getElementById('input-board').children[0];

            for (var i = 1; i < input.children.length; ++i) {
              for (var j = 0; j < input.children[i].children.length; ++j) {
                // (<HTMLInputElement>solved.children[i].children[j].children[0]).value = '';
                input.children[i].children[j].children[0].value = '';
              }
            }

            this.setBoardBackground('white');
          }
        }, {
          key: "highlightRandom",
          value: function highlightRandom(board) {
            var table = document.getElementById('input-board').children[0];
            var randx = Math.floor(Math.random() * 9);
            var randy = Math.floor(Math.random() * 9);
            var tries = 0;

            while (board[randy * 9 + randx] != '0' && tries < 100) {
              randx = Math.floor(Math.random() * 9);
              randy = Math.floor(Math.random() * 9);
              tries++;
            }

            if (tries < 100) {
              table.children[randy + 1].children[randx].children[0].focus();
            }
          }
        }, {
          key: "randomBoard",
          value: function randomBoard(diff) {
            var _this5 = this;

            this.clearBoard();
            var table = document.getElementById('input-board').children[0];
            this.sudokuGoService.getRandomBoard(diff).subscribe(function (res) {
              var board = res.board;

              for (var i = 0; i < board.length; ++i) {
                for (var j = 0; j < board[i].length; ++j) {
                  if (board[i][j] != '0') {
                    table.children[i + 1].children[j].children[0].value = board[i][j];
                    table.children[i + 1].children[j].children[0].disabled = true;
                  } else {
                    table.children[i + 1].children[j].children[0].disabled = false;
                  }
                }
              }

              _this5.highlightRandom(board.flat().join(''));
            });
          }
        }, {
          key: "testSolvers",
          value: function testSolvers() {
            this.sudokuGoService.testSolvers().subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "partialSolve",
          value: function partialSolve() {
            var table = document.getElementById('input-board').children[0];
            document.getElementById('loader').style.visibility = 'visible';
            var board = this.getBoard();
            this.sudokuGoService.partialSolve(board).subscribe(function (res) {
              if (board == res) {
                document.getElementById('loader').style.visibility = 'hidden';
                alert('The solver could not make any logical deductions for this board');
                return;
              }

              for (var i = 1; i < table.children.length; ++i) {
                for (var j = 0; j < table.children[i].children.length; ++j) {
                  var index = 9 * (i - 1) + j;

                  if (board[index] != '0') {
                    table.children[i].children[j].children[0].value = res[index];
                  }
                }
              }

              var row = 0;
              var col = 0;
              var interval = setInterval(function () {
                var index = 9 * Math.floor(row / 9) + col % 9;

                if (index > 80) {
                  clearInterval(interval);
                }

                if (board[index] == '0' && res[index] != '0') {
                  table.children[Math.floor(row / 9) + 1].children[col % 9].children[0].value = res[index];
                }

                col++;
                row++;
              }, 25);
              document.getElementById('loader').style.visibility = 'hidden';
            });
          }
        }]);

        return SudokuComponent;
      }();

      SudokuComponent.ɵfac = function SudokuComponent_Factory(t) {
        return new (t || SudokuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sudokusolver_service__WEBPACK_IMPORTED_MODULE_1__["SudokusolverService"]));
      };

      SudokuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SudokuComponent,
        selectors: [["app-sudoku"]],
        decls: 121,
        vars: 1,
        consts: [["id", "boards-container"], ["id", "input-board", 3, "boardTitle"], ["id", "solve-button"], [3, "click"], ["id", "loader"], ["id", "sudoku-stats"], ["target", "blank", "href", "https://docs.google.com/spreadsheets/d/1tHCD08ERWCU1J68tiZQDC-PQI2rvgpKuQFDB39EXgCw/edit?usp=sharing"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=1472206235&format=image"], [1, "solver-caption"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=1530479283&format=image"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=80570197&format=image"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=2051768902&format=image"], ["src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEMS8dsML6NKs2_hk0BZb1qDZ62Zo_td38U7w6RKF8-VSOnJBYJZsHr0YJgbaFNQQn7JElmprLM_of/pubchart?oid=907390625&format=image"], [2, "margin-top", "1em"]],
        template: function SudokuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sudoku-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_4_listener() {
              return ctx.randomBoard("easy");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Easy Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_6_listener() {
              return ctx.randomBoard("medium");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Medium Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_8_listener() {
              return ctx.randomBoard("hard");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hard Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_11_listener() {
              return ctx.validateBoard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Validate Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_13_listener() {
              return ctx.partialSolve();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Partial Solve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_15_listener() {
              return ctx.solveBoard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solve Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_17_listener() {
              return ctx.clearBoard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Clear Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sudoku Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I've created 5 different sudoku solvers, each using a different combination of solving techniques. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " These are brief descriptions and results of each solver run on 3000 sudoku boards of varying difficulty. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " More detailed results of the solver tests can be found on this Google Sheet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "NB: The average solve times are much higher than the median solve times due to outliers, and the times are heavily skewed towards the median.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Median: 0.51 \xA0\xA0\xA0\xA0\xA0 Average: 37.34 \xA0\xA0\xA0\xA0\xA0 Max: 11:07:12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "The first solver. It's just a naive implemenation of a recursive backtrack to solve the board. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " This solver has a very slow median solve time of 0.51 seconds, and an extremely long maximum solve time of over 11 hours!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Median: 0.10 \xA0\xA0\xA0\xA0\xA0 Average: 25.04 \xA0\xA0\xA0\xA0\xA0 Max: 11:11:40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "The second solver. This one has 2 steps:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Determines each cell's possibilities by making logical deductions by checking it's row, column and box, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Recursively backtrack to solve the rest of the board.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "This is much faster than the first solver, with a median solve time of 0.1 seconds, a 5x improvement thanks to the logical deductions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " However it still has a very long max solve time of over 11 hours, in the case when there are no deductions possible and it must just backtrack.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Median: 0.06 \xA0\xA0\xA0\xA0\xA0 Average: 1.16 \xA0\xA0\xA0\xA0\xA0 Max: 7:34");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "The third solver. This one has 3 steps:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Determines each cell's possibilities by making logical deductions, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "If necessary, flip the board so that whichever of the top or bottom half has more cells filled in is at the top, for more efficient backtracking.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Recursively backtrack to solve the rest of the board.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Again, this solver is much faster than the previous, with a median solve time of 0.06 seconds, a 40% improvement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Backtracking from the side with more cells filled in really helps at the outliers, shown by the max solve time falling from over 11 hours to less than 8 minutes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Median: 0.03 \xA0\xA0\xA0\xA0\xA0 Average: 7.03 \xA0\xA0\xA0\xA0\xA0 Max: 3:13:45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "The fourth solver. This one only has 2 steps: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Determines each cell's possibilities by making logical deductions, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Recursively backtrack to solve the rest of the board, using only the possibilities from the logical deduction to reduce the search space.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "This solver has the fastest median solve time so far of 0.03 seconds, a 2x improvement over the prevoius solver. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " This is thanks to this solver only backtracking with logically possible values instead of trying every number. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " However, it still has a very large max solve time since it doesn't recursively backtrack from the side with more cells filled in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Median: 0.01 \xA0\xA0\xA0\xA0\xA0 Average: 0.29 \xA0\xA0\xA0\xA0\xA0 Max: 1:47");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "The fifth and fastest solver. This one combines all 3 techniques: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Determines each cell's possibilities by making logical deductions, and fill it in if there's only 1 possibility.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "If necessary, flip the board so that whichever of the top or bottom half has more cells filled in is at the top, for more efficient backtracking.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Recursively backtrack to solve the rest of the board, using only the possibilities from the logical deduction to reduce the search space.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "This solver has a very fast median solve time of 0.01 seconds, a 3x improvement over the next fastest solver. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " It also has by far the lowest max solve time of 1:47, since it will both flip the board and only backtrack with logically possible moves.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "As the results show, the median solve time is reduced by performing logical deductions on the board and only backtracking with logically possible values. This makes sense since it will help to only backtrack with possible values in every board, so the median time goes down. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "To lower the max and average solve times (i.e. remove the outliers) the recursive backtracking needs to be done from the side that had more cells filled in. By starting on the side with more cells filled in, the solver is more likely reach contradictions early on and need to backtrack. This will greatly reduce the search space compard to not reaching a contradiciton and needing to backtrack until later in the board.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardTitle", "");
          }
        },
        directives: [_sudoku_table_sudoku_table_component__WEBPACK_IMPORTED_MODULE_2__["SudokuTableComponent"]],
        styles: ["#loader[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  visibility: hidden;\n  margin-top: 1em;\n  border: 10px solid #E6E6FA;\n  border-radius: 50%;\n  border-top: 10px solid #9370DB;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  \n  animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n#boards-container[_ngcontent-%COMP%], #solve-button[_ngcontent-%COMP%], .solver-caption[_ngcontent-%COMP%] {\n  text-align: center;\n}\nbutton[_ngcontent-%COMP%] {\n  color: black;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  display: block;\n  margin: 1em auto 0 auto;\n}\n#sudoku-stats[_ngcontent-%COMP%] {\n  padding: 0 10em 10em 10em;\n  margin: 0em 1em 0 1em;\n}\n#sudoku-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sudoku-stats[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  line-height: 1.75em;\n}\n#sudoku-stats[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #sudoku-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sudoku-stats[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n#sudoku-stats[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n#sudoku-stats[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvc3Vkb2t1L3N1ZG9rdS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdWRva3Uvc3Vkb2t1LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQ0NGLFdBQVc7RURBVCxrQ0FBQTtBQ0VKO0FEQ0U7RUFDRTtJQUFLLCtCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO0VDSVQ7QUFDRjtBREZFO0VBQ0U7SUFBSyx1QkFBQTtFQ0tQO0VESkU7SUFBTyx5QkFBQTtFQ09UO0FBQ0Y7QURMQTs7O0VBQ0ksa0JBQUE7QUNTSjtBRE5BO0VBQ0UsWUFBQTtBQ1FGO0FETEE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ09GO0FESkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDTUo7QURSQTs7RUFLSSxpQkFBQTtFQUNBLG1CQUFBO0FDT0o7QURiQTs7O0VBVUksa0JBQUE7QUNRSjtBRGxCQTtFQWNJLGdCQUFBO0FDT0o7QURyQkE7RUFrQkksb0JBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vkb2t1L3N1ZG9rdS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjRTZFNkZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM5MzcwREI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbiNib2FyZHMtY29udGFpbmVyLCAjc29sdmUtYnV0dG9uLCAuc29sdmVyLWNhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMWVtIGF1dG8gMCBhdXRvO1xufVxuXG4jc3Vkb2t1LXN0YXRzIHtcbiAgICBwYWRkaW5nOiAwIDEwZW0gMTBlbSAxMGVtO1xuICAgIG1hcmdpbjogMGVtIDFlbSAwIDFlbTtcblxuICBwLCBvbCB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVlbTtcbiAgfVxuXG4gIGgxLCBwLCBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgb2wge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbn0iLCIjbG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjRTZFNkZBO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzkzNzBEQjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAvKiBTYWZhcmkgKi9cbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuI2JvYXJkcy1jb250YWluZXIsXG4jc29sdmUtYnV0dG9uLFxuLnNvbHZlci1jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFlbSBhdXRvIDAgYXV0bztcbn1cbiNzdWRva3Utc3RhdHMge1xuICBwYWRkaW5nOiAwIDEwZW0gMTBlbSAxMGVtO1xuICBtYXJnaW46IDBlbSAxZW0gMCAxZW07XG59XG4jc3Vkb2t1LXN0YXRzIHAsXG4jc3Vkb2t1LXN0YXRzIG9sIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG59XG4jc3Vkb2t1LXN0YXRzIGgxLFxuI3N1ZG9rdS1zdGF0cyBwLFxuI3N1ZG9rdS1zdGF0cyBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiNzdWRva3Utc3RhdHMgb2wge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuI3N1ZG9rdS1zdGF0cyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sudoku',
            templateUrl: './sudoku.component.html',
            styleUrls: ['./sudoku.component.less']
          }]
        }], function () {
          return [{
            type: src_app_services_sudokusolver_service__WEBPACK_IMPORTED_MODULE_1__["SudokusolverService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tyK3":
    /*!*********************************************************!*\
      !*** ./src/app/components/truchet/truchet.component.ts ***!
      \*********************************************************/

    /*! exports provided: TruchetComponent */

    /***/
    function tyK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TruchetComponent", function () {
        return TruchetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TruchetComponent = /*#__PURE__*/function () {
        function TruchetComponent() {
          _classCallCheck(this, TruchetComponent);
        }

        _createClass(TruchetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateTruchet(50);
          }
        }, {
          key: "generateTruchet",
          value: function generateTruchet(radius) {
            var canvas = document.getElementById('myCanvas');
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'rgba(0, 0, 0, 0)';
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            var length = canvas.height;
            var r = radius;
            var angle = 0;

            for (var i = 0; i < length / (2 * r); i++) {
              for (var j = 0; j < length / (2 * r); j++) {
                if (Math.random() < 0.5) {
                  context.beginPath();
                  angle = 1.5 * Math.PI;
                  context.arc(2 * r * j, 2 * r * (i + 1), r, angle, angle + Math.PI / 2, false);
                  context.fill();
                  context.stroke();
                  context.beginPath();
                  angle = 0.5 * Math.PI;
                  context.arc(2 * r * (j + 1), 2 * r * i, r, angle, angle + Math.PI / 2, false);
                  context.fill();
                  context.stroke();
                } else {
                  context.beginPath();
                  angle = 0;
                  context.arc(2 * r * j, 2 * r * i, r, angle, angle + Math.PI / 2, false);
                  context.fill();
                  context.stroke();
                  context.beginPath();
                  angle = Math.PI;
                  context.arc(2 * r * (j + 1), 2 * r * (i + 1), r, angle, angle + Math.PI / 2, false);
                  context.fill();
                  context.stroke();
                }
              }
            }
          }
        }]);

        return TruchetComponent;
      }();

      TruchetComponent.ɵfac = function TruchetComponent_Factory(t) {
        return new (t || TruchetComponent)();
      };

      TruchetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TruchetComponent,
        selectors: [["app-truchet"]],
        decls: 20,
        vars: 0,
        consts: [["id", "myCanvas", "width", "500", "height", "500"], ["name", "boardLen", "id", "boardLen", 3, "change"], ["boardLen", ""], ["value", "250"], ["value", "125"], ["selected", "", "value", "50"], ["value", "25"], ["value", "10"], [3, "click"], ["id", "maze-stats", 1, "stats-desc"]],
        template: function TruchetComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TruchetComponent_Template_select_change_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.generateTruchet(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TruchetComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.generateTruchet(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Generate Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Truchet Tiles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Truchet tiles are a way to decorate and create patterns on a grid using square tiles. This one uses two tiles, each with 2 quarter circles at opposite corners. Each grid cell is randomly assigned one of these tiles, which creates different patterns. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#myCanvas[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  margin: 2em auto;\n  display: block;\n}\n.stats-desc[_ngcontent-%COMP%] {\n  padding: 0 10em 10em 10em;\n  margin: 0em 1em 0 1em;\n}\n.stats-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .stats-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  line-height: 1.75em;\n}\n.stats-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .stats-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .stats-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.stats-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.stats-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding: 0.1em;\n  width: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0bGFiL3NvbHZlcnMtZ2VuZXJhdG9ycy9zcmMvYXBwL2NvbXBvbmVudHMvdHJ1Y2hldC90cnVjaGV0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3RydWNoZXQvdHJ1Y2hldC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNBSjtBREZBOztFQUtJLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRFBBOzs7RUFVSSxrQkFBQTtBQ0VKO0FEWkE7RUFjSSxnQkFBQTtBQ0NKO0FEZkE7RUFrQkksb0JBQUE7QUNBSjtBRElBOztFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJ1Y2hldC90cnVjaGV0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI215Q2FudmFzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbi5zdGF0cy1kZXNjIHtcbiAgICBwYWRkaW5nOiAwIDEwZW0gMTBlbSAxMGVtO1xuICAgIG1hcmdpbjogMGVtIDFlbSAwIDFlbTtcblxuICBwLCBvbCB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVlbTtcbiAgfVxuXG4gIGgxLCBwLCBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgb2wge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbn1cblxuYnV0dG9uLCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICB3aWR0aDogMTVlbTtcbn0iLCIjbXlDYW52YXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3RhdHMtZGVzYyB7XG4gIHBhZGRpbmc6IDAgMTBlbSAxMGVtIDEwZW07XG4gIG1hcmdpbjogMGVtIDFlbSAwIDFlbTtcbn1cbi5zdGF0cy1kZXNjIHAsXG4uc3RhdHMtZGVzYyBvbCB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBsaW5lLWhlaWdodDogMS43NWVtO1xufVxuLnN0YXRzLWRlc2MgaDEsXG4uc3RhdHMtZGVzYyBwLFxuLnN0YXRzLWRlc2Mgb2wge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uc3RhdHMtZGVzYyBvbCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4uc3RhdHMtZGVzYyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMC4xZW07XG4gIHdpZHRoOiAxNWVtO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruchetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-truchet',
            templateUrl: './truchet.component.html',
            styleUrls: ['./truchet.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/sudoku/sudoku.component */
      "pHsO");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _components_mazes_mazes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/mazes/mazes.component */
      "KJCd");
      /* harmony import */


      var _components_truchet_truchet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/truchet/truchet.component */
      "tyK3");
      /* harmony import */


      var _components_sudoku_stats_sudoku_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/sudoku-stats/sudoku-stats.component */
      "kfJP");

      var routes = [{
        path: '',
        component: _components_mazes_mazes_component__WEBPACK_IMPORTED_MODULE_4__["MazesComponent"]
      }, {
        path: 'sudoku',
        component: _components_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_2__["SudokuComponent"]
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: 'mazes',
        component: _components_mazes_mazes_component__WEBPACK_IMPORTED_MODULE_4__["MazesComponent"]
      }, {
        path: 'truchet',
        component: _components_truchet_truchet_component__WEBPACK_IMPORTED_MODULE_5__["TruchetComponent"]
      }, {
        path: 'sudoku/stats',
        component: _components_sudoku_stats_sudoku_stats_component__WEBPACK_IMPORTED_MODULE_6__["SudokuStatsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xVYf":
    /*!*******************************************!*\
      !*** ./src/app/services/mazes.service.ts ***!
      \*******************************************/

    /*! exports provided: MazesService */

    /***/
    function xVYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MazesService", function () {
        return MazesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-type': 'application-json'
        }),
        params: {}
      };

      var MazesService = /*#__PURE__*/function () {
        function MazesService(http) {
          _classCallCheck(this, MazesService);

          this.http = http;
          this.host = 'https://solvegen-server.herokuapp.com';
        }

        _createClass(MazesService, [{
          key: "getMaze",
          value: function getMaze(size, type) {
            var path = '/maze';
            var query = '?size=' + size + '&type=' + type;
            return this.http.get(this.host + path + query);
          }
        }, {
          key: "testMazes",
          value: function testMazes() {
            var path = '/test';
            return this.http.get(this.host + path);
          }
        }]);

        return MazesService;
      }();

      MazesService.ɵfac = function MazesService_Factory(t) {
        return new (t || MazesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      MazesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MazesService,
        factory: MazesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MazesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map