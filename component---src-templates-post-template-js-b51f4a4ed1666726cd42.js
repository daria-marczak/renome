(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{201:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(207),r=n(6),l=n.n(r),c=n(100),m=n(25),s=n(212),d=n(221),p=n(222),u=n(226),g=n(227),h=(n(14),n(23),n(101),n(362)),f=n(214),y=n.n(f),w=n(208),x=n(266),b=n(28),_=function(e){var t=e.comment;return{type:b.a.INVOKE,comment:t}},C=function(e){return e.toLocaleDateString("en-GB")},E=n(211),S=n(223);var v=i.c.ul.withConfig({displayName:"BlogComments__StyledCommentSection",componentId:"wbtxto-0"})(["padding-left:0;border-top:2px solid ",";"],function(e){return e.theme.lightGray}),I=i.c.li.withConfig({displayName:"BlogComments__StyledComment",componentId:"wbtxto-1"})(["list-style-type:none;margin-top:10px;"]),P=i.c.div.withConfig({displayName:"BlogComments__StyledCommentAuthor",componentId:"wbtxto-2"})(["display:flex;flex-direction:column;"]),B=i.c.div.withConfig({displayName:"BlogComments__StyledMobileComment",componentId:"wbtxto-3"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media (min-width:1200px){align-items:initial;justify-content:flex-start;}"]),N=i.c.p.withConfig({displayName:"BlogComments__StyledAuthorParagraph",componentId:"wbtxto-4"})(["font-weight:600;text-transform:uppercase;@media (min-width:1200px){display:none;margin:0;}"]),k=i.c.h3.withConfig({displayName:"BlogComments__StyledSectionHeader",componentId:"wbtxto-5"})(["text-transform:uppercase;font-weight:600;font-size:16px;"]),O=i.c.p.withConfig({displayName:"BlogComments__StyledMobileParagraph",componentId:"wbtxto-6"})(["font-weight:600;text-transform:uppercase;display:none;@media (min-width:1200px){display:flex;margin:0;}"]),j=i.c.p.withConfig({displayName:"BlogComments__StyledDate",componentId:"wbtxto-7"})(["font-weight:600;text-transform:uppercase;@media (min-width:1200px){margin-top:0;margin-left:auto;}"]),q=i.c.div.withConfig({displayName:"BlogComments__StyledAvatar",componentId:"wbtxto-8"})(["background:",";width:100px;height:100px;margin-right:20px;"],function(e){return e.theme.lightGray}),A=Object(i.c)(E.g).withConfig({displayName:"BlogComments__StyledCommentContent",componentId:"wbtxto-9"})(["font-size:14px;"]),L=i.c.form.withConfig({displayName:"BlogComments__StyledForm",componentId:"wbtxto-10"})(["border-top:2px solid ",";margin-top:20px;"],function(e){return e.theme.lightGray}),M=i.c.div.withConfig({displayName:"BlogComments__StyledFormWrapper",componentId:"wbtxto-11"})(["display:flex;width:100%;flex-direction:column;@media (min-width:1200px){flex-direction:row;}"]),R=i.c.input.withConfig({displayName:"BlogComments__StyledInput",componentId:"wbtxto-12"})(["border:none;margin-top:20px;border-bottom:2px solid ",";padding:10px 5px;text-transform:uppercase;font-family:",";font-weight:600;width:100%;@media (min-width:1200px){margin-left:10px;width:",";}&:first-of-type{margin-left:0;}"],function(e){return e.theme.lightGray},function(e){return e.theme.font.family.montserrat},function(e){return"Message"===e.placeholder?"100%":"50%"}),D=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).onChange=function(e){var t;n.setState(((t={})[e.target.name]=e.target.value,t))},n.onSubmit=function(e){var t=n.props.createComment;e.preventDefault(),t({comment:n.state})},n.state={author:"",email:"",message:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.state,n=t.author,a=t.email,i=t.message,r=this.props,l=r.comments,c=r.isFetching,m=1!==l.length?l.length+" comments":l.length+" comment";return o.a.createElement(v,null,o.a.createElement(k,null,m),l.map(function(e){return o.a.createElement(I,{key:e.id},o.a.createElement(P,null,o.a.createElement(B,null,o.a.createElement(q,null),o.a.createElement(O,null,e.author),o.a.createElement(j,null,C(e.date))),o.a.createElement(N,null,e.author),o.a.createElement(A,null,e.content)))}),o.a.createElement(L,{onSubmit:this.onSubmit},o.a.createElement(k,null,"Leave a reply"),o.a.createElement(M,null,o.a.createElement(R,{type:"text",required:!0,placeholder:"Name",value:n,onChange:function(t){return e.onChange(t)},name:"author"}),o.a.createElement(R,{type:"email",required:!0,placeholder:"Email",value:a,onChange:function(t){return e.onChange(t)},name:"email"})),o.a.createElement(R,{type:"text",required:!0,placeholder:"Message",value:i,onChange:function(t){return e.onChange(t)},name:"message"}),o.a.createElement(E.a,{type:"submit",disabled:c},c&&o.a.createElement(S.a,null),!c&&"Post comment")))},a}(a.PureComponent);D.propTypes={createComment:l.a.func.isRequired,comments:l.a.arrayOf(l.a.object),isFetching:l.a.bool},D.defaultProps={comments:[],isFetching:!1};var F=Object(c.b)(function(e){return{comments:e.blog.comments,isFetching:e.blog.fetching.fetchingComments}},function(e){return Object(m.b)({createComment:_},e)})(D),T=Object(i.c)(E.d).withConfig({displayName:"BlogPost__StyledBlogDescription",componentId:"sc-1rrhtu7-0"})(["text-transform:uppercase;text-align:center;"]),z=i.c.h2.withConfig({displayName:"BlogPost__StyledBlogTitle",componentId:"sc-1rrhtu7-1"})(["text-transform:uppercase;font-weight:600;text-align:center;"]),G=i.c.h3.withConfig({displayName:"BlogPost__StyledSectionHeader",componentId:"sc-1rrhtu7-2"})(["text-transform:uppercase;font-weight:600;font-size:16px;"]),H=Object(i.c)(E.k).withConfig({displayName:"BlogPost__StyledBlogWrapper",componentId:"sc-1rrhtu7-3"})(["@media (min-width:768px){grid-template-columns:1fr;}@media (min-width:1200px){margin-top:70px;}"]),W=Object(i.c)(E.h).withConfig({displayName:"BlogPost__StyledBlogSection",componentId:"sc-1rrhtu7-4"})(["display:flex;flex-direction:column;justify-content:center;@media (min-width:1200px){flex-direction:row;width:80%;margin:0 auto;margin-bottom:20px;}"]),J=i.c.aside.withConfig({displayName:"BlogPost__StyledAside",componentId:"sc-1rrhtu7-5"})(["margin:0 auto;width:90%;@media (min-width:1200px){margin-top:70px;margin-left:100px;width:50%;}"]),V=i.c.li.withConfig({displayName:"BlogPost__StyledTagLink",componentId:"sc-1rrhtu7-6"})(["text-transform:uppercase;color:",";list-style-type:none;font-weight:600;flex:1;@media (min-width:1200px){width:100px;}"],function(e){return e.theme.gray}),K=i.c.a.withConfig({displayName:"BlogPost__StyledShareLink",componentId:"sc-1rrhtu7-7"})(["text-transform:uppercase;font-weight:600;text-decoration:none;color:",";@media (min-width:1200px){margin-left:auto;}"],function(e){return e.theme.black}),Q=i.c.p.withConfig({displayName:"BlogPost__StyledDate",componentId:"sc-1rrhtu7-8"})(["font-weight:600;color:",";text-align:center;"],function(e){return e.theme.gray}),U=i.c.p.withConfig({displayName:"BlogPost__StyledAuthor",componentId:"sc-1rrhtu7-9"})(["font-weight:600;margin-top:0;@media (min-width:1200px){margin-bottom:0;}"]),X=i.c.div.withConfig({displayName:"BlogPost__StyledPostFooter",componentId:"sc-1rrhtu7-10"})(["display:flex;flex-direction:column;text-align:center;@media (min-width:1200px){flex-direction:row;text-align:left;align-items:center;}"]),Y=Object(i.c)(E.g).withConfig({displayName:"BlogPost__StyledAuthorDescription",componentId:"sc-1rrhtu7-11"})(["font-size:14px;@media (min-width:1200px){margin-top:0;}"]),Z=i.c.div.withConfig({displayName:"BlogPost__AuthorSection",componentId:"sc-1rrhtu7-12"})(["display:flex;flex-direction:column;margin-top:20px;align-items:center;text-align:center;@media (min-width:1200px){flex-direction:row;text-align:left;& > div{margin-left:20px;}}"]),$=i.c.ul.withConfig({displayName:"BlogPost__StyledList",componentId:"sc-1rrhtu7-13"})(["width:100%;padding-left:0;display:flex;@media (min-width:1200px){width:50%;}"]),ee=Object(i.c)(y.a).withConfig({displayName:"BlogPost__StyledImage",componentId:"sc-1rrhtu7-14"})(["width:100px;height:auto;@media (min-width:1200px){width:300px;align-self:baseline;}"]),te=function(e){var t,n=e.post,a=e.post.frontmatter,i=e.allPosts,r=e.photos,l=e.data;return a?o.a.createElement(W,{title:"blog"},o.a.createElement(H,null,o.a.createElement(T,null,a&&a.category),o.a.createElement(z,null,a&&a.title),o.a.createElement(Q,null,a&&a.date),o.a.createElement(y.a,{fluid:r.find(function(e){return e.node.name===a.title.toLowerCase()}).node.childImageSharp.fluid}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),o.a.createElement(X,null,o.a.createElement($,null,a&&a.tags.map(function(e){return o.a.createElement(V,{href:"#",key:e},e)})),o.a.createElement(K,{href:"#"},"Share")),o.a.createElement(Z,null,o.a.createElement(ee,{fluid:l.file.childImageSharp.fluid,alt:""}),o.a.createElement("div",null,o.a.createElement(U,null,a&&a.author),o.a.createElement(Y,null,a&&a.aboutAuthor))),o.a.createElement(F,null)),o.a.createElement(J,null,o.a.createElement("section",{title:"Popular posts"},o.a.createElement(G,null,"Popular posts"),o.a.createElement(x.a,{posts:(t=i,t&&t.filter(function(e){return e.node.frontmatter.isPopular&&"blog"===e.node.frontmatter.type})),photos:r})))):o.a.createElement("div",null)};te.propTypes={post:l.a.shape().isRequired,allPosts:l.a.arrayOf(l.a.shape()).isRequired,data:l.a.shape().isRequired,photos:l.a.arrayOf(l.a.shape()).isRequired};var ne=function(e){return o.a.createElement(w.b,{query:"3128416110",render:function(t){return o.a.createElement(te,Object.assign({data:t},e))},data:h})},ae=n(224),oe=n(12);n.d(t,"query",function(){return re});var ie=function(e){var t=e.isSnackBarActive,n=e.message,a=e.kind,r=e.closeMessage,l=e.data,c=l.markdownRemark,m=l.allMarkdownRemark,h=l.allFile,f=l.blogHeader;return o.a.createElement(i.a,{theme:p.a},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:c.frontmatter.title,keywords:["renome","restaurant","food"]}),o.a.createElement(u.a,{photo:f,section:"blog",title:"news, recipes and much more"}),o.a.createElement(d.a,null),o.a.createElement("main",null,o.a.createElement(ne,{post:"shop"!==c.frontmatter.type&&c,allPosts:m.edges.filter(function(e){return"shop"!==e.node.frontmatter.type}),photos:h.edges})),o.a.createElement(g.a,null),t&&o.a.createElement(ae.a,{message:n,isActive:t,type:a,closeMessage:r})))};ie.propTypes={data:l.a.objectOf(l.a.shape()).isRequired,message:l.a.string,kind:l.a.string,closeMessage:l.a.func,isSnackBarActive:l.a.bool};var re="13301470";t.default=Object(c.b)(function(e){return{kind:e.appData.message.kind,isSnackBarActive:e.appData.isSnackBarActive,message:e.appData.message.content}},function(e){return Object(m.b)({closeMessage:oe.b},e)})(ie)},223:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(207).c.div.withConfig({displayName:"Loader__StyledLoader",componentId:"rb4yfg-0"})(["position:absolute;height:50px;width:inherit;&:before{animation:rotate 0.9s linear infinite both;border:3px solid ",";border-bottom-color:",";border-radius:100%;content:'';height:20px;top:-20%;width:20px;left:43%;position:absolute;will-change:transform;transform-origin:center;}@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"],function(e){return e.theme.white},function(e){return e.theme.primary});t.a=function(){return o.a.createElement(i,{role:"alert","aria-live":"assertive","aria-label":"Content is loading"})}},266:function(e,t,n){"use strict";n(48),n(23),n(101);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),l=n(207),c=n(214),m=n.n(c),s=n(208),d=l.c.article.withConfig({displayName:"PopularPosts__StyledPost",componentId:"i1xb2g-0"})(["display:flex;margin-bottom:30px;"]),p=l.c.h3.withConfig({displayName:"PopularPosts__StyledPostHeading",componentId:"i1xb2g-1"})(["margin:0;"]),u=Object(l.c)(m.a).withConfig({displayName:"PopularPosts__StyledImage",componentId:"i1xb2g-2"})(["width:90px;height:56px;"]),g=l.c.p.withConfig({displayName:"PopularPosts__StyledDate",componentId:"i1xb2g-3"})(["font-weight:600;color:",";"],function(e){return e.theme.gray}),h=l.c.div.withConfig({displayName:"PopularPosts__StyledWrapper",componentId:"i1xb2g-4"})(["font-weight:600;font-size:14px;margin-left:10px;align-self:flex-start;"]),f=Object(l.c)(s.a).withConfig({displayName:"PopularPosts__StyledLink",componentId:"i1xb2g-5"})(["color:",";text-decoration:none;"],function(e){return e.theme.black}),y=function(e){var t=e.posts,n=e.photos;return o.a.createElement(a.Fragment,null,t.map(function(e){return o.a.createElement(d,{key:e.node.id},o.a.createElement(u,{fluid:n.find(function(t){return t.node.name===e.node.frontmatter.title.toLowerCase()}).node.childImageSharp.fluid}),o.a.createElement(h,null,o.a.createElement(p,null,o.a.createElement(f,{to:"/blog/"+e.node.frontmatter.title.split(" ").join("").toLowerCase()},e.node.frontmatter.title)),o.a.createElement(g,null,e.node.frontmatter.date)))}))};y.propTypes={posts:r.a.arrayOf(r.a.shape()).isRequired,photos:r.a.arrayOf(r.a.shape()).isRequired},t.a=y},362:function(e){e.exports={data:{file:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%3e%3cpath%20d='M179%202l-2%201c-2%200-3%203-2%208%200%205%200%205-3%207-4%202-7%207-7%2011l-2%2011-2%207%202%203c2%203%202%203%201%207-1%205%201%2031%203%2034l1%208%202%2010%202%2010%202%208%202%207%202%206%202%204%202%202c1%200%202-3%202-19l3-18c1-5%201-15-2-20-2-2-2-4-1-6l1-6c0-9%200-9%203-10%205-2%206-4%2010-13%205-10%2011-16%2021-19%204-1%205-1%2012%202%2014%206%2015%206%2021%206%207%200%2013%202%2019%206l5%203%2020%208%206%202c4%200%207%204%205%208-2%207-3%2039-1%2049%202%209-1%2013-8%2013l-8%202c-3%202-3%202-6%201-2-2-3-2-5-1-3%203-2%2040%202%2060%202%209%200%2020-3%2022l-2%205c0%202-1%203-3%204-4%201-6%205-6%209%200%203%203%206%205%206%202-1%204-6%203-7v-5c1-4%205-4%206%201l4%206%202%205c-1%202-15%207-25%207l-12%202-2%201%203%202c5%202%2024%204%2028%203%206-2%207-1%204%204-3%204-9%208-14%208l-5%202c-4%203-1%206%209%2010%206%202%208%203%208%206l2%205%202%207c1%206%203%208%207%205l6-4%205-3%207-9c10-12%2013-17%2016-24l6-13%2010-30%204-11%201-4%201-7c3-8%205-23%205-32%200-8-1-9-8-12-6-2-7-4-5-9l2-8%202-22a102%20102%200%200%201%202-24c0-2%201-3%204-3%202%201%205%208%206%2013%202%208%209%2014%2010%208%200-3%203-3%206%200s3%202%203-3c0-4%200-4-2-4-3%200-4-1-1-4l1-4c-1-4%201-7%203-5l1%203c0%202%203%205%205%205v-3c-1-6-1-14%201-19l1-12v-8c2-2%203-9%202-13-1-6%200-13%202-15s1-9-1-10L374%201l-97-1c-86%200-98%200-98%202m52%20132l-5%205c-1%203-7%206-10%206-2%200-7%205-6%206%201%202%205%201%207-1%202-3%208-1%207%203-1%203%202%204%2014%204l11-1c3-2%203-9%200-11-3-3-3-4%201-5s3-3-1-5c-6-3-13-3-18-1m152%2020l-5%209%202%203%203%203%202%206c1%207%204-6%203-15%200-7-1-8-5-6m-9%2014v8l-1%2011c-1%204-1%206%203%206s7-13%205-20c-2-5-5-7-7-5m-47%204c-4%202-4%205%200%208%203%203%203%203%206-1%206-6%202-12-6-7M193%20295c-1%203-1%2013%201%2025%201%207%201%208%208%2015a257%20257%200%200%201%2019%2021l7%208%206%207a1297%201297%200%200%201%2021%2015l4%202c2%200%204%201%205%203%202%202%203%202%205%201%203-1%203-3%200-5l-5-3-7-3c-8-3-25-19-40-37l-9-11c-2-2-7-10-7-13l-3-5-1-11-2-12c-1%200-2%201-2%203m134-1a189%20189%200%200%200-15%2011l-3%202-4%202-3%202c-4%203-26%205-31%202-4-2-4-4%201-5l5-1-1-5c0-6-1-7-5-7s-6%203-7%208l-1%205h-4l-9-2-8-1-3%201%204%202%206%203%2015%206%2013%205-1%206-1%206%202%204%202%203%202-3c2-2%202-2%204%200%202%203%205%203%2015-1%202-1%2010%201%2010%202l-2%201c-4%201-1%203%202%203%2012-3%2015-1%2012%209l-2%206%202%202%201-1%201-2a218%20218%200%200%200%2017-22c3-3%203-3%2010-17%206-10%206-15%203-21-2-5-4-5-7-1-3%206-13%204-15-2%200-3-1-2-5%200m-123%2081c-4%202-12%2011-12%2012l-3%205c-5%208-5%208%202%208h6l-1-3c0-2%200-2%202-2a148%20148%200%200%200%209%204l137%201c0-3-5-12-8-14-10-6-9-6-15-2-8%206-12%208-21%209l-11%203h-6c-3-2-5-2-9-1h-12c-3-2-8-2-11-2-11%202-21-3-32-14-8-8-10-8-15-4'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/renome/static/4b885516610efa2c18eb404096e61238/34c82/author.png",srcSet:"/renome/static/4b885516610efa2c18eb404096e61238/34c82/author.png 100w",srcWebp:"/renome/static/4b885516610efa2c18eb404096e61238/7e254/author.webp",srcSetWebp:"/renome/static/4b885516610efa2c18eb404096e61238/7e254/author.webp 100w",sizes:"(max-width: 100px) 100vw, 100px"}}}}}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-b51f4a4ed1666726cd42.js.map