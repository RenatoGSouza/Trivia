(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{111:function(e,t,a){e.exports=a(214)},120:function(e,t,a){},128:function(e,t){},130:function(e,t){},163:function(e,t){},164:function(e,t){},170:function(e,t){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),o=a.n(c),i=a(12),s=a(11),l=a(26),u=a(107),d=a(108),m=a(39);var p={playerGravatar:"",playerName:"",playerScore:0,assertions:0};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYER":return Object(m.a)({},e,{playerName:t.payload.name});case"GRAVATAR":return Object(m.a)({},e,{playerGravatar:t.payload.email});case"SCORE":return Object(m.a)({},e,{playerScore:t.payload.score});case"ASSERTIONS":return Object(m.a)({},e,{assertions:e.assertions+t.amount});default:return e}},f=Object(l.combineReducers)({playerReducer:b}),h=Object(l.createStore)(f,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),y=(a(120),a(27)),v=a(14),O=a.n(v),j=a(3),g=a(4),E=a(6),k=a(5),S=a(10),N=a(7);function C(){var e,t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 2:return e=a.sent,a.next=5,O.a.awrap(e.json());case 5:return t=a.sent,a.abrupt("return",t);case 7:case"end":return a.stop()}}))}function w(){var e,t,a,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O.a.awrap(C());case 2:return e=r.sent,t=e.token,r.next=6,O.a.awrap(fetch("https://opentdb.com/api.php?amount=10&category=15&token=".concat(t)));case 6:return a=r.sent,r.next=9,O.a.awrap(a.json());case 9:return n=r.sent,r.abrupt("return",n);case 11:case"end":return r.stop()}}))}var x=a(47),R=a.n(x),I=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.playerGravatar;return console.log(e),r.a.createElement("div",{className:"div-header"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(R()(e).toString()),alt:"Avatar do jogador","data-testid":"header-profile-picture",className:"header-profile-picture"}))}}]),t}(n.Component),q=Object(i.b)((function(e){return{playerGravatar:e.playerReducer.playerGravatar}}))(I),A=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.playerName,a=e.playerScore,n=e.playerAssertions;return r.a.createElement("div",{className:"div-header div-header-text"},r.a.createElement("h3",{"data-testid":"header-player-name",className:"header-player-name div-header-text"},t),r.a.createElement("p",null,"Sua pontua\xe7\xe3o \xe9:",r.a.createElement("span",{"data-testid":"header-score",className:"header-score div-header-text"},a)),r.a.createElement("p",{className:"header-assertions div-header-text"},"N\xfamero de acertos atual: ".concat(n)))}}]),t}(n.Component),B=Object(i.b)((function(e){return{playerName:e.playerReducer.playerName,playerImg:e.playerReducer.playerGravatar,playerScore:e.playerReducer.playerScore,playerAssertions:e.playerReducer.assertions}}))(A),P=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"div-header"},r.a.createElement(s.b,{to:"/Ranking"},r.a.createElement("button",{type:"button",className:"btn-header","data-testid":"btn-ranking"},"Ver Ranking")),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{type:"button",className:"btn-header","data-testid":"btn-go-home"},"Home")))}}]),t}(n.Component),J=(a(208),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(q,null),r.a.createElement(B,null),r.a.createElement(P,null))}}]),t}(n.Component)),G=(a(209),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"div-loading"},r.a.createElement("svg",{width:"200",height:"200",viewBox:"0 0 40 60"},r.a.createElement("polygon",{className:"triangle",fill:"none",stroke:"#fff",strokeWidth:"1",points:"16,1 32,32 1,32"}),r.a.createElement("text",{className:"loading",x:"0",y:"45",fill:"#fff"},"Loading...")))}}]),t}(n.Component)),T=(a(210),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.state,a=e.buttonEffect,n=t.perguntas,c=t.questao,o=t.disableButton,i=t.disableCorrectButton;return r.a.createElement("div",{className:"alternativas"},n[c].incorrect_answers.map((function(e,t){return r.a.createElement("button",{type:"button",className:"wrong-answer","data-testid":"wrong-answer-".concat(t),key:e,disabled:o,onClick:a},e)})),r.a.createElement("button",{type:"button",className:"correct-answer","data-testid":"correct-answer",key:n[c].correct,onClick:a,disabled:i},n[c].correct_answer))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.questao,a=e.perguntas;return r.a.createElement("div",null,r.a.createElement("p",{className:"question","data-testid":"question-category"},a[t].category),r.a.createElement("p",{className:"question","data-testid":"question-text"},a[t].question))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).timer=a.timer.bind(Object(S.a)(a)),a.fiveSeconds=a.fiveSeconds.bind(Object(S.a)(a)),a.timerCorrectAnswer=a.timerCorrectAnswer.bind(Object(S.a)(a)),a.nextPergunta=a.nextPergunta.bind(Object(S.a)(a)),a.updatePlayer=a.updatePlayer.bind(Object(S.a)(a)),a.state={perguntas:[],currentCount:30,fiveSecCount:5,disableButton:!1,disableCorrectButton:!1,questao:0,redirect:!1},a.api=a.api.bind(Object(S.a)(a)),a.buttonEffect=a.buttonEffect.bind(Object(S.a)(a)),a.startTime=a.startTime.bind(Object(S.a)(a)),a.adicionaPlacar=a.adicionaPlacar.bind(Object(S.a)(a)),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.api(),this.startTime(),localStorage.setItem("state",JSON.stringify({player:{score:0,assertions:0}})),(0,this.props.score)(0)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"startTime",value:function(){this.intervalId=setInterval(this.timer,1e3)}},{key:"fiveSeconds",value:function(){this.intervalId=setInterval(this.timerCorrectAnswer,1e3)}},{key:"timerCorrectAnswer",value:function(){var e=this.state.fiveSecCount;this.setState({fiveSecCount:e-1}),0===e&&(clearInterval(this.intervalId),this.setState({disableCorrectButton:!1}))}},{key:"timer",value:function(){var e=this.state.currentCount;(this.setState({currentCount:e-1}),e<=1)&&(clearInterval(this.intervalId),this.setState({disableButton:!0,disableCorrectButton:!0}),this.fiveSeconds(),document.querySelector(".correct-answer").style.border="3px solid rgb(6, 240, 15)",document.querySelector(".btn-next").style.display="block")}},{key:"api",value:function(){var e;return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(w());case 2:e=t.sent,this.setState({perguntas:e.results});case 4:case"end":return t.stop()}}),null,this)}},{key:"nextPergunta",value:function(){var e=this.state.questao;e<4?(this.setState({questao:e+1,currentCount:30,disableButton:!1,disableCorrectButton:!1}),this.startTime()):this.setState({redirect:!0}),document.querySelector(".correct-answer").style.border="none",document.querySelector(".btn-next").style.display="none"}},{key:"adicionaPlacar",value:function(e){var t=this,a=localStorage.getItem("state"),n=JSON.parse(a),r=this.state,c=r.currentCount,o=r.perguntas,i=this.props,s=i.playerScore,l=i.score,u=i.assertions;this.setState({disableButton:!0,disableCorrectButton:!0}),"correct-answer"===e.className&&o.forEach((function(e){if("easy"===e.difficulty){var a=n.player.score+(10+1*c);t.updatePlayer(a,u),l(s+(10+1*c))}if("medium"===e.difficulty){var r=n.player.score+(10+2*c);t.updatePlayer(r,u),l(s+(10+2*c))}if("hard"===e.difficulty){var o=n.player.score+(10+3*c);t.updatePlayer(o,u),l(s+(10+3*c))}}))}},{key:"updatePlayer",value:function(e,t){localStorage.setItem("state",JSON.stringify({player:{score:e,assertions:t+1}}))}},{key:"buttonEffect",value:function(e){var t=e.target,a=this.props.handleCorretAnswer,n=document.querySelectorAll(".wrong-answer"),r=document.querySelector(".correct-answer");if(document.querySelector(".btn-next").style.display="block",n.forEach((function(e){e.style.border="3px solid rgb(255, 0, 0)"})),r.style.border="3px solid rgb(6, 240, 15)",clearInterval(this.intervalId),this.adicionaPlacar(t),t===r)return a()}},{key:"buttonNext",value:function(){return r.a.createElement("button",{type:"button","data-testid":"btn-next",className:"btn-next",onClick:this.nextPergunta},"Pr\xf3xima")}},{key:"render",value:function(){var e=this.state,t=e.perguntas,a=e.questao,n=e.currentCount,c=e.disableButton,o=e.disableCorrectButton;return e.redirect?r.a.createElement(y.a,{to:"/feedback"}):0!==t.length?r.a.createElement("section",{className:"sectionPerguntas"},r.a.createElement(J,null),r.a.createElement("article",{className:"box-question"},r.a.createElement(M,{questao:a,perguntas:t}),r.a.createElement(T,{disableButton:c,disableCorrectButton:o,state:this.state,buttonEffect:this.buttonEffect}),r.a.createElement("p",{className:"question"},"Tempo restante: ".concat(n)),this.buttonNext())):r.a.createElement(G,null)}}]),t}(r.a.Component),W=Object(i.b)((function(e){return{playerScore:e.playerReducer.playerScore,assertions:e.playerReducer.assertions}}),(function(e){return{handleCorretAnswer:function(){return e({type:"ASSERTIONS",amount:1})},score:function(t){return e(function(e){return{type:"SCORE",payload:{score:e}}}(t))}}}))(F),L=(a(211),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.validateEmail;return r.a.createElement("div",{className:"div-login-input"},r.a.createElement("input",{placeholder:"NOME",className:"input-login",type:"text","data-testid":"input-player-name",id:"name"}),r.a.createElement("input",{placeholder:"EMAIL",className:"input-login",type:"text","data-testid":"input-gravatar-email",id:"email",onChange:function(t){var a=t.target.value;return e(a)}}))}}]),t}(n.Component)),V=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.clickBtnJogar,a=e.validForm,n=e.redirect;return r.a.createElement("div",{className:"div-login"},r.a.createElement("button",{className:"button-login",type:"button","data-testid":"btn-settings",onClick:function(){return n()}},"Configura\xe7\xf5es"),r.a.createElement(s.b,{to:"/jogar"},r.a.createElement("button",{className:"button-login",type:"submit","data-testid":"btn-play",disabled:a,onClick:t},"Jogar")))}}]),t}(n.Component),D=function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"img-login"},r.a.createElement("h1",{className:"h1-login"},"TRIVIA GAME"))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={validForm:!0,redirect:!1},a.validateEmail=a.validateEmail.bind(Object(S.a)(a)),a.redirect=a.redirect.bind(Object(S.a)(a)),a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"redirect",value:function(){this.setState({redirect:!0})}},{key:"validateEmail",value:function(e){var t=document.querySelector("#name").value,a=this.props,n=a.playerName,r=a.playerImg;n(t),r(e),/\S+@\S+\.\S+/.test(e)&&t.length>0&&this.setState({validForm:!1})}},{key:"clickBtnJogar",value:function(){var e,t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(C());case 2:e=a.sent,t=e.token,localStorage.setItem("token",t);case 5:case"end":return a.stop()}}))}},{key:"render",value:function(){var e=this.state,t=e.validForm;return e.redirect?r.a.createElement(y.a,{to:"/configs"}):r.a.createElement("div",{className:"div-login-img"},r.a.createElement("form",{className:"form-login"},r.a.createElement(L,{validateEmail:this.validateEmail}),r.a.createElement(V,{clickBtnJogar:this.clickBtnJogar,validForm:t,redirect:this.redirect}),r.a.createElement(D,null)))}}]),t}(r.a.Component),H=Object(i.b)(null,(function(e){return{playerName:function(t){return e(function(e){return{type:"PLAYER",payload:{name:e}}}(t))},playerImg:function(t){return e(function(e){return{type:"GRAVATAR",payload:{email:e}}}(t))}}}))(_),Y=function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("title",{"data-testid":"settings-title"},"Configura\xe7\xf5es"),r.a.createElement("h1",null,"cdjscksd"))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(E.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"renderRanking",value:function(){var e=JSON.parse(localStorage.getItem("ranking"))||[],t=e.sort((function(e,t){return e.playerScore>t.playerScore?-1:1}));return r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("ol",{key:t},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(R()(e.playerGravatar).toString()),alt:"Avatar do jogador"}),r.a.createElement("span",{"data-testid":"player-name-".concat(t)},e.playerName),r.a.createElement("span",{"data-testid":"player-score-".concat(t)},e.playerScore),r.a.createElement("span",null,e.assertions))})))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{"data-testid":"ranking-title"},this.renderRanking(),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{type:"button","data-testid":"btn-go-home"},"Home"))))}}]),t}(r.a.Component),$=Object(i.b)((function(e){return{playerGravatar:e.playerReducer.playerGravatar}}))(U),z=a(110),K=(a(212),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.player,t=JSON.parse(localStorage.getItem("ranking"))||[];localStorage.setItem("ranking",JSON.stringify([].concat(Object(z.a)(t),[e])))}},{key:"render",value:function(){var e=this.props,t=e.assertionsCorrect,a=e.playerScore;return r.a.createElement("div",{className:"div-feedback"},r.a.createElement(J,null),r.a.createElement("h1",{className:"feedback-text","data-testid":"feedback-text"},t>=3?"Mandou bem!":"Podia ser melhor..."),r.a.createElement("h2",{className:"feedback-text","data-testid":"feedback-total-score"},a),r.a.createElement("h2",{className:"feedback-text","data-testid":"feedback-total-question"},t),r.a.createElement(s.b,{to:"/","data-testid":"btn-play-again",className:"btn-play-again"},"Jogar novamente"))}}]),t}(r.a.Component)),Q=Object(i.b)((function(e){return{assertionsCorrect:Number(e.playerReducer.assertions),playerScore:e.playerReducer.playerScore,player:e.playerReducer}}))(K);a(213);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:h},r.a.createElement(s.a,null,r.a.createElement((function(){return r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",component:H}),r.a.createElement(y.b,{exact:!0,path:"/configs",component:Y}),r.a.createElement(y.b,{path:"/jogar",component:W}),r.a.createElement(y.b,{path:"/feedback",component:Q}),r.a.createElement(y.b,{path:"/Ranking",component:$}))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[111,1,2]]]);
//# sourceMappingURL=main.2e878115.chunk.js.map