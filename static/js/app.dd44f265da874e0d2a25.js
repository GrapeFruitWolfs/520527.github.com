﻿webpackJsonp([1],{38:function(n,e,t){t(84);var r=t(23)(t(40),t(96),"data-v-bd26cd6c",null);n.exports=r.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(24),o=t.n(r),i=t(45),a=t.n(i),s=t(44),l=t.n(s),u=t(93),c=t.n(u),d=t(92),f=t.n(d),m=t(81),h=(t.n(m),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,r=0;r<e.length;r++)if(n.indexOf(e[r])>0){t=!1;break}return t}()),g=function(n,e){var t=new Date(Date.parse(n.replace(/-/g,"/"))).getTime(),r=new Date(Date.parse(e.replace(/-/g,"/"))).getTime();return Math.abs(t-r)/864e5};document.title+=g((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2017-09-01")+1+"天",e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{interval:27,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi，小果冻同志！\n* 看了你送给我的礼物，我很开心嗷！\n* 更加坚定了我完成这个web的决心\n* 这个页面现在什么也没有，略显简陋不是么。\n* 如同当年蛮青涩的我嗷。\n* 你的到来赋予了我很多东西，如同这个页面。\n* 嗯哼，说起来手机和电脑的web还得区分一下。\n* 你现在用的是............ "+(h?"电脑":"手机")+"\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了，来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色太呆了喂，加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果如何 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(h?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(h?"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;")+"\n  "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n}\n\n/* 再来一张信纸咩 */\n.resumeEditor{\n  position: fixed; \n  "+(h?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(h?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(h?"margin: .5em;":"")+"\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(h?"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;")+"\n    "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n  }\n/* 我开始写了昂 */\n\n\n","\n/* 嗯？ 是不是看着差点什么 ~\n * 歪头懵....\n * 如同我们的相处 还是有些不足嗷\n * 但是......赋予我们时间磨合的话 就行了\n */\n",'\n/* 时间充分 不如再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* 嗯哼 完成！页面可以上下滑动嗷~  */\n\n'],currentMarkdown:"",fullMarkdown:"老魏 × 小果冻\n----\n\n2017年09月01日。初初见面，我是素质教育漏网之鱼，你是退役魔法少女。  \n2020年1月20日。大寒, 即二十四节气中的最后1个节气, 在一起。  \n相识已有 `"+(g((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2017-09-01")+1)+"` 天\n\n我思考了很久\n----\n\n* 结论是 . 我爱你\n* 小果冻（little Jelly）\n* 你拥有\n* 我梦寐以求的\n* 一切美好的品质\n* 用爱这个词\n* 来形容我的感受太苍白了\n* 应该是\n* 我耐你\n* 我中意你\n* 我贼稀罕你啊！\n* ( 咳咳, 从小不擅长情绪表达 )\n* 你知道么\n* 我爱你\n* 就像病与药方一样难分\n* 你让我的人生完整了\n* 这是我人生中唯一确信不移的事情\n* 不论我是什么\n* 我都是你的\n* 你我之间\n* 充斥着许多人终其一生求而不得的东西\n* ♥\n* ……\n\n我想完完整整的拥有你\n----\n\n* Forever\n* you and me\n* every day\n* i love you\n* i always have\n* i always will\n* 我写这些话\n* 是因为\n* 当你意识到\n* 自己想要与一个人\n* 共度余生的时候\n* ……\n* 你会希望\n* 你的余生尽快开始\n* 这是一件非常大的开心的事\n* ......\n* 意识有些模糊\n* 看到这里笑一笑吧\n* 我会梦到的\n* …… \n\n我爱你胜过\n----\n\n* 胜过网易云音乐\n* 可口可乐\n* 还有花蛤\n* 火锅\n* 撸串串\n* 烤鱿鱼\n* 打字打的饿了喂……\n\n假如你有一天想吃好吃的\n----\n\n1. 我把店主连人带摊都给你抓过来\n2. 抓不到我就让哥们教我\n3. 教不会就让哥们做\n4. 哥们做不好吃就直接打飞\n5. 打飞我做给你吃\n6. 不好吃就重新做\n7. 做到好吃为止……\n\n> 【Fearless of the dirty world×I have my dear little Jelly】  \n>   喂。小果冻, 我不只想影响你的习惯。我还要去改变你的人生！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=l()(a.a.mark(function e(){var r,s,l,u,c,d=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=s-r.length,this.currentStyle.length<s?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(85),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(86),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(39),o=t(38),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},81:function(n,e){},82:function(n,e){},83:function(n,e){},84:function(n,e){},92:function(n,e,t){t(83);var r=t(23)(t(41),t(95),"data-v-3539023c",null);n.exports=r.exports},93:function(n,e,t){t(82);var r=t(23)(t(42),t(94),"data-v-23b5cc2c",null);n.exports=r.exports},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[43]);