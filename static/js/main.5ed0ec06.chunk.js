(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"Filter_input__DPF-n",label:"Filter_label__232Nz"}},13:function(t,e,n){t.exports={button:"ContactItem_button__1Theg"}},19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(19),n(14)),s=n(5),u=n(6),l=n(8),b=n(7),m=n(2),d=n.n(m),h=n(12),j=n(3),f=n.n(j),p=n(0),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{className:f.a.input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),O=n(13),g=n.n(O),v=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{children:[a,": ",c,Object(p.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))};v.defaultProps={name:"",number:"",id:""};var x=v,S=function(t){var e=t.contacts,n=t.deleteContact;return Object(p.jsx)("ul",{children:Object(p.jsx)(x,{contacts:e,deleteContact:n})})},F=n(10),_=n.n(F),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n})]})},I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onFormSubmit=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a},r=t.state.contacts,o=r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),s=r.find((function(t){return t.number.toLowerCase()===a.toLowerCase()})),u=o&&"".concat(n)||s&&"".concat(a);o||s?alert("".concat(u," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.onFormSubmit}),Object(p.jsx)(y,{value:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(S,{contacts:t,deleteContact:this.onDeleteContact})]})}}]),n}(c.a.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),w()},3:function(t,e,n){t.exports={form:"ContactForm_form__3w8lq",input:"ContactForm_input__lJOW1",button:"ContactForm_button__2dtD0"}}},[[29,1,2]]]);
//# sourceMappingURL=main.5ed0ec06.chunk.js.map