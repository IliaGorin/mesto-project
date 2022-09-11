(()=>{"use strict";const e=document.querySelector("#popupEditProfile"),t=document.forms["user-add-info"],o=document.forms["add-new-mesto"],r=document.forms["edit-avatar"],n=document.querySelector("#avatar-link"),a=document.querySelector("#popupEditAvatar"),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__subtitle"),c=document.querySelector("#profile-name"),i=document.querySelector("#profile-subtitle"),u=document.querySelectorAll(".popup"),d=document.querySelector("#popupNewMesto"),p=document.querySelector("#card-title"),m=document.querySelector("#card-link"),_=document.querySelector(".posts-area__posts-list"),h=document.querySelector(".profile__edit-button"),v=document.querySelector("#save-profile-button"),f=document.querySelector(".profile__add-button"),y=document.querySelector("#create-card-button"),b=document.querySelector(".profile__edit-avatar-button"),S=document.querySelector("#button-update-avatar"),k=document.querySelector("#imageInPopup"),E=document.querySelector("#img-popup"),g=document.querySelector(".popup__image-header"),C=document.querySelector(".profile__avatar"),q=document.querySelector("#template-posts-area").content,L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},x={baseUrl:"https://nomoreparties.co/v1/plus-cohort-14",headers:{authorization:"26532032-c932-44be-aa06-105c74f5a87c","Content-Type":"application/json"}},A={name:"",link:"",_Id:"",likes:"",owner:"",createdAt:"",owner:{name:"",about:"",_id:"",avatar:""}},$={name:"",about:"",_id:"",avatar:""};function w(e){"Escape"===e.key&&P(document.querySelector(".popup_opened"))}function U(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function P(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w)}function I(e){U(E),k.src=e.target.src,k.alt=e.target.alt,g.textContent=e.target.closest(".posts-area__post-card").querySelector(".posts-area__title").textContent}function T(e,t,o,r,n){const a=q.cloneNode(!0),s=a.querySelector(".posts-area__image"),l=a.querySelector(".posts-area__title"),c=a.querySelector(".posts-area__remove"),i=a.querySelector(".posts-area__like"),u=a.querySelector(".posts-area__like-counter");return s.src=e.link,s.alt=e.name,l.textContent=e.name,s.dataset.cardId=e._Id,s.dataset.likesCount=e.likes.length,u.textContent=e.likes.length,e.likes.some((function(e){return e._id===r}))&&i.classList.add("posts-area__like_active"),e.owner._id!==r&&c.setAttribute("style","display:none"),c.addEventListener("click",t),i.addEventListener("click",o),s.addEventListener("click",n),a}function B(e,t){!function(e){return e.some((e=>!e.validity.valid))}(e)?(t.classList.remove(L.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(L.inactiveButtonClass),t.setAttribute("disabled","disabled"))}function D(e){const t=Array.from(e.querySelectorAll(L.inputSelector)),o=e.querySelector(L.submitButtonSelector);B(t,o),t.forEach((r=>{r.addEventListener("input",(()=>{(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){const o=e.querySelector(`.${t.id}-error`);t.classList.remove(L.inputErrorClass),o.classList.remove(L.errorClass),o.textContent=""}(e,t):function(e,t,o){const r=e.querySelector(`.${t.id}-error`);t.classList.add(L.inputErrorClass),r.textContent=o,r.classList.add(L.errorClass)}(e,t,t.validationMessage)})(e,r),B(t,o)}))}))}u.forEach((e=>{e.addEventListener("click",(t=>{(t.target.classList.contains("popup__close-icon")||t.target.classList.contains("popup"))&&P(e)}))}));const N=e=>e.ok?e.json():Promise.reject(new Error(`Error ${e.status}`));let M="";function O(e){A.name=e.name,A.link=e.link,A.owner._id=e.owner._id,A._Id=e._id,A.likes=e.likes}function j(e){var t;(t=e.target.previousElementSibling.dataset.cardId,fetch(`${x.baseUrl}/cards/${t}`,{method:"DELETE",headers:x.headers}).then((e=>N(e)))).then((e=>{})).catch((e=>{console.log(e)})),e.target.parentElement.remove()}function J(e){const t=e.target.parentElement.parentElement.parentElement.firstElementChild,o=t.dataset.cardId;e.target.classList.toggle("posts-area__like_active"),e.target.classList.contains("posts-area__like_active")?(e=>fetch(`${x.baseUrl}/cards/likes/${e}`,{method:"PUT",headers:x.headers}).then((e=>N(e))))(o).then((o=>{t.dataset.likesCount=o.likes.length,e.target.nextElementSibling.textContent=o.likes.length})).catch((e=>{console.log(e)})):(e=>fetch(`${x.baseUrl}/cards/likes/${e}`,{method:"DELETE",headers:x.headers}).then((e=>N(e))))(o).then((o=>{t.dataset.likesCount=o.likes.length,e.target.nextElementSibling.textContent=o.likes.length})).catch((e=>{console.log(e)}))}Promise.all([fetch(`${x.baseUrl}/cards`,{headers:x.headers}).then((e=>N(e))),fetch(`${x.baseUrl}/users/me`,{headers:x.headers}).then((e=>N(e)))]).then((([e,t])=>{!function(e){s.textContent=e.name,l.textContent=e.about,C.src=e.avatar,M=e._id}(t),e.forEach((e=>{O(e),_.append(T(A,j,J,M,I))}))})).catch((e=>{console.log(e)})),o.addEventListener("submit",(function(e){e.preventDefault(),A.name=p.value,A.link=m.value,y.textContent="Сохранение...",(e=>fetch(`${x.baseUrl}/cards`,{method:"POST",headers:x.headers,body:JSON.stringify({link:e.link,name:e.name})}).then((e=>N(e))))(A).then((e=>{O(e),_.prepend(T(A,j,J,M,I)),P(d),o.reset(),y.classList.add("popup__save-button_disabled"),y.setAttribute("disabled","disabled")})).catch((e=>{console.log(e)})).finally((()=>{y.textContent="Создать"}))})),t.addEventListener("submit",(function(t){t.preventDefault(),$.name=c.value,$.about=i.value,v.textContent="Сохранение...",(e=>fetch(`${x.baseUrl}/users/me`,{method:"PATCH",headers:x.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((e=>N(e))))($).then((t=>{s.textContent=t.name,l.textContent=t.about,P(e)})).catch((e=>{console.log(e)})).finally((()=>{v.textContent="Сохранить"}))})),r.addEventListener("submit",(function(e){e.preventDefault(),S.textContent="Сохранение...",(e=>fetch(`${x.baseUrl}/users/me/avatar`,{method:"PATCH",headers:x.headers,body:JSON.stringify({avatar:e})}).then((e=>N(e))))(n.value).then((e=>{C.src=e.avatar,n.value="",P(a)})).catch((e=>{console.log(e)})).finally((()=>{S.textContent="Сохранить"}))})),b.addEventListener("click",(()=>{U(a)})),f.addEventListener("click",(()=>{U(d)})),h.addEventListener("click",(()=>{c.setAttribute("value",s.textContent),i.setAttribute("value",l.textContent),U(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((t=>{t.addEventListener("submit",(o=>{o.preventDefault(),B([...t.querySelectorAll(e.inputSelector)],t.querySelector(e.submitButtonSelector))})),D(t)}))}(L)})();