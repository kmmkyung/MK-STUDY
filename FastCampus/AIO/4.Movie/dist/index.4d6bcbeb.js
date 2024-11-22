// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h4jLA":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _indexJs = require("./routes/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
const root = document.querySelector('#root');
root.append(new (0, _appJsDefault.default)().el);
(0, _indexJsDefault.default)();

},{"./App.js":"2kQhy","./routes/index.js":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJs = require("./core/core.js");
var _headerJs = require("./components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _footerJs = require("./components/Footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
class App extends (0, _coreJs.Component) {
    constructor(){
        super();
    }
    render() {
        const header = new (0, _headerJsDefault.default)().el;
        const footer = new (0, _footerJsDefault.default)().el;
        const routerView = document.createElement('router-view');
        this.el.append(header, routerView, footer);
    }
}
exports.default = App;

},{"./core/core.js":"3SuZC","./components/Header.js":"hsJbF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/Footer.js":"8pPOA"}],"3SuZC":[function(require,module,exports,__globalThis) {
///// Component /////
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
///// Store /////
parcelHelpers.export(exports, "Store", ()=>Store);
class Component {
    constructor(payload = {}){
        const { tagName = 'div', props = {}, state = {} } = payload;
        this.el = document.createElement(tagName) // 컴포넌트의 최상위 요소
        ;
        this.props = props // 컴포넌트가 사용될 때 부모 컴포넌트에서 받는 데이터
        ;
        this.state = state // 컴포넌트 안에서 사용할 데이터
        ;
        this.render();
    }
    render() {
    // ...
    }
}
///// Router /////
// 페이지 렌더링!
function routeRender(routes) {
    // 접속할 때 해시 모드가 아니면(해시가 없으면) /#/로 리다이렉트!
    if (!location.hash) history.replaceState(null, '', '/#/') // (상태, 제목, 주소)
    ;
    const routerView = document.querySelector('router-view');
    const [hash, queryString = ''] = location.hash.split('?') // 물음표를 기준으로 해시 정보와 쿼리스트링을 구분
    ;
    // 1) 쿼리스트링을 객체로 변환해 히스토리의 상태에 저장!
    const query = queryString.split('&').reduce((acc, cur)=>{
        const [key, value] = cur.split('=');
        acc[key] = value;
        return acc;
    }, {});
    history.replaceState(query, '') // (상태, 제목)
    ;
    // 2) 현재 라우트 정보를 찾아서 렌더링!
    const currentRoute = routes.find((route)=>new RegExp(`${route.path}/?$`).test(hash));
    routerView.innerHTML = '';
    routerView.append(new currentRoute.component().el);
    // 3) 화면 출력 후 스크롤 위치 복구!
    window.scrollTo(0, 0);
}
function createRouter(routes) {
    // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
    return function() {
        window.addEventListener('popstate', ()=>{
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        this.state = {} // 상태(데이터)
        ;
        this.observers = {};
        for(const key in state)// 각 상태에 대한 변경 감시(Setter) 설정!
        Object.defineProperty(this.state, key, {
            // Getter(key값을 조희할때)
            get: ()=>state[key],
            // Setter(값을 할당할때)
            set: (val)=>{
                state[key] = val;
                if (Array.isArray(this.observers[key])) this.observers[key].forEach((observer)=>observer(val));
            }
        });
    }
    // 상태 변경 구독!
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) // 이미 등록된 콜백이 있는지 확인!
         ? this.observers[key].push(cb) // 있으면 새로운 콜백 밀어넣기!
         : this.observers[key] = [
            cb
        ] // 없으면 콜백 배열로 할당!
        ;
    // 예시)
    // observers = {
    //   구독할상태이름: [실행할콜백1, 실행할콜백2]
    //   movies: [cb, cb, cb],
    //   message: [cb]
    // }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hsJbF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _svg = require("../data/svg");
var _svgDefault = parcelHelpers.interopDefault(_svg);
class Header extends (0, _core.Component) {
    constructor(){
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/'
                    },
                    {
                        name: 'Movie',
                        href: `#/movie?id=tt4520988`
                    },
                    {
                        name: 'About',
                        href: '#/about'
                    }
                ]
            }
        });
        window.addEventListener('popstate', ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
      <a href='#/' class='logo'><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map((menu)=>{
            const href = menu.href.split('?')[0];
            const hash = location.hash.split('?')[0];
            const isActive = href === hash;
            return `<li><a class='${isActive ? 'active' : ''}' href='${menu.href}'>${menu.name}</a></li>`;
        }).join('')}
        </ul>
      </nav>
      <a href='#/about' class='user logo-svg'></a>
    `;
        const logoSvg = this.el.querySelector('.logo-svg');
        logoSvg.innerHTML = (0, _svgDefault.default).logo_w;
    }
}
exports.default = Header;

},{"../core/core":"3SuZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../data/svg":"h6gh9"}],"h6gh9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const svgLogo = {
    logo_w: `
  <svg width="100" height="52" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class='white' d="M2.60781 35.5768C1.94559 35.5768 1.28114 35.3357 0.772254 34.8516C-0.249967 33.8789 -0.258856 32.2942 0.754477 31.313L14.5745 17.9224C15.5878 16.9412 17.2389 16.9327 18.2611 17.9053C19.2834 18.8779 19.2922 20.4627 18.2789 21.4439L4.45892 34.8345C3.95003 35.3293 3.2767 35.5768 2.60559 35.5768H2.60781Z" fill="white"/>
<path class='white' d="M16.5589 48.7776C15.8967 48.7776 15.2322 48.5366 14.7233 48.0524L0.774452 34.7897C-0.24777 33.8171 -0.256659 32.2323 0.756674 31.2511C1.77001 30.2679 3.42112 30.2615 4.44334 31.2341L18.3944 44.4989C19.4167 45.4715 19.4256 47.0563 18.4122 48.0375C17.9033 48.5323 17.23 48.7797 16.5589 48.7797V48.7776Z" fill="white"/>
<path opacity="0.5" d="M22.8478 51.0982C22.4167 51.0982 21.9789 50.9959 21.5767 50.7783C20.3211 50.1022 19.8722 48.5771 20.5767 47.372L29.65 31.8228C30.3544 30.6177 31.9433 30.1868 33.1989 30.863C34.4544 31.5391 34.9033 33.0642 34.1989 34.2693L25.1256 49.8185C24.6478 50.6375 23.7611 51.0982 22.8478 51.0982Z" fill="#FF943E"/>
<path opacity="0.5" d="M40.9989 51.0982C40.0855 51.0982 39.1989 50.6375 38.7211 49.8185L29.6478 34.2693C28.9433 33.0642 29.3922 31.5391 30.6478 30.863C31.9056 30.1868 33.4922 30.6177 34.1967 31.8228L43.27 47.372C43.9744 48.5771 43.5255 50.1022 42.27 50.7783C41.8678 50.9959 41.43 51.0982 40.9989 51.0982Z" fill="#FF943E"/>
<path d="M41.0167 51.0982C40.5878 51.0982 40.1522 50.9959 39.75 50.7804C38.4922 50.1086 38.0411 48.5835 38.7411 47.3762L47.7878 31.7887C48.4878 30.5814 50.0767 30.1484 51.3344 30.8203C52.5922 31.4922 53.0433 33.0172 52.3433 34.2245L43.2967 49.8121C42.8189 50.6333 41.9322 51.0982 41.0167 51.0982Z" fill="#000923"/>
<path d="M41.0167 50.9745C40.5878 50.9745 40.1522 50.8721 39.75 50.6567C38.4922 49.9848 38.0411 48.4598 38.7411 47.2525L47.7878 31.6649C48.4878 30.4577 50.0767 30.0247 51.3344 30.6966C52.5922 31.3685 53.0433 32.8935 52.3433 34.1008L43.2967 49.6884C42.8189 50.5095 41.9322 50.9745 41.0167 50.9745Z" fill="#000923"/>
<path class='white' d="M83.5744 48.7776C82.9122 48.7776 82.2478 48.5366 81.7389 48.0524C80.7166 47.0798 80.7078 45.495 81.7211 44.5138L95.5411 31.1232C96.5544 30.142 98.2055 30.1335 99.2277 31.1061C100.25 32.0787 100.259 33.6635 99.2455 34.6447L85.4255 48.0353C84.9166 48.5302 84.2455 48.7776 83.5722 48.7776H83.5744Z" fill="white"/>
<path class='white' d="M97.3944 35.4509C96.7322 35.4509 96.0678 35.2099 95.5589 34.7257L81.6078 21.4609C80.5855 20.4883 80.5767 18.9035 81.59 17.9224C82.6033 16.9412 84.2544 16.9327 85.2766 17.9053L99.2278 31.1701C100.25 32.1427 100.259 33.7275 99.2455 34.7087C98.7366 35.2035 98.0655 35.4509 97.3922 35.4509H97.3944Z" fill="white"/>
<path opacity="0.5" d="M50.1078 51.0982C48.6678 51.0982 47.5011 49.9784 47.5011 48.5963V2.57366C47.5011 1.19151 48.6678 0.0717163 50.1078 0.0717163C51.5478 0.0717163 52.7144 1.19151 52.7144 2.57366V48.5942C52.7144 49.9763 51.5478 51.0961 50.1078 51.0961V51.0982Z" fill="#00D1F3"/>
<path opacity="0.5" d="M59.2256 51.0982C58.3122 51.0982 57.4256 50.6375 56.9478 49.8185L47.8745 34.2693C47.17 33.0642 47.6189 31.5391 48.8745 30.863C50.1322 30.1868 51.7189 30.6177 52.4233 31.8228L61.4967 47.372C62.2011 48.5771 61.7522 50.1022 60.4967 50.7783C60.0945 50.9959 59.6567 51.0982 59.2256 51.0982Z" fill="#FFD300"/>
<path class='white' d="M41.0167 51.0982C40.5878 51.0982 40.1522 50.9959 39.75 50.7804C38.4922 50.1086 38.0411 48.5835 38.7411 47.3762L47.7878 31.7887C48.4878 30.5814 50.0767 30.1484 51.3344 30.8203C52.5922 31.4922 53.0433 33.0172 52.3433 34.2245L43.2967 49.8121C42.8189 50.6333 41.9322 51.0982 41.0167 51.0982Z" fill="white"/>
<path class='white' d="M50.0633 35.5128C49.63 35.5128 49.19 35.4083 48.7856 35.1907C47.53 34.5124 47.0856 32.9874 47.7922 31.7823L56.97 16.1371C57.6767 14.932 59.2656 14.5054 60.5211 15.1836C61.7767 15.8619 62.2211 17.387 61.5144 18.5921L52.3367 34.2373C51.8589 35.0542 50.9722 35.5128 50.0611 35.5128H50.0633Z" fill="white"/>
</svg>
`,
    logo_b: `
  <svg width="100" height="52" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.60781 35.505C1.94559 35.505 1.28114 35.264 0.772254 34.7798C-0.249967 33.8072 -0.258856 32.2224 0.754477 31.2413L14.5745 17.8506C15.5878 16.8694 17.2389 16.8609 18.2611 17.8335C19.2833 18.8062 19.2922 20.3909 18.2789 21.3721L4.45892 34.7628C3.95003 35.2576 3.2767 35.505 2.60559 35.505H2.60781Z" fill="#000923"/>
<path d="M16.5589 48.7058C15.8967 48.7058 15.2323 48.4648 14.7234 47.9806L0.774513 34.718C-0.247709 33.7453 -0.256598 32.1606 0.756735 31.1794C1.77007 30.1961 3.42118 30.1897 4.4434 31.1623L18.3945 44.4271C19.4167 45.3998 19.4256 46.9846 18.4123 47.9657C17.9034 48.4606 17.2301 48.708 16.5589 48.708V48.7058Z" fill="#000923"/>
<path opacity="0.5" d="M22.8478 51.0265C22.4167 51.0265 21.9789 50.9241 21.5767 50.7066C20.3211 50.0304 19.8722 48.5054 20.5767 47.3003L29.65 31.7511C30.3544 30.546 31.9433 30.1151 33.1989 30.7912C34.4544 31.4674 34.9033 32.9924 34.1989 34.1976L25.1256 49.7468C24.6478 50.5658 23.7611 51.0265 22.8478 51.0265Z" fill="#FF943E"/>
<path opacity="0.5" d="M40.9989 51.0265C40.0855 51.0265 39.1989 50.5658 38.7211 49.7468L29.6478 34.1976C28.9433 32.9924 29.3922 31.4674 30.6478 30.7912C31.9056 30.1151 33.4922 30.546 34.1967 31.7511L43.27 47.3003C43.9744 48.5054 43.5255 50.0304 42.27 50.7066C41.8678 50.9241 41.43 51.0265 40.9989 51.0265Z" fill="#FF943E"/>
<path d="M41.0167 51.0265C40.5878 51.0265 40.1522 50.9242 39.75 50.7087C38.4922 50.0369 38.0411 48.5118 38.7411 47.3046L47.7878 31.717C48.4878 30.5097 50.0767 30.0767 51.3344 30.7486C52.5922 31.4205 53.0433 32.9455 52.3433 34.1528L43.2967 49.7404C42.8189 50.5616 41.9322 51.0265 41.0167 51.0265Z" fill="#000923"/>
<path d="M41.0167 50.9028C40.5878 50.9028 40.1522 50.8004 39.75 50.585C38.4922 49.9131 38.0411 48.388 38.7411 47.1808L47.7878 31.5932C48.4878 30.3859 50.0767 29.953 51.3344 30.6248C52.5922 31.2967 53.0433 32.8218 52.3433 34.029L43.2967 49.6166C42.8189 50.4378 41.9322 50.9028 41.0167 50.9028Z" fill="#000923"/>
<path d="M83.5744 48.7059C82.9122 48.7059 82.2478 48.4649 81.7389 47.9807C80.7166 47.0081 80.7078 45.4233 81.7211 44.4421L95.5411 31.0515C96.5544 30.0703 98.2055 30.0618 99.2277 31.0344C100.25 32.007 100.259 33.5918 99.2455 34.573L85.4255 47.9636C84.9166 48.4585 84.2455 48.7059 83.5722 48.7059H83.5744Z" fill="#000923"/>
<path d="M97.3944 35.3792C96.7322 35.3792 96.0678 35.1381 95.5589 34.654L81.6078 21.3892C80.5855 20.4165 80.5767 18.8318 81.59 17.8506C82.6033 16.8694 84.2544 16.8609 85.2766 17.8335L99.2277 31.0983C100.25 32.071 100.259 33.6558 99.2455 34.6369C98.7366 35.1318 98.0655 35.3792 97.3922 35.3792H97.3944Z" fill="#000923"/>
<path opacity="0.5" d="M50.1078 51.0265C48.6678 51.0265 47.5011 49.9067 47.5011 48.5246V2.50195C47.5011 1.1198 48.6678 0 50.1078 0C51.5478 0 52.7144 1.1198 52.7144 2.50195V48.5224C52.7144 49.9046 51.5478 51.0244 50.1078 51.0244V51.0265Z" fill="#00D1F3"/>
<path opacity="0.5" d="M59.2255 51.0265C58.3122 51.0265 57.4255 50.5658 56.9477 49.7468L47.8744 34.1976C47.17 32.9924 47.6188 31.4674 48.8744 30.7912C50.1322 30.1151 51.7188 30.546 52.4233 31.7511L61.4966 47.3003C62.2011 48.5054 61.7522 50.0304 60.4966 50.7066C60.0944 50.9241 59.6566 51.0265 59.2255 51.0265Z" fill="#FFD300"/>
<path d="M41.0167 51.0265C40.5878 51.0265 40.1522 50.9242 39.75 50.7087C38.4922 50.0369 38.0411 48.5118 38.7411 47.3046L47.7878 31.717C48.4878 30.5097 50.0767 30.0767 51.3344 30.7486C52.5922 31.4205 53.0433 32.9455 52.3433 34.1528L43.2967 49.7404C42.8189 50.5616 41.9322 51.0265 41.0167 51.0265Z" fill="#000923"/>
<path d="M50.0633 35.4411C49.63 35.4411 49.19 35.3365 48.7856 35.119C47.53 34.4407 47.0856 32.9156 47.7922 31.7105L56.97 16.0654C57.6767 14.8602 59.2656 14.4337 60.5211 15.1119C61.7767 15.7902 62.2211 17.3153 61.5144 18.5204L52.3367 34.1656C51.8589 34.9825 50.9722 35.4411 50.0611 35.4411H50.0633Z" fill="#000923"/>
</svg>
  `
};
exports.default = svgLogo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pPOA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _aboutJs = require("../store/about.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
class Footer extends (0, _core.Component) {
    constructor(){
        super({
            tagName: 'footer'
        });
    }
    render() {
        const { github, repository } = (0, _aboutJsDefault.default).state;
        this.el.innerHTML = /* html */ `
      <div>
        <a href='${repository}'>GitHub Repository</a>
      </div>
      <div>
        <a href='${github}'>${new Date().getFullYear()}</a>
      </div>
    `;
    }
}
exports.default = Footer;

},{"../core/core":"3SuZC","../store/about.js":"4RAJO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RAJO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
exports.default = new (0, _core.Store)({
    name: 'MK / KimMinKyung',
    email: '01aldrn10@gmail.com',
    github: 'https://github.com/kmmkyung',
    repository: 'https://github.com/kmmkyung/movie-app'
});

},{"../core/core":"3SuZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L9mC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJs = require("../core/core.js");
var _homeJs = require("./Home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _movieJs = require("./Movie.js");
var _movieJsDefault = parcelHelpers.interopDefault(_movieJs);
var _aboutJs = require("./About.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _notFoundJs = require("./NotFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
exports.default = (0, _coreJs.createRouter)([
    {
        path: '#/',
        component: (0, _homeJsDefault.default)
    },
    {
        path: '#/movie',
        component: (0, _movieJsDefault.default)
    },
    {
        path: '#/about',
        component: (0, _aboutJsDefault.default)
    },
    {
        path: '.*',
        component: (0, _notFoundJsDefault.default)
    }
]);

},{"../core/core.js":"3SuZC","./Home.js":"0JSNG","./Movie.js":"1LTyN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./About.js":"gdB30","./NotFound.js":"4fDiL"}],"0JSNG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJs = require("../core/core.js");
var _headlineJs = require("../components/Headline.js");
var _headlineJsDefault = parcelHelpers.interopDefault(_headlineJs);
var _searchJs = require("../components/Search.js");
var _searchJsDefault = parcelHelpers.interopDefault(_searchJs);
var _movieListJs = require("../components/MovieList.js");
var _movieListJsDefault = parcelHelpers.interopDefault(_movieListJs);
var _movieListMoreJs = require("../components/MovieListMore.js");
var _movieListMoreJsDefault = parcelHelpers.interopDefault(_movieListMoreJs);
class Home extends (0, _coreJs.Component) {
    render() {
        const headline = new (0, _headlineJsDefault.default)().el;
        const search = new (0, _searchJsDefault.default)().el;
        const movieList = new (0, _movieListJsDefault.default)().el;
        const movieListMore = new (0, _movieListMoreJsDefault.default)().el;
        this.el.classList.add('container');
        this.el.append(headline, search, movieList, movieListMore);
    }
}
exports.default = Home;

},{"../core/core.js":"3SuZC","../components/Headline.js":"gaVgo","../components/Search.js":"jqPPz","../components/MovieList.js":"8UDl3","../components/MovieListMore.js":"3ZUar","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gaVgo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJs = require("../core/core.js");
class Headline extends (0, _coreJs.Component) {
    render() {
        this.el.classList.add('headline');
        this.el.innerHTML = /* html */ `
      <h1>
        <span>OMDb API</span><br>
        THE OPEN<br>
        MOVIE DATABASE
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, 
        all content and images on the site are contributed and maintained by our users.<br>
        If you find this service useful, please consider making a one-time donation or become a patron.
      </p>
    `;
    }
}
exports.default = Headline;

},{"../core/core.js":"3SuZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqPPz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _movieJs = require("../store/movie.js");
var _movieJsDefault = parcelHelpers.interopDefault(_movieJs);
class Search extends (0, _core.Component) {
    render() {
        this.el.classList.add('search');
        this.el.innerHTML = /* html */ `
      <input type='text' placeholder='Enter the movie title to search!'  value='${(0, _movieJsDefault.default).state.searchText}'/>
      <button class='btn btn-primary'>Search!</button>
    `;
        const inputEl = this.el.querySelector('input');
        const btnEl = this.el.querySelector('button');
        inputEl.addEventListener('input', function() {
            (0, _movieJsDefault.default).state.searchText = inputEl.value;
        });
        inputEl.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && (0, _movieJsDefault.default).state.searchText.trim()) (0, _movieJs.searchMovies)(1);
        });
        btnEl.addEventListener('click', function() {
            if ((0, _movieJsDefault.default).state.searchText.trim()) (0, _movieJs.searchMovies)(1);
        });
    }
}
exports.default = Search;

},{"../core/core":"3SuZC","../store/movie.js":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kq1bo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchMovies", ()=>searchMovies);
parcelHelpers.export(exports, "getMovieDetails", ()=>getMovieDetails);
var _coreJs = require("../core/core.js");
const store = new (0, _coreJs.Store)({
    searchText: '',
    page: 1,
    movies: [],
    pageMax: 1,
    loading: false,
    message: 'Search for the movie title!',
    movie: {}
});
exports.default = store;
const searchMovies = async function(page) {
    store.state.loading = true;
    store.state.page = page;
    if (page === 1) {
        store.state.movies = [];
        store.state.message = '';
    }
    try {
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`);
        const { Search, totalResults, Response, Error } = await res.json();
        if (Response === 'True') {
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ];
            store.state.pageMax = Math.ceil(Number(totalResults) / 10);
        } else {
            store.state.message = Error;
            store.state.pageMax = 1;
        }
    } catch (error) {
        console.log(error);
    } finally{
        store.state.loading = false;
    }
};
const getMovieDetails = async function(id) {
    try {
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`);
        store.state.movie = await res.json();
    } catch (error) {
        console.log('getMovieDetails error', error);
    }
};

},{"../core/core.js":"3SuZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UDl3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _movieitem = require("./Movieitem");
var _movieitemDefault = parcelHelpers.interopDefault(_movieitem);
class MovieList extends (0, _core.Component) {
    constructor(){
        super();
        (0, _movieDefault.default).subscribe('movies', ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe('loading', ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe('message', ()=>{
            this.render();
        });
    }
    render() {
        this.el.classList.add('movie-list');
        this.el.innerHTML = /* html */ `
      ${(0, _movieDefault.default).state.message ? `<div class="message">${(0, _movieDefault.default).state.message}</div>` : '<div class="movies"></div>'} 
      <div class="the-loader hide"></div>
    `;
        const moviesEl = this.el.querySelector('.movies');
        moviesEl?.append(...(0, _movieDefault.default).state.movies.map((movie)=>new (0, _movieitemDefault.default)({
                movie: movie
            }).el));
        const loaderEl = this.el.querySelector('.the-loader');
        (0, _movieDefault.default).state.loading ? loaderEl.classList.remove('hide') : loaderEl.classList.add('hide');
    }
}
exports.default = MovieList;

},{"../core/core":"3SuZC","../store/movie":"kq1bo","./Movieitem":"534Hw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"534Hw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
class MovieItem extends (0, _core.Component) {
    constructor(props){
        super({
            props,
            tagName: 'a'
        });
    }
    render() {
        const { movie } = this.props;
        this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`);
        this.el.classList.add('movie');
        this.el.style.backgroundImage = `url(${movie.Poster})`;
        this.el.innerHTML = /* html */ `
    <div class='info'>
      <div class='year'>${movie.Year}</div>
      <div class='title'>${movie.Title}</div>
    </div>
  `;
    }
}
exports.default = MovieItem;

},{"../core/core":"3SuZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZUar":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class MovieListMore extends (0, _core.Component) {
    constructor(){
        super({
            tagName: 'button'
        });
        (0, _movieDefault.default).subscribe('pageMax', ()=>{
            const { page, pageMax } = (0, _movieDefault.default).state;
            pageMax > page ? this.el.classList.remove('hide') : this.el.classList.add('hide');
        });
    }
    render() {
        this.el.classList.add('btn', 'view-more', 'hide');
        this.el.textContent = 'View more...';
        this.el.addEventListener('click', async function() {
            this.classList.add('hide');
            await (0, _movie.searchMovies)((0, _movieDefault.default).state.page + 1);
        });
    }
}
exports.default = MovieListMore;

},{"../core/core":"3SuZC","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LTyN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Movie extends (0, _core.Component) {
    async render() {
        this.el.classList.add('container', 'the-movie');
        this.el.innerHTML = /* html */ `
    <div class='poster skeleton'></div>
    <div class='specs'>
      <div class='title skeleton'></div>
      <div class='labels skeleton'></div>
      <div class='plot skeleton'></div>
    </div>
    `;
        await (0, _movie.getMovieDetails)(history.state.id);
        const { movie } = (0, _movieDefault.default).state;
        const bigPoster = movie.Poster.replace('SX300', 'SX700');
        this.el.innerHTML = /*html*/ `
      <div style='background-image: url(${bigPoster})' class='poster'></div>
      <div class='specs'>
        <div class='title'>${movie.Title}</div>
        <div class='labels'>
          <span>${movie.Released}</span>&nbsp;/&nbsp
          <span>${movie.Runtime}</span>&nbsp;/&nbsp
          <span>${movie.Country}</span>
        </div>
        <div class='plot'>${movie.Plot}</div>
        <div>
          <h3>Ratings</h3>
          ${movie.Ratings.map((rating)=>{
            return `<p>${rating.Source} - ${rating.Value}</p>`;
        }).join('')}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>
      </div>
    `;
    }
}
exports.default = Movie;

},{"../core/core":"3SuZC","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdB30":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
var _aboutJs = require("../store/about.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _svg = require("../data/svg");
var _svgDefault = parcelHelpers.interopDefault(_svg);
class About extends (0, _core.Component) {
    constructor(){
        super();
    }
    render() {
        const { name, email, github } = (0, _aboutJsDefault.default).state;
        this.el.classList.add('container', 'about');
        this.el.innerHTML = /* html */ `
      <div class='photo logo-svg'></div>
      <p class='name'>${name}</p>
      <p>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=${email}' target='_blank'>${email}</a>
      </p>
      <p>
        <a href='${github}' target='_blank'>GitHub</a>
      </p>
    `;
        const logoSvg = this.el.querySelector('.logo-svg');
        logoSvg.innerHTML = (0, _svgDefault.default).logo_w;
    }
}
exports.default = About;

},{"../core/core":"3SuZC","../store/about.js":"4RAJO","../data/svg":"h6gh9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fDiL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("../core/core");
class NotFound extends (0, _core.Component) {
    render() {
        this.el.classList.add('container', 'not-found');
        this.el.innerHTML = /* html */ `
      <h1>
        Sorry...<br>
        Page Not Found
      </h1>
    `;
    }
}
exports.default = NotFound;

},{"../core/core":"3SuZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["h4jLA","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
