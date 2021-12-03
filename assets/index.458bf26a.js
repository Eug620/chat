var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,u=(e,u)=>{for(var r in u||(u={}))a.call(u,r)&&o(e,r,u[r]);if(l)for(var r of l(u))t.call(u,r)&&o(e,r,u[r]);return e};import{p as r,s as i,l as d,v as n,f as s,x as b,r as c,o as v,g as m,i as h,w as g,N as p,u as f,T as k,y as V,O as _,P as y,Q as w,R as S,U as x,V as U,F as j,h as z,c as B,j as O,B as C}from"./vendor.5e04e70a.js";import{u as F,a as q,s as T}from"./index.c2a9ad5d.js";const N=[{label:"简体中文",value:"zh-CN"},{label:"正体中文",value:"zh-TW"},{label:"英文",value:"en"},{label:"法语",value:"fr"},{label:"葡萄牙语",value:"pt-BR"},{label:"俄语",value:"ru"},{label:"德语",value:"de"},{label:"日语",value:"ja"}],P=[{label:"默认展示编辑区域",value:"edit"},{label:"默认展示预览区域",value:"preview"}],E=[{label:"agate",value:"agate"},{label:"androidstudio",value:"androidstudio"},{label:"arduino-light",value:"arduino-light"},{label:"arta",value:"arta"},{label:"ascetic",value:"ascetic"},{label:"atelier-cave-dark",value:"atelier-cave-dark"},{label:"atelier-cave-light",value:"atelier-cave-light"},{label:"atelier-dune-dark",value:"atelier-dune-dark"},{label:"atelier-dune-light",value:"atelier-dune-light"},{label:"atelier-estuary-dark",value:"atelier-estuary-dark"},{label:"atelier-estuary-light",value:"atelier-estuary-light"},{label:"atelier-forest-dark",value:"atelier-forest-dark"},{label:"atelier-forest-light",value:"atelier-forest-light"},{label:"atelier-heath-dark",value:"atelier-heath-dark"},{label:"atelier-heath-light",value:"atelier-heath-light"},{label:"atelier-lakeside-dark",value:"atelier-lakeside-dark"},{label:"atelier-lakeside-light",value:"atelier-lakeside-light"},{label:"atelier-plateau-dark",value:"atelier-plateau-dark"},{label:"atelier-plateau-light",value:"atelier-plateau-light"},{label:"atelier-savanna-dark",value:"atelier-savanna-dark"},{label:"atelier-savanna-light",value:"atelier-savanna-light"},{label:"atelier-seaside-dark",value:"atelier-seaside-dark"},{label:"atelier-seaside-light",value:"atelier-seaside-light"},{label:"atelier-sulphurpool-dark",value:"atelier-sulphurpool-dark"},{label:"atelier-sulphurpool-light",value:"atelier-sulphurpool-light"},{label:"atom-one-dark",value:"atom-one-dark"},{label:"atom-one-light",value:"atom-one-light"},{label:"brown-paper",value:"brown-paper"},{label:"codepen-embed",value:"codepen-embed"},{label:"color-brewer",value:"color-brewer"},{label:"darcula",value:"darcula"},{label:"dark",value:"dark"},{label:"darkula",value:"darkula"},{label:"default",value:"default"},{label:"docco",value:"docco"},{label:"dracula",value:"dracula"},{label:"far",value:"far"},{label:"foundation",value:"foundation"},{label:"github-gist",value:"github-gist"},{label:"github",value:"github"},{label:"googlecode",value:"googlecode"},{label:"grayscale",value:"grayscale"},{label:"gruvbox-dark",value:"gruvbox-dark"},{label:"gruvbox-light",value:"gruvbox-light"},{label:"hopscotch",value:"hopscotch"},{label:"hybrid",value:"hybrid"},{label:"idea",value:"idea"},{label:"ir-black",value:"ir-black"},{label:"kimbie.dark",value:"kimbie.dark"},{label:"kimbie.light",value:"kimbie.light"},{label:"magula",value:"magula"},{label:"mono-blue",value:"mono-blue"},{label:"monokai-sublime",value:"monokai-sublime"},{label:"monokai",value:"monokai"},{label:"obsidian",value:"obsidian"},{label:"ocean",value:"ocean"},{label:"paraiso-dark",value:"paraiso-dark"},{label:"paraiso-light",value:"paraiso-light"},{label:"pojoaque",value:"pojoaque"},{label:"purebasic",value:"purebasic"},{label:"qtcreator_dark",value:"qtcreator_dark"},{label:"qtcreator_light",value:"qtcreator_light"},{label:"railscasts",value:"railscasts"},{label:"rainbow",value:"rainbow"},{label:"routeros",value:"routeros"},{label:"school-book",value:"school-book"},{label:"solarized-dark",value:"solarized-dark"},{label:"solarized-light",value:"solarized-light"},{label:"sunburst",value:"sunburst"},{label:"tomorrow-night-blue",value:"tomorrow-night-blue"},{label:"tomorrow-night-bright",value:"tomorrow-night-bright"},{label:"tomorrow-night-eighties",value:"tomorrow-night-eighties"},{label:"tomorrow-night",value:"tomorrow-night"},{label:"tomorrow",value:"tomorrow"},{label:"vs",value:"vs"},{label:"vs2015",value:"vs2015"},{label:"xcode",value:"xcode"},{label:"xt256",value:"xt256"},{label:"zenburn",value:"zenburn"}];const H={class:"chat-create"},I=O("标题:"),L=O("描述:"),R={class:"chat-create-item-button"},W={class:"chat-create-editor-config"},A=O("Editor Setting"),Q=O("editor ToolBars"),D={setup(e){r((e=>({"120a64b4":f(O),"048889b1":f(D)})));const l=F(),a=q(),{isLogin:t,userInfo:o}=i(a),{getLayoutWidth:O,getNavigationHeight:D}=i(l),G=d(),J=n({title:"",describe:"",content:""}),K=s(!1),M=()=>{K.value=!K.value},X=n({fontSize:"14px",language:"zh-CN",boxShadow:!0,scrollStyle:!0,boxShadowStyle:"0 2px 12px 0 rgba(0, 0, 0, 0.1)",transition:!0,toolbarsBackground:"#ffffff",previewBackground:"#fbfbfb",subfield:!0,defaultOpen:"preview",placeholder:"开始编辑...",editable:!0,codeStyle:"vs2015",toolbarsFlag:!0,navigation:!1,shortCut:!0,autofocus:!0,ishljs:!0,imageFilter:null,imageClick:null,xssOptions:null}),Y=n({bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}),Z=s(!1),$=e=>{Z.value=e},ee=b((()=>Z.value?"100%":"calc(100vh - 480px)")),le=async()=>{try{let e=await T.CreateArticle((()=>{const{user_name:e,user_id:l}=o.value;return{article_title:J.title,author:e,article_describe:J.describe,article_content:J.content,user_id:l}})());200===e.code?C({title:"成功",message:"新增文字成功",type:"success"}):C({title:"警告",message:e.result.msg,type:"warning"})}catch(e){C({title:"错误",message:e,type:"error"})}},ae=()=>{G.push("/")};return(e,l)=>{const a=c("el-input"),o=c("el-form-item"),r=c("el-form"),i=c("el-card"),d=c("mavon-editor"),n=c("el-button"),s=c("el-tooltip"),b=c("el-divider"),O=c("el-option"),C=c("el-select"),F=c("el-switch"),q=c("el-color-picker");return v(),m("div",H,[h(i,{class:"chat-create-item border-0"},{default:g((()=>[h(r,{class:"chat-create-form",ref:(e,l)=>{l.refForm=e},model:f(J),"label-width":"auto"},{default:g((()=>[h(o,null,{default:g((()=>[h(a,{"prefix-icon":"postcard",modelValue:f(J).title,"onUpdate:modelValue":l[0]||(l[0]=e=>f(J).title=e),placeholder:"请输入标题"},{prepend:g((()=>[I])),_:1},8,["modelValue"])])),_:1}),h(o,{style:{"margin-bottom":"0"}},{default:g((()=>[h(a,{"prefix-icon":"message",modelValue:f(J).describe,"onUpdate:modelValue":l[1]||(l[1]=e=>f(J).describe=e),placeholder:"请输入描述"},{prepend:g((()=>[L])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1}),h(d,p({style:{maxHeight:f(ee)},modelValue:f(J).content,"onUpdate:modelValue":l[2]||(l[2]=e=>f(J).content=e),class:"chat-create-item chat-create-editor",codeStyle:"brown-paper",onFullScreen:$,ishljs:!0},u({},f(X)),{toolbars:f(Y)}),null,16,["style","modelValue","toolbars"]),h(i,{class:"chat-create-item border-0"},{default:g((()=>[h(s,{effect:"dark",content:"请先登录",placement:"top",disabled:f(t)},{default:g((()=>[V("div",R,[h(n,{circle:"",icon:f(_),disabled:!f(t),onClick:le},null,8,["icon","disabled"])])])),_:1},8,["disabled"]),h(n,{circle:"",icon:f(y),onClick:ae},null,8,["icon"]),h(n,{class:"chat-create-item-setting",circle:"",type:K.value?"info":"danger",onClick:M,icon:K.value?f(w):f(S)},null,8,["type","icon"])])),_:1}),h(k,{name:"el-fade-in-linear"},{default:g((()=>[x(V("div",W,[h(i,{class:"chat-create-item border-0"},{default:g((()=>[h(b,{"content-position":"left"},{default:g((()=>[A])),_:1}),h(r,{size:"mini",class:"chat-create-form-setting",ref:(e,l)=>{l.refSettingForm=e},model:f(X),"label-width":"auto","label-position":"left"},{default:g((()=>[h(o,{label:"fontSize"},{default:g((()=>[h(a,{modelValue:f(X).fontSize,"onUpdate:modelValue":l[3]||(l[3]=e=>f(X).fontSize=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"language"},{default:g((()=>[h(C,{modelValue:f(X).language,"onUpdate:modelValue":l[4]||(l[4]=e=>f(X).language=e),placeholder:"Select"},{default:g((()=>[(v(!0),m(j,null,z(f(N),(e=>(v(),B(O,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(o,{label:"boxShadow"},{default:g((()=>[h(F,{modelValue:f(X).boxShadow,"onUpdate:modelValue":l[5]||(l[5]=e=>f(X).boxShadow=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"scrollStyle"},{default:g((()=>[h(F,{modelValue:f(X).scrollStyle,"onUpdate:modelValue":l[6]||(l[6]=e=>f(X).scrollStyle=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"boxShadowStyle"},{default:g((()=>[h(a,{modelValue:f(X).boxShadowStyle,"onUpdate:modelValue":l[7]||(l[7]=e=>f(X).boxShadowStyle=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"transition"},{default:g((()=>[h(F,{modelValue:f(X).transition,"onUpdate:modelValue":l[8]||(l[8]=e=>f(X).transition=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"toolbarsBackground"},{default:g((()=>[h(q,{modelValue:f(X).toolbarsBackground,"onUpdate:modelValue":l[9]||(l[9]=e=>f(X).toolbarsBackground=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"previewBackground"},{default:g((()=>[h(q,{modelValue:f(X).previewBackground,"onUpdate:modelValue":l[10]||(l[10]=e=>f(X).previewBackground=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"subfield"},{default:g((()=>[h(F,{modelValue:f(X).subfield,"onUpdate:modelValue":l[11]||(l[11]=e=>f(X).subfield=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"defaultOpen"},{default:g((()=>[h(C,{modelValue:f(X).defaultOpen,"onUpdate:modelValue":l[12]||(l[12]=e=>f(X).defaultOpen=e),placeholder:"Select"},{default:g((()=>[(v(!0),m(j,null,z(f(P),(e=>(v(),B(O,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(o,{label:"placeholder"},{default:g((()=>[h(a,{modelValue:f(X).placeholder,"onUpdate:modelValue":l[13]||(l[13]=e=>f(X).placeholder=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"editable"},{default:g((()=>[h(F,{modelValue:f(X).editable,"onUpdate:modelValue":l[14]||(l[14]=e=>f(X).editable=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"codeStyle"},{default:g((()=>[h(C,{modelValue:f(X).codeStyle,"onUpdate:modelValue":l[15]||(l[15]=e=>f(X).codeStyle=e),placeholder:"Select"},{default:g((()=>[(v(!0),m(j,null,z(f(E),(e=>(v(),B(O,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(o,{label:"toolbarsFlag"},{default:g((()=>[h(F,{modelValue:f(X).toolbarsFlag,"onUpdate:modelValue":l[16]||(l[16]=e=>f(X).toolbarsFlag=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"navigation"},{default:g((()=>[h(F,{modelValue:f(X).navigation,"onUpdate:modelValue":l[17]||(l[17]=e=>f(X).navigation=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"shortCut"},{default:g((()=>[h(F,{modelValue:f(X).shortCut,"onUpdate:modelValue":l[18]||(l[18]=e=>f(X).shortCut=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"autofocus"},{default:g((()=>[h(F,{modelValue:f(X).autofocus,"onUpdate:modelValue":l[19]||(l[19]=e=>f(X).autofocus=e)},null,8,["modelValue"])])),_:1}),h(o,{label:"ishljs"},{default:g((()=>[h(F,{modelValue:f(X).ishljs,"onUpdate:modelValue":l[20]||(l[20]=e=>f(X).ishljs=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1}),h(i,{class:"border-0"},{default:g((()=>[h(b,{"content-position":"left"},{default:g((()=>[Q])),_:1}),h(r,{size:"mini",class:"chat-create-form-ToolBars",ref:(e,l)=>{l.refToolBarsForm=e},model:f(Y),"label-width":"auto","label-position":"left"},{default:g((()=>[(v(!0),m(j,null,z(f(Y),((e,l)=>(v(),B(o,{label:l,key:l},{default:g((()=>[h(F,{modelValue:f(Y)[l],"onUpdate:modelValue":e=>f(Y)[l]=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1},8,["model"])])),_:1})],512),[[U,K.value]])])),_:1})])}}};export{D as default};
