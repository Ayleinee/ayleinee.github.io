(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0312":function(t,e,n){t.exports=n.p+"img/about-header.96ea8219.svg"},"05c7":function(t){t.exports=JSON.parse('[{"id":"1","img":"cafe_colored.png","title":"Cafe 3D Model","desc":"A cafe model for Aimee\'s Cafe","tag":["unity"]},{"id":"2","img":"cafe_inner.png","title":"Cafe Inner 3D Model","desc":"Inner 3D models of the cafe","tag":["javascript"]},{"id":"3","img":"DxTr73SWsAELypx.jpg","title":"Ramen Shop","desc":"A cafe model for Aimee\'s Cafe","tag":["c#"]},{"id":"6","img":"21.02.13.gif","title":"Swamp Town","desc":"A cafe model for Aimee\'s Cafe","tag":["unity"]},{"id":"4","img":"lilypads.png","title":"Lily Pad Environment","desc":"Lily pad environment, showing the swamp forest","tag":["javascript"]},{"id":"7","img":"dog_car.gif","title":"Dog Space Ship","desc":"Inner 3D models of the cafe","tag":["javascript"]},{"id":"5","img":"sheep.png","title":"Sally The Sheep","desc":"Sally the sheep model","tag":["unity"]},{"id":"8","img":"barry.gif","title":"Barry The Pigeon","desc":"3D model of the local postman","tag":["c#"]}]')},"17f4":function(t,e,n){t.exports=n.p+"img/lilypads.21400310.png"},"1bf3":function(t,e,n){t.exports=n.p+"img/libra-stand.c65466a6.svg"},"20c9":function(t,e,n){},"26d5":function(t,e,n){t.exports=n.p+"img/starburst.f1f8d6be.svg"},"2eb4":function(t,e,n){t.exports=n.p+"img/cloud.2ea9662f.svg"},"31ed":function(t,e,n){t.exports=n.p+"img/cafe_colored.55a73b1c.png"},"324d":function(t,e,n){t.exports=n.p+"img/cafe_inner.bcbc907b.png"},"3f73":function(t,e,n){t.exports=n.p+"img/sun.16e94e9b.svg"},"42a8":function(t,e,n){t.exports=n.p+"img/star.90c80235.svg"},"4b97":function(t,e,n){t.exports=n.p+"img/upper-circle.dcd9d4db.svg"},"4cf7":function(t,e,n){t.exports=n.p+"img/libra-hover.8446e46e.svg"},"4d5b":function(t,e,n){"use strict";n("4e52")},"4e52":function(t,e,n){},"4f54":function(t,e,n){t.exports=n.p+"img/cloud-repeat.d2f45031.svg"},"54fd":function(t,e,n){t.exports=n.p+"img/cloud-about.81dea124.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.scollabe,attrs:{id:"app"}},[n("div",{staticClass:"outer-border"},[n("div",{staticClass:"base-dark"},[n("Home",{on:{setView:t.setView},model:{value:t.VIEW,callback:function(e){t.VIEW=e},expression:"VIEW"}})],1)]),n("div",{class:"slide-up-page slide-y-animation "+t.VIEW},[t._m(0),n("Navigation",{directives:[{name:"show",rawName:"v-show",value:t.VIEW==t.CONST.ART,expression:"VIEW == CONST.ART"}],model:{value:t.VIEW,callback:function(e){t.VIEW=e},expression:"VIEW"}}),n("div",{staticClass:"cloud-art"},[n("Art")],1)],1),n("transition",{attrs:{name:"slide-about"}},[n("About",{directives:[{name:"show",rawName:"v-show",value:t.VIEW==t.CONST.ABOUT,expression:"VIEW == CONST.ABOUT"}],model:{value:t.VIEW,callback:function(e){t.VIEW=e},expression:"VIEW"}})],1),n("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}}),t.index?n("Temp"):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cloud-background"},[n("div",{staticClass:"cloud"}),n("div",{staticClass:"cloud-fill"}),n("div",{staticClass:"cloud-large"})])}],o=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"image"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.string,expression:"string"}],attrs:{type:"text"},domProps:{value:t.string},on:{input:function(e){e.target.composing||(t.string=e.target.value)}}}),n("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.enter()}}},[t._v("OK")])])])}),r=[],c={props:["value"],data:function(){return{string:null,CODE:"testdemo01"}},methods:{enter:function(){this.string===this.CODE&&this.$emit("input",!1)}}},u=c,l=n("2877"),d=Object(l["a"])(u,o,r,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-circle-div"},[n("button",{staticClass:"half-circle btn-menu",attrs:{type:"button",name:"button"},on:{click:t.return_home}},[n("img",{attrs:{src:t.image_src,alt:""}})]),n("Navigation",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),n("span",{staticClass:"half-circle btn-menu-under"})],1)},g=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],attrs:{id:"nav"}},[n("div",{staticClass:"nav-border"},[n("router-link",{attrs:{to:"/home"},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}},[t._v("Home")]),n("router-link",{attrs:{to:"/art"},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}},[t._v("Art")]),n("span"),n("router-link",{attrs:{to:"/code"},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}},[t._v("Code")]),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}},[t._v("About")])],1)])])},m=[],v={props:["value"],data:function(){return{}},methods:{close:function(){this.$emit("input",!1)}}},b=v,A=Object(l["a"])(b,f,m,!1,null,null,null),_=A.exports,w={data:function(){return{show:!1}},methods:{return_home:function(){this.$emit("input","home")}},computed:{image_src:function(){var t=n("aeb6");return t("./bunny-small.svg")}},components:{Navigation:_}},I=w,E=Object(l["a"])(I,h,g,!1,null,null,null),C=E.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-up"},[t.show_info?t._e():n("Gallery",{attrs:{tag:t.tag,options:t.options,column:5},on:{click:t.show}}),n("transition",{attrs:{name:"slide"}},[t.show_info?n("Info",{attrs:{info:t.info_data},on:{next:function(e){return t.next()},prev:function(e){return t.prev()},click:function(e){return t.clear()}}}):t._e()],1)],1)},D=[],x=(n("5db7"),n("73d9"),n("4de4"),n("caad"),n("2532"),n("7db0"),n("c740"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"gallery"}},t._l(t.filtered_buttons,(function(e){return n("GButton",{key:e.id,attrs:{info:e},on:{click:function(n){return t.show(e.id)}}})})),1)}),N=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},click:function(e){return t.show()}}},[n("img",{attrs:{src:t.image_src,alt:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hover,expression:"hover"}],staticClass:"info"},[n("span",[t._v(t._s(t.info.title))]),n("p",[t._v(t._s(t.info.desc))])])])},S=[],O={props:["info"],data:function(){return{folder:"./../../assets/icons",hover:!1}},computed:{image_src:function(){var t=n("b853");return t("./"+this.info.img)}},methods:{show:function(){this.$emit("click")}},mounted:function(){}},T=O,k=Object(l["a"])(T,M,S,!1,null,null,null),R=k.exports,j=n("2ef0"),W={props:["value","options","tag","column"],data:function(){return{}},computed:{filtered_buttons:function(){var t=this;return this.tag.length>0?this.options.filter((function(e){return Object(j["intersection"])(e.tag,t.tag).length>0})):this.options}},methods:{show:function(t){this.$emit("click",t)}},created:function(){},components:{GButton:R}},L=W,B=Object(l["a"])(L,x,N,!1,null,null,null),Q=B.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("img",{attrs:{src:t.image_src,alt:""}}),n("div",{staticClass:"border"},[n("h1",[t._v(t._s(t.info.title))]),n("p",[t._v(t._s(t.info.desc))]),n("div",{staticClass:"buttons-div"},[n("button",{staticClass:"btn-arrow-left",attrs:{type:"button",name:"button"},on:{click:function(e){return t.$emit("prev")}}}),n("button",{staticClass:"btn-grid",attrs:{type:"button",name:"button"},on:{click:function(e){return t.$emit("click")}}}),n("button",{staticClass:"btn-arrow-right",attrs:{type:"button",name:"button"},on:{click:function(e){return t.$emit("next")}}})])]),n("button",{staticClass:"btn-close",attrs:{type:"button",name:"button"},on:{click:function(e){return t.$emit("click")}}},[t._v("X")])])},Z=[],z={props:["info","value"],data:function(){return{}},methods:{keypress:function(t){"ArrowRight"===t.code&&this.$emit("next"),"ArrowLeft"===t.code&&this.$emit("prev")}},computed:{image_src:function(){var t=n("b853");return t("./"+this.info.img)}},mounted:function(){window.addEventListener("keydown",this.keypress)}},Y=z,U=Object(l["a"])(Y,G,Z,!1,null,null,null),V=U.exports,P=n("05c7"),H={props:[],data:function(){return{options:P,tag_lookup:[{text:"C#",tag:"c#"},{text:"Vue JS",tag:"vue"},{text:"Unity 3D",tag:"unity"},{text:"Javascript",tag:"javascript"}],tag:[],show_info:!1,info_data:null}},computed:{tabs:function(){var t=this.options.flatMap((function(t){return t.tag}));return this.tag_lookup.filter((function(e){return t.includes(e.tag)}))}},methods:{clear:function(){this.show_info=!1,this.info_data=null},show:function(t){this.show_info=!0,this.info_data=this.options.find((function(e){return e.id==t}))},next:function(){var t=this,e=this.options.findIndex((function(e){return e.id==t.info_data.id}));e+1<this.options.length?this.info_data=this.options[e+1]:this.show_info=!1},prev:function(){var t=this,e=this.options.findIndex((function(e){return e.id==t.info_data.id}));e-1>=0?this.info_data=this.options[e-1]:this.show_info=!1}},components:{Gallery:Q,Info:V}},$=H,J=Object(l["a"])($,y,D,!1,null,null,null),X=J.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Stars",{attrs:{width:t.star_canvas_width,height:t.star_canvas_height}}),n("div",{class:"circle anim-rotate-left "+t.animation},[n("transition",{attrs:{name:"rotate-over"}},[t.value==t.CONST.CODE?n("Radial",{on:{onClick:t.showProject}}):t._e()],1),t._m(0)],1),n("div",{class:"libra-div "+t.value},[n("button",{staticClass:"libra-btn",on:{click:function(e){return t.setView(t.CONST.ABOUT)}}}),n("div",{staticClass:"libra-buttons-div"},[n("button",{staticClass:"btn-code",attrs:{type:"button",name:"button"},on:{click:function(e){return t.setView(t.CONST.CODE)}}},[t._v("CODE")]),n("button",{staticClass:"btn-art",attrs:{type:"button",name:"button"},on:{click:function(e){return t.setView(t.CONST.ART)}}},[t._v("ART")])])]),n("transition",{attrs:{name:"slide"}},[t.show_info?n("Info",{attrs:{pages:t.info_data.pages},on:{click:function(e){return t.clear()}}}):t._e()],1)],1)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-inner anim-rotate-right"},[n("div",{staticClass:"circle-inner anim-rotate-left-2"})])}],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("img",{attrs:{src:t.image_src,alt:""}}),n("div",{staticClass:"border"},[n("h1",[t._v(t._s(t.pages[t.index].title))]),n("p",[t._v(t._s(t.pages[t.index].desc))]),t._m(0),n("button",{directives:[{name:"show",rawName:"v-show",value:this.scrollable,expression:"(this.scrollable)"}],staticClass:"btn-scroll",attrs:{type:"button",name:"button"},on:{click:function(e){return t.scroll()}}},[t._v("SCROLL DOWN")]),n("Pagination",{attrs:{size:t.pages.length},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}})],1),n("button",{staticClass:"btn-close",attrs:{type:"button",name:"button"},on:{click:function(e){return t.$emit("click")}}},[t._v("X")])])},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("button",{attrs:{type:"button",name:"button"}})])}],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-div"},[n("div",[n("hr"),t._l(t.size,(function(e,i){return n("button",{key:i,class:t._style(i),attrs:{type:"button",name:"button"},on:{click:function(e){return t.setIndex(i)}}})}))],2)])},nt=[],it={props:["size","value"],data:function(){return{}},methods:{setIndex:function(t){this.$emit("input",t)},_style:function(t){return this.value==t?"active":""}},computed:{}},st=it,at=Object(l["a"])(st,et,nt,!1,null,null,null),ot=at.exports,rt={props:["pages"],data:function(){return{index:0}},methods:{scroll:function(){this.scrollable&&(this.index+=1)},page_down:function(){this.scrollable&&(this.index+=1)},page_up:function(){this.index-1>=0&&(this.index-=1)},setIndex:function(t){this.index=t},mouse_scroll:function(t){t.deltaY>0?this.page_down():this.page_up()},keypress:function(t){"ArrowDown"===t.code&&this.page_down(),"ArrowUp"===t.code&&this.page_up()}},computed:{scrollable:function(){return this.index<this.pages.length-1},image_src:function(){if(this.pages[this.index].img){var t=n("b853");return t("./"+this.pages[this.index].img)}return""}},mounted:function(){window.addEventListener("wheel",this.mouse_scroll),window.addEventListener("keydown",this.keypress),this.index=0},created:function(){},components:{Pagination:ot}},ct=rt,ut=Object(l["a"])(ct,K,tt,!1,null,null,null),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"canvas",width:t.width,height:t.height}})},pt=[],ht=(n("159b"),n("a9e3"),n("42a8")),gt=n.n(ht),ft=n("b201"),mt=n.n(ft),vt={props:["width","height","perc","padding_height"],name:"Stars",data:function(){return{vue_canvas:null,padding:0,padding_y:this.padding_height?this.padding_height:0,percentage:this.perc?this.perc:1,pos:[],star:null,shooting_star:{img:null,pos:{x:1e3,y:200},width:130,height:40,speed:24,wait:100,wait_time:100},CONST:{SMALL:"small",MED:"med",LARGE:"large"},STATE:{GROW:0,DELAY:1,SHRINK:2}}},methods:{generate_position:function(t){for(var e=40,n=40,i=40,s=20,a=5,o=5,r=Math.ceil(t.canvas.width/e),c=Math.floor(t.canvas.height/n),u=[],l=0;l<r+1;l++)for(var d=0;d<c+1;d++){var p=Math.random(),h=a,g=this.CONST.SMALL;p<.05?(h=i,g=this.CONST.LARGE):p<.4&&(h=s,g=this.CONST.MED);var f=Math.random()*h+o;u.push({x:Math.random()*((l+1)*e)+l*e-e/2,y:Math.random()*((d+1)*n)+d*n,size:f,size_min:f,size_max:f+(5*Math.random()+1),state:this.STATE.GROW,type:g,speed:.5*Math.random()})}return u},draw_star:function(){var t=this;this.pos.forEach((function(e){if(e.type!==t.CONST.SMALL)switch(e.state){case t.STATE.GROW:e.size<e.size_max?e.size=e.size+e.speed:e.state=t.STATE.SHRINK;break;case t.STATE.DELAY:e.size=e.size_min,Math.random()<.01&&(e.state=t.STATE.GROW);break;case t.STATE.SHRINK:e.size>e.size_min?e.size=e.size-e.speed:e.state=t.STATE.DELAY;break}t.vue_canvas.drawImage(t.star,e.x,e.y,e.size,e.size)})),this.shooting_star.pos.x>-this.shooting_star.width?(this.shooting_star.pos.x=Number(this.shooting_star.pos.x)-this.shooting_star.speed,this.shooting_star.pos.y+=1):this.shooting_star.wait>0?this.shooting_star.wait-=1:(this.shooting_star.wait=this.shooting_star.wait_time+Math.random()*this.shooting_star.wait_time*2,this.shooting_star.pos.x=this.vue_canvas.canvas.width,this.shooting_star.pos.y=200),this.vue_canvas.drawImage(this.shooting_star.img,this.shooting_star.pos.x,this.shooting_star.pos.y,this.shooting_star.width,this.shooting_star.height)},animate:function(){this.vue_canvas.clearRect(0,0,this.vue_canvas.canvas.width,this.vue_canvas.canvas.height),this.draw_star(),window.requestAnimationFrame(this.animate)},redraw:function(){this.vue_canvas.canvas.width=window.innerWidth*this.percentage-this.padding,this.vue_canvas.canvas.height=window.innerHeight-this.padding_y,this.pos=this.generate_position(this.vue_canvas),this.draw_star(this.vue_canvas,this.pos),this.animate(this.vue_canvas,this.pos)},load:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");return e.canvas.width=1080,e.canvas.height=1080,e.canvas.width=window.innerWidth*this.percentage,e.canvas.height=window.innerHeight-this.padding_y,this.shooting_star.pos.x=e.canvas.width,e}},mounted:function(){this.star=new Image,this.star.src=gt.a,this.shooting_star.img=new Image,this.shooting_star.img.src=mt.a,this.vue_canvas=this.load(),this.pos=this.generate_position(this.vue_canvas),this.draw_star(this.vue_canvas,this.pos),this.animate()},created:function(){window.removeEventListener("resize",this.redraw)}},bt=vt,At=Object(l["a"])(bt,dt,pt,!1,null,null,null),_t=At.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radial-div"},[n("div",{staticClass:"radial rotating"},t._l(6,(function(e){return n("div",{key:e,staticClass:"radial-slot"},[n("span",[n("button",{attrs:{type:"button",name:"button"},on:{click:function(n){return t.click(e)}}},[t._v(t._s(e))])])])})),0),n("div",{staticClass:"radial-center"},[n("button",{staticClass:"star-rotate-left",attrs:{type:"button",name:"button"},on:{click:function(e){return t.rotate(-1)}}},[t._v("LEFT")]),n("button",{staticClass:"star-return",attrs:{type:"button",name:"button"},on:{click:function(e){return t.click(null)}}},[t._v("RETURN")]),n("button",{staticClass:"star-rotate-right",attrs:{type:"button",name:"button"},on:{click:function(e){return t.rotate(1)}}},[t._v("RIGHT")])])])},It=[],Et=n("1157"),Ct=n.n(Et),yt={props:["value"],data:function(){return{offset:0,degrees:0}},methods:{id:function(t){return t},click:function(t){this.$emit("onClick",t)},rotate:function(t){this.degrees-=60*t,Ct()(".rotating").css({transform:"rotate("+this.degrees+"deg)"})}}},Dt=yt,xt=(n("4d5b"),Object(l["a"])(Dt,wt,It,!1,null,"090de9d3",null)),Nt=xt.exports,Mt=n("8882"),St={props:["value"],name:"Home",data:function(){return{options:Mt,CONST:{HOME:"home",ART:"art",CODE:"code",ABOUT:"about"},show_info:!1,info_data:null,vue_canvas:null,padding:0,star_canvas_width:window.innerWidth,star_canvas_height:window.innerHeight}},computed:{animation:function(){switch(this.value){case this.CONST.ABOUT:return"about-slide-down"}return"about-slide-up"}},methods:{setView:function(t){this.$emit("setView",t)},clear:function(){this.show_info=!1,this.info_data=null},showProject:function(t){null==t?this.$emit("setView",this.CONST.HOME):(this.show_info=!0,this.info_data=this.options.find((function(e){return e.id==t})))}},mounted:function(){},components:{Stars:_t,Radial:Nt,Info:lt}},Ot=St,Tt=Object(l["a"])(Ot,F,q,!1,null,null,null),kt=Tt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[n("div",[n("div",{staticClass:"about-image-div"},[n("img",{attrs:{src:t.image_src,alt:""}}),n("div",{staticClass:"media column"},[n("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.home()}}}),n("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.home()}}}),n("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.home()}}})])])]),t._m(0)])},jt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desc-div"},[n("div",{staticClass:"desc-panel-div"},[n("div",{staticClass:"about-header"},[t._v(" Who Am I? ")]),n("div",{staticClass:"desc"},[t._v(" Aileen Zhou, an artist from Brooklyn, specializes in digital media and digital illustrations. Prevalent in her work are use of bold silhouettes and colors, as well as women and fantasy figures in repose or in contemplation. ")])])])}],Wt={props:["value"],data:function(){return{}},computed:{image_border_src:function(){var t=n("aeb6");return t("./border-circle.svg")},image_src:function(){var t=n("aeb6");return t("./libra-stand.svg")},star_scale:function(){return window.innerWidth<860?1:.36}},methods:{home:function(){this.$emit("input","home")}},mounted:function(){},components:{}},Lt=Wt,Bt=Object(l["a"])(Lt,Rt,jt,!1,null,null,null),Qt=Bt.exports,Gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Zt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"temp"},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress"},[n("p",[t._v("GETTING AN UPDATE, BRB.")]),n("p",[t._v("SPRING 2022")])])])])}],zt={},Yt=zt,Ut=Object(l["a"])(Yt,Gt,Zt,!1,null,null,null),Vt=Ut.exports,Pt={data:function(){return{index:!0,loading:!0,show:!1,CONST:{HOME:"home",ART:"art",CODE:"code",ABOUT:"about"},VIEW:"home"}},methods:{home:function(){this.$router.push({path:"/"})},setView:function(t){this.VIEW=t}},computed:{scollabe:function(){return this.show?"no-scroll":""}},mounted:function(){"Home"==this.$router.history.current.name&&(this.index=!1)},components:{Navigation:C,Loading:p,Art:X,Home:kt,About:Qt,Temp:Vt}},Ht=Pt,$t=Object(l["a"])(Ht,s,a,!1,null,null,null),Jt=$t.exports,Xt=n("8c4f"),Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page code"},[n("div",{staticClass:"header"},[t._v(" CODE ")]),n("div",{staticClass:"sun"}),n("div",{staticClass:"dotted-circle"}),n("hr"),t._l(t.options,(function(e){return n("CodeButton",{key:e.id,attrs:{info:e},on:{show:function(n){return t.show(e.id)}}})})),n("transition",{attrs:{name:"slide"}},[t.show_info?n("Info",{attrs:{pages:t.info_data.pages},on:{click:function(e){return t.clear()}}}):t._e()],1),n("hr")],2)},qt=[],Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-prev-div"},[n("img",{attrs:{src:t.image_src,alt:""}}),n("div",{staticClass:"code-prev-details"},[n("h2",[t._v(t._s(t.info.title))]),n("p",[t._v(t._s(t.info.desc))]),n("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.read_more()}}},[t._v("READ MORE")])])])},te=[],ee={props:["info"],data:function(){return{}},computed:{image_src:function(){var t=n("b853");return t("./"+this.info.img)}},methods:{read_more:function(){this.$emit("show")}}},ne=ee,ie=Object(l["a"])(ne,Kt,te,!1,null,"6f826c5e",null),se=ie.exports,ae={props:[],data:function(){return{options:Mt,hover_img:"sheep.png",folder:"./../assets/icons",tag:[],show_info:!1,info_data:null}},computed:{image_src:function(){var t=n("b853");return t("./"+this.hover_img)}},methods:{clear:function(){this.show_info=!1,this.info_data=null},show:function(t){this.show_info=!0,this.info_data=this.options.find((function(e){return e.id==t}))}},components:{CodeButton:se,Info:lt}},oe=ae,re=Object(l["a"])(oe,Ft,qt,!1,null,null,null),ce=re.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"art-circle"}),n("span",{staticClass:"header mb-3"},[t._v("ART")]),t.show_info?t._e():n("Gallery",{attrs:{tag:t.tag,options:t.options,column:5},on:{click:t.show}}),n("transition",{attrs:{name:"slide"}},[t.show_info?n("Info",{attrs:{info:t.info_data},on:{next:function(e){return t.next()},prev:function(e){return t.prev()},click:function(e){return t.clear()}}}):t._e()],1)],1)},le=[],de={props:[],data:function(){return{options:P,tag_lookup:[{text:"C#",tag:"c#"},{text:"Vue JS",tag:"vue"},{text:"Unity 3D",tag:"unity"},{text:"Javascript",tag:"javascript"}],tag:[],show_info:!1,info_data:null}},computed:{tabs:function(){var t=this.options.flatMap((function(t){return t.tag}));return this.tag_lookup.filter((function(e){return t.includes(e.tag)}))}},methods:{clear:function(){this.show_info=!1,this.info_data=null},show:function(t){this.show_info=!0,this.info_data=this.options.find((function(e){return e.id==t}))},next:function(){var t=this,e=this.options.findIndex((function(e){return e.id==t.info_data.id}));e+1<this.options.length?this.info_data=this.options[e+1]:this.show_info=!1},prev:function(){var t=this,e=this.options.findIndex((function(e){return e.id==t.info_data.id}));e-1>=0?this.info_data=this.options[e-1]:this.show_info=!1}},components:{Gallery:Q,Info:V}},pe=de,he=Object(l["a"])(pe,ue,le,!1,null,null,null),ge=he.exports;i["a"].use(Xt["a"]);var fe=[{path:"/",name:"Temp",component:Vt},{path:"/Home",name:"Home",component:kt},{path:"/code",name:"Code",component:ce},{path:"/art",name:"Art",component:ge},{path:"/about",name:"About",component:Qt}],me=new Xt["a"]({routes:fe}),ve=me;n("20c9");i["a"].config.productionTip=!1,new i["a"]({router:ve,render:function(t){return t(Jt)}}).$mount("#app")},6200:function(t,e,n){t.exports=n.p+"img/temp-portait.c9ab8494.svg"},"6f51":function(t,e,n){t.exports=n.p+"img/icon-grid.2dc60b7b.svg"},"7cfa":function(t,e,n){t.exports=n.p+"img/art-circle.978aef63.svg"},8580:function(t,e,n){t.exports=n.p+"img/libra.2c4ba25f.svg"},8882:function(t){t.exports=JSON.parse('[{"id":"1","img":"cafe_colored.png","title":"Cafe 3D Model","desc":"A cafe model for Aimee\'s Cafe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","pages":[{"id":"1","img":"cafe_colored.png","title":"Summary","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis leo tincidunt, laoreet magna et, volutpat enim. Nullam laoreet accumsan mollis. Fusce luctus tempor odio, a blandit lacus semper eget. Quisque quis efficitur neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultrices diam non enim fermentum tincidunt. Maecenas vitae nisi blandit, commodo felis ut, cursus sem."},{"id":"2","img":"cafe_inner.png","title":"Requirements","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis leo tincidunt, laoreet magna et, volutpat enim. Nullam laoreet accumsan mollis. Fusce luctus tempor odio, a blandit lacus semper eget."},{"id":"3","img":"DxTr73SWsAELypx.jpg","title":"Where to play","desc":"Sed sit amet nunc lobortis, dictum purus et, sollicitudin dui. Maecenas cursus varius urna id imperdiet. Donec turpis urna, vehicula fermentum leo eu, placerat blandit metus."}],"tag":["unity"]},{"id":"2","img":"cafe_inner.png","title":"Cafe Inner 3D Model","desc":"Nulla sollicitudin sem dolor, at aliquet nisi dapibus eu. Fusce lobortis aliquet facilisis. Aenean eu tincidunt erat. Proin molestie tempor rutrum.","pages":[{"id":"1","img":"cafe_inner.png","title":"Overview","desc":"Etiam sapien velit, iaculis et elementum nec, imperdiet at nibh. Sed vitae lorem magna. Cras id nibh ante. "},{"id":"2","img":"cafe_inner.png","title":"Requirements","desc":"Phasellus efficitur urna et augue dignissim efficitur."},{"id":"3","img":"cafe_inner.png","title":"Design","desc":"Quisque eget nunc turpis. Cras vel imperdiet elit. Suspendisse quis urna ac lacus condimentum tincidunt."},{"id":"4","img":"cafe_inner.png","title":"Testing","desc":"Quisque eget nunc turpis. Cras vel imperdiet elit. Suspendisse quis urna ac lacus condimentum tincidunt."}],"tag":["javascript"]},{"id":"4","img":"21.02.13.gif","title":"Swamp Town","desc":"A location built for Aimee\'s cafe. Made in Blender 3D. It is a swamp location, home to many amphibians.","pages":[{"id":"1","img":"21.02.13.gif","title":"Reason","desc":"Because I wanted to make a game before I die."},{"id":"2","img":"21.02.13.gif","title":"Inspiration","desc":"Based on the victorian style architecture buildings. They are not practically for humid environments, but it is pretty."},{"id":"3","img":"21.02.13.gif","title":"Tools","desc":"Blender 3D, Unity Engine & Adobe Photoshop"}],"tag":["unity"]},{"id":"3","img":"DxTr73SWsAELypx.jpg","title":"Ramen Shop","desc":"A cafe model for Aimee\'s Cafe. Duis aliquet aliquam cursus. Quisque eget nunc turpis. Cras vel imperdiet elit. Suspendisse quis urna ac lacus condimentum tincidunt.","pages":[{"id":"1","img":"","title":"","desc":""},{"id":"2","img":"","title":"","desc":""},{"id":"3","img":"","title":"","desc":""}],"tag":["c#"]},{"id":"5","img":"lilypads.png","title":"Lily Pad Environment","desc":"Lily pad environment, showing the swamp forest","pages":[{"id":"1","title":"","desc":""},{"id":"2","title":"","desc":""},{"id":"3","title":"","desc":""}],"tag":["javascript"]},{"id":"6","img":"dog_car.gif","title":"Dog Space Ship","desc":"A 3D model made in blender of a dog shaped car. Was a project that never panned out.","pages":[{"id":"1","img":"dog_car.gif","title":"Test 1","desc":"Nothing."}],"tag":["javascript"]}]')},"90c4":function(t,e,n){t.exports=n.p+"img/dog_car.27895fd6.gif"},"938c":function(t,e,n){t.exports=n.p+"img/DxTr73SWsAELypx.addb66f8.jpg"},"95c6":function(t,e,n){t.exports=n.p+"img/sheep.428885dc.png"},a110:function(t,e,n){t.exports=n.p+"img/border-circle.bd348099.svg"},a270:function(t,e,n){t.exports=n.p+"img/cloud_2.d7bb38a3.svg"},abb7:function(t,e,n){t.exports=n.p+"img/libra-stand.3bbc1dff.svg"},aeb6:function(t,e,n){var i={"./about-header.svg":"0312","./about-portait.svg":"ce04","./arrow.svg":"b94f","./art-circle.svg":"7cfa","./border-circle.svg":"a110","./bunny-small.svg":"c2e0","./bunny.svg":"d809","./cloud-about.svg":"54fd","./cloud-repeat.svg":"4f54","./cloud.svg":"2eb4","./cloud_2.svg":"a270","./dotted-circles.svg":"df16","./icon-grid.svg":"6f51","./libra-hover.svg":"4cf7","./libra-stand.svg":"abb7","./libra.svg":"8580","./logo.png":"cf05","./shooting-star.svg":"b201","./star.svg":"42a8","./starburst.svg":"26d5","./sun.svg":"3f73","./temp-portait.svg":"6200","./upper-circle.svg":"4b97"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="aeb6"},b01f:function(t,e,n){t.exports=n.p+"img/21.02.13.34fb8ecf.gif"},b201:function(t,e,n){t.exports=n.p+"img/shooting-star.cc02ad0e.svg"},b853:function(t,e,n){var i={"./21.02.13.gif":"b01f","./DxTr73SWsAELypx.jpg":"938c","./barry.gif":"fea3","./cafe_colored.png":"31ed","./cafe_inner.png":"324d","./dog_car.gif":"90c4","./libra-stand.svg":"1bf3","./lilypads.png":"17f4","./sheep.png":"95c6"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="b853"},b94f:function(t,e,n){t.exports=n.p+"img/arrow.09915f61.svg"},c2e0:function(t,e,n){t.exports=n.p+"img/bunny-small.7f8b405a.svg"},ce04:function(t,e,n){t.exports=n.p+"img/about-portait.d225a7f6.svg"},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGtWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2MyYjMyY2EtMWViZC1lYzRiLWI4ZmItNGE4MjY4MTYyMGEwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNy0xOVQyMjozNToxOC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTEtMDJUMjE6MjM6NDYtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDJUMjE6MjM6NDYtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTZBMTI3OTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZBMTI3QTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0M2VhODE2ZC0yMGQ2LWJiNGYtODY1MC0zYTVlNzFlNjU3OTEiIHN0RXZ0OndoZW49IjIwMjEtMDgtMDNUMjA6NDg6MzctMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2MyYjMyY2EtMWViZC1lYzRiLWI4ZmItNGE4MjY4MTYyMGEwIiBzdEV2dDp3aGVuPSIyMDIxLTExLTAyVDIxOjIzOjQ2LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JmeB0QAAAhRJREFUeJzt07ERwCAQwLCQ/Xd+FuDcQiFN4MZrZj7g7L8dAC8zCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0AwCASDQDAIBINAMAgEg0DY3Q0EjbjHeY8AAAAASUVORK5CYII="},d809:function(t,e,n){t.exports=n.p+"img/bunny.f0561e35.svg"},df16:function(t,e,n){t.exports=n.p+"img/dotted-circles.0af107bf.svg"},fea3:function(t,e,n){t.exports=n.p+"img/barry.8af3d079.gif"}});
//# sourceMappingURL=app.790e9275.js.map