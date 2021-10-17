var nome = "Carlos Andrade";
var idade = 50;
var idade2 = 10;

//alert(nome + " tem "+idade+" anos");
//alert(idade+idade2);

console.log(idade + idade2)
var frase = "Japao melhor time do mundo";
console.log(frase.replace("Japao","Brasil"))
console.log(frase.toUpperCase())

var lista = ["maca", "pera", "laranja"];
console.log(lista[2])
lista.push("uva")
console.log(lista)
lista.pop()
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.reverse().toString())
console.log(lista.toString()[2])
console.log(lista.join("/"));
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta)

var idade3 = 18;

if (idade > 18) {
//    alert("Maior de idade");
    
}
else {
//    alert("menor de idade")
}

//var idade4 = prompt("Qual sua idade ?")

//if (idade>=18) {
 //   alert("Maior de idade");    
//}
//else {
//    alert("Menor de Idade")
//}

var count = 0;
while (count < 5) {
    console.log(count);
    //count =count+1;
    count++;
}

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log("elemento "+element)
}

var data = new Date();
console.log(data.getDate());
console.log(data.getMonth()+1);
console.log(data.getFullYear());

console.log("teste "+" teste 2 " + 1425+"-"+1519)
