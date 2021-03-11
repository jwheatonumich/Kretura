//Load player data into a variable from local storage
var retrievedObject = localStorage.getItem('storedPlayerStats');
var playerStats = JSON.parse(retrievedObject)

//Function that sets text on the website equal to various stat variables
function setStats() {
    
    document.getElementById("acorn-coin").innerHTML = playerStats["acorncoin"];
    document.getElementById("mushroom-coin").innerHTML = playerStats["mushroomcoin"];
    document.getElementById("bearclaw-coin").innerHTML = playerStats["bearclawcoin"];
    document.getElementById("leaf-coin").innerHTML = playerStats["leafcoin"];
}

//Load current player stats when the page loads
window.onload = setStats();

//Load elements by ID
var attackSlider = document.getElementById("attackInput");
var defenseSlider = document.getElementById("defenseInput");
var enduranceSlider = document.getElementById("enduranceInput");

var plusAttack = document.getElementById("plusAttack");
var minusAttack = document.getElementById("minusAttack");
var plusDefense = document.getElementById("plusDefense");
var minusDefense = document.getElementById("minusDefense");
var plusEndurance = document.getElementById("plusEndurance");
var minusEndurance = document.getElementById("minusEndurance");

var attackText = document.getElementById("attackOutput");
var defenseText = document.getElementById("defenseOutput");
var enduranceText = document.getElementById("enduranceOutput");
var remainingStatsText = document.getElementById("remainingStats");

//Define variables for stats
let attack = playerStats.attack;
let defense = playerStats.defense;
let endurance = playerStats.endurance;

//Define variables for the stats before changing
let initialAttack = playerStats.attack;
let initialDefense = playerStats.defense;
let initialEndurance = playerStats.endurance;

//Define variable for remaining stat points and display on page
let remainingStats = playerStats.statpoints;
remainingStatsText.innerHTML = remainingStats;

//Display stats on page
function initializeStats(){
    attackText.innerHTML = attack;
    attackSlider.value = attack;
    defenseText.innerHTML = defense;
    defenseSlider.value = defense;
    enduranceText.innerHTML = endurance;
    enduranceSlider.value = endurance;
    remainingStatsText.innerHTML = playerStats.statpoints;
}

//Increase attack
plusAttack.onclick = function() {
    if (remainingStats > 0){
        attack ++;
        attackText.innerHTML = attack;
        attackSlider.value = attack;
        remainingStats --;
    }else //Code to decrease another stat bar if no remaining stat points
        if(remainingStats === 0){
            if(defense > initialDefense){
                attack ++;
                attackText.innerHTML = attack;
                attackSlider.value = attack;
                defense --;
                defenseText.innerHTML = defense;
                defenseSlider.value = defense;
            }else if(endurance > initialEndurance){
                attack ++;
                attackText.innerHTML = attack;
                attackSlider.value = attack;
                endurance --;
                enduranceText.innerHTML = endurance;
                enduranceSlider.value = endurance;
            }
        }
        remainingStatsText.innerHTML = remainingStats;
};

//Decrease attack
minusAttack.onclick = function() {
    if(attack > initialAttack){
        attack --;
        attackText.innerHTML = attack;
        attackSlider.value = attack;
        remainingStats ++;
        remainingStatsText.innerHTML = remainingStats;
    }
};

//Increase defense
plusDefense.onclick = function() {
    if (remainingStats > 0){
        defense ++;
        defenseText.innerHTML = defense;
        defenseSlider.value = defense;
        remainingStats --;
    }else
        if(remainingStats === 0){
            if(attack > initialAttack){
                defense ++;
                defenseText.innerHTML = defense;
                defenseSlider.value = defense;
                attack --;
                attackText.innerHTML = attack;
                attackSlider.value = attack;
            }else if(endurance > initialEndurance){
                defense ++;
                defenseText.innerHTML = defense;
                defenseSlider.value = defense;
                endurance --;
                enduranceText.innerHTML = endurance;
                enduranceSlider.value = endurance;
            }
        }
        remainingStatsText.innerHTML = remainingStats;
};

//Decrease defense
minusDefense.onclick = function() {
    if(defense > initialDefense){
        defense --;
        defenseText.innerHTML = defense;
        defenseSlider.value = defense;
        remainingStats ++;
        remainingStatsText.innerHTML = remainingStats;
    }
};

//Increase endurance
plusEndurance.onclick = function() {
    if (remainingStats > 0){
        endurance ++;
        enduranceText.innerHTML = endurance;
        enduranceSlider.value = endurance;
        remainingStats --;
    }else
        if(remainingStats === 0){
            if(attack > initialAttack){
                endurance ++;
                enduranceText.innerHTML = endurance;
                enduranceSlider.value = endurance;
                attack --;
                attackText.innerHTML = attack;
                attackSlider.value = attack;
            }else if(defense > initialDefense){
                endurance ++;
                enduranceText.innerHTML = endurance;
                enduranceSlider.value = endurance;
                defense --;
                defenseText.innerHTML = defense;
                defenseSlider.value = defense;
            }
        }
        remainingStatsText.innerHTML = remainingStats;
};

//Decrease endurance
minusEndurance.onclick = function() {
    if(endurance > initialEndurance){
        endurance --;
        enduranceText.innerHTML = endurance;
        enduranceSlider.value = endurance;
        remainingStats ++;
        remainingStatsText.innerHTML = remainingStats;
    }
};

//Set slider values to matching variables
attackSlider.oninput = function() {
    this.value = attack;
};

defenseSlider.oninput = function() {
    this.value = defense;
};

enduranceSlider.oninput = function() {
    this.value = endurance;
};

//Calculate health as 4x endurance
function healthCalc(){
    playerStats["maxhealth"] = 4 * playerStats["endurance"]
};

//Load updated stats into local storage
function finalizeStats(){
    if (remainingStats == 0){
        playerStats.attack = parseInt(attack);
        playerStats.defense = parseInt(defense);
        playerStats.endurance =parseInt(endurance);
        playerStats.maxhealth = 4 * playerStats.endurance;
        playerStats.health += 4 * (endurance - initialEndurance); //If endurance was increased, also add 4x to health
        playerStats.statpoints = remainingStats;
        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));

    } else if (remainingStats > 0){
        document.getElementById("game-text").innerHTML = "Please distribute all stats"
    } else{
        document.getElementById("game-text").innerHTML = "Not enough stats points"
    }
}

function nextPage(){
    if (remainingStats == 0){
        setMandatoryPage('roguelike/prebattle/prebattle.html')
    }
}

window.onload = initializeStats();