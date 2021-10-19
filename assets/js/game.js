var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;




for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");
}

var fight = function(enemyName) {
    //alert the player the game has started
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.")
        
        if (promptFight ==="skip" || promptFight === "SKIP") {
            // Ask if they really want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // If yes -> take away 10 from playerMoney
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
        }
        
        //Subtract the val of playerAttack from enemyHealth and use that result to update the value of enemyHealth var
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health ramaining."
            );
    
        // Is the enemy still alive?
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award money
            playerMoney = playerMoney +20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of enemyAttack from playerHealth and use that result to update the value of playerHealth var
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health ramaining."
        );
        // Is the player still alive?
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};

//function to end game
var endGame = function() {
    //if the player is alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
    }else {
        window.alert("You've lost your robot in battle.");
    }
    //would they like to play again?
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

//function to start new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            //get new enemy
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before fight
            enemyHealth = 50;

            //use debugger to see what's going on
            //debugger;

            // bring new pickedEnemyName into function
            fight(pickedEnemyName);
        }else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    endGame()
};

//start the game when the page loads
startGame();


// fight();