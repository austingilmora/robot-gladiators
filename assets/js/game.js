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


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName =enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
// fight();