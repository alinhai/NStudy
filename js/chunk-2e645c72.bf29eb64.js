(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e645c72"],{3590:function(t,s,a){"use strict";var e=a("d71a"),i=a.n(e);i.a},"8c34":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"denglu"},[a("div",{staticClass:"g-content"},[a("div",{staticClass:"g-main"},[t._m(0),a("div",{staticClass:"inputbox"},[t._m(1),a("div",{staticClass:"u-input box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"dlemail j-nameforslide",attrs:{type:"text",maxlength:"11",spellcheck:"false",tabindex:"1",autocomplete:"off",placeholder:"请输入手机号",id:"phoneipt"},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),t._m(2)]),a("div",{staticClass:"inputbox"},[t._m(3),a("div",{staticClass:"u-input box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"j-inputtext dlemail",attrs:{type:"password",spellcheck:"false",tabindex:"2",autocomplete:"new-password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),a("div",{staticClass:"f-cb loginbox"},[a("a",{staticClass:"u-loginbtn btncolor tabfocus",attrs:{tabindex:"8",id:"submitBtn"},on:{click:t.handleLogin}},[t._v("登 录")])]),t._m(4)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"u-tab f-cb"},[a("a",{staticClass:"tab1 iconfont icon-youxiang"},[t._v("使用短信验证登录")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"u-logo"},[a("div",{staticClass:"u-logo-img3"},[a("a",{staticClass:"iconfont icon-shouji",attrs:{href:"#"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"u-tip"},[a("div",{staticClass:"u-success u-clear"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"u-logo"},[a("div",{staticClass:"u-logo-img2"},[a("a",{staticClass:"iconfont icon-suo",attrs:{href:"#"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-unlogin"},[a("div",{staticClass:"b-unlogn"},[a("input",{attrs:{type:"checkbox",checked:""}}),a("span",{staticClass:"u-checkbox"},[t._v("十天内免登录 | ")])]),a("div",{staticClass:"wj"},[a("a",{staticClass:"forgetpwdReg",attrs:{href:"javascript:;"}},[t._v("忘记密码？")])])])}],n=(a("e7e5"),a("d399")),o={data:function(){return{phone:"",password:"",isLogin:!0}},methods:{checkFormData:function(){return!(!this.phone||!this.password)||(this.$toast("手机号和密码不能为空！"),!1)},handleLogin:function(){var t=this;this.checkFormData()&&(this.$toast.loading({mask:!0,duration:0,message:"登录中...."}),this.$store.dispatch("login/login",{phone:this.phone,password:this.password,isLogin:this.isLogin}).then(function(){n["a"].clear(),n["a"].success("登录成功！"),setTimeout(function(){t.$router.push("/center")},2e3)}).catch(function(){n["a"].clear(),t.$toast("手机号或密码错误！")}))}}},c=o,l=(a("3590"),a("2877")),r=Object(l["a"])(c,e,i,!1,null,"32c3b7b6",null);s["default"]=r.exports},d71a:function(t,s,a){}}]);
//# sourceMappingURL=chunk-2e645c72.bf29eb64.js.map