// criando uma promise
function pegarTemperatura(){
   return new Promise(function(resolve,reject){
     console.log("pegando temperatura ...");

     setTimeout(function(){
       resolve('40 na sombra');
     }, 2000);
   })
}
// Usando a promise

// then para quando resolve for executado
 let temp = pegarTemperatura();
 temp.then(function(resultado){
    console.log("TEMPERATURA: "+resultado);
 });

 // cath caso gere algum erro
 temp.catch(function(error){
    console.log("Eita deu erro!");
 });
