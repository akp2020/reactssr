(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},23:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(14),a(15),a(5));var i=function(e){var t=e.initData;return l.a.createElement(o.a,{initData:t})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.hydrate(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,{initData:window.initData})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){"use strict";(function(e){var n=a(0),l=a.n(n),r=a(8),c=a(7),o=a.n(c),i=a(6),m=a.n(i);a(23);t.a=function(t){var a=t.initData;r.a.addLocale(o.a);var n,c=new r.a("en-US");void 0!==e.window&&(n=window.curPage,delete window.curPage);var i=function(e){"Previous"===e.target.textContent?window.location.href=1===n||0===n?"/":"/?page=".concat(n-1):window.location.href="/?page=".concat(n+1)};return l.a.createElement("div",{className:"newsList"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Comments"),l.a.createElement("th",null,"Vote",l.a.createElement("br",null),"Count"),l.a.createElement("th",null,"UpVote"),l.a.createElement("th",{style:{textAlign:"left"}},"News Details"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.objectID},l.a.createElement("td",{className:"bold"},e.num_comments),l.a.createElement("td",{className:"bold"},e.points),l.a.createElement("td",null,l.a.createElement("span",{className:"up"})),l.a.createElement("td",null,l.a.createElement("a",{href:e.url,className:"bold"},e.title),l.a.createElement("span",null,null!==e.url?"("+m.a.from(String(e.url)).replace("www.","")+")":""),l.a.createElement("span",null,c.format(new Date(e.created_at)).replace("an","1")),l.a.createElement("span",null,"by ",e.author)))})),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4",className:"pn"},l.a.createElement("span",{id:"prev",onClick:i},"Previous"),l.a.createElement("b",null,"|"),l.a.createElement("span",{onClick:i},"Next"))))))}}).call(this,a(3))},9:function(e,t,a){e.exports=a(34)}},[[9,1,2]]]);
//# sourceMappingURL=main.fb6145b7.chunk.js.map