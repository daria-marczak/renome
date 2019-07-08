(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{202:function(e,t,n){"use strict";n.r(t);n(23),n(101);var a=n(0),r=n.n(a),i=n(207),o=n(6),l=n.n(o),c=n(100),m=n(25),d=n(212),s=n(221),u=n(222),p=n(226),f=(n(287),n(214)),h=n.n(f),g=n(211),y=n(265),v=i.c.div.withConfig({displayName:"ProductReviews__StyledAvatar",componentId:"sc-1dzfje4-0"})(["background:",";width:100px;height:100px;margin-right:20px;"],function(e){return e.theme.lightGray}),w=Object(i.c)(g.g).withConfig({displayName:"ProductReviews__StyledCommentContent",componentId:"sc-1dzfje4-1"})(["font-size:14px;"]),x=i.c.li.withConfig({displayName:"ProductReviews__StyledComment",componentId:"sc-1dzfje4-2"})(["list-style-type:none;margin-top:30px;"]),b=i.c.div.withConfig({displayName:"ProductReviews__StyledCommentAuthor",componentId:"sc-1dzfje4-3"})(["display:flex;flex-direction:column;"]),E=i.c.div.withConfig({displayName:"ProductReviews__StyledMobileComment",componentId:"sc-1dzfje4-4"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media (min-width:1200px){align-items:initial;justify-content:flex-start;}"]),_=i.c.p.withConfig({displayName:"ProductReviews__StyledAuthorParagraph",componentId:"sc-1dzfje4-5"})(["font-weight:600;text-transform:uppercase;@media (min-width:1200px){display:none;margin:0;}"]),C=i.c.p.withConfig({displayName:"ProductReviews__StyledMobileParagraph",componentId:"sc-1dzfje4-6"})(["font-weight:600;text-transform:uppercase;display:none;@media (min-width:1200px){display:flex;margin:0;}"]),S=i.c.p.withConfig({displayName:"ProductReviews__StyledStar",componentId:"sc-1dzfje4-7"})(["color:",";"],function(e){return e.theme.primary}),I=i.c.div.withConfig({displayName:"ProductReviews__StyledReview",componentId:"sc-1dzfje4-8"})(["display:flex;align-items:center;margin-left:auto;"]),P=function(e){var t=e.review;return r.a.createElement(x,null,r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement(v,null),r.a.createElement(C,null,t.author),r.a.createElement(I,null,Array(parseInt(t.stars)).fill(r.a.createElement(S,null,"★")))),r.a.createElement(_,null,t.author),r.a.createElement(w,null,t.content)))};P.propTypes={review:l.a.shape().isRequired};var N=P,R=n(29),j=function(e){return{type:R.a.INVOKE,reviewContent:e}},O=n(223);var k=i.c.form.withConfig({displayName:"ReviewForm__StyledForm",componentId:"mj3mmr-0"})(["font-family:",";display:flex;flex-direction:column;"],function(e){return e.theme.font.family.montserrat}),q=i.c.h2.withConfig({displayName:"ReviewForm__StyledSectionHeader",componentId:"mj3mmr-1"})(["text-transform:uppercase;font-weight:600;font-size:16px;margin-top:20px;"]),F=i.c.div.withConfig({displayName:"ReviewForm__StyledFormWrapper",componentId:"mj3mmr-2"})(["display:flex;width:100%;flex-direction:column;@media (min-width:1200px){flex-direction:row;}"]),z=i.c.input.withConfig({displayName:"ReviewForm__StyledInput",componentId:"mj3mmr-3"})(["border:none;font-family:",";padding:15px 10px;border-bottom:3px solid ",";margin-left:10px;flex:1;"],function(e){return e.theme.font.family.montserrat},function(e){return e.theme.lightGray}),A=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).onSubmit=function(e){var t=n.props.addReview;e.preventDefault(),t(n.state)},n.onChange=function(e){var t;n.setState(((t={})[e.target.name]=e.target.value,t))},n.state={author:"",email:"",rating:1,message:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.state,n=t.author,a=t.email,i=t.rating,o=t.message,l=this.props.isFetching;return r.a.createElement(k,{onSubmit:this.onSubmit},r.a.createElement(q,null,"Leave a review"),r.a.createElement(F,null,r.a.createElement(z,{type:"text",required:!0,placeholder:"Name",value:n,onChange:function(t){return e.onChange(t)},name:"author"}),r.a.createElement(z,{type:"text",required:!0,placeholder:"Email",value:a,onChange:function(t){return e.onChange(t)},name:"email"})),r.a.createElement(z,{type:"number",required:!0,min:1,max:5,value:i,onChange:function(t){return e.onChange(t)},name:"rating"}),r.a.createElement(z,{type:"text",required:!0,placeholder:"Message",value:o,onChange:function(t){return e.onChange(t)},name:"message"}),r.a.createElement(g.a,{type:"submit",disabled:l},l&&r.a.createElement(O.a,null),!l&&"Post review"))},a}(a.Component);A.propTypes={addReview:l.a.func.isRequired,isFetching:l.a.bool};var M=Object(c.b)(function(e){return{comments:e.blog.comments,isFetching:e.shop.fetching.fetchingReviews}},function(e){return Object(m.b)({addReview:j},e)})(A),T=Object(i.c)(g.f).withConfig({displayName:"ProductPage__StyledShopHeading",componentId:"sc-1ximvo1-0"})(["text-transform:lowercase;letter-spacing:0.07em;"]),D=i.c.p.withConfig({displayName:"ProductPage__StyledStar",componentId:"sc-1ximvo1-1"})(["color:",";"],function(e){return e.theme.primary}),B=i.c.div.withConfig({displayName:"ProductPage__StyledReview",componentId:"sc-1ximvo1-2"})(["display:flex;align-items:center;"]),L=Object(i.c)(g.d).withConfig({displayName:"ProductPage__StyledPrice",componentId:"sc-1ximvo1-3"})(["font-size:18px;margin-top:0;"]),H=i.c.form.withConfig({displayName:"ProductPage__StyledForm",componentId:"sc-1ximvo1-4"})(["font-family:",";display:flex;"],function(e){return e.theme.font.family.montserrat}),K=i.c.h2.withConfig({displayName:"ProductPage__StyledSectionHeader",componentId:"sc-1ximvo1-5"})(["text-transform:uppercase;font-weight:600;font-size:16px;margin-top:20px;"]),V=i.c.section.withConfig({displayName:"ProductPage__StyledReviewsSection",componentId:"sc-1ximvo1-6"})(["display:grid;grid-template-columns:1fr;margin:0 auto;width:90%;@media (min-width:1200px){width:55%;}"]),G=i.c.input.withConfig({displayName:"ProductPage__StyledInput",componentId:"sc-1ximvo1-7"})(["border:none;font-family:",";padding:15px 10px;border-bottom:3px solid ",";margin-left:10px;"],function(e){return e.theme.font.family.montserrat},function(e){return e.theme.lightGray}),J=Object(i.c)(h.a).withConfig({displayName:"ProductPage__StyledImage",componentId:"sc-1ximvo1-8"})(["width:300px;height:300px;@media (min-width:1200px){width:400px;height:400px;transform:translateX(320px);}"]),W=function(e){var t=e.photo,n=e.product,i=e.addToCart,o=e.reviews,l=e.isFetching,c=Object(a.useState)(1),m=c[0],d=c[1];return r.a.createElement(g.h,{title:"shop"},r.a.createElement(g.k,null,r.a.createElement(g.b,null,r.a.createElement(J,{fluid:t.childImageSharp.fluid})),r.a.createElement(g.b,{isDescription:!0},r.a.createElement(T,null,n.frontmatter.title),r.a.createElement(B,null,r.a.createElement(g.g,null,n.frontmatter.customers+" customer review"),Array(parseInt(n.frontmatter.stars)).fill(r.a.createElement(D,null,"★"))),r.a.createElement(L,null,n.frontmatter.price),r.a.createElement(g.g,null,n.frontmatter.description),r.a.createElement(H,{onSubmit:function(e){e.preventDefault(),i({quantity:m,itemId:n.frontmatter.id})}},r.a.createElement(G,{type:"number",min:"1","aria-valuemin":1,max:"10","aria-valuemax":10,value:m,"aria-label":"Number of items is "+m,onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement(g.a,{type:"submit","aria-label":"Buy",disabled:l},l&&r.a.createElement(O.a,null),!l&&"Add to cart")))),r.a.createElement(V,null,r.a.createElement(K,null,"Reviews"),o.map(function(e){return r.a.createElement(N,{review:e,key:e.id})}),r.a.createElement(M,null)))};W.propTypes={photo:l.a.shape().isRequired,product:l.a.shape().isRequired,addToCart:l.a.func.isRequired,isFetching:l.a.bool,reviews:l.a.arrayOf(l.a.shape()).isRequired};var X=Object(c.b)(function(e){return{reviews:e.shop.reviews,isFetching:e.cart.fetching.fetchingCart}},function(e){return Object(m.b)({addToCart:y.a},e)})(W),Q=n(227),U=n(224),Y=n(12);n.d(t,"query",function(){return $});var Z=function(e){var t=e.isSnackBarActive,n=e.message,a=e.kind,o=e.closeMessage,l=e.data,c=l.markdownRemark,m=l.allFile,f=l.shopHeader;return r.a.createElement(i.a,{theme:u.a},r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:c.frontmatter.title,keywords:["renome","restaurant","food"]}),r.a.createElement(p.a,{photo:f,section:"shop",title:"order dishes online"}),r.a.createElement(s.a,null),r.a.createElement("main",null,r.a.createElement(X,{product:c,photo:m.edges.find(function(e){return e.node.name.toLowerCase()===c.frontmatter.title.toLowerCase()}).node})),r.a.createElement(Q.a,null),t&&r.a.createElement(U.a,{message:n,isActive:t,type:a,closeMessage:o})))};Z.propTypes={data:l.a.objectOf(l.a.shape()).isRequired,message:l.a.string,kind:l.a.string,closeMessage:l.a.func,isSnackBarActive:l.a.bool};var $="2635499422";t.default=Object(c.b)(function(e){return{kind:e.appData.message.kind,isSnackBarActive:e.appData.isSnackBarActive,message:e.appData.message.content}},function(e){return Object(m.b)({closeMessage:Y.b},e)})(Z)},223:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(207).c.div.withConfig({displayName:"Loader__StyledLoader",componentId:"rb4yfg-0"})(["position:absolute;height:50px;width:inherit;&:before{animation:rotate 0.9s linear infinite both;border:3px solid ",";border-bottom-color:",";border-radius:100%;content:'';height:20px;top:-20%;width:20px;left:43%;position:absolute;will-change:transform;transform-origin:center;}@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"],function(e){return e.theme.white},function(e){return e.theme.primary});t.a=function(){return r.a.createElement(i,{role:"alert","aria-live":"assertive","aria-label":"Content is loading"})}},252:function(e,t,n){"use strict";var a=n(43),r=n(141),i=n(42);e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,l=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,m=void 0===c?n:r(c,n);m>l;)t[l++]=e;return t}},265:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o});var a=n(3),r=function(e){return{type:a.b.INVOKE,couponCode:e}},i=function(e){return{type:a.c.INVOKE,productId:e}},o=function(e){var t=e.quantity,n=e.itemId;return{type:a.a.INVOKE,quantity:t,itemId:n}}},287:function(e,t,n){var a=n(15);a(a.P,"Array",{fill:n(252)}),n(84)("fill")}}]);
//# sourceMappingURL=component---src-templates-shop-template-js-fbd322a77f16b313d779.js.map