let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{r as t,s,c as a,d as l,g as r,t as i,l as o,o as c,a as n,w as d,b as m,F as u,e as g,f as h,h as b}from"./index.279287e2.js";var f=l({name:"Dashboard",setup(e,l){const c=t({currentVm:null,articleList:[]});c.currentVm=r().proxy;const{useGetList:n,useToDetail:d}=((e,t,{emit:l})=>({useGetList:async()=>{try{let e=await s.GetArticleList();200===e.code?t.articleList=a(e.result):l("show-message",{msgText:e.result.msg,msgIcon:"",msgColor:""})}catch(e){l("show-message",{msgText:"Server Is Error!",msgIcon:"",msgColor:""})}},useToDetail:e=>{t.currentVm.$router.push({name:"ArticleDetail",query:{article_id:e}})}}))(0,c,l);return n(),{...i(c),useToDetail:d,lib:o}}});const v={class:"flex"},x={class:"flex-grow"},p={class:"md:flex"},w=m("div",{class:"md:flex-shrink-0"},[m("img",{class:"h-48 w-full object-cover md:w-48",src:"https://farm5.staticflickr.com/4397/36576053190_37d6a72e14_k.jpg?momo_cache_bg_uuid=c1cb8ab8-9cbf-4f9d-b3e8-36ed985f9525",alt:"Man looking at item at a store"})],-1),_={class:"p-8 w-full relative box-border"},k={class:"block mt-1 text-lg leading-tight font-medium text-black hover:underline"},y={class:"mt-2 tracking-wide text-sm text-indigo-500 font-semibold"},T={class:"mt-2 text-gray-500"},L={class:"mt-2 text-gray-500 absolute w-full bottom-10"},D={class:"absolute left-0"},C={class:"absolute right-16"};f.render=function(e,t,s,a,l,r){const i=b("chat-container");return c(),n(i,null,{default:d((()=>[m("div",v,[m("div",x,[(c(!0),n(u,null,g(e.articleList,((t,s)=>(c(),n("div",{onClick:s=>e.useToDetail(t.article_id),key:s,class:"m-4 bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-lg transition duration-300 group"},[m("div",p,[w,m("div",_,[m("a",k,h(t.article_title),1),m("div",y,h(t.author),1),m("p",T," 概述 : "+h(t.article_describe),1),m("div",L,[m("span",D," 浏览量 : "+h(t.page_views),1),m("span",C," 发布日期 : "+h(e.lib.FormatTimerSecond(t.create_time)),1)])])])],8,["onClick"])))),128))])])])),_:1})};export default f;
