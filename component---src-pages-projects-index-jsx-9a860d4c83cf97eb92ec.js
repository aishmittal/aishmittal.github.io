(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"09Wf":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("CWQg"),r=Object(a.a)("success","processing","error","default","warning"),o=Object(a.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},"0n0R":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=a.isValidElement;function o(e,t){return function(e,t,n){return r(e)?a.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t}(e,e,t)}},"4i/N":function(e,t,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},o=n("6VBw"),i=function(e,t){return a.createElement(o.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="CloseOutlined";t.a=a.forwardRef(i)},G18J:function(e,t,n){"use strict";n.r(t);n("M7k7");var a=n("Ol7k"),r=(n("Jmwx"),n("BMrR")),o=(n("rO+z"),n("kPKH")),i=n("q1tI"),c=n.n(i),s=n("U4IR"),l=n("kuUC"),u=(n("SchZ"),n("u3En"),n("rePB")),m=n("wx14"),d=n("ODXe"),p=n("TSYQ"),f=n.n(p),g=n("bT9E"),h=n("4i/N"),b=n("H84U"),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=function(e){var t,n=e.prefixCls,a=e.className,r=e.checked,o=e.onChange,c=e.onClick,s=v(e,["prefixCls","className","checked","onChange","onClick"]),l=(0,i.useContext(b.b).getPrefixCls)("tag",n),d=f()(l,(t={},Object(u.a)(t,"".concat(l,"-checkable"),!0),Object(u.a)(t,"".concat(l,"-checkable-checked"),r),t),a);return i.createElement("span",Object(m.a)({},s,{className:d,onClick:function(e){null==o||o(!r),null==c||c(e)}}))},w=n("09Wf"),E=n("g0mS"),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=new RegExp("^(".concat(w.a.join("|"),")(-inverse)?$")),j=new RegExp("^(".concat(w.b.join("|"),")$")),O=function(e,t){var n,a=e.prefixCls,r=e.className,o=e.style,c=e.children,s=e.icon,l=e.color,p=e.onClose,v=e.closeIcon,y=e.closable,w=void 0!==y&&y,O=k(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),P=i.useContext(b.b),S=P.getPrefixCls,N=P.direction,x=i.useState(!0),T=Object(d.a)(x,2),I=T[0],M=T[1];i.useEffect((function(){"visible"in O&&M(O.visible)}),[O.visible]);var A=function(){return!!l&&(C.test(l)||j.test(l))},L=Object(m.a)({backgroundColor:l&&!A()?l:void 0},o),D=A(),R=S("tag",a),J=f()(R,(n={},Object(u.a)(n,"".concat(R,"-").concat(l),D),Object(u.a)(n,"".concat(R,"-has-color"),l&&!D),Object(u.a)(n,"".concat(R,"-hidden"),!I),Object(u.a)(n,"".concat(R,"-rtl"),"rtl"===N),n),r),W=function(e){e.stopPropagation(),null==p||p(e),e.defaultPrevented||"visible"in O||M(!1)},U="onClick"in O||c&&"a"===c.type,V=Object(g.a)(O,["visible"]),H=s||null,F=H?i.createElement(i.Fragment,null,H,i.createElement("span",null,c)):c,z=i.createElement("span",Object(m.a)({},V,{ref:t,className:J,style:L}),F,w?v?i.createElement("span",{className:"".concat(R,"-close-icon"),onClick:W},v):i.createElement(h.a,{className:"".concat(R,"-close-icon"),onClick:W}):null);return U?i.createElement(E.a,null,z):z},P=i.forwardRef(O);P.displayName="Tag",P.CheckableTag=y;var S=P,N=n("Wbzz"),x=n("W1IX"),T=n.n(x),I=function(e){var t=e.project;return c.a.createElement("div",{className:T.a.postCard},c.a.createElement(N.Link,{to:t.link,target:"_blank"},c.a.createElement("div",{className:T.a.postCardImg,style:{backgroundImage:"url("+(t.cover?t.cover:"")+")"}}),c.a.createElement("div",{className:T.a.mrTp20},c.a.createElement("h3",null,t?t.title:""),t.tags.map((function(e){return c.a.createElement(S,{color:"gold"},e)})),c.a.createElement("p",null,t?t.summary:""))))},M=n("JkAW"),A=n("bHiP"),L=n.n(A);t.default=function(){return c.a.createElement(a.a,{className:"outerPadding"},c.a.createElement(a.a,{className:"container"},c.a.createElement(M.a,{title:"Projects",description:"I like to learn different aspects of software engineering. I worked on various projects to enhance my learning experience. The major technologies that I have worked are Web Develpment, Image Processing, Computer Vision, Deep Lernng, Embedded Systems and Game Development.",path:"/Projects",keywords:["Aishwarya","Mittal","Adobe","FullStack developer","C++","Python","Computer Vision","Deep Learning","Javascript","ReactJS"]}),c.a.createElement(s.a,null),c.a.createElement(l.b,null,c.a.createElement("div",{className:"marginTopTitle"},c.a.createElement("h1",{className:"titleSeparate"},"Projects")),c.a.createElement(r.a,{gutter:[20,20]},L.a.map((function(e){return c.a.createElement(o.a,{xs:24,sm:24,md:12,lg:8},c.a.createElement(I,{project:e}))}))))))}},W1IX:function(e,t,n){e.exports={postCard:"projectCard-module--postCard--uPo68",postCardImg:"projectCard-module--postCardImg--2g-pf",mrTp20:"projectCard-module--mrTp20--3LAHF",dateHolder:"projectCard-module--dateHolder--J6O8p"}},bHiP:function(e,t){e.exports=[{title:"Smart Mirror",duration:"September 2016 - March 2017",link:"https://github.com/aishmittal/Smart-Mirror",tags:["Face Recognition","Speech Recognition","IoT","Python","PyQT"],cover:"smart-mirror.jpg",summary:"\n    Developed prototype of a 'Smart Mirror' with additional functions such as face recognition based login and speech\n    recognition for giving the commands. Displays the information about stocks prices, current weather, news headlines, \n    traffic using Web API's.\n    "},{title:"Hardware Designing and Verification of Three-Phase to Sequence Decomposer",duration:"July 2017 - March 2018",link:"https://youtu.be/gdb_RV8_JN8",tags:["Verilog","Embedded Systems","Signal Processing"],cover:"sequence-decomposer.jpg",summary:"\n    This project focuses on hardware implementation of Three-Phase to Sequence decomposer on a FPGA board using verilog \n    programming.\n    "},{title:"Smart Attendance Management System",duration:"January 2017 - April 2017",link:"https://github.com/aishmittal/SAMS",tags:["Face Recognition","Deep Learning","CNN","Python","Tensorflow"],cover:"smart-attendance-management-system-interface.png",summary:"\n    The aim of the project was to build an automatic attendance management system based on face recognition. \n    Face recognition is done using the CNN(Convolution Neural Network) model.\n    "},{title:"Product Info Crawler",duration:"October 2017",link:"https://github.com/aishmittal/Product-Info-Crawler",tags:["Scarpy","Web Crawler","Python"],cover:"web-crawlers.jpg",summary:"\n    Product-Info-Crawler is a python web crawler developed using scrapy framework. It has four spiders for \n    crawling the search results from olx.in, amazon.in, ebay.in and shopclues.com. It can be useful for comparing the price of \n    a particular product between different e-commerce websites.\n    "},{title:"Smart Online Lecture Attendance Management System",duration:"February 2017 - March 2017",link:"https://github.com/aishmittal/SOLAMS",tags:["Face Recognition","PyQt","Python","Cloudinary"],cover:"attendance-management.png",summary:"\n    SOLAMS is an Face Identification based automatic attendance management system which can be used by universities and educational \n    websites which offers online lecture to students but wants to keep track of their attendance.\n    "},{title:"Recipe Planner",duration:"October 2016 - November 2016",link:"https://github.com/aishmittal/recipe-planner",tags:["AngularJS","Web Development"],cover:"recpe-planner.jpg",summary:"\n    Recipe Planner is a recipe search application designed in AngulaJS using Yummly(food database) API’s. \n    It allows users to search for the specific recipes according to their requirements such as recipe name, \n    cooking time, ingredients, allergies, cuisines, holidays/season specific.\n    "},{title:"Ultimate Maze",duration:"January 2016 - February 2016",link:"https://github.com/aishmittal/UltimateMaze",tags:["Unity3D","C#","Game Development"],cover:"ultimate-maze.jpg",summary:"\n    Ultimate Maze is a game developed using UNITY 3D which involves solving a maze.It consists of 4 levels with increasing\n    difficulty. The scripts are written in C# which control the game objects.\n    "},{title:"Electronic Voting Machine",duration:"November 2015 - March 2016",link:"https://youtu.be/UcD-sVDMS1E",tags:["Verilog","Embedded Systems"],cover:"evm.jpg",summary:"\n    The project idea is to develop a simple processor-less circuit that can perform basic and some additional operations\n    compared to a general voting machine. The circuit for EVM is designed on FPGA board using verilog programming.\n    "},{title:"Desktop Customization in Linux Distributions",duration:"April 2017 - May 2017",link:"https://github.com/aishmittal/CSN-232-OS-Project",tags:["QML","Python"],cover:"news-widget.png",summary:"\n    Designed customized widgets for Kubuntu linux distribution using plasma framework in QML. \n    These widgets include news headlines, to-do list, application shortcuts and disk space monitor.\n    "},{title:"Man Following Cart",duration:"November 2014 - March 2015",link:"https://youtu.be/EQ0ZsPrUroU",tags:["MATLAB","Computer Vision","Robotics"],cover:"man-following-cart.jpg",summary:"\n    The main purpose of this project is to build a bot which follows a man or any other moving object closely using specificcolor\n    tags or infrared LEDs which will be useful as a shopping cart and in libraries. Color Detection program is written in MATLAB \n    which sends output to Arduino using serial communication.\n    "}]},g0mS:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a,r=n("1OyB"),o=n("vuIU"),i=n("JX7q"),c=n("Ji7U"),s=n("LK+K"),l=n("q1tI"),u=n("c+Xe"),m=n("oHiP"),d=n("H84U"),p=n("0n0R");function f(e){return!e||null===e.offsetParent||e.hidden}function g(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var h=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).containerRef=l.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){if(!(!t||f(t)||t.className.indexOf("-leave")>=0)){var r=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=Object(i.a)(e).extraNode,c=e.context.getPrefixCls;o.className="".concat(c(""),"-click-animating-node");var s=e.getAttributeName();t.setAttribute(s,"true"),a=a||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&g(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n&&(e.csp&&e.csp.nonce&&(a.nonce=e.csp.nonce),o.style.borderColor=n,a.innerHTML="\n      [".concat(c(""),"-click-animating-without-extra-node='true']::after, .").concat(c(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),t.ownerDocument.body.contains(a)||t.ownerDocument.body.appendChild(a)),r&&t.appendChild(o),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!f(n.target)){e.resetEffect(t);var a=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,a)}),0),m.a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(m.a)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,a=e.props.children;if(e.csp=n,!l.isValidElement(a))return a;var r=e.containerRef;return Object(u.c)(a)&&(r=Object(u.a)(a.ref,e.containerRef)),Object(p.a)(a,{ref:r})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),a&&(a.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return l.createElement(d.a,null,this.renderWave)}}]),n}(l.Component);h.contextType=d.b},oHiP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("wgJM"),r=0,o={};function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=r++,i=t;function c(){(i-=1)<=0?(e(),delete o[n]):o[n]=Object(a.a)(c)}return o[n]=Object(a.a)(c),n}i.cancel=function(e){void 0!==e&&(a.a.cancel(o[e]),delete o[e])},i.ids=o},u3En:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-projects-index-jsx-9a860d4c83cf97eb92ec.js.map