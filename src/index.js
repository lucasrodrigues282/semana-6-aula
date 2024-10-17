console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];


// Função para adicionar produtos ao carrinho
function adicionarProduto() {
  const nomeProduto = prompt('Digite o nome do produto:');
  const precoProduto = parseFloat(prompt('Digite o preço do produto:'));
  const quantidadeProduto = parseInt(prompt('Digite a quantidade do produto:'));

  // Verificar se o produto existe
  const produtoExistente = produtosDisponiveis.find(prod => prod.nome.toLowerCase() === nomeProduto.toLowerCase());

  if (produtoExistente) {
    const subtotal = precoProduto * quantidadeProduto;
    carrinho.push({ nome: produtoExistente.nome, preco: precoProduto, quantidade: quantidadeProduto, subtotal: subtotal });

    alert(`Subtotal de ${produtoExistente.nome}: R$ ${subtotal.toFixed(2)}`);
  } else {
    alert('Produto não encontrado!');
  }
}

// Função para calcular o total da compra
function calcularTotal() {
  const total = carrinho.reduce((acc, item) => acc + item.subtotal, 0);
  alert(`Total da compra: R$ ${total.toFixed(2)}`);
}

// Loop para adicionar produtos ao carrinho
while (true) {
  adicionarProduto();
  const continuar = prompt('Deseja adicionar outro produto? (s/n)');
  if (continuar.toLowerCase() !== 's') {
    break;
  }
}

// Calcular e exibir o total
calcularTotal();