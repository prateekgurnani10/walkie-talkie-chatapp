(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"2b73":function(e,t,n){},3178:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("router-view")],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v(" Walkie-Talkie Chat App ")]),n("p",[e._v("A Full-stack realtime walkie-talkie style chat app with the ability to record and upload audio from the device. ")])])}],o={name:"App",components:{}},i=o,u=(n("034f"),n("2877")),c=Object(u["a"])(i,a,s,!1,null,null,null),l=c.exports,d=n("0ff2"),p=n("8c4f"),f=n("750b"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h2"),n("User",{scopedSlots:e._u([{key:"user",fn:function(t){var r=t.user;return[r?n("div",[n("h3",[e._v("User Profile ")]),n("UserProfile",{attrs:{user:r}}),n("h3",[e._v("My chat rooms")]),n("ChatList",{attrs:{uid:r.uid}})],1):n("Login")]}}])})],1)},m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"section"},[n("h3",[e._v("Sign in Anonymously")]),n("button",{staticClass:"button",on:{click:function(t){return e.auth.signInAnonymously()}}},[e._v("Sign In")]),e.newUser?n("div",[n("h3",[e._v("Sign Up for a New Account")]),n("a",{attrs:{href:"#"},on:{click:function(t){e.newUser=!1}}},[e._v("Returning User?")])]):n("div",[n("h3",[e._v("Sign In with Email")]),n("a",{attrs:{href:"#"},on:{click:function(t){e.newUser=!0}}},[e._v("New user?")])]),n("label",{attrs:{for:"email"}},[e._v("Email")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{placeholder:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("label",{attrs:{for:"password"}},[e._v("Password")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("button",{staticClass:"button is-info",class:{"is-loading":e.loading},on:{click:function(t){return e.signInOrCreateUser()}}},[e._v(e._s(e.newUser?"Sign Up":"Login"))]),e.errorMessage?n("p",{staticClass:"has-text-danger"},[e._v(e._s(e.errorMessage))]):e._e()])},g=[],w=(n("96cf"),n("1da1")),b=n("59ca"),_=n.n(b),x=(n("e71f"),n("ea7b"),n("588e"),{apiKey:"AIzaSyB2Ur_kcNE5whS47LHyL1NRphufJ47L2U8",authDomain:"chatapp-23d6c.firebaseapp.com",databaseURL:"https://chatapp-23d6c.firebaseio.com",projectId:"chatapp-23d6c",storageBucket:"chatapp-23d6c.appspot.com",messagingSenderId:"676721860529",appId:"1:676721860529:web:4bc0cc16b50985bc1b2790",measurementId:"G-W2NFEKCGB3"});_.a.initializeApp(x);var y=_.a.firestore(),k=_.a.auth(),C=_.a.storage(),U={data:function(){return{auth:k,newUser:!1,email:"",password:"",errorMessage:"",loading:!1}},methods:{signInOrCreateUser:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,e.errorMessage="",t.prev=2,!e.newUser){t.next=8;break}return t.next=6,k.createUserWithEmailAndPassword(e.email,e.password);case 6:t.next=10;break;case 8:return t.next=10,k.signInWithEmailAndPassword(e.email,e.password);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](2),e.errorMessage=t.t0.message;case 15:e.loading=!1;case 16:case"end":return t.stop()}}),t,null,[[2,12]])})))()}}},O=U,R=Object(u["a"])(O,v,g,!1,null,null,null),A=R.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("user",null,{user:e.user})],2)},M=[],L={setup:function(){var e=Object(f["b"])(null),t=k.onAuthStateChanged((function(t){return e.value=t}));return{user:e,unsubscribe:t}},destroyed:function(){this.unsubscribe()}},S=L,E=Object(u["a"])(S,j,M,!1,null,null,null),I=E.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Logged in as "+e._s(e.user.uid)+" "),n("button",{staticClass:"button",on:{click:function(t){return e.auth.signOut()}}},[e._v("Sign Out")])])},T=[],$={data:function(){return{auth:k}},props:["user"]},N=$,B=Object(u["a"])(N,P,T,!1,null,null,null),D=B.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.chats,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:{name:"chat",params:{id:t.id}}}},[e._v(e._s(t.id))])],1)})),0),n("button",{staticClass:"button",on:{click:function(t){return e.createChatRoom()}}},[e._v("Create New Chat Room")])])},z=[],J={data:function(){return{chats:[]}},firestore:function(){return{chats:y.collection("chats").where("owner","==",this.uid)}},methods:{createChatRoom:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.collection("chats").add({createdAt:Date.now(),owner:e.uid,members:[e.uid]});case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}}),t)})))()}},props:["uid"]},F=J,G=Object(u["a"])(F,W,z,!1,null,null,null),K=G.exports,H={components:{Login:A,User:I,UserProfile:D,ChatList:K}},V=H,q=Object(u["a"])(V,h,m,!1,null,null,null),Q=q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"section"},[n("h3",[e._v("Welcome to ChatRoom.vue "+e._s(e.chatId))]),n("router-link",{attrs:{to:"/"}},[e._v("Back")]),n("p",[e._v(" Open this link in another browser window to chat "),n("code",[e._v("https://your-url.com/#/chats/"+e._s(e.chatId))])]),n("User",{scopedSlots:e._u([{key:"user",fn:function(t){var r=t.user;return[r?n("div",[n("ul",e._l(e.messages,(function(e){return n("li",{key:e.id},[n("ChatMessage",{attrs:{message:e,owner:r.uid===e.sender}})],1)})),0),n("hr"),n("h5",[e._v("Record Audio")]),e.recorder?n("button",{staticClass:"button is-danger",on:{click:function(t){return e.stop()}}},[e._v("Stop")]):n("button",{staticClass:"button is-info",on:{click:function(t){return e.record()}}},[e._v("Record Voice")]),n("br"),e.newAudio?n("audio",{attrs:{src:e.newAudioURL,controls:""}}):e._e(),n("hr"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessageText,expression:"newMessageText"}],staticClass:"input",domProps:{value:e.newMessageText},on:{input:function(t){t.target.composing||(e.newMessageText=t.target.value)}}}),n("button",{staticClass:"button is-success",attrs:{disabled:!e.newMessageText&&!e.newAudio||e.loading,type:"text"},on:{click:function(t){return e.addMessage(r.uid)}}},[e._v("Send")])]):n("Login")]}}])})],1)},Y=[],Z=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message",class:{"from-user":e.owner}},[e._v(" "+e._s(e.message.text)+" "),n("br"),e.message.audioURL?n("audio",{attrs:{src:e.message.audioURL,controls:""}}):e._e(),n("br"),n("span",{staticClass:"sender"},[e._v("from UID "+e._s(e.message.sender))])])}),ee=[],te={props:["message","owner"]},ne=te,re=(n("75ad"),Object(u["a"])(ne,Z,ee,!1,null,null,null)),ae=re.exports,se={components:{User:I,Login:A,ChatMessage:ae},data:function(){return{newMessageText:"",loading:!1,messages:[],newAudio:null,recorder:null}},computed:{chatId:function(){return this.$route.params.id},messagesCollection:function(){return y.doc("chats/".concat(this.chatId)).collection("messages")},newAudioURL:function(){return URL.createObjectURL(this.newAudio)}},firestore:function(){return{messages:this.messagesCollection.orderBy("createdAt").limitToLast(10)}},methods:{addMessage:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.loading=!0,r=null,a=t.messagesCollection.doc(),s=a.id,!t.newAudio){n.next=10;break}return o=C.ref("chats").child(t.chatId).child("".concat(s,".wav")),n.next=7,o.put(t.newAudio);case 7:return n.next=9,o.getDownloadURL();case 9:r=n.sent;case 10:return n.next=12,t.messagesCollection.doc(s).set({text:t.newMessageText,sender:e,createdAt:Date.now(),audioURL:r});case 12:t.loading=!1,t.newMessageText="",t.newAudio=null;case 15:case"end":return n.stop()}}),n)})))()},record:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.newAudio=null,t.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 3:n=t.sent,r={mimeType:"audio/webm"},a=[],e.recorder=new MediaRecorder(n,r),e.recorder.addEventListener("dataavailable",(function(e){e.data.size>0&&a.push(e.data)})),e.recorder.addEventListener("stop",(function(){e.newAudio=new Blob(a),console.log(e.newAudio)})),e.recorder.start();case 10:case"end":return t.stop()}}),t)})))()},stop:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.recorder.stop(),e.recorder=null;case 2:case"end":return t.stop()}}),t)})))()}}},oe=se,ie=(n("f612"),Object(u["a"])(oe,X,Y,!1,null,"6b21a760",null)),ue=ie.exports;r["a"].use(f["a"]),r["a"].use(p["a"]),r["a"].use(d["a"]),r["a"].config.productionTip=!1;var ce=new p["a"]({routes:[{path:"/",component:Q},{path:"/chats/:id",component:ue,name:"chat"}]});new r["a"]({router:ce,render:function(e){return e(l)}}).$mount("#app")},"75ad":function(e,t,n){"use strict";var r=n("2b73"),a=n.n(r);a.a},"85ec":function(e,t,n){},f612:function(e,t,n){"use strict";var r=n("3178"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6e59d8d5.js.map