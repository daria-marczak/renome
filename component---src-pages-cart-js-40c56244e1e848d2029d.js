(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(4),i=e.n(o),c=e(188),u=e(185),l=e(199),m=e(14),p=e.n(m),f=e(179),s=e.n(f),d=e(70),h=e(16),g=e(178),y=e(180),v=e(233),b=(e(94),e(221));function E(){var n=s()(["\n  padding: 15px 0;\n  text-transform: uppercase;\n  font-weight: 600;\n\n  @media (min-width: 1200px) {\n    padding: 20px;\n  }\n"]);return E=function(){return n},n}function x(){var n=s()(["\n  padding: 15px 0;\n  text-transform: capitalize;\n  cursor: ",";\n\n  @media (min-width: 1200px) {\n    padding: 20px;\n  }\n"]);return x=function(){return n},n}function w(){var n=s()(["\n  border-bottom: 1px solid ",";\n  margin-bottom: 5px;\n"]);return w=function(){return n},n}function I(){var n=s()(["\n  font-family: ",";\n  border-collapse: collapse;\n  width: 100%;\n"]);return I=function(){return n},n}function k(){var n=s()(["\n  margin: 0 auto;\n  margin-bottom: 40px;\n  width: 100%;\n"]);return k=function(){return n},n}var O=g.c.article(k()),S=g.c.table(I(),function(n){return n.theme.font.family.montserrat}),C=g.c.tr(w(),function(n){return n.theme.lightGray}),A=g.c.td(x(),function(n){return n.clickable?"pointer":""}),F=g.c.td(E()),T=function(n){var t=n.products,e=n.cartItems,r=n.removeItem;return a.a.createElement(O,null,a.a.createElement(S,null,a.a.createElement("thead",null,a.a.createElement(C,null,a.a.createElement(F,null,"Product"),a.a.createElement(F,null,"Qty"),a.a.createElement(F,null,"Price"),a.a.createElement(F,null,"Total"),a.a.createElement(F,null," "))),a.a.createElement("tbody",null,t.map(function(n){return a.a.createElement(C,{key:n.node.frontmatter.id},a.a.createElement(A,null,n.node.frontmatter.title),a.a.createElement(A,{number:!0},e.find(function(t){return t.productId===n.node.frontmatter.id}).quantity),a.a.createElement(A,null,b.a.format(n.node.frontmatter.price)),a.a.createElement(A,null,b.a.format(e.find(function(t){return t.productId===n.node.frontmatter.id}).quantity*n.node.frontmatter.price)),a.a.createElement(A,{onClick:function(){return r(n.node.frontmatter.id)},clickable:!0},"⮿"))}))))};T.propTypes={products:i.a.arrayOf(i.a.shape()),cartItems:i.a.arrayOf(i.a.shape()),removeItem:i.a.func};var q=T;function j(){var n=s()(["\n  padding: 15px 0;\n  text-transform: capitalize;\n  margin-left: ",";\n"]);return j=function(){return n},n}function P(){var n=s()(["\n  display: flex;\n  border-bottom: 1px solid ",";\n  margin-bottom: 5px;\n"]);return P=function(){return n},n}function D(){var n=s()(["\n  margin: 0 auto;\n  margin-bottom: 40px;\n  width: 100%;\n  font-family: ",";\n\n  @media (min-width: 1200px) {\n    width: 50%;\n    margin-left: 0;\n  }\n"]);return D=function(){return n},n}var R=g.c.article(D(),function(n){return n.theme.font.family.montserrat}),M=g.c.div(P(),function(n){return n.theme.lightGray}),z=g.c.div(j(),function(n){return n.right?"auto":"0"}),B=function(n){var t=function(n,t,e){var r=n.reduce(function(n,e){var r=t.find(function(n){return n.productId===e.node.frontmatter.id}).quantity;return n+e.node.frontmatter.price*r},0);return"FREE"!==e?r:r+=e}(n.products,n.cartItems),e=parseInt(t)>30?0:10;return a.a.createElement(R,null,a.a.createElement(M,null,a.a.createElement(z,null,"Subtotal"),a.a.createElement(z,{right:!0},b.a.format(t))),a.a.createElement(M,null,a.a.createElement(z,null,"Shipping"),a.a.createElement(z,{right:!0},b.a.format(e))),a.a.createElement(M,null,a.a.createElement(z,null,"Total"),a.a.createElement(z,{right:!0},b.a.format(t+e))))};B.propTypes={products:i.a.arrayOf(i.a.shape()),cartItems:i.a.arrayOf(i.a.shape())};var N=B,G=e(183),K=e(196);function V(){var n=s()(["\n  border: none;\n  font-family: ",";\n  padding: 15px 10px;\n  border-bottom: 3px solid ",";\n  width: 100%;\n\n  @media (min-width: 1200px) {\n    width: 50%;\n  }\n"]);return V=function(){return n},n}var H=g.c.input(V(),function(n){return n.theme.font.family.montserrat},function(n){return n.theme.lightGray}),J=function(n){var t=n.onSubmit,e=n.isFetching,o=Object(r.useState)(""),i=o[0],c=o[1],u=function(n){n.preventDefault(),t(i),c("")};return a.a.createElement("form",{onSubmit:function(n){return u(n)}},a.a.createElement(H,{type:"text",placeholder:"Coupon code",value:i,onChange:function(n){return c(n.target.value)},name:"coupon","aria-label":"If you have a coupon code you'd like to use, type it here"}),a.a.createElement(G.a,{type:"submit",disabled:e},e&&a.a.createElement(K.a,null),!e&&"Apply coupon"))};J.propTypes={onSubmit:i.a.func,isFetching:i.a.bool};var U=J;function Q(){var n=s()(["\n  background-color: ",";\n  text-transform: uppercase;\n  color: ",";\n  font-size: ",";\n  transition: background 0.3s ease-in;\n  padding: 20px 20px;\n  border: none;\n  width: 100%;\n  cursor: pointer;\n  margin: 15px 0 20px 0;\n  font-family: ",";\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n\n  @media (min-width: 1200px) {\n    width: auto;\n    align-self: flex-end;\n  }\n"]);return Q=function(){return n},n}function L(){var n=s()(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  margin-bottom: 40px;\n  flex-direction: column;\n"]);return L=function(){return n},n}var W=g.c.div(L()),X=Object(g.c)(y.a)(Q(),function(n){var t=n.isSuccess,e=n.theme;return t?e.primary:"#1e2633"},function(n){return n.theme.white},function(n){return n.theme.font.size.paragraph},function(n){return n.theme.font.family.montserrat}),Y=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))||this).onRemove=function(n){t.props.removeItem(n)},t.onSubmit=function(n){t.props.applyCoupon(n)},t}return p()(t,n),t.prototype.render=function(){var n=this;Object.defineProperty(Array.prototype,"flat",{value:function(n){return void 0===n&&(n=1),this.reduce(function(t,e){return t.concat(Array.isArray(e)&&n>1?e.flat(n-1):e)},[])}});var t=this.props.products.map(function(t){return n.props.allProducts.filter(function(n){return n.node.frontmatter.id===t.productId})}).flat();return a.a.createElement(W,null,a.a.createElement(q,{products:t,cartItems:this.props.products,removeItem:this.onRemove}),a.a.createElement(U,{onSubmit:this.onSubmit,isFetching:this.props.isFetching}),a.a.createElement(N,{products:t,cartItems:this.props.products}),a.a.createElement(X,{to:"/checkout"},"Proceed to checkout"))},t}(r.Component);Y.propTypes={products:i.a.arrayOf(i.a.shape()),allProducts:i.a.arrayOf(i.a.shape()),removeItem:i.a.func,applyCoupon:i.a.func,isFetching:i.a.bool};var Z=Object(d.b)(function(n){return{products:n.cart.cartItems,isFetching:n.cart.fetching.fetchingCoupon}},function(n){return Object(h.b)({applyCoupon:v.b,removeItem:v.c},n)})(Y),$=e(200);e.d(t,"query",function(){return nn});var _=function(n){var t=n.data;return a.a.createElement(c.a,null,a.a.createElement(u.a,{title:"Cart",keywords:["renome","restaurant"]}),a.a.createElement(l.a,{photo:t.menuHeader,section:"your",title:"shopping cart"}),a.a.createElement(Z,{allProducts:t.allMarkdownRemark.edges}),a.a.createElement($.a,null))},nn="1582508998";_.propTypes={data:i.a.shape().isRequired};t.default=_},188:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(70),i=e(16),c=e(4),u=e.n(c),l=e(178),m=e(185),p=e(197),f=e(194),s=e(195),d=e(9),h=function(n){var t=n.children,e=n.message,r=n.kind,o=n.closeMessage,i=n.isSnackBarActive;return a.a.createElement(l.a,{theme:s.a},a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{title:"Home",keywords:["renome","restaurant","food"]}),a.a.createElement(f.a,null),a.a.createElement("main",null,t),i&&a.a.createElement(p.a,{message:e,isActive:i,type:r,closeMessage:o})))};h.propTypes={children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]).isRequired,message:u.a.string,kind:u.a.string,closeMessage:u.a.func,isSnackBarActive:u.a.bool};t.a=Object(o.b)(function(n){return{kind:n.appData.message.kind,isSnackBarActive:n.appData.isSnackBarActive,message:n.appData.message.content}},function(n){return Object(i.b)({closeMessage:d.b},n)})(h)},196:function(n,t,e){"use strict";var r=e(179),a=e.n(r),o=e(0),i=e.n(o);function c(){var n=a()(["\n  position: absolute;\n  height: 50px;\n  width: inherit;\n\n  &:before {\n    animation: rotate 0.9s linear infinite both;\n    border: 3px solid ",";\n    border-bottom-color: ",";\n    border-radius: 100%;\n    content: '';\n    height: 20px;\n    top: -20%;\n    width: 20px;\n    left: 43%;\n    position: absolute;\n    will-change: transform;\n    transform-origin: center;\n  }\n\n  @keyframes rotate {\n    0% {\n      transform: rotate(0deg);\n    }\n\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return c=function(){return n},n}var u=e(178).c.div(c(),function(n){return n.theme.white},function(n){return n.theme.primary});t.a=function(){return i.a.createElement(u,{role:"alert","aria-live":"assertive","aria-label":"Content is loading"})}},221:function(n,t,e){"use strict";var r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});t.a=r},233:function(n,t,e){"use strict";e.d(t,"b",function(){return a}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return i});var r=e(3),a=function(n){return{type:r.b.INVOKE,couponCode:n}},o=function(n){return{type:r.c.INVOKE,productId:n}},i=function(n){var t=n.quantity,e=n.itemId;return{type:r.a.INVOKE,quantity:t,itemId:e}}}}]);
//# sourceMappingURL=component---src-pages-cart-js-40c56244e1e848d2029d.js.map