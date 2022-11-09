var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");
btn.setAttribute("style", "background-color:black;");

var lista = document.querySelector("#lista");

lista.removeAttribute("id");