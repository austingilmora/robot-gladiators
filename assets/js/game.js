var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert the player the game has started
    window.alert("Welcome to Robot Gladiators!");
    //Subtract the val of playerAttack from enemyHealth and use that result to update the value of enemyHealth var
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health ramaining."
        );

    // Is the enemy still alive?
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of enemyAttack from playerHealth and use that result to update the value of playerHealth var
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health ramaining."
    )

    // Is the player still alive?
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();