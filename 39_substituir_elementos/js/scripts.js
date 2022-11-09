//criei o elemento
var el = document.createElement("h3");
//adicionar uma classe ao elemento


el.classList = "testando-classe";

//addiconar texto ao elemento
var texto = document.createTextNode("Este é o texto");
el.append(texto);

console.log(el);

//selecionar o h1
var title = document.querySelector("#title");

console.log(title);

//selecionar o pai do elemento
var pai = title.parentNode;

//troca os elementos
pai.replaceChild(el, title);



