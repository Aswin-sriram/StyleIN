function _typeof(e) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _typeof(e)
  );
}
function ownKeys(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      o.push.apply(o, r);
  }
  return o;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(o), !0).forEach(function (t) {
          _defineProperty(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
      : ownKeys(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
  }
  return e;
}
function _defineProperty(e, t, o) {
  return (
    (t = _toPropertyKey(t)) in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
function _toPropertyKey(e) {
  var t = _toPrimitive(e, "string");
  return "symbol" == _typeof(t) ? t : t + "";
}
function _toPrimitive(e, t) {
  if ("object" != _typeof(e) || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (void 0 !== o) {
    var r = o.call(e, t || "default");
    if ("object" != _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === t ? String : Number)(e);
}
var KLAVIYO_JS_REGEX =
  /(\/onsite\/js\/([a-zA-Z]{6})\/klaviyo\.js\?company_id=([a-zA-Z0-9]{6}).*|\/onsite\/js\/klaviyo\.js\?company_id=([a-zA-Z0-9]{6}).*)/;
function logFailedKlaviyoJsLoad(e, t, o) {
  var r = {
    metric_group: "onsite",
    events: [
      {
        metric: "klaviyoJsCompanyIdMisMatch",
        log_to_statsd: !0,
        log_to_s3: !0,
        log_to_metrics_service: !1,
        event_details: {
          script: e,
          templated_company_id: t,
          fastly_forwarded: o,
          hostname: window.location.hostname,
        },
      },
    ],
  };
  fetch("https://a.klaviyo.com/onsite/track-analytics?company_id=".concat(t), {
    headers: { accept: "application/json", "content-type": "application/json" },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(r),
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });
}
!(function (e) {
  var t = "WTaNvt",
    o = JSON.parse("[]"),
    r = "true" === "False".toLowerCase();
  if (
    !(
      document.currentScript &&
      document.currentScript instanceof HTMLScriptElement &&
      document.currentScript.src &&
      document.currentScript.src.match(KLAVIYO_JS_REGEX)
    ) ||
    (null !== (e = document.currentScript.src) && void 0 !== e && e.includes(t))
  ) {
    var n = window.klaviyoModulesObject;
    if (
      /musical_ly|bytedance/i.test(navigator.userAgent) &&
      ((window.tikTokEvent = {
        company_id: t,
        kl_key: window.__klKey,
        fastly_forwarded: r,
      }),
      n)
    ) {
      var i = n,
        c = i.companyId,
        a = i.serverSideRendered;
      window.tikTokEvent = _objectSpread(
        _objectSpread({}, window.tikTokEvent),
        {},
        { window_company_id: c, server_side_rendered: a }
      );
    }
    var s = new URL(window.location.href);
    if (
      (s.searchParams.has("crawler") &&
        "tiktok_preloading" === s.searchParams.get("crawler") &&
        (window.tikTokCrawler = { company_id: t, kl_key: window.__klKey }),
      n)
    )
      console.warn(
        "Already loaded for account "
          .concat(n.companyId, ". Skipping account ")
          .concat(t, ".")
      );
    else {
      (window.klKeyCollision =
        window.__klKey && window.__klKey !== t
          ? { companyId: t, klKey: window.__klKey }
          : void 0),
        (window._learnq = window._learnq || []),
        (window.__klKey = window.__klKey || t),
        n ||
          (window._learnq.push(["account", t]),
          (n = {
            companyId: t,
            loadTime: new Date(),
            loadedModules: {},
            loadedCss: {},
            serverSideRendered: !0,
            assetSource: "",
            v2Route: r,
            extendedIdIdentifiers: o,
          }),
          Object.defineProperty(window, "klaviyoModulesObject", {
            value: n,
            enumerable: !1,
          }));
      var d,
        l,
        y,
        p = {},
        u = document,
        f = u.head,
        w = JSON.parse(
          "noModule" in u.createElement("script") ||
            (function () {
              try {
                return new Function('import("")'), !0;
              } catch (e) {
                return !1;
              }
            })()
            ? "{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.630fb519a4470112d591.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.8d136cd44b74e8189276.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.f909012863462ffd75a6.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.e82919a2352d77ce58ea.js?cb\u003D1\u0022]}}"
            : "{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.d2e225d5de416ed03133.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.28446ee8cef515b22f21.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.56917590119c90c97337.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.8e9ba6304fbe10cbad2c.js?cb\u003D1\u0022]}}"
        ),
        _ = n,
        m = _.loadedCss,
        v = _.loadedModules;
      for (d in w)
        if (w.hasOwnProperty(d)) {
          var b = w[d];
          b.js.forEach(function (e) {
            v[e] || (S(e), (v[e] = new Date().toISOString()));
          });
          var k = b.css;
          k &&
            !m[k] &&
            ((l = k),
            (y = void 0),
            ((y = u.createElement("link")).rel = "stylesheet"),
            (y.href = l),
            f.appendChild(y),
            (m[k] = new Date().toISOString()));
        }
    }
  } else {
    console.warn(
      "Not loading ".concat(document.currentScript.src, " for ").concat(t)
    );
    try {
      logFailedKlaviyoJsLoad(document.currentScript.src, t, r);
    } catch (e) {
      console.warn("Error logging klaviyo.js company mismatch");
    }
  }
  function S(e) {
    if (!p[e]) {
      var t = u.createElement("script");
      (t.type = "text/javascript"),
        (t.async = !0),
        (t.src = e),
        (t.crossOrigin = "anonymous"),
        f.appendChild(t),
        (p[e] = !0);
    }
  }
})();
