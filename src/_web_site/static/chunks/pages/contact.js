_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    RNiq: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, "default", function () {
          return x;
        });
      var i = o("1OyB"),
        a = o("vuIU"),
        n = o("JX7q"),
        r = o("Ji7U"),
        s = o("md7G"),
        c = o("foSv"),
        l = o("q1tI"),
        d = o.n(l),
        u = o("HuT5"),
        m = o("z/o8"),
        f = !1,
        h = 0,
        p = function (e) {
          for (var t = null, o = 0, i = 0; i < e.length; i++) {
            var a = e[i],
              n = a.getAttribute("data-item-id"),
              r = Object(u.b)(a);
            r > o && ((t = n), (o = r));
          }
          null != t &&
            y(
              document.querySelector(
                '#sideNav li[data-content-item-id="' + t + '"]'
              )
            );
        },
        g = function (e, t, o) {
          var i = document.createElement("li");
          (i.textContent = " "),
            t && ((i.className = "active"), (e -= 100)),
            i.setAttribute("data-scroll-to-top", e),
            i.setAttribute("data-content-item-id", o),
            m.a.set(i, { opacity: 0 }),
            sideNav.appendChild(i),
            m.a.fromTo(
              i,
              1,
              { opacity: 0, scale: 0, x: -100 },
              {
                opacity: 1,
                scale: 1,
                x: 0,
                ease: "elastic.out(1, 0.75)",
                delay: h,
              }
            ),
            (h += 0.1),
            i.addEventListener("click", function (e) {
              (f = !0),
                setTimeout(function () {
                  f = !1;
                }, 1e3);
              window.scrollTo(0, this.dataset.scrollToTop - 50), y(this);
            });
        },
        y = function (e) {
          if (null != e) {
            for (
              var t = document.querySelectorAll("#sideNav li"), o = 0;
              o < t.length;
              o++
            )
              t[o].className = "";
            e.className = "active";
          }
        },
        v = o("cmSt"),
        b = d.a.createElement;
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
          var o,
            i = Object(c.a)(e);
          if (t) {
            var a = Object(c.a)(this).constructor;
            o = Reflect.construct(i, arguments, a);
          } else o = i.apply(this, arguments);
          return Object(s.a)(this, o);
        };
      }
      var C = (function (e) {
          Object(r.a)(o, e);
          var t = w(o);
          function o(e) {
            return Object(i.a)(this, o), t.call(this, e);
          }
          return (
            Object(a.a)(o, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  return b(
                    "main",
                    null,
                    b(
                      "div",
                      { className: "page-content page-about content-item" },
                      b(
                        "div",
                        { className: "left" },
                        b("h2", null, "N'hésitez pas, allez-y \ud83d\udc4b"),
                        b(
                          "p",
                          null,
                          "Si vous êtes à la recherche d'un jeune apprenti talentueux, avide d'acquérir des compétences et de s'épanouir, ne cherchez pas plus loin."
                        ),
                        b(
                          "p",
                          null,
                          "Vous pourrez me retrouver sur linkedin, juste",
                          b(
                            "a",
                            {
                              href: "https://www.linkedin.com/in/nagibl/",
                              className: "linkedin",
                            },
                            " ici 👈"
                          )
                        ),
                        b(
                          "p",
                          null,
                          "Plus de précision à propos de mes projets sur github, c'est par ",
                          b(
                            "a",
                            {
                              href: "https://github.com/Naywvi",
                              className: "linkedin",
                            },
                            "là 👈"
                          )
                        )
                      ),
                      b(
                        "div",
                        { className: "right" },
                        b("h2", null, "Me contacter 👇"),
                        b(
                          "a",
                          {
                            href: "mailto:nagib.lakhdari.pro@gmail.com",
                            className: "contact-cta",
                          },
                          "envoyer un mail"
                        )
                      )
                    )
                    // b(
                    //   "div",
                    //   { className: "content-item work-item" },
                    //   b(
                    //     "div",
                    //     { className: "work-item-title" },
                    //     "Les logiciels "
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "work-item-description" },
                    //     "Follow the instructions one at a time, if you have a problem contact support"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "full" },
                    //     b("img", { src: "./img/Step.png" })
                    //   )
                    // )
                    //Card-----------------------
                    // b("divaContainer", { className: "divaContainer" },
                    //     b("divaContainerTwo", { className: "container-presentation" },
                    //         //> DDOS CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://cdn-icons-png.flaticon.com/512/1705/1705839.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-red" }, b("strong", null, "DDOS"),),
                    //                 b("br", null, null),
                    //                 b("strong", null, "Exclu"),
                    //                 b("span", { className: "title-presentation" }, " DDOS Attack"),
                    //                 b("br", null, null),
                    //                 b("p", null, "You can DDOS any IP from discord. This is your responsibility, we do not encourage anyone to do this."),

                    //             ),
                    //         ),
                    //         //< DDOS CARD

                    //         //> ANIMATION CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "./img/animation.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-yellow" }, b("strong", null, "Animations"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "If you want to have fun, we have what you need !"),
                    //                 b("br", null, null),
                    //                 b("p", null, "Send embed text, animated text or even animated embed images generated automatically."),

                    //             ),
                    //         ),
                    //         //< ANIMATION CARD

                    //         //> SPY CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://cdn-icons-png.flaticon.com/512/2196/2196220.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-purple" }, b("strong", null, "Private commands"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "For the most mischievous among you."),
                    //                 b("br", null, null),
                    //                 b("p", null, "Get info on IP's or Token ( you can get the personal phone number of someone by doing that )."),

                    //             ),
                    //         ),
                    //         //< SPY CARD

                    //         //> ADMIN COMMAND CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://cdn-icons-png.flaticon.com/512/4668/4668814.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-reddark" }, b("strong", null, "Powerful admin commands"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "Managed or destroy a server ? It's within our capabilities."),
                    //                 b("br", null, null),
                    //                 b("p", null, "You can ban/kick (all), create roles/channels, delete roles/channels. You can also rename everyone in a vocal channel with commands. And more .."),

                    //             ),
                    //         ),
                    //         //< ADMIN COMMAND CARD

                    //         //> BOT CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://discord.bots.gg/img/logo_transparent_coloured.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-discord" }, b("strong", null, "Selfbot revolutionary"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "Be a bot !"),
                    //                 b("br", null, null),
                    //                 b("p", null, "Powerful controls are available to you. Send a message to an entire server. Flood/Spam channel in a server. And more .."),

                    //             ),
                    //         ),
                    //         //< BOT CARD

                    //         //> SECURITY CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://cdn-icons-png.flaticon.com/512/2345/2345350.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-teal" }, b("strong", null, "Clean and Purge"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "Anonymity and security are our golden words."),
                    //                 b("br", null, null),
                    //                 b("p", null, "After using each command your messages are deleted. This allows you to keep secret what you have sent."),

                    //             ),
                    //         ),
                    //         //< SECURITY CARD

                    //         //> BACKUP CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://cdn.iconscout.com/icon/free/png-256/data-backup-14-1141018.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-grey" }, b("strong", null, "BACKUPS"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "A backup just for you.k"),
                    //                 b("br", null, null),
                    //                 b("p", null, "The client automùaticcaly saves your friends discord accounts and servers. If you lost your account or have been hacked, our support is here to help you !"),

                    //             ),
                    //         ),
                    //         //< BACKUP CARD

                    //         //> SUPPORT CARD
                    //         b("diva", { className: "card-presentation" },
                    //             b("div", { className: "card-header" },
                    //                 b("img", { src: "https://cdn1.iconfinder.com/data/icons/car-parts-and-service/512/Technician_Man-512.png" }),
                    //             ),

                    //             b(
                    //                 "diva",
                    //                 { className: "card-body-presentation" },

                    //                 b("span", { className: "tag tag-green" }, b("strong", null, "SUPPORT"),),
                    //                 b("br", null, null),
                    //                 b("span", { className: "title-presentation" }, "A present and available staff"),
                    //                 b("br", null, null),
                    //                 b("p", null, "We are at your disposal, and ready to solve any problems related to our services. Contact us by email or discord."),

                    //             ),
                    //         ),
                    //     ),
                    //     //< SUPPORT CARD
                    // ),
                    //Card-----------------------b("",{},"")
                    // b("p", null, null),
                    // b("p", null, null),
                    // b("p", null, null),
                    // b("divaContainer2", { className: "divaContainer" },
                    //     b("divaContainerTwo", { className: "container-presentation" },

                    //         //> Big card 01
                    //         b("diva", { className: "card2" },
                    //             b("br", null, null),
                    //             b("span", { className: "tag tag-greenH" }, b("strong", { className: "fts" }, "High performance")),
                    //             b("p", { className: "saut" }, "You won't find one like this. Spooky bot is fast efficient and beats all competition. You can use it everywhere, desktop computer, laptop or phone. "),

                    //             b("span", { className: "tag tag-beauty" }, b("strong", { className: "fts" }, "Advanced systemn")),
                    //             b("p", { className: "saut" }, "You will have several different grades available. Whether it's for life or /month is up to you. The first 12 hours are free for everyone. Go down below to have all the information and grades available."),

                    //             b("span", { className: "tag tag-jsplu" }, b("strong", { className: "fts" }, "All is good")),
                    //             b("p", { className: "saut" }, "Undetectable on discord, you won't be banned."),
                    //         ),
                    //         //< Big card 01

                    //         //> Big card 02
                    //         b("diva", { className: "card2" },
                    //             b("br", null, null),
                    //             b("span", { className: "tag tag-jsp" }, b("strong", { className: "fts" }, "Your information")),
                    //             b("p", { className: "saut" }, "Your information is secure and encrypted. Neither we nor you will be able to read them."),

                    //             b("span", { className: "tag tag-didi" }, b("strong", { className: "fts" }, "Have fun")),
                    //             b("p", { className: "saut" }, "And above all, don't forget to have fun."),

                    //             b("span", { className: "tag tag-didijsplufrr" }, b("strong", { className: "fts" }, "Discord")),
                    //             b("p", { className: "saut" }, b("a", { href:"https://discord.gg/kbX8jvZPGS", className:"ds-spooky"},"Join the Spooky club discuss directly with the staff or the members of this largefamily.")),
                    //         ),
                    //         //< Big card 02
                    //     ),
                    // ),
                    // b(
                    //   "div",
                    //   { className: "content-item work-item" },
                    //   b(
                    //     "div",
                    //     { className: "work-item-title" },
                    //     "Spooky Basic"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "work-item-description" },
                    //     "The cutest scary skeleton"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "full" },
                    //     b("img", { src: "/img/Spooky-Basic-hero.png" })
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "grid" },
                    //     b(
                    //       "div",
                    //       { className: "card" },
                    //       b("img", { src: "/img/Spooky-Basic-commande01.png" })
                    //     ),
                    //     b(
                    //       "div",
                    //       { className: "card" },
                    //       b("img", { src: "/img/Spooky-Basic-commande01" })
                    //     )
                    //   )
                    // ),
                    // b(
                    //   "div",
                    //   { className: "content-item work-item" },
                    //   b(
                    //     "div",
                    //     { className: "work-item-title" },
                    //     "Spooky VIP 💎"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "work-item-description" },
                    //     "Becomes fashionable and frighteningly powerful"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "full" },
                    //     b("img", { src: "/img/Spooky-VIP-hero.png" })
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "grid" },
                    //     b(
                    //       "div",
                    //       { className: "card" },
                    //       b("img", { src: "/img/Spooky-VIP-commande01.png" })
                    //     ),
                    //     b(
                    //       "div",
                    //       { className: "card" },
                    //       b("img", { src: "/img/Spooky-VIP-commande02.png" })
                    //     )
                    //   )
                    // ),
                    // b("div", b("div", { className: "full" })),
                    // b(
                    //   "div",
                    //   { className: "content-item work-item" },
                    //   b(
                    //     "div",
                    //     { className: "work-item-title" },
                    //     "🎃Spooky Premium💀"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "work-item-description" },
                    //     "Reach the top and have access to all the commands, become a king"
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "full" },
                    //     b("img", { src: "/img/Spooky-Premium-hero.png" })
                    //   ),
                    //   b(
                    //     "div",
                    //     { className: "grid" },
                    //     b(
                    //       "div",
                    //       { className: "card" },
                    //       b("img", {
                    //         src: "/img/Spooky-Premium-commande01.png",
                    //       })
                    //     ),
                    //     b(
                    //       "div",
                    //       { className: "card" },
                    //       b("img", {
                    //         src: "/img/Spooky-Premium-commande02.png",
                    //       })
                    //     )
                    //   )
                    // ),
                  );
                },
              },
            ]),
            o
          );
        })(d.a.Component),
        j = o("pc+1"),
        k = o("yMCV"),
        O = o("veun"),
        L = d.a.createElement;
      function N(e) {
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
          var o,
            i = Object(c.a)(e);
          if (t) {
            var a = Object(c.a)(this).constructor;
            o = Reflect.construct(i, arguments, a);
          } else o = i.apply(this, arguments);
          return Object(s.a)(this, o);
        };
      }
      function T() {
        var e = document.getElementById("fakeMouseCursor");
        if (null != e) {
          var t = new j.d();
          t.to(e, {
            left: function () {
              return Object(u.g)(e);
            },
            top: function () {
              return Object(u.h)();
            },
            duration: 3,
            ease: j.b.easeOut,
            repeat: -1,
            delay: 1,
            repeatDelay: 4,
            repeatRefresh: !0,
          }),
            t.play();
        }
      }
      function S(e) {
        var t = document.getElementById("fakeMouseCursorArrow");
        m.a.fromTo(
          t,
          1,
          { scale: 0.9, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            delay: 0,
            ease: "elastic.out(1, 0.75)",
            transformOrigin: "0% 0%",
          }
        ),
          m.a.fromTo(
            e,
            2,
            { scale: 0.95 },
            { scale: 1, opacity: 1, ease: "elastic.out(1, 0.75)" }
          );
      }
      function F() {
        var e = document.getElementById("fakeMouseCursor"),
          t = document.getElementById("testObject"),
          o = document.getElementById("testObject2"),
          i = document.querySelector(".header");
        if (null != t && null != o) {
          var a = t.offsetWidth,
            n = t.offsetHeight,
            r = o.offsetWidth,
            s = o.offsetHeight,
            c = window.innerWidth,
            l = i.offsetHeight,
            d = (Object(u.k)(), Object(u.c)()),
            m = 325,
            f = 375,
            h = 250;
          "medium" == d
            ? ((m = 225), (f = 250), (h = 60))
            : "small" == d && ((m = 165), (f = 190), (h = 40));
          var p = { left: c / 2, top: -(n + l) },
            g = { left: c / 2 - a - h, top: 300 },
            y = { left: c / 2, top: -(s + l) },
            v = { left: c / 2 + h, top: 300 },
            b = -15,
            w = 0,
            C = 20,
            j = 0;
          return {
            fakeCursor: e,
            testObject1: t,
            testObject2: o,
            object1From: p,
            object1To: g,
            object2From: y,
            object2To: v,
            object1FakeCursorFromPosition: {
              left: p.left + a / 2 - b,
              top: p.top + n / 2 - w,
            },
            object1FakeCursorToPosition: {
              left: g.left + a / 2 - b,
              top: g.top + n / 2 - w,
            },
            object2FakeCursorFromPosition: {
              left: y.left + r / 2 - C,
              top: y.top + s / 2 - j,
            },
            object2FakeCursorToPosition: {
              left: v.left + r / 2 - C,
              top: v.top + s / 2 - j,
            },
          };
        }
      }
      function H() {
        var e = F();
        null != e &&
          (m.a.set(e.testObject1, {
            left: e.object1To.left,
            top: e.object1To.top,
          }),
          m.a.set(e.testObject2, {
            left: e.object2To.left,
            top: e.object2To.top,
          }));
      }
      var x = (function (e) {
        Object(r.a)(o, e);
        var t = N(o);
        function o(e) {
          var a;
          return (
            Object(i.a)(this, o),
            ((a = t.call(this, e)).state = {
              elementsToPreload: ".movableObject, .hero",
            }),
            (a.smoothScroller = new O.a()),
            (a.loadingCompleted = a.loadingCompleted.bind(Object(n.a)(a))),
            (a.lightBoxOriginalImageBounds = null),
            (a.openLightBoxImage = a.openLightBoxImage.bind(Object(n.a)(a))),
            (a.closeLightboxImage = a.closeLightboxImage.bind(Object(n.a)(a))),
            (a.getLightBoxFullscreenImageDimensions =
              a.getLightBoxFullscreenImageDimensions.bind(Object(n.a)(a))),
            a
          );
        }
        return (
          Object(a.a)(o, [
            { key: "componentDidMount", value: function () {} },
            {
              key: "componentWillUnmount",
              value: function () {
                this.smoothScroller.destroy(),
                  window.removeEventListener("resize", Object(u.m)(H, 10));
              },
            },
            {
              key: "loadingCompleted",
              value: function () {
                this.showElements();
              },
            },
            {
              key: "showElements",
              value: function () {
                var e = Object(u.k)(),
                  t = 0.1,
                  o = document.querySelector(".hero"),
                  i = document.querySelector(".title"),
                  a = document.querySelector(".subtitle");
                m.a.fromTo(
                  o,
                  1,
                  { opacity: 0, y: 100 },
                  {
                    opacity: 1,
                    y: 0,
                    delay: t,
                    ease: "elastic.out(1, 0.75)",
                    onComplete: function () {
                      !(function (e) {
                        var t = F();
                        if (null != t && "undefined" != typeof t.fakeCursor) {
                          m.a.set(t.fakeCursor, {
                            left: t.object1FakeCursorFromPosition.left,
                            top: t.object1FakeCursorFromPosition.top,
                            opacity: 1,
                          }),
                            m.a.set(t.testObject1, {
                              left: t.object1From.left,
                              top: t.object1From.top,
                              opacity: 0.5,
                            }),
                            m.a.set(t.testObject2, {
                              left: t.object2From.left,
                              top: t.object2From.top,
                              opacity: 0.5,
                            });
                          var o = new j.d({ repeat: 0, repeatDelay: 0 });
                          o.add("firstObject"),
                            o.to(
                              t.fakeCursor,
                              {
                                duration: 1,
                                left: t.object1FakeCursorToPosition.left,
                                top: t.object1FakeCursorToPosition.top,
                                delay: e,
                                ease: j.b.easeOut,
                              },
                              "firstObject"
                            ),
                            o.to(
                              t.testObject1,
                              {
                                duration: 1,
                                left: t.object1To.left,
                                top: t.object1To.top,
                                delay: e,
                                ease: j.b.easeOut,
                              },
                              "firstObject"
                            ),
                            o.call(S, [t.testObject1]),
                            o.to(t.fakeCursor, {
                              duration: 1,
                              left: t.object2FakeCursorFromPosition.left,
                              top: t.object2FakeCursorFromPosition.top,
                              delay: 0,
                              ease: j.b.easeOut,
                            }),
                            o.add("secondObject"),
                            o.to(
                              t.fakeCursor,
                              {
                                duration: 1,
                                left: t.object2FakeCursorToPosition.left,
                                top: t.object2FakeCursorToPosition.top,
                                delay: 0,
                                ease: j.b.easeOut,
                              },
                              "secondObject"
                            ),
                            o.to(
                              t.testObject2,
                              {
                                duration: 1,
                                left: t.object2To.left,
                                top: t.object2To.top,
                                delay: 0,
                                ease: j.b.easeOut,
                              },
                              "secondObject"
                            ),
                            o.call(S, [t.testObject2]),
                            o.call(T),
                            o.eventCallback("onComplete", function () {
                              window.addEventListener(
                                "resize",
                                Object(u.m)(H, 10)
                              ),
                                m.a.fromTo(
                                  t.testObject1,
                                  2,
                                  { y: 0 },
                                  { y: -10, ease: "none", yoyo: !0, repeat: -1 }
                                ),
                                m.a.fromTo(
                                  t.testObject2,
                                  2,
                                  { y: 0 },
                                  {
                                    y: -10,
                                    ease: "none",
                                    delay: 1,
                                    yoyo: !0,
                                    repeat: -1,
                                  }
                                );
                            }),
                            o.play();
                        }
                      })(0);
                    },
                  }
                ),
                  m.a.fromTo(
                    i,
                    1,
                    { opacity: 0, y: 100 },
                    {
                      opacity: 1,
                      y: 0,
                      delay: t + 0.15,
                      ease: "elastic.out(1, 0.75)",
                    }
                  ),
                  m.a.fromTo(
                    a,
                    1,
                    { opacity: 0, y: 100 },
                    {
                      opacity: 1,
                      y: 0,
                      delay: t + 0.2,
                      ease: "elastic.out(1, 0.75)",
                      onComplete: function () {},
                    }
                  );
                var n = 0.5;
                e && (n = 0), Object(k.a)(n);
                var r = this;
                if (0 == e) {
                  t = t + 1.2;
                  setTimeout(function () {
                    !(function () {
                      h = 0;
                      var e = document.getElementById("sideNav");
                      if (null != e) {
                        m.a.set(e, { opacity: 1 }),
                          (e.innerHTML = ""),
                          (e.className = "visible");
                        for (
                          var t = document.querySelectorAll(".content-item"),
                            o = 0;
                          o < t.length;
                          o++
                        ) {
                          var i = t[o],
                            a = Object(u.e)(i),
                            n = Object(u.i)();
                          i.setAttribute("data-item-id", n), g(a, 0 == o, n);
                        }
                        window.addEventListener(
                          "scroll",
                          Object(u.m)(function () {
                            f || p(t);
                          }, 100)
                        ),
                          Object(u.l)(function () {
                            if (0 == Object(u.f)()) {
                              var e = t[0].getAttribute("data-item-id");
                              y(
                                document.querySelector(
                                  '#sideNav li[data-content-item-id="' +
                                    e +
                                    '"]'
                                )
                              );
                            } else p(t);
                          });
                      }
                    })(),
                      r.smoothScroller.init(),
                      r.showScrollIndicator();
                  }, 1e3 * t);
                }
                setTimeout(function () {
                  r.enableLightbox();
                }, 2e3);
              },
            },
            {
              key: "showScrollIndicator",
              value: function () {
                var e = document.querySelector(".scrollIndicator");
                null != e &&
                  (window.innerHeight > 1200 ||
                    (m.a.set(e, { top: window.innerHeight - 160 }),
                    m.a.fromTo(
                      e,
                      2.5,
                      { y: -100, opacity: 0 },
                      {
                        y: 0,
                        opacity: 1,
                        ease: "elastic.out(1, 0.75)",
                        yoyo: !1,
                        repeatDelay: 0.5,
                        repeat: -1,
                      }
                    ),
                    e.addEventListener("click", function (e) {
                      window.scrollTo(0, window.innerHeight);
                    })));
              },
            },
            {
              key: "enableLightbox",
              value: function () {
                for (
                  var e = document.querySelector(".lightbox"),
                    t = document.querySelector(".lightboxImage"),
                    o = document.querySelectorAll(".work-item img"),
                    i = this,
                    a = 0;
                  a < o.length;
                  a++
                ) {
                  o[a].addEventListener("click", function (o) {
                    i.openLightBoxImage(e, t, this);
                  });
                }
                e.addEventListener("click", function (t) {
                  i.closeLightboxImage(e);
                });
              },
            },
            {
              key: "closeLightboxImage",
              value: function (e) {
                if (null != this.lightBoxOriginalImageBounds) {
                  var t = document.querySelector(".lightboxImage"),
                    o = this.lightBoxOriginalImageBounds;
                  m.a.to(t, 0.3, {
                    left: o.left,
                    top: o.top,
                    height: o.height,
                    width: o.width,
                    ease: j.b.easeOut,
                    onComplete: function () {
                      t.remove();
                    },
                  });
                }
                m.a.fromTo(
                  e,
                  0.2,
                  { opacity: 1 },
                  {
                    opacity: 0,
                    delay: 0.2,
                    ease: j.b.easeOut,
                    onComplete: function () {
                      m.a.set(e, { display: "none" });
                    },
                  }
                );
              },
            },
            {
              key: "openLightBoxImage",
              value: function (e, t, o) {
                m.a.set(e, { display: "inline" }),
                  m.a.fromTo(
                    e,
                    0.2,
                    { opacity: 0 },
                    { opacity: 1, ease: j.b.easeOut }
                  );
                var i = o.getBoundingClientRect();
                (this.lightBoxOriginalImageBounds = i),
                  m.a.set(t, {
                    top: i.top,
                    left: i.left,
                    width: i.width,
                    height: i.height,
                  });
                var a = o.cloneNode(!0);
                (a.className = "lightboxImage"),
                  (e.innerHTML = ""),
                  m.a.set(a, {
                    top: i.top,
                    left: i.left,
                    width: i.width,
                    height: i.height,
                  }),
                  e.appendChild(a);
                var n = this.getLightBoxFullscreenImageDimensions(i);
                m.a.to(a, 0.3, {
                  left: n.left,
                  top: n.top,
                  height: n.height,
                  width: n.width,
                  ease: j.b.easeOut,
                });
              },
            },
            {
              key: "getLightBoxFullscreenImageDimensions",
              value: function (e) {
                var t,
                  o,
                  i,
                  a = document.documentElement.clientWidth,
                  n = document.documentElement.clientHeight;
                return n > a
                  ? {
                      left: (t = 12),
                      top:
                        (n - (o = (i = a - 2 * t) * (e.height / e.width))) / 2,
                      width: i,
                      height: o,
                    }
                  : {
                      left:
                        (a -
                          (i = (o = n - 2 * (t = 25)) / (e.height / e.width))) /
                        2,
                      top: t,
                      width: i,
                      height: o,
                    };
              },
            },
            {
              key: "render",
              value: function () {
                return L(
                  "div",
                  { className: "page" },
                  L(C, null),
                  // L(
                  //   "div",
                  //   { className: "scrollIndicator" },
                  //   L(
                  //     "svg",
                  //     {
                  //       width: "40",
                  //       height: "40",
                  //       viewBox: "0 0 40 40",
                  //       fill: "none",
                  //       xmlns: "http://www.w3.org/2000/svg",
                  //     },
                  //     L("circle", {
                  //       opacity: "0.25",
                  //       cx: "20",
                  //       cy: "20",
                  //       r: "19",
                  //       stroke: "white",
                  //       strokeWidth: "2",
                  //     }),
                  //     L("path", {
                  //       d: "M20 25C19.669 25 19.338 24.8778 19.0859 24.6345L13 18.7636L14.8282 17L20 21.9891L25.1718 17L27 18.7636L20.9141 24.6345C20.662 24.8778 20.331 25 20 25Z",
                  //       fill: "#FF4A3F",
                  //     })
                  //   )
                  // ),
                  L(v.a, {
                    className: "loader",
                    elementsToPreload: this.state.elementsToPreload,
                    loadingCompletedCallback: this.loadingCompleted,
                  })
                  // L("img", {
                  //   id: "testObject",
                  //   src: "/img/object_01.png",
                  //   className: "movableObject",
                  // }),
                  // L("img", {
                  //   id: "testObject2",
                  //   src: "/img/object_02.png",
                  //   className: "movableObject",
                  // }),
                  // L(
                  //   "div",
                  //   { className: "content-item hero" },
                  //   L("h1", { className: "title" }, "Nagib Lakhdari 🙋‍♂️"),
                  //   L(
                  //     "p",
                  //     { className: "subtitle" },
                  //     "Apprenti développeur full stack"
                  //   )
                  // ),
                  // L(
                  //   "svg",
                  //   {
                  //     id: "fakeMouseCursor",
                  //     width: "95",
                  //     height: "50",
                  //     viewBox: "0 0 95 50",
                  //     fill: "none",
                  //     xmlns: "http://www.w3.org/2000/svg",
                  //   },
                  //   L("path", {
                  //     id: "fakeMouseCursorArrow",
                  //     d: "M8.73482 11.1848C8.33635 9.69768 9.69717 8.33685 11.1843 8.73533L22.1039 11.6612C24.0377 12.1794 24.095 14.9024 22.1847 15.5015L18.0937 16.7843C17.469 16.9802 16.9797 17.4695 16.7838 18.0942L15.5009 22.1852C14.9019 24.0955 12.1789 24.0382 11.6607 22.1044L8.73482 11.1848Z",
                  //     fill: "white",
                  //   })
                  // )
                );
              },
            },
          ]),
          o
        );
      })(d.a.Component);
    },
    cmSt: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return h;
      });
      var i = o("1OyB"),
        a = o("vuIU"),
        n = o("Ji7U"),
        r = o("md7G"),
        s = o("foSv"),
        c = o("q1tI"),
        l = o.n(c),
        d = o("z/o8"),
        u = o("pc+1"),
        m = l.a.createElement;
      function f(e) {
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
          var o,
            i = Object(s.a)(e);
          if (t) {
            var a = Object(s.a)(this).constructor;
            o = Reflect.construct(i, arguments, a);
          } else o = i.apply(this, arguments);
          return Object(r.a)(this, o);
        };
      }
      var h = (function (e) {
        Object(n.a)(o, e);
        var t = f(o);
        function o(e) {
          var a;
          return (
            Object(i.a)(this, o),
            ((a = t.call(this, e)).state = {
              isLoading: !0,
              loadingPercentage: 0,
              elementsToPreload: e.elementsToPreload,
              loadingCompletedCallback: e.loadingCompletedCallback,
            }),
            a
          );
        }
        return (
          Object(a.a)(o, [
            {
              key: "componentDidMount",
              value: function () {
                d.a.set(document.querySelector(".containerContent"), {
                  opacity: 1,
                });
                var e = this,
                  t = u.b.easeOut;
                d.a.fromTo(
                  document.querySelector(".loaderTitle"),
                  0.2,
                  { opacity: 0, y: 10 },
                  { opacity: 1, y: 0, ease: t }
                ),
                  d.a.fromTo(
                    document.querySelector(".loaderPercentage"),
                    0.2,
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, delay: 0.1, ease: t }
                  ),
                  d.a.fromTo(
                    document.querySelector(".loaderLineProgress"),
                    0.2,
                    { opacity: 0, y: 10 },
                    {
                      opacity: 1,
                      y: 0,
                      delay: 0.2,
                      ease: t,
                      onComplete: function () {
                        e.startLoader();
                      },
                    }
                  );
              },
            },
            {
              key: "startLoader",
              value: function () {
                document.querySelector("body").classList.add("loading");
                var e = this;
                if (null == this.state.elementsToPreload)
                  return (
                    e.setState({ loadingPercentage: 100 }),
                    d.a.to(document.querySelector(".loaderLineProgress"), 0.3, {
                      width: 100,
                      ease: u.b.easeOut,
                    }),
                    void setTimeout(function () {
                      e.finishLoader();
                    }, 500)
                  );
                var t = document.querySelectorAll(this.state.elementsToPreload),
                  o = imagesLoaded(t, { background: !0 }, function (e) {});
                o.on("progress", function (t, o) {
                  var i = Math.ceil(
                    (t.progressedCount / t.images.length) * 100
                  );
                  e.setState({ loadingPercentage: i }),
                    d.a.to(document.querySelector(".loaderLineProgress"), 0.3, {
                      width: i,
                      ease: u.b.easeOut,
                    });
                }),
                  o.on("done", function (t) {
                    e.finishLoader();
                  });
              },
            },
            {
              key: "finishLoader",
              value: function () {
                var e = this,
                  t = document.querySelector(".loaderContent");
                d.a.fromTo(
                  t,
                  0.5,
                  { opacity: 1 },
                  {
                    opacity: 0,
                    ease: u.b.easeOut,
                    onComplete: function () {
                      e.setState({ isLoading: !1 }),
                        e.state.loadingCompletedCallback(),
                        document
                          .querySelector("body")
                          .classList.remove("loading");
                    },
                  }
                );
              },
            },
            {
              key: "render",
              value: function () {
                return this.state.isLoading
                  ? m(
                      "div",
                      { className: "loader" },
                      m(
                        "div",
                        { className: "loaderContent" },
                        m("div", { className: "loaderTitle" }, "Loading"),
                        m(
                          "div",
                          { className: "loaderPercentage" },
                          this.state.loadingPercentage
                        ),
                        m(
                          "div",
                          { className: "loaderLine" },
                          m("span", { className: "loaderLineProgress" })
                        )
                      )
                    )
                  : null;
              },
            },
          ]),
          o
        );
      })(l.a.Component);
    },
    veun: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return n;
      });
      var i = o("1OyB"),
        a = o("vuIU"),
        n = (function () {
          function e() {
            Object(i.a)(this, e);
          }
          return (
            Object(a.a)(e, [
              {
                key: "bindMethods",
                value: function () {
                  var e = this;
                  ["scroll", "run", "resize"].forEach(function (t) {
                    return (e[t] = e[t].bind(e));
                  });
                },
              },
              {
                key: "setStyles",
                value: function () {
                  Object.assign(this.dom.el.style, {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                  });
                },
              },
              {
                key: "removeStyles",
                value: function () {
                  null != this.dom &&
                    Object.assign(this.dom.el.style, {
                      position: "static",
                      height: "auto",
                      width: "auto",
                    });
                },
              },
              {
                key: "setHeight",
                value: function () {
                  document.body.style.height = "".concat(
                    this.dom.content.getBoundingClientRect().height,
                    "px"
                  );
                },
              },
              {
                key: "resize",
                value: function () {
                  this.setHeight(), this.scroll();
                },
              },
              {
                key: "preload",
                value: function () {
                  var e = this;
                  console.log("preload work items"),
                    imagesLoaded(
                      this.dom.content,
                      { background: !0 },
                      function (t) {
                        e.setHeight();
                      }
                    );
                },
              },
              {
                key: "scroll",
                value: function () {
                  this.data.current = window.scrollY;
                },
              },
              {
                key: "run",
                value: function () {
                  (this.data.last +=
                    (this.data.current - this.data.last) * this.data.ease),
                    (this.data.rounded =
                      Math.round(100 * this.data.last) / 100);
                  var e =
                    7.5 *
                    +(
                      (this.data.current - this.data.rounded) /
                      this.config.width
                    );
                  (this.dom.content.style.transform = "translate3d(0, -"
                    .concat(this.data.rounded, "px, 0) skewY(")
                    .concat(e, "deg)")),
                    this.requestAnimationFrame();
                },
              },
              {
                key: "on",
                value: function () {
                  this.setStyles(),
                    this.setHeight(),
                    this.addEvents(),
                    this.requestAnimationFrame();
                },
              },
              {
                key: "off",
                value: function () {
                  this.cancelAnimationFrame(), this.removeEvents();
                },
              },
              {
                key: "requestAnimationFrame",
                value: (function (e) {
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function () {
                  this.rAF = requestAnimationFrame(this.run);
                }),
              },
              {
                key: "cancelAnimationFrame",
                value: (function (e) {
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function () {
                  cancelAnimationFrame(this.rAF);
                }),
              },
              {
                key: "destroy",
                value: function () {
                  (document.body.style.height = ""),
                    (this.data = null),
                    this.removeStyles(),
                    this.removeEvents(),
                    this.cancelAnimationFrame();
                },
              },
              {
                key: "resize",
                value: function () {
                  this.setHeight(),
                    (this.data.rounded = this.data.last = this.data.current);
                },
              },
              {
                key: "addEvents",
                value: function () {
                  window.addEventListener("resize", this.resize, {
                    passive: !0,
                  }),
                    window.addEventListener("scroll", this.scroll, {
                      passive: !0,
                    });
                },
              },
              {
                key: "removeEvents",
                value: function () {
                  window.removeEventListener("resize", this.resize, {
                    passive: !0,
                  }),
                    window.removeEventListener("scroll", this.scroll, {
                      passive: !0,
                    });
                },
              },
              {
                key: "init",
                value: function () {
                  this.bindMethods(),
                    (this.config = {
                      height: window.innerHeight,
                      width: window.innerWidth,
                    }),
                    (this.data = {
                      ease: 0.1,
                      current: 0,
                      last: 0,
                      rounded: 0,
                    }),
                    (this.dom = {
                      el: document.getElementById("container"),
                      content: document.querySelector("[data-scroll-content]"),
                    }),
                    (this.rAF = null),
                    this.preload(),
                    this.on();
                },
              },
            ]),
            e
          );
        })();
    },
    vlRD: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return o("RNiq");
        },
      ]);
    },
    yMCV: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return a;
      });
      var i = o("z/o8"),
        a = function (e) {
          var t = document.querySelector(".logo"),
            o = document.querySelector(".mainNav");
          1 != t.style.opacity &&
            (i.a.fromTo(
              t,
              1,
              { opacity: 0, y: -100 },
              { opacity: 1, y: 0, delay: e, ease: "elastic.out(1, 0.75)" }
            ),
            i.a.fromTo(
              o,
              1,
              { opacity: 0, y: -100 },
              { opacity: 1, y: 0, delay: e + 0.1, ease: "elastic.out(1, 0.75)" }
            ));
        };
    },
  },
  [["vlRD", 0, 1, 2]],
]);
