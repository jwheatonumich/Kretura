//Store data for the current level
function initialDataLoad() {
    currentLevel = playerStats["roguelike-level"];
    currentEnemy = enemySequence[playerStats["roguelike-level"]-1];
    enemyList = enemySequence[playerStats["roguelike-level"]].enemyList;
    enemyCount = enemySequence[playerStats["roguelike-level"]].enemyCount;
}

//Did player win or lose the battle?
let battleOutcome = localStorage.getItem('battleOutcome')


//Determine what shows-up in the text on page
function determinePageText(){
    let pageText = `Level: ${currentLevel}`;
    return pageText;
};

//Function to update the text of an element on the page
function updatePageText(text,ID){
    gameTextPara = document.getElementById(ID);
    gameTextPara.innerHTML = text;
};

function determineBattleResult(){
    let result;

    if (battleOutcome === "win"){
        result = "win";
        localStorage.setItem('battleOutcome',"");
    }else{
        result = "lose";
    }

    return result;
}

function determineLevel(){
    if (battleResult === "win" && 
    playerStats["roguelike-level"] < playerStats["roguelike-nextlevel"]){ //Prevent player from refreshing to increase stats/level
        playerStats.statpoints += currentEnemy.statReward;
        playerStats.leafcoin += currentEnemy.healReward;
        remainingStats = playerStats.statpoints;
        initializeStats();//Update stats on page

        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
        setStats()//Update stats on screen
    }
}

//Increment the level, used in the finalize stats button
function incrementLevel(){
    playerStats["roguelike-level"] ++;
}

window.onload = initialDataLoad();
let battleResult = determineBattleResult();
window.onload = determineLevel();
pageText = determinePageText(); //Store the value that will go in the primary text on page
window.onload = updatePageText(pageText,"game-text"); //On page load, update primary text on page