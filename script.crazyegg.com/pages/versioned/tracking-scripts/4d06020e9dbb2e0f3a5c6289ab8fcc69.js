(globalThis.webpackChunkCE2 = globalThis.webpackChunkCE2 || []).push([
  [806, 60],
  {
    9307: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          EventHandlers: () => Os,
          V11Tracker: () => xt,
          compress: () => Is,
          fp: () => Ns,
          getCensoredElements: () => Bt,
          timing: () => nt,
        });
      const r = "[\\s\\u00a0\\u2028\\u2029]+";
      let i;
      if ("undefined" != typeof Intl && Intl.Segmenter)
        try {
          i = new Intl.Segmenter();
        } catch (e) {}
      const n = {
        whitespace: new RegExp(r, "g"),
        strip: new RegExp(`^${r}|${r}$`, "g"),
        href: /\bhref="(.*?)"/i,
        ipHost: /^([\d\.]+|\[[a-f\d:]+\])$/i,
        allChars:
          /\p{RI}\p{RI}|\p{Emoji}(\p{EMod}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(\u{200D}\p{Emoji}(\p{EMod}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*|./gsu,
      };
      function o(e, t) {
        const s = e.replace(n.strip, "");
        return t ? s.replace(n.whitespace, " ") : s;
      }
      const a = 2048,
        c = 65535 - a;
      const l = `cesrk${Math.random().toString().replace(/\D/g, "")}`;
      function h(e) {
        let t;
        const s = (e = e || window).document;
        return (
          e[`${l}_path`] !== e.location.pathname &&
            ((e[l] = (function (e) {
              const t = e.defaultView,
                s = e.documentElement;
              if (s.scrollHeight > t.innerHeight)
                return e.scrollingElement
                  ? e.scrollingElement
                  : "BackCompat" === e.compatMode
                  ? e.body
                  : s;
              if (!e.querySelectorAll || "number" != typeof e.body.scrollHeight)
                return;
              const { body: r } = e,
                i = Array.from(e.querySelectorAll("html, body, body *")).filter(
                  (e) => !e.ownerSVGElement
                ),
                n = r.getElementsByTagName("*").length;
              let o, a, c, l;
              for (o = 0, a = Math.min(7e3, i.length); o < a; o++)
                if (
                  ((c = i[o]),
                  !(c.clientHeight >= c.scrollHeight) &&
                    (c.offsetWidth ||
                      c.offsetHeight ||
                      c.getClientRects().length) &&
                    !(
                      c.getElementsByTagName("*").length / n < 0.5 ||
                      c.clientHeight > window.innerHeight ||
                      ((l = c.getBoundingClientRect()),
                      Math.floor(l.width || l.right - l.left) <
                        0.75 * t.innerWidth ||
                        Math.floor(l.height || l.bottom - l.top) <
                          0.75 * t.innerHeight)
                    ))
                )
                  return c;
            })(s)),
            (e[`${l}_path`] = e.location.pathname)),
          (t = e[l]),
          (t =
            t || ("BackCompat" === s.compatMode ? s.body : s.documentElement)),
          {
            left: t.scrollLeft,
            top: t.scrollTop,
            width: e.innerWidth,
            height: e.innerHeight,
          }
        );
      }
      const u = {};
      (u.opera = u.ie = u.chrome = u.safari = u.firefox = !1),
        (u.browser = "unknown");
      const d = "undefined" != typeof window ? window : {},
        p = "undefined" != typeof navigator ? navigator : {},
        f = p.userAgent;
      function m(e, t) {
        const s = Math.min(t.width, t.height),
          r = o(e.coords, !0)
            .split(/[^\d\.%]+/)
            .map((e) =>
              (function (e, t) {
                let s = parseInt(e, 10);
                return (
                  -1 != e.indexOf("%") && (s *= 0.01 * t), isNaN(s) ? null : s
                );
              })(e, s)
            );
        let i, n, a;
        if (!/circle/i.test(e.shape)) {
          (i = []), (n = []);
          for (let e = 0, t = r.length; e < t; e++)
            e % 2 ? n.push(r[e]) : i.push(r[e]);
          const e = Math.min.apply(null, i),
            t = Math.max.apply(null, i),
            s = Math.min.apply(null, n);
          return {
            left: e,
            top: s,
            width: t - e,
            height: Math.max.apply(null, n) - s,
          };
        }
        if (r.length >= 3)
          return (
            ([i, n, a] = r),
            { left: i - a, top: n - a, width: 2 * a, height: 2 * a }
          );
      }
      function g(e) {
        const t = (function (e) {
          const t = new RegExp(`(^|#)${e.parentNode.name}`, "i"),
            s = e.ownerDocument.getElementsByTagName("IMG");
          let r, i;
          for (r = 0; (i = s[r++]); ) if (t.test(i.useMap)) return i;
        })(e);
        if (!t) return;
        const s = E(t),
          r = m(e, s);
        return r
          ? {
              left: s.left + r.left,
              top: s.top + r.top,
              width: r.width,
              height: r.height,
            }
          : void 0;
      }
      function E(e, t, s, { usePseudo: r = !1 } = {}) {
        let i;
        if (((t = t || {}), "AREA" == e.nodeName))
          (i = g(e)),
            i &&
              ((t.left = i.left),
              (t.top = i.top),
              (t.width = i.width),
              (t.height = i.height));
        else if (e.getBoundingClientRect) {
          i = e.getBoundingClientRect();
          const s = h();
          if (
            ((t.left = Math.floor(i.left + s.left)),
            (t.top = Math.floor(i.top + s.top)),
            u.webkit &&
              u.webkitVersion < 533 &&
              "relative" == e.style.position &&
              ((t.left += parseInt(e.style.left, 10)),
              (t.top += parseInt(e.style.top, 10))),
            (t.width = Math.floor(i.width || i.right - i.left)),
            (t.height = Math.floor(i.height || i.bottom - i.top)),
            r && (0 === t.width || 0 === t.height))
          ) {
            const s = (function (e) {
              let t, s;
              for (let r = 0, i = ["::before", "::after"]; r < i.length; r++) {
                const n = i[r],
                  o = getComputedStyle(e, n);
                if (
                  (([t, s] = [parseFloat(o.width), parseFloat(o.height)]),
                  t && s)
                )
                  break;
              }
              return { width: t, height: s };
            })(e);
            s.width && s.height && ((t.width = s.width), (t.height = s.height));
          }
        } else {
          (t.width = e.offsetWidth), (t.height = e.offsetHeight);
          let s = e,
            r = 0,
            i = 0;
          do {
            (r += s.offsetLeft || 0),
              (i += s.offsetTop || 0),
              (s = s.offsetParent);
          } while (s);
          (t.left = Math.floor(r)), (t.top = Math.floor(i));
        }
        if (((t.pageX = t.left), (t.pageY = t.top), s)) {
          const e = E(s);
          (t.left -= e.pageX), (t.top -= e.pageY);
        }
        return t;
      }
      function v(e) {
        return (
          "FONT" === e.nodeName &&
          (1 === e.children.length && "FONT" === e.firstElementChild?.nodeName
            ? v(e.firstElementChild)
            : 0 === e.children.length &&
              !(!e.parentElement || "FONT" !== e.parentNode.nodeName) &&
              !!Array.from(e.childNodes).every(
                (e) => e.nodeType === Node.TEXT_NODE
              ))
        );
      }
      d.opera && "function" == typeof d.opera.version
        ? ((u.browser = "opera"),
          (u.opera = !0),
          (u.operaVersion = parseInt(d.opera.version(), 10)))
        : /\bMSIE\b/.test(f)
        ? ((u.browser = "ie"),
          (u.ie = !0),
          (u.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(p.userAgent)[1], 10)),
          (u.ieQuirksMode = "BackCompat" == document.compatMode))
        : /\b(iPhone|iP[ao]d)\b/.test(f)
        ? ((u.browser = "iphone"), (u.iphone = !0), (u.webkit = !0))
        : /\bChrome\b/.test(f)
        ? ((u.browser = "chrome"), (u.chrome = !0), (u.webkit = !0))
        : /AppleWebKit/.test(p.appVersion)
        ? ((u.browser = "safari"), (u.safari = !0), (u.webkit = !0))
        : /Mozilla/i.test(f) &&
          !/compatible|webkit/i.test(f) &&
          ((u.browser = "firefox"), (u.firefox = !0)),
        u.webkit &&
          (u.webkitVersion = parseInt(/AppleWebKit\/(\d+)/.exec(f)[1], 10));
      const C = function (e) {
        if (
          ((this.src = e),
          (this.protocol =
            this.host =
            this.port =
            this.path =
            this.qs =
            this.hash =
            this.query =
              null),
          e)
        ) {
          const t = typeof e;
          "string" == t
            ? this.initWithString(e)
            : "object" == t && this.initWithURI(e);
        }
      };
      function y(e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return window.unescape(e);
        }
      }
      (C.pattern =
        /^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i),
        (C.prototype = {
          initWithString(e) {
            const t = C.pattern.exec(e),
              [s, r, i, n, o, a, c, l] = t;
            r || "/" == e.charAt(0)
              ? (r && (this.protocol = r.substr(0, r.indexOf(":"))),
                (this.host = n || null),
                o && (this.port = Number(o.substr(1))),
                a ? (this.path = y(a)) : this.host && (this.path = "/"))
              : (this.path = y((n || "") + (a || ""))),
              c &&
                ((this.qs = (function (e, t) {
                  if (null == e || /^\s*$/.test(e)) return null;
                  const s = {};
                  let r = null;
                  const i = e.replace(/\+/g, " ").split(t || "&");
                  let n, o;
                  for (n = 0, o = i.length; n < o; n++)
                    (r = i[n].split("=")),
                      r[0] && (s[y(r[0])] = null == r[1] ? null : y(r[1]));
                  return s;
                })(c.substr(1))),
                (this.query = c.substr(1))),
              l && (this.hash = y(l.substr(1)));
          },
          initWithURI(e) {
            for (const t in e)
              Object.prototype.hasOwnProperty.call(e, t) && (this[t] = e[t]);
          },
          isAbsolute() {
            return this.isURL() || (this.path && "/" == this.path.charAt(0));
          },
          isURL() {
            return this.protocol && this.host;
          },
          getDomain() {
            return this.host && this.host.replace(/^(www|m)\./, "");
          },
          getHost() {
            return this.host + (this.port ? `:${this.port}` : "");
          },
          getOrigin() {
            return `${this.protocol}://${this.getHost()}`;
          },
          getFullUrl() {
            const e = this.query ? `?${this.query}` : "";
            return `${this.getOrigin()}${this.path}${e}`;
          },
          join(e) {
            const t = new C(this);
            let { path: s } = this;
            return (
              "string" == typeof e && (e = new C(e)),
              e.isURL()
                ? new C(e)
                : (e.isAbsolute()
                    ? (s = e.path)
                    : s
                    ? ((s = s.split("/")),
                      s.pop(),
                      (s = e.path ? s.concat(e.path.split("/")) : s),
                      (s = s.join("/")))
                    : (s = this.isURL() ? `/${e.path}` : e.path),
                  (t.path = s),
                  (t.qs = e.qs),
                  (t.hash = e.hash),
                  t)
            );
          },
          normalize() {
            if (!this.path) return;
            let e;
            u.ie && u.ieVersion < 9
              ? ((e = []),
                "/" == this.path.charAt(0) && e.push(""),
                (e = e.concat(this.path.split(/\/+/g))),
                "/" == this.path.charAt(this.path.length - 1) && e.push(""))
              : (e = this.path.split(/\/+/g));
            let t,
              s = 0;
            do {
              if (((t = e.length - 1), ".." == e[s + 1]))
                "" == e[s] && 0 == s
                  ? e.splice(s + 1, 1)
                  : (e.splice(s, 2), (s -= 1));
              else if ("." == e[s]) {
                if (0 == t) break;
                e.splice(s, 1);
              } else s++;
            } while (s <= t);
            this.path = e.join("/");
          },
          simplify(e) {
            let t;
            const s = [];
            if (
              ((t =
                "file" == this.protocol
                  ? this
                  : u.ie
                  ? e
                    ? e.join(this)
                    : this
                  : (e = e || new C(window.document.baseURI)).join(this)),
              t.normalize(),
              t.host && s.push(t.host.replace(/^(www|m)\./, "")),
              null != t.port && s.push(`:${t.port}`),
              "/" == t.path || /^\/(default|home|index)\b[^\/]*$/i.test(t.path)
                ? (t.qs || t.hash) && s.push("/")
                : s.push(t.path),
              t.qs)
            ) {
              const e = [];
              for (const s in t.qs)
                t.qs[s] &&
                  !/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(
                    s
                  ) &&
                  e.push(
                    `${encodeURIComponent(s)}=${encodeURIComponent(t.qs[s])}`
                  );
              e.length && s.push(`?${e.join("&")}`);
            }
            return t.hash && s.push(`#${t.hash}`), s.join("");
          },
        });
      const k = {
          a: 3,
          abbr: 4,
          acronym: 5,
          address: 6,
          applet: 7,
          area: 8,
          b: 9,
          base: 10,
          basefont: 11,
          bdo: 12,
          big: 13,
          blockquote: 14,
          body: 15,
          br: 16,
          button: 17,
          caption: 18,
          center: 19,
          cite: 20,
          code: 21,
          col: 22,
          colgroup: 23,
          dd: 24,
          del: 25,
          dfn: 26,
          dir: 27,
          div: 28,
          dl: 29,
          dt: 30,
          em: 31,
          fieldset: 32,
          font: 33,
          form: 34,
          frame: 35,
          frameset: 36,
          head: 37,
          h1: 38,
          h2: 38,
          h3: 38,
          h4: 38,
          h5: 38,
          h6: 38,
          hr: 38,
          html: 39,
          i: 40,
          iframe: 41,
          img: 42,
          input: 43,
          ins: 44,
          kbd: 45,
          label: 46,
          legend: 47,
          li: 48,
          link: 49,
          map: 50,
          menu: 51,
          meta: 52,
          noframes: 53,
          noscript: 54,
          object: 55,
          embed: 55,
          ol: 56,
          optgroup: 57,
          option: 58,
          p: 59,
          param: 60,
          pre: 61,
          q: 62,
          s: 63,
          samp: 64,
          script: 65,
          select: 66,
          small: 67,
          span: 68,
          strike: 69,
          strong: 70,
          style: 71,
          sub: 72,
          sup: 73,
          table: 74,
          tbody: 75,
          td: 76,
          textarea: 77,
          tfoot: 78,
          th: 79,
          thead: 80,
          title: 81,
          tr: 82,
          tt: 83,
          u: 84,
          ul: 85,
          var: 86,
          article: 87,
          aside: 88,
          audio: 89,
          bdi: 90,
          canvas: 91,
          command: 92,
          details: 93,
          figcaption: 94,
          figure: 95,
          footer: 96,
          header: 97,
          hgroup: 98,
          keygen: 99,
          mark: 100,
          meter: 101,
          nav: 102,
          output: 103,
          progress: 104,
          rp: 105,
          rt: 106,
          ruby: 107,
          section: 108,
          summary: 109,
          time: 110,
          video: 111,
          svg: 112,
          "(custom)": 255,
        },
        b = CE2BH.extends({}, k, { main: 113 });
      let w = 7;
      const T =
          /(-|^)(default|open|hover|close|error|active|focus|valid|invalid|dirty|submitted|expand|collapse|hide|show|enable|disable|on|off|yui|ui)/i,
        S = /^\s*javascript:|^\s*#\s*$/;
      function _(e, t = 100) {
        if ("TEXTAREA" != e.nodeName)
          return (function (e, t, s = !1) {
            const r = "function" == typeof e.normalize ? e.normalize("NFC") : e;
            let o;
            return (
              (o =
                i && !s
                  ? [...i.segment(r)].map((e) => e.segment)
                  : [...r.matchAll(n.allChars)].map((e) => e[0])),
              o.slice(0, t).join("")
            );
          })(
            o(
              (function (e) {
                const t =
                  void 0 === e.textContent ? "innerText" : "textContent";
                let s = e[t].substr(0, 16384);
                function r(e, s) {
                  let r, i;
                  for (r = 0; (i = s[r++]); ) e = e.replace(i[t], "");
                  return e;
                }
                return (
                  (s = r(s, e.getElementsByTagName("SCRIPT"))),
                  (s = r(s, e.getElementsByTagName("NOSCRIPT"))),
                  s
                );
              })(e),
              !0
            ),
            t
          );
      }
      function A(e) {
        if (!u.ie) return e.getAttribute("href");
        {
          const t = e.outerHTML.match(n.href);
          if (t) return o(t[1]);
        }
      }
      function I(e) {
        return /^\s*data:/.test(e) ? o(e).substr(0, 100) : new C(e).simplify();
      }
      function O(e) {
        const t = (function (e) {
          let t = e.className;
          if (t && "string" == typeof t)
            return (
              (t = o(t.replace(/(\s|^)-ce-capture\b/g, "")).split(/\s+/)),
              t.sort(),
              t.join(" ")
            );
        })(e);
        if (!t || w <= 6) return t;
        const s = [];
        for (let e = 0, r = t.split(/\s+/); e < r.length; e++) {
          const t = r[e];
          t && !T.test(t) && s.push(t);
        }
        return s.join(" ");
      }
      function N(e) {
        let t, s;
        return (t = e.getAttribute("cename")) ||
          (t = e.getAttribute("ceid")) ||
          (t = e.getAttribute("title")) ||
          (t = e.getAttribute("alt")) ||
          (t = e.getAttribute("name")) ||
          ("A" == e.nodeName && (t = _(e)))
          ? t
          : (t = A(e)) && ((s = A(e)), s && !S.test(s))
          ? new C(t).simplify()
          : (t = e.getAttribute("src"))
          ? I(t)
          : (t = _(e)) || (t = e.getAttribute("id")) || (t = O(e))
          ? t
          : "";
      }
      function R(e) {
        if ("string" == typeof e) return e;
        const t = e.toString(16);
        return t.length % 2 != 0 ? `0${t}` : t;
      }
      function L(e, t) {
        if ("AREA" === e.nodeName) return !0;
        const s =
          ((r = e),
          window.getComputedStyle
            ? window.getComputedStyle.call(window, r, null)
            : r.currentStyle);
        var r;
        if ("none" === s.display) return !1;
        if (!t && "hidden" === s.visibility) return !1;
        const i = e.getBoundingClientRect();
        if (
          !["static", "sticky"].includes(s.position) &&
          ("visible" !== s.overflowX || "visible" !== s.overflowY) &&
          (i.width < 0.1 || i.height < 0.1)
        )
          return !1;
        const n = e.parentElement,
          o = [e.ownerDocument.body, e.ownerDocument.documentElement];
        return !(n && !o.includes(n)) || L(e.parentElement, !0);
      }
      const P = { SCRIPT: 0, NOSCRIPT: 0, STYLE: 0, LINK: 0 },
        D = CE2BH.extends({}, P, { TEMPLATE: 0 }),
        M = CE2BH.extends({}, D, { META: 0, SOURCE: 0 }),
        x = "#document-fragment";
      function H(e = 11) {
        return e >= 16 ? M : e >= 13 ? D : 12 === e ? P : null;
      }
      function B(e) {
        return "string" == typeof e
          ? `[${R(
              (function (e) {
                const t =
                  2147483648 +
                  (function (e) {
                    let t = 0;
                    if (0 == e.length) return t;
                    for (let s = 0; s < e.length; s++)
                      (t = (t << 5) - t + e.charCodeAt(s)), (t |= 0);
                    return t;
                  })(e);
                return a + (t % c);
              })(e)
            )}]`
          : R(e);
      }
      function U(e, t = 11) {
        const s = e.nodeName.toLowerCase(),
          r =
            (function (e = 11) {
              return e >= 13 ? b : k;
            })(t)[s] || 0;
        return 0 === r && t >= 13 ? s : r;
      }
      function V(e) {
        const t = [];
        let s,
          r,
          i = "";
        for (let r = 0, i = e.length; r < i; r++) {
          const i = e[r];
          i.type === (s && s.type) && i.relation === s.relation
            ? t[t.length - 1].count++
            : t.push({ type: i.type, relation: i.relation, count: 1 }),
            (s = i);
        }
        for (let e = 0, s = t.length; e < s; e++) {
          const s = t[e];
          if (
            (s.relation &&
              s.relation !== r &&
              ((i += 1 === s.relation ? "^" : "<"), (r = s.relation)),
            s.count > 2)
          )
            i += `${B(s.type)}x${R(s.count)}`;
          else for (let e = 0; e < s.count; e++) i += B(s.type);
        }
        return i;
      }
      function F(e, { formatVersion: t, descendants: s = [] } = {}) {
        const r = H(t),
          i = t >= 13,
          n = ((i && e.shadowRoot) || e).querySelectorAll("*");
        for (let e = 0; e < n.length && s.length < 32; e++) {
          const o = n[e];
          (t >= 13 && o.ownerSVGElement) ||
            (r && o.nodeName in r) ||
            v(o) ||
            (s.push({ type: U(o, t) }),
            i &&
              o.shadowRoot &&
              s.push(...F(o.shadowRoot, { formatVersion: t, descendants: s })));
        }
        return s;
      }
      const $ = function (e, { formatVersion: t, ignore: s } = {}) {
        "number" != typeof t && (t = s ? 12 : 11);
        const r = (function (e) {
          return v(e)
            ? 1 === e.children.length && "FONT" === e.firstElementChild
              ? e.parentElement
              : e.parentElement.parentElement
            : e;
        })(e);
        (this.type = U(r, t)),
          (this.elders = V(
            (function (e, { formatVersion: t = 11 } = {}) {
              let s,
                r = e;
              const i = [],
                n = H(t),
                o = t >= 13;
              for (;;) {
                if (r.previousElementSibling)
                  (s = 1), (r = r.previousElementSibling);
                else if (
                  r.parentNode &&
                  r.parentNode !== document.body &&
                  r.parentNode !== document.documentElement
                )
                  (s = 2), (r = r.parentNode);
                else {
                  if (!o || r.nodeName !== x || !r.host) break;
                  (s = 2), (r = r.host);
                }
                if (
                  !(
                    (n && r.nodeName in n) ||
                    (o && r.nodeName === x) ||
                    v(r) ||
                    (i.push({ type: U(r, t), relation: s }), !(i.length >= 32))
                  )
                )
                  break;
              }
              return i;
            })(r, { formatVersion: t })
          )),
          (this.youngerSiblings = V(
            (function (e, { formatVersion: t = 11 } = {}) {
              const s = [],
                r = H(t);
              for (
                let i = e.nextElementSibling;
                s.length < 32 && i;
                i = i.nextElementSibling
              )
                (r && i.nodeName in r) || v(i) || s.push({ type: U(i, t) });
              return s;
            })(r, { formatVersion: t })
          )),
          (this.descendants = V(F(r, { formatVersion: t }))),
          E(r, this, null, { usePseudo: t >= 16 }),
          (this.name = N(r)),
          t >= 16 && (this.visible = L(r));
      };
      ($.fromObject = function (e) {
        if (e instanceof $) return e;
        const t = Object.create($.prototype);
        for (const s in e)
          Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
        return t;
      }),
        ($.prototype.toString = function () {
          return `${$.hex(this.type)};${this.elders};${this.youngerSiblings};${
            this.descendants
          }`;
        });
      var q = s(3380);
      function G(e, ...t) {
        const s = 1 === t.length && t[0].includes(".") ? t[0].split(".") : t;
        let r = e;
        for (let e = 0; e < s.length; e++) {
          if (((r = r[s[e]]), !r)) break;
        }
        return r;
      }
      function j(e) {
        if (!e) return;
        const t = e.match(/[\d,]+/);
        return t && parseFloat(t[0].replace(",", "."));
      }
      function Y(e) {
        const t = e.composedPath && e.composedPath();
        let { target: s } = e;
        return s.shadowRoot && t && t.length > 0 && ([s] = t), s;
      }
      function K(e, t) {
        let s;
        if (
          ((s =
            "function" == typeof t
              ? e.findIndex(t)
              : e.findIndex((e) => e === t)),
          s >= 0)
        ) {
          const t = e.splice(s, 1);
          if (t && t.length > 0) return t[0];
        }
      }
      const z = () => {
          if (void 0 === CE2.state._isFB) {
            const e = CE2.n.userAgent;
            for (let t = 0, s = ["FBSN", "FBAN", "FBAV"]; t < s.length; t++) {
              const r = s[t];
              if (e.indexOf(r) > -1) {
                CE2.state._isFB = !0;
                break;
              }
            }
            CE2.state._isFB || (CE2.state._isFB = !1);
          }
          return CE2.state._isFB;
        },
        W = function (e, t) {
          const s = e[t];
          return function (...t) {
            try {
              return s.apply(e, t);
            } catch (e) {}
          };
        },
        X = function (e, t) {
          if (e == t) return !0;
          if ("function" == typeof e.contains) return e.contains(t);
          let s = t;
          do {
            s = s.parentNode;
          } while (s && s != document.body && s != e);
          return s == e;
        },
        Q = function (e, t) {
          let s, r;
          if (e && e.length) for (s = 0; (r = e[s++]); ) if (X(r, t)) return r;
        },
        J = function (e, t) {
          const s = CE2.fp.scroll(t);
          return [e.clientX + s.left, e.clientY + s.top];
        },
        Z = function (e) {
          const t = "key_" + +new Date();
          try {
            const s = e.contentWindow;
            s[t] = "temp";
            const r = "temp" === s[t];
            return r && delete s[t], r;
          } catch (e) {
            return !1;
          }
        },
        ee = function (e) {
          return "string" == typeof e.tagUrn && e.tagUrn.indexOf("vml") >= 0;
        };
      var te = s(6832),
        se = s(2886),
        re = s(401);
      class ie {
        constructor(e) {
          CE2BH.defineProperty(this, "ACTIVITY_WINDOW", 1e4),
            CE2BH.defineProperty(this, "INACTIVE_TIME_LIMIT", 9e4),
            (this.tracker = e),
            this.trigger();
        }
        update() {
          this.trigger();
        }
        trigger() {
          const e = +new Date();
          if (this.lastActive) {
            const t = e - this.lastActive;
            if (t > this.INACTIVE_TIME_LIMIT) {
              const e = [this.tracker.visitID, t],
                s = this.tracker.newEvent(CE2.eventTypes.INACTIVE, {
                  attributes: e,
                });
              this.tracker.send(s, { timestamp: this.lastActive });
            }
          }
          const t = this.lastActive && e - this.lastActive;
          (t && t <= this.ACTIVITY_WINDOW) ||
            ((this.lastActive = e),
            this.tracker.session && this.tracker.session.alive());
        }
      }
      class ne {
        constructor(e) {
          (this.tracker = e),
            (this.opaqueElement = null),
            (this.lastClicked = null),
            (this.ignoredElements = CE2.state.ignoredElements.concat([
              ...CE2.d.body.getElementsByClassName("-ce-ignore"),
            ])),
            this.tracker.addEventListener("mousedown", W(this, "onClick")),
            this.tracker.addEventListener("change", W(this, "onChange"));
          for (
            let e = 0, t = CE2.d.querySelectorAll("OBJECT, EMBED");
            e < t.length;
            e++
          ) {
            const s = t[e],
              r = CE2.fp.getBox(s);
            r.width > 1 &&
              r.height > 1 &&
              (this.tracker.addEventListener("mouseover", W(this, "onOver"), s),
              this.tracker.addEventListener("mouseout", W(this, "onOut"), s));
          }
          for (
            let e = 0, t = CE2.d.querySelectorAll("FRAME, IFRAME");
            e < t.length;
            e++
          ) {
            const s = t[e];
            if (Z(s))
              this.tracker.addEventListener(
                "mousedown",
                W(this, "onClickFrame"),
                CE2.ieVersion < 9 ? s.contentWindow.document : s.contentWindow
              );
            else {
              const e = CE2.fp.getBox(s);
              e.width > 1 &&
                e.height > 1 &&
                (this.tracker.addEventListener(
                  "mouseover",
                  W(this, "onOver"),
                  s
                ),
                this.tracker.addEventListener("mouseout", W(this, "onOut"), s));
            }
          }
          this.tracker.addEventListener("blur", W(this, "onBlur")),
            this.tracker.addEventListener(
              CE2.opera ? "unload" : "beforeunload",
              W(this, "onUnload")
            );
        }
        cleanup() {
          delete this.lastClicked,
            delete this.lastClickedTime,
            delete this.ignoredElements;
        }
        onChange(e) {
          if (e.target && "SELECT" === e.target.tagName) {
            this.tracker.onActivity();
            for (
              let t = 0, s = e.target.querySelectorAll("option");
              t < s.length;
              t++
            ) {
              const e = s[t];
              e.selected && this.click(e, null, null, "l");
            }
          }
        }
        onClick(e, t) {
          this.tracker.onActivity();
          const s = this.mouseButton(e);
          if (t) {
            const t = (function (e) {
                return (
                  e.source || e.view || e.srcElement.ownerDocument.parentWindow
                );
              })(e),
              r = t.frameElement;
            this.click(...[r].concat(J(e, t)).concat(s, e));
          } else {
            const t =
              this.tracker.formatVersion >= 13
                ? Y(e)
                : e.srcElement || e.target;
            if (
              "OPTION" === t.tagName &&
              t.parentElement &&
              "SELECT" === t.parentElement.tagName
            )
              return;
            this.click(t, null, null, s, e);
          }
        }
        onBlur() {
          const e = this.opaqueElement;
          e &&
            e !== this.lastClicked &&
            (this.click(e), (this.opaqueElement = null));
        }
        onUnload() {
          const e = this.opaqueElement;
          e &&
            this.isIgnored(e) &&
            (this.click(e), (this.opaqueElement = null));
        }
        onClickFrame(e) {
          this.onClick(e, !0);
        }
        onOver(e) {
          const t = e.srcElement || e.target;
          this.isIgnored(t) || (this.opaqueElement = t);
        }
        onOut(e) {
          this.isIgnored(e.srcElement || e.target) ||
            (this.opaqueElement = null);
        }
        click(e, t, s, r, i) {
          if (this.isTopLevelElement(e) || this.isIgnored(e)) return;
          if (((e = this.tracker.getElementToRecord(e)), ee(e))) return;
          const n = this.tracker.getFingerprint(e),
            o = this.getClickPosition(t, s, n, i);
          (o.button = r),
            "l" === r && (o.clickType = this.getClickType(i)),
            (this.lastClicked = e);
          const a = [
              this.tracker.visitID,
              ...this.tracker.getFingerprintAttributes(n),
              o.x,
              o.y,
              o.button,
              o.pageX,
              o.pageY,
              o.clickType,
            ],
            c = this.tracker.newEvent(CE2.eventTypes.CLICK, { attributes: a });
          this.tracker.send(c);
        }
        getClickPosition(e, t, s, r) {
          let i;
          const n = { x: e || 0, y: t || 0, pageX: 0, pageY: 0 };
          return (
            r && (r.srcElement || r.target)
              ? (e ||
                  ((i = J(r)), (n.x = i[0] - s.pageX), (n.y = i[1] - s.pageY)),
                (n.pageX = r.pageX),
                (n.pageY = r.pageY))
              : e && t
              ? ((n.x = e), (n.y = t))
              : r ||
                ((n.x = n.pageX = s.width / 2), (n.y = n.pageY = s.height / 2)),
            n
          );
        }
        getClickType(e) {
          if (!e) return "";
          const t = Y(e),
            s = this.isClickableElement(t);
          let r = "";
          return (
            s || (r += CE2.clickTypes.NOT_CLICKABLE),
            this.rageClick(e, t, s) &&
              ((r += CE2.clickTypes.RAGE), this.tracker.rageClick()),
            s &&
              this.authenticationButton(t) &&
              (r += CE2.clickTypes.AUTH_BUTTON),
            r || void 0
          );
        }
        rageClick(e, t, s) {
          if (!e) return !1;
          if (e.timeStamp === this.lastEventTimeStamp)
            return this.lastRageValue;
          let r = !1;
          if (e.detail > 2) r = !0;
          else if (this.lastClickedTime) {
            const i = +new Date() - this.lastClickedTime;
            ((s && this.lastClickedElement === t && 2 !== e.detail) || !s) &&
              i < 3e3 &&
              (r = !0);
          }
          return (
            (this.lastClickedTime = +new Date()),
            (this.lastEventTimeStamp = e.timeStamp),
            (this.lastRageValue = r),
            (this.lastClickedElement = t),
            r
          );
        }
        authenticationButton(e) {
          if (e.innerText) {
            const t = e.innerText.trim().toLowerCase(),
              s = [
                "sign in with",
                "register with",
                "authorize",
                "join with",
              ].some((e) => new RegExp(`^${e}`).test(t));
            return (
              !!s ||
              [
                "sign in",
                "signin",
                "signup",
                "sign up",
                "register",
                "login",
                "create account",
                "register account",
                "join",
                "join us",
              ].some((t) => t === e.innerText.trim().toLowerCase())
            );
          }
        }
        isClickableElement(e) {
          const t = [
            "a",
            "a *",
            "button",
            "button *",
            "input",
            "option",
            "select",
          ].join(",");
          if ((0, se.B5)(e, t)) return !0;
          const s = getComputedStyle(e);
          return (
            "pointer" === s.cursor ||
            "text" === s.cursor ||
            "underline" === s.textDecoration
          );
        }
        mouseButton(e) {
          let t;
          return (
            (t =
              CE2.ieVersion && (CE2.ieVersion < 9 || CE2.ieQuirksMode)
                ? { 1: "l", 2: "r", 4: "m" }
                : { 0: "l", 1: "m", 2: "r" }),
            t[e.button]
          );
        }
        isTopLevelElement(e) {
          return (
            e === document ||
            e === document.body ||
            e === document.documentElement
          );
        }
        isIgnored(e) {
          return Q(this.ignoredElements, e);
        }
      }
      class oe {
        constructor(e) {
          CE2BH.defineProperty(this, "CHECKOUT_STARTED_KEY", "ceeccs"),
            CE2BH.defineProperty(this, "eventTypes", {
              ADD_TO_CART: 1,
              CHECKOUT_STARTED: 2,
              CHECKOUT_COMPLETED: 3,
            }),
            (this.tracker = e),
            this.tracker.addEventListener("mousedown", (e) => {
              "l" === this.tracker.eventHandlers.click.mouseButton(e) &&
                this.onClick &&
                this.onClick(e);
            }),
            setTimeout(W(this, "update"));
        }
        setCheckoutStarted() {
          CE2.cookieStorage.set(this.CHECKOUT_STARTED_KEY, 1);
        }
        getCheckoutStarted() {
          return "1" === CE2.cookieStorage.get(this.CHECKOUT_STARTED_KEY);
        }
        delCheckoutStarted() {
          CE2.cookieStorage.del(this.CHECKOUT_STARTED_KEY);
        }
        isCheckoutStarted() {
          return (
            !this.getCheckoutStarted() &&
            this.CHECKOUT_STARTED_PATH_REGEXP &&
            this.CHECKOUT_STARTED_PATH_REGEXP.test(CE2.w.location.pathname)
          );
        }
        isCheckoutCompleted() {
          return (
            this.getCheckoutStarted() &&
            this.CHECKOUT_COMPLETED_PATH_REGEXP &&
            this.CHECKOUT_COMPLETED_PATH_REGEXP.test(CE2.w.location.pathname)
          );
        }
        update() {
          this.isCheckoutStarted() && this.startCheckout(),
            this.isCheckoutCompleted() && this.checkoutCompleted();
        }
        startCheckout() {
          this.setCheckoutStarted(), this.sendCheckoutStartedEvent();
        }
        checkoutCompleted(e = []) {
          this.delCheckoutStarted(), this.sendCheckoutCompletedEvent(e);
        }
        sendCheckoutStartedEvent() {
          this.sendEvent([this.eventTypes.CHECKOUT_STARTED]);
        }
        sendCheckoutCompletedEvent(e = []) {
          this.sendEvent([this.eventTypes.CHECKOUT_COMPLETED, ...e]);
          const [t, s, r] = e;
          (s || 0 === s) && CE2.setSessionWorth(s / 1e4, r);
        }
        addToCart(e) {
          this.delCheckoutStarted(),
            this.sendEvent([this.eventTypes.ADD_TO_CART, ...e]);
          const [t, s, r, i, n] = e;
          (i || 0 === i) && CE2.increaseSessionWorth(i / 1e4, n);
        }
        sendEvent(e = []) {
          e = [this.tracker.visitID, ...e];
          const t = this.tracker.newEvent(CE2.eventTypes.ECOMMERCE, {
            attributes: e,
          });
          this.tracker.send(t);
        }
        amountInCents(e) {
          return this.tracker.amountInCents(e);
        }
      }
      class ae extends oe {
        constructor(...e) {
          super(...e),
            CE2BH.defineProperty(
              this,
              "CHECKOUT_STARTED_PATH_REGEXP",
              /\/checkout(s)?\//i
            ),
            CE2BH.defineProperty(
              this,
              "CHECKOUT_COMPLETED_PATH_REGEXP",
              /\/checkout(s)?\/.*thank(_|-)?you/i
            );
        }
        onClick(e) {
          const { target: t } = e;
          if (
            (0, se.B5)(
              t,
              '.single_add_to_cart_button, [class*="add_to_cart"], [class*="add-to-cart"]'
            ) ||
            /^\s*(add to (cart|bag|basket)|buy now)\s*$/i.test(
              t.innerText || t.value
            )
          ) {
            let e = [];
            const t = ae.getProduct();
            if (t)
              try {
                const s = CE2.d.querySelector("input.qty"),
                  r = t.offers && (t.offers[0] || t.offers);
                (this.currency = r && r.priceCurrency),
                  (e = [
                    t.sku || t["@id"],
                    t.name,
                    s && s.value,
                    this.amountInCents(
                      r && (r.price || r.lowPrice || r.hightPrice)
                    ),
                    r && r.priceCurrency,
                  ]);
              } catch (e) {
                (0, q.Yz)("error extracting product data", e);
              }
            this.addToCart(e);
          }
        }
        static getProduct() {
          for (
            let e = 0,
              t = CE2.d.querySelectorAll('script[type="application/ld+json"]');
            e < t.length;
            e++
          ) {
            const s = t[e];
            try {
              const e = CE2.Native.JSON.parse(s.textContent.trim());
              if (e) {
                if ("Product" === e["@type"]) return e;
                if (e["@graph"] instanceof Array) {
                  const t = e["@graph"].find((e) => "Product" === e["@type"]);
                  if (t) return t;
                }
              }
            } catch (e) {
              (0, q.Yz)("error extracting product data", e);
            }
          }
        }
        sendCheckoutCompletedEvent() {
          const e = CE2.d.querySelector(".order"),
            t = CE2.d.querySelector(".total");
          super.sendCheckoutCompletedEvent([
            ae.getValue(e && e.innerText),
            this.amountInCents(ae.getValue(t && t.innerText)),
            this.currency,
          ]);
        }
        static getValue(e) {
          return e && (e.indexOf(":") > -1 ? e.split(":")[1].trim() : e);
        }
        static match() {
          return Object.keys(CE2.w).find((e) => /^wc_.*_params$/.test(e));
        }
      }
      class ce extends oe {
        constructor(...e) {
          super(...e),
            CE2BH.defineProperty(
              this,
              "CHECKOUT_STARTED_PATH_REGEXP",
              /\/checkout(s)?\//i
            ),
            CE2BH.defineProperty(
              this,
              "CHECKOUT_COMPLETED_PATH_REGEXP",
              /\/checkout(s)?\/.*success/i
            );
        }
        onClick(e) {
          const { target: t } = e;
          if (
            (0, se.B5)(
              t,
              '#product-addtocart-button, [class*="add_to_cart"], [class*="add-to-cart"]'
            ) ||
            /^\s*(add to (cart|bag|basket)|buy now)\s*$/i.test(
              t.innerText || t.value
            )
          ) {
            let e = [];
            const s = ce.getProduct(t);
            (this.currency = s.priceCurrency),
              s &&
                (e = [
                  s.id,
                  s.name,
                  s.qty,
                  this.amountInCents(s.price),
                  s.priceCurrency,
                ]),
              this.addToCart(e);
          }
        }
        static getProduct(e) {
          const t = {};
          try {
            const s = e.closest(".product-info-main");
            (t.name =
              CE2.d.querySelector(".page-title") &&
              CE2.d.querySelector(".page-title").innerText),
              (t.qty =
                s.querySelector("input.qty") &&
                s.querySelector("input.qty").value),
              (t.id =
                s.querySelector('input[name="product"]') &&
                s.querySelector('input[name="product"]').value),
              (t.price =
                s.querySelector('[itemprop="price"]') &&
                (s
                  .querySelector('[itemprop="price"]')
                  .getAttribute("content") ||
                  s.querySelector('[itemprop="price"]').innerText)),
              (t.priceCurrency =
                s.querySelector('[itemprop="priceCurrency"]') &&
                s
                  .querySelector('[itemprop="priceCurrency"]')
                  .getAttribute("content"));
          } catch (e) {
            (0, q.Yz)("error extracting product data", e);
          }
          return t;
        }
        sendCheckoutCompletedEvent() {
          const e = CE2.d.querySelector(".order-number"),
            t = CE2.d.querySelector(".grand_total .amount");
          super.sendCheckoutCompletedEvent([
            e && e.innerText,
            t && t.innerText && this.amountInCents(t.innerText),
            this.currency,
          ]);
        }
        static match() {
          return (
            (CE2.w.checkout &&
              CE2.w.checkout.checkoutUrl &&
              CE2.w.checkout.websiteId) ||
            [...document.scripts].find(
              (e) => e.src && e.src.indexOf("Magento") > -1
            ) ||
            [...document.querySelectorAll("link")].find(
              (e) => e.href && e.href.indexOf("Magento") > -1
            )
          );
        }
      }
      const le = {
          shopify: class extends oe {
            constructor(...e) {
              super(...e),
                CE2BH.defineProperty(
                  this,
                  "CHECKOUT_STARTED_PATH_REGEXP",
                  /\/checkout(s)?\//i
                ),
                CE2BH.defineProperty(
                  this,
                  "CHECKOUT_COMPLETED_PATH_REGEXP",
                  /\/checkout(s)?\/.*thank(_|-)?you/i
                );
            }
            onClick(e) {
              const { target: t } = e;
              if (
                (0, se.B5)(t, 'button[name="add"]') ||
                /^\s*(add to (cart|bag|basket)|buy now)\s*$/i.test(
                  t.innerText || t.value
                )
              ) {
                let e = [];
                if (
                  CE2.w.ShopifyAnalytics?.meta?.currency &&
                  CE2.w.ShopifyAnalytics?.meta?.product?.variants?.length &&
                  CE2.w.ShopifyAnalytics?.meta?.selectedVariantId
                ) {
                  const s = CE2.w.ShopifyAnalytics.meta.selectedVariantId,
                    r = CE2.w.ShopifyAnalytics.meta.product.variants.find(
                      (e) => e.id == s
                    ),
                    i = t.closest("product-info");
                  let n = 1;
                  if (i) {
                    const e = i.querySelector(".quantity__input");
                    e && (n = e.value || 1);
                  }
                  e = [
                    r.id,
                    r.name,
                    n,
                    this.amountInCents(r.price / 100) * n,
                    CE2.w.ShopifyAnalytics.meta.currency,
                  ];
                }
                this.addToCart(e);
              }
            }
            sendCheckoutCompletedEvent() {
              const e = (CE2.w.Shopify && CE2.w.Shopify.checkout) || {},
                t = this.amountInCents(e.total_price && e.total_price);
              super.sendCheckoutCompletedEvent([e.order_id, t, e.currency]);
            }
            static match() {
              return (
                CE2.w.Shopify && G(CE2.w, "ShopifyAnalytics.lib.integrations")
              );
            }
          },
          woocommerce: ae,
          magento: ce,
          wix: class extends oe {
            constructor(...e) {
              super(...e);
              const t = CE2.w.location.host,
                s = this.onEvent.bind(this);
              CE2.w.CE2_WIX_API_TESTING
                ? CE2.w.wixDevelopersAnalytics.register(t, s)
                : CE2.w.addEventListener("wixDevelopersAnalyticsReady", () => {
                    CE2.w.wixDevelopersAnalytics.register(t, s);
                  });
            }
            onEvent(e, t) {
              if ("AddToCart" === e) {
                const e = [
                  t.sku,
                  t.name,
                  t.quantity,
                  this.amountInCents(t.price),
                  t.currency,
                ];
                this.addToCart(e);
              }
              "InitiateCheckout" === e && this.startCheckout(),
                "Purchase" === e &&
                  this.checkoutCompleted([
                    t.orderId,
                    this.amountInCents(t.revenue),
                    t.currency,
                  ]);
            }
            static match() {
              return !!CE2.w.fedops;
            }
          },
          squarespace: class extends oe {
            constructor(...e) {
              super(...e),
                CE2BH.defineProperty(
                  this,
                  "CHECKOUT_STARTED_PATH_REGEXP",
                  /\/checkout\?cartToken/i
                ),
                CE2BH.defineProperty(
                  this,
                  "CHECKOUT_COMPLETED_PATH_REGEXP",
                  /\/website\/thank-you-page/i
                ),
                CE2BH.defineProperty(
                  this,
                  "ADD_TO_CART_BUTTON_NAME_PATTERN",
                  /add to (cart|bag|basket)/i
                ),
                CE2BH.defineProperty(
                  this,
                  "CHECKOUT_BUTTON_NAME_PATTERN",
                  /checkout/i
                ),
                CE2BH.defineProperty(this, "getProductData", () => {
                  const e = CE2.d.querySelectorAll(
                      'script[type="application/ld+json"]'
                    ),
                    t = CE2.d.querySelector(
                      ".product-variants[data-selected-variant]"
                    );
                  if (!t) return (0, q.Yz)("Variants not found"), null;
                  const s = CE2.Native.JSON.parse(
                    t.getAttribute("data-selected-variant")
                  );
                  if (s)
                    for (let t = 0; t < e.length; t++) {
                      const r = e[t],
                        i = CE2.Native.JSON.parse(r.textContent);
                      if (i.offers) {
                        const e = CE2.d.querySelector(
                          ".product-quantity-input input"
                        );
                        return (
                          (this.currency = G(s, "priceMoney.currency")),
                          [
                            s.sku,
                            i.name,
                            e && parseInt(e.value, 10),
                            this.amountInCents(j(G(s, "priceMoney.value"))),
                            this.currency,
                          ]
                        );
                      }
                    }
                });
            }
            onClick(e) {
              const { target: t } = e;
              if (
                ((e) => (0, se.B5)(e, ".sqs-add-to-cart-button-inner"))(t) &&
                ((e) =>
                  this.ADD_TO_CART_BUTTON_NAME_PATTERN.test(
                    e.innerText || e.value
                  ))(t)
              )
                return this.processAddToCardAction();
              ((e) =>
                this.CHECKOUT_BUTTON_NAME_PATTERN.test(e.innerText || e.value))(
                t
              ) &&
                !this.getCheckoutStarted() &&
                this.startCheckout();
            }
            processAddToCardAction() {
              try {
                const e = this.getProductData();
                e && this.addToCart(e);
              } catch (e) {
                (0, q.Yz)("error extracting product data", e);
              }
            }
            static match() {
              return (
                CE2.w.SQUARESPACE_ROLLUPS ||
                Object.keys(CE2.w).find((e) =>
                  e.includes("__INITIAL_SQUARESPACE")
                )
              );
            }
          },
        },
        he =
          (function () {
            for (let e = 0, t = Object.entries(le); e < t.length; e++) {
              const [s, r] = t[e];
              if (r.match()) return (0, q.Yz)(`Tracker: ${s} site detected`), r;
            }
          })() || class extends oe {},
        ue = "<unknown>",
        de =
          /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        pe = /\((\S*)(?::(\d+))(?::(\d+))\)/;
      const fe =
        /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
      const me =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
        ge = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
      const Ee = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
      const ve =
        /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
      function Ce(e) {
        return e.split("\n").reduce((e, t) => {
          const s =
            (function (e) {
              const t = de.exec(e);
              if (!t) return null;
              const s = t[2] && 0 === t[2].indexOf("native"),
                r = t[2] && 0 === t[2].indexOf("eval"),
                i = pe.exec(t[2]);
              return (
                r && null != i && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
                {
                  file: s ? null : t[2],
                  methodName: t[1] || ue,
                  arguments: s ? [t[2]] : [],
                  lineNumber: t[3] ? +t[3] : null,
                  column: t[4] ? +t[4] : null,
                }
              );
            })(t) ||
            (function (e) {
              const t = fe.exec(e);
              return t
                ? {
                    file: t[2],
                    methodName: t[1] || ue,
                    arguments: [],
                    lineNumber: +t[3],
                    column: t[4] ? +t[4] : null,
                  }
                : null;
            })(t) ||
            (function (e) {
              const t = me.exec(e);
              if (!t) return null;
              const s = t[3] && t[3].indexOf(" > eval") > -1,
                r = ge.exec(t[3]);
              return (
                s && null != r && ((t[3] = r[1]), (t[4] = r[2]), (t[5] = null)),
                {
                  file: t[3],
                  methodName: t[1] || ue,
                  arguments: t[2] ? t[2].split(",") : [],
                  lineNumber: t[4] ? +t[4] : null,
                  column: t[5] ? +t[5] : null,
                }
              );
            })(t) ||
            (function (e) {
              const t = ve.exec(e);
              return t
                ? {
                    file: t[2],
                    methodName: t[1] || ue,
                    arguments: [],
                    lineNumber: +t[3],
                    column: t[4] ? +t[4] : null,
                  }
                : null;
            })(t) ||
            (function (e) {
              const t = Ee.exec(e);
              return t
                ? {
                    file: t[3],
                    methodName: t[1] || ue,
                    arguments: [],
                    lineNumber: +t[4],
                    column: t[5] ? +t[5] : null,
                  }
                : null;
            })(t);
          return s && e.push(s), e;
        }, []);
      }
      class ye {
        constructor(e = []) {
          this.cached_assets = new Set();
          for (let t = 0; t < e.length; t++) {
            const s = e[t];
            this.cached_assets.add(s);
          }
        }
        add(e) {
          this.cached_assets.add((0, re.F)(e));
        }
        test(e) {
          return this.cached_assets.has((0, re.F)(e));
        }
        items() {
          const e = [];
          return this.cached_assets.forEach((t) => e.push(t)), e;
        }
      }
      var ke = s(4808);
      const be = ["Failed to execute 'importScripts' on 'WorkerGlobalScope'"];
      class we {
        constructor(e) {
          (this.tracker = e),
            this.setupCache(),
            this.setupQueue(),
            "undefined" != typeof CE_ERROR_TRACKING_CONFIG &&
              CE_ERROR_TRACKING_CONFIG.app_version &&
              (this.appVersion = CE_ERROR_TRACKING_CONFIG.app_version),
            "undefined" != typeof CE_ERROR_TRACKING_CONFIG &&
            CE_ERROR_TRACKING_CONFIG.delay_time
              ? (this.delayTime = CE_ERROR_TRACKING_CONFIG.delay_time)
              : (this.delayTime = 1e4),
            "undefined" != typeof CE_ERROR_TRACKING_CONFIG &&
            CE_ERROR_TRACKING_CONFIG.fingerprint
              ? (this.fingerprint = CE_ERROR_TRACKING_CONFIG.fingerprint)
              : (this.fingerprint = (e, t) => {
                  const s = [];
                  return (
                    s.push(`${t.name}`),
                    t.file && s.push(`[${t.file}:${t.lineno}:${t.colno}]`),
                    s.join(" ")
                  );
                }),
            this.tracker.addEventListener("error", W(this, "onError")),
            this.tracker.addEventListener(
              "unhandledrejection",
              W(this, "onError")
            );
        }
        static removeFingerprintFrom(e) {
          if (!e) return e;
          if (e.replace(".js", "").match(/^([0-9]+([\-|\.|\_])?)+$/)) return e;
          return e
            .split(/([a-z0-9]+[\-|\.|\_]+)/i)
            .filter((e) => {
              if (!e) return !1;
              const t = e.replace(/[^0-9]/g, "").length,
                s = e.replace(/[\.\-\_]/, "").length,
                r = t === s;
              return !!(r && t <= 3) || !(t / s > 0.15 || r);
            })
            .join("")
            .replace(/[\-\.\_]js$/, ".js");
        }
        update() {
          this.setupQueue(), this.setupCache();
        }
        onError(e) {
          try {
            let t;
            t =
              "Script error." === e.message
                ? this.buildBaseError(e, e.reason, null, "CrossOrigin Error")
                : e.error
                ? this.buildBaseError(e, e.error)
                : e.promise
                ? this.buildBaseError(e, e.reason, "UnhandledPromise ->")
                : this.buildBaseError(e);
            for (let e = 0; e < be.length; e++) {
              const s = be[e];
              if (t.message.match(s)) return;
            }
            if (this.cache.test(t.fingerprint)) return;
            this.bufferQueue.push({
              timestamp: +new Date(),
              errorAttributes: t,
            }),
              this.cache.add(t.fingerprint);
          } catch (t) {
            (0, ke.A)(t), (0, q.Yz)(e);
          }
        }
        setupCache() {
          this.cache = new ye();
        }
        setupQueue() {
          this.bufferQueueTimeout && clearTimeout(this.bufferQueueTimeout),
            (this.bufferQueue = []),
            this.processQueue(!0);
        }
        processQueue(e, t = !1, s = !1) {
          for (; this.bufferQueue.length > 0; ) {
            const { timestamp: e, errorAttributes: r } = this.bufferQueue[0];
            if (!t && +new Date() - e < this.delayTime) break;
            const i = [
                this.tracker.visitID,
                r.name,
                r.message,
                r.filename,
                r.lineno,
                r.colno,
                r.stack,
                r.appVersion,
                r.fingerprint,
                r.url,
                r.uuid,
                r.bounced || s,
                r.rageClicked,
              ],
              n = this.tracker.newEvent(CE2.eventTypes.ERROR, {
                timestamp: e,
                attributes: i,
              });
            this.tracker.send(n), this.bufferQueue.shift();
          }
          if (e) {
            const t = W(this, "processQueue");
            this.bufferQueueTimeout = setTimeout(() => {
              t(e);
            }, this.delayTime);
          }
        }
        flush(e) {
          this.processQueue(!1, !0, e);
        }
        assignAttribute(e = "rageClicked") {
          this.bufferQueue.forEach((t) => {
            t.errorAttributes[e] = !0;
          });
        }
        buildBaseError(e, t, s, r = null) {
          const i = CE2BH.extends(
            {},
            this.parseErrorFileAttributes(e, t),
            this.parseErrorMessageAttributes(e, t, r)
          );
          return (
            (i.uuid = (0, se.Jl)()),
            (i.appVersion = this.appVersion),
            (i.url = CE2.w.location.href),
            (i.name = s ? `${s} ${i.name}` : i.name),
            (i.fingerprint = e.fingerprint || this.fingerprint(e, i)),
            (i.rageClicked = !1),
            (i.bounced = !1),
            i
          );
        }
        parseErrorFileAttributes(e, t) {
          let s = {};
          if (e.filename)
            s = {
              filename: e.filename,
              lineno: e.lineno,
              colno: e.colno,
              stack: t && t.stack && t.stack.toString(),
            };
          else if (t && t.stack)
            try {
              const e = Ce(t.stack);
              e.length >= 1 &&
                (s = {
                  filename: e[0].file,
                  lineno: e[0].lineNumber,
                  colno: e[0].column,
                  stack: t.stack.toString(),
                });
            } catch (e) {
              (0, ke.A)(e);
            }
          if (s.filename && 0 !== s.filename.indexOf("blob:"))
            if (this.isValidFileUrl(s.filename)) {
              const e = new CE2.URL(s.filename),
                t = new CE2.URL(CE2.w.location.href);
              if (e.path !== t.path) {
                let t = e.path;
                "/" !== e.path &&
                  "/" === e.path[e.path.length - 1] &&
                  (t = e.path.slice(0, e.path.length - 1)),
                  (s.file = "/" !== t ? t.split("/").pop() : t);
              }
            } else s.file = "unknown";
          return (s.file = we.removeFingerprintFrom(s.file)), s;
        }
        parseErrorMessageAttributes(e, t, s = null) {
          const r = {};
          if (t && t.message) {
            const e = t.message.replace(/^Uncaught /, "");
            r.message = t.name ? `${t.name}: ${e}` : e;
          } else if (t) r.message = t;
          else if (e.message) r.message = e.message.replace(/^Uncaught /, "");
          else if (e.target) {
            const t = ["Error on"];
            e.target.tagName && t.push(e.target.tagName),
              e.target.src &&
                t.push(
                  e.target.src !== CE2.w.location.href
                    ? e.target.src
                    : "Empty src attribute"
                ),
              (r.message = t.join(" ")),
              (r.name = "Unknown Resource Error");
          }
          return (
            r.message || (r.message = "Unknown Error"),
            s
              ? (r.name = s)
              : r.name ||
                (r.name = (function (e) {
                  if (e.length <= 50) return e.trim();
                  const t = e.trim().split(" ");
                  for (let e = 1; e <= t.length; e++) {
                    const s = t.slice(0, e).join(" ");
                    if (s.length <= 50) continue;
                    const r = e === t.length;
                    return s.trim() + (r ? "" : " ...");
                  }
                  return e.trim();
                })(r.message)),
            r
          );
        }
        isValidFileUrl(e) {
          try {
            if (window.URL) return !!new window.URL(e);
          } catch (e) {
            (0, ke.A)(e);
          }
        }
      }
      const Te = [
          [0.4, 0.4],
          [0.5, 0.4],
          [0.5, 0.5],
          [0.4, 0.5],
          [0.3, 0.5],
          [0.3, 0.4],
          [0.3, 0.3],
          [0.4, 0.3],
          [0.5, 0.3],
          [0.6, 0.3],
          [0.6, 0.4],
          [0.6, 0.5],
          [0.6, 0.6],
          [0.5, 0.6],
          [0.4, 0.6],
          [0.3, 0.6],
          [0.2, 0.6],
          [0.2, 0.5],
          [0.2, 0.4],
          [0.2, 0.3],
          [0.2, 0.2],
          [0.3, 0.2],
          [0.4, 0.2],
          [0.5, 0.2],
          [0.6, 0.2],
          [0.7, 0.2],
          [0.7, 0.3],
          [0.7, 0.4],
          [0.7, 0.5],
          [0.7, 0.6],
          [0.7, 0.7],
          [0.6, 0.7],
          [0.5, 0.7],
          [0.4, 0.7],
          [0.3, 0.7],
          [0.2, 0.7],
          [0.1, 0.7],
          [0.1, 0.6],
          [0.1, 0.5],
          [0.1, 0.4],
          [0.1, 0.3],
          [0.1, 0.2],
          [0.1, 0.1],
          [0.2, 0.1],
          [0.3, 0.1],
          [0.4, 0.1],
          [0.5, 0.1],
          [0.6, 0.1],
          [0.7, 0.1],
          [0.8, 0.1],
          [0.8, 0.2],
          [0.8, 0.3],
          [0.8, 0.4],
          [0.8, 0.5],
          [0.8, 0.6],
          [0.8, 0.7],
          [0.8, 0.8],
          [0.7, 0.8],
          [0.6, 0.8],
          [0.5, 0.8],
          [0.4, 0.8],
          [0.3, 0.8],
          [0.2, 0.8],
          [0.1, 0.8],
          [0, 0.8],
          [0, 0.7],
          [0, 0.6],
          [0, 0.5],
          [0, 0.4],
          [0, 0.3],
          [0, 0.2],
          [0, 0.1],
          [0, 0],
          [0.1, 0],
          [0.2, 0],
          [0.3, 0],
          [0.4, 0],
          [0.5, 0],
          [0.6, 0],
          [0.7, 0],
          [0.8, 0],
          [0.9, 0],
          [0.9, 0.1],
          [0.9, 0.2],
          [0.9, 0.3],
          [0.9, 0.4],
          [0.9, 0.5],
          [0.9, 0.6],
          [0.9, 0.7],
          [0.9, 0.8],
          [0.9, 0.9],
          [0.8, 0.9],
          [0.7, 0.9],
          [0.6, 0.9],
          [0.5, 0.9],
          [0.4, 0.9],
          [0.3, 0.9],
          [0.2, 0.9],
          [0.1, 0.9],
          [0, 0.9],
        ],
        Se = `cedk${Math.random().toString().replace(/\D/g, "")}`;
      function _e(e, t, s) {
        if (!e || !e.nodeName) return !1;
        if (e == CE2.d || e == CE2.d.documentElement || e == CE2.d.body)
          return !1;
        if (ee(e)) return !1;
        if (s) {
          if (
            !(function (e) {
              let t;
              if (e[Se]) return !1;
              for (
                ;
                e &&
                e != CE2.d &&
                e != CE2.d.documentElement &&
                e != CE2.d.body;
                e = e.parentNode
              )
                if (
                  ((t = CE2.w.getComputedStyle(e)),
                  t && ("absolute" == t.position || "fixed" == t.position))
                )
                  return !(e[Se] = !0);
              return !0;
            })(e)
          )
            return !1;
          if (CE2.fp.getBox(e).height > 2 * t.height) return !1;
        }
        return !0;
      }
      function Ae(e, t, s) {
        const r = CE2.d.elementFromPoint(e + s.left, t + s.top);
        return r.nodeType === r.TEXT_NODE ? r.parentNode : r;
      }
      function Ie(e, t) {
        return CE2.d.elementFromPoint(e, t);
      }
      let Oe = function (...e) {
        if (CE2.d.elementFromPoint)
          return (
            (Oe =
              (CE2.webkit && CE2.webkitVersion < 533) ||
              (CE2.opera && CE2.operaVersion < 10)
                ? Ae
                : Ie),
            Oe(...e)
          );
      };
      class Ne {
        constructor() {
          (this.strictAnchorSearch = !0),
            (this.lastRecordedScroll = null),
            (this.lastRecordedTime = 0),
            (this.lastRecordedY = 0),
            (this.idleAt = null),
            (this.idleSince = new Date().getTime());
        }
        shouldRecordScroll(e) {
          const t = e.top,
            s = e.height,
            r = `${t}:${s}`,
            i = new Date().getTime();
          if (r == this.lastRecordedScroll) return !1;
          if (r == this.idleAt) {
            if (i - this.idleSince >= 800)
              return (
                (this.lastRecordedScroll = r),
                (this.lastRecordedTime = i),
                (this.lastRecordedY = t),
                !0
              );
          } else (this.idleAt = r), (this.idleSince = i);
          return null == this.lastRecordedScroll ||
            (Math.abs(t - this.lastRecordedY) > s / 2 &&
              i - this.lastRecordedTime >= 1600)
            ? ((this.lastRecordedScroll = r),
              (this.lastRecordedTime = i),
              (this.lastRecordedY = t),
              !0)
            : void 0;
        }
        findAnchor(e, t) {
          if (!CE2.d.elementFromPoint) return t(e);
          const s = this;
          let r = 0,
            i = this.strictAnchorSearch;
          const { width: n } = e,
            { height: o } = e;
          let a, c, l, h;
          const u = function () {
            if ((a = Te[r++])) {
              if (
                ((l = (a[0] + 0.1 * Math.random()) * n),
                (h = (a[1] + 0.1 * Math.random()) * o),
                (c = Oe(l, h, e)),
                _e(c, e, i))
              )
                return t(e, c);
              setTimeout(u, 0);
            } else (r = 0), (s.strictAnchorSearch = i = !1), setTimeout(u, 0);
          };
          setTimeout(u, 0);
        }
      }
      CE2.EXCESSIVE_SCROLL_TIMEOUT = 3e3;
      class Re {
        constructor(e) {
          (this.tracker = e),
            (this.timeout = CE2.EXCESSIVE_SCROLL_TIMEOUT),
            (this.isTriggered = !1),
            (this.isScrolledDown = !1),
            (this.scrollTracker = new Ne()),
            (this.viewport = null),
            setTimeout(W(this, "cleanup"), this.timeout),
            (this.trackScrollInterval = setInterval(
              W(this, "trackScroll"),
              500
            )),
            (this.foundAnchorBind = W(this, "foundAnchor"));
        }
        cleanup() {
          clearInterval(this.trackScrollInterval),
            (this.isTriggered = !1),
            (this.isScrolledDown = !1),
            (this.viewport = null),
            delete this.scrollTracker,
            delete this.foundAnchorBind;
        }
        trackScroll() {
          const e = CE2.fp.scroll();
          this.scrollTracker.findAnchor(e, this.foundAnchorBind);
        }
        foundAnchor(e, t) {
          if (this.isTriggered) return;
          const s = this.anchorViewport(e, t),
            r = (s.viewportTop / s.viewportHeight) * 100;
          this.isScrolledDown
            ? r <= 80 &&
              (this.sendEvent(this.viewport), (this.isTriggered = !0))
            : r > 90 && ((this.viewport = s), (this.isScrolledDown = !0));
        }
        anchorViewport(e, t) {
          const s = e.top,
            r = e.height;
          let i, n, o;
          return (
            t &&
              ((t = this.tracker.getElementToRecord(t)),
              (i = this.tracker.getFingerprint(t)),
              (n = e.top - i.pageY),
              (o = e.top + e.height - i.pageY)),
            {
              viewportTop: s,
              viewportHeight: r,
              viewportTopDistance: n,
              viewportBottomDistance: o,
            }
          );
        }
        sendEvent({
          viewportTop: e,
          viewportHeight: t,
          viewportTopDistance: s,
          viewportBottomDistance: r,
        }) {
          const i = [this.tracker.visitID, e, t, s, r],
            n = this.tracker.newEvent(CE2.eventTypes.EXCESSIVE_SCROLL, {
              attributes: i,
            });
          this.tracker.send(n), this.tracker.addTag("excessive scroll");
        }
      }
      var Le = s(715);
      const Pe = "ce_submit_forms";
      function De(e, t) {
        const s = e[t];
        return "string" == typeof s ? s : e.getAttribute(t);
      }
      class Me {
        static formAttributes(e) {
          return [
            De(e, "id"),
            De(e, "name"),
            new CE2.Native.URL(De(e, "action"), CE2.w.location.href).toString(),
          ];
        }
        static validateEmail(e) {
          const t = document.createElement("input");
          return (
            (t.type = "email"),
            (t.required = !0),
            (t.value = e),
            "function" == typeof t.checkValidity
              ? t.checkValidity()
              : /\S+@\S+\.\S+/.test(e)
          );
        }
        constructor(e) {
          CE2BH.defineProperty(this, "EMAIL_ATTRIBUTE_REGEX", /e([-_])?mail/i),
            CE2BH.defineProperty(
              this,
              "FORM_REGEX",
              /sign([-_\s])?up|checkout|log([-_\s])?in|sign([-_\s])?in/i
            ),
            CE2BH.defineProperty(this, "eventTypes", {
              SUBMIT: 1,
              RESUBMIT: 2,
              ABANDON: 3,
              SIGNUP: 4,
              LOGIN: 5,
              EMAIL: 6,
              SEARCH: 7,
            }),
            (this.tracker = e),
            this.tracker.addEventListener("mousedown", (e) => {
              "l" === this.tracker.eventHandlers.click.mouseButton(e) &&
                this.onClick(e);
            }),
            CE2.data.auto_identity &&
              !CE2.IDENTIFIER &&
              (CE2.w.ShopifyAnalytics &&
                G(CE2.w, "ShopifyAnalytics.meta.page.customerId") &&
                (0, Le.ls)(CE2.w.ShopifyAnalytics.meta.page.customerId),
              this.tracker.addEventListener("blur", W(this, "onBlur")),
              this.tracker.addEventListener("submit", W(this, "onBlur"))),
            this.tracker.addEventListener("submit", W(this, "onSubmit")),
            this.tracker.addEventListener("input", W(this, "onInput")),
            this.tracker.addEventListener(
              "beforeunload",
              W(this, "beforeUnload")
            ),
            (this.editedForms = []),
            (this.submittedForms = CE2.Native.JSON.parse(
              sessionStorage.getItem(Pe) || "[]"
            ));
        }
        onClick(e) {
          const { target: t } = e;
          if (!t) return;
          const s = t.closest("form"),
            r =
              "INPUT" === t.tagName &&
              ("button" === t.type || "submit" === t.type);
          if ((s && r) || "BUTTON" === t.tagName) {
            const e = "INPUT" === t.tagName ? t.value : t.innerText;
            (/(log\s*in)|(sign\s*in)/i.test(e) ||
              (s && /(log[\-_]in)|(sign[\-_]in)/i.test(s.action))) &&
              this.sendEvent([this.eventTypes.LOGIN]),
              (/(sign\s*up)|register/i.test(e) ||
                (s && /(sign[\-_\s]up)|register/i.test(s.action))) &&
                this.sendEvent([this.eventTypes.SIGNUP]);
          }
          ("INPUT" !== t.tagName && "BUTTON" !== t.tagName) ||
            ("submit" === t.type && s && this.submit(s, t));
        }
        onSubmit(e) {
          const t = e.target;
          t &&
            ((t.ce_submit && +new Date() - t.ce_submit < 100) ||
              this.submit(t));
        }
        onBlur(e) {
          try {
            const { target: t } = e;
            if (!t || "function" != typeof t.closest) return;
            const s = t.closest("form"),
              r = "INPUT" === t.tagName && t.value && Me.validateEmail(t.value);
            s &&
              this.isAuthForm(s) &&
              r &&
              !CE2.IDENTIFIER &&
              (0, Le.ls)(t.value);
          } catch (e) {
            (0, q.Yz)("form blur trigger failed", e);
          }
        }
        onInput(e) {
          const { target: t } = e;
          if (!t) return;
          const s = t.closest("form");
          s && !this.editedForms.includes(s) && this.editedForms.push(s),
            s && !s.ce_time_start && (s.ce_time_start = +new Date()),
            "INPUT" === t.tagName &&
              ("search" === t.type ||
                (t.placeholder && /search/i.test(t.placeholder))) &&
              (!t.ce_search || +new Date() - t.ce_search > 3e4) &&
              ((t.ce_search = +new Date()),
              this.sendEvent([this.eventTypes.SEARCH])),
            "INPUT" === t.tagName &&
              t.value &&
              Me.validateEmail(t.value) &&
              (!t.ce_email_sent || +new Date() - t.ce_email_sent > 6e4) &&
              ((t.ce_email_sent = +new Date()),
              this.sendEvent([this.eventTypes.EMAIL]));
        }
        beforeUnload() {
          this.editedForms.forEach((e) => {
            this.sendEvent([this.eventTypes.ABANDON, ...Me.formAttributes(e)]);
          }),
            (this.editedForms = []),
            CE2.Native.sessionStorage.setItem(
              Pe,
              CE2.Native.JSON.stringify(this.submittedForms)
            );
        }
        submit(e) {
          try {
            const t = this.editedForms.indexOf(e);
            -1 !== t && this.editedForms.splice(t, 1),
              (e.ce_submit = +new Date());
            const s = Me.formAttributes(e);
            let r;
            -1 !== this.submittedForms.indexOf(CE2.Native.JSON.stringify(s))
              ? (r = this.eventTypes.RESUBMIT)
              : (this.submittedForms.push(CE2.Native.JSON.stringify(s)),
                (r = this.eventTypes.SUBMIT));
            const i = [r, ...s];
            e.ce_time_start &&
              (i.push(+new Date() - e.ce_time_start), delete e.ce_time_start),
              this.sendEvent(i);
          } catch (e) {
            (0, q.Yz)("form submit event failed", e);
          }
        }
        sendEvent(e = []) {
          e = [this.tracker.visitID, ...e];
          const t = this.tracker.newEvent(CE2.eventTypes.FORM, {
            attributes: e,
          });
          this.tracker.send(t);
        }
        isAuthForm(e) {
          const t = De(e, "action"),
            s = De(e, "class"),
            r = De(e, "id"),
            i = De(e, "name");
          return (
            this.isMatch(t) ||
            this.isMatch(s) ||
            this.isMatch(r) ||
            this.isMatch(i)
          );
        }
        isMatch(e, t = this.FORM_REGEX) {
          return e && e.match(t);
        }
      }
      class xe {
        constructor() {
          (this.events = []),
            (this.api = this.apiName()),
            this.find(),
            (this.listeners = new Set());
        }
        destroy() {
          throw new Error(`${this.constructor.name}.destroy() not implemented`);
        }
        find() {
          throw new Error(`${this.constructor.name}.find() not implemented`);
        }
        apiName() {
          throw new Error(`${this.constructor.name}.apiName() not implemented`);
        }
        urlMatches() {
          throw new Error(
            `${this.constructor.name}.urlMatches(url) not implemented`
          );
        }
        getId() {
          throw new Error(`${this.constructor.name}.getId() not implemented`);
        }
        getEventType() {
          throw new Error(
            `${this.constructor.name}.getEventType() not implemented`
          );
        }
        recordEvent(e) {
          const t = { api: this.api, properties: e },
            s = this.getId(e);
          null != s && (t.id = s);
          const r = this.getEventType(e);
          "string" == typeof r && r.trim().length > 0 && (t.type = r),
            this.events.push(t),
            this.listeners.forEach((e) => {
              e(t);
            });
        }
        addListener(e) {
          this.listeners.add(e);
        }
        removeListener(e) {
          this.listeners.delete(e);
        }
      }
      class He {
        constructor() {
          (this.listeners = new Set()), (this.bufferedEvents = []);
        }
        trigger(...e) {
          0 === this.listeners.size
            ? this.bufferedEvents.push(e)
            : this.listeners.forEach((t) => {
                t(...e);
              });
        }
        destroy() {
          throw new Error(`${this.constructor.name}.destroy() not implemented`);
        }
        triggerBuffered() {
          if (this.bufferedEvents.length > 0) {
            for (let e = 0, t = this.bufferedEvents; e < t.length; e++) {
              const s = t[e];
              this.trigger(...s);
            }
            this.bufferedEvents = [];
          }
        }
        static getInstance() {
          return this.instance || (this.instance = new this()), this.instance;
        }
        static destroy() {
          this.instance && (this.instance.destroy(), delete this.instance);
        }
        static addListener(e) {
          const t = this.getInstance();
          t.listeners.add(e), t.triggerBuffered();
        }
        static removeListener(e) {
          this.instance &&
            (this.instance.listeners.delete(e),
            0 === this.instance.listeners.size && this.destroy());
        }
        static trigger(...e) {
          this.instance && this.instance.trigger(...e);
        }
      }
      class Be extends He {
        constructor() {
          super(),
            (this.observer = new MutationObserver(this.onMutation.bind(this))),
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? this.startObserver()
              : document.addEventListener(
                  "DOMContentLoaded",
                  this.startObserver.bind(this)
                );
        }
        startObserver() {
          document.querySelectorAll("script[src]").forEach((e) => {
            this.trigger(e.getAttribute("src"));
          }),
            this.observer.observe(document.documentElement, {
              subtree: !0,
              childList: !0,
            });
        }
        onMutation(e) {
          for (let t = 0; t < e.length; t++) {
            const s = e[t];
            if (s.addedNodes && 0 !== s.addedNodes.length)
              for (let e = 0, t = s.addedNodes; e < t.length; e++) {
                const s = t[e];
                "SCRIPT" === s.nodeName && this.trigger(s.getAttribute("src"));
              }
          }
        }
        destroy() {
          this.observer.disconnect();
        }
      }
      function Ue(e) {
        const t = {};
        return (
          new URL(e).searchParams.forEach((e, s) => {
            t[s] = e;
          }),
          t
        );
      }
      class Ve extends xe {
        constructor() {
          super(),
            (this.$onScript = this.onScript.bind(this)),
            Be.addListener(this.$onScript);
        }
        destroy() {
          Be.removeListener(this.$onScript);
        }
        apiName() {
          return "google";
        }
        urlMatches(e) {
          if (!e || "string" != typeof e) return;
          return [
            "googleadservices.com/pagead/conversion/",
            "googleads.g.doubleclick.net/pagead/viewthroughconversion/",
          ].some((t) => e.toLowerCase().includes(t.toLowerCase()));
        }
        find() {
          const e = new Set();
          for (
            let t = 0, s = document.querySelectorAll('script[src*="/gtag/"]');
            t < s.length;
            t++
          ) {
            const r = s[t];
            try {
              const t = new URL(r.src).searchParams.get("id");
              t && /^(AW|G)-/.test(t) && e.add(t);
            } catch (e) {
              continue;
            }
          }
          e.size > 0 && (this.ids = Array.from(e));
        }
        getId(e) {
          if (e.source_url) {
            const t = /\/pagead\/(viewthrough)?conversion\/([^/?#]+)/.exec(
              e.source_url
            );
            if (t && t[2]) return t[2];
          }
        }
        getEventType(e) {
          if (e.gclid && (e.medium || e.utm_medium)) return "ad_click";
          const { data: t } = e;
          if (t) {
            const e = /event=([^;]+)/.exec(t);
            if (e && e[1]) return e[1];
          }
        }
        onScript(e) {
          if (!this.urlMatches(e)) return;
          const t = Ue(e);
          (t.source_url = e), this.getEventType(t) && this.recordEvent(t);
        }
        detectAdWordsConversion(e) {
          const t = Ue(e || window.location.href);
          t.gclid &&
            (("cpc" === t.medium && t.gad_source) ||
              ("paid_search" === t.utm_medium && t.utm_source)) &&
            this.recordEvent(t);
        }
      }
      const Fe = window.Image;
      function $e(...e) {
        const t = new Fe(...e);
        return (
          Object.defineProperty(t, "src", {
            set(e) {
              setTimeout(() => {
                qe.trigger(e);
              }, 0),
                t.setAttribute("src", e);
            },
            get: () => t.getAttribute("src"),
          }),
          t
        );
      }
      class qe extends He {
        constructor() {
          super(),
            (window.Image = $e),
            (window.Image.toString = () => Fe.toString());
        }
        destroy() {
          window.Image = Fe;
        }
      }
      class Ge extends xe {
        constructor() {
          super(),
            (this.$onImage = this.onImage.bind(this)),
            qe.addListener(this.$onImage);
        }
        destroy() {
          qe.removeListener(this.$onImage);
        }
        apiName() {
          return "meta";
        }
        urlMatches(e) {
          return e.startsWith("https://www.facebook.com/tr/");
        }
        find() {
          if (
            window.fbq &&
            window.fbq.instance &&
            window.fbq.instance.pixelsByID
          ) {
            const e = Object.keys(window.fbq.instance.pixelsByID);
            e.length > 0 && (this.ids = e);
          }
        }
        getId(e) {
          return e.id;
        }
        getEventType(e) {
          return e.ev;
        }
        onImage(e) {
          if (!this.urlMatches(e)) return;
          const t = Ue(e);
          this.getEventType(t) && this.recordEvent(t);
        }
      }
      const je = navigator.sendBeacon;
      function Ye(e, t) {
        return (
          setTimeout(() => {
            try {
              Ke.trigger(e, t);
            } catch (e) {
              console.error("sendBeacon error: ", e.stack);
            }
          }, 0),
          je.call(navigator, e, t)
        );
      }
      class Ke extends He {
        constructor() {
          super(),
            (navigator.sendBeacon = Ye),
            (navigator.sendBeacon.toString = () => je.toString());
        }
        destroy() {
          navigator.sendBeacon = je;
        }
      }
      class ze extends xe {
        constructor() {
          super(),
            (this.$onSendBeacon = this.onSendBeacon.bind(this)),
            Ke.addListener(this.$onSendBeacon);
        }
        destroy() {
          Ke.removeListener(this.$onSendBeacon);
        }
        apiName() {
          return "tiktok";
        }
        urlMatches(e) {
          return e.startsWith("https://analytics.tiktok.com/");
        }
        find() {
          const e = document.querySelectorAll(
              'script[src*="analytics.tiktok.com"][data-id]'
            ),
            t = new Set(Array.from(e).map((e) => e.dataset.id));
          t.size > 0 && (this.ids = Array.from(t));
        }
        getId(e) {
          return e?.context?.pixel?.code;
        }
        getEventType(e) {
          return e.event;
        }
        onSendBeacon(e, t) {
          if (!this.urlMatches(e)) return;
          const s = JSON.parse(t);
          this.getEventType(s) && this.recordEvent(s);
        }
      }
      const We = { google: Ve, meta: Ge, tiktok: ze };
      class Xe {
        constructor(e = "all") {
          if ("all" === e)
            this.pixels = {
              google: new Ve(),
              meta: new Ge(),
              tiktok: new ze(),
            };
          else {
            this.pixels = {};
            for (let t = 0; t < e.length; t++) {
              const s = e[t],
                r = We[s];
              this.pixels[s] = new r();
            }
          }
          (this.$onLoad = this.findPixels.bind(this)),
            window.addEventListener("load", this.$onLoad),
            (this.$onDomReady = () => {
              this.findPixels(), this.initMutationObserver();
            }),
            document.addEventListener("DOMContentLoaded", this.$onDomReady),
            this.findPixels(),
            this.initMutationObserver();
        }
        destroy() {
          document.removeEventListener("DOMContentLoaded", this.$onDomReady),
            window.removeEventListener("load", this.$onLoad);
          for (let e = 0, t = Object.values(this.pixels); e < t.length; e++) {
            t[e].destroy();
          }
        }
        findPixels() {
          for (let e = 0, t = Object.values(this.pixels); e < t.length; e++) {
            t[e].find();
          }
        }
        initMutationObserver() {
          this.mutationObserver ||
            (document.documentElement &&
              ((this.mutationObserver = new MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) {
                  if (e[t].addedNodes) {
                    this.findPixels();
                    break;
                  }
                }
              })),
              this.mutationObserver.observe(document.documentElement, {
                subtree: !0,
                childList: !0,
              })));
        }
        addEventListener(e) {
          for (let t = 0, s = Object.values(this.pixels); t < s.length; t++) {
            s[t].addListener(e);
          }
        }
        removeEventListener(e) {
          for (let t = 0, s = Object.values(this.pixels); t < s.length; t++) {
            s[t].removeListener(e);
          }
        }
      }
      var Qe = s(1789),
        Je = s(2080),
        Ze = s(7471);
      const et = (e, t, s, r) => {
        if (!s || s.type !== t) return !1;
        if (!e.on_any_page && !(0, Ze.V4)(e.on_page, CE2.w.location.href))
          return !1;
        let i =
          e[
            `selector_for_${
              { 1: "desktop", 2: "phone", 3: "tablet" }[
                CE2.clock.getDeviceType()
              ]
            }`
          ];
        return (
          !!i &&
          ("function" == typeof CE2.fixTriggerSelector &&
            (i = CE2.fixTriggerSelector(r, i)),
          !(!i || !(0, se.B5)(s.target, i, !0)))
        );
      };
      (Ze.DM.url_visit = Ze.DM.visited_page),
        (Ze.DM.click = (e, { operand: t } = {}) => {
          const { event: s, goalId: r } = t;
          return et(e, "mousedown", s, r);
        }),
        (Ze.DM.form_submission = (e, { operand: t } = {}) => {
          const { event: s, goalId: r } = t;
          return et(e, "submit", s, r);
        }),
        (Ze.DM.pixel_event = (e, { operand: t } = {}) =>
          ((e, t) => {
            if (!e.on_any_page && !(0, Ze.V4)(e.on_page, CE2.w.location.href))
              return !1;
            if (e.api !== t.api) return !1;
            const s = "string" == typeof e.event && e.event.toLowerCase();
            return !(
              (s && s !== t.type.toLowerCase()) ||
              ("ad_click" !== s &&
                "string" == typeof e.id &&
                e.id.replace(/^(G|AW)-/, "") !== t.id)
            );
          })(e, t.event));
      class tt {
        constructor(e) {
          (this.tracker = e), (this.goals = this.tracker.goals);
          const t = W(this, "onClickOrSubmit");
          this.tracker.addEventListener("mousedown", t),
            this.tracker.addEventListener("submit", t);
          const { onActivity: s } = tt;
          this.tracker.addEventListener("mousemove", s),
            this.tracker.addEventListener("scroll", s),
            this.tracker.addEventListener("keydown", s),
            this.tracker.addEventListener("pagehide", s),
            (this.pixelObserver = new Xe(tt.pixelApisFromGoals(this.goals))),
            this.pixelObserver.addEventListener(this.onPixelEvent.bind(this)),
            this.pixelObserver.pixels?.google?.detectAdWordsConversion(),
            (this.goalValuesObserver = new Je.O(this.goals, [
              this.onGoalValueEvent.bind(this),
            ]));
        }
        cleanup() {
          this.pixelObserver.destroy(), delete this.pixelObserver;
        }
        onClickOrSubmit(e) {
          Qe.r.alive(),
            this.goals.forEach((t) => {
              t.triggers.forEach((s) => {
                const r = s.filter.conditions.filter(
                  (e) =>
                    "click" === e.criteria || "form_submission" === e.criteria
                );
                0 !== r.length && this.matchGoal(t, s, r, "click", e);
              });
            });
        }
        onUrlVisit() {
          this.goals.forEach((e) => {
            e.triggers.forEach((t) => {
              const s = t.filter.conditions.filter(
                (e) => "url_visit" === e.criteria
              );
              0 !== s.length && this.matchGoal(e, t, s);
            });
          });
        }
        onPixelEvent(e) {
          this.goals.forEach((t) => {
            t.triggers.forEach((s) => {
              const r = s.filter.conditions.filter(
                (e) => "pixel_event" === e.criteria
              );
              0 !== r.length && this.matchGoal(t, s, r, "pixel_event", e);
            });
          });
        }
        onGoalValueEvent(e) {
          CE2.nextGoalConversionValue(e.goal.id, e.value, e.trigger.id);
        }
        matchGoal(e, t, s, r, i) {
          (0, Ze._9)(s, { operand: { event: i, goalId: e.id } }) &&
            this.tracker.goalConversion(e.id, void 0, t.id);
        }
        static onActivity() {
          const e = +new Date();
          (tt.lastActive && e - tt.lastActive <= 1e4) ||
            ((tt.lastActive = e), Qe.r.alive());
        }
        static pixelApisFromGoals(e) {
          if (!CE2.Native.Array.isArray(e)) return [];
          const t = new Set();
          return (
            e.forEach((e) => {
              e.triggers.forEach((e) => {
                e.filter.conditions.forEach((e) => {
                  "pixel_event" === e.criteria &&
                    e.values.forEach((e) => {
                      e.api && t.add(e.api);
                    });
                });
              });
            }),
            CE2.Native.Array.from(t)
          );
        }
      }
      var st = s(1509),
        rt = s(7866);
      const it = function () {
        this.metrics = {};
      };
      it.prototype = {
        start(e) {
          this.metrics[e] = +new Date();
        },
        stop(e) {
          const t = this.metrics[e];
          if (!t)
            return void (0, q.Yz)(
              `[TimingMetric] No starting point for "${e}", ignoring.`
            );
          const s = +new Date() - t;
          this.cancel(e), this.send(e, s);
        },
        cancel(e) {
          delete this.metrics[e];
        },
        send(e, t) {
          if (e.length > 100) throw new Error("Key is too long (max 100)");
          if ((t = Number(t, 10)) && Number.isNaN(Number(t)))
            throw new Error("Value is NaN");
          if (!CE2.site)
            return void (0, q.Yz)(
              `[TimingMetric] No site, skipping metric ${e}`
            );
          const s = [
            [
              (0, rt.M4)(0, 1),
              CE2.tracker?.visitorID,
              25,
              CE2.VERSION,
              +new Date(),
              CE2.tabId,
            ],
            [
              CE2.tracker?.visitID,
              e,
              t || "",
              CE2.visitorTracker?.getIdentification(),
            ],
          ];
          (0, st.sendEvents)(
            {
              context: "TimingMetric",
              userId: CE2.data.uid,
              siteId: CE2.site.id,
              snapshotIds: CE2.tracker?.snapshotIds,
              sessionId: CE2.tracker?.sessionId,
              pageFingerprintMd5: CE2.tracker?.pageFingerprintMd5,
            },
            [s]
          ),
            (0, q.Yz)(`[TimingMetric] Sent key=${e} value=${t}`);
        },
        getTrackerValue(e) {
          if (CE2.tracker) return CE2.tracker[e];
        },
      };
      const nt = new it();
      class ot {
        constructor(e) {
          (this.tracker = e),
            this.tracker.addEventListener(
              CE2.opera ? "unload" : "beforeunload",
              W(this, "onUnload")
            );
        }
        trigger(e, t) {
          if (e.length > 100) throw new Error("Key is too long (max 100)");
          if ((t = Number(t, 10)) && Number.isNaN(Number(t)))
            throw new Error("Value is NaN");
          const s = [this.tracker.visitID, e, t || ""],
            r = this.tracker.newEvent(CE2.eventTypes.CUSTOM_PERFORMANCE, {
              attributes: s,
            });
          this.tracker.send(r);
        }
        onUnload() {
          if (Object.keys(nt.metrics).length)
            for (let e = 0, t = Object.keys(nt.metrics); e < t.length; e++) {
              const s = t[e];
              this.trigger(s);
            }
        }
      }
      const at = /[:@;%~='"\|\*\/\\\.\[\]\{\}\(\)]/g,
        ct = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;
      function lt(e) {
        if (e instanceof DocumentFragment) return ":scope";
        let t = [];
        const { id: s } = e;
        if (
          (t.push(e.nodeName.toLowerCase()),
          s && "string" == typeof s && !/^\d/.test(s))
        )
          t.push(
            `#${((i = s), i.replace(at, "\\$&").replace(/^\s+|\s+$/g, ""))}`
          );
        else {
          const s =
            ((r = e),
            [].slice
              .call(r.classList)
              .filter((e) => e.match(ct))
              .map((e) => `.${e}`)
              .join(""));
          s && t.push(s);
        }
        var r, i;
        if (((t = t.join("")), 1 === e.parentNode.querySelectorAll(t).length))
          return t;
        const n = (function (e) {
          const { children: t } = e.parentNode;
          let s = 0;
          for (let r = 0; r < t.length; r++) {
            const i = t[r];
            if ((i.tagName === e.tagName && s++, i === e)) return s;
          }
        })(e);
        return `${e.nodeName.toLowerCase()}:nth-of-type(${n})`;
      }
      function ht(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function ut(e) {
        const t = [],
          { body: s, documentElement: r } = e.ownerDocument;
        let i;
        if (e === s || e === r) return e.tagName.toLowerCase();
        if (e._ce_selector) {
          const t = ht(e).querySelectorAll(e._ce_selector);
          if (1 === t.length && t[0] === e) return e._ce_selector;
        }
        for (
          ;
          e &&
          (t.unshift(lt(e)),
          (i = ht(e).querySelectorAll(t.join(" > "))),
          1 !== i.length);
          e = e.parentNode
        );
        return (e._ce_selector = t.join(" > "));
      }
      class dt {
        constructor(e) {
          CE2BH.defineProperty(this, "mouseEventTypes", {
            movement: "m",
            mouseup: "u",
            mousedown: "d",
          }),
            (this.tracker = e),
            (this.mousePos = null),
            (this.mousePositions = []),
            this.tracker.addEventListener("mousemove", W(this, "mousemove")),
            this.tracker.addEventListener("mouseup", W(this, "mouseup")),
            this.tracker.addEventListener("mousedown", W(this, "mousedown")),
            this.tracker.addSampleCallback(W(this, "sample")),
            this.tracker.addDiffCallback(W(this, "diff"));
        }
        cleanup() {}
        mousedown(e) {
          if (!e) return;
          this.tracker.onActivity();
          const t = this.buildMouseEvent(e, this.mouseEventTypes.mousedown);
          t && ((this.mousePos = t), this.sample());
        }
        mouseup(e) {
          if (!e) return;
          this.tracker.onActivity();
          const t = this.buildMouseEvent(e, this.mouseEventTypes.mouseup);
          t && ((this.mousePos = t), this.sample());
        }
        mousemove(e) {
          if (!e) return;
          this.tracker.onActivity();
          const t = this.buildMouseEvent(e, this.mouseEventTypes.movement);
          t && (this.mousePos = t);
        }
        sample() {
          try {
            const { mousePos: e } = this;
            if (e) {
              const t = this.mousePositions[this.mousePositions.length - 1];
              if (
                t &&
                ((e, t) => {
                  const s = Object.getOwnPropertyNames(e),
                    r = Object.getOwnPropertyNames(t);
                  if (s.length != r.length) return !1;
                  for (let r = 0; r < s.length; r++) {
                    const i = s[r];
                    if (e[i] !== t[i]) return !1;
                  }
                  return !0;
                })(e.fingerprint, t.fingerprint)
              ) {
                const t = e.movements[0];
                this.mousePositions[
                  this.mousePositions.length - 1
                ].movements.push(t);
              } else this.mousePositions.push(e);
              delete this.mousePos;
            }
          } catch (e) {
            (0, ke.A)(e);
          }
        }
        diff() {
          try {
            if (this.mousePositions.length > 0) {
              const e = [];
              for (let t = 0, s = this.mousePositions; t < s.length; t++) {
                const r = s[t],
                  i = [];
                for (let e = 0, t = r.movements; e < t.length; e++) {
                  const s = t[e];
                  let r;
                  "m" === s.type
                    ? (r = [
                        s.relativeX,
                        s.relativeY,
                        s.timestamp,
                        s.pageX,
                        s.pageY,
                        s.type,
                      ])
                    : ("u" !== s.type && "d" !== s.type) ||
                      (r = [
                        s.relativeX,
                        s.relativeY,
                        s.timestamp,
                        s.pageX,
                        s.pageY,
                        s.type,
                        s.button,
                        s.clickType,
                      ]),
                    i.push(r);
                }
                const n = [r.movements.length, i, r.selector];
                e.push(n);
              }
              const t = [this.tracker.visitID, "v2", e],
                s = this.tracker.newEvent(CE2.eventTypes.MOUSE_MOVEMENT, {
                  attributes: t,
                });
              this.tracker.send(s), (this.mousePositions = []);
            }
          } catch (e) {
            (0, ke.A)(e);
          }
        }
        buildMouseEvent(e, t) {
          try {
            if (
              t === this.mouseEventTypes.mousedown ||
              t === this.mouseEventTypes.mouseup
            ) {
              const { fp: s, selector: r } = this.lastPosition,
                i = CE2BH.extends({}, this.lastPosition.movementData, {
                  type: t,
                  timestamp: +new Date(),
                }),
                n = this.tracker.eventHandlers.click.mouseButton(e);
              return (
                (i.button = n),
                "l" === n &&
                  t === this.mouseEventTypes.mousedown &&
                  (i.clickType =
                    this.tracker.eventHandlers.click.getClickType(e)),
                { fingerprint: s, selector: r, movements: [i] }
              );
            }
            const s = document.elementFromPoint(e.clientX, e.clientY);
            if (s && s.getBoundingClientRect) {
              const r = s.getBoundingClientRect(),
                i = this.tracker.getFingerprint(s),
                n = e.clientX - (r.x || r.left),
                o = e.clientY - (r.y || r.top),
                a = ((n / r.width) * 100).toFixed(4),
                c = ((o / r.height) * 100).toFixed(4),
                l = e.pageX || 0,
                h = e.pageY || 0,
                u = {
                  relativeX: a,
                  relativeY: c,
                  timestamp: +new Date(),
                  pageX: l,
                  pageY: h,
                  type: t,
                },
                d = ut(s);
              return (
                (this.lastPosition = { fp: i, movementData: u, selector: d }),
                { fingerprint: i, selector: d, movements: [u] }
              );
            }
          } catch (e) {
            (0, ke.A)(e);
          }
        }
      }
      function pt(e) {
        try {
          !e ||
            e.isCensored ||
            CE2.d.hidden ||
            (e.ce || (e.ce = {}),
            e.ce.imgScheduled ||
              ((e.ce.imgScheduled = !0),
              setTimeout(() => {
                try {
                  (e.ce.imgScheduled = !1),
                    e.toBlob((t) => {
                      const s = new CE2.Native.URL(
                        `/canvas-urls/${e.width}x${e.height}/${t.size}/${
                          t.type && t.type.replace("/", ".")
                        }`,
                        CE2.d.baseURI
                      ).toString();
                      (e.ce.imgUrl = s),
                        (e.ce.blob = t),
                        s !== e.getAttribute("ce-img-taken") &&
                          e.setAttribute("ce-img-taken", s);
                    }, "image/webp");
                } catch (e) {
                  (0, q.Yz)("error saving the canvas image", e);
                }
              }, 1e3)));
        } catch (e) {
          (0, q.Yz)("error saving the canvas image", e);
        }
      }
      function ft(e) {
        pt(e.canvas);
      }
      const mt = [
          {
            type: CE2.w.CanvasRenderingContext2D,
            methods: [
              "stroke",
              "fillText",
              "strokeText",
              "fillRect",
              "drawImage",
              "clearRect",
              "translate",
              "transform",
              "fill",
              "clear",
              "rect",
              "strokeRect",
              "putImageData",
            ],
          },
        ],
        gt = {
          track() {
            this.overridden ||
              (mt.forEach((e) => {
                e.type &&
                  e.methods &&
                  e.methods.forEach((t) => {
                    !(function (e, t, s) {
                      const r = e.prototype[t];
                      e.prototype[t] = function (...e) {
                        r.call(this, ...e), s(this, t, ...e);
                      };
                    })(e.type, t, ft);
                  });
              }),
              (this.overridden = !0)),
              CE2.d.querySelectorAll("canvas").forEach((e) => {
                pt(e);
              });
          },
        };
      class Et {
        constructor(e) {
          this.tracker = e;
          try {
            (0, se.jI)("v11_canvas_tracking") && gt.track(),
              CE2.pageState.startCapture(this.captureOptions());
          } catch (e) {
            this.tracker.pageStateError(e);
          }
        }
        update(e) {
          if (((this.prevState = null), e)) {
            CE2.pageState.stopCapture();
            try {
              CE2.pageState.startCapture(this.captureOptions());
            } catch (e) {
              this.tracker.pageStateError(e);
            }
          }
        }
        cleanup() {
          CE2.pageState.stopCapture();
        }
        trigger(e, t, s, r, i, n) {
          if (
            !this.prevState ||
            this.prevState.pageUrl !== e ||
            this.prevState.md5 !== s
          ) {
            const o = [i || this.tracker.visitID, e, s, t, n],
              a = this.tracker.newEvent(CE2.eventTypes.PAGE_STATE, {
                timestamp: r,
                attributes: o,
              });
            this.tracker.send(a, { timestamp: r }),
              (this.prevState = { pageUrl: e, md5: s });
          }
        }
        captureOptions() {
          const { tracker: e } = this;
          return {
            uid: CE2.data.uid,
            trackURL: e.trackURL,
            getVisitId: () => e.visitID,
            getUrl: () => e.url,
            onPageState: (...t) => e.pageState(...t),
            onPageStateError: (...t) => e.pageStateError(...t),
            censoredElements: e.censoredElements,
            hideIframes: e.hideIframes,
            disableMasking: !!CE2.data.disable_recordings_masking,
            disableEmailMasking: !!CE2.data.disable_recordings_email_masking,
            stylesheetPerformance: (0, se.jI)("v11_page_state_performance"),
          };
        }
      }
      const vt = [
        "longtask",
        "first-input",
        "layout-shift",
        "largest-contentful-paint",
      ];
      class Ct {
        constructor(e) {
          (this.tracker = e),
            (this.startTracking = W(this, "startTracking")),
            CE2.w.PerformanceObserver &&
              PerformanceObserver.supportedEntryTypes &&
              CE2.onDOMReady(this.startTracking);
        }
        startTracking() {
          const e = new PerformanceObserver(W(this, "observe"));
          for (let t = 0; t < vt.length; t++) {
            const s = vt[t];
            PerformanceObserver.supportedEntryTypes.indexOf(s) >= 0 &&
              e.observe({ type: s, buffered: !0 });
          }
        }
        observe(e) {
          const t =
            !("visibilityState" in CE2.d) ||
            "visible" === CE2.d.visibilityState;
          for (let s = 0, r = e.getEntries(); s < r.length; s++) {
            const e = r[s];
            let i;
            const n = [this.tracker.visitID, e.name, e.startTime, e.duration];
            switch (e.entryType) {
              case "longtask":
                (i = [
                  ...n,
                  e.attributes.containerType,
                  e.attributes.containerSrc,
                  e.attributes.containerId,
                  e.attributes.containerName,
                ]),
                  this.sendEvent(CE2.eventTypes.LONG_TASK, i);
                break;
              case "first-input":
                (i = [...n, e.processingStart - e.startTime]),
                  this.sendEvent(CE2.eventTypes.FIRST_INPUT_DELAY, i);
                break;
              case "layout-shift":
                (i = [...n, 1e3 * e.value]),
                  t &&
                    !e.hadRecentInput &&
                    this.sendEvent(CE2.eventTypes.CUMULATIVE_LAYOUT_SHIFT, i);
                break;
              case "largest-contentful-paint":
                this.sendEvent(CE2.eventTypes.LARGEST_PAINT, n);
            }
          }
        }
        sendEvent(e, t = []) {
          const s = this.tracker.newEvent(e, { attributes: t });
          this.tracker.send(s);
        }
      }
      const yt = "ce_visit_timings";
      class kt {
        constructor(e) {
          (this.tracker = e),
            (this.isReloadedVisit = CE2.w.performance
              ?.getEntriesByType("navigation")
              .map((e) => e.type)
              .includes("reload")),
            this.update();
        }
        update(e, t) {
          if (this.isReloadedVisit) return;
          const { pathname: s } = CE2.w.location;
          if (!this.visitPath || t) {
            (this.visitPath = s),
              (this.currentVisit = this.getVisitTiming(s) || {});
            const e = +new Date();
            if (
              this.currentVisit &&
              this.currentVisit.endTime &&
              this.currentVisit.endTime - e < 2e4
            ) {
              const e = [this.tracker.visitID],
                t = this.tracker.newEvent(CE2.eventTypes.QUICKBACK, {
                  attributes: e,
                });
              this.tracker.send(t);
            }
            this.isReloadedVisit = !1;
          }
        }
        unload() {
          return (
            this.currentVisit &&
              ((this.currentVisit.endTime = +new Date()),
              this.putVisitTiming(this.visitPath, this.currentVisit)),
            !1
          );
        }
        putVisitTiming(e, t) {
          const s = this.getVisitsTimings();
          (s[e] = t),
            CE2.Native.sessionStorage.setItem(yt, CE2.Native.JSON.stringify(s));
        }
        getVisitTiming(e) {
          return this.getVisitsTimings()[e];
        }
        getVisitsTimings() {
          return CE2.Native.JSON.parse(
            CE2.Native.sessionStorage.getItem(yt) || "{}"
          );
        }
      }
      class bt {
        constructor(e) {
          (this.tracker = e),
            (this.browserSizes = []),
            this.tracker.addSampleCallback(W(this, "sample")),
            this.tracker.addDiffCallback(W(this, "diff"));
        }
        sample() {
          try {
            const e = CE2.w,
              t = e.innerWidth || e.screen.availWidth,
              s = e.innerHeight || e.screen.availHeight,
              { lastBrowserSize: r } = this;
            if (r && r[0] === t && r[1] === s) return;
            if (z && r && r[0] === t && r[1] !== s) return;
            (this.lastBrowserSize = [t, s, +new Date()]),
              this.browserSizes.push(this.lastBrowserSize);
          } catch (e) {
            (0, ke.A)(e);
          }
        }
        diff() {
          try {
            if (this.browserSizes.length > 0) {
              const e = [this.tracker.visitID, this.browserSizes],
                t = this.tracker.newEvent(CE2.eventTypes.RESIZE, {
                  attributes: e,
                });
              this.tracker.send(t), (this.browserSizes = []);
            }
          } catch (e) {
            (0, ke.A)(e);
          }
        }
      }
      class wt {
        constructor(e) {
          (this.tracker = e),
            (this.scrollTracker = new Ne()),
            (this.trackScrollInterval = setInterval(
              W(this, "trackScroll"),
              100
            )),
            (this.foundAnchorBind = W(this, "foundAnchor"));
        }
        cleanup() {
          clearInterval(this.trackScrollInterval),
            delete this.scrollTracker,
            delete this.foundAnchorBind;
        }
        trackScroll() {
          const e = CE2.fp.scroll();
          this.scrollTracker.shouldRecordScroll(e) &&
            this.scrollTracker.findAnchor(e, this.foundAnchorBind);
        }
        foundAnchor(e, t) {
          const s = e.top,
            r = e.height;
          let i, n, o;
          t &&
            ((t = this.tracker.getElementToRecord(t)),
            (i = this.tracker.getFingerprint(t)),
            (n = e.top - i.pageY),
            (o = e.top + e.height - i.pageY));
          const a = [
              this.tracker.visitID,
              ...this.tracker.getFingerprintAttributes(i),
              s,
              r,
              n,
              o,
            ],
            c = this.tracker.newEvent(CE2.eventTypes.SCROLL, { attributes: a });
          this.tracker.send(c);
        }
      }
      var Tt = s(9880);
      class St {
        constructor(e) {
          this.tracker = e;
        }
        trigger() {
          const e = CE2.isBot(!0);
          if (
            (0, se.jI)("v11_disable_bot_detection") &&
            e &&
            (this.tracker.addTag("bot"),
            CE2.w.serverLog && this.tracker.visitor && this.tracker.session)
          )
            try {
              CE2.w.serverLog({
                id: this.tracker.visitor.getId(),
                value: `sessionid:${this.tracker.session.id}, bot:${e}`,
              });
            } catch (e) {
              (0, q.Yz)(`error logging bot reason: ${e.message}`);
            }
          const t = CE2.state.overridenRecordingSamplingRate
            ? parseInt(100 / CE2.state.overridenRecordingSamplingRate, 10)
            : (0, Tt.C)(this.tracker.site);
          Number.isNaN(Number(t)) || (this.siteRatio = t),
            CE2.sessionTags.length > 0 && this.tracker.addTag(CE2.sessionTags),
            CE2.appliedStrategy && this.sendSessionRatio();
        }
        sendSessionRatio() {
          const e = [this.siteRatio, CE2.appliedStrategy],
            t = this.tracker.newEvent(CE2.eventTypes.SESSION_RATIO, {
              attributes: e,
            });
          this.tracker.send(t);
        }
      }
      class _t {
        constructor(e) {
          e === document
            ? (this.doc = e)
            : ((this.doc = e.shadowRoot), (this.container = e)),
            (this.attachShadowListeners = []),
            this.patchAttachShadow(),
            (this.onMutation = this._onMutation.bind(this)),
            (this.mutationObserver = new MutationObserver(this.onMutation)),
            this.mutationObserver.observe(this.doc, {
              subtree: !0,
              childList: !0,
            }),
            (this.subMonitors = this.findAllContainers().map((e) => new _t(e))),
            (this.listeners = []);
        }
        destroy() {
          this.mutationObserver && this.mutationObserver.disconnect();
          for (let e = 0, t = this.listeners; e < t.length; e++) {
            const { event: s, callback: r, opt: i } = t[e];
            this.doc.removeEventListener(s, r, i);
          }
          for (let e = 0, t = this.subMonitors; e < t.length; e++) {
            t[e].destroy();
          }
        }
        findAllContainers() {
          return CE2.Native.Array.from(this.doc.querySelectorAll("*")).filter(
            (e) => e.shadowRoot
          );
        }
        findMonitor(e) {
          if (this.doc === e || this.doc.contains(e)) return this;
          for (let t = 0, s = this.subMonitors; t < s.length; t++) {
            const r = s[t].findMonitor(e);
            if (r) return r;
          }
        }
        attachShadow(e) {
          const t = this.findMonitor(e);
          t && t.addSubMonitor(e),
            this.attachShadowListeners.forEach((t) => {
              t(e);
            });
        }
        onAttachShadow(e) {
          this.attachShadowListeners.push(e);
        }
        _onMutation(e) {
          for (let t = 0; t < e.length; t++) {
            const s = e[t];
            for (let e = 0, t = s.addedNodes; e < t.length; e++) {
              const s = t[e];
              s.nodeType === Node.ELEMENT_NODE &&
                s.shadowRoot &&
                this.addSubMonitor(s);
            }
            for (let e = 0, t = s.removedNodes; e < t.length; e++) {
              const s = t[e];
              s.nodeType === Node.ELEMENT_NODE &&
                s.shadowRoot &&
                this.removeSubMonitor(s);
            }
          }
        }
        patchAttachShadow() {
          if (_t.patchedAttachShadow) return;
          const e = Element.prototype.attachShadow,
            t = this;
          (Element.prototype.attachShadow = function (s) {
            const r = e.call(this, s);
            return s && "open" === s.mode && t.attachShadow(this), r;
          }),
            (_t.patchedAttachShadow = !0);
        }
        addSubMonitor(e) {
          const t = new _t(e);
          this.subMonitors.push(t);
          for (let e = 0, s = this.listeners; e < s.length; e++) {
            const r = s[e];
            t.addEventListener(r.event, r.callback, r.opt);
          }
        }
        removeSubMonitor(e) {
          const t = K(this.subMonitors, (t) => t.container === e);
          t && t.destroy();
        }
        addEventListener(e, t, s) {
          this.listeners.push({ event: e, callback: t, opt: s }),
            this.doc.addEventListener(e, t, s);
          for (let r = 0, i = this.subMonitors; r < i.length; r++) {
            i[r].addEventListener(e, t, s);
          }
        }
        removeEventListener(e, t, s) {
          K(
            this.listeners,
            (r) => r.event === e && r.callback === t && r.opt === s
          ),
            this.doc.removeEventListener(e, t, s);
          for (let r = 0, i = this.subMonitors; r < i.length; r++) {
            i[r].removeEventListener(e, t, s);
          }
        }
        getComposedPath(e) {
          const t = [];
          let s = e;
          for (; s; ) {
            if ((t.push(s), s === document)) {
              t.push(window);
              break;
            }
            if (s.parentNode) s = s.parentNode;
            else {
              const e = this.findMonitor(s);
              s = e && e.container;
            }
          }
          return t;
        }
      }
      const At = new _t(document);
      class It {
        constructor(e) {
          (this.tracker = e),
            (this.scrolls = []),
            this.calculateInitialScrolls(),
            this.tracker.addEventListener("scroll", W(this, "onScroll"), At),
            this.tracker.addDiffCallback(W(this, "diff"));
        }
        onScroll(e) {
          this.tracker.onActivity();
          let t = e.target;
          t === CE2.d && (t = CE2.d.scrollingElement);
          const s = e.composed && e.composedPath();
          this.bufferScrollFor(t, s);
        }
        bufferScrollFor(e, t = null) {
          const s = (function (e, t = null) {
              if (!t) return [ut(e)];
              const s = [[]];
              for (let e = 0; e < t.length; e++) {
                const r = t[e];
                s[0].push(r),
                  r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && s.unshift([]);
              }
              return s.map((e) => ut(e[0]));
            })(e, t || At.getComposedPath(e)),
            r = this.scrollKey(s),
            i = this.scrolls.find((e) => this.scrollKey(e[0]) === r),
            n = Date.now(),
            o = this.recordScrollOfElement(e);
          if (i) {
            const t = i[1],
              s = t[t.length - 1];
            n - s[2] > this.tracker.SAMPLE_INTERVAL
              ? t.push(o)
              : ((s[0] = e.scrollTop), (s[1] = e.scrollLeft));
          } else this.scrolls.push([s, [o]]);
        }
        recordScrollOfElement(e) {
          return [e.scrollTop, e.scrollLeft, +new Date()];
        }
        diff() {
          try {
            if (this.scrolls.length > 0) {
              const e = [this.tracker.visitID, this.scrolls],
                t = this.tracker.newEvent(CE2.eventTypes.SESSION_SCROLL, {
                  attributes: e,
                });
              this.tracker.send(t), (this.scrolls = []);
            }
          } catch (e) {
            (0, ke.A)(e);
          }
        }
        scrollKey(e) {
          return e.join("→");
        }
        calculateInitialScrolls() {
          const e = CE2.d.querySelectorAll("html, body, body *");
          for (let t = 0; t < e.length; t++) {
            const s = e[t];
            (s.scrollTop || s.scrollLeft) &&
              this.scrolls.push([[ut(s)], [this.recordScrollOfElement(s)]]);
          }
          this.diff();
        }
      }
      class Ot {
        constructor(e) {
          CE2BH.defineProperty(this, "LIMIT_BETWEEN_TYPE_EVENTS", 6e4),
            (this.tracker = e),
            this.tracker.addEventListener("keydown", W(this, "onKeydown"));
        }
        update() {
          delete this.formEntry;
        }
        onKeydown(e) {
          this.tracker.onActivity();
          const t = e.target,
            s = +new Date();
          if (
            (0, se.B5)(t, "input, [contenteditable]") &&
            ("INPUT" !== t.tagName ||
              !["submit", "reset", "button"].some(
                (e) => e === t.type && t.type.toLowerCase()
              )) &&
            (this.lastTypedElement !== t ||
              this.lastTypedTime - s > this.LIMIT_BETWEEN_TYPE_EVENTS)
          ) {
            const e = (0, se.B5)(t, "form *"),
              r = [this.tracker.visitID, e],
              i = this.tracker.newEvent(CE2.eventTypes.TYPING, {
                attributes: r,
              });
            this.tracker.send(i), e && (this.formEntry = s);
          }
          (this.lastTypedElement = t), (this.lastTypedTime = t);
        }
      }
      class Nt {
        constructor(e) {
          (this.tracker = e),
            this.tracker.addEventListener(
              "visibilitychange",
              W(this, "onVisibilitychange")
            );
        }
        onVisibilitychange() {
          const e = !document.hidden;
          if (
            (this.tracker.isDocumentHiddenOnce ||
              (this.tracker.isDocumentHiddenOnce = document.hidden),
            this.pageVisibility !== e)
          ) {
            this.pageVisibility = e;
            const t = [this.tracker.visitID, e],
              s = this.tracker.newEvent(CE2.eventTypes.PAGE_VISIBILITY, {
                attributes: t,
              });
            this.tracker.send(s),
              this.tracker.processBuffer({ sendBeacon: !0 });
          }
        }
      }
      class Rt {
        constructor(e) {
          this.tracker = e;
        }
        trigger(e = {}) {
          const { snapshotOnly: t } = e,
            s = CE2.d,
            r = CE2.w;
          let i,
            n = 0;
          !t &&
            this.tracker.session &&
            ((n = this.tracker.session.numberVisits()),
            this.tracker.virtual ? (n -= 1) : (n < 0 && (n = 0), (n += 1))),
            this.tracker.eventHandlers.ecommerce?.constructor?.name &&
              "Generic" !=
                this.tracker.eventHandlers.ecommerce.constructor.name &&
              (i = this.tracker.eventHandlers.ecommerce.constructor.name);
          const o = [
              s.referrer,
              this.tracker.visitor.isReturning(),
              r.screen.width,
              r.screen.height,
              r.innerWidth || s.documentElement.clientWidth,
              r.innerHeight || s.documentElement.clientHeight,
              (0, se.ne)(),
              this.tracker.url,
              n,
              this.tracker.visitor.getNumVisits(),
              this.tracker.masked,
              this.tracker.pageFingerprint,
              this.tracker.visitorIdentification,
              i,
            ],
            a = this.tracker.newEvent(CE2.eventTypes.VISIT, {
              eventID: this.tracker.visitID,
              attributes: o,
            });
          this.tracker.session && this.tracker.session.setNumberVisits(n),
            t
              ? this.tracker.sendImmediatelly(a, { flow: "s" })
              : this.tracker.send(a),
            this.tracker.virtual ||
              (!this.tracker.snapshots?.length && !this.tracker.session) ||
              this.triggerPerformance(e);
        }
        triggerPerformance(e = {}) {
          const { snapshotOnly: t } = e,
            s = CE2.w;
          this.performanceObserver &&
            (this.performanceObserver.disconnect(),
            delete this.performanceObserver),
            (this.performanceEvents = {}),
            s.performance &&
              s.performance.getEntriesByType &&
              (this.handlePerformanceEntries(
                s.performance.getEntriesByType("navigation"),
                t
              ),
              this.handlePerformanceEntries(
                s.performance.getEntriesByType("paint"),
                t
              ),
              "undefined" != typeof PerformanceObserver &&
                ((this.performanceObserver = new PerformanceObserver((e) => {
                  this.handlePerformanceEntries(e.getEntries(), t);
                })),
                this.performanceObserver.observe({
                  entryTypes: ["navigation", "paint"],
                })));
        }
        handlePerformanceEntries(e = [], t = !1) {
          this.tracker.isDocumentHiddenOnce ||
            e.forEach((e) => {
              "navigation" === e.entryType
                ? (e.domContentLoadedEventStart &&
                    this.sendPerformance(
                      CE2.eventTypes.DOM_CONTENT_LOADED,
                      e.domContentLoadedEventStart,
                      t
                    ),
                  e.domInteractive &&
                    this.sendPerformance(
                      CE2.eventTypes.DOM_INTERACTIVE,
                      e.domInteractive,
                      t
                    ),
                  e.loadEventStart &&
                    this.sendPerformance(
                      CE2.eventTypes.PAGE_LOAD,
                      e.loadEventStart,
                      t
                    ))
                : "first-contentful-paint" === e.name &&
                  this.sendPerformance(
                    CE2.eventTypes.FIRST_CONTENTFUL_PAINT,
                    e.startTime,
                    t
                  );
            });
        }
        sendPerformance(e, t, s = !1) {
          if (!this.performanceEvents[e]) {
            const r = [this.tracker.visitID, t],
              i = this.tracker.newEvent(e, { attributes: r });
            s
              ? this.tracker.sendImmediatelly(i, { flow: "s" })
              : this.tracker.send(i),
              (this.performanceEvents[e] = !0);
          }
        }
      }
      CE2.ASSET_COLLECTOR_IGNORE_DOMAINS = [
        "bat.bing.com",
        "www.facebook.com/tr",
        "www.google.",
        "www.google-analytics.",
        "ssl.google-analytics.",
        "www.googletagmanager.",
        "googleads.g",
        "sp.analytics.yahoo.",
        "heapanalytics.com",
        "dev.visualwebsiteoptimizer.",
        "b.6sc.co",
        "hn.inspectlet.",
        "d.adroll.",
        "secure.adnxs.",
        "match.adsrvr.",
        "ads.travelaudience.",
        "www.linkconnector.",
        "px.ads.linkedin.",
        "cdn.bizible.",
        "ih.adscale.",
        "rtb-csync.smartadserver.",
        "x.bidswitch.net/sync",
        "ad.doubleclick.",
      ];
      const Lt = {
        3: "Crazy Egg Bot",
        2: "Crazy Egg Bot (Mobile)",
        1: "Crazy Egg Bot",
      };
      class Pt {
        constructor(e = null) {
          if (e) {
            this.storageKey = e;
            const t = CE2.Native.sessionStorage.getItem(this.storageKey);
            t && (this.queue = CE2.Native.JSON.parse(t));
          }
          this.queue || (this.queue = []);
        }
        push(e) {
          const t = [];
          for (let s = 0; s < e.length; s++) {
            const r = e[s];
            if (!r || !r.url) continue;
            const i = this.queue.findIndex((e) => e.url === r.url);
            if (i >= 0) this.queue[i] = r;
            else {
              t.findIndex((e) => e.url === r.url) < 0 && t.push(r);
            }
          }
          t.length && (this.queue = this.queue.concat(t)), this.updateStorage();
        }
        fetch(e) {
          const t = this.queue.splice(0, e);
          return this.updateStorage(), t;
        }
        include(e) {
          return this.queue.findIndex((t) => t.url === e) > -1;
        }
        length() {
          return this.queue.length;
        }
        updateStorage() {
          this.storageKey &&
            CE2.Native.sessionStorage.setItem(
              this.storageKey,
              CE2.Native.JSON.stringify(this.queue)
            );
        }
      }
      class Dt {
        constructor(e) {
          (this.tracker = e),
            (this.OBSERVER_CACHE_KEY = "ce_asset"),
            (this.LOCAL_CACHE_ASSET_MAX_SIZE = 5e3),
            (this.LOCAL_ASSET_OBSERVER_CACHE_KEY = "ce_local_asset_cache"),
            (this.WAITING_QUEUE_KEY = "ce_asset_waiting"),
            (this.SAMPLE_INTERVAL =
              "undefined" == typeof CE_ASSET_COLLECTOR_INTERVAL
                ? 1e4
                : CE_ASSET_COLLECTOR_INTERVAL),
            (this.URL_REGEX = /url\(["'](.+?)["']\)/),
            (this.BATCH_SIZE = 20);
          const t = new Set();
          for (
            let e = 0, s = CE2.ASSET_COLLECTOR_IGNORE_DOMAINS;
            e < s.length;
            e++
          ) {
            const r = s[e];
            t.add(r);
          }
          for (
            let e = 0, s = CE2.data.asset_collector_ignore || [];
            e < s.length;
            e++
          ) {
            const r = s[e];
            t.add(r);
          }
          (this.IGNORE_DOMAINS = []),
            t.forEach((e) => {
              this.IGNORE_DOMAINS.push(e);
            });
        }
        setup() {
          (this.uri = new CE2.URL(CE2.w.location.toString())),
            this.setupObserverCache(),
            this.setupWorker(),
            this.schedulePerformanceObserver(),
            this.scheduleDataAndBlobCollection(1e3),
            this.collectCanvasImages();
        }
        cleanup() {
          this.performanceObserver &&
            (this.performanceObserver.disconnect(),
            delete this.performanceObserver),
            this.collectAssetsTimeout &&
              clearTimeout(this.collectAssetsTimeout),
            this.collectCanvasImagesTimeout &&
              clearTimeout(this.collectCanvasImagesTimeout),
            this.worker && this.worker.terminate();
        }
        setupObserverCache() {
          const e = CE2.Native.sessionStorage.getItem(
            this.LOCAL_ASSET_OBSERVER_CACHE_KEY
          );
          this.observerCache = e ? new ye(CE2.Native.JSON.parse(e)) : new ye();
        }
        addObserverCache(e) {
          if (e && e.length) {
            for (let t = 0; t < e.length; t++) {
              const s = e[t];
              this.observerCache.add(s.cacheKey);
            }
            CE2.Native.sessionStorage.setItem(
              this.LOCAL_ASSET_OBSERVER_CACHE_KEY,
              CE2.Native.JSON.stringify(
                this.observerCache
                  .items()
                  .slice(0, this.LOCAL_CACHE_ASSET_MAX_SIZE)
              )
            );
          }
        }
        checkObserverCache(e) {
          return this.observerCache.test(e);
        }
        collectCanvasImages() {
          const e = [];
          let t;
          for (
            let s = 0, r = CE2.d.querySelectorAll("canvas[ce-img-taken]");
            s < r.length;
            s++
          ) {
            const i = r[s],
              { ce: n } = i;
            if (n && n.imgUrl && n.blob) {
              const { blob: s, imgUrl: r } = n;
              (t = this.prepareAsset(r, { source: "canvas" })),
                t &&
                  ((t.data = s),
                  (t.contentType = s.type),
                  (t.contentLength = s.size),
                  e.push(t)),
                delete i.ce.blob;
            }
          }
          this.queueForWorker(e),
            (this.collectCanvasImagesTimeout = setTimeout(
              W(this, "collectCanvasImages"),
              500
            ));
        }
        collectDataAndBlobAssets() {
          const e = [];
          let t;
          if (CE2.d.images)
            for (let s = 0, r = CE2.d.images; s < r.length; s++) {
              const i = r[s],
                n = i.currentSrc || i.src;
              this.isBlobOrDataUrl(n) &&
                ((t = this.prepareAsset(n, { source: "images" })),
                t && e.push(t));
            }
          if (CE2.d.styleSheets)
            for (let s = 0, r = CE2.d.styleSheets; s < r.length; s++) {
              const i = r[s];
              this.isBlobOrDataUrl(i.href) &&
                ((t = this.prepareAsset(i.href, { source: "stylesheets" })),
                t && e.push(t));
            }
          this.queueForWorker(e),
            this.scheduleDataAndBlobCollection(this.SAMPLE_INTERVAL);
        }
        schedulePerformanceObserver() {
          const e = CE2.w;
          e.performance &&
            e.performance.getEntriesByType &&
            (this.handlePerformanceEntries(
              e.performance.getEntriesByType("resource")
            ),
            "undefined" != typeof PerformanceObserver &&
              ((this.performanceObserver = new PerformanceObserver((e) => {
                this.handlePerformanceEntries(e.getEntries());
              })),
              this.performanceObserver.observe({ entryTypes: ["resource"] })));
        }
        scheduleDataAndBlobCollection(e) {
          this.collectAssetsTimeout = setTimeout(
            W(this, "collectDataAndBlobAssets"),
            e
          );
        }
        handlePerformanceEntries(e) {
          const t = [];
          let s;
          const r = [];
          let i = !1;
          for (let n = 0; n < e.length; n++) {
            const o = e[n];
            let a = !1;
            ("img" !== o.initiatorType && "css" !== o.initiatorType) ||
              (a = !0);
            try {
              new URL(o.name).pathname.endsWith(".ttf") && (a = !0);
            } catch (e) {
              CE2.debugError(e);
            }
            ("link" !== o.initiatorType && "other" !== o.initiatorType) ||
              (i ||
                ([
                  document.querySelectorAll("link[rel=stylesheet]"),
                  document.querySelectorAll("link[rel~=preload][as=style]"),
                  document.querySelectorAll("link[rel~=preload][as=font]"),
                  document.querySelectorAll("link[rel~=preload][as=image]"),
                ].forEach((e) => e.forEach((e) => r.push(e.href))),
                (i = !0)),
              r.includes(o.name) && (a = !0)),
              a &&
                ((s = this.prepareAsset(o.name, { source: "network" })),
                s && t.push(s));
          }
          this.queueForWorker(t);
        }
        setupWorker() {
          if (!this.worker) {
            if (
              ((this.workerQueue = new Pt()),
              (this.workerWaitingQueue = new Pt(this.WAITING_QUEUE_KEY)),
              (this.worker = (0, se.UO)(
                "crazyegg-assets",
                (e) => {
                  if ("undefined" == typeof CE2libs)
                    return void CE2.debug("[Tracker] CE2libs not available");
                  const {
                      assets: t,
                      session: s,
                      uid: r,
                      origin: i,
                      trackURL: n,
                      trackingKey: o,
                      userAgent: a,
                    } = e.data,
                    c = {
                      session: s,
                      uid: r,
                      origin: i,
                      assets: [],
                      userAgent: a,
                    };
                  for (let e = 0; e < t.length; e++) {
                    const s = t[e],
                      r = { url: s.url };
                    s.data &&
                      ((r.contentType = s.contentType),
                      (r.contentLength = s.contentLength),
                      (r.contentEncoding = "gzip"),
                      s.contentType && s.contentType.indexOf("text/css") > -1
                        ? (r.digest = CE2libs.md5(s.data))
                        : (r.digest = CE2libs.md5(
                            new FileReaderSync().readAsText(
                              s.data.slice(0, 8e3)
                            )
                          ))),
                      c.assets.push(r);
                  }
                  CE2.http.send(`${n}/assets?tk=${o}`, JSON.stringify(c), {
                    contentType: "application/json",
                    retry: 5,
                    callback: (e) => {
                      let s;
                      if (200 === e.status) s = JSON.parse(e.responseText);
                      else {
                        if (204 !== e.status)
                          return void postMessage({
                            status: e.status,
                            assets: t,
                          });
                        s = [];
                      }
                      for (let e = 0; e < t.length; e++) {
                        const r = t[e],
                          i = s.find((e) => r.url === e.url);
                        i
                          ? ((r.status = i.status), (r.s3 = i.s3))
                          : ((r.status = 2),
                            (r.timestampEnd = +new Date()),
                            (r.collector = "s"));
                      }
                      CE2.promisePool(
                        t,
                        2,
                        (e) =>
                          new Promise((t) => {
                            if (e.s3) {
                              const s = new CE2.FormData();
                              for (
                                let t = 0, r = Object.keys(e.s3.fields);
                                t < r.length;
                                t++
                              ) {
                                const i = r[t];
                                s.append(i, e.s3.fields[i]);
                              }
                              let r = e.data;
                              e.data instanceof Blob &&
                                (r = new Uint8Array(
                                  new FileReaderSync().readAsArrayBuffer(r)
                                )),
                                s.append("file", CE2libs.compress(r)),
                                CE2.http.send(e.s3.url, s, {
                                  retry: 5,
                                  callback: () => {
                                    (e.status = 2),
                                      (e.timestampEnd = +new Date()),
                                      (e.collector = "c"),
                                      t(e);
                                  },
                                });
                            } else t(e);
                          })
                      )
                        .then(() => {
                          postMessage({ status: "ok", assets: t });
                        })
                        .catch((e) => {
                          CE2.debugError(e);
                        });
                    },
                  });
                },
                !0
              )),
              !this.worker)
            )
              return;
            (this.worker.onmessage = (e) => {
              const t = [],
                s = [],
                r = [];
              "ok" !== e.data.status &&
                CE2.debug("[Tracker] Assets api unavailable", e.data.status);
              for (let i = 0, n = e.data.assets; i < n.length; i++) {
                const e = n[i];
                1 === e.status
                  ? (void 0 === e.waiting ? (e.waiting = 0) : (e.waiting += 1),
                    t.push(e))
                  : 3 === e.status ||
                    (4 === e.status && CE2.data.recordings_2_cors_collect)
                  ? ((e.corsSafe = !0), s.push(e))
                  : r.push(e);
              }
              t.length && this.workerWaitingQueue.push(t),
                this.addObserverCache(s),
                this.addObserverCache(r),
                (0, se.jI)("assets-debug-event") &&
                  this.sendEvent(e.data.assets),
                s.length
                  ? this.runWorker(s)
                  : this.workerQueue.length() > 0
                  ? this.runWorker()
                  : setTimeout(W(this, "runWorker"), this.SAMPLE_INTERVAL);
            }),
              this.runWorker();
          }
        }
        queueForWorker(e) {
          e.length && this.workerQueue.push(e);
        }
        runWorker(e) {
          let t = e;
          (t && t.length) ||
            ((t = this.workerQueue.fetch(this.BATCH_SIZE)),
            t.length || (t = this.workerWaitingQueue.fetch(this.BATCH_SIZE))),
            t.length
              ? this.fetchAssetsData(t)
                  .then((e) => {
                    this.worker.postMessage({
                      assets: e,
                      session: this.tracker.session.id,
                      uid: CE2.data.uid,
                      origin: `${CE2.w.location.protocol}//${CE2.w.location.host}`,
                      trackURL: this.tracker.trackURL,
                      trackingKey: CE2.data.tracking_key,
                      userAgent:
                        (CE2.data.explicit_agent &&
                          Lt[CE2.clock.getDeviceType()]) ||
                        "",
                    });
                  })
                  .catch((e) => {
                    CE2.debugError(e);
                  })
              : setTimeout(W(this, "runWorker"), this.SAMPLE_INTERVAL);
        }
        isBlobUrl(e) {
          return 0 === e.indexOf("blob:");
        }
        fetchAssetsData(e) {
          return new Promise((t) => {
            CE2.promisePool(
              e,
              2,
              (e) =>
                new Promise((t) => {
                  if (!e.data && e.corsSafe) {
                    let s = e.originalUrl;
                    if (!e.local) {
                      const e = new CE2.URL(s);
                      (e.query =
                        e.query && e.query.length ? `${e.query}&` : ""),
                        (e.query += "ce=true"),
                        (s = e.getFullUrl());
                    }
                    try {
                      CE2.http.get(
                        s,
                        (s) => {
                          200 === s.status && s.response
                            ? ((e.data = s.response),
                              (e.contentType =
                                s.getResponseHeader("Content-Type")),
                              (e.contentLength = s.response.size
                                ? s.response.size
                                : parseInt(
                                    s.getResponseHeader("Content-Length"),
                                    10
                                  )))
                            : (e.failed = !0),
                            t(e);
                        },
                        "blob"
                      );
                    } catch (s) {
                      (e.failed = !0), t(e);
                    }
                  } else t(e);
                })
            ).then((e) => {
              const s = [],
                r = [];
              for (let t = 0; t < e.length; t++) {
                const i = e[t];
                i.failed || (i.local && !i.data) ? r.push(i) : s.push(i);
              }
              this.addObserverCache(r), t(s);
            });
          });
        }
        localUrl(e) {
          return !!this.isBlobUrl(e) || this.uri.sameOrigin(e);
        }
        prepareAsset(e, t) {
          const s = {
              originalUrl: e,
              source: t.source,
              timestamp: +new Date(),
            },
            r = new CE2.URL(t.baseUrl || CE2.d.baseURI);
          if (!e || ("images" !== s.source && 0 === e.indexOf("data:"))) return;
          if (this.IGNORE_DOMAINS)
            for (let t = 0, s = this.IGNORE_DOMAINS; t < s.length; t++) {
              const r = s[t];
              if (e.indexOf(r) >= 0) return;
            }
          let i = e;
          this.isBlobUrl(e) && (i = e.replace("blob:", "")),
            0 === e.indexOf("data:") &&
              (i = `${CE2.w.location.protocol}//${CE2.w.location.host}/data-urls/${e.length}`),
            0 === i.indexOf("//") && (i = `${r.protocol}:${i}`);
          let n = new CE2.URL(i);
          n.host || (n = r.join(n)), n.normalize();
          const o = n.getFullUrl();
          return ("http" !== n.protocol && "https" !== n.protocol) ||
            this.checkObserverCache(o) ||
            this.workerWaitingQueue.include(o)
            ? void 0
            : ((s.url = n.getFullUrl()),
              (s.cacheKey = o),
              this.localUrl(s.url) && ((s.local = !0), (s.corsSafe = !0)),
              s);
        }
        isBlobOrDataUrl(e) {
          return e && (e.indexOf("blob:") >= 0 || e.indexOf("data:") >= 0);
        }
        sendEvent(e) {
          const t = [];
          for (let s = 0; s < e.length; s++) {
            const r = e[s];
            if (1 === r.status && r.waiting > 0) continue;
            const i = [r.url, r.status, r.timestamp];
            r.timestampEnd && (i.push(r.timestampEnd), i.push(r.collector)),
              t.push(i);
          }
          if (!t.length) return;
          const s = [this.tracker.visitID, t],
            r = this.tracker.newEvent(CE2.eventTypes.ASSETS, { attributes: s });
          this.tracker.send(r);
        }
      }
      var Mt = s(6149);
      class xt extends te.J {
        constructor(e) {
          super(e),
            CE2BH.defineProperty(this, "DIFF_INTERVAL", 750),
            CE2BH.defineProperty(this, "SAMPLE_INTERVAL", 100);
          const {
            version: t,
            snapshots: s,
            session: r,
            censoredElements: i,
            site: n,
            goals: o,
          } = e;
          (this.snapshots = s || []),
            (this.snapshotIds = this.snapshots.map((e) => e.id)),
            (this.formatVersion = this.snapshots[0] && this.snapshots[0].v),
            r && ((this.session = r), (this.sessionId = r.id)),
            (this.censoredElements = i),
            (this.hideIframes =
              n && n.recordingSettings && n.recordingSettings.hideIframes),
            (this.version = t),
            (this.clickCaptors = CE2.state.clickCaptors.concat([
              ...CE2.d.body.getElementsByClassName("-ce-capture"),
            ])),
            (this.site = n || {}),
            (this.goals = o),
            (this.masked = !1),
            (this.sampleCallbacks = []),
            (this.diffCallbacks = []),
            (this.cookies = { lastSession: "v11ls" });
          CE2.cookieStorage.get(this.cookies.lastSession) !==
            (this.session && this.session.id) && this.resetSessionTracking(),
            this.session && this.setupSDAT(),
            this.session &&
              this.site.recordingSettings &&
              (0, Mt.e)(this.site.recordingSettings.blockedRules) &&
              ((0, q.Yz)("Session page masked"), (this.masked = !0)),
            this.setupEventHandlers(),
            (this.isDocumentHiddenOnce = document.hidden),
            this.eventHandlers.visit && this.eventHandlers.visit.trigger(),
            this.eventHandlers.goals && this.eventHandlers.goals.onUrlVisit(),
            this.session && this.session.id
              ? (this.eventHandlers.sessionmetadata.trigger(),
                (this.assetsTracker = new Dt(this)),
                this.assetsTracker.setup(),
                this.session.isNew() && this.session.store(),
                "function" == typeof CE_SESSION_READY &&
                  CE_SESSION_READY(this.session))
              : this.session &&
                !this.session.id &&
                (0, q.Yz)("[Tracker] Session ID not initialized"),
            this.session && CE2.virtualTracker?.sendStoredEvents(),
            this.sendCustomUserData(),
            this.processBuffer({ scheduleTimeout: !0 });
        }
        resetSessionTracking() {
          this.session &&
            this.session.id &&
            CE2.cookieStorage.set(this.cookies.lastSession, this.session.id);
        }
        update(e, t, s) {
          this.eventHandlers.error && this.eventHandlers.error.flush(),
            this.processBuffer();
          let r = !1;
          this.snapshotIds.sort().join(",") !==
            (e || [])
              .map((e) => e.id)
              .sort()
              .join(",") && (r = !0),
            (this.snapshots = e || []),
            (this.snapshotIds = this.snapshots.map((e) => e.id)),
            (this.formatVersion =
              this.snapshots[0] && this.snapshots[0].formatVersion);
          const i = t && this.session?.id !== t.id;
          if (
            (t &&
              ((this.session = t),
              (this.sessionId = t.id),
              CE2.virtualTracker?.sendStoredEvents()),
            s)
          ) {
            (this.url = window.location.href),
              this.setVisitIDs(),
              this.setupSDAT();
            for (const e in this.eventHandlers)
              if (Object.prototype.hasOwnProperty.call(this.eventHandlers, e)) {
                const t = this.eventHandlers[e];
                t.update && t.update(i, s);
              }
            this.eventHandlers.visit && this.eventHandlers.visit.trigger(),
              this.eventHandlers.goals && this.eventHandlers.goals.onUrlVisit();
          } else
            r &&
              e?.length &&
              this.eventHandlers.visit.trigger({ snapshotOnly: !0 });
          (i || (r && e?.length)) && this.sendCustomUserData(),
            this.session &&
            this.session.id &&
            this.eventHandlers.sessionmetadata
              ? this.eventHandlers.sessionmetadata.trigger()
              : this.session &&
                this.session.id &&
                ((this.eventHandlers.sessionmetadata = new St(this)),
                this.eventHandlers.sessionmetadata.trigger());
        }
        onActivity() {
          this.session &&
            this.eventHandlers.activity &&
            this.eventHandlers.activity.trigger();
        }
        notifyError(e) {
          this.session &&
            this.eventHandlers.error &&
            this.eventHandlers.error.onError(e);
        }
        setupSDAT() {
          delete this.pageFingerprint,
            delete this.pageFingerprintMd5,
            this.session &&
              CE2.w.CE_URL_FINGERPRINT &&
              ((this.pageFingerprint = CE2.w.CE_URL_FINGERPRINT()),
              this.pageFingerprint &&
                (this.pageFingerprintMd5 = (0, re.F)(this.pageFingerprint)));
        }
        setupEventHandlers() {
          this.setupPageHideHandler(),
            (this.snapshots?.length || this.session) &&
              ((this.eventHandlers.visit = new Rt(this)),
              (this.eventHandlers.click = new ne(this)),
              (this.eventHandlers.excessiveScrolls = new Re(this)),
              (this.eventHandlers.performance = new Ct(this))),
            (this.snapshots?.length || this.session) &&
              ((this.eventHandlers.scroll = new wt(this)),
              (this.eventHandlers.metric = new ot(this))),
            this.session &&
              ((this.eventHandlers.sessionscroll = new It(this)),
              (this.eventHandlers.sessionmetadata = new St(this)),
              (this.eventHandlers.mousemovement = new dt(this)),
              (this.eventHandlers.resize = new bt(this)),
              (this.eventHandlers.activity = new ie(this)),
              (0, se.jI)("hide-errors") ||
                (this.eventHandlers.error = new we(this)),
              (this.eventHandlers.quickback = new kt(this)),
              he && (this.eventHandlers.ecommerce = new he(this)),
              (this.eventHandlers.form = new Me(this)),
              this.masked ||
                ((this.eventHandlers.pageState = new Et(this)),
                (this.eventHandlers.typing = new Ot(this)),
                (this.eventHandlers.visibility = new Nt(this))),
              this.runSampleCallbacks(),
              this.runDiffCallbacks()),
            this.addEventListener(
              CE2.opera ? "unload" : "beforeunload",
              W(this, "onUnload")
            ),
            this.goals && (this.eventHandlers.goals = new tt(this));
        }
        addSampleCallback(e) {
          this.sampleCallbacks.push(e);
        }
        addDiffCallback(e) {
          this.diffCallbacks.push(e);
        }
        runSampleCallbacks(e = !0) {
          if (this.runSampleCallbacksBind)
            for (let e = 0, t = this.sampleCallbacks; e < t.length; e++) {
              (0, t[e])();
            }
          else this.runSampleCallbacksBind = W(this, "runSampleCallbacks");
          e &&
            (this.sampleTimeout = setTimeout(
              this.runSampleCallbacksBind,
              this.SAMPLE_INTERVAL
            ));
        }
        runDiffCallbacks(e = !0) {
          if (this.runDiffCallbacksBind)
            for (let e = 0, t = this.diffCallbacks; e < t.length; e++) {
              (0, t[e])();
            }
          else this.runDiffCallbacksBind = W(this, "runDiffCallbacks");
          e &&
            (this.diffTimeout = setTimeout(
              this.runDiffCallbacksBind,
              this.DIFF_INTERVAL
            ));
        }
        cleanup() {
          this.eventHandlers.error && this.eventHandlers.error.flush(),
            this.processBuffer(),
            this.bufferQueueTimeout && clearTimeout(this.bufferQueueTimeout),
            this.session &&
              (clearTimeout(this.sampleTimeout),
              clearTimeout(this.diffTimeout),
              this.assetsTracker && this.assetsTracker.cleanup());
          for (const e in this.eventHandlers)
            if (Object.prototype.hasOwnProperty.call(this.eventHandlers, e)) {
              const t = this.eventHandlers[e];
              t.cleanup && t.cleanup();
            }
          for (let e = 0, t = this.eventsTargets.keys(); e < t.length; e++) {
            const s = t[e];
            for (
              let e = 0, t = this.eventsTargets.get(s).keys();
              e < t.length;
              e++
            ) {
              const r = t[e];
              CE2.removeListener(
                s,
                r,
                this.eventsTargets.get(s).get(r).handler
              );
            }
          }
          delete this.eventsTargets;
        }
        pageState(e, t, s, r, i, n) {
          this.eventHandlers.pageState &&
            this.eventHandlers.pageState.trigger(e, t, s, r, i, n);
        }
        pageStateErrorCallback(e) {
          try {
            (0, q.Yz)("Page state error", e),
              "function" == typeof CE_PAGE_STATE_ERROR &&
                window.CE_PAGE_STATE_ERROR(CE2.data.uid, this.session.id, e);
          } catch (e) {
            (0, q.Yz)(`Page State Error callback failure: ${e}`);
          }
        }
        pageStateError(e) {
          this.pageStateErrorCallback(e);
        }
        getElementToRecord(e) {
          let t;
          return (
            (t = Q(this.clickCaptors, e)) && (e = t),
            e.ownerSVGElement && (e = e.ownerSVGElement),
            e
          );
        }
        customEvent(e, t) {
          const s = [this.visitID, e, t],
            r = this.newEvent(CE2.eventTypes.CUSTOM, { attributes: s });
          this.send(r);
        }
        getFingerprint(e) {
          return new CE2.fp.fingerprint2(e, {
            formatVersion: this.formatVersion,
          });
        }
        send(e) {
          if (this.resetting) return;
          const t = this.session && this.session.isExpired();
          if (t) return this.stopTracker(`Session expired - ${t}`);
          this.bufferQueue.push(e);
        }
        stopTracker(e) {
          this.resetting ||
            ((this.resetting = !0),
            (0, q.Yz)(`[Tracker] Stopping: ${e}`),
            this.session.reset(e),
            CE2.resetTracker());
        }
        onPageHide() {
          this.onActivity(),
            this.session && this.runDiffCallbacks(!1),
            this.eventHandlers.error && this.eventHandlers.error.flush(!0),
            this.processBuffer({ sendBeacon: !0 });
        }
        onUnload() {
          this.session &&
            ((0, q.Yz)("[Tracker] Sending end event"),
            this.send(this.newEvent(CE2.eventTypes.END_SESSION)),
            this.session.end()),
            this.eventHandlers.quickback?.unload(),
            this.eventHandlers.error && this.eventHandlers.error.flush(!0),
            this.processBuffer({ sendBeacon: !0 });
        }
        rageClick() {
          this.eventHandlers.error &&
            this.eventHandlers.error.assignAttribute("rageClicked");
        }
        getFingerprintAttributes(e) {
          return (
            e || (e = {}),
            [
              e.type,
              e.elders,
              e.youngerSiblings,
              e.descendants,
              e.left,
              e.top,
              e.width,
              e.height,
              e.name,
            ]
          );
        }
        addToCart({
          productId: e,
          name: t,
          quantity: s,
          price: r,
          currency: i,
        }) {
          this.eventHandlers.ecommerce &&
            this.eventHandlers.ecommerce.addToCart([
              e,
              t,
              s,
              this.eventHandlers.ecommerce.amountInCents(r),
              i,
            ]);
        }
        startCheckout() {
          this.eventHandlers.ecommerce &&
            this.eventHandlers.ecommerce.startCheckout();
        }
        checkoutCompleted({ orderId: e, total: t, currency: s }) {
          this.eventHandlers.ecommerce &&
            this.eventHandlers.ecommerce.checkoutCompleted([
              e,
              this.eventHandlers.ecommerce.amountInCents(t),
              s,
            ]);
        }
      }
      const Ht = [
        "input:not([type])",
        'input[type=""]',
        "input[type=text]",
        "input[type=hidden]",
        "input[type=password]",
        "input[type=email]",
        "input[type=number]",
        "input[type=tel]",
        "input[type=range]",
        "textarea",
        "[contenteditable=true]",
        '[contenteditable=""]',
      ];
      function Bt(e) {
        if (CE2.data.disable_recordings_masking) return;
        let t = [];
        if (
          ((0, se.jI)("v11_disable_default_masking") ||
            ((t = Ht.slice(0)), CE2.w.google && t.push(".pac-container")),
          e.recordingSettings && e.recordingSettings.maskElements)
        ) {
          const s = CE2.Native.JSON.parse(e.recordingSettings.maskElements);
          for (let e = 0; e < s.length; e++) {
            const r = s[e];
            t.push(r.selector);
          }
        }
        return t;
      }
      var Ut = Uint8Array,
        Vt = Uint16Array,
        Ft = Int32Array,
        $t = new Ut([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        qt = new Ut([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        Gt = new Ut([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        jt = function (e, t) {
          for (var s = new Vt(31), r = 0; r < 31; ++r)
            s[r] = t += 1 << e[r - 1];
          var i = new Ft(s[30]);
          for (r = 1; r < 30; ++r)
            for (var n = s[r]; n < s[r + 1]; ++n) i[n] = ((n - s[r]) << 5) | r;
          return { b: s, r: i };
        },
        Yt = jt($t, 2),
        Kt = Yt.b,
        zt = Yt.r;
      (Kt[28] = 258), (zt[258] = 28);
      for (
        var Wt = jt(qt, 0), Xt = (Wt.b, Wt.r), Qt = new Vt(32768), Jt = 0;
        Jt < 32768;
        ++Jt
      ) {
        var Zt = ((43690 & Jt) >> 1) | ((21845 & Jt) << 1);
        (Zt =
          ((61680 & (Zt = ((52428 & Zt) >> 2) | ((13107 & Zt) << 2))) >> 4) |
          ((3855 & Zt) << 4)),
          (Qt[Jt] = (((65280 & Zt) >> 8) | ((255 & Zt) << 8)) >> 1);
      }
      var es = function (e, t, s) {
          for (var r = e.length, i = 0, n = new Vt(t); i < r; ++i)
            e[i] && ++n[e[i] - 1];
          var o,
            a = new Vt(t);
          for (i = 1; i < t; ++i) a[i] = (a[i - 1] + n[i - 1]) << 1;
          if (s) {
            o = new Vt(1 << t);
            var c = 15 - t;
            for (i = 0; i < r; ++i)
              if (e[i])
                for (
                  var l = (i << 4) | e[i],
                    h = t - e[i],
                    u = a[e[i] - 1]++ << h,
                    d = u | ((1 << h) - 1);
                  u <= d;
                  ++u
                )
                  o[Qt[u] >> c] = l;
          } else
            for (o = new Vt(r), i = 0; i < r; ++i)
              e[i] && (o[i] = Qt[a[e[i] - 1]++] >> (15 - e[i]));
          return o;
        },
        ts = new Ut(288);
      for (Jt = 0; Jt < 144; ++Jt) ts[Jt] = 8;
      for (Jt = 144; Jt < 256; ++Jt) ts[Jt] = 9;
      for (Jt = 256; Jt < 280; ++Jt) ts[Jt] = 7;
      for (Jt = 280; Jt < 288; ++Jt) ts[Jt] = 8;
      var ss = new Ut(32);
      for (Jt = 0; Jt < 32; ++Jt) ss[Jt] = 5;
      var rs = es(ts, 9, 0),
        is = es(ss, 5, 0),
        ns = function (e) {
          return ((e + 7) / 8) | 0;
        },
        os = function (e, t, s) {
          return (
            (null == t || t < 0) && (t = 0),
            (null == s || s > e.length) && (s = e.length),
            new Ut(e.subarray(t, s))
          );
        },
        as = function (e, t, s) {
          s <<= 7 & t;
          var r = (t / 8) | 0;
          (e[r] |= s), (e[r + 1] |= s >> 8);
        },
        cs = function (e, t, s) {
          s <<= 7 & t;
          var r = (t / 8) | 0;
          (e[r] |= s), (e[r + 1] |= s >> 8), (e[r + 2] |= s >> 16);
        },
        ls = function (e, t) {
          for (var s = [], r = 0; r < e.length; ++r)
            e[r] && s.push({ s: r, f: e[r] });
          var i = s.length,
            n = s.slice();
          if (!i) return { t: gs, l: 0 };
          if (1 == i) {
            var o = new Ut(s[0].s + 1);
            return (o[s[0].s] = 1), { t: o, l: 1 };
          }
          s.sort(function (e, t) {
            return e.f - t.f;
          }),
            s.push({ s: -1, f: 25001 });
          var a = s[0],
            c = s[1],
            l = 0,
            h = 1,
            u = 2;
          for (s[0] = { s: -1, f: a.f + c.f, l: a, r: c }; h != i - 1; )
            (a = s[s[l].f < s[u].f ? l++ : u++]),
              (c = s[l != h && s[l].f < s[u].f ? l++ : u++]),
              (s[h++] = { s: -1, f: a.f + c.f, l: a, r: c });
          var d = n[0].s;
          for (r = 1; r < i; ++r) n[r].s > d && (d = n[r].s);
          var p = new Vt(d + 1),
            f = hs(s[h - 1], p, 0);
          if (f > t) {
            r = 0;
            var m = 0,
              g = f - t,
              E = 1 << g;
            for (
              n.sort(function (e, t) {
                return p[t.s] - p[e.s] || e.f - t.f;
              });
              r < i;
              ++r
            ) {
              var v = n[r].s;
              if (!(p[v] > t)) break;
              (m += E - (1 << (f - p[v]))), (p[v] = t);
            }
            for (m >>= g; m > 0; ) {
              var C = n[r].s;
              p[C] < t ? (m -= 1 << (t - p[C]++ - 1)) : ++r;
            }
            for (; r >= 0 && m; --r) {
              var y = n[r].s;
              p[y] == t && (--p[y], ++m);
            }
            f = t;
          }
          return { t: new Ut(p), l: f };
        },
        hs = function (e, t, s) {
          return -1 == e.s
            ? Math.max(hs(e.l, t, s + 1), hs(e.r, t, s + 1))
            : (t[e.s] = s);
        },
        us = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var s = new Vt(++t),
              r = 0,
              i = e[0],
              n = 1,
              o = function (e) {
                s[r++] = e;
              },
              a = 1;
            a <= t;
            ++a
          )
            if (e[a] == i && a != t) ++n;
            else {
              if (!i && n > 2) {
                for (; n > 138; n -= 138) o(32754);
                n > 2 &&
                  (o(n > 10 ? ((n - 11) << 5) | 28690 : ((n - 3) << 5) | 12305),
                  (n = 0));
              } else if (n > 3) {
                for (o(i), --n; n > 6; n -= 6) o(8304);
                n > 2 && (o(((n - 3) << 5) | 8208), (n = 0));
              }
              for (; n--; ) o(i);
              (n = 1), (i = e[a]);
            }
          return { c: s.subarray(0, r), n: t };
        },
        ds = function (e, t) {
          for (var s = 0, r = 0; r < t.length; ++r) s += e[r] * t[r];
          return s;
        },
        ps = function (e, t, s) {
          var r = s.length,
            i = ns(t + 2);
          (e[i] = 255 & r),
            (e[i + 1] = r >> 8),
            (e[i + 2] = 255 ^ e[i]),
            (e[i + 3] = 255 ^ e[i + 1]);
          for (var n = 0; n < r; ++n) e[i + n + 4] = s[n];
          return 8 * (i + 4 + r);
        },
        fs = function (e, t, s, r, i, n, o, a, c, l, h) {
          as(t, h++, s), ++i[256];
          for (
            var u = ls(i, 15),
              d = u.t,
              p = u.l,
              f = ls(n, 15),
              m = f.t,
              g = f.l,
              E = us(d),
              v = E.c,
              C = E.n,
              y = us(m),
              k = y.c,
              b = y.n,
              w = new Vt(19),
              T = 0;
            T < v.length;
            ++T
          )
            ++w[31 & v[T]];
          for (T = 0; T < k.length; ++T) ++w[31 & k[T]];
          for (
            var S = ls(w, 7), _ = S.t, A = S.l, I = 19;
            I > 4 && !_[Gt[I - 1]];
            --I
          );
          var O,
            N,
            R,
            L,
            P = (l + 5) << 3,
            D = ds(i, ts) + ds(n, ss) + o,
            M =
              ds(i, d) +
              ds(n, m) +
              o +
              14 +
              3 * I +
              ds(w, _) +
              2 * w[16] +
              3 * w[17] +
              7 * w[18];
          if (c >= 0 && P <= D && P <= M) return ps(t, h, e.subarray(c, c + l));
          if ((as(t, h, 1 + (M < D)), (h += 2), M < D)) {
            (O = es(d, p, 0)), (N = d), (R = es(m, g, 0)), (L = m);
            var x = es(_, A, 0);
            as(t, h, C - 257),
              as(t, h + 5, b - 1),
              as(t, h + 10, I - 4),
              (h += 14);
            for (T = 0; T < I; ++T) as(t, h + 3 * T, _[Gt[T]]);
            h += 3 * I;
            for (var H = [v, k], B = 0; B < 2; ++B) {
              var U = H[B];
              for (T = 0; T < U.length; ++T) {
                var V = 31 & U[T];
                as(t, h, x[V]),
                  (h += _[V]),
                  V > 15 && (as(t, h, (U[T] >> 5) & 127), (h += U[T] >> 12));
              }
            }
          } else (O = rs), (N = ts), (R = is), (L = ss);
          for (T = 0; T < a; ++T) {
            var F = r[T];
            if (F > 255) {
              cs(t, h, O[(V = (F >> 18) & 31) + 257]),
                (h += N[V + 257]),
                V > 7 && (as(t, h, (F >> 23) & 31), (h += $t[V]));
              var $ = 31 & F;
              cs(t, h, R[$]),
                (h += L[$]),
                $ > 3 && (cs(t, h, (F >> 5) & 8191), (h += qt[$]));
            } else cs(t, h, O[F]), (h += N[F]);
          }
          return cs(t, h, O[256]), h + N[256];
        },
        ms = new Ft([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        gs = new Ut(0),
        Es = function (e, t, s, r, i, n) {
          var o = n.z || e.length,
            a = new Ut(r + o + 5 * (1 + Math.ceil(o / 7e3)) + i),
            c = a.subarray(r, a.length - i),
            l = n.l,
            h = 7 & (n.r || 0);
          if (t) {
            h && (c[0] = n.r >> 3);
            for (
              var u = ms[t - 1],
                d = u >> 13,
                p = 8191 & u,
                f = (1 << s) - 1,
                m = n.p || new Vt(32768),
                g = n.h || new Vt(f + 1),
                E = Math.ceil(s / 3),
                v = 2 * E,
                C = function (t) {
                  return (e[t] ^ (e[t + 1] << E) ^ (e[t + 2] << v)) & f;
                },
                y = new Ft(25e3),
                k = new Vt(288),
                b = new Vt(32),
                w = 0,
                T = 0,
                S = n.i || 0,
                _ = 0,
                A = n.w || 0,
                I = 0;
              S + 2 < o;
              ++S
            ) {
              var O = C(S),
                N = 32767 & S,
                R = g[O];
              if (((m[N] = R), (g[O] = N), A <= S)) {
                var L = o - S;
                if ((w > 7e3 || _ > 24576) && (L > 423 || !l)) {
                  (h = fs(e, c, 0, y, k, b, T, _, I, S - I, h)),
                    (_ = w = T = 0),
                    (I = S);
                  for (var P = 0; P < 286; ++P) k[P] = 0;
                  for (P = 0; P < 30; ++P) b[P] = 0;
                }
                var D = 2,
                  M = 0,
                  x = p,
                  H = (N - R) & 32767;
                if (L > 2 && O == C(S - H))
                  for (
                    var B = Math.min(d, L) - 1,
                      U = Math.min(32767, S),
                      V = Math.min(258, L);
                    H <= U && --x && N != R;

                  ) {
                    if (e[S + D] == e[S + D - H]) {
                      for (var F = 0; F < V && e[S + F] == e[S + F - H]; ++F);
                      if (F > D) {
                        if (((D = F), (M = H), F > B)) break;
                        var $ = Math.min(H, F - 2),
                          q = 0;
                        for (P = 0; P < $; ++P) {
                          var G = (S - H + P) & 32767,
                            j = (G - m[G]) & 32767;
                          j > q && ((q = j), (R = G));
                        }
                      }
                    }
                    H += ((N = R) - (R = m[N])) & 32767;
                  }
                if (M) {
                  y[_++] = 268435456 | (zt[D] << 18) | Xt[M];
                  var Y = 31 & zt[D],
                    K = 31 & Xt[M];
                  (T += $t[Y] + qt[K]), ++k[257 + Y], ++b[K], (A = S + D), ++w;
                } else (y[_++] = e[S]), ++k[e[S]];
              }
            }
            for (S = Math.max(S, A); S < o; ++S) (y[_++] = e[S]), ++k[e[S]];
            (h = fs(e, c, l, y, k, b, T, _, I, S - I, h)),
              l ||
                ((n.r = (7 & h) | (c[(h / 8) | 0] << 3)),
                (h -= 7),
                (n.h = g),
                (n.p = m),
                (n.i = S),
                (n.w = A));
          } else {
            for (S = n.w || 0; S < o + l; S += 65535) {
              var z = S + 65535;
              z >= o && ((c[(h / 8) | 0] = l), (z = o)),
                (h = ps(c, h + 1, e.subarray(S, z)));
            }
            n.i = o;
          }
          return os(a, 0, r + ns(h) + i);
        },
        vs = (function () {
          for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
            for (var s = t, r = 9; --r; ) s = (1 & s && -306674912) ^ (s >>> 1);
            e[t] = s;
          }
          return e;
        })(),
        Cs = function () {
          var e = -1;
          return {
            p: function (t) {
              for (var s = e, r = 0; r < t.length; ++r)
                s = vs[(255 & s) ^ t[r]] ^ (s >>> 8);
              e = s;
            },
            d: function () {
              return ~e;
            },
          };
        },
        ys = function (e, t, s, r, i) {
          if (!i && ((i = { l: 1 }), t.dictionary)) {
            var n = t.dictionary.subarray(-32768),
              o = new Ut(n.length + e.length);
            o.set(n), o.set(e, n.length), (e = o), (i.w = n.length);
          }
          return Es(
            e,
            null == t.level ? 6 : t.level,
            null == t.mem
              ? i.l
                ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
                : 20
              : 12 + t.mem,
            s,
            r,
            i
          );
        },
        ks = function (e, t, s) {
          for (; s; ++t) (e[t] = s), (s >>>= 8);
        },
        bs = function (e, t) {
          var s = t.filename;
          if (
            ((e[0] = 31),
            (e[1] = 139),
            (e[2] = 8),
            (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
            (e[9] = 3),
            0 != t.mtime &&
              ks(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
            s)
          ) {
            e[3] = 8;
            for (var r = 0; r <= s.length; ++r) e[r + 10] = s.charCodeAt(r);
          }
        },
        ws = function (e) {
          return 10 + (e.filename ? e.filename.length + 1 : 0);
        };
      function Ts(e, t) {
        t || (t = {});
        var s = Cs(),
          r = e.length;
        s.p(e);
        var i = ys(e, t, ws(t), 8),
          n = i.length;
        return bs(i, t), ks(i, n - 8, s.d()), ks(i, n - 4, r), i;
      }
      var Ss = "undefined" != typeof TextEncoder && new TextEncoder(),
        _s = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        _s.decode(gs, { stream: !0 }), 1;
      } catch (e) {}
      function As(e, t) {
        if (t) {
          for (var s = new Ut(e.length), r = 0; r < e.length; ++r)
            s[r] = e.charCodeAt(r);
          return s;
        }
        if (Ss) return Ss.encode(e);
        var i = e.length,
          n = new Ut(e.length + (e.length >> 1)),
          o = 0,
          a = function (e) {
            n[o++] = e;
          };
        for (r = 0; r < i; ++r) {
          if (o + 5 > n.length) {
            var c = new Ut(o + 8 + ((i - r) << 1));
            c.set(n), (n = c);
          }
          var l = e.charCodeAt(r);
          l < 128 || t
            ? a(l)
            : l < 2048
            ? (a(192 | (l >> 6)), a(128 | (63 & l)))
            : l > 55295 && l < 57344
            ? (a(
                240 |
                  ((l = (65536 + (1047552 & l)) | (1023 & e.charCodeAt(++r))) >>
                    18)
              ),
              a(128 | ((l >> 12) & 63)),
              a(128 | ((l >> 6) & 63)),
              a(128 | (63 & l)))
            : (a(224 | (l >> 12)), a(128 | ((l >> 6) & 63)), a(128 | (63 & l)));
        }
        return os(n, 0, o);
      }
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : "function" == typeof setTimeout && setTimeout;
      const Is = (e) => {
          if ("string" == typeof e) return Ts(As(e));
          if (!ArrayBuffer.isView(e))
            throw new Error("Data must be UInt* data type or string");
          return Ts(e);
        },
        Os = { Visit: Rt, SessionMetadata: St },
        Ns = {
          getBox: E,
          scroll: h,
          fingerprint2: function (e, t = {}) {
            return new $(e, t);
          },
        };
    },
  },
  (e) => {
    e.O(0, [76], () => {
      return (t = 9307), e((e.s = t));
      var t;
    });
    var t = e.O(),
      s = (CE2 = "undefined" == typeof CE2 ? {} : CE2);
    for (var r in t) s[r] = t[r];
    t.__esModule && Object.defineProperty(s, "__esModule", { value: !0 });
  },
]);
