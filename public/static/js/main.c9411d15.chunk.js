(this["webpackJsonpcode-creator"]=this["webpackJsonpcode-creator"]||[]).push([[0],{321:function(e,t,a){e.exports=a(647)},326:function(e,t,a){},647:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(326),a(327),a(144)),i=a.n(o),u=(a(329),a(88)),m=a.n(u),s=a(49),f=a(61),E=(a(214),a(227),a(159),a(230),a(119),a(162),a(233),a(120),a(235),a(163),a(236),a(338),a(238),a(240),a(143)),d=a.n(E),p=(a(342),a(212)),g=a.n(p),b=(a(168),a(59)),h=a.n(b),v=(a(348),a(108)),y=a.n(v),O=(a(75),a(17)),j=a.n(O),x=(a(90),a(23)),C=a.n(x),k=a(103),S=a(7),w=(a(122),a(9)),I=a.n(w),A=(a(123),a(26)),T=a.n(A),F=a(8),N=(a(242),a(140)),z=a.n(N),R=a(139),q=a(34),L=a.n(q),P=a(316),V=z.a.TabPane;function _(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(t&&e){var n=t;return Object.keys(e).forEach((function(t){n=n.replace(new RegExp("{{".concat(t,"}}"),"g"),'<span class="slot-'.concat(t," ").concat(t===a?"actived-code":"",'">').concat(e[t]||" ","</span>"))})),n}return""}function M(e,t){var a=new Blob([B(t,e.code)],{type:"text/plain;charset=utf-8"});Object(P.saveAs)(a,e.name)}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=t;return Object.keys(e).forEach((function(t){a=a.replace(new RegExp("{{".concat(t,"}}"),"g"),e[t])})),a}var H=function(){var e,t=Object(f.g)(),a=t.name,c=t.version,r=Object(n.useState)({name:"",author:"",version:"1.0.0",description:"",files:[]}),o=Object(F.a)(r,2),i=o[0],u=o[1];Object(n.useEffect)((function(){L.a.get("/api/getPackage?name=".concat(a,"&version=").concat(c)).then((function(e){u(e.data.data)}))}),[a,c]);var m=Object(n.useState)(""),s=Object(F.a)(m,2),E=s[0],p=s[1],b=Object(n.useState)([]),v=Object(F.a)(b,2),O=v[0],x=v[1];Object(n.useEffect)((function(){i.files.length>0&&L.a.all(i.files.map((function(e){return L.a.get(e.template.url)}))).then(L.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];x(t.map((function(e,t){return{name:i.files[t].template.name,code:e.data}}))),P(t[0].data)})),(function(){T.a.error("\u6a21\u7248\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25")}))}),[i.files]);var w=Object(n.useState)(0),A=Object(F.a)(w,2),N=A[0],q=A[1];Object(n.useEffect)((function(){O&&O.length>0&&P(O[Number(N)].code)}),[N,O]);var P=function(e){p(e),$(e),setTimeout(Prism.highlightAll,0)},H=I.a.useForm(),J=Object(F.a)(H,1)[0],W=Object(n.useState)([]),Z=Object(F.a)(W,2),D=Z[0],K=Z[1],$=function(e){if(e)if(D[N])J.setFieldsValue(D[N]);else{var t=e.match(/(?<={{)([A-Za-z0-9_]*?)(?=}})/gm),a=Object(S.a)(D);t?(a[N]=function(e){var t={};return e.forEach((function(e){void 0===t[e]&&(t[e]="")})),t}(t),J.setFieldsValue(a[N])):(a[N]={},J.resetFields(),T.a.error("\u4ee3\u7801\u4e2d\u4e0d\u5b58\u5728\u63d2\u69fd\uff01")),K(a)}},G=Object(n.useCallback)((function(e){var t=Object(S.a)(D);t[N]=Object(k.a)({},t[N],{},e),K(t),J.setFieldsValue(t[N])}),[D,N]),Q=Object(n.useState)(""),U=Object(F.a)(Q,2),X=U[0],Y=U[1],ee=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(e){return l.a.createElement(I.a.Item,{name:e,key:e,label:e,required:!0},l.a.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165",onFocus:function(){return Y(e)}}))}))}),[G]),te=Object(n.useMemo)((function(){return D.length>0?ee(D[N]):""}),[D,ee,N]),ae=Object(n.useState)(!1),ne=Object(F.a)(ae,2),le=ne[0],ce=ne[1],re=Object(n.useState)(""),oe=Object(F.a)(re,2),ie=oe[0],ue=oe[1];return l.a.createElement("div",{style:{display:"flex",height:"100%",padding:20}},l.a.createElement(h.a,{style:{flex:1,display:"flex",flexDirection:"column",overflow:"auto"},headStyle:{flexShrink:0},title:"\u4ee3\u7801\u9884\u89c8\u533a\u57df",extra:l.a.createElement("div",null,""!==X&&l.a.createElement(j.a,{onClick:function(){Y(""),setTimeout(Prism.highlightAll,0)}},"\u4ee3\u7801\u9ad8\u4eae"),l.a.createElement(j.a,{type:"primary",onClick:function(){ce(!0),ue(E)}},"\u5bfc\u5165/\u7f16\u8f91\u4ee3\u7801"),l.a.createElement(R.CopyToClipboard,{text:D.length>0&&B(D[N],E),onCopy:function(){return T.a.success("\u590d\u5236\u6210\u529f")}},l.a.createElement(j.a,{type:"primary"},"\u590d\u5236\u4ee3\u7801")),l.a.createElement(j.a,{type:"primary",onClick:function(){return function(e,t){e.forEach((function(e,a){M(e,t[a])}))}(O,D)}},"\u5bfc\u51fa\u6a21\u7248"))},l.a.createElement(y.a,{title:"\u57fa\u672c\u4fe1\u606f"},l.a.createElement(y.a.Item,{label:"\u4f5c\u8005"},i.name),l.a.createElement(y.a.Item,{label:"\u7248\u672c"},i.version),l.a.createElement(y.a.Item,{label:"\u7b80\u4ecb"},i.description)),O&&O.length>0&&l.a.createElement(z.a,{defaultActiveKey:String(N),onChange:function(e){q(Number(e))}},O.map((function(e,t){return l.a.createElement(V,{tab:e.name,key:String(t)},l.a.createElement("pre",{className:" language-".concat(e.name.split(".")[1])},l.a.createElement("code",{className:"language-".concat(e.name.split(".")[1]),dangerouslySetInnerHTML:{__html:D.length>0&&_(D[t],E,X)}})))})))),l.a.createElement(h.a,{title:"\u3010".concat(null===(e=O[N])||void 0===e?void 0:e.name,"\u3011\u914d\u7f6e"),style:{width:"500px",marginLeft:20},extra:l.a.createElement(j.a,{type:"primary",onClick:function(){return M(O[N],D[N])}},"\u5bfc\u51fa\u5f53\u524d\u6587\u4ef6")},l.a.createElement("div",null,l.a.createElement(I.a,{form:J,labelCol:{span:8},onValuesChange:function(e){return G(e)}},N>0&&l.a.createElement(I.a.Item,{label:"\u63d2\u69fd\u503c\u7ee7\u627f"},l.a.createElement(g.a,{placeholder:"\u9009\u62e9\u6a21\u7248\u63d2\u69fd\u7ee7\u627f",onSelect:function(e){return function(e){var t=D[Number(e)],a=Object(S.a)(D);a[N]=Object(k.a)({},D[N],{},t),K(a),J.setFieldsValue(a[N])}(e)},allowClear:!0},O.map((function(e,t){return l.a.createElement(g.a.Option,{key:t,value:t,disabled:t===N},e.name)})))),te))),l.a.createElement(d.a,{visible:le,title:"\u5bfc\u5165\u4ee3\u7801\u3010\u53ef\u7f16\u8f91\u3011",onOk:function(){P(ie),ce(!1)},onCancel:function(){ue(""),ce(!1)}},l.a.createElement(C.a.TextArea,{onChange:function(e){var t=e.target;return ue(t.value)},value:ie,allowClear:!0,autoSize:{minRows:10}})))};function J(e){L.a.post("api/updateSetting",e).then((function(e){console.log(e),T.a.success("\u8bbe\u7f6e\u6210\u529f")}))}var W=function(){var e=I.a.useForm(),t=Object(F.a)(e,1)[0];return Object(n.useEffect)((function(){L.a.get("/api/getSetting").then((function(e){t.setFieldsValue(e.data)}))}),[]),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",{style:{width:"680px",margin:"0 auto",backgroundColor:"#fff",padding:20}},l.a.createElement(I.a,{form:t,onFinish:J},l.a.createElement(I.a.Item,{name:"rule",label:"\u89c4\u5219(\u6b63\u5219)",required:!0},l.a.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"})),l.a.createElement(I.a.Item,null,l.a.createElement(j.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))))},Z=(a(590),a(591),a(320)),D=a.n(Z),K=a(57),$=a(655),G=a(656),Q=a(657),U=function(e){var t=e.value,a=e.onChange,n=Object(K.a)(e,["value","onChange"]);return l.a.createElement(D.a,Object.assign({},n,{onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?(a&&a({name:e.file.name,url:e.file.response.data.url}),T.a.success("".concat(e.file.name," file uploaded successfully"))):"error"===e.file.status&&T.a.error("".concat(e.file.name," file upload failed."))},onRemove:function(){a&&a("")}}),!t&&l.a.createElement(j.a,null,l.a.createElement($.a,null)," \u70b9\u51fb\u4e0a\u4f20"))};function X(e){console.log(e),L.a.post("/api/savePackage",e).then((function(e){e.data.success?T.a.success("\u64cd\u4f5c\u6210\u529f"):T.a.error(e.data.message)}))}var Y=function(){var e=I.a.useForm(),t=Object(F.a)(e,1)[0],a={name:"file",action:"/api/upload"};return l.a.createElement("div",null,l.a.createElement("div",{style:{width:"680px",margin:"0 auto",backgroundColor:"#fff",padding:20}},l.a.createElement(I.a,{form:t,labelCol:{span:4},onFinish:X},l.a.createElement(I.a.Item,{name:"name",label:"\u6a21\u7248\u540d",required:!0},l.a.createElement(C.a,null)),l.a.createElement(I.a.Item,{name:"description",label:"\u6982\u8981",required:!0},l.a.createElement(C.a.TextArea,{autoSize:{minRows:2}})),l.a.createElement(I.a.Item,{name:"version",label:"\u7248\u672c\u53f7",required:!0},l.a.createElement(C.a,null)),l.a.createElement(I.a.Item,{name:"author",label:"\u4f5c\u8005",required:!0},l.a.createElement(C.a,null)),l.a.createElement(I.a.List,{name:"files"},(function(e,t){var n=t.add,c=t.remove;return l.a.createElement("div",null,e.map((function(t,n){return l.a.createElement("div",{key:t.key,className:"template-ctn"},l.a.createElement("p",{className:"template-title"},"\u6a21\u7248\u6587\u4ef6",n+1),l.a.createElement(I.a.Item,{name:[t.name,"template"],label:"\u6a21\u7248\u6587\u4ef6"},l.a.createElement(U,a)),l.a.createElement(I.a.Item,{name:[t.name,"description"],label:"\u7b80\u4ecb"},l.a.createElement(C.a.TextArea,{autoSize:{minRows:2}})),l.a.createElement(I.a.Item,{name:[t.name,"readme"],label:"\u8bf4\u660e\u6587\u6863(md)"},l.a.createElement(U,Object.assign({},a,{accept:".md"}))),e.length>1?l.a.createElement(G.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){c(t.name)}}):"")})),l.a.createElement(I.a.Item,{label:"\u6a21\u7248"},l.a.createElement(j.a,{type:"dashed",onClick:function(){n()},style:{width:"60%",marginTop:10}},l.a.createElement(Q.a,null)," \u6dfb\u52a0\u6a21\u7248")))})),l.a.createElement(I.a.Item,{style:{textAlign:"center"}},l.a.createElement(j.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))))},ee=(a(619),a(300),a(243),a(206)),te=a.n(ee),ae=(a(241),a(205)),ne=a.n(ae),le=(a(244),a(207)),ce=a.n(le),re=function(){var e=Object(n.useState)([]),t=Object(F.a)(e,2),a=t[0],c=t[1],r=Object(f.f)();Object(n.useEffect)((function(){L.a.get("/api/list").then((function(e){c(e.data)}))}),[]);var o=Object(n.useState)(""),i=Object(F.a)(o,2),u=i[0],m=i[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(C.a,{size:"large",style:{width:"300px",marginLeft:10},value:u,onChange:function(e){var t=e.target;return m(t.value)},placeholder:"\u8bf7\u8f93\u5165\u6a21\u7248\u540d\u641c\u7d22"})),l.a.createElement(te.a,null,a&&a.length>0?a.filter((function(e){return-1!==e.name.indexOf(u)})).map((function(e){return l.a.createElement(ce.a,{key:e.name,xs:24,sm:24,md:12,lg:6,style:{padding:10}},l.a.createElement(h.a,{title:e.name,extra:e.version,onClick:function(){return r.push("/creator/".concat(e.name,"/").concat(e.version))}},l.a.createElement("pre",null,e.description||"\u6682\u65e0\u7b80\u4ecb"),l.a.createElement("p",{style:{textAlign:"right"}},"\u4f5c\u8005\uff1a",e.author)))})):l.a.createElement(ne.a,null)))};a(301),a(302),a(44),a(265),a(87);function oe(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(t){var n=t;return Object.keys(e).forEach((function(t){n=n.replace(new RegExp("{{".concat(t,"}}"),"g"),'<span class="slot-'.concat(t," ").concat(t===a?"actived-code":"",'">').concat(e[t]||" ","</span>"))})),n}return""}function ie(e,t){if(t){var a=t;return Object.keys(e).forEach((function(t){a=a.replace(new RegExp("{{".concat(t,"}}"),"g"),e[t])})),a}return""}var ue=function(){var e=Object(n.useState)(""),t=Object(F.a)(e,2),a=t[0],c=t[1],r=function(e){c(e),function(e){if(e){var t=e.match(/(?<={{)([A-Za-z0-9_]*?)(?=}})/gm);t?m(function(e){var t={};return e.forEach((function(e){void 0===t[e]&&(t[e]="")})),t}(t)):(m({}),T.a.error("\u4ee3\u7801\u4e2d\u4e0d\u5b58\u5728\u63d2\u69fd\uff01"))}}(e),Prism.highlightAll()},o=Object(n.useState)({}),i=Object(F.a)(o,2),u=i[0],m=i[1],s=Object(n.useCallback)((function(e){m(Object(k.a)({},u,{},e))}),[u]),f=Object(n.useState)(""),E=Object(F.a)(f,2),p=E[0],g=E[1],b=Object(n.useCallback)((function(e){return l.a.createElement(I.a,{labelCol:{span:8},onValuesChange:function(e){return s(e)}},Object.keys(e).map((function(e){return l.a.createElement(I.a.Item,{name:e,key:e,label:e,required:!0},l.a.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165",onFocus:function(){return g(e)}}))})))}),[s]),v=Object(n.useMemo)((function(){return b(u)}),[u,b]),y=Object(n.useState)(!1),O=Object(F.a)(y,2),x=O[0],S=O[1],w=Object(n.useState)(""),A=Object(F.a)(w,2),N=A[0],z=A[1];return l.a.createElement("div",{style:{display:"flex",height:"100%",padding:20}},l.a.createElement(h.a,{style:{flex:1},title:"\u4ee3\u7801\u9884\u89c8\u533a\u57df",extra:l.a.createElement("div",null,""!==p&&l.a.createElement(j.a,{onClick:function(){g(""),setTimeout(Prism.highlightAll,0)}},"\u4ee3\u7801\u9ad8\u4eae"),l.a.createElement(j.a,{type:"primary",onClick:function(){S(!0),z(a)}},"\u5bfc\u5165/\u7f16\u8f91\u4ee3\u7801"),l.a.createElement(R.CopyToClipboard,{text:ie(u,a),onCopy:function(){return T.a.success("\u590d\u5236\u6210\u529f")}},l.a.createElement(j.a,{type:"primary"},"\u590d\u5236\u4ee3\u7801")))},l.a.createElement("pre",{className:" language-tsx"},l.a.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:a?oe(u,a,p):"\u8bf7\u5bfc\u5165\u4ee3\u7801"}}))),l.a.createElement(h.a,{title:"\u6a21\u7248\u4ee3\u7801\u914d\u7f6e",style:{width:"500px",marginLeft:20}},l.a.createElement("div",null,v)),l.a.createElement(d.a,{visible:x,title:"\u5bfc\u5165\u4ee3\u7801\u3010\u53ef\u7f16\u8f91\u3011",onOk:function(){r(N),S(!1)},onCancel:function(){z(""),S(!1)}},l.a.createElement(C.a.TextArea,{onChange:function(e){var t=e.target;return z(t.value)},value:N,allowClear:!0,autoSize:{minRows:10}})))},me=function(){return l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/creator/:name/:version"},l.a.createElement(H,null)),l.a.createElement(f.a,{exact:!0,path:"/ezcode"},l.a.createElement(ue,null)),l.a.createElement(f.a,{exact:!0,path:"/settings"},l.a.createElement(W,null)),l.a.createElement(f.a,{exact:!0,path:"/upload"},l.a.createElement(Y,null)),l.a.createElement(f.a,{exact:!0,path:"/"},l.a.createElement(re,null)))};var se=function(){return l.a.createElement(s.a,null,l.a.createElement(i.a,{style:{height:"100vh"}},l.a.createElement(i.a.Header,{className:"header"},l.a.createElement("h1",{style:{color:"#fff",marginRight:60}},"\u4ee3\u7801\u751f\u6210\u5668"),l.a.createElement(m.a,{mode:"horizontal",theme:"dark"},l.a.createElement(m.a.Item,null,l.a.createElement(s.b,{to:"/"},"\u6a21\u7248\u5217\u8868")),l.a.createElement(m.a.Item,null,l.a.createElement(s.b,{to:"/ezcode"},"\u672c\u5730\u64cd\u4f5c\u53f0")),l.a.createElement(m.a.Item,null,l.a.createElement(s.b,{to:"/settings"},"\u8bbe\u7f6e")),l.a.createElement(m.a.Item,null,l.a.createElement(s.b,{to:"/upload"},"\u4e0a\u4f20\u6a21\u7248")))),l.a.createElement(i.a.Content,{style:{padding:20,textAlign:"left"}},l.a.createElement(me,null))))};a(201),a(314),a(640),a(641),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[321,1,2]]]);
//# sourceMappingURL=main.c9411d15.chunk.js.map