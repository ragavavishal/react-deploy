(this.webpackJsonpmovie_search=this.webpackJsonpmovie_search||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),l=a.n(c),r=(a(16),a(6)),i=a.n(r),s=a(9),m=a(10),u=a(2),h=a(3),p=a(1),v=a(5),k=a(4),d=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onimgClick=function(){console.log("click",n.state.click),n.setState({click:!n.state.click}),console.log("click",n.state.click)},n.state={click:!1,response:n.props.movieDet},n.onimgClick=n.onimgClick.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){console.log("Component did mount!")}},{key:"shouldComponentUpdate",value:function(e,t){return console.timeLog("should Component Update",e,t),this.state.response.Title!==e.movieDet.Title||this.state.click!==t.click||this.props.featureArray.length!==e.featureArray.length}},{key:"componentDidUpdate",value:function(e,t){console.log("Component did update",e,t)}},{key:"componentWillUnmount",value:function(){console.log("Component will unmount")}},{key:"render",value:function(){var e=this;return console.log(this.props.movieDet.Poster),o.a.createElement("div",{className:"MovieDetails"},o.a.createElement("div",{className:"poster"},o.a.createElement("img",{onClick:this.onimgClick,className:"image",src:this.props.movieDet.Poster,alt:"poster"})),this.state.click&&o.a.createElement("div",{className:"Details"},o.a.createElement("ul",null,this.props.featureArray.map((function(t,a){return o.a.createElement("li",{key:a},o.a.createElement("b",null,t," : "),o.a.createElement("i",null,e.props.movieDet[t]))})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Component will receive props",e,t),t.response.Title===e.movieDet.Title?(console.log(!1),null):t.response.Title!==e.movieDet.Title?(console.log("change in title",t.response.Title,e.movieDet.Title),{click:!1,response:e.movieDet}):void 0}}]),a}(n.Component),g=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onType=function(e){e.preventDefault(),n.setState({value:e.target.value})},n.checkBox=function(e){var t=Object(m.a)(n.state.checkarr),a=!1,o=0;if(console.log(t),console.log(e.target.value),!0===e.target.checked?(t.push(e.target.value),console.log(t)):!1===e.target.checked&&(t=t.filter((function(t){return t!==e.target.value})),console.log(t)),n.state.checkarr.length!==t.length)a=!0;else if(n.state.checkarr.length===t.length){for(var c=0;c<n.state.checkarr.length;c++)t[c]===n.state.checkarr[c]?o+=1:o-=1;a=o!==t.length}!0===a&&n.setState({checkarr:t})},n.state={value:"",status:!1,response:{},comment:!1,checkarr:[],checkBoxState:[]},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){console.log("component Did Update Parent")}},{key:"handleSubmit",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://www.omdbapi.com/?i=tt3896198&apikey=41425427&t=",n=this.state.value,console.log(a+n),e.next=6,fetch(a+n);case 6:return o=e.sent,e.next=9,o.json();case 9:c=e.sent,console.log(c.Response),"True"===c.Response?this.setState({status:!0,response:c,comment:!1}):"False"===c.Response&&this.setState({status:!1,comment:!0});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"heading"},o.a.createElement("h3",null,"Movie Search"))),o.a.createElement("div",{className:"form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"search_bar"},o.a.createElement("label",null,"Movie Name : "),o.a.createElement("input",{type:"text",className:"search",onChange:this.onType,value:this.state.value})),o.a.createElement("div",{className:"checkboxes"},o.a.createElement("input",{type:"checkbox",id:"Title",onChange:this.checkBox,name:"box1",value:"Title"}),o.a.createElement("label",{htmlFor:"Title"},"Title"),o.a.createElement("input",{type:"checkbox",id:"Year",onChange:this.checkBox,name:"box1",value:"Year"}),o.a.createElement("label",{htmlFor:"Year"},"Year"),o.a.createElement("input",{type:"checkbox",id:"Genre",onChange:this.checkBox,name:"box1",value:"Genre"}),o.a.createElement("label",{htmlFor:"Genre"},"Genre"),o.a.createElement("input",{type:"checkbox",id:"imdbRating",onChange:this.checkBox,name:"box1",value:"imdbRating"}),o.a.createElement("label",{htmlFor:"imdbRating"},"IMDB"),o.a.createElement("input",{type:"checkbox",id:"Actors",onChange:this.checkBox,name:"box1",value:"Actors"}),o.a.createElement("label",{htmlFor:"Actors"},"Actors"),o.a.createElement("input",{type:"checkbox",id:"Plot",onChange:this.checkBox,name:"box1",value:"Plot"}),o.a.createElement("label",{htmlFor:"Plot"},"Plot")),o.a.createElement("button",{type:"submit"},"Search"))),this.state.status?o.a.createElement(d,{featureArray:this.state.checkarr,movieDet:this.state.response}):"",this.state.comment?"Check the Name Once again !!! ":"")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.57987511.chunk.js.map