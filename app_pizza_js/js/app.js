var input = document.getElementById("quantidade");
var botaoIncrementa = document.querySelector("#btn-incrementa")
var botaoDecrementa = document.querySelector("#btn-decrementa")

botaoIncrementa.addEventListener('click', incrementa)
botaoDecrementa.addEventListener('click', decrementa)




function incrementa(){
  input.value++
  var item = botaoIncrementa.closest('.item');
  
  var preco = pegaPrecoItem(item)
  adicionaAoTotal(preco)

  
}

function decrementa(){
  input.value--
  var item = botaoIncrementa.closest('.item');



}

function pegaPrecoItem(item){
  var precoItem = item.querySelector('.preco-item')
  return Number(precoItem.textContent)
}

function adicionaAoTotal(valor){

  var elementoTotal = document.querySelector("#total")
  elementoTotal.textContent = valor + Number(elementoTotal.textContent)
}

