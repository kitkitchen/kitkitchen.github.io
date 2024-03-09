(()=>{function e(e){return{id:e.id||"",name:e.name||"",tagName:e.tagName||"",innerHTML:e.innerHTML||"",outerHTML:e.outerHTML||"",value:e.value||""}}function t(t){return{clientX:t.clientX,clientY:t.clientY,identifier:t.identifier,pageX:t.pageX,pageY:t.pageY,radiusX:t.radiusX,radiusY:t.radiusY,rotationAngle:t.rotationAngle,screenX:t.screenX,screenY:t.screenY,target:e(t.target)}}var r=new class{constructor(){this.ws=null,this.Dispatch=e=>{if(e){if(!this.ws)throw new Error("ws: not connected to server...");this.ws.send(JSON.stringify(e))}},this.funs={initialize:e=>{e=this.utils.parseEventListeners(document.body,e),this.Dispatch(this.utils.addEventListeners(e))},render:e=>{let t=null,r=(new DOMParser).parseFromString(e.render.html,"text/html").firstChild.getElementsByTagName("body")[0].innerHTML;if(""!=e.render.tag){if(t=document.getElementsByTagName(e.render.tag)[0],!t)return this.Error(e,"element with tag not found: "+e.render.tag)}else{if(""==e.render.target_id)return this.Error(e,"no target or tag specified");if(t=document.getElementById(e.render.target_id),!t)return this.Error(e,"element with target_id not found: "+e.render.target_id)}e.render.inner&&(t.innerHTML=r),e.render.outer&&(t.outerHTML=r),e.render.append&&(t.innerHTML+=r),e.render.prepend&&(t.innerHTML=r+t.innerHTML),e=this.utils.parseEventListeners(t,e),this.Dispatch(this.utils.addEventListeners(e))}},this.utils={parseEventListeners:(e,t)=>{let r=this.utils.getAttributes(e,"events").map((e=>{let t=JSON.parse(e);if(t)return t})).flat().filter((e=>null!=e));return t.render.event_listeners=r,t},parseFormData:(e,t)=>{let r=e.target,n=new FormData(r);return t.event.data=Object.fromEntries(n.entries()),t},getElementByAttribute:e=>document.querySelectorAll("[".concat(e,"]")),trackTouch:e=>{e.addEventListener("touchstart",(t=>{t.preventDefault(),e.classList.add("touch")})),e.addEventListener("touchend",(t=>{e.classList.remove("touch")}))},getAttributes:(e,t)=>{let r=e.querySelectorAll("[".concat(t,"]"));return Array.from(r).map((e=>e.getAttribute(t)))},addEventListeners:r=>{r.render.event_listeners&&r.render.event_listeners.forEach((n=>{let a=document.getElementById(n.target_id);a?(a.firstChild&&(a=a.firstChild),a.addEventListener(n.on,(a=>{switch(a.preventDefault(),r.function="event",r.event=n,n.on){case"submit":r=this.utils.parseFormData(a,r);break;case"pointerdown":r.event.data={isTrusted:(s=a).isTrusted,altKey:s.altKey,bubbles:s.bubbles,button:s.button,buttons:s.buttons,cancelable:s.cancelable,clientX:s.clientX,clientY:s.clientY,composed:s.composed,ctrlKey:s.ctrlKey,currentTarget:e(s.currentTarget),defaultPrevented:s.defaultPrevented,detail:s.detail,eventPhase:s.eventPhase,height:s.height,isPrimary:s.isPrimary,metaKey:s.metaKey,movementX:s.movementX,movementY:s.movementY,offsetX:s.offsetX,offsetY:s.offsetY,pageX:s.pageX,pageY:s.pageY,pointerId:s.pointerId,pointerType:s.pointerType,pressure:s.pressure,relatedTarget:e(s.relatedTarget)};break;case"drag":case"mousedown":r.event.data=function(t){return{isTrusted:t.isTrusted,altKey:t.altKey,bubbles:t.bubbles,button:t.button,buttons:t.buttons,cancelable:t.cancelable,clientX:t.clientX,clientY:t.clientY,composed:t.composed,ctrlKey:t.ctrlKey,currentTarget:e(t.currentTarget),defaultPrevented:t.defaultPrevented,detail:t.detail,eventPhase:t.eventPhase,metaKey:t.metaKey,movementX:t.movementX,movementY:t.movementY,offsetX:t.offsetX,offsetY:t.offsetY,pageX:t.pageX,pageY:t.pageY,relatedTarget:e(t.relatedTarget)}}(a);break;case"keydown":r.event.data=function(t){return{isTrusted:t.isTrusted,altKey:t.altKey,bubbles:t.bubbles,cancelable:t.cancelable,code:t.code,composed:t.composed,ctrlKey:t.ctrlKey,currentTarget:e(t.currentTarget),defaultPrevented:t.defaultPrevented,detail:t.detail,eventPhase:t.eventPhase,isComposing:t.isComposing,key:t.key,location:t.location,metaKey:t.metaKey,repeat:t.repeat,shiftKey:t.shiftKey}}(a);break;case"change":default:r.event.data=e(a.target);break;case"touchstart":r.event.data=function(e){return{changedTouches:Array.from(e.changedTouches).map((e=>t(e))),targetTouches:Array.from(e.targetTouches).map((e=>t(e))),touches:Array.from(e.touches).map((e=>t(e))),layerX:e.layerX,layerY:e.layerY,pageX:e.pageX,pageY:e.pageY}}(a)}var s;this.Dispatch(r)}))):this.Error(r,"element not found")}))}},this.Error=(e,t)=>{e.function="error",e.error.message=t,this.Dispatch(e)}}Process(e,t){switch(this.ws||(this.ws=e),t.function){case"initialize":return void this.Dispatch(this.funs.initialize(t));case"redirect":return void(window.location.href=t.redirect.url);case"custom":return void this.Dispatch(window[t.custom.function](t.custom.data));case"render":this.Dispatch(this.funs.render(t))}}};new class{constructor(){if(this.ws=null,this.addr=void 0,this.key=void 0,this.addr)throw new Error("ws: already connected to server...");let e=localStorage.getItem("fncmp_key");e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),localStorage.setItem("fncmp_key",e)),this.key=e;let t=window.location.pathname.split(""),r="";("/"==t[-1]||1==t.length&&"/"==t[0])&&t.pop(),r=t.join(""),""==r&&(r="/main"),this.addr="ws://"+window.location.host+r+"?fncmp_id="+this.key,this.connect()}connect(){try{this.ws=new WebSocket(this.addr)}catch(e){throw new Error("ws: failed to connect to server...")}this.ws.onopen=function(){document.getElementById("fncmp_script").remove()},this.ws.onclose=function(){},this.ws.onerror=function(e){},this.ws.onmessage=function(e){let t=JSON.parse(e.data);r.Process(this,t)}}}})();