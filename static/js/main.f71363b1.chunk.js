(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{129:function(t,e,s){},130:function(t,e,s){},207:function(t,e,s){},221:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s.n(n),a=s(22),c=s.n(a),r=(s(129),s(27)),h=s(28),o=s(31),l=s(30),u=s(225),j=(s(130),s(227)),d=s(229),b=s(85),f=s(9),O=s(114),m=s.n(O),x=s(6);function v(t,e,s,n){return Object(x.jsx)(j.a.Item,{icon:s,children:Object(x.jsxs)(b.b,{to:e,children:[" ",n]})},t)}var p,g,C,y,_,k,S=function(t){var e=Object(f.e)();return console.log(e),Object(x.jsxs)(j.a,{theme:"dark",mode:"inline",selectedKeys:[e.pathname],defaultOpenKeys:["demo-react"],children:[v("/","/",Object(x.jsx)(d.a,{}),"\u6b22\u8fce"),Object(x.jsx)(m.a,{icon:Object(x.jsx)(d.a,{}),title:"React Demos",children:v("/react-demo/chess","react-demo/chess",null,"\u4e0b\u68cb\u5c0f\u6e38\u620f")},"demo-react")]})},z=s(45),w=s(122),I=s(228),T=s(46),N=(s(207),function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={chessStatus:["_","_","_","_","_","_","_","_","_"],statusMsg:"\u8bf7\u5f00\u59cb\u6e38\u620f"},n.sz=3,n.animateTime=1e3,n.filled=0,n.ch=["X","O"],n.currentCh=0,n.gameStarted=!1,n.Item=T.a.div(p||(p=Object(z.a)(["\n        display: flex;\n        flex-direction: column;\n        width: 310px;\n        height: 380px;\n        text-align: center;\n        "]))),n.Row=T.a.span(g||(g=Object(z.a)(['\n        &:after{\n            clear: both;\n            content: "";\n            display: table-row;\n            margin: auto auto;\n        }\n        ']))),n.Panel=T.a.span(C||(C=Object(z.a)(["\n        display: table-row;\n        margin-top: 16px;\n        "]))),n}return Object(h.a)(s,[{key:"onChessClick",value:function(t){if(this.gameStarted){console.log("onChessClick",t);var e=this.state.chessStatus.slice();"_"===e[t]?(e[t]=this.ch[this.currentCh%2],this.filled++,console.log("filled",this.filled),this.setState({chessStatus:e}),this.validate(e,t)?(this.gameStarted=!1,this.setState({statusMsg:this.ch[this.currentCh%2]+"\u83b7\u80dc\uff01\uff01\uff01"})):this.filled==this.sz*this.sz?(this.gameStarted=!1,this.setState({statusMsg:"\u5e73\u5c40\uff01\uff01\uff01"})):this.setState({statusMsg:"\u8bf7"+this.ch[++this.currentCh%2]+"\u73a9\u5bb6\u4e0b\u68cb"})):alert("\u8fd9\u4e2a\u5730\u65b9\u5df2\u7ecf\u4e0b\u8fc7\u4e86")}else w.a.warning({message:"\u6e38\u620f\u8fd8\u672a\u5f00\u59cb\u5462",description:"\u8bf7\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\u5f00\u59cb\u6e38\u620f"})}},{key:"reset",value:function(){this.filled=0,this.currentCh=0}},{key:"validate",value:function(t,e){console.log(t,e);for(var s=Math.floor(e/this.sz),n=e%this.sz,i=t[e],a=0,c=0;c<this.sz;c++){t[this.calIndex(s,c)]===i&&a++}if(a===this.sz)return!0;a=0;for(var r=0;r<this.sz;r++){t[this.calIndex(r,n)]===i&&a++}if(a===this.sz)return!0;if(a=0,s+n==this.sz-1){for(var h=0;h<this.sz;h++){t[this.calIndex(this.sz-h-1,h)]===i&&a++}if(a===this.sz)return!0}if(a=0,s-n===0){for(var o=0;o<this.sz;o++){t[this.calIndex(o,o)]===i&&a++}if(a===this.sz)return!0}return!1}},{key:"calIndex",value:function(t,e){return t*this.sz+e}},{key:"renderChess",value:function(t){var e=this;return Object(x.jsx)(M,{onClick:function(){return e.onChessClick(t)},value:this.state.chessStatus[t]})}},{key:"startAnimate",value:function(){for(var t=this,e=this.animateTime/(this.sz*this.sz),s=function(s){for(var n=["_","_","_","_","_","_","_","_","_"],i="kingtous",a=0;a<=s;a++)n[a]=i[a%i.length];setTimeout((function(){t.setState({chessStatus:n})}),e*s)},n=0;n<this.sz*this.sz;n++)s(n);setTimeout((function(){t.setState({chessStatus:["_","_","_","_","_","_","_","_","_"]})}),this.animateTime)}},{key:"startGame",value:function(){var t=this,e=["_","_","_","_","_","_","_","_","_"];this.reset(),this.setState({statusMsg:"\u51c6\u5907\u5f00\u59cb\uff01"}),this.startAnimate(),setTimeout((function(){t.setState({chessStatus:e,statusMsg:"\u8bf7"+t.ch[t.currentCh]+"\u73a9\u5bb6\u4e0b\u68cb"}),t.gameStarted=!0}),this.animateTime)}},{key:"render",value:function(){var t=this;return Object(x.jsxs)(this.Item,{children:[Object(x.jsx)("div",{className:"status",children:this.state.statusMsg}),Object(x.jsxs)(this.Row,{children:[this.renderChess(0),this.renderChess(1),this.renderChess(2)]}),Object(x.jsxs)(this.Row,{children:[this.renderChess(3),this.renderChess(4),this.renderChess(5)]}),Object(x.jsxs)(this.Row,{children:[this.renderChess(6),this.renderChess(7),this.renderChess(8)]}),Object(x.jsx)(this.Panel,{children:Object(x.jsx)(I.a,{type:"primary",onClick:function(){return t.startGame()},children:"\u5f00\u59cb\u6e38\u620f"})})]})}}]),s}(n.Component)),M=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).Item=T.a.div(y||(y=Object(z.a)(["\n            border: 1px solid #999;\n            float: left;\n            font-size: 50px;\n            font-weight: bold;\n            line-height: 100px;\n            height: 100px;\n            margin-left: -1px;\n            margin-right: -1px;\n            margin-top: -1px;\n            padding: 0;\n            width: 100px;\n        "]))),n}return Object(h.a)(s,[{key:"render",value:function(){var t=this;return Object(x.jsx)(this.Item,{onClick:function(){return t.props.onClick()},children:this.props.value})}}]),s}(n.Component),F=s(226),R=s(224),A=(s(40),s(208),s(209),s(210),s(211),s(212),s(213),s(215),s(110),s(119)),K=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={text:t.value,mode:t.mode},n}return Object(h.a)(s,[{key:"render",value:function(){return Object(x.jsx)(A.UnControlled,{value:this.state.text,options:{mode:this.state.mode,theme:"monokai",lineNumbers:!0},onChange:function(t,e,s){}})}}]),s}(n.Component),L=s(120),P=s.n(L),D=F.a.Title,B=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).Column=T.a.div(_||(_=Object(z.a)(["\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n        "]))),n.Container=T.a.div(k||(k=Object(z.a)(["\n            width:100%;\n            display: flex;\n            justify-content: start;\n            flex-direction: column;\n        "]))),n}return Object(h.a)(s,[{key:"render",value:function(){var t=Object(x.jsxs)(this.Column,{className:"chess-game",children:[Object(x.jsx)(N,{className:"chess-game-board"}),Object(x.jsx)(R.a,{}),Object(x.jsx)(this.Container,{children:Object(x.jsx)(K,{mode:"javascript"})})]});return Object(x.jsxs)(this.Column,{className:"chess-game",children:[Object(x.jsx)(N,{className:"chess-game-board"}),Object(x.jsx)(R.a,{}),Object(x.jsxs)(this.Container,{children:[Object(x.jsx)(D,{level:2,children:"\u8c03\u7528\u793a\u4f8b"}),Object(x.jsx)(K,{mode:"javascript",value:P()(t)})]})]})}}]),s}(n.Component),G=(F.a.Title,function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){return Object(r.a)(this,s),e.call(this,t)}return Object(h.a)(s,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(f.c,{children:Object(x.jsx)(f.a,{path:"chess",element:Object(x.jsx)(B,{})})})})}}]),s}(n.Component)),J=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(x.jsx)("div",{children:"\u6b22\u8fce\u6765\u5230\u6211\u7684\u5c0f\u7ad9\uff0c\u70b9\u51fb\u5de6\u8fb9\u793a\u4f8b\u67e5\u770b\u6548\u679c\u5427"})}}]),s}(n.Component),E=function(){return Object(x.jsxs)(f.c,{children:[Object(x.jsx)(f.a,{path:"/",element:Object(x.jsx)(J,{})}),Object(x.jsx)(f.a,{path:"react-demo/*",element:Object(x.jsx)(G,{})})]})},H=u.a.Header,U=u.a.Content,X=u.a.Footer,q=u.a.Sider,Q=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={collapsed:!1},t.toggle=function(){t.setState({collapsed:!t.state.collapsed})},t}return Object(h.a)(s,[{key:"render",value:function(){return Object(x.jsx)(b.a,{children:Object(x.jsxs)(u.a,{children:[Object(x.jsxs)(q,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:[Object(x.jsx)("span",{style:{color:"white",marginLeft:"6px"},children:"Kintous\u7684Demo\u5c0f\u7ad9"}),Object(x.jsx)(S,{})]}),Object(x.jsxs)(u.a,{className:"site-layout",style:{marginLeft:200},children:[Object(x.jsx)(H,{className:"site-layout-background",style:{padding:0}}),Object(x.jsx)(U,{style:{margin:"24px 16px 0",overflow:"initial"},children:Object(x.jsx)("div",{className:"site-layout-background",style:{padding:24,width:"100%"},children:Object(x.jsx)(E,{})})}),Object(x.jsx)(X,{style:{textAlign:"center"},children:"Kingtous\u7684\u5b66\u4e60\u5c0f\u7ad9\uff08\u5b50\u7ad9\uff09"})]})]})})}}]),s}(i.a.Component),V=Q,W=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,230)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;s(t),n(t),i(t),a(t),c(t)}))};c.a.render(Object(x.jsx)(V,{}),document.getElementById("root")),W()}},[[221,1,2]]]);
//# sourceMappingURL=main.f71363b1.chunk.js.map