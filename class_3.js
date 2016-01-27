// var billAmount = 666;
// function gratuity(somethingelse){
// return somethingelse * .2
//
// }
//
// console.log(gratuity(billAmount))
//
// function totalWithGrat(amount) {
//   return gratuity() + amount;
//
//   console.log
// }
// var hands = ["rock", "paper", "scissors"];
//   function getHand() {
//     var myIndex = parseInt(Math.random()*10)%3;
//     return hands[myIndex];
//   };
//
// var playerOne = {
//     name: "mariah",
//     getHand: getHand
//   };
//
// var playerTwo = {
//   name: "minaj"
//   getHand: getHand
// };
//
// function playRound() {
//   console.log(playerOne.name, playerTwo)
//
// };


function outer(){
  var a = "what"
  var b = {"bucket"}

  console.log(outer())

  function inner (a,b) {
    var a = "why"
    var b = {"fuckit."}

  }

inner(a,b);
}

outer();
