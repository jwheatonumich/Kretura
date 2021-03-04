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


let attack = playerStats.attack;
let defense = playerStats.defense;
let endurance = playerStats.endurance;

let initialAttack = playerStats.attack;
let initialDefense = playerStats.defense;
let initialEndurance = playerStats.endurance;

let remainingStats = playerStats.statpoints;
remainingStatsText.innerHTML = remainingStats;

function initiaizeStats(){
    attackText.innerHTML = attack;
    attackSlider.value = attack;
    defenseText.innerHTML = defense;
    defenseSlider.value = defense;
    enduranceText.innerHTML = endurance;
    enduranceSlider.value = endurance;
    remainingStatsText.innerHTML = playerStats.statpoints;
}

plusAttack.onclick = function() {
    if (remainingStats > 0){
        attack ++;
        attackText.innerHTML = attack;
        attackSlider.value = attack;
        remainingStats --;
    }else
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

minusAttack.onclick = function() {
    if(attack > initialAttack){
        attack --;
        attackText.innerHTML = attack;
        attackSlider.value = attack;
        remainingStats ++;
        remainingStatsText.innerHTML = remainingStats;
    }
};

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

minusDefense.onclick = function() {
    if(defense > initialDefense){
        defense --;
        defenseText.innerHTML = defense;
        defenseSlider.value = defense;
        remainingStats ++;
        remainingStatsText.innerHTML = remainingStats;
    }
};

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

minusEndurance.onclick = function() {
    if(endurance > initialEndurance){
        endurance --;
        enduranceText.innerHTML = endurance;
        enduranceSlider.value = endurance;
        remainingStats ++;
        remainingStatsText.innerHTML = remainingStats;
    }
};

attackSlider.oninput = function() {
    this.value = attack;
};

defenseSlider.oninput = function() {
    this.value = defense;
};

enduranceSlider.oninput = function() {
    this.value = endurance;
};

function healthCalc(){
    playerStats["maxhealth"] = 4 * playerStats["endurance"]
};

function finalizeStats(){
    if (remainingStats == 0){
        playerStats.attack = parseInt(attack);
        playerStats.defense = parseInt(defense);
        playerStats.endurance =parseInt(endurance);
        playerStats.maxhealth = 4 * playerStats.endurance;
        playerStats.health += 4 * (endurance - initialEndurance);
        playerStats.leafcoin = 3;
        playerStats.statpoints = remainingStats;
        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
        setMandatoryPage('roguelike/prebattle.html')
    } else if (remainingStats > 0){
        document.getElementById("game-text").innerHTML = "Please distribute all stats"
    } else{
        document.getElementById("game-text").innerHTML = "Not enough stats points"
    }
}

window.onload = initiaizeStats();