//Store data for the current level
let currentLevel = playerStats["roguelike-level"];
let enemyList = enemySequence[playerStats["roguelike-level"]].enemyList;
let enemyCount = enemySequence[playerStats["roguelike-level"]].enemyCount;


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

    if (playerStats.health > 0){
        result = "win";
    }else{
        result = "lose";
    }

    return result;
}

function determineLevel(){
    if (battleResult === "win" && 
    playerStats["roguelike-level"] < playerStats["roguelike-nextlevel"]){ //Prevent player from refreshing to increase stats/level
        playerStats["roguelike-level"] ++;
        playerStats.statpoints ++;
        remainingStats = playerStats.statpoints;
        initializeStats();//Update stats on page

        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
    }
}

let battleResult = determineBattleResult();
window.onload = determineLevel();
pageText = determinePageText(); //Store the value that will go in the primary text on page
window.onload = updatePageText(pageText,"game-text"); //On page load, update primary text on page