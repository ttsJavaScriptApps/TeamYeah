
var hands = ["rock", "paper", "scissors"];
  function getHand() {
    var myIndex = parseInt(Math.random()*10)%3;
    return hands[myIndex];
  };

var playerOne = {
    name: "mariah",
    getHand: getHand
  };

var playerTwo = {
  name: "minaj"
  getHand: getHand
};

function playRound() {
  console.log(playerOne.name, playerTwo)

};




outer();
