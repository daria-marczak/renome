(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),c=n(215),s=n(212),l=n(207),m=n(214),p=n.n(m),d=n(208),u=n(100),g=n(251),f=n.n(g),h=n(261),y=n.n(h),b=n(262),A=n(263),w=n(264),k=l.c.header.withConfig({displayName:"sc-404__StyledHeader",componentId:"sc-1k0krx7-0"})(["min-height:100vh;background-size:cover;font-size:",";color:#fff;letter-spacing:0.04em;font-weight:700;font-family:",";"],function(e){return e.theme.font.size.header},function(e){return e.theme.font.family.montserrat}),M=l.c.h1.withConfig({displayName:"sc-404__StyledHeading",componentId:"sc-1k0krx7-1"})(["text-align:center;font-size:",";"],function(e){return e.theme.font.size.header}),x=l.c.div.withConfig({displayName:"sc-404__StyledContainer",componentId:"sc-1k0krx7-2"})(["display:flex;width:100%;@media (min-width:1200px){width:80%;margin:0 auto;display:flex;align-items:center;}"]),E=l.c.nav.withConfig({displayName:"sc-404__StyledBar",componentId:"sc-1k0krx7-3"})(["background-color:white;height:86px;position:fixed;top:0;width:100%;z-index:11;padding:2em 0.85em;font-weight:700;display:flex;align-items:center;font-size:",";"],function(e){return e.theme.font.size.paragraph}),I=l.c.nav.withConfig({displayName:"sc-404__StyledNavigation",componentId:"sc-1k0krx7-4"})(["margin-left:auto;display:flex;font-family:",";align-items:center;"],function(e){return e.theme.font.family.montserrat}),v=l.c.div.withConfig({displayName:"sc-404__StyledParagraph",componentId:"sc-1k0krx7-5"})(["position:absolute;bottom:1.5em;margin-left:0.5em;text-shadow:1px 1px 2px gray;text-align:center;top:50%;@media (min-width:1200px){flex:1;left:32%;}"]),O=l.c.span.withConfig({displayName:"sc-404__StyledText",componentId:"sc-1k0krx7-6"})(["color:",";text-shadow:1px 1px 1px #fff;"],function(e){return e.theme.primary}),G=l.c.img.withConfig({displayName:"sc-404__StyledImage",componentId:"sc-1k0krx7-7"})(["width:auto;height:fit-content;"]),j=Object(l.c)(p.a).withConfig({displayName:"sc-404__StyledHero",componentId:"sc-1k0krx7-8"})(["position:absolute;top:0;left:0;width:100%;z-index:-1;height:100vh;& > img{object-fit:cover !important;object-position:0% 0% !important;}"]),D=Object(l.c)(d.a).withConfig({displayName:"sc-404__StyledLink",componentId:"sc-1k0krx7-9"})(["text-decoration:none;color:",";"],function(e){return e.theme.black}),N=l.c.div.withConfig({displayName:"sc-404__StyledFilter",componentId:"sc-1k0krx7-10"})(["background-color:#162642;opacity:0.6;width:100%;height:100%;position:absolute;bottom:0;"]),R=function(e){var t=e.cartItems,n=e.photo,r=e.title,o=e.section,c=Object(a.useState)(!1),s=c[0],l=c[1],m=t.reduce(function(e,t){return e+t.quantity},0);return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,null,i.a.createElement(x,null,i.a.createElement(d.a,{to:"/"},i.a.createElement(G,{src:f.a,alt:"Renome logo"})),i.a.createElement(I,null,i.a.createElement(w.a,null),i.a.createElement(D,{to:"/cart"},i.a.createElement(G,{src:y.a,alt:"cart"})," | ",m),i.a.createElement(b.a,{onClick:function(){l(!s)},isOpen:s})))),i.a.createElement(k,null,i.a.createElement(A.a,{isOpen:s}),i.a.createElement(j,{fluid:n.childImageSharp.fluid,role:"presentation"}),i.a.createElement(N,null),i.a.createElement(v,null,i.a.createElement(M,null,o),i.a.createElement(O,null,r))))};R.propTypes={photo:o.a.shape().isRequired,cartItems:o.a.arrayOf(o.a.shape()),title:o.a.string,section:o.a.string},R.defaultProps={cartItems:[],title:"",section:""};var Z=Object(u.b)(function(e){return{cartItems:e.cart.cartItems}})(R);n.d(t,"query",function(){return z});var C=function(e){var t=e.data;return i.a.createElement(c.a,null,i.a.createElement(s.a,{title:"About",keywords:["renome","restaurant"]}),i.a.createElement(Z,{photo:t.invalidPage,section:"404",title:"page was not found"}))},z="2231924267";C.propTypes={data:o.a.shape().isRequired};t.default=C},208:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var a=n(0),i=n.n(a),r=n(6),o=n.n(r),c=n(74),s=n.n(c);n.d(t,"a",function(){return s.a});n(245);var l=i.a.createContext({});function m(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,o=n?n.data:t[a]&&t[a].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(m,{data:t,query:n,render:a||r,staticQueryData:e})})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},212:function(e,t,n){"use strict";var a=n(259),i=n(0),r=n.n(i),o=n(6),c=n.n(o),s=n(283),l=n.n(s);function m(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,c=e.title,s=a.data.site,m=t||s.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Montserrat:700,500|Playfair+Display:700&display=swap",rel:"stylesheet"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},215:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(100),o=n(25),c=n(6),s=n.n(c),l=n(207),m=n(212),p=n(224),d=n(221),u=n(222),g=n(12),f=function(e){var t=e.children,n=e.message,a=e.kind,r=e.closeMessage,o=e.isSnackBarActive;return i.a.createElement(l.a,{theme:u.a},i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:"Home",keywords:["renome","restaurant","food"]}),i.a.createElement(d.a,null),i.a.createElement("main",null,t),o&&i.a.createElement(p.a,{message:n,isActive:o,type:a,closeMessage:r})))};f.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,message:s.a.string,kind:s.a.string,closeMessage:s.a.func,isSnackBarActive:s.a.bool};t.a=Object(r.b)(function(e){return{kind:e.appData.message.kind,isSnackBarActive:e.appData.isSnackBarActive,message:e.appData.message.content}},function(e){return Object(o.b)({closeMessage:g.b},e)})(f)},221:function(e,t,n){"use strict";var a=n(207);function i(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    *, *::before, *::after {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n    body {\n        margin: 0;\n        padding: 0;\n        font-size: 16px;\n        font-family: Lato, sans-serif;\n    }\n\n    main {\n      overflow: hidden;\n    }\n\n    .gatsby-image-wrapper {\n        margin-left: 0 !important;\n        margin-right: 0 !important;\n    }\n\n    p {\n      line-height: 2em;\n      margin-left: 5px;\n      font-family: 'Montserrat', sans-serif;\n    }\n\n    h2 {\n      text-transform: uppercase;\n      margin-left: 5px;\n    }\n\n    blockquote {\n      border-left: 6px solid #edeff2;\n      font-weight: 600;\n    }\n"]);return i=function(){return e},e}var r=Object(a.b)(i());t.a=r},222:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={primary:"#985e5b",black:"#000",white:"#fff",lightGray:"#dadada",gray:"#545459",font:{family:{lato:"Lato, sans-serif",montserrat:"Montserrat, sans-serif",playfair:"Playfair Display, serif"},size:{header:"38px",paragraph:"14px",jumbotron:"22px",paragraphDescription:"11px",carouselDescription:"16px"}}}},224:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(207),o=n(6),c=n.n(o),s=r.c.div.withConfig({displayName:"Snackbar__StyledWrapper",componentId:"v6kgvk-0"})(["position:sticky;display:flex;bottom:0;left:0;right:0;width:80%;margin:0 auto;padding:15px 20px;border-top-left-radius:4px;justify-content:space-between;border-top-right-radius:4px;background-color:",";color:",";"],function(e){var t=e.theme;return"error"===e.type?t.black:t.primary},function(e){return e.theme.white}),l=r.c.div.withConfig({displayName:"Snackbar__StyledClose",componentId:"v6kgvk-1"})(["height:20px;width:20px;background-color:transparent;position:relative;cursor:pointer;&:before,&:after{position:absolute;content:'';width:100%;bottom:10px;height:2px;background-color:#fff;}&:before{transform:rotate(45deg);}&:after{transform:rotate(-45deg);}"]),m=function(e){var t=e.message,n=e.type,a=e.isActive,r=e.closeMessage;return i.a.createElement(s,{type:n,isOpen:a,role:"alert","aria-live":"assertive"},t,i.a.createElement(l,{onClick:r}))};m.propTypes={message:c.a.string,isActive:c.a.bool,type:c.a.string,closeMessage:c.a.func},t.a=m},245:function(e,t,n){var a;e.exports=(a=n(260))&&a.default||a},251:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAXCAYAAACChfjKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExODA4M0VCODNDNjJCRDdDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOURBNzc5RDU3NjMxMUU4OTAwMkZDODg4Q0I2MTNERSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOURBNzc5QzU3NjMxMUU4OTAwMkZDODg4Q0I2MTNERSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNWI2MjIxZi03MzMyLWViNDktOWY2My03ZGVmYjljNTdkMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODNFQjgzQzYyQkQ3QzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71jc9vAAADBUlEQVR42uxZ7W3dMAw0uoFX0ApaQR3BHcEraAV3BGUEraCOoI7gjKCM4DqADbBXkqJf+lMEBOTJ1teJPB6dabLbcrZ4tv1sB7Ttej7sP9on2I0Bm2v1bH5A9jXzF5AU1M9LcPBeOFsm77UB/usWAEgLjWxkTBkQfg30nfFwyWagnXlAaTdH+Lw9AP02mnjdgNNulNMXJsl+9ieDx7cBpd1WhaNnA39H8k4acL5GE0Hh/dQBvQ2aeS2hVkGp3C2SKIhATz0pGeD9JCTh+XIEeomB5J+eXMV9HYIUvi2RQhD7FoaKwwOFt2uqcIMqVANeaqmjZBZhXOlEULjmpUVcVvJM6ewzMmMaRDNHm5syh5QnD4VFTEm1CoDFzia4w9XrN80paBk2HGHt3PFcCk4mYwpDlwGczsElb1eEHQbg6T5XoHB2TE9/Z3i+EBAtfE435OHAreMIjvlkEQUpTMObVuB0nQRzRJg3wVoLE0Vrx7moYxRpz84gAwvzvJJD9oqlnQEkKcm6wSEx2nzncqNwPg9reyZKOGqy0MbKXIzT6hrJUzjgisD/sfPN51A41CnSdSeXnh9EpRfOF+DiHURXIZF8Oxp1MOv6DuZO04MQ5TxwE5JlNdYHFcJ2ZUD3jIft5LL2TlQeimILHZq9wY5KXzPI8Q3OPMMZp29ne8dOBoy7/4P0/wKvtnyb8eTwP872BsAVIWf8JH+/CzTzoax522/G6dDehPU5DCbhMiPB6DsZE/CjY1XCyCvcqqkhLjJuz5lh/qpwagFeLgBcZajIM5FQOvULpYnM9CUm4gKJgAqqa+kUmf/wtTSgPdD/96Yyo8EXAlpiElkUEtkG+4iM0kC5uXZoZmFqEQ5EevFNkMNRoN4VaOgvJeiUgiYrCSIw+QEBXZXiia7pmQMUwWMOwbuysWiSotEpn0+k9TdD8aTug/PeXmKaHlSKgXk3MvPeuh0/P8wEkMpQFneOOun/xKFzrswcCfa1A2W6jqylhaZqxXCrljLdWtEOgxtrRo0+7EX7I8AA+sRfVyXQ7R0AAAAASUVORK5CYII="},259:function(e){e.exports={data:{site:{siteMetadata:{title:"Renome",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@dariamarczak"}}}}},260:function(e,t,n){"use strict";n.r(t);n(14);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),c=n(113),s=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},261:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExODA4M0VCODNDNjJCRDdDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNEQ4QjNDQjU3NjMxMUU4OENBOUZENjUyQ0UyMTgzRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNEQ4QjNDQTU3NjMxMUU4OENBOUZENjUyQ0UyMTgzRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNWI2MjIxZi03MzMyLWViNDktOWY2My03ZGVmYjljNTdkMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODNFQjgzQzYyQkQ3QzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HJJZVAAAAx0lEQVR42mJgYGC4D8T/oTj3////DMRiRqAGLiBmB+ISIC4G4m8MxIHHcFOAwBnJBcRhJM08QPyHFM1MMDcADfgCpC4xkACY0PjHSNHMgkVzNg61v4H4GRA/AQcW0JUsOGyeDsQ3gPgRVANI8Yv/0MDBZbMYlD4ExG+gbD4g1gZhRkZGmLpnQHOuoWtWBuJ3QFwBDXlsQB6ItwJxAkqKAYIkaDTMxZaigMAfiP8B8UYQHz20XwDxZyB+iMPW10D8CZqkGQACDABgWo8oECwA8QAAAABJRU5ErkJggg=="},262:function(e,t,n){"use strict";n(22),n(18),n(7),n(35);var a=n(0),i=n.n(a),r=n(207),o=n(6),c=n.n(o);var s=r.c.button.withConfig({displayName:"Hamburger__StyledHamburger",componentId:"sc-11xccgb-0"})(["height:1.5em;background:none;border:none;right:-0.5em;position:relative;top:0.25em;cursor:pointer;@media (min-width:1200px){display:none;}"]),l=r.c.div.withConfig({displayName:"Hamburger__InsideBurger",componentId:"sc-11xccgb-1"})(["background-color:",";width:1.5em;height:0.2em;transition:background-color 0.3s 0.1s ease-in;&::before,&::after{content:'';position:absolute;right:0.4em;width:1.5em;height:0.2em;background-color:",";transition:transform 0.3s 0.1s ease-in;}&::before{top:0.15em;transform:translateY(",") rotate(",");}&::after{top:1.2em;transform:translateY(",") rotate(",");}"],function(e){var t=e.theme;return e.isOpen?"transparent":t.black},function(e){return e.theme.black},function(e){return e.isOpen?".55em":"0"},function(e){return e.isOpen?"45deg":"0"},function(e){return e.isOpen?"-.55em":"0"},function(e){return e.isOpen?"-45deg":"0"}),m=function(e){var t=e.isOpen,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["isOpen"]);return i.a.createElement(s,n,i.a.createElement(l,{isOpen:t}))};m.propTypes={isOpen:c.a.bool},m.defaultProps={isOpen:!1},t.a=m},263:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(207),o=n(208),c=n(6),s=n.n(c),l=r.c.ul.withConfig({displayName:"MobileMenu__StyledList",componentId:"sc-171cht3-0"})(["width:100%;height:100vh;z-index:1;position:fixed;flex-direction:column;margin-top:0;display:flex;justify-content:center;background-color:",";transition:transform 0.3s ease-in;transform:translateX(",");@media (min-width:1200px){display:none;}"],function(e){return e.theme.white},function(e){return e.isOpen?"0%":"-100%"}),m=Object(r.c)(o.a).withConfig({displayName:"MobileMenu__StyledLink",componentId:"sc-171cht3-1"})(["text-decoration:none;cursor:pointer;color:",";"],function(e){return e.theme.black}),p=["home","about","menu","reservations","blog","shop","contact"],d=function(e){return"home"===e?"/":"/"+e},u=function(e){var t=e.isOpen;return i.a.createElement(l,{isOpen:t},p.map(function(e){return i.a.createElement(m,{to:""+d(e),key:e},e)}))};u.propTypes={isOpen:s.a.bool},u.defaultProps={isOpen:!1},t.a=u},264:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(207),o=n(208),c=Object(r.c)(o.a).withConfig({displayName:"Navigation__StyledLink",componentId:"sc-556ma-0"})(["text-decoration:none;cursor:pointer;color:",";text-transform:uppercase;margin-left:30px;transition:color 0.15s ease-in;&:hover{color:",";}"],function(e){return e.theme.black},function(e){return e.theme.primary}),s=r.c.ul.withConfig({displayName:"Navigation__StyledList",componentId:"sc-556ma-1"})(["display:none;margin-right:30px;height:100%;@media (min-width:1200px){display:flex;}"]),l=["home","about","menu","reservations","blog","shop","contact"],m=function(e){return"home"===e?"/":"/"+e};t.a=function(){return i.a.createElement(s,null,l.map(function(e){return i.a.createElement(c,{to:""+m(e),key:e,role:"listitem"},e)}))}}}]);
//# sourceMappingURL=component---src-pages-404-js-db37e1b450645fccddc8.js.map