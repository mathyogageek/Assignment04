// Function - Prompt a user choice
function promptUserChoice(){
    return prompt("Rock, Paper, Scissors" );
}

// Function - Computer Choice
function computerChoice(){
   let randomNumber = Math.random();
   if (randomNumber <= 0.33){
       return "Scissors";
  } else if (randomNumber <= 0.66){
       return "Paper";
  } else {
       return "Rock";
  }
}

// Function - Decide a winner
function DecideWinner(userChoice, computerChoice){
   if (userChoice == computerChoice){
       return "A Tie!";
   } else if (
    (userChoice == "Scissors" && computerChoice == "Paper")||
    (userChoice == "Paper" && computerChoice == "Rock")||
    (userChoice == "Rock" && computerChoice == "Scissors")
    ) {
     return "You are Winner!"
    } else {
        return "Compter is Winner!"
    }
   }

   // Function - Display the Result
   function displayResult(result){
      console.log(result);
      alert(result);
   }

   let userChoice = promptUserChoice();

   let computerChoiceValue = computerChoice();

   let result = DecideWinner(userChoice, computerChoice);

   displayResult(result);