import{i as c,S as h}from"./assets/vendor-e65e6f9a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="42879535-23ffe446c86780b92a1736c42",S="https://pixabay.com/api/";function b(r){const t=`${S}?key=${q}&q=${r}`;return fetch(t).then(s=>{if(!s.ok)throw new Error("image error!");return s.json()})}function v(r,t){if(r.length===0){c.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}const s=r.map(({webformatURL:n,largeImageURL:e,tags:o,likes:i,views:p,comments:L,downloads:w})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${e}">
                        <img class="gallery-image" src="${n}" alt="${o}" />
                    </a>
                    <div class="parameters">
                        <div class="params">
                            <p class="options">Likes</p>
                            <p class="quantity">${i}</p>
                        </div>
                        <div class="params">
                            <p class="options">Views</p>
                            <p class="quantity">${p}</p>
                        </div>
                        <div class="params">
                            <p class="options">Comments</p>
                            <p class="quantity">${L}</p>
                        </div>
                        <div class="params">
                            <p class="options">Downloads</p>
                            <p class="quantity">${w}</p>
                        </div>
                    </div>
                </li>`).join("");t.insertAdjacentHTML("beforeend",s)}function $(r,t){r.innerHTML="",t&&t.refresh()}const y=document.querySelector(".input"),u=document.querySelector(".gallery"),P=document.querySelector(".form"),f=document.querySelector(".loader"),a=document.querySelector(".button-load"),d=document.querySelector(".loader-down");let l,m,g;function E(r){r.preventDefault(),f.style.display="block",g=y.value,m=1,$(u,l),b(g).then(t=>{const s=t.hits;v(s,u),f.style.display="none",y.value="",a.style.display="block",l=new h(".gallery a",{background:"rgba(46, 47, 66, 0.8)",captionDelay:250,captionsData:"alt"}),l.on("error.simplelightbox",function(n){console.log(n)})}).catch(()=>{c.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})})}function k(r){r.preventDefault(),m+=1,a.style.display="none",d.style.display="block",b(g).then(t=>{const s=t.hits;if(t.totalHits/15<m){a.style.display="none",d.style.display="none",c.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}v(s,u),a.style.display="block",d.style.display="none";const i=u.lastElementChild.getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"}),l=new h(".gallery a",{background:"rgba(46, 47, 66, 0.8)",captionDelay:250,captionsData:"alt"}),l.on("error.simplelightbox",function(p){console.log(p)})}).catch(()=>{c.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})})}P.addEventListener("submit",E);a.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
