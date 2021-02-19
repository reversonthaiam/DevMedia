var input = document.getElementById("quantidade");
var botaoIncrementa = document.querySelector("#btn-incrementa")
var botaoDecrementa = document.querySelector("#btn-decrementa")

botaoIncrementa.addEventListener('click', incrementa)
botaoDecrementa.addEventListener('click', decrementa)




function incrementa(){
  
  var item = botaoIncrementa.closest('.item');
  var input = item.querySelector('.quantidade')
  input.value++
  
  
  var preco = pegaPrecoItem(item)
  adicionaAoTotal(preco)

  
}

function decrementa(){
  var item = botaoIncrementa.closest('.item');
  var input = item.querySelector('.quantidade')


  if(input.value > 0){
    input.value--
    var preco = pegaPrecoItem(item)
    adicionaAoTotal(-preco)
  }


  



}

function pegaPrecoItem(item){
  var precoItem = item.querySelector('.preco-item')
  return Number(precoItem.textContent)
}

function adicionaAoTotal(valor){

  var elementoTotal = document.querySelector("#total")
  elementoTotal.textContent = valor + Number(elementoTotal.textContent)
}

