(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),l=n.n(o),c=n(1),s=n.n(c),i=n(4),u=n(5),d=n(6),m=n(8),p=n(7);n(15),n(16);function f(){return fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()}))}n(17);var E=function(e){var t=e.todos,n=(e.selectedFilter,e.handleSelect);return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"filter"},"Filter",r.a.createElement("input",{type:"text",name:"filter"})),r.a.createElement("label",null,r.a.createElement("select",{onChange:function(e){return n(e.target.value)}},r.a.createElement("option",{value:"All"},"Choose a type"),r.a.createElement("option",{value:"Completed"},"Completed"),r.a.createElement("option",{value:"Not completed"},"Not completed")))),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{className:"TodoList__item TodoList__item--unchecked",key:e.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button"},"User\xa0#",e.userId))})))))},h=(n(18),function(){return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: 2")),r.a.createElement("h3",{className:"CurrentUser__name"},"Ervin Howell"),r.a.createElement("p",{className:"CurrentUser__email"},"Shanna@melissa.tv"),r.a.createElement("p",{className:"CurrentUser__phone"},"010-692-6593 x09125"))}),v=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todosFromServer:[],todos:[],selectedUserId:0,selectedFilter:"All"},e.componentDidMount=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,e.setState({todosFromServer:n.data.filter((function(e){return e.title&&e.id&&e.userId})),todos:n.data.filter((function(e){return e.title&&e.id&&e.userId}))});case 4:case"end":return t.stop()}}),t)}))),e.handleSelect=function(t){"Completed"===t?e.setState((function(e){return{todos:e.todosFromServer.filter((function(e){return e.completed}))}})):"Not completed"===t?e.setState((function(e){return{todos:e.todosFromServer.filter((function(e){return!e.completed}))}})):e.setState((function(e){return{todos:e.todosFromServer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,a=e.selectedFilter;return r.a.createElement("div",{className:"App"},console.log(this.state.todos),r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{todos:t,handleSelect:this.handleSelect,selectedFilter:a})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(h,{userId:n}):"No user selected")))}}]),n}(r.a.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1c617285.chunk.js.map