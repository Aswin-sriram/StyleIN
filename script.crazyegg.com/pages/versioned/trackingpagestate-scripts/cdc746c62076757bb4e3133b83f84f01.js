(globalThis.webpackChunkCE2 = globalThis.webpackChunkCE2 || []).push([
  [202, 848],
  {
    9948: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { pageState: () => T });
      const n = {
        tagsOfIgnoredDocHeadElements: ["script", "noscript"],
        tagsOfIgnoredDocBodyElements: ["script", "meta", "noscript"],
      };
      var s = r(5512),
        a = r.n(s);
      function o() {
        return a()(
          '/*! For license information please see diff.worker.worker.js.LICENSE.txt */\n(()=>{var e={22:()=>{!function(e){var t=e.CE2BH={};function r(){return t.extends=r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}t.defineProperty=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},t.extends=r,t.objectWithoutPropertiesLoose=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}}("undefined"==typeof window?self:window)}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{"use strict";r(22);function e(){if(!(this instanceof e))return new e;this.boundary=`------RWWorkerFormDataBoundary${Math.random().toString(36)}`;const t=this.data=[];this.__append=function(e){let r,n=0;if("string"==typeof e)for(r=e.length;n<r;++n)t.push(255&e.charCodeAt(n));else if(e&&e.byteLength){"byteOffset"in e||(e=new Uint8Array(e));for(r=e.byteLength;n<r;++n)t.push(255&e[n])}}}e.prototype.append=function(e,t,r){if(this.__endedMultipart&&(this.data.length-=this.boundary.length+6,this.__endedMultipart=!1),arguments.length<2)throw new SyntaxError("Not enough arguments");let n=`--${this.boundary}\\r\\nContent-Disposition: form-data; name="${e}"`;if("undefined"!=typeof File&&t instanceof File||"undefined"!=typeof Blob&&t instanceof Blob)return this.append(e,new Uint8Array((new FileReaderSync).readAsArrayBuffer(t)),r||t.name);"number"==typeof t.byteLength?(n+=`; filename="${(r||"blob").replace(/"/g,"%22")}"\\r\\n`,n+="Content-Type: application/octet-stream\\r\\n\\r\\n",this.__append(n),this.__append(t),n="\\r\\n"):n+=`\\r\\n\\r\\n${t}\\r\\n`,this.__append(n)};const t=e;function n(e){return!e.status||429===e.status||e.status>=500&&e.status<600}function s(e,r,a,i,o=0){const u=new XMLHttpRequest;u.onreadystatechange=function(){u.readyState==XMLHttpRequest.DONE&&(n(u)&&o<5?setTimeout((()=>{s(e,r,a,i,o+1)}),1e3):n(u)?i(u.status?u:{status:"network-error"}):a(u))},u.open("POST",e,!0),r instanceof t&&(r.__endedMultipart||r.__append(`--${r.boundary}--\\r\\n`),r.__endedMultipart=!0,u.setRequestHeader("Content-type",`multipart/form-data; boundary=${r.boundary}`),r=new Uint8Array(r.data)),u.send(r)}const a={post:function(e,t,r,n){return s(e,t,r,n)},get(e,t){const r={};return t&&(r.Authorization=`Bearer ${t}`),function(e,t){return Promise.race([fetch(e,t),new Promise(((e,t)=>setTimeout((()=>t(new Error("timeout"))),1e4)))])}(e,{method:"GET",mode:"cors",headers:r})}},i=["a","c","n","ns","p","t","i"];let o=!1;const u=100;let p,d,f,l={},c=[],g=[];function m(){if(d)return;let e=g.shift();e&&function(e){const{splitResult:r,timestamp:n,visitID:s,apiHost:o}=e;let u=l[r.page_url];const c=()=>{y({type:"success",state:e})},g=h(r);if(g)!u||u.md5===r.md5&&p===s||(r.debug.push(`PageState upload skipped existing on capturer ${r.page_url} ${r.md5}`),r.prefix=g.prefix,c());else{d=!0;let n=r.content;if(u){const t=(m=u.content,b=n,jsondiffpatch.create({cloneDiffValues:!0}).diff(self.JSON.parse(m),self.JSON.parse(b)));try{const r=jsondiffpatch.create({cloneDiffValues:!0}).patch(self.JSON.parse(u.content),self.JSON.parse(self.JSON.stringify(t)));e.valid=md5(self.JSON.stringify(r,i)).toString()}catch(t){r.debug.push(`verification of diff failed: ${r.md5} : ${t.message}`),e.valid="error"}e.valid!==r.md5?(n=r.content,u=void 0):n=self.JSON.stringify(t)}const s=CE2libs.compress(n),p=t=>{const r=t.status?`Unexpected status ${t.status}`:t.message;y({type:"error",error:{status:t.status||"error",resource:"api",message:r},state:e})},l=t=>{const r=t.status?`Unexpected status ${t.status}`:t.message;y({type:"error",error:{status:t.status||"error",resource:"s3",message:r},state:e})};if("TESTMODE"===o)return c();a.post(function(e,t,r,n){let s=`${e}/page-states?md5=${t.md5}&url=${t.page_url}&uid=${t.uid}&tk=${f}`;r&&(s+=`&parent_md5=${r.md5}`);void 0!==n&&(s+=`&valid=${n}`);return s}(o,r,u),null,(e=>{try{if(200===e.status&&e.responseText){const n=JSON.parse(e.responseText);if(r.prefix=n.prefix,n.url){const e=new t;for(let t=0,r=Object.entries(n.fields);t<r.length;t++){const[n,s]=r[t];e.append(n,s)}e.append("file",s),a.post(n.url,e,(e=>{204===e.status?(r.debug.push(`PageState upload new ${r.page_url} ${r.md5}`),c()):l(e)}),l)}else r.debug.push(`PageState upload skipped existing on s3 ${r.page_url} ${r.md5}`),c()}else p(e)}catch(e){p(e)}}),p)}var m,b}(e)}function h(e){for(let t=0,r=c;t<r.length;t++){const n=r[t];if(n.md5===e.md5&&n.page_url===e.page_url)return n}}function y(e){const{splitResult:t,timestamp:r,visitID:n,valid:s}=e.state,{page_url:a,md5:i,prefix:o,debug:f}=t,g={page_url:a,md5:i,prefix:o,timestamp:r,visitID:n,debug:f,valid:s};"success"===e.type?(!function(e){c.length>u&&(c=c.slice(1)),h(e)||c.push({page_url:e.page_url,md5:e.md5,prefix:e.prefix})}(t),p=n,l[a]=t,postMessage({type:"success",state:g})):"error"===e.type&&postMessage({type:"error",error:e.error,state:g}),d=!1,setTimeout(m,1)}self.onmessage=e=>{if(!o&&e.data.initialize)return self.importScripts(e.data.initialize.thirdPartyScriptUrl),"undefined"==typeof md5&&(self.md5=CryptoJS.MD5),o=!0,void(f=e.data.initialize.trackingKey);g.push(e.data),m()}})()})();',
          "Worker",
          void 0,
          void 0
        );
      }
      function i() {
        return a()(
          '/*! For license information please see state.worker.worker.js.LICENSE.txt */\n(()=>{var e={22:()=>{!function(e){var t=e.CE2BH={};function r(){return t.extends=r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},r.apply(this,arguments)}t.defineProperty=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},t.extends=r,t.objectWithoutPropertiesLoose=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}}("undefined"==typeof window?self:window)}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}(()=>{"use strict";r(22);const e=["class"],t={a:["href","target"],area:["coords","shape","type","target","alt","href","hreflang","media","rel"],audio:["controls","autoplay","loop","muted","src","preload"],base:["href","target"],bdo:["dir"],blockquote:["cite"],button:["type","value"],col:["span"],colgroup:["span"],data:["value"],del:["cite","datetime"],details:["open"],dialog:["open"],embed:["src","type"],iframe:["src","sandbox","srcdoc"],img:["src","alt","srcset","sizes","crossorigin"],input:["type","name","value","checked","src"],ins:["cite","datetime"],label:["for"],li:["value"],max:["value","high","low","optimum","max","min"],meta:["name","content","charset","http-equiv"],object:["data"],ol:["type","start","reversed"],optgroup:["label"],option:["value","selected","label"],progress:["value","max"],select:["value"],source:["src","type","srcset","media","sizes"],td:["colspan","rowspan","headers"],textarea:["name","cols","rows","wrap"],th:["colspan","rowspan","scope","sorted","abbr","headers"],time:["datetime"],video:["controls","autoplay","loop","muted","poster","src","preload"],style:["media","type"],link:["rel","href","media","crossorigin","referrerpolicy"]};function a(r){let a=t[r]||[];return"style"===r||"link"===r?a:e.concat(a)}const s={a:0,address:1,area:2,article:3,aside:4,audio:5,base:6,bdi:7,bdo:8,blockquote:9,body:10,button:11,canvas:12,caption:13,cite:14,col:15,colgroup:16,data:17,datalist:18,dd:19,del:20,details:21,dfn:22,dialog:23,div:24,dl:25,dt:26,em:27,embed:28,fieldset:29,figure:30,footer:31,form:32,h1:33,h2:34,h3:35,h4:36,h5:37,h6:38,head:39,header:40,hgroup:41,hr:42,i:43,iframe:44,input:45,ins:46,keygen:47,label:48,legend:49,li:50,link:51,main:52,map:53,mark:54,menu:55,menuitem:56,meta:57,meter:58,nav:59,noscript:60,object:61,ol:62,optgroup:63,option:64,output:65,param:66,pre:67,progress:68,q:69,rb:70,rp:71,rt:72,rtc:73,ruby:74,s:75,script:76,section:77,select:78,small:79,source:80,span:81,strong:82,style:83,sub:84,summary:85,sup:86,table:87,tbody:88,td:89,template:90,textarea:91,tfoot:92,th:93,thead:94,time:95,tr:96,track:97,u:98,ul:99,var:100,video:101,html:102,"#shadowroot":103},o=["a","c","n","ns","p","t","i"];class l{constructor(e){this._state=e}process(){const e=this.convertToFiles();return{md5:this.calculateMD5(e),pathMd5:this.calculateMD5(this._state.path),content:e}}convertToFiles(){return this._getHtmlObject()}calculateMD5(e){return md5(e)}handleUrlProps(e,t,r){return t&&0===t.indexOf("data:")&&"img"===r?`/data-urls/${t.length}`:t}_handleElmCss(e){let t=e.t,r="";if("text"===e.t)return{p:e.p};{r=[];const o=[],l=[];let n=a(t),i=null;n.forEach(((a,s)=>{void 0!==e.p[a]?(i=null,/^javascript:/i.test(e.p[a].value)||r.push(this.handleUrlProps(a,e.p[a].value,t))):(null===i&&(i=s),r.push("_"))})),null!==i&&(r=r.slice(0,i)),"style"!==t&&"link"!==t&&Object.keys(e.p).forEach((r=>{-1!==n.indexOf(r)||"data-ce-key"===r||/^on/i.test(r)||/^javascript:/i.test(e.p[r].value)||(e.p[r].ns?l.push(`${e.p[r].ns}=${r}=${e.p[r].value}`):o.push(`${r}=${this.handleUrlProps(r,e.p[r].value,t)}`))}));const c={t:void 0===s[t]?t:s[t]};return r&&r.length>0&&(c.p=r),o&&o.length>0&&(c.a=o),l&&l.length>0&&(c.ns=l),e.ns&&(c.n=e.ns),e.i&&(c.i=e.i),c}}_recursiveWalk(e){let t;return t=this._handleElmCss(e),e.c&&e.c.length>0&&(t.c=e.c.map((e=>this._recursiveWalk(e)))),t}_getHtmlObject(){let e=this._recursiveWalk(this._state.html);return self.JSON.stringify(e,o)}}let n=!1;self.onmessage=e=>{if(!n&&e.data.initialize)return self.importScripts(e.data.initialize.thirdPartyScriptUrl),"undefined"==typeof md5&&(self.md5=CryptoJS.MD5),void(n=!0);const{state:t}=e.data;let r=new l(t).process();postMessage(r)}})()})();',
          "Worker",
          void 0,
          void 0
        );
      }
      const l = [
        "top",
        "left",
        "right",
        "bottom",
        "display",
        "visibility",
        "position",
        "margin",
        "float",
        "padding",
        "border",
        "borderStyle",
        "borderWidth",
        "zIndex",
        "clear",
        "tableLayout",
        "transform",
        "order",
        "grid",
        "gridArea",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridColumn",
        "gridColumnEnd",
        "gridColumnGap",
        "gridColumnStart",
        "gridGap",
        "gridRow",
        "gridRowEnd",
        "gridRowGap",
        "gridRowStart",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexFlow",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "justifyContent",
        "alignItems",
        "alignContent",
        "alignSelf",
        "verticalAlign",
      ];
      function d(e, t) {
        if ("undefined" == typeof CE_DEBUG || !CE_DEBUG) return !1;
        let r;
        r = "string" == typeof e ? `CE: ${e}` : e;
        const n = [r];
        t && n.push(t),
          window.console && window.console.log && console.log(...n);
      }
      function c(e, t) {
        if (!("undefined" != typeof CE_DEBUG && CE_DEBUG >= 2)) return !1;
        d(e, t);
      }
      function u(e, t, r) {
        let n;
        r && (t += `,${t} *`);
        const s =
          e.matches ||
          e.matchesSelector ||
          e.msMatchesSelector ||
          e.mozMatchesSelector ||
          e.webkitMatchesSelector ||
          e.oMatchesSelector;
        if (s) return s.call(e, t);
        const a = (
          (e.getRootNode && e.getRootNode()) ||
          e.document ||
          e.ownerDocument
        ).querySelectorAll(t);
        for (n = a.length; n >= 0 && a.item(n) !== e; n--);
        return n > -1;
      }
      let p;
      const h = 1,
        m = 3,
        f = 8;
      function g(e, t) {
        if (!e[t]) throw new Error(`Missing required option ${t}`);
        return e[t];
      }
      class y {
        constructor(e) {
          (this._isHead = !1),
            (this._apiHost =
              "undefined" != typeof CE_TEST_MODE && CE_TEST_MODE
                ? "TESTMODE"
                : g(e, "trackURL")),
            (this._uid = g(e, "uid")),
            (this._getVisitId = g(e, "getVisitId")),
            (this._getUrl = g(e, "getUrl")),
            (this._onPageStateError = g(e, "onPageStateError")),
            (this._onPageState = g(e, "onPageState")),
            (this._thirdPartyScriptUrl =
              e.thirdPartyScriptUrl || CE_USER_THIRDPARTY_SCRIPT_URL),
            (this._censoredElements = (e.censoredElements || []).join(",")),
            (this._hideIframes = e.hideIframes),
            (this._disableMasking = e.disableMasking),
            (this._disableEmailMasking = e.disableEmailMasking),
            (this._stylesheetPerformance = e.stylesheetPerformance),
            (this._diffWorker = new o()),
            this._diffWorker.postMessage({
              initialize: {
                thirdPartyScriptUrl: this._thirdPartyScriptUrl,
                trackingKey: CE2.data.tracking_key,
              },
            }),
            (this._pageStateWorker = new i()),
            this._pageStateWorker.postMessage({
              initialize: { thirdPartyScriptUrl: this._thirdPartyScriptUrl },
            }),
            document.ce_count || (document.ce_count = 1),
            document.ceIds || (document.ceIds = new WeakMap());
        }
        shouldIgnoreElm(e) {
          return (
            e.nodeType === f ||
            (e.nodeType !== m &&
              (e.nodeType !== h ||
                ("HEAD" !== e.tagName &&
                  (!!(
                    (this._isHead &&
                      n.tagsOfIgnoredDocHeadElements &&
                      n.tagsOfIgnoredDocHeadElements.indexOf(
                        e.tagName.toLowerCase()
                      ) > -1) ||
                    (!this._isHead &&
                      n.tagsOfIgnoredDocBodyElements &&
                      n.tagsOfIgnoredDocBodyElements.indexOf(
                        e.tagName.toLowerCase()
                      ) > -1)
                  ) ||
                    ("META" === e.tagName
                      ? "viewport" !== e.name && !e.getAttribute("charset")
                      : "LINK" === e.tagName &&
                        !(
                          e.rel &&
                          e.rel.match &&
                          e.rel.match(/stylesheet/i)
                        ))))))
          );
        }
        handleTextNode(e) {
          let t;
          return (
            (t =
              this._disableMasking || this._disableEmailMasking
                ? e.nodeValue
                : e.nodeValue &&
                  e.nodeValue.replace(
                    /\b([a-zA-Z0-9_\-\.]+)@(([a-zA-Z0-9]+)(\.([a-zA-Z]{2,5})){1,2})\b/g,
                    (e, t, r) =>
                      t.replace(/./g, "*") + "@" + r.replace(/./g, "*")
                  )),
            { t: "text", p: t }
          );
        }
        nodeNamespace(e) {
          return "http://www.w3.org/1999/xhtml" !== e.namespaceURI
            ? e.namespaceURI
            : null;
        }
        cleanup() {
          this._diffWorker.terminate(), this._pageStateWorker.terminate();
        }
        _handleElm(e, t) {
          if (e.nodeType === m) return this.handleTextNode(e);
          if (t) return { t: "#shadowroot", p: {} };
          const r = this.nodeNamespace(e),
            n = { t: r ? e.tagName : e.tagName.toLowerCase(), p: {}, ns: r };
          for (let t = 0; t < e.attributes.length; t++) {
            let r = e.attributes.item(t);
            n.p[r.nodeName] = { value: r.nodeValue, ns: r.namespaceURI };
          }
          return (
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              ((n.p.value = { value: e.value }),
              "INPUT" === e.tagName &&
                (("checkbox" !== e.type && "radio" !== e.type) ||
                  (e.checked
                    ? (n.p.checked = { value: "checked" })
                    : delete n.p.checked))),
            "OPTION" === e.tagName &&
              (e.selected
                ? (n.p.selected = { value: "" })
                : delete n.p.selected),
            "DIALOG" === e.tagName &&
              (!(function (e) {
                const t = e.getBoundingClientRect();
                return (
                  document.elementFromPoint(
                    t.left - 1 > -1 ? t.left - 1 : t.right + 1,
                    t.top - 1 > 0 ? t.top - 1 : t.bottom + 1
                  ) === e
                );
              })(e)
                ? delete n.p.modal
                : (n.p.modal = { value: "" })),
            document.ceIds.has(e) || document.ceIds.set(e, document.ce_count++),
            (n.i = document.ceIds.get(e)),
            n
          );
        }
        censorElement(e, t) {
          const r = {},
            n = getComputedStyle(e);
          if ("none" === n.display) r.style = { value: "display:none;" };
          else {
            let t = "";
            for (let e = 0; e < l.length; e++) {
              const r = l[e];
              n[r] &&
                (t += `${
                  ((s = r),
                  "string" == typeof s
                    ? s
                        .replace(/([a-z\d])([A-Z])/g, "$1_$2")
                        .toLowerCase()
                        .replace(/[ _]/g, "-")
                    : s)
                }:${n[r]};`);
            }
            (t += `width:${e.offsetWidth}px;`),
              (t += `height:${e.offsetHeight}px;`),
              (t += "box-sizing:border-box;"),
              (r.style = { value: t });
          }
          var s;
          return t
            ? ((r.src = { value: e.ce.imgUrl }), { t: "img", p: r })
            : ((r.class = { value: "ce-censored-node" }),
              "IMG" === e.tagName &&
                (r.src = {
                  value:
                    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                }),
              "IFRAME" === e.tagName
                ? this._hideIframes
                  ? ((r.class = { value: "" }),
                    { t: "div", p: r, c: [{ t: "text", p: "" }] })
                  : {
                      t: "div",
                      p: r,
                      c: [{ t: "text", p: "Iframe content not tracked" }],
                    }
                : { t: e.tagName.toLowerCase(), p: r });
        }
        isSafari() {
          return (
            navigator.vendor &&
            navigator.vendor.indexOf("Apple") > -1 &&
            navigator.userAgent &&
            -1 == navigator.userAgent.indexOf("CriOS") &&
            -1 == navigator.userAgent.indexOf("FxiOS")
          );
        }
        hasFullShadowrootSupport() {
          if (void 0 !== p || this.isSafari()) {
            if (void 0 === p) {
              const e = new DOMParser().parseFromString(
                  "<!DOCTYPE html><html><head></head></html>",
                  "text/html"
                ),
                t = e.createElement("style");
              (t.textContent = ":host(.example) { color: black; }"),
                e.getElementsByTagName("head")[0].appendChild(t),
                (p =
                  ":host(.example) { color: black; }" ===
                  t.sheet.rules[0].cssText);
            }
          } else p = !0;
          return p;
        }
        getSheetText(e, t, r) {
          const n = e;
          if (n.ce_cacheCss) return n.ce_cacheCss;
          if (
            r &&
            "STYLE" === r.tagName &&
            t &&
            !this.hasFullShadowrootSupport()
          )
            return r.textContent;
          const s = [];
          if (e)
            for (let t = 0, r = e.cssRules; t < r.length; t++) {
              const e = r[t];
              s.push(e.cssText);
            }
          const a = s.join(" ");
          return this._stylesheetPerformance && (n.ce_cacheCss = a), a;
        }
        recursiveWalk(e, t) {
          if (
            ("HEAD" === e.tagName
              ? (this._isHead = !0)
              : "BODY" === e.tagName && (this._isHead = !1),
            !this._isHead &&
              e.nodeType === h &&
              (void 0 === e.isCensored &&
                (e.isCensored =
                  (!u(e, "[ce-dont-mask]", !0) &&
                    this._censoredElements &&
                    u(e, this._censoredElements)) ||
                  !1),
              e.isCensored))
          )
            return this.censorElement(e);
          if ("IFRAME" === e.tagName) return this.censorElement(e);
          if ("CANVAS" === e.tagName && e.ce && e.ce.imgUrl)
            return this.censorElement(e, !0);
          let r;
          if (((r = this._handleElm(e, e === t)), "STYLE" === e.tagName))
            try {
              return (
                (r.c = [{ t: "text", p: this.getSheetText(e.sheet, t, e) }]), r
              );
            } catch (e) {
              d(e);
            }
          e.shadowRoot instanceof DocumentFragment &&
            ((r.c = []),
            r.c.push(this.recursiveWalk(e.shadowRoot, e.shadowRoot)));
          let n = e.childNodes;
          if (n && n.length > 0) {
            r.c || (r.c = []);
            for (let e = 0; e < n.length; e++)
              this.shouldIgnoreElm(n[e]) ||
                r.c.push(this.recursiveWalk(n[e], t));
          }
          if (
            e instanceof DocumentFragment &&
            e.host &&
            e.host.shadowRoot === e &&
            (r.c || (r.c = []),
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0)
          )
            for (let t = 0, n = e.adoptedStyleSheets; t < n.length; t++) {
              const a = n[t];
              var s = this._handleElm(document.createElement("style"));
              (s.c = [{ t: "text", p: this.getSheetText(a, e) }]), r.c.push(s);
            }
          return r;
        }
        getState() {
          return { html: this.recursiveWalk(document.documentElement) };
        }
        startDiffWorkerQueue(e, t, r) {
          this._diffWorker.postMessage({
            apiHost: this._apiHost,
            splitResult: e,
            timestamp: t,
            visitID: r,
          }),
            (this._diffWorker.onmessage = (e) => {
              if ("error" === e.data.type) this._onPageStateError(e.data);
              else if ("success" === e.data.type) {
                const {
                  page_url: t,
                  prefix: r,
                  md5: n,
                  timestamp: s,
                  visitID: a,
                  debug: o,
                  valid: i,
                } = e.data.state;
                for (let e = 0; e < o.length; e++) {
                  c(o[e]);
                }
                this._onPageState(t, r, n, s, a, i);
              } else
                this._onPageStateError({
                  type: "error",
                  error: { status: "error", message: "Unexpected message" },
                });
            });
        }
        capture(e) {
          if (new URL(this._getUrl()).pathname !== location.pathname) return;
          const t = this._uid || 0,
            r = this._getVisitId(),
            n = +new Date(),
            s = this.getState(),
            a = `${location.protocol}//${location.host}${location.pathname}`;
          try {
            this._pageStateWorker.postMessage({ state: s }),
              (this._pageStateWorker.onmessage = (e) => {
                const s = CE2BH.extends(e.data, {
                  page_url: a,
                  uid: t,
                  debug: [],
                });
                this.startDiffWorkerQueue(s, n, r);
              });
          } catch (e) {
            this._onPageStateError(e);
          }
        }
      }
      const v = [];
      function b(e) {
        window.ce_styleSheetOverridden ||
          ("undefined" != typeof CSSStyleSheet &&
            (["insertRule", "addRule", "deleteRule", "removeRule"].forEach(
              (e) => {
                const t = CSSStyleSheet.prototype[e];
                t &&
                  (CSSStyleSheet.prototype[e] = function () {
                    return (
                      (function (e, t) {
                        v.forEach((r) => {
                          r(e, t);
                        });
                      })(this, e),
                      t.apply(this, arguments)
                    );
                  });
              }
            ),
            (window.ce_styleSheetOverridden = !0))),
          v.push(e);
      }
      const w = {};
      let _,
        E,
        S,
        x,
        k = {};
      function A(e) {
        k[e.type] = !0;
      }
      function C(e) {
        let { key: t, ctrlKey: r, altKey: n, metaKey: s } = e;
        const a = (function (e) {
          const t = e.composedPath && e.composedPath();
          let { target: r } = e;
          return r.shadowRoot && t && t.length > 0 && ([r] = t), r;
        })(e);
        (u(a, "[ce-dont-mask]", !0) ||
          ("INPUT" !== a.tagName && "TEXTAREA" !== a.tagName) ||
          r ||
          n ||
          s ||
          "Enter" === t ||
          "Tab" === t) &&
          A(e);
      }
      function O() {
        A({ type: "loaded" });
      }
      (w.startCapture = function (e = {}) {
        (k = {}),
          !this._stylesheetPerformance &&
            e.stylesheetPerformance &&
            ((this._stylesheetPerformance = !0),
            b((e) => {
              delete e.ce_cacheCss;
            })),
          S || ((S = new y(e)), c("PageState started new capturer")),
          S.capture(),
          window.addEventListener("mousedown", A, !0),
          window.addEventListener("keydown", C, !0),
          window.addEventListener("mousemove", A, !0),
          window.addEventListener("scroll", A, !0),
          window.addEventListener("load", O, !0),
          (E = new MutationObserver((e) => {
            A({ type: "dom" });
          })),
          E.observe(document.documentElement, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          });
        const t = () => {
          const {
            mousedown: e,
            keydown: r,
            mousemove: n,
            scroll: s,
            dom: a,
            loaded: o,
          } = k;
          let i = x !== S._getVisitId();
          i && (x = S._getVisitId()),
            o || i || e || r || (a && (s || n))
              ? (S.capture(), (k = {}))
              : (k.scroll = k.mousemove = !1),
            (_ = setTimeout(t, 700));
        };
        _ = setTimeout(t, 700);
      }),
        (w.stopCapture = function () {
          _ && clearTimeout(_),
            E && E.disconnect(),
            S.cleanup(),
            (_ = null),
            (E = null),
            (S = null),
            window.removeEventListener("mousedown", A, !0),
            window.removeEventListener("keydown", C, !0),
            window.removeEventListener("mousemove", A, !0),
            window.removeEventListener("scroll", A, !0),
            window.removeEventListener("load", O, !0);
        });
      const T = w;
    },
    5512: (e) => {
      "use strict";
      e.exports = function (e, t, r, n) {
        var s = self || window;
        try {
          try {
            var a;
            try {
              a = new s.Blob([e]);
            } catch (t) {
              (a = new (s.BlobBuilder ||
                s.WebKitBlobBuilder ||
                s.MozBlobBuilder ||
                s.MSBlobBuilder)()).append(e),
                (a = a.getBlob());
            }
            var o = s.URL || s.webkitURL,
              i = o.createObjectURL(a),
              l = new s[t](i, r);
            return o.revokeObjectURL(i), l;
          } catch (n) {
            return new s[t](
              "data:application/javascript,".concat(encodeURIComponent(e)),
              r
            );
          }
        } catch (e) {
          if (!n) throw Error("Inline worker is not supported");
          return new s[t](n, r);
        }
      };
    },
  },
  (e) => {
    var t,
      r = ((t = 9948), e((e.s = t))),
      n = (CE2 = "undefined" == typeof CE2 ? {} : CE2);
    for (var s in r) n[s] = r[s];
    r.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
  },
]);
