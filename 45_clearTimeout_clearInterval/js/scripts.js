var x = 0;

var myTimer = setTimeout(function(){
    console.log("o x é: "+ x );
},1500);

x = 5;

if (x>0){
    clearTimeout(myTimer);
    console.log("o x passou de 0");
}

var myInterval = setInterval(function(){
    console.log("Imprimindo intervalo");

},500);

setTimeout(function(){
    console.log("Não precisa mais imprimir");
    clearInterval(myInterval);
},2500);