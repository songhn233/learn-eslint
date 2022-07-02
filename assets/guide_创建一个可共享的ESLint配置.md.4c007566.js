import{_ as e,c as a,o as i,a as t}from"./app.42785996.js";const m=JSON.parse('{"title":"\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684ESLint\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76EE\u6807","slug":"\u76EE\u6807"},{"level":2,"title":"Coding","slug":"coding"},{"level":2,"title":"\u6548\u679C","slug":"\u6548\u679C"}],"relativePath":"guide/\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684ESLint\u914D\u7F6E.md","lastUpdated":1656756343000}'),l={name:"guide/\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684ESLint\u914D\u7F6E.md"},n=t('<h1 id="\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684eslint\u914D\u7F6E" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684ESLint\u914D\u7F6E <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u7684eslint\u914D\u7F6E" aria-hidden="true">#</a></h1><blockquote><p>eslintrc\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u662F\u9879\u76EE\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u56E0\u6B64\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u4E0E\u5176\u4ED6\u9879\u76EE\u6216\u4EBA\u5458\u5171\u4EAB\u5B83\u3002\u53EF\u5171\u4EAB\u7684\u914D\u7F6E\u5141\u8BB8\u4F60\u5728npm\u4E0A\u53D1\u5E03\u4F60\u7684\u914D\u7F6E\u8BBE\u7F6E\uFF0C\u5E76\u8BA9\u5176\u4ED6\u4EBA\u4E0B\u8F7D\u5E76\u5728\u4ED6\u4EEC\u7684ESLint\u9879\u76EE\u4E2D\u4F7F\u7528\u5B83\u3002</p></blockquote><h2 id="\u76EE\u6807" tabindex="-1">\u76EE\u6807 <a class="header-anchor" href="#\u76EE\u6807" aria-hidden="true">#</a></h2><ul><li>\u521B\u5EFA\u4E00\u4E2A\u53EF\u5171\u4EAB\u914D\u7F6E\uFF0C\u8BA9\u5176\u4ED6\u9879\u76EE\u76F4\u63A5\u4F7F\u7528eslint\u5171\u4EAB\u7684\u914D\u7F6E</li></ul><h2 id="coding" tabindex="-1">Coding <a class="header-anchor" href="#coding" aria-hidden="true">#</a></h2><ul><li>\u521D\u59CB\u5316\u9879\u76EE\uFF0C\u26A0\uFE0F\u6CE8\u610F\u9879\u76EE\u540D\u5FC5\u987B\u662F<code>eslint-config-xxx</code>\u8FD9\u6837\u7684\u5F62\u5F0F\uFF0C\u6CA1\u6709\u4E3A\u795E\u9A6C\uFF0C\u8FD9\u662FESLint\u5171\u4EAB\u914D\u7F6E\u6587\u4EF6\u7684\u7EA6\u5B9A</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3sq0gylghj21m20u041y.jpg" alt="image-20220702174126292"></p><ul><li>\u65B0\u5EFAindex.js\u5728\u91CC\u9762\u521B\u5EFA\u4F60\u60F3\u5BFC\u51FA\u7684\u914D\u7F6E</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqi2f6plj22560s4435.jpg" alt="image-20220702175822796"></p><ul><li>\u5728\u5176\u4ED6\u9879\u76EE\u5F15\u5165\u5F53\u524D\u53EF\u5171\u4EAB\u914D\u7F6E</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqiyzq4pj21180regpf.jpg" alt="image-20220702175914987"></p><p>\u5728<code>.eslintrc</code>\u914D\u7F6E<code>extends</code> \u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5171\u4EAB\u914D\u7F6E\u5373\u53EF \u26A0\uFE0F\u6CE8\u610F\u8FD9\u91CC\u7EE7\u627F\u7684\u540D\u79F0\u53EA\u9700\u8981\u5199eslint-config-xxx \u8FD9\u91CC\u7684xxx\u90E8\u5206\u5373\u53EF</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqk58p4aj21560p4abx.jpg" alt="image-20220702180022479"></p><h2 id="\u6548\u679C" tabindex="-1">\u6548\u679C <a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a></h2><p>\u5171\u4EAB\u7684\u914D\u7F6E\u5728\u53E6\u4E00\u4E2A\u9879\u76EE\u751F\u6548\u4E86</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqmdpxlxj20v60fejsg.jpg" alt="image-20220702180231976"></p>',16),s=[n];function c(d,r,g,p,o,h){return i(),a("div",null,s)}var u=e(l,[["render",c]]);export{m as __pageData,u as default};
