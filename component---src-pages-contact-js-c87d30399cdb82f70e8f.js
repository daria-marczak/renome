(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(e,c,l){"use strict";l.r(c);var t=l(0),a=l.n(t),n=l(6),i=l.n(n),r=l(215),o=l(212),s=l(226),m=(l(14),l(267)),h=l(207),d=l(208),p=l(225),f=l(211),v=Object(h.c)(f.b).withConfig({displayName:"ContactSection__GoalsColumn",componentId:"oiial2-0"})(["@media (min-width:1200px){justify-self:end;}"]),u=Object(h.c)(f.b).withConfig({displayName:"ContactSection__StyledSwitched",componentId:"oiial2-1"})(["@media (min-width:1500px){transform:translateX(-200px);}@media (min-width:1200px){transform:translateX(-200px);}"]),b=function(e){var c=e.data.allFile.edges,l=c[0],t=c[1];return a.a.createElement(f.h,{title:"goals",align:!0},a.a.createElement(f.k,null,a.a.createElement(u,{right:!0},a.a.createElement(p.a,{firstPhoto:l.node,secondPhoto:t.node})),a.a.createElement(v,{isDescription:!0,left:!0},a.a.createElement(f.e,null,"happy"),a.a.createElement(f.d,null,"to hear from you, contact s"),a.a.createElement(f.g,null,"Please feel free to contact us with any questions or to make reservations. If no one is available to take your call, please leave a message. We will contact you as soon as possible."))))};b.propTypes={data:i.a.objectOf(i.a.shape({allFile:i.a.objectOf(i.a.shape({edges:i.a.array}))})).isRequired};var g=function(e){return a.a.createElement(d.b,{query:"2069036367",render:function(c){return a.a.createElement(b,Object.assign({data:c},e))},data:m})},w=Object(h.c)(f.k).withConfig({displayName:"ContactDetails__StyledContactWrapper",componentId:"hmjxht-0"})(["@media (min-width:768px){grid-template-columns:1fr;order:2;}"]),y=h.c.h2.withConfig({displayName:"ContactDetails__StyledHeading",componentId:"hmjxht-1"})(["color:",";text-transform:uppercase;"],function(e){return e.theme.black}),x=Object(h.c)(f.g).withConfig({displayName:"ContactDetails__StyledText",componentId:"hmjxht-2"})(["margin-top:0;text-transform:uppercase;"]),E=Object(h.c)(f.d).withConfig({displayName:"ContactDetails__StyledTitle",componentId:"hmjxht-3"})(["text-transform:uppercase;"]),C=function(){return a.a.createElement(w,null,a.a.createElement(y,null,"Contact details"),a.a.createElement(E,null,"Address"),a.a.createElement(x,null,"355 E 5TH, st. Manhattan, NY 100003"),a.a.createElement(E,null,"Phone"),a.a.createElement(x,null,"+ 1 939 777 55 33"),a.a.createElement(E,null,"Email"),a.a.createElement(x,null,"reservation@renome.com"))},S=(l(23),l(100)),_=l(25),j=l(30),I=function(e){return{type:j.a.INVOKE,message:e}},N=l(223);var k=h.c.h3.withConfig({displayName:"ContactForm__StyledHeading",componentId:"sc-1yirzju-0"})(["font-weight:700;text-transform:uppercase;font-size:20px;text-align:center;"]),O=Object(h.c)(f.k).withConfig({displayName:"ContactForm__StyledContactWrapper",componentId:"sc-1yirzju-1"})(["@media (min-width:768px){grid-template-columns:1fr;width:100%;}"]),F=h.c.form.withConfig({displayName:"ContactForm__StyledForm",componentId:"sc-1yirzju-2"})(["font-family:",";@media (min-width:1200px){display:flex;flex-direction:column;}"],function(e){return e.theme.font.family.montserrat}),M=h.c.div.withConfig({displayName:"ContactForm__StyledFormWrapper",componentId:"sc-1yirzju-3"})(["display:flex;flex-direction:column;flex:1;@media (min-width:768px){flex-direction:row;justify-content:center;}"]),q=h.c.input.withConfig({displayName:"ContactForm__StyledInput",componentId:"sc-1yirzju-4"})(["border:none;font-family:",";padding:15px 10px;border-bottom:3px solid ",";margin-bottom:30px;"],function(e){return e.theme.font.family.montserrat},function(e){return e.theme.lightGray}),V=h.c.label.withConfig({displayName:"ContactForm__StyledLabel",componentId:"sc-1yirzju-5"})(["display:flex;flex-direction:column;@media (min-width:1200px){width:100%;margin-left:10px;&:first-of-type{margin-left:0;}}"]),z=function(e){var c,l;function t(c){var l;return(l=e.call(this,c)||this).handleSubmit=function(e){e.preventDefault(),l.props.sendMessage(l.state)},l.handleChange=function(e){var c;l.setState(((c={})[e.target.name]=e.target.value,c))},l.state={firstName:"",lastName:"",email:"",subject:"",message:""},l}return l=e,(c=t).prototype=Object.create(l.prototype),c.prototype.constructor=c,c.__proto__=l,t.prototype.render=function(){var e=this;return a.a.createElement(O,null,a.a.createElement(k,null,"write a message"),a.a.createElement(F,{onSubmit:this.handleSubmit},a.a.createElement(M,null,a.a.createElement(V,null,"First name",a.a.createElement(q,{type:"text",name:"firstName",value:this.state.firstName,onChange:function(c){return e.handleChange(c)},required:!0})),a.a.createElement(V,null,"Last name",a.a.createElement(q,{type:"text",name:"lastName",value:this.state.lastName,onChange:function(c){return e.handleChange(c)},required:!0}))),a.a.createElement(M,null,a.a.createElement(V,null,"Email",a.a.createElement(q,{type:"email",name:"email",value:this.state.email,onChange:function(c){return e.handleChange(c)},required:!0})),a.a.createElement(V,null,"Subject",a.a.createElement(q,{type:"text",name:"subject",value:this.state.subject,onChange:function(c){return e.handleChange(c)},required:!0}))),a.a.createElement(V,null,"Message",a.a.createElement(q,{type:"text",name:"message",value:this.state.message,onChange:function(c){return e.handleChange(c)},required:!0,fullWidth:!0})),a.a.createElement(f.a,{type:"submit",disabled:this.props.isFetching},this.props.isFetching&&a.a.createElement(N.a,null),!this.props.isFetching&&"Send")))},t}(t.Component);z.propTypes={sendMessage:i.a.func,isFetching:i.a.bool};var W=Object(S.b)(function(e){return{isFetching:e.contact.fetching.fetchingMessage}},function(e){return Object(_.b)({sendMessage:I},e)})(z),P=Object(h.c)(f.k).withConfig({displayName:"ContactInfo__StyledContactWrapper",componentId:"sc-1mljmmr-0"})(["@media (min-width:768px){grid-template-columns:2fr 1fr;}"]),T=function(){return a.a.createElement(P,null,a.a.createElement(C,null),a.a.createElement(W,null))},D=l(227),H=l(214),R=l.n(H),A=Object(h.c)(R.a).withConfig({displayName:"BackgroundImage__StyledHero",componentId:"sc-6ahdx2-0"})(["position:absolute;top:0;left:0;width:100%;z-index:-1;height:60vh;& > img{object-fit:cover !important;object-position:0% 0% !important;}"]),B=function(e){var c=e.photo;return a.a.createElement(A,{fluid:c.childImageSharp.fluid,role:"presentation"})};B.propTypes={photo:i.a.shape().isRequired};var G=B;l.d(c,"query",function(){return X});var L=function(e){var c=e.data;return a.a.createElement(r.a,null,a.a.createElement(o.a,{title:"Contact",keywords:["renome","restaurant"]}),a.a.createElement(s.a,{photo:c.contactHeader,section:"contact",title:"we welcome you in our restaurant"}),a.a.createElement(g,null),a.a.createElement(T,null),a.a.createElement(G,{photo:c.map}),a.a.createElement(D.a,null))},X="1196752802";L.propTypes={data:i.a.shape().isRequired};c.default=L},215:function(e,c,l){"use strict";var t=l(0),a=l.n(t),n=l(100),i=l(25),r=l(6),o=l.n(r),s=l(207),m=l(212),h=l(224),d=l(221),p=l(222),f=l(12),v=function(e){var c=e.children,l=e.message,t=e.kind,n=e.closeMessage,i=e.isSnackBarActive;return a.a.createElement(s.a,{theme:p.a},a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{title:"Home",keywords:["renome","restaurant","food"]}),a.a.createElement(d.a,null),a.a.createElement("main",null,c),i&&a.a.createElement(h.a,{message:l,isActive:i,type:t,closeMessage:n})))};v.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,message:o.a.string,kind:o.a.string,closeMessage:o.a.func,isSnackBarActive:o.a.bool};c.a=Object(n.b)(function(e){return{kind:e.appData.message.kind,isSnackBarActive:e.appData.isSnackBarActive,message:e.appData.message.content}},function(e){return Object(i.b)({closeMessage:f.b},e)})(v)},223:function(e,c,l){"use strict";var t=l(0),a=l.n(t),n=l(207).c.div.withConfig({displayName:"Loader__StyledLoader",componentId:"rb4yfg-0"})(["position:absolute;height:50px;width:inherit;&:before{animation:rotate 0.9s linear infinite both;border:3px solid ",";border-bottom-color:",";border-radius:100%;content:'';height:20px;top:-20%;width:20px;left:43%;position:absolute;will-change:transform;transform-origin:center;}@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"],function(e){return e.theme.white},function(e){return e.theme.primary});c.a=function(){return a.a.createElement(n,{role:"alert","aria-live":"assertive","aria-label":"Content is loading"})}},225:function(e,c,l){"use strict";l(23);var t=l(0),a=l.n(t),n=l(207),i=l(6),r=l.n(i),o=l(214),s=l.n(o),m=n.c.div.withConfig({displayName:"PhotoComponent__StyledWrapper",componentId:"sc-6lmdqw-0"})(["position:relative;z-index:0;@media (min-width:1200px){max-width:450px;transform:translateX(",");}"],function(e){return e.left?"100px":"250px"}),h=Object(n.c)(s.a).withConfig({displayName:"PhotoComponent__StyledImageFirst",componentId:"sc-6lmdqw-1"})(["max-width:272px;margin-right:10px;position:'absolute' !important;transform:translateX(",") translateY(",");z-index:",";@media (min-width:1200px){max-width:450px;}"],function(e){e.switched;return"20%"},function(e){return e.switched?"70%":"0"},function(e){return e.flipped?"1":"0"}),d=Object(n.c)(s.a).withConfig({displayName:"PhotoComponent__StyledImageSecond",componentId:"sc-6lmdqw-2"})(["max-width:272px;position:relative !important;transform:translateY(",");@media (min-width:1200px){max-width:450px;}"],function(e){return e.switched?"-100%":"-30%"}),p=function(e){var c=e.firstPhoto,l=e.secondPhoto,t=e.flipped,n=e.switched,i=e.left;return a.a.createElement(m,{left:i},a.a.createElement(h,{fluid:c.childImageSharp.fluid,flipped:t,switched:n,alt:c.name}),a.a.createElement(d,{fluid:l.childImageSharp.fluid,switched:n,alt:l.name}))};p.propTypes={firstPhoto:r.a.shape().isRequired,secondPhoto:r.a.shape().isRequired,flipped:r.a.bool,switched:r.a.bool,left:r.a.bool},p.defaultProps={flipped:!1,switched:!1},c.a=p},267:function(e){e.exports={data:{allFile:{edges:[{node:{id:"78ac9b2b-6044-55c8-a0e4-0ff6f2f4cfb4",name:"bibimbap",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='267'%3e%3cpath%20d='M0%2066a915%20915%200%200%200%201%2094l-1%2054v53h401v-62l-1-62-3%201c-3%202-4%201%200-3l3-2c1%201%201-30%201-69V0h-63v3c3%2014%203%2015%202%2025-1%206-2%2011-1%2012l-1%202-1%202c2%203-4%2018-8%2023l-7%2010a72%2072%200%200%201-42%2031c-24%208-54%205-74-7a156%20156%200%200%201-26-21l4%206c3%202%205%205%205%206l2%202%205%205%207%204%206%203c11%206%2027%2010%2043%2010%207%200%209%201%208%202%200%202-23%201-33-1-13-3-25-9-29-14l-2-2-12-10-17-21c-5-9-3-3%203%207l5%2011-3-3c-7-12-9-13-4-2%205%2010%2010%2018%2017%2025%208%209%205%207-5-2a84%2084%200%200%201-27-55%20231%20231%200%200%201%203-48l1-3h-31v8c1%2037-37%2060-70%2043-16-8-26-27-24-45V0H0v66M165%204c-3%209-1%2040%202%2038%203-1%203-7%201-11-3-5-2-6%201-2%204%204%204%204%201%2011-2%205-2%206-1%2010%202%206%205%2010%206%2010%203%200%208-2%206-3v-1l1-6-1-4c-2%201-3%200-1-1h-1v-2h-1l-1-1%201-1v-2l-1-1v-1h1l1-1%201-2c-1-1%200-1%201-2l2-2v-1l1-1%201-3v-5l1-2%201-2v-1l1-2c1%200%202-2%201-3l1-1V8l2-2%204-3%203-2-3%201-2-1-14-1h-14l-1%204m92%200c-2%205-6%206-15%206-7%200-9%201-8%203l1%202%202%201c1%202%201%202%205-1%205-4%2013-5%2021-2l5%202%201-2v-1c-2%201-3%200-1-1h-1l-1-1%201-1V3c-1-2-2-3-5-3s-4%200-5%204m66%201l3%207c-1%201%200%204%201%206l2%205v4c2%203%202%205%201%2010-1%207-2%2010-10%2019-7%208-7%209%202%201l6-5%206-19c0-7-1-23-3-28-1-4-2-5-6-5h-5l3%205M105%2018l-3%202-1%201%202%201h1l-2%203-2%201-2%202c-2%201-2%201-1%202%202%200%202%201%201%203-2%201-2%201-2-1l-1-2-1%202v6l1%204%204-4c3-3%204-5%202-5l1-3%203-4%201-1c2%200%203-5%202-7h-3m218%209v4c-1%201-2%202-2%205%200%204%200%205-3%207l-4%205-2%203c-3%201-4%203-2%204v2h-5c-1%202-1%202%203%202%206-1%2016-9%2018-17%201-4%201-5-2-2-1%201-1%201-1-2%200-2%201-3%202-3%202%200%202-7-1-9-2-3-3-2-1%201m-41%2022c-1%202-10%204-14%203-3-1-4-1-6%202-2%202-2%202-3%200l-6-1c-7%200-8%200-4%202l2%201-1%201%203-1c2-1%203%200%201%201h1l2%202c0%203%201%203%206-1%204-3%205-3%2012-3%207%201%208%200%208-1l1-4c0-2-1-3-2-1m-51%206l-1%205-1%204-1%204-2%201-1%202c0%201-3%204-7%206-6%204-7%204-13%205h-7l-4-4-6-7c-1-3-2-4-4-1-4%204%206%2015%2016%2019l8%203%204%202h2l1%201%201-1v-1h2v-1c1%202%202%201%201%200l1-2%201-1c0-4%200-6%201-4h1v-2l1-2h2v-2l1-1c-1-1%200-2%201-3l2-2v-3c0-2%200-2%201-1l1-2v-1c0%202%202%201%201%200l1-2v-1l1-2v-1h-2l1-1v-2l-1-3v-2l-2%203m75%2013l-6%201c-3-1-3-1-3%204l-1%206-2%203c0%202-9%2012-11%2012l-2%202-1%201%207-1c8-2%2010-3%209-7l1-3%201-2v-1h1c0-5%200-7%206-12%205-5%206-6%201-3M64%2078v2c0%201%209%207%2024%2015%202%200%203%202%204%203s3%202%203%200c-2-2%201-1%203%202l12%208%204%201%207%203%203%202h3v4h-1c0%201-8%201-20-1l-8%201c-2%201-3%202-4%201l-9-3%201%202%203%201-3-1h-5c-2%200-2%200-1-1s1-1-1-1h-6l-2%201c-4%201-11%208-11%2011l4%202c3%201%207%205%207%206h-2l-6-1h-8c-6-1-8%200-11%206-2%204-2%204%200%205%201%201%203%202%205%201%202%200%208%202%208%204h-2c-3-2-12%201-14%204l-2%203-1%201v2c-2%202%201%205%203%204%202%200%202%200%202%202-1%203%203%207%205%206l2%201h2l3%202c1%202%200%203-2%201-1-1-2%200-1%202l-2%201c-3%200-5%203-2%203%201%200%201%201-1%201-6%201-6%204-2%208l2%203v6l-1-1-1-2c-3%200-2%203%200%203%201%200%201%201-1%203-3%202-3%203%201%201h3l-1%202v2c1%202%206%200%207-3%202-4%204-4%204-1-1%202%200%203%202%200l3-1h1c0-1-3-3-5-3s0-6%202-7c2%200%202-1%200-2s-2-1-3%201h-2l-1-3c0-1%201-1%201%201%201%201%201%201%202-1l3-6c4-4%206-11%205-13v-1c1%200%2010%209%2011%2012%201%202%201%202-1%203l-2%202c0%202-3%204-5%204h-2l1%201%201%202-1%201-2%201%201%201v3l1%203%201-2c0-2%203-6%203-4s2%203%202%201c1-2%203%201%204%205%200%203%200%203-2%202l-4-2c-3%200-3%200-1%201%202%200%202%201%200%203l-2%201-1%201%201%202c0%201%206-2%207-4l2%203c1%205%200%205-4%208-2%201-2%203-1%205l2%207c1%206%202%208%204%207l-2-6v-7l1-6c1-3%201-3%205-3%203%200%205-1%207-3%204-4%205-4%205%200l1%205c1%202-1%203-5%201-3-2-6-2-6%200l2%201%201%202-1%201-5%202-3%203c2%200%202%203%201%204-2%201%203%205%205%205l1%204c-1%204%200%204%204-1%203-6%207-9%208-8l-5%207c-4%204-5%206-4%207v2c-2%201%200%203%201%201%202-2%203-1%202%201-1%203%204-1%208-6%205-7%207-11%207-14-1-1%200-2%201-2l1-1h1l2%201c3%200%202%203-1%204-2%200-5%205-4%206s8-1%207-3l2-1h3l-3-1c-2-2-2-2%203-5l5-4h-1l-2-1-2-1h-1c1-3%200-2-2%201-3%204-5%205-5%202%200-2%201-3%203-4l2-2h-6c-3-3-3-4%202-4%203%201%204%200%205-1%200-3%205-1%205%202-1%203%201%203%202%200l3-4v-7c-2-1-2-2-1-3l2%201%203%201c2%200%203%200%204%202%202%202%205%201%206-3%200-4%201-6%202-4l2%201c1-1-2-8-4-9-2%200-1-1%203-6s5-5%205-3c0%205%206%208%207%205%201-1%209%201%2011%203l4%202c4%200%204-1%202-7-2-4-1-5%201-1%202%202%206%203%207%201l3-2%203-1%204-2c5-2%205-4%201-4s-4%200-4-2v-3c1%200%2013%205%2036%2017%2020%209%2020%209%2021%204%201-2%201-2%204%200%204%202%204%201%206-1%201-3-2-6-18-14a5486%205486%200%200%201-73-45c0-6-13-13-22-13l-9-3-24-12h-2v-2h-1l-1-1c-1%201-2%200-3-1l-3-1-2-2c-2-3-12-8-15-8l-2-1c0-1-5-6-6-5l-1-1-2-1c-1%201-2%200-3-1-2-4-6-4-4-1m303%2011c0%203-3%205-5%205-4%200-5%202-5%205%202%205%208%203%208-2%200-2%201-2%203-2%205%200%208-3%206-6-3-3-7-3-7%200m-61%2015c-7%205-31%2015-41%2017-22%205-37%204-53-1-7-2-11-3-12-1%200%202%202%204%2011%208%2031%2014%2072%208%2096-15l7-8-2%201c-2%201-3%200-2-2%200-2-2-1-4%201m53%203l-1%202-3%204c-2%203-7%209-7%2011%200%203%207-3%2010-8%200-2%202-2%204-2%206-1%207-7%200-8l-3%201m-44%2021c-3%202%201%2013%207%2019%205%204%208%205%205%201-2-2-2-6%200-7l2-5c0-5%200-6-7-6l-4-2h-3m-150%2014c-3%207-2%208%206%2012l11%204%205%202a1549%201549%200%200%201%2054%2026%201046%201046%200%200%200-76-44m-5%2015c0%206-1%207-2%208-3%202-2%204%201%203l5%201c3%201%203%201%203-3l1-4c2-1%201-2-3-4-5-4-4-4-5-1m1%2036v4l2%204c0%206%201%209%205%2010%205%203%206%202%205%200l1-2%201%201c-1%202%204%204%207%203%204-1%206-5%206-10l-1-4h-5c-3%200-4%200-4%202l-2%202-2-1-2-2c0-3-7-10-9-10l-2%203m-14%2012c-2%202-3%204-2%206l1%206c0%203%203%206%208%209%204%202%2017%200%2019-3s1-4-3-4c-2%200-3%200-2-1l-1-1-1%201-2%201-1-1-1-4-3-3-3-4-3-3c-1-4-3-3-6%201m-83%201c1%201%200%203-1%204l-1%203-3%204c-4%203-5%204-5%202l-2-3c-2-2-3%200-3%205%200%204%201%204%207%200%205-3%205-3%206-2%201%202%203%202%204%201%202-2%202-6%200-7-1-1%200-5%201-5l1-2h-4m75%2010l-2%201c-2%200-4%206-3%2013%201%206%203%208%209%2011%205%202%207%203%2011%200%204-2%204-2%200-7-4-4-7-5-8-4-3%202-5-1-4-6s0-9-2-9l-1%201'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.4961832061068703,src:"/renome/static/03c2da3e5c3058de2f9f7d89b1c87273/44ac6/bibimbap.png",srcSet:"/renome/static/03c2da3e5c3058de2f9f7d89b1c87273/ed021/bibimbap.png 200w,\n/renome/static/03c2da3e5c3058de2f9f7d89b1c87273/44ac6/bibimbap.png 392w",srcWebp:"/renome/static/03c2da3e5c3058de2f9f7d89b1c87273/91922/bibimbap.webp",srcSetWebp:"/renome/static/03c2da3e5c3058de2f9f7d89b1c87273/bc926/bibimbap.webp 200w,\n/renome/static/03c2da3e5c3058de2f9f7d89b1c87273/91922/bibimbap.webp 392w",sizes:"(max-width: 392px) 100vw, 392px"}}}},{node:{id:"e67be23f-98ed-5cea-86e8-21ef4d5cfffd",name:"pineapple",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='265'%3e%3cpath%20d='M60%202l-1%202-2%202c-3%203-4%206%200%206h3l-3%201h-5c-3-2-7%201-7%206-1%203%200%205%202%2011l3%208%203%205c3%203%203%204%201%204-3%200-3%203-1%206%201%203%202%203%202%200-1-4%202-5%206-3l3%203-6%203c-3%200-2%200%202%206%202%203%203%204%203%202%200-3%207-7%2010-7%203%201%205%205%203%206v6l1-1%201-4c1%200%202%203%201%206v4l-1%203-1-2c0-5-1-6-3-4v4l-1%201c0%201%200%202-1%201-1%200-2%200-1%202%200%201%200%203-2%204-2%203-1%202%205%200%209-5%2013-19%207-28l-2-6%202%201%201%201h2c0%201%202%200%202-2%200-4%203-2%205%203%202%204%202%207%200%2018v3l2-1%209-3c10-1%2012-3%205-3l-7-3c-3-3-3-5%200-4%202%200%202%200%202-3%200-4%203-13%204-13v-3l1-2%201-1%201%202c-1%201%200%205%202%207%202%203%204%2010%202%2014-1%203-1%203%201%202%207-2%207-3%208-1s1%202%203%200c0-2%201-2%203-2l2-1c2-2%205-3%205-2l-1%201-1%201%207-1c7-2%208-2%205%201l-6%201c-2%200-3%200-2%202%200%201%200%202-2%203-3%202-6%203-6%201s-4-1-5%201v4c1%203-1%204-13%203h-11l1%204c3%205-1%209-8%208-5-1-8%200-8%201l-5%202c-5%201-6%202-4%204%202%200%201%207-1%2010l-1%206v3l-1-7c0-5%200-7-2-9l-2-3-3-2c-2-1-2-1-1-2%203-3%201-7-12-23l-9-10v-3c2-1%200-2-2-1-4%202-9%208-10%2011l-1%206c-1%205-1%208%201%208l2-1c1-3%203-2%202%200-2%208-4%209-9%206-7-5-9-6-14-5s-7%204-4%206l3%201%201%202-2%203c-1%200-2%201-2%205-1%204%200%208%202%206l10%205%202%201v-2l-4-2-4-5%203%201c2%202%202%202%206%200l3-3h-5c-7%200-4-2%202-2%204%200%206-2%203-2l-2-1%203-1c2%200%202%200%202%203l-2%203c-1%200%200%205%202%207v4l2%202c4%201%204%201%202%202l-7%201-7%202c-2%201-3%200-1-2%202-1-4-2-9-1-3%200-3%200-2-1l1-1c-5-3-5-3-5%201l-2%203c-7%204%205%208%2013%205h2l-2%202c-2%200-3%202-3%203l2%201%204-2c3%200%204-1%202-2-2-2-2-2%200-3%203-2%209-4%208-2l-4%202c-2%201-2%201-2%206v6l3-1%207-1c4-1%204-1%203%202%200%202-1%203-3%204-3%201-3%201%201%201%204-1%204-1%204%203%200%202%200%203%202%205%205%203%207%206%207%2011l1%205%201%206c1%205%204%209%208%2011%203%201%203%204%200%205l-1%202c0%202-2%206-9%2017l-4%207-3%206-1%202-2%205-1%203v2l-2%203-5%2010-5%2010-2%203-1%203-1%204v3l4-6c1-2%201-2%201%201s1%204%202%205l1%202h2l1%202c0%202%200%202-3%201l-2%201%2010%201c8%200%209%200%209-2v-3c1-1%201-1%201%202s1%204%203%202v-2l-1-3c0-2%201-3%202-3l2-2c-1-2%201-3%203-3%201%200-1%205-3%205l-2%203c0%202%200%202%201%201%200-1%201-2%202-1%201%200%201%201-1%202v4c2%200%203-2%204-9%200-5%202-8%204-7l-1%202c-2%201-2%204%200%206s2%204%200%203l-2%202c-1%203%201%204%202%202l2-2v2c-1%201-1%201%201%201l3-2c0-1%201-2%203-2s2%200%200%202c-1%202-1%202%2094%202h95l2-2%203-5%203-3%202-2c0-2%200-2%202-1%203%200%202-2-1-7l-6-10%201%201c3%201%203-3%200-6-6-5-8-8-7-9l3%203c5%205%206%205%203%200l-2-5-1-4v-2c2-1%201-3-2-4-3%200-4-1-5-4l-2-5c-4-3-1-2%202%201%202%201%204%203%205%202l1%201%202%202c1%200%202%201%202%2010l2%203c2%200%202%200%201-2s-1-4%202-4%203-4%200-7l-3-6-2-3-1-1c1-1%200-3-1-4-2-3%201-2%203%201%202%202%203%204%202%205l1%201%202%202c1%202%201%202%202%201l2-2%202%201c1%200%205%204%204%205h3c2-2%202-2%203%201%203%206%209%2010%2011%207%200-1%201-1%202%201%201%201%201%201%201-1l1-3v3l3%201c2%200%203%201%202%202%200%203%202%206%203%204s2%200%201%202l-1%204c1%201%203-2%203-5s2-3%202%200l2%202h2l-1%201-1%201c0%201%201%202%202%201l1%203c0%202%200%202%201%201l3-2%201-2v-3c2-1%203%200%202%202%200%202%200%202%203%200%203-1%2010-10%2011-12l1-2%201-1c0-1%201-2%203-2%203%200%203%200%201%202l-3%202-1%202v1l1-1h2c1%200%201%206-1%206-2%201%200%203%202%203%201-1%202%200%202%202%200%203-1%204-2%204-3%201-5%205-2%205l3-1%204-2h3l-3%201-4%203-2%202h-9c1%201%200%202-1%203v2l3-1c1-2%205-3%206-2s1%201-1%201l-2%201-2%201%201%202c1%202%200%203-2%201-1-1-3%200-3%201%200%202%203%203%204%202l2-1v2l-3%201-1%201c-1%201-1%201-3-1l-3-2-5-1-4-2c-2%200-1%202%202%203l3%202%202%201%203%202%204%201%205%201c4%200%2019-8%2026-14l9-6%205-2%205-1c2%200%208-6%208-7-1-2-5-4-5-3h-1v-2c4-1%205-5%201-4-2%200-2%200-1-2%202-3%201-5-1-3-1%201-1%201-2-2l-1-4%201-2c3%200%203-5%201-10-1-4%205-14%2010-18l1-2-12%2011-13%2011-6%202c-6%203-13%203-13-1l-1-2-1%201-3%201c-3%200-4%200-5%202-1%201-2%202-5%202l-11%202c-7%202-15%203-24%203h-3l-5-5a251%20251%200%200%201-18-17l-5-5-9-7c-7-6-8-6-8-10-1-5%201-8%205-8%203%201%204%200%206-4%203-5%203-5%209-4%202%201%203%201%203-3l-1-4c-5%201-8-3-8-9l-4-3-5-5-6-6-4-5h1c1%201%203%202%204%201%203%200%203-2%200-2l-3-1h-1l-1-1%203-1h2l2%201v-1c0-2%201-3%202-1%201%201%205%200%207-3%201-1%202-2%203-1l4-1h2l5%201c4%201%205%202%206%207%201%201%201%201%202-1l2-2c3-1%202-3-1-4l-7-4-6-3c-3%200-9-2-16-6-5-3-4-5%201-3l4%201-2-2c-8-3-10-4-9-7%201-2%201-2-1-2s-4-2-2-3v-2l-1-4c1-5%200-4-2%201-1%204-2%205-4%203h-5l2-4c5-6%203-7-3-1l-5%205v-4c1-6%201-7%205-7%203-1%207-4%207-6%200-1-9%200-10%202h-2l-1-1-1%201c1%201-2%203-4%203l-1-1%201-2%201-1-3-1c-2%200-3-1-1-3v-1c-2%200-2-1%200-2l1-1%202%202%202-1%204-4c4-4%204-7%200-4h-3l-1%201c1%202%201%202-1%202-3-1-1-3%204-4v-2c-2-1-7%200-7%201l-1%201v-3l1-5c-1-4%202-5%2010-2%206%202%207%202%207%201%200-2-3-4-5-4s-3-1-2-3c0-2-2-4-3-2s-4%201-4-1l2-2c2-2%202-4-1-4l2-1c3-1%207%201%207%203s3%202%204%201%201-2-1-3c-2-2-3-3-2-4s-1-3-2-1c-2%201-8%202-9%201l2-1c3%200%206-2%205-4l-3-1V3l-2-1h-2c-1-3-25-3-25-1s-3%202-6%201l-7-2c-5%200-5%200-4%203%200%202%204%209%206%2010%201%201%200%207-1%207l-1-3%201-2-4%203-8%205c-5%202-11%206-11%208l-4%203-4%201%203%204c3%201%204%203%204%204-1%202-3%201-4-1s-1-2-1%200-10%2011-11%2010l-3%201-2%202v-3l-1-5c-1-2%207-11%2011-12l2-2v-4c1-3%202-3%204-3%203%201%203%200%202-1%200-2%200-2%204-2%203%201%204%201%205-3l1-3v-2c1-2%201-2-1-2l-2%201c-1%201-7-1-7-3%200-5%204-8%206-6h2l3-2c2%200%202%200%201-1-2-2-43-3-43-1l3%204c4%205%205%208%202%207l-3-1-1-1-3-3c-1-1-1-2-2-1l2%204v3l-1%203c0%203-4%209-6%2010l-2%204c-1%203-2%204-4%201-2-2-2-2%200-4l1-3-4-11-5%205-4%203-1-1-1%201-2%202c-2%200-2-2%201-3l3-3%205-4%204-4c1-2%207-1%2010%201s4-1%201-6c-2-3-2-4-8-4-5%200-5%200-4%201%201%202%201%202-2%204l-3%202-2%203-3%202%205-10%202-2H85C65%200%2061%200%2060%202m218%202a453%20453%200%200%200-2%2014c-1%205-1%205%202%208%204%203%204%203%206-1%202-6%201-13-2-19-2-6-3-6-4-2M75%2013v2c1%201%201%201-1%202l-2%201-2%201c-1%200-1%201%201%203%202%203%203%204%202%205v8c-1%204-1%204-5%204l-4%201c0%201%202%203%204%203l3%202c2%202%207%200%208-3%201-2%201-2%201%201s1%204%204%202c2-1%202-3-1-2v-7c1-5%200-8-4-9-3-1-4-3-2-4v-1c-2%200-2-4%200-4l3-6-5%201m122%206l2%203c1%202%201%203-4%203-2%200-2%201-2%204s4%204%207%201l4-2v-1l1-2c1-1%202-2%201-4%200-2-3-4-4-2h-3l-1-1-1%201M84%2022l1%206v8c-2%203-1%204%203%204l4%203c1%201%207%203%2010%202%202-1-2-6-5-6-3%201-3%201-4-7-1-7-3-11-6-11l-3%201m36%2013c-4%203-4%209-1%2013l3%202-3%202c-5%203-5%205-1%205l4%201c1%201%205-1%205-3l1-1%204-3%202-3-4-7c-4-9-6-10-10-6m272%2022c-5%207-6%208-10%204-2-2-5-1-8%202-2%202-1%203%202%203l2%201-2%201-2%202-1%202-1%203c0%204-5%2010-8%209l-3%201-4%202-4%202-2%201h-3c-1%200-2%201-2%204-1%204-5%206-9%204s-8-1-8%202c-1%202-4%202-7%200-2-1-2-1-2%201%201%201%201%202-3%201l-4%201c-3%202-13-2-13-6l-1-1-1%202c1%204%200%206-3%204-3-1-5%200-5%203-1%202%201%204%203%204l4%201%203-1h15c2%200%202%201%202%203s0%202%202%202c1-1%202%200%204%201s2%201%205-1l3-1c1%201%202%200%203-1l3-1%204-2c4-3%208-3%206-1l1%201c2-1%202-1%202%202-1%202-1%202%201%201h3c-1%201%200%204%201%204l1-2c0-2%203-6%204-5l-1%203-1%202%202-1c0-1%202-1%204%201%201%201%201%201-2%201l-2%201v1l-1%202c-2%201-2%202-1%202l10-7%204-2-29%2029-1-2c0-3-1-3-4-1-3%203-6%204-16%204l-5%201-20%203c-4%200-4%201%201%204l7%201c3-1%206%200%209%201%203%202%205%202%205%201%201-2%204-1%205%203%201%202%202%203%206%203l6%201%202%201v-1c-2-1-1-2%203-2%203-1%203-1%203%201s0%202%201%200l3-4%202-3c0-3%208-11%2010-10l1-1%202-3h2l2-1%202-1%201-1c-1-1-1-1%200%200%203%200%203-2%201-4-1-2-1-2%202-6%204-6%207-13%207-15h-7l2-2c2-1%202-2%201-6v-4c1%200%200-2-4-6l-2-2c0-2%207-10%208-10%202%200%209-9%209-10l-4%201-6%201-2-1%202-1c2%200%203-2%204-3%201-3%206-3%206%200l1%201%208-14%201-3-5%206m-210-1l9%203c9%203%2010%203%208%205v2c2%200%202%200%200%203-4%206-10%206-19%200l-5-2v-1c1-2-2-4-4-2s-1%203%201%203%202%200%200%202l-4%203c-3%201-3%201-2%203%202%201%202%201%200%201l1%202%202%202h-4c-3%200-3%200-2%202l6%202%209%202%205%201-2%202c-1%201-3%202-4%201l-2%202c-1%202%200%204%201%202%201-1%201-1%203%201%203%203%205%204%207%203s2-1%200-3v-8c1-3%202-3%204-2%203%200%204%200%2010-6l4-6%202-3h1l3%204%202%203c-8%200-13%205-8%206v3c-3%204-2%204%200%204l8%203%207%202c0-1-2-5-4-6s-3-3-1-3l4-1c4-2%204-6-1-8l-3-1-2-4c-3-4-3-4%201-6%202%200%203-1%203-2l-3%201c-3%201-5-1-5-5%200-3%200-3-2-2h-3l-4-2h-9c-9-2-10-2-8%200m168%2021h-3c-2%200-2%200-1%202%202%203%204%204%204%202l2-1c4%200-1%203-6%204-2%200-3%201-3%202-1%200-2%200-3-2-2-3-3-3-3%202l-1%203h-1l2%202c2%200%203%201%203%202l1%203%201-3c-1-4-1-4%202-5l3-2h3c1%201%207-2%2010-5%201-2%201-2-2-1-2%200-3%200-4-2%200-2%200-2-1%200h-1c0-2-2-3-2-1m-230%204l-1%203c1%202-1%203-5%202l-3%201%203%201%202%201c1%201-1%203-3%203s-2%200-1%202-1%209-4%2011c-1%202-1%205%201%206%201%201%201%201-1%204l-2%207v3l1-3c4-9%206-12%208-13%205-2%2010-6%2010-8l-3-6c-4-3-5-7-3-7s4%201%204%203%209%207%2011%206c3%200%201-2-1-2-3%200-8-4-6-5l2-2c1-1%202%200%204%202l2%201c-1-4%200-6%202-3l4%201%203-1-3-1-2-3c0-1-4-1-4%201%200%201-1%201-4-1-5-2-5-2-6%200%200%202%200%202-1-1%200-3-2-4-4-2M60%2092c-2%203-3%2017-1%2019%203%203%203%202%203-3%201-7%201-7%203-7l2-2c1-2%201-2-1-2l-1-2c1-6-2-7-5-3m74%2010c-1%201-2%202-3%201l-1%201-3%204c-3%203-3%203-2%206v6c0%204%202%209%203%209l3-3c3-4%204-5%204-2s4%208%206%208%202%200%201-4l-1-6c-2-5%200-4%203%201%203%206%207%2010%2012%2013%207%203%209%203%204-2l-5-4-5-5c-5-5-11-17-11-21%200-2-1-3-2-3-2-1-2-1-3%201m111%2017c-2%201-3%204-1%203h4c2%200%202%200%201%202-4%203-3%206%201%207%205%200%207-3%204-8-2-4-6-6-9-4m-129%2027v10c1%209%204%2012%209%209%202-1%203-12%201-18%200-2-6-3-10-1m-46%208l4%202%206%206-6-3-1%204-2%2010c-1%206%201%2012%206%2013l4%203c7%2013%2031%209%2031-4l-1-3c-2%201-11-4-10-6l2-2c4-1%202-4-2-4-2%200-17-9-18-11l-3-1-4-3c-2-2-6-2-6-1m291%2012c-1%202-1%202-2%201-2-1-6%200-6%202l-1%201-3%202-4%203-4%201h4c3-1%204%200%202%202l-5%209%203-2c2-3%202-3%203-2l3%201v-6c-2-1-1-2%203-3%206-1%207-1%206-3l2-5%201-3-2%202m-106%2010c-2%202-3%202-10%202l-4%201-1%202v5l-1%201-2%203v2l2-2%204-2%206-5a144%20144%200%200%201%209-8l-3%201'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.5095785440613028,src:"/renome/static/5b33acbc97abc8a9fa6e023f7bee6f56/550fc/pineapple.png",srcSet:"/renome/static/5b33acbc97abc8a9fa6e023f7bee6f56/ed021/pineapple.png 200w,\n/renome/static/5b33acbc97abc8a9fa6e023f7bee6f56/550fc/pineapple.png 394w",srcWebp:"/renome/static/5b33acbc97abc8a9fa6e023f7bee6f56/796f9/pineapple.webp",srcSetWebp:"/renome/static/5b33acbc97abc8a9fa6e023f7bee6f56/bc926/pineapple.webp 200w,\n/renome/static/5b33acbc97abc8a9fa6e023f7bee6f56/796f9/pineapple.webp 394w",sizes:"(max-width: 394px) 100vw, 394px"}}}},{node:{id:"44906ada-60b9-537d-803f-03a2d79cbc99",name:"contact",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='146'%3e%3cpath%20d='M0%201v5c0%204%200%205%202%205s2%200%202%204l-3%205-1%2024%201%2023%202-1%202%201-1%202-1%202-1%201c-3%200-2%203%200%203v1c-2%200-2%203-2%2035v35h50c50%200%2051%200%2051-2l1-2%201%202c-1%202%200%202%207%202l7-1a222%20222%200%200%201%201-15v-6l-6-1-5-1h14l-1%2011-1%2012%209%201h9v-19l2-19c1%200%201%2013-1%2032%200%205%200%206%202%206l2-1a464%20464%200%200%201%201-14v-8l9%201%2016%201c8%200%208%201%208%2013v8h21v-19h3c30%201%2027%200%2027%2012v7h24l-1-4-1-11-1-8%205-5c3-4%204-5%203-6v-1c3%200%203%202%201%205l-1%205%201%2010%202%2012%201%203h23l24-1a2871%202871%200%200%200-15-86c-2-2-1-3%202-3l4-1%201-1v2l-1%202c1%201%202%201%203-1h3c1-1%201-1%201%201h2c2-2%203-5%201-6v-2c0-2-2-10-3-9v-4l-1-1c0-2%201-2%204-2v-1c-1-3%201-5%203-4v5h1v1l-1%202%201%201c2-2%202%204%200%206s-2%203%200%2011a2173%202173%200%200%201%205%2033c-1-8-2-8-5-5-2%202-2%202-1%206l2%207c0%202%200%202%201%201l2%205v7c-2%202%200%201%203-1%202-1%202-2%201-5l1-4c1%200%205%2018%205%2023%200%204-1%201-3-7l-2-6c-1-1-6%204-5%205l4%2021c0%206%202%207%208%203l-1-6-1-7%204%2012%201%209h70V0h-19c-16%200-19%200-20%202h-2c0-2-11-3-11-1l-1%201-1-1-3-1-4%201h-1c-1-2-2%200-1%202l-1%201-1%202-2%202-2%201h-1l2-3c2-1%202-2%202-3-1-2-4-3-4%200l-1%201-1%201-2%204-2%202h2c1-1%202-2%203-1v1l1%202%201%202c-2%200-2%201-2%202%200%205%200%206-2%206l-1-1v-3l-1-1v-1h2v-2l-3-1-1-3%201-3%203-4c3-4%203-4%201-4s-5%204-4%206h-1l-2-1-1-1-2-2c-1-2-1-2-1%202s0%204-2%203l-2-5c-1-2-1-2-1%201%200%205-1%206-3%203l-1-3-1-3v4l-1%205v5l1%201-1%201h-2v6c1%201%201%201%201-1s1-3%202-3v4l2%202-1%201-1%201c1%202-2%206-4%207l-2%202c1%201%200%201-1%202-1%200-2%201-1%202h-1c-1-1-1-1-2%201l-2%203-1%202%201%201%201%202%201-2c-1-1%200-2%201-2l1-1%201-1%201%201c-1%201%200%201%200%200l2%201-3%201v1h-1l-1%201c1%201-3%208-4%208-2%200-3-3-2-4l-2-3c-2-1-3-3-3-5-1-1-1-1-1%202%200%206-1%206-3%200l-1-3v4c0%205%200%205-1%203l-2-3c-1-2-1-2-1%201v4l-1%203h-1c-1-1-1%200-1%204l4%208c2%201%202%202%201%204v3l1%202c-1%202-6%203-6%201l2-2v-5c2-5-1-2-5%203-5%206-6%208-3%206%202-2%202-1%200%202-2%201-2%202-1%203v9c-1%200-2-2-2-8v-4c-1%200-2-2-3-8%200-8-1-8-1%201%200%2010-1%207-3-5-2-14-2-25-1-29s1-4%201%203l1%2012c1%204%201%203%201-5%200-11%202-20%206-25%203-3%202-4-2%200-2%202-3%202-3%201l4-4c3-3%203-3%201-3l-4%202-3%201%204-3c4-3%203-5-2-3-4%203-5%204-7%2013-2%207-3%2011-3%2017v8l1-8%202-10v4l1%2014c3%2023%203%2025%202%2026s-1%200-3-12v4c0%2010%200%2012-2%2013v1l2%201-1%201c-1-1-1%200-1%201l1%201h1v2l1%203c0%202%200%202-1%201h-1l1%202%201%203c-1%204-2%205-2%202%200-2%200-2-1-1l-2%201-2%201-2%201c0-3-3-4-4-2s-3%200-3-5c1-2%200-3-1-3l-1-6c0-5%200-5-3-5-2%200-3-1-3-6-1-7%200-8%205-7h3l2-8c1-5%202-8%204-9%202-3%202-5-2-2h-2s1-2%203-2c3-2%201-3-2-2-2%201-3%203-5%209-2%207-3%207-3%204%200-4%203-11%2016-32a422%20422%200%200%200%2013-22c1-3%201-3%202-2%201%202%201%202%202%200%202-4%201-4-6-4h-7l-4%207c-5%208-6%2010-4%209h1l-2%201h-2c0%202-1%202-1%201l5-11V6c-3%200-4%201-7%207s-3%2010%201%207c1-1%201-1%201%201l-17%2029h-2c-1%201-2%201-2-1-1-1%200-2%203-3l3-2-4-3h-2l-2-1h-2l-4-1h-1l-1-1c1-1%201-1%200%200l-2-1h-2l-1-1v-1c-2%201-2-5-1-6%202-2%202-3%201-3l-2-1h-1c-1%201-1%201-2-1h-10c0-2-1-2-1-1l-1%201c-2%200-3%200-3%202-1%202-7%206-8%205l-1-2%201-1v-1h1l1-1-1-3h-3c-2%200-3-1-3-2h-1c-1%201-7%201-7-1h-1c0%201%200%202-1%201l-5%204-4%204-2-7-2-6%201%207%202%207c0%203-1%200-3-7-2-6-2-4%200%205%201%205-1%203-3-3l-1-5%201%206c0%207-1%206-3-2l-1-5%201%206c0%208-1%205-3-5l-2-8v4c2%2010%202%2014%201%2013l-2-10-1-8v8c1%2010%200%2011-2%201l-1-9%201%207-1%208c-1%201-1-3-1-13l-1-2v7l-1%208c-1%201-1-1-1-7l-1-8v7l-1%207c-1%201-1-1-1-7v-8l-1%207c-1%2011-2%2012-2%201v-8l-1%206-1%208c-1%201-1-1-1-6v-6l-1%206-1%205v-9c0-15%204-14-37-14a247%20247%200%200%200-35%201v6l-3%203c-4%201-4%201-3-1h-1c-2%202-3%200%200-2V3c3-2%200-4-3-2h-1c1-2%200-1-2%201l-2%201V2c2-2%200-3-2-1h-1V0l-2%201H0m345%2014l-11%2011-1%201c1%201%201%201%200%200l-2%201%201%201h1l-2%201a200621%20200621%200%200%200%2022%2094l36-22a112%20112%200%200%200-7-20l3%2015c1%202-12%2012-14%2011l-2-6-6-25c-1-1%201-3%206-8l7-6c0-1-1-1-8%205-6%205-7%204-6-2%200-3%200-3-1-1v-2c0-2%200-3-1-2-1%202-1%202-1%200l-1-5v-1l-3-5-2-6%202-3c2-1%202-2%201-2l-3-7-3-6h-1l-2-4c-1-3-1-3%205-10%206-6%207-9%205-9l-12%2012m-5%2010c-7%208-6%208-4%2011l4%2010%202%207%204-5%205-4-3-11-3-11-5%203m5%2027c-4%203-6%206-5%206l2%204%202%204c2-1%206%2015%204%2017s1%201%206-3%205-5%205-8l-8-26-6%206m-45%2017l-3%204%202%203%203%209%201%205-1%202c-2%202-1%205%201%207l3%209%202%209-1%202c-2%202-2%202%200%206l1%205%201%202%202%205v8h-1c0%202%205%201%207-1l2-2-2-12c-3-16-3-17-4-15l-2%201%201-2%202-3-3-12c-2-13-2-13-5-11l-2%201%202-2%202-2-1-9-3-11-4%204m53%2013l-5%206%203%208%202%205v2l1%203%203%207h-2c-1-2-1-2-1%200l1%204c0%202%200%202%204%200%207-4%2010-7%209-9l-2-7-6-23-7%204m-208%2047l-1%208c0%205%200%205%202%205%203%200%204-4%202-5-1%200-2-1-2-4%200-2%200-3%201-2%200%201%201%201%202-1h2c0%202%201%202%201%201%201-2%204%200%204%202l-1%202c-2-1-2%200-2%202%200%201%200%202-1%201-2%200-2%200-2%202%200%201%200%202%201%201l2-1%201%201%201%201c1%201-1%201-5%201-5%200-6%200-6%202l7%201%207-1h15l-6-1-7-1h-1l-1-8%201-9h-3l-7-1h-4v4m15%200c0%202%201%202%203%202l2%201h-1l-2%201-1%201-1%204c0%203%200%204%201%203h2v-3l2-1%202-1%202-2v5c-2%200-1%203%201%202l1%201%201%201%201-8v-8h-4c-7-2-9-1-9%202m38%202l1%204%201%206-1%205h3l6-1h3v-16h-4l-6-1c-3%200-3%200-3%203m14%207v8h13l-1-8v-8h-4c-8-2-8-2-8%208'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:2.742857142857143,src:"/renome/static/c24005275e7f63babd5302a21ee11021/94286/contact.png",srcSet:"/renome/static/c24005275e7f63babd5302a21ee11021/ed021/contact.png 200w,\n/renome/static/c24005275e7f63babd5302a21ee11021/4e842/contact.png 400w,\n/renome/static/c24005275e7f63babd5302a21ee11021/94286/contact.png 800w,\n/renome/static/c24005275e7f63babd5302a21ee11021/d8210/contact.png 1200w,\n/renome/static/c24005275e7f63babd5302a21ee11021/ab3db/contact.png 1600w,\n/renome/static/c24005275e7f63babd5302a21ee11021/16145/contact.png 1920w",srcWebp:"/renome/static/c24005275e7f63babd5302a21ee11021/64c2a/contact.webp",srcSetWebp:"/renome/static/c24005275e7f63babd5302a21ee11021/bc926/contact.webp 200w,\n/renome/static/c24005275e7f63babd5302a21ee11021/14fee/contact.webp 400w,\n/renome/static/c24005275e7f63babd5302a21ee11021/64c2a/contact.webp 800w,\n/renome/static/c24005275e7f63babd5302a21ee11021/f9d14/contact.webp 1200w,\n/renome/static/c24005275e7f63babd5302a21ee11021/2e3ee/contact.webp 1600w,\n/renome/static/c24005275e7f63babd5302a21ee11021/67803/contact.webp 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-c87d30399cdb82f70e8f.js.map