"use strict";
(self.webpackChunk_klaviyo_onsite_modules =
  self.webpackChunk_klaviyo_onsite_modules || []).push([
  [5430],
  {
    24364: function (t, o, s) {
      o.Z = ({ tracking: t }) => {
        var o;
        const i = t
            ? "https://static-tracking.klaviyo.com/onsite/js/"
            : "https://static.klaviyo.com/onsite/js/",
          n =
            null == (o = window.klaviyoModulesObject) ? void 0 : o.assetSource;
        s.p = n ? `${i}${n}` : i;
      };
    },
    91174: function (t, o, s) {
      var i = s(24364);
      s(69899);
      (0, i.Z)({ tracking: !1 });
    },
  },
  function (t) {
    t.O(0, [2462], function () {
      return (o = 91174), t((t.s = o));
      var o;
    });
    t.O();
  },
]);
