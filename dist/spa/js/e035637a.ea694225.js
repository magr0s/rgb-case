(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e035637a"],{"15c5":function(e,t,r){"use strict";r.r(t);var n,i,a,s,o,c,l=r("4db1"),d=r.n(l),p=[{id:1,title:"Разработка <br> и продвижение <br> сайтов",desc:"Эффективные решения для бизнеса в интернете",label:"Посмотреть проекты",img:"statics/banners/b1.png"},{id:2,title:"Разработка <br> и продвижение <br> сайтов",desc:"Эффективные решения для бизнеса в интернете",label:"Посмотреть проекты",img:"statics/banners/b1.png"},{id:3,title:"Разработка <br> и продвижение <br> сайтов",desc:"Эффективные решения для бизнеса в интернете",label:"Посмотреть проекты",img:"statics/banners/b1.png"},{id:4,title:"Разработка <br> и продвижение <br> сайтов",desc:"Эффективные решения для бизнеса в интернете",label:"Посмотреть проекты",img:"statics/banners/b1.png"},{id:5,title:"Разработка <br> и продвижение <br> сайтов",desc:"Эффективные решения для бизнеса в интернете",label:"Посмотреть проекты",img:"statics/banners/b1.png"}],u={data:function(){return{slide:1}},render:function(e){var t=this;return e("QCarousel",{class:"carousel--customize",style:{backgroundColor:"#f2f5f7"},props:{value:this.slide,navigation:!0,height:"667px",animated:!0,transitionPrev:"slide-right",transitionNext:"slide-left",swipeable:!0},directives:[{name:"dynamic-height",value:10}],on:{input:function(e){return t.slide=e}}},d()(p.map(function(r){var n=r.id,i=r.title,a=r.desc,s=r.label,o=r.img;return e("QCarouselSlide",{class:"flex column items-center justify-center",style:{backgroundPosition:"right bottom",backgroundRepeat:"no-repeat",backgroundSize:t.$q.screen.lt.sm?"cover":"contain"},props:{name:n,imgSrc:o},directives:[{name:"dynamic-bg-offset-x",value:1264}]},[e("div",{class:"row wrap"},[e("div",{class:"col-xs-12 col-lg-5",style:{textAlign:t.$q.screen.xs?"center":"left"}},[e("div",{style:{fontSize:"50px",color:"#42515b"},domProps:{innerHTML:i.toUpperCase()},directives:[{name:"dynamic-font-size",value:10}]}),e("div",{class:"ubuntu-light-font q-mt-xl gt-xs",style:{color:"#42515b"}},a),e("QBtn",{class:"q-px-xl q-mt-xl",style:{letterSpacing:".1em",minHeight:t.$q.screen.gt.sm?"60px":"40px"},props:{color:"primary",rounded:!0,unelevated:!0,label:s},nativeOn:{mouseenter:function(e){e.target.classList.add("btn--hovered")},mouseleave:function(e){e.target.classList.remove("btn--hovered")}},directives:[{name:"dynamic-font-size"}]},[e("QIcon",{class:"q-ml-sm",props:{name:"arrow_right_alt",size:"20px"}})])])])])})))}},g=u,m=(r("6880"),r("2877")),b=Object(m["a"])(g,n,i,!1,null,"f122342a",null),f=b.exports,v=(r("a481"),[{size:4,title:'Сайт официального <br> дистрибьютора "Exxon <br> mobil"',tags:["Корпоративный сайт"],img:"statics/projects/p1.jpg",url:"/case1/project"},{size:8,title:'Бот-консультант <br> федерального <br> застройщика "Талан"',tags:["Чат-бот"],img:"statics/projects/p2.jpg",url:"/case1/project"},{size:8,title:'Сайт онлайн фитнес-клуба <br> "Teenweek"',tags:["Веб-приложение","Брендинг"],img:"statics/projects/p3.jpg",url:"/case1/project"},{size:4,title:'Дизайн и надежная <br> поддержка магазина <br> "Baseg"',tags:["Интернет-магазин"],img:"statics/projects/p4.jpg",url:"/case1/project"},{size:4,title:"Красивые решения для производства насосов ППД",tags:["Корпоративный сайт"],img:"statics/projects/p5.jpg",url:"/case1/project"},{size:4,title:'Сайт кабельной и электропродукции "Кайрос инжиниринг"',tags:["Корпоративный сайт"],img:"statics/projects/p6.jpg",styling:"dark",url:"/case1/project"},{size:4,title:'Ярко представили работы <br> для "Геоспецтехнология"',tags:["Корпоративный сайт"],img:"statics/projects/p7.jpg",url:"/case1/project"}]),x={render:function(e){return e("div",{class:"wrap",style:{paddingTop:"100px"}},[e("div",{class:"row q-col-gutter-lg"},[].concat(d()(v.map(function(t){var r=t.size,n=t.title,i=t.tags,a=t.img,s=t.url,o=t.styling,c=void 0===o?"light":o;return e("QCard",{class:"col-xs-12 col-sm-".concat(r),props:{square:!0,flat:!0}},[e("a",{attrs:{href:s}},[e("QImg",{props:{src:a,alt:n.replace(/(<br>)/g,"")},nativeOn:{mouseenter:function(e){"light"!==c?e.target.classList.add("img--hovered-light"):e.target.classList.add("img--hovered-dark")},mouseleave:function(e){"light"!==c?e.target.classList.remove("img--hovered-light"):e.target.classList.remove("img--hovered-dark")}}},[e("div",{class:"bg-transparent",style:{fontSize:"20px",color:"dark"===c?"#42515b":"white",padding:"35px 30px"},domProps:{innerHTML:n.toUpperCase()},directives:[{name:"dynamic-font-size",value:5},{name:"dynamic-padding",value:10}]}),e("div",{class:"bg-transparent absolute",style:{bottom:"6px",padding:"12px 26px"},directives:[{name:"dynamic-font-size",value:5},{name:"dynamic-padding",value:10}]},d()(i.map(function(t){return e("QChip",{style:{backgroundColor:"dark"===c?"rgba(255,255,255,.5)":"rgba(0,0,0,.2)",color:"dark"===c?"#42515b":"white",fontSize:"12px",paddingLeft:"20px",paddingRight:"20px"},directives:[{name:"dynamic-font-size"},{name:"dynamic-padding",value:10}]},t.toUpperCase())})))])])])})),[e("div",{class:"col-12 text-center"},[e("QBtn",{class:"q-px-xl q-mt-xl",style:{minHeight:this.$q.screen.gt.sm?"60px":"40px"},props:{color:"primary",rounded:!0,unelevated:!0,label:this.$t("btn.showMore")},nativeOn:{mouseenter:function(e){e.target.classList.add("btn--hovered")},mouseleave:function(e){e.target.classList.remove("btn--hovered")}},directives:[{name:"dynamic-font-size"}]},[e("QIcon",{class:"q-ml-sm",props:{name:"add",size:"20px"}})])])]))])}},y=x,h=Object(m["a"])(y,a,s,!1,null,null,null),j=h.exports,w={components:{MainCarousel:f,ProjectList:j},render:function(e){return e("QPage",[e("div",{style:{backgroundColor:"#f2f5f7",paddingTop:"28px"},directives:[{name:"dynamic-padding"}]}),e("MainCarousel"),e("ProjectList"),e("div",{style:{paddingTop:"175px"},directives:[{name:"dynamic-padding"}]})])}},z=w,k=Object(m["a"])(z,o,c,!1,null,null,null);t["default"]=k.exports},"1af6":function(e,t,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"20fd":function(e,t,r){"use strict";var n=r("d9f6"),i=r("aebd");e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},2642:function(e,t,r){},"3d02":function(e,t,r){var n=r("774e"),i=r("c8bb");function a(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}e.exports=a},"4db1":function(e,t,r){var n=r("7c64"),i=r("3d02"),a=r("d8f0");function s(e){return n(e)||i(e)||a()}e.exports=s},"549b":function(e,t,r){"use strict";var n=r("d864"),i=r("63b6"),a=r("241e"),s=r("b0dc"),o=r("3702"),c=r("b447"),l=r("20fd"),d=r("7cd6");i(i.S+i.F*!r("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,i,p,u=a(e),g="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,f=void 0!==b,v=0,x=d(u);if(f&&(b=n(b,m>2?arguments[2]:void 0,2)),void 0==x||g==Array&&o(x))for(t=c(u.length),r=new g(t);t>v;v++)l(r,v,f?b(u[v],v):u[v]);else for(p=x.call(u),r=new g;!(i=p.next()).done;v++)l(r,v,f?s(p,b,[i.value,v],!0):i.value);return r.length=v,r}})},"54a1":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("95d5")},6880:function(e,t,r){"use strict";var n=r("2642"),i=r.n(n);i.a},"774e":function(e,t,r){e.exports=r("d2d5")},"7c64":function(e,t,r){var n=r("a745");function i(e){if(n(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}e.exports=i},9003:function(e,t,r){var n=r("6b4c");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"95d5":function(e,t,r){var n=r("40c3"),i=r("5168")("iterator"),a=r("481b");e.exports=r("584a").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||a.hasOwnProperty(n(t))}},a745:function(e,t,r){e.exports=r("f410")},c8bb:function(e,t,r){e.exports=r("54a1")},d2d5:function(e,t,r){r("1654"),r("549b"),e.exports=r("584a").Array.from},d8f0:function(e,t){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}e.exports=r},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray}}]);