_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    "+qE3": function (e, t, n) {
      "use strict";
      var r,
        i = "object" === typeof Reflect ? Reflect : null,
        o =
          i && "function" === typeof i.apply
            ? i.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      r =
        i && "function" === typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var s =
        Number.isNaN ||
        function (e) {
          return e !== e;
        };
      function a() {
        a.init.call(this);
      }
      (e.exports = a),
        (e.exports.once = function (e, t) {
          return new Promise(function (n, r) {
            function i() {
              void 0 !== o && e.removeListener("error", o),
                n([].slice.call(arguments));
            }
            var o;
            "error" !== t &&
              ((o = function (n) {
                e.removeListener(t, i), r(n);
              }),
              e.once("error", o)),
              e.once(t, i);
          });
        }),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var c = 10;
      function u(e) {
        if ("function" !== typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function l(e) {
        return void 0 === e._maxListeners
          ? a.defaultMaxListeners
          : e._maxListeners;
      }
      function p(e, t, n, r) {
        var i, o, s, a;
        if (
          (u(n),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = n), ++e._eventsCount;
        else if (
          ("function" === typeof s
            ? (s = o[t] = r ? [n, s] : [s, n])
            : r
            ? s.unshift(n)
            : s.push(n),
          (i = l(e)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = e),
            (c.type = t),
            (c.count = s.length),
            (a = c),
            console && console.warn && console.warn(a);
        }
        return e;
      }
      function f() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function d(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          i = f.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
      }
      function h(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? n
            ? [i.listener || i]
            : [i]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(i)
          : m(i, i.length);
      }
      function v(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" === typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          if ("number" !== typeof e || e < 0 || s(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          c = e;
        },
      }),
        (a.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function (e) {
          if ("number" !== typeof e || e < 0 || s(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (a.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (a.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var r = "error" === e,
            i = this._events;
          if (void 0 !== i) r = r && void 0 === i.error;
          else if (!r) return !1;
          if (r) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var a = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((a.context = s), a);
          }
          var c = i[e];
          if (void 0 === c) return !1;
          if ("function" === typeof c) o(c, this, t);
          else {
            var u = c.length,
              l = m(c, u);
            for (n = 0; n < u; ++n) o(l[n], this, t);
          }
          return !0;
        }),
        (a.prototype.addListener = function (e, t) {
          return p(this, e, t, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function (e, t) {
          return p(this, e, t, !0);
        }),
        (a.prototype.once = function (e, t) {
          return u(t), this.on(e, d(this, e, t)), this;
        }),
        (a.prototype.prependOnceListener = function (e, t) {
          return u(t), this.prependListener(e, d(this, e, t)), this;
        }),
        (a.prototype.removeListener = function (e, t) {
          var n, r, i, o, s;
          if ((u(t), void 0 === (r = this._events))) return this;
          if (void 0 === (n = r[e])) return this;
          if (n === t || n.listener === t)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e],
                r.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" !== typeof n) {
            for (i = -1, o = n.length - 1; o >= 0; o--)
              if (n[o] === t || n[o].listener === t) {
                (s = n[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, i),
              1 === n.length && (r[e] = n[0]),
              void 0 !== r.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function (e) {
          var t, n, r;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(n);
            for (r = 0; r < o.length; ++r)
              "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this;
        }),
        (a.prototype.listeners = function (e) {
          return h(this, e, !0);
        }),
        (a.prototype.rawListeners = function (e) {
          return h(this, e, !1);
        }),
        (a.listenerCount = function (e, t) {
          return "function" === typeof e.listenerCount
            ? e.listenerCount(t)
            : v.call(e, t);
        }),
        (a.prototype.listenerCount = v),
        (a.prototype.eventNames = function () {
          return this._eventsCount > 0 ? r(this._events) : [];
        });
    },
    0: function (e, t, n) {
      n("GcxT"), (e.exports = n("nOHt"));
    },
    "1TCz": function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.r(t);
      var i = n("1OyB"),
        o = n("vuIU"),
        s = n("JX7q"),
        a = n("Ji7U"),
        c = n("md7G"),
        u = n("foSv"),
        l = n("q1tI"),
        p = n.n(l),
        f = (n("6Fm8"), n("8Kt/")),
        d = n.n(f),
        h = n("YFqc"),
        v = n.n(h),
        m = n("nOHt"),
        y = n("z/o8"),
        g = p.a.createElement;
      var C = function (e) {
          var t = Object(m.useRouter)();

          return g(
            "a",
            {
              href: e.pageLink,
              "data-path": e.pageLink,
              onClick: function () {
                !(function (n) {
                  if ((n.preventDefault(), e.pageLink != t.pathname)) {
                    for (
                      var r = document.querySelectorAll(".mainNav a"), i = 0;
                      i < r.length;
                      i++
                    )
                      r[i].className = "";
                    (document.querySelector(
                      '.mainNav a[data-path="' + e.pageLink + '"]'
                    ).className = "selected"),
                      y.a.to(document.getElementById("sideNav"), 0.5, {
                        opacity: 0,
                      }),
                      y.a.to(document.querySelector(".page"), 0.5, {
                        opacity: 0,
                        onComplete: function () {
                          t.push(e.pageLink);
                        },
                      });
                  }
                })(event);
              },

              className: e.currentPageId == e.pageId ? "selected" : "",
            },
            e.title
          );
        },
        b = p.a.createElement;
      function w(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(u.a)(e);
          if (t) {
            var i = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var L = (function (e) {
          Object(a.a)(n, e);
          var t = w(n);
          function n() {
            return Object(i.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  return b(
                    "div",
                    { className: "container", id: "container" },
                    b(
                      d.a,
                      null,
                      b("title", null, "Nagib lakhdari"),
                      b("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5",
                      }),
                      b("script", {
                        src: "https://cdn.usefathom.com/script.js",
                        "data-site": "TQAXGDGJ",
                        "data-spa": "auto",
                        defer: !0,
                      })
                    ),
                    "index" == this.props.pageId
                      ? b("ul", { id: "sideNav" })
                      : null,
                    b(
                      "div",
                      {
                        className: "containerContent",
                        id: "containerContent",
                        "data-scroll-content": !0,
                      },
                      b(
                        "header",
                        { className: "header" },
                        b(
                          "div",
                          { className: "headerContent" },
                          b(
                            "div",
                            { className: "logo" },
                            b("a", { href: "./index.html" }, "Nagib Lakhdari")
                          ),
                          b(
                            "nav",
                            { className: "mainNav" },
                            b(C, {
                              title: "💻 Accueil",
                              currentPageId: this.props.pageId,
                              pageId: "accueil",
                              pageLink: "/",
                            }),
                            b(C, {
                              title: "📋 Projets",
                              currentPageId: this.props.pageId,
                              pageId: "projets",
                              pageLink: "/projets",
                            }),
                            b(C, {
                              title: "📢 Curriculum vitae",
                              currentPageId: this.props.pageId,
                              pageId: "curriculum",
                              pageLink: "/curriculum",
                            }),
                            b(C, {
                              title: "📩 Contact",
                              currentPageId: this.props.pageId,
                              pageId: "contact",
                              pageLink: "/contact",
                            })
                          )
                        )
                      ),
                      this.props.children,
                      b(
                        "footer",
                        { "data-page": this.props.pageId },
                        b("div", { className: "line" }),
                        b(
                          "div",
                          { className: "footerContent" },
                          b(
                            "div",
                            { className: "contact" },
                            b("h2", null, "N'hésitez pas à me contacter"),
                            b(
                              "a",
                              {
                                href: "mailto:nagib.lakhdari.pro@gmail.com",
                                className: "contact-cta",
                              },
                              "envoyer un mail"
                            )
                          ),
                          b(
                            "ul",
                            null,
                            b(
                              "li",
                              null,
                              b(
                                "a",
                                {
                                  href: "/",
                                  className:
                                    "accueil" == this.props.pageId
                                      ? "selected"
                                      : "",
                                },
                                "Accueil 💻"
                              )
                            ),
                            b(
                              "li",
                              null,
                              b(
                                "a",
                                {
                                  href: "/projets",
                                  className:
                                    "projets" == this.props.pageId
                                      ? "selected"
                                      : "",
                                },
                                "Projets 📋"
                              )
                            ),
                            b(
                              "li",
                              null,
                              b(
                                "a",
                                {
                                  href: "/curriculum",
                                  className:
                                    "curriculum" == this.props.pageId
                                      ? "selected"
                                      : "",
                                },
                                "Curriculum vitae 📢"
                              )
                            ),
                            b(
                              "li",
                              null,
                              b(
                                "a",
                                {
                                  href: "/contact",
                                  className:
                                    "contact" == this.props.pageId
                                      ? "selected"
                                      : "",
                                },
                                "Contact 📩"
                              )
                            )
                          )
                        )
                      )
                    ),
                    b("div", { className: "lightbox" }),
                    b(
                      "svg",
                      {
                        className: "cursor",
                        width: "280",
                        height: "280",
                        viewBox: "0 0 280 280",
                      },
                      b(
                        "defs",
                        null,
                        b(
                          "filter",
                          {
                            id: "filter-1",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            filterUnits: "objectBoundingBox",
                          },
                          b("feTurbulence", {
                            type: "fractalNoise",
                            baseFrequency: "0.02 0.15",
                            numOctaves: "3",
                            result: "warp",
                          }),
                          b("feDisplacementMap", {
                            xChannelSelector: "R",
                            yChannelSelector: "G",
                            scale: "0",
                            in: "SourceGraphic",
                            in2: "warp",
                          })
                        )
                      ),
                      b("circle", {
                        className: "cursor__inner",
                        cx: "140",
                        cy: "140",
                        r: "50",
                      })
                    ),
                    b("script", {
                      src: "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(p.a.Component),
        O = n("8Bbg"),
        x = n.n(O);
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function k(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return _(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return _(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? _(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var M = n("HuT5");
      function j(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(u.a)(e);
          if (t) {
            var i = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var S = (function (e) {
          Object(a.a)(n, e);
          var t = j(n);
          function n(e) {
            var r;
            Object(i.a)(this, n), (r = t.call(this));
            Object(M.a)();
            return (
              window.addEventListener("resize", function () {
                Object(M.a)();
              }),
              (r.docYScroll = Object(M.f)()),
              window.addEventListener("scroll", function () {
                r.docYScroll = Object(M.f)();
              }),
              (r.mouse = { x: 0, y: 0 }),
              window.addEventListener("mousemove", function (e) {
                return (r.mouse = Object(M.d)(e));
              }),
              (r.radius = 25),
              (r.hoverRadius = 30),
              (r.DOM = { el: e }),
              (r.DOM.el.style.opacity = 0),
              (r.DOM.circleInner = r.DOM.el.querySelector(".cursor__inner")),
              (r.filterId = "#filter-1"),
              (r.DOM.feDisplacementMap = document.querySelector(
                "".concat(r.filterId, " > feDisplacementMap")
              )),
              (r.primitiveValues = { scale: 0 }),
              r.createTimeline(),
              (r.bounds = r.DOM.el.getBoundingClientRect()),
              (r.renderedStyles = {
                tx: { previous: 0, current: 0, amt: 0.14 },
                ty: { previous: 0, current: 0, amt: 0.14 },
                radius: { previous: r.radius, current: r.radius, amt: 0.14 },
              }),
              r.listen(),
              (r.onMouseMoveEv = function () {
                (r.renderedStyles.tx.previous = r.renderedStyles.tx.current =
                  r.mouse.x - r.bounds.width / 2),
                  (r.renderedStyles.ty.previous = r.renderedStyles.ty.previous =
                    r.mouse.y - r.bounds.height / 2 - r.docYScroll),
                  y.b.to(r.DOM.el, {
                    duration: 0.9,
                    ease: "Power3.easeOut",
                    opacity: 1,
                  }),
                  requestAnimationFrame(function () {
                    return r.render();
                  }),
                  window.removeEventListener("mousemove", r.onMouseMoveEv);
              }),
              window.addEventListener("mousemove", r.onMouseMoveEv),
              r
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  for (var t in ((this.renderedStyles.tx.current =
                    this.mouse.x - this.bounds.width / 2),
                  (this.renderedStyles.ty.current =
                    this.mouse.y - this.bounds.height / 2),
                  this.renderedStyles))
                    this.renderedStyles[t].previous = Object(M.j)(
                      this.renderedStyles[t].previous,
                      this.renderedStyles[t].current,
                      this.renderedStyles[t].amt
                    );
                  (this.DOM.el.style.transform = "translateX("
                    .concat(this.renderedStyles.tx.previous, "px) translateY(")
                    .concat(this.renderedStyles.ty.previous, "px)")),
                    this.DOM.circleInner.setAttribute(
                      "r",
                      this.renderedStyles.radius.previous
                    ),
                    requestAnimationFrame(function () {
                      return e.render();
                    });
                },
              },
              {
                key: "createTimeline",
                value: function () {
                  var e = this;
                  this.tl = y.b
                    .timeline({
                      paused: !0,
                      onStart: function () {
                        e.DOM.circleInner.style.filter = "url(".concat(
                          e.filterId
                        );
                      },
                      onUpdate: function () {
                        e.DOM.feDisplacementMap.scale.baseVal =
                          e.primitiveValues.scale;
                      },
                      onComplete: function () {
                        e.DOM.circleInner.style.filter = "none";
                      },
                    })
                    .to(this.primitiveValues, {
                      duration: 0.1,
                      ease: "Expo.easeOut",
                      startAt: { scale: 0 },
                      scale: 60,
                    })
                    .to(this.primitiveValues, {
                      duration: 0.6,
                      ease: "Power3.easeOut",
                      scale: 0,
                    });
                },
              },
              {
                key: "enter",
                value: function () {
                  (this.renderedStyles.radius.current = this.hoverRadius),
                    this.tl.restart();
                },
              },
              {
                key: "leave",
                value: function () {
                  (this.renderedStyles.radius.current = this.radius),
                    this.tl.progress(1).kill();
                },
              },
              {
                key: "listen",
                value: function () {
                  var e = this;
                  this.on("enter", function () {
                    return e.enter();
                  }),
                    this.on("leave", function () {
                      return e.leave();
                    });
                },
              },
              {
                key: "bindEvents",
                value: function () {
                  var e = this;
                  k(document.querySelectorAll("a, li")).forEach(function (t) {
                    t.addEventListener("mouseenter", function () {
                      return e.emit("enter");
                    }),
                      t.addEventListener("mouseleave", function () {
                        return e.emit("leave");
                      });
                  });
                },
              },
            ]),
            n
          );
        })(n("+qE3").EventEmitter),
        N = p.a.createElement;
      function R(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(u.a)(e);
          if (t) {
            var i = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var I = (function (e) {
        Object(a.a)(n, e);
        var t = R(n);
        function n(e) {
          var r;
          return (
            Object(i.a)(this, n),
            ((r = t.call(this, e)).customCursor = null),
            (r.onRouteChangeComplete = r.onRouteChangeComplete.bind(
              Object(s.a)(r)
            )),
            r
          );
        }
        return (
          Object(o.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props,
                  t = (e.Component, e.pageProps, e.router);
                (this.customCursor = new S(document.querySelector(".cursor"))),
                  this.customCursor.bindEvents(),
                  t.events.on(
                    "routeChangeComplete",
                    this.onRouteChangeComplete
                  );
              },
            },
            {
              key: "onRouteChangeComplete",
              value: function () {
                null != this.customCursor && this.customCursor.bindEvents();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.props.router.events.off(
                  "routeChangeComplete",
                  this.onRouteChangeComplete
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.Component,
                  n = e.pageProps,
                  i = e.router,
                  o = "";
                switch (i.pathname) {
                  case "/":
                    o = "index";
                    break;
                  case "/playground":
                    o = "playground";
                    break;
                  case "./contact":
                    o = "contact";
                    break;
                }
                return N(L, { pageId: o }, N(t, r({}, n, { key: i.route })));
              },
            },
          ]),
          n
        );
      })(x.a);
      t.default = I;
    },
    "6Fm8": function (e, t, n) {},
    "8Bbg": function (e, t, n) {
      e.exports = n("B5Ud");
    },
    B5Ud: function (e, t, n) {
      "use strict";
      var r = n("o0o1"),
        i = n("lwsE"),
        o = n("W8MJ"),
        s = n("7W2i"),
        a = n("a1gu"),
        c = n("Nsbk"),
        u = n("yXPU");
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var i = c(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }
      var p = n("TqRt");
      (t.__esModule = !0),
        (t.Container = function (e) {
          0;
          return e.children;
        }),
        (t.createUrl = y),
        (t.default = void 0);
      var f = p(n("q1tI")),
        d = n("g/15");
      function h(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = u(
          r.mark(function e(t) {
            var n, i, o;
            return r.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.Component),
                      (i = t.ctx),
                      (e.next = 3),
                      (0, d.loadGetInitialProps)(n, i)
                    );
                  case 3:
                    return (o = e.sent), e.abrupt("return", { pageProps: o });
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      (t.AppInitialProps = d.AppInitialProps),
        (t.NextWebVitalsMetric = d.NextWebVitalsMetric);
      var m = (function (e) {
        s(n, e);
        var t = l(n);
        function n() {
          return i(this, n), t.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: "componentDidCatch",
              value: function (e, t) {
                throw e;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.router,
                  n = e.Component,
                  r = e.pageProps,
                  i = e.__N_SSG,
                  o = e.__N_SSP;
                return f.default.createElement(
                  n,
                  Object.assign({}, r, i || o ? {} : { url: y(t) })
                );
              },
            },
          ]),
          n
        );
      })(f.default.Component);
      function y(e) {
        var t = e.pathname,
          n = e.asPath,
          r = e.query;
        return {
          get query() {
            return r;
          },
          get pathname() {
            return t;
          },
          get asPath() {
            return n;
          },
          back: function () {
            e.back();
          },
          push: function (t, n) {
            return e.push(t, n);
          },
          pushTo: function (t, n) {
            var r = n ? t : "",
              i = n || t;
            return e.push(r, i);
          },
          replace: function (t, n) {
            return e.replace(t, n);
          },
          replaceTo: function (t, n) {
            var r = n ? t : "",
              i = n || t;
            return e.replace(r, i);
          },
        };
      }
      (t.default = m), (m.origGetInitialProps = h), (m.getInitialProps = h);
    },
    GcxT: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n("1TCz");
        },
      ]);
    },
  },
  [[0, 0, 1, 2, 3, 4]],
]);
