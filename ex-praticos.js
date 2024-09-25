// Classe
class Pessoa {
    function (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Objeto
let loja  = new Object();
loja.local = "casa";
loja.lucro = "24 reais";
loja.nome = "Michele";

// Atributo
let crianca = {
    nome: "Ingrid",
    idade: "7",
    briquedo: "boneca",
}


// Método
let numero = [1,2,3]

numero.push(4);

numero.push(5,6,7,);


//Herança
class Conta { constructor() { 
    this.saldo = 0; } 
    deposita(valor) { this.saldo += valor; } } 

class ContaPoupanca extends Conta { 
    atualiza(indice) { this.saldo += this.saldo * indice; } }


//Polimorfismo

class Animal {
    fazerBarulho() {
        console.log("Barulho genérico de animal");
    }
}

class Cachorro extends Animal {
    fazerBarulho() {
        console.log("Latido de cachorro");
    }
}

class Gato extends Animal {
    fazerBarulho() {
        console.log("Miado de gato");
    }
}

function fazerBarulhoDoAnimal(animal) {
    animal.fazerBarulho();
}

let cachorro = new Cachorro();
let gato = new Gato();

fazerBarulhoDoAnimal(cachorro); 
fazerBarulhoDoAnimal(gato); 