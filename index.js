// code your solution here;
function saturdayFun(specified= "roller-skate") {

 return `This Saturday, I want to ${specified}!`;
}
console.log(saturdayFun())
console.log(saturdayFun(`bath my dog`));

function mondayWork(defaultActivity ="go to the office") {

    return `This Monday, I will ${defaultActivity}.`;

}
function wrapAdjective(String="*") {

   return function(adj="special"){
     return `You are ${String}${adj}${String}!`;
   }
}
console.log(wrapAdjective("%")("a dedicated programmer"))
