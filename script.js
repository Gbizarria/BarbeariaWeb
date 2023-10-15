const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };

 
  
  function buscaCortePorId(id){
    for(let i=0; i<barbearia.cortes.length; i++){
      const list= barbearia.cortes[i]
      if(id==list.id){
         return list
       }
    } 
   
       return 'Corte não encontrado'
  }
  

 
  
  function buscaBarbaPorId(id) {
    for(let i=0; i<barbearia.barbas.length; i++){
      const list= barbearia.barbas[i]
      if(id==list.id){
         return list
       }
    } 
        return 'Barba não encontrada'
  }
  
  
  function verificaStatusBarbearia() {
    if(barbearia.estaAberto==true){
      return'Estamos Abertos'
    }else
      return 'Estamos fechados'
    
  };

  
  
  
  function retornaTodosCortes() {
    console.log(barbearia.cortes)
  }
  
  function retornaTodasBarbas() {
    console.log(barbearia.barbas)
  }
 
  
  function criaPedido(nomeCliente, corteId, barbaId) {

    let corte=buscaCortePorId(corteId)
    let barba=buscaBarbaPorId(barbaId)
    let pedido={
      nome:nomeCliente,
      pedidoCorte:corte,
      pedidoCortePreco:buscaCortePorId(corteId).valor,
      pedidoBarba:barba,
      pedidoBarbaPreco:buscaBarbaPorId(barbaId).valor,
    }
    return pedido
  }
  
  
 



  
  function calculaTotal(pedido) {

    
    let soma= pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
    
     
    console.log(`Total à pagar:R$ ${parseFloat(soma).toFixed(2)} `)
  }
  
  calculaTotal(criaPedido('Gustavo',1,2))
  
  
  
  function atualizaPedido(lista, id, valor, tipo) {
    for(let i=0; i<lista.length; i++){
      const list=lista[i]
      if(id==list.id){

        list.valor=valor
        list.tipo=tipo
      }
    }
    
  };

  atualizaPedido(barbearia.cortes,4,35,'Degradê')

  console.log(barbearia.cortes)
    

  

  