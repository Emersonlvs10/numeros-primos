function Primos (inicial ,final){

    var ini=parseInt(inicial)
    var fim=parseInt(final)
    var index=0;
    var arr= [];

    while (index<fim-ini-1){
        arr [index] = ini + index+1;
     index +=1;

    }

var primos = [];

    var cont=0;

arr.forEach( function(valor,indice){
    var divisor=0;
   for(var n=2;n<=valor;n++){
       if(valor%n==0){
        divisor +=1;
       }
    }
 
    if(divisor==1){
        primos[cont]=valor;
        cont++;
    }
}

);

return primos;
 }

 