(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{215:function(c,l,e){"use strict";var h=e(0),a=e.n(h),v=e(100),s=e(25),t=e(6),d=e.n(t),n=e(207),m=e(212),i=e(224),o=e(221),r=e(222),f=e(12),p=function(c){var l=c.children,e=c.message,h=c.kind,v=c.closeMessage,s=c.isSnackBarActive;return a.a.createElement(n.a,{theme:r.a},a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{title:"Home",keywords:["renome","restaurant","food"]}),a.a.createElement(o.a,null),a.a.createElement("main",null,l),s&&a.a.createElement(i.a,{message:e,isActive:s,type:h,closeMessage:v})))};p.propTypes={children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]).isRequired,message:d.a.string,kind:d.a.string,closeMessage:d.a.func,isSnackBarActive:d.a.bool};l.a=Object(v.b)(function(c){return{kind:c.appData.message.kind,isSnackBarActive:c.appData.isSnackBarActive,message:c.appData.message.content}},function(c){return Object(s.b)({closeMessage:f.b},c)})(p)},225:function(c,l,e){"use strict";e(23);var h=e(0),a=e.n(h),v=e(207),s=e(6),t=e.n(s),d=e(214),n=e.n(d),m=v.c.div.withConfig({displayName:"PhotoComponent__StyledWrapper",componentId:"sc-6lmdqw-0"})(["position:relative;z-index:0;@media (min-width:1200px){max-width:450px;transform:translateX(",");}"],function(c){return c.left?"100px":"250px"}),i=Object(v.c)(n.a).withConfig({displayName:"PhotoComponent__StyledImageFirst",componentId:"sc-6lmdqw-1"})(["max-width:272px;margin-right:10px;position:'absolute' !important;transform:translateX(",") translateY(",");z-index:",";@media (min-width:1200px){max-width:450px;}"],function(c){c.switched;return"20%"},function(c){return c.switched?"70%":"0"},function(c){return c.flipped?"1":"0"}),o=Object(v.c)(n.a).withConfig({displayName:"PhotoComponent__StyledImageSecond",componentId:"sc-6lmdqw-2"})(["max-width:272px;position:relative !important;transform:translateY(",");@media (min-width:1200px){max-width:450px;}"],function(c){return c.switched?"-100%":"-30%"}),r=function(c){var l=c.firstPhoto,e=c.secondPhoto,h=c.flipped,v=c.switched,s=c.left;return a.a.createElement(m,{left:s},a.a.createElement(i,{fluid:l.childImageSharp.fluid,flipped:h,switched:v,alt:l.name}),a.a.createElement(o,{fluid:e.childImageSharp.fluid,switched:v,alt:e.name}))};r.propTypes={firstPhoto:t.a.shape().isRequired,secondPhoto:t.a.shape().isRequired,flipped:t.a.bool,switched:t.a.bool,left:t.a.bool},r.defaultProps={flipped:!1,switched:!1},l.a=r},288:function(c){c.exports={data:{allFile:{edges:[{node:{id:"525c89eb-2005-5f74-b37f-2e0d8f85b3a3",name:"house1",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='266'%3e%3cpath%20d='M0%2031a154%20154%200%200%200%201%2034l-1%2064a295%20295%200%200%200%202%2066c-2-1-2%200-2%202s1%203%2011%207a152%20152%200%200%201%2023%2013c7%205%2013%2012%2011%2013s-1%202-22-8l-21-9-2-1v14l1%2015%202%202v2c-3-1-3%203%200%206%201%202%201%202-1%202s-2%201-2%207v6h110v-13l2-20v-7l4-1%206-3%2013-1h11l-8-1-11-2h-3l2-7%204-7%202-1h-3c-1%201-1-2-1-6l1-7v-2l-1-17v-16l-3%203c-4%204-5%204-5%203l-2%203%201%201h1l-2%202-3%201c-2%202-1%200%204-10s6-10%208-10l4-2h-3c-3%200-3-1%204-14%204-8%205-9%207-8l3-1c1-1%200-1-2-1l-2-1c1-3%2011-22%2012-21%200%201%203%202%203%200l-2-1c-1-1%200-4%208-21l10-19-7%2011c-6%2013-9%2016-8%2012%201-1%200-2-1-2l2-5%203-6%202-1-1-1c-3%203-1-3%204-8l1-4v-2l1-1c-1-1%200-3%201-4%201-3-1-3-3%200h-1l2-3c2-3%201-4-1-1h-3c-1-1%200-2%202-4s3-2%208-1l7%201-3%208-4%208%205-8c4-7%204-8%207-7h3l-2%204v4h2l-10%2024c-3%206-2%207%202%203l3-3v2l2%202v-3c0-5%200-7%203-6l2%201c0%202%203%204%204%204%200-1%200-2-2-2v-5l1-2%201%202%202%202v-3l1-1%205%201c4%200%205%201%205%202h1l1-2c2%200%204%202%204%203v1l1-1c0-2%202-2%205%200h2c0-2%203-2%207%200h4c1%200%202%200%202%202h2l2-1h3c0%202%201%202%203%202%201-1%202%200%202%201l1%201%201-1c0-2%2015%200%2019%203h8c2-1%202-1%203%202l2%201c0-2%204-2%205%200l2%201c1-2%204-2%204%200-1%201%201%202%202%200h5l2%201h3l5%202%205%201h-2c-3%200-6%201-6%203h8c-2-1-6%201-6%203h1l3-1c2%200%202%200%201%201-3%200-3%204%200%204l2%201c-1%201%201%202%203%202s6-4%206-5l-3%201c-1%201-3%201-5-1-2%200-2-1-1-1l1-1%202-2%203%202h4c1-1%201%200%202%203v4l2-3c1-3%201-3%201%204l1%2010%201-2v-3c3%200%203%200%202%202v1c1%200%202%204%201%205l-3-1h-1l4%203c4%202%204%202%202%203v1l2%202h-1l-2%201%205%201%201%202v2c-2%200-1%202%201%202l-1%201c-1%202-1%202%201%203%203%201%2011%2010%2010%2011%200%202%202%205%204%205l2%201-1%201-3%203c-1%204-1%204-2%202%200-3-1-4-2-2l-7%201c-2%200-1-2%201-2v-1l-2-3v-1l-1%201c0%203-3%205-5%205h-1l-1%201-1%204c0%202%200%202-2%202h-4l-5%201-4-1%203-2%204-1h2l3-2%205-5%202-2%202-1h-3c-4%201-6-1-5-3v-2l2-1c3%202%206%202%206%201%202-2-1-3-5-3-5%200-5%200-3-2l2-3-4-2-1-1c-1-2-5%201-5%203l-3%202c-2%200-4%203-5%207%200%202%201%203%205%202%202%200%202%200%201%201v8c1%201%201%201-2%202-3%200-6%202-6%205l-2%201-3%202-2%202h-1c2%201%201%202-2%202-3-1-4-2-2-3l1-2-3-1-5-2c-1-1-1-1%201-1h4l-1-11-2-10-9-1-10-1a595%20595%200%200%200%202%2028c-2%202-3%201-2-2%200-2%200-2-1-1-2%203-4%202-4-1%200-2%200-3-2-3-1%200-2%200-1-1h1v-19c-1-2-2-3-10-4h-10l1%2010a268%20268%200%200%201%202%2012l2-1-1%202-2%202-2%203-2%201-3-2-4-3v-1c1-2%201-17-1-19l-19-3%202%2021h8c0-2%200-2%202-1v3l-2%201-7%203v3c2%201%200%203-2%202-2%200-4%204-2%207%201%200%201%201-1%202-2%202-3%205-2%206s2%202%201%203%200%201%202%202l4%201%204%201c2%200%202%200%201%201-2%202-1%203%202%203l2%201%203%201%203-1c-1-2%201-1%202%201l3%201-1%202-2%202h1l5-1h3v-1l2%201c0%201%203%202%204%201h11l2%201%201%201%202%201h1l2-1%201%201h2l4%201c3%201%206%201%207-1%202-2%204-1%203%201v3h2l3%201c1%200%202%201%202%204s3%205%203%203h7c0%202%203%203%204%202l4-2c2%200%202%200%200%202l-3%201-1%201%206-1%201-1v2l-1%202-1%202v3c2%202%202%202%200%202h-6l-2-1c-1%201-2%200-3-1s-1-1%203-1l5-1c2-2%201-2-7-1-6%201-13%206-13%2010-1%203-1%203-8%203-6%201-6%201%204%201%208%201%2010%202%2011%203l3%202h4c2-2%205-3%205%200l1%201c2-2%209-2%2010-1%202%202%201%203-1%203-4%200-6%203-3%205%201%201%201%201-1%203l-1%203-1%201-1%203c0%202%200%202%202%202%202-1%201%200-1%203-2%202-4%202-11%202l-8-1h1c2%200%203-1%202-5v-4c6%201%206-1%200-2l-2-2%207%201c1%202%203%201%203-1l-2-1c-2%200-4-2-3-3h-7l-3%202c0%201-1%202-3%202-4%201-7%205-7%208l1%203%201%201h-8l-46-4c-3%200-3%200-3%204l1%204h81a1327%201327%200%200%200%2088%200h4V165a2310%202310%200%200%200-3-124c-2%201-2%200-2-1%201-1%200-2-1-2-2%200-6-6-5-8l-5%201-2%201c-2%201-3%202-2%207l1%202v3c1%203%201%203%205%202s4%200%200%202c-3%200-4%203-3%206%200%202%204%201%205-1s1-2%201%203l-1%204v2l-2%201a2698%202698%200%200%200-6-3c0-3-2-6-4-5-1%200-2%201-1%202l-1%201v-1l-1-1-1-1-1-2-1%201-1%201c-2-2-3%200-1%202v2l1%201%202%202c0%202%200%202%202%200l-1%203-1%204c1%201%200%202-1%203s-2%204%200%204h1l2%201c2-1%202-1%201%201-1%204-1%205%201%205s2%200%202%202l-1%202-7-1c-1%200-2-1-1-3%200-2%200-2-4-1-3%201-4%201-6-2s-3-5%200-7c2-4%201-6-5-10l-5-5%201-3%203-6%201-3%202%202c2%202%203%204%202%207%200%204%200%204%202%204s3-1%203-3l2-4c2-2%202-2%201-3v-2l-2-1c-3%201-3%201-3-1%201-4-1-6-2-4-4%204-7%204-36%200a5266%205266%200%200%200-139-19c-8-2-8-2-11-6-2-4-2-4%200-6%201-2%201-2-1-5-3-2-4-2-11-2-7%201-8%201-11-1-3-3-7-2-6%202%200%203-1%206-3%207-3%201-6%200-6-3%200-2-2-3-4-3l-7-3c-3-3-63-3-61%200%202%205%201%205-2%205-2%200-3-1-3-4s0-3-5-3c-4%200-4%200-4%203%200%205-7%205-8%200l-1-3H0v31m151-5l-1%202-2%205c-1%204-1%204%202%208%203%203%204%204%204%202v-2l2-2c1-1%202-2%201-6%200-7-1-9-6-7M91%2059c-3%202-3%202-7%201-5-2-8%200-6%204%201%201%200%202-1%203-2%202-2%202%200%203l3%202c2%202%2011%204%2024%206%207%200%2010%202%204%202-2%200-2%200%201%201%205%202%2014-2%2012-5l-2-4c0-3-3-5-5-5-3%201-5-1-6-4-2-3-3-4-7-5-6-1-6-1-10%201M0%20129a2119%202119%200%200%200%203%2061l1%201h1l-1%201c-2%200%201%203%204%204l7%202c4%200%208%202%204%202v1h3c-2-2%206%200%209%203%204%203%2021%209%2027%209h5v-5l1-13v-7h-7l-12-4-6-3-2%202-2%202-2-2c-3-2-6-3-6-1h-1l-1-2-3-2%203%201c3%201%202-3-1-5-3-1-6%200-4%202l-2%201c-2%200-2%200-1%201l2%202c-1%204-5%203-9-1-3-3-3-4-5-3s-3%202-2%206l-1%205-1-61-1-61v64m4-55c-1%202-1%207%201%2010%201%202%201%203-1%2012-2%205-2%205%201%206%201%201%202%202%202%206s0%205%202%205%203%201%204%203l4%208c2%205%204%2016%204%2028%200%203%201%201%205-7%204-10%204-15%200-26%200-3%207-3%209%200s6%203%208%200c3-3-4-16-13-28-4-5-5-6-4-3%200%203-1%202-4-1l-2-2%202-1c2%200%202-1-2-5l-6-4%201%202c4%204-1%203-7-2-3-3-4-3-4-1m29%205l-4%204c-1%201%200%202%204%209l9%2014c3%206%204%207%204%204%200-2%201-2%202-2%203%200%204-2%206-10%201-7%201-13-1-7%200%202-3%204-4%202l-2-2-2-2-3-2c-3-1-3-2-3-5s0-5-2-5c-2-1-3-1-4%202m42%204l-2%202-2%207-1%202-1%201-1%201-2%205c0%202%200%202%202%202s2%200%201%201c-5%202-4%204%202%204%203%200%203%200%204-6l2-6h3c3%200%204%200%204-2%201-1%2015-8%2018-8l1-1-2-1-10-1a1497%201497%200%200%200-16%200m76%205c-3%200-7%203-6%204s-1%203-2%203c-2-1-20%2033-19%2033l2%202c2%201%202%201%201%202-3%203-4%202-3-1%201-4%200-2-11%2018-10%2019-11%2021-9%2021s5-3%203-4c-1%200%200-4%204-6%202-2%202-2%202%200v2h1l4-6%203-7c-2%201-4-3-2-4h1l1%201h1c0%201%202%200%203-3%203-5%203-5%200-4-1%200-2%200-1-1v-2l2-1c2%200%203-1%2010-14%209-16%209-16%207-15l-2-1%202-1c2%200%202%200%200-2-1-1-1-1%201-2h2l4-6c3-7%203-7%201-6m111%208l-10%201c-16%200-16%200%202%203l3%201-10-1h-4l1%205c1%206%201%206%205%206l4%201v-9l1%204c1%205%202%205%204%205l5%201%201-5c-1-5-1-6%201-6%202-1%205%201%206%205%200%206%201%207%205%207%204%201%204%201%204-2-1-4%201-4%201%200%201%202%202%203%204%203%206%201%206%201%205-4%200-6%200-6%202-6%201%200%202-1%202-3%201-3%200-5-1-5l-12-1h-19m-44%2031c0%202%201%203%2011%204l11%202%201%204%201%205-1-7-1-7-8-1-11-1c-3-1-3-1-3%201M13%20160c0%202%203%203%2013%208s13%207%2012%208c0%202%2014%209%2021%2010%205%201%206%200%206-1%201-2%202-2%2010%200l12%201c1%201%202%200%203-1%201-3%202-2-7-4-16-2-26-3-29-2-2%201-2%201-3-1l-4-3-7-3c3%200-13-9-16-9l-6-2c-4-4-5-4-5-1m60%2032l-3%202c-3-1-2%202%201%203l1%201c-2%200-2%200-1%201%202%200%202%201%201%201-1%201-4%200-5-2l-1%201v10l1%201v2c1-1%201%200%200%200%200%201%201%202%204%202%204%201%205%200%205-4l1-4%204-9-2-1c-3%200-4-1-1-1s5-1%203-2c-2-2-7-2-8-1m-24%2039c-1%203-1%203%2010%205h12l-3-2c-1-3-9-6-14-6-3%200-4%200-5%203'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.5034246575342465,src:"/renome/static/48e63d6efccea51e59c51bdad7956fd1/94241/house1.png",srcSet:"/renome/static/48e63d6efccea51e59c51bdad7956fd1/ed021/house1.png 200w,\n/renome/static/48e63d6efccea51e59c51bdad7956fd1/4e842/house1.png 400w,\n/renome/static/48e63d6efccea51e59c51bdad7956fd1/94241/house1.png 439w",srcWebp:"/renome/static/48e63d6efccea51e59c51bdad7956fd1/2a007/house1.webp",srcSetWebp:"/renome/static/48e63d6efccea51e59c51bdad7956fd1/bc926/house1.webp 200w,\n/renome/static/48e63d6efccea51e59c51bdad7956fd1/14fee/house1.webp 400w,\n/renome/static/48e63d6efccea51e59c51bdad7956fd1/2a007/house1.webp 439w",sizes:"(max-width: 439px) 100vw, 439px"}}}},{node:{id:"fdb327bb-ca59-58cb-94f8-5293aade0566",name:"house2",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='267'%3e%3cpath%20d='M2%201L0%205c0%203%200%204%203%201%201-1%202-1%202%201l-1%203v1l1%204%201%204-1%203c-2%202-3%203-2%201l-1-2c-2%200-2%203-2%2022l1%2022h1l-1%201-1%207c0%206%201%207%202%206%203-2%203%201%201%202l-3%202v28c0%2027%200%2027%202%2027h2l-1%201c-1%200-1%201%201%201H3c-4%200-4%201-1%202h5v1c-2%200-2%200-1%202%204%203%205%200%202-4-2-3-2-3%200-3%202-1%203-3%202-8l1-2%201%202%201%201%201%203c1%202%202%203%203%202l1%202%201%207-1%205v1c2%201%202%203%201%204v1l1%202c0%202-1%202-10%202H0l10%201%2011%201v3l-1%203-2-1-1-1-1%201c0%202-4%205-5%203l-6-1H1l-1%2016%201%2017c1-1%202-3%202-9%200-11%201-11%201%200v9h4c3%200%203%200%203-5%200-10%200-10%203-10%202%200%204-2%201-2h-3l-1-1-2-2%201-1%202-3c0-3%205-6%207-5l2%201v5l1%202-1%201-3%202c-1%201-1%201%201%201%202-1%203%200%201%201l-2%203h1c2-4%203-2%205%2015%202%2020%202%2022%200%2023-4%201-4%200-4-5%201-5%200-9-2-9l-10-6-3-1-4-2c-1-1-1%204-1%2011%200%208%200%2012%201%2011%203-5%206%208%204%2020%200%204-1%205-3%205s-2%200-2%208v8h92l93-1%207-14c1-2%203-3%2010-4%204%200%205-1%202-1l-3-1%201-42a534%20534%200%200%201%201-48%20219%20219%200%200%201%201-44l2-1%202-2%204-3c6-1%206-1%206-5%200-2%200-3%202-3%201%201%201%200%201-1%200-3-2-5-5-5-1%200-2%200-1-2h-2l-2%201-1%201h-6l-5%201h-3l4-4%204-5-6%204c-3%204-5%205-7%205h-3l3-3c4-4%204-5%201-4l-2%201-2%204c-3%202-4%203-5%202-2-1-2-1-1-3%203-2%202-4%200-2-1%201-2%202-4%201-3%200-3%200%201-4%203-3%206-3%205%201%200%202%201%200%207-5l5-4v-1l1-1%203%201-1%202c-3%204-2%205%201%202%203-4%208-3%205%200l-1%203%204-3c3-4%206-3%204%201%200%203%200%202%204-1%203-3%204-7%201-4-2%202-5%202-5%200l8-9c2%200%203%200%202-1l-5-1-4-1c1-1%207-2%208-1l4-2c4-4%2010-4%207-1l-4%202v1l-2%202-1%201-2%204-2%202%208-7%207-8h15l-1%204-2%206c-2%202-2%203-1%205l3%209%201%201%201%202%201%201%201-8%201-8v4c0%203%200%204%203%205%205%201%205%201%202-4l-3-5-1-1c-1%200-2-2-2-9%200-12%200-12-1-9-2%202-2%203-1%203h1l-1%202-1-1h-1c-3%202-3-1-1-8l-1-3-1-2%202-4v-2c-2-2%201-7%203-6l1-1h-1l-1-3a266%20266%200%200%200%202-17l-1%206c0%205-4%2016-5%2016l-1%202-1%204-1%203c1%202%200%205-3%2010-2%204-3%206-3%204%200-1%200-2-1-1v2c0%202-2%203-2%200-1-2%201-6%203-6v-1l-1-3-1-3c-3%200-2-4%200-5v-1l-1-1v-2l-1-1v-4l-1-4v5c-1%206-3%207-3%201%200-2%200-3-1-2-2%200-2%201%200%204v6l1%204v7c1-1%201%200%201%201v5c1%202%201%202-2%202-2%200-3%200-2-2h-1l-2%201-1-2c-3%201-3-3%200-6l1-2-1-2-2%202c-1%203-1%203-2%201-1-3%201-11%203-12l1-2h-2c-1%201-1%201-1-1a6147%206147%200%200%200%203-7c3%202%203%201%201-2-2-4-2-6%201-8v-1c-1%201-2%200-1-1V6l-2%206-2%204-1%205-1%209-1-4c-1-4-1-5-2-4-2%202-2%204%200%205l1%203%201%201v6l-1%204c-1%201-5-4-5-6l-2%201c-1%202-1%202%201%205l2%203%201%203v2l-3-3c-3-7-7-12-8-12l1%202%201%203%202%203c3%202%203%204%200%204-1-1-2%200-2%201l1%201c1-2%206%201%206%204%201%204%201%205-1%203h-2l-1%202-1-2-2-1-3%201%201%201h2c1%201-3%202-15%202h-12c-1%201-4-3-4-6%200-2%200-2-1-1l-1%202%201%202%202%204-4-2c-1-2-2-3-3-2%200%202-2%201-2-1%200-1%200-2-1-1l-1-1h-2l-3-1c1-2%204-4%205-2l1%201%203%202%202%201-2-3-3-4h18c2-1-1-2-6-2s-5%200-4-2l4-1%203-1%203-2c2%200%202%200%201-1%200-1-2-1-6%201l-7%201c-2-1-3%200%200%202v2c-4%202-13-1-13-5%200-2%207-8%208-7h1l-1-1v-4l4-5c1-2%203-3%203-2l1-1c-1-1%200-3%201-5l2-4-3%203c-2%204-2%204-7%204l-5-1%204%201c5%201%205%202%201%207l-4%205-3%204-4%204-3-3c-4-3-5-8-2-9%203%200%202-2%200-2-2-1-3-3-1-3l1-2-2-1h-3c-4-2-1-4%205-3h6l-5-1-7-1c-3-1-4-2-1-4l3-3%203-1c1%201%202%200%202-1%201-2%200-2-6-2l-9%201h-1c0-1-9-1-10%201h-1c0-2-3-2-60-2L2%201m297%2014l-2%2014v4l-4%208c-5%206-7%2010-3%206l2-1-1%203-1%201-1%202v6a46%2046%200%200%200-2%2011l-1%201-1-1-1-2c-2-1-2-7%201-10l1-3c-1-1-2%200-2%201-1%203-2%202-4-1-3-4-2-5%200-8%203-2%203-2%204%200h1v-3h3c0-3%203-7%204-6v-2c2%200%203%200%203-2h-3l-3%202c0%203-3%206-5%206l-2%202-1-2c1-2%200-3-1-3-1-1-1%200-1%203%201%203-1%207-2%205-2-3-1%203%201%207l2%209v2c1-2%201-1%201%202l-1%207c-1%202-1%202-3%200l-3-2v2c-1%201%200%202%201%202s3%203%202%205l-3%201c-2%200-2%200%200%201l1%201-1%205v4l3-4c3-6%203-6%204-4s1%203-2%207l-3%204%203%202h13l4-1h4l13-1c11%200%2012%200%2011%202h1l4-2c2%200%203%200%202%202h1c1-2%203-2%208-2h8c6-3%207%203%202%2010l-2%204%203%202%203%201h-4c-6%200-8%204-8%2017l1%2011h2c1-1%203%200%204%203%202%205%203%202%203-10s0-12%201-3c0%207%200%209%202%209h2c1-2%203%201%203%204l1%203%201-4c0-3%200-4%201-3h5c6%200%206-1%201-13-6-11-9-14-12-12-2%202-1-30%201-32v-1c-3%201-2%200%202-3l3-5c0-2%200-2-1%200l-3%202-1%201-2%203c-2%202-2%202-2%200%201-4%200-6-2-2l-1%202v-9c2-7%202-11%201-12l-1%201v5c0%202%200%202-2%200-1-2-2%200%200%204%201%204%200%208-2%208v1l1%205-2-1h-1l2%203c3%202%203%203-1%206s-4%203-14%203c-6%200-9%200-8-1%203-2%200-2-3%200l-4%202v-3l1-2v-1l1-2v-1l1-1h1c0-2%202-2%207-2%202%200%202%200%201-1-2-2-2-2-4-1-3%201-3%201-4-1l-2%201h-1c0-3-1-1-2%203%200%203-1%204-3%204s-2%200-2-2c1-3%200-3-2%201-3%203-3%203-2-3%201-4%200-6-1-7s-1-1-1%202v2l-3-2-2-2v5c-1%201-1%201%201%202%204%202%203%204-2%204h-9c-6%201-6%200-2-4l2-3c-2%200-1-5%200-6l2-5c1-4%202-8%205-10l3-5%205-6%201-2-2%202c-2%202-3%201-1-3%203-6%205-8%207-8s2%200%201-1c-2%200-2%200-1-1v-1c-2%201-2%201-2-1v-1l-1%202c0%202-1%202-3%201-1-1-1-1-1%201%201%202%200%203-3%207l-6%204%203-10%202-7%202-8%201-6-1%201-1-2-1-4v4M21%2035c-3%203-3%2014%200%2014l2%201%203%201h4v1l-1%202-1%202v1l2%201%202-1%201-2v-2l-1-2-3-5-4-4%203%202%204%202%201%201%201%202%201-1v-3l1-2c-1-2-3-1-2%201%200%201-2%202-3%200l1-2-2-2c-2-2-2-2-1-3s0-2-2-1l-2-2c-1-1-2-1-4%201m105%206l2%201c2%201%202%201%201%203-1%201-1%202%202%204l2%203-4-2-2-2-2-1-2%201%206%206c4%201%203%2011-1%2011l-1%201-2%203v2l5-3%206-8%204-4-3-2c-2-2-3-2-1-2h5c1%201%201%201%202-1%201-3%200-5-1-3h-2l-3-2c-3-1-3-1-4%201s-1%202-2%200v-3l-1-2c-2-2-4-2-4-1m132%201v1l-1%202c-2%201-1%2014%200%2017h2l1-3c2-2%2010%204%2010%207v1l1%201v2l-1-1c-1-3-3-2-2%202%200%202%200%202-2%202l-2%201h2l3%201-1%201c-2%200-2%201-1%204%202%201%202%201%202-1l2-4%201-2v-1c2-2%202-2%200-6-1-2-2-4-1-5h-1c-2%200-2%200-2-2h-1l-3-2c-2-2-3-3-2-4v-1c-2%200-2-1-1-3v-4l-2-1c0-3%200-3-1-2M138%2062l-6%207c-3%203-3%204-1%204h9v-2l-1-2c0-3%202-3%202%200%200%202%201%202%203%200s2-3%201-4l-2-4c-1-4-2-3-5%201m52-2c-3%200-9%205-7%205l1%201c-2%202%202%201%204-2l4-1-1%201c-3%202-2%203%201%203l4-1%201-2v1c0%201%201%202%203%202l2-2%201-1%201-1c0-2-1-2-4%200h-2l1-2v-1h-9m12%209h-2c0-1-7%200-8%202s-1%202%201%202l4-1c0-2%202-1%202%201%200%201%200%202%202%202l4%201c2%202%202%202%204%200v-4h1c1%201%202%201%204-2l2-3-2%202-3%201-3%201c-2%201-2%201-2-1%201-2-1-3-4-1m53%2013c0%203%204%2010%206%2013%203%202%205%206%205%2010s1%208%202%207l6-1h2l2-1c2%201%201-2%200-4l-5-8-9-17h-5c-4-1-4-1-4%201m32%207c-3%201-7%204-6%205l2-1h1l8%201%208-1%201-1c1%201%202-2%202-3h-16m-108%2020v3l-1%2011v11h-3c-3%200-3%201-4-12v-10c0-10-2%206-2%2019%200%203%200%203-3%203h-3v-12c0-7%200-12-1-11l-1%202v-1l-1-2c-2-1-3-1-3%201h-8c-2%200-2%201-3%207%200%205%200%206%203%207%205%202%203%203-2%201l-6-2-2-1c0-1-5-3-6-2%200%202-2%201-2-1s0-2-2-1c-3%203-2%208%201%2012%201%202%202%203%201%204l-2-1h-1l-1%202-1-1-2-3c-2-2-3-5-1-4%202%202%202-2%200-4s-3-1-3%202l-1%203-1-4c0-1%200-2-1-1l-1-2c0-2-3-5-3-3h-2l-2-1c-2%201-1%205%201%205v4c5-1%206%200%203%202-1%202-3%203-3%202l-1%201c0%202%206%205%2011%205h4l-2%202h-4l-1-1c-1%200-2%203-1%205l-3%201-4-1h-1v2l2%205%201%203v-3c0-2%200-3%203-3l3-1c0-1%201-2%203-1%202%202%203%203%201%203l-1%202v3l2-3%202-2c2%200%201%203%200%204-3%201-3%205-2%205l2%201-4%201-2%201h-1c-2-2-2-2-4-1-2%202-3%203-1%203l5%201c4%201%204%201%203%203l-2%205c-1%204-6%204-5%200%200-3%200-3-1-2h-2c-1-1-3%205-4%2011-1%204-1%204%202%204%203%201%203%201%202%202h-3c-2%200-2%200%200%201v1c-2%200-4%207-2%208v1c-2%200-1%2019%202%2038%204%2019%204%2019%209%2017h3l6%201c2%200%204%200%203-1-2%200-3-10-1-10%201-1%200-1-2-1-4%200-4%200-3-1l3-2%201-3%202-6%202-6c-1-13%200-15%204-10v3c-2%203-1%203%202%201l15-9c2-2%2013-3%2017-2l17%2011c3%202%202%208-1%2012-2%202-2%202-4%201l-4-2-7-3-1%2012v13l6-1%2016-2%209-1%201-45v-43h-24l-24-1h24c24%200%2024%200%2024-2a266%20266%200%200%200-1-44c-2-2-5-3-5-1l-1%201v-1c0-1%200-2-2-1l-2%201h-1c-2-2-7-2-9-1m205%2021v16c-1-1-1-1-1%202l1%204v1l-1%201c1%201-1%205-2%205l-1-1-1-4v-3c2-1%202-2%200-3l-3-4h-1c-1%201-3%202-5%201-2%200-2%200-1%201%202%201%200%203-3%203-2%200-2%200%202%203%204%202%209%202%208-1v-2c2%200%201%205%200%206l-8%201h-5l3%201%201%201-2%201c-1%200-2%201-2%2015%200%2019-1%2021-1%203l-1-13-1%201h-5c-2%200-1%201%202%204%202%202%202%203%202%2016s0%2014%202%2014%202%201%202%207c0%209-1%2010-6%208h-4c-1%201-1-10-1-25%200-23-1-29-2-25h-6l2%201c3%200%204%204%204%2011l-1%2014c0%2011-2%2012-2%202%200-4%200-7-1-6h-2c-1-1-1%200-1%205l-1%208%201%202c1%200%202%200%201%201l1%201c1-1%201%200%201%204%200%203-1%205-2%205-2%200-2%200-2-2v-2l-1-4c0-6-2-5-3%200%200%204-1%205-2%201%200-5%200-5-2-5s-2%201-2%206c0%206%202%208%205%205h2l2%201-3%201c-7%201-7%201-7-7%200-5%200-7%202-7l1-13c-1-13-1-13%202-16l3-2v15l1%2016v-37l-1%201h-1l-2-1c-5%200-5-1-6-17%200-8%200-12%201-9l1%206%201-1c0-2%203-2%204%200%203%204%204%202%204-9v-11l-4%205c-3%206-4%206-4%204s-1-3-3-3l-3-1h-1l-8%201h-21l-4%201-2-1h-1c-2%202-6%201-5-1h-2l-4%202c-1%200-2%200-1-2h-1c-3%203-6%203-8%201l-2-2v3l1%204v1l-1%201h1c3-1%204-1%204%202v3l1%201h1v1c1-1%201-1%200%200l1%201%202%201%203%202c2%201%201%201-2%201l-7-2c-3-3-4-3-4-1v10l1%202c-2%203%202%205%2015%206l14%202%201%2028v28l-4%201c-3%201-3%201%2010%201%2030%200%2028%200%2029-2%200-2%202-3%203-1s2%201%201-2v-2l1%202%201%203%2012-1h49v-26l-1-25c-1%200-2-1-2-3s0-2-1%200-1%201-1-3c-1-4-4-4-5%200-2%204-2%202-3-14l-1-17-1-9v-9l-1%2018M33%20120l-1%205c-2%200-1%205%201%206%201%200%202%200%202-3%201-2%201-3-1-3-1-1%200-1%202-1l5%202c2%202%202%202-1%201s-3-1-5%205c-1%205-2%205-2%203v-3l-1%203v4h7l10-1c4-2%204-3%201-3l-2-2c0-3%200-3-3-3s-3%200-2-2h3c2%201%203%200%202-3%200-5-1-6-5-3l-3%201%201-1c2-2%201-3-2-3l-4-1c-2-1-2-1-2%202m3%2021c-3%200-4%202-1%202v1c-2%200-3%207-1%207l1-1c-1-1%204-4%206-3l-2%203c-3%203-3%204%202%204%202%200%203%200%202-1l-1-2h2l1-2c0-2%202-1%203%201%200%203%200%203%202%201l3-1v-2c0-2%200-2%201-1%203%202%204%201%205-3%200-2-1-3-4-3-7-2-8-1-5%201l3%203-2-1c-4-3-7-3-9%200l-2%202%202-3v-2h-6m296%203v12h5l3%201c1%201%201%200%201-5v-7h-4l-5-1M37%20163l-1%205v2c-1%203%200%205%203%203s3-1%201%203c-1%203-1%203-1%201s0-2-2-1c-1%201-1%2017%201%2019v5l1%205%201%202v8l1%207%201%209v13c-1%205-1%208%202%208l1-12v-13h10v-10c0-9%200-10-2-13l-4-2-4-3-5-4-1-2%204%202c4%203%204%203%204-3%200-7-1-8-3-7h-2c0-2%202-3%205-3l3-2-3-1h-4l1-1v-4c-1-4-1-5%202-7l2-4h-1l-1%201h-1c-1%202-2%202-3%201l-3%201c-2%203-3%202%200-2%201-2%200-3-2-1m100%205l1%208v7h7v-8c0-5%200-8-1-7h-7m170%202l-1%202c1%204%200%2010-1%2010l-2%201%201%201%202%201c2%200%202-1%202-6l1%207%201%2013%202-5%201-4v4c0%205%202%203%202-2s2-3%202%202c0%206%202%205%202-2l1-5v6l1%206%203-3c0-2%201-2%202-2s2-3%202-12c0-7%200-11-1-10l-1%202-1-2c1-1%200-2-1-2l-1%209c0%208%200%208-1%202%200-9-1-10-2-9v3l-1-1-4-1c-3-1-3%200-3%202%200%203%200%203-1%200-1-5-2-6-4-5m-30%207c0%206%200%207-5%206-1%200-2%2019-1%2020h7v-16l-1-17v7m8-5c2%200%202%201%202%206%200%206%200%206-3%206-2%200-3-1-3-2-1-1-1%204-1%2010l1%2011%201-1%203-1%203%201v-31h-3c-2%200-2%200%200%201m-124%2020v10h8v-21h-8v11m10%200v10h7v-21h-7v11m-25%2034c-2%202-2%203-3%2014v13h9c1-1%201-1-1-1s-2%200-2-12c0-14-1-16-3-14m161%2012v9l-6%201-6%201-1%201h-3c-2%201-2%202%205%208l7%208%2049%201h48v-16c0-15%200-17-2-17a1587%201587%200%200%200-83%2010l-1-2v2l-2%202c-3%200-3%200-3-8l-1-8-1%208'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.5,src:"/renome/static/d0e24fa97962efe136c22fa7eb8b0901/9a1e6/house2.png",srcSet:"/renome/static/d0e24fa97962efe136c22fa7eb8b0901/ed021/house2.png 200w,\n/renome/static/d0e24fa97962efe136c22fa7eb8b0901/4e842/house2.png 400w,\n/renome/static/d0e24fa97962efe136c22fa7eb8b0901/9a1e6/house2.png 450w",srcWebp:"/renome/static/d0e24fa97962efe136c22fa7eb8b0901/038bc/house2.webp",srcSetWebp:"/renome/static/d0e24fa97962efe136c22fa7eb8b0901/bc926/house2.webp 200w,\n/renome/static/d0e24fa97962efe136c22fa7eb8b0901/14fee/house2.webp 400w,\n/renome/static/d0e24fa97962efe136c22fa7eb8b0901/038bc/house2.webp 450w",sizes:"(max-width: 450px) 100vw, 450px"}}}},{node:{id:"7f9f4756-10f6-5cb8-ae09-a7ae662ef98c",name:"homemade pizza",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='229'%3e%3cpath%20d='M0%2021v20h2c4-1%205%200%204%203s0%206%201%205c2-1%205%2014%204%2016s-1%202%201%202c1-1%202-1%202%201l2%202%201%201v2l1%202%202%2013v2l1%201c2%200%202%200%201%202-1%201-1%201%201%201l2%201%201%206c1%203%200%204-1%206v1l4%206c3%206%203%206%201%2014l-2%204c-3%203-2%203%201%200l4-2%201-1%202-1c2%200%202%200%201%202v2l2%205%202%206%201%203%201%202v2l2%204c2%202%203%206%203%209l2%205%203%206%201%202v3c0%203%200%203%202%203%202-1%203%201%203%207%200%203%200%203%201%202h1l1-1c1-1%201-1%201%201-1%202%201%205%202%203%202-2%203%200%204%204%200%204%200%204%202%202%201-1%201-1%202%202%202%203%202%204%200%204-3%200-4%202-1%202l4%204%202%203c1-2%202%200%202%203s0%204%202%201h2l-2%203-2%202h2c1-2%202-2%202-1l-2%203-2%203%203-2%203-2%202%202c1%202%202%202%2024%202h24l-3-2c-4-3-6-7-6-10l-1-4c-1-1-2-2-1-3v-3l1-1%201-2-1-3-1-5-2-6c-1-1-1-1-1%203%200%203%200%204-2%204l-2%202-1%201-1-1-1-2c-3%200-8-9-8-13s-2-9-5-11c-3-3-3-3-7%201-3%203-3%203-6%201-4-2-7-5-7-7l-2-4-3-4-1-2c-2-2-1-7%202-9%202-2%209-3%209-2l6-2c2-1%202-3%203-11l2-14c2-5%202-5%200-8l-3-2-1%202v7c-2%203-2%206%200%206h1c0%201-4%205-6%205-2%201-2%201-1-1s1-2%202-1c0%201%201%201%201-1v-2l-1-2c0-2%200-2-2-1l-3%203c0%203-2%202-3%200s0-3%201-4%201-2-1-2c-2-1-3-5-1-10%201-2%201-2-1-3-1-2-1-4%202-4l1-1h-1l-1-1%202-1h1l3-3c2-1%201-1-5-4l-7-5h-1l-1-1v-1c2%200%202-1%202-3%200-4%201-5%203-4%202%202%2010-1%2010-4l2-3v-3l-2-1-1-3%201-1c1%201%201%200%201-1l2-5c3-2%203-4-1-4-2%200-2%200-1%201%202%201%202%202-1%204l-2%201c1-3%200-8-1-8l-1%204-1%203c-1%201-1%204%201%207l-1%202-2-1-1-1h-2l-2-1c-2%200-3-2-1-5%201-3%201-3-1-4l-1-1-1-4c-2-3-1-5%200-3v-1l4-4%203-3c0-3%207-8%207-7%201%202%203%202%205%201h4c2%201%201%202%200%203-2%201-2%208%200%207l1%201c0%202%206%207%207%207%201-1%204%206%204%208l2%201c2%200%204-2%203-4l1-2%207-1h5v7l1%201v1h2l1-6c-1-6-3-12-6-12-3-1-3-6-1-8v-2h-1c0%202-3%201-4-1l-5-6c-3-3-3-3-3-1%201%202%201%203-1%203-3%201-3-2%200-5%202-2%203-9%201-10-1-1%200-4%202-4V8l-1-2%202%201h1c0-2%201-2%202-2h1l3-1%203-3c0-1-22-2-24%200l1%201v2c-3%202-5%203-3%201V2c3-5-2-1-8%204a1158%201158%200%200%201-22%2018C89%203%2092%200%2089%200l-4%202-2%201-4%202-5%204-1%201c0%201-5%206-6%205v1c1%201-4%205-5%204v1l-1%201c-1-1-1-1%200%200l-1%201c-1-1-1-1%200%200l-1%201h-1c1%200%200%202-2%203l-5%204a581%20581%200%200%201-13%208A575%20575%200%200%201%2072%206c0-2%201-2%204-2V3c-1-1-1-1%201-1h3c1-2%201-2-4-2-4%200-5%201-11%205l-7%205c0-1%202-3%206-5l5-5H0v21M166%201c-2%201-2%201%200%201%201%201%202%202%202%206-1%203%200%206%202%208l2%204%202-3%202-4%203-1%203-2h-1c-2%202-3-1-1-3s5%200%205%203l2%203%202%202-1%201h4l2%202h1l4%202c4%200%204%200%204%203l1%203h3c3-2%203-1%202%203v4l1%201v4l1%202c1%201%202%202%201%203l1%203v6l-1%202c1%202-1%204-3%204s-2%200%200%203l3%205%201%202%201-1%202-2%201-1%202-2%201%202-1%202c-3%200-2%203%201%206l2%204c0%203%2011%2010%2014%208%201-1%201-1-2-1l-3-2-2-3-2-2%202-1c4%200%205-2%201-5-3-3-3-3-1-5%203-2%203-3%200-3-4%201-4%200-2-3%203-4%204-4%207%203%203%206%204%2016%202%2016v3l2%202v2h1c4-6%207-8%208-8l1%202c0%202%200%202%202%202s2%200%201%202v1c2%200%202%201%202%202-1%201%200%202%201%203l1%202v3l1%202v6c0%202%201%202%203%201s2-1%202%201l3%203%205%204%204%203v2l-1%202c1%202%200%202-1%202s-2%200-1%201l-1%203v1l1%203c-1%202%200%203%201%203l2-2c0-4%204-12%206-10%202%201%201%202-1%202h-1l2%201c2%200%203%203%202%204-2%200-2%201-1%202s1%201-1%202v2c2%201%200%203-2%203s-2%200-1%201l2%203h1l2%202c1%202%201%202-1%202l-2%202-2%202v3c0%202%200%202%203%201%207-4%207-4%209%202v5c-2%202-2%206%200%208s2%202%200%202c-4%200%201%2010%208%2015l2%204%202%207v4l-2%206c0%202-3%205-5%205l-2%202c-1%202-3%202-4%202-2-1-3-1-3%201l-1%203-1-1c0-3-2-3-4-1s-2%203%200%203c2%201%202%201%201%202l-4-1c-2-2-4%202-2%205%202%201%200%203-2%203l-1%201%209%201h9l8-8a3579%203579%200%200%200%2016-13c1%201%201%201%200%200l-1%201c1%200-2%204-7%208l-9%209-2%203h107v-95l-3%203-6%2011-1%201-2%202-5%209-3%207-1%202-2-1c0-2%209-23%2018-41l5-10V0h-79l1%203c0%204-1%204-2%200l-1-3h-21c-13%200-20%200-19%201l-1%201-1-1a1397%201397%200%200%200-111%200m-63%2031l-2%201c-2-1-2-1-2%201%200%201%200%202-1%201l-1%201v1c-2%200-1%203%201%204%202%200%202%200%201%202-1%201-1%201%203%203l2%202%202%202%201%201%201%201%201-1c1-1-4-12-6-14v-3c2%201%203%200%202-2%200-2-2-2-2%200m45%200c-3%201-3%203-1%205v2l-1%202h1l1-1h2c1-1%201-1%201%201l-1%203-1%202-1-1h-1v7l2-2c0-2%202-2%204-2l2-5c2%200%203-4%202-6l-1-4h-2l-3-1h-3m33%2036l-1%204v2l-2%204c-3%203-2%206%201%205%202%200%202%200%201%201l-1%202-2%202c-1%202-1%203%201%205l2%203v3l2%202%201-2%202-1c0%201%201%202%202%201%202-1%201%205-1%208l-1%203c2%200%203%205%202%208l-1%202c2%200%202%203%200%208l-2%205-2%203v2c1%201%202%200%202-1l2-2%203-2h2l1%201v-3c2%201%204-2%202-3v-3l-1-3-1-2%201-4%201-5%201-2%201-1%201%202c0%202%200%202%201%201v-4c-1-1-2-2-1-3%202-2%201-5%200-4l-2-1%202-1c2%200%203-3%201-4l-1-7%201-2v-4l-1-2-1-1-2-1-1-1c-1%201-4%200-3-1%201-2-1-6-3-6l-2%201-1%201v-4l-1-3c-2%200-2%201-2%204m-17%206v2l-2%201-2-1-1-1c-2%201%201%206%203%205%203%200%204%203%202%205l-1%203-1%202c-1%200-4-3-4-5h-1c-2%202-2%203%200%203l1%202c-1%202-1%202%205%201%206-2%2010-8%205-8v-5l-1-3c0-2-2-3-3-1M56%2081c-4%205-6%2010-4%2012%202%204%203%2011%204%2017%200%2014%202%2016%2011%2017l5%202%202%201c2%200%202-1%202-2-1-2%202-6%204-6l1-1-1-1c-2%201-5-5-3-6v-2c-1-2-2-3-3-2-3%201%200-9%204-11l1-2-2%201c-2%201-3%202-5%201h-4l-1%201v-1l-2-1c-3%200-4-6-1-9v-2c-2%200-3-3-1-4l-3-4-4%202m40%204l-1%201-1%205-1%205c-2%200-2%201-1%203%200%202%201%202%202%201h4l2%201c0%204%209%207%2011%204l3-2%202-3%202-4c1-1%201-1-1-5l-4-4-1-1h-2c-2%200-2%201-2%203s0%203%202%203v3c-2%202-3%202-3%201%200-2-2-3-3-1%200%202-2%200-2-2s0-2-1-1l-3%202c-1-1-1-2%201-5%202-2%202-3%201-3l-2-1-2-1v1m8%2027c-1%201-1%2015%201%2015l2-1v-2l3-4%203-2%203%205c3%204%203%204%201%205-2%202-2%202-3%201v-2l-1-3c-1-2-2-3-3-2l-2%202%201%201c2-2%203%200%202%202v2l2%202h-2v2c2%202%202%203-4%204-4%200-6-1-6-7v-2l-1%203c-1%205-1%2010%201%209l1%202%201%204%202%202%202%202c3%201%203%201%203-3%200-3%200-4%201-3l1-2v-2h2l2-1%202-2c1%200%201%201-3%205-2%202-2%202%200%202%202%201%204%200%204-2s0-2%202%200c3%203%203%204%200%204-1-1-2%200-2%201h-3c-4-4-4-1-1%202l4%204%201-3c1-3%202-2%201%202-1%205-1%205%202%205l2%201%203-1c2-3%202-3%204-2%201%201%202%200%200-2-1-1%201-7%203-11%201-2-1-4-3-4v-1c1%200%201-1-1-2-2-2-3-5-1-3l1-1-1-1c-3%200-3-2%200-2%204%200%205-1%204-3l1-2h1l-3-1c-2%201-4%200-5-1l-5-1-5-3c-2-2-3-3-4-2h-1v-2l1-1h-10m149%201c0%202-3%205-7%208-3%202-4%203-2%203s3%203%202%204l-2%205c2%200%206-6%205-7%200-2%205-5%208-5l1-1h1l1-1-1-2-1-1c0-2-3-5-4-5l-1%202m39%2016h-3l-3%201h-2c-1-1-1-1-1%203%201%204%201%204-1%204-2-1-2-1%200%201l3%204c0%204%209%207%2010%203%201-1%201-1%201%201l-1%202v4c1%205%203%207%203%202-1-4%200-4%202%200l4%2012v2c1%202%202%205%200%205-5%201-8%2010-3%2012l3%202%201%203h1c1-1%202-1%202%201%201%202%200%203-3%205l-3%204c0%202%203%201%205-1l4-3%201-2%201-2%201-2%201-3%201-8v-8c0-7-2-14-4-15s-5-1-5%201h-3c-1-2-1-2%202-3s3-5-1-4l-2-1%201-1%201-2v-7l-3-9-3-1c-2-2-5-2-7%200m-118%2011c-3%201-4%202-3%206l-1%201-2%202c-2%205-2%205-5%204h-3l-1%201v-1l-1-2c-2%200-6%205-6%207h-1v-5c2-2%202-3%201-5v-3c1-1-3-4-4-4-2%200-2%201-1%202l-1%202c-2%200-3%202-4%206%200%203%200%203%201%202%202-1%204%201%204%204%200%202-6%204-6%202h-3v6h1c2-1%202-1%203%201%201%201%201%201%201-1l2-1%202-1%205-1-2%201v5c-2%200-5%203-5%204v2c-3%202-6-2-4-5%201-2%200-3-3-1-3%201-3%202-2%203h2l1%201c0%202-2%201-5-1l-2-2-2%202c-2%203-2%203%200%206%201%201%200%204-2%202l-1%201-1%201-2%202c0%201%202%202%202%200%201-1%209%200%2013%201%201%201%202%202%202%205%201%202%201%203%202%202h8l5-1h6l1-1-6-1c-6%200-6%200-3-6%203-4%205-4%2010-2%202%201%205-1%204-3l-3-4-3-3c-3%200-3-2%200-3%204%200%207-4%206-6l1-3%202-3c0-3%203-4%205-1%202%202%202%202%204%201s5%200%205%201l2%201c2%200%201-2-1-3l-1-1v-1c-2%201-5-1-5-3l-2-1-2-2%202-2c2%200%203-1%201-3l-5-1m38%206c0%202%200%202-2%201h-6c-1%202-1%202%203%201h4l-1%202c-1%202-2%203-1%204v4c-1%202-4-1-4-4s0-3-2-3l-2-2-1-1-1%208v3c1%203%202%205%202%203s0-2%202%200l2%204c-1%202%202%202%206%200%202-1%202-2%202-5l2-2v1l2%201%201%201%202%201c2%200%203%201%202%203-1%201-1%201%201%201%204-2%205-3%201-6l-3-4h-1c-2%202-4%201-4-2%200-1%200-2-1-1l-1-3c0-4-2-9-2-5m32%2022v2c1%201%201%201-1%203l-2%202%203%201%201%203%201%201c4-2%201%201-3%204l-1%203-1%205c-2%203-2%2011%200%209l1%201-1%202%201%201%204%201c3-1%205%201%203%203-1%203-1%203%201%202%202%200%202-1%201-3%200-2%200-3%202-4v-4c-1-1-1-1-1%201%200%204-1%201-2-4l2-6v-2c-2-2%201-5%205-4%203%200%203%200%203-2-1-3%202-4%204-2h5l3-1h-1l-1-2%201-2c2-1%201-4-1-4h-3c-1%201-2%201-3-1-4-4-11-5-9-1l-2%201-1-1c1-1-3-3-6-4l-2%202m-54%2013v2l-2%204-2%204-1%202c-2%201-2%206%200%206v3c-3%203-2%206%201%207l2%204c0%202%200%202%203%202%204-1%208%200%209%202l1%201%201%201h1l2-2c3%200%204-2%203-4-1-1-1-1-1%201h-1v-3l-2-1c-2%200-6-5-6-6%201-2%203-2%205%201%202%204%203%204%205%200v-9c-1-2-1-2-5%200l-4%203v-3h1c0%203%202-1%202-4l1-5-3-1-4-1h-1c-2%201-2%200-2-4%200-2-1-2-3%200m-28%2041v4c-1%203-1%203%208%203h9l-3-4c-5-5-13-8-14-3'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.75,src:"/renome/static/c05f95176a0a1806df7fb0e024dedb1d/e8606/homemade%20pizza.png",srcSet:"/renome/static/c05f95176a0a1806df7fb0e024dedb1d/ed021/homemade%20pizza.png 200w,\n/renome/static/c05f95176a0a1806df7fb0e024dedb1d/4e842/homemade%20pizza.png 400w,\n/renome/static/c05f95176a0a1806df7fb0e024dedb1d/e8606/homemade%20pizza.png 700w",srcWebp:"/renome/static/c05f95176a0a1806df7fb0e024dedb1d/93ec8/homemade%20pizza.webp",srcSetWebp:"/renome/static/c05f95176a0a1806df7fb0e024dedb1d/bc926/homemade%20pizza.webp 200w,\n/renome/static/c05f95176a0a1806df7fb0e024dedb1d/14fee/homemade%20pizza.webp 400w,\n/renome/static/c05f95176a0a1806df7fb0e024dedb1d/93ec8/homemade%20pizza.webp 700w",sizes:"(max-width: 700px) 100vw, 700px"}}}},{node:{id:"c9e797a2-8572-5654-8741-0efd027479db",name:"home",childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='177'%3e%3cpath%20d='M0%2089v88h33a193%20193%200%200%200%2034-1h3l3%201v-2c-2-2-1-5%201-5l3-1c1-2%201%201-1%206%200%203%204%203%208%200%203-2%204-3%201-3v-2c1-1%203-1%205%201%203%201%203%201%202%202-2%200-2%201-1%202%201%202%201%202%202%200l1-2%201-1v-5c-2-6-2-6-6-2l-6%203c-5%200-6-2-6-8s-1-10-3-10v1c0%202%200%202-1%201l-1-2-1-1-2%203c-1%203-1%203%201%204s2%201%200%201-4-2-3-5l-1-2-1-1%202-1%202-1-2-2-1-1h3c1%200%204-2%204-4s2-3%202-1c0%201%201%201%201-1%201-2%201-3-2-6-4-5-9-10-9-8%201%203-1%209-5%2014l-3%205-1%202v-1l-1-2c-2%200-2%202%200%204%201%201%201%201%203-1h2l2%201%201%201h-2c-2%200-5%206-4%206a239%20239%200%200%200%207%205h-1c-1-1-2-1-4%201h-3l1-1v-2l-4%203c-2%203-5%204-7%202v-1l1-2c1-2-1-3-1-1l-3%202c-3%200-3%200%200-2%204-3%205-4%203-7v-2l-2-3c-5-4-4-8%202-8%203%200%203%200%201-1-2%200-2-2%201-2%201%200%202%200%201-1l1-1c1%201%201%200%201-2l1-1%201-1-1-1h-2l-2-1c-3%201-7-3-6-5%201-1%200-3-2-3-4%202-3-5%201-10%203-4%2013-6%2015-2%201%201%201%201%201-1s-3-3-10-4c-5-1-6-3-4-7%203-6%204-6%2015-5%209%200%2010%200%2012%203l4%203c1-2-8-11-11-12-3%200-3-1-3-2%201-5%2011-13%2016-11h4v1c-1%201-1%201%201%201h1v1l4-1-1-1c-4-3%200-2%206%200%203%202%205%202%206%201s24-1%2030%201c2%200%202%200%201-2l-2-2c0-2-5-4-9-3-2%200-2%200-1-1h-1c-2%200-2%200-1-1s-4-4-6-3l-11-8-4-2c-1%201-5-1-7-4l-7-3c-3-1-1-2%202-2%205%201%2014%205%2013%206%200%201%202%203%209%206h1v-1l1%202h1c2%200%202%200%201%201v1c2-1%206%200%208%202l5%203%209%205c4%203%208%204%2012%204%2011%202%2020%207%2022%2013%200%202%203%204%2019%2014%2076%2044%2073%2042%2071%2046h-5l-4-2c1%201%200%203-1%204l-1%203-11-5a5129%205129%200%200%201-44-21v3c0%202%200%203%204%202h4l-2%202-3%202-11%205c-1%202-3%201-6-2-2-3-3-1-1%203%202%206%201%206-2%206l-3-2c-1-2-9-4-11-2-4%201-8-2-8-6%200-2%200-2-5%203s-6%207-4%207%203%200%203%203l-1%203-1%204c-1%205-6%207-6%202l-2-1-1-2c0-3-1-3-4%200-3%202-3%202-1%204v5c1%201%201%201-1%203l-2%203-1%201c-1%200-2-1-1-2%200-2-5-4-5-1l-6%201h-4l2%202c2%202%203%204%202%205%200%203%200%203%202%203l3-1c0-2%207-2%208%200%202%202%203%201%203-1-1-3%201-5%205-9%204-2%205-1%202%204-3%204-4%207-2%207l2-3%203-4%202-1c1-3%203%200%203%204v4h9l-2-2-4-8c-1-5-1-5%202-9s5-5%206-1l2%202%203%204%204%204%201%203c0%202%201%203%203%201h1l3%201c3%200%205%201%203%204-1%201%2013%201%20114%201h115V0h-32c-32%200-33%200-33%202l-2%202v1c1%202-3%2011-6%2014l-11%2016c-13%2019-42%2032-71%2030-21%200-37-6-54-20-10-8-13-10-7-4l2%204%205%205c7%206%206%206-2%201-9-6-16-14-27-32h-1l6%2011%206%2012-2-2-11-16c-2%200-1%203%200%204l7%2012%2011%2017c7%208%206%208-2%201a87%2087%200%200%201-25-54V0h-44l-6%203c-15%209-36%209-50%200l-5-3H0v89M167%201l5%2012c2%202%2011%200%2011-3h-1c-1%201-1%201-2-1V7l1-1V2c0-2-14-3-14-1m145%202l-2%202c-2-2-3%202-2%204s1%202-2%201l-3%201-1%201c-1%201%201%201%204%201%204-1%206-1%2010-5%207-6%208-10%202-7l-3%201c1-1%200-2-1-2l-2%203m-31%200c-3%202-11%204-15%203-3-1-4%200-6%202s-2%202-3%200c-2-2-6-3-5%200h-1c-2-2-8-2-6%200h1l1%201v1h1l2%201h3l2%201v2l-1%201%209-4c2-2%203-2%2010-2l9%201V6c1-5%201-6-1-3m3%205c-2%204%204%209%2010%208%202%200%202%200%200-2l-2-2%202%201c2%200%202%200%203-2l2-2V8h-3l-6-1c-3-3-5-2-6%201m23%2012l-7%202h-5v5l-1%206-2%203c0%202-7%2010-10%2011-5%202-5%204%200%203%2010-1%2014-3%2013-6v-2l1-3c1-1%202-3%201-5%200-3%204-8%2011-13%204-2%205-4%203-4l-4%203m-81%202v1c-1-1-1%200-2%203l-7%205c-8%205-12%206-21%203l-7-7-4-6-2%202c-3%203-2%205%204%2011%205%205%207%207%2013%209l8%205c1%202%201%202%203%200h2l1%201v-2h1c1%202%201%200%201-4h2v-1l2-2%202-2c-1-1%200-2%201%200v-1l1-1%201-1c-1-1%200-2%201-3s2-2%201-3l1-1v-1l1-2v-2l-1-1v-1l-1-1-1%202m139%2020c-1%205-2%206-5%206s-5%202-4%205c1%204%206%202%207-1%200-3%201-3%203-3l5-2c2-3%202-3%200-4-3-3-5-3-6-1M198%2057v1l1%201h4v2h2c-1%201%207%205%2014%207%209%203%2031%205%2036%204l4-1h-5a143%20143%200%200%201-56-14m93%208a105%20105%200%200%201-84%208c-5-2-6%201-2%204%2013%2011%2048%2014%2072%206%2013-5%2028-14%2027-18v-2c2-1%201-4-1-4l-12%206m65-4v3l-4%204c-3%203-7%2010-6%2011s10-9%2010-11h3c4%200%206-1%206-5%200-3-7-5-9-2m-43%2021c-1%207%202%2013%2010%2020%205%205%207%205%203%200-4-3-4-5-1-8%204-4%201-12-4-11-1%201-3%200-4-1s-4-2-4%200m-155%208l4%202c2%200%203%201%202%202l-1%206-1%204%2010%204%2010%204%204%202%2023%2012a231%20231%200%200%201%2023%2011l5%202c15%208-12-10-36-23a849%20849%200%200%201-34-22c3%201%203%201%202-1l-6-2-5-2v1m-2%2017l2%202c3%200%201%205-2%2011-2%201-2%202%203%202l6%201c1%201%202-1%201-5l2-3c1-1%201-1-2-3l-10-5m5%2038v2l-1%201v1h1l1%202c-1%202-1%202%201%202v1c-4%202%202%2011%207%2011l2-1%201-3%201%202c0%204%207%204%2011%200%204-5%203-14%200-11h-4c-2%200-3%201-4%203l-2%201c0-2-1-2-2-1-2%200-3-1-2-4l-9-8-1%202'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:2.2588235294117647,src:"/renome/static/209fb101586a815c7143e246403a57e4/94286/home.png",srcSet:"/renome/static/209fb101586a815c7143e246403a57e4/ed021/home.png 200w,\n/renome/static/209fb101586a815c7143e246403a57e4/4e842/home.png 400w,\n/renome/static/209fb101586a815c7143e246403a57e4/94286/home.png 800w,\n/renome/static/209fb101586a815c7143e246403a57e4/d8210/home.png 1200w,\n/renome/static/209fb101586a815c7143e246403a57e4/ab3db/home.png 1600w,\n/renome/static/209fb101586a815c7143e246403a57e4/16145/home.png 1920w",srcWebp:"/renome/static/209fb101586a815c7143e246403a57e4/64c2a/home.webp",srcSetWebp:"/renome/static/209fb101586a815c7143e246403a57e4/bc926/home.webp 200w,\n/renome/static/209fb101586a815c7143e246403a57e4/14fee/home.webp 400w,\n/renome/static/209fb101586a815c7143e246403a57e4/64c2a/home.webp 800w,\n/renome/static/209fb101586a815c7143e246403a57e4/f9d14/home.webp 1200w,\n/renome/static/209fb101586a815c7143e246403a57e4/2e3ee/home.webp 1600w,\n/renome/static/209fb101586a815c7143e246403a57e4/67803/home.webp 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{id:"12eb4c87-252b-5bc7-879a-028b94e360e1",name:"homemadepizza",childImageSharp:null}}]}}}}}]);
//# sourceMappingURL=2-b5a3dd759bebda5abb37.js.map