(this["webpackJsonpphoto-meneger"]=this["webpackJsonpphoto-meneger"]||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(71),s=n.n(c),i=(n(130),n(15)),o=(n(131),n(256)),u=n(255),l=n(0),j=n.n(l),b=n(2),d=n(21),p=n(20),O="PHOTO_MANAGER/AUTH_REDUCER/SET_AUTH_SUCCESS",h="PHOTO_MANAGER/AUTH_REDUCER/SET_AUTH_OUT",f="PHOTO_MANAGER/AUTH_REDUCER/SET_AUTH_PROFILE",m={isAuth:!1,authUserProfile:{displayName:null,email:null,photoURL:null,emailVerified:null}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(p.a)(Object(p.a)({},e),{},{isAuth:!0});case f:return Object(p.a)(Object(p.a)({},e),{},{authUserProfile:Object(p.a)(Object(p.a)({},e.authUserProfile),t.authProfile)});case h:return Object(p.a)(Object(p.a)({},e),{},{isAuth:!1,authUserProfile:{displayName:null,email:null,photoURL:null,emailVerified:null}});default:return e}},g=function(){return{type:O}},v=function(e){return{type:f,authProfile:e}},w=function(e){return function(t){t(g()),t(v(e))}},N=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a,n=Object(d.d)(),e.next=5,Object(d.h)(n,t);case 5:return e.next=7,Object(d.e)(n);case 7:a=e.sent,(r=d.a.credentialFromResult(a))&&r.accessToken,a.user;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.b,n=Object(d.d)(),e.next=4,Object(d.h)(n,t);case 4:return e.next=6,Object(d.e)(n);case 6:a=e.sent,r=d.b.credentialFromResult(a),r.accessToken,a.user;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.prev=1,r=Object(d.d)(),e.next=5,Object(d.g)(r,n,a);case 5:return c=e.sent,s=c.user,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(1),e.t0.code,i=e.t0.message,console.log(i);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.prev=1,r=Object(d.d)(),e.next=5,Object(d.c)(r,n,a);case 5:c=e.sent,c.user,e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.code,s=e.t0.message,console.log(s);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(d.d)(),e.next=4,Object(d.i)(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e.currentUser;if(null!==t)return{displayName:t.displayName,email:t.email,photoUrl:t.photoURL,emailVerified:t.emailVerified,uid:t.uid}},U=n(7),E=Object(u.a)({form:"signUp"})((function(e){return Object(U.jsxs)("form",{onSubmit:e.handleSubmit(A),children:[Object(U.jsx)(o.a,{component:"input",placeholder:"Email",name:"email"}),Object(U.jsx)(o.a,{component:"input",placeholder:"Password",name:"password",type:"password"}),Object(U.jsx)("div",{children:Object(U.jsx)("button",{type:"submit",children:"Sign Up"})})]})})),T=n(31),P=function(){return Object(U.jsx)("div",{className:"GitHubSVG",children:Object(U.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(U.jsx)("title",{}),Object(U.jsx)("g",{"data-name":"Github 1",id:"Github_1",children:Object(U.jsx)("g",{"data-name":"<Group>",id:"_Group_",children:Object(U.jsx)("path",{d:"M12,.5A11.5,11.5,0,0,0,.5,12a11.82,11.82,0,0,0,9,11.5v-3h-1c-2.62,0-3.54-4-5-4,\r 2.79,0,3.33,2,5,2a.89.89,0,0,0,1-1v-.35c-2.91-.82-5-3-5-5.65A5.26,5.26,0,0,1,6.07,7.84,\r 3.16,3.16,0,0,1,6.5,4.5,5.26,5.26,0,0,1,8.88,6a9.14,9.14,0,0,1,6.24,0A5.26,5.26,0,0,1,17.5,\r 4.5a3.16,3.16,0,0,1,.43,3.34A5.26,5.26,0,0,1,19.5,11.5c0,2.74-2.29,5-5.42,5.76a4.68,4.68,0,\r 0,1,.42,2.24v4a11.82,11.82,0,0,0,9-11.5A11.5,11.5,0,0,0,12,.5Z","data-name":"<Path>",id:"_Path_",style:{fill:"none",stroke:"#555555",strokeLinecap:"round",strokeLinejoin:"round"}})})})]})})},C="PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_GITHAB_LOGIN",k="PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_GOOGLE_LOGIN",L="PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_EMAIL_PASS_LOGIN",G="PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_SIGN_UP",H={authLogin:"signInEmailPass"},R=function(e,t){switch(t.type){case C:return Object(p.a)(Object(p.a)({},e),{},{authLogin:"signInGitHub"});case k:return Object(p.a)(Object(p.a)({},e),{},{authLogin:"signInGoogle"});case L:return Object(p.a)(Object(p.a)({},e),{},{authLogin:"signInEmailPass"});case G:return Object(p.a)(Object(p.a)({},e),{},{authLogin:"signUp"});default:return e}},M=function(){return{type:G}},F=Object(u.a)({form:"signIn"})((function(e){var t=function(){var t=Object(b.a)(j.a.mark((function t(n){var a,r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.email,r=n.password,t.next=3,y({email:a,password:r});case 3:(c=t.sent)&&e.setAuthUser(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){var t=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:(n=t.sent)&&e.setAuthUser(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:(n=t.sent)&&e.setAuthUser(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("form",{className:"auth-form-container",onSubmit:e.handleSubmit(t),children:[Object(U.jsx)("span",{className:"auth-form-title",children:"Sign In With"}),Object(U.jsxs)("div",{className:"login-button-wrapper",children:[Object(U.jsxs)("div",{onClick:a,className:"auth-github login-button",children:[Object(U.jsx)(P,{}),"GitHub"]}),Object(U.jsx)("div",{onClick:n,className:"auth-google login-button",children:"Google"})]}),Object(U.jsx)("div",{className:"auth-input-label",children:"Username"}),Object(U.jsx)(o.a,{className:"auth-input",component:"input",name:"email"}),Object(U.jsx)("div",{className:"auth-input-label",children:"Password"}),Object(U.jsx)(o.a,{className:"auth-input",component:"input",name:"password",type:"password"}),Object(U.jsx)("div",{className:"auth-submit-container",children:Object(U.jsx)("button",{className:"auth-submit-button",type:"submit",children:"Sign In"})}),Object(U.jsx)("div",{className:"auth-signUp",children:Object(U.jsxs)("p",{children:["Not a member? ",Object(U.jsx)("span",{className:"auth-text-link",onClick:e.logIn,children:"Sign up now"})]})})]})})})),z=Object(T.b)(null,{setAuthUser:w})(F),B=Object(u.a)({form:"signInGoogle"})((function(e){var t=function(){var t=Object(b.a)(j.a.mark((function t(n){var a,r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.email,r=n.password,t.next=3,S({email:a,password:r});case 3:(c=t.sent)&&e.setAuthUser(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("form",{className:"auth-form-container",onSubmit:e.handleSubmit(t),children:[Object(U.jsx)("span",{className:"auth-form-title",children:"Sign In With"}),Object(U.jsxs)("div",{className:"login-button-wrapper",children:[Object(U.jsx)("div",{className:"auth-github login-button",children:"github"}),Object(U.jsx)("div",{className:"auth-google login-button",children:"google"})]}),Object(U.jsxs)("a",{href:"#",className:"btn-face m-b-20",children:[Object(U.jsx)("i",{className:"fa fa-facebook-official"}),"GitHub"]}),Object(U.jsx)("a",{href:"#",className:"btn-google m-b-20",children:"Google"}),Object(U.jsx)("div",{className:"auth-input-label",children:"Username"}),Object(U.jsx)(o.a,{className:"auth-input",component:"input",name:"email"}),Object(U.jsx)("div",{className:"auth-input-label",children:"Password"}),Object(U.jsx)(o.a,{className:"auth-input",component:"input",name:"password",type:"password"}),Object(U.jsx)("div",{className:"auth-submit-container",children:Object(U.jsx)("button",{className:"auth-submit-button",type:"submit",children:"Sign In"})}),Object(U.jsx)("div",{className:"auth-signUp",children:Object(U.jsxs)("p",{children:["Not a member? ",Object(U.jsx)("span",{className:"auth-text-link",onClick:function(){return e.setSignUp(!0)},children:"Sign up now"})]})})]})})})),D=Object(T.b)(null,{setAuthUser:w})(B),Z=function(){var e=Object(a.useReducer)(R,H),t=Object(i.a)(e,2),n=t[0],r=t[1];switch(n.authLogin){case"signUp":return Object(U.jsx)(E,{dispatch:r});case"signInEmailPass":return Object(U.jsx)(z,{logIn:function(){return r(M())}});case"signInGitHub":return Object(U.jsx)(D,{dispatch:r})}},V=function(){return Object(U.jsx)("div",{className:"auth-wrapper",children:Object(U.jsx)("div",{className:"auth-container",children:Object(U.jsx)("div",{className:"auth-content",children:Object(U.jsx)(Z,{})})})})},J="PHOTO_MANAGER/INITIALISE_APP/SET_INITIALIZED_SUCCESS",W="PHOTO_MANAGER/INITIALISE_APP/UPDATE_STATUS_AUTHORISED_USER",X={isFetchingAuthState:!0,isInitialized:!1,auth:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(p.a)(Object(p.a)({},e),{},{isInitialized:!0});case W:return Object(p.a)(Object(p.a)({},e),{},{userId:t.userId});default:return e}},q=n(96),Q=n.n(q),Y=function(){return Object(U.jsx)("div",{className:Q.a.preloader,children:Object(U.jsx)("div",{className:Q.a.spinner})})},$=Object(T.b)(null,{setAuthOut:function(){return{type:h}}})((function(e){var t=e.setAuthOut;return Object(U.jsx)("button",{onClick:function(){var e=Object(d.d)();console.log(e),_(),t()},children:"Sign Out"})})),ee=function(e){var t=e.user,n=void 0===t?"My":t;return Object(U.jsx)("h1",{className:"text",children:"".concat(n," Pictures")})},te=n(253),ne=n(254),ae={hidden:{opacity:0},visible:{opacity:1,transition:{duration:2,ease:"easeInOut"}}},re=function(e){var t=e.width,n=void 0===t?"24px":t,r=e.height,c=void 0===r?"24px":r,s=(e.fill,Object(a.useState)("rgb(102,102,255)")),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),d=(b[0],b[1]);return Object(U.jsx)(te.a,{transition:{duration:.2},children:Object(U.jsxs)(ne.a.svg,{width:n,height:c,variants:ae,initial:"hidden",animate:"visible",transition:{duration:2},onHoverStart:function(e){l("#ad78e2"),d(!0)},onHoverEnd:function(e){l("rgb(102,102,255)"),d(!1)},version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512",children:[Object(U.jsx)(ne.a.path,{animate:{fill:u},d:"M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,460.2\r c-112.6,0-204.2-91.6-204.2-204.2S143.4,51.8,256,51.8S460.2,143.4,460.2,256S368.6,460.2,256,460.2z",fill:"rgb(102,102,255)"}),Object(U.jsx)(ne.a.path,{animate:{fill:u},d:"m357.6,235.6h-81.2v-81.2c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v81.2h-81.2c-11.3,\r 0-20.4,9.1-20.4,20.4s9.1,20.4 20.4,20.4h81.2v81.2c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-81.2h81.2c11.3,0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4z",fill:"rgb(102,102,255)"})]})})},ce=n(40),se=n(124),ie=n(34);Object(se.a)({apiKey:"AIzaSyCabll9MrWiJ49ycRHOa43D9l8lHHlo-6s",authDomain:"alterrant.github.io",projectId:"photo-meneger",storageBucket:"photo-meneger.appspot.com",messagingSenderId:"187018482745",appId:"1:187018482745:web:74ea2a0c06a33fb66929e8",measurementId:"G-2MRR3CB7KB"});var oe=Object(ce.c)(),ue=Object(ie.e)(),le=function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(null),o=Object(i.a)(s,2),u=o[0],l=o[1],d=Object(a.useState)(null),p=Object(i.a)(d,2),O=p[0],h=p[1];return Object(a.useEffect)((function(){var t=Object(ce.d)(oe,"user1"),n=Object(ce.d)(t,e.name),a=Object(ie.g)();Object(ce.e)(n,e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){l(e)}),Object(b.a)(j.a.mark((function t(){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ce.b)(n);case 2:return r=t.sent,h(r),t.next=6,Object(ie.a)(Object(ie.b)(ue,"user1"),{name:e.name,imageUrl:r,addedTime:a});case 6:case"end":return t.stop()}}),t)}))))}),[e]),{progress:r,url:O,error:u}},je=function(e){var t=e.file,n=e.setFile,r=le(t),c=r.url,s=r.progress;return Object(a.useEffect)((function(){c&&n(null)}),[c]),Object(U.jsx)(ne.a.div,{className:"progress-bar",initial:{width:0},animate:{width:s+"%"}})},be=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],u=s[1],l=["image/png","image/jpeg"];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"wrapper-input",children:[Object(U.jsx)("input",{className:"inputfile",type:"file",onChange:function(e){var t=e.target.files[0];t&&l.includes(t.type)?(r(t),u("")):(r(null),u("Please choose png or jpeg file"))},id:"inputImage"}),Object(U.jsx)("label",{className:"inputImage",htmlFor:"inputImage",children:Object(U.jsx)(re,{})})]}),Object(U.jsxs)("div",{className:"output",children:[o&&Object(U.jsx)("div",{className:"error",children:o}),n&&Object(U.jsx)("div",{children:n.name}),n&&Object(U.jsx)(je,{file:n,setFile:r})]})]})},de=(n(248),function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user1",a=Object(ce.d)(oe,"".concat("user1","/").concat(t)),Object(ce.a)(a).then((function(){console.log("Photo has been deleted: ")})).catch((function(e){console.log("Error deleting photo: ",e)})),e.next=5,Object(ie.c)(Object(ie.d)(ue,"user1","".concat(n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),pe=function(e){var t=e.fileName,n=e.imageId;return Object(U.jsxs)(ne.a.svg,{onClick:function(){return de(t,n)},className:"delete-picture",opacity:.4,whileHover:{opacity:1},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",width:"24px",height:"24px",children:[Object(U.jsxs)("defs",{children:[Object(U.jsxs)("linearGradient",{id:"linear0",gradientUnits:"userSpaceOnUse",x1:"113",y1:"17.65625",x2:"113",y2:"208.81694",gradientTransform:"matrix(0.106195,0,0,0.106195,0,0)",children:[Object(U.jsx)("stop",{offset:"0",style:{stopColor:"rgb(89.803922%, 69.803923%, 79.215688%)",stopOpacity:1}}),Object(U.jsx)("stop",{offset:"1",style:{stopColor:"rgb(43.921569%, 15.686275%, 89.411765%)",stopOpacity:1}})]}),Object(U.jsxs)("linearGradient",{id:"linear1",gradientUnits:"userSpaceOnUse",x1:"113",y1:"17.65625",x2:"113",y2:"208.81694",gradientTransform:"matrix(0.106195,0,0,0.106195,0,0)",children:[Object(U.jsx)("stop",{offset:"0",style:{stopColor:"rgb(89.803922%, 69.803923%, 79.215688%)",stopOpacity:1}}),Object(U.jsx)("stop",{offset:"1",style:{stopColor:"rgb(43.921569%, 15.686275%, 89.411765%)",stopOpacity:1}})]}),Object(U.jsxs)("linearGradient",{id:"linear2",gradientUnits:"userSpaceOnUse",x1:"113",y1:"73.566528",x2:"113",y2:"150.777313",gradientTransform:"matrix(0.106195,0,0,0.106195,0,0)",children:[Object(U.jsx)("stop",{offset:"0",style:{stopColor:"rgb(100%, 100%, 100%)",stopOpacity:1}}),Object(U.jsx)("stop",{offset:"1",style:{stopColor:"rgb(69.803923%, 54.901963%, 94.509804%)",stopOpacity:1}})]})]}),Object(U.jsxs)("g",{id:"surface28850912",children:[Object(U.jsx)("path",{style:{stroke:"none",fillRule:"nonzero",fill:"url(#linear0)"},d:"M 12 21.75 C 6.625 21.75 2.25 17.375 2.25 12 C 2.25 6.625 6.625 2.25 12 2.25 C 17.375 2.25 21.75 6.625 21.75 12 C 21.75 17.375 17.375 21.75 12 21.75 Z M 12 3 C 7.039062 3 3 7.039062 3 12 C 3 16.960938 7.039062 21 12 21 C 16.960938 21 21 16.960938 21 12 C 21 7.039062 16.960938 3 12 3 Z M 12 3 "}),Object(U.jsx)("path",{style:{stroke:"none",fillRule:"nonzero",fill:"url(#linear1)"},d:"M 12 19.5 C 7.863281 19.5 4.5 16.136719 4.5 12 C 4.5 7.863281 7.863281 4.5 12 4.5 C 16.136719 4.5 19.5 7.863281 19.5 12 C 19.5 16.136719 16.136719 19.5 12 19.5 Z M 12 5.25 C 8.277344 5.25 5.25 8.277344 5.25 12 C 5.25 15.722656 8.277344 18.75 12 18.75 C 15.722656 18.75 18.75 15.722656 18.75 12 C 18.75 8.277344 15.722656 5.25 12 5.25 Z M 12 5.25 "}),Object(U.jsx)("path",{style:{stroke:"none",fillRule:"nonzero",fill:"url(#linear2)"},d:"M 15.257812 9.273438 L 14.726562 8.738281 C 14.574219 8.585938 14.324219 8.585938 14.171875 8.738281 L 12 10.910156 L 9.828125 8.742188 C 9.675781 8.585938 9.425781 8.585938 9.273438 8.742188 L 8.742188 9.273438 C 8.585938 9.425781 8.585938 9.675781 8.742188 9.828125 L 10.910156 12 L 8.742188 14.171875 C 8.585938 14.324219 8.585938 14.574219 8.742188 14.726562 L 9.273438 15.257812 C 9.425781 15.414062 9.675781 15.414062 9.828125 15.257812 L 12 13.089844 L 14.171875 15.257812 C 14.324219 15.414062 14.574219 15.414062 14.726562 15.257812 L 15.257812 14.726562 C 15.414062 14.574219 15.414062 14.324219 15.257812 14.171875 L 13.089844 12 L 15.257812 9.828125 C 15.414062 9.675781 15.414062 9.425781 15.257812 9.273438 Z M 15.257812 9.273438 "})]})]})},Oe=function(e){var t=e.setSelectedPhoto,n=e.doc,a=n&&n.sort((function(e,t){if(t.addedTime&&e.addedTime)return t.addedTime.seconds-e.addedTime.seconds})).map((function(e){return Object(U.jsxs)(ne.a.li,{className:"image-wrapper",layout:!0,transition:{duration:.275},whileHover:{opacity:1,boxShadow:"0 0 8px rgba(128,0,128,0.5)"},children:[Object(U.jsx)(pe,{fileName:e.name,imageId:e.id}),Object(U.jsx)("img",{onClick:function(){return t(e.imageUrl)},src:e.imageUrl,alt:"imageFromBase"})]},e.id)}));return Object(U.jsx)(U.Fragment,{children:a})},he=function(e){var t="",n=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=Object(ie.f)(Object(ie.b)(ue,e),(function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)({id:e.id},e.data()))})),c(t)}));return function(){return t()}}),[e]),[r]}("user1"),r=Object(i.a)(n,1)[0];switch(r&&r.length){case 1:t="one-photo-grid";break;case 2:t="two-photo-grid";break;default:t="photos-wrapper"}return Object(U.jsx)("div",{children:Object(U.jsx)("ul",{className:t,children:Object(U.jsx)(Oe,Object(p.a)(Object(p.a)({},e),{},{doc:r}))})})},fe=function(e){var t=e.selectedPhoto,n=e.setSelectedPhoto;return Object(U.jsx)("div",{onClick:function(e){e.target.classList.contains("selectedPhoto-wrapper")&&n(null)},className:"selectedPhoto-wrapper",children:Object(U.jsx)(ne.a.img,{src:t,alt:"selectedPhoto",initial:{opacity:0},animate:{opacity:1},transition:{duration:.275}})})},me=function(e){var t=e.selectedPhoto,n=e.setSelectedPhoto;return Object(U.jsxs)("div",{className:"main-wrapper",children:[Object(U.jsx)($,{}),Object(U.jsx)(ee,{}),Object(U.jsx)(be,{fill:"#8A2BE2",stroke:"#8A2BE2"}),Object(U.jsx)(he,{setSelectedPhoto:n}),t&&Object(U.jsx)(fe,{selectedPhoto:t,setSelectedPhoto:n})]})};var xe=Object(T.b)((function(e){return{isAuth:e.auth.isAuth,isInit:e.initialiseApp.isInitialized}}),{initialize:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&(n(v(I(e.auth))),n(g())),n({type:J});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.isInit,r=e.initialize,c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){var e=Object(d.d)();Object(d.f)(e,(function(e){e?r(e):r()}))}),[]),n?Object(U.jsx)(U.Fragment,{children:t?Object(U.jsx)(me,{selectedPhoto:o,setSelectedPhoto:u}):Object(U.jsx)(V,{})}):Object(U.jsx)(Y,{})})),ge=n(25),ve={initialiseApp:K,auth:x,form:n(257).a},we=Object(ge.c)(ve),Ne=n(125),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.d,ye=Object(ge.e)(we,Se(Object(ge.a)(Ne.a))),Ae=n(56);s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(Ae.a,{children:Object(U.jsx)(T.a,{store:ye,children:Object(U.jsx)(xe,{})})})}),document.getElementById("root"))},96:function(e,t,n){e.exports={preloader:"Preloader_preloader__T60r3",spinner:"Preloader_spinner__1GcI2",spin:"Preloader_spin__3nsEv"}}},[[249,1,2]]]);
//# sourceMappingURL=main.09032737.chunk.js.map