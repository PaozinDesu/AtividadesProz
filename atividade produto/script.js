const titulo = document.createElement('h1');
titulo.id = 'titulo'
titulo.innerText = "Titulo da pagina"

let carrinho = document.createElement('div');
const nomeProduto = document.createElement('h3')
const precoProduto = document.createElement('h4')
const descricaoProduto = document.createElement('p')
nomeProduto.innerText = "Nome Produto"
precoProduto.innerText = "R$49,99"
descricaoProduto.innerText = "melhor produto da região!!!"

const body = document.getElementsByTagName('body');
carrinho.appendChild(nomeProduto)
carrinho.appendChild(precoProduto)
carrinho.appendChild(descricaoProduto)

body[0].appendChild(titulo)
body[0].appendChild(carrinho)

titulo.innerHTML = `${titulo.innerText}`

