var playerHealth = 0;

var healText = ``;

//Relative link back to this page
var page = "../riku-training/train.html";

function transform(){
    //Save health and xp after battle ends
    if (playerStats.bearclawcoin >= 10 && playerStats.species != "bear"){
        playerStats.bearclawcoin-=10;
        playerStats.species = "bear" ;
        playerStats.image = "../images/small-bear-avatar.png" ;
        playerStats.bearunlock = true;
    }
    

    //Store the updated data object in local storage, after turning the JSON to a string
    localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));

    playerSetup();
    setStats();
}