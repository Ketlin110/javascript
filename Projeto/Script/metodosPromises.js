function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperarPromise(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') 
            reject('Cenario de erro');
            setTimeout(() => {
                resolve(msg.toUpperCase() + ' - Passei na Promise')
                return;
            }, tempo);
    });
}

const promises = [
    esperarPromise('Promise 1', 3000),
    esperarPromise('Promise 2', 5000),
    esperarPromise('Promise 3', 1000)
    //esperarPromise(1000, 1000),
];

Promise.race(promises)     //Race entrega o valor que foi resolvido primeiro
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
   

