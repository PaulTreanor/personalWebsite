(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(47).default)("5a685793",content,!0,{sourceMap:!1})},289:function(t,e,r){"use strict";r(285)},290:function(t,e,r){var n=r(46)(!1);n.push([t.i,".home-page[data-v-7c6491d6]{padding:50px 30px}h2[data-v-7c6491d6]{margin-bottom:30px;text-align:center}.articles[data-v-7c6491d6]{margin:0 auto;max-width:800px}.article[data-v-7c6491d6]{margin-bottom:15px}.article-inner .detail[data-v-7c6491d6]{padding-left:15px;padding-right:15px}",""]),t.exports=n},308:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(48),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("blog").only(["title","short","img","slug","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=(r(289),r(28)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[r("h2",[t._v("Latest Posts")]),t._v(" "),r("div",{staticClass:"articles"},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article"},[r("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[r("div",{staticClass:"article-inner"},[r("div",{staticClass:"detail"},[r("pre",[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),r("h4",[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"lead"},[t._v(t._s(article.short))])])])])],1)})),0)])}),[],!1,null,"7c6491d6",null);e.default=component.exports}}]);