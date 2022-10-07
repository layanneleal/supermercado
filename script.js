function verPromocao() {
  //Cria referência aos elementos da página
  let inProduto = document.getElementById('inProduto')
  let inPreco = document.getElementById('inPreco')
  let outPromo = document.getElementById('outPromo')
  let outDesconto = document.getElementById('outDesconto')

  //Obtem conteúdos dos campos de entrada
  let produto = inProduto.value.toUpperCase()
  let preco = Number(inPreco.value)

  //Calcula o valor final e o desconto no terceiro produto
  let desconto = preco * 0.50
  let valorFinal = (preco * 3) - desconto

  //Altera o conteúdo da linha de resposta
  outPromo.textContent = produto + ' - Promoção: Leve 3 por R$: ' + preco
  outDesconto.textContent = 'O terceiro produto custa apenas R$: ' + desconto
}
//Cria referência ao elemento btVerPromocao (botão)
let btVerPromocao = document.getElementById('btVerPromocao')

//Registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener('click', verPromocao)