import{y as e,s as a,x as t,h as s,Q as o,R as i,T as n,r as l,i as c,C as u,k as r,u as d,p as v,m as h,w as f,U as g,o as m,c as p,V as b,W as w}from"./vendor.dea93266.js";import{u as y,a as k}from"./index.b9e6d90a.js";import{u as H}from"./index.b36bfd45.js";const C={class:"chat-container"},T={class:"chat-container-header-navigation"},x={key:0,class:"chat-container-header-classification"},I={class:"chat-container-header-classification-layout"},L={class:"chat-container-section"},_={class:"chat-container-section-layout"},j={setup(j){e((e=>({"4ebb0065":d(Y),e4bb9efe:d(Q),"431cfafe":d(W),"69aa03d3":d(A),"00ed92d6":d(V)})));const E=y(),N=H(),R=k(),{getRouteMetaIsLabel:S,storeRouter:{value:U}}=a(N),{getNavigationHeight:W,getClassificationHeight:A,getTopHeightSum:M,getTopHeight:O,getTransformNavigationHeight:Q,getLayoutWidth:V}=a(E);R.refreshUserInfo();const Y=t((()=>S.value?W.value:O.value)),q=()=>{U.push("create")},z=s(!1),B=t((()=>!("top"===F.value&&D.value>M.value)&&z.value)),D=s(0),F=s("bootom"),G=s(0),J=document.documentElement.clientHeight,K=()=>{const e=window.pageYOffset,a=document.body.scrollHeight;G.value=parseInt(e/(a-J)*100),e>M.value?z.value=!0:z.value=!1,D.value>e?F.value="top":F.value="bootom",D.value=e};o((()=>{window.addEventListener("scroll",K)})),i((()=>{window.removeEventListener("scroll",K)}));const P=t((()=>G.value));return n("useIsShow",B),n("useTops",P),(e,a)=>{const t=l("Navigation"),s=l("Classification"),o=l("router-view"),i=l("edit"),n=l("el-icon"),y=l("el-backtop");return m(),c("div",C,[u("div",{class:h(["chat-container-header",{"is-show":d(B)}])},[u("div",T,[r(t)]),d(S)?v("",!0):(m(),c("div",x,[u("div",I,[r(s)])]))],2),u("div",L,[u("div",_,[r(g,{name:"el-fade-in"},{default:f((()=>[r(o,null,{default:f((({Component:e,route:a})=>[a.meta.keepAlive?(m(),p(w,{key:0},[(m(),p(b(e)))],1024)):(m(),p(b(e),{key:1}))])),_:1})])),_:1})])]),r(y,{"visibility-height":0,onClick:q},{default:f((()=>[r(n,null,{default:f((()=>[r(i)])),_:1})])),_:1})])}}};export{j as default};