(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),o=s(13),a=s.n(o),i=s(4),r=s.n(i),l=s(14),m=s(15),d=s(16),j=s(19),u=s(18),h=s(17),v=s.n(h),p=(s(43),s(0));var b=function(e){var t=e.year,s=e.title,n=e.summary,c=e.poster,o=e.genres,a=e.rating,i="http://www.google.com/search?q=".concat(s);return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:c,alt:"poster",title:s}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("a",{href:i,target:"_blank",children:Object(p.jsx)("span",{children:Object(p.jsx)("h3",{className:"movie__title",children:s})})}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("p",{className:"movie__genres",children:o.join(", ")}),Object(p.jsxs)("p",{className:"movie__rating",children:["Rating: ",a,"/10"]}),Object(p.jsx)("p",{className:"movie__summary",children:n})]})]})},g=(s(45),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[],theposition:Object},e.getMovies=Object(l.a)(r.a.mark((function t(){var s,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({isLoading:!1,movies:n});case 5:case"end":return t.stop()}}),t)}))),e.listenToScroll=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);e.setState({theposition:t}),e.handleScroll(e.state.theposition)},e.scrollToTop=function(){window.scroll({top:0,behavior:"smooth"})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies(),window.addEventListener("scroll",this.listenToScroll)}},{key:"handleScroll",value:function(e){e>=.1?document.querySelector(".scrollBtn").classList.add("visible"):document.querySelector(".scrollBtn").classList.remove("visible")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(p.jsxs)("section",{className:"container",children:[Object(p.jsx)("button",{className:"scrollBtn",onClick:this.scrollToTop,children:Object(p.jsx)("span",{children:Object(p.jsx)("i",{className:"fas fa-angle-double-up"})})}),t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(p.jsx)("div",{className:"movies",children:s.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,rating:e.rating},e.id)}))})]})}}]),s}(n.Component));a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a125cc74.chunk.js.map