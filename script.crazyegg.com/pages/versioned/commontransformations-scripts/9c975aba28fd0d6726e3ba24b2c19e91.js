(() => {
  "use strict";
  var e,
    r = {},
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) return n.exports;
    var i = (t[e] = { exports: {} });
    return r[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = r),
    (e = []),
    (o.O = (r, t, n, i) => {
      if (!t) {
        var l = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [t, n, i] = e[s], a = !0, u = 0; u < t.length; u++)
            (!1 & i || l >= i) && Object.keys(o.O).every((e) => o.O[e](t[u]))
              ? t.splice(u--, 1)
              : ((a = !1), i < l && (l = i));
          if (a) {
            e.splice(s--, 1);
            var f = n();
            void 0 !== f && (r = f);
          }
        }
        return r;
      }
      i = i || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
      e[s] = [t, n, i];
    }),
    (o.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return o.d(r, { a: r }), r;
    }),
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) &&
          !o.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 121: 0 };
      o.O.j = (r) => 0 === e[r];
      var r = (r, t) => {
          var n,
            i,
            [l, a, u] = t,
            f = 0;
          if (l.some((r) => 0 !== e[r])) {
            for (n in a) o.o(a, n) && (o.m[n] = a[n]);
            if (u) var s = u(o);
          }
          for (r && r(t); f < l.length; f++)
            (i = l[f]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(s);
        },
        t = (globalThis.webpackChunkCE2 = globalThis.webpackChunkCE2 || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})(); /*! For license information please see commontransformations.min.js.LICENSE.txt */
