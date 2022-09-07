(()=>{"use strict";const e=document.querySelector("#popupEditProfile"),t=document.forms["user-add-info"],r=document.forms["add-new-mesto"],n=document.forms["edit-avatar"],o=document.querySelector("#avatar-link"),a=document.querySelector("#popupEditAvatar"),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__subtitle"),i=document.querySelector("#profile-name"),c=document.querySelector("#profile-subtitle"),u=document.querySelectorAll(".popup"),d=document.querySelector("#popupNewMesto"),p=document.querySelector("#card-title"),m=document.querySelector("#card-link"),_=document.querySelector(".posts-area__posts-list"),h=document.querySelector(".profile__edit-button"),v=document.querySelector("#save-profile-button"),f=document.querySelector(".profile__add-button"),y=document.querySelector("#create-card-button"),S=document.querySelector(".profile__edit-avatar-button"),b=document.querySelector("#button-update-avatar"),k=document.querySelector("#imageInPopup"),E=document.querySelector("#img-popup"),C=document.querySelector(".popup__image-header"),q=document.querySelector(".profile__avatar"),g=document.querySelector("#template-posts-area").content,L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},x={baseUrl:"https://nomoreparties.co/v1/plus-cohort-14",headers:{authorization:"26532032-c932-44be-aa06-105c74f5a87c","Content-Type":"application/json"}},A={name:"",link:"",_Id:"",likes:"",owner:"",createdAt:"",owner:{name:"",about:"",_id:"",avatar:""}},$={name:"",about:"",_id:"",avatar:""};function w(e){"Escape"===e.key&&P(document.querySelector(".popup_opened"))}function U(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function P(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w)}function I(e){U(E),k.src=e.target.src,k.alt=e.target.alt,C.textContent=e.target.closest(".posts-area__post-card").querySelector(".posts-area__title").textContent}function T(e,t,r,n){const o=g.cloneNode(!0),a=o.querySelector(".posts-area__image"),s=o.querySelector(".posts-area__title"),l=o.querySelector(".posts-area__remove"),i=o.querySelector(".posts-area__like"),c=o.querySelector(".posts-area__like-counter");return a.src=e.link,a.alt=e.name,s.textContent=e.name,a.dataset.cardId=e._Id,a.dataset.likesCount=e.likes.length,c.textContent=e.likes.length,e.likes.some((function(e){return e._id===n}))&&i.classList.add("posts-area__like_active"),e.owner._id!==n&&l.setAttribute("style","display:none"),l.addEventListener("click",t),i.addEventListener("click",r),a.addEventListener("click",I),o}function B(e,t){!function(e){return e.some((e=>!e.validity.valid))}(e)?(t.classList.remove(L.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(L.inactiveButtonClass),t.setAttribute("disabled","disabled"))}function D(e){const t=Array.from(e.querySelectorAll(L.inputSelector)),r=e.querySelector(L.submitButtonSelector);B(t,r),t.forEach((n=>{n.addEventListener("input",(()=>{(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){const r=e.querySelector(`.${t.id}-error`);t.classList.remove(L.inputErrorClass),r.classList.remove(L.errorClass),r.textContent=""}(e,t):function(e,t,r){const n=e.querySelector(`.${t.id}-error`);t.classList.add(L.inputErrorClass),n.textContent=r,n.classList.add(L.errorClass)}(e,t,t.validationMessage)})(e,n),B(t,r)}))}))}u.forEach((e=>{e.addEventListener("click",(t=>{(t.target.classList.contains("popup__close-icon")||t.target.classList.contains("popup"))&&P(e)}))}));const N=e=>e.ok?e.json():Promise.reject(new Error(`Error ${e.status}`));let M="";function O(e){A.name=e.name,A.link=e.link,A.owner._id=e.owner._id,A._Id=e._id,A.likes=e.likes}function j(e){var t;(t=e.target.previousElementSibling.dataset.cardId,fetch(`${x.baseUrl}/cards/${t}`,{method:"DELETE",headers:x.headers}).then((e=>N(e)))).then((e=>{})),e.target.parentElement.remove()}function J(e){const t=e.target.parentElement.parentElement.parentElement.firstElementChild,r=t.dataset.cardId;e.target.classList.toggle("posts-area__like_active"),e.target.classList.contains("posts-area__like_active")?(e=>fetch(`${x.baseUrl}/cards/likes/${e}`,{method:"PUT",headers:x.headers}).then((e=>N(e))))(r).then((r=>{t.dataset.likesCount=r.likes.length,e.target.nextElementSibling.textContent=r.likes.length})):(e=>fetch(`${x.baseUrl}/cards/likes/${e}`,{method:"DELETE",headers:x.headers}).then((e=>N(e))))(r).then((r=>{t.dataset.likesCount=r.likes.length,e.target.nextElementSibling.textContent=r.likes.length}))}Promise.all([fetch(`${x.baseUrl}/cards`,{headers:x.headers}).then((e=>N(e))),fetch(`${x.baseUrl}/users/me`,{headers:x.headers}).then((e=>N(e)))]).then((([e,t])=>{!function(e){s.textContent=e.name,l.textContent=e.about,q.src=e.avatar,M=e._id}(t),e.forEach((e=>{O(e),_.append(T(A,j,J,M))}))})).catch((e=>{console.log(e)})),r.addEventListener("submit",(function(e){e.preventDefault(),A.name=p.value,A.link=m.value,y.textContent="Сохранение...",(e=>fetch(`${x.baseUrl}/cards`,{method:"POST",headers:x.headers,body:JSON.stringify({link:e.link,name:e.name})}).then((e=>N(e))))(A).then((e=>{O(e),_.prepend(T(A,j,J,M)),r.reset(),P(d)})).catch((e=>{console.log(e)})).finally((()=>{y.textContent="Создать"}))})),t.addEventListener("submit",(function(t){t.preventDefault(),$.name=i.value,$.about=c.value,v.textContent="Сохранение...",(e=>fetch(`${x.baseUrl}/users/me`,{method:"PATCH",headers:x.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((e=>N(e))))($).then((t=>{s.textContent=t.name,l.textContent=t.about,P(e)})).catch((e=>{console.log(e)})).finally((()=>{v.textContent="Сохранить"}))})),n.addEventListener("submit",(function(e){e.preventDefault(),b.textContent="Сохранение...",(e=>fetch(`${x.baseUrl}/users/me/avatar`,{method:"PATCH",headers:x.headers,body:JSON.stringify({avatar:e})}).then((e=>N(e))))(o.value).then((e=>{q.src=e.avatar,o.value="",P(a)})).catch((e=>{console.log(e)})).finally((()=>{b.textContent="Сохранить"}))})),S.addEventListener("click",(()=>{U(a)})),f.addEventListener("click",(()=>{U(d)})),h.addEventListener("click",(()=>{i.setAttribute("value",s.textContent),c.setAttribute("value",l.textContent),U(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((t=>{t.addEventListener("submit",(r=>{r.preventDefault(),B([...t.querySelectorAll(e.inputSelector)],t.querySelector(e.submitButtonSelector))})),D(t)}))}(L)})();