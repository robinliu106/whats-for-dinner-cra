(this["webpackJsonpwhats-for-dinner-cra"]=this["webpackJsonpwhats-for-dinner-cra"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(7),i=n.n(s),o=n(13),a=n(3),l=n(0),d=function(e){return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"header__title",children:e.title}),e.subTitle&&Object(l.jsx)("h2",{className:"header__subtitle",children:e.subTitle})]})})};d.defaultProps={title:"What's for dinner?"};var r=d,j=function(e){var t=Object(c.useState)(),n=Object(a.a)(t,2),s=n[0],i=n[1];return Object(l.jsxs)("div",{children:[s&&Object(l.jsx)("p",{className:"add-option-error",children:s}),Object(l.jsxs)("form",{className:"add-option",onSubmit:function(t){t.preventDefault();var n=t.target.elements.option.value.trim(),c=e.handleAddOption(n);i(c),c||(t.target.elements.option.value="")},children:[Object(l.jsx)("input",{className:"add-option__input",type:"text",name:"option"}),Object(l.jsx)("button",{className:"button",children:"Add Option"})]})]})},u=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"big-button",onClick:e.handlePick,disabled:!e.hasOptions,children:"What should I eat?"})})},O=function(e){return Object(l.jsxs)("div",{className:"option",children:[Object(l.jsxs)("p",{className:"option__text",children:[e.count," . ",e.optionText]}),Object(l.jsx)("button",{className:"button button--link",onClick:function(t){e.handleDeleteOption(e.optionText)},children:"Remove"})]})},b=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"widget-header",children:[Object(l.jsx)("h3",{className:"widget-header__title",children:"Your Options"}),Object(l.jsx)("button",{className:"button button--link",onClick:e.handleDeleteOptions,children:"Remove All"})]}),0===e.options.length&&Object(l.jsx)("p",{className:"widget__message",children:"Please add an option to get started"}),e.options.map((function(t,n){return Object(l.jsx)(O,{optionText:t,count:n+1,handleDeleteOption:e.handleDeleteOption},t)}))]})},h=n(12),p=n.n(h),m=function(e){return Object(l.jsxs)(p.a,{isOpen:!!e.selectedOption,contentLabel:"Selected Option",onRequestClose:e.handleClearSelectedOption,closeTimeoutMS:200,className:"modal",children:[e.selectedOption&&Object(l.jsx)("p",{className:"modal__body",children:e.selectedOption}),Object(l.jsx)("button",{className:"button",onClick:e.handleClearSelectedOption,children:"Okay"})]})},x=void 0,f=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(),d=Object(a.a)(i,2),O=d[0],h=d[1];return Object(c.useEffect)((function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&x.setState((function(){return{options:t}}))}catch(n){}}),[]),Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("options",e),console.log("saving data")}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)(r,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{hasOptions:n.length>0,handlePick:function(){var e=Math.floor(Math.random()*n.length),t=n[e];h(t)}}),Object(l.jsxs)("div",{className:"widget",children:[Object(l.jsx)(b,{options:n,handleDeleteOptions:function(){s([])},handleDeleteOption:function(e){s(n.filter((function(t){return e!==t})))}}),Object(l.jsx)(j,{handleAddOption:function(e){return e?n.indexOf(e)>-1?"This option already exists":void s([].concat(Object(o.a)(n),[e])):"Enter valid value to add item"}})]})]}),Object(l.jsx)(m,{selectedOption:O,handleClearSelectedOption:function(){h(null)}})]})};n(30),n(31);i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8e2cff3f.chunk.js.map