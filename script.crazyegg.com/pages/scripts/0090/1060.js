if (((CE_USER_SCRIPT = !0), "object" == typeof CE2 && (CE2.uid || CE2.data)))
  throw Error("CE: multiple userscripts installed");
if (
  (((CE2 = "undefined" == typeof CE2 ? {} : CE2).userDataToJs = function (e) {
    for (
      var t = [
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
        ],
        a = 0;
      a < t.length;
      a++
    ) {
      var r = t[a];
      CE2.data[r[1]] && (CE2[r[0]] = CE2.data[r[1]]);
    }
    CE2.data.recordings_dest &&
      (CE2.SREC_DEST = {
        record: CE2.data.recordings_dest,
        sample: CE2.data.recordings_sampling_dest,
      });
  }),
  "undefined" == typeof CE_USER_DATA &&
    (CE_USER_SITE_DATA_URL =
      "https://script.crazyegg.com/pages/data-scripts/0090/1060/site/SITENAME.json"),
  "undefined" == typeof CE_USER_DATA_URL &&
    "undefined" != typeof CE_USER_SITE_DATA_URL &&
    CE_USER_SITE_DATA_URL &&
    (CE_USER_DATA_URL = CE_USER_SITE_DATA_URL.replace(
      "SITENAME",
      window.location.host
    )),
  (CE2.debugEnabled = function () {
    return (
      ("undefined" != typeof CE_DEBUG && CE_DEBUG) ||
      !!~window.location.href.indexOf("ced=2cd0b074a2861f729a302fed9ea70905")
    );
  }),
  (CE2.debug = function (e) {
    if (!CE2.debugEnabled()) return !1;
    e = "string" == typeof e ? "CE: " + e : e;
    console.log(e);
  }),
  (CE2.benchmarks = []),
  (CE2.benchmark = {
    start: (t, e = []) => {
      CE2.benchmark.stopped ||
        CE2.benchmarks.find((e) => e.name === t) ||
        CE2.benchmarks.push({ name: t, tags: e, startedAt: new Date() });
    },
    stop: (t) => {
      var e;
      CE2.benchmark.stopped ||
        ((e = CE2.benchmarks.find((e) => e.name === t)) &&
          !e.diff &&
          (e.diff = +new Date() - +e.startedAt));
    },
    report: () => {
      (CE2.benchmarks = []), (CE2.benchmark.stopped = !0);
    },
  }),
  (CE2.runLoadedScriptCallbacks = function (e) {
    for (var t; (t = CE2.LOADED_SCRIPTS_CALLBACKS[e].shift()); ) t();
  }),
  (CE2.loadScript = function (e, t) {
    var a,
      r = e.match(/versioned\/(.+?)-scripts/);
    let n = r ? r[1] : "unknown";
    return (
      CE2.benchmark.start("navigation|crazyegg|load-" + n),
      CE2.LOADED_SCRIPTS || (CE2.LOADED_SCRIPTS = []),
      CE2.INCLUDED_SCRIPTS || (CE2.INCLUDED_SCRIPTS = []),
      CE2.LOADED_SCRIPTS_CALLBACKS || (CE2.LOADED_SCRIPTS_CALLBACKS = {}),
      CE2.LOADED_SCRIPTS_CALLBACKS[e] || (CE2.LOADED_SCRIPTS_CALLBACKS[e] = []),
      t && CE2.LOADED_SCRIPTS_CALLBACKS[e].push(t),
      ~CE2.LOADED_SCRIPTS.indexOf(e)
        ? CE2.runLoadedScriptCallbacks(e)
        : ~CE2.INCLUDED_SCRIPTS.indexOf(e)
        ? void 0
        : (((a = document.createElement("script")).src = e),
          (a.type = "text/javascript"),
          (a.async = !0),
          (r =
            document.getElementsByTagName("script")[0]).parentNode.insertBefore(
            a,
            r
          ),
          (a.onload = a.onreadystatechange =
            function () {
              (a.readyState && !/complete|loaded/.test(a.readyState)) ||
                (CE2.benchmark.stop("navigation|crazyegg|load-" + n),
                CE2.LOADED_SCRIPTS.push(e),
                CE2.runLoadedScriptCallbacks(e),
                (a.onload = null),
                (a.onreadystatechange = null));
            }),
          CE2.INCLUDED_SCRIPTS.push(e),
          !1)
    );
  }),
  (CE2.loadCommonScript = function (e) {
    if (CE2.userMain) return e();
    CE2.loadScript(CE2.data.common_script_url, e);
  }),
  (CE2.loadTrackingScript = function (e) {
    if (CE2.V11Tracker) return e();
    CE2.loadScript(CE2.data.tracking_script_url, e);
  }),
  (CE2.loadSessionTrackingScript = function (e) {
    if (CE2.pageState) return e();
    CE2.loadScript(CE2.data.trackingpagestate_script_url, function () {
      CE2.loadTrackingScript(e);
    });
  }),
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
  (CE2.isNativeFunction = function (e) {
    return (
      !!e && /\{\s+\[native code\]/.test(Function.prototype.toString.call(e))
    );
  }),
  (CE2.cleanPrototype = function (e) {
    var t, a;
    return (
      "undefined" == typeof window
        ? CE2.s
        : ((t = "ce_proto_iframe"),
          (a = document.getElementById(t)) ||
            (((a = document.createElement("iframe")).id = t),
            (a.title = "CrazyEgg Tracking iframe"),
            (a.style.display = "none"),
            document.documentElement.appendChild(a)),
          a.contentWindow)
    )[e];
  }),
  (CE2.getNativeXMLHttpRequest = function () {
    return new (
      CE2.isNativeFunction(XMLHttpRequest.prototype.send)
        ? XMLHttpRequest
        : CE2.cleanPrototype("XMLHttpRequest")
    )();
  }),
  (CE2.afterUserDataLoaded = function () {
    var e;
    "undefined" != typeof CE_LOCAL_SCRIPT_HOST &&
      ((CE2.data.common_script_url =
        CE_LOCAL_SCRIPT_HOST +
        "/pages/versioned/common-scripts-source/latest.js"),
      (CE2.data.transformations_script_url =
        CE_LOCAL_SCRIPT_HOST +
        "/pages/versioned/transformations-scripts-source/latest.js"),
      (CE2.data.tracking_script_url =
        CE_LOCAL_SCRIPT_HOST +
        "/pages/versioned/tracking-scripts-source/latest.js"),
      (CE2.data.trackingpagestate_script_url =
        CE_LOCAL_SCRIPT_HOST +
        "/pages/versioned/trackingpagestate-scripts-source/latest.js")),
      window.CE_USER_COMMON_SCRIPT_URL ||
        ((window.CE_USER_COMMON_SCRIPT_URL = CE2.data.common_script_url),
        (window.CE_USER_THIRDPARTY_SCRIPT_URL =
          CE2.data.thirdparty_script_url)),
      CE2.userDataToJs(CE2.data),
      "ok" === CE2.data.status
        ? CE2.loadCommonScript()
        : (e = document.location.hash.match(/#ce-(?:survey|cta)-(.+)/)) && e[1]
        ? ((CE2.commonScriptForceLoaded = !0), CE2.loadCommonScript())
        : CE2.checkLoadCommonScript();
  }),
  (CE2.loadUserData = function (e) {
    CE2.benchmark.start("navigation|crazyegg|load-userdata"),
      (CE2.userDataStatus = "loading");
    var t = CE2.getNativeXMLHttpRequest();
    (t.onreadystatechange = function () {
      if (4 == t.readyState)
        try {
          200 == t.status &&
            t.responseText &&
            ((CE2.data = JSON.parse(t.responseText)),
            CE2.benchmark.stop("navigation|crazyegg|load-userdata"),
            CE2.afterUserDataLoaded(),
            (CE2.userDataStatus = "ok"));
        } catch (e) {
          CE2.debug("Error loading user data: " + e.message);
        }
    }),
      CE2.debug("[Loading] User data", CE_USER_DATA_URL),
      t.open("GET", CE_USER_DATA_URL + "?t=" + CE2.getUserDataTime(), !0),
      t.send();
  }),
  (CE2.loadUserDataInline = function () {
    CE2.debug("[Loading] User data inline"),
      (CE2.data = JSON.parse(CE_USER_DATA)),
      CE2.afterUserDataLoaded(),
      (CE2.userDataStatus = "ok");
  }),
  (CE2.checkLoadCommonScript = function () {
    window.opener &&
      window.addEventListener("message", function e(t) {
        try {
          t.source === window.opener &&
            ((a = t.origin),
            (r = CE2.data),
            a === r.ce_app_url ||
              ~((r.hud && r.hud.launch_origins) || []).indexOf(a) ||
              ~(
                r.survey_launch_origins ||
                r.addon_launch_origins ||
                []
              ).indexOf(a)) &&
            ((CE2.commonScriptForceLoaded = !0),
            CE2.loadCommonScript(),
            window.removeEventListener("message", e));
        } catch (e) {
          CE2.debug(e);
        }
        var a, r;
      });
  }),
  0 === CE2.benchmarks.length &&
    performance.timeOrigin &&
    (CE2.benchmarks.push({
      name: "navigation",
      startedAt: Math.trunc(performance.timeOrigin),
    }),
    CE2.benchmark.start("navigation|crazyegg")),
  CE2.debug("[Loading] Boot"),
  CE2.userDataStatus)
)
  throw Error("CE: multiple userscripts installed");
"undefined" != typeof CE_USER_DATA_URL && CE_USER_DATA_URL
  ? CE2.loadUserData()
  : "undefined" != typeof CE_USER_DATA && CE_USER_DATA
  ? CE2.loadUserDataInline()
  : CE2.debugEnabled() && CE2.debug("Missing CE_USER_DATA_URL");
