var teste = 5;

console.log(this);
console.log(this.teste);
let pessoa={
    nome: "Matheus",
    idade: 29,
    falar: function(){
        console.log('ola');
    },
     dizerNome: function(){
        console.log("o meu nome é:" + this.nome);
    }

};

pessoa.dizerNome();

console.log(this);