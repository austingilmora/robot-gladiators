var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
};

var getPlayerName = function() {
    var name = "";

    // MAKE A LOOP WITH PROMT AND CONDITION
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars");
            this.health += 20;
            this.money -=7;
        }else {
            window.alert("You don't have enough money!");
        }  
    },
    upgradeAttack: function() {
        if(this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
    }
};


console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    } 
];

var fightOrSkip = function() {
    //ask if the player would like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.")

        if (!promptFight) {
            window.alert("You need to provide a valid answer! Please try again.");
            return fightOrSkip();
        }

        promptFight = promptFight.toLowerCase();

        if (promptFight ==="skip") {
            // Ask if they really want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // If yes -> take away 10 from playerInfo.money
            if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
            }
        }else {
            return false;
        }
}



var fight = function(enemy) {
    
    var isPlayerTurn = true;


    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    while(playerInfo.health > 0 && enemy.health > 0) {

        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            }
            //Subtract the val of playerInfo.attack from enemy.health and use that result to update the value of enemy.health var
            
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            //Log a resulting message to the console so we know it worked
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health ramaining."
                );
            
            // Is the enemy still alive?
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                //award money
                playerInfo.money = playerInfo.money +20;
                break;
            } else {
                 window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        } else {
            //Subtract the value of enemy.attack from playerInfo.health and use that result to update the value of playerInfo.health var
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            //Log a resulting message to the console so we know it worked
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health ramaining."
            );
            // Is the player still alive?
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        isPlayerTurn = !isPlayerTurn;
    } 
};

//function to end game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }

    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money)
        localStorage.setItem("name", playerInfo.name);

        window.alert (playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }
    else {
        window.alert(playerInfo.name + "did not beat the high score of " + highScore + ". Maybe next time!");
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: '1' for REFILL, '2' for UPGRADE, or '3' for LEAVE to make a choice."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
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
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            //get new enemy
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy.health before fight
            pickedEnemyObj.health = randomNumber(40, 60);

            //use debugger to see what's going on
            //debugger;

            // bring new pickedEnemyObj into function
            fight(pickedEnemyObj);

            //if not the last enemy 
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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


