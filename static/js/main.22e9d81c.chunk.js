(this.webpackJsonptooltip=this.webpackJsonptooltip||[]).push([[0],{31:function(e,t,a){},37:function(e,t,a){e.exports=a(48)},42:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(5),i=a.n(l),r=(a(42),a(21)),c=a(22),s=a(23),p=a(28),u=a(27),m=(a(31),a(67)),h=a(68),b=a(12),d=Object(b.a)({tooltip:{color:"white",backgroundColor:" rgb(100, 99, 99)",fontSize:"16px"}})(m.a),v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.position;return o.a.createElement("div",{className:"App"},o.a.createElement(d,{title:"".concat(e," tooltip"),arrow:!0,className:"tooltip",placement:e},o.a.createElement(h.a,{variant:"contained",color:"secondary",className:"btn"},"I am a Button")))}}]),a}(o.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={position:"top"},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({position:e.target.value})}},{key:"render",value:function(){return o.a.createElement("form",{className:"App"},o.a.createElement("label",null,o.a.createElement("h3",null,"Tooltip Position:"),o.a.createElement("select",{className:"dropdown",value:this.state.position,onChange:this.handleChange},o.a.createElement("option",{value:"top"},"Top"),o.a.createElement("option",{value:"bottom"},"Bottom"),o.a.createElement("option",{value:"left"},"Left"),o.a.createElement("option",{value:"right"},"Right"))),o.a.createElement(v,{position:this.state.position}))}}]),a}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.22e9d81c.chunk.js.map