(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t,a){"use strict";(function(e){var n=a(138),l=a(1),c=a.n(l),o=a(140),r=a(128),i=a.n(r),s=a(127),u=a.n(s);a(184);t.a=function(t){var a,r=t.initData,s=e.window;o.a.addLocale(i.a);var m,d=new o.a("en-US"),f=Object(l.useState)(r),h=Object(n.a)(f,2),E=h[0],p=h[1];void 0!==s&&(m=window.curPage,null===localStorage.getItem("hiddenIds")?a=[]:(a=localStorage.getItem("hiddenIds").split(",")).forEach((function(e){var t=E.findIndex((function(t){return t.objectID===e}));-1!==t&&E.splice(t,1)})));var w=function(e){},b=function(e){console.log(E.length);var t=e.target.dataset.id,n=E.findIndex((function(e){return e.objectID===t}));-1!==n&&E.splice(n,1),p(E.map((function(e){return e}))),a.push(t),localStorage.setItem("hiddenIds",a)},g=function(e){"Previous"===e.target.textContent?window.location.href=1===m?"/":"/?page=".concat(m-1):window.location.href="/?page=".concat(m+1)};return c.a.createElement("div",{className:"newsList"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Comments"),c.a.createElement("th",null,"Vote",c.a.createElement("br",null),"Count"),c.a.createElement("th",null,"UpVote"),c.a.createElement("th",{style:{textAlign:"left"}},"News Details"))),c.a.createElement("tbody",null,E.map((function(e){return c.a.createElement("tr",{key:e.objectID},c.a.createElement("td",{className:"bold"},e.num_comments),c.a.createElement("td",{className:"bold"},e.points),c.a.createElement("td",null,c.a.createElement("span",{className:"up",onClick:w,"data-id":e.objectID})),c.a.createElement("td",{className:"newsD"},c.a.createElement("a",{href:e.url,className:"bold"},e.title),c.a.createElement("span",null,null!==e.url?"("+u.a.from(String(e.url)).replace("www.","")+")":""),c.a.createElement("span",{className:"auth"},e.author),c.a.createElement("span",null,d.format(new Date(e.created_at)).replace("an","1").replace("a minute","1 minute")),c.a.createElement("span",{"data-id":e.objectID,className:"hide",onClick:b},"hide")))})))),c.a.createElement("table",{className:"navTable"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"pn"},c.a.createElement("span",{className:0===e.curPage?"count0":"",suppressHydrationWarning:!0,onClick:g},"Previous"),c.a.createElement("b",null,"|"),c.a.createElement("span",{onClick:g},"Next"))))))}}).call(this,a(29))},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},139:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=(a(177),a(126)),o=a(28),r=(a(372),function(e){var t=e.data;return l.a.createElement("div",{className:"voteC"},l.a.createElement(o.c,{width:1100,height:500,data:t},l.a.createElement(o.a,{vertical:!1}),l.a.createElement(o.b,{type:"linear",dataKey:"points",stroke:"#047cb0",dot:{fill:"#047cb0"},strokeWidth:"3"}),l.a.createElement(o.d,{dataKey:"objectID",label:{value:"ID",stroke:"#000",strokeWidth:1,position:"bottom",offset:-25},angle:-90,height:100,tickSize:30,tickLine:!1,padding:{left:10,right:10},interval:0}),l.a.createElement(o.e,{dataKey:"points",label:{value:"Votes",position:"left",fontSize:15,fontWeight:"bold",strokeWidth:10,angle:-90,offset:-15}})))});t.a=function(e){var t=e.initData,a=[];return t.forEach((function(e){var t=e.objectID,n=e.points;a.push({objectID:t,points:n})})),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{initData:t}),l.a.createElement(r,{data:a}))}},170:function(e,t,a){e.exports=a(171)},171:function(e,t,a){"use strict";a.r(t),function(e){var t,n=a(1),l=a.n(n),c=a(47),o=a.n(c),r=(a(176),a(139)),i=a(137);void 0!==e.window&&(t=window.initData,delete window.initData),o.a.hydrate(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,{initData:t})),document.getElementById("root")),i.a()}.call(this,a(29))},176:function(e,t,a){},177:function(e,t,a){},184:function(e,t,a){},372:function(e,t,a){}},[[170,1,2]]]);
//# sourceMappingURL=main.b02ba97b.chunk.js.map