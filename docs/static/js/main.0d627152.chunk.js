(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=a(1),o=a(2),s=a(6),m=a(4),u=a.n(m),d=a(7),f=a(3),p=a.n(f),E="https://backendrokkettest.herokuapp.com",h=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=new Headers).append("Content-Type","application/x-www-form-urlencoded"),l={method:"POST",headers:r,body:t,redirect:"follow"},fetch("".concat(E,"/personaje"),l).then((function(e){return e.json()})).then(function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=9;break}return p.a.fire({icon:"success",title:"Listo",text:"Personaje '".concat(t.personajes.name,"' ingresado exitosamente "),showConfirmButton:!1,timer:2e3}),e.next=4,j(t.personajes._id,a);case 4:r=e.sent,t.personajes.image=r.nombreArchivoFinal,v(n,t.personajes,"insert"),e.next=10;break;case 9:p.a.fire({icon:"error",title:"Oops...",text:"Error al ingresar el personaje: ".concat(t.err.message)});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return p.a.fire({icon:"error",title:"Oops...",text:"Error al ingresar el personaje: ".concat(e)})}));case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.fire({title:"Seguro desea eliminar este personaje?",text:"El personaje se eliminara de forma permanente!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar!",denyButtonText:"Cancelar"}).then((function(e){e.isConfirmed&&fetch("".concat(E,"/personaje/").concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){e.ok?(p.a.fire({icon:"success",title:"Listo",text:"Personaje eliminado",showConfirmButton:!1,timer:2e3}),v(a,t,"delete")):p.a.fire({icon:"error",title:"Oops...",text:"Error al eliminar el personaje: ".concat(e.err.message)})})).catch((function(e){return p.a.fire({icon:"error",title:"Oops...",text:"Error al eliminar el personaje: ".concat(e)})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(e,t,a){e((function(e){var n;switch(a){case"insert":return n=[t].concat(Object(s.a)(e.data.personajes)),Object(i.a)(Object(i.a)({},e),{},{data:Object(i.a)(Object(i.a)({},e.data),{},{personajes:n})});case"delete":return n=Object(s.a)(e.data.personajes.filter((function(e){return e._id!==t}))),Object(i.a)(Object(i.a)({},e),{},{data:Object(i.a)(Object(i.a)({},e.data),{},{personajes:n})})}}))},j=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PUT",body:a,redirect:"follow"},e.next=3,fetch("".concat(E,"/upload/").concat(t),n);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(e){var t=Object(n.useRef)(!0),a=Object(n.useState)({data:null,loading:!0,error:null}),r=Object(o.a)(a,2),l=r[0],c=r[1];return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),Object(n.useEffect)((function(){return c({loading:!0,error:null,data:null}),fetch(e).then((function(e){return e.json()})).then((function(e){e.personajes&&e.personajes.reverse(),t.current&&c({loading:!1,error:null,data:e})})).catch((function(){c({data:null,loading:!1,error:"no se pudo cargar la info"})})),function(){}}),[e]),[l,c]},O=a(8),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],l=a[1],c=function(){l(e)},s=function(e){var t=e.target;l(Object(i.a)(Object(i.a)({},r),{},Object(O.a)({},t.name,t.value)))};return[r,s,c]},w=function(e){var t=e.name,a=void 0===t?"":t,n=e.description,l=void 0===n?"":n,c=e.handleDeleteItem;return r.a.createElement("div",{className:"col-sm-12 itemPoder"},r.a.createElement("div",{className:"row"},r.a.createElement("h6",{className:"col-sm-11"},a),r.a.createElement("svg",{onClick:function(){return c(a)},width:"1em",height:"1em",viewBox:"0 0 16 16",className:"col-sm-1 bi bi-trash-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"}))),r.a.createElement("p",null,l))},k=function(e){var t=e.title,a=void 0===t?"":t,n=e.Form,l=void 0===n?[]:n,c=e.itemsState,i=e.setitemsState,m=N(),u=Object(o.a)(m,3),d=u[0],f=u[1],E=u[2],h=function(e){return i((function(t){return t.filter((function(t){return t.name!==e}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,a),l&&l.map((function(e,t){switch(e.container){case"input":return r.a.createElement("div",{key:t.toString()+"i",className:"col-sm-12"},e.name,r.a.createElement("input",{type:"text",name:e.name,className:"inputForm",onChange:f,value:d[e.name]?d[e.name]:""}));case"textarea":return r.a.createElement("div",{key:t.toString()+"t",className:"col-sm-12"},e.name,r.a.createElement("textarea",{name:e.name,cols:"30",rows:"10",className:"inputForm",onChange:f,value:d[e.name]?d[e.name]:""}));case"select":return r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("select",{name:e.name,className:"inputForm",onChange:f},e.options.map((function(e,t){return r.a.createElement("option",{value:d[e.name]?d[e.name]:""})}))));default:return r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"No conocida"))}})),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("button",{onClick:function(e){return e.preventDefault(),d.name&&d.description?c.find((function(e){return e.name===d.name}))?(E(),p.a.fire({icon:"error",title:"Oops...",text:"Habilidad repetida"})):(E(),i((function(e){return[d].concat(Object(s.a)(e))}))):p.a.fire({icon:"error",title:"Oops...",text:"Por favor lleve el campo nombre y descripcion para agregar una habilidad"})},className:"btnAddSkill"},"Agregar habilidad")),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("hr",null),r.a.createElement("h5",null,"Lista ",a),r.a.createElement("hr",null),r.a.createElement("div",{className:"listPoderes"},c.length>0?c.map((function(e,t){return r.a.createElement(w,{key:t+"hab",name:e.name,description:e.description,handleDeleteItem:h})})):r.a.createElement("p",null,"sin habilidades")),r.a.createElement("br",null)))},x=(a(18),function(e){var t=e.setvista,a=e.vista.seleccion;return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){t((function(e){return{vista:!e.vista,seleccion:{}}}))},className:"btnDetalle"},"atras"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h5",null,"Personaje"),r.a.createElement("p",null,"Nombre: ",a.name),r.a.createElement("p",null,"raza: ",a.race.name),r.a.createElement("p",null,"habilidad raza: ",a.race.skills),r.a.createElement("img",{src:"".concat(E,"/imagen/")+a.image,className:"img-fluid",alt:"imgPersonaje"})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h5",null,"Habilidades"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"200px"}},"Habilidad"),r.a.createElement("th",null,"Descripcion"))),r.a.createElement("tbody",null,a.skills.map((function(e,t){return r.a.createElement("tr",{key:e.name.toString()+t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.description))})))))),r.a.createElement("br",null))}),S=function(e){var t=e._id,a=e.name,n=e.skills,l=e.image,c=e.race,i=e.handleDeletePersonaje,o=e.handleDetalle;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"".concat(E,"/imagen/").concat(l),className:"img-fluid",alt:"imgPersonaje"})),r.a.createElement("td",null,a),r.a.createElement("td",null,c.name),r.a.createElement("td",null,n.length),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return i(t)},className:"btnDelete"},"x")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return o(t)},className:"btnAddSkill"},"Ver")))},y=Object(n.memo)((function(e){var t=e.loading,a=e.data,l=e.error,c=e.setPersonajeState,i=Object(n.useState)({vista:!0,seleccion:{}}),s=Object(o.a)(i,2),m=s[0],u=s[1],d=function(e){b(e,c)},f=function(e){var t=a.personajes.find((function(t){return t._id===e}));u({vista:!1,seleccion:t})};return r.a.createElement("div",null,m.vista?r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"tr-img"},"Imagen"),r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Raza"),r.a.createElement("th",null,"Numero skills"),r.a.createElement("th",null,"Eliminar"),r.a.createElement("th",null,"Ver"))),r.a.createElement("tbody",null,t||l?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},"Cargando...")):0===a.personajes.length?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},"Sin personajes")):a.personajes.map((function(e){return r.a.createElement(S,Object.assign({},e,{key:e._id.toString(),handleDeletePersonaje:d,handleDetalle:f}))})))),r.a.createElement("br",null)):r.a.createElement(x,{setvista:u,vista:m}))})),C=function(){var e=g("".concat(E,"/raza")),t=Object(o.a)(e,1)[0],a=g("".concat(E,"/personaje")),l=Object(o.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)([]),u=Object(o.a)(m,2),d=u[0],f=u[1],b=Object(n.useState)({default:"https://vignette.wikia.nocookie.net/dragonball/images/3/35/Esfera_del_dragon_4_estrellas.png/revision/latest?cb=20140105064853&path-prefix=es"}),v=Object(o.a)(b,2),j=v[0],O=v[1],w=N({name:"",race:""}),x=Object(o.a)(w,3),S=x[0],C=x[1],D=x[2],P=S.name,F=S.race;return r.a.createElement("div",{className:"container container_app"},r.a.createElement("div",{className:"row base_container"},r.a.createElement("h3",null,"Ingrese personaje"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("hr",null),r.a.createElement("h5",null,"Datos personaje"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!j.file||""===j.file)return p.a.fire({icon:"error",title:"Oops...",text:"Debe de seleccionar una imagen"});var t=new URLSearchParams;t.append("name",P),t.append("race",F),t.append("skills",JSON.stringify(d)),t.append("image","I1");var a=new FormData;a.append("archivo",j.file,j.nameFile),h(t,a,s),O({default:j.default}),D(),f([]),document.querySelector("#fileInput").value=""}},"Nombre",r.a.createElement("input",{type:"text",name:"name",className:"inputForm",onChange:C,value:P,required:!0}),"Raza",r.a.createElement("select",{name:"race",className:"inputForm",onChange:C,value:F,required:!0},r.a.createElement("option",{value:"",disabled:!0}),t.loading||t.error?r.a.createElement("option",{value:"",disabled:!0},"Cargando.."):t.data.ok&&t.data.race.map((function(e){return r.a.createElement("option",{key:e._id.toString(),value:e._id},e.name)}))),r.a.createElement("div",{className:"row newSkillsContainer"},r.a.createElement(k,{title:"Habilidades",Form:[{name:"name",container:"input",type:"text"},{name:"description",container:"textarea",type:"text"}],items:[],itemsState:d,setitemsState:f})),r.a.createElement("button",{className:"btnSave"},"Guardar")),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("hr",null),r.a.createElement("h5",null,"Imagen"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"image",className:"form-control",onChange:function(e){var t=e.target.files[0],a=e.target.value;O(t?function(e){return Object(i.a)(Object(i.a)({},e),{},{file:t,nameFile:a})}:{default:j.default})},id:"fileInput",accept:"image/*"}),r.a.createElement("img",{src:j.file&&""!==j.file?URL.createObjectURL(j.file):j.default,className:"img-fluid",alt:"imgPersonaje"}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-sm-12 listaYDetalle"},r.a.createElement(y,Object.assign({},c,{setPersonajeState:s})))))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null))};c.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.0d627152.chunk.js.map