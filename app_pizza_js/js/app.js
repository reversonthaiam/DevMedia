
//incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa")
for(let botao of botoesIncrementa){

  botao.addEventListener('click', incrementa)

function incrementa(){
  
  var item = botao.closest('.item');
  var input = item.querySelector('.quantidade')
  input.value++
  
  
  var preco = pegaPrecoItem(item)
  adicionaAoTotal(preco)

  
}

}




//decrementa

var botaoDecrementa = document.querySelectorAll(".btn-decrementa")

for(let botao of botaoDecrementa){
  
  botao.addEventListener('click', decrementa)

  function decrementa(){
    var item = botao.closest('.item');
    var input = item.querySelector('.quantidade')
  
  
    if(input.value > 0){
      input.value--
      var preco = pegaPrecoItem(item)
      adicionaAoTotal(-preco)
    }
  
  
  } 

}

var formPedido = document.forms.pedido
formPedido.addEventListener('submit', function(event){
  var contador = 0
  var inputs = formPedido.querySelectorAll("input.quantidade")
  for(let input of inputs){
    if(input.value > 0){
      contador++
    }
  }
  if(contador == 0){
    alert("Não tem pedidos para serem enviados")
    event.preventDefault()
  }
})




function pegaPrecoItem(item){
  var precoItem = item.querySelector('.preco-item')
  return Number(precoItem.textContent)
}

function adicionaAoTotal(valor){

  var elementoTotal = document.querySelector("#total")
  elementoTotal.textContent = valor + Number(elementoTotal.textContent)
}

