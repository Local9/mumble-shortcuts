import"../chunks/DsnmJJEf.js";import"../chunks/Dm2r1pXR.js";import{ap as Se,B as k,am as L,D as $,F as o,G as J,aq as H,x as r,an as ve,C as b,H as w,ar as Y,I as S,ao as j,J as _,al as I,a9 as u,as as T,a8 as Pe,u as Ne,E as De,K as Me,at as G}from"../chunks/BMMwwrJQ.js";import{c as Ue,D as Ie,b as fe,a as me,m as we,d as he,I as Q,B as E,s as K,g as ne,t as pe,e as ge,f as ke,i as Je,S as Oe,h as je,j as Te,R as Ee}from"../chunks/DtgSL_9q.js";import{p as X,i as Le,r as V,b as Re,c as U,s as de}from"../chunks/B5xlSA91.js";var We=b("<div><!></div>");function Be(i,e){const a=Se();k(e,!0);let t=X(e,"id",19,()=>Ue(a)),l=X(e,"ref",15,null),c=V(e,["$$slots","$$events","$$legacy","id","children","child","ref"]);const d=Ie.create({id:fe(()=>t()),ref:fe(()=>l(),h=>l(h))}),v=ve(()=>we(c,d.props));var x=L(),P=$(x);{var f=h=>{var y=L(),R=$(y);H(R,()=>e.child,()=>({props:r(v)})),o(h,y)},O=h=>{var y=We();me(y,()=>({...r(v)}));var R=w(y);H(R,()=>e.children??Y),S(y),o(h,y)};Le(P,h=>{e.child?h(f):h(O,!1)})}o(i,x),J()}var ze=b("<div><!></div>");function Ae(i,e){k(e,!0);let a=X(e,"ref",15,null),t=V(e,["$$slots","$$events","$$legacy","ref","class","children"]);var l=ze();me(l,d=>({"data-slot":"sheet-footer",class:d,...t}),[()=>he("mt-auto flex flex-col gap-2 p-4",e.class)]);var c=w(l);H(c,()=>e.children??Y),S(l),Re(l,d=>a(d),()=>a()),o(i,l),J()}function Ce(i,e){k(e,!0);let a=X(e,"ref",15,null),t=V(e,["$$slots","$$events","$$legacy","ref","class"]);var l=L(),c=$(l);{let d=ve(()=>he("text-muted-foreground text-sm",e.class));U(c,()=>Be,(v,x)=>{x(v,de({"data-slot":"sheet-description",get class(){return r(d)}},()=>t,{get ref(){return a()},set ref(P){a(P)}}))})}o(i,l),J()}var He=b('<div class="grid grid-add-mumble-shortcut gap-2 w-[500px] svelte-1xzdm27"><!> <!> <!></div>');function Ve(i,e){k(e,!0);let a=I(""),t=I(""),l=I(null);function c(){if(r(a)===""||r(t)===""||!r(t).startsWith("mumble://"))return;const O={id:crypto.randomUUID(),shortcutName:r(a),mumbleUrl:r(t)};K("mumbleShortcuts",JSON.stringify([...JSON.parse(ne("mumbleShortcuts")||"[]"),O])),u(a,""),u(t,""),r(l)?.focus(),pe.success("Mumble shortcut added successfully")}var d=He(),v=w(d);Q(v,{type:"text",placeholder:"Shortcut Name",class:"grid-cols-1",get ref(){return r(l)},set ref(f){u(l,f,!0)},get value(){return r(a)},set value(f){u(a,f,!0)}});var x=_(v,2);Q(x,{type:"text",placeholder:"Mumble URL",class:"grid-cols-1",onkeydown:f=>{f.key==="Enter"&&c()},get value(){return r(t)},set value(f){u(t,f,!0)}});var P=_(x,2);E(P,{onclick:c,class:"grid-cols-1 justify-end self-end w-fit",children:(f,O)=>{T();var h=j("Add");o(f,h)},$$slots:{default:!0}}),S(d),o(i,d),J()}function qe(i,e){k(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ge(i,de({name:"trash"},()=>a,{get iconNode(){return t},children:(l,c)=>{var d=L(),v=$(d);H(v,()=>e.children??Y),o(l,d)},$$slots:{default:!0}})),J()}function Fe(i,e){k(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];ge(i,de({name:"pencil"},()=>a,{get iconNode(){return t},children:(l,c)=>{var d=L(),v=$(d);H(v,()=>e.children??Y),o(l,d)},$$slots:{default:!0}})),J()}var Ge=b('<div class="grid grid-buttons gap-2 svelte-1d7pxs4" draggable="true" aria-label="Drag to reorder" aria-roledescription="Mumble shortcut" role="listitem"><!> <!> <!></div>'),Ke=b("<!> <!>",1),Qe=b("<!> <!>",1),Xe=b('<!> <div class="flex flex-col gap-2 p-4"><!> <!></div> <!>',1),Ye=b('<div class="flex flex-col gap-2"></div> <!>',1);function Ze(i,e){k(e,!0);let a=I(null),t=I(Pe(JSON.parse(ne("mumbleShortcuts")||"[]"))),l=I(null),c=I(!1);function d(s,n,g){const W=s.slice(),[p]=W.splice(n,1);return W.splice(g,0,p),W}function v(s,n){u(l,s,!0),n.dataTransfer?.setData("text/plain",String(s))}function x(s,n){n.preventDefault()}function P(s,n){n.preventDefault();const g=r(l)??parseInt(n.dataTransfer?.getData("text/plain")||"-1",10);if(g<0||g===s){u(l,null);return}u(t,d(r(t),g,s),!0),K("mumbleShortcuts",JSON.stringify(r(t))),u(l,null)}function f(){u(l,null)}function O(s){s.mumbleUrl.startsWith("mumble://")?window.location.href=s.mumbleUrl:window.open(s.mumbleUrl,"_blank")}function h(s){u(t,r(t).filter(n=>n.id!==s.id),!0),K("mumbleShortcuts",JSON.stringify(r(t))),pe.success("Mumble shortcut removed successfully")}Ne(()=>{setInterval(()=>{u(t,JSON.parse(ne("mumbleShortcuts")||"[]"),!0)},1e3)});function y(s){u(a,s,!0),u(c,!0)}function R(s){s.shortcutName===""||s.mumbleUrl===""||s.mumbleUrl.startsWith("mumble://")&&(u(t,r(t).map(n=>n.id===s.id?s:n),!0),K("mumbleShortcuts",JSON.stringify(r(t))),u(c,!1))}var ie=Ye(),Z=$(ie);ke(Z,21,()=>r(t),Je,(s,n,g,W)=>{var p=Ge(),q=w(p);E(q,{variant:"outline",onclick:()=>{O(r(n))},class:"grid-cols-1 justify-start self-start w-full",children:(m,te)=>{T();var B=j();De(()=>Me(B,r(n).shortcutName)),o(m,B)},$$slots:{default:!0}});var F=_(q,2);E(F,{variant:"outline",onclick:()=>{y(r(n))},class:"grid-cols-1 justify-end self-end w-fit",children:(m,te)=>{Fe(m,{})},$$slots:{default:!0}});var ee=_(F,2);E(ee,{variant:"outline",onclick:()=>{h(r(n))},class:"grid-cols-1 justify-end self-end w-fit",children:(m,te)=>{qe(m,{})},$$slots:{default:!0}}),S(p),G("dragstart",p,m=>{v(g,m)}),G("dragover",p,m=>{x(g,m)}),G("drop",p,m=>{P(g,m)}),G("dragend",p,f),o(s,p)}),S(Z);var _e=_(Z,2);U(_e,()=>Ee,(s,n)=>{n(s,{get open(){return r(c)},children:(g,W)=>{var p=L(),q=$(p);U(q,()=>Oe,(F,ee)=>{ee(F,{children:(m,te)=>{var B=Xe(),ue=$(B);U(ue,()=>je,(N,ae)=>{ae(N,{children:(se,xe)=>{var z=Ke(),A=$(z);U(A,()=>Te,(D,C)=>{C(D,{children:(M,ye)=>{T();var oe=j("Update Shortcut");o(M,oe)},$$slots:{default:!0}})});var le=_(A,2);U(le,()=>Ce,(D,C)=>{C(D,{children:(M,ye)=>{T();var oe=j("This action cannot be undone. This will permanently update your shortcut.");o(M,oe)},$$slots:{default:!0}})}),o(se,z)},$$slots:{default:!0}})});var re=_(ue,2),ce=w(re);Q(ce,{type:"text",placeholder:"Shortcut Name",get value(){return r(a).shortcutName},set value(N){r(a).shortcutName=N}});var $e=_(ce,2);Q($e,{type:"text",placeholder:"Mumble URL",get value(){return r(a).mumbleUrl},set value(N){r(a).mumbleUrl=N}}),S(re);var be=_(re,2);U(be,()=>Ae,(N,ae)=>{ae(N,{class:"grid grid-cols-2 gap-2",children:(se,xe)=>{var z=Qe(),A=$(z);E(A,{variant:"outline",onclick:()=>{R(r(a))},class:"grid-cols-1 w-full",children:(D,C)=>{T();var M=j("Update");o(D,M)},$$slots:{default:!0}});var le=_(A,2);E(le,{variant:"outline",onclick:()=>{u(c,!1)},class:"grid-cols-1 w-full",children:(D,C)=>{T();var M=j("Cancel");o(D,M)},$$slots:{default:!0}}),o(se,z)},$$slots:{default:!0}})}),o(m,B)},$$slots:{default:!0}})}),o(g,p)},$$slots:{default:!0}})}),o(i,ie),J()}var et=b('<div class="flex flex-col gap-2"><!> <!></div>');function tt(i){var e=et(),a=w(e);Ve(a,{});var t=_(a,2);Ze(t,{}),S(e),o(i,e)}var rt=b('<div class="flex flex-col gap-2"><!></div>');function dt(i){var e=rt(),a=w(e);tt(a),S(e),o(i,e)}export{dt as component};
