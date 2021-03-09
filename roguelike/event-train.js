//Max stats for this trainer
var maxAcornStats = 25

//function to set player stats based on the button clicked
function acornTraining(stat){
    if (playerStats["acorncoin"] >= 3 &&  playerStats[stat] < maxAcornStats){
        playerStats[stat] +=1;
        playerStats["acorncoin"] -=3;
        healthCalc();
        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
        playerSetup();
        setStats();
    } 
}

//Max stats for this trainer
var maxMushroomStats = 40

//function to set player stats based on the button clicked
function mushroomTraining(stat){
    if (playerStats["mushroomcoin"] >= 2 &&  playerStats[stat] < maxMushroomStats){
        playerStats[stat] +=1;
        playerStats["mushroomcoin"] -=2;
        healthCalc();
        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
        playerSetup();
        setStats();
    } 
}

//Max stats for this trainer
var maxBearclawStats = 100

//function to set player stats based on the button clicked
function bearclawTraining(stat){
    if (playerStats["bearclawcoin"] >= 1 &&  playerStats[stat] < maxBearclawStats){
        playerStats[stat] +=1;
        playerStats["bearclawcoin"] -=1;
        healthCalc();
        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
        playerSetup();
        setStats();
    } 
}

//Function to calculate max health from endurance
function healthCalc(){
    playerStats["maxhealth"] = 4 * playerStats["endurance"]
};