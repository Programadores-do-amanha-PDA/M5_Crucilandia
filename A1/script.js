// 1. Criação de um array simples
//Crie um array chamado frutas com pelo menos 5 frutas diferentes.
//👉 Exiba todas elas no console usando um laço for.

let frutas = ['banana', 'manga', 'laranja', 'melão', 'morango', 'pera', 'melancia'];

for(let i = 0; i < frutas.length; i = i + 1){
  console.log(frutas[i] + " " + "a variável i passou por aqui")
}

// 2. Contagem de números pares
// Crie um array com os números de 1 a 20.
//  👉 Use um laço for para percorrer o array e exibir apenas os números pares.
let numeros = [];

for(let i = 1; i <= 20; i = i + 1){
  console.log(numeros.push(i));
}

// 3. Soma de elementos do array
// Dado o array const numeros = [10, 20, 30, 40, 50];
//  👉 Some todos os valores usando um laço de repetição e exiba o resultado.
const numeros_1 = [10, 20, 30, 40, 50];
let soma = 0;

//  soma = 10 + 20
// soma = 0
for(let i = 0; i < numeros_1.length; i++){
  soma = soma + numeros_1[i];
}
console.log("A soma dos valores" + soma)

// 4. Array de objetos (usuários)
// Crie um array chamado usuarios, onde cada elemento seja um objeto com as propriedades: nome e idade.
//  👉 Percorra o array e exiba uma frase do tipo:
//  "Fulano tem X anos" para cada usuário.
let usuarios = [{nome: "João Vitor", idade: 16}, {nome: "Tábata", idade: 28}, {nome: "Michelle", idade: 40}];

// usuarios.length = 2
for(let i = 0; i < usuarios.length; i = i + 1){
  console.log("O " + usuarios[i].nome + " " + usuarios[i].idade + "anos")
}

// 5. Filtrando com laço
// Dado o array de objetos:
// 👉 Exiba apenas os produtos com preço maior que 500 usando um laço for.

const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 100 },
  { nome: "Teclado", preco: 200 },
  { nome: "Monitor", preco: 900 }
];

for(let i = 0; i < produtos.length; i++){
  if(produtos[i].preco > 500){
    console.log(`${produtos[i].nome} - R$ ${produtos[i].preco}`);
  }
}


// 6. Encontrando um elemento
// Dado o array de objetos:
// const filmes = [
//   { titulo: "Vingadores", ano: 2012 },
//   { titulo: "Pantera Negra", ano: 2018 },
//   { titulo: "Homem-Aranha", ano: 2021 }
// ];

// 👉 Encontre e exiba o filme lançado em 2018.

// 7. Revisão estilo React (map)
// Crie um array de strings com nomes de alunos:
const alunos = ["Ana", "Carlos", "Maria", "João"];

const frases = alunos.map((aluno)=>{
  return `Aluno: ${aluno}`
})

console.log(frases)

// 👉 Percorra esse array com um .map() e gere uma lista de frases do tipo:
//  "Aluno: Ana", "Aluno: Carlos", etc.
//  (Esse exercício já conecta com a ideia de renderizar listas em React).

