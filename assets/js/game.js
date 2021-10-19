var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}


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
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
            }
        }
        
        //Subtract the val of playerAttack from enemyHealth and use that result to update the value of enemyHealth var
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage)
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
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);

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
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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

var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "Refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.")

                //give health, take money
                playerMoney = playerMoney - 7;
                playerHealth = playerHealth + 20;
                
            }else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "Upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //give attack boost, take money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                
            }else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "Leave":
        case "LEAVE":
            window.alert("Leave the store.");
            
            //end the store function
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //bring them back to the top of the shop function
            shop();
            break;
    }
};

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
            enemyHealth = randomNumber(40, 60);

            //use debugger to see what's going on
            //debugger;

            // bring new pickedEnemyName into function
            fight(pickedEnemyName);

            //if not the last enemy 
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //do you want to shop?
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                //if yes, go to the shop
                if (storeConfirm) {
                    shop();
                }
            }
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