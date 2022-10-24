var lista = ['laranja', 'pera', 'maca', 'uva', 'limao'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);
body[0].appendChild(listaUL);

var listaNoBoddy = document.getElementsByTagName('ul');

console.log(listaNoBoddy[0]);

for(var i = 0; i < lista.length;i++){

   // console.log(lista[i]);

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBoddy[0].appendChild(liFor);
}