(function(e){function t(t){for(var o,a,s=t[0],i=t[1],c=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},u=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"047e":function(e,t,n){},"0573":function(e,t,n){"use strict";var o=n("047e"),r=n.n(o);r.a},"297e":function(e,t,n){},"441d":function(e,t,n){},"79b6":function(e,t,n){"use strict";var o=n("441d"),r=n.n(o);r.a},"85ec":function(e,t,n){},b674:function(e,t,n){"use strict";var o=n("297e"),r=n.n(o);r.a},c1c1:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r=n("2b0e"),u=n("5f5b"),a=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),s=[],i=(n("034f"),n("2877")),c={},l=Object(i["a"])(c,a,s,!1,null,null,null),p=l.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"logo"},[n("LogoComponent")],1),n("div",{staticClass:"content"},[n("h2",{staticClass:"mb-5"},[e._v("Welcome to your homepage "+e._s(e.name))]),n("ButtonComponent",{attrs:{id:"btnLogout",name:"Log out"},on:{click:e.logoutAndGoToLogin}})],1)])},m=[],h=(n("b0c0"),n("5530")),b=n("2f62"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{alt:"Karumi logo",src:n("cf05")}})])}],y=(n("0573"),{}),w=Object(i["a"])(y,g,v,!1,null,"17eabf40",null),_=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{attrs:{id:e.id,size:"lg",variant:"primary"},on:{click:function(t){return e.$emit("click")}}},[n("span",[e._v(" "+e._s(e.name)+" ")])])],1)},O=[],C={props:{id:{type:String,default:"btnId",required:!1},name:{type:String,default:"Send",required:!1}}},x=C,S=(n("ea19"),Object(i["a"])(x,j,O,!1,null,"8d5b43cc",null)),$=S.exports,I=n("ade3"),k="login",E="logout",L=(o={},Object(I["a"])(o,k,(function(e,t){r["default"].set(e,"user",t)})),Object(I["a"])(o,E,(function(e){r["default"].set(e,"user",void 0)})),o),P={name:"Home",components:{LogoComponent:_,ButtonComponent:$},computed:Object(h["a"])(Object(h["a"])({},Object(b["c"])(["user"])),{},{name:function(){return this.user.name}}),methods:Object(h["a"])(Object(h["a"])({},Object(b["b"])({logout:E})),{},{logoutAndGoToLogin:function(){this.logout(),this.$router.push({name:"Login"})}})},q=P,T=(n("b674"),Object(i["a"])(q,f,m,!1,null,"c70c6240",null)),U=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"logo"},[n("LogoComponent")],1),n("div",{staticClass:"content"},[n("EmailInputComponent",{staticClass:"mb-3",attrs:{id:"username",placeholder:"Username"},on:{input:e.setUsername},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("PasswordInputComponent",{staticClass:"mb-5",attrs:{id:"password",placeholder:"Password"},on:{input:e.setPassword},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("span",{staticClass:"mb-5 error",class:{hidden:!e.showError}},[e._v(" "+e._s(e.error)+" ")]),n("ButtonComponent",{attrs:{id:"btnLogin",name:"Login"},on:{click:function(t){return e.loginUser()}}})],1)])},B=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("InputComponent",{attrs:{id:e.id,type:"email",placeholder:e.placeholder},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},H=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-input",{attrs:{id:e.id,type:e.type,placeholder:e.placeholder},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},G=[],z={props:{id:{type:String,default:"",required:!1},type:{type:String,default:"text",required:!1},placeholder:{type:String,default:"",required:!1},value:{type:String}},data:function(){return{model:this.value}},methods:{onInput:function(e){this.$emit("input",e)}}},K=z,W=Object(i["a"])(K,J,G,!1,null,"612590f4",null),D=W.exports,F={components:{InputComponent:D},props:{id:{type:String,default:"",required:!1},placeholder:{type:String,default:"",required:!1},value:{type:String}},data:function(){return{model:this.value}},methods:{onInput:function(e){this.$emit("input",e)}}},N=F,Q=Object(i["a"])(N,M,H,!1,null,null,null),R=Q.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("InputComponent",{attrs:{id:e.id,type:"password",placeholder:e.placeholder},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},X=[],Y={components:{InputComponent:D},props:{id:{type:String,default:"",required:!1},placeholder:{type:String,default:"",required:!1},value:{type:String}},data:function(){return{model:this.value}},methods:{onInput:function(e){this.$emit("input",e)}}},Z=Y,ee=Object(i["a"])(Z,V,X,!1,null,null,null),te=ee.exports,ne={name:"Login",inject:["login"],data:function(){return{username:"",password:"",showError:!1,error:"The username or password you’ve entered is incorrect"}},components:{LogoComponent:_,EmailInputComponent:R,PasswordInputComponent:te,ButtonComponent:$},methods:{setUsername:function(e){this.username=e},setPassword:function(e){this.password=e},loginUser:function(){this.showError=!1,this.login.validate(this.username,this.password)?this.$router.push({name:"Home"}):this.showError=!0}}},oe=ne,re=(n("79b6"),Object(i["a"])(oe,A,B,!1,null,"14bf4176",null)),ue=re.exports,ae=[{path:"/",name:"Home",component:U,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:ue},{path:"*",component:ue}],se=ae,ie=(n("45fc"),function(e){return function(t,n,o){t.matched.some((function(e){return e.meta.requiresAuth}))&&(e.getters.userIsLogged||o({path:"/login"})),o()}}),ce=ie,le=n("d4ec"),pe=function e(){Object(le["a"])(this,e)},de="userIsLogged",fe=Object(I["a"])({},de,(function(e){return void 0!==e.user}));r["default"].use(b["a"]);var me=new b["a"].Store({state:new pe,mutations:L,getters:fe}),he=me;r["default"].use(d["a"]);var be=new d["a"]({mode:"history",base:"/",routes:se});be.beforeEach(ce(he));var ge=be,ve=n("bee2"),ye=function(){function e(t,n,o){Object(le["a"])(this,e),this._name=t,this._username=n,this._password=o}return Object(ve["a"])(e,[{key:"name",get:function(){return this._name}},{key:"username",get:function(){return this._username}},{key:"password",get:function(){return this._password}}]),e}(),we=function(){function e(t){Object(le["a"])(this,e),this.user=new ye("Joel","joel","123456"),this.$store=t}return Object(ve["a"])(e,[{key:"validate",value:function(e,t){return e===this.user.username&&t===this.user.password&&(this.$store.commit(k,this.user),!0)}}]),e}();r["default"].config.productionTip=!1,r["default"].use(u["a"]),new r["default"]({router:ge,store:he,provide:{login:new we(he)},render:function(e){return e(p)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.a1f5b260.png"},ea19:function(e,t,n){"use strict";var o=n("c1c1"),r=n.n(o);r.a}});
//# sourceMappingURL=app.3e777659.js.map