(globalThis.webpackChunkCE2 = globalThis.webpackChunkCE2 || []).push([
  [728, 76, 990, 198],
  {
    1305: (e, t, r) => {
      "use strict";
      var n,
        i = r(1978),
        s = r(9637),
        o = r(8160),
        a = r(6055),
        c = r(7589),
        l = "http://www.w3.org/1999/xhtml";
      function d(e, t) {
        return 3 === e.nodeType
          ? (function (e, t) {
              return new s(e.nodeValue);
            })(e)
          : 1 === e.nodeType || 9 === e.nodeType
          ? (function (e, t) {
              var r = e.namespaceURI !== l ? e.namespaceURI : null,
                n =
                  t.key && e.getAttribute(t.key) ? e.getAttribute(t.key) : null;
              return new i(
                e.tagName,
                (function (e) {
                  var t,
                    r,
                    n = {};
                  if (!e.hasAttributes()) return n;
                  e.namespaceURI &&
                    e.namespaceURI !== l &&
                    (t = e.namespaceURI);
                  for (var i = 0; i < e.attributes.length; i++)
                    (r =
                      "style" == e.attributes[i].name
                        ? p(e)
                        : t
                        ? h(e.attributes[i])
                        : u(e.attributes[i], e)).ns
                      ? (n[r.name] = new o(r.ns, r.value))
                      : r.isAttr
                      ? (n.attributes || (n.attributes = {}),
                        (n.attributes[r.name] = r.value))
                      : (n[r.name] = r.value);
                  return n;
                })(e),
                (function (e, t) {
                  for (var r = [], n = 0; n < e.childNodes.length; n++)
                    r.push(d(e.childNodes[n], t));
                  return r;
                })(e, t),
                n,
                r
              );
            })(e, t)
          : new s("");
      }
      function u(e, t) {
        var r,
          n = !1;
        return (
          a[e.name] && a[e.name] in t
            ? (r = a[e.name])
            : ((r = e.name), (n = !0)),
          { name: r, value: e.value, isAttr: n }
        );
      }
      function h(e) {
        return {
          name: e.name,
          value: e.value,
          ns: c[e.name] || "",
          isAttr: !0,
        };
      }
      function p(e) {
        for (var t = e.style, r = {}, n = 0; n < t.length; ++n) {
          var i = t.item(n);
          r[i] = String(t[i]);
          var s = t.getPropertyPriority(i);
          s && (r[i] += " !" + s),
            void 0 === t[i] && (r[i] = g(t, i)),
            r[i].indexOf("url") > -1 && (r[i] = r[i].replace(/\"/g, ""));
        }
        return { name: "style", value: r };
      }
      function g(e, t) {
        var r, n;
        n = e.cssText.split(";");
        for (var i = 0; i < n.length; ++i)
          if (n[i].indexOf(t) > -1) {
            r = n[i].replace(t + ":", "").trim();
            break;
          }
        return r;
      }
      e.exports = function (e, t) {
        if (((t = t || {}), !e)) return d(document.createTextNode(""));
        if ("string" == typeof e) {
          if (!("DOMParser" in window))
            throw new Error(
              "DOMParser is not available, so parsing string to DOM node is not possible."
            );
          var r = (n = n || new DOMParser()).parseFromString(e, "text/html");
          e = r.body.firstChild
            ? r.getElementsByTagName("body")[0].firstChild
            : r.head.firstChild &&
              ("TITLE" !== r.head.firstChild.tagName || r.title)
            ? r.head.firstChild
            : r.firstChild && "HTML" !== r.firstChild.tagName
            ? r.firstChild
            : document.createTextNode("");
        }
        if ("object" != typeof e || !e || !e.nodeType)
          throw new Error("invalid dom node", e);
        return d(e, t);
      };
    },
    7589: (e) => {
      "use strict";
      var t = null,
        r = "http://www.w3.org/1999/xlink",
        n = "http://www.w3.org/XML/1998/namespace",
        i = {
          about: t,
          "accent-height": t,
          accumulate: t,
          additive: t,
          "alignment-baseline": t,
          alphabetic: t,
          amplitude: t,
          "arabic-form": t,
          ascent: t,
          attributeName: t,
          attributeType: t,
          azimuth: t,
          bandwidth: t,
          baseFrequency: t,
          baseProfile: t,
          "baseline-shift": t,
          bbox: t,
          begin: t,
          bias: t,
          by: t,
          calcMode: t,
          "cap-height": t,
          class: t,
          clip: t,
          "clip-path": t,
          "clip-rule": t,
          clipPathUnits: t,
          color: t,
          "color-interpolation": t,
          "color-interpolation-filters": t,
          "color-profile": t,
          "color-rendering": t,
          content: t,
          contentScriptType: t,
          contentStyleType: t,
          cursor: t,
          cx: t,
          cy: t,
          d: t,
          datatype: t,
          defaultAction: t,
          descent: t,
          diffuseConstant: t,
          direction: t,
          display: t,
          divisor: t,
          "dominant-baseline": t,
          dur: t,
          dx: t,
          dy: t,
          edgeMode: t,
          editable: t,
          elevation: t,
          "enable-background": t,
          end: t,
          "ev:event": "http://www.w3.org/2001/xml-events",
          event: t,
          exponent: t,
          externalResourcesRequired: t,
          fill: t,
          "fill-opacity": t,
          "fill-rule": t,
          filter: t,
          filterRes: t,
          filterUnits: t,
          "flood-color": t,
          "flood-opacity": t,
          focusHighlight: t,
          focusable: t,
          "font-family": t,
          "font-size": t,
          "font-size-adjust": t,
          "font-stretch": t,
          "font-style": t,
          "font-variant": t,
          "font-weight": t,
          format: t,
          from: t,
          fx: t,
          fy: t,
          g1: t,
          g2: t,
          "glyph-name": t,
          "glyph-orientation-horizontal": t,
          "glyph-orientation-vertical": t,
          glyphRef: t,
          gradientTransform: t,
          gradientUnits: t,
          handler: t,
          hanging: t,
          height: t,
          "horiz-adv-x": t,
          "horiz-origin-x": t,
          "horiz-origin-y": t,
          id: t,
          ideographic: t,
          "image-rendering": t,
          in: t,
          in2: t,
          initialVisibility: t,
          intercept: t,
          k: t,
          k1: t,
          k2: t,
          k3: t,
          k4: t,
          kernelMatrix: t,
          kernelUnitLength: t,
          kerning: t,
          keyPoints: t,
          keySplines: t,
          keyTimes: t,
          lang: t,
          lengthAdjust: t,
          "letter-spacing": t,
          "lighting-color": t,
          limitingConeAngle: t,
          local: t,
          "marker-end": t,
          "marker-mid": t,
          "marker-start": t,
          markerHeight: t,
          markerUnits: t,
          markerWidth: t,
          mask: t,
          maskContentUnits: t,
          maskUnits: t,
          mathematical: t,
          max: t,
          media: t,
          mediaCharacterEncoding: t,
          mediaContentEncodings: t,
          mediaSize: t,
          mediaTime: t,
          method: t,
          min: t,
          mode: t,
          name: t,
          "nav-down": t,
          "nav-down-left": t,
          "nav-down-right": t,
          "nav-left": t,
          "nav-next": t,
          "nav-prev": t,
          "nav-right": t,
          "nav-up": t,
          "nav-up-left": t,
          "nav-up-right": t,
          numOctaves: t,
          observer: t,
          offset: t,
          opacity: t,
          operator: t,
          order: t,
          orient: t,
          orientation: t,
          origin: t,
          overflow: t,
          overlay: t,
          "overline-position": t,
          "overline-thickness": t,
          "panose-1": t,
          path: t,
          pathLength: t,
          patternContentUnits: t,
          patternTransform: t,
          patternUnits: t,
          phase: t,
          playbackOrder: t,
          "pointer-events": t,
          points: t,
          pointsAtX: t,
          pointsAtY: t,
          pointsAtZ: t,
          preserveAlpha: t,
          preserveAspectRatio: t,
          primitiveUnits: t,
          propagate: t,
          property: t,
          r: t,
          radius: t,
          refX: t,
          refY: t,
          rel: t,
          "rendering-intent": t,
          repeatCount: t,
          repeatDur: t,
          requiredExtensions: t,
          requiredFeatures: t,
          requiredFonts: t,
          requiredFormats: t,
          resource: t,
          restart: t,
          result: t,
          rev: t,
          role: t,
          rotate: t,
          rx: t,
          ry: t,
          scale: t,
          seed: t,
          "shape-rendering": t,
          slope: t,
          snapshotTime: t,
          spacing: t,
          specularConstant: t,
          specularExponent: t,
          spreadMethod: t,
          startOffset: t,
          stdDeviation: t,
          stemh: t,
          stemv: t,
          stitchTiles: t,
          "stop-color": t,
          "stop-opacity": t,
          "strikethrough-position": t,
          "strikethrough-thickness": t,
          string: t,
          stroke: t,
          "stroke-dasharray": t,
          "stroke-dashoffset": t,
          "stroke-linecap": t,
          "stroke-linejoin": t,
          "stroke-miterlimit": t,
          "stroke-opacity": t,
          "stroke-width": t,
          surfaceScale: t,
          syncBehavior: t,
          syncBehaviorDefault: t,
          syncMaster: t,
          syncTolerance: t,
          syncToleranceDefault: t,
          systemLanguage: t,
          tableValues: t,
          target: t,
          targetX: t,
          targetY: t,
          "text-anchor": t,
          "text-decoration": t,
          "text-rendering": t,
          textLength: t,
          timelineBegin: t,
          title: t,
          to: t,
          transform: t,
          transformBehavior: t,
          type: t,
          typeof: t,
          u1: t,
          u2: t,
          "underline-position": t,
          "underline-thickness": t,
          unicode: t,
          "unicode-bidi": t,
          "unicode-range": t,
          "units-per-em": t,
          "v-alphabetic": t,
          "v-hanging": t,
          "v-ideographic": t,
          "v-mathematical": t,
          values: t,
          version: t,
          "vert-adv-y": t,
          "vert-origin-x": t,
          "vert-origin-y": t,
          viewBox: t,
          viewTarget: t,
          visibility: t,
          width: t,
          widths: t,
          "word-spacing": t,
          "writing-mode": t,
          x: t,
          "x-height": t,
          x1: t,
          x2: t,
          xChannelSelector: t,
          "xlink:actuate": r,
          "xlink:arcrole": r,
          "xlink:href": r,
          "xlink:role": r,
          "xlink:show": r,
          "xlink:title": r,
          "xlink:type": r,
          "xml:base": n,
          "xml:id": n,
          "xml:lang": n,
          "xml:space": n,
          y: t,
          y1: t,
          y2: t,
          yChannelSelector: t,
          z: t,
          zoomAndPan: t,
        };
      e.exports = i;
    },
    6055: (e) => {
      "use strict";
      e.exports = {
        abbr: "abbr",
        accept: "accept",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        allowtransparency: "allowTransparency",
        alt: "alt",
        async: "async",
        autocomplete: "autoComplete",
        autofocus: "autoFocus",
        autoplay: "autoplay",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charset",
        checked: "checked",
        cite: "cite",
        class: "className",
        cols: "cols",
        colspan: "colSpan",
        command: "command",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        coords: "coords",
        crossorigin: "crossOrigin",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        download: "download",
        draggable: "draggable",
        dropzone: "dropzone",
        enctype: "encType",
        for: "htmlFor",
        form: "form",
        formaction: "formAction",
        formenctype: "formEncType",
        formmethod: "formMethod",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameBorder: "frameBorder",
        headers: "headers",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        inputmode: "inputMode",
        ismap: "isMap",
        itemid: "itemId",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        manifest: "manifest",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        ping: "ping",
        placeholder: "placeholder",
        poster: "poster",
        preload: "preload",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        rel: "rel",
        required: "required",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        sortable: "sortable",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srcset: "srcset",
        start: "start",
        step: "step",
        style: "style",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        translate: "translate",
        type: "type",
        typemustmatch: "typeMustMatch",
        usemap: "useMap",
        value: "value",
        wmode: "wmode",
        wrap: "wrap",
        valign: "vAlign",
        integrity: "integrity",
      };
    },
    8481: (e, t, r) => {
      "use strict";
      r.d(t, { _o: () => s, or: () => o, xf: () => i });
      const n = "cta_converted",
        i = (e) =>
          CE2.Native.JSON.parse(CE2.Native.sessionStorage.getItem(n) || "{}")[
            e.toString()
          ],
        s = (e) => {
          const t = CE2.Native.JSON.parse(
            CE2.Native.sessionStorage.getItem(n) || "{}"
          );
          delete t[e],
            CE2.Native.sessionStorage.setItem(n, CE2.Native.JSON.stringify(t));
        },
        o = (e) => {
          const t = CE2.data.addons.find(({ id: t }) => t === e.id);
          if (t?.goal_id) {
            const e = CE2.Native.JSON.parse(
              CE2.Native.sessionStorage.getItem(n) || "{}"
            );
            (e[t.goal_id] = {
              id: t.id,
              goalId: t.goal_id,
              timestamp: Date.now(),
            }),
              CE2.Native.sessionStorage.setItem(
                n,
                CE2.Native.JSON.stringify(e)
              );
          }
        };
    },
    6695: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ABTest: () => l.Ay,
          ADDON_SCRIPT_VERSION: () => h,
          CE_API: () => Lt,
          Emitter: () => ye.v,
          ExitIntent: () => Vt,
          FormData: () => Ne.f,
          Goal: () => c.A,
          IndexedDB: () => Ce,
          JSON: () => Gt,
          NativeURL: () => Ft,
          Preview: () => ae,
          READY_STATE_PATTERN: () => Le,
          URL: () => Re.j,
          VirtualTracker: () => j,
          addListener: () => s.ch,
          addTag: () => s.Ap,
          addToCart: () => Ht,
          benchmark: () => o.aE,
          benchmarkEnabled: () => o.$J,
          checkoutCompleted: () => jt,
          clearIdentity: () => le.SY,
          click: () => s.jM,
          converted: () => B.H$,
          cookieStorage: () => C.i,
          customEvent: () => s.ex,
          debug: () => o.Yz,
          debug2: () => o.cC,
          debug2Enabled: () => o.$Q,
          debugEnabled: () => o.dK,
          debugError: () => _e.A,
          decreaseSessionWorth: () => le.LV,
          deleteCookie: () => s.Yj,
          domReadySetup: () => Ye,
          each: () => s.__,
          errorTracking: () => _e.o,
          get: () => u.get,
          getCookie: () => s.Ri,
          getCookies: () => s.OR,
          getLastFlow: () => zt.lD,
          getSegmentTracker: () => ne.MH,
          goalIdString: () => B.CT,
          hasFeature: () => s.jI,
          http: () => u,
          hudMain: () => Me,
          identify: () => le.ls,
          ignore: () => s.Xe,
          increaseSessionWorth: () => le.vn,
          isBot: () => Ue,
          listen: () => s.KT,
          loadHUD: () => xe,
          matchURL: () => Te.$,
          matchesAddon: () => ce,
          matchesLegacyOrSegments: () => ne.mF,
          matchesSelector: () => s.B5,
          matchesTrigger: () => ie._9,
          nextGoalConversionValue: () => B.uw,
          notifyError: () => Pt,
          onDOMReady: () => He,
          pagesTracker: () => Et,
          parseNumberString: () => Bt.s,
          promisePool: () => Se,
          remoteLog: () => be,
          removeListener: () => s.pQ,
          set: () => s.hZ,
          setCurrency: () => B.MN,
          setRecordingsSamplingRate: () => rt,
          setSessionWorth: () => le.LG,
          showCTA: () => te,
          showFeedbackSurvey: () => q,
          showSurvey: () => W,
          startCheckout: () => Yt,
          startRecording: () => nt,
          stopRecording: () => it,
          testModeCheck: () => s.ou,
          traceLog: () => o.aQ,
          trackSurveyResponse: () => ve,
          triggerAddons: () => oe,
          userDataMain: () => Mt,
          userMainTestMode: () => $t,
          uuid_v1: () => we.O,
          writeCookie: () => s.o,
        });
      var n = {};
      r.r(n),
        r.d(n, {
          previewHandler: () => F,
          showFeedbackSurvey: () => q,
          showSurvey: () => W,
          trigger: () => J,
        });
      var i = {};
      r.r(i),
        r.d(i, {
          previewHandler: () => X,
          showCTA: () => te,
          trigger: () => re,
        });
      r(7022);
      var s = r(2886),
        o = r(3380);
      "undefined" == typeof CE2 && (globalThis.CE2 = {}),
        (CE2.userDataToJs = function () {
          const e = [
            ["uid", "uid"],
            ["snapshots", "snapshots"],
            ["status", "status"],
            ["flows", "flows"],
            ["sites", "sites"],
            ["USER_SCRIPT_VERSION", "updated_at"],
            ["__CE_HOST__", "ce_app_url"],
            ["COMMON_SCRIPT", "common_script_url"],
            ["COMMON_SCRIPT_SECURE", "common_script_url"],
            ["TRACKING_SCRIPT", "tracking_script_url"],
            ["TRACKING_SCRIPT_SECURE", "tracking_script_url"],
            ["AUTH_KEY", "hud_auth_key"],
            ["HUD", "hud"],
            ["GLOBAL_IP_BLOCK_LIST", "global_ip_block_list"],
            ["IS_USING_IP_BLOCKING", "is_using_ip_blocking"],
            ["TRACKING_DEST_NEW", "v6_tracking_dest"],
            ["TRACKING_DEST_NEW_SECURE", "v6_secure_tracking_dest"],
            ["DEST_V11", "v11_tracking_dest"],
            ["FT_DEST", "flow_tracking_dest"],
            ["PAGE_VIEWS_LIMIT_REACHED", "page_views_limit_reached"],
            ["NUMBER_OF_RECORDINGS", "recordings_number"],
            ["RECORDINGS_ACTIVATION", "recordings_activation"],
            ["ERROR_TRACKING", "error_tracking"],
            ["DEST_ERRORS_API", "error_tracking_dest"],
            ["DEST_ERRORS_API_DOMAIN", "error_tracking_script_url"],
          ];
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            CE2.data[r[1]] && (CE2[r[0]] = CE2.data[r[1]]);
          }
          CE2.data.recordings_dest &&
            (CE2.SREC_DEST = {
              record: CE2.data.recordings_dest,
              sample: CE2.data.recordings_sampling_dest,
            });
        }),
        "undefined" != typeof document && (CE2.d = document),
        "undefined" != typeof window && (CE2.w = window),
        "undefined" != typeof navigator && (CE2.n = navigator),
        "undefined" != typeof self && (CE2.s = self),
        CE2.state || (CE2.state = {}),
        CE2.benchmarks || (CE2.benchmarks = []);
      const a = CE2.n.userAgent;
      /\bMSIE\b/.test(a) &&
        ((CE2.ie = 1),
        (CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(a)[1], 10)),
        (CE2.ieQuirksMode = "BackCompat" == d.compatMode)),
        (CE2.Native = {});
      for (
        let e = 0,
          t = [
            "console",
            "Array",
            "JSON",
            "XMLHttpRequest",
            "URL",
            "sessionStorage",
            "localStorage",
          ];
        e < t.length;
        e++
      ) {
        const n = t[e];
        Object.defineProperty(CE2.Native, n, {
          get: () =>
            CE2.w && CE2.w[n] && !(0, s.ib)(CE2.w[n])
              ? (0, s.GE)(n)
              : CE2.w && CE2.w[n]
              ? CE2.w[n]
              : "undefined" != typeof window && void 0 !== window[n]
              ? window[n]
              : void 0 !== r.g && void 0 !== r.g[n]
              ? r.g[n]
              : (0, s.GE)(n),
        });
      }
      (CE2.getNativeXMLHttpRequest = function () {
        return new CE2.Native.XMLHttpRequest();
      }),
        "undefined" != typeof Prototype &&
          (0, o.Yz)(
            "[Loading] WARNING: Prototype.js library detected, it can cause tracking issues"
          ),
        (CE2.sessionTags = []),
        (CE2.p = {}),
        (CE2.state.ignoredElements = []),
        (CE2.state.clickCaptors = []),
        (CE2.state.logHistory = []),
        (CE2.state.logHistoryEnabled = !1),
        (CE2.state.userData = []),
        CE2.getBox || (CE2.getBox = () => {}),
        CE2.getUserDataTime ||
          (CE2.getUserDataTime = function () {
            if (window.performance && performance.getEntriesByType) {
              var e = performance.getEntriesByType("navigation");
              if (e && e[0])
                return "back_forward" === e[0].type
                  ? parseInt(+new Date() / 3e5, 10)
                  : 1;
            }
            return parseInt(+new Date() / 36e5, 10);
          }),
        CE2.loadScript ||
          (CE2.loadScript = function (e, t) {
            const r = document.createElement("script");
            (r.src = e),
              (r.type = "text/javascript"),
              (r.async = !0),
              (r.onload = () => {
                t && t();
              }),
              document.head.append(r);
          }),
        CE2.loadTrackingScript ||
          (CE2.loadTrackingScript = function (e) {
            return e();
          }),
        CE2.loadSessionTrackingScript ||
          (CE2.loadSessionTrackingScript = function (e) {
            return e();
          }),
        CE2.w &&
          !CE2.w.CE_URL_FINGERPRINT &&
          (CE2.w.CE_URL_FINGERPRINT = function () {
            const { host: e } = CE2.w.location;
            let { pathname: t } = CE2.w.location;
            return (
              (t = t
                .split("/")
                .map((e) => e.replace(/^([\d]+|(.*(\d.*){2}))$/, "*"))
                .join("/")),
              `${e.replace(/^(www|m)\./i, "")}${t}`
                .toLowerCase()
                .replace(/\/$/, "")
            );
          }),
        (CE2.autoStart =
          CE2.w && ("undefined" == typeof CE_MANUAL_START || !CE_MANUAL_START)),
        CE2.loadTrackingScript ||
          (CE2.loadTrackingScript = function (e) {
            return e();
          }),
        CE2.loadSessionTrackingScript ||
          (CE2.loadSessionTrackingScript = function (e) {
            return e();
          }),
        CE2.w &&
          setTimeout(() => {
            CE2.w.CE_API = CE2.CE_API(CE2.w.CE_API);
          });
      var c = r(8856),
        l = r(2484),
        u = r(1509);
      const h = CE2.ADDON_VERSION || "1.0.113",
        p = "preview",
        g = "testMode",
        f = "pageChange",
        E = "survey",
        m = "cta",
        v = 2;
      var C = r(8e3);
      let y = !1;
      const w = { survey: "Survey", cta: "CTA" },
        _ = () =>
          new Promise((e) => {
            CE2.loadTrackingScript(() => {
              e();
            });
          }),
        S = () =>
          y
            ? Promise.resolve()
            : new Promise((e) => {
                const t = (() => {
                  const { data: e } = CE2,
                    t = `/scripts/addons/${h}/index.js`;
                  return CE2.w.CE_ADDON_HOST
                    ? [CE2.w.CE_ADDON_HOST, t].join("")
                    : new CE2.Native.URL(t, e.common_script_url).toString();
                })();
                CE2.loadScript(t, () => {
                  (y = !0), e();
                });
              }),
        I = async (e) => {
          CE2[w[e]] || (await S(), await CE2.loadAddon(e));
        },
        k = async (e) => {
          const t = ((e) => {
            const t = document.getElementsByTagName(e)[0];
            return t
              ? [...t.shadowRoot.querySelectorAll("link[rel=stylesheet]")]
              : [];
          })(e).filter((e) => !e.sheet);
          if (0 === t.length) return !0;
          (0, o.Yz)(`[Addons] not loaded files: ${t.length}`);
          const r = t.map(
            (e) => (
              (0, o.Yz)(`[Addons] ${e.href}: schedule waiting`),
              new Promise((t) => {
                let r,
                  n = !1;
                e.addEventListener("load", () => {
                  (n = !0),
                    (0, o.Yz)(`[Addons] ${e.href}: loaded`),
                    r && clearTimeout(r),
                    t("ok");
                }),
                  (r = setTimeout(() => {
                    !1 === n &&
                      ((0, o.Yz)(`[Addons] ${e.href}: timed out`),
                      t("timed out"));
                  }, 5e3));
              })
            )
          );
          return (
            0 ===
            (await Promise.all(r)).filter(
              (e) => "string" == typeof e && "timed out" === e
            ).length
          );
        },
        b = (e) => {
          const { sampling: t, external: r } = e?.config || {};
          if (!e || "number" != typeof t || !0 === r) return !1;
          let n = C.i.get("as");
          if ("boolean" != typeof n) {
            const e = 100 * Math.random();
            (n = e > t),
              (0, o.Yz)("[Addons] Sampling", { seed: e, sampling: t }),
              C.i.set("as", n);
          }
          return n;
        },
        T = "initiated",
        N = "dataLoaded",
        R = "scriptLoaded",
        A = "dataMissing",
        O = "https://core.crazyegg.com";
      class x {
        constructor(e, t) {
          (this.type = e),
            (this.key = `ce_${e}_preview`),
            (this.isLoadedByHash = !1),
            (this.currentAddon = null),
            (this.onDisplay = t);
        }
        isPreview() {
          return !!this.getHash() || this.isLoadedByHash;
        }
        isOpenedWindow() {
          return window.opener;
        }
        isPlatformOrigin(e) {
          const { data: t } = CE2,
            r = t.survey_launch_origins || t.addon_launch_origins || [];
          return [t.ce_app_url, ...r].includes(e);
        }
        getHash() {
          const e = CE2.w.location.hash.match(
            new RegExp(`#ce-${this.type}-(.+)`)
          );
          if (e && e[1]) {
            const t = e[1];
            CE2.Native.sessionStorage &&
              CE2.Native.sessionStorage.getItem &&
              CE2.Native.sessionStorage.setItem(this.key, t);
            const r = t.split(".").slice(2).join(".");
            return r &&
              r !== CE2.w.location.hostname &&
              !CE2.w.location.hostname.endsWith(`.${r}`)
              ? null
              : t;
          }
          if (!CE2.Native.sessionStorage || !CE2.Native.sessionStorage.getItem)
            return null;
          const t = CE2.Native.sessionStorage.getItem(this.key);
          return t || null;
        }
        load() {
          const e = this.getHash();
          if (e)
            this.loadData(e)
              .catch(console.error)
              .then((e) => {
                e && ((this.currentAddon = e), this.onDisplay(e));
              });
          else {
            window.opener && window.opener.postMessage({ status: T }, O);
            const e = (t) => {
              t.source === window.opener &&
                this.isPlatformOrigin(t.origin) &&
                t.data &&
                "object" == typeof t.data &&
                t.data.token &&
                ((this.isLoadedByHash = !0),
                this.loadData(t.data.token).then((e) => {
                  (e && e.type !== this.type) ||
                    (CE2.Native.sessionStorage &&
                      CE2.Native.sessionStorage.getItem &&
                      CE2.Native.sessionStorage.setItem(this.key, t.data.token),
                    t.source.postMessage({ status: e ? N : A }, O),
                    e &&
                      ((0, s.ch)(window, `${this.type}Loaded`, () => {
                        t.source.postMessage({ status: R }, O);
                      }),
                      (this.currentAddon = e),
                      this.onDisplay(e)));
                }),
                window.removeEventListener("message", e));
            };
            window.addEventListener("message", e);
          }
        }
        loadData(e) {
          return new Promise((t, r) => {
            const { data: n } = CE2,
              i = `${
                n.survey_preview_dest || n.addon_preview_dest
              }?token=${e}&user=${encodeURIComponent(
                n.uid
              )}&host=${encodeURIComponent(CE2.w.location.hostname)}`;
            (0, u.get)(i, (e) => {
              e && 200 === e.status && e.responseText
                ? t(CE2.Native.JSON.parse(e.responseText.trim()))
                : r(new Error("Preview addon not found"));
            });
          });
        }
      }
      const D = "v11.s",
        $ = "v11.fs",
        M = "v11.sla",
        P = "v11.send",
        V = "v11.cs",
        U = "v11nv";
      class L {
        constructor({ siteId: e, id: t, isNew: r, isFull: n }) {
          if (void 0 === e || void 0 === t || void 0 === r || void 0 === n)
            throw new Error("Invalid params");
          (this.id = t), (this.siteId = e), (this.new = r), (this.full = n);
        }
        static instance() {
          if (this.session) return this.session;
          const e = L.currentSiteId();
          if (e && e != CE2.site?.id) return void L.reset("site-changed");
          const t = L.currentSessionId();
          if (!t) return;
          const r = !!L.currentSessionFull();
          return (this.session = new L({
            siteId: e,
            id: t,
            isNew: !1,
            isFull: r,
          }));
        }
        static build(e = !0) {
          return (this.session = new L({
            siteId: CE2.site?.id,
            id: (0, s.Jl)(),
            isNew: !0,
            isFull: e,
          }));
        }
        static reset(e) {
          C.i.del(D),
            C.i.del(M),
            C.i.del(P),
            C.i.del(U),
            C.i.del($),
            C.i.del(V),
            (0, o.Yz)("[Sessions] Resetting", { reason: e });
        }
        static currentSiteId() {
          return C.i.get(V);
        }
        static currentSessionId() {
          return C.i.get(D);
        }
        static currentSessionFull() {
          return C.i.get($);
        }
        get(e) {
          return C.i.get(e);
        }
        set(e, t) {
          return C.i.set(e, t);
        }
        del(e) {
          return C.i.del(e);
        }
        store() {
          this.id
            ? (this.set(V, this.siteId),
              this.set(D, this.id),
              this.full && this.set($, 1))
            : (this.del(V), this.del(D), this.del($)),
            (this.new = !1);
        }
        reset(e) {
          L.reset(e), (this.id = null);
        }
        alive() {
          this.isInactive() || this.set(M, +new Date());
        }
        isExpired() {
          return this.isDeleted()
            ? "isDeleted"
            : this.isEnded()
            ? "isEnded"
            : !!this.isInactive() && "isInactive";
        }
        isInactive() {
          const e = parseInt(this.get(M), 10);
          if (this.id && e) {
            if (+new Date() - e > 18e5)
              return (0, o.Yz)("[Sessions] isInactive"), !0;
          }
          return !1;
        }
        isEnded() {
          const e = parseInt(this.get(P), 10);
          if (!Number.isNaN(Number(e)))
            return (
              !!(this.id && e && +new Date() - e > 3e5) || (this.del(P), !1)
            );
        }
        isDeleted() {
          return !this.isNew() && !this.get(D);
        }
        isNew() {
          return this.new;
        }
        isFull() {
          return !this.isDeleted() && !!this.full;
        }
        becomeFull() {
          (this.full = !0), this.store();
        }
        numberVisits() {
          return parseInt(this.get(U), 10) || 0;
        }
        setNumberVisits(e) {
          return this.set(U, e);
        }
        end(e = !1) {
          const t = parseInt(this.get(P), 10);
          !t && e ? this.set(P, 1) : t || this.set(P, +new Date());
        }
      }
      var z = r(6832),
        B = r(3487);
      const H = "ce_virtual_tracker_data",
        Y = { VISIT: "visit", SESSION_METADATA: "sessionmetadata" };
      class j extends z.J {
        constructor(e) {
          super(e);
          const { site: t, session: r, goals: n } = e;
          (this.site = t),
            (this.goals = n),
            r
              ? ((this.session = r), (0, o.Yz)("[VirtualTracker] Starting", e))
              : ((this.session = L.instance()),
                this.session || (this.session = L.build(!1)),
                this.validateSession(),
                (0, o.Yz)("[VirtualTracker] Starting new session", e)),
            (this.sessionId = this.session.id),
            (this.virtual = !0),
            this.setupEventHandlers(),
            this.session.store(),
            this.processBuffer({ scheduleTimeout: !0 }),
            setTimeout(() => (0, B.ur)(this));
        }
        validateSession() {
          !j.hasSessionTracker() &&
            this.session.isExpired() &&
            (this.session.reset("virtual-tracker-session-expired"),
            (this.session = L.build(!1)),
            (this.sessionId = this.session.id));
        }
        update() {
          this.processBuffer(),
            (this.url = window.location.href),
            j.hasSessionTracker() ||
              (this.validateSession(), this.setVisitIDs(), this.triggerVisit());
        }
        triggerVisit() {
          this.eventHandlers[Y.VISIT] && this.eventHandlers[Y.VISIT].trigger();
        }
        resetHandlers(e) {
          for (const t in e) delete this.eventHandlers[t];
        }
        setupHandlers(e) {
          for (const t in e)
            !this.eventHandlers[t] &&
              Object.values(Y).includes(t) &&
              (this.eventHandlers[t] = new e[t](this));
          j.hasSessionTracker() ||
            (this.triggerVisit(),
            this.eventHandlers[Y.SESSION_METADATA] &&
              this.eventHandlers[Y.SESSION_METADATA].trigger());
        }
        setupEventHandlers() {
          this.setupPageHideHandler(),
            this.addEventListener(
              CE2.opera ? "unload" : "beforeunload",
              (0, s.oI)(this, "onUnload")
            ),
            this.addEventListener("keydown", (0, s.oI)(this, "onActivity")),
            this.addEventListener("mousemove", (0, s.oI)(this, "onActivity")),
            this.addEventListener("mousedown", (0, s.oI)(this, "onActivity")),
            this.addEventListener("scroll", (0, s.oI)(this, "onActivity"));
        }
        static hasSessionTracker() {
          return !!CE2.monitorSession?.id;
        }
        sendEventWithStoredData(e, t = {}) {
          j.hasSessionTracker() ||
            (this.load(), (this.track = !0), this.pushToBuffer()),
            this.sendImmediatelly(e, t);
        }
        send(e) {
          this.session.alive(),
            j.hasSessionTracker() ||
              (this.load(),
              this.events.push(e),
              this.track ? this.pushToBuffer() : this.store());
        }
        store() {
          CE2.Native.localStorage.setItem(
            H,
            CE2.Native.JSON.stringify({
              i: this.session.id,
              e: this.events,
              t: this.track,
            })
          );
        }
        sendStoredEvents() {
          this.load(), this.pushToBuffer();
        }
        pushToBuffer() {
          this.bufferQueue.push(...this.events.splice(0)), this.store();
        }
        load() {
          const {
            i: e,
            e: t,
            t: r,
          } = CE2.Native.JSON.parse(CE2.Native.localStorage.getItem(H) || "{}");
          (this.events = []),
            (this.track = !1),
            e === this.session.id && ((this.events = t), (this.track = !!r));
        }
        onActivity() {
          this.session.alive();
        }
        onPageHide() {
          this.onActivity(), this.processBuffer({ sendBeacon: !0 });
        }
        onUnload() {
          j.hasSessionTracker() || this.session.end(),
            this.processBuffer({ sendBeacon: !0 });
        }
      }
      const F = new x(
        "survey",
        async (e) => (await I(E), CE2.launchAddon(E, { mode: p, addon: e }))
      );
      let G = [];
      const K = (e) => {
          const { Survey: t } = CE2;
          for (let e = 0, t = G; e < t.length; e++) {
            (0, t[e])();
          }
          const r = {
            [Y.VISIT]: CE2.EventHandlers.Visit,
            [Y.SESSION_METADATA]: CE2.EventHandlers.SessionMetadata,
          };
          G = [
            t.on("trigger", () => {
              (
                CE2.virtualTracker ||
                (CE2.virtualTracker = new j({
                  visitId: CE2.visitId,
                  site: e.site,
                  session: e.session,
                }))
              ).setupHandlers(r);
            }),
            t.on("notTrigger", () => {
              CE2.virtualTracker &&
                CE2.virtualTracker.resetHandlers(Object.keys(r));
            }),
            t.on("surveyDisplay", ({ id: e }) => {
              (0, u.sendCounter)("survey:view", e);
            }),
            t.on("questionDisplay", (e, t) => {
              const r = e.questions[t]?.id;
              r && (0, u.sendCounter)("question:view", `${e.id}_${r}`);
            }),
          ];
        },
        W = async (e) => {
          if ("string" != typeof e)
            throw new Error("Survey ID must be a string");
          const t = (CE2.data.addons || []).find((t) => t.id === e);
          t
            ? b(t)
              ? (0, o.Yz)(`Addon ${e} is sampled`)
              : (await _(),
                await I(E),
                K({ site: CE2.site, session: CE2.monitorSession }),
                CE2.Survey.showSurvey(e))
            : (0, o.Yz)(`Addon ${e} is not found`);
        },
        q = async (e) => {
          if ("string" != typeof e)
            throw new Error("Survey ID must be a string");
          await _(),
            await I(E),
            K({ site: CE2.site, session: CE2.monitorSession }),
            CE2.Survey.showFeedbackSurvey(e);
        },
        J = async (e, t) => {
          const { addons: r } = CE2.data;
          return CE2.w.CE_EXTERNAL_SURVEY
            ? (async (e) => {
                if (CE2.w.CE_EXTERNAL_SURVEY_PREVIEW && "preview" === e)
                  return await I("survey"), F.load();
                if ("preview" !== e) {
                  await _();
                  const { addons: e } = CE2.data;
                  e.length && ((CE2.state.survey = e[0]), await W(e[0].id));
                }
              })(e)
            : e === p
            ? (F.isPreview() && (await I(E)), F.load())
            : void (r && 0 !== r.filter(({ type: e }) => e === E).length
                ? F.isPreview() ||
                  (await (async (e) => {
                    await _(), await I(E), K(e), await CE2.launchAddon(E);
                  })(t))
                : (0, o.Yz)("[Addons] Nothing to match"));
        };
      var Q = r(8481);
      const X = new x(
        "cta",
        async (e) => (await I(m), CE2.launchAddon(m, { mode: p, addon: e }))
      );
      let Z = [];
      const ee = (e) => {
          const { CTA: t } = CE2;
          for (let e = 0, t = Z; e < t.length; e++) {
            (0, t[e])();
          }
          const r = {
            [Y.VISIT]: CE2.EventHandlers.Visit,
            [Y.SESSION_METADATA]: CE2.EventHandlers.SessionMetadata,
          };
          Z = [
            t.on("trigger", () => {
              (
                CE2.virtualTracker ||
                (CE2.virtualTracker = new j({
                  visitId: CE2.getVisitId(),
                  site: e.site,
                  session: e.session,
                }))
              ).setupHandlers(r);
            }),
            t.on("notTrigger", () => {
              CE2.virtualTracker &&
                CE2.virtualTracker.resetHandlers(Object.keys(r));
            }),
            t.on("display", (e) => {
              e &&
                (async ({ id: e }) => {
                  (await k("crazyegg-cta")) &&
                    (0, u.sendCounter)("cta:view", e);
                })(e);
            }),
            t.on("click", (t) => {
              t &&
                ((e) => {
                  const t = (0, s.IS)("sessionId"),
                    { virtualTracker: r } = CE2;
                  if (!e || !t) return;
                  (0, Q.or)(e);
                  const n = [
                    (0, s.IS)("visitID"),
                    v,
                    (0, s.IS)("session").numberVisits(),
                    e.id,
                  ];
                  (0, u.sendCounter)("cta:click", e.id);
                  const i = r.newEvent(38, { attributes: n });
                  r.sendEventWithStoredData(i);
                })(t, e.site);
            }),
          ];
        },
        te = async (e) => {
          if ("string" != typeof e) throw new Error("CTA ID must be a string");
          const t = (CE2.data.addons || []).find((t) => t.id === e);
          t
            ? b(t)
              ? (0, o.Yz)(`Addon ${e} is sampled`)
              : (await _(),
                await I(m),
                ee({ site: CE2.site, session: CE2.monitorSession }),
                CE2.CTA.showCTA(e))
            : (0, o.Yz)(`Addon ${e} is not found`);
        },
        re = async (e, t) => {
          if (e === p) return X.isPreview() && (await I(m)), X.load();
          const { addons: r } = CE2.data;
          r &&
            0 !== r.filter(({ type: e }) => e === m).length &&
            (X.isPreview() ||
              (await (async (e) => {
                await _(), await I(m), ee(e), await CE2.launchAddon(m);
              })(t)));
        };
      var ne = r(474),
        ie = r(7471);
      const se = [n, i],
        oe = (e, t = {}) => {
          CE2.data.addons = (CE2.data.addons || []).filter((e) => !1 === b(e));
          for (let r = 0; r < se.length; r++) {
            se[r].trigger(e, t);
          }
        },
        ae = { [m]: X, [E]: F },
        ce = (e, t) =>
          (0, ne.mF)({ resourceType: e.type, resourceId: e.id }, () =>
            (0, ie._9)(e.config.audience?.conditions, t)
          );
      var le = r(715);
      const de = "text-entry/email",
        ue = [
          "multi-choice/single",
          "multi-choice/multi",
          "text-entry/short",
          "text-entry/long",
          de,
          "rating/stars",
          "rating/numerical",
          "rating/smiley",
          "rating/NPS",
        ],
        he = ["formatVersion", "id"],
        pe = [
          "questionId",
          "questionPosition",
          "questionText",
          "questionType",
          "response",
        ],
        ge = (e, t) => {
          if (e === t) return !0;
          if (null == e || null == t) return !1;
          if (e.length !== t.length) return !1;
          for (let r = 0; r < e.length; ++r) if (e[r] !== t[r]) return !1;
          return !0;
        },
        fe = (e) => !e.some((e) => 0 !== e && !e),
        Ee = (e) => [
          e.questionType,
          e.questionId,
          e.questionText,
          e.response,
          e.questionPosition,
        ],
        me = (e) => CE2.tracker?.[e] || CE2.virtualTracker?.[e],
        ve = (e, t, r = null) => {
          if (!e || !t.length) return (0, o.Yz)("Survey: invalid arguments");
          if (
            !((e, t) => {
              const r =
                  !e || (ge(he, Object.keys(e).sort()) && fe(Object.values(e))),
                n = !t
                  .map(
                    (e) =>
                      ge(pe, Object.keys(e).sort()) &&
                      fe(Object.values(e)) &&
                      ue.includes(e.questionType)
                  )
                  .some((e) => !e);
              return r && n;
            })(r, t)
          )
            return (0, o.Yz)("Survey: Invalid survey or response structure");
          if (!CE2.virtualTracker)
            return (0, o.Yz)("Survey: do not send responses in preview mode");
          const n = t.map(Ee),
            { virtualTracker: i } = CE2,
            s = [
              me("visitID"),
              CE2.visitorTracker.getIdentification(),
              r?.id || "",
              r?.formatVersion || "",
              e,
              me("session")?.numberVisits(),
              n,
            ],
            a = i.newEvent(28, { attributes: s });
          if (
            (i.sendEventWithStoredData(a),
            CE2.data.auto_identity && !CE2.IDENTIFIER)
          ) {
            const e = t.find((e) => e.questionType === de && e.response);
            (0, le.ls)(e?.response);
          }
        };
      class Ce {
        constructor(e) {
          (this.storeName = e),
            CE2.w && CE2.w.indexedDB && (this.dbPromise = this.openDB());
        }
        get isAvailable() {
          return !!CE2.w.indexedDB;
        }
        async openDB() {
          return new Promise((e) => {
            const t = CE2.w.indexedDB.open(this.storeName, 1);
            (t.onupgradeneeded = (e) => {
              const t = e.target.result;
              t.objectStoreNames.contains(this.storeName) ||
                t.createObjectStore(this.storeName, { keyPath: "id" });
            }),
              (t.onsuccess = (t) => {
                const r = t.target.result;
                e(r);
              }),
              (t.onerror = (t) => {
                (0, o.Yz)(`error opening database ${t.target?.errorCode}`), e();
              });
          });
        }
        async readAll() {
          if (this.dbPromise)
            return this.dbPromise.then((e) =>
              e
                ? new Promise((t, r) => {
                    let n = e.transaction([this.storeName], "readonly");
                    const i = n.objectStore(this.storeName);
                    (n = i.getAll()),
                      (n.onsuccess = (e) => {
                        t(e.target.result);
                      }),
                      (n.onerror = function (e) {
                        (0, o.Yz)(
                          `error opening database ${e.target.errorCode}`
                        ),
                          r(e.target);
                      });
                  })
                : []
            );
        }
        async store(e) {
          if (this.dbPromise)
            return this.dbPromise.then((t) => {
              if (t)
                return new Promise((r, n) => {
                  const i = t.transaction([this.storeName], "readwrite"),
                    s = i.objectStore(this.storeName);
                  (i.onsuccess = (e) => {
                    r(e.target.result);
                  }),
                    (i.onerror = function (e) {
                      (0, o.Yz)(`error storing records ${e.target.errorCode}`),
                        n(e.target);
                    }),
                    e.forEach((e) => {
                      s.put(e);
                    });
                });
            });
        }
        async clear() {
          if (this.dbPromise)
            return this.dbPromise.then((e) => {
              if (e)
                return new Promise((t, r) => {
                  let n = e.transaction([this.storeName], "readwrite");
                  const i = n.objectStore(this.storeName);
                  (n = i.clear()),
                    (n.onsuccess = (e) => {
                      t(e.target.result);
                    }),
                    (n.onerror = function (e) {
                      (0, o.Yz)(`error clearing store ${e.target.errorCode}`),
                        r(e.target);
                    });
                });
            });
        }
      }
      var ye = r(3201),
        we = r(2759),
        _e = r(4808);
      const Se = function (e, t, r) {
        return new Promise((n, i) => {
          const s = [],
            o = [];
          let a,
            c = 0,
            l = 0;
          const d = () => {
            if (l >= e.length && !a)
              return void (a = Promise.all(o)
                .then(() => {
                  n(s);
                })
                .catch((e) => {
                  i(e);
                }));
            if (l >= e.length) return;
            const u = e[l];
            l += 1;
            const h = r(u);
            o.push(h),
              h
                .then((e) => {
                  s.push(e), (c -= 1), d();
                })
                .catch((e) => {
                  i(e);
                }),
              (c += 1),
              c < t && l < e.length && d();
          };
          d();
        });
      };
      var Ie = r(7866),
        ke = r(6677);
      const be = function (e) {
        if (!(0, s.jI)("v11_remote_log")) return;
        const t = ke.p.codeMap[CE2.clock.getDeviceType()],
          r = CE2.w.location,
          n = `${r.hostname}${r.pathname}`,
          i = `[remoteLog] user=${CE2.data.uid} browser=${Ie.T} device=${t} url=${n} ${e}`;
        return (
          (0, u.send)(`${CE2.data.v11_tracking_dest}/logs`, i, {
            sendBeacon: !0,
          }),
          e
        );
      };
      var Te = r(6149),
        Ne = r(7777),
        Re = r(8773);
      function Ae(e) {
        (0, o.Yz)(`[CEHUD] ${e}`);
      }
      const Oe = function () {
          return (
            0 === document.location.hash.indexOf("#powerup") ||
            /[^\w-]ce-hud-snapshot=[\d+]+/.test(document.location.hash)
          );
        },
        xe = function () {
          try {
            return (
              !CE2.state.loadedHUD &&
              ((function () {
                function e(e) {
                  let t;
                  if ("string" == typeof CE2.w.CE2_HUD_SCRIPT_URL)
                    t = CE2.w.CE2_HUD_SCRIPT_URL;
                  else {
                    if (!e)
                      return void Ae(
                        "Unable to determine HUD script URL. No version given."
                      );
                    t = `${CE2.data.hud.script_url}/${e}/index.js`;
                  }
                  const r = document.createElement("script");
                  (r.src = t), (r.defer = !0);
                  const n = document.getElementsByTagName("script")[0];
                  n.parentNode.insertBefore(r, n);
                }
                CE2.data.hud.version
                  ? e(CE2.data.hud.version)
                  : (0, u.get)(`${CE2.data.hud.host}/versions/latest`, (t) => {
                      t.status < 200 || t.status >= 300
                        ? Ae(
                            `Error loading latest HUD version: ${t.status} ${t.statusText}`
                          )
                        : e(t.responseText.trim());
                    });
              })(),
              (CE2.state.loadedHUD = !0),
              CE2.Native.localStorage.setItem("powerup", "true"),
              !0)
            );
          } catch (e) {
            return Ae(e), !1;
          }
        },
        De = function () {
          try {
            if (Oe()) return xe(), !0;
          } catch (e) {
            Ae(e);
          }
          return !1;
        },
        $e = {
          startListener() {
            CE2.w.opener && CE2.w.addEventListener("message", $e.onMessage);
          },
          stopListener(e, t) {
            CE2.w.removeEventListener("message", $e.onMessage),
              e.postMessage({ hudLaunched: !0 }, t);
          },
          onMessage(e) {
            try {
              if ((Ae("Received message"), e.source !== CE2.w.opener))
                return void Ae("Unexpected source");
              if (
                ![CE2.data.ce_app_url, ...CE2.data.hud.launch_origins].includes(
                  e.origin
                )
              )
                return void Ae("Unexpected source url");
              const t = e.data;
              if (!t || "object" != typeof t)
                return void Ae("Unexpected message");
              if ("number" != typeof t.launcherId)
                return void Ae("Unexpected launcherId");
              CE2.Native.sessionStorage.setItem(
                "ce-hud-launch-params",
                JSON.stringify(t)
              ),
                $e.stopListener(e.source, e.origin),
                xe();
            } catch (e) {
              Ae(e);
            }
          },
        },
        Me = function () {
          if (CE2.data && CE2.data.hud)
            try {
              !(function () {
                try {
                  if (void 0 === CE2.Native.localStorage) return !1;
                  if (void 0 === CE2.Native.localStorage.getItem) return !1;
                  const e = Boolean(
                    CE2.Native.sessionStorage &&
                      "function" == typeof CE2.Native.sessionStorage.getItem &&
                      CE2.Native.sessionStorage.getItem("ce-hud-launch-params")
                  );
                  return !(
                    (CE2.w.opener && !Oe() && !e) ||
                    !CE2.Native.localStorage.getItem("powerup") ||
                    (xe(), 0)
                  );
                } catch (e) {
                  return Ae(e), !1;
                }
              })(),
                CE2.w.addEventListener("hashchange", De),
                De(),
                $e.startListener();
            } catch (e) {
              Ae(e);
            }
        };
      function Pe() {
        try {
          if (
            (function (e) {
              return (
                !window.__CE_SCRIPT_CHECK &&
                (!!/bingpreview|prerender|jorgee|Mediapartners-Google|APIs-Google|phpcrawl|GoogleAdSenseInfeed|Google Page Speed Insights|Google-Ads-Overview|Google-Read-Aloud|Google-Structured-Data-Testing-Tool|Data Theorem|alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo|yandex|phantom|headless|BrandVerity|ruxitsynthetic|Chrome-Lighthouse/i.test(
                  e
                ) ||
                  void 0)
              );
            })(navigator.userAgent)
          )
            return "userAgent";
          if (!1 === navigator.onLine) return "navigator.onLine";
          const t =
            ((e = window).innerHeight >= 16384 || e.innerWidth >= 16384) &&
            "viewport-inner";
          if (t) return t;
          if (
            !navigator.language ||
            (navigator.languages && 0 === navigator.languages.length)
          )
            return "language";
          if (navigator.webdriver) return "webdriver";
          if (window.jasmine) return "jasmine";
          const r = [
              "__webdriver_evaluate",
              "__selenium_evaluate",
              "__webdriver_script_function",
              "__webdriver_script_func",
              "__webdriver_script_fn",
              "__fxdriver_evaluate",
              "__driver_unwrapped",
              "__webdriver_unwrapped",
              "__driver_evaluate",
              "__selenium_unwrapped",
              "__fxdriver_unwrapped",
            ],
            n = [
              "webdriver",
              "_phantom",
              "__nightmare",
              "_selenium",
              "callPhantom",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ];
          for (let e = 0; e < n.length; e++) {
            const t = n[e];
            if (window[t]) return `windowKey: ${t}`;
          }
          for (let e = 0; e < r.length; e++) {
            const t = r[e];
            if (window.document[t]) return `documentKey: ${t}`;
          }
          for (const e in window.document)
            if (e.match(/\$[a-z]dc_/) && window.document[e].cache_)
              return "chromeHeadlessCacheKey";
          if (
            window.external &&
            window.external.toString() &&
            -1 !== window.external.toString().indexOf("Sequentum")
          )
            return "sequentum";
          const { documentElement: i } = window.document;
          if (
            i.getAttribute("selenium") ||
            i.getAttribute("webdriver") ||
            i.getAttribute("driver")
          )
            return "selenium";
          if (/Chrome|Chromium/i.test(navigator.userAgent)) {
            if (!window.chrome) return "windowChromeMissing";
            const e = document.createElement("iframe");
            (e.style.display = "none"),
              e.setAttribute("sandbox", ""),
              document.body.appendChild(e);
            const t = typeof e.contentWindow.chrome;
            if ((e.remove(), "undefined" === t))
              return "windowChromeMissingOnIFrame";
            const r = document.createElement("canvas").getContext("webgl"),
              n = r.getExtension("WEBGL_debug_renderer_info"),
              i = r.getParameter(n.UNMASKED_VENDOR_WEBGL),
              s = r.getParameter(n.UNMASKED_RENDERER_WEBGL);
            if ("Brian Paul" === i && "Mesa OffScreen" === s)
              return "chromeHeadlessWEBGL";
          }
        } catch (e) {}
        var e;
        return !1;
      }
      let Ve;
      const Ue = function (e = !1) {
          return (
            !(!e && (0, s.jI)("v11_disable_bot_detection")) &&
            !window.__CE_SCRIPT_CHECK &&
            ((!e && Ve) ||
              (void 0 === Ve && (Ve = Pe()),
              (Ve =
                Ve ||
                !!document.querySelector(
                  '#ID-google-optimizer-editor, script[src*="optimize.google.com/optimize/inject/inject.js"]'
                ))),
            Ve)
          );
        },
        Le = CE2.ie ? /complete/ : /complete|interactive/,
        ze = [];
      let Be;
      CE2.d && (Be = CE2.d.readyState && Le.test(CE2.d.readyState));
      const He = function (e) {
          if (Be) return setTimeout(e, 1);
          ze.push(e);
        },
        Ye = function () {
          const e = function () {
            const e = ze;
            for (; e.length > 0; ) e.pop().call();
            Be = !0;
          };
          if (
            (Be && e(),
            (0, s.KT)(window, "load", e),
            CE2.d.addEventListener && (0, s.KT)(CE2.d, "DOMContentLoaded", e),
            CE2.d.readyState)
          ) {
            const t = Le;
            !(function r() {
              t.test(CE2.d.readyState) ? e() : setTimeout(r, 10);
            })();
          }
        },
        je = "ce_successful_csp_check";
      class Fe {
        load() {
          return (
            this.loadPromise ||
              (this.loadPromise = new Promise((e) => {
                if (
                  (CE2.benchmark.start(
                    "navigation|crazyegg|common|userdatamain|load-csp"
                  ),
                  void 0 === this.isSuccessful &&
                    (this.isSuccessful = Fe.get()),
                  void 0 !== this.isSuccessful)
                )
                  return (
                    CE2.benchmark.stop(
                      "navigation|crazyegg|common|userdatamain|load-csp"
                    ),
                    void e()
                  );
                const t = [
                  CE2.data.page_states_tracking_url,
                  CE2.data.assets_tracking_url,
                ].map((e) =>
                  e
                    ? new Promise((t) => {
                        (0, u.get)(`${e}/healthcheck`, (e) => {
                          e && 200 === e.status && e.responseText
                            ? ((e = CE2.Native.JSON.parse(
                                e.responseText.trim()
                              )),
                              t("ok" === e.status))
                            : t(!1);
                        });
                      })
                    : Promise.resolve(!0)
                );
                t.push(Fe.getInlineWorkerPromise()),
                  Promise.all(t).then((t) => {
                    (this.isSuccessful = -1 === t.findIndex((e) => !1 === e)),
                      this.isSuccessful && Fe.store(),
                      CE2.benchmark.stop(
                        "navigation|crazyegg|common|userdatamain|load-csp"
                      ),
                      e();
                  });
              })),
            this.loadPromise
          );
        }
        hasIssues() {
          return !this.isSuccessful;
        }
        static getInlineWorkerPromise() {
          return new Promise((e) => {
            try {
              const t = (0, s.I3)(
                "crazyegg-csp-check",
                (e) => {
                  self.postMessage(e.data);
                },
                !1
              );
              if (t) {
                const r = setTimeout(() => {
                  t.terminate(), e(!1);
                }, 500);
                (t.onmessage = (n) => {
                  clearTimeout(r), t.terminate(), e("hello" === n.data);
                }),
                  t.postMessage("hello");
              } else e(!1);
            } catch (t) {
              e(!1);
            }
          });
        }
        static store() {
          CE2.Native.localStorage.setItem(je, +new Date() + 864e5);
        }
        static get() {
          let e = CE2.Native.localStorage.getItem(je);
          if (e) {
            if (((e = parseInt(e, 10)), e > +new Date())) return !0;
            CE2.Native.localStorage.removeItem(je);
          }
        }
      }
      const Ge = new Fe(),
        Ke = (function () {
          const e = "!$%&()*+,-.0123456789;<=>?@[]^_`{|}~",
            t = {};
          let r;
          for (r = 0; r < 36; r++) t[e.charAt(r)] = r.toString(36);
          return t;
        })(),
        We = function (e) {
          return parseInt(
            e.replace(/./g, (e) => Ke[e]),
            36
          );
        },
        qe = function (e) {
          let t = "";
          const r =
              /(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi,
            n = String.fromCharCode;
          let i;
          for (; null != (i = r.exec(e)); )
            i[1] || i[2]
              ? (t += n(We(i[0])))
              : i[3]
              ? (t += n(We(i[3].substr(1))))
              : i[4] && (t += n(We(i[4].substr(1))));
          return t;
        };
      var Je = r(9880);
      const Qe = function () {
        const e = "v11slnt";
        function t() {
          C.i.set(e, +new Date());
        }
        function r() {
          const t = (function () {
            const t = C.i.get(e);
            if (t) return parseInt(t, 10);
          })();
          return !!t && +new Date() - t < 6e5;
        }
        return {
          slow: () => {
            if ((0, s.jI)("v11_record_slow_network")) return !1;
            try {
              return (
                (function () {
                  if (
                    navigator &&
                    navigator.connection &&
                    navigator.connection.downlink
                  ) {
                    const { downlink: e } = navigator.connection;
                    e < 0.5 && t();
                  }
                })(),
                (function () {
                  if (performance && performance.getEntriesByType) {
                    const e = performance.getEntriesByType("resource");
                    if (void 0 === e || e.length <= 0) return !1;
                    let r, n;
                    for (let t = 0; t < e.length; t++) {
                      const i = e[t];
                      /pages\/versioned\/tracking\-scripts/.test(i.name) &&
                        (r = i),
                        r ||
                          "undefined" == typeof CE_USER_COMMON_SCRIPT_URL ||
                          i.name !== CE_USER_COMMON_SCRIPT_URL ||
                          (r = i),
                        /pages\/data\-scripts\//.test(i.name) && (n = i);
                    }
                    for (let e = 0, i = [r, n]; e < i.length; e++) {
                      const r = i[e];
                      r &&
                        r.responseEnd &&
                        r.responseStart &&
                        r.responseEnd - r.responseStart > 1e3 &&
                        t();
                    }
                  }
                })(),
                r()
              );
            } catch (e) {
              return (0, _e.A)(e), !1;
            }
          },
        };
      };
      function Xe(e) {
        if ("" !== e && !/^\s*#.*$/.test(e)) return e.replace(/\s*#.*$/, "");
      }
      function Ze(e, t) {
        return t.indexOf("-") > -1
          ? (function (e, t) {
              if (-1 === e.indexOf(".")) return !1;
              const r = e.split("."),
                n = Xe(t);
              if (!n) return !1;
              const i = n.split("-");
              if (!i[0] || !i[1]) return !1;
              const s = i[0].split("."),
                o = i[1].split(".");
              for (let e = 0; e < 4; e++) {
                if (!s[e] || !o[e]) return !1;
                if ("*" === s[e] || "*" === o[e]) continue;
                const t = parseInt(r[e], 10);
                if (t < parseInt(s[e], 10) || t > parseInt(o[e], 10)) return !1;
              }
              return !0;
            })(e, t)
          : t.indexOf(":") > -1
          ? (function (e, t) {
              if (-1 === e.indexOf(":")) return !1;
              const r = e.split(":"),
                n = Xe(t);
              if (!n) return !1;
              const i = n.split(":");
              for (let e = 0; e < i.length; e++)
                if ("*" !== i[e] && i[e] !== r[e]) return !1;
              return !0;
            })(e, t)
          : (function (e, t) {
              if (-1 === e.indexOf(".")) return !1;
              const r = e.split("."),
                n = Xe(t);
              if (!n) return !1;
              const i = n.split(".");
              for (let e = 0; e < 4; e++) {
                if (!i[e]) return !1;
                if ("*" !== i[e] && parseInt(i[e], 10) !== parseInt(r[e], 10))
                  return !1;
              }
              return !0;
            })(e, t);
      }
      class et {
        constructor(e) {
          (this.text = e || ""), (this.rules = this.text.split("\n"));
        }
        blocked(e) {
          if (!e) return !1;
          for (let t = 0; t < this.rules.length; t++)
            if (Ze(e, this.rules[t])) return !0;
          return !1;
        }
      }
      let tt = null;
      const rt = function (e) {
          e && (CE2.state.overridenRecordingSamplingRate = e);
        },
        nt = function (e = {}) {
          "number" == typeof e.samplingRate && rt(e.samplingRate),
            (tt = 1),
            CE2.tracker?.session || (CE2.recordingSettingChanged = !0),
            e?.tags && (0, s.Ap)(e.tags);
        },
        it = function () {
          (tt = 0), CE2.tracker?.session && (CE2.recordingSettingChanged = !0);
        },
        st = function () {
          return 0 === tt;
        };
      let ot = [],
        at = [];
      const ct = function (e, t, r = !1) {
          const n = r ? "matched" : "rejected";
          at.push({ rule: e, result: n, message: t });
        },
        lt = function (e) {
          return (t, r = !1) => {
            ct(e, t, r);
          };
        },
        dt = function (e, t, r = !1) {
          const n = r ? "matched" : "rejected";
          ot.push({ id: e.id, result: n, message: t });
        },
        ut = function (e) {
          return (t, r = !1) => {
            dt(e, t, r);
          };
        },
        ht = function (e) {
          let t, r;
          const { rules: n } = e;
          if (
            CE2.data.disable_recordings_mobile &&
            1 !== CE2.clock.getDeviceType()
          )
            return (
              ct(
                {
                  disable_recordings_mobile: CE2.data.disable_recordings_mobile,
                  device: CE2.clock.getDeviceType(),
                },
                "disabled mobile",
                !1
              ),
              !1
            );
          if (e.pageTargetingEnabled) {
            if (1 === tt) return !0;
            if (n && n.length)
              for (t = 0; (r = n[t++]); )
                if ((0, Te.$)(r.u, CE2.w.location.href, r.o, null, null, lt(r)))
                  return !0;
            return !1;
          }
          return ct({}, "All pages", !0), !0;
        };
      const pt = function (e) {
          if (!e.sessionRecording)
            return void (0, o.Yz)("[Sessions] Recordings disabled");
          if (
            !(e.recordingSettings && e.recordingSettings.recordIframes) &&
            CE2.w.parent !== CE2.w
          ) {
            const e = (0, s.Ep)(),
              t = (0, s.R2)().substr(1);
            if (e && e.indexOf(t) > -1)
              return void (0, o.Yz)(
                "[Sessions] Recordings prevented from iframe"
              );
          }
          const t = ht(e.recordingSettings),
            r =
              e.recordingSettings &&
              (function (e) {
                const { blockedRules: t } = e;
                return st() || (0, Te.e)(t);
              })(e.recordingSettings),
            n = new Qe().slow()
              ? "slow network"
              : (0, s.Qb)()
              ? Ge.hasIssues()
                ? "site has csp issue"
                : void 0
              : "inline-workers not supported";
          let i = L.instance();
          if (i && i.isFull())
            return n
              ? (i.reset(n), void (0, s.GO)(`[Sessions] Stopped: ${n}`))
              : i.isExpired()
              ? void i.reset("expired")
              : r && (e.recordingSettings.endSessionOnBlockedUrl || st())
              ? (i.reset("page-blocked"),
                void (0, s.GO)("[Sessions] Page blocked and marked to end"))
              : r
              ? void (0, s.GO)("[Sessions] Page blocked")
              : ((0, o.Yz)("[Sessions] Continued"), i);
          if (
            ((0, o.Yz)("[Sessions] Matching parameters", CE2.w.location.href),
            (0, o.Yz)("[Sessions] Matching target", at),
            (at = []),
            !t)
          )
            return void (0, o.Yz)("[Sessions] No matches");
          if (
            ((0, o.Yz)("[Sessions] Matched", { url: CE2.w.location.href }), r)
          )
            return void (0, o.Yz)("[Sessions] Page blocked");
          if (n) return void (0, o.Yz)(`[Sessions] Won't start: ${n}`);
          const a = new Je.w(e);
          return a.validRatio() && a.canRecord()
            ? (i && !i.isDeleted()
                ? (i.becomeFull(),
                  (0, o.Yz)(
                    "[Sessions] Sampling accepted, starting new from virtual"
                  ))
                : ((i = L.build(!0)),
                  (0, o.Yz)("[Sessions] Sampling accepted, starting new")),
              i)
            : ((0, o.Yz)("[Sessions] Sampling rejected"), !1);
        },
        gt = function (e, t, r, n, i, s) {
          if (
            (void 0 === e.isBlocked && (e.isBlocked = new et(e.ip).blocked(s)),
            e.isBlocked)
          )
            return dt(e, "IP blocked"), !1;
          if (Ue()) return dt(e, "bot blocked"), !1;
          if (e.vid) {
            const t =
              n.includes(e.vid) &&
              (!CE2.Native.Array.isArray(e.d) ||
                e.d.indexOf(CE2.clock.getDeviceType()) >= 0);
            return dt(e, `variantid=${n.join(",")} allowed=${e.vid}`, t), t;
          }
          return i && Object.values(i).length && e.o && /go/.test(e.o)
            ? (0, Te.$)(e.u, i, e.o, e.d, CE2.n.userAgent, ut(e))
            : r && e.o && /n/.test(e.o)
            ? (0, Te.$)(e.u, r, e.o, e.d, CE2.n.userAgent, ut(e))
            : (0, Te.$)(e.u, t, e.o, e.d, CE2.n.userAgent, ut(e));
        },
        ft = "cebsp_";
      const Et = new (class {
        constructor() {
          this.numPages = 0;
        }
        load() {
          (this.numPages = (0, s.Ri)(ft)),
            (this.numPages = this.numPages ? parseInt(this.numPages, 10) : 0);
        }
        pageChanged() {
          this.numPages++, (0, s.o)(ft, this.numPages);
        }
        getPages() {
          return this.numPages;
        }
      })();
      class mt {
        constructor() {
          CE2BH.defineProperty(this, "CURRENT_RETURNING_WINDOW_MSEC", 18e5),
            CE2BH.defineProperty(this, "RETURNING_WINDOW_MSEC", 2592e6),
            CE2BH.defineProperty(this, "visitorV6Key", "_cer.v"),
            CE2BH.defineProperty(this, "visitorKey", "v"),
            CE2BH.defineProperty(this, "visitorIdentificationKey", "vi"),
            CE2BH.defineProperty(this, "visitorIsReturningKey", "vir"),
            CE2BH.defineProperty(this, "visitorLastVisitAtKey", "lva"),
            CE2BH.defineProperty(this, "visitorVisitsKeyLegacy", "vv"),
            CE2BH.defineProperty(this, "visitorVisitsKey", "vpv"),
            CE2BH.defineProperty(this, "browserSessionCookie", "cebs"),
            CE2BH.defineProperty(this, "firstVisitDataKey", "ce_fvd"),
            (this.id = null),
            (this.identification = void 0),
            (this.storedId = null),
            (this.numVisits = null),
            (this.visitorV6Parts = null),
            (this.firstVisitData = null),
            (0, s.Ri)(this.visitorV6Key) &&
              (this.visitorV6Parts = (0, s.Ri)(this.visitorV6Key).split("."));
        }
        load() {
          this.loadVisitorId(),
            this.loadVisitorIdentification(),
            this.loadVisitorVisits(),
            this.loadFirstVisitData();
        }
        identify(e) {
          e &&
            ((CE2.IDENTIFIER = this.identification = e),
            C.i.set(this.visitorIdentificationKey, this.identification));
        }
        clearIdentity() {
          (CE2.IDENTIFIER = null), C.i.del(this.visitorIdentificationKey);
        }
        del(e) {
          C.i.del(e);
        }
        reset() {
          this.del(this.visitorKey), this.del(this.visitorVisitsKey);
        }
        loadVisitorId() {
          if (
            ((this.storedId = C.i.get(this.visitorKey)), window.CE_VISITOR_ID)
          )
            (this.id = window.CE_VISITOR_ID),
              this.storedId &&
                window.CE_VISITOR_ID !== this.storedId &&
                this.reset();
          else if (this.storedId) this.id = this.storedId;
          else if (this.visitorV6Parts) {
            const [e] = this.visitorV6Parts;
            (this.id = e), C.i.set(this.visitorKey, e);
          } else (this.id = (0, Ie.M4)()), C.i.set(this.visitorKey, this.id);
        }
        loadVisitorIdentification() {
          const e = C.i.get(this.visitorIdentificationKey);
          CE2.IDENTIFIER
            ? (this.identification = CE2.IDENTIFIER)
            : e &&
              ((this.identification = e),
              (CE2.IDENTIFIER = this.identification));
        }
        loadVisitorVisits() {
          const e = !(0, s.Ri)(this.browserSessionCookie);
          e &&
            (this.isReturning(),
            CE2.Native.localStorage.removeItem(this.firstVisitDataKey)),
            (0, s.o)(this.browserSessionCookie, "1"),
            C.i.get(this.visitorVisitsKey)
              ? (this.numVisits = parseInt(C.i.get(this.visitorVisitsKey), 10))
              : C.i.get(this.visitorVisitsKeyLegacy)
              ? (this.numVisits = 1)
              : this.visitorV6Parts &&
                this.visitorV6Parts[2] &&
                (this.numVisits = parseInt(this.visitorV6Parts[2], 36)),
            null === this.numVisits
              ? ((this.numVisits = 0),
                C.i.set(this.visitorVisitsKey, this.numVisits))
              : e &&
                ((this.numVisits += 1),
                C.i.set(this.visitorVisitsKey, this.numVisits));
        }
        loadFirstVisitData() {
          let e = CE2.Native.localStorage.getItem(this.firstVisitDataKey);
          if (e) this.firstVisitData = CE2.Native.JSON.parse(e);
          else {
            const { userData: t } = CE2.state;
            (e = {
              landingUrl: CE2.w.location.href,
              referrer: CE2.d.referrer,
              time: Date.now(),
              utm: (0, s.ne)(),
              userData:
                Object.values(t).length > 0
                  ? [t[1], t[2], t[3], t[4], t[5]]
                  : [],
            }),
              (this.firstVisitData = e),
              CE2.Native.localStorage.setItem(
                this.firstVisitDataKey,
                CE2.Native.JSON.stringify(e)
              );
          }
        }
        isReturning() {
          return this.returningState().state === mt.RETURNING_STATE.RETURNING;
        }
        returningState() {
          if (void 0 !== this.isReturningCache) return this.isReturningCache;
          let e = C.i.get(this.visitorIsReturningKey),
            t = C.i.get(this.visitorLastVisitAtKey),
            r = !1;
          e ||
            ((e = mt.RETURNING_STATE.NEW),
            (t = Date.now()),
            CE2.Native.localStorage.removeItem(this.firstVisitDataKey));
          const n = Date.now() - t;
          return (
            n > this.CURRENT_RETURNING_WINDOW_MSEC &&
              ((e = mt.RETURNING_STATE.RETURNING),
              CE2.Native.localStorage.removeItem(this.firstVisitDataKey)),
            n > this.RETURNING_WINDOW_MSEC &&
              ((e = mt.RETURNING_STATE.NEW),
              (r = !0),
              CE2.Native.localStorage.removeItem(this.firstVisitDataKey)),
            (0, o.Yz)(
              `[Visitor] IsReturning id=${this.id} state=${e} lastVisit=${t} reset=${r}`
            ),
            (t = Date.now()),
            C.i.set(this.visitorIsReturningKey, e),
            C.i.set(this.visitorLastVisitAtKey, t),
            (this.isReturningCache = { state: e, reset: r }),
            this.isReturningCache
          );
        }
      }
      CE2BH.defineProperty(mt, "RETURNING_STATE", {
        NEW: "new",
        RETURNING: "returning",
      });
      const vt = new mt(),
        Ct = function () {
          return {
            isReturning: () => vt.isReturning(),
            returningState: () => vt.returningState(),
            getId: () => vt.id,
            getIdentification: () => vt.identification,
            getStoredId: () => vt.storedId,
            getNumVisits: () => vt.numVisits,
            getFirstVisitData: () => vt.firstVisitData,
            load() {
              vt.load();
            },
            identify: (e) => vt.identify(e),
            clearIdentity() {
              vt.clearIdentity();
            },
          };
        };
      var yt = r(401);
      const wt = "_ce.clock_data",
        _t = ",",
        St = /^[123]$/;
      const It = new (class {
        getData() {
          return (0, s.Ri)(wt);
        }
        load() {
          if (this.loadPromise) return this.loadPromise;
          const e = this;
          return (
            (this.loadPromise = new Promise((t, r) => {
              CE2.benchmark.start(
                "navigation|crazyegg|common|userdatamain|load-clock"
              );
              const n = (0, s.Ri)(wt);
              if (n) {
                const [r, i, s, o, a, c] = n.split(_t);
                if (!o || o === (0, yt.F)(CE2.n.userAgent))
                  return (
                    r &&
                      i &&
                      ((e.diff = parseInt(r, 10)),
                      (e.ip = i),
                      (e.device = s && St.test(s) ? parseInt(s, 10) : void 0),
                      (e.userAgentMd5 = o),
                      (e.browser = a),
                      (e.country = c),
                      (e.valid = !0)),
                    CE2.benchmark.stop(
                      "navigation|crazyegg|common|userdatamain|load-clock"
                    ),
                    CE2.debug("[Clock] Loaded from cookie", n),
                    void t()
                  );
                CE2.debug("[Clock] User agent changed, reloading");
              }
              const i = (n) => {
                const [i, a, c, l, d] = n.responseText.split(_t),
                  u = parseInt(i, 10);
                if (u > 0) {
                  const r = +new Date() - u;
                  (e.diff = r),
                    (e.ip = a),
                    (e.device = c && St.test(c) ? parseInt(c, 10) : void 0),
                    (e.browser = l),
                    (e.country = d),
                    (e.userAgentMd5 = (0, yt.F)(CE2.n.userAgent)),
                    (e.valid = !0);
                  const n = [
                    r,
                    a,
                    e.device,
                    e.userAgentMd5,
                    e.browser,
                    e.country,
                  ].join(_t);
                  (0, s.o)(wt, n, { expiresInDays: 1 }),
                    (0, o.Yz)("[Clock] Fetch from api", n),
                    CE2.benchmark.stop(
                      "navigation|crazyegg|common|userdatamain|load-clock"
                    ),
                    t();
                } else (0, o.Yz)("[Clock] Error, stopping"), r();
              };
              let a, c, l;
              if (CE2.site?.id && !CE2.w.CE_SITE_ID) {
                (c = CE2.data.uid), (l = CE2.site.id);
                const e = [
                    (0, Ie.M4)(0, 1),
                    CE2.visitorTracker.getId(),
                    36,
                    CE2.VERSION,
                    +new Date(),
                    CE2.tabId,
                  ],
                  t = CE2.visitorTracker.getFirstVisitData();
                a = [
                  e,
                  [
                    CE2.getVisitId(),
                    t.landingUrl,
                    t.referrer,
                    (0, s.ne)(t.landingUrl),
                    CE2.w.CE_URL_FINGERPRINT(),
                    CE2.visitorTracker.isReturning() ? 1 : 0,
                    CE2.visitorTracker.getNumVisits(),
                  ],
                ];
              }
              (0, s.ou)()
                ? i({
                    responseText: [
                      +new Date(),
                      "99.99.99.99",
                      1,
                      "chrome",
                      "US",
                    ].join(_t),
                  })
                : (0, u.sendEvents)(
                    {
                      userId: c,
                      siteId: l,
                      context: "Clock",
                      t: +new Date(),
                      endpoint: CE2.data.clock_url,
                      callback: i,
                    },
                    a ? [a] : []
                  );
            })),
            this.loadPromise
          );
        }
        getIP() {
          return this.ip;
        }
        getDiff() {
          return this.diff;
        }
        getBrowser() {
          return this.browser;
        }
        getCountry() {
          return this.country;
        }
        getDate() {
          if (this.valid) return new Date(+new Date() - this.diff);
        }
        getDateUnix() {
          const e = this.getDate();
          if (e) return Math.floor(e / 1e3);
        }
        getDeviceType() {
          return this.device
            ? this.device
            : ((0, o.Yz)(
                "[Clock] Clock didn't know device. Using deviceType() instead."
              ),
              (function (e) {
                const t = e.toLowerCase();
                let r,
                  n,
                  i = 0;
                if (((r = e.indexOf("(")), -1 == r)) return 1;
                if ((r++, -1 != (n = e.indexOf("Android", r)))) {
                  if (((n += 8), e.length > n && (i = e.charAt(n))))
                    switch (i) {
                      case "2":
                        if (-1 != e.indexOf("BNTV", n)) return 3;
                        if (-1 != t.indexOf("nook", n)) return 3;
                        if (-1 != e.indexOf("Kindle", n)) return 3;
                        if (-1 != e.indexOf("Touchpad", n)) return 3;
                        break;
                      case "3":
                        return 3;
                      case "4":
                        if (-1 != e.indexOf("Silk", n)) return 3;
                    }
                  return -1 != t.indexOf("tablet", n)
                    ? 3
                    : -1 != e.indexOf("Mobi", n)
                    ? 2
                    : 3;
                }
                if (-1 != (n = e.indexOf("iP", r)))
                  switch (((i = e.charAt(n + 2)), i)) {
                    case "a":
                      return 3;
                    case "h":
                    case "o":
                      return 2;
                  }
                return -1 != (n = e.indexOf("BlackBerry", r))
                  ? -1 != e.indexOf("Tablet", n + 10)
                    ? 3
                    : 2
                  : -1 != e.indexOf("Windows Phone", r) ||
                    -1 != e.indexOf("BB10", r) ||
                    ("M" != e.charAt(0) && -1 != e.indexOf("Opera Mini", r))
                  ? 2
                  : 1;
              })(CE2.n.userAgent));
        }
      })();
      var kt = r(5736);
      class bt extends kt.A {
        constructor(...e) {
          super(...e),
            (this.site = CE2.site),
            (this.visitData = this.visitor.getFirstVisitData()),
            (this.bufferTimeoutInterval = 6e4),
            this.processBuffer({ scheduleTimeout: !0 }),
            this.setupPageHideHandler();
        }
        trigger({ flowsMatching: e }) {
          const { w: t } = CE2;
          let r;
          e && ([r] = e),
            this.bufferQueue.push(
              this.newEvent(39, {
                attributes: [
                  this.visitor.getIdentification(),
                  t.location.href,
                  t.CE_URL_FINGERPRINT?.(),
                  this.visitData.referrer,
                  this.visitData.utm,
                  this.visitData.landingUrl,
                  this.visitor.isReturning(),
                  r?.flow?.name,
                  r?.flow?.id,
                  r?.variant?.name,
                  r?.variant?.id,
                ],
              })
            );
        }
        setupPageHideHandler() {
          (0, s.KT)(CE2.w, "visibilitychange", () => {
            "visible" !== CE2.d.visibilityState &&
              this.processBuffer({ sendBeacon: !0 });
          });
        }
      }
      let Tt;
      (CE2.clock = It),
        (CE2.csp = Ge),
        (CE2.eventTypes = {
          VISIT: 1,
          CLICK: 2,
          SCROLL: 3,
          MOUSE_MOVEMENT: 4,
          PAGE_STATE: 5,
          RESIZE: 6,
          SESSION_SCROLL: 7,
          ERROR: 8,
          PAGE_LOAD: 9,
          INACTIVE: 10,
          TYPING: 11,
          CUSTOM: 12,
          PAGE_VISIBILITY: 13,
          DOM_CONTENT_LOADED: 14,
          FIRST_CONTENTFUL_PAINT: 15,
          DOM_INTERACTIVE: 16,
          IDENTIFY: 17,
          CUSTOM_USER_DATA: 18,
          TAG: 19,
          SESSION_RATIO: 20,
          VALID_SESSION: 21,
          END_SESSION: 22,
          ECOMMERCE: 23,
          FORM: 24,
          CUSTOM_PERFORMANCE: 25,
          GOAL_CONVERSION: 26,
          ASSETS: 27,
          SURVEY_RESPONSE: 28,
          EXCESSIVE_SCROLL: 29,
          LONG_TASK: 30,
          FIRST_INPUT_DELAY: 31,
          CUMULATIVE_LAYOUT_SHIFT: 32,
          LARGEST_PAINT: 33,
          QUICKBACK: 34,
          SESSION_WORTH: 35,
          DAILY_VISIT: 36,
          DAILY_VISIT_COUNTER: 37,
          ADDON_CLICK: 38,
          PAGE_VIEW: 39,
          AB_TEST_VIEW: 40,
          AB_TEST_CONVERSION: 41,
        }),
        (CE2.clickTypes = { RAGE: "r", AUTH_BUTTON: "a", NOT_CLICKABLE: "d" }),
        (CE2.getVisitId = () => CE2.visitId),
        (CE2.getSessionId = () => L.currentSessionId());
      const Nt = function () {
          CE2.bh && (CE2.bh.parentElement.removeChild(CE2.bh), (CE2.bh = null));
        },
        Rt = function (e = !0) {
          return Promise.all([
            CE2.clock.load(),
            e ? CE2.csp.load() : Promise.resolve(),
          ]);
        },
        At = function (e) {
          if (!CE2.data || !CE2.data.features) return !1;
          for (let t = 0, r = CE2.data.features; t < r.length; t++) {
            if (r[t] === e) return !0;
          }
          return !1;
        },
        Ot = function (e) {
          try {
            (0, o.Yz)(`[Loading] ${e}`),
              "function" == typeof CE_NOT_TRACKING && window.CE_NOT_TRACKING(e);
          } catch (e) {
            (0, o.Yz)("[Loading] Not tracking callback failure", e);
          }
        };
      const xt = function (e) {
          if (
            (CE2.benchmark.start(
              "navigation|crazyegg|common|userdatamain|load-samplingdata"
            ),
            CE2.data && CE2.data.samplingData)
          )
            return e();
          const t = CE2.getNativeXMLHttpRequest();
          (t.onreadystatechange = function () {
            if (4 == t.readyState)
              try {
                200 == t.status &&
                  t.responseText &&
                  ((CE2.data.samplingData = CE2.Native.JSON.parse(
                    t.responseText
                  )),
                  CE2.benchmark.stop(
                    "navigation|crazyegg|common|userdatamain|load-samplingdata"
                  ),
                  e());
              } catch (e) {
                (0, o.Yz)("[Loading] Error loading sampling data", e.message);
              }
          }),
            (t.onerror = function (e) {
              (0, o.Yz)("[Loading] Error loading sampling data", e.message);
            }),
            (0, o.Yz)(
              "[Loading] Sampling user data",
              CE2.data.sampling_data_url
            ),
            t.open(
              "GET",
              `${CE2.data.sampling_data_url}?t=${CE2.getUserDataTime()}`,
              !0
            ),
            t.send();
        },
        Dt = async function () {
          CE2.benchmark.start("navigation|crazyegg|common|usermain");
          try {
            CE2.VERSION = CE2.data.version;
            let e = `[Loading] Starting version=${CE2.VERSION}`;
            window.parent !== window && (e += " from within an iframe"),
              (0, o.Yz)(e);
            let t,
              { snapshots: r, sites: n, goals: i } = CE2.data,
              a = CE2.data.global_ip_block_list,
              c = !0;
            "string" == typeof r && (r = CE2.Native.JSON.parse(qe(r))),
              "string" == typeof n && (n = CE2.Native.JSON.parse(qe(n))),
              "string" == typeof i && (i = CE2.Native.JSON.parse(qe(i))),
              (a = qe(a)),
              n && CE2.w.CE_SITE_ID
                ? ((CE2.sites = n),
                  (CE2.site = t = n.find((e) => e.id === CE2.w.CE_SITE_ID)))
                : n && ((CE2.sites = n), (CE2.site = t = (0, s.DQ)(n)));
            const d = (function () {
              try {
                CE2.Native.localStorage.setItem("ce_localstorage_test", ""),
                  CE2.Native.localStorage.removeItem(
                    "ce_localstorage_test",
                    ""
                  );
              } catch (e) {
                return "localStorage not available";
              }
              return !!(0, s.uh)("_ce.cch") || "cookies not available";
            })();
            if (!0 !== d) return void Ot(`Not tracking: can't run - ${d}`);
            if ((CE2.hudMain && CE2.hudMain(), CE2.bot))
              return void Ot(`Not tracking: bot detected - ${CE2.bot}`);
            if ((0, s.LB)(CE2.w, CE2.d, CE2.n, CE2.ie))
              return void Ot("Not tracking: doNotTrack detected.");
            if ((Nt(), t)) {
              (0, s.ch)(CE2.w, "pageshow", (e) => {
                e.persisted &&
                  (delete CE2.monitorPagePath, delete CE2.monitorPageUrl);
              }),
                !CE2.data.sites_sampling &&
                  CE2.data.samplingData &&
                  CE2.data.samplingData.sites_sampling &&
                  (CE2.data.sites_sampling = CE2.Native.JSON.parse(
                    qe(CE2.data.samplingData.sites_sampling)
                  ));
              const e = new Map((r || []).map((e) => [e.id, e]));
              if (
                ((CE2.testID = CE2.testVersion = null),
                (CE2.tabId = (0, Ie.vU)()),
                (CE2.visitorTracker = Ct()),
                CE2.visitorTracker.load(),
                Et.load(),
                await Rt(!!t.sessionRecording),
                CE2.benchmark.stop("navigation|crazyegg|common|usermain"),
                oe(p, { site: t }),
                new et(a).blocked(CE2.clock.getIP()))
              )
                return (
                  (0, o.Yz)("[Loading] IP Blocked", CE2.clock.getIP()),
                  void (CE2.ipBlocked = !0)
                );
              (CE2.ipBlocked = !1),
                At("page-view") && (CE2.pageViewTracker = new bt()),
                "function" == typeof CE2.initFlowTracking
                  ? (CE2.flowsMatching = await CE2.initFlowTracking())
                  : (0, l.bU)() && (0, l.UE)(),
                (Tt = async function () {
                  try {
                    CE2.benchmark.start("navigation|crazyegg|common|monitor");
                    const n = CE2.w.location.href,
                      a = CE2.w.location.pathname,
                      d =
                        (CE2.flowsMatching &&
                          CE2.flowsMatching.map(
                            (e) => e.flow?.trackByVariant && e.variant.variantId
                          )) ||
                        [],
                      h =
                        "string" == typeof CE_SNAPSHOT_NAME &&
                        CE_SNAPSHOT_NAME.trim(),
                      p = (function (e) {
                        const t = {};
                        if (e && e.length) {
                          const { gaData: r, google_optimize: n } = CE2.w;
                          e.forEach((e) => {
                            if (e && "go" == e.o) {
                              const i = (e.u || "").split(".");
                              if (i[1]) {
                                const e =
                                  r?.[i[0]]?.experiments?.[i[1]] ||
                                  n?.get?.(i[1]);
                                e && (t[i[1]] = e);
                              }
                            }
                          });
                        }
                        return t;
                      })(r),
                      g = CE2.clock.getDateUnix();
                    let E = !1,
                      m = CE2.monitorSession,
                      v = (
                        CE2.monitorSnapshotIds
                          ? CE2.monitorSnapshotIds.split(",")
                          : []
                      ).map((t) => e.get(parseInt(t, 10)));
                    const C = v
                      .filter((e) => e && e.e && g >= e.e)
                      .sort()
                      .map((e) => e.id)
                      .join(",");
                    let y = CE2.monitorGoalIds;
                    if (
                      CE2.monitorPageUrl == n &&
                      CE2.monitorVariantIds == CE2.Native.JSON.stringify(d) &&
                      CE2.monitorGaData == CE2.Native.JSON.stringify(p) &&
                      CE2.monitorCESnapshotName == h &&
                      CE2.monitorExpiredSnapshotIds == C &&
                      !CE2.recordingSettingChanged
                    )
                      return;
                    (0, s.Rc)(),
                      CE2.monitorPagePath !== a && (E = !0),
                      E &&
                        CE2.pageViewTracker?.trigger({
                          flowsMatching: CE2.flowsMatching,
                        }),
                      E && ((0, ne.$K)(), CE2.applyVersion?.()),
                      !E ||
                        c ||
                        CE2.flowPatchApplied ||
                        ("function" == typeof CE2.initFlowTracking
                          ? (CE2.flowsMatching = await CE2.initFlowTracking())
                          : (0, l.bU)() && (0, l.UE)()),
                      (CE2.monitorPagePath = a),
                      (CE2.monitorPageUrl = n),
                      (CE2.monitorVariantIds = CE2.Native.JSON.stringify(d)),
                      (CE2.monitorGaData = CE2.Native.JSON.stringify(p)),
                      (CE2.monitorCESnapshotName = h),
                      (CE2.monitorExpiredSnapshotIds = C),
                      (CE2.logHistoryEnabled = !0),
                      E
                        ? (Et.pageChanged(),
                          (m = pt(t)),
                          oe(f, { site: t, session: m }))
                        : CE2.recordingSettingChanged && (m = pt(t)),
                      (CE2.recordingSettingChanged = !1),
                      r && r.length
                        ? (v = (function (e, t, r, n, i) {
                            (0, o.Yz)("[Snapshots] Matching parameters", {
                              pageUrl: t,
                              ceSnapshotName: r,
                              variantIds: n,
                              gaData: i,
                            });
                            const s = [],
                              a = new Set(CE2.scriptCheckMatchingSnapshots),
                              c = CE2.clock.getIP();
                            if (!e || !e.length) return;
                            const l = CE2.clock.getDateUnix();
                            let d = null;
                            for (let o = 0; o < e.length; o++) {
                              const u = e[o];
                              u.e && (!l || u.e <= l)
                                ? dt(u, "expired")
                                : u.s && (!l || u.s > l)
                                ? (dt(u, "pending"), (CE2.p[u.id] = u))
                                : gt(u, t, r, n, i, c) &&
                                  (null === d && (d = u.v),
                                  u.v === d
                                    ? s.push(u)
                                    : dt(
                                        u,
                                        `incompatible format version (snapshot: ${u.v}, target:${d})`
                                      ),
                                  a.add(u.id));
                            }
                            return (
                              a.size > 0 &&
                                (CE2.scriptCheckMatchingSnapshots =
                                  CE2.Native.Array.from(a)),
                              (0, o.Yz)("[Snapshots] Matching targets", ot),
                              (ot = []),
                              s
                            );
                          })(r, n, h, d, p))
                        : (0, o.Yz)("[Snapshots] Nothing to match"),
                      v.length > 0
                        ? ((0, o.Yz)("[Snapshots] Matched", v),
                          (CE2.scriptCheckSelectedSnapshot = v[0].id),
                          (CE2.scriptCheckSelectedSnapshots = v.map(
                            (e) => e.id
                          )))
                        : r && r.length && (0, o.Yz)("[Snapshots] No matches");
                    const w =
                      (function (e, t) {
                        return e && t
                          ? e.filter((e) => e.site_id === t.id)
                          : ((0, o.Yz)("[Goals] Nothing to match"), []);
                      })(i, t) || [];
                    if (
                      (w.length &&
                        ((0, o.Yz)("[Goals] Matched", w),
                        (y = w
                          .sort()
                          .map((e) => e.id)
                          .join(","))),
                      CE2.virtualTracker ||
                        (CE2.virtualTracker = new j({
                          visitId: CE2.getVisitId(),
                          site: t,
                          session: m,
                          goals: w,
                        })),
                      (At("v11_session_logs") && m && m.isNew()) ||
                        ("undefined" != typeof CE_SESSION_LOG &&
                          CE_SESSION_LOG))
                    ) {
                      const e = (CE2.state?.logHistory || []).map(
                        (e) => `${m.id}: ${e}`
                      );
                      e.length > 0 &&
                        (0, u.send)(
                          `${CE2.data.v11_tracking_dest}/logs`,
                          e.join("\n"),
                          { sendBeacon: !0 }
                        );
                    }
                    CE2.state &&
                      ((CE2.state.logHistoryEnabled = !1),
                      (CE2.state.logHistory = [])),
                      (c = !1);
                    const _ = v
                      .map((e) => e.id)
                      .sort()
                      .join(",");
                    if (
                      m === CE2.monitorSession &&
                      _ === CE2.monitorSnapshotIds &&
                      y === CE2.monitorGoalIds &&
                      CE2.state?.survey === CE2.monitorSurvey &&
                      !E
                    )
                      return;
                    (CE2.monitorSession = m),
                      (CE2.monitorSnapshotIds = _),
                      (CE2.monitorGoalIds = y),
                      (CE2.monitorSurvey = CE2.state?.survey),
                      E && CE2.virtualTracker && CE2.virtualTracker.update(),
                      m || v.length || w.length
                        ? CE2.loadSessionTrackingScript(() => {
                            !(function (e, t, r, n, i) {
                              const a = {};
                              e &&
                                e.length &&
                                (a.snapshots = e.map((e) => ({
                                  id: e.id,
                                  version: e.v,
                                }))),
                                r && (a.session = r.id || r),
                                i && (a.goals = i.map((e) => e.id));
                              const c = (e || []).filter((e) => (0, s._3)(e));
                              if (
                                (c.length &&
                                  ((CE2.testID = c.map((e) => e.id)),
                                  (CE2.testVersion = c.map((e) => e.v))),
                                CE2.tracker)
                              ) {
                                if (
                                  (CE2.tracker.visitor &&
                                    (a.visitor = CE2.tracker.visitor.getId()),
                                  !CE2.tracker.session || r)
                                )
                                  return (
                                    (0, o.Yz)("[Loading] Updating Tracker", a),
                                    void CE2.tracker.update(c, r, n)
                                  );
                                CE2.resetTracker();
                              }
                              c.length || r || i
                                ? ((CE2.tracker = new CE2.V11Tracker({
                                    version: CE2.VERSION,
                                    visitId: CE2.getVisitId(),
                                    snapshots: c,
                                    session: r,
                                    censoredElements:
                                      CE2.getCensoredElements(t),
                                    site: t,
                                    goals: i,
                                  })),
                                  (a.visitor = CE2.tracker.visitor.getId()),
                                  (0, o.Yz)("[Tracker] Starting", a))
                                : (0, o.Yz)("[Tracker] Not started", a);
                            })(v, t, m, E, w);
                          })
                        : CE2.tracker && CE2.resetTracker(),
                      CE2.benchmark.stop("navigation|crazyegg|common|monitor"),
                      CE2.benchmark.stop("navigation|crazyegg|common"),
                      CE2.benchmark.stop("navigation|crazyegg"),
                      CE2.benchmark.stop("navigation"),
                      CE2.benchmark.autoReport() &&
                        setTimeout(() => CE2.benchmark.report(), 5e3);
                  } catch (e) {
                    (0, o.Yz)(e);
                  }
                }),
                await (async function () {
                  (0, o.Yz)("[Loading] Starting Monitor"),
                    Tt && !Ue() && (await Tt(), setInterval(Tt, 1e3));
                })();
            } else Ot("No site match.");
          } catch (e) {
            (0, o.Yz)(e);
          } finally {
            Nt();
          }
        },
        $t = async function () {
          (CE2.visitorTracker = Ct()),
            CE2.visitorTracker.load(),
            Et.load(),
            Nt(),
            (CE2.site = { id: 1, name: (0, s.R2)() }),
            await Rt(),
            CE2.loadSessionTrackingScript(() => {
              (0, o.Yz)("[Tracker] Starting Test Mode"),
                (CE2.tracker = new CE2.V11Tracker({
                  version: CE2.VERSION,
                  visitId: CE2.getVisitId(),
                  snapshots: [{ id: "testsnapshot" }],
                  session: L.build(),
                  censoredElements: [],
                })),
                (CE2.tracker.testMode = !0),
                oe(g, { site: CE2.site, session: CE2.tracker.session });
            });
        },
        Mt = async function () {
          CE2.benchmark.start("navigation|crazyegg|common|userdatamain"),
            (CE2.visitId = (0, Ie.M4)(0, 1)),
            (CE2.bot = Ue()),
            (0, s.ou)()
              ? $t()
              : CE2.commonScriptForceLoaded
              ? (Me(), await Rt(), oe(p))
              : CE2.data
              ? xt(() => {
                  CE2.benchmark.stop("navigation|crazyegg|common|userdatamain"),
                    Dt();
                })
              : CE2.data || "string" != typeof CE_USER_DATA_URL
              ? (0, o.Yz)("No CE2.data nor CE_USER_DATA_URL found, stopping.")
              : ((0, o.Yz)(
                  `No CE2.data, loading user data for CE_USER_DATA_URL=${CE_USER_DATA_URL}.`
                ),
                (0, u.get)(CE_USER_DATA_URL, (e) => {
                  (CE2.data = CE2.Native.JSON.parse(e.responseText)),
                    CE2.userDataToJs && CE2.userDataToJs(CE2.data),
                    xt(() => {
                      CE2.benchmark.stop(
                        "navigation|crazyegg|common|userdatamain"
                      ),
                        Dt();
                    });
                }));
        };
      CE2.resetTracker = function () {
        (CE2.testID =
          CE2.testVersion =
          CE2.scriptCheckMatchingSnapshots =
          CE2.scriptCheckSelectedSnapshot =
          CE2.scriptCheckSelectedSnapshots =
            null),
          CE2.tracker &&
            (CE2.tracker.cleanup(),
            delete CE2.tracker,
            (0, o.Yz)("[Tracker] Reset"));
      };
      const Pt = function (e, t = null) {
        e &&
          (t && (e.fingerprint = t), CE2.tracker && CE2.tracker.notifyError(e));
      };
      class Vt {
        constructor(e) {
          (this.callback = e || (() => {})),
            (this.onMouseMove = this.mouseMove.bind(this)),
            (this.onScroll = this.scroll.bind(this)),
            (this.exited = !1);
          const t = CE2.clock.getDeviceType();
          t === ke.p.typeMap.desktop
            ? (0, s.ch)(CE2.w, "mousemove", this.onMouseMove)
            : t === ke.p.typeMap.phone &&
              ((this.prevScroll =
                CE2.w.scrollY ||
                CE2.d.documentElement.scrollTop ||
                CE2.d.body.scrollTop),
              (0, s.ch)(CE2.w, "scroll", this.onScroll));
        }
        mouseMove(e) {
          e.clientY <= 20 && this.onExit(),
            this.hoveredElement !== e.target && clearTimeout(this.hoverTimout),
            (this.hoveredElement = e.target);
          const t = e.target.closest("a");
          if (t && t.href) {
            const e = new URL(t.href, CE2.d.baseURI),
              r = (0, s.R2)().substr(1);
            new RegExp(`${r}$`, "i").test(e.hostname) ||
              (this.hoverTimout = setTimeout(() => {
                this.onExit();
              }, 100));
          }
        }
        scroll() {
          const e =
            CE2.w.scrollY ||
            CE2.d.documentElement.scrollTop ||
            CE2.d.body.scrollTop;
          this.prevScroll - e > 100 && this.onExit(), (this.prevScroll = e);
        }
        onExit() {
          this.destroy(), this.exited || ((this.exited = !0), this.callback());
        }
        destroy() {
          (0, s.pQ)(CE2.w, "mousemove", this.onMouseMove),
            (0, s.pQ)(CE2.w, "scroll", this.onScroll),
            clearTimeout(this.hoverTimout);
        }
      }
      function Ut(e) {
        if ("function" == typeof e)
          try {
            e();
          } catch (e) {
            (0, o.Yz)("CE_API error:"), (0, _e.A)(e);
          }
      }
      function Lt(e) {
        let t;
        for (
          CE2.Native.Array.isArray(e) || (e = []),
            e.push = function (e) {
              Ut(e);
            };
          (t = e.shift());

        )
          Ut(t);
        return e;
      }
      var zt = r(1807),
        Bt = r(2080);
      function Ht(e) {
        CE2.tracker.addToCart(e);
      }
      function Yt() {
        CE2.tracker.startCheckout();
      }
      function jt(e) {
        CE2.tracker.checkoutCompleted(e);
      }
      const Ft = CE2.Native.URL,
        { JSON: Gt } = CE2.Native;
    },
    7022: () => {
      !(function (e) {
        var t = (e.CE2BH = {});
        function r() {
          return (
            (t.extends = r =
              Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  }),
            r.apply(this, arguments)
          );
        }
        (t.defineProperty = function (e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }),
          (t.extends = r),
          (t.objectWithoutPropertiesLoose = function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              s = Object.keys(e);
            for (n = 0; n < s.length; n++)
              (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          });
      })("undefined" == typeof window ? self : window);
    },
    401: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => i });
      var n = r(8922);
      const i = r.n(n)();
    },
    2759: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      const n = (function () {
          let e;
          const t = void 0 !== r.g && (r.g.crypto || r.g.msCrypto);
          if (t && t.getRandomValues) {
            const r = new Uint8Array(16);
            e = function () {
              return t.getRandomValues(r), r;
            };
          }
          if (!e) {
            const t = new CE2.Native.Array(16);
            e = function () {
              for (let e, r = 0; r < 16; r++)
                3 & r || (e = 4294967296 * Math.random()),
                  (t[r] = (e >>> ((3 & r) << 3)) & 255);
              return t;
            };
          }
          return e;
        })(),
        i = (function () {
          const e = [];
          for (let t = 0; t < 256; ++t) e[t] = (t + 256).toString(16).substr(1);
          return function (t, r) {
            let n = r || 0;
            const i = e;
            return (
              i[t[n++]] +
              i[t[n++]] +
              i[t[n++]] +
              i[t[n++]] +
              "-" +
              i[t[n++]] +
              i[t[n++]] +
              "-" +
              i[t[n++]] +
              i[t[n++]] +
              "-" +
              i[t[n++]] +
              i[t[n++]] +
              "-" +
              i[t[n++]] +
              i[t[n++]] +
              i[t[n++]] +
              i[t[n++]] +
              i[t[n++]] +
              i[t[n++]]
            );
          };
        })(),
        s =
          ((o = n()),
          (a = [1 | o[0], o[1], o[2], o[3], o[4], o[5]]),
          (c = 16383 & ((o[6] << 8) | o[7])),
          (l = 0),
          (d = 0),
          function (e, t, r) {
            var n = (t && r) || 0,
              s = t || [],
              o = void 0 !== (e = e || {}).clockseq ? e.clockseq : c,
              u = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
              h = void 0 !== e.nsecs ? e.nsecs : d + 1,
              p = u - l + (h - d) / 1e4;
            if (
              (p < 0 && void 0 === e.clockseq && (o = (o + 1) & 16383),
              (p < 0 || u > l) && void 0 === e.nsecs && (h = 0),
              h >= 1e4)
            )
              throw new Error(
                "uuid.v1(): Can't create more than 10M uuids/sec"
              );
            (l = u), (d = h), (c = o);
            var g = (1e4 * (268435455 & (u += 122192928e5)) + h) % 4294967296;
            (s[n++] = (g >>> 24) & 255),
              (s[n++] = (g >>> 16) & 255),
              (s[n++] = (g >>> 8) & 255),
              (s[n++] = 255 & g);
            var f = ((u / 4294967296) * 1e4) & 268435455;
            (s[n++] = (f >>> 8) & 255),
              (s[n++] = 255 & f),
              (s[n++] = ((f >>> 24) & 15) | 16),
              (s[n++] = (f >>> 16) & 255),
              (s[n++] = (o >>> 8) | 128),
              (s[n++] = 255 & o);
            for (var E = e.node || a, m = 0; m < 6; ++m) s[n + m] = E[m];
            return t || i(s);
          });
      var o, a, c, l, d;
    },
    2484: (e, t, r) => {
      "use strict";
      r.d(t, { Ay: () => o, Fi: () => a, UE: () => l, bU: () => c });
      var n = r(3201),
        i = r(3380);
      class s extends n.v {}
      const o = new s(),
        a = () => {
          const e = document.location.hash.match(/#ce-abtest-(.+)/);
          if (!e || !e[1]) return;
          const t = e[1].split("."),
            [r, n, i] = t;
          return [r, n, i, t.slice(3).join(".") || null];
        },
        c = () => !!a(),
        l = () => {
          CE2.loadScript(CE2.data.transformations_script_url, () => {
            (0, i.Yz)(
              "[Flows] [Preview] transformations.js chunk is loaded. Run AB test preview"
            ),
              CE2.initAbTestPreview();
          });
        };
    },
    8e3: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => i });
      var n = r(2886);
      const i = {
        CK: "_ce.s",
        LAST_COOKIE_WRITE_KEY: "lcw",
        LAST_COOKIE_WRITE_THRESHOLD: 3e5,
        saveTimeout: null,
        canSave: "undefined" == typeof CE_NO_COOKIES || !CE_NO_COOKIES,
        expiresIn:
          "number" == typeof CE_COOKIE_EXPIRE_DAYS
            ? CE_COOKIE_EXPIRE_DAYS
            : 365,
        load() {
          let e,
            t,
            r = CE2.getCookie(this.CK);
          const n = {};
          if (!r) return n;
          for (
            r = r.replace(/\\~/g, "\0").split("~"), e = 0;
            (t = r[e]);
            e += 2
          )
            n[t.replace(/\x00/g, "~")] = r[e + 1].replace(/\x00/g, "~");
          return n;
        },
        getCookieRawValue(e) {
          const t = [];
          return (
            (0, n.__)(e, (e, r) => {
              t.push(r.replace("~", "\\~")), t.push(e.replace("~", "\\~"));
            }),
            t.push(`${this.LAST_COOKIE_WRITE_KEY}~${+new Date()}`),
            t.join("~")
          );
        },
        save(e) {
          this.canSave &&
            (0, n.o)(this.CK, this.getCookieRawValue(e), {
              expiresInDays: this.expiresIn,
            });
        },
        get(e) {
          return this.load()[e];
        },
        set(e, t) {
          const r = this.load(),
            n = `${t}`;
          let i = !1;
          const s = parseInt(r[this.LAST_COOKIE_WRITE_KEY], 10);
          s && +new Date() - s > this.LAST_COOKIE_WRITE_THRESHOLD && (i = !0),
            (r[e] !== n || i) && ((r[e] = n), this.save(r));
        },
        del(e) {
          const t = this.load();
          delete t[e], this.save(t);
        },
      };
    },
    3380: (e, t, r) => {
      "use strict";
      r.d(t, {
        $J: () => l,
        $Q: () => s,
        Yz: () => a,
        aE: () => d,
        aQ: () => o,
        cC: () => c,
        dK: () => i,
      });
      const n = function (e) {
          if (!CE2.data || !CE2.data.features) return !1;
          for (let t = 0, r = CE2.data.features; t < r.length; t++) {
            if (r[t] === e) return !0;
          }
          return !1;
        },
        i = () => {
          const e = CE2.data && CE2.data.dkey;
          return (
            !!(e && CE2.w && CE2.w.location.href.indexOf(`ced=${e}`) > -1) ||
            !!n("remote-logs") ||
            ("undefined" != typeof CE_DEBUG && CE_DEBUG)
          );
        },
        s = () => "undefined" != typeof CE_DEBUG && CE_DEBUG >= 2,
        o = (e, t) => {
          CE2.n.sendBeacon &&
            CE2.n.sendBeacon(
              CE2.data.v11_tracking_dest.replace("v11", "debug"),
              CE2.Native.JSON.stringify({
                siteId: CE2.site?.id,
                userId: CE2.data.uid,
                type: e,
                data: CE2BH.extends({ version: CE2.VERSION }, t),
              })
            );
        },
        a = (e, t) => {
          if (
            (CE2.state.logHistoryEnabled && CE2.state.logHistory.push(e),
            n("remote-logs"))
          ) {
            const r = t ? CE2.Native.JSON.stringify(t).substring(0, 120) : "";
            o("logs", {
              visitorId: CE2.visitorTracker?.getId(),
              visitId: CE2.getVisitId && CE2.getVisitId(),
              sessionId: CE2.getSessionId && CE2.getSessionId(),
              ts: +new Date(),
              msg: e,
              obj: r,
            });
          }
          if (!i()) return !1;
          let r;
          r = "string" == typeof e ? `CE: ${e}` : e;
          const s = [r];
          if ((t && s.push(t), "undefined" != typeof window)) {
            const { console: e } = CE2.Native;
            e && e.log && e.log(...s);
          }
        },
        c = (e, t) => {
          if (!s()) return !1;
          a(e, t);
        },
        l = function () {
          return (
            (void 0 !== CE2.w.CE_BENCHMARK && CE2.w.CE_BENCHMARK) ||
            (CE2 &&
              CE2.w &&
              CE2.w.location.href.indexOf("ceb=#{data[:dkey]}")) > -1
          );
        },
        d = {
          autoReport: () =>
            (void 0 !== CE2.w.CE_BENCHMARK && CE2.w.CE_BENCHMARK) ||
            window.location.href.indexOf("ceb=#{data[:dkey]}") > -1,
          start: (e, t = []) => {
            if (CE2.benchmark.stopped) return;
            CE2.benchmarks.find((t) => t.name === e) ||
              CE2.benchmarks.push({ name: e, tags: t, startedAt: new Date() });
          },
          stop: (e) => {
            if (CE2.benchmark.stopped) return;
            const t = CE2.benchmarks.find((t) => t.name === e);
            t && !t.diff && (t.diff = +new Date() - +t.startedAt);
          },
          report: () => {
            const e = ["CE: [Benchmark]", ""];
            for (let t = 0, r = CE2.benchmarks; t < r.length; t++) {
              const n = r[t];
              if (n.diff) {
                const t = n.name.split("|"),
                  r = t[t.length - 1];
                let i = "";
                for (let e = 0; e < t.length; e++) i += "  ";
                e.push(
                  `${i}${r} time=${n.diff}ms ${
                    n.tags && n.tags.length ? n.tags.join(" ") : ""
                  }`
                );
              }
            }
            e.length && console.log(e.join("\n")),
              (CE2.benchmarks = []),
              (CE2.benchmark.stopped = !0);
          },
        };
    },
    6677: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => i, p: () => n });
      const n = {
          types: {
            desktop: {
              name: "desktop",
              fullName: "Desktop",
              code: 1,
              display: { width: 1280, height: 800 },
              viewport: { width: 1280, height: 800 },
              userAgent: null,
            },
            phone: {
              name: "phone",
              fullName: "Phone",
              code: 2,
              display: { width: 320, height: 480 },
              viewport: { width: 980, height: 1091 },
              userAgent:
                "Mozilla/5.0 (Android 7.0; Mobile; rv:60.0) Gecko/60.0 Firefox/60.0",
            },
            tablet: {
              name: "tablet",
              fullName: "Tablet",
              code: 3,
              display: { width: 800, height: 1280 },
              viewport: { width: 980, height: 1568 },
              userAgent:
                "Mozilla/5.0 (Android 7.0; Tablet; rv:60.0) Gecko/60.0 Firefox/60.0",
            },
          },
          codeMap: { 1: "desktop", 2: "phone", 3: "tablet" },
          typeMap: { desktop: 1, phone: 2, tablet: 3 },
        },
        i = function (e) {
          return (CE2.Native.Array.isArray(e) ? e : [e])
            .map((e) => n.typeMap[e])
            .includes(CE2.clock.getDeviceType());
        };
    },
    7866: (e, t, r) => {
      "use strict";
      r.d(t, { M4: () => i, T: () => n, vU: () => o });
      const n = (function () {
          const e = navigator.userAgent;
          CE2.opera = CE2.ie = CE2.chrome = CE2.safari = CE2.firefox = !1;
          let t = "unknown";
          return (
            CE2.w && CE2.w.opera && "function" == typeof CE2.w.opera.version
              ? ((t = "opera"),
                (CE2.opera = !0),
                (CE2.operaVersion = parseInt(CE2.w.opera.version(), 10)))
              : /\bMSIE\b/.test(e)
              ? ((t = "ie"),
                (CE2.ie = !0),
                (CE2.ieVersion = parseInt(
                  /MSIE (\d+)\.\d+/.exec(navigator.userAgent)[1],
                  10
                )),
                (CE2.ieQuirksMode = "BackCompat" == document.compatMode))
              : /\b(iPhone|iP[ao]d)\b/.test(e)
              ? ((t = "iphone"),
                (CE2.iphone = !0),
                (CE2.webkit = !0),
                /AppleWebKit/.test(navigator.appVersion) &&
                  ((t = "safari"), (CE2.safari = !0)))
              : /\bChrome\b/.test(e)
              ? ((t = "chrome"), (CE2.chrome = !0), (CE2.webkit = !0))
              : /AppleWebKit/.test(navigator.appVersion)
              ? ((t = "safari"), (CE2.safari = !0), (CE2.webkit = !0))
              : /Mozilla/i.test(e) &&
                !/compatible|webkit/i.test(e) &&
                ((t = "firefox"), (CE2.firefox = !0)),
            CE2.webkit &&
              (CE2.webkitVersion = parseInt(
                /AppleWebKit\/(\d+)/.exec(e)[1],
                10
              )),
            t
          );
        })(),
        i = function (e, t) {
          const { crypto: r } = CE2.w,
            n = "function" == typeof CE2.w.btoa && CE2.w.btoa;
          let i,
            s,
            o,
            a = "";
          if (((e = e || 20), r && r.getRandomValues)) {
            const t = new Uint8Array(e);
            r.getRandomValues(t), (i = CE2.Native.Array.from(t));
          } else
            for (i = new CE2.Native.Array(e), s = 0; s < e; s++)
              i[s] = Math.floor(256 * Math.random());
          if (t && n)
            return (
              (a = i.map((e) => String.fromCharCode(e)).join("")),
              n(a).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "")
            );
          for (s = 0; s < e; s++)
            (o = i[s].toString(16)), (a += o.length < 2 ? `0${o}` : o);
          return a;
        },
        s = "cetabid",
        o = function () {
          let e,
            t = CE2.Native.sessionStorage.getItem(s);
          try {
            CE2.w.opener &&
              CE2.w.opener.sessionStorage &&
              (e = CE2.w.opener.sessionStorage.getItem(s));
          } catch (e) {}
          return (
            (!t || (e && e === t)) &&
              ((t = i(6, !0)), CE2.Native.sessionStorage.setItem(s, t)),
            t
          );
        };
    },
    3201: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => i });
      const n = () => ({
        events: {},
        emit(e, ...t) {
          const r = this.events[e] || [];
          for (let e = 0, { length: n } = r; e < n; e++) r[e](...t);
        },
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        },
      });
      class i {
        constructor() {
          this.emitter = n();
        }
        on(...e) {
          return this.emitter.on(...e);
        }
        once(e, t) {
          const r = this.on(e, async (...e) => (r(), t(...e)));
        }
        emit(...e) {
          return this.emitter.emit(...e);
        }
      }
    },
    4808: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o, o: () => s });
      var n = r(3380),
        i = r(1509);
      const s = (function () {
          const e = {};
          return (
            (e.sendError = function (e) {
              try {
                if (CE2.data && CE2.data.error_tracking) {
                  const t = {
                    url: window.location.href,
                    error: e.type,
                    error_name: e.name,
                    filename: e.filename,
                  };
                  e.message && (t.error_description = e.message.toString()),
                    e.error &&
                      e.error.stack &&
                      (t.stack = e.error.stack.toString()),
                    (0, i.send)(
                      `${CE2.data.error_tracking_dest}?u=${encodeURIComponent(
                        CE2.data.uid
                      )}`,
                      CE2.Native.JSON.stringify(t),
                      { sendBeacon: !0 }
                    );
                }
              } catch (e) {}
            }),
            (e.listen = function () {
              if (!CE2.data.error_tracking_dest || !CE2.data || !CE2.data.uid)
                return;
              const e = CE2.data.error_tracking_script_url;
              window.addEventListener("error", (t) => {
                try {
                  if (
                    ((0, n.Yz)(`Error Tacking: Error Event '${t}'`),
                    !t.filename)
                  )
                    return;
                  (0, n.Yz)(`Error Tacking: Error filename '${t.filename}'`),
                    t.filename.includes(e) && this.sendError(t);
                } catch (e) {}
              });
            }),
            e
          );
        })(),
        o = (e) => {
          (e instanceof Error || e instanceof TypeError) &&
            ((0, n.Yz)(e), s && s.sendError && s.sendError(e));
        };
    },
    1807: (e, t, r) => {
      "use strict";
      r.d(t, { D8: () => o, Qj: () => a, W2: () => s, lD: () => c });
      var n = r(8e3);
      const i = "flvl",
        s = (e, t) => {
          const r = n.i.get(i) || "";
          r.includes(e) || n.i.set(i, `${r},${e}:${t}`);
        },
        o = () => {
          n.i.del(i);
        },
        a = () =>
          (n.i.get(i) || "").split(",").flatMap((e) => {
            const [t, r] = e.split(":");
            return t && CE2.data.flows?.[t]
              ? { id: t, name: CE2.data.flows?.[t]?.name, variantId: r }
              : [];
          }),
        c = () => {
          const e = a();
          return e.length ? e[e.length - 1] : null;
        };
    },
    7777: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => i });
      const n = {};
      !(function (e) {
        function t() {
          if (!(this instanceof t)) return new t();
          this.boundary = `------RWWorkerFormDataBoundary${Math.random().toString(
            36
          )}`;
          const e = (this.data = []);
          this.__append = function (t) {
            let r,
              n = 0;
            if ("string" == typeof t)
              for (r = t.length; n < r; ++n) e.push(255 & t.charCodeAt(n));
            else if (t && t.byteLength) {
              "byteOffset" in t || (t = new Uint8Array(t));
              for (r = t.byteLength; n < r; ++n) e.push(255 & t[n]);
            }
          };
        }
        (t.prototype.append = function (e, t, r) {
          if (
            (this.__endedMultipart &&
              ((this.data.length -= this.boundary.length + 6),
              (this.__endedMultipart = !1)),
            arguments.length < 2)
          )
            throw new SyntaxError("Not enough arguments");
          let n = [
            `--${this.boundary}\r\n`,
            `Content-Disposition: form-data; name="${e}"`,
          ].join("");
          if (
            ("undefined" != typeof File && t instanceof File) ||
            ("undefined" != typeof Blob && t instanceof Blob)
          )
            return this.append(
              e,
              new Uint8Array(new FileReaderSync().readAsArrayBuffer(t)),
              r || t.name
            );
          "number" == typeof t.byteLength
            ? ((n += `; filename="${(r || "blob").replace(/"/g, "%22")}"\r\n`),
              (n += "Content-Type: application/octet-stream\r\n\r\n"),
              this.__append(n),
              this.__append(t),
              (n = "\r\n"))
            : (n += `\r\n\r\n${t}\r\n`),
            this.__append(n);
        }),
          (e.FormData = t);
      })(n);
      const { FormData: i } = n;
    },
    8856: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var n = r(3201);
      class i extends n.v {}
      const s = new i();
    },
    1509: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          descriptiveEventType: () => d,
          get: () => u,
          send: () => h,
          sendCounter: () => g,
          sendEvents: () => f,
          sendForm: () => p,
        });
      var n = r(7777),
        i = r(3380),
        s = r(2886),
        o = r(2559);
      "undefined" == typeof CE2 && (self.CE2 = {}),
        void 0 === CE2.state && (CE2.state = {});
      const { state: a } = CE2;
      let c, l;
      a.testModeRequests = [];
      const d = (e) => {
          if (!CE2.eventTypes) return `event_type=${e}`;
          if (!c) {
            (c = {}), (l = null);
            for (
              let e = 0, t = Object.keys(CE2.eventTypes);
              e < t.length;
              e++
            ) {
              const r = t[e];
              (c[CE2.eventTypes[r]] = r),
                (!l || r.length > l.length) && (l = r);
            }
          }
          let t = c[e];
          const r = l.length - t.length;
          for (let e = 0; e < r; e++) t += " ";
          return t;
        },
        u = (e, t, r) => {
          const n = CE2.getNativeXMLHttpRequest();
          (n.onreadystatechange = function () {
            4 == n.readyState && t(n);
          }),
            n.open("GET", e, !0),
            r && (n.responseType = r),
            n.send();
        },
        h = (e, t, r = {}) => {
          if ((0, s.ou)())
            return (
              a.testModeRequests.push({ url: e, data: t, options: r }),
              void (r.callback && r.callback({ responseText: "" }))
            );
          const o = r.sendBeacon && CE2.n && CE2.n.sendBeacon;
          let c = r.contentType || "text/plain";
          if (o && CE2.n && CE2.n.sendBeacon)
            CE2.n.sendBeacon(e, t), r.callback && r.callback();
          else {
            if ("undefined" == typeof XMLHttpRequest)
              return void (0, i.Yz)("XMLHttpRequest not supported");
            r.retries || (r.retries = 0);
            const s = CE2.getNativeXMLHttpRequest();
            (s.onreadystatechange = function () {
              if (r.callback && 4 == s.readyState) {
                if (
                  (!s.status ||
                    429 === s.status ||
                    (s.status >= 500 && s.status < 600)) &&
                  r.retry &&
                  r.retries < r.retry
                )
                  return setTimeout(() => {
                    h(e, t, r);
                  }, 1e3);
                r.callback(s);
              }
            }),
              s.open(r.method || "POST", e),
              t instanceof n.f &&
                (t.__endedMultipart || t.__append(`--${t.boundary}--\r\n`),
                (t.__endedMultipart = !0),
                (c = `multipart/form-data; boundary=${t.boundary}`),
                (t = new Uint8Array(t.data))),
              s.setRequestHeader("Content-type", c),
              s.send(t);
          }
        },
        p = (e, t, r = {}) => {
          h(
            e,
            ((e) => {
              let t = "";
              const r = encodeURIComponent;
              return (
                (0, s.__)(e, (e, n) => {
                  null != e &&
                    (0, o.b)(`${e}`) &&
                    (t.length && (t += "&"), (t += `${r(n)}=${r(e)}`));
                }),
                t
              );
            })(t),
            CE2BH.extends(r, {
              contentType: "application/x-www-form-urlencoded",
            })
          );
        },
        g = (e, t) => {
          if (!e || !t) return;
          const r = { metric: e, id: t },
            n = CE2.data.counters_dest;
          h(n, CE2.Native.JSON.stringify(r), {
            contentType: "application/json",
          });
        },
        f = (e, t) => {
          try {
            const r = [];
            r.push(`u=${encodeURIComponent(e.userId)}`),
              r.push(`st=${encodeURIComponent(e.siteId)}`),
              e.snapshotIds &&
                r.push(`s=${encodeURIComponent(e.snapshotIds.join(","))}`),
              e.flow && r.push(`f=${encodeURIComponent(e.flow)}`),
              e.sessionId && r.push(`ss=${encodeURIComponent(e.sessionId)}`),
              e.pageFingerprintMd5 &&
                r.push(`p=${encodeURIComponent(e.pageFingerprintMd5)}`),
              e.goalId && r.push(`g=${encodeURIComponent(e.goalId)}`),
              e.abTestId && r.push(`ab=${encodeURIComponent(e.abTestId)}`),
              e.t && r.push(`t=${e.t}`),
              CE2.data.tracking_key &&
                r.push(`tk=${encodeURIComponent(CE2.data.tracking_key)}`);
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              (0, i.cC)(`[${e.context || "NoContext"}] Event`, {
                type: d(s[0][2]),
                visit: s[1][0] || s[0][0],
                event: s,
              }),
                n.push(CE2.Native.JSON.stringify(s));
            }
            const s = `${e.endpoint || CE2.data.v11_tracking_dest}?${r.join(
                "&"
              )}`,
              o = { callback: e.callback };
            if (e.sendBeacon) {
              const e = n.join("\n");
              h(s, e, CE2BH.extends({}, o, { sendBeacon: !0 }));
            } else if ((0, i.$Q)()) {
              const e = n.join("\n");
              h(s, e, CE2BH.extends({}, o));
            } else if (
              CE2.compress &&
              !CE2.n.userAgent.includes("baiduboxapp")
            ) {
              const e = CE2.compress(n.join("\n"));
              h(
                s,
                e,
                CE2BH.extends({}, o, {
                  contentType: "application/gzip",
                  sendBeacon: !1,
                })
              );
            } else {
              const e = n.join("\n");
              h(
                s,
                e,
                CE2BH.extends({}, o, {
                  contentType: "application/json",
                  sendBeacon: !1,
                })
              );
            }
          } catch (e) {
            (0, i.Yz)("sending error", e),
              CE2.remoteLog(`error while sending events: ${e.message}`);
          }
        };
    },
    474: (e, t, r) => {
      "use strict";
      r.d(t, { MH: () => ie, mF: () => oe, $K: () => re });
      const n = "all",
        i = "any",
        s = "greater_than",
        o = "less_than",
        a = "equals",
        c = "at_least",
        l = "at_most",
        d = "and",
        u = {
          matchUrl: "matchUrl",
          matcher: "matcher",
          debug: "debug",
          browserAPI: "browserAPI",
        },
        h = "new_or_returning",
        p = "referrer",
        g = "landing_page",
        f = "visited_page",
        E = "browser",
        m = "device",
        v = "country",
        C = "os",
        y = "screen_width",
        w = "screen_height",
        _ = "pages_viewed",
        S = "duration",
        I = "var1",
        k = "var2",
        b = "var3",
        T = "var4",
        N = "var5",
        R = "profile",
        A = "tags",
        O = "day_of_week",
        x = "utm_source",
        D = "utm_medium",
        $ = "utm_campaign",
        M = "utm_term",
        P = "utm_content",
        V = "goal_code",
        U = "click",
        L = "form_submission",
        z = "pixel_event",
        B = { desktop: "desktop", tablet: "tablet", phone: "phone" },
        H = "minutes";
      const Y = [U, L, z];
      class j {
        constructor({ state: e, providers: t }) {
          (this.providers = t),
            (this.state = {}),
            this.reset(e),
            (this.matcher = t.matcher(this.state, t));
        }
        reset(e = {}) {
          CE2BH.extends(
            this.state,
            CE2BH.extends(
              {},
              {
                [h]: null,
                [p]: null,
                [g]: null,
                [f]: null,
                [E]: null,
                [m]: null,
                [v]: null,
                [y]: 0,
                [w]: 0,
                [_]: 0,
                [S]: 0,
                [I]: null,
                [k]: null,
                [b]: null,
                [T]: null,
                [N]: null,
                [R]: {},
                [A]: [],
                [O]: new Date().getDay(),
                [x]: null,
                [D]: null,
                [$]: null,
                [M]: null,
                [P]: null,
                [V]: null,
                [U]: [],
                [L]: [],
                [z]: [],
              },
              j.cleanup(e)
            )
          ),
            this.debug("reset state", this.state);
        }
        static cleanup(e) {
          const t = {};
          if (!e) return t;
          for (let r = 0, n = Object.keys(e); r < n.length; r++) {
            const i = n[r];
            void 0 !== e[i] && (t[i] = e[i]);
          }
          return t;
        }
        match(e, ...t) {
          return 2 === t.length && Y.includes(t[0])
            ? this.evaluate(e, ...t)
            : this.matcher.match(e);
        }
        evaluate(e, t, r) {
          const n = this.providers[u.browserAPI],
            i = this.providers[u.matchUrl];
          let s = !1;
          const o = () => {
              e.conditions.forEach((o, a) => {
                if (o.criteria !== t) return !1;
                const c = (function (e, t) {
                  const r = e
                    ? t.find((t) => t.sync_selectors || t[`selector_for_${e}`])
                    : null;
                  if (!r) return null;
                  if (t.sync_selectors)
                    return (
                      Object.values(B)
                        .map((e) => t[`selector_for_${e}`])
                        .find((e) => !!e) || null
                    );
                  return r[`selector_for_${e}`] || null;
                })(this.state[m], o.value);
                if (!c) return !1;
                const l = r.target || r.srcElement;
                if (n.matchesSelector(l, c, !0)) {
                  if (
                    !(function (e, t, r) {
                      const n = e.target || e.srcElement;
                      if (t.criteria !== L || "FORM" !== e.type) return !0;
                      for (let e = 0, i = t.value; e < i.length; e++) {
                        const t = i[e].destination_url;
                        if (t) {
                          const e = n.getAttribute("action");
                          if (!/^\s*https?:\/\/\S+/.test(e) || !r(t, e))
                            return !1;
                        }
                      }
                      return !0;
                    })(r, o, i)
                  )
                    return !1;
                  (this.state[o.criteria][a] = !0),
                    (s = this.match(e)),
                    (this.state[o.criteria][a] = !1);
                }
              });
            },
            a = {
              [U]: o,
              [L]: o,
              [z]: () => {
                e.conditions.forEach((t, n) => {
                  t.value.find(
                    (e) =>
                      e.api === r.api &&
                      ("string" != typeof e.id ||
                        e.id.replace(/^(G|AW)-/, "") === r.id) &&
                      ("string" != typeof e.event ||
                        e.event.toLowerCase() === r.type.toLowerCase())
                  ) &&
                    ((this.state[t.criteria][n] = !0),
                    (s = this.match(e)),
                    (this.state[t.criteria][n] = !1));
                });
              },
            };
          return a[t]?.call(this), s;
        }
        update(e) {
          for (let t = 0, r = Object.entries(e); t < r.length; t++) {
            const [e, n] = r[t];
            this.state[e] = n;
          }
          this.debug("update state", this.state);
        }
        debug(...e) {
          this.providers.debug(...e);
        }
      }
      class F {
        constructor(e, t) {
          (this.state = e), (this.providers = t);
        }
        match(e) {
          if ((this.debug("matching segment", e), e.except)) {
            const t = this.isMatched(e.except.conditions, e.except.operator);
            if (
              (this.debug(
                "matching except part: " +
                  (t ? "skip segment" : "not skip segment")
              ),
              t)
            )
              return !1;
          }
          return this.isMatched(e.conditions, e.operator);
        }
        isMatched(e, t) {
          const r = [],
            n = [],
            i = e.map((e, t) => {
              const i = this.evaluate(e, t);
              return i && r.push(e), i || n.push(e), i;
            });
          return d === t ? i.every((e) => !0 === e) : i.some((e) => !0 === e);
        }
        evaluate(e, t) {
          if (e.operator && Array.isArray(e.conditions))
            return this.isMatched(e.conditions, e.operator);
          if (!e.value) return !1;
          const r = this.providers[u.matchUrl];
          switch (e.criteria) {
            case h:
            case E:
            case m:
            case v:
            case C:
            case O:
            case A:
            case I:
            case k:
            case b:
            case T:
            case N:
            case x:
            case D:
            case $:
            case M:
            case P:
            case V:
              const d = Array.isArray(e.value) ? e.value : [e.value];
              if (e.comparison === n) {
                const t = Array.isArray(this.state[e.criteria])
                  ? this.state[e.criteria]
                  : [this.state[e.criteria]];
                return JSON.stringify(d.sort()) === JSON.stringify(t.sort());
              }
              const u = d.includes(this.state[e.criteria]);
              return e.comparison === i ? !0 === u : !1 === u;
            case S:
              const { count: R, unit: B } = e.value;
              let Y = R;
              return (
                B === H && (Y = 60 * R),
                e.comparison === c
                  ? Y <= this.state[e.criteria]
                  : e.comparison === l
                  ? Y >= this.state[e.criteria]
                  : e.comparison === s
                  ? Y < this.state[e.criteria]
                  : e.comparison === o && Y > this.state[e.criteria]
              );
            case y:
            case w:
            case _:
              return e.comparison === a
                ? e.value === this.state[e.criteria]
                : e.comparison === s
                ? e.value < this.state[e.criteria]
                : e.comparison === o && e.value > this.state[e.criteria];
            case f:
            case g:
            case p:
              const j = e.value.map((t) => r(t, this.state[e.criteria]));
              return e.comparison === i
                ? j.includes(!0)
                : j.every((e) => !1 === e);
            case U:
            case L:
            case z:
              return (
                !!this.state[e.criteria]?.length &&
                !0 === this.state[e.criteria][t]
              );
          }
        }
        debug(...e) {
          this.providers.debug(...e);
        }
      }
      function G(e) {
        const t = e.filter((e) => "object" != typeof e),
          r = e.filter((e) => "object" == typeof e);
        console.log("CE: [SegmentTracker]", t.join(" "), ...r, "\n");
      }
      function K() {
        return {
          [u.debug]: (...e) => {
            window.CE_DEBUG && G(e);
          },
          [u.matchUrl]: () => !1,
          [u.matcher]: (...e) => new F(...e),
          [u.browserAPI]: {
            matchesSelector(e, t, r) {
              let n = t;
              return r && (n += `,${t} *`), e.matches(n);
            },
          },
        };
      }
      var W = r(2886),
        q = r(6149),
        J = r(3380);
      const Q = "segment",
        X = "segment-no-op",
        Z = "~";
      let ee;
      function te() {
        const { clock: e } = CE2,
          { visitorTracker: t } = CE2,
          r = new URL(window.location.href).searchParams,
          { landingUrl: n, userData: i, utm: s } = t.getFirstVisitData() || {},
          o = window.innerWidth || window.screen.availWidth,
          a = window.innerHeight || window.screen.availHeight;
        return {
          device: { 1: "desktop", 2: "phone", 3: "tablet" }[e.getDeviceType()],
          visited_page: window.location.href,
          referrer: document.referrer,
          new_or_returning: t.returningState().state,
          landing_page: n,
          screen_width: o,
          screen_height: a,
          pages_viewed: 0,
          duration: 0,
          var1: i[0],
          var2: i[1],
          var3: i[2],
          var4: i[3],
          var5: i[4],
          profile: {},
          tags: CE2.sessionTags || [],
          day_of_week: new Date().getDay(),
          utm_source: s?.utm_source,
          utm_medium: s?.utm_medium,
          utm_campaign: s.utm_campaign,
          utm_term: s?.utm_term,
          utm_content: s?.utm_content,
          goal_code: r.get("code"),
          browser: e.getBrowser(),
          country: e.getCountry(),
        };
      }
      function re() {
        ee && ee.reset(te());
      }
      function ne() {
        return (function ({ state: e, segments: t, providers: r }) {
          return new j({
            state: e,
            segments: t,
            providers: CE2BH.extends({}, K(), r),
          });
        })({
          state: te(),
          providers: {
            matchUrl({ url: e, flags: t }, r) {
              let n = t ? t.join() : "";
              return (
                e[0] === Z
                  ? ((e = e.substring(0)), (n += "r"))
                  : e.includes("*") && (n += "*"),
                (0, q.$)(e.toLowerCase(), r, n)
              );
            },
            debug() {},
          },
        });
      }
      function ie() {
        return ee || (ee = ne());
      }
      function se({ resourceType: e, resourceId: t, eventName: r, event: n }) {
        if (!e || !t) return !1;
        const i = (CE2.data.segments || []).filter((r) =>
            (r.resources || []).find(
              (r) =>
                r.resource_type === e && String(r.resource_id) === String(t)
            )
          ),
          s = [];
        for (let e = 0; e < i.length; e++) {
          const t = i[e];
          ie().match(t.definition, r, n) && s.push(t);
        }
        return (
          (0, J.Yz)("[Segments] Matching segments", {
            resourceType: e,
            resourceId: t,
            resourceSegments: i,
            matchedSegments: s,
          }),
          s.length > 0
        );
      }
      function oe(
        { resourceType: e, resourceId: t, eventName: r, event: n },
        i
      ) {
        if ((ie().update({ visited_page: window.location.href }), (0, W.jI)(Q)))
          return se({ resourceType: e, resourceId: t, eventName: r, event: n });
        if ((0, W.jI)(X)) {
          const s = se({
              resourceType: e,
              resourceId: t,
              eventName: r,
              event: n,
            }),
            o = i();
          return (
            s !== o &&
              (0, J.aQ)(X, {
                url: window.location.href,
                stateUrl: ie().state.visited_page,
                resourceType: e,
                resourceId: t,
                eventName: r,
                segmentMatched: `${s}`,
              }),
            o
          );
        }
        return i();
      }
    },
    2559: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => i, re: () => n });
      const n = (function () {
          const e = "[\\s\\u00a0\\u2028\\u2029]+";
          return {
            whitespace: new RegExp(e, "g"),
            strip: new RegExp(`^${e}|${e}$`, "g"),
            href: /\bhref="(.*?)"/i,
            ipHost: /^([\d\.]+|\[[a-f\d:]+\])$/i,
          };
        })(),
        i = (e, t) => {
          const r = e.replace(n.strip, "");
          return t ? r.replace(n.whitespace, " ") : r;
        };
    },
    8773: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => i });
      var n = r(2886);
      const i = function (e) {
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
      (i.pattern =
        /^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i),
        (i.prototype = {
          initWithString(e) {
            const t = i.pattern.exec(e),
              [r, s, o, a, c, l, d, u] = t;
            var h;
            s ||
            "/" == e.charAt(0) ||
            (a &&
              !(
                "string" != typeof (h = a) ||
                (-1 === h.indexOf(".") && "localhost" !== h) ||
                ((h = new URL(`http://${h}`).hostname),
                !/^[a-zA-Z0-9-.]{1,253}\.?$/g.test(h) ||
                  (h.endsWith(".") && (h = h.slice(0, h.length - 1)),
                  h.length > 253 ||
                    !h
                      .split(".")
                      .every(
                        (e) =>
                          /^([a-zA-Z0-9-]+)$/g.test(e) &&
                          e.length < 64 &&
                          !e.startsWith("-") &&
                          !e.endsWith("-")
                      )))
              ))
              ? (s && (this.protocol = s.substr(0, s.indexOf(":"))),
                (this.host = a || null),
                c && (this.port = Number(c.substr(1))),
                l ? (this.path = (0, n.x4)(l)) : this.host && (this.path = "/"))
              : (this.path = (0, n.x4)((a || "") + (l || ""))),
              d &&
                ((this.qs = (0, n.q5)(d.substr(1))),
                (this.query = d.substr(1))),
              u && (this.hash = (0, n.x4)(u.substr(1)));
          },
          initWithURI(e) {
            (0, n.__)(
              e,
              function (e, t) {
                this[t] = e;
              },
              this
            );
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
            const t = new i(this);
            let { path: r } = this;
            return (
              "string" == typeof e && (e = new i(e)),
              e.isURL()
                ? new i(e)
                : (e.isAbsolute()
                    ? (r = e.path)
                    : r
                    ? ((r = r.split("/")),
                      r.pop(),
                      (r = e.path ? r.concat(e.path.split("/")) : r),
                      (r = r.join("/")))
                    : (r = this.isURL() ? `/${e.path}` : e.path),
                  (t.path = r),
                  (t.qs = e.qs),
                  (t.hash = e.hash),
                  t)
            );
          },
          normalize() {
            if (!this.path) return;
            let e;
            CE2.ie && CE2.ieVersion < 9
              ? ((e = []),
                "/" == this.path.charAt(0) && e.push(""),
                (e = e.concat(this.path.split(/\/+/g))),
                "/" == this.path.charAt(this.path.length - 1) && e.push(""))
              : (e = this.path.split(/\/+/g));
            let t,
              r = 0;
            do {
              if (((t = e.length - 1), ".." == e[r + 1]))
                "" == e[r] && 0 == r
                  ? e.splice(r + 1, 1)
                  : (e.splice(r, 2), (r -= 1));
              else if ("." == e[r]) {
                if (0 == t) break;
                e.splice(r, 1);
              } else r++;
            } while (r <= t);
            this.path = e.join("/");
          },
          simplify(e) {
            let t;
            const r = [];
            if (
              ((t =
                "file" == this.protocol
                  ? this
                  : CE2.ie
                  ? e
                    ? e.join(this)
                    : this
                  : (e = e || new i(CE2.d.baseURI)).join(this)),
              t.normalize(),
              t.host && r.push(t.host.replace(/^(www|m)\./, "")),
              null != t.port && r.push(`:${t.port}`),
              "/" == t.path || /^\/(default|home|index)\b[^\/]*$/i.test(t.path)
                ? (t.qs || t.hash) && r.push("/")
                : r.push(t.path),
              t.qs)
            ) {
              const e = [];
              (0, n.__)(t.qs, (t, r) => {
                t &&
                  !/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(
                    r
                  ) &&
                  e.push(`${encodeURIComponent(r)}=${encodeURIComponent(t)}`);
              }),
                e.length && r.push(`?${e.join("&")}`);
            }
            return t.hash && r.push(`#${t.hash}`), r.join("");
          },
          sameOrigin(e) {
            return (
              !!e &&
              ("string" == typeof e && (e = new i(e)),
              null == e.host ||
                (e.host == this.host &&
                  e.port == this.port &&
                  e.protocol == this.protocol))
            );
          },
        });
    },
    6149: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => a, e: () => c });
      var n = r(2886),
        i = r(8773),
        s = r(4808);
      const o = function (e, t, r = !1) {
          e && e(t, r);
        },
        a = function (e, t, r, a, c, l) {
          const { stringify: d } = CE2.Native.JSON,
            u = /(default|index)($|\..*)/i;
          let h,
            p,
            g,
            f,
            E,
            m,
            v,
            C = !1;
          if ("" === e && "" === t) return !0;
          if (!e || !t) return !1;
          if (a && a.indexOf(CE2.clock.getDeviceType()) < 0)
            return (
              o(l, `device=${CE2.clock.getDeviceType()} allowed=${d(a)}`, v), !1
            );
          if (/n/.test((r = r || "")))
            return (
              (v = e.trim() === t.trim()), o(l, `name=${t} allowed=${e}`, v), v
            );
          if (/go/.test(r)) {
            const r = e.split(".");
            return (
              (v = t && t[r[1]] == r[2]),
              o(l, `googleOptimize=${d(t)} allowed=${d(e)}`, v),
              v
            );
          }
          if (/\*/.test(r))
            try {
              let r;
              const n = /^https?:\/\/([^\/]+)\//.exec(e);
              if (n && n[1] && !n[1].includes("*")) {
                const e = new CE2.Native.URL(t);
                e.hostname.startsWith("www.")
                  ? ((e.hostname = e.hostname.replace(/^www\./, "")),
                    (r = e.href))
                  : ((e.hostname = `www.${e.hostname}`), (r = e.href));
              }
              let i = e.replace(/[.+^$?{}()|[\]\\]/g, "\\$&");
              return (
                (i = new RegExp(i.replace(/\*/g, "(.*?)"), "i")),
                (v = i.test(t) || (r && i.test(r))),
                o(l, `url=${t} allowedwildcard=${e}`, v),
                v
              );
            } catch (r) {
              return (0, s.A)(r), o(l, `url=${t} allowedwildcard=${e}`), !1;
            }
          if (/[re]/.test(r))
            try {
              return (
                (v = RegExp(e, "i").test(t)),
                v || (v = RegExp(e, "i").test(decodeURI(t))),
                o(l, `url=${t} allowedregex=${e}`, v),
                v
              );
            } catch (r) {
              return (0, s.A)(r), o(l, `url=${t} allowedregex=${e}`, r), !1;
            }
          e = new i.j(e && e.toLowerCase ? e.toLowerCase() : e);
          const y = new i.j(t.toLowerCase());
          if (/h/.test(r) && e.protocol != y.protocol)
            return o(l, `protocol=${y.protocol} allowed=${e.protocol}`), !1;
          const { host: w } = y,
            _ = w.replace(/^(www|m)\./, ""),
            S = e.host,
            I = e.ihost;
          if (/w/.test(r) && w != S && w != I)
            return o(l, `host=${w} allowed=${I || S}`), !1;
          const k = S.replace(/^(www|m)\./, ""),
            b = I && I.replace(/^(www|m)\./, "");
          if (_ != k && _ != b) return o(l, `host=${w} allowed=${b || k}`), !1;
          p = e.path ? e.path : "/";
          const { path: T } = y;
          if (p != T) {
            if (/\//.test(r)) return o(l, `path=${T} allowed=${p}`), !1;
            for (
              g = p.split("/"),
                h = T.split("/"),
                E = 0,
                m = Math.max(g.length, h.length);
              E < m;
              E++
            )
              if (
                (g[E] || (g[E] = ""),
                h[E] || (h[E] = ""),
                E == m - 1 &&
                  ((g[E] = g[E].replace(u, "")), (h[E] = h[E].replace(u, ""))),
                g[E] != h[E])
              )
                return o(l, `path=${T} allowed=${p}`), !1;
          }
          const N = y.qs,
            R = e.qs || "";
          if (((f = /\?/.test(r)), (f && N && !R) || (!N && R)))
            return o(l, `querystring=${d(N)} allowed=${d(R)}`), !1;
          if (
            ((0, n.__)(R, (e, t) => {
              if (N[t] !== e) return (C = !0), !1;
            }),
            C)
          )
            return o(l, `querystring=${d(N)} allowed=${d(R)}`), !1;
          if (
            f &&
            ((0, n.__)(N, (e, t) => {
              if (e != R[t]) return (C = !0);
            }),
            C)
          )
            return o(l, `querystring=${d(N)} allowed=strict|${d(R)}`), !1;
          const A = e.hash || "",
            O = y.hash || "";
          return (
            (f = /#/.test(r)),
            (f || A) && A != O
              ? (o(l, `hash=${O} allowed=${A}`), !1)
              : (o(l, `url=${t}`, !0), !0)
          );
        },
        c = (e) => {
          let t, r;
          if (e && e.length)
            for (t = 0; (r = e[t++]); )
              if (a(r.u, CE2.w.location.href, r.o)) return !0;
          return !1;
        };
    },
    2886: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ap: () => d,
        B5: () => O,
        DQ: () => T,
        Ep: () => k,
        GE: () => x,
        GO: () => H,
        I3: () => N,
        IS: () => P,
        Jl: () => o.O,
        KT: () => p,
        LB: () => v,
        OR: () => C,
        Qb: () => R,
        R2: () => w,
        Rc: () => U,
        Ri: () => y,
        UO: () => A,
        Xe: () => a,
        Yj: () => S,
        _3: () => m,
        __: () => h,
        ch: () => p,
        ex: () => M,
        hZ: () => f,
        ib: () => $,
        jI: () => Y,
        jM: () => E,
        ne: () => z,
        o: () => _,
        oI: () => B,
        ou: () => c,
        pQ: () => g,
        q5: () => u,
        uh: () => I,
        x4: () => l,
      });
      var n = r(2559),
        i = r(3380),
        o = r(2759);
      const a = (e) => {
          if (!e) return;
          CE2.state.ignoredElements.push(e);
          const { tracker: t } = CE2;
          t && t.ignoredElements.push(e);
        },
        c = function () {
          return "undefined" != typeof CE_TEST_MODE && CE_TEST_MODE;
        },
        l = (e) => {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return CE2.w.unescape(e);
          }
        },
        d = (e) => {
          if (CE2.Native.Array.isArray(e))
            for (let t = 0; t < e.length; t++) {
              const r = e[t];
              CE2.sessionTags.push(r);
            }
          else CE2.sessionTags.push(e);
          const t = CE2.tracker?.session ? CE2.tracker : CE2.virtualTracker;
          t && t.addTag && t.addTag(e);
        },
        u = (e, t) => {
          if (null == e || /^\s*$/.test(e)) return null;
          const r = {},
            n = e.replace(/\+/g, " ").split(t || "&");
          let i,
            s,
            o = null,
            a = null,
            c = null;
          const d = Object.getOwnPropertyNames(Object.prototype);
          for (i = 0, s = n.length; i < s && i < 1e3; i++)
            (o = n[i].split("=")),
              o[0] &&
                ((a = l(o[0])),
                (c = null == o[1] ? null : l(o[1])),
                d.includes(a) || (r[a] = c));
          return r;
        },
        h = (e, t, r) => {
          if (!e) return;
          let n;
          if ("number" == typeof e.length && "function" == typeof e.concat)
            for (
              let i = 0, s = e.length;
              i < s && ((n = e[i]), !1 !== t.call(r, n, i));
              i++
            );
          else
            for (let i = 0, s = Object.keys(e); i < s.length; i++) {
              const o = s[i];
              if (
                ((n = e[o]),
                n !== Object.prototype[o] && !1 === t.call(r, n, o))
              )
                break;
            }
        },
        p = (e, t, r) => {
          e.addEventListener(t, r, !0);
        },
        g = (e, t, r) => {
          e.removeEventListener(t, r, !0);
        },
        f = (e, t) => {
          (e = parseInt(e, 10)) >= 1 &&
            e <= 5 &&
            (CE2.state.userData[e] = String(t));
          const { tracker: r } = CE2;
          r && r.sendCustomUserData && r.sendCustomUserData();
        },
        E = (...e) => {
          const { tracker: t } = CE2;
          if (t) return t.click(...e);
        },
        m = (e) =>
          null == e.r ||
          (!1 !== e.r &&
            !0 !== e.r &&
            (Math.random() >= 1 / e.r
              ? ((0, i.Yz)(
                  `Snapshot ${e.id} not selected due to snapshot sampling: ${e.r}`
                ),
                (e.r = !1))
              : (e.r = !0)),
          e.r),
        v = (e, t, r, n) => {
          if (!0 === CE2.data.dnt) return !1;
          if (n && void 0 !== e.external)
            try {
              if (!0 === e.external.InPrivateFilteringEnabled()) return !0;
            } catch (e) {}
          const i =
            t.doNotTrack || r.doNotTrack || r.msDoNotTrack || e.doNotTrack;
          return "1" == i || "yes" == i;
        },
        C = function () {
          try {
            return u(document.cookie, /;\s*/g) || {};
          } catch (e) {
            return {};
          }
        },
        y = function (e) {
          return C()[e];
        },
        w = function () {
          const { w: e } = CE2;
          if (!CE2.state._tlDomain) {
            const t = CE2.w.location.hostname;
            if (n.re.ipHost.test(t) || !/\./.test(t)) CE2.state._tlDomain = t;
            else if (
              e.CE_COOKIE_DOMAIN &&
              new RegExp(
                `(^|\\.)${e.CE_COOKIE_DOMAIN.replace(/\./g, "\\.")}$`,
                "i"
              ).test(t)
            )
              CE2.state._tlDomain = `.${e.CE_COOKIE_DOMAIN}`;
            else if (CE2.site?.cookieDomain)
              CE2.state._tlDomain = `.${CE2.site.cookieDomain}`;
            else {
              let e;
              const r = t.split(".");
              for (e = r.length - 1; e >= 0; e--) {
                const t = `.${r.slice(e).join(".")}`;
                if (I("_ce.gtld", t)) {
                  CE2.state._tlDomain = t;
                  break;
                }
              }
            }
          }
          return CE2.state._tlDomain;
        },
        _ = function (e, t, r) {
          r || (r = {});
          const n = encodeURIComponent,
            i = r.path || "/",
            s = r.domain || w();
          let o = null;
          r.expires
            ? (o = r.expires)
            : r.expiresIn
            ? (o = new Date(new Date().getTime() + 1e3 * r.expiresIn))
            : r.expiresInDays &&
              (o = new Date(
                new Date().getTime() + 86400 * r.expiresInDays * 1e3
              )),
            null == t && ((o = new Date(0)), (t = ""));
          const a = [`${n(e)}=${n(t)}`];
          a.push(`path=${i}`),
            CE2.w.parent !== CE2.w && "https:" === CE2.w.location.protocol
              ? (a.push("SameSite=None"), a.push("Secure"))
              : (a.push("SameSite=Strict"),
                CE2.data && CE2.data.use_secure_cookies && a.push("Secure")),
            s && a.push(`domain=${s}`),
            o && a.push(`expires=${o.toUTCString()}`),
            (CE2.d.cookie = a.join(";"));
        },
        S = function (e, t) {
          _(e, null, t);
        },
        I = (e, t) => (
          _(e, "1", { domain: t }),
          !!(
            CE2.d.cookie &&
            CE2.d.cookie.indexOf &&
            CE2.d.cookie.indexOf(e) > -1
          ) && (S(e, { domain: t }), !0)
        ),
        k = () =>
          new CE2.URL(
            (() => {
              let { referrer: e } = CE2.d;
              try {
                !e &&
                  CE2.d.location.ancestorOrigins &&
                  ([e] = CE2.d.location.ancestorOrigins);
              } catch (e) {
                (0, i.Yz)("Referer error", e);
              }
              return e;
            })()
          ).getDomain(),
        b = (e) => {
          const t = CE2.d.createElement("a");
          return (t.href = `http://${e}/`), t.hostname;
        },
        T = (e) => {
          let t, r;
          for (r = 0; (t = e[r++]); )
            if (
              ((i = b(t.name)),
              (s = CE2.w.location.hostname),
              n.re.ipHost.test(i)
                ? i === s
                : s.toLowerCase().endsWith(i.toLowerCase()) ||
                  s.toLowerCase().endsWith(`.${i.toLowerCase}`))
            )
              return t;
          var i, s;
        },
        N = function (e, t, r = !1) {
          if ("undefined" == typeof CE_USER_COMMON_SCRIPT_URL)
            return void (0, i.Yz)(
              "Inline Worker is not supported: CE_USER_SCRIPT_URL not defined"
            );
          if ("undefined" == typeof CE_USER_THIRDPARTY_SCRIPT_URL)
            return void (0, i.Yz)(
              "Inline Worker is not supported: CE_USER_THIRDPARTY_SCRIPT_URL not defined"
            );
          const n = [],
            s = ["CE_DEBUG", "CE_TEST_MODE"];
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            CE2.w[t] && n.push(`var ${t} = '${CE2.w[t]}';`);
          }
          r &&
            n.push(
              `self.importScripts('${CE_USER_COMMON_SCRIPT_URL}', '${CE_USER_THIRDPARTY_SCRIPT_URL}');`
            ),
            n.push(`self.onmessage=${t.toString()};`);
          const o = new Blob(n, { type: "text/javascript" });
          return o
            ? new Worker(CE2.Native.URL.createObjectURL(o), { name: e })
            : new Worker(
                `data:application/javascript,${encodeURIComponent(n.join())}`,
                { name: e }
              );
        },
        R = function () {
          if (void 0 === CE2.state._inws)
            try {
              const e = N("crazyegg-workers-check", () => {}, !0);
              e
                ? (e.terminate(), (CE2.state._inws = !0))
                : (CE2.state._inws = !1);
            } catch (e) {
              CE2.state._inws = !1;
            }
          return CE2.state._inws;
        },
        A = function (e, t, r = !1) {
          try {
            return N(e, t, r);
          } catch (e) {
            (0, i.Yz)(`Inline Worker is not supported: ${e.message}`);
          }
        },
        O = (e, t, r) => (r && (t += `,${t} *`), e.matches(t)),
        x = function (e) {
          if ("undefined" == typeof window) return s[e];
          try {
            const t = "ce_proto_iframe";
            let r = document.getElementById(t);
            return (
              r ||
                ((r = document.createElement("iframe")),
                (r.id = t),
                (r.title = "CrazyEgg Tracking iframe"),
                (r.style.display = "none"),
                document.documentElement.appendChild(r)),
              r.contentWindow[e]
            );
          } catch (t) {
            return (0, i.Yz)("Clean Prototype error", t), window[e];
          }
        },
        D = function (e) {
          return (
            !!e &&
            /\{\s+\[native code\]/.test(Function.prototype.toString.call(e))
          );
        },
        $ = function (e) {
          let t = Object.getOwnPropertyNames(e);
          for (let r = 0, n = t; r < n.length; r++) {
            const t = n[r];
            if ("function" == typeof e[t] && !D(e[t])) return !1;
          }
          if (e.prototype) {
            t = Object.getOwnPropertyNames(e.prototype);
            for (let r = 0, n = t; r < n.length; r++) {
              const t = n[r];
              try {
                if ("function" == typeof e.prototype[t] && !D(e.prototype[t]))
                  return !1;
              } catch (e) {
                if ("TypeError" !== e.name) throw e;
              }
            }
          }
          return !0;
        },
        M = (e, t) => {
          const { tracker: r } = CE2;
          r && r.customEvent && r.customEvent(e, t);
        },
        P = (e) => CE2.tracker?.[e] || CE2.virtualTracker?.[e];
      let V;
      const U = (e = null) => {
          V = e || performance.now();
        },
        L = [
          "utm_source",
          "utm_medium",
          "utm_term",
          "utm_content",
          "utm_campaign",
        ],
        z = (e) => {
          let t,
            r = !1;
          const n = [];
          if ((t = new CE2.URL(e || window.location.href).qs))
            for (let e = 0; e < L.length; e++) {
              const i = L[e];
              t[i] ? ((r = !0), n.push(t[i])) : n.push("");
            }
          return r ? n : [];
        },
        B = function (e, t) {
          const r = e[t];
          return function (...t) {
            try {
              return r.apply(e, t);
            } catch (e) {}
          };
        },
        H = function (e) {
          try {
            (0, i.Yz)(`[Loading] ${e}`),
              "function" == typeof CE_NOT_TRACKING && window.CE_NOT_TRACKING(e);
          } catch (e) {
            (0, i.Yz)("[Loading] Not tracking callback failure", e);
          }
        },
        Y = function (e) {
          if (!CE2.data || !CE2.data.features) return !1;
          for (let t = 0, r = CE2.data.features; t < r.length; t++) {
            if (r[t] === e) return !0;
          }
          return !1;
        };
    },
    5736: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var n = r(7866),
        i = r(1509);
      class s {
        constructor() {
          (this.trackURL = CE2.data.v11_tracking_dest),
            (this.visitor = CE2.visitorTracker),
            (this.visitorID = CE2.visitorTracker.getId()),
            (this.bufferQueue = []),
            this.bufferQueueTimeout,
            (this.bufferTimeoutInterval = 2e3);
        }
        makeId() {
          return (0, n.M4)(0, 1);
        }
        newEvent(e, t = {}) {
          const r = t.attributes || [];
          for (let e = 0; e < r.length; e++) void 0 === r[e] && (r[e] = "");
          return [
            [
              t.eventID || this.makeId(),
              this.visitorID,
              e,
              this.version || CE2.VERSION,
              t.timestamp || +new Date(),
              CE2.tabId,
            ],
            r,
          ];
        }
        buildTrackerOptions(e = {}) {
          return (
            (e.context = "Tracker"),
            (e.userId = CE2.data.uid),
            (e.siteId = this.site.id),
            (e.snapshotIds = this.snapshotIds),
            (e.sessionId = this.sessionId),
            (e.pageFingerprintMd5 = this.pageFingerprintMd5),
            e
          );
        }
        processBuffer(e = {}) {
          do {
            const t = this.bufferQueue.splice(0, 10);
            t.length &&
              (0, i.sendEvents)(
                this.buildTrackerOptions({
                  context: "Tracker",
                  sendBeacon: e.sendBeacon,
                }),
                t
              );
          } while (this.bufferQueue.length);
          e.scheduleTimeout &&
            (this.bufferQueueTimeout = setTimeout(() => {
              this.processBuffer({
                scheduleTimeout: e.scheduleTimeout,
                sendBeacon: e.sendBeacon,
              });
            }, this.bufferTimeoutInterval));
        }
      }
    },
    3487: (e, t, r) => {
      "use strict";
      r.d(t, {
        CT: () => o,
        Gw: () => a,
        H$: () => h,
        MN: () => l,
        ur: () => u,
        uw: () => c,
      });
      var n = r(1789);
      const i = { intToStr: {}, strToInt: {} },
        s = [],
        o = (e) =>
          "string" == typeof e ? e : i && i.intToStr ? i.intToStr[e] : void 0,
        a = (e) => {
          "number" == typeof e.nid &&
            "string" == typeof e.id &&
            (e.nid in i.intToStr ||
              ((i.intToStr[e.nid] = e.id), (i.strToInt[e.id] = e.nid)));
        },
        c = (e, t, r) => n.r.nextGoalConversionValue(e, t, r),
        l = (e) => n.r.setCurrency(e),
        d = (e, t, r, n) => {
          const s =
            "number" == typeof (o = t)
              ? o
              : i && i.strToInt
              ? i.strToInt[o]
              : void 0;
          var o;
          "number" == typeof s
            ? e.goalConversion(s, r, n || s)
            : e.codeConversion(t, r);
        },
        u = (e) => {
          let t;
          for (; (t = s.shift()); ) d(e, ...t);
        },
        h = (e, t, r) => {
          (CE2.tracker && CE2.tracker.goals) || CE2.virtualTracker
            ? d(CE2.tracker || CE2.virtualTracker, e, t, r)
            : s.push([e, t, r]);
        };
    },
    1789: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => l });
      var n = r(8856),
        i = r(8e3);
      const s = "gtrk.cnv",
        o = "gtrk.la",
        a = "gtrk.ngv",
        c = "gtrk.c",
        l = {
          get: (e) => i.i.get(e),
          set: (e, t) => i.i.set(e, t),
          del: (e) => i.i.del(e),
          reset() {
            this.del(s), this.del(o);
          },
          alive() {
            this.isExpired() && this.reset(),
              this.set(o, (+new Date()).toString(36));
          },
          isExpired() {
            const e = parseInt(this.get(o), 36);
            return !!e && new Date() - e > 18e5;
          },
          getConvertedIds() {
            if (this.isExpired()) return [];
            const e = this.get(s);
            return e
              ? e
                  .split(",")
                  .map((e) => parseInt(e, 36))
                  .filter((e) => !Number.isNaN(Number(e)))
              : [];
          },
          recordConversion(e) {
            if ("number" != typeof e || Number.isNaN(Number(e))) return;
            const t = this.getConvertedIds();
            t.includes(e) ||
              (n.A.emit("complete", { goal: { id: e } }),
              t.push(e),
              this.set(s, t.map((e) => e.toString(36)).join(",")));
          },
          alreadyConverted(e) {
            return this.getConvertedIds().includes(e);
          },
          setCurrency(e) {
            this.set(c, e);
          },
          getCurrency() {
            return this.get(c);
          },
          nextGoalConversionValue(e, t, r) {
            let n = this.get(a);
            n = n ? CE2.Native.JSON.parse(n) : {};
            const i = n[e] && n[e].findIndex((e) => e.triggerId == r);
            i && !t
              ? n[e][i].splice(i, 1)
              : Number.isInteger(i) && t
              ? (n[e][i] = { value: t, triggerId: r })
              : t &&
                (n[e] || (n[e] = []), n[e].push({ value: t, triggerId: r })),
              this.set(a, CE2.Native.JSON.stringify(n));
          },
          getNextGoalConversionValue(e, t = null) {
            let r = this.get(a);
            r = r ? CE2.Native.JSON.parse(r) : {};
            let n = r[e] && r[e].findIndex((e) => e.triggerId == t),
              i = r[e] && r[e][n];
            i ||
              ((n = r[e] && r[e].findIndex((e) => !e.triggerId)),
              (i = r[e] && r[e][n]));
            const s = this.getCurrency();
            if (
              (i && !i.value.currency && s && (i.value.currency = s),
              r[e] && (r[e].splice(n, 1), 0 === r[e].length && delete r[e]),
              this.set(a, CE2.Native.JSON.stringify(r)),
              i)
            )
              return i.value;
          },
        };
    },
    2080: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => o, s: () => s });
      var n = r(7471),
        i = r(3380);
      function s(e) {
        if ("string" != typeof e) return NaN;
        const t = e.lastIndexOf(","),
          r = e.lastIndexOf(".");
        let n,
          i = e.replace(/[^0-9.,]/g, "");
        if (t > -1 && r > -1) n = t > r ? "," : ".";
        else if (t > -1 || r > -1) {
          const e = t > -1 ? "," : ".",
            r = i.split(e);
          2 === r.length && r[1].length < 3 && (n = e);
        }
        return (
          n
            ? ((i = i.replace(new RegExp(`[^0-9\\${n}]`, "g"), "")),
              (i = i.replace(new RegExp(`\\${n}`), ".")))
            : (i = i.replace(/[^0-9]/g, "")),
          parseFloat(i)
        );
      }
      class o {
        constructor(e, t = []) {
          (this.goals = (e || []).filter((e) => {
            if (!e.triggers) return !1;
            for (let t = 0, r = e.triggers; t < r.length; t++) {
              const e = r[t];
              if (e.element_value && e.element_value.condition) return !0;
            }
            return !1;
          })),
            (this.listeners = new Set(t)),
            this.findGoalValues(),
            this.initMutationObserver();
        }
        destroy() {
          this.mutationObserver.disconnect();
        }
        findGoalValues() {
          for (let e = 0, t = this.goals; e < t.length; e++) {
            const r = t[e];
            for (let e = 0, t = r.triggers; e < t.length; e++) {
              const o = t[e],
                a = o.element_value?.condition,
                c = o.element_value?.currency;
              if (
                !a.on_any_page &&
                a.on_page &&
                !(0, n.V4)(a.on_page, CE2.w.location.href)
              )
                return !1;
              let l =
                a[
                  `selector_for_${
                    { 1: "desktop", 2: "phone", 3: "tablet" }[
                      CE2.clock.getDeviceType()
                    ]
                  }`
                ];
              if (!l) continue;
              "function" == typeof CE2.fixTriggerSelector &&
                (l = CE2.fixTriggerSelector(r.id, l));
              const d = CE2.d.querySelectorAll(l);
              for (let e = 0; e < d.length; e++) {
                const t = d[e];
                this.listeners.forEach((e) => {
                  const n = s(t.innerText);
                  if ("number" != typeof n || Number.isNaN(n)) return;
                  const a = { worth: n, currency: c };
                  (0, i.Yz)("[Goals] Goal target value detected", {
                    goal: r,
                    trigger: o,
                    original: t.innerText,
                    value: a,
                  }),
                    a &&
                      e({ type: "goalValue", value: a, goal: r, trigger: o });
                });
              }
            }
          }
        }
        initMutationObserver() {
          this.mutationObserver ||
            (this.goals.length &&
              ((this.mutationObserver = new MutationObserver(
                this.onMutation.bind(this)
              )),
              this.mutationObserver.observe(CE2.d, {
                subtree: !0,
                childList: !0,
                characterData: !0,
              })));
        }
        onMutation(e) {
          for (let t = 0; t < e.length; t++) {
            e[t].addedNodes && this.findGoalValues();
          }
        }
        addEventListener(e) {
          this.listeners.add(e);
        }
        removeEventListener(e) {
          this.listeners.delete(e);
        }
      }
    },
    715: (e, t, r) => {
      "use strict";
      function n() {
        return CE2.tracker?.session ? CE2.tracker : CE2.virtualTracker;
      }
      function i(e) {
        if (!e) return;
        CE2.IDENTIFIER = e;
        const t = n();
        t
          ? t?.identify(e)
          : CE2.visitorTracker && CE2.visitorTracker.identify(e);
      }
      function s() {
        CE2.IDENTIFIER = null;
        const e = n();
        e
          ? e.clearIdentity()
          : CE2.visitorTracker && CE2.visitorTracker.clearIdentity();
      }
      function o(e, t) {
        const r = n();
        r?.increaseSessionWorth(e, t);
      }
      function a(e, t) {
        const r = n();
        r?.decreaseSessionWorth(e, t);
      }
      function c(e, t) {
        const r = n();
        r?.setSessionWorth(e, t);
      }
      r.d(t, {
        LG: () => c,
        LV: () => a,
        SY: () => s,
        ls: () => i,
        vn: () => o,
      });
    },
    9880: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => o, w: () => a });
      var n = r(3380);
      const i = "v11.fhb",
        s = "v11.lhb",
        o = function (e) {
          if (CE2.data.sites_sampling)
            for (let t = 0, r = CE2.data.sites_sampling; t < r.length; t++) {
              const n = r[t];
              if (n.id === e.id) return parseInt(n.recording_ratio, 10);
            }
        };
      function a(e) {
        (this.site = e), (this.clock = CE2.clock), (this.ratio = o(e));
      }
      function c() {
        CE2.cookieStorage.set(s, +new Date()),
          setTimeout(c, window.CE_RATIO_HEARTBEAT || 6e4);
      }
      a.prototype = {
        validRatio() {
          return !Number.isNaN(Number(this.ratio)) && null != this.ratio;
        },
        canRecord() {
          const e = CE2.w.innerWidth || CE2.d.documentElement.clientWidth;
          if (
            (CE2.w.innerHeight || CE2.d.documentElement.clientHeight) < 10 ||
            e < 10
          )
            return this.debug("Sampling rejected: too small screen size"), !1;
          let t =
            "undefined" != typeof CE_ENFORCE_RECORDING && CE_ENFORCE_RECORDING;
          const r = CE2.data && CE2.data.dkey;
          if (
            (!t &&
              r &&
              CE2.w &&
              CE2.w.location.href.indexOf(`ced=${r}`) &&
              CE2.w.location.href.indexOf("ceer=1") > -1 &&
              (t = !0),
            t)
          )
            return (
              this.debug("CE_ENFORCE_RECORDING applied"),
              this._setAppliedStrategy("enforced"),
              !0
            );
          const n = CE2.state.overridenRecordingSamplingRate;
          if (n) {
            this.debug(`Sampling Ratio: enforced to ${n}`);
            const e = 100 * Math.random() < n;
            return e && this._setAppliedStrategy("enforced"), e;
          }
          if (this.ratio <= 0)
            return this.debug("Sampling Ratio: Zeroed Ratio"), !1;
          const o = CE2.cookieStorage.get(i),
            a = CE2.cookieStorage.get(s);
          if (o && a) {
            const e = +new Date() - parseInt(o, 10);
            if (+new Date() - parseInt(a, 10) < 36e5 && e < 1296e6)
              return this.debug("Sampling Ratio: Standby"), c(), !1;
            this.debug("Sampling Ratio: Standby period ended");
          }
          const l = Math.random() * this.ratio;
          if (l < 1) {
            let e = !1;
            if (
              ((this.appliedStrategy = this._strategy()),
              "custom" === this._strategy())
            ) {
              let t = this.customSamplingApplies();
              t
                ? this._setAppliedStrategy("custom")
                : this.customPeriodEnded() &&
                  ((t = !0), this._setAppliedStrategy("uniform")),
                this.debug("Sampling Ratio", {
                  random: l,
                  ratio: this.ratio,
                  strategy: "custom",
                  accepted: t,
                }),
                (e = t);
            } else if ("consecutive" == this._strategy()) {
              const t = this.consecutiveSamplingApplies();
              t
                ? this._setAppliedStrategy("consecutive")
                : this._setAppliedStrategy("uniform"),
                this.debug("Sampling Ratio", {
                  random: l,
                  ratio: this.ratio,
                  strategy: "consecutive",
                  accepted: t,
                }),
                (e = !0);
            } else
              "no_sampling" === this._strategy()
                ? (this._setAppliedStrategy("no_sampling"),
                  this.debug("Sampling Ratio", {
                    random: l,
                    ratio: this.ratio,
                    strategy: "no_sampling",
                    accepted: !0,
                  }),
                  (e = !0))
                : (this._setAppliedStrategy("uniform"),
                  this.debug("Sampling Ratio", {
                    random: l,
                    ratio: this.ratio,
                    strategy: "uniform",
                    accepted: !0,
                  }),
                  (e = !0));
            return CE2.cookieStorage.del(i), CE2.cookieStorage.del(s), e;
          }
          return (
            this.debug("Sampling Ratio", {
              random: l,
              ratio: this.ratio,
              accepted: !1,
            }),
            CE2.cookieStorage.set(i, +new Date()),
            c(),
            !1
          );
        },
        _setAppliedStrategy(e) {
          (this.appliedStrategy = e), (CE2.appliedStrategy = e);
        },
        _appliedStrategy() {
          return this.appliedStrategy;
        },
        consecutiveSamplingApplies() {
          const e = new Date(
              1e3 * parseInt(this.site.recordingSettings.samplingUpdatedAt, 10)
            ),
            t = new Date(
              1e3 *
                parseInt(this.site.recordingSettings.samplingCompletedAt, 10)
            );
          return !(e && t && t > e);
        },
        customSamplingApplies() {
          if (!this.clock) return !1;
          const e = CE2.clock.getDate();
          if (!e) return !1;
          const t = new Date(
              1e3 *
                parseInt(this.site.recordingSettings.samplingStartDateUnix, 10)
            ),
            r = new Date(
              1e3 *
                parseInt(this.site.recordingSettings.samplingEndDateUnix, 10)
            ),
            n = new Date(
              1e3 * parseInt(this.site.recordingSettings.samplingUpdatedAt, 10)
            ),
            i = new Date(
              1e3 *
                parseInt(this.site.recordingSettings.samplingCompletedAt, 10)
            );
          return !(n && i && i > n) && t <= e && e <= r;
        },
        customPeriodEnded() {
          if (!this.clock) return !1;
          return (
            CE2.clock.getDate() >
            new Date(
              1e3 *
                parseInt(this.site.recordingSettings.samplingEndDateUnix, 10)
            )
          );
        },
        debug(e, t) {
          (0, n.Yz)(`[Sessions] ${e}`, t);
        },
        _strategy() {
          return "custom" === this.site.recordingSettings.samplingStrategy
            ? "custom"
            : "consecutive" === this.site.recordingSettings.samplingStrategy
            ? "consecutive"
            : "no_sampling" === this.site.recordingSettings.samplingStrategy
            ? "no_sampling"
            : "uniform";
        },
        _key() {
          return "custom" === this._strategy() ||
            "consecutive" === this._strategy()
            ? btoa(
                `${this.site.id}|${this.site.recordingSettings.samplingUpdatedAt}`
              )
            : "all";
        },
      };
    },
    6832: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => p });
      var n = r(2886),
        i = r(1509),
        s = r(8481),
        o = r(1789),
        a = r(1807),
        c = r(3380),
        l = r(5736),
        d = r(8e3);
      function u() {
        const e = d.i.get("swk");
        if (e) {
          const [t] = e.split("|");
          return parseFloat(t) || 0;
        }
        return 0;
      }
      const h = (e, t) => (d.i.set("swk", [e, t].join("|")), e);
      class p extends l.A {
        constructor(e) {
          super(e);
          const { visitId: t } = e;
          (this.eventHandlers = {}),
            (this.virtual = !1),
            (this.url = window.location.href),
            this.setVisitorIDs(),
            this.setVisitIDs(t);
        }
        setVisitIDs(e) {
          CE2.visitId = this.visitID = e || this.makeId();
        }
        setVisitorIDs() {
          this.visitor.getId() &&
            this.visitor.getStoredId() &&
            this.visitor.getId() !== this.visitor.getStoredId() &&
            this.resetSessionTracking?.(),
            (this.visitorID = this.visitor.getId()),
            (this.visitorIdentification = this.visitor.getIdentification());
        }
        identify(e) {
          if (!this.session || !e) return;
          this.visitor.identify(e), (this.visitorIdentification = e);
          const t = [e],
            r = this.newEvent(17, { attributes: t });
          this.send(r);
        }
        clearIdentity() {
          (this.visitorIdentification = null), this.visitor.clearIdentity();
        }
        amountInCents(e) {
          return (
            e && !Number.isNaN(Number(e)) && Math.round(1e4 * parseFloat(e))
          );
        }
        increaseSessionWorth(e, t) {
          if (Number.isNaN(Number(e))) return !1;
          const r = ((e, t) => {
            const r = u();
            return h(r + e, t);
          })(this.amountInCents(e), t);
          return (
            (0, c.Yz)("[Tracker] Increase session worth", {
              amount: e,
              currency: t,
              finalAmount: r,
            }),
            this.sendSessionWorth(r, t)
          );
        }
        decreaseSessionWorth(e, t) {
          if (Number.isNaN(Number(e))) return !1;
          const r = ((e, t) => {
            let r = u() - e;
            return r < 0 && (r = 0), h(r, t);
          })(this.amountInCents(e), t);
          return (
            (0, c.Yz)("[Tracker] Decrease session worth", {
              amount: e,
              currency: t,
              finalAmount: r,
            }),
            this.sendSessionWorth(r, t)
          );
        }
        setSessionWorth(e, t) {
          if (Number.isNaN(Number(e))) return !1;
          const r = h(this.amountInCents(e), t);
          return (
            (0, c.Yz)("[Tracker] Set session worth", {
              amount: e,
              currency: t,
            }),
            this.sendSessionWorth(r, t)
          );
        }
        sendSessionWorth(e, t) {
          const r = [
              this.visitID,
              e,
              t && 3 === t.length ? t.toUpperCase() : null,
              "new",
            ],
            n = this.newEvent(35, { attributes: r });
          this.send(n);
        }
        getUserData() {
          const e = [],
            { userData: t } = CE2.state;
          return (
            (0, n.__)([1, 2, 3, 4, 5], (r) => {
              const n = t[r];
              void 0 !== n && e.push(String(r), n);
            }),
            e
          );
        }
        goalConversion(e, t, r) {
          const n = !o.r.alreadyConverted(e),
            l = (0, s.xf)(e),
            d = this.visitor.getFirstVisitData(),
            u = this.goals.find(({ id: t }) => t === e);
          let h, p;
          if (
            (t ||
              ((t = o.r.getNextGoalConversionValue(e, r)) &&
                (0, c.Yz)("[Goal] Using stored value", {
                  goal: u,
                  triggerId: r,
                  value: t,
                })),
            !t && u && u.triggers)
          ) {
            const e = u.triggers.find((e) => e.id == r);
            e &&
              e.fixed_value &&
              ((t = e.fixed_value),
              (0, c.Yz)("[Goal] Using fixed value", {
                goal: u,
                trigger: e,
                value: t,
              }));
          }
          t &&
            "object" == typeof t &&
            t.worth &&
            !Number.isNaN(t.worth) &&
            ((h = t.currency), (p = t.worth), this.increaseSessionWorth(p, h));
          const g = [
            CE2.w.location.href,
            l?.goalId === e ? l.id : void 0,
            l?.goalId === e
              ? CE2.data.addons.find(({ id: e }) => e === l.id)?.name
              : void 0,
            u?.name,
            this.visitorIdentification,
            e,
            d.landingUrl,
            d.referrer,
            d.time ? Date.now() - d.time : null,
            d.utm,
            d.userData,
            CE2.clock.getIP(),
            CE2.clock.getDeviceType(),
            this.visitor.isReturning(),
            p ? Math.round(1e4 * parseFloat(p)) : void 0,
            h,
          ];
          l?.goalId === e &&
            ((0, i.sendCounter)("cta:conversion", l.id), (0, s._o)(e));
          const f = (0, a.lD)(),
            E = [
              f?.id,
              f?.name,
              f?.variantId,
              (0, a.Qj)().map(({ id: e }) => e),
            ];
          if (f) {
            const e = CE2.flows[f.id],
              t = CE2.flows[f.id].variants[f.variantId];
            E.push(e.realId), E.push(t.realId);
          }
          const m = [
              this.visitID,
              r,
              n,
              this.session ? this.session.numberVisits() : "",
              ...g,
              ...E,
            ],
            v = this.newEvent(26, { attributes: m });
          this.sendImmediatelly(v, { goalId: e }),
            n && o.r.recordConversion(e),
            "function" == typeof CE2.convertedFromFlow &&
              CE2.goalIdString(e) &&
              CE2.convertedFromFlow(e, t),
            (0, c.Yz)("[Goals] Converted", e, t, r);
        }
        codeConversion(e, t) {
          this.goals.forEach((r) => {
            r.triggers.forEach((n) => {
              const i = n.filter.conditions.filter(
                (e) => "code" === e.criteria
              );
              if (0 !== i.length)
                for (let s = 0; s < i.length; s++) {
                  i[s].values.includes(e) &&
                    (t || (t = o.r.getNextGoalConversionValue(e, n.id)),
                    this.goalConversion(r.id, t, n.id));
                }
            });
          });
        }
        sendImmediatelly(e, t = {}) {
          (0, i.sendEvents)(this.buildTrackerOptions(t), [e]);
        }
        sendCustomUserData() {
          const { userData: e } = CE2.state;
          if (e.length > 0 && e.find((e) => !!e)) {
            const t = [e[1], e[2], e[3], e[4], e[5]],
              r = this.newEvent(18, { attributes: t });
            this.send(r);
          }
        }
        sendTag(e) {
          if (this.session && e) {
            const t = [e],
              r = this.newEvent(19, { attributes: t });
            this.send(r);
          }
        }
        addTag(e) {
          const t = CE2.Native.Array.isArray(e) ? e : [e];
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            this.sendTag(r);
          }
        }
        addEventListener(e, t, r = window) {
          this.eventsTargets || (this.eventsTargets = new Map());
          let i = this.eventsTargets.get(r);
          i || ((i = new Map()), this.eventsTargets.set(r, i));
          let s = i.get(e);
          s ||
            ((s = { hooks: [] }),
            (s.handler = (...e) => {
              for (let t = 0, r = s.hooks; t < r.length; t++) {
                (0, r[t])(...e);
              }
            }),
            i.set(e, s),
            (0, n.KT)(r, e, s.handler)),
            s.hooks.push(t);
        }
        setupPageHideHandler() {
          this.addEventListener("visibilitychange", () => {
            "visible" !== document.visibilityState &&
              this.onPageHide &&
              this.onPageHide();
          });
        }
      }
    },
    7471: (e, t, r) => {
      "use strict";
      r.d(t, { DM: () => o, V4: () => s, _9: () => c });
      var n = r(6677),
        i = r(6149);
      const s = (e, t, { debugCallback: r } = {}) => {
          let n = "";
          return (
            e.indexOf("*") > -1 && (n = "*"), (0, i.$)(e, t, n, null, null, r)
          );
        },
        o = {
          visited_page(e, { debugCallback: t } = {}) {
            const r = CE2.w.location.href;
            return s(e, r, { debugCallback: t });
          },
          device: (e) => (0, n.D)(e),
          referrer(e, { debugCallback: t } = {}) {
            const r = CE2.d.referrer;
            return (r === e && "" === r) || s(e, r, { debugCallback: t });
          },
        },
        a = (e, { debugCallback: t, operand: r } = {}) => {
          for (let n = 0, i = e.values; n < i.length; n++) {
            const s = i[n];
            if (o[e.criteria](s, { debugCallback: t, operand: r })) return !0;
          }
          return !1;
        },
        c = function (e, { debugCallback: t, operand: r } = {}) {
          if (e)
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (!a(i, { debugCallback: t, operand: r })) return !1;
            }
          return !0;
        };
    },
    3647: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ABTest: () => n.ABTest,
          ADDON_SCRIPT_VERSION: () => n.ADDON_SCRIPT_VERSION,
          CE_API: () => n.CE_API,
          Emitter: () => n.Emitter,
          ExitIntent: () => n.ExitIntent,
          FormData: () => n.FormData,
          Goal: () => n.Goal,
          IndexedDB: () => n.IndexedDB,
          JSON: () => n.JSON,
          NativeURL: () => n.NativeURL,
          Preview: () => n.Preview,
          READY_STATE_PATTERN: () => n.READY_STATE_PATTERN,
          URL: () => n.URL,
          VirtualTracker: () => n.VirtualTracker,
          addListener: () => n.addListener,
          addTag: () => n.addTag,
          addToCart: () => n.addToCart,
          applyVersion: () => a,
          benchmark: () => n.benchmark,
          benchmarkEnabled: () => n.benchmarkEnabled,
          buildRedirectUrl: () => s.aQ,
          checkoutCompleted: () => n.checkoutCompleted,
          clearIdentity: () => n.clearIdentity,
          click: () => n.click,
          converted: () => n.converted,
          convertedFromFlow: () => o.Vg,
          cookieStorage: () => n.cookieStorage,
          customEvent: () => n.customEvent,
          debug: () => n.debug,
          debug2: () => n.debug2,
          debug2Enabled: () => n.debug2Enabled,
          debugEnabled: () => n.debugEnabled,
          debugError: () => n.debugError,
          decreaseSessionWorth: () => n.decreaseSessionWorth,
          deleteCookie: () => n.deleteCookie,
          domReadySetup: () => n.domReadySetup,
          each: () => n.each,
          errorTracking: () => n.errorTracking,
          fixTriggerSelector: () => o.XJ,
          forceVariantID: () => o.Y1,
          get: () => n.get,
          getCookie: () => n.getCookie,
          getCookies: () => n.getCookies,
          getLastFlow: () => n.getLastFlow,
          getSegmentTracker: () => n.getSegmentTracker,
          getStoredVariant: () => o.TV,
          getVariant: () => o.IX,
          getVariantOverride: () => o.aS,
          goalIdString: () => n.goalIdString,
          hasFeature: () => n.hasFeature,
          http: () => n.http,
          hudMain: () => n.hudMain,
          identify: () => n.identify,
          ignore: () => n.ignore,
          increaseSessionWorth: () => n.increaseSessionWorth,
          initFlowTracking: () => o.ed,
          invoke: () => s.lA,
          isBot: () => n.isBot,
          listen: () => n.listen,
          loadHUD: () => n.loadHUD,
          matchURL: () => n.matchURL,
          matchURLSimple: () => s.pm,
          matchesAddon: () => n.matchesAddon,
          matchesLegacyOrSegments: () => n.matchesLegacyOrSegments,
          matchesSelector: () => n.matchesSelector,
          matchesTrigger: () => n.matchesTrigger,
          nextGoalConversionValue: () => n.nextGoalConversionValue,
          notifyError: () => n.notifyError,
          onDOMReady: () => n.onDOMReady,
          pagesTracker: () => n.pagesTracker,
          parseNumberString: () => n.parseNumberString,
          promisePool: () => n.promisePool,
          remoteLog: () => n.remoteLog,
          removeListener: () => n.removeListener,
          set: () => n.set,
          setCurrency: () => n.setCurrency,
          setRecordingsSamplingRate: () => n.setRecordingsSamplingRate,
          setSessionWorth: () => n.setSessionWorth,
          showCTA: () => n.showCTA,
          showFeedbackSurvey: () => n.showFeedbackSurvey,
          showSurvey: () => n.showSurvey,
          startCheckout: () => n.startCheckout,
          startRecording: () => n.startRecording,
          stopRecording: () => n.stopRecording,
          testModeCheck: () => n.testModeCheck,
          traceLog: () => n.traceLog,
          trackSurveyResponse: () => n.trackSurveyResponse,
          transformation: () => i.s,
          triggerAddons: () => n.triggerAddons,
          userDataMain: () => n.userDataMain,
          userMainTestMode: () => n.userMainTestMode,
          uuid_v1: () => n.uuid_v1,
          variant: () => l,
          writeCookie: () => n.writeCookie,
        });
      var n = r(6695),
        i = r(862),
        s = r(5971),
        o = r(1782);
      function a() {
        if (CE2.data.page_versions) {
          const e = CE2.data.page_versions.find((e) => (0, s.pm)(e.url));
          e && ((CE2.versionDetails = e), (0, o.kN)(e));
        }
      }
      var c = r(2886);
      const l = {
        choose(e) {
          const t = Math.random();
          let r,
            n = 0;
          if (
            ((0, c.__)(e, (e) => ((n += e.weight), !(t < n) || ((r = e), !1))),
            r)
          )
            return r;
          const i = new Error("Failed to choose variant");
          throw ((i.variants = e), i);
        },
        getControlVariant(e) {
          let t;
          return (0, c.__)(e, (e) => "control" !== e.type || ((t = e), !1)), t;
        },
      };
    },
    1782: (e, t, r) => {
      "use strict";
      r.d(t, {
        kN: () => D,
        Vg: () => N,
        XJ: () => A,
        Y1: () => S,
        TV: () => b,
        IX: () => R,
        aS: () => T,
        ed: () => $,
        P5: () => x,
      });
      var n = r(2886),
        i = r(3380);
      r(7866);
      const s = (function () {
          var e = String.fromCharCode,
            t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            r = {};
          var n = {
            compressToBase64: function (e) {
              if (null == e) return "";
              var r = n._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (r.length % 4) {
                default:
                case 0:
                  return r;
                case 1:
                  return r + "===";
                case 2:
                  return r + "==";
                case 3:
                  return r + "=";
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : n._decompress(e.length, 32, function (n) {
                    return (function (e, t) {
                      if (!r[e]) {
                        r[e] = {};
                        for (var n = 0; n < e.length; n++)
                          r[e][e.charAt(n)] = n;
                      }
                      return r[e][t];
                    })(t, e.charAt(n));
                  });
            },
            compress: function (t) {
              return n._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, r) {
              if (null == e) return "";
              var n,
                i,
                s,
                o = {},
                a = {},
                c = "",
                l = "",
                d = "",
                u = 2,
                h = 3,
                p = 2,
                g = [],
                f = 0,
                E = 0;
              for (s = 0; s < e.length; s += 1)
                if (
                  ((c = e.charAt(s)),
                  Object.prototype.hasOwnProperty.call(o, c) ||
                    ((o[c] = h++), (a[c] = !0)),
                  (l = d + c),
                  Object.prototype.hasOwnProperty.call(o, l))
                )
                  d = l;
                else {
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    if (d.charCodeAt(0) < 256) {
                      for (n = 0; n < p; n++)
                        (f <<= 1),
                          E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++;
                      for (i = d.charCodeAt(0), n = 0; n < 8; n++)
                        (f = (f << 1) | (1 & i)),
                          E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                          (i >>= 1);
                    } else {
                      for (i = 1, n = 0; n < p; n++)
                        (f = (f << 1) | i),
                          E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                          (i = 0);
                      for (i = d.charCodeAt(0), n = 0; n < 16; n++)
                        (f = (f << 1) | (1 & i)),
                          E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                          (i >>= 1);
                    }
                    0 == --u && ((u = Math.pow(2, p)), p++), delete a[d];
                  } else
                    for (i = o[d], n = 0; n < p; n++)
                      (f = (f << 1) | (1 & i)),
                        E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                        (i >>= 1);
                  0 == --u && ((u = Math.pow(2, p)), p++),
                    (o[l] = h++),
                    (d = String(c));
                }
              if ("" !== d) {
                if (Object.prototype.hasOwnProperty.call(a, d)) {
                  if (d.charCodeAt(0) < 256) {
                    for (n = 0; n < p; n++)
                      (f <<= 1),
                        E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++;
                    for (i = d.charCodeAt(0), n = 0; n < 8; n++)
                      (f = (f << 1) | (1 & i)),
                        E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                        (i >>= 1);
                  } else {
                    for (i = 1, n = 0; n < p; n++)
                      (f = (f << 1) | i),
                        E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                        (i = 0);
                    for (i = d.charCodeAt(0), n = 0; n < 16; n++)
                      (f = (f << 1) | (1 & i)),
                        E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                        (i >>= 1);
                  }
                  0 == --u && ((u = Math.pow(2, p)), p++), delete a[d];
                } else
                  for (i = o[d], n = 0; n < p; n++)
                    (f = (f << 1) | (1 & i)),
                      E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                      (i >>= 1);
                0 == --u && ((u = Math.pow(2, p)), p++);
              }
              for (i = 2, n = 0; n < p; n++)
                (f = (f << 1) | (1 & i)),
                  E == t - 1 ? ((E = 0), g.push(r(f)), (f = 0)) : E++,
                  (i >>= 1);
              for (;;) {
                if (((f <<= 1), E == t - 1)) {
                  g.push(r(f));
                  break;
                }
                E++;
              }
              return g.join("");
            },
            decompress: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : n._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, r, n) {
              var i,
                s,
                o,
                a,
                c,
                l,
                d,
                u = [],
                h = 4,
                p = 4,
                g = 3,
                f = "",
                E = [],
                m = { val: n(0), position: r, index: 1 };
              for (i = 0; i < 3; i += 1) u[i] = i;
              for (o = 0, c = Math.pow(2, 2), l = 1; l != c; )
                (a = m.val & m.position),
                  (m.position >>= 1),
                  0 == m.position && ((m.position = r), (m.val = n(m.index++))),
                  (o |= (a > 0 ? 1 : 0) * l),
                  (l <<= 1);
              switch (o) {
                case 0:
                  for (o = 0, c = Math.pow(2, 8), l = 1; l != c; )
                    (a = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position &&
                        ((m.position = r), (m.val = n(m.index++))),
                      (o |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  d = e(o);
                  break;
                case 1:
                  for (o = 0, c = Math.pow(2, 16), l = 1; l != c; )
                    (a = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position &&
                        ((m.position = r), (m.val = n(m.index++))),
                      (o |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  d = e(o);
                  break;
                case 2:
                  return "";
              }
              for (u[3] = d, s = d, E.push(d); ; ) {
                if (m.index > t) return "";
                for (o = 0, c = Math.pow(2, g), l = 1; l != c; )
                  (a = m.val & m.position),
                    (m.position >>= 1),
                    0 == m.position &&
                      ((m.position = r), (m.val = n(m.index++))),
                    (o |= (a > 0 ? 1 : 0) * l),
                    (l <<= 1);
                switch ((d = o)) {
                  case 0:
                    for (o = 0, c = Math.pow(2, 8), l = 1; l != c; )
                      (a = m.val & m.position),
                        (m.position >>= 1),
                        0 == m.position &&
                          ((m.position = r), (m.val = n(m.index++))),
                        (o |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (u[p++] = e(o)), (d = p - 1), h--;
                    break;
                  case 1:
                    for (o = 0, c = Math.pow(2, 16), l = 1; l != c; )
                      (a = m.val & m.position),
                        (m.position >>= 1),
                        0 == m.position &&
                          ((m.position = r), (m.val = n(m.index++))),
                        (o |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (u[p++] = e(o)), (d = p - 1), h--;
                    break;
                  case 2:
                    return E.join("");
                }
                if ((0 == h && ((h = Math.pow(2, g)), g++), u[d])) f = u[d];
                else {
                  if (d !== p) return null;
                  f = s + s.charAt(0);
                }
                E.push(f),
                  (u[p++] = s + f.charAt(0)),
                  (s = f),
                  0 == --h && ((h = Math.pow(2, g)), g++);
              }
            },
          };
          return n;
        })(),
        o = {
          PACK_SIZE_LIMIT: 65535,
          CK: "_CEFT",
          VARIANT_OVERRIDE_KEY: "ceft_variant_override",
          load() {
            if (this.values) return;
            const e = {},
              t = this.decompress((0, n.Ri)(this.CK));
            let r, i;
            if (t) {
              for (r = 0; (i = t[r]); r += 2) e[i] = t[r + 1];
              (this.values = e), this.save();
            } else this.values = {};
          },
          getCookieRawValue() {
            const e = this.values || {},
              t = [];
            return (
              (0, n.__)(e, (e, r) => {
                t.push(r), t.push(e);
              }),
              this.compress(t)
            );
          },
          save() {
            (0, n.o)(this.CK, this.getCookieRawValue(), { expiresInDays: 365 });
          },
          get(e) {
            return this.load(), this.values[e];
          },
          set(e, t, r) {
            this.load(), (this.values[e] = `${t}`), r || o.save();
          },
          del(e) {
            let t, r, n;
            if ((this.load(), e && "function" == typeof e.test))
              for (
                t = [],
                  this.each((e, r) => {
                    t.push(r);
                  }, e),
                  r = 0;
                (n = t[r++]);

              )
                delete this.values[n];
            else delete this.values[e];
            this.save();
          },
          each(e, t) {
            this.load(),
              (0, n.__)(this.values, (r, n) => {
                (null == t || t.test(n)) && e.call(null, r, n);
              });
          },
          packStrings(e) {
            let t = "";
            const r = this.PACK_SIZE_LIMIT;
            let n, i, s, o;
            for (n = 0, i = e.length; n < i; n++)
              (s = e[n]),
                "string" != typeof s && (s = s ? `${s}` : ""),
                (o = s.length),
                o > r && (s = s.substr(0, r)),
                (t += String.fromCharCode(o)),
                (t += s);
            return t;
          },
          unpackStrings(e) {
            const t = [];
            let r = 0;
            const n = e.length;
            let i;
            for (; r < n; )
              (i = e.charCodeAt(r++)), t.push(e.substr(r, i)), (r += i);
            return t;
          },
          compress(e) {
            return s.compressToBase64(this.packStrings(e));
          },
          decompress(e) {
            try {
              return this.unpackStrings(s.decompressFromBase64(e));
            } catch (e) {}
          },
        };
      var a = r(5736),
        c = r(1509);
      class l extends a.A {
        constructor(e) {
          super(), (this.site = e);
        }
        abTestView(e, t) {
          const r = [t, CE2.flows[e].realId, CE2.flows[e].variants[t].realId],
            n = this.newEvent(40, { attributes: r });
          return this.sendImmediatelly(n, { abTestId: e });
        }
        abTestConversion(e, t, r, n = void 0) {
          const i = CE2.goalIdString(r),
            s = CE2.flows[e].realId,
            o = CE2.flows[e].variants[t].realId,
            a = [
              t,
              i,
              n && Math.round(1e4 * parseFloat(n.worth)),
              s,
              o,
              r,
              n && n.currency,
            ],
            c = this.newEvent(41, { attributes: a });
          return this.sendImmediatelly(c, { abTestId: e });
        }
        sendImmediatelly(e, t = {}) {
          return new Promise((r) => {
            (t.callback = r),
              (t.flow = "ab"),
              (0, c.sendEvents)(this.buildTrackerOptions(t), [e]);
          });
        }
      }
      let d;
      function u() {
        return d || (d = new l(CE2.site)), d;
      }
      const h = {
        view: (e, t) => u().abTestView(e, t),
        conversion: (e, t, r, n) => u().abTestConversion(e, t, r, n),
      };
      var p = r(6677),
        g = r(2484),
        f = r(3487),
        E = r(1807),
        m = r(474),
        v = r(4808);
      async function C(e) {
        if (
          (CE2.w.dataLayer || (CE2.w.dataLayer = []),
          (CE2.w.CE_GTM_CONFIG?.version || 1) >= 2)
        ) {
          const t = await (async function () {
            if (CE2.Native.Array.isArray(CE2.w.CE_GTM_CONFIG?.gaPropertyIds))
              return CE2.w.CE_GTM_CONFIG.gaPropertyIds;
            "complete" !== CE2.d.readyState &&
              (await new Promise((e) => {
                CE2.w.addEventListener("load", e);
              }));
            const e = [];
            for (
              let t = 0, r = CE2.d.querySelectorAll('script[src*="/gtag/"]');
              t < r.length;
              t++
            ) {
              const n = r[t],
                i = /=(G-\w+)/.exec(n.src);
              i && i[1] && e.push(i[1]);
            }
            return e;
          })();
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            CE2.w.dataLayer.push(
              CE2BH.extends({}, e, { crazyegg_ga_property_id: n }),
              { event: "crazyegg_variant_view" }
            );
          }
        } else CE2.w.dataLayer.push(e, { event: "crazyegg_variant_view" });
      }
      async function y(e, t) {
        try {
          const r = CE2.data.flows[e],
            n = r.variants[t];
          if (!r || !n) return;
          const i = (function (e, t) {
            const r = {
              crazyegg_ab_test_id: String(e.realId),
              crazyegg_variant_id: String(t.realId),
            };
            return (
              e.name && (r.crazyegg_ab_test_name = e.name),
              "control" === t.type
                ? (r.crazyegg_variant_name = "Control")
                : "number" == typeof t.ordinal &&
                  (r.crazyegg_variant_name = `Variant #${t.ordinal}`),
              r.crazyegg_ab_test_name &&
                (r.crazyegg_ab_test_and_variant = `${r.crazyegg_ab_test_name} > ${r.crazyegg_variant_name}`),
              r
            );
          })(r, n);
          !(function (e) {
            "function" == typeof CE2.w.gtag &&
              CE2.w.gtag("event", "crazyegg_variant_view", e);
          })(i),
            await C(i);
        } catch (e) {
          (0, v.A)(e);
        }
      }
      const w = {},
        _ = (e) => {
          const t = CE2.w.location.search.replace(/^\?/, "").split("&");
          for (let r = 0; r < t.length; r++) {
            const n = t[r].split("=");
            if (n[0] === e && n[1]) return n[1];
          }
        },
        S = () => _("ce2ForceVariant"),
        I = () => "1" === _("ce2SkipRedirectVariant"),
        k = () => {
          (0, n.__)(CE2.data.flows, (e, t) => {
            if (e.id) return !1;
            (e.id = t),
              (0, n.__)(e.variants, (e, t) => {
                e.id = t;
              });
          });
        },
        b = (e) => {
          const t = `viewed:${encodeURIComponent(e)}`,
            r = o.get(t);
          return r
            ? CE2.visitorTracker.returningState().reset
              ? ((0, E.D8)(), o.del(t), null)
              : CE2.data.flows[e].variants[r]
            : null;
        },
        T = function (e) {
          const t = (0, n.Ri)(o.VARIANT_OVERRIDE_KEY);
          return void 0 === t
            ? null
            : "" == t
            ? CE2.variant.getControlVariant(CE2.data.flows[e].variants)
            : CE2.data.flows[e].variants[t];
        },
        N = (e, t) => {
          const r = CE2.goalIdString(e),
            n = encodeURIComponent,
            i = /^viewed:/;
          o.each((s, a) => {
            const c = decodeURIComponent(a.replace(i, "")),
              l = `converted:${n(c)}:${n(r)}`;
            !o.get(l) &&
              CE2.flows[c] &&
              CE2.flows[c].variants[s] &&
              (h.conversion(c, s, e, t), o.set(l, "1"));
          }, i);
        },
        R = function (e) {
          k();
          let t = CE2.getVariantOverride(e);
          if (t) return { variant: t, recordView: !1 };
          const r = CE2.data.flows[e];
          return "running" !== r.status
            ? {
                variant: CE2.variant.getControlVariant(r.variants),
                recordView: !1,
              }
            : ((t = CE2.getStoredVariant(e)),
              t
                ? { variant: t, recordView: !1, stored: !0 }
                : CE2.data.page_views_limit_reached
                ? {
                    variant: CE2.variant.getControlVariant(r.variants),
                    recordView: !1,
                  }
                : { variant: CE2.variant.choose(r.variants), recordView: !0 });
        },
        A = (e, t) => {
          if (!w || !(e in w)) return t;
          const { variant: r } = w[e];
          return ((e, t) => {
            let r = e;
            if (t.redirectUrl) return e;
            if (!t.transforms.default || t.transforms.default.length < 1)
              return e;
            for (let e = 0, n = t.transforms.default.length; e < n; e++) {
              const n = t.transforms.default[e];
              !n.finalSelectors ||
                n.finalSelectors.length < 1 ||
                (r === n.target && ([r] = n.finalSelectors));
            }
            return r;
          })(t, r);
        },
        O = (e, t) => (
          (0, i.Yz)("[Flows] Store view", { flowID: e, variantID: t }),
          o.set(`viewed:${encodeURIComponent(e)}`, t),
          (0, E.W2)(e, t),
          y(e, t),
          h.view(e, t)
        ),
        x = async () => {
          let e;
          const [t, r, n, s] = (0, g.Fi)(),
            o = CE2.w.location.hostname;
          if (s && s !== o && !o.endsWith(`.${s}`)) return null;
          const { flow: a } = await ((e, t) =>
            new Promise((r, n) => {
              const { data: i } = CE2,
                s = `${
                  i.flow_preview_url
                }?token=${e}.${t}&user=${encodeURIComponent(
                  i.uid
                )}&host=${encodeURIComponent(CE2.w.location.hostname)}`;
              (0, c.get)(s, (e) => {
                e && 200 === e.status && e.responseText
                  ? r(CE2.Native.JSON.parse(e.responseText.trim()))
                  : n(new Error("Preview flow not found"));
              });
            }))(t, r);
          if (!a)
            return (0, i.Yz)("[Flows] [Preview] Flow not found", { flowId: r });
          for (let t = 0, r = Object.keys(a.variants); t < r.length; t++) {
            const i = r[t];
            i === n && (e = a.variants[i]);
          }
          if (!e)
            return (0, i.Yz)("[Flows] [Preview] Variant not found", {
              flow: a,
              variantId: n,
            });
          if (e.redirectUrl) {
            if (!CE2.matchURL(e.redirectUrl, CE2.w.location.href)) {
              const t = CE2.buildRedirectUrl(
                e.redirectUrl,
                CE2.w.location.href
              );
              I()
                ? (0, i.Yz)(
                    "[Flows] [Preview] Skipping redirect due to ce2SkipRedirectVariant",
                    { flow: a, variant: e }
                  )
                : t
                ? (CE2.w.location = t)
                : (0, i.Yz)(
                    "[Flows] [Preview] Skipping redirect due to invalid redirect URL",
                    { flow: a, variant: e }
                  );
            }
          } else
            (0, i.Yz)("[Flows] [Preview] Applying variant", {
              flow: a,
              variant: e,
            }),
              e.transforms.default &&
                CE2.transformation.render(
                  CE2.Native.JSON.parse(
                    CE2.Native.JSON.stringify(e.transforms.default)
                  ),
                  { index: 0 },
                  { flow: a, variant: e }
                ),
              CE2.transformation.observeDynamicElements(
                CE2.Native.JSON.parse(CE2.Native.JSON.stringify(e.transforms)),
                { flow: a, variant: e }
              ),
              CE2.transformation.applyStyle(e.transforms.style, {
                flow: a,
                variant: e,
              }),
              CE2.transformation.executeScript(e.transforms.script, {
                flow: a,
                variant: e,
              });
        };
      function D(e, t) {
        if (e.transforms.default) {
          const r = { index: 0 };
          CE2.transformation.render(
            CE2.Native.JSON.parse(
              CE2.Native.JSON.stringify(e.transforms.default)
            ),
            r,
            t
          );
        }
        CE2.transformation.observeDynamicElements(
          CE2.Native.JSON.parse(CE2.Native.JSON.stringify(e.transforms)),
          t
        ),
          CE2.transformation.applyStyle(e.transforms.style, t),
          CE2.transformation.executeScript(e.transforms.script, t);
      }
      const $ = function () {
        if ((0, g.bU)()) return x();
        CE2.benchmark.start("navigation|crazyegg|common|flowtracking");
        try {
          let e = {};
          const t = [],
            r = [];
          if (CE2.isBot()) return void (0, i.Yz)("[Flows] Bot detected");
          if ((k(), !CE2.data.flows || !Object.keys(CE2.data.flows).length))
            return void (0, i.Yz)("[Flows] Nothing to match");
          const { flows: s } = CE2.data,
            a = (0, n.Ri)(o.VARIANT_OVERRIDE_KEY),
            c = CE2.forceVariantID() || a;
          return (
            (0, n.__)(s, (s, a) => {
              CE2.benchmark.start(
                `navigation|crazyegg|common|flowtracking|${a}`
              ),
                c &&
                  (function (e) {
                    (0, n.o)(o.VARIANT_OVERRIDE_KEY, e);
                  })(c);
              const {
                variant: l,
                recordView: d,
                stored: u,
              } = CE2.getVariant(a);
              CE2.benchmark.start(
                `navigation|crazyegg|common|flowtracking|${a}|${l.id}`
              );
              const h = ((e, t, r) => {
                let n;
                return t
                  ? ((n = !!e.variants[t]),
                    n ||
                      r.push({
                        flow: e,
                        forcedVariantID: t,
                        goal: e.goal,
                        result: n,
                        message: "no match forcedVariantID",
                      }),
                    n)
                  : (0, m.mF)(
                      { resourceType: "ab_test", resourceId: e.realId },
                      () =>
                        (0, p.D)(e.deviceTypes)
                          ? ((n = CE2.invoke(e.match)),
                            n ||
                              r.push({
                                flow: e,
                                forcedVariantID: t,
                                goal: e.goal,
                                result: n,
                                message: "no match",
                              }),
                            n)
                          : ((n = !1),
                            r.push({
                              flow: e,
                              devices: e.deviceTypes,
                              result: n,
                              message: "wrong device",
                            }),
                            n)
                    );
              })(s, c, t);
              if (
                (s.goal &&
                  l &&
                  (u || h) &&
                  ((e, t) => {
                    (0, f.Gw)(e), (w[e.nid] = { goal: e, variant: t });
                  })(s.goal, l),
                !h || !l)
              )
                return;
              const E = {
                  id: a,
                  deviceType: { 1: "desktop", 2: "phone", 3: "tablet" }[
                    CE2.clock.getDeviceType()
                  ],
                },
                v =
                  "patch" === l.type || "variant" === l.type
                    ? "variant"
                    : "control";
              if (
                ("variant" === v && (CE2.flowPatchApplied = !0),
                g.Ay.emit("variant", {
                  test: E,
                  variant: { id: l.id, type: v },
                }),
                (e = { flow: s, variant: l }),
                "control" !== v)
              ) {
                if (l.redirectUrl) {
                  const e = CE2.buildRedirectUrl(
                    l.redirectUrl,
                    CE2.w.location.href,
                    s.match && s.match[1]
                  );
                  return (
                    e &&
                      !CE2.matchURL(e, CE2.w.location.href) &&
                      (t.push({
                        flow: s,
                        variant: l,
                        goal: s.goal,
                        result: !0,
                        message: "redirecting",
                      }),
                      d
                        ? O(a, l.id).then(() => {
                            I()
                              ? (0, i.Yz)(
                                  "[Flows] Skipping redirect due to ce2SkipRedirectVariant",
                                  e
                                )
                              : (CE2.w.location = e);
                          })
                        : I()
                        ? (0, i.Yz)(
                            "[Flows] Skipping redirect due to ce2SkipRedirectVariant",
                            e
                          )
                        : (CE2.w.location = e)),
                    !1
                  );
                }
                D(l, e);
              }
              d && O(a, l.id),
                t.push({
                  flow: s,
                  variant: l,
                  goal: s.goal,
                  result: !0,
                  message: "starting flow",
                }),
                CE2.benchmark.stop(
                  `navigation|crazyegg|common|flowtracking|${a}|${l.id}`
                ),
                CE2.benchmark.stop(
                  `navigation|crazyegg|common|flowtracking|${a}`
                ),
                r.push(e);
            }),
            (0, i.Yz)("[Flows] Matching target", t),
            CE2.data.data_url &&
              !0 !== CE2.state.do_not_show_ab_test &&
              setTimeout(() => {
                (0, i.Yz)("[Flows] show hidden variants");
                const { host: e } = new URL(CE2.data.data_url),
                  t = `link[href*="${e}/pages/abtests"]`;
                document.querySelectorAll(t).forEach((e) => {
                  (0, i.Yz)("[Flows] remove node", { href: e.href }),
                    e.remove();
                });
              }, 10),
            CE2.benchmark.stop("navigation|crazyegg|common|flowtracking"),
            r
          );
        } catch (e) {
          (0, v.A)(e);
        }
      };
    },
    862: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => g });
      var n = r(3380),
        i = r(2886),
        s = r(1509),
        o = r(8773),
        a = r(401),
        c = r(1305),
        l = r.n(c),
        d = r(8737);
      const u = function (e, t) {
        const r = l()(e),
          n = new DOMParser().parseFromString(t, "text/html");
        let i = n.body.firstChild;
        "HTML" === e.tagName
          ? (i = n.documentElement)
          : "BODY" === e.tagName && (i = n.body);
        const s = l()(i),
          o = (0, d.diff)(r, s);
        (0, d.patch)(e, o);
      };
      function h(e, t) {
        const r = e.cloneNode();
        r.innerHTML = t;
        const n = l()(e),
          i = l()(r),
          s = (0, d.diff)(n, i);
        (0, d.patch)(e, s);
      }
      var p = r(5971);
      const g = {
        TIME_INTERVAL: 250,
        LONG_TIME_INTERVAL: 1e3,
        RETRY_LIMIT: 3e4,
        render(e, t, r) {
          if (!e) return;
          let n;
          (t = t || {}).index || (t.index = 0),
            t.totalApplied || (t.totalApplied = 0);
          const i = r?.flow?.patchStrategy;
          if (
            "async" === i &&
            t.index === e.length &&
            t.totalApplied != e.length
          )
            return (t.index = 0), void g.reschedule(e, t, r);
          if (
            "all-or-none" === i &&
            !t.allTargetsAvailable &&
            ((t.allTargetsAvailable = g.checkAllTargetsAvailable(e)),
            !t.allTargetsAvailable)
          )
            return void g.reschedule(e, t, r);
          const s = e[t.index],
            o = !t.dynamicNode || document.body.contains(t.dynamicNode);
          let c;
          if (r?.flow && r?.variant && s?.target) {
            let e;
            s?.type
              ? (e = s.type)
              : s?.state
              ? (e = "state")
              : s?.hide
              ? (e = "hide")
              : s?.html
              ? (e = "html")
              : s?.style
              ? (e = "style")
              : s?.move && (e = "move"),
              (c = [
                `navigation|crazyegg|common|flowtracking|${r.flow.id}|${
                  r.variant.id
                }|${(0, a.F)(s.target).substring(0, 6)}`,
                [`type=${e}`, `target=${s.target}`],
              ]),
              CE2.benchmark.start(...c);
          }
          if (s && o) {
            if (s.applied) return t.index++, void g.render(e, t, r);
            (n = g.transform(s, r)),
              (s.applied = n),
              g.addUnloadEventListener(e, t, r),
              n
                ? (t.index++,
                  t.totalApplied++,
                  delete t.startTime,
                  t.totalApplied >= e.length
                    ? "function" == typeof t.onComplete && t.onComplete(r)
                    : g.render(e, t, r))
                : "async" == i
                ? (t.index++, g.render(e, t, r))
                : g.reschedule(e, t, r),
              c && CE2.benchmark.stop(...c);
          }
        },
        checkAllTargetsAvailable(e) {
          return e.every((e) =>
            e.target
              ? !!CE2.d.querySelector(e.target)
              : !!e.children && this.checkAllTargetsAvailable(e.children)
          );
        },
        addUnloadEventListener(e, t, r) {
          !t.addedUnloadListener &&
            r &&
            ((t.addedUnloadListener = !0),
            (0, i.KT)(window, "beforeunload", () => {
              if (e.length !== t.totalApplied && t.startTime) {
                const n = e.find((e) => !e.applied);
                if (n) {
                  const e = !!r.flow,
                    i = e ? "variants" : "edits",
                    a = e ? r.variant.variantId : r.edit.id,
                    c = { selector: n.target };
                  console.log("unable to apply all edits", r, t.index);
                  const l = `//${new o.j(
                    CE2.data.ce_app_url
                  ).getHost()}/user-script/${i}/${a}/failure`;
                  (0, s.sendForm)(l, c, { sendBeacon: !0 });
                }
              }
            }));
        },
        observeDynamicElements(e, t) {
          let r;
          const n = [Node.TEXT_NODE, Node.COMMENT_NODE],
            s = Object.keys(e);
          new MutationObserver((o) => {
            o.forEach((o) => {
              let a;
              for (let c = 0; (a = o.addedNodes[c++]); )
                if (document.body.contains(a))
                  for (let o = 0; (r = s[o++]); )
                    "string" != typeof e[r] &&
                      !n.includes(a.nodeType) &&
                      (0, i.B5)(a, r) &&
                      g.render(e[r], { dynamicNode: a }, t);
            });
          }).observe(document, { childList: !0, subtree: !0 });
        },
        transform(e, t) {
          if (e.children) {
            e.scheduled || ((e.scheduled = !0), g.render(e.children, {}, t));
            return e.children.every((e) => e.applied);
          }
          const r = CE2.d.querySelectorAll(e.target);
          if (0 === r.length) return !1;
          if (((0, n.Yz)("[Transform] Applying", e), e.state))
            g.setStateStyle(e);
          else
            for (let t = 0; t < r.length; t++) {
              const s = r[t];
              if (e.attr)
                Object.keys(e.attr).forEach((t) => {
                  "_" != e.attr[t]
                    ? s.setAttribute(t, e.attr[t])
                    : s.removeAttribute(t);
                });
              else if (e.text) h(s, e.text);
              else if (e.hide)
                s.style.setProperty("display", "none", "important");
              else if (e.html)
                try {
                  u(s, e.html);
                } catch (t) {
                  (0, n.Yz)("[Transform] Patch failed, using outer html"),
                    (s.outerHTML = e.html);
                }
              else if (e.style)
                (0, i.__)(e.style, (e, t) => {
                  s.style.setProperty((0, p._k)(t), e);
                });
              else if (e.move) {
                const [t, r] = e.move;
                let n = r;
                t < r && (n = r + 1);
                const i = s.parentElement;
                i.insertBefore(s, i.children[n]);
              }
            }
          return !0;
        },
        reschedule(e, t, r) {
          const n = +new Date();
          let i;
          (t.startTime = t.startTime || n),
            (i =
              n - t.startTime < g.RETRY_LIMIT
                ? g.TIME_INTERVAL
                : g.LONG_TIME_INTERVAL),
            setTimeout(() => {
              g.render(e, t, r);
            }, i);
        },
        setStateStyle(e) {
          let t = document.head.querySelector("style[ce-flow-state-style]"),
            r = {};
          t &&
            ((r = CE2.Native.JSON.parse(CE2.Native.JSON.stringify(t.elStates))),
            t.remove()),
            (r[e.target] = CE2BH.extends(r[e.target] || {}, e.state)),
            (t = document.createElement("style")),
            (t.elStates = r),
            t.setAttribute("ce-flow-state-style", ""),
            t.setAttribute("type", "text/css"),
            document.head.appendChild(t);
          let n = "";
          (0, i.__)(r, (e, t) => {
            (0, i.__)(e, (e, r) => {
              let s = "";
              (0, i.__)(e, (e, t) => {
                s += `\n            ${(0, p._k)(
                  t
                )}: ${e} !important;\n          `;
              });
              n += `\n          ${t}${
                "default" === r ? "" : `:${r}`
              } {\n            ${s}\n          }\n        `;
            });
          }),
            (t.innerText = n || "");
        },
        applyStyle(e, t) {
          let r;
          t &&
            ((r = `navigation|crazyegg|common|flowtracking|applystyle-${t.flow.id}-${t.variant.id}`),
            CE2.benchmark.start(r));
          let n = document.head.querySelector("style[ce-flow-global-style]");
          n && n.remove(),
            (n = document.createElement("style")),
            n.setAttribute("ce-flow-global-style", ""),
            n.setAttribute("type", "text/css"),
            document.head.appendChild(n),
            (n.innerText = e || ""),
            r && CE2.benchmark.stop(r);
        },
        executeScript(e, t) {
          let r;
          t &&
            ((r = `navigation|crazyegg|common|flowtracking|executescript-${t.flow.id}-${t.variant.id}`),
            CE2.benchmark.start(r));
          let n = document.head.querySelector("script[ce-flow-global-script]");
          n && n.remove(),
            (n = document.createElement("script")),
            n.setAttribute("ce-flow-global-script", ""),
            n.setAttribute("type", "text/javascript"),
            (n.innerText = e || ""),
            document.head.appendChild(n),
            r && CE2.benchmark.stop(r);
        },
      };
    },
    5971: (e, t, r) => {
      "use strict";
      r.d(t, { _k: () => a, aQ: () => s, lA: () => i, pm: () => o });
      var n = r(6149);
      const i = function (e) {
          if (e) {
            if ("function" == typeof e) return e();
            if ("number" == typeof e.length && "function" == typeof CE2[e[0]])
              return CE2[e[0]](...e.slice(1));
          }
        },
        s = (e, t, r) => {
          const n = new URL(t);
          let i = e;
          if (e.includes("*")) {
            const n =
                !r ||
                t.match(
                  new RegExp(
                    r.replace(/([\?])/g, "\\$1").replaceAll("*", "([^?&]+)")
                  )
                ),
              s = n ? n.slice(1) : [];
            let o = 0,
              a = !0;
            if (
              ((i = e.replace(/\*/g, () => {
                const e = s[o];
                if ("string" == typeof e) return (o += 1), e;
                a = !1;
              })),
              !a)
            )
              return !1;
          }
          const s = new URL(i);
          for (
            let e = 0, t = [...n.searchParams.entries()];
            e < t.length;
            e++
          ) {
            const [r, n] = t[e];
            s.searchParams.get(r) || s.searchParams.set(r, n);
          }
          return s.toString();
        },
        o = function (...e) {
          for (let t = 0; t < e.length; t++) {
            let r = e[t],
              i = "";
            if (
              ("~" === r[0]
                ? ((r = r.substring(0)), (i = "r"))
                : r.includes("*") && (i = "*"),
              (0, n.$)(r.toLowerCase(), CE2.w.location.href, i))
            )
              return !0;
          }
          return !1;
        },
        a = (e) =>
          "string" == typeof e
            ? e
                .replace(/([a-z\d])([A-Z])/g, "$1_$2")
                .toLowerCase()
                .replace(/[ _]/g, "-")
            : e;
    },
    8922: function (e, t, r) {
      var n;
      !(function (i) {
        "use strict";
        function s(e, t) {
          var r = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
        }
        function o(e, t, r, n, i, o) {
          return s(
            ((a = s(s(t, e), s(n, o))) << (c = i)) | (a >>> (32 - c)),
            r
          );
          var a, c;
        }
        function a(e, t, r, n, i, s, a) {
          return o((t & r) | (~t & n), e, t, i, s, a);
        }
        function c(e, t, r, n, i, s, a) {
          return o((t & n) | (r & ~n), e, t, i, s, a);
        }
        function l(e, t, r, n, i, s, a) {
          return o(t ^ r ^ n, e, t, i, s, a);
        }
        function d(e, t, r, n, i, s, a) {
          return o(r ^ (t | ~n), e, t, i, s, a);
        }
        function u(e, t) {
          var r, n, i, o, u;
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          var h = 1732584193,
            p = -271733879,
            g = -1732584194,
            f = 271733878;
          for (r = 0; r < e.length; r += 16)
            (n = h),
              (i = p),
              (o = g),
              (u = f),
              (h = a(h, p, g, f, e[r], 7, -680876936)),
              (f = a(f, h, p, g, e[r + 1], 12, -389564586)),
              (g = a(g, f, h, p, e[r + 2], 17, 606105819)),
              (p = a(p, g, f, h, e[r + 3], 22, -1044525330)),
              (h = a(h, p, g, f, e[r + 4], 7, -176418897)),
              (f = a(f, h, p, g, e[r + 5], 12, 1200080426)),
              (g = a(g, f, h, p, e[r + 6], 17, -1473231341)),
              (p = a(p, g, f, h, e[r + 7], 22, -45705983)),
              (h = a(h, p, g, f, e[r + 8], 7, 1770035416)),
              (f = a(f, h, p, g, e[r + 9], 12, -1958414417)),
              (g = a(g, f, h, p, e[r + 10], 17, -42063)),
              (p = a(p, g, f, h, e[r + 11], 22, -1990404162)),
              (h = a(h, p, g, f, e[r + 12], 7, 1804603682)),
              (f = a(f, h, p, g, e[r + 13], 12, -40341101)),
              (g = a(g, f, h, p, e[r + 14], 17, -1502002290)),
              (h = c(
                h,
                (p = a(p, g, f, h, e[r + 15], 22, 1236535329)),
                g,
                f,
                e[r + 1],
                5,
                -165796510
              )),
              (f = c(f, h, p, g, e[r + 6], 9, -1069501632)),
              (g = c(g, f, h, p, e[r + 11], 14, 643717713)),
              (p = c(p, g, f, h, e[r], 20, -373897302)),
              (h = c(h, p, g, f, e[r + 5], 5, -701558691)),
              (f = c(f, h, p, g, e[r + 10], 9, 38016083)),
              (g = c(g, f, h, p, e[r + 15], 14, -660478335)),
              (p = c(p, g, f, h, e[r + 4], 20, -405537848)),
              (h = c(h, p, g, f, e[r + 9], 5, 568446438)),
              (f = c(f, h, p, g, e[r + 14], 9, -1019803690)),
              (g = c(g, f, h, p, e[r + 3], 14, -187363961)),
              (p = c(p, g, f, h, e[r + 8], 20, 1163531501)),
              (h = c(h, p, g, f, e[r + 13], 5, -1444681467)),
              (f = c(f, h, p, g, e[r + 2], 9, -51403784)),
              (g = c(g, f, h, p, e[r + 7], 14, 1735328473)),
              (h = l(
                h,
                (p = c(p, g, f, h, e[r + 12], 20, -1926607734)),
                g,
                f,
                e[r + 5],
                4,
                -378558
              )),
              (f = l(f, h, p, g, e[r + 8], 11, -2022574463)),
              (g = l(g, f, h, p, e[r + 11], 16, 1839030562)),
              (p = l(p, g, f, h, e[r + 14], 23, -35309556)),
              (h = l(h, p, g, f, e[r + 1], 4, -1530992060)),
              (f = l(f, h, p, g, e[r + 4], 11, 1272893353)),
              (g = l(g, f, h, p, e[r + 7], 16, -155497632)),
              (p = l(p, g, f, h, e[r + 10], 23, -1094730640)),
              (h = l(h, p, g, f, e[r + 13], 4, 681279174)),
              (f = l(f, h, p, g, e[r], 11, -358537222)),
              (g = l(g, f, h, p, e[r + 3], 16, -722521979)),
              (p = l(p, g, f, h, e[r + 6], 23, 76029189)),
              (h = l(h, p, g, f, e[r + 9], 4, -640364487)),
              (f = l(f, h, p, g, e[r + 12], 11, -421815835)),
              (g = l(g, f, h, p, e[r + 15], 16, 530742520)),
              (h = d(
                h,
                (p = l(p, g, f, h, e[r + 2], 23, -995338651)),
                g,
                f,
                e[r],
                6,
                -198630844
              )),
              (f = d(f, h, p, g, e[r + 7], 10, 1126891415)),
              (g = d(g, f, h, p, e[r + 14], 15, -1416354905)),
              (p = d(p, g, f, h, e[r + 5], 21, -57434055)),
              (h = d(h, p, g, f, e[r + 12], 6, 1700485571)),
              (f = d(f, h, p, g, e[r + 3], 10, -1894986606)),
              (g = d(g, f, h, p, e[r + 10], 15, -1051523)),
              (p = d(p, g, f, h, e[r + 1], 21, -2054922799)),
              (h = d(h, p, g, f, e[r + 8], 6, 1873313359)),
              (f = d(f, h, p, g, e[r + 15], 10, -30611744)),
              (g = d(g, f, h, p, e[r + 6], 15, -1560198380)),
              (p = d(p, g, f, h, e[r + 13], 21, 1309151649)),
              (h = d(h, p, g, f, e[r + 4], 6, -145523070)),
              (f = d(f, h, p, g, e[r + 11], 10, -1120210379)),
              (g = d(g, f, h, p, e[r + 2], 15, 718787259)),
              (p = d(p, g, f, h, e[r + 9], 21, -343485551)),
              (h = s(h, n)),
              (p = s(p, i)),
              (g = s(g, o)),
              (f = s(f, u));
          return [h, p, g, f];
        }
        function h(e) {
          var t,
            r = "",
            n = 32 * e.length;
          for (t = 0; t < n; t += 8)
            r += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
          return r;
        }
        function p(e) {
          var t,
            r = [];
          for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)
            r[t] = 0;
          var n = 8 * e.length;
          for (t = 0; t < n; t += 8)
            r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
          return r;
        }
        function g(e) {
          var t,
            r,
            n = "0123456789abcdef",
            i = "";
          for (r = 0; r < e.length; r += 1)
            (t = e.charCodeAt(r)),
              (i += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
          return i;
        }
        function f(e) {
          return unescape(encodeURIComponent(e));
        }
        function E(e) {
          return (function (e) {
            return h(u(p(e), 8 * e.length));
          })(f(e));
        }
        function m(e, t) {
          return (function (e, t) {
            var r,
              n,
              i = p(e),
              s = [],
              o = [];
            for (
              s[15] = o[15] = void 0,
                i.length > 16 && (i = u(i, 8 * e.length)),
                r = 0;
              r < 16;
              r += 1
            )
              (s[r] = 909522486 ^ i[r]), (o[r] = 1549556828 ^ i[r]);
            return (
              (n = u(s.concat(p(t)), 512 + 8 * t.length)),
              h(u(o.concat(n), 640))
            );
          })(f(e), f(t));
        }
        function v(e, t, r) {
          return t
            ? r
              ? m(t, e)
              : (function (e, t) {
                  return g(m(e, t));
                })(t, e)
            : r
            ? E(e)
            : (function (e) {
                return g(E(e));
              })(e);
        }
        void 0 ===
          (n = function () {
            return v;
          }.call(t, r, t, e)) || (e.exports = n);
      })();
    },
    8274: (e) => {
      e.exports = (function (e) {
        var t,
          r = String.prototype.split,
          n = /()??/.exec("")[1] === e;
        return (
          (t = function (t, i, s) {
            if ("[object RegExp]" !== Object.prototype.toString.call(i))
              return r.call(t, i, s);
            var o,
              a,
              c,
              l,
              d = [],
              u =
                (i.ignoreCase ? "i" : "") +
                (i.multiline ? "m" : "") +
                (i.extended ? "x" : "") +
                (i.sticky ? "y" : ""),
              h = 0;
            i = new RegExp(i.source, u + "g");
            for (
              t += "",
                n || (o = new RegExp("^" + i.source + "$(?!\\s)", u)),
                s = s === e ? -1 >>> 0 : s >>> 0;
              (a = i.exec(t)) &&
              !(
                (c = a.index + a[0].length) > h &&
                (d.push(t.slice(h, a.index)),
                !n &&
                  a.length > 1 &&
                  a[0].replace(o, function () {
                    for (var t = 1; t < arguments.length - 2; t++)
                      arguments[t] === e && (a[t] = e);
                  }),
                a.length > 1 &&
                  a.index < t.length &&
                  Array.prototype.push.apply(d, a.slice(1)),
                (l = a[0].length),
                (h = c),
                d.length >= s)
              );

            )
              i.lastIndex === a.index && i.lastIndex++;
            return (
              h === t.length
                ? (!l && i.test("")) || d.push("")
                : d.push(t.slice(h)),
              d.length > s ? d.slice(0, s) : d
            );
          }),
          t
        );
      })();
    },
    914: (e, t, r) => {
      "use strict";
      r(8015)("ev-store", "7");
      var n = "__EV_STORE_KEY@7";
      e.exports = function (e) {
        var t = e[n];
        t || (t = e[n] = {});
        return t;
      };
    },
    9697: (e, t, r) => {
      var n,
        i = void 0 !== r.g ? r.g : "undefined" != typeof window ? window : {},
        s = r(542);
      "undefined" != typeof document
        ? (n = document)
        : (n = i["__GLOBAL_DOCUMENT_CACHE@4"]) ||
          (n = i["__GLOBAL_DOCUMENT_CACHE@4"] = s),
        (e.exports = n);
    },
    98: (e, t, r) => {
      "use strict";
      var n = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : {};
      e.exports = function (e, t) {
        if (e in n) return n[e];
        return (n[e] = t), t;
      };
    },
    8015: (e, t, r) => {
      "use strict";
      var n = r(98);
      e.exports = function (e, t, r) {
        var i = "__INDIVIDUAL_ONE_VERSION_" + e,
          s = n(i + "_ENFORCE_SINGLETON", t);
        if (s !== t)
          throw new Error(
            "Can only have one copy of " +
              e +
              ".\nYou already have version " +
              s +
              " installed.\nThis means you cannot install version " +
              t
          );
        return n(i, r);
      };
    },
    7203: (e) => {
      "use strict";
      e.exports = function (e) {
        return "object" == typeof e && null !== e;
      };
    },
    2208: (e, t, r) => {
      var n = r(7247);
      e.exports = n;
    },
    5098: (e, t, r) => {
      var n = r(353);
      e.exports = n;
    },
    9985: (e, t, r) => {
      var n = r(8429);
      e.exports = n;
    },
    8737: (e, t, r) => {
      var n = r(5098),
        i = r(311),
        s = r(9985),
        o = r(2208),
        a = r(1978),
        c = r(9637);
      e.exports = { diff: n, patch: i, h: s, create: o, VNode: a, VText: c };
    },
    311: (e, t, r) => {
      var n = r(4434);
      e.exports = n;
    },
    1676: (e, t, r) => {
      var n = r(7203),
        i = r(758);
      function s(e, t, r, n) {
        if (n) {
          var s = n[t];
          if (i(s)) s.unhook && s.unhook(e, t, r);
          else if ("attributes" === t) for (var o in s) e.removeAttribute(o);
          else if ("style" === t) for (var a in s) e.style[a] = "";
          else e[t] = "string" == typeof s ? "" : null;
        }
      }
      function o(e, t, r, i, s) {
        var o = r ? r[i] : void 0;
        if ("attributes" !== i)
          if (o && n(o) && a(o) !== a(s)) e[i] = s;
          else {
            n(e[i]) || (e[i] = {});
            var c = "style" === i ? "" : void 0;
            for (var l in s) {
              var d = s[l];
              e[i][l] = void 0 === d ? c : d;
            }
          }
        else
          for (var u in s) {
            var h = s[u];
            void 0 === h ? e.removeAttribute(u) : e.setAttribute(u, h);
          }
      }
      function a(e) {
        return Object.getPrototypeOf
          ? Object.getPrototypeOf(e)
          : e.__proto__
          ? e.__proto__
          : e.constructor
          ? e.constructor.prototype
          : void 0;
      }
      e.exports = function (e, t, r) {
        for (var a in t) {
          var c = t[a];
          void 0 === c
            ? s(e, a, c, r)
            : i(c)
            ? (s(e, a, c, r), c.hook && c.hook(e, a, r ? r[a] : void 0))
            : n(c)
            ? o(e, t, r, a, c)
            : (e[a] = c);
        }
      };
    },
    7247: (e, t, r) => {
      var n = r(9697),
        i = r(1676),
        s = r(7649),
        o = r(5570),
        a = r(3507),
        c = r(4253);
      e.exports = function e(t, r) {
        var l = (r && r.document) || n,
          d = r ? r.warn : null;
        if (((t = c(t).a), a(t))) return t.init();
        if (o(t)) return l.createTextNode(t.text);
        if (!s(t))
          return d && d("Item is not a valid virtual dom node", t), null;
        var u =
            null === t.namespace
              ? l.createElement(t.tagName)
              : l.createElementNS(t.namespace, t.tagName),
          h = t.properties;
        i(u, h);
        for (var p = t.children, g = 0; g < p.length; g++) {
          var f = e(p[g], r);
          f && u.appendChild(f);
        }
        return u;
      };
    },
    5009: (e) => {
      var t = {};
      function r(e, i, s, o, a) {
        if (((o = o || {}), e)) {
          n(s, a, a) && (o[a] = e);
          var c = i.children;
          if (c)
            for (var l = e.childNodes, d = 0; d < i.children.length; d++) {
              a += 1;
              var u = c[d] || t,
                h = a + (u.count || 0);
              n(s, a, h) && r(l[d], u, s, o, a), (a = h);
            }
        }
        return o;
      }
      function n(e, t, r) {
        if (0 === e.length) return !1;
        for (var n, i, s = 0, o = e.length - 1; s <= o; ) {
          if (((i = e[(n = ((o + s) / 2) | 0)]), s === o))
            return i >= t && i <= r;
          if (i < t) s = n + 1;
          else {
            if (!(i > r)) return !0;
            o = n - 1;
          }
        }
        return !1;
      }
      function i(e, t) {
        return e > t ? 1 : -1;
      }
      e.exports = function (e, t, n, s) {
        return n && 0 !== n.length ? (n.sort(i), r(e, t, n, s, 0)) : {};
      };
    },
    7512: (e, t, r) => {
      var n = r(1676),
        i = r(3507),
        s = r(7646),
        o = r(2296);
      function a(e, t) {
        "function" == typeof t.destroy && i(t) && t.destroy(e);
      }
      e.exports = function (e, t, r) {
        var i = e.type,
          c = e.vNode,
          l = e.patch;
        switch (i) {
          case s.REMOVE:
            return (function (e, t) {
              var r = e.parentNode;
              r && r.removeChild(e);
              return a(e, t), null;
            })(t, c);
          case s.INSERT:
            return (function (e, t, r) {
              var n = r.render(t, r);
              e && e.appendChild(n);
              return e;
            })(t, l, r);
          case s.VTEXT:
            return (function (e, t, r, n) {
              var i;
              if (3 === e.nodeType) e.replaceData(0, e.length, r.text), (i = e);
              else {
                var s = e.parentNode;
                (i = n.render(r, n)), s && i !== e && s.replaceChild(i, e);
              }
              return i;
            })(t, 0, l, r);
          case s.WIDGET:
            return (function (e, t, r, n) {
              var i,
                s = o(t, r);
              i = s ? r.update(t, e) || e : n.render(r, n);
              var c = e.parentNode;
              c && i !== e && c.replaceChild(i, e);
              s || a(e, t);
              return i;
            })(t, c, l, r);
          case s.VNODE:
            return (function (e, t, r, n) {
              var i = e.parentNode,
                s = n.render(r, n);
              i && s !== e && i.replaceChild(s, e);
              return s;
            })(t, 0, l, r);
          case s.ORDER:
            return (
              (function (e, t) {
                for (
                  var r, n, i, s = e.childNodes, o = {}, a = 0;
                  a < t.removes.length;
                  a++
                )
                  (r = s[(n = t.removes[a]).from]),
                    n.key && (o[n.key] = r),
                    e.removeChild(r);
                for (var c = s.length, l = 0; l < t.inserts.length; l++)
                  (r = o[(i = t.inserts[l]).key]),
                    e.insertBefore(r, i.to >= c++ ? null : s[i.to]);
              })(t, l),
              t
            );
          case s.PROPS:
            return n(t, l, c.properties), t;
          case s.THUNK:
            return (function (e, t) {
              e &&
                t &&
                e !== t &&
                e.parentNode &&
                e.parentNode.replaceChild(t, e);
              return t;
            })(t, r.patch(t, l, r));
          default:
            return t;
        }
      };
    },
    4434: (e, t, r) => {
      var n = r(9697),
        i = r(1786),
        s = r(7247),
        o = r(5009),
        a = r(7512);
      function c(e, t, r) {
        var i = (function (e) {
          var t = [];
          for (var r in e) "a" !== r && t.push(Number(r));
          return t;
        })(t);
        if (0 === i.length) return e;
        var s = o(e, t.a, i),
          a = e.ownerDocument;
        r.document || a === n || (r.document = a);
        for (var c = 0; c < i.length; c++) {
          var d = i[c];
          e = l(e, s[d], t[d], r);
        }
        return e;
      }
      function l(e, t, r, n) {
        if (!t) return e;
        var s;
        if (i(r))
          for (var o = 0; o < r.length; o++)
            (s = a(r[o], t, n)), t === e && (e = s);
        else (s = a(r, t, n)), t === e && (e = s);
        return e;
      }
      e.exports = function e(t, r, n) {
        return (
          ((n = n || {}).patch = n.patch && n.patch !== e ? n.patch : c),
          (n.render = n.render || s),
          n.patch(t, r, n)
        );
      };
    },
    2296: (e, t, r) => {
      var n = r(3507);
      e.exports = function (e, t) {
        if (n(e) && n(t))
          return "name" in e && "name" in t ? e.id === t.id : e.init === t.init;
        return !1;
      };
    },
    8160: (e) => {
      "use strict";
      function t(e, r) {
        if (!(this instanceof t)) return new t(e, r);
        (this.namespace = e), (this.value = r);
      }
      (e.exports = t),
        (t.prototype.hook = function (e, t, r) {
          (r &&
            "AttributeHook" === r.type &&
            r.value === this.value &&
            r.namespace === this.namespace) ||
            e.setAttributeNS(this.namespace, t, this.value);
        }),
        (t.prototype.unhook = function (e, t, r) {
          if (
            !r ||
            "AttributeHook" !== r.type ||
            r.namespace !== this.namespace
          ) {
            var n = t.indexOf(":"),
              i = n > -1 ? t.substr(n + 1) : t;
            e.removeAttributeNS(this.namespace, i);
          }
        }),
        (t.prototype.type = "AttributeHook");
    },
    3827: (e, t, r) => {
      "use strict";
      var n = r(914);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        this.value = e;
      }
      (e.exports = i),
        (i.prototype.hook = function (e, t) {
          n(e)[t.substr(3)] = this.value;
        }),
        (i.prototype.unhook = function (e, t) {
          n(e)[t.substr(3)] = void 0;
        });
    },
    889: (e) => {
      "use strict";
      function t(e) {
        if (!(this instanceof t)) return new t(e);
        this.value = e;
      }
      (e.exports = t),
        (t.prototype.hook = function (e, t) {
          e[t] !== this.value && (e[t] = this.value);
        });
    },
    8429: (e, t, r) => {
      "use strict";
      var n = r(1786),
        i = r(1978),
        s = r(9637),
        o = r(7649),
        a = r(5570),
        c = r(3507),
        l = r(758),
        d = r(6811),
        u = r(9027),
        h = r(889),
        p = r(3827);
      function g(e, t, r, i) {
        if ("string" == typeof e) t.push(new s(e));
        else if ("number" == typeof e) t.push(new s(String(e)));
        else if (f(e)) t.push(e);
        else {
          if (!n(e)) {
            if (null == e) return;
            throw (
              ((a = {
                foreignObject: e,
                parentVnode: { tagName: r, properties: i },
              }),
              ((c = new Error()).type =
                "virtual-hyperscript.unexpected.virtual-element"),
              (c.message =
                "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" +
                E(a.foreignObject) +
                ".\nThe parent vnode is:\n" +
                E(a.parentVnode)),
              (c.foreignObject = a.foreignObject),
              (c.parentVnode = a.parentVnode),
              c)
            );
          }
          for (var o = 0; o < e.length; o++) g(e[o], t, r, i);
        }
        var a, c;
      }
      function f(e) {
        return o(e) || a(e) || c(e) || d(e);
      }
      function E(e) {
        try {
          return JSON.stringify(e, null, "    ");
        } catch (t) {
          return String(e);
        }
      }
      e.exports = function (e, t, r) {
        var s,
          o,
          a,
          c,
          d = [];
        !r &&
          ((E = t), "string" == typeof E || n(E) || f(E)) &&
          ((r = t), (o = {}));
        var E;
        (s = u(e, (o = o || t || {}))),
          o.hasOwnProperty("key") && ((a = o.key), (o.key = void 0));
        o.hasOwnProperty("namespace") &&
          ((c = o.namespace), (o.namespace = void 0));
        "INPUT" !== s ||
          c ||
          !o.hasOwnProperty("value") ||
          void 0 === o.value ||
          l(o.value) ||
          (o.value = h(o.value));
        (function (e) {
          for (var t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              if (l(r)) continue;
              "ev-" === t.substr(0, 3) && (e[t] = p(r));
            }
        })(o),
          null != r && g(r, d, s, o);
        return new i(s, o, d, a, c);
      };
    },
    9027: (e, t, r) => {
      "use strict";
      var n = r(8274),
        i = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,
        s = /^\.|#/;
      e.exports = function (e, t) {
        if (!e) return "DIV";
        var r,
          o,
          a,
          c,
          l = !t.hasOwnProperty("id"),
          d = n(e, i),
          u = null;
        s.test(d[1]) && (u = "DIV");
        for (c = 0; c < d.length; c++)
          (o = d[c]) &&
            ((a = o.charAt(0)),
            u
              ? "." === a
                ? (r = r || []).push(o.substring(1, o.length))
                : "#" === a && l && (t.id = o.substring(1, o.length))
              : (u = o));
        r && (t.className && r.push(t.className), (t.className = r.join(" ")));
        return t.namespace ? u : u.toUpperCase();
      };
    },
    4253: (e, t, r) => {
      var n = r(7649),
        i = r(5570),
        s = r(3507),
        o = r(6811);
      function a(e, t) {
        var r = e.vnode;
        if ((r || (r = e.vnode = e.render(t)), !(n(r) || i(r) || s(r))))
          throw new Error("thunk did not return a valid node");
        return r;
      }
      e.exports = function (e, t) {
        var r = e,
          n = t;
        o(t) && (n = a(t, e));
        o(e) && (r = a(e, null));
        return { a: r, b: n };
      };
    },
    6811: (e) => {
      e.exports = function (e) {
        return e && "Thunk" === e.type;
      };
    },
    758: (e) => {
      e.exports = function (e) {
        return (
          e &&
          (("function" == typeof e.hook && !e.hasOwnProperty("hook")) ||
            ("function" == typeof e.unhook && !e.hasOwnProperty("unhook")))
        );
      };
    },
    7649: (e, t, r) => {
      var n = r(3084);
      e.exports = function (e) {
        return e && "VirtualNode" === e.type && e.version === n;
      };
    },
    5570: (e, t, r) => {
      var n = r(3084);
      e.exports = function (e) {
        return e && "VirtualText" === e.type && e.version === n;
      };
    },
    3507: (e) => {
      e.exports = function (e) {
        return e && "Widget" === e.type;
      };
    },
    3084: (e) => {
      e.exports = "2";
    },
    1978: (e, t, r) => {
      var n = r(3084),
        i = r(7649),
        s = r(3507),
        o = r(6811),
        a = r(758);
      e.exports = d;
      var c = {},
        l = [];
      function d(e, t, r, n, d) {
        (this.tagName = e),
          (this.properties = t || c),
          (this.children = r || l),
          (this.key = null != n ? String(n) : void 0),
          (this.namespace = "string" == typeof d ? d : null);
        var u,
          h = (r && r.length) || 0,
          p = 0,
          g = !1,
          f = !1,
          E = !1;
        for (var m in t)
          if (t.hasOwnProperty(m)) {
            var v = t[m];
            a(v) && v.unhook && (u || (u = {}), (u[m] = v));
          }
        for (var C = 0; C < h; C++) {
          var y = r[C];
          i(y)
            ? ((p += y.count || 0),
              !g && y.hasWidgets && (g = !0),
              !f && y.hasThunks && (f = !0),
              E || (!y.hooks && !y.descendantHooks) || (E = !0))
            : !g && s(y)
            ? "function" == typeof y.destroy && (g = !0)
            : !f && o(y) && (f = !0);
        }
        (this.count = h + p),
          (this.hasWidgets = g),
          (this.hasThunks = f),
          (this.hooks = u),
          (this.descendantHooks = E);
      }
      (d.prototype.version = n), (d.prototype.type = "VirtualNode");
    },
    7646: (e, t, r) => {
      var n = r(3084);
      function i(e, t, r) {
        (this.type = Number(e)), (this.vNode = t), (this.patch = r);
      }
      (i.NONE = 0),
        (i.VTEXT = 1),
        (i.VNODE = 2),
        (i.WIDGET = 3),
        (i.PROPS = 4),
        (i.ORDER = 5),
        (i.INSERT = 6),
        (i.REMOVE = 7),
        (i.THUNK = 8),
        (e.exports = i),
        (i.prototype.version = n),
        (i.prototype.type = "VirtualPatch");
    },
    9637: (e, t, r) => {
      var n = r(3084);
      function i(e) {
        this.text = String(e);
      }
      (e.exports = i),
        (i.prototype.version = n),
        (i.prototype.type = "VirtualText");
    },
    6142: (e, t, r) => {
      var n = r(7203),
        i = r(758);
      function s(e) {
        return Object.getPrototypeOf
          ? Object.getPrototypeOf(e)
          : e.__proto__
          ? e.__proto__
          : e.constructor
          ? e.constructor.prototype
          : void 0;
      }
      e.exports = function e(t, r) {
        var o;
        for (var a in t) {
          a in r || ((o = o || {})[a] = void 0);
          var c = t[a],
            l = r[a];
          if (c !== l)
            if (n(c) && n(l))
              if (s(l) !== s(c)) (o = o || {})[a] = l;
              else if (i(l)) (o = o || {})[a] = l;
              else {
                var d = e(c, l);
                d && ((o = o || {})[a] = d);
              }
            else (o = o || {})[a] = l;
        }
        for (var u in r) u in t || ((o = o || {})[u] = r[u]);
        return o;
      };
    },
    353: (e, t, r) => {
      var n = r(1786),
        i = r(7646),
        s = r(7649),
        o = r(5570),
        a = r(3507),
        c = r(6811),
        l = r(4253),
        d = r(6142);
      function u(e, t) {
        var r = { a: e };
        return h(e, t, r, 0), r;
      }
      function h(e, t, r, n) {
        if (e !== t) {
          var l = r[n],
            u = !1;
          if (c(e) || c(t)) f(e, t, r, n);
          else if (null == t)
            a(e) || (p(e, r, n), (l = r[n])), (l = C(l, new i(i.REMOVE, e, t)));
          else if (s(t))
            if (s(e))
              if (
                e.tagName === t.tagName &&
                e.namespace === t.namespace &&
                e.key === t.key
              ) {
                var g = d(e.properties, t.properties);
                g && (l = C(l, new i(i.PROPS, e, g))),
                  (l = (function (e, t, r, n, o) {
                    for (
                      var a = e.children,
                        c = (function (e, t) {
                          var r = v(t),
                            n = r.keys,
                            i = r.free;
                          if (i.length === t.length)
                            return { children: t, moves: null };
                          var s = v(e),
                            o = s.keys;
                          if (s.free.length === e.length)
                            return { children: t, moves: null };
                          for (
                            var a = [], c = 0, l = i.length, d = 0, u = 0;
                            u < e.length;
                            u++
                          ) {
                            var h,
                              p = e[u];
                            p.key
                              ? n.hasOwnProperty(p.key)
                                ? ((h = n[p.key]), a.push(t[h]))
                                : ((h = u - d++), a.push(null))
                              : c < l
                              ? ((h = i[c++]), a.push(t[h]))
                              : ((h = u - d++), a.push(null));
                          }
                          for (
                            var g = c >= i.length ? t.length : i[c], f = 0;
                            f < t.length;
                            f++
                          ) {
                            var E = t[f];
                            E.key
                              ? o.hasOwnProperty(E.key) || a.push(E)
                              : f >= g && a.push(E);
                          }
                          for (
                            var C, y = a.slice(), w = 0, _ = [], S = [], I = 0;
                            I < t.length;

                          ) {
                            var k = t[I];
                            for (C = y[w]; null === C && y.length; )
                              _.push(m(y, w, null)), (C = y[w]);
                            C && C.key === k.key
                              ? (w++, I++)
                              : k.key
                              ? (C && C.key && n[C.key] !== I + 1
                                  ? (_.push(m(y, w, C.key)),
                                    (C = y[w]) && C.key === k.key
                                      ? w++
                                      : S.push({ key: k.key, to: I }))
                                  : S.push({ key: k.key, to: I }),
                                I++)
                              : C && C.key && _.push(m(y, w, C.key));
                          }
                          for (; w < y.length; )
                            (C = y[w]), _.push(m(y, w, C && C.key));
                          if (_.length === d && !S.length)
                            return { children: a, moves: null };
                          return {
                            children: a,
                            moves: { removes: _, inserts: S },
                          };
                        })(a, t.children),
                        l = c.children,
                        d = a.length,
                        u = l.length,
                        p = d > u ? d : u,
                        g = 0;
                      g < p;
                      g++
                    ) {
                      var f = a[g],
                        E = l[g];
                      (o += 1),
                        f
                          ? h(f, E, r, o)
                          : E && (n = C(n, new i(i.INSERT, null, E))),
                        s(f) && f.count && (o += f.count);
                    }
                    c.moves && (n = C(n, new i(i.ORDER, e, c.moves)));
                    return n;
                  })(e, t, r, l, n));
              } else (l = C(l, new i(i.VNODE, e, t))), (u = !0);
            else (l = C(l, new i(i.VNODE, e, t))), (u = !0);
          else
            o(t)
              ? o(e)
                ? e.text !== t.text && (l = C(l, new i(i.VTEXT, e, t)))
                : ((l = C(l, new i(i.VTEXT, e, t))), (u = !0))
              : a(t) && (a(e) || (u = !0), (l = C(l, new i(i.WIDGET, e, t))));
          l && (r[n] = l), u && p(e, r, n);
        }
      }
      function p(e, t, r) {
        E(e, t, r), g(e, t, r);
      }
      function g(e, t, r) {
        if (a(e))
          "function" == typeof e.destroy &&
            (t[r] = C(t[r], new i(i.REMOVE, e, null)));
        else if (s(e) && (e.hasWidgets || e.hasThunks))
          for (var n = e.children, o = n.length, l = 0; l < o; l++) {
            var d = n[l];
            g(d, t, (r += 1)), s(d) && d.count && (r += d.count);
          }
        else c(e) && f(e, null, t, r);
      }
      function f(e, t, r, n) {
        var s = l(e, t),
          o = u(s.a, s.b);
        (function (e) {
          for (var t in e) if ("a" !== t) return !0;
          return !1;
        })(o) && (r[n] = new i(i.THUNK, null, o));
      }
      function E(e, t, r) {
        if (s(e)) {
          if (
            (e.hooks &&
              (t[r] = C(
                t[r],
                new i(
                  i.PROPS,
                  e,
                  (function (e) {
                    var t = {};
                    for (var r in e) t[r] = void 0;
                    return t;
                  })(e.hooks)
                )
              )),
            e.descendantHooks || e.hasThunks)
          )
            for (var n = e.children, o = n.length, a = 0; a < o; a++) {
              var l = n[a];
              E(l, t, (r += 1)), s(l) && l.count && (r += l.count);
            }
        } else c(e) && f(e, null, t, r);
      }
      function m(e, t, r) {
        return e.splice(t, 1), { from: t, key: r };
      }
      function v(e) {
        for (var t = {}, r = [], n = e.length, i = 0; i < n; i++) {
          var s = e[i];
          s.key ? (t[s.key] = i) : r.push(i);
        }
        return { keys: t, free: r };
      }
      function C(e, t) {
        return e ? (n(e) ? e.push(t) : (e = [e, t]), e) : t;
      }
      e.exports = u;
    },
    1786: (e) => {
      var t = Array.isArray,
        r = Object.prototype.toString;
      e.exports =
        t ||
        function (e) {
          return "[object Array]" === r.call(e);
        };
    },
    542: () => {},
  },
  (e) => {
    var t,
      r = ((t = 3647), e((e.s = t))),
      n = (CE2 = "undefined" == typeof CE2 ? {} : CE2);
    for (var i in r) n[i] = r[i];
    r.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
  },
]);
if (
  (CE2.benchmark.start("navigation|crazyegg|common"),
  CE2.benchmark.start("navigation|crazyegg|common|start"),
  (CE2.start = function () {
    CE2.domReadySetup(),
      CE2.onDOMReady(() => {
        CE2.benchmark.stop("navigation|crazyegg|common|start"),
          CE2.userDataMain();
      });
  }),
  CE2.data && CE2.data.error_tracking)
)
  try {
    CE2.debug("[Loading] Starting Error Tracking"), CE2.errorTracking.listen();
  } catch (a) {
    CE2.debug(a);
  }
CE2.autoStart ? CE2.start() : CE2.debug("[Loading] Autostart disabled"),
  "function" == typeof CE_READY
    ? CE2.onDOMReady(CE_READY)
    : "object" == typeof CE_READY &&
      CE2.onDOMReady(() => {
        CE2.each(CE_READY, (a) => {
          if ("function" == typeof a)
            try {
              a();
            } catch (a) {
              CE2.debug("[Loading] CE2.userMain error:"), CE2.debug(a);
            }
        });
      });