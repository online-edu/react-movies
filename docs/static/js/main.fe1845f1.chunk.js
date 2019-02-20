(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=(a(65),a(58)),o=a.n(i),s=a(28),m=a.n(s),u=(a(66),function(){return l.a.createElement(m.a,{className:"movie-header",expand:"lg",sticky:"top",role:"banner"},l.a.createElement(m.a.Brand,{tabIndex:"1",href:"#home",className:"movie-header__brand"},"React Movies"))}),d=(a(84),function(e){var t=e.url,a=e.id,n=e.name,r=e.click,c=e.tabIndex;return l.a.createElement("figure",{className:"movie-poster d-flex justify-content-center"},l.a.createElement("img",{className:"movie-poster__image d-flex rounded",alt:n,src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2".concat(t),onClick:function(){return r(a)},onKeyPress:function(){return r(a)},role:"presentation",tabIndex:c}))});d.defaultProps={id:0,name:"movie",click:function(){}};var h=d,b=function(){return l.a.createElement("div",{className:"spinner-border text-primary",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))},g=function(e){var t=e.switchToggle,a=e.id,n=e.tabIndex,r=e.label;return l.a.createElement("div",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input","aria-label":"".concat(r," Checkbox"),id:a,name:a,onChange:t,tabIndex:n}),l.a.createElement("label",{className:"custom-control-label",htmlFor:a,"aria-label":"".concat(r," filter"),"aria-describedby":a},r))},v=a(15),p=a.n(v),f=a(13),E=a.n(f),y=a(11),N=a.n(y),x=function(e){var t=e.aria,a=e.tabIndex,n=e.label,r=e.click;return l.a.createElement("button",Object.assign({type:"button",onClick:r,"aria-label":n,tabIndex:a},t,{className:"btn btn-primary my-2"}),n)},k=function(e){var t=e.show,a=e.onHide,n=e.movie;return l.a.createElement(p.a,{show:t,onHide:a,size:"lg","aria-labelledby":"movie-details",className:"movie-modal",centered:!0},l.a.createElement(p.a.Header,null,l.a.createElement(p.a.Title,{id:"movie-details"},n.title),l.a.createElement(x,{label:"Close",click:a})),l.a.createElement(p.a.Body,null,l.a.createElement(E.a,null,l.a.createElement(N.a,{sm:!0,lg:4},l.a.createElement(h,{name:n.title,url:"".concat(n.poster_path)})),l.a.createElement(N.a,{sm:!0,lg:8},l.a.createElement(E.a,null,l.a.createElement(N.a,{md:12},l.a.createElement("p",{className:"h6 text-primary"},"Overview"),l.a.createElement("p",{className:"mb-0"},l.a.createElement("em",null,n.overview)))),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("dl",{className:"row movie-modal__summary--list"},l.a.createElement("dt",{className:"col-sm-3 text-primary"},"Tagline"),l.a.createElement("dd",{className:"col-sm-9"},n.tagline||"Not available"),l.a.createElement("dt",{className:"col-sm-3 text-primary"},"Rating"),l.a.createElement("dd",{className:"col-sm-9"},n.vote_average),l.a.createElement("dt",{className:"col-sm-3 text-primary"},"Status"),l.a.createElement("dd",{className:"col-sm-9"},n.status),l.a.createElement("dt",{className:"col-sm-3 text-primary"},"Release Date"),l.a.createElement("dd",{className:"col-sm-9"},n.release_date),l.a.createElement("dt",{className:"col-sm-3 text-primary"},"Language"),l.a.createElement("dd",{className:"col-sm-9 text-uppercase"},n.original_language))))))},C=a(17),w=a(55),j=a(18),O=a(20),F=a(19),I=a(14),_=a(21),M=a(7),S=a(56),R=a.n(S),L=a(27),P=a.n(L),T=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(O.a)(this,Object(F.a)(t).call(this,e))).state={open:!1,enLangFilter:!1,adultFilter:!1,ratingFilter:0},a.handleInputChange=a.handleInputChange.bind(Object(M.a)(Object(M.a)(a))),a.onFilterChange=a.onFilterChange.bind(Object(M.a)(Object(M.a)(a))),a}return Object(_.a)(t,e),Object(I.a)(t,null,[{key:"propTypes",get:function(){return{onChange:R.a.func.isRequired}}}]),Object(I.a)(t,[{key:"onFilterChange",value:function(){var e=this.state,t=e.ratingFilter,a=e.enLangFilter,n={vote_average:t,adult:e.adultFilter};(0,this.props.onChange)(a?Object(w.a)({},n,{original_language:"en"}):n)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.type,n=t.name,l="checkbox"===a?t.checked:t.value;this.setState(Object(C.a)({},n,l))}},{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.ratingFilter;return l.a.createElement("div",{className:"bg-secondary px-3 rounded"},l.a.createElement("section",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("h6",{className:"mb-0"},"Popular movies"),l.a.createElement(x,{tabIndex:"2",label:"Filter",aria:{"aria-controls":"movie-filter","aria-expanded":a},click:function(){return e.setState({open:!a})}})),l.a.createElement(P.a,{in:a},l.a.createElement("div",{id:"movie-filter",role:"toolbar","aria-label":"Filter options",className:"border-top border-primary mt-1 py-3 px-1"},l.a.createElement("h6",{className:"text-uppercase"},"Filter options"),l.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"rating-filter","aria-label":"Rating filter","aria-describedby":"rating-filter"},"Rating (\u2265)",l.a.createElement("input",{type:"range",className:"custom-range","aria-label":"Rating range",onChange:this.handleInputChange,name:"ratingFilter",min:"0",max:"10",step:"0.5",value:n,id:"rating-filter",tabIndex:"3"}),l.a.createElement("span",{className:"text-primary position-absolute font-weight-bold ml-2"},n))),l.a.createElement(g,{id:"adultFilter",tabIndex:"4",label:"Adult",switchToggle:this.handleInputChange}),l.a.createElement(g,{id:"enLangFilter",tabIndex:"5",label:"Original Language",switchToggle:this.handleInputChange})),l.a.createElement("div",{className:"mt-1"},l.a.createElement(x,{tabIndex:"6",label:"Apply",click:this.onFilterChange})))))}}]),t}(n.Component),B="?api_key=7985411c015901cd0f030ce010fa69c4",H="https://api.themoviedb.org/3",A=a(57),D=a.n(A),J=function(e,t){return D.a.get(e,t).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})},W=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(O.a)(this,Object(F.a)(t).call(this,e))).state={movies:[],source:[],movie:{},loading:!0,showModal:!1},a.onMovieClick=a.onMovieClick.bind(Object(M.a)(Object(M.a)(a))),a.onModalClose=a.onModalClose.bind(Object(M.a)(Object(M.a)(a))),a.onFilterChange=a.onFilterChange.bind(Object(M.a)(Object(M.a)(a))),a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this;J("".concat(H,"/movie/popular").concat(B)).then(function(e){var t=e.results;return Promise.resolve(t)}).then(function(t){return e.setState({movies:t,source:t})}).catch(function(e){return console.log(e)}).finally(function(){return e.setState({loading:!1})})}},{key:"onMovieClick",value:function(e){var t=this;(function(e){return J("".concat(H,"/movie/").concat(e).concat(B))})(e).then(function(e){return t.setState({showModal:!0,movie:e})}).catch(function(e){return console.log(e)}).finally(function(){return t.setState({loading:!1})})}},{key:"onModalClose",value:function(){this.setState({showModal:!1})}},{key:"onFilterChange",value:function(e){var t=function(e,t){var a=Object.keys(t);return e.filter(function(e){return a.every(function(a){return"vote_average"===a?e[a]>=t[a]:e[a]===t[a]})})}(this.state.source,e);this.setState({movies:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.movies,n=t.loading,r=t.showModal,c=t.movie;return l.a.createElement("section",null,l.a.createElement(T,{onChange:this.onFilterChange}),l.a.createElement(E.a,{className:"justify-content-center"},!n&&a.map(function(t,a){return l.a.createElement(N.a,{className:"my-3",key:t.id},l.a.createElement(h,{id:t.id,alt:t.name,url:t.poster_path,click:e.onMovieClick,tabIndex:a+7}))})||l.a.createElement(b,null)),l.a.createElement(k,{show:r,movie:c,onHide:this.onModalClose}))}}]),t}(n.Component),q=function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(o.a,{fluid:"true",className:"py-4"},l.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){return e.unregister()})},59:function(e,t,a){e.exports=a(133)},65:function(e,t,a){},66:function(e,t,a){},84:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.fe1845f1.chunk.js.map