var alcool, gas;
var novo = 's';

for(i=0; novo == 's'; i++){
  alcool= prompt ("Digite o valor do litro do álcool: ");
  gas= prompt ("Digite o valor do litro da gasolina: ");
  var comb = alcool/gas;
    if(comb > 0.7){
    alert ("Vale a pena abastecer com gasolina.");
  }else if( comb <0.7){
    alert ("Vale a pena abastecer com álcool.");
  }else{
    alert ("Tanto faz abastecer com álcool ou gasolina.");
  }
  novo = prompt("Deseja realizar novo calculo? s/n");
  console.clear();
}
