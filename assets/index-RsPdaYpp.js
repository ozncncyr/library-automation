(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const w of p.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function L(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(i){if(i.ep)return;i.ep=!0;const p=L(i);fetch(i.href,p)}})();var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var x={exports:{}},D=x.exports,q;function J(){return q||(q=1,function(c,m){(function(L,u){c.exports=u(L)})(typeof H<"u"?H:window||D.window||D.global,function(L){var u={},i="iziToast";document.querySelector("body");var p=!!/Mobi/.test(navigator.userAgent),w=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),G=typeof InstallTrigger<"u",E="ontouchstart"in document.documentElement,R=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],X={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},C=568,I={};u.children={};var S={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var A=function(s,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(s,n.bubbles,n.cancelable,n.detail),e};A.prototype=window.Event.prototype,window.CustomEvent=A}var g=function(s,n,e){if(Object.prototype.toString.call(s)==="[object Object]")for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&n.call(e,s[t],t,s);else if(s)for(var r=0,l=s.length;r<l;r++)n.call(e,s[r],r,s)},v=function(s,n){var e={};return g(s,function(t,r){e[r]=s[r]}),g(n,function(t,r){e[r]=n[r]}),e},T=function(s){var n=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=s;e.firstChild;)n.appendChild(e.firstChild);return n},U=function(s){var n=btoa(encodeURIComponent(s));return n.replace(/=/g,"")},P=function(s){return s.substring(0,1)=="#"||s.substring(0,3)=="rgb"||s.substring(0,3)=="hsl"},j=function(s){try{return btoa(atob(s))==s}catch{return!1}},h=function(){return{move:function(s,n,e,t){var r,l=.3,o=180;t!==0&&(s.classList.add(i+"-dragged"),s.style.transform="translateX("+t+"px)",t>0?(r=(o-t)/o,r<l&&n.hide(v(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),s,"drag")):(r=(o+t)/o,r<l&&n.hide(v(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),s,"drag")),s.style.opacity=r,r<l&&((w||G)&&(s.style.left=t+"px"),s.parentNode.style.opacity=l,this.stopMoving(s,null)))},startMoving:function(s,n,e,t){t=t||window.event;var r=E?t.touches[0].clientX:t.clientX,l=s.style.transform.replace("px)","");l=l.replace("translateX(","");var o=r-l;e.transitionIn&&s.classList.remove(e.transitionIn),e.transitionInMobile&&s.classList.remove(e.transitionInMobile),s.style.transition="",E?document.ontouchmove=function(a){a.preventDefault(),a=a||window.event;var d=a.touches[0].clientX,f=d-o;h.move(s,n,e,f)}:document.onmousemove=function(a){a.preventDefault(),a=a||window.event;var d=a.clientX,f=d-o;h.move(s,n,e,f)}},stopMoving:function(s,n){E?document.ontouchmove=function(){}:document.onmousemove=function(){},s.style.opacity="",s.style.transform="",s.classList.contains(i+"-dragged")&&(s.classList.remove(i+"-dragged"),s.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){s.style.transition=""},400))}}}();return u.setSetting=function(s,n,e){u.children[s][n]=e},u.getSetting=function(s,n){return u.children[s][n]},u.destroy=function(){g(document.querySelectorAll("."+i+"-overlay"),function(s,n){s.remove()}),g(document.querySelectorAll("."+i+"-wrapper"),function(s,n){s.remove()}),g(document.querySelectorAll("."+i),function(s,n){s.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),I={}},u.settings=function(s){u.destroy(),I=s,S=v(S,s||{})},g(X,function(s,n){u[n]=function(e){var t=v(I,e||{});t=v(s,t||{}),this.show(t)}}),u.progress=function(s,n,e){var t=this,r=n.getAttribute("data-iziToast-ref"),l=v(this.children[r],s||{}),o=n.querySelector("."+i+"-progressbar div");return{start:function(){typeof l.time.REMAINING>"u"&&(n.classList.remove(i+"-reseted"),o!==null&&(o.style.transition="width "+l.timeout+"ms "+l.progressBarEasing,o.style.width="0%"),l.time.START=new Date().getTime(),l.time.END=l.time.START+l.timeout,l.time.TIMER=setTimeout(function(){clearTimeout(l.time.TIMER),n.classList.contains(i+"-closing")||(t.hide(l,n,"timeout"),typeof e=="function"&&e.apply(t))},l.timeout),t.setSetting(r,"time",l.time))},pause:function(){if(typeof l.time.START<"u"&&!n.classList.contains(i+"-paused")&&!n.classList.contains(i+"-reseted")){if(n.classList.add(i+"-paused"),l.time.REMAINING=l.time.END-new Date().getTime(),clearTimeout(l.time.TIMER),t.setSetting(r,"time",l.time),o!==null){var a=window.getComputedStyle(o),d=a.getPropertyValue("width");o.style.transition="none",o.style.width=d}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof l.time.REMAINING<"u"?(n.classList.remove(i+"-paused"),o!==null&&(o.style.transition="width "+l.time.REMAINING+"ms "+l.progressBarEasing,o.style.width="0%"),l.time.END=new Date().getTime()+l.time.REMAINING,l.time.TIMER=setTimeout(function(){clearTimeout(l.time.TIMER),n.classList.contains(i+"-closing")||(t.hide(l,n,"timeout"),typeof e=="function"&&e.apply(t))},l.time.REMAINING),t.setSetting(r,"time",l.time)):this.start()},reset:function(){clearTimeout(l.time.TIMER),delete l.time.REMAINING,t.setSetting(r,"time",l.time),n.classList.add(i+"-reseted"),n.classList.remove(i+"-paused"),o!==null&&(o.style.transition="none",o.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},u.hide=function(s,n,e){typeof n!="object"&&(n=document.querySelector(n));var t=this,r=v(this.children[n.getAttribute("data-iziToast-ref")],s||{});r.closedBy=e||null,delete r.time.REMAINING,n.classList.add(i+"-closing"),function(){var a=document.querySelector("."+i+"-overlay");if(a!==null){var d=a.getAttribute("data-iziToast-ref");d=d.split(",");var f=d.indexOf(String(r.ref));f!==-1&&d.splice(f,1),a.setAttribute("data-iziToast-ref",d.join()),d.length===0&&(a.classList.remove("fadeIn"),a.classList.add("fadeOut"),setTimeout(function(){a.remove()},700))}}(),r.transitionIn&&n.classList.remove(r.transitionIn),r.transitionInMobile&&n.classList.remove(r.transitionInMobile),p||window.innerWidth<=C?r.transitionOutMobile&&n.classList.add(r.transitionOutMobile):r.transitionOut&&n.classList.add(r.transitionOut);var l=n.parentNode.offsetHeight;n.parentNode.style.height=l+"px",n.style.pointerEvents="none",(!p||window.innerWidth>C)&&(n.parentNode.style.transitionDelay="0.2s");try{var o=new CustomEvent(i+"-closing",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(a){console.warn(a)}setTimeout(function(){n.parentNode.style.height="0px",n.parentNode.style.overflow="",setTimeout(function(){delete t.children[r.ref],n.parentNode.remove();try{var a=new CustomEvent(i+"-closed",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(a)}catch(d){console.warn(d)}typeof r.onClosed<"u"&&r.onClosed.apply(null,[r,n,e])},1e3)},200),typeof r.onClosing<"u"&&r.onClosing.apply(null,[r,n,e])},u.show=function(s){var n=this,e=v(I,s||{});if(e=v(S,e),e.time={},e.id===null&&(e.id=U(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+e.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{g(document.querySelectorAll("."+i+"#"+e.id),function(o,a){n.hide(e,o,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),u.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(i),t.toast.classList.add(i+"-opening"),t.toastCapsule.classList.add(i+"-capsule"),t.toastBody.classList.add(i+"-body"),t.toastTexts.classList.add(i+"-texts"),p||window.innerWidth<=C?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var o=e.class.split(" ");g(o,function(a,d){t.toast.classList.add(a)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(i+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(i+"-layout"+e.layout),e.balloon&&t.toast.classList.add(i+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(i+"-theme-"+e.theme),e.color&&(P(e.color)?t.toast.style.background=e.color:t.toast.classList.add(i+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(i+"-cover"),t.cover.style.width=e.imageWidth+"px",j(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(i+"-close"),t.buttonClose.addEventListener("click",function(o){o.target,n.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(i+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){n.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(o){n.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){n.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(o){n.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",i+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",i+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(i+"-title"),t.strong.appendChild(T(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(i+"-message"),t.p.appendChild(T(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var r;(function(){e.inputs.length>0&&(t.inputs.classList.add(i+"-inputs"),g(e.inputs,function(o,a){t.inputs.appendChild(T(o[0])),r=t.inputs.childNodes,r[a].classList.add(i+"-inputs-child"),o[3]&&setTimeout(function(){r[a].focus()},300),r[a].addEventListener(o[1],function(d){var f=o[2];return f(n,t.toast,this,d)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(i+"-buttons"),g(e.buttons,function(o,a){t.buttons.appendChild(T(o[0]));var d=t.buttons.childNodes;d[a].classList.add(i+"-buttons-child"),o[2]&&setTimeout(function(){d[a].focus()},300),d[a].addEventListener("click",function(f){f.preventDefault();var F=o[1];return F(n,t.toast,this,f,r)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var o=t.toast.offsetHeight,a=t.toast.currentStyle||window.getComputedStyle(t.toast),d=a.marginTop;d=d.split("px"),d=parseInt(d[0]);var f=a.marginBottom;f=f.split("px"),f=parseInt(f[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=o+f+d+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&n.progress(e,t.toast).start()},100)}(),function(){var o=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(i+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(R.indexOf(e.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+R);return}p||window.innerWidth<=C?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?o=i+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?o=i+"-wrapper-topCenter":o=i+"-wrapper-center":o=i+"-wrapper-"+o,t.wrapper=document.querySelector("."+i+"-wrapper."+o),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(i+"-wrapper"),t.wrapper.classList.add(o),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+i+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+i+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(i+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(o){n.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(i+"-animateInside");var o=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(o=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},o[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},o[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},o[2]);var a=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){g(t.buttons.childNodes,function(d,f){setTimeout(function(){d.classList.add("revealIn")},a),a=a+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(a=150,g(t.inputs.childNodes,function(d,f){setTimeout(function(){d.classList.add("revealIn")},a),a=a+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var l=new CustomEvent(i+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(o){console.warn(o)}setTimeout(function(){t.toast.classList.remove(i+"-opening"),t.toast.classList.add(i+"-opened");try{var o=new CustomEvent(i+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(a){console.warn(a)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(E?(t.toast.addEventListener("touchstart",function(o){h.startMoving(this,n,e,o)},!1),t.toast.addEventListener("touchend",function(o){h.stopMoving(this,o)},!1)):(t.toast.addEventListener("mousedown",function(o){o.preventDefault(),h.startMoving(this,n,e,o)},!1),t.toast.addEventListener("mouseup",function(o){o.preventDefault(),h.stopMoving(this,o)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(o){o=o||window.event,o.keyCode==27&&n.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(o){n.hide(e,t.toast,"toast")}),n.toast=t.toast},u})}(x)),x.exports}var K=J();const N=_(K),V=document.getElementById("bookList"),Q=document.getElementById("addBook"),O=document.getElementById("bookTitle"),M=document.getElementById("authorName"),B=document.getElementById("publishDate"),y=document.getElementById("bookRating"),z=document.getElementById("bookGenres");let b=[];Q.addEventListener("click",()=>{if(!O.value||!M.value||!B.value||!y.value||!z.value){N.show({title:"Error",message:"Please fill in all fields",position:"topRight",color:"red",timeout:3e3});return}else{y.value=y.value>10?10:y.rating,y.value=y.value<1?1:y.rating;const c={id:Date.now(),title:O.value,author:M.value,date:B.value,rating:y.value,genres:z.value};b.push(c),k(c),Y(),W(),N.show({title:"Success",message:"Book added to library",position:"topRight",color:"green",timeout:3e3})}});const k=c=>{const m=document.createElement("li");m.classList.add("book"),m.innerHTML=`
    <h3>📖 ${c.title}</h3>
    <div class="book-info">
    <p>🖋️ ${c.author}</p>
    <p>📆 ${c.date}</p>
    <p>⭐ ${c.rating}</p>
    <p>🎭 ${c.genres}</p>
    </div>
    <button class="remove">🗑️ Remove</button>
  `,m.querySelector(".remove").addEventListener("click",()=>{b=b.filter(u=>u.id!==c.id),m.remove(),N.show({title:"Success",message:"Book deleted from library",position:"topRight",color:"yellow",timeout:3e3})}),V.appendChild(m)},Y=()=>{O.value="",M.value="",B.value="",y.value="",z.value=""},W=()=>{localStorage.setItem("library",JSON.stringify(b))},Z=()=>{const c=localStorage.getItem("library");c&&(b=JSON.parse(c),b.forEach(m=>{k(m)}))};Z();window.addEventListener("beforeunload",W);
