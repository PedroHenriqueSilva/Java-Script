let pessoa={
    nome: "Matheus",
    idade: 29,
    falar: function(){
        console.log('ola');
    },
    soma: function(a,b){
        return a + b;
    }

};

console.log(pessoa.idade);

pessoa.falar();

var soma = pessoa.soma(3,33);
console.log(soma);