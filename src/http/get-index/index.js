const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index (req) {
  console.log(req);
  let html = `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
  <meta name="theme-color" content="#000000" />
  <link rel="manifest" href="${staticAssetsHelper('manifest.json')}" />
  <link rel="shortcut icon" href="${staticAssetsHelper('favicon.ico')}" />
  <title>NGC Bookouts</title>
  <link href="${staticAssetsHelper('static/css/2.36c09332.chunk.css')}" rel="stylesheet">
  <link href="${staticAssetsHelper('static/css/cxApp.a4223a51.chunk.css')}" rel="stylesheet">
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <script>!function (l) { function e(e) { for (var r, t, n = e[0], o = e[1], u = e[2], f = 0, i = []; f < n.length; f++)t = n[f], p[t] && i.push(p[t][0]), p[t] = 0; for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]); for (s && s(e); i.length;)i.shift()(); return c.push.apply(c, u || []), a() } function a() { for (var e, r = 0; r < c.length; r++) { for (var t = c[r], n = !0, o = 1; o < t.length; o++) { var u = t[o]; 0 !== p[u] && (n = !1) } n && (c.splice(r--, 1), e = f(f.s = t[0])) } return e } var t = {}, p = { 1: 0 }, c = []; function f(e) { if (t[e]) return t[e].exports; var r = t[e] = { i: e, l: !1, exports: {} }; return l[e].call(r.exports, r, r.exports, f), r.l = !0, r.exports } f.m = l, f.c = t, f.d = function (e, r, t) { f.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, f.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, f.t = function (r, e) { if (1 & e && (r = f(r)), 8 & e) return r; if (4 & e && "object" == typeof r && r && r.__esModule) return r; var t = Object.create(null); if (f.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: r }), 2 & e && "string" != typeof r) for (var n in r) f.d(t, n, function (e) { return r[e] }.bind(null, n)); return t }, f.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return f.d(r, "a", r), r }, f.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, f.p = "/"; var r = window.webpackJsonp = window.webpackJsonp || [], n = r.push.bind(r); r.push = e, r = r.slice(); for (var o = 0; o < r.length; o++)e(r[o]); var s = n; a() }([])</script>
  <script src="${staticAssetsHelper('static/js/2.3bf17284.chunk.js')}"></script>
  <script src="${staticAssetsHelper('static/js/cxApp.35aee99d.chunk.js')}"></script>
  <script>
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(() => {
      const img = document.querySelector('.ngc-logo');
      img.src = "${staticAssetsHelper('static/media/ngc-logo.bee4e69d.png')}";
    }, 1000);
  });</script>
</body>

</html>
`

  const config = {
    "configPath": "master/bookouts-dev.json",
    "masheryUrl": "sandbox.api.nextgearcapital.com",
    "gatewayUrl": "https://gateway.dev.nextgearcapital.com/",
    "authUrl": "https://ping-smallapp-dev.nextgearcapital.com/as/authorization.oauth2",
    "clientId": "ngc_ui",
    "logoutUrl": "https://ping-smallapp-dev.nextgearcapital.com/ext/logout",
    "allowedRoles": [],
    "segmentIoKey": ""
  };

  if(req.path === '/config.json') {
    return {
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: JSON.stringify(config)
    }
  }


  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: html
  }
}
