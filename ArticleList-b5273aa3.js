import{i as e,a as t,N as a,b as l,t as n,d as i,u as r,F as c,S as s,e as o,h as d}from"./index-d78937f5.js";const u=n('<img alt="">',1),h=n("<h1></h1>",2),f=n("<p></p>",2),v=n("<span>Read more...</span>",2),p=n('<ul class="tag-list"></ul>',2),g=n('<div class="article-preview"><div class="article-meta"><div class="info"><span class="date"></span></div></div></div>',8),k=n('<div class="pull-xs-right"><button><i class="ion-heart"></i> </button></div>',6),m=n('<li class="tag-default tag-pill tag-outline"></li>',2),C=["children"];var N=({article:n,token:i,onClickFavorite:r})=>{const{title:c,description:s,slug:o,createdAt:d,tagList:N,author:{username:b,image:w}}=n;return function(){const _=g.cloneNode(!0),x=_.firstChild,D=x.firstChild,y=D.firstChild;return e(x,t(a,{href:`@${b}`,route:"profile",children:()=>{const e=u.cloneNode(!0);return e.src=w,e}},C),D),e(D,t(a,{class:"author",href:`@${b}`,route:"profile",children:b}),y),y.textContent=new Date(d).toDateString(),e(x,i&&function(){const t=k.cloneNode(!0),a=t.firstChild;a.firstChild.nextSibling;return a.__click=r,a.__clickData=n,e(a,()=>n.favoritesCount,null),l(()=>a.className=n.favorited?"btn btn-sm btn-primary":"btn btn-sm btn-outline-primary"),t}(),null),e(_,t(a,{href:`article/${o}`,route:"article",class:"preview-link",children:()=>[(()=>{const t=h.cloneNode(!0);return e(t,c),t})(),(()=>{const t=f.cloneNode(!0);return e(t,s),t})(),v.cloneNode(!0),(()=>{const t=p.cloneNode(!0);return e(t,N.map(e=>function(){const t=m.cloneNode(!0);return t.textContent=e,t}())),t})()]},C),null),_}()};i(["click"]);const b=n('<nav><ul class="pagination"></ul></nav>',4),w=n('<div class="article-preview">Loading articles...</div>',2),_=n('<div class="article-preview">No articles are here... yet.</div>',2),x=n('<li class="page-item"><a class="page-link" href=""></a></li>',4),D=["each","fallback"],y=["each"],F=["children","when"],P=["children","fallback"];var S=a=>{const[{token:n},{unmakeFavorite:i,makeFavorite:u}]=r(),h=(e,t)=>{t.preventDefault(),e.favorited?i(slug):u(slug)},f=(e,t)=>{t.preventDefault(),a.onSetPage(e),setTimeout(()=>window.scrollTo(0,0),200)};return t(o,{fallback:()=>w.cloneNode(!0),children:()=>[t(c,{each:()=>a.articles,fallback:()=>_.cloneNode(!0),children:e=>t(N,{article:e,token:n,onClickFavorite:h})},D),t(s,{when:()=>a.totalPagesCount>1,children:()=>{const n=b.cloneNode(!0),i=n.firstChild;return e(i,t(c,{each:()=>[...Array(a.totalPagesCount).keys()],children:e=>function(){const t=x.cloneNode(!0),n=t.firstChild;return t.__click=f,t.__clickData=e,n.textContent=e+1,l(()=>d(t,{active:a.currentPage===e})),t}()},y)),n}},F)]},P)};i(["click"]);export{S as A};
