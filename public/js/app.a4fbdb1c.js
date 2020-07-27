(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17d2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("5f5b"),a=n("bc3a"),s=n.n(a),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row vertical-centre justify-content-center mt-50"},[n("div",{staticClass:"col-md-6 mx-auto"},[n("TodoList")],1)])])},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"col align-self-center"},[n("h3",{staticClass:"pb-5 text-left underline"},[e._v("Todo List")]),n("form",{staticClass:"sign-in",on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form-group todo__row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What do you want to do?"},domProps:{value:e.title},on:{keypress:function(t){e.typing=!0},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()},input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("small",{directives:[{name:"show",rawName:"v-show",value:0!==e.title.length,expression:"title.length !== 0"}],staticClass:"form-text text-muted"},[e._v("Hit enter to save")])])])]),n("div",{staticClass:"col align-self-center",attrs:{show:e.todos.length>0}},[e._l(e.todos,(function(t,o){return n("div",{key:o,staticClass:"form-row align-items-center"},[n("div",{staticClass:"col-auto my-1"},[n("div",{staticClass:"input-group mb-3 todo__row"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"todo.done"}],attrs:{type:"checkbox",title:"Mark as done?"},domProps:{checked:t.done,value:t.done,checked:Array.isArray(t.done)?e._i(t.done,t.done)>-1:t.done},on:{change:[function(n){var o=t.done,r=n.target,a=!!r.checked;if(Array.isArray(o)){var s=t.done,i=e._i(o,s);r.checked?i<0&&e.$set(t,"done",o.concat([s])):i>-1&&e.$set(t,"done",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(t,"done",a)},function(n){return e.updateTodo(t)}]}})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"}],staticClass:"form-control",class:t.done?"todo__done":"",attrs:{type:"text"},domProps:{value:t.title},on:{keypress:function(e){t.editing=!0},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.updateTodo(t)},input:function(n){n.target.composing||e.$set(t,"title",n.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-text"},[n("span",{staticClass:"input-group-addon addon-left",attrs:{title:"Delete todo?"},on:{click:function(n){return e.deleteTodo(t._id)}}},[e._v("X")])])])])])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.todos.length,expression:"todos.length === 0"}],staticClass:"alert alert-primary todo__row"},[e._v("Hardest worker in the room. No more todos now you can rest. ;)")])],2)])},u=[],d=(n("96cf"),n("1da1")),p={data:function(){return{title:"",todos:[]}},created:function(){this.fetchTodo()},methods:{addTodo:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n={title:e.title,done:!1},!e.title){t.next=8;break}return console.log(n),t.next=6,e.$http.post("/",n);case 6:o=t.sent,o&&(e.clearTodo(),e.fetchTodo());case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},clearTodo:function(){this.title=""},fetchTodo:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/");case 3:n=t.sent,n&&(e.todos=n.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},updateTodo:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,o=e._id,n.next=4,t.$http.put("/".concat(o),e);case 4:r=n.sent,r&&console.log("response from database",r),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},deleteTodo:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$http.delete("/".concat(e));case 3:o=n.sent,console.log(o),o&&t.fetchTodo(),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},f=p,v=(n("9092"),n("2877")),h=Object(v["a"])(f,l,u,!1,null,"c9a3b2c0",null),m=h.exports,g={name:"app",components:{TodoList:m}},y=g,b=(n("5c0b"),Object(v["a"])(y,i,c,!1,null,null,null)),w=b.exports,x=s.a.create({baseURL:"api"});console.log(Object({NODE_ENV:"production",VUE_APP_BACKEND_URL:"api",BASE_URL:"/"})),o["default"].prototype.$http=x,o["default"].use(r["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},9092:function(e,t,n){"use strict";var o=n("17d2"),r=n.n(o);r.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a4fbdb1c.js.map