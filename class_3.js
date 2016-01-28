
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

<<<<<<< HEAD
var playerOneScore = 0
var playerTwoScore = 0

function playRound(playerOne, playerTwo) {
 playerOne = playerOne.hands()
 playerTwo = playerTwo.hands()
  var winner = 0;
 if (playerOne = "Scissors" && playerTwo = "paper" ||
     playerOne = "Rock" && playerTwo = "Scissors" ||
     playerOne = "Paper" && playerTwo = "Rock"){
       winner = playerOne.name;
       playerOne.winner++;
      console.log("mariah played " + playerOne + "and minaj played" + playerTwo + "so the elusive chanteuse wins!");
     }
 else if (playerOne !== playerTwo){
       winner = playerTwo.name;
       playerTwo.winner++;
       "mariah played " + playerOne + "and minaj played" + playerTwo + "so the rap queen wins!");

     }
 else if (playerOne === playerTwo){
   console.log("It's a tie");
 }

 function playGame(playerOne, playerTwo, playUntil) {
  //  var gameWinner
   while (playerOne.winner < playUntil && playerTwo.winner < playUntil)
      playRound(playerOne, playerTwo)
        if playerOne === playUntil console.log(playerOne.name + " wins the whole enchilada")

        else if playerTwo === playUntil
        console.log("all friday's are pink from here on out, because" + playerTwo.name + wins it all)
   }
  //  var calculator = {
  //      add: function(a,b) {
  //          return a + b;
  //      }
  //  }
   //
  //  calculator.add(2,3) // 5
playGame(playerOne, playerTwo, 5)
 }
};


};
=======
function playRound() {
  console.log(playerOne.name, playerTwo)

};
