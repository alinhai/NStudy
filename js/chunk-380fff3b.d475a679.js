(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380fff3b"],{"7e2d":function(t,n,e){},"7f7f":function(t,n,e){var a=e("86cc").f,c=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in c||e("9e1e")&&a(c,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},d50a:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"um-editAccount-box"},[e("div",{staticClass:"um-myAccount-acount f-cb f-pr"},[e("div",{staticClass:"um-myAccount-acount_img f-fl"},[e("img",{attrs:{src:t.userInfo.src}})]),e("div",{staticClass:"um-myAccount-acount_info f-fl"},[e("div",{staticClass:"nickname"},[t._v(t._s(t.userInfo.name))])]),e("div",{staticClass:"um-myAccount-acount_edit f-fr",on:{click:function(n){t.show=!0}}},[t._v("编辑")])]),e("div",{staticClass:"um-myAccount-leave",on:{click:t.leave}},[t._v("退出登录")]),e("div",{staticClass:"void"}),e("van-dialog",{staticStyle:{width:"304px","text-align":"center"},attrs:{title:"修改昵称","show-cancel-button":"","before-close":t.manage},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"ux-input",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||(t.name=n.target.value)}}})])],1)},c=[],s=(e("e7e5"),e("d399")),o=(e("7f7f"),e("1f75")),i={data:function(){return{userInfo:"",show:!1,name:""}},created:function(){var t=this;o["a"].get("/userInfo").then(function(n){t.userInfo=n,t.name=n.name})},methods:{leave:function(){var t=this;localStorage.userInfo&&localStorage.removeItem("userInfo"),s["a"].success("退出成功！"),setTimeout(function(){t.$router.push("/login")},2e3)},manage:function(t,n){"confirm"===t?(this.userInfo.name=this.name,n()):"cancel"===t&&(n(),this.name=this.userInfo.name)}}},u=i,r=(e("da24"),e("2877")),f=Object(r["a"])(u,a,c,!1,null,"91f70dfc",null);n["default"]=f.exports},da24:function(t,n,e){"use strict";var a=e("7e2d"),c=e.n(a);c.a}}]);
//# sourceMappingURL=chunk-380fff3b.d475a679.js.map