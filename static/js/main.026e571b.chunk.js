(this["webpackJsonppetite-blog"]=this["webpackJsonppetite-blog"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(15),i=c.n(r),o=(c(22),c(7)),j=c(0),l=function(e){var t=e.blogs,c=e.title;return Object(j.jsxs)("div",{className:"blog-list",children:[Object(j.jsx)("h2",{children:c}),t.map((function(e){return Object(j.jsx)("div",{className:"blog-preview",children:Object(j.jsxs)(o.b,{to:"/blogs/".concat(e.id),children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},a=c(8),b=function(e){var t=Object(n.useState)(null),c=Object(a.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!0),o=Object(a.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(null),d=Object(a.a)(b,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Did not fetch data.");return e.json()})).then((function(e){r(e),l(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(l(!1),u(e.message))})),function(){return t.abort()}}),[e]),{data:s,isPending:j,error:h}},d=function(){var e=b("http://localhost:8000/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(j.jsxs)("div",{className:"home",children:[n&&Object(j.jsx)("div",{children:n}),c&&Object(j.jsx)("div",{children:" Loading..."}),t&&Object(j.jsx)(l,{blogs:t,title:"All Blogs"})]})},h=function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("h1",{children:"The Dojo Blog"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)(o.b,{to:"/",children:"Home"}),Object(j.jsx)(o.b,{to:"/create",children:"New Blog"})]})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),o=i[0],l=i[1],b=Object(n.useState)("mario"),d=Object(a.a)(b,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(a.a)(x,2),f=g[0],p=g[1],v=Object(u.f)();return Object(j.jsxs)("div",{className:"create",children:[Object(j.jsx)("h2",{children:"Add new blog"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:o,author:h};p(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("created blog"),p(!1),v.push("/")}))},children:[Object(j.jsx)("label",{children:"Blog title:"}),Object(j.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{children:"Blog body:"}),Object(j.jsx)("textarea",{required:!0,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("label",{children:"Blog author:"}),Object(j.jsxs)("select",{value:h,onChange:function(e){O(e.target.value)},children:[Object(j.jsx)("option",{value:"mario",children:"mario"}),Object(j.jsx)("option",{value:"yoshi",children:"yoshi"})]}),!f&&Object(j.jsx)("button",{children:"Add Blog"}),f&&Object(j.jsx)("button",{disabled:!0,children:"Adding blog"})]})]})},x=function(){var e=Object(u.g)().id,t=b("https://my-json-server.typicode.com/tonyxsun/Petite-Blog/db"+e),c=t.data,n=t.isPending,s=t.error,r=Object(u.f)();return Object(j.jsxs)("div",{className:"blog-details",children:[n&&Object(j.jsx)("div",{children:" Loading... "}),s&&Object(j.jsxs)("div",{children:[" ",s," "]}),c&&Object(j.jsxs)("article",{children:[Object(j.jsx)("h2",{children:c.title}),Object(j.jsxs)("p",{children:["Written by ",c.author]}),Object(j.jsx)("div",{children:c.body}),Object(j.jsx)("button",{onClick:function(){fetch("https://my-json-server.typicode.com/tonyxsun/Petite-Blog/db"+c.id,{method:"DELETE"}).then((function(){r.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsx)("h2",{children:"Sorry"}),Object(j.jsx)("p",{children:"That page cannot be found."}),Object(j.jsx)(o.b,{to:"/",children:"Back to the homepage..."})]})};var f=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(u.a,{path:"/create",children:Object(j.jsx)(O,{})}),Object(j.jsx)(u.a,{path:"/blogs/:id",children:Object(j.jsx)(x,{})}),Object(j.jsxs)(u.a,{path:"*",children:[Object(j.jsx)(g,{})," "]})]})})]})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.026e571b.chunk.js.map