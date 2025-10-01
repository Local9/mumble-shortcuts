import"../chunks/DsnmJJEf.js";import"../chunks/Dm2r1pXR.js";import{ap as Pe,B,am as z,D as I,F as d,G as A,aq as K,x as e,an as me,C as P,H as j,ar as te,I as w,ao as E,J as b,al as U,a9 as o,as as L,a8 as Ne,u as Me,E as fe,K as De,at as X}from"../chunks/BMMwwrJQ.js";import{c as Ue,D as we,b as ve,a as he,m as ke,d as ge,I as Z,B as W,s as G,g as ie,t as pe,e as _e,f as Je,S as Oe,h as Te,i as Re,R as je,j as Be}from"../chunks/Cvg5GdPZ.js";import{p as ee,i as Ae,r as Q,b as Ce,c as R,s as de}from"../chunks/B5xlSA91.js";var Ee=P("<div><!></div>");function Le(v,r){const s=Pe();B(r,!0);let t=ee(r,"id",19,()=>Ue(s)),a=ee(r,"ref",15,null),c=Q(r,["$$slots","$$events","$$legacy","id","children","child","ref"]);const i=we.create({id:ve(()=>t()),ref:ve(()=>a(),$=>a($))}),m=me(()=>ke(c,i.props));var N=z(),k=I(N);{var h=$=>{var M=z(),H=I(M);K(H,()=>r.child,()=>({props:e(m)})),d($,M)},C=$=>{var M=Ee();he(M,()=>({...e(m)}));var H=j(M);K(H,()=>r.children??te),w(M),d($,M)};Ae(k,$=>{r.child?$(h):$(C,!1)})}d(v,N),A()}var We=P("<div><!></div>");function ze(v,r){B(r,!0);let s=ee(r,"ref",15,null),t=Q(r,["$$slots","$$events","$$legacy","ref","class","children"]);var a=We();he(a,i=>({"data-slot":"sheet-footer",class:i,...t}),[()=>ge("mt-auto flex flex-col gap-2 p-4",r.class)]);var c=j(a);K(c,()=>r.children??te),w(a),Ce(a,i=>s(i),()=>s()),d(v,a),A()}function He(v,r){B(r,!0);let s=ee(r,"ref",15,null),t=Q(r,["$$slots","$$events","$$legacy","ref","class"]);var a=z(),c=I(a);{let i=me(()=>ge("text-muted-foreground text-sm",r.class));R(c,()=>Le,(m,N)=>{N(m,de({"data-slot":"sheet-description",get class(){return e(i)}},()=>t,{get ref(){return s()},set ref(k){s(k)}}))})}d(v,a),A()}var Ve=P('<div class="grid grid-add-mumble-shortcut gap-2 w-[500px] svelte-1xzdm27"><!> <!> <!></div>');function Ye(v,r){B(r,!0);let s=U(""),t=U(""),a=U(null);function c(){if(e(s)===""||e(t)===""||!e(t).startsWith("mumble://"))return;const C={id:crypto.randomUUID(),shortcutName:e(s),mumbleUrl:e(t)};G("mumbleShortcuts",JSON.stringify([...JSON.parse(ie("mumbleShortcuts")||"[]"),C])),o(s,""),o(t,""),e(a)?.focus(),pe.success("Mumble shortcut added successfully")}var i=Ve(),m=j(i);Z(m,{type:"text",placeholder:"Name",class:"grid-cols-1",get ref(){return e(a)},set ref(h){o(a,h,!0)},get value(){return e(s)},set value(h){o(s,h,!0)}});var N=b(m,2);Z(N,{type:"text",placeholder:"URL (mumble://...)",class:"grid-cols-1",onkeydown:h=>{h.key==="Enter"&&c()},get value(){return e(t)},set value(h){o(t,h,!0)}});var k=b(N,2);W(k,{onclick:c,class:"grid-cols-1 justify-end self-end w-fit",children:(h,C)=>{L();var $=E("Add");d(h,$)},$$slots:{default:!0}}),w(i),d(v,i),A()}function qe(v,r){B(r,!0);/**
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
 */let s=Q(r,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];_e(v,de({name:"trash"},()=>s,{get iconNode(){return t},children:(a,c)=>{var i=z(),m=I(i);K(m,()=>r.children??te),d(a,i)},$$slots:{default:!0}})),A()}function Fe(v,r){B(r,!0);/**
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
 */let s=Q(r,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];_e(v,de({name:"pencil"},()=>s,{get iconNode(){return t},children:(a,c)=>{var i=z(),m=I(i);K(m,()=>r.children??te),d(a,i)},$$slots:{default:!0}})),A()}var Ge=P('<div draggable="true" aria-label="Drag to reorder" aria-roledescription="Mumble shortcut" role="listitem"><!> <!> <!></div>'),Ke=P("<!> <!>",1),Qe=P("<!> <!>",1),Xe=P('<!> <div class="flex flex-col gap-2 p-4"><!> <!></div> <!>',1),Ze=P('<div class="flex flex-col gap-2"></div> <!>',1);function et(v,r){B(r,!0);let s=U(null),t=U(Ne(JSON.parse(ie("mumbleShortcuts")||"[]"))),a=U(null),c=U(null),i=U(!1);function m(l,n,g){const x=l.slice(),[f]=x.splice(n,1);return x.splice(g,0,f),x}function N(l,n){const g=e(t)[l];o(a,g?.id??null,!0),e(a)&&n.dataTransfer?.setData("text/plain",String(e(a)))}function k(l,n){if(n.preventDefault(),!e(a))return;const g=n.currentTarget;if(!g)return;const x=g.getBoundingClientRect(),f=n.clientY-x.top>x.height/2,p=e(c)??e(t),y=p.findIndex(D=>D.id===e(a)),S=p.findIndex(D=>D.id===l);if(y===-1||S===-1)return;let _=S+(f?1:0);_=Math.max(0,Math.min(p.length,_));const u=m(p,y,_>p.length-1?p.length-1:_);o(c,u,!0)}function h(l,n){if(n.preventDefault(),e(c)){o(t,e(c),!0),G("mumbleShortcuts",JSON.stringify(e(t))),o(c,null),o(a,null);return}const g=e(a)??n.dataTransfer?.getData("text/plain")??null;if(!g){o(a,null);return}const x=n.currentTarget;if(!x)return;const f=x.getBoundingClientRect(),p=n.clientY-f.top>f.height/2,y=e(t).findIndex(u=>u.id===g),S=e(t).findIndex(u=>u.id===l);if(y===-1||S===-1){o(a,null);return}let _=S+(p?1:0);_=Math.max(0,Math.min(e(t).length,_)),o(t,m(e(t),y,_>e(t).length-1?e(t).length-1:_),!0),G("mumbleShortcuts",JSON.stringify(e(t))),o(a,null)}function C(){o(a,null),o(c,null)}function $(l){l.mumbleUrl.startsWith("mumble://")?window.location.href=l.mumbleUrl:window.open(l.mumbleUrl,"_blank")}function M(l){o(t,e(t).filter(n=>n.id!==l.id),!0),G("mumbleShortcuts",JSON.stringify(e(t))),pe.success("Mumble shortcut removed successfully")}Me(()=>{setInterval(()=>{o(t,JSON.parse(ie("mumbleShortcuts")||"[]"),!0)},1e3)});function H(l){o(s,l,!0),o(i,!0)}function $e(l){l.shortcutName===""||l.mumbleUrl===""||l.mumbleUrl.startsWith("mumble://")&&(o(t,e(t).map(n=>n.id===l.id?l:n),!0),G("mumbleShortcuts",JSON.stringify(e(t))),o(i,!1))}var ue=Ze(),re=I(ue);Je(re,23,()=>e(c)??e(t),l=>l.id,(l,n,g,x)=>{var f=Ge();let p;var y=j(f);W(y,{variant:"outline",onclick:()=>{$(e(n))},class:"grid-cols-1 justify-start self-start w-full",children:(u,D)=>{L();var V=E();fe(()=>De(V,e(n).shortcutName)),d(u,V)},$$slots:{default:!0}});var S=b(y,2);W(S,{variant:"outline",onclick:()=>{H(e(n))},class:"grid-cols-1 justify-end self-end w-fit",children:(u,D)=>{Fe(u,{})},$$slots:{default:!0}});var _=b(S,2);W(_,{variant:"outline",onclick:()=>{M(e(n))},class:"grid-cols-1 justify-end self-end w-fit",children:(u,D)=>{qe(u,{})},$$slots:{default:!0}}),w(f),fe(u=>p=Be(f,1,"grid grid-buttons gap-2 svelte-1d7pxs4",null,p,u),[()=>({"opacity-50":e(a)===e(n).id})]),X("dragstart",f,u=>{N(e(g),u)}),X("dragover",f,u=>{k(e(n).id,u)}),X("drop",f,u=>{h(e(n).id,u)}),X("dragend",f,C),d(l,f)}),w(re);var xe=b(re,2);R(xe,()=>je,(l,n)=>{n(l,{get open(){return e(i)},children:(g,x)=>{var f=z(),p=I(f);R(p,()=>Oe,(y,S)=>{S(y,{children:(_,u)=>{var D=Xe(),V=I(D);R(V,()=>Te,(J,se)=>{se(J,{children:(le,Se)=>{var Y=Ke(),q=I(Y);R(q,()=>Re,(O,F)=>{F(O,{children:(T,Ie)=>{L();var oe=E("Update Shortcut");d(T,oe)},$$slots:{default:!0}})});var ne=b(q,2);R(ne,()=>He,(O,F)=>{F(O,{children:(T,Ie)=>{L();var oe=E("This action cannot be undone. This will permanently update your shortcut.");d(T,oe)},$$slots:{default:!0}})}),d(le,Y)},$$slots:{default:!0}})});var ae=b(V,2),ce=j(ae);Z(ce,{type:"text",placeholder:"Shortcut Name",get value(){return e(s).shortcutName},set value(J){e(s).shortcutName=J}});var be=b(ce,2);Z(be,{type:"text",placeholder:"Mumble URL",get value(){return e(s).mumbleUrl},set value(J){e(s).mumbleUrl=J}}),w(ae);var ye=b(ae,2);R(ye,()=>ze,(J,se)=>{se(J,{class:"grid grid-cols-2 gap-2",children:(le,Se)=>{var Y=Qe(),q=I(Y);W(q,{variant:"outline",onclick:()=>{$e(e(s))},class:"grid-cols-1 w-full",children:(O,F)=>{L();var T=E("Update");d(O,T)},$$slots:{default:!0}});var ne=b(q,2);W(ne,{variant:"outline",onclick:()=>{o(i,!1)},class:"grid-cols-1 w-full",children:(O,F)=>{L();var T=E("Cancel");d(O,T)},$$slots:{default:!0}}),d(le,Y)},$$slots:{default:!0}})}),d(_,D)},$$slots:{default:!0}})}),d(g,f)},$$slots:{default:!0}})}),d(v,ue),A()}var tt=P('<div class="flex flex-col gap-2"><!> <!></div>');function rt(v){var r=tt(),s=j(r);Ye(s,{});var t=b(s,2);et(t,{}),w(r),d(v,r)}var at=P('<div class="flex flex-col gap-2"><!></div>');function dt(v){var r=at(),s=j(r);rt(s),w(r),d(v,r)}export{dt as component};
