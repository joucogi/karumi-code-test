(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"047e":function(e,t,n){},"0573":function(e,t,n){"use strict";var r=n("047e"),o=n.n(r);o.a},"070c":function(e,t,n){"use strict";var r=n("0d49"),o=n.n(r);o.a},"0d49":function(e,t,n){},"1d15":function(e,t,n){},"85ec":function(e,t,n){},"987b":function(e,t,n){"use strict";var r=n("1d15"),o=n.n(r);o.a},c1c1:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o=n("2b0e"),a=n("5f5b"),i=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),u=[],s=(n("034f"),n("2877")),c={},l=Object(s["a"])(c,i,u,!1,null,null,null),p=l.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"logo"},[n("LogoComponent")],1),n("div",{staticClass:"content"},[n("h2",{staticClass:"mb-5"},[e._v("Welcome to your homepage "+e._s(e.name))]),n("ButtonComponent",{attrs:{id:"btnLogout",name:"Log out"},on:{click:e.logoutAndGoToLogin}})],1)])},m=[],h=(n("b0c0"),n("5530")),g=n("2f62"),v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{alt:"Karumi logo",src:n("cf05")}})])}],w=(n("0573"),{}),y=Object(s["a"])(w,v,b,!1,null,"17eabf40",null),k=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{attrs:{id:e.id,size:"lg",variant:"primary"},on:{click:function(t){return e.$emit("click")}}},[n("span",[e._v(" "+e._s(e.name)+" ")])])],1)},_=[],j={props:{id:{type:String,default:"btnId",required:!1},name:{type:String,default:"Send",required:!1}}},x=j,I=(n("ea19"),Object(s["a"])(x,O,_,!1,null,"8d5b43cc",null)),S=I.exports,C={name:"Home",inject:["login"],components:{LogoComponent:k,ButtonComponent:S},computed:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["user"])),{},{name:function(){return this.user.name}}),methods:{logoutAndGoToLogin:function(){this.login.logout(),this.$router.push({name:"Login"})}}},$=C,L=(n("987b"),Object(s["a"])($,f,m,!1,null,"81393df6",null)),E=L.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"logo"},[n("LogoComponent")],1),n("div",{staticClass:"content"},[n("EmailInputComponent",{staticClass:"mb-3",attrs:{id:"username",placeholder:"Username"},on:{input:e.setUsername},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("PasswordInputComponent",{staticClass:"mb-5",attrs:{id:"password",placeholder:"Password"},on:{input:e.setPassword},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("span",{staticClass:"mb-5 error",class:{hidden:!e.showError}},[e._v(" "+e._s(e.error)+" ")]),n("ButtonComponent",{attrs:{id:"btnLogin",name:"Login"},on:{click:function(t){return e.loginUser()}}})],1)])},U=[],P=(n("96cf"),n("1da1")),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("InputComponent",{attrs:{id:e.id,type:"email",placeholder:e.placeholder},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},q=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-input",{attrs:{id:e.id,type:e.type,placeholder:e.placeholder},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},A=[],B={props:{id:{type:String,default:"",required:!1},type:{type:String,default:"text",required:!1},placeholder:{type:String,default:"",required:!1},value:{type:String}},data:function(){return{model:this.value}},methods:{onInput:function(e){this.$emit("input",e)}}},N=B,M=Object(s["a"])(N,J,A,!1,null,"612590f4",null),z=M.exports,H={components:{InputComponent:z},props:{id:{type:String,default:"",required:!1},placeholder:{type:String,default:"",required:!1},value:{type:String}},data:function(){return{model:this.value}},methods:{onInput:function(e){this.$emit("input",e)}}},G=H,V=Object(s["a"])(G,R,q,!1,null,null,null),Z=V.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("InputComponent",{attrs:{id:e.id,type:"password",placeholder:e.placeholder},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},W=[],D={components:{InputComponent:z},props:{id:{type:String,default:"",required:!1},placeholder:{type:String,default:"",required:!1},value:{type:String}},data:function(){return{model:this.value}},methods:{onInput:function(e){this.$emit("input",e)}}},F=D,Q=Object(s["a"])(F,K,W,!1,null,null,null),X=Q.exports,Y={name:"Login",inject:["login","validator"],data:function(){return{username:"",password:"",showError:!1,error:""}},components:{LogoComponent:k,EmailInputComponent:Z,PasswordInputComponent:X,ButtonComponent:S},methods:{setUsername:function(e){this.username=e},setPassword:function(e){this.password=e},loginUser:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.showError=!1,e.t0=!this.validateEmail(),e.t0){e.next=6;break}return e.next=5,this.validateLogin();case 5:e.t0=!e.sent;case 6:if(!e.t0){e.next=9;break}return this.showError=!0,e.abrupt("return");case 9:this.$router.push({name:"Home"});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),validateEmail:function(){return!!this.validator.emailIsValid(this.username)||(this.error="The username is not an email",!1)},validateLogin:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.login.validate(this.username,this.password);case 2:if(t=e.sent,t){e.next=6;break}return this.error="The username or password you’ve entered is incorrect",e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},ee=Y,te=(n("070c"),Object(s["a"])(ee,T,U,!1,null,"4f2c68b1",null)),ne=te.exports,re=[{path:"/",name:"Home",component:E,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:ne},{path:"*",component:ne}],oe=re,ae=(n("45fc"),n("ade3")),ie="login",ue="logout",se=(r={},Object(ae["a"])(r,ie,(function(e,t){o["default"].set(e,"user",t)})),Object(ae["a"])(r,ue,(function(e){o["default"].set(e,"user",void 0)})),r),ce=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=n.getItem("token"),t.getters.userIsLoggedIn||null===o){e.next=6;break}return e.next=4,r.getUserByToken(o);case 4:a=e.sent,t.commit(ie,a);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),le=function(e,t,n){return function(){var r=Object(P["a"])(regeneratorRuntime.mark((function r(o,a,i){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,ce(e,t,n);case 2:o.matched.some((function(e){return e.meta.requiresAuth}))&&(e.getters.userIsLogged||i({path:"/login"})),i();case 4:case"end":return r.stop()}}),r)})));return function(e,t,n){return r.apply(this,arguments)}}()},pe=le,de=n("d4ec"),fe=function e(){Object(de["a"])(this,e),this.token=""},me="userIsLogged",he=Object(ae["a"])({},me,(function(e){return void 0!==e.user}));o["default"].use(g["a"]);var ge=new g["a"].Store({state:new fe,mutations:se,getters:he}),ve=ge,be=n("bee2"),we=function(){function e(t,n){Object(de["a"])(this,e),this._user=t,this._token=n}return Object(be["a"])(e,[{key:"user",get:function(){return this._user}},{key:"token",get:function(){return this._token}}]),e}(),ye=function(){function e(t,n,r,o){Object(de["a"])(this,e),this._id=t,this._name=n,this._username=r,this._password=o}return Object(be["a"])(e,[{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"username",get:function(){return this._username}},{key:"password",get:function(){return this._password}}]),e}(),ke=function(){function e(t){Object(de["a"])(this,e),this.server=t}return Object(be["a"])(e,[{key:"getUser",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.server.findUser(t,n);case 2:if(r=e.sent,o=JSON.parse(r),a=o._user,i=o._token,""!==i){e.next=8;break}return e.abrupt("return",new we(void 0,i));case 8:return e.abrupt("return",new we(new ye(a._id,a._name,a._username,a._password),i));case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getUserByToken",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.server.getUser(t);case 2:return n=e.sent,r=JSON.parse(n),e.abrupt("return",new ye(r._id,r._name,r._username,r._password));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),Oe=(n("7db0"),n("d81d"),n("d3b7"),[{id:1,name:"Joel",username:"joel.coll@gmail.com",password:"123456"},{id:2,name:"Andres",username:"andres@gmail.com",password:"234567"},{id:3,name:"Juan",username:"juan@gmail.com",password:"345678"},{id:4,name:"Miguel",username:"miguel@gmail.com",password:"456789"}]),_e=function(){function e(){Object(de["a"])(this,e)}return Object(be["a"])(e,[{key:"findUser",value:function(e,t){var n=this;return new Promise((function(r){setTimeout((function(){var o=Oe.map((function(e){return new ye(e.id,e.name,e.username,e.password)})).find((function(n){return n.username===e&&n.password===t})),a=n.generateToken(o),i=new we(o,a);r(JSON.stringify(i))}),2e3)}))}},{key:"getUser",value:function(e){var t=this;return new Promise((function(n){setTimeout((function(){var r=t.convertToUser(e);n(JSON.stringify(r))}),2e3)}))}},{key:"convertToUser",value:function(e){if(e.length){var t=atob(e);return JSON.parse(t)}}},{key:"generateToken",value:function(e){if(void 0!==e){var t=JSON.stringify(e);return btoa(t)}return""}}]),e}(),je=function(){function e(){Object(de["a"])(this,e)}return Object(be["a"])(e,[{key:"setItem",value:function(e,t){localStorage.setItem(e,t)}},{key:"getItem",value:function(e){return localStorage.getItem(e)}},{key:"removeItem",value:function(e){localStorage.removeItem(e)}}]),e}();o["default"].use(d["a"]);var xe=new d["a"]({mode:"history",base:"/",routes:oe});xe.beforeEach(pe(ve,new je,new ke(new _e)));var Ie=xe,Se=function(){function e(t,n,r){Object(de["a"])(this,e),this.$store=t,this.$api=n,this.$storage=r}return Object(be["a"])(e,[{key:"validate",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.getUser(t,n);case 2:if(r=e.sent,""!==r.token){e.next=5;break}return e.abrupt("return",!1);case 5:return this.$store.commit(ie,r.user),this.$storage.setItem("token",r.token),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){this.$store.commit(ue),this.$storage.removeItem("token")}}]),e}(),Ce=function(){function e(){Object(de["a"])(this,e)}return Object(be["a"])(e,[{key:"emailIsValid",value:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}}]),e}();o["default"].config.productionTip=!1,o["default"].use(a["a"]);var $e=new je;new o["default"]({router:Ie,store:ve,provide:{login:new Se(ve,new ke(new _e),$e),validator:new Ce},render:function(e){return e(p)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.a1f5b260.png"},ea19:function(e,t,n){"use strict";var r=n("c1c1"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7fb7fbc1.js.map