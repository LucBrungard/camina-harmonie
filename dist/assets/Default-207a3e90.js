import{u as ee,m as q,a as ie,b as F,V as ue,_ as ce,c as ve,d as fe}from"./tag-a7454ca2.js";import{p as T,i as te,c as d,r as ne,a as P,b as A,g as de,s as me,o as pe,d as ye,f as ge,e as U,u as he,w as _e,h as D,j as xe,k as we,l as b,m as Z,n as K,q as X,t as Y,v as oe,x as be,y as Ie,z as Se,A as Ve}from"./index-d2e766b9.js";function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Le(e):Ee(e))return e;e=e.parentElement}return document.scrollingElement}function Ee(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Le(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}const j=Symbol.for("vuetify:layout"),Me=Symbol.for("vuetify:layout-item"),Q=1e3,Pe=T({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function Ce(){const e=te(j);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const Re=(e,t,o,s)=>{let r={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...r}}];for(const i of e){const g=t.get(i),p=o.get(i),a=s.get(i);if(!g||!p||!a)continue;const x={...r,[g.value]:parseInt(r[g.value],10)+(a.value?parseInt(p.value,10):0)};c.push({id:i,layer:x}),r=x}return c};function ze(e){const t=te(j,null),o=d(()=>t?t.rootZIndex.value-100:Q),s=ne([]),r=P(new Map),c=P(new Map),i=P(new Map),g=P(new Map),p=P(new Map),{resizeRef:a,contentRect:x}=ee(),C=d(()=>{const l=new Map,y=e.overlaps??[];for(const n of y.filter(f=>f.includes(":"))){const[f,u]=n.split(":");if(!s.value.includes(f)||!s.value.includes(u))continue;const _=r.get(f),V=r.get(u),E=c.get(f),L=c.get(u);!_||!V||!E||!L||(l.set(u,{position:_.value,amount:parseInt(E.value,10)}),l.set(f,{position:V.value,amount:-parseInt(L.value,10)}))}return l}),v=d(()=>{const l=[...new Set([...i.values()].map(n=>n.value))].sort((n,f)=>n-f),y=[];for(const n of l){const f=s.value.filter(u=>{var _;return((_=i.get(u))==null?void 0:_.value)===n});y.push(...f)}return Re(y,r,c,g)}),m=d(()=>!Array.from(p.values()).some(l=>l.value)),w=d(()=>v.value[v.value.length-1].layer),R=d(()=>({"--v-layout-left":A(w.value.left),"--v-layout-right":A(w.value.right),"--v-layout-top":A(w.value.top),"--v-layout-bottom":A(w.value.bottom),...m.value?void 0:{transition:"none"}})),I=d(()=>v.value.slice(1).map((l,y)=>{let{id:n}=l;const{layer:f}=v.value[y],u=c.get(n),_=r.get(n);return{id:n,...f,size:Number(u.value),position:_.value}})),S=l=>I.value.find(y=>y.id===l),$=de("createLayout"),z=me(!1);pe(()=>{z.value=!0}),ye(j,{register:(l,y)=>{let{id:n,order:f,position:u,layoutSize:_,elementSize:V,active:E,disableTransitions:L,absolute:ae}=y;i.set(n,f),r.set(n,u),c.set(n,_),g.set(n,E),L&&p.set(n,L);const W=ge(Me,$==null?void 0:$.vnode).indexOf(l);W>-1?s.value.splice(W,0,n):s.value.push(n);const G=d(()=>I.value.findIndex(M=>M.id===n)),k=d(()=>o.value+v.value.length*2-G.value*2),se=d(()=>{const M=u.value==="left"||u.value==="right",B=u.value==="right",re=u.value==="bottom",J={[u.value]:0,zIndex:k.value,transform:`translate${M?"X":"Y"}(${(E.value?0:-110)*(B||re?-1:1)}%)`,position:ae.value||o.value!==Q?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!z.value)return J;const h=I.value[G.value];if(!h)throw new Error(`[Vuetify] Could not find layout item "${n}"`);const O=C.value.get(n);return O&&(h[O.position]+=O.amount),{...J,height:M?`calc(100% - ${h.top}px - ${h.bottom}px)`:V.value?`${V.value}px`:void 0,left:B?void 0:`${h.left}px`,right:B?`${h.right}px`:void 0,top:u.value!=="bottom"?`${h.top}px`:void 0,bottom:u.value!=="top"?`${h.bottom}px`:void 0,width:M?V.value?`${V.value}px`:void 0:`calc(100% - ${h.left}px - ${h.right}px)`}}),le=d(()=>({zIndex:k.value-1}));return{layoutItemStyles:se,layoutItemScrimStyles:le,zIndex:k}},unregister:l=>{i.delete(l),r.delete(l),c.delete(l),g.delete(l),p.delete(l),s.value=s.value.filter(y=>y!==l)},mainRect:w,mainStyles:R,getLayoutItem:S,items:I,layoutRect:x,rootZIndex:o});const N=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),H=d(()=>({zIndex:t?o.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:N,layoutStyles:H,getLayoutItem:S,items:I,layoutRect:x,layoutRef:a}}const He="/assets/camina-88188d35.jpg";function Ae(e){return Math.floor(Math.abs(e))*Math.sign(e)}const Te=T({scale:{type:[Number,String],default:.5},...q()},"VParallax"),Ne=U()({name:"VParallax",props:Te(),setup(e,t){let{slots:o}=t;const{intersectionRef:s,isIntersecting:r}=ie(),{resizeRef:c,contentRect:i}=ee(),{height:g}=he(),p=ne();_e(()=>{var m;s.value=c.value=(m=p.value)==null?void 0:m.$el});let a;D(r,m=>{m?(a=$e(s.value),a=a===document.scrollingElement?document:a,a.addEventListener("scroll",v,{passive:!0}),v()):a.removeEventListener("scroll",v)}),xe(()=>{a==null||a.removeEventListener("scroll",v)}),D(g,v),D(()=>{var m;return(m=i.value)==null?void 0:m.height},v);const x=d(()=>1-we(+e.scale));let C=-1;function v(){r.value&&(cancelAnimationFrame(C),C=requestAnimationFrame(()=>{var H;const m=((H=p.value)==null?void 0:H.$el).querySelector(".v-img__img");if(!m)return;const w=a instanceof Document?document.documentElement.clientHeight:a.clientHeight,R=a instanceof Document?window.scrollY:a.scrollTop,I=s.value.getBoundingClientRect().top+R,S=i.value.height,$=I+(S-w)/2,z=Ae((R-$)*x.value),N=Math.max(1,(x.value*(w-S)+S)/S);m.style.setProperty("transform",`translateY(${z}px) scale(${N})`)}))}return F(()=>b(ue,{class:["v-parallax",{"v-parallax--active":r.value},e.class],style:e.style,ref:p,cover:!0,onLoadstart:v,onLoad:v},o)),{}}}),ke={},Be=Y("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[Y("h1",{class:"text-h4 font-weight-thin mb-4"}," Camina Harmonie "),Y("h4",{class:"subheading"}," Un orchestre plein de sourires ")],-1);function Oe(e,t){return Z(),K(Ne,{src:He},{default:X(()=>[Be]),_:1})}const De=ce(ke,[["render",Oe]]);const Ye=T({scrollable:Boolean,...q(),...ve({tag:"main"})},"VMain"),je=U()({name:"VMain",props:Ye(),setup(e,t){let{slots:o}=t;const{mainStyles:s}=Ce(),{ssrBootStyles:r}=fe();return F(()=>b(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,r.value,e.style]},{default:()=>{var c,i;return[e.scrollable?b("div",{class:"v-main__scroller"},[(c=o.default)==null?void 0:c.call(o)]):(i=o.default)==null?void 0:i.call(o)]}})),{}}}),qe=oe({__name:"View",setup(e){return(t,o)=>{const s=be("router-view");return Z(),K(je,null,{default:X(()=>[b(s)]),_:1})}}});const Fe=T({...q(),...Pe({fullHeight:!0}),...Ie()},"VApp"),Ue=U()({name:"VApp",props:Fe(),setup(e,t){let{slots:o}=t;const s=Se(e),{layoutClasses:r,getLayoutItem:c,items:i,layoutRef:g}=ze(e),{rtlClasses:p}=Ve();return F(()=>{var a;return b("div",{ref:g,class:["v-application",s.themeClasses.value,r.value,p.value,e.class],style:[e.style]},[b("div",{class:"v-application__wrap"},[(a=o.default)==null?void 0:a.call(o)])])}),{getLayoutItem:c,items:i,theme:s}}}),We=oe({__name:"Default",setup(e){return(t,o)=>(Z(),K(Ue,null,{default:X(()=>[b(De),b(qe)]),_:1}))}});export{We as default